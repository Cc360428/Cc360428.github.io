#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <lua.h>
#include <lauxlib.h>

#if LUA_VERSION_NUM != 504 || LUA_VERSION_RELEASE_NUM != 50409
#error This example requires Lua 5.4.9 headers and matching library
#endif

#define COUNTER_MT "lesson.counter.v1"
#define LIMIT ((lua_Integer)1000000)

typedef struct {
    lua_Integer value;
    int closed;
} Counter;

typedef struct {
    const char *path;
    lua_Integer initial;
    lua_Integer delta;
    lua_Integer result;
    const char *phase;
} Request;

static void close_counter(Counter *counter) {
    if (!counter->closed) {
        counter->closed = 1;
        counter->value = 0;
    }
}

static int counter_close(lua_State *L) {
    Counter *counter = (Counter *)luaL_checkudata(L, 1, COUNTER_MT);
    close_counter(counter);
    return 0;
}

static int counter_gc(lua_State *L) {
    /* Our finalizer neither allocates nor raises an error. */
    Counter *counter = (Counter *)lua_touserdata(L, 1);
    if (counter != NULL) close_counter(counter);
    return 0;
}

static int counter_add(lua_State *L) {
    Counter *counter = (Counter *)luaL_checkudata(L, 1, COUNTER_MT);
    lua_Integer delta;
    if (counter->closed) return luaL_error(L, "counter closed");
    if (!lua_isinteger(L, 2)) return luaL_error(L, "delta must be integer");
    delta = luaL_checkinteger(L, 2);
    if (delta < -LIMIT || delta > LIMIT)
        return luaL_error(L, "delta out of range");
    /* Check BEFORE addition. Differences below stay within +/-2000000. */
    if ((delta > 0 && counter->value > LIMIT - delta) ||
        (delta < 0 && counter->value < -LIMIT - delta))
        return luaL_error(L, "counter out of range");
    counter->value += delta;
    lua_pushinteger(L, counter->value);
    return 1;
}

static void register_counter(lua_State *L) {
    static const luaL_Reg methods[] = {
        {"add", counter_add}, {"close", counter_close}, {NULL, NULL}
    };
    luaL_newmetatable(L, COUNTER_MT);
    lua_pushcfunction(L, counter_gc);
    lua_setfield(L, -2, "__gc");
    lua_pushliteral(L, "counter protected");
    lua_setfield(L, -2, "__metatable");
    lua_newtable(L);
    luaL_setfuncs(L, methods, 0);
    lua_setfield(L, -2, "__index");
    lua_pop(L, 1);
}

static int run_request(lua_State *L) {
    Request *request = (Request *)lua_touserdata(L, 1);
    int base = lua_gettop(L); /* request argument remains at index 1 */
    int callback_ref;
    int counter_ref;
    int status;
    Counter *counter;
    request->phase = "setup";
    register_counter(L);
    request->phase = "load";
    status = luaL_loadfilex(L, request->path, "t");
    if (status != LUA_OK) return lua_error(L);
    request->phase = "chunk";
    status = lua_pcall(L, 0, 1, 0);
    if (status != LUA_OK) return lua_error(L);
    request->phase = "contract";
    if (!lua_isfunction(L, -1))
        return luaL_error(L, "chunk must return function");
    callback_ref = luaL_ref(L, LUA_REGISTRYINDEX); /* pops function */
    counter = (Counter *)lua_newuserdatauv(L, sizeof(*counter), 0);
    counter->value = request->initial;
    counter->closed = 0; /* initialize before attaching finalizer */
    luaL_setmetatable(L, COUNTER_MT);
    counter_ref = luaL_ref(L, LUA_REGISTRYINDEX); /* roots userdata */
    lua_rawgeti(L, LUA_REGISTRYINDEX, callback_ref);
    lua_rawgeti(L, LUA_REGISTRYINDEX, counter_ref);
    lua_pushinteger(L, request->delta);
    request->phase = "callback";
    status = lua_pcall(L, 2, 1, 0);
    if (status != LUA_OK) return lua_error(L);
    request->phase = "result";
    if (!lua_isinteger(L, -1))
        return luaL_error(L, "callback must return integer");
    request->result = lua_tointeger(L, -1);
    if (request->result < -LIMIT || request->result > LIMIT)
        return luaL_error(L, "result out of range");
    close_counter(counter);
    luaL_unref(L, LUA_REGISTRYINDEX, counter_ref);
    luaL_unref(L, LUA_REGISTRYINDEX, callback_ref);
    lua_settop(L, base);
    return 0;
}

static int parse_integer(const char *text, lua_Integer *result) {
    char *end;
    long long value;
    const char *cursor = text;
    if (*cursor == '-') ++cursor;
    if (*cursor == '\0') return 0;
    for (; *cursor; ++cursor) if (*cursor < '0' || *cursor > '9') return 0;
    errno = 0;
    value = strtoll(text, &end, 10);
    if (errno == ERANGE || *end != '\0' || value < -1000000 || value > 1000000)
        return 0;
    *result = (lua_Integer)value;
    return 1;
}

int main(int argc, char **argv) {
    lua_State *L;
    int status;
    Request request = {NULL, 0, 0, 0, "setup"};
    if (argc != 4 || !parse_integer(argv[2], &request.initial) ||
        !parse_integer(argv[3], &request.delta)) {
        fputs("usage: lua_host SCRIPT INITIAL DELTA (integers -1000000..1000000)\n", stderr);
        return 2;
    }
    request.path = argv[1];
    L = luaL_newstate();
    if (L == NULL) {
        fputs("error[state]: allocation failed\n", stderr);
        return 1;
    }
    /* Zero-upvalue C function and light userdata pushes do not allocate.
       All subsequent allocating API work is inside this protected call. */
    lua_pushcfunction(L, run_request);
    lua_pushlightuserdata(L, &request);
    status = lua_pcall(L, 1, 0, 0);
    if (status != LUA_OK) {
        fprintf(stderr, "error[%s]: ", request.phase);
        if (lua_type(L, -1) == LUA_TSTRING) {
            size_t length;
            const char *message = lua_tolstring(L, -1, &length);
            fwrite(message, 1, length, stderr);
        } else {
            fputs("non-string error object", stderr);
        }
        fputc('\n', stderr);
    }
    /* No C-held userdata pointer survives the protected function.
       Error-path refs are reclaimed together with the one-shot state. */
    lua_settop(L, 0);
    lua_close(L);
    if (status != LUA_OK) return 1;
    printf("result=%lld\n", (long long)request.result);
    return 0;
}
