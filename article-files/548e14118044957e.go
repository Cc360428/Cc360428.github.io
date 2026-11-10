package main

import (
	"bytes"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/gin-gonic/gin"
	_ "modernc.org/sqlite"
)

type app struct{ db *sql.DB }
type task struct {
	ID        int64  `json:"id"`
	Title     string `json:"title"`
	Category  string `json:"category"`
	Status    string `json:"status"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}

func openApp(file string) (*app, error) {
	db, err := sql.Open("sqlite", file+"?_pragma=foreign_keys(1)&_pragma=busy_timeout(5000)")
	if err != nil {
		return nil, err
	}
	// 一个连接让本机示例的事务和 PRAGMA 行为易于理解。
	db.SetMaxOpenConns(1)
	_, err = db.Exec(`
 CREATE TABLE IF NOT EXISTS tasks (
 id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, category TEXT NOT NULL,
 status TEXT NOT NULL CHECK(status IN ('todo','doing','done')), created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS records (
 id INTEGER PRIMARY KEY AUTOINCREMENT, task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
 content TEXT NOT NULL, created_at TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS changes (
 id INTEGER PRIMARY KEY AUTOINCREMENT, task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
 from_status TEXT NOT NULL, to_status TEXT NOT NULL, created_at TEXT NOT NULL);
 CREATE INDEX IF NOT EXISTS records_task ON records(task_id,id);
 CREATE INDEX IF NOT EXISTS changes_task ON changes(task_id,id);`)
	if err != nil {
		db.Close()
		return nil, err
	}
	return &app{db: db}, nil
}

func failure(c *gin.Context, status int, code, message string) {
	c.AbortWithStatusJSON(status, gin.H{"error": gin.H{"code": code, "message": message}})
}
func internal(c *gin.Context, err error) {
	log.Printf("database: %v", err)
	failure(c, 500, "internal_error", "持久化失败，请检查服务日志")
}
func validText(value string, max int) bool {
	return value != "" && utf8.RuneCountInString(value) <= max
}
func validStatus(value string) bool { return value == "todo" || value == "doing" || value == "done" }
func decode(c *gin.Context, target any) bool {
	body, err := io.ReadAll(http.MaxBytesReader(c.Writer, c.Request.Body, 1<<20))
	var fields map[string]json.RawMessage
	if err != nil || json.Unmarshal(body, &fields) != nil || fields == nil {
		failure(c, 400, "invalid_input", "请求必须是 JSON 对象，最大 1 MiB")
		return false
	}
	for _, value := range fields {
		if bytes.Equal(bytes.TrimSpace(value), []byte("null")) {
			failure(c, 400, "invalid_input", "字段不能为 null")
			return false
		}
	}
	decoder := json.NewDecoder(bytes.NewReader(body))
	decoder.DisallowUnknownFields()
	if err := decoder.Decode(target); err != nil {
		failure(c, 400, "invalid_input", "字段类型错误或存在未知字段")
		return false
	}
	return true
}
func taskID(c *gin.Context) (int64, bool) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil || id < 1 {
		failure(c, 400, "invalid_id", "任务 ID 必须为正整数")
		return 0, false
	}
	return id, true
}

type scanner interface{ Scan(...any) error }

func scanTask(row scanner) (task, error) {
	var value task
	err := row.Scan(&value.ID, &value.Title, &value.Category, &value.Status, &value.CreatedAt, &value.UpdatedAt)
	return value, err
}
func (a *app) get(c *gin.Context, id int64) (task, bool) {
	value, err := scanTask(a.db.QueryRowContext(c.Request.Context(), "SELECT id,title,category,status,created_at,updated_at FROM tasks WHERE id=?", id))
	if errors.Is(err, sql.ErrNoRows) {
		failure(c, 404, "not_found", "任务不存在")
		return value, false
	}
	if err != nil {
		internal(c, err)
		return value, false
	}
	return value, true
}
func (a *app) router() http.Handler {
	r := gin.New()
	r.Use(gin.Logger(), gin.CustomRecovery(func(c *gin.Context, recovered any) {
		log.Printf("panic: %v", recovered)
		failure(c, 500, "internal_error", "服务内部错误")
	}))
	r.HandleMethodNotAllowed = true
	r.NoRoute(func(c *gin.Context) { failure(c, 404, "not_found", "接口不存在") })
	r.NoMethod(func(c *gin.Context) { failure(c, 405, "method_not_allowed", "请求方法不支持") })
	r.POST("/tasks", a.create)
	r.GET("/tasks", a.list)
	r.GET("/tasks/:id", func(c *gin.Context) {
		id, ok := taskID(c)
		if !ok {
			return
		}
		value, ok := a.get(c, id)
		if ok {
			c.JSON(200, value)
		}
	})
	r.PATCH("/tasks/:id", a.update)
	r.DELETE("/tasks/:id", a.remove)
	r.PUT("/tasks/:id/status", a.status)
	r.POST("/tasks/:id/records", a.record)
	r.GET("/tasks/:id/records", func(c *gin.Context) { a.history(c, false) })
	r.GET("/tasks/:id/changes", func(c *gin.Context) { a.history(c, true) })
	return r
}
func (a *app) create(c *gin.Context) {
	var input struct {
		Title    string `json:"title"`
		Category string `json:"category"`
	}
	if !decode(c, &input) {
		return
	}
	input.Title = strings.TrimSpace(input.Title)
	input.Category = strings.TrimSpace(input.Category)
	if !validText(input.Title, 120) || utf8.RuneCountInString(input.Category) > 40 {
		failure(c, 400, "invalid_input", "标题需 1–120 字符，分类最多 40 字符")
		return
	}
	now := time.Now().UTC().Format(time.RFC3339Nano)
	result, err := a.db.ExecContext(c.Request.Context(), "INSERT INTO tasks(title,category,status,created_at,updated_at) VALUES(?,?,'todo',?,?)", input.Title, input.Category, now, now)
	if err != nil {
		internal(c, err)
		return
	}
	id, err := result.LastInsertId()
	if err != nil {
		internal(c, err)
		return
	}
	c.Header("Location", fmt.Sprintf("/tasks/%d", id))
	c.JSON(201, task{id, input.Title, input.Category, "todo", now, now})
}
func (a *app) list(c *gin.Context) {
	page, err := strconv.Atoi(c.DefaultQuery("page", "1"))
	size, sizeErr := strconv.Atoi(c.DefaultQuery("page_size", "20"))
	if err != nil || sizeErr != nil || page < 1 || size < 1 || size > 100 || page > int(^uint(0)>>1)/size {
		failure(c, 400, "invalid_pagination", "page 需为正整数，page_size 为 1–100")
		return
	}
	status := c.Query("status")
	if status != "" && !validStatus(status) {
		failure(c, 400, "invalid_status", "状态无效")
		return
	}
	where := " WHERE 1=1"
	args := []any{}
	for _, filter := range []struct{ field, value string }{{"category", c.Query("category")}, {"status", status}} {
		if filter.value != "" {
			where += " AND " + filter.field + "=?"
			args = append(args, filter.value)
		}
	}
	if q := c.Query("q"); q != "" {
		where += " AND instr(title,?)>0"
		args = append(args, q)
	}
	var total int
	if err := a.db.QueryRowContext(c.Request.Context(), "SELECT count(*) FROM tasks"+where, args...).Scan(&total); err != nil {
		internal(c, err)
		return
	}
	args = append(args, size, (page-1)*size)
	rows, err := a.db.QueryContext(c.Request.Context(), "SELECT id,title,category,status,created_at,updated_at FROM tasks"+where+" ORDER BY id DESC LIMIT ? OFFSET ?", args...)
	if err != nil {
		internal(c, err)
		return
	}
	defer rows.Close()
	items := []task{}
	for rows.Next() {
		value, err := scanTask(rows)
		if err != nil {
			internal(c, err)
			return
		}
		items = append(items, value)
	}
	if err := rows.Err(); err != nil {
		internal(c, err)
		return
	}
	c.JSON(200, gin.H{"items": items, "total": total, "page": page, "page_size": size})
}
func (a *app) update(c *gin.Context) {
	id, ok := taskID(c)
	if !ok {
		return
	}
	var input struct {
		Title    *string `json:"title"`
		Category *string `json:"category"`
	}
	if !decode(c, &input) {
		return
	}
	if input.Title == nil && input.Category == nil {
		failure(c, 400, "invalid_input", "至少修改 title 或 category")
		return
	}
	sets := []string{}
	args := []any{}
	if input.Title != nil {
		value := strings.TrimSpace(*input.Title)
		if !validText(value, 120) {
			failure(c, 400, "invalid_input", "标题需 1–120 字符")
			return
		}
		sets = append(sets, "title=?")
		args = append(args, value)
	}
	if input.Category != nil {
		value := strings.TrimSpace(*input.Category)
		if utf8.RuneCountInString(value) > 40 {
			failure(c, 400, "invalid_input", "分类最多 40 字符")
			return
		}
		sets = append(sets, "category=?")
		args = append(args, value)
	}
	sets = append(sets, "updated_at=?")
	args = append(args, time.Now().UTC().Format(time.RFC3339Nano), id)
	result, err := a.db.ExecContext(c.Request.Context(), "UPDATE tasks SET "+strings.Join(sets, ",")+" WHERE id=?", args...)
	if err != nil {
		internal(c, err)
		return
	}
	count, err := result.RowsAffected()
	if err != nil {
		internal(c, err)
		return
	}
	if count == 0 {
		failure(c, 404, "not_found", "任务不存在")
		return
	}
	if value, ok := a.get(c, id); ok {
		c.JSON(200, value)
	}
}
func (a *app) remove(c *gin.Context) {
	id, ok := taskID(c)
	if !ok {
		return
	}
	result, err := a.db.ExecContext(c.Request.Context(), "DELETE FROM tasks WHERE id=?", id)
	if err != nil {
		internal(c, err)
		return
	}
	count, err := result.RowsAffected()
	if err != nil {
		internal(c, err)
		return
	}
	if count == 0 {
		failure(c, 404, "not_found", "任务不存在")
		return
	}
	c.Status(204)
}
func (a *app) status(c *gin.Context) {
	id, ok := taskID(c)
	if !ok {
		return
	}
	var input struct {
		Status string `json:"status"`
	}
	if !decode(c, &input) {
		return
	}
	if !validStatus(input.Status) {
		failure(c, 400, "invalid_status", "状态无效")
		return
	}
	tx, err := a.db.BeginTx(c.Request.Context(), nil)
	if err != nil {
		internal(c, err)
		return
	}
	defer tx.Rollback()
	value, err := scanTask(tx.QueryRowContext(c.Request.Context(), "SELECT id,title,category,status,created_at,updated_at FROM tasks WHERE id=?", id))
	if errors.Is(err, sql.ErrNoRows) {
		failure(c, 404, "not_found", "任务不存在")
		return
	}
	if err != nil {
		internal(c, err)
		return
	}
	if value.Status == input.Status {
		c.JSON(200, value)
		return
	}
	allowed := value.Status == "todo" && input.Status == "doing" || value.Status == "doing" && (input.Status == "todo" || input.Status == "done") || value.Status == "done" && input.Status == "doing"
	if !allowed {
		failure(c, 409, "invalid_transition", "状态转换不允许")
		return
	}
	now := time.Now().UTC().Format(time.RFC3339Nano)
	_, err = tx.ExecContext(c.Request.Context(), "UPDATE tasks SET status=?,updated_at=? WHERE id=?", input.Status, now, id)
	if err == nil {
		_, err = tx.ExecContext(c.Request.Context(), "INSERT INTO changes(task_id,from_status,to_status,created_at) VALUES(?,?,?,?)", id, value.Status, input.Status, now)
	}
	if err == nil {
		err = tx.Commit()
	}
	if err != nil {
		internal(c, err)
		return
	}
	value.Status = input.Status
	value.UpdatedAt = now
	c.JSON(200, value)
}
func (a *app) record(c *gin.Context) {
	id, ok := taskID(c)
	if !ok {
		return
	}
	var input struct {
		Content string `json:"content"`
	}
	if !decode(c, &input) {
		return
	}
	input.Content = strings.TrimSpace(input.Content)
	if !validText(input.Content, 2000) {
		failure(c, 400, "invalid_input", "记录需 1–2000 字符")
		return
	}
	// INSERT SELECT 将存在性检查与写入作为同一条 SQL 执行。
	now := time.Now().UTC().Format(time.RFC3339Nano)
	result, err := a.db.ExecContext(c.Request.Context(), "INSERT INTO records(task_id,content,created_at) SELECT id,?,? FROM tasks WHERE id=?", input.Content, now, id)
	if err != nil {
		internal(c, err)
		return
	}
	count, err := result.RowsAffected()
	if err != nil {
		internal(c, err)
		return
	}
	if count == 0 {
		failure(c, 404, "not_found", "任务不存在")
		return
	}
	recordID, err := result.LastInsertId()
	if err != nil {
		internal(c, err)
		return
	}
	c.JSON(201, gin.H{"id": recordID, "task_id": id, "content": input.Content, "created_at": now})
}
func (a *app) history(c *gin.Context, changes bool) {
	id, ok := taskID(c)
	if !ok {
		return
	}
	if _, ok := a.get(c, id); !ok {
		return
	}
	query := "SELECT id,content,created_at FROM records WHERE task_id=? ORDER BY id"
	if changes {
		query = "SELECT id,from_status,to_status,created_at FROM changes WHERE task_id=? ORDER BY id"
	}
	rows, err := a.db.QueryContext(c.Request.Context(), query, id)
	if err != nil {
		internal(c, err)
		return
	}
	defer rows.Close()
	items := []gin.H{}
	for rows.Next() {
		var itemID int64
		var first, second, created string
		if changes {
			err = rows.Scan(&itemID, &first, &second, &created)
		} else {
			err = rows.Scan(&itemID, &first, &created)
		}
		if err != nil {
			internal(c, err)
			return
		}
		item := gin.H{"id": itemID, "task_id": id, "created_at": created}
		if changes {
			item["from_status"] = first
			item["to_status"] = second
		} else {
			item["content"] = first
		}
		items = append(items, item)
	}
	if err := rows.Err(); err != nil {
		internal(c, err)
		return
	}
	c.JSON(200, gin.H{"items": items})
}
func main() {
	file := os.Getenv("LEARNING_DB")
	if file == "" {
		file = "learning.db"
	}
	a, err := openApp(file)
	if err != nil {
		log.Fatal(err)
	}
	defer a.db.Close()
	server := &http.Server{Addr: "127.0.0.1:8080", Handler: a.router(), ReadHeaderTimeout: 5 * time.Second, ReadTimeout: 10 * time.Second, WriteTimeout: 10 * time.Second, IdleTimeout: 60 * time.Second}
	log.Printf("learning API: http://%s (database: %s)", server.Addr, file)
	if err := server.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
		log.Print(err)
	}
}
