import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 回溯与搜索（4）","description":"回溯与搜索分类，第 1718–3283 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 回溯与搜索（4）","description":"回溯与搜索分类，第 1718–3283 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"回溯与搜索分类，第 1718–3283 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 回溯与搜索（3）","link":"/principles/algorithms/leetcode-go/backtracking-03"},"next":{"text":"LeetCode Go · 回溯与搜索（5）","link":"/principles/algorithms/leetcode-go/backtracking-05"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 回溯与搜索（3）","link":"/principles/algorithms/leetcode-go/backtracking-03"},"next":{"text":"LeetCode Go · 回溯与搜索（5）","link":"/principles/algorithms/leetcode-go/backtracking-05"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/backtracking-04.md","filePath":"principles/algorithms/leetcode-go/backtracking-04.md"}'),p={name:"principles/algorithms/leetcode-go/backtracking-04.md"};function o(l,n,m,i,c,h){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-回溯与搜索-4" tabindex="-1">LeetCode Go · 回溯与搜索（4） <a class="header-anchor" href="#leetcode-go-·-回溯与搜索-4" aria-label="Permalink to &quot;LeetCode Go · 回溯与搜索（4）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-1718" tabindex="-1">1718. 构建字典序最大的可行序列 <a class="header-anchor" href="#q-1718" aria-label="Permalink to &quot;1718. 构建字典序最大的可行序列 {#q-1718}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、回溯</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>n</code> ，请你找到满足下面条件的一个序列：</p>&#10;&#10;<ul>&#10;	<li>整数 <code>1</code> 在序列中只出现一次。</li>&#10;	<li><code>2</code> 到 <code>n</code> 之间每个整数都恰好出现两次。</li>&#10;	<li>对于每个 <code>2</code> 到 <code>n</code> 之间的整数 <code>i</code> ，两个 <code>i</code> 之间出现的距离恰好为 <code>i</code> 。</li>&#10;</ul>&#10;&#10;<p>序列里面两个数 <code>a[i]</code> 和 <code>a[j]</code> 之间的 <strong>距离</strong> ，我们定义为它们下标绝对值之差 <code>|j - i|</code> 。</p>&#10;&#10;<p>请你返回满足上述条件中 <strong>字典序最大</strong> 的序列。题目保证在给定限制条件下，一定存在解。</p>&#10;&#10;<p>一个序列 <code>a</code> 被认为比序列 <code>b</code> （两者长度相同）字典序更大的条件是： <code>a</code> 和 <code>b</code> 中第一个不一样的数字处，<code>a</code> 序列的数字比 <code>b</code> 序列的数字大。比方说，<code>[0,1,9,0]</code> 比 <code>[0,1,5,6]</code> 字典序更大，因为第一个不同的位置是第三个数字，且 <code>9</code> 比 <code>5</code> 大。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 3&#10;<b>输出：</b>[3,1,2,3,2]&#10;<b>解释：</b>[2,3,2,1,3] 也是一个可行的序列，但是 [3,1,2,3,2] 是字典序最大的序列。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 5&#10;<b>输出：</b>[5,3,1,4,3,5,2,4,2]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 20</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的序列中， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 出现一次， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2.</mn>
  <mo>.</mo>
  <mi>n</mi>
</math></span> 各出现两次且间距恰为该数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 较小，可回溯搜索。</p>
<p>字典序最大要求优先放置较大的数。从左到右填空位，对每个空位从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 试到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，再试 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">path</mtext>
</math></span> 记录已填值， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录剩余次数。数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 占用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mo>+</mo>
  <mi>i</mi>
</math></span>；一旦填满 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个位置即得到题目保证存在的解。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func constructDistancedSequence(n int) []int {</span></span>
<span class="line"><span>	path := make([]int, n*2)</span></span>
<span class="line"><span>	cnt := make([]int, n*2)</span></span>
<span class="line"><span>	for i := range cnt {</span></span>
<span class="line"><span>		cnt[i] = 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt[1] = 1</span></span>
<span class="line"><span>	var dfs func(u int) bool</span></span>
<span class="line"><span>	dfs = func(u int) bool {</span></span>
<span class="line"><span>		if u == n*2 {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if path[u] > 0 {</span></span>
<span class="line"><span>			return dfs(u + 1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for i := n; i > 1; i-- {</span></span>
<span class="line"><span>			if cnt[i] > 0 &#x26;&#x26; u+i &#x3C; n*2 &#x26;&#x26; path[u+i] == 0 {</span></span>
<span class="line"><span>				cnt[i] = 0</span></span>
<span class="line"><span>				path[u], path[u+i] = i, i</span></span>
<span class="line"><span>				if dfs(u + 1) {</span></span>
<span class="line"><span>					return true</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				cnt[i] = 2</span></span>
<span class="line"><span>				path[u], path[u+i] = 0, 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt[1] > 0 {</span></span>
<span class="line"><span>			cnt[1] = 0</span></span>
<span class="line"><span>			path[u] = 1</span></span>
<span class="line"><span>			if dfs(u + 1) {</span></span>
<span class="line"><span>				return true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			cnt[1] = 1</span></span>
<span class="line"><span>			path[u] = 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(1)</span></span>
<span class="line"><span>	return path[1:]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/construct-the-lexicographically-largest-valid-sequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1718.Construct%20the%20Lexicographically%20Largest%20Valid%20Sequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1730" tabindex="-1">1730. 获取食物的最短路径 🔒 <a class="header-anchor" href="#q-1730" aria-label="Permalink to &quot;1730. 获取食物的最短路径 🔒 {#q-1730}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你现在很饿，想要尽快找东西吃。你需要找到最短的路径到达一个食物所在的格子。</p>&#10;&#10;<p>给定一个 <code>m x n</code> 的字符矩阵 <code>grid</code> ，包含下列不同类型的格子：</p>&#10;&#10;<ul>&#10;	<li><code>'*'</code> 是你的位置。矩阵中<strong>有且只有一个 </strong><code>'*'</code> 格子。</li>&#10;	<li><code>'#'</code> 是食物。矩阵中可能存在<strong>多个</strong>食物。</li>&#10;	<li><code>'O'</code> 是空地，你可以穿过这些格子。</li>&#10;	<li><code>'X'</code> 是障碍，你不可以穿过这些格子。</li>&#10;</ul>&#10;&#10;<p>返回你到任意食物的最短路径的长度。如果不存在你到任意食物的路径，返回 <code>-1</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><b>示例 1:</b></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1700-1799/1730.Shortest%20Path%20to%20Get%20Food/images/img1.jpg" loading="lazy">&#10;<pre>&#10;<b>输入：</b> grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;]]&#10;<b>输出：</b> 3&#10;<b>解释： </b>要拿到食物，你需要走 3 步。</pre>&#10;&#10;<p><strong>Example 2:</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1700-1799/1730.Shortest%20Path%20to%20Get%20Food/images/img2.jpg" loading="lazy">&#10;<pre>&#10;<b>输入：</b> grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;X&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;#&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;]]&#10;<b>输出：</b> -1&#10;<b>解释：</b> 你不可能拿到食物。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1700-1799/1730.Shortest%20Path%20to%20Get%20Food/images/img3.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入:</strong> grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;]]&#10;<strong>输出:</strong> 6&#10;<strong>解释:</strong> 这里有多个食物。拿到下边的食物仅需走 6 步。</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>grid = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;*&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;#&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;,&quot;O&quot;]]&#10;<b>输出：</b>5</pre>&#10;&#10;<p> </p>&#10;&#10;<p><b>提示：</b></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 200</code></li>&#10;	<li><code>grid[row][col]</code> 是 <code>'*'</code>、 <code>'X'</code>、 <code>'O'</code> 或 <code>'#'</code> 。</li>&#10;	<li><code>grid</code> 中<strong>有且只有一个</strong> <code>'*'</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>网格中从唯一的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2217;</mo>
</math></span> 走到最近的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">#</mi>
</math></span>，障碍不可穿越。最短格路适合 BFS。</p>
<p>先定位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2217;</mo>
</math></span> 入队，按层扩展四邻：遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">#</mi>
</math></span> 返回当前层数，空地标为障碍以免重复入队。队列空则不可达。</p>
</blockquote>
<p>根据题意，我们需要从 <code v-pre>*</code> 出发，找到最近的 <code v-pre>#</code>，返回最短路径长度。</p>
<p>首先，我们遍历整个二维数组，找到 <code v-pre>*</code> 的位置，将其作为 BFS 的起点，放入队列中。</p>
<p>然后，我们开始 BFS，遍历队列中的元素，每次遍历到一个元素，我们将其上下左右四个方向的元素加入队列中，直到遇到 <code v-pre>#</code>，返回当前层数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为二维数组的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func getFood(grid [][]byte) (ans int) {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	type pair struct{ i, j int }</span></span>
<span class="line"><span>	q := []pair{}</span></span>
<span class="line"><span>	for i, x := 0, 1; i &#x3C; m &#x26;&#x26; x == 1; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] == '*' {</span></span>
<span class="line"><span>				q = append(q, pair{i, j})</span></span>
<span class="line"><span>				x = 0</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		for t := len(q); t > 0; t-- {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>				x, y := p.i+dirs[k], p.j+dirs[k+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n {</span></span>
<span class="line"><span>					if grid[x][y] == '#' {</span></span>
<span class="line"><span>						return ans</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					if grid[x][y] == 'O' {</span></span>
<span class="line"><span>						grid[x][y] = 'X'</span></span>
<span class="line"><span>						q = append(q, pair{x, y})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/shortest-path-to-get-food" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1730.Shortest%20Path%20to%20Get%20Food/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1743" tabindex="-1">1743. 从相邻元素对还原数组 <a class="header-anchor" href="#q-1743" aria-label="Permalink to &quot;1743. 从相邻元素对还原数组 {#q-1743}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>存在一个由 <code>n</code> 个不同元素组成的整数数组 <code>nums</code> ，但你已经记不清具体内容。好在你还记得 <code>nums</code> 中的每一对相邻元素。</p>&#10;&#10;<p>给你一个二维整数数组 <code>adjacentPairs</code> ，大小为 <code>n - 1</code> ，其中每个 <code>adjacentPairs[i] = [u<sub>i</sub>, v<sub>i</sub>]</code> 表示元素 <code>u<sub>i</sub></code> 和 <code>v<sub>i</sub></code> 在 <code>nums</code> 中相邻。</p>&#10;&#10;<p>题目数据保证所有由元素 <code>nums[i]</code> 和 <code>nums[i+1]</code> 组成的相邻元素对都存在于 <code>adjacentPairs</code> 中，存在形式可能是 <code>[nums[i], nums[i+1]]</code> ，也可能是 <code>[nums[i+1], nums[i]]</code> 。这些相邻元素对可以 <strong>按任意顺序</strong> 出现。</p>&#10;&#10;<p>返回 <strong>原始数组</strong><em> </em><code>nums</code><em> </em>。如果存在多种解答，返回 <strong>其中任意一个</strong> 即可。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>adjacentPairs = [[2,1],[3,4],[3,2]]&#10;<strong>输出：</strong>[1,2,3,4]&#10;<strong>解释：</strong>数组的所有相邻元素对都在 adjacentPairs 中。&#10;特别要注意的是，adjacentPairs[i] 只表示两个元素相邻，并不保证其 左-右 顺序。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>adjacentPairs = [[4,-2],[1,4],[-3,1]]&#10;<strong>输出：</strong>[-2,4,1,-3]&#10;<strong>解释：</strong>数组中可能存在负数。&#10;另一种解答是 [-3,1,4,-2] ，也会被视作正确答案。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>adjacentPairs = [[100000,-100000]]&#10;<strong>输出：</strong>[100000,-100000]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>nums.length == n</code></li>&#10;	<li><code>adjacentPairs.length == n - 1</code></li>&#10;	<li><code>adjacentPairs[i].length == 2</code></li>&#10;	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>5</sup> &lt;= nums[i], u<sub>i</sub>, v<sub>i</sub> &lt;= 10<sup>5</sup></code></li>&#10;	<li>题目数据保证存在一些以 <code>adjacentPairs</code> 作为元素对的数组 <code>nums</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>相邻对构成一条路径图，两端度数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。从任一端点沿邻接顺序走即可还原。</p>
<p>建无向邻接表，找到度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的点作为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，其唯一邻居为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。之后每个位置取邻居中不等于再前一个的那个。</p>
</blockquote>
<p>从度为一的点开始遍历图，可以用 DFS，也可以直接遍历。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func restoreArray(adjacentPairs [][]int) []int {</span></span>
<span class="line"><span>	n := len(adjacentPairs) + 1</span></span>
<span class="line"><span>	g := map[int][]int{}</span></span>
<span class="line"><span>	for _, e := range adjacentPairs {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	for k, v := range g {</span></span>
<span class="line"><span>		if len(v) == 1 {</span></span>
<span class="line"><span>			ans[0] = k</span></span>
<span class="line"><span>			ans[1] = v[0]</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 2; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		v := g[ans[i-1]]</span></span>
<span class="line"><span>		ans[i] = v[0]</span></span>
<span class="line"><span>		if v[0] == ans[i-2] {</span></span>
<span class="line"><span>			ans[i] = v[1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一按线性邻接递推。也可用 DFS 从度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的端点沿边深入，访问顺序即为还原数组，适合写成递归。</p>
</blockquote>
<p>从度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的端点出发，沿邻接表深度优先遍历还原数组。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func restoreArray(adjacentPairs [][]int) []int {</span></span>
<span class="line"><span>	g := map[int][]int{}</span></span>
<span class="line"><span>	for _, e := range adjacentPairs {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []int{}</span></span>
<span class="line"><span>	var dfs func(i, fa int)</span></span>
<span class="line"><span>	dfs = func(i, fa int) {</span></span>
<span class="line"><span>		ans = append(ans, i)</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			if j != fa {</span></span>
<span class="line"><span>				dfs(j, i)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, v := range g {</span></span>
<span class="line"><span>		if len(v) == 1 {</span></span>
<span class="line"><span>			dfs(i, 1000000)</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/restore-the-array-from-adjacent-pairs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1743.Restore%20the%20Array%20From%20Adjacent%20Pairs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1765" tabindex="-1">1765. 地图中的最高点 <a class="header-anchor" href="#q-1765" aria-label="Permalink to &quot;1765. 地图中的最高点 {#q-1765}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m x n</code> 的整数矩阵 <code>isWater</code> ，它代表了一个由 <strong>陆地</strong> 和 <strong>水域</strong> 单元格组成的地图。</p>&#10;&#10;<ul>&#10;	<li>如果 <code>isWater[i][j] == 0</code> ，格子 <code>(i, j)</code> 是一个 <strong>陆地</strong> 格子。</li>&#10;	<li>如果 <code>isWater[i][j] == 1</code> ，格子 <code>(i, j)</code> 是一个 <strong>水域</strong> 格子。</li>&#10;</ul>&#10;&#10;<p>你需要按照如下规则给每个单元格安排高度：</p>&#10;&#10;<ul>&#10;	<li>每个格子的高度都必须是非负的。</li>&#10;	<li>如果一个格子是 <strong>水域</strong> ，那么它的高度必须为 <code>0</code> 。</li>&#10;	<li>任意相邻的格子高度差 <strong>至多</strong> 为 <code>1</code> 。当两个格子在正东、南、西、北方向上相互紧挨着，就称它们为相邻的格子。（也就是说它们有一条公共边）</li>&#10;</ul>&#10;&#10;<p>找到一种安排高度的方案，使得矩阵中的最高高度值 <strong>最大</strong> 。</p>&#10;&#10;<p>请你返回一个大小为 <code>m x n</code> 的整数矩阵 <code>height</code> ，其中 <code>height[i][j]</code> 是格子 <code>(i, j)</code> 的高度。如果有多种解法，请返回 <strong>任意一个</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1700-1799/1765.Map%20of%20Highest%20Peak/images/screenshot-2021-01-11-at-82045-am.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>isWater = [[0,1],[0,0]]&#10;<b>输出：</b>[[1,0],[2,1]]&#10;<b>解释：</b>上图展示了给各个格子安排的高度。&#10;蓝色格子是水域格，绿色格子是陆地格。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1700-1799/1765.Map%20of%20Highest%20Peak/images/screenshot-2021-01-11-at-82050-am.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>isWater = [[0,0,1],[1,0,0],[0,0,0]]&#10;<b>输出：</b>[[1,1,0],[0,1,1],[1,2,2]]&#10;<b>解释：</b>所有安排方案中，最高可行高度为 2 。&#10;任意安排方案中，只要最高高度为 2 且符合上述规则的，都为可行方案。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == isWater.length</code></li>&#10;	<li><code>n == isWater[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 1000</code></li>&#10;	<li><code>isWater[i][j]</code> 要么是 <code>0</code> ，要么是 <code>1</code> 。</li>&#10;	<li>至少有 <strong>1</strong> 个水域格子。</li>&#10;</ul>&#10;<strong>注意：</strong>本题与 <a href="https://leetcode.cn/problems/01-matrix/" target="_blank" rel="noopener noreferrer">542</a> 题相同。</div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>水域高度必须为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，相邻高度差至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，且希望陆地点尽量高。高度实际上是到最近水域的距离。</p>
<p>多源 BFS：所有水域入队并置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，弹出时把未访问邻格设为当前高度加一。距离场即为所求高度图。</p>
</blockquote>
<p>根据题目描述，水域的高度必须是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，而任意相邻格子的高度差至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。因此，我们可以从所有水域格子出发，用 BFS 搜索相邻且未访问过的格子，将其高度置为当前格子的高度再加一。</p>
<p>最后返回结果矩阵即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是整数矩阵 <code v-pre>isWater</code> 的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func highestPeak(isWater [][]int) [][]int {</span></span>
<span class="line"><span>	m, n := len(isWater), len(isWater[0])</span></span>
<span class="line"><span>	ans := make([][]int, m)</span></span>
<span class="line"><span>	type pair struct{ i, j int }</span></span>
<span class="line"><span>	q := []pair{}</span></span>
<span class="line"><span>	for i, row := range isWater {</span></span>
<span class="line"><span>		ans[i] = make([]int, n)</span></span>
<span class="line"><span>		for j, v := range row {</span></span>
<span class="line"><span>			ans[i][j] = v - 1</span></span>
<span class="line"><span>			if v == 1 {</span></span>
<span class="line"><span>				q = append(q, pair{i, j})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		p := q[0]</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		i, j := p.i, p.j</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; ans[x][y] == -1 {</span></span>
<span class="line"><span>				ans[x][y] = ans[i][j] + 1</span></span>
<span class="line"><span>				q = append(q, pair{x, y})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法二仍是多源 BFS，只是按层用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">for</mtext>
</math></span> 弹出当前队列长度，写法与方法一等价，复杂度不变。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func highestPeak(isWater [][]int) [][]int {</span></span>
<span class="line"><span>	m, n := len(isWater), len(isWater[0])</span></span>
<span class="line"><span>	ans := make([][]int, m)</span></span>
<span class="line"><span>	type pair struct{ i, j int }</span></span>
<span class="line"><span>	q := []pair{}</span></span>
<span class="line"><span>	for i, row := range isWater {</span></span>
<span class="line"><span>		ans[i] = make([]int, n)</span></span>
<span class="line"><span>		for j, v := range row {</span></span>
<span class="line"><span>			ans[i][j] = v - 1</span></span>
<span class="line"><span>			if v == 1 {</span></span>
<span class="line"><span>				q = append(q, pair{i, j})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		for t := len(q); t > 0; t-- {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			i, j := p.i, p.j</span></span>
<span class="line"><span>			for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>				x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; ans[x][y] == -1 {</span></span>
<span class="line"><span>					ans[x][y] = ans[i][j] + 1</span></span>
<span class="line"><span>					q = append(q, pair{x, y})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/map-of-highest-peak" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1765.Map%20of%20Highest%20Peak/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1778" tabindex="-1">1778. 未知网格中的最短路径 🔒 <a class="header-anchor" href="#q-1778" aria-label="Permalink to &quot;1778. 未知网格中的最短路径 🔒 {#q-1778}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、数组、交互、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>这是一个<strong>交互式的问题。</strong></p>&#10;&#10;<p>一个未知的网格里有一个机器人，你需要让机器人从起点走到终点。这个网格的大小是 <code>m x n</code>，网格中的每个位置只会是可通行和不可通行两种状态。题目<strong>保证</strong>机器人的起点和终点不同，且都是可通行的。</p>&#10;&#10;<p>你需要找到起点到终点的最短路径，然而你<strong>不知道</strong>网格的大小、起点和终点。你只能向 <code>GridMaster</code> 对象查询。</p>&#10;&#10;<p><code>GridMaster</code>有这些方法：</p>&#10;&#10;<ul>&#10;	<li><code>boolean canMove(char direction)</code> 当机器人能向对应方向移动时，返回 <code>true</code>，否则返回 <code>false</code>。</li>&#10;	<li><code>void move(char direction)</code> 把机器人向这个方向移动。如果移动方向上是不可通行的或是网格的边界，则这次移动会被<strong>忽略</strong>，机器人会待在原地。</li>&#10;	<li><code>boolean isTarget()</code> 如果机器人当前位于终点，返回 <code>true</code>，否则返回 <code>false</code>。</li>&#10;</ul>&#10;&#10;<p>注意上述方法中的direction应该是 <code>{'U','D','L','R'}</code> 中的一个，分别代表上下左右四个方向。</p>&#10;&#10;<p>返回机器人的初始位置到终点的最短距离。如果在起点和终点间没有路径联通，返回 <code>-1</code>。</p>&#10;&#10;<p><strong>自定义测试用例</strong></p>&#10;&#10;<p>测试用例是一个 <code>m x n</code> 的二维矩阵 <code>grid</code>，其中：</p>&#10;&#10;<ul>&#10;	<li><code>grid[i][j] == -1</code> 表明机器人一开始位于位置 <code>(i, j)</code> （即起点）。</li>&#10;	<li><code>grid[i][j] == 0</code> 表明位置 <code>(i, j)</code> 不可通行。</li>&#10;	<li><code>grid[i][j] == 1</code> 表明位置 <code>(i, j)</code> 可以通行.</li>&#10;	<li><code>grid[i][j] == 2</code> 表明位置 <code>(i, j)</code> 是终点.</li>&#10;</ul>&#10;&#10;<p><code>grid</code> 里恰有一个<code>-1</code> 和一个 <code>2</code>。记住在你的代码中，你对这些信息将<strong>一无所知</strong>。</p>&#10;&#10;<p><strong>示例1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[1,2],[-1,0]]&#10;<strong>输出:</strong> 2&#10;<strong>解释:</strong> 一种可能的交互过程如下：&#10;The robot is initially standing on cell (1, 0), denoted by the -1.&#10;- master.canMove('U') 返回 true.&#10;- master.canMove('D') 返回false.&#10;- master.canMove('L') 返回 false.&#10;- master.canMove('R') 返回 false.&#10;- master.move('U') 把机器人移动到 (0, 0).&#10;- master.isTarget() 返回 false.&#10;- master.canMove('U') 返回 false.&#10;- master.canMove('D') 返回 true.&#10;- master.canMove('L') 返回 false.&#10;- master.canMove('R') 返回 true.&#10;- master.move('R') 把机器人移动到 (0, 1).&#10;- master.isTarget() 返回 true. &#10;我们现在知道终点是点 (0, 1)，而且最短的路径是2.&#10;</pre>&#10;&#10;<p><strong>示例2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[0,0,-1],[1,1,1],[2,0,0]]&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong> 机器人和终点的最短路径长是4.</pre>&#10;&#10;<p><strong>示例3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[-1,0],[0,2]]&#10;<strong>输出:</strong> -1&#10;<strong>解释:</strong> 机器人和终点间没有可通行的路径.</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n, m &lt;= 500</code></li>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>grid[i][j]</code> 只可能是 <code>-1</code>, <code>0</code>, <code>1</code> 或 <code>2</code></li>&#10;	<li><code>grid</code> 中 <strong>有且只有一个</strong> <code>-1</code></li>&#10;	<li><code>grid</code> 中<strong> 有且只有一个</strong> <code>2</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1778.Shortest%20Path%20in%20a%20Hidden%20Grid/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p>基于 Doocs 探索建图后 BFS 的参考改写。先用显式 DFS 栈驱动机器人，给可达格记录相对坐标；每次退栈执行反向移动，保证机器人返回父格，探索结束回到起点。再在已知可达图上 BFS 求最少步数。V 为可达格数，时间与空间均 O(V)，显式栈可覆盖长通道。平台 GridMaster 的 Go 方法为 CanMove(byte) bool、Move(byte)、IsTarget() bool，方向 U/R/D/L；入口接收 *GridMaster，测试提供完全离线的类型与方法。</p>
<p>出处：<a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1778.Shortest%20Path%20in%20a%20Hidden%20Grid/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题与题解</a>，固定提交 91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011；题意、参考及本 Go 改写采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 题意与参考：Doocs LeetCode，CC BY-SA 4.0。</span></span>
<span class="line"><span>// https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1778.Shortest%20Path%20in%20a%20Hidden%20Grid/README.md</span></span>
<span class="line"><span>// Go 实现与测试沿用 CC BY-SA 4.0；来源性质见配套说明。</span></span>
<span class="line"><span>func findShortestPath(master *GridMaster) int {</span></span>
<span class="line"><span>	type point struct{ x, y int }</span></span>
<span class="line"><span>	type frame struct {</span></span>
<span class="line"><span>		p    point</span></span>
<span class="line"><span>		next int</span></span>
<span class="line"><span>		back byte</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := []byte{'U', 'R', 'D', 'L'}</span></span>
<span class="line"><span>	dx := []int{-1, 0, 1, 0}</span></span>
<span class="line"><span>	dy := []int{0, 1, 0, -1}</span></span>
<span class="line"><span>	start := point{}</span></span>
<span class="line"><span>	seen := map[point]bool{start: true}</span></span>
<span class="line"><span>	stack := []frame{{p: start}}</span></span>
<span class="line"><span>	target := point{}</span></span>
<span class="line"><span>	found := master.IsTarget()</span></span>
<span class="line"><span>	for len(stack) > 0 {</span></span>
<span class="line"><span>		f := &#x26;stack[len(stack)-1]</span></span>
<span class="line"><span>		if f.next == 4 {</span></span>
<span class="line"><span>			back := f.back</span></span>
<span class="line"><span>			stack = stack[:len(stack)-1]</span></span>
<span class="line"><span>			if back != 0 {</span></span>
<span class="line"><span>				master.Move(back)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		d := f.next</span></span>
<span class="line"><span>		f.next++</span></span>
<span class="line"><span>		next := point{f.p.x + dx[d], f.p.y + dy[d]}</span></span>
<span class="line"><span>		if seen[next] || !master.CanMove(dirs[d]) {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		master.Move(dirs[d])</span></span>
<span class="line"><span>		seen[next] = true</span></span>
<span class="line"><span>		if master.IsTarget() {</span></span>
<span class="line"><span>			target = next</span></span>
<span class="line"><span>			found = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stack = append(stack, frame{p: next, back: dirs[(d+2)%4]})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if !found {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	queue := []point{start}</span></span>
<span class="line"><span>	dist := map[point]int{start: 0}</span></span>
<span class="line"><span>	for head := 0; head &#x3C; len(queue); head++ {</span></span>
<span class="line"><span>		p := queue[head]</span></span>
<span class="line"><span>		if p == target {</span></span>
<span class="line"><span>			return dist[p]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for d := 0; d &#x3C; 4; d++ {</span></span>
<span class="line"><span>			q := point{p.x + dx[d], p.y + dy[d]}</span></span>
<span class="line"><span>			if _, ok := dist[q]; seen[q] &#x26;&#x26; !ok {</span></span>
<span class="line"><span>				dist[q] = dist[p] + 1</span></span>
<span class="line"><span>				queue = append(queue, q)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/shortest-path-in-a-hidden-grid" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1778.Shortest%20Path%20in%20a%20Hidden%20Grid/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1849" tabindex="-1">1849. 将字符串拆分为递减的连续值 <a class="header-anchor" href="#q-1849" aria-label="Permalink to &quot;1849. 将字符串拆分为递减的连续值 {#q-1849}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、回溯、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个仅由数字组成的字符串 <code>s</code> 。</p>&#10;&#10;<p>请你判断能否将 <code>s</code> 拆分成两个或者多个 <strong>非空子字符串</strong> ，使子字符串的 <strong>数值</strong> 按 <strong>降序</strong> 排列，且每两个 <strong>相邻子字符串</strong> 的数值之 <strong>差 </strong>等于 <code>1</code> 。</p>&#10;&#10;<ul>&#10;	<li>例如，字符串 <code>s = &quot;0090089&quot;</code> 可以拆分成 <code>[&quot;0090&quot;, &quot;089&quot;]</code> ，数值为 <code>[90,89]</code> 。这些数值满足按降序排列，且相邻值相差 <code>1</code> ，这种拆分方法可行。</li>&#10;	<li>另一个例子中，字符串 <code>s = &quot;001&quot;</code> 可以拆分成 <code>[&quot;0&quot;, &quot;01&quot;]</code>、<code>[&quot;00&quot;, &quot;1&quot;]</code> 或 <code>[&quot;0&quot;, &quot;0&quot;, &quot;1&quot;]</code> 。然而，所有这些拆分方法都不可行，因为对应数值分别是 <code>[0,1]</code>、<code>[0,1]</code> 和 <code>[0,0,1]</code> ，都不满足按降序排列的要求。</li>&#10;</ul>&#10;&#10;<p>如果可以按要求拆分 <code>s</code> ，返回 <code>true</code> ；否则，返回 <code>false</code><em> </em>。</p>&#10;&#10;<p><strong>子字符串</strong> 是字符串中的一个连续字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;1234&quot;&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>不存在拆分 s 的可行方法。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;050043&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>s 可以拆分为 [&quot;05&quot;, &quot;004&quot;, &quot;3&quot;] ，对应数值为 [5,4,3] 。&#10;满足按降序排列，且相邻值相差 <code>1</code> 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;9080701&quot;&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>不存在拆分 s 的可行方法。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;10009998&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>s 可以拆分为 [&quot;100&quot;, &quot;099&quot;, &quot;98&quot;] ，对应数值为 [100,99,98] 。&#10;满足按降序排列，且相邻值相差 <code>1</code> 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 20</code></li>&#10;	<li><code>s</code> 仅由数字组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要把数字串拆成至少两段，对应整数严格递减且相邻差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。前导零合法但数值按去零理解。段的切法是指数级的，但 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>20</mn>
</math></span>，搜索可行。</p>
<p>从左往右枚举当前段的结束位置，累加得到数值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>。首段任意，其后要求恰好比上一段小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。第一段不能吞掉整个串，否则无法拆成两段。DFS 搜到末尾即成功。</p>
</blockquote>
<p>我们可以从字符串的第一个字符开始，尝试将其拆分成一个或多个子字符串，然后递归处理剩余的部分。</p>
<p>具体地，我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 表示当前处理到的位置，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 表示上一个拆分出的数值。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，表示我们还没有拆分出任何数值。</p>
<p>在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span> 中，我们首先计算当前拆分出的数值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>y</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，那么我们可以尝试将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 作为下一个数值，继续递归处理剩余的部分。如果递归的结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
</math></span>，我们就找到了一种拆分方法，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
</math></span>。</p>
<p>遍历完所有的拆分方法后，如果没有找到合适的拆分方法，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">false</mtext>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func splitString(s string) bool {</span></span>
<span class="line"><span>	var dfs func(i, x int) bool</span></span>
<span class="line"><span>	dfs = func(i, x int) bool {</span></span>
<span class="line"><span>		if i >= len(s) {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		y := 0</span></span>
<span class="line"><span>		r := len(s)</span></span>
<span class="line"><span>		if x &#x3C; 0 {</span></span>
<span class="line"><span>			r--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for j := i; j &#x3C; r; j++ {</span></span>
<span class="line"><span>			y = y*10 + int(s[j]-'0')</span></span>
<span class="line"><span>			if (x &#x3C; 0 || x-y == 1) &#x26;&#x26; dfs(j+1, y) {</span></span>
<span class="line"><span>				return true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, -1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/splitting-a-string-into-descending-consecutive-values" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1849.Splitting%20a%20String%20Into%20Descending%20Consecutive%20Values/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1863" tabindex="-1">1863. 找出所有子集的异或总和再求和 <a class="header-anchor" href="#q-1863" aria-label="Permalink to &quot;1863. 找出所有子集的异或总和再求和 {#q-1863}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、数学、回溯、组合数学、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一个数组的<strong> 异或总和</strong> 定义为数组中所有元素按位 <code>XOR</code> 的结果；如果数组为 <strong>空</strong> ，则异或总和为 <code>0</code> 。</p>&#10;&#10;<ul>&#10;	<li>例如，数组 <code>[2,5,6]</code> 的 <strong>异或总和</strong> 为 <code>2 XOR 5 XOR 6 = 1</code> 。</li>&#10;</ul>&#10;&#10;<p>给你一个数组 <code>nums</code> ，请你求出 <code>nums</code> 中每个 <strong>子集</strong> 的 <strong>异或总和</strong> ，计算并返回这些值相加之 <strong>和</strong> 。</p>&#10;&#10;<p><strong>注意：</strong>在本题中，元素 <strong>相同</strong> 的不同子集应 <strong>多次</strong> 计数。</p>&#10;&#10;<p>数组 <code>a</code> 是数组 <code>b</code> 的一个 <strong>子集</strong> 的前提条件是：从 <code>b</code> 删除几个（也可能不删除）元素能够得到 <code>a</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,3]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>[1,3] 共有 4 个子集：&#10;- 空子集的异或总和是 0 。&#10;- [1] 的异或总和为 1 。&#10;- [3] 的异或总和为 3 。&#10;- [1,3] 的异或总和为 1 XOR 3 = 2 。&#10;0 + 1 + 3 + 2 = 6&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [5,1,6]&#10;<strong>输出：</strong>28&#10;<strong>解释：</strong>[5,1,6] 共有 8 个子集：&#10;- 空子集的异或总和是 0 。&#10;- [5] 的异或总和为 5 。&#10;- [1] 的异或总和为 1 。&#10;- [6] 的异或总和为 6 。&#10;- [5,1] 的异或总和为 5 XOR 1 = 4 。&#10;- [5,6] 的异或总和为 5 XOR 6 = 3 。&#10;- [1,6] 的异或总和为 1 XOR 6 = 7 。&#10;- [5,1,6] 的异或总和为 5 XOR 1 XOR 6 = 2 。&#10;0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [3,4,5,6,7,8]&#10;<strong>输出：</strong>480&#10;<strong>解释：</strong>每个子集的全部异或总和值之和为 480 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 12</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 20</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二进制枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求所有子集异或和的总和。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>12</mn>
</math></span>，子集只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 个，枚举可以通过。</p>
<p>用掩码 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 表示子集，按位把选中元素异或起来并累加。实现无需递归。</p>
</blockquote>
<p>我们可以用二进制枚举的方法，枚举出所有的子集，然后计算每个子集的异或总和。</p>
<p>具体地，我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 的范围内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的二进制表示的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，那么代表着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个元素在当前枚举的子集中；如果第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么代表着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个元素不在当前枚举的子集中。我们可以根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的二进制表示，得到当前子集对应的异或总和，将其加到答案中即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func subsetXORSum(nums []int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 1&#x3C;&#x3C;n; i++ {</span></span>
<span class="line"><span>		s := 0</span></span>
<span class="line"><span>		for j, x := range nums {</span></span>
<span class="line"><span>			if i>>j&#x26;1 == 1 {</span></span>
<span class="line"><span>				s ^= x</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用整数掩码，需要再开一层循环检查每一位。也可以 DFS：对第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素选择「不选」或「异或进去」，到达末尾把当前异或和加入答案。时间同阶，写成选或不选更直观。</p>
</blockquote>
<p>我们也可以使用深度优先搜索的方法，枚举出所有的子集，然后计算每个子集的异或总和。</p>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 表示当前搜索到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 表示当前子集的异或总和。初始时， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。在搜索的过程中，每次我们都有两种选择：</p>
<ul>
<li>将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素加入当前子集，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>s</mi>
  <mo>&#x2295;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素不加入当前子集，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ul>
<p>当我们搜索完数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的所有元素时，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span> 时，当前子集的异或总和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，将其加到答案中即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func subsetXORSum(nums []int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	var dfs func(int, int)</span></span>
<span class="line"><span>	dfs = func(i, s int) {</span></span>
<span class="line"><span>		if i >= n {</span></span>
<span class="line"><span>			ans += s</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(i+1, s)</span></span>
<span class="line"><span>		dfs(i+1, s^nums[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(0, 0)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-of-all-subset-xor-totals" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1863.Sum%20of%20All%20Subset%20XOR%20Totals/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1926" tabindex="-1">1926. 迷宫中离入口最近的出口 <a class="header-anchor" href="#q-1926" aria-label="Permalink to &quot;1926. 迷宫中离入口最近的出口 {#q-1926}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m x n</code> 的迷宫矩阵 <code>maze</code> （<strong>下标从 0 开始</strong>），矩阵中有空格子（用 <code>'.'</code> 表示）和墙（用 <code>'+'</code> 表示）。同时给你迷宫的入口 <code>entrance</code> ，用 <code>entrance = [entrance<sub>row</sub>, entrance<sub>col</sub>]</code> 表示你一开始所在格子的行和列。</p>&#10;&#10;<p>每一步操作，你可以往 <strong>上</strong>，<strong>下</strong>，<strong>左</strong> 或者 <strong>右</strong> 移动一个格子。你不能进入墙所在的格子，你也不能离开迷宫。你的目标是找到离 <code>entrance</code> <strong>最近</strong> 的出口。<strong>出口</strong> 的含义是 <code>maze</code> <strong>边界</strong> 上的 <strong>空格子</strong>。<code>entrance</code> 格子 <strong>不算</strong> 出口。</p>&#10;&#10;<p>请你返回从 <code>entrance</code> 到最近出口的最短路径的 <strong>步数</strong> ，如果不存在这样的路径，请你返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1926.Nearest%20Exit%20from%20Entrance%20in%20Maze/images/nearest1-grid.jpg" loading="lazy">&#10;<pre><b>输入：</b>maze = [[&quot;+&quot;,&quot;+&quot;,&quot;.&quot;,&quot;+&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;+&quot;],[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;,&quot;.&quot;]], entrance = [1,2]&#10;<b>输出：</b>1&#10;<b>解释：</b>总共有 3 个出口，分别位于 (1,0)，(0,2) 和 (2,3) 。&#10;一开始，你在入口格子 (1,2) 处。&#10;- 你可以往左移动 2 步到达 (1,0) 。&#10;- 你可以往上移动 1 步到达 (0,2) 。&#10;从入口处没法到达 (2,3) 。&#10;所以，最近的出口是 (0,2) ，距离为 1 步。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1926.Nearest%20Exit%20from%20Entrance%20in%20Maze/images/nearesr2-grid.jpg" loading="lazy">&#10;<pre><b>输入：</b>maze = [[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;]], entrance = [1,0]&#10;<b>输出：</b>2&#10;<b>解释：</b>迷宫中只有 1 个出口，在 (1,2) 处。&#10;(1,0) 不算出口，因为它是入口格子。&#10;初始时，你在入口与格子 (1,0) 处。&#10;- 你可以往右移动 2 步到达 (1,2) 处。&#10;所以，最近的出口为 (1,2) ，距离为 2 步。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1926.Nearest%20Exit%20from%20Entrance%20in%20Maze/images/nearest3-grid.jpg" loading="lazy">&#10;<pre><b>输入：</b>maze = [[&quot;.&quot;,&quot;+&quot;]], entrance = [0,0]&#10;<b>输出：</b>-1&#10;<b>解释：</b>这个迷宫中没有出口。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>maze.length == m</code></li>&#10;	<li><code>maze[i].length == n</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 100</code></li>&#10;	<li><code>maze[i][j]</code> 要么是 <code>'.'</code> ，要么是 <code>'+'</code> 。</li>&#10;	<li><code>entrance.length == 2</code></li>&#10;	<li><code>0 &lt;= entrance<sub>row</sub> &lt; m</code></li>&#10;	<li><code>0 &lt;= entrance<sub>col</sub> &lt; n</code></li>&#10;	<li><code>entrance</code> 一定是空格子。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最近出口是无权网格最短路。DFS 或按路径长度排序都不如按层扩展稳定。入口本身若在边界上也不算出口。</p>
<p>从入口 BFS，把走过的空格改为墙以免再入队。首次走到边界空格时的层数即为答案；队列空则不可达。</p>
<p>层内先弹出再扩四邻，保证步数按距离递增。</p>
</blockquote>
<p>我们可以从入口开始，进行广度优先搜索，每次搜索到一个新的空格子，就将其标记为已访问，并将其加入队列，直到找到一个边界上的空格子，返回步数。</p>
<p>具体地，我们定义一个队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，初始时我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">entrance</mtext>
</math></span> 加入队列。定义一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 记录步数，初始为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。然后我们开始进行广度优先搜索，每一轮我们取出队列中的所有元素，遍历这些元素，对于每个元素，我们尝试向四个方向移动，如果移动后的位置是一个空格子，我们将其加入队列，并将其标记为已访问。如果移动后的位置是边界上的空格子，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>。如果队列为空，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。这一轮搜索结束后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 加一，继续进行下一轮搜索。</p>
<p>遍历结束后，如果我们没有找到边界上的空格子，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是迷宫的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func nearestExit(maze [][]byte, entrance []int) int {</span></span>
<span class="line"><span>	m, n := len(maze), len(maze[0])</span></span>
<span class="line"><span>	q := [][2]int{{entrance[0], entrance[1]}}</span></span>
<span class="line"><span>	maze[entrance[0]][entrance[1]] = '+'</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for ans := 1; len(q) > 0; ans++ {</span></span>
<span class="line"><span>		for k := len(q); k > 0; k-- {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for l := 0; l &#x3C; 4; l++ {</span></span>
<span class="line"><span>				x, y := p[0]+dirs[l], p[1]+dirs[l+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; maze[x][y] == '.' {</span></span>
<span class="line"><span>					if x == 0 || x == m-1 || y == 0 || y == n-1 {</span></span>
<span class="line"><span>						return ans</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					q = append(q, [2]int{x, y})</span></span>
<span class="line"><span>					maze[x][y] = '+'</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/nearest-exit-from-entrance-in-maze" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1926.Nearest%20Exit%20from%20Entrance%20in%20Maze/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1980" tabindex="-1">1980. 找出不同的二进制字符串 <a class="header-anchor" href="#q-1980" aria-label="Permalink to &quot;1980. 找出不同的二进制字符串 {#q-1980}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、回溯</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串数组 <code>nums</code> ，该数组由 <code>n</code> 个 <strong>互不相同</strong> 的二进制字符串组成，且每个字符串长度都是 <code>n</code> 。请你找出并返回一个长度为 <code>n</code> 且 <strong>没有出现</strong> 在 <code>nums</code> 中的二进制字符串<em>。</em>如果存在多种答案，只需返回 <strong>任意一个</strong> 即可。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [&quot;01&quot;,&quot;10&quot;]&#10;<strong>输出：</strong>&quot;11&quot;&#10;<strong>解释：</strong>&quot;11&quot; 没有出现在 nums 中。&quot;00&quot; 也是正确答案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [&quot;00&quot;,&quot;01&quot;]&#10;<strong>输出：</strong>&quot;11&quot;&#10;<strong>解释：</strong>&quot;11&quot; 没有出现在 nums 中。&quot;10&quot; 也是正确答案。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [&quot;111&quot;,&quot;011&quot;,&quot;001&quot;]&#10;<strong>输出：</strong>&quot;101&quot;&#10;<strong>解释：</strong>&quot;101&quot; 没有出现在 nums 中。&quot;000&quot;、&quot;010&quot;、&quot;100&quot;、&quot;110&quot; 也是正确答案。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 16</code></li>&#10;	<li><code>nums[i].length == n</code></li>&#10;	<li><code>nums[i] </code>为 <code>'0'</code> 或 <code>'1'</code></li>&#10;	<li><code>nums</code> 中的所有字符串 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的串，全集有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 个，必存在未出现者。按 Hamming 重量分类： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 种重量，而串只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个，必缺一种重量。</p>
<p>用掩码记下已出现的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数，再构造该个数个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 后补 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>由于 <code v-pre>'1'</code> 在长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制字符串中出现的次数可以为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <mi>n</mi>
</math></span>（共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 种可能），因此我们一定可以找出一个新的二进制字符串，满足 <code v-pre>'1'</code> 在字符串中出现次数与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中每个字符串不同。</p>
<p>我们可以用一个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 记录所有字符串中 <code v-pre>'1'</code> 出现次数的情况，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 表示长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制字符串中 <code v-pre>'1'</code> 出现次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的字符串存在，否则不存在。</p>
<p>然后我们从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始枚举长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制字符串中 <code v-pre>'1'</code> 出现的次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则说明长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制字符串中 <code v-pre>'1'</code> 出现次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的字符串不存在，我们可以将这个字符串作为答案返回。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中字符串的总长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findDifferentBinaryString(nums []string) string {</span></span>
<span class="line"><span>	mask := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		mask |= 1 &#x3C;&#x3C; strings.Count(x, "1")</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; ; i++ {</span></span>
<span class="line"><span>		if mask>>i&#x26;1 == 0 {</span></span>
<span class="line"><span>			return strings.Repeat("1", i) + strings.Repeat("0", len(nums)-i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：构造 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>计数法需扫描全部比特。康托对角线更短：第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位取与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 相反的值，所得串与每一个输入至少差一位。</p>
</blockquote>
<p>我们可以构造一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位不同。由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的字符串互不相同，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 不会出现在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中字符串的长度。忽略答案字符串的空间复杂度，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findDifferentBinaryString(nums []string) string {</span></span>
<span class="line"><span>	ans := make([]byte, len(nums))</span></span>
<span class="line"><span>	for i, s := range nums {</span></span>
<span class="line"><span>		if s[i] == '0' {</span></span>
<span class="line"><span>			ans[i] = '1'</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans[i] = '0'</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-unique-binary-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1980.Find%20Unique%20Binary%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1992" tabindex="-1">1992. 找到所有的农场组 <a class="header-anchor" href="#q-1992" aria-label="Permalink to &quot;1992. 找到所有的农场组 {#q-1992}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始，大小为 <code>m x n</code> 的二进制矩阵 <code>land</code> ，其中 <code>0</code> 表示一单位的森林土地，<code>1</code> 表示一单位的农场土地。</p>&#10;&#10;<p>为了让农场保持有序，农场土地之间以矩形的 <strong>农场组</strong> 的形式存在。每一个农场组都 <strong>仅</strong> 包含农场土地。且题目保证不会有两个农场组相邻，也就是说一个农场组中的任何一块土地都 <strong>不会</strong> 与另一个农场组的任何一块土地在四个方向上相邻。</p>&#10;&#10;<p><code>land</code> 可以用坐标系统表示，其中 <code>land</code> 左上角坐标为 <code>(0, 0)</code> ，右下角坐标为 <code>(m-1, n-1)</code> 。请你找到所有 <b>农场组</b> 最左上角和最右下角的坐标。一个左上角坐标为 <code>(r<sub>1</sub>, c<sub>1</sub>)</code> 且右下角坐标为 <code>(r<sub>2</sub>, c<sub>2</sub>)</code> 的 <strong>农场组</strong> 用长度为 4 的数组 <code>[r<sub>1</sub>, c<sub>1</sub>, r<sub>2</sub>, c<sub>2</sub>]</code> 表示。</p>&#10;&#10;<p>请你返回一个二维数组，它包含若干个长度为 4 的子数组，每个子数组表示 <code>land</code> 中的一个 <strong>农场组</strong> 。如果没有任何农场组，请你返回一个空数组。可以以 <strong>任意顺序</strong> 返回所有农场组。</p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1992.Find%20All%20Groups%20of%20Farmland/images/screenshot-2021-07-27-at-12-23-15-copy-of-diagram-drawio-diagrams-net.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>land = [[1,0,0],[0,1,1],[0,1,1]]&#10;<b>输出：</b>[[0,0,0,0],[1,1,2,2]]&#10;<strong>解释：</strong>&#10;第一个农场组的左上角为 land[0][0] ，右下角为 land[0][0] 。&#10;第二个农场组的左上角为 land[1][1] ，右下角为 land[2][2] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1992.Find%20All%20Groups%20of%20Farmland/images/screenshot-2021-07-27-at-12-30-26-copy-of-diagram-drawio-diagrams-net.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>land = [[1,1],[1,1]]&#10;<b>输出：</b>[[0,0,1,1]]&#10;<strong>解释：</strong>&#10;第一个农场组左上角为 land[0][0] ，右下角为 land[1][1] 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1992.Find%20All%20Groups%20of%20Farmland/images/screenshot-2021-07-27-at-12-32-24-copy-of-diagram-drawio-diagrams-net.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>land = [[0]]&#10;<b>输出：</b>[]&#10;<b>解释：</b>&#10;没有任何农场组。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == land.length</code></li>&#10;	<li><code>n == land[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 300</code></li>&#10;	<li><code>land</code> 只包含 <code>0</code> 和 <code>1</code> 。</li>&#10;	<li>农场组都是 <strong>矩形</strong> 的形状。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>农田是矩形连通块。连通搜索可以圈出整块，矩形结构则允许直接根据边界读出四角。</p>
<p>只在「上方与左方都不是农田」的格子当作左上角，再向下、向右延伸到矩形右下角。每个矩形报告一次。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findFarmland(land [][]int) [][]int {</span></span>
<span class="line"><span>	m, n := len(land), len(land[0])</span></span>
<span class="line"><span>	var ans [][]int</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if land[i][j] == 0 || (j > 0 &#x26;&#x26; land[i][j-1] == 1) || (i > 0 &#x26;&#x26; land[i-1][j] == 1) {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			x, y := i, j</span></span>
<span class="line"><span>			for ; x+1 &#x3C; m &#x26;&#x26; land[x+1][j] == 1; x++ {</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			for ; y+1 &#x3C; n &#x26;&#x26; land[x][y+1] == 1; y++ {</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans = append(ans, []int{i, j, x, y})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-all-groups-of-farmland" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1992.Find%20All%20Groups%20of%20Farmland/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2014" tabindex="-1">2014. 重复 K 次的最长子序列 <a class="header-anchor" href="#q-2014" aria-label="Permalink to &quot;2014. 重复 K 次的最长子序列 {#q-2014}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、双指针、字符串、回溯、计数、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的字符串 <code>s</code> ，和一个整数 <code>k</code> 。请你找出字符串 <code>s</code> 中 <strong>重复</strong> <code>k</code> 次的 <strong>最长子序列</strong> 。</p>&#10;&#10;<p><strong>子序列</strong> 是由其他字符串删除某些（或不删除）字符派生而来的一个字符串。</p>&#10;&#10;<p>如果 <code>seq * k</code> 是 <code>s</code> 的一个子序列，其中 <code>seq * k</code> 表示一个由 <code>seq</code> 串联 <code>k</code> 次构造的字符串，那么就称 <code>seq</code><strong> </strong>是字符串 <code>s</code> 中一个 <strong>重复 <code>k</code> 次</strong> 的子序列。</p>&#10;&#10;<ul>&#10;	<li>举个例子，<code>&quot;bba&quot;</code> 是字符串 <code>&quot;bababcba&quot;</code> 中的一个重复 <code>2</code> 次的子序列，因为字符串 <code>&quot;bbabba&quot;</code> 是由 <code>&quot;bba&quot;</code> 串联 <code>2</code> 次构造的，而 <code>&quot;bbabba&quot;</code> 是字符串 <code>&quot;<em><strong>b</strong></em>a<em><strong>bab</strong></em>c<em><strong>ba</strong></em>&quot;</code> 的一个子序列。</li>&#10;</ul>&#10;&#10;<p>返回字符串 <code>s</code> 中 <strong>重复 k 次的最长子序列</strong>  。如果存在多个满足的子序列，则返回 <strong>字典序最大</strong> 的那个。如果不存在这样的子序列，返回一个 <strong>空</strong> 字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="example 1" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2000-2099/2014.Longest%20Subsequence%20Repeated%20k%20Times/images/longest-subsequence-repeat-k-times.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;letsleetcode&quot;, k = 2&#10;<strong>输出：</strong>&quot;let&quot;&#10;<strong>解释：</strong>存在两个最长子序列重复 2 次：let&quot; 和 &quot;ete&quot; 。&#10;&quot;let&quot; 是其中字典序最大的一个。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;bb&quot;, k = 2&#10;<strong>输出：</strong>&quot;b&quot;&#10;<strong>解释：</strong>重复 2 次的最长子序列是 &quot;b&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;ab&quot;, k = 2&#10;<strong>输出：</strong>&quot;&quot;&#10;<strong>解释：</strong>不存在重复 2 次的最长子序列。返回空字符串。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == s.length</code></li>&#10;	<li><code>2 &lt;= k &lt;= 2000</code></li>&#10;	<li><code>2 &lt;= n &lt; min(2001, k * 8)</code></li>&#10;	<li><code>s</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&lt;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mn>2001</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo>&#x22C5;</mo>
  <mn>8</mn>
  <mo stretchy="false">)</mo>
</math></span>，重复 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次的子序列长度至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>k</mi>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#x2264;</mo>
  <mn>7</mn>
</math></span>。字符须至少出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次才可能进入答案。</p>
<p>在长度受限时，按字典序从短到长扩展候选，比 DFS 更易保证「最后一次成功」即为最长且字典序最大（同长时后扩展的字母更大）。</p>
<p>队列从空串出发，仅把出现次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 的字母按升序追加；<code v-pre>check</code> 用双指针判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中能否匹配 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 遍。</p>
</blockquote>
<p>我们可以先统计字符串中每个字符出现的次数，然后将出现次数大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的字符按从小到大的顺序存入一个列表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cs</mtext>
</math></span> 中。接下来，我们可以使用 BFS 来枚举所有可能的子序列。</p>
<p>我们定义一个队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span>，初始时将空字符串放入队列中。然后，我们从队列中取出一个字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span>，并尝试将每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>&#x2208;</mo>
  <mtext mathvariant="italic">cs</mtext>
</math></span> 添加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span> 的末尾，形成一个新的字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nxt</mtext>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nxt</mtext>
</math></span> 是一个重复 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次的子序列，我们就将其加入到答案中，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nxt</mtext>
</math></span> 放入队列中继续处理。</p>
<p>我们需要一个辅助函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check(t, k)</mtext>
</math></span> 来判断字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">t</mtext>
</math></span> 是否是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的一个重复 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次的子序列。具体地，我们可以使用两个指针来遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">t</mtext>
</math></span>，如果在遍历过程中能够找到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">t</mtext>
</math></span> 的所有字符，并且能够重复 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次，那么就返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">false</mtext>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestSubsequenceRepeatedK(s string, k int) string {</span></span>
<span class="line"><span>	check := func(t string, k int) bool {</span></span>
<span class="line"><span>		i := 0</span></span>
<span class="line"><span>		for _, c := range s {</span></span>
<span class="line"><span>			if byte(c) == t[i] {</span></span>
<span class="line"><span>				i++</span></span>
<span class="line"><span>				if i == len(t) {</span></span>
<span class="line"><span>					k--</span></span>
<span class="line"><span>					if k == 0 {</span></span>
<span class="line"><span>						return true</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					i = 0</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>		cnt[s[i]-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cs := []byte{}</span></span>
<span class="line"><span>	for c := byte('a'); c &#x3C;= 'z'; c++ {</span></span>
<span class="line"><span>		if cnt[c-'a'] >= k {</span></span>
<span class="line"><span>			cs = append(cs, c)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	q := []string{""}</span></span>
<span class="line"><span>	ans := ""</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		cur := q[0]</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		for _, c := range cs {</span></span>
<span class="line"><span>			nxt := cur + string(c)</span></span>
<span class="line"><span>			if check(nxt, k) {</span></span>
<span class="line"><span>				ans = nxt</span></span>
<span class="line"><span>				q = append(q, nxt)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-subsequence-repeated-k-times" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2000-2099/2014.Longest%20Subsequence%20Repeated%20k%20Times/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2044" tabindex="-1">2044. 统计按位或能得到最大值的子集数目 <a class="header-anchor" href="#q-2044" aria-label="Permalink to &quot;2044. 统计按位或能得到最大值的子集数目 {#q-2044}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、回溯、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> ，请你找出 <code>nums</code> 子集 <strong>按位或</strong> 可能得到的<strong> </strong><strong>最大值</strong> ，并返回按位或能得到最大值的 <strong>不同非空子集的数目</strong> 。</p>&#10;&#10;<p>如果数组 <code>a</code> 可以由数组 <code>b</code> 删除一些元素（或不删除）得到，则认为数组 <code>a</code> 是数组 <code>b</code> 的一个 <strong>子集</strong> 。如果选中的元素下标位置不一样，则认为两个子集 <strong>不同</strong> 。</p>&#10;&#10;<p>对数组 <code>a</code> 执行 <strong>按位或</strong> ，结果等于 <code>a[0] <strong>OR</strong> a[1] <strong>OR</strong> ... <strong>OR</strong> a[a.length - 1]</code>（下标从 <strong>0</strong> 开始）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,1]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>子集按位或能得到的最大值是 3 。有 2 个子集按位或可以得到 3 ：&#10;- [3]&#10;- [3,1]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,2,2]&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>[2,2,2] 的所有非空子集的按位或都可以得到 2 。总共有 2<sup>3</sup> - 1 = 7 个子集。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,2,1,5]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>子集按位或可能的最大值是 7 。有 6 个子集按位或可以得到 7 ：&#10;- [3,5]&#10;- [3,1,5]&#10;- [3,2,5]&#10;- [3,2,1,5]&#10;- [2,5]&#10;- [2,1,5]</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 16</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>16</mn>
</math></span>，子集至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>16</mn>
    </mrow>
  </msup>
</math></span>。全体或即为最大或值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，只需统计或等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 的非空子集（空集或为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，一般不是最大）。</p>
<p>DFS 对每个下标选或不选，到达末尾时比较当前或值。递归深度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，无需额外存储全部掩码。</p>
</blockquote>
<p>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中按位或的最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 可以通过对数组中所有元素按位或得到。</p>
<p>然后我们可以使用深度优先搜索来枚举所有子集，统计按位或等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 的子集个数。我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs(i, t)</mtext>
</math></span>，表示从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span> 开始，当前按位或的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">t</mtext>
</math></span> 的子集个数。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
  <mo>=</mo>
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">t</mtext>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。</p>
<p>在函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs(i, t)</mtext>
</math></span> 中，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span> 等于数组长度，说明已经枚举完所有元素，此时如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">t</mtext>
</math></span> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span>，则答案加一。否则，我们可以选择不包含当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums[i]</mtext>
</math></span>，或者包含当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums[i]</mtext>
</math></span>，因此我们可以递归调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs(i + 1, t)</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs(i + 1, t | nums[i])</mtext>
</math></span>。</p>
<p>最后返回答案即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countMaxOrSubsets(nums []int) (ans int) {</span></span>
<span class="line"><span>	mx := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		mx |= x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var dfs func(i, t int)</span></span>
<span class="line"><span>	dfs = func(i, t int) {</span></span>
<span class="line"><span>		if i == len(nums) {</span></span>
<span class="line"><span>			if t == mx {</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(i+1, t)</span></span>
<span class="line"><span>		dfs(i+1, t|nums[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	dfs(0, 0)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：二进制枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一依赖递归。二进制枚举每个掩码，按位累或，同时维护当前最大与计数，可在一层循环内完成，且不必预先知道 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。</p>
<p>代价是多一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的内层扫描，空间降为常数。</p>
</blockquote>
<p>我们可以使用二进制枚举来统计所有子集的按位或结果。对于长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，我们可以使用一个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 来表示一个子集，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位为 1 表示包含元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums[i]</mtext>
</math></span>，为 0 则表示不包含。</p>
<p>我们可以遍历所有可能的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span>，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span>，我们可以计算出对应子集的按位或结果，并更新最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 和答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#x22C5;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countMaxOrSubsets(nums []int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	mx := 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for mask := 0; mask &#x3C; (1 &#x3C;&#x3C; n); mask++ {</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for i, v := range nums {</span></span>
<span class="line"><span>			if (mask>>i)&#x26;1 == 1 {</span></span>
<span class="line"><span>				t |= v</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if mx &#x3C; t {</span></span>
<span class="line"><span>			mx = t</span></span>
<span class="line"><span>			ans = 1</span></span>
<span class="line"><span>		} else if mx == t {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-number-of-maximum-bitwise-or-subsets" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2000-2099/2044.Count%20Number%20of%20Maximum%20Bitwise-OR%20Subsets/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2048" tabindex="-1">2048. 下一个更大的数值平衡数 <a class="header-anchor" href="#q-2048" aria-label="Permalink to &quot;2048. 下一个更大的数值平衡数 {#q-2048}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、数学、回溯、计数、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果整数  <code>x</code> 满足：对于每个数位 <code>d</code> ，这个数位 <strong>恰好</strong> 在 <code>x</code> 中出现 <code>d</code> 次。那么整数 <code>x</code> 就是一个 <strong>数值平衡数</strong> 。</p>&#10;&#10;<p>给你一个整数 <code>n</code> ，请你返回 <strong>严格大于</strong> <code>n</code> 的 <strong>最小数值平衡数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1&#10;<strong>输出：</strong>22&#10;<strong>解释：</strong>&#10;22 是一个数值平衡数，因为：&#10;- 数字 2 出现 2 次 &#10;这也是严格大于 1 的最小数值平衡数。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1000&#10;<strong>输出：</strong>1333&#10;<strong>解释：</strong>&#10;1333 是一个数值平衡数，因为：&#10;- 数字 1 出现 1 次。&#10;- 数字 3 出现 3 次。 &#10;这也是严格大于 1000 的最小数值平衡数。&#10;注意，1022 不能作为本输入的答案，因为数字 0 的出现次数超过了 0 。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3000&#10;<strong>输出：</strong>3133&#10;<strong>解释：</strong>&#10;3133 是一个数值平衡数，因为：&#10;- 数字 1 出现 1 次。&#10;- 数字 3 出现 3 次。 &#10;这也是严格大于 3000 的最小数值平衡数。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= n &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span>，下一个平衡数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1224444</mn>
</math></span>，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 逐个检验可行。平衡指数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 若出现则恰出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 次。</p>
<p>对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 统计十进制各位频次，检查非零频次是否等于该数字本身。<code v-pre>count</code> 递增直到命中。</p>
</blockquote>
<p>我们注意到，题目中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的范围是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
  <mo stretchy="false">]</mo>
</math></span>，而大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span> 的其中一个数值平衡数是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1224444</mn>
</math></span>，因此我们直接枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo stretchy="false">]</mo>
</math></span>，然后判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是否是数值平衡数即可。枚举的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 一定不会超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1224444</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>M</mi>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>=</mo>
  <mn>1224444</mn>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func nextBeautifulNumber(n int) int {</span></span>
<span class="line"><span>	for x := n + 1; ; x++ {</span></span>
<span class="line"><span>		cnt := [10]int{}</span></span>
<span class="line"><span>		for y := x; y > 0; y /= 10 {</span></span>
<span class="line"><span>			cnt[y%10]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ok := true</span></span>
<span class="line"><span>		for y := x; y > 0; y /= 10 {</span></span>
<span class="line"><span>			if y%10 != cnt[y%10] {</span></span>
<span class="line"><span>				ok = false</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ok {</span></span>
<span class="line"><span>			return x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/next-greater-numerically-balanced-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2000-2099/2048.Next%20Greater%20Numerically%20Balanced%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2056" tabindex="-1">2056. 棋盘上有效移动组合的数目 <a class="header-anchor" href="#q-2056" aria-label="Permalink to &quot;2056. 棋盘上有效移动组合的数目 {#q-2056}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、字符串、回溯、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有一个 <code>8 x 8</code> 的棋盘，它包含 <code>n</code> 个棋子（棋子包括车，后和象三种）。给你一个长度为 <code>n</code> 的字符串数组 <code>pieces</code> ，其中 <code>pieces[i]</code> 表示第 <code>i</code> 个棋子的类型（车，后或象）。除此以外，还给你一个长度为 <code>n</code> 的二维整数数组 <code>positions</code> ，其中 <code>positions[i] = [r<sub>i</sub>, c<sub>i</sub>]</code> 表示第 <code>i</code> 个棋子现在在棋盘上的位置为 <code>(r<sub>i</sub>, c<sub>i</sub>)</code> ，棋盘下标从 <strong>1</strong> 开始。</p>&#10;&#10;<p>每个棋子的移动中，首先选择移动的 <strong>方向</strong> ，然后选择 <strong>移动的步数</strong> ，同时你要确保移动过程中棋子不能移到棋盘以外的地方。棋子需按照以下规则移动：</p>&#10;&#10;<ul>&#10;	<li>车可以 <strong>水平或者竖直</strong> 从 <code>(r, c)</code> 沿着方向 <code>(r+1, c)</code>，<code>(r-1, c)</code>，<code>(r, c+1)</code> 或者 <code>(r, c-1)</code> 移动。</li>&#10;	<li>后可以 <strong>水平竖直或者斜对角</strong> 从 <code>(r, c)</code> 沿着方向 <code>(r+1, c)</code>，<code>(r-1, c)</code>，<code>(r, c+1)</code>，<code>(r, c-1)</code>，<code>(r+1, c+1)</code>，<code>(r+1, c-1)</code>，<code>(r-1, c+1)</code>，<code>(r-1, c-1)</code> 移动。</li>&#10;	<li>象可以 <strong>斜对角</strong> 从 <code>(r, c)</code> 沿着方向 <code>(r+1, c+1)</code>，<code>(r+1, c-1)</code>，<code>(r-1, c+1)</code>，<code>(r-1, c-1)</code> 移动。</li>&#10;</ul>&#10;&#10;<p>你必须同时 <strong>移动</strong> 棋盘上的每一个棋子。<strong>移动组合</strong> 包含所有棋子的 <strong>移动</strong> 。每一秒，每个棋子都沿着它们选择的方向往前移动 <strong>一步</strong> ，直到它们到达目标位置。所有棋子从时刻 <code>0</code> 开始移动。如果在某个时刻，两个或者更多棋子占据了同一个格子，那么这个移动组合 <strong>不有效</strong> 。</p>&#10;&#10;<p>请你返回 <strong>有效</strong> 移动组合的数目。</p>&#10;&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li>初始时，<strong>不会有两个棋子</strong> 在 <strong>同一个位置 。</strong></li>&#10;	<li>有可能在一个移动组合中，有棋子不移动。</li>&#10;	<li>如果两个棋子 <strong>直接相邻</strong> 且两个棋子下一秒要互相占据对方的位置，可以将它们在同一秒内 <strong>交换位置</strong> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2000-2099/2056.Number%20of%20Valid%20Move%20Combinations%20On%20Chessboard/images/a1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<b>输入：</b>pieces = [&quot;rook&quot;], positions = [[1,1]]&#10;<b>输出：</b>15&#10;<b>解释：</b>上图展示了棋子所有可能的移动。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2000-2099/2056.Number%20of%20Valid%20Move%20Combinations%20On%20Chessboard/images/a2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<b>输入：</b>pieces = [&quot;queen&quot;], positions = [[1,1]]&#10;<b>输出：</b>22&#10;<b>解释：</b>上图展示了棋子所有可能的移动。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2000-2099/2056.Number%20of%20Valid%20Move%20Combinations%20On%20Chessboard/images/a3.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<b>输入：</b>pieces = [&quot;bishop&quot;], positions = [[4,3]]&#10;<b>输出：</b>12&#10;<b>解释：</b>上图展示了棋子所有可能的移动。&#10;</pre>&#10;&#10;<p><strong>示例 4:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2000-2099/2056.Number%20of%20Valid%20Move%20Combinations%20On%20Chessboard/images/a4.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<b>输入：</b>pieces = [&quot;rook&quot;,&quot;rook&quot;], positions = [[1,1],[8,8]]&#10;<b>输出：</b>223&#10;<b>解释：</b>每个车有 15 种移动，所以总共有 15 * 15 = 225 种移动组合。&#10;但是，有两个是不有效的移动组合：&#10;- 将两个车都移动到 (8, 1) ，会导致它们在同一个格子相遇。&#10;- 将两个车都移动到 (1, 8) ，会导致它们在同一个格子相遇。&#10;所以，总共有 225 - 2 = 223 种有效移动组合。&#10;注意，有两种有效的移动组合，分别是一个车在 (1, 8) ，另一个车在 (8, 1) 。&#10;即使棋盘状态是相同的，这两个移动组合被视为不同的，因为每个棋子移动操作是不相同的。&#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2000-2099/2056.Number%20of%20Valid%20Move%20Combinations%20On%20Chessboard/images/a5.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<b>输入：</b>pieces = [&quot;queen&quot;,&quot;bishop&quot;], positions = [[5,7],[3,4]]&#10;<b>输出：</b>281&#10;<b>解释：</b>总共有 12 * 24 = 288 种移动组合。&#10;但是，有一些不有效的移动组合：&#10;- 如果后停在 (6, 7) ，它会阻挡象到达 (6, 7) 或者 (7, 8) 。&#10;- 如果后停在 (5, 6) ，它会阻挡象到达 (5, 6) ，(6, 7) 或者 (7, 8) 。&#10;- 如果象停在 (5, 2) ，它会阻挡后到达 (5, 2) 或者 (5, 1) 。&#10;在 288 个移动组合当中，281 个是有效的。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == pieces.length </code></li>&#10;	<li><code>n == positions.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 4</code></li>&#10;	<li><code>pieces</code> 只包含字符串 <code>&quot;rook&quot;</code> ，<code>&quot;queen&quot;</code> 和 <code>&quot;bishop&quot;</code> 。</li>&#10;	<li>棋盘上最多只有一个后。</li>&#10;	<li><code>1 &lt;= r<sub>i</sub>, c<sub>i</sub> &lt;= 8</code></li>&#10;	<li>每一个 <code>positions[i]</code> 互不相同。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>棋子至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 个，棋盘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mn>8</mn>
</math></span>，方向各不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>。组合爆炸但规模仍可用 DFS：按顺序为每个棋子选定方向与停步时刻，并与此前棋子的时空轨迹查冲突。</p>
<p><code v-pre>dist[i][x][y]</code> 记录经过时间，<code v-pre>end</code> 记录终点。停步要求更早棋子未在该时刻后仍占格；途经要求无同时同格、也无已被占用的终点。</p>
<p>全部棋子安排完毕则方案加一。</p>
</blockquote>
<p>题目最多只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 个棋子，每个棋子的移动方向最多有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span> 种，我们可以考虑使用 DFS 搜索所有的移动组合。</p>
<p>我们按照顺序依次枚举每个棋子，对于每个棋子，我们可以选择不移动，或者按照规则移动，用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dist</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 记录第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个棋子的移动情况，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dist</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个棋子经过坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 时的时间，用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">end</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 记录第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个棋子的终点坐标和时间。在搜索时，我们需要分别判断当前棋子是否可以停止移动，以及当前棋子是否可以继续在当前方向移动。</p>
<p>我们定义方法 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>checkStop</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo>,</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 判断第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个棋子是否在时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 时停在坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果对于此前的所有棋子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，都有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dist</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>t</mi>
</math></span>，那么第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个棋子可以停止移动。</p>
<p>另外，我们定义方法 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>checkPass</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo>,</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 判断第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个棋子是否可以在时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 时经过坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>。如果此前有其它棋子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 也在时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 经过坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，或者有其它棋子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 停在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，且时间不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，那么第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个棋子不能在时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 时经过坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>M</mi>
  <msup>
    <mo stretchy="false">)</mo>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是棋子的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是每个棋子的移动范围。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countCombinations(pieces []string, positions [][]int) (ans int) {</span></span>
<span class="line"><span>	n := len(pieces)</span></span>
<span class="line"><span>	m := 9</span></span>
<span class="line"><span>	dist := make([][][]int, n)</span></span>
<span class="line"><span>	for i := range dist {</span></span>
<span class="line"><span>		dist[i] = make([][]int, m)</span></span>
<span class="line"><span>		for j := range dist[i] {</span></span>
<span class="line"><span>			dist[i][j] = make([]int, m)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	end := make([][3]int, n)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	rookDirs := [][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}</span></span>
<span class="line"><span>	bishopDirs := [][2]int{{1, 1}, {1, -1}, {-1, 1}, {-1, -1}}</span></span>
<span class="line"><span>	queenDirs := [][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	resetDist := func(i int) {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; m; j++ {</span></span>
<span class="line"><span>			for k := 0; k &#x3C; m; k++ {</span></span>
<span class="line"><span>				dist[i][j][k] = -1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	checkStop := func(i, x, y, t int) bool {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			if dist[j][x][y] >= t {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	checkPass := func(i, x, y, t int) bool {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			if dist[j][x][y] == t {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if end[j][0] == x &#x26;&#x26; end[j][1] == y &#x26;&#x26; end[j][2] &#x3C;= t {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	isValid := func(x, y int) bool {</span></span>
<span class="line"><span>		return x >= 1 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 1 &#x26;&#x26; y &#x3C; m</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	getDirs := func(piece string) [][2]int {</span></span>
<span class="line"><span>		switch piece[0] {</span></span>
<span class="line"><span>		case 'r':</span></span>
<span class="line"><span>			return rookDirs</span></span>
<span class="line"><span>		case 'b':</span></span>
<span class="line"><span>			return bishopDirs</span></span>
<span class="line"><span>		default:</span></span>
<span class="line"><span>			return queenDirs</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var dfs func(i int)</span></span>
<span class="line"><span>	dfs = func(i int) {</span></span>
<span class="line"><span>		if i >= n {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		x, y := positions[i][0], positions[i][1]</span></span>
<span class="line"><span>		resetDist(i)</span></span>
<span class="line"><span>		dist[i][x][y] = 0</span></span>
<span class="line"><span>		end[i] = [3]int{x, y, 0}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if checkStop(i, x, y, 0) {</span></span>
<span class="line"><span>			dfs(i + 1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		dirs := getDirs(pieces[i])</span></span>
<span class="line"><span>		for _, dir := range dirs {</span></span>
<span class="line"><span>			resetDist(i)</span></span>
<span class="line"><span>			dist[i][x][y] = 0</span></span>
<span class="line"><span>			nx, ny, nt := x+dir[0], y+dir[1], 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			for isValid(nx, ny) &#x26;&#x26; checkPass(i, nx, ny, nt) {</span></span>
<span class="line"><span>				dist[i][nx][ny] = nt</span></span>
<span class="line"><span>				end[i] = [3]int{nx, ny, nt}</span></span>
<span class="line"><span>				if checkStop(i, nx, ny, nt) {</span></span>
<span class="line"><span>					dfs(i + 1)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				nx += dir[0]</span></span>
<span class="line"><span>				ny += dir[1]</span></span>
<span class="line"><span>				nt++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	dfs(0)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-valid-move-combinations-on-chessboard" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2000-2099/2056.Number%20of%20Valid%20Move%20Combinations%20On%20Chessboard/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2059" tabindex="-1">2059. 转化数字的最小运算数 <a class="header-anchor" href="#q-2059" aria-label="Permalink to &quot;2059. 转化数字的最小运算数 {#q-2059}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，该数组由 <strong>互不相同</strong> 的数字组成。另给你两个整数 <code>start</code> 和 <code>goal</code> 。</p>&#10;&#10;<p>整数 <code>x</code> 的值最开始设为 <code>start</code> ，你打算执行一些运算使 <code>x</code> 转化为 <code>goal</code> 。你可以对数字 <code>x</code> 重复执行下述运算：</p>&#10;&#10;<p>如果 <code>0 &lt;= x &lt;= 1000</code> ，那么，对于数组中的任一下标 <code>i</code>（<code>0 &lt;= i &lt; nums.length</code>），可以将 <code>x</code> 设为下述任一值：</p>&#10;&#10;<ul>&#10;	<li><code>x + nums[i]</code></li>&#10;	<li><code>x - nums[i]</code></li>&#10;	<li><code>x ^ nums[i]</code>（按位异或 XOR）</li>&#10;</ul>&#10;&#10;<p>注意，你可以按任意顺序使用每个 <code>nums[i]</code> 任意次。使 <code>x</code> 越过 <code>0 &lt;= x &lt;= 1000</code> 范围的运算同样可以生效，但该该运算执行后将不能执行其他运算。</p>&#10;&#10;<p>返回将 <code>x = start</code><em> </em>转化为<em> </em><code>goal</code><em> </em>的最小操作数；如果无法完成转化，则返回<em> </em><code>-1</code><em> </em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,4,12], start = 2, goal = 12&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;可以按 2 → 14 → 12 的转化路径进行，只需执行下述 2 次运算：&#10;- 2 + 12 = 14&#10;- 14 - 2 = 12&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,5,7], start = 0, goal = -4&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;可以按 0 → 3 → -4 的转化路径进行，只需执行下述 2 次运算：&#10;- 0 + 3 = 3&#10;- 3 - 7 = -4&#10;注意，最后一步运算使 x 超过范围 0 &lt;= x &lt;= 1000 ，但该运算仍然可以生效。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,8,16], start = 0, goal = 1&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>&#10;无法将 0 转化为 1</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= nums[i], goal &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= start &lt;= 1000</code></li>&#10;	<li><code>start != goal</code></li>&#10;	<li><code>nums</code> 中的所有整数互不相同</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次对当前值做加、减或异或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，目标可达范围实际被限制在继续扩展的中间态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1000</mn>
  <mo stretchy="false">]</mo>
</math></span>。状态数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>1001</mn>
</math></span>，最短操作次数适合 BFS。</p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>t</mi>
</math></span> 出队，对每个数与三种运算生成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>x</mi>
</math></span>；命中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 即返回步数，合法中间态入队并标记，避免重复。</p>
</blockquote>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>t</mi>
</math></span> 出发，对每个数做加减异或，广搜到达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 的最少步数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumOperations(nums []int, start int, goal int) int {</span></span>
<span class="line"><span>	type pair struct {</span></span>
<span class="line"><span>		x    int</span></span>
<span class="line"><span>		step int</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ops := []func(int, int) int{</span></span>
<span class="line"><span>		func(x, y int) int { return x + y },</span></span>
<span class="line"><span>		func(x, y int) int { return x - y },</span></span>
<span class="line"><span>		func(x, y int) int { return x ^ y },</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis := make([]bool, 1001)</span></span>
<span class="line"><span>	q := []pair{{start, 0}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		x, step := q[0].x, q[0].step</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		for _, num := range nums {</span></span>
<span class="line"><span>			for _, op := range ops {</span></span>
<span class="line"><span>				nx := op(x, num)</span></span>
<span class="line"><span>				if nx == goal {</span></span>
<span class="line"><span>					return step + 1</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if nx >= 0 &#x26;&#x26; nx &#x3C;= 1000 &#x26;&#x26; !vis[nx] {</span></span>
<span class="line"><span>					q = append(q, pair{nx, step + 1})</span></span>
<span class="line"><span>					vis[nx] = true</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：BFS（分层） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一在入队时携带步数。改为按层扩展， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 每层加一，语义相同而队列元素更轻。</p>
<p><code v-pre>next</code> 集中生成后继，层次循环结束仍未到达则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>同样广搜，按层扩展下一状态。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumOperations(nums []int, start int, goal int) int {</span></span>
<span class="line"><span>	next := func(x int) []int {</span></span>
<span class="line"><span>		var res []int</span></span>
<span class="line"><span>		for _, num := range nums {</span></span>
<span class="line"><span>			res = append(res, []int{x + num, x - num, x ^ num}...)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return res</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q := []int{start}</span></span>
<span class="line"><span>	vis := make([]bool, 1001)</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		for n := len(q); n > 0; n-- {</span></span>
<span class="line"><span>			x := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for _, y := range next(x) {</span></span>
<span class="line"><span>				if y == goal {</span></span>
<span class="line"><span>					return ans</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if y >= 0 &#x26;&#x26; y &#x3C;= 1000 &#x26;&#x26; !vis[y] {</span></span>
<span class="line"><span>					vis[y] = true</span></span>
<span class="line"><span>					q = append(q, y)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：双向 BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>单向 BFS 在分支因子大时队列偏长。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 也可能作为起点向回走（运算可逆意义下的相遇）。两端同时扩展，每次选更短的一侧，相遇步数相加。</p>
<p>中间态仍限制在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1000</mn>
  <mo stretchy="false">]</mo>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 本身可在范围外，故目标侧首次扩展即可命中。</p>
</blockquote>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 两端同时扩展，相遇即得到最少操作次数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumOperations(nums []int, start int, goal int) int {</span></span>
<span class="line"><span>	next := func(x int) []int {</span></span>
<span class="line"><span>		var res []int</span></span>
<span class="line"><span>		for _, num := range nums {</span></span>
<span class="line"><span>			res = append(res, []int{x + num, x - num, x ^ num}...)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return res</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m1, m2 := map[int]int{start: 0}, map[int]int{goal: 0}</span></span>
<span class="line"><span>	q1, q2 := []int{start}, []int{goal}</span></span>
<span class="line"><span>	extend := func() int {</span></span>
<span class="line"><span>		for i := len(q1); i > 0; i-- {</span></span>
<span class="line"><span>			x := q1[0]</span></span>
<span class="line"><span>			q1 = q1[1:]</span></span>
<span class="line"><span>			step, _ := m1[x]</span></span>
<span class="line"><span>			for _, y := range next(x) {</span></span>
<span class="line"><span>				if _, ok := m1[y]; ok {</span></span>
<span class="line"><span>					continue</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if v, ok := m2[y]; ok {</span></span>
<span class="line"><span>					return step + 1 + v</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if y >= 0 &#x26;&#x26; y &#x3C;= 1000 {</span></span>
<span class="line"><span>					m1[y] = step + 1</span></span>
<span class="line"><span>					q1 = append(q1, y)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for len(q1) > 0 &#x26;&#x26; len(q2) > 0 {</span></span>
<span class="line"><span>		if len(q1) > len(q2) {</span></span>
<span class="line"><span>			m1, m2 = m2, m1</span></span>
<span class="line"><span>			q1, q2 = q2, q1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := extend()</span></span>
<span class="line"><span>		if t != -1 {</span></span>
<span class="line"><span>			return t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-convert-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2000-2099/2059.Minimum%20Operations%20to%20Convert%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2146" tabindex="-1">2146. 价格范围内最高排名的 K 样物品 <a class="header-anchor" href="#q-2146" aria-label="Permalink to &quot;2146. 价格范围内最高排名的 K 样物品 {#q-2146}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组、矩阵、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>grid</code> ，它的大小为 <code>m x n</code> ，表示一个商店中物品的分布图。数组中的整数含义为：</p>&#10;&#10;<ul>&#10;	<li><code>0</code> 表示无法穿越的一堵墙。</li>&#10;	<li><code>1</code> 表示可以自由通过的一个空格子。</li>&#10;	<li>所有其他正整数表示该格子内的一样物品的价格。你可以自由经过这些格子。</li>&#10;</ul>&#10;&#10;<p>从一个格子走到上下左右相邻格子花费 <code>1</code> 步。</p>&#10;&#10;<p>同时给你一个整数数组 <code>pricing</code> 和 <code>start</code> ，其中 <code>pricing = [low, high]</code> 且 <code>start = [row, col]</code> ，表示你开始位置为 <code>(row, col)</code> ，同时你只对物品价格在<strong> 闭区间</strong> <code>[low, high]</code> 之内的物品感兴趣。同时给你一个整数 <code>k</code> 。</p>&#10;&#10;<p>你想知道给定范围 <strong>内</strong> 且 <strong>排名最高</strong> 的 <code>k</code> 件物品的 <strong>位置</strong> 。排名按照优先级从高到低的以下规则制定：</p>&#10;&#10;<ol>&#10;	<li>距离：定义为从 <code>start</code> 到一件物品的最短路径需要的步数（<strong>较近</strong> 距离的排名更高）。</li>&#10;	<li>价格：<strong>较低</strong> 价格的物品有更高优先级，但只考虑在给定范围之内的价格。</li>&#10;	<li>行坐标：<strong>较小</strong> 行坐标的有更高优先级。</li>&#10;	<li>列坐标：<strong>较小</strong> 列坐标的有更高优先级。</li>&#10;</ol>&#10;&#10;<p>请你返回给定价格内排名最高的 <code>k</code> 件物品的坐标，将它们按照排名排序后返回。如果给定价格内少于 <code>k</code> 件物品，那么请将它们的坐标 <strong>全部</strong> 返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2146.K%20Highest%20Ranked%20Items%20Within%20a%20Price%20Range/images/example1drawio.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[1,2,0,1],[1,3,0,1],[0,2,5,1]], pricing = [2,5], start = [0,0], k = 3&#10;<b>输出：</b>[[0,1],[1,1],[2,1]]&#10;<b>解释：</b>起点为 (0,0) 。&#10;价格范围为 [2,5] ，我们可以选择的物品坐标为 (0,1)，(1,1)，(2,1) 和 (2,2) 。&#10;这些物品的排名为：&#10;- (0,1) 距离为 1&#10;- (1,1) 距离为 2&#10;- (2,1) 距离为 3&#10;- (2,2) 距离为 4&#10;所以，给定价格范围内排名最高的 3 件物品的坐标为 (0,1)，(1,1) 和 (2,1) 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2146.K%20Highest%20Ranked%20Items%20Within%20a%20Price%20Range/images/example2drawio1.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[1,2,0,1],[1,3,3,1],[0,2,5,1]], pricing = [2,3], start = [2,3], k = 2&#10;<b>输出：</b>[[2,1],[1,2]]&#10;<b>解释：</b>起点为 (2,3) 。&#10;价格范围为 [2,3] ，我们可以选择的物品坐标为 (0,1)，(1,1)，(1,2) 和 (2,1) 。&#10;这些物品的排名为： &#10;- (2,1) 距离为 2 ，价格为 2&#10;- (1,2) 距离为 2 ，价格为 3&#10;- (1,1) 距离为 3&#10;- (0,1) 距离为 4&#10;所以，给定价格范围内排名最高的 2 件物品的坐标为 (2,1) 和 (1,2) 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2146.K%20Highest%20Ranked%20Items%20Within%20a%20Price%20Range/images/example3.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[1,1,1],[0,0,1],[2,3,4]], pricing = [2,3], start = [0,0], k = 3&#10;<b>输出：</b>[[2,1],[2,0]]&#10;<b>解释：</b>起点为 (0,0) 。&#10;价格范围为 [2,3] ，我们可以选择的物品坐标为 (2,0) 和 (2,1) 。&#10;这些物品的排名为：&#10;- (2,1) 距离为 5&#10;- (2,0) 距离为 6&#10;所以，给定价格范围内排名最高的 2 件物品的坐标为 (2,1) 和 (2,0) 。&#10;注意，k = 3 但给定价格范围内只有 2 件物品。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= m * n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= grid[i][j] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>pricing.length == 2</code></li>&#10;	<li><code>2 &lt;= low &lt;= high &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>start.length == 2</code></li>&#10;	<li><code>0 &lt;= row &lt;= m - 1</code></li>&#10;	<li><code>0 &lt;= col &lt;= n - 1</code></li>&#10;	<li><code>grid[row][col] > 0</code></li>&#10;	<li><code>1 &lt;= k &lt;= m * n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排名先比距离，再比价格、行、列。网格可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 量级，对每个格子单独求最短路过重。从起点 BFS 的层次即曼哈顿障碍距离，且首次访问即为最短。</p>
<p>搜索中收集价格落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">low</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">high</mtext>
  <mo stretchy="false">]</mo>
</math></span> 的格子及其距离，最后按四元组排序取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>把访问过的格子置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 以免入队两次。</p>
</blockquote>
<p>我们可以从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">row</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">col</mtext>
  <mo stretchy="false">)</mo>
</math></span> 出发，使用广度优先搜索找到所有价格在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">low</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">high</mtext>
  <mo stretchy="false">]</mo>
</math></span> 范围内的物品，将这些物品的距离、价格、行坐标和列坐标存入数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 中。</p>
<p>最后对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 按照距离、价格、行坐标和列坐标的顺序排序，取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个物品的坐标返回。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是二维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">grid</mtext>
</math></span> 的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func highestRankedKItems(grid [][]int, pricing []int, start []int, k int) (ans [][]int) {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	row, col := start[0], start[1]</span></span>
<span class="line"><span>	low, high := pricing[0], pricing[1]</span></span>
<span class="line"><span>	q := [][2]int{{row, col}}</span></span>
<span class="line"><span>	pq := [][]int{}</span></span>
<span class="line"><span>	if low &#x3C;= grid[row][col] &#x26;&#x26; grid[row][col] &#x3C;= high {</span></span>
<span class="line"><span>		pq = append(pq, []int{0, grid[row][col], row, col})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	grid[row][col] = 0</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for step := 1; len(q) > 0; step++ {</span></span>
<span class="line"><span>		for sz := len(q); sz > 0; sz-- {</span></span>
<span class="line"><span>			x, y := q[0][0], q[0][1]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for j := 0; j &#x3C; 4; j++ {</span></span>
<span class="line"><span>				nx, ny := x+dirs[j], y+dirs[j+1]</span></span>
<span class="line"><span>				if nx >= 0 &#x26;&#x26; nx &#x3C; m &#x26;&#x26; ny >= 0 &#x26;&#x26; ny &#x3C; n &#x26;&#x26; grid[nx][ny] > 0 {</span></span>
<span class="line"><span>					if low &#x3C;= grid[nx][ny] &#x26;&#x26; grid[nx][ny] &#x3C;= high {</span></span>
<span class="line"><span>						pq = append(pq, []int{step, grid[nx][ny], nx, ny})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					grid[nx][ny] = 0</span></span>
<span class="line"><span>					q = append(q, [2]int{nx, ny})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(pq, func(i, j int) bool {</span></span>
<span class="line"><span>		a, b := pq[i], pq[j]</span></span>
<span class="line"><span>		if a[0] != b[0] {</span></span>
<span class="line"><span>			return a[0] &#x3C; b[0]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if a[1] != b[1] {</span></span>
<span class="line"><span>			return a[1] &#x3C; b[1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if a[2] != b[2] {</span></span>
<span class="line"><span>			return a[2] &#x3C; b[2]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return a[3] &#x3C; b[3]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(pq) &#x26;&#x26; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		ans = append(ans, pq[i][2:])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/k-highest-ranked-items-within-a-price-range" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2146.K%20Highest%20Ranked%20Items%20Within%20a%20Price%20Range/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2151" tabindex="-1">2151. 基于陈述统计最多好人数 <a class="header-anchor" href="#q-2151" aria-label="Permalink to &quot;2151. 基于陈述统计最多好人数 {#q-2151}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、回溯、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>游戏中存在两种角色：</p>&#10;&#10;<ul>&#10;	<li><strong>好人</strong>：该角色只说真话。</li>&#10;	<li><strong>坏人</strong>：该角色可能说真话，也可能说假话。</li>&#10;</ul>&#10;&#10;<p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>statements</code> ，大小为 <code>n x n</code> ，表示 <code>n</code> 个玩家对彼此角色的陈述。具体来说，<code>statements[i][j]</code> 可以是下述值之一：</p>&#10;&#10;<ul>&#10;	<li><code>0</code> 表示 <code>i</code> 的陈述认为 <code>j</code> 是 <strong>坏人</strong> 。</li>&#10;	<li><code>1</code> 表示 <code>i</code> 的陈述认为 <code>j</code> 是 <strong>好人</strong> 。</li>&#10;	<li><code>2</code> 表示 <code>i</code> 没有对 <code>j</code> 作出陈述。</li>&#10;</ul>&#10;&#10;<p>另外，玩家不会对自己进行陈述。形式上，对所有 <code>0 &lt;= i &lt; n</code> ，都有 <code>statements[i][i] = 2</code> 。</p>&#10;&#10;<p>根据这 <code>n</code> 个玩家的陈述，返回可以认为是 <strong>好人</strong> 的 <strong>最大</strong> 数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2151.Maximum%20Good%20People%20Based%20on%20Statements/images/logic1.jpg" loading="lazy">&#10;<pre><strong>输入：</strong>statements = [[2,1,2],[1,2,2],[2,0,2]]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>每个人都做一条陈述。&#10;- 0 认为 1 是好人。&#10;- 1 认为 0 是好人。&#10;- 2 认为 1 是坏人。&#10;以 2 为突破点。&#10;- 假设 2 是一个好人：&#10;    - 基于 2 的陈述，1 是坏人。&#10;    - 那么可以确认 1 是坏人，2 是好人。&#10;    - 基于 1 的陈述，由于 1 是坏人，那么他在陈述时可能：&#10;        - 说真话。在这种情况下会出现矛盾，所以假设无效。&#10;        - 说假话。在这种情况下，0 也是坏人并且在陈述时说假话。&#10;    - <strong>在认为 2 是好人的情况下，这组玩家中只有一个好人。</strong>&#10;- 假设 2 是一个坏人：&#10;    - 基于 2 的陈述，由于 2 是坏人，那么他在陈述时可能：&#10;        - 说真话。在这种情况下，0 和 1 都是坏人。&#10;            - <strong>在认为 2 是坏人但说真话的情况下，这组玩家中没有一个好人。</strong>&#10;        - 说假话。在这种情况下，1 是好人。&#10;            - 由于 1 是好人，0 也是好人。&#10;            - <strong>在认为 2 是坏人且说假话的情况下，这组玩家中有两个好人。</strong>&#10;在最佳情况下，至多有两个好人，所以返回 2 。&#10;注意，能得到此结论的方法不止一种。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2151.Maximum%20Good%20People%20Based%20on%20Statements/images/logic2.jpg" loading="lazy">&#10;<pre><strong>输入：</strong>statements = [[2,0],[0,2]]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>每个人都做一条陈述。&#10;- 0 认为 1 是坏人。&#10;- 1 认为 0 是坏人。&#10;以 0 为突破点。&#10;- 假设 0 是一个好人：&#10;    - 基于与 0 的陈述，1 是坏人并说假话。&#10;    - <strong>在认为 0 是好人的情况下，这组玩家中只有一个好人。</strong>&#10;- 假设 0 是一个坏人：&#10;    - 基于 0 的陈述，由于 0 是坏人，那么他在陈述时可能：&#10;        - 说真话。在这种情况下，0 和 1 都是坏人。&#10;            - <strong>在认为 0 是坏人但说真话的情况下，这组玩家中没有一个好人。</strong>&#10;        - 说假话。在这种情况下，1 是好人。&#10;            - <strong>在认为 0 是坏人且说假话的情况下，这组玩家中只有一个好人。</strong>&#10;在最佳情况下，至多有一个好人，所以返回 1 。 &#10;注意，能得到此结论的方法不止一种。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == statements.length == statements[i].length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 15</code></li>&#10;	<li><code>statements[i][j]</code> 的值为 <code>0</code>、<code>1</code> 或 <code>2</code></li>&#10;	<li><code>statements[i][i] == 2</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二进制枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每人可好可坏，好人的证词必须与假设一致，坏人的证词任意。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>15</mn>
</math></span>，可枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 种好人集合。</p>
<p>对掩码中的每一位好人，核对其对其他人的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>1</mn>
</math></span> 陈述是否与掩码相符；矛盾则该掩码非法，否则人数可参与比较。</p>
<p>枚举全部非空掩码（含全坏，人数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>），取合法掩码中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数最大值。</p>
</blockquote>
<p>二进制枚举好人的状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span>，由于“好人只说真话”，我们借此判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 是否存在矛盾，不存在则获取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 中好人的数量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>。迭代获取最大的合法 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#x2217;</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumGood(statements [][]int) int {</span></span>
<span class="line"><span>	n := len(statements)</span></span>
<span class="line"><span>	check := func(mask int) int {</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for i, s := range statements {</span></span>
<span class="line"><span>			if ((mask >> i) &#x26; 1) == 1 {</span></span>
<span class="line"><span>				for j, v := range s {</span></span>
<span class="line"><span>					if v &#x3C; 2 &#x26;&#x26; ((mask>>j)&#x26;1) != v {</span></span>
<span class="line"><span>						return 0</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for mask := 1; mask &#x3C; 1&#x3C;&#x3C;n; mask++ {</span></span>
<span class="line"><span>		ans = max(ans, check(mask))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-good-people-based-on-statements" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2151.Maximum%20Good%20People%20Based%20on%20Statements/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2174" tabindex="-1">2174. 通过翻转行或列来去除所有的 1 II 🔒 <a class="header-anchor" href="#q-2174" aria-label="Permalink to &quot;2174. 通过翻转行或列来去除所有的 1 II 🔒 {#q-2174}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、广度优先搜索、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定 <strong>下标从 0 开始 </strong>的 <code>m x n</code> <strong>二进制 </strong>矩阵 <code>grid</code>。</p>&#10;&#10;<p>在一次操作中，可以选择满足以下条件的任意 <code>i</code> 和 <code>j</code>:</p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= i &lt; m</code></li>&#10;	<li><code>0 &lt;= j &lt; n</code></li>&#10;	<li><code>grid[i][j] == 1</code></li>&#10;</ul>&#10;&#10;<p>并将第 <code>i</code> 行和第 <code>j</code> 列中的 <strong>所有 </strong>单元格的值更改为零。</p>&#10;&#10;<p>返回<em>从 </em><code>grid</code><em> 中删除所有 <code>1</code> 所需的最小操作数。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2174.Remove%20All%20Ones%20With%20Row%20and%20Column%20Flips%20II/images/image-20220213162716-1.png" loading="lazy">&#10;<pre>&#10;<strong>输入:</strong> grid = [[1,1,1],[1,1,1],[0,1,0]]&#10;<strong>输出:</strong> 2&#10;<strong>解释:</strong>&#10;在第一个操作中，将第 1 行和第 1 列的所有单元格值更改为 0。&#10;在第二个操作中，将第 0 行和第 0 列的所有单元格值更改为 0。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2174.Remove%20All%20Ones%20With%20Row%20and%20Column%20Flips%20II/images/image-20220213162737-2.png" loading="lazy">&#10;<pre>&#10;<strong>输入:</strong> grid = [[0,1,0],[1,0,1],[0,1,0]]&#10;<strong>输出:</strong> 2&#10;<strong>解释:</strong>&#10;在第一个操作中，将第 1 行和第 0 列的所有单元格值更改为 0。&#10;在第二个操作中，将第 2 行和第 1 列的所有单元格值更改为 0。&#10;注意，我们不能使用行 1 和列 1 执行操作，因为 grid[1][1]!= 1。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2174.Remove%20All%20Ones%20With%20Row%20and%20Column%20Flips%20II/images/image-20220213162752-3.png" loading="lazy">&#10;<pre>&#10;<strong>输入:</strong> grid = [[0,0],[0,0]]&#10;<strong>输出:</strong> 0&#10;<strong>解释:</strong>&#10;没有 1 可以移除，所以返回0。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 15</code></li>&#10;	<li><code>1 &lt;= m * n &lt;= 15</code></li>&#10;	<li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code>。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：状态压缩 + BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一次操作选定一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，把它所在行与列上的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 全部清除，求最少次数。网格至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mn>8</mn>
</math></span>，状态可压成整数。不同操作顺序对应同一集合时结果相同，宜按层搜索最短序列。</p>
<p>把矩阵压成比特 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">state</mtext>
</math></span>，每次枚举仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的格子，清除其行列对应比特得到新状态。BFS 的层数即操作次数。</p>
<p>起点为初始掩码，终点为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func removeOnes(grid [][]int) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	state := 0</span></span>
<span class="line"><span>	for i, row := range grid {</span></span>
<span class="line"><span>		for j, v := range row {</span></span>
<span class="line"><span>			if v == 1 {</span></span>
<span class="line"><span>				state |= 1 &#x3C;&#x3C; (i*n + j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q := []int{state}</span></span>
<span class="line"><span>	vis := map[int]bool{state: true}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		for k := len(q); k > 0; k-- {</span></span>
<span class="line"><span>			state = q[0]</span></span>
<span class="line"><span>			if state == 0 {</span></span>
<span class="line"><span>				return ans</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for i, row := range grid {</span></span>
<span class="line"><span>				for j, v := range row {</span></span>
<span class="line"><span>					if v == 0 {</span></span>
<span class="line"><span>						continue</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					nxt := state</span></span>
<span class="line"><span>					for r := 0; r &#x3C; m; r++ {</span></span>
<span class="line"><span>						nxt &#x26;= ^(1 &#x3C;&#x3C; (r*n + j))</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					for c := 0; c &#x3C; n; c++ {</span></span>
<span class="line"><span>						nxt &#x26;= ^(1 &#x3C;&#x3C; (i*n + c))</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					if !vis[nxt] {</span></span>
<span class="line"><span>						vis[nxt] = true</span></span>
<span class="line"><span>						q = append(q, nxt)</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/remove-all-ones-with-row-and-column-flips-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2174.Remove%20All%20Ones%20With%20Row%20and%20Column%20Flips%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2178" tabindex="-1">2178. 拆分成最多数目的正偶数之和 <a class="header-anchor" href="#q-2178" aria-label="Permalink to &quot;2178. 拆分成最多数目的正偶数之和 {#q-2178}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学、回溯</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>finalSum</code> 。请你将它拆分成若干个 <strong>互不相同</strong> 的正偶数之和，且拆分出来的正偶数数目 <strong>最多</strong> 。</p>&#10;&#10;<ul>&#10;	<li>比方说，给你 <code>finalSum = 12</code> ，那么这些拆分是 <strong>符合要求</strong> 的（互不相同的正偶数且和为 <code>finalSum</code>）：<code>(2 + 10)</code> ，<code>(2 + 4 + 6)</code> 和 <code>(4 + 8)</code> 。它们中，<code>(2 + 4 + 6)</code> 包含最多数目的整数。注意 <code>finalSum</code> 不能拆分成 <code>(2 + 2 + 4 + 4)</code> ，因为拆分出来的整数必须互不相同。</li>&#10;</ul>&#10;&#10;<p>请你返回一个整数数组，表示将整数拆分成 <strong>最多</strong> 数目的正偶数数组。如果没有办法将 <code>finalSum</code> 进行拆分，请你返回一个 <strong>空</strong> 数组。你可以按 <b>任意</b> 顺序返回这些整数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>finalSum = 12&#10;<b>输出：</b>[2,4,6]&#10;<b>解释：</b>以下是一些符合要求的拆分：<code>(2 + 10)<span>，</span></code><code>(2 + 4 + 6) </code>和 <code>(4 + 8) 。</code>&#10;(2 + 4 + 6) 为最多数目的整数，数目为 3 ，所以我们返回 [2,4,6] 。&#10;[2,6,4] ，[6,2,4] 等等也都是可行的解。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>finalSum = 7&#10;<b>输出：</b>[]&#10;<b>解释：</b>没有办法将 finalSum 进行拆分。&#10;所以返回空数组。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>finalSum = 28&#10;<b>输出：</b>[6,8,2,12]&#10;<b>解释：</b>以下是一些符合要求的拆分：<code>(2 + 26)<span>，</span></code><code>(6 + 8 + 2 + 12)</code> 和 <code>(4 + 24) 。</code>&#10;<code>(6 + 8 + 2 + 12)</code> 有最多数目的整数，数目为 4 ，所以我们返回 [6,8,2,12] 。&#10;[10,2,4,12] ，[6,2,4,16] 等等也都是可行的解。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= finalSum &lt;= 10<sup>10</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把偶数和拆成尽可能多的互异正偶数。奇数和无法拆。若预留较大的数，会减少个数。</p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>,</mo>
  <mn>4</mn>
  <mo>,</mo>
  <mn>6</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span> 依次取出，直到剩余不足下一个偶数，把余数加到最后一项。最后一项因此可能变大，但仍与前面互异，因为余数小于下一个未取偶数。</p>
<p>奇数直接返回空列表。</p>
</blockquote>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">finalSum</mtext>
</math></span> 是奇数，那么无法拆分成若干个互不相同的正偶数之和，直接返回空数组。</p>
<p>否则，我们可以贪心地按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>,</mo>
  <mn>4</mn>
  <mo>,</mo>
  <mn>6</mn>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
</math></span> 的顺序拆分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">finalSum</mtext>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">finalSum</mtext>
</math></span> 无法再拆分出一个不同的正偶数为止，此时我们将剩余的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">finalSum</mtext>
</math></span> 加到最后一个正偶数上即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mtext mathvariant="italic">finalSum</mtext>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，忽略答案数组的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumEvenSplit(finalSum int64) (ans []int64) {</span></span>
<span class="line"><span>	if finalSum%2 == 1 {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := int64(2); i &#x3C;= finalSum; i += 2 {</span></span>
<span class="line"><span>		ans = append(ans, i)</span></span>
<span class="line"><span>		finalSum -= i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans[len(ans)-1] += finalSum</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-split-of-positive-even-integers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2178.Maximum%20Split%20of%20Positive%20Even%20Integers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2212" tabindex="-1">2212. 射箭比赛中的最大得分 <a class="header-anchor" href="#q-2212" aria-label="Permalink to &quot;2212. 射箭比赛中的最大得分 {#q-2212}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、回溯、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Alice 和 Bob 是一场射箭比赛中的对手。比赛规则如下：</p>&#10;&#10;<ol>&#10;	<li>Alice 先射 <code>numArrows</code> 支箭，然后 Bob 也射 <code>numArrows</code> 支箭。</li>&#10;	<li>分数按下述规则计算：&#10;	<ol>&#10;		<li>箭靶有若干整数计分区域，范围从 <code>0</code> 到 <code>11</code> （含 <code>0</code> 和 <code>11</code>）。</li>&#10;		<li>箭靶上每个区域都对应一个得分 <code>k</code>（范围是 <code>0</code> 到 <code>11</code>），Alice 和 Bob 分别在得分 <code>k</code> 区域射中 <code>a<sub>k</sub></code> 和 <code>b<sub>k</sub></code> 支箭。如果 <code>a<sub>k</sub> >= b<sub>k</sub></code> ，那么 Alice 得 <code>k</code> 分。如果 <code>a<sub>k</sub> &lt; b<sub>k</sub></code> ，则 Bob 得 <code>k</code> 分</li>&#10;		<li>如果 <code>a<sub>k</sub> == b<sub>k</sub> == 0</code> ，那么无人得到 <code>k</code> 分。</li>&#10;	</ol>&#10;	</li>&#10;</ol>&#10;&#10;<ul>&#10;	<li>&#10;	<p>例如，Alice 和 Bob 都向计分为 <code>11</code> 的区域射 <code>2</code> 支箭，那么 Alice 得 <code>11</code> 分。如果 Alice 向计分为 <code>11</code> 的区域射 <code>0</code> 支箭，但 Bob 向同一个区域射 <code>2</code> 支箭，那么 Bob 得 <code>11</code> 分。</p>&#10;	</li>&#10;</ul>&#10;&#10;<p>给你整数 <code>numArrows</code> 和一个长度为 <code>12</code> 的整数数组 <code>aliceArrows</code> ，该数组表示 Alice 射中 <code>0</code> 到 <code>11</code> 每个计分区域的箭数量。现在，Bob 想要尽可能 <strong>最大化</strong> 他所能获得的总分。</p>&#10;&#10;<p>返回数组 <code>bobArrows</code><em> </em>，该数组表示 Bob 射中 <code>0</code> 到 <code>11</code> <strong>每个</strong> 计分区域的箭数量。且 <code>bobArrows</code> 的总和应当等于 <code>numArrows</code> 。</p>&#10;&#10;<p>如果存在多种方法都可以使 Bob 获得最大总分，返回其中 <strong>任意一种</strong> 即可。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2212.Maximum%20Points%20in%20an%20Archery%20Competition/images/1647744752-kQKrXw-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>numArrows = 9, aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,0]&#10;<strong>输出：</strong>[0,0,0,0,1,1,0,0,1,2,3,1]&#10;<strong>解释：</strong>上表显示了比赛得分情况。&#10;Bob 获得总分 4 + 5 + 8 + 9 + 10 + 11 = 47 。&#10;可以证明 Bob 无法获得比 47 更高的分数。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2212.Maximum%20Points%20in%20an%20Archery%20Competition/images/1647744785-cMHzaC-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>numArrows = 3, aliceArrows = [0,0,1,0,0,0,0,0,0,0,0,2]&#10;<strong>输出：</strong>[0,0,0,0,0,0,0,0,1,1,1,0]&#10;<strong>解释：</strong>上表显示了比赛得分情况。&#10;Bob 获得总分 8 + 9 + 10 = 27 。&#10;可以证明 Bob 无法获得比 27 更高的分数。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= numArrows &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>aliceArrows.length == bobArrows.length == 12</code></li>&#10;	<li><code>0 &lt;= aliceArrows[i], bobArrows[i] &lt;= numArrows</code></li>&#10;	<li><code>sum(aliceArrows[i]) == numArrows</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二进制枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>Bob 要在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>12</mn>
</math></span> 个环上分配箭，某环得分当且仅当箭数严格多于 Alice。若按每环箭数搜索， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numArrows</mtext>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，状态过多。环数只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>12</mn>
</math></span>，真正要决定的是「赢下哪些环」。</p>
<p>赢下第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 环恰好需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>l</mi>
  <mi>i</mi>
  <mi>c</mi>
  <mi>e</mi>
  <mi>A</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 支箭，得分固定为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。因此用长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>12</mn>
</math></span> 的二进制掩码枚举得分集合，累加所需箭数与得分；箭数不超过限额且得分更优时记下该掩码。</p>
<p>最后按掩码还原各环箭数，剩余箭全部放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 环（该环本不得分）。枚举量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>12</mn>
    </mrow>
  </msup>
</math></span>，可以接受。</p>
</blockquote>
<p>由于区域数目只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>12</mn>
</math></span> 个，因此我们使用二进制枚举的方式，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Bob</mtext>
</math></span> 在哪些区域得分。用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">st</mtext>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Bob</mtext>
</math></span> 获得最大得分的方案，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Bob</mtext>
</math></span> 获得的最大得分。</p>
<p>我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 的区间内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Bob</mtext>
</math></span> 的得分方案，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">aliceArrows</mtext>
</math></span> 的长度。对于每一个方案，我们计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Bob</mtext>
</math></span> 的得分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 以及射箭的数量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">numArrows</mtext>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
  <mo>&gt;</mo>
  <mtext mathvariant="italic">mx</mtext>
</math></span>，我们就更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">st</mtext>
</math></span>。</p>
<p>然后，我们根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">st</mtext>
</math></span> 计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Bob</mtext>
</math></span> 的得分方案，如果最后还有剩余的射箭，我们将剩余的射箭分配给第一个区域，即下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的区域。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">aliceArrows</mtext>
</math></span> 的长度。忽略答案数组的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumBobPoints(numArrows int, aliceArrows []int) []int {</span></span>
<span class="line"><span>	st, mx := 0, 0</span></span>
<span class="line"><span>	m := len(aliceArrows)</span></span>
<span class="line"><span>	for mask := 1; mask &#x3C; 1&#x3C;&#x3C;m; mask++ {</span></span>
<span class="line"><span>		cnt, s := 0, 0</span></span>
<span class="line"><span>		for i, x := range aliceArrows {</span></span>
<span class="line"><span>			if mask>>i&#x26;1 == 1 {</span></span>
<span class="line"><span>				s += i</span></span>
<span class="line"><span>				cnt += x + 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt &#x3C;= numArrows &#x26;&#x26; s > mx {</span></span>
<span class="line"><span>			mx = s</span></span>
<span class="line"><span>			st = mask</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, m)</span></span>
<span class="line"><span>	for i, x := range aliceArrows {</span></span>
<span class="line"><span>		if (st>>i)&#x26;1 == 1 {</span></span>
<span class="line"><span>			ans[i] = x + 1</span></span>
<span class="line"><span>			numArrows -= ans[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans[0] += numArrows</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-points-in-an-archery-competition" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2212.Maximum%20Points%20in%20an%20Archery%20Competition/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2258" tabindex="-1">2258. 逃离火灾 <a class="header-anchor" href="#q-2258" aria-label="Permalink to &quot;2258. 逃离火灾 {#q-2258}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组、二分查找、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始大小为 <code>m x n</code> 的二维整数数组 <code>grid</code> ，它表示一个网格图。每个格子为下面 3 个值之一：</p>&#10;&#10;<ul>&#10;	<li><code>0</code> 表示草地。</li>&#10;	<li><code>1</code> 表示着火的格子。</li>&#10;	<li><code>2</code> 表示一座墙，你跟火都不能通过这个格子。</li>&#10;</ul>&#10;&#10;<p>一开始你在最左上角的格子 <code>(0, 0)</code> ，你想要到达最右下角的安全屋格子 <code>(m - 1, n - 1)</code> 。每一分钟，你可以移动到 <strong>相邻</strong> 的草地格子。每次你移动 <strong>之后</strong> ，着火的格子会扩散到所有不是墙的 <strong>相邻</strong> 格子。</p>&#10;&#10;<p>请你返回你在初始位置可以停留的 <strong>最多 </strong>分钟数，且停留完这段时间后你还能安全到达安全屋。如果无法实现，请你返回 <code>-1</code> 。如果不管你在初始位置停留多久，你 <strong>总是</strong> 能到达安全屋，请你返回 <code>10<sup>9</sup></code> 。</p>&#10;&#10;<p>注意，如果你到达安全屋后，火马上到了安全屋，这视为你能够安全到达安全屋。</p>&#10;&#10;<p>如果两个格子有共同边，那么它们为 <strong>相邻</strong> 格子。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2258.Escape%20the%20Spreading%20Fire/images/ex1new.jpg" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[0,2,0,0,0,0,0],[0,0,0,2,2,1,0],[0,2,0,0,1,2,0],[0,0,2,2,2,0,2],[0,0,0,0,0,0,0]]&#10;<b>输出：</b>3&#10;<b>解释：</b>上图展示了你在初始位置停留 3 分钟后的情形。&#10;你仍然可以安全到达安全屋。&#10;停留超过 3 分钟会让你无法安全到达安全屋。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2258.Escape%20the%20Spreading%20Fire/images/ex2new2.jpg" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[0,0,0,0],[0,1,2,0],[0,2,0,0]]&#10;<b>输出：</b>-1&#10;<b>解释：</b>上图展示了你马上开始朝安全屋移动的情形。&#10;火会蔓延到你可以移动的所有格子，所以无法安全到达安全屋。&#10;所以返回 -1 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2258.Escape%20the%20Spreading%20Fire/images/ex3new.jpg" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[0,0,0],[2,2,0],[1,2,0]]&#10;<b>输出：</b>1000000000&#10;<b>解释：</b>上图展示了初始网格图。&#10;注意，由于火被墙围了起来，所以无论如何你都能安全到达安全屋。&#10;所以返回 10<sup>9</sup> 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>2 &lt;= m, n &lt;= 300</code></li>&#10;	<li><code>4 &lt;= m * n &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>grid[i][j]</code> 是 <code>0</code> ，<code>1</code> 或者 <code>2</code> 。</li>&#10;	<li><code>grid[0][0] == grid[m - 1][n - 1] == 0</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 + BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>人先停留 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 分钟再出发，火每分钟向四向蔓延，问最大可行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>。网格至多约 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 格。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 可行，更短的停留也可行，答案单调，适合二分。</p>
<p>对候选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，先让火蔓延 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 分钟；若起点已着火则失败。再让人与火同步 BFS：人只走进尚未着火的空地，每走完一层火再蔓延一次。人先于火到达终点（或与火同时到达终点）则成功。上界取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>n</mi>
</math></span>，若连上界都成功则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>。</p>
</blockquote>
<p>我们注意到，如果一个停留时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 满足条件，那么所有小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的时间也都满足条件。因此我们可以考虑使用二分查找的方法找到最大的满足条件的时间。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span>。每一次二分查找，我们都将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 的中点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 作为当前的停留时间，判断是否满足条件。如果满足条件，那么我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，否则我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。最后，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span>，那么说明不存在满足条件的停留时间，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，否则我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>。</p>
<p>问题的关键转化为如何判断一个停留时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 是否满足条件。我们可以使用广度优先搜索的方法，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 时间内，模拟火的蔓延过程。如果停留 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 时间后，火蔓延到了起点位置，那么说明不满足条件，提前返回。否则，我们这时候再使用广度优先搜索，每一次从当前位置向四个方向进行搜索，每一轮结束后，我们还需要将火向四个方向蔓延一次。如果在这个过程中，我们找到了一条从起点到终点的路径，那么说明满足条件。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为网格的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumMinutes(grid [][]int) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	fire := make([][]bool, m)</span></span>
<span class="line"><span>	vis := make([][]bool, m)</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for i := range fire {</span></span>
<span class="line"><span>		fire[i] = make([]bool, n)</span></span>
<span class="line"><span>		vis[i] = make([]bool, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	l, r := -1, m*n</span></span>
<span class="line"><span>	spread := func(q [][2]int) [][2]int {</span></span>
<span class="line"><span>		nq := [][2]int{}</span></span>
<span class="line"><span>		for len(q) > 0 {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>				x, y := p[0]+dirs[k], p[1]+dirs[k+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; !fire[x][y] &#x26;&#x26; grid[x][y] == 0 {</span></span>
<span class="line"><span>					fire[x][y] = true</span></span>
<span class="line"><span>					nq = append(nq, [2]int{x, y})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return nq</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	check := func(t int) bool {</span></span>
<span class="line"><span>		for i := range fire {</span></span>
<span class="line"><span>			for j := range fire[i] {</span></span>
<span class="line"><span>				fire[i][j] = false</span></span>
<span class="line"><span>				vis[i][j] = false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q1 := [][2]int{}</span></span>
<span class="line"><span>		for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>			for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>				if grid[i][j] == 1 {</span></span>
<span class="line"><span>					q1 = append(q1, [2]int{i, j})</span></span>
<span class="line"><span>					fire[i][j] = true</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for ; t > 0 &#x26;&#x26; len(q1) > 0; t-- {</span></span>
<span class="line"><span>			q1 = spread(q1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q2 := [][2]int{{0, 0}}</span></span>
<span class="line"><span>		vis[0][0] = true</span></span>
<span class="line"><span>		for ; len(q2) > 0; q1 = spread(q1) {</span></span>
<span class="line"><span>			for d := len(q2); d > 0; d-- {</span></span>
<span class="line"><span>				p := q2[0]</span></span>
<span class="line"><span>				q2 = q2[1:]</span></span>
<span class="line"><span>				if fire[p[0]][p[1]] {</span></span>
<span class="line"><span>					continue</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>					x, y := p[0]+dirs[k], p[1]+dirs[k+1]</span></span>
<span class="line"><span>					if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; !fire[x][y] &#x26;&#x26; !vis[x][y] &#x26;&#x26; grid[x][y] == 0 {</span></span>
<span class="line"><span>						if x == m-1 &#x26;&#x26; y == n-1 {</span></span>
<span class="line"><span>							return true</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>						vis[x][y] = true</span></span>
<span class="line"><span>						q2 = append(q2, [2]int{x, y})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r + 1) >> 1</span></span>
<span class="line"><span>		if check(mid) {</span></span>
<span class="line"><span>			l = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			r = mid - 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if l == m*n {</span></span>
<span class="line"><span>		return int(1e9)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return l</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/escape-the-spreading-fire" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2258.Escape%20the%20Spreading%20Fire/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2375" tabindex="-1">2375. 根据模式串构造最小数字 <a class="header-anchor" href="#q-2375" aria-label="Permalink to &quot;2375. 根据模式串构造最小数字 {#q-2375}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、字符串、回溯</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你下标从 <strong>0</strong> 开始、长度为 <code>n</code> 的字符串 <code>pattern</code> ，它包含两种字符，<code>'I'</code> 表示 <strong>上升</strong> ，<code>'D'</code> 表示 <strong>下降</strong> 。</p>&#10;&#10;<p>你需要构造一个下标从 <strong>0</strong> 开始长度为 <code>n + 1</code> 的字符串，且它要满足以下条件：</p>&#10;&#10;<ul>&#10;	<li><code>num</code> 包含数字 <code>'1'</code> 到 <code>'9'</code> ，其中每个数字 <strong>至多</strong> 使用一次。</li>&#10;	<li>如果 <code>pattern[i] == 'I'</code> ，那么 <code>num[i] &lt; num[i + 1]</code> 。</li>&#10;	<li>如果 <code>pattern[i] == 'D'</code> ，那么 <code>num[i] > num[i + 1]</code> 。</li>&#10;</ul>&#10;&#10;<p>请你返回满足上述条件字典序 <strong>最小</strong> 的字符串<em> </em><code>num</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>pattern = &quot;IIIDIDDD&quot;&#10;<b>输出：</b>&quot;123549876&quot;&#10;<strong>解释：&#10;</strong>下标 0 ，1 ，2 和 4 处，我们需要使 num[i] &lt; num[i+1] 。&#10;下标 3 ，5 ，6 和 7 处，我们需要使 num[i] > num[i+1] 。&#10;一些可能的 num 的值为 &quot;245639871&quot; ，&quot;135749862&quot; 和 &quot;123849765&quot; 。&#10;&quot;123549876&quot; 是满足条件最小的数字。&#10;注意，&quot;123414321&quot; 不是可行解因为数字 '1' 使用次数超过 1 次。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>pattern = &quot;DDD&quot;&#10;<b>输出：</b>&quot;4321&quot;&#10;<strong>解释：</strong>&#10;一些可能的 num 的值为 &quot;9876&quot; ，&quot;7321&quot; 和 &quot;8742&quot; 。&#10;&quot;4321&quot; 是满足条件最小的数字。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= pattern.length &lt;= 8</code></li>&#10;	<li><code>pattern</code> 只包含字符 <code>'I'</code> 和 <code>'D'</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1.</mn>
  <mn>.9</mn>
</math></span> 各至多一次排出满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>I</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>D</mi>
</math></span> 的最短数字串，且字典序最小。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
</math></span> 长至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>，全排列不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
  <mo>!</mo>
</math></span>，按从小到大搜索即可。</p>
<p>DFS 按位尝试未用数字：已有前缀时用上一个模式约束升降。先试小数字，第一次填满的串即最小解，随即停止。</p>
</blockquote>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>u</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 表示当前答案字符串的长度。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 开始搜索，直至找到第一个符合条件的字符串。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>!</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 表示字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestNumber(pattern string) string {</span></span>
<span class="line"><span>	vis := make([]bool, 10)</span></span>
<span class="line"><span>	t := []byte{}</span></span>
<span class="line"><span>	ans := ""</span></span>
<span class="line"><span>	var dfs func(u int)</span></span>
<span class="line"><span>	dfs = func(u int) {</span></span>
<span class="line"><span>		if ans != "" {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if u == len(pattern)+1 {</span></span>
<span class="line"><span>			ans = string(t)</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for i := 1; i &#x3C; 10; i++ {</span></span>
<span class="line"><span>			if !vis[i] {</span></span>
<span class="line"><span>				if u > 0 &#x26;&#x26; pattern[u-1] == 'I' &#x26;&#x26; int(t[len(t)-1]-'0') >= i {</span></span>
<span class="line"><span>					continue</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if u > 0 &#x26;&#x26; pattern[u-1] == 'D' &#x26;&#x26; int(t[len(t)-1]-'0') &#x3C;= i {</span></span>
<span class="line"><span>					continue</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				vis[i] = true</span></span>
<span class="line"><span>				t = append(t, byte('0'+i))</span></span>
<span class="line"><span>				dfs(u + 1)</span></span>
<span class="line"><span>				vis[i] = false</span></span>
<span class="line"><span>				t = t[:len(t)-1]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(0)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/construct-smallest-number-from-di-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2375.Construct%20Smallest%20Number%20From%20DI%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2397" tabindex="-1">2397. 被列覆盖的最多行数 <a class="header-anchor" href="#q-2397" aria-label="Permalink to &quot;2397. 被列覆盖的最多行数 {#q-2397}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、回溯、枚举、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0 </strong>开始、大小为 <code>m x n</code> 的二进制矩阵 <code>matrix</code> ；另给你一个整数 <code>numSelect</code>，表示你必须从 <code>matrix</code> 中选择的 <strong>不同</strong> 列的数量。</p>&#10;&#10;<p>如果一行中所有的 <code>1</code> 都被你选中的列所覆盖，则认为这一行被 <strong>覆盖</strong> 了。</p>&#10;&#10;<p><strong>形式上</strong>，假设 <code>s = {c<sub>1</sub>, c<sub>2</sub>, ...., c<sub>numSelect</sub>}</code> 是你选择的列的集合。对于矩阵中的某一行 <code>row</code> ，如果满足下述条件，则认为这一行被集合 <code>s</code> <strong>覆盖</strong>：</p>&#10;&#10;<ul>&#10;	<li>对于满足 <code>matrix[row][col] == 1</code> 的每个单元格 <code>matrix[row][col]</code>（<code>0 &lt;= col &lt;= n - 1</code>），<code>col</code> 均存在于 <code>s</code> 中，或者</li>&#10;	<li><code>row</code> 中 <strong>不存在</strong> 值为 <code>1</code> 的单元格。</li>&#10;</ul>&#10;&#10;<p>你需要从矩阵中选出 <code>numSelect</code> 个列，使集合覆盖的行数最大化。</p>&#10;&#10;<p>返回一个整数，表示可以由 <code>numSelect</code> 列构成的集合 <strong>覆盖</strong> 的 <strong>最大行数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2300-2399/2397.Maximum%20Rows%20Covered%20by%20Columns/images/rowscovered.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>matrix = [[0,0,0],[1,0,1],[0,1,1],[0,0,1]], numSelect = 2&#10;<b>输出：</b>3&#10;<strong>解释：</strong>&#10;图示中显示了一种覆盖 3 行的可行办法。&#10;选择 s = {0, 2} 。&#10;- 第 0 行被覆盖，因为其中没有出现 1 。&#10;- 第 1 行被覆盖，因为值为 1 的两列（即 0 和 2）均存在于 s 中。&#10;- 第 2 行未被覆盖，因为 matrix[2][1] == 1 但是 1 未存在于 s 中。&#10;- 第 3 行被覆盖，因为 matrix[2][2] == 1 且 2 存在于 s 中。&#10;因此，可以覆盖 3 行。&#10;另外 s = {1, 2} 也可以覆盖 3 行，但可以证明无法覆盖更多行。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2300-2399/2397.Maximum%20Rows%20Covered%20by%20Columns/images/rowscovered2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>matrix = [[1],[0]], numSelect = 1&#10;<b>输出：</b>2&#10;<strong>解释：</strong>&#10;选择唯一的一列，两行都被覆盖了，因为整个矩阵都被覆盖了。&#10;所以我们返回 2 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == matrix.length</code></li>&#10;	<li><code>n == matrix[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 12</code></li>&#10;	<li><code>matrix[i][j]</code> 要么是 <code>0</code> 要么是 <code>1</code></li>&#10;	<li><code>1 &lt;= numSelect &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二进制枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>选恰 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>S</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>t</mi>
</math></span> 列，使被这些列覆盖全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的行尽量多。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>12</mn>
</math></span>，列子集可以枚举。</p>
<p>每行压成位掩码。枚举列掩码，位数等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>S</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>t</mi>
</math></span> 时，统计满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo>&#x2227;</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>=</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
</math></span> 的行数并取最大。</p>
</blockquote>
<p>我们先将矩阵中的每一行转换成一个二进制数，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>s</mi>
</math></span> 中，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行对应的二进制数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 这个二进制数的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 位表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 列的值。</p>
<p>接下来，我们枚举所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 种列选择方案，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为矩阵的列数。对于每一种列选择方案，我们判断是否选中了 <code v-pre>numSelect</code> 列，如果不是，则跳过。否则，我们统计矩阵中有多少行中的所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 都被选中的列覆盖，即统计有多少行的二进制数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与列选择方案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 按位与的结果等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，并更新最大的行数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumRows(matrix [][]int, numSelect int) (ans int) {</span></span>
<span class="line"><span>	m, n := len(matrix), len(matrix[0])</span></span>
<span class="line"><span>	rows := make([]int, m)</span></span>
<span class="line"><span>	for i, row := range matrix {</span></span>
<span class="line"><span>		for j, x := range row {</span></span>
<span class="line"><span>			if x == 1 {</span></span>
<span class="line"><span>				rows[i] |= 1 &#x3C;&#x3C; j</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for mask := 1; mask &#x3C; 1&#x3C;&#x3C;n; mask++ {</span></span>
<span class="line"><span>		if bits.OnesCount(uint(mask)) != numSelect {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for _, x := range rows {</span></span>
<span class="line"><span>			if (x &#x26; mask) == x {</span></span>
<span class="line"><span>				t++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ans &#x3C; t {</span></span>
<span class="line"><span>			ans = t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-rows-covered-by-columns" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2397.Maximum%20Rows%20Covered%20by%20Columns/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2596" tabindex="-1">2596. 检查骑士巡视方案 <a class="header-anchor" href="#q-2596" aria-label="Permalink to &quot;2596. 检查骑士巡视方案 {#q-2596}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、数组、矩阵、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>骑士在一张 <code>n x n</code> 的棋盘上巡视。在 <strong>有效 </strong>的巡视方案中，骑士会从棋盘的 <strong>左上角</strong> 出发，并且访问棋盘上的每个格子 <strong>恰好一次</strong> 。</p>&#10;&#10;<p>给你一个 <code>n x n</code> 的整数矩阵 <code>grid</code> ，由范围 <code>[0, n * n - 1]</code> 内的不同整数组成，其中 <code>grid[row][col]</code> 表示单元格 <code>(row, col)</code> 是骑士访问的第 <code>grid[row][col]</code> 个单元格。骑士的行动是从下标 <strong>0</strong> 开始的。</p>&#10;&#10;<p>如果 <code>grid</code> 表示了骑士的有效巡视方案，返回 <code>true</code>；否则返回 <code>false</code>。</p>&#10;&#10;<p><strong>注意</strong>，骑士行动时可以垂直移动两个格子且水平移动一个格子，或水平移动两个格子且垂直移动一个格子。下图展示了骑士从某个格子出发可能的八种行动路线。<br>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2596.Check%20Knight%20Tour%20Configuration/images/1694590028-CTMBQL-image.png" loading="lazy"></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2596.Check%20Knight%20Tour%20Configuration/images/1694590044-AmhkRb-image.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>grid 如上图所示，可以证明这是一个有效的巡视方案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2596.Check%20Knight%20Tour%20Configuration/images/1694590057-FIMBAG-image.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,3,6],[5,8,1],[2,7,4]]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>grid 如上图所示，考虑到骑士第 7 次行动后的位置，第 8 次行动是无效的。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == grid.length == grid[i].length</code></li>&#10;	<li><code>3 &lt;= n &lt;= 7</code></li>&#10;	<li><code>0 &lt;= grid[row][col] &lt; n * n</code></li>&#10;	<li><code>grid</code> 中的所有整数 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断网格是否为骑士从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 出发、按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
  <mo>,</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的巡游。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>7</mn>
</math></span>，把每个步数的坐标记下后检查相邻步是否为日字即可。起点必须是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们先用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pos</mtext>
</math></span> 记录骑士访问的每个格子的坐标，然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pos</mtext>
</math></span> 数组，检查相邻两个格子的坐标差是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 即可。若不满足，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">false</mtext>
</math></span>。</p>
<p>否则遍历结束后，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
</math></span></p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为棋盘的边长。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func checkValidGrid(grid [][]int) bool {</span></span>
<span class="line"><span>	if grid[0][0] != 0 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(grid)</span></span>
<span class="line"><span>	type pair struct{ x, y int }</span></span>
<span class="line"><span>	pos := make([]pair, n*n)</span></span>
<span class="line"><span>	for i, row := range grid {</span></span>
<span class="line"><span>		for j, x := range row {</span></span>
<span class="line"><span>			pos[x] = pair{i, j}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n*n; i++ {</span></span>
<span class="line"><span>		p1, p2 := pos[i-1], pos[i]</span></span>
<span class="line"><span>		dx := abs(p1.x - p2.x)</span></span>
<span class="line"><span>		dy := abs(p1.y - p2.y)</span></span>
<span class="line"><span>		ok := (dx == 2 &#x26;&#x26; dy == 1) || (dx == 1 &#x26;&#x26; dy == 2)</span></span>
<span class="line"><span>		if !ok {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-knight-tour-configuration" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2596.Check%20Knight%20Tour%20Configuration/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2664" tabindex="-1">2664. 巡逻的骑士 🔒 <a class="header-anchor" href="#q-2664" aria-label="Permalink to &quot;2664. 巡逻的骑士 🔒 {#q-2664}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、回溯、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个正整数 <code>m</code> 和 <code>n</code> ，它们是一个 <strong>下标从 0 开始</strong> 的二维数组 <code>board</code> 的高度和宽度。还有一对正整数 <code>(r, c)</code> ，它们是骑士在棋盘上的起始位置。</p>&#10;&#10;<p>你的任务是找到一个骑士的移动顺序，使得 <code>board</code> 中每个单元格都 <strong>恰好</strong> 被访问一次（起始单元格已被访问，<strong>不应</strong> 再次访问）。</p>&#10;&#10;<p>返回数组 <code>board</code> ，其中单元格的值显示从 0 开始访问该单元格的顺序（骑士的初始位置为 0）。</p>&#10;&#10;<p>注意，如果 <code>0 &lt;= r2 &lt;= m-1 且 0 &lt;= c2 &lt;= n-1</code> ，并且 <code>min(abs(r1-r2), abs(c1-c2)) = 1</code> 且 <code>max(abs(r1-r2), abs(c1-c2)) = 2</code> ，则骑士可以从单元格 <code>(r1, c1)</code> 移动到单元格 <code>(r2, c2)</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1 ：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>m = 1, n = 1, r = 0, c = 0&#10;<b>输出：</b>[[0]]&#10;<b>解释</b>只有一个单元格，骑士最初在其中，因此 1x1 网格中只有一个 0。&#10;</pre>&#10;&#10;<p><strong>示例 2 ：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>m = 3, n = 4, r = 0, c = 0&#10;<b>输出：</b>[[0,3,6,9],[11,8,1,4],[2,5,10,7]]&#10;<b>解释：</b>按照以下移动顺序，我们可以访问整个棋盘。 &#10;(0,0)->(1,2)->(2,0)->(0,1)->(1,3)->(2,1)->(0,2)->(2,3)->(1,1)->(0,3)->(2,2)->(1,0)</pre>&#10;&#10;<p> </p>&#10;&#10;<p><b>提示：</b></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= m, n &lt;= 5</code></li>&#10;	<li><code>0 &lt;= r &lt;= m - 1</code></li>&#10;	<li><code>0 &lt;= c &lt;= n - 1</code></li>&#10;	<li>输入的数据保证在给定条件下 <strong>至少</strong> 存在一种访问所有单元格的移动顺序。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：回溯 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>骑士须不重复走遍棋盘。棋盘至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <mn>5</mn>
</math></span>，路径搜索空间可回溯。按八个方向尝试未访问格，步号写满 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 即成功并冻结棋盘。</p>
<p>失败则撤步。找到一路即可返回，不必枚举全部哈密顿路径。</p>
</blockquote>
<p>我们创建一个二维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，用于记录骑士的移动顺序，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，其余位置均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。另外，我们还需要一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>k</mi>
</math></span>，用于记录是否找到了一种方案。</p>
<p>接下来，我们从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mo stretchy="false">)</mo>
</math></span> 开始进行深度优先搜索，每次搜索位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，我们先判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 是否等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，若是，说明我们已经找到了一种方案，此时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>k</mi>
</math></span> 置为 <code v-pre>true</code> 并且返回。否则我们枚举骑士的八个移动方向对应的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，若满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>&#x2264;</mo>
  <mi>x</mi>
  <mo>&lt;</mo>
  <mi>m</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>&#x2264;</mo>
  <mi>y</mi>
  <mo>&lt;</mo>
  <mi>n</mi>
</math></span>，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，那么我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，然后递归搜索位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>。如果搜索结束后，变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>k</mi>
</math></span> 为 <code v-pre>true</code>，则直接返回。否则，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 重置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，继续搜索其他方向。</p>
<p>最后返回二维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>8</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>m</mi>
      <mo>&#xD7;</mo>
      <mi>n</mi>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为题目给定的整数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func tourOfKnight(m int, n int, r int, c int) [][]int {</span></span>
<span class="line"><span>	g := make([][]int, m)</span></span>
<span class="line"><span>	for i := range g {</span></span>
<span class="line"><span>		g[i] = make([]int, n)</span></span>
<span class="line"><span>		for j := range g[i] {</span></span>
<span class="line"><span>			g[i][j] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	g[r][c] = 0</span></span>
<span class="line"><span>	ok := false</span></span>
<span class="line"><span>	var dfs func(i, j int)</span></span>
<span class="line"><span>	dfs = func(i, j int) {</span></span>
<span class="line"><span>		if g[i][j] == m*n-1 {</span></span>
<span class="line"><span>			ok = true</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dirs := []int{-2, -1, 2, 1, -2, 1, 2, -1, -2}</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 8; k++ {</span></span>
<span class="line"><span>			x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; g[x][y] == -1 {</span></span>
<span class="line"><span>				g[x][y] = g[i][j] + 1</span></span>
<span class="line"><span>				dfs(x, y)</span></span>
<span class="line"><span>				if ok {</span></span>
<span class="line"><span>					return</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				g[x][y] = -1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(r, c)</span></span>
<span class="line"><span>	return g</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/the-knights-tour" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2664.The%20Knight%E2%80%99s%20Tour/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2698" tabindex="-1">2698. 求一个整数的惩罚数 <a class="header-anchor" href="#q-2698" aria-label="Permalink to &quot;2698. 求一个整数的惩罚数 {#q-2698}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、回溯</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数 <code>n</code> ，请你返回 <code>n</code> 的 <strong>惩罚数</strong> 。</p>&#10;&#10;<p><code>n</code> 的 <strong>惩罚数</strong> 定义为所有满足以下条件 <code>i</code> 的数的平方和：</p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= i &lt;= n</code></li>&#10;	<li><code>i * i</code> 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 <code>i</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 10&#10;<b>输出：</b>182&#10;<b>解释：</b>总共有 3 个范围在 [1, 10] 的整数 i 满足要求：&#10;- 1 ，因为 1 * 1 = 1&#10;- 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。&#10;- 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。&#10;因此，10 的惩罚数为 1 + 81 + 100 = 182&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 37&#10;<b>输出：</b>1478&#10;<b>解释：</b>总共有 4 个范围在 [1, 37] 的整数 i 满足要求：&#10;- 1 ，因为 1 * 1 = 1&#10;- 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。&#10;- 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。&#10;- 36 ，因为 36 * 36 = 1296 ，且 1296 可以分割成 1 + 29 + 6 。&#10;因此，37 的惩罚数为 1 + 81 + 100 + 1296 = 1478&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>i</mi>
    <mn>2</mn>
  </msup>
</math></span> 的十进制能否分割成若干段其和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，平方至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 位，分割方案有限，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 再 DFS 切分即可。</p>
<p>从左累积当前段，超过剩余目标则剪枝；切完时目标和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则合法，累加该平方。</p>
</blockquote>
<p>我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <msup>
    <mi>i</mi>
    <mn>2</mn>
  </msup>
</math></span> 的十进制表示的字符串进行分割，然后判断是否满足题目要求。如果满足，我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 累加到答案中。</p>
<p>枚举结束，返回答案即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mrow data-mjx-texclass="ORD">
      <mn>1</mn>
      <mo>+</mo>
      <mn>2</mn>
      <msubsup>
        <mi>log</mi>
        <mrow data-mjx-texclass="ORD">
          <mn>10</mn>
        </mrow>
        <mn>2</mn>
      </msubsup>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为给定的正整数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func punishmentNumber(n int) (ans int) {</span></span>
<span class="line"><span>	var check func(string, int, int) bool</span></span>
<span class="line"><span>	check = func(s string, i, x int) bool {</span></span>
<span class="line"><span>		m := len(s)</span></span>
<span class="line"><span>		if i >= m {</span></span>
<span class="line"><span>			return x == 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		y := 0</span></span>
<span class="line"><span>		for j := i; j &#x3C; m; j++ {</span></span>
<span class="line"><span>			y = y*10 + int(s[j]-'0')</span></span>
<span class="line"><span>			if y > x {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if check(s, j+1, x-y) {</span></span>
<span class="line"><span>				return true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		x := i * i</span></span>
<span class="line"><span>		s := strconv.Itoa(x)</span></span>
<span class="line"><span>		if check(s, 0, i) {</span></span>
<span class="line"><span>			ans += x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-punishment-number-of-an-integer" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2698.Find%20the%20Punishment%20Number%20of%20an%20Integer/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2814" tabindex="-1">2814. 避免淹死并到达目的地的最短时间 🔒 <a class="header-anchor" href="#q-2814" aria-label="Permalink to &quot;2814. 避免淹死并到达目的地的最短时间 🔒 {#q-2814}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>现给定一个 <code>n * m</code> 的索引从 <strong>0</strong> 开始的二维字符串网格 <code>land</code>，目前你站在为 <code>&quot;S&quot;</code> 的单元格上，你需要到达为 <code>&quot;D&quot;</code> 的单元格。在这片区域上还有另外三种类型的单元格：</p>&#10;&#10;<ul>&#10;	<li><code>&quot;.&quot;</code>：这些单元格是空的。</li>&#10;	<li><code>&quot;X&quot;</code>：这些单元格是石头。</li>&#10;	<li><code>&quot;*&quot;</code>：这些单元格被淹没了。</li>&#10;</ul>&#10;&#10;<p>每秒钟，你可以移动到与当前单元格共享边的单元格（如果它存在）。此外，每秒钟，与被淹没的单元格共享边的每个 <strong>空单元格</strong> 也会被淹没。</p>&#10;&#10;<p>在你的旅程中，有两个需要注意的问题：</p>&#10;&#10;<ul>&#10;	<li>你不能踩在石头单元格上。</li>&#10;	<li>你不能踩在被淹没的单元格上，因为你会淹死（同时，你也不能踩在在你踩上时会被淹没的单元格上）。</li>&#10;</ul>&#10;&#10;<p>返回从起始位置到达目标位置所需的 <strong>最小</strong> 时间（以秒为单位），如果不可能达到目标位置，则返回 <code>-1</code>。</p>&#10;&#10;<p><strong>注意</strong>，目标位置永远不会被淹没。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>land = [[&quot;D&quot;,&quot;.&quot;,&quot;*&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;S&quot;,&quot;.&quot;]]&#10;<b>输出：</b>3&#10;<strong>解释：</strong>下面的图片逐秒模拟了土地的变化。蓝色的单元格被淹没，灰色的单元格是石头。&#10; 图片（0）显示了初始状态，图片（3）显示了当我们到达目标时的最终状态。正如你所看到的，我们需要 3 秒才能到达目标位置，答案是 3。&#10;可以证明 3 是从 S 到 D 所需的最小时间。&#10;</pre>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2800-2899/2814.Minimum%20Time%20Takes%20to%20Reach%20Destination%20Without%20Drowning/images/ex1.png" loading="lazy"></p>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>land = [[&quot;D&quot;,&quot;X&quot;,&quot;*&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;S&quot;]]&#10;<b>输出：</b>-1&#10;<b>解释：</b>下面的图片逐秒模拟了土地的变化。蓝色的单元格被淹没，灰色的单元格是石头。&#10;图片（0）显示了初始状态。正如你所看到的，无论我们选择哪条路径，我们都会在第三秒淹没。并且从 S 到 D 的最小路径需要 4 秒。&#10;所以答案是 -1。&#10;</pre>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2800-2899/2814.Minimum%20Time%20Takes%20to%20Reach%20Destination%20Without%20Drowning/images/ex2-2.png" loading="lazy"></p>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>land = [[&quot;D&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;*&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;X&quot;,&quot;.&quot;,&quot;X&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;S&quot;,&quot;.&quot;]]&#10;<b>输出：</b>6&#10;<b>解释：</b>可以证明我们可以在 6 秒内到达目标位置。同时也可以证明 6 是从 S 到 D 所需的最小秒数。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n, m &lt;= 100</code></li>&#10;	<li><code>land</code> 只由 <code>&quot;S&quot;</code>, <code>&quot;D&quot;</code>, <code>&quot;.&quot;</code>, <code>&quot;*&quot;</code> 和 <code>&quot;X&quot;</code> 组成。</li>&#10;	<li><strong>恰好</strong>有一个单元格等于 <code>&quot;S&quot;</code>。</li>&#10;	<li><strong>恰好</strong>有一个单元格等于 <code>&quot;D&quot;</code>。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：两次 BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>水域每秒扩张，人不能踏入已淹没的格子。先对所有水域做多源 BFS，得到每格被淹时刻 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>；再从起点 BFS，仅当邻格满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 时才可在时刻 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 进入，从而把动态洪水约束化为静态距离比较。</p>
</blockquote>
<p>我们先跑一次 BFS，求出每个点到水域的最短距离，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 中。然后再跑一次 BFS，从单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>s</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>s</mi>
    <mi>j</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 出发，求出到达目标单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>d</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>d</mi>
    <mi>j</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 的最短距离。在此过程中，如果当前单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的相邻单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，那么我们就可以从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 走到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
</math></span> 的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumSeconds(land [][]string) int {</span></span>
<span class="line"><span>	m, n := len(land), len(land[0])</span></span>
<span class="line"><span>	vis := make([][]bool, m)</span></span>
<span class="line"><span>	g := make([][]int, m)</span></span>
<span class="line"><span>	q := [][2]int{}</span></span>
<span class="line"><span>	var si, sj int</span></span>
<span class="line"><span>	for i, row := range land {</span></span>
<span class="line"><span>		vis[i] = make([]bool, n)</span></span>
<span class="line"><span>		g[i] = make([]int, n)</span></span>
<span class="line"><span>		for j := range g[i] {</span></span>
<span class="line"><span>			g[i][j] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for j, c := range row {</span></span>
<span class="line"><span>			if c == "*" {</span></span>
<span class="line"><span>				q = append(q, [2]int{i, j})</span></span>
<span class="line"><span>			} else if c == "S" {</span></span>
<span class="line"><span>				si, sj = i, j</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for t := 0; len(q) > 0; t++ {</span></span>
<span class="line"><span>		for k := len(q); k > 0; k-- {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			i, j := p[0], p[1]</span></span>
<span class="line"><span>			g[i][j] = t</span></span>
<span class="line"><span>			for d := 0; d &#x3C; 4; d++ {</span></span>
<span class="line"><span>				x, y := i+dirs[d], j+dirs[d+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; !vis[x][y] {</span></span>
<span class="line"><span>					empty := land[x][y] == "."</span></span>
<span class="line"><span>					start := land[x][y] == "S"</span></span>
<span class="line"><span>					if empty || start {</span></span>
<span class="line"><span>						vis[x][y] = true</span></span>
<span class="line"><span>						q = append(q, [2]int{x, y})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q = append(q, [2]int{si, sj})</span></span>
<span class="line"><span>	vis = make([][]bool, m)</span></span>
<span class="line"><span>	for i := range vis {</span></span>
<span class="line"><span>		vis[i] = make([]bool, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis[si][sj] = true</span></span>
<span class="line"><span>	for t := 0; len(q) > 0; t++ {</span></span>
<span class="line"><span>		for k := len(q); k > 0; k-- {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			i, j := p[0], p[1]</span></span>
<span class="line"><span>			if land[i][j] == "D" {</span></span>
<span class="line"><span>				return t</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			for d := 0; d &#x3C; 4; d++ {</span></span>
<span class="line"><span>				x, y := i+dirs[d], j+dirs[d+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; !vis[x][y] &#x26;&#x26; g[x][y] > t+1 {</span></span>
<span class="line"><span>					empty := land[x][y] == "."</span></span>
<span class="line"><span>					dest := land[x][y] == "D"</span></span>
<span class="line"><span>					if empty || dest {</span></span>
<span class="line"><span>						vis[x][y] = true</span></span>
<span class="line"><span>						q = append(q, [2]int{x, y})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-time-takes-to-reach-destination-without-drowning" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2814.Minimum%20Time%20Takes%20to%20Reach%20Destination%20Without%20Drowning/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3141" tabindex="-1">3141. 最大汉明距离 🔒 <a class="header-anchor" href="#q-3141" aria-label="Permalink to &quot;3141. 最大汉明距离 🔒 {#q-3141}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、广度优先搜索、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个数组 <code>nums</code> 和一个整数 <code>m</code>，每个元素 <code>nums[i]</code> 满足 <code>0 &lt;= nums[i] &lt; 2<sup>m</sup></code>，返回数组 <code>answer</code>。<code>answer</code> 数组应该与 <code>nums</code>  有相同的长度，每个元素 <code>answer[i]</code> 表示 <code>nums[i]</code> 和数组中其它任何元素 <code>nums[j]</code> 的最大 <strong>汉明距离</strong>。</p>&#10;&#10;<p>两个二进制整数之间的 <strong>汉明距离</strong> 定义为对应位上二进制位不同的数量（如果需要，添加前置零）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [9,12,9,11], m = 4</span></p>&#10;&#10;<p><strong>输出：</strong><span>[2,3,2,3]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>二进制表示为 <code>nums = [1001,1100,1001,1011]</code>。</p>&#10;&#10;<p>每个下标的最大汉明距离为：</p>&#10;&#10;<ul>&#10;	<li><code>nums[0]</code>：1001 与 1100 距离为 2。</li>&#10;	<li><code>nums[1]</code>：1100 与 1011 距离为 3。</li>&#10;	<li><code>nums[2]</code>：1001 与 1100 距离为 2。</li>&#10;	<li><code>nums[3]</code>：1011 与 1100 距离为 3。</li>&#10;</ul>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [3,4,6,10], m = 4</span></p>&#10;&#10;<p><strong>输出：</strong><span>[3,3,2,3]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>二进制表示为 <code>nums = [0011,0100,0110,1010]</code>。</p>&#10;&#10;<p>每个下标的最大汉明距离为：</p>&#10;&#10;<ul>&#10;	<li><code>nums[0]</code>：0011 与 0100 距离为 3。</li>&#10;	<li><code>nums[1]</code>：0100 与 0011 距离为 3。</li>&#10;	<li><code>nums[2]</code>：0110 与 1010 距离为 2。</li>&#10;	<li><code>nums[3]</code>：1010 与 0100 距离为 3。</li>&#10;</ul>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= m &lt;= 17</code></li>&#10;	<li><code>2 &lt;= nums.length &lt;= 2<sup>m</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt; 2<sup>m</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：逆向思维 + BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个值求它与数组中某元素的最大汉明距离。若对每个数枚举其余数，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>17</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 较大时过慢。</p>
<p>最大距离等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 减去到「某数组元素」的最小距离。从数组中的数出发，在超立方体上按翻一位做 BFS，即可得到每个掩码到数组的最短汉明距离。</p>
<p>因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 在数组中，多层扩展翻比特；对询问值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo>&#x2295;</mo>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">]</mo>
</math></span>，即到其补码的最短距离改写成最大距离。</p>
</blockquote>
<p>题目需要我们求出数组每个元素和其他元素的最大海明距离，我们不妨换个角度思考，我们对每个元素取反，然后求出其到数组中其他元素的最小海明距离，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 减去这个最小海明距离就是我们要求的最大海明距离。</p>
<p>我们可以使用广度优先搜索来求出每个取反的元素到其他元素的最小海明距离。</p>
<p>具体步骤如下：</p>
<ol>
<li>初始化一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dist</mtext>
</math></span>，数组长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
</math></span>，用来记录每个取反后的元素到其他元素的最小海明距离，初始时全部置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</li>
<li>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，将每个元素的取反值置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，并将其加入队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span>。</li>
<li>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 开始，不断遍历队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span>，每次遍历时，将队列中的元素取出，然后对其进行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 次取反操作，将取反后的元素加入队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">t</mtext>
</math></span>，并将其到原元素的最小海明距离置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</li>
<li>重复步骤 3，直到队列为空。</li>
</ol>
<p>最后，我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，将每个元素取反后的值作为下标，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dist</mtext>
</math></span> 数组中取出对应的最小海明距离，然后用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 减去这个值，就是我们要求的最大海明距离。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 为题目给定的整数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxHammingDistances(nums []int, m int) []int {</span></span>
<span class="line"><span>	dist := make([]int, 1&#x3C;&#x3C;m)</span></span>
<span class="line"><span>	for i := range dist {</span></span>
<span class="line"><span>		dist[i] = -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q := []int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		dist[x] = 0</span></span>
<span class="line"><span>		q = append(q, x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for k := 1; len(q) > 0; k++ {</span></span>
<span class="line"><span>		t := []int{}</span></span>
<span class="line"><span>		for _, x := range q {</span></span>
<span class="line"><span>			for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>				y := x ^ (1 &#x3C;&#x3C; i)</span></span>
<span class="line"><span>				if dist[y] == -1 {</span></span>
<span class="line"><span>					dist[y] = k</span></span>
<span class="line"><span>					t = append(t, y)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q = t</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		nums[i] = m - dist[x^(1&#x3C;&#x3C;m-1)]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nums</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-hamming-distances" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3100-3199/3141.Maximum%20Hamming%20Distances/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3211" tabindex="-1">3211. 生成不含相邻零的二进制字符串 <a class="header-anchor" href="#q-3211" aria-label="Permalink to &quot;3211. 生成不含相邻零的二进制字符串 {#q-3211}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、字符串、回溯</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数 <code>n</code>。</p>&#10;&#10;<p>如果一个二进制字符串 <code>x</code> 的所有长度为 2 的<span>子字符串</span>中包含 <strong>至少</strong> 一个 <code>&quot;1&quot;</code>，则称 <code>x</code> 是一个<strong> 有效</strong> 字符串。</p>&#10;&#10;<p>返回所有长度为 <code>n</code> 的<strong> 有效</strong> 字符串，可以以任意顺序排列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>n = 3</span></p>&#10;&#10;<p><strong>输出：</strong> <span>[&quot;010&quot;,&quot;011&quot;,&quot;101&quot;,&quot;110&quot;,&quot;111&quot;]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>长度为 3 的有效字符串有：<code>&quot;010&quot;</code>、<code>&quot;011&quot;</code>、<code>&quot;101&quot;</code>、<code>&quot;110&quot;</code> 和 <code>&quot;111&quot;</code>。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>n = 1</span></p>&#10;&#10;<p><strong>输出：</strong> <span>[&quot;0&quot;,&quot;1&quot;]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>长度为 1 的有效字符串有：<code>&quot;0&quot;</code> 和 <code>&quot;1&quot;</code>。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 18</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>18</mn>
</math></span>，长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制串共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 个，先生成再过滤相邻 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>00</mn>
</math></span> 可以接受，但大量非法前缀不必展开。</p>
<p>按位 DFS：在位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 尝试填 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，仅当填 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 或前一位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。走到长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 即收入答案。剪枝后搜索树恰好对应全体合法串。</p>
</blockquote>
<p>我们可以枚举长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制字符串的每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，然后对于每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们可以枚举其可以取的值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么我们需要判断其前一个位置是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，如果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则可以继续递归下去，否则不合法，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则直接递归下去。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串长度。忽略答案数组的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func validStrings(n int) (ans []string) {</span></span>
<span class="line"><span>	t := []byte{}</span></span>
<span class="line"><span>	var dfs func(int)</span></span>
<span class="line"><span>	dfs = func(i int) {</span></span>
<span class="line"><span>		if i >= n {</span></span>
<span class="line"><span>			ans = append(ans, string(t))</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for j := 0; j &#x3C; 2; j++ {</span></span>
<span class="line"><span>			if (j == 0 &#x26;&#x26; (i == 0 || t[i-1] == '1')) || j == 1 {</span></span>
<span class="line"><span>				t = append(t, byte('0'+j))</span></span>
<span class="line"><span>				dfs(i + 1)</span></span>
<span class="line"><span>				t = t[:len(t)-1]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(0)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/generate-binary-strings-without-adjacent-zeros" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3200-3299/3211.Generate%20Binary%20Strings%20Without%20Adjacent%20Zeros/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3283" tabindex="-1">3283. 吃掉所有兵需要的最多移动次数 <a class="header-anchor" href="#q-3283" aria-label="Permalink to &quot;3283. 吃掉所有兵需要的最多移动次数 {#q-3283}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、广度优先搜索、数组、数学、位掩码、博弈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>50 x 50</code> 的国际象棋棋盘，棋盘上有 <strong>一个</strong> 马和一些兵。给你两个整数 <code>kx</code> 和 <code>ky</code> ，其中 <code>(kx, ky)</code> 表示马所在的位置，同时还有一个二维数组 <code>positions</code> ，其中 <code>positions[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示第 <code>i</code> 个兵在棋盘上的位置。</p>&#10;&#10;<p>Alice 和 Bob 玩一个回合制游戏，Alice 先手。玩家的一次操作中，可以执行以下操作：</p>&#10;&#10;<ul>&#10;	<li>玩家选择一个仍然在棋盘上的兵，然后移动马，通过 <strong>最少</strong> 的 <strong>步数</strong> 吃掉这个兵。<strong>注意</strong> ，玩家可以选择 <strong>任意</strong> 一个兵，<strong>不一定</strong> 要选择从马的位置出发 <strong>最少</strong> 移动步数的兵。</li>&#10;	<li><span>在马吃兵的过程中，马 <strong>可能</strong> 会经过一些其他兵的位置，但这些兵 <strong>不会</strong> 被吃掉。<strong>只有</strong> 选中的兵在这个回合中被吃掉。</span></li>&#10;</ul>&#10;&#10;<p>Alice 的目标是 <strong>最大化</strong> 两名玩家的 <strong>总</strong> 移动次数，直到棋盘上不再存在兵，而 Bob 的目标是 <strong>最小化</strong> 总移动次数。</p>&#10;&#10;<p>假设两名玩家都采用 <strong>最优</strong> 策略，请你返回可以达到的 <strong>最大</strong> 总移动次数。</p>&#10;&#10;<p>在一次 <strong>移动</strong> 中，如下图所示，马有 8 个可以移动到的位置，每个移动位置都是沿着坐标轴的一个方向前进 2 格，然后沿着垂直的方向前进 1 格。</p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3200-3299/3283.Maximum%20Number%20of%20Moves%20to%20Kill%20All%20Pawns/images/chess_knight.jpg" loading="lazy"></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>kx = 1, ky = 1, positions = [[0,0]]</span></p>&#10;&#10;<p><span><b>输出：</b>4</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3200-3299/3283.Maximum%20Number%20of%20Moves%20to%20Kill%20All%20Pawns/images/gif3.gif" loading="lazy"></p>&#10;&#10;<p>马需要移动 4 步吃掉 <code>(0, 0)</code> 处的兵。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>kx = 0, ky = 2, positions = [[1,1],[2,2],[3,3]]</span></p>&#10;&#10;<p><span><b>输出：</b>8</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3200-3299/3283.Maximum%20Number%20of%20Moves%20to%20Kill%20All%20Pawns/images/gif4.gif" loading="lazy"></strong></p>&#10;&#10;<ul>&#10;	<li>Alice 选择 <code>(2, 2)</code> 处的兵，移动马吃掉它需要 2 步：<code>(0, 2) -> (1, 4) -> (2, 2)</code> 。</li>&#10;	<li>Bob 选择 <code>(3, 3)</code> 处的兵，移动马吃掉它需要 2 步：<code>(2, 2) -> (4, 1) -> (3, 3)</code> 。</li>&#10;	<li>Alice 选择 <code>(1, 1)</code> 处的兵，移动马吃掉它需要 4 步：<code>(3, 3) -> (4, 1) -> (2, 2) -> (0, 3) -> (1, 1)</code> 。</li>&#10;</ul>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>kx = 0, ky = 0, positions = [[1,2],[2,4]]</span></p>&#10;&#10;<p><span><b>输出：</b>3</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<ul>&#10;	<li>Alice 选择 <code>(2, 4)</code> 处的兵，移动马吃掉它需要 2 步：<code>(0, 0) -> (1, 2) -> (2, 4)</code> 。注意，<code>(1, 2)</code> 处的兵不会被吃掉。</li>&#10;	<li>Bob 选择 <code>(1, 2)</code> 处的兵，移动马吃掉它需要 1 步：<code>(2, 4) -> (1, 2)</code> 。</li>&#10;</ul>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= kx, ky &lt;= 49</code></li>&#10;	<li><code>1 &lt;= positions.length &lt;= 15</code></li>&#10;	<li><code>positions[i].length == 2</code></li>&#10;	<li><code>0 &lt;= positions[i][0], positions[i][1] &lt;= 49</code></li>&#10;	<li><code>positions[i]</code> 两两互不相同。</li>&#10;	<li>输入保证对于所有 <code>0 &lt;= i &lt; positions.length</code> ，都有 <code>positions[i] != [kx, ky]</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS + 状态压缩 + 记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>马要轮流吃光至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 个兵，Alice 最大化总步、Bob 最小化。棋盘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>50</mn>
  <mo>&#xD7;</mo>
  <mn>50</mn>
</math></span>，对每个兵做一次 BFS 得到马步距离；吃兵顺序是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
  <mo>!</mo>
</math></span> 量级，需状态压缩博弈。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span> 为上一个被吃的兵（初值为马的位置）， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>e</mi>
</math></span> 为剩余兵集合， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为是否 Alice。Alice 取最大、Bob 取最小，边权用预处理的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span>。记忆化后状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们首先预处理出每个兵到棋盘上任意一个位置的马的最短距离，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dist</mtext>
</math></span> 中，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dist</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个兵到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 位置的马的最短距离。</p>
<p>接下来，我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">state</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">k</mtext>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
</math></span> 表示上一个吃掉的兵的编号，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">state</mtext>
</math></span> 表示当前还剩下的兵的状态，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">k</mtext>
</math></span> 表示当前是 Alice 还是 Bob 的回合。函数的返回值表示当前回合的最大移动次数。那么答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>,</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。这里我们初始时上一个吃掉的兵的编号记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，这也是马所在的位置。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
</math></span> 的具体实现如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">state</mtext>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，表示没有兵了，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">k</mtext>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，表示当前是 Alice 的回合，我们需要找到一个兵，使得吃掉这个兵后的移动次数最大，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">state</mtext>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>i</mi>
  </msup>
  <mo>,</mo>
  <mtext mathvariant="italic">k</mtext>
  <mo>&#x2295;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">dist</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">k</mtext>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，表示当前是 Bob 的回合，我们需要找到一个兵，使得吃掉这个兵后的移动次数最小，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">state</mtext>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>i</mi>
  </msup>
  <mo>,</mo>
  <mtext mathvariant="italic">k</mtext>
  <mo>&#x2295;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">dist</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span>。</li>
</ul>
<p>为了避免重复计算，我们使用记忆化搜索，即使用哈希表记录已经计算过的状态。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mi>m</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#xD7;</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mi>m</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别为兵的数量和棋盘的大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxMoves(kx int, ky int, positions [][]int) int {</span></span>
<span class="line"><span>	n := len(positions)</span></span>
<span class="line"><span>	const m = 50</span></span>
<span class="line"><span>	dx := []int{1, 1, 2, 2, -1, -1, -2, -2}</span></span>
<span class="line"><span>	dy := []int{2, -2, 1, -1, 2, -2, 1, -1}</span></span>
<span class="line"><span>	dist := make([][][]int, n+1)</span></span>
<span class="line"><span>	for i := range dist {</span></span>
<span class="line"><span>		dist[i] = make([][]int, m)</span></span>
<span class="line"><span>		for j := range dist[i] {</span></span>
<span class="line"><span>			dist[i][j] = make([]int, m)</span></span>
<span class="line"><span>			for k := range dist[i][j] {</span></span>
<span class="line"><span>				dist[i][j][k] = -1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 0; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		x := kx</span></span>
<span class="line"><span>		y := ky</span></span>
<span class="line"><span>		if i &#x3C; n {</span></span>
<span class="line"><span>			x = positions[i][0]</span></span>
<span class="line"><span>			y = positions[i][1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q := [][2]int{[2]int{x, y}}</span></span>
<span class="line"><span>		dist[i][x][y] = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		for step := 1; len(q) > 0; step++ {</span></span>
<span class="line"><span>			for k := len(q); k > 0; k-- {</span></span>
<span class="line"><span>				p := q[0]</span></span>
<span class="line"><span>				q = q[1:]</span></span>
<span class="line"><span>				x1, y1 := p[0], p[1]</span></span>
<span class="line"><span>				for j := 0; j &#x3C; 8; j++ {</span></span>
<span class="line"><span>					x2 := x1 + dx[j]</span></span>
<span class="line"><span>					y2 := y1 + dy[j]</span></span>
<span class="line"><span>					if x2 >= 0 &#x26;&#x26; x2 &#x3C; m &#x26;&#x26; y2 >= 0 &#x26;&#x26; y2 &#x3C; m &#x26;&#x26; dist[i][x2][y2] == -1 {</span></span>
<span class="line"><span>						dist[i][x2][y2] = step</span></span>
<span class="line"><span>						q = append(q, [2]int{x2, y2})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([][][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([][]int, 1&#x3C;&#x3C;n)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = make([]int, 2)</span></span>
<span class="line"><span>			for k := range f[i][j] {</span></span>
<span class="line"><span>				f[i][j][k] = -1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(last, state, k int) int</span></span>
<span class="line"><span>	dfs = func(last, state, k int) int {</span></span>
<span class="line"><span>		if state == 0 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[last][state][k] != -1 {</span></span>
<span class="line"><span>			return f[last][state][k]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		var res int</span></span>
<span class="line"><span>		if k == 0 {</span></span>
<span class="line"><span>			res = math.MaxInt32</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		for i, p := range positions {</span></span>
<span class="line"><span>			x, y := p[0], p[1]</span></span>
<span class="line"><span>			if (state>>i)&#x26;1 == 1 {</span></span>
<span class="line"><span>				t := dfs(i, state^(1&#x3C;&#x3C;i), k^1) + dist[last][x][y]</span></span>
<span class="line"><span>				if k == 1 {</span></span>
<span class="line"><span>					res = max(res, t)</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					res = min(res, t)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[last][state][k] = res</span></span>
<span class="line"><span>		return res</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return dfs(n, (1&#x3C;&#x3C;n)-1, 1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-moves-to-kill-all-pawns" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3200-3299/3283.Maximum%20Number%20of%20Moves%20to%20Kill%20All%20Pawns/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const g=s(p,[["render",o]]);export{d as __pageData,g as default};
