import{_ as s,a,c as t,b as p}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 并查集（1）","description":"并查集分类，第 128–1061 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 并查集（1）","description":"并查集分类，第 128–1061 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"并查集分类，第 128–1061 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 动态规划（1）","link":"/principles/algorithms/leetcode-go/dp-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":false,"next":{"text":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":false,"next":{"text":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/union-find-01.md","filePath":"principles/algorithms/leetcode-go/union-find-01.md"}'),e={name:"principles/algorithms/leetcode-go/union-find-01.md"};function l(i,n,o,m,c,r){return a(),t("div",null,[...n[0]||(n[0]=[p("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-并查集-1" tabindex="-1">LeetCode Go · 并查集（1） <a class="header-anchor" href="#leetcode-go-·-并查集-1" aria-label="Permalink to &quot;LeetCode Go · 并查集（1）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-128" tabindex="-1">128. 最长连续序列 <a class="header-anchor" href="#q-128" aria-label="Permalink to &quot;128. 最长连续序列 {#q-128}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：并查集、数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个未排序的整数数组 <code>nums</code> ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。</p>&#10;&#10;<p>请你设计并实现时间复杂度为 <code>O(n)</code><em> </em>的算法解决此问题。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [100,4,200,1,3,2]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [0,3,7,2,5,8,4,6,0,1]&#10;<strong>输出：</strong>9&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,0,1,2]&#10;<b>输出：</b>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排序后扫连续段是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，题目要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。放入哈希集合后，从每个尚未删除的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 向右延伸，直到断掉，并把这段长度记在起点上，供更早的起点拼接。每个数进出集合一次。</p>
</blockquote>
<p>我们可以用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 存储数组中所有的元素，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 记录最长连续序列的长度，用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">d</mtext>
</math></span> 记录每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 所在的连续序列的长度。</p>
<p>接下来，我们遍历数组中每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，用一个临时变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 记录当前连续序列的最大值，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mi>x</mi>
</math></span>。然后，我们不断尝试匹配 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>y</mi>
  <mo>+</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>y</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span>，直到匹配不到为止，过程中将匹配到的元素从哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中移除。那么，当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 所在的连续序列的长度即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>，然后更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">ans</mtext>
  <mo>,</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>遍历结束后，返回答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 即可。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestConsecutive(nums []int) (ans int) {</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	d := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		y := x</span></span>
<span class="line"><span>		for s[y] {</span></span>
<span class="line"><span>			delete(s, y)</span></span>
<span class="line"><span>			y++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		d[x] = d[y] + y - x</span></span>
<span class="line"><span>		ans = max(ans, d[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：哈希表（优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一额外用哈希表记下每段长度以便拼接。若只从「 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 不在集合中」的位置开始向右数，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 一定是某段起点，不必再保存 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>。实现更短，仍保证每个数被访问常数次。</p>
</blockquote>
<p>与方法一类似，我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 存储数组中所有的元素，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 记录最长连续序列的长度。但是，我们不再使用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">d</mtext>
</math></span> 记录每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 所在的连续序列的长度，在遍历的过程中，跳过那些 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 也在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中的元素，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 一定不是连续序列的起点，因此我们可以直接跳过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestConsecutive(nums []int) (ans int) {</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x, _ := range s {</span></span>
<span class="line"><span>		if !s[x-1] {</span></span>
<span class="line"><span>			y := x + 1</span></span>
<span class="line"><span>			for s[y] {</span></span>
<span class="line"><span>				y++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans = max(ans, y-x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-consecutive-sequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0100-0199/0128.Longest%20Consecutive%20Sequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-130" tabindex="-1">130. 被围绕的区域 <a class="header-anchor" href="#q-130" aria-label="Permalink to &quot;130. 被围绕的区域 {#q-130}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m x n</code> 的矩阵 <code>board</code> ，由若干字符 <code>'X'</code> 和 <code>'O'</code> 组成，<strong>捕获</strong> 所有 <strong>被围绕的区域</strong>：</p>&#10;&#10;<ul>&#10;	<li><strong>连接：</strong>一个单元格与水平或垂直方向上相邻的单元格连接。</li>&#10;	<li><strong>区域：连接所有 </strong><code>'O'</code> 的单元格来形成一个区域。</li>&#10;	<li><strong>围绕：</strong>如果一个区域中的所有 <code>'O'</code> 单元格都不在棋盘的边缘，则该区域被包围。这样的区域 <strong>完全</strong> 被 <code>'X'</code> 单元格包围。</li>&#10;</ul>&#10;&#10;<p>通过 <strong>原地</strong> 将输入矩阵中的所有 <code>'O'</code> 替换为 <code>'X'</code> 来 <strong>捕获被围绕的区域</strong>。你不需要返回任何值。</p>&#10;&#10;<div>&#10;<div>&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]</span></p>&#10;&#10;<p><b>输出：</b><span>[['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0130.Surrounded%20Regions/images/1718167191-XNjUTG-image.png" loading="lazy">&#10;<p>在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>board = [['X']]</span></p>&#10;&#10;<p><strong>输出：</strong><span>[['X']]</span></p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == board.length</code></li>&#10;	<li><code>n == board[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 200</code></li>&#10;	<li><code>board[i][j]</code> 为 <code>'X'</code> 或 <code>'O'</code></li>&#10;</ul>&#10;</div>&#10;</div></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>被包围的 <code v-pre>'O'</code> 要改成 <code v-pre>'X'</code>，与边界连通的 <code v-pre>'O'</code> 必须保留。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>200</mn>
</math></span>。从内部出发判断「是否被围住」要处理整片连通块，且边界情况容易漏。</p>
<p>与其找被围住的，不如标记与边界相连的：从四条边上的 <code v-pre>'O'</code> 做 DFS，能走到的都先改成占位，其余 <code v-pre>'O'</code> 一律变成 <code v-pre>'X'</code>，占位再改回 <code v-pre>'O'</code>。</p>
</blockquote>
<p>我们可以从矩阵的边界开始，将矩阵边界上的每个 <code v-pre>O</code> 作为起始点，开始进行深度优先搜索。将搜索到的 <code v-pre>O</code> 全部替换成 <code v-pre>.</code>。</p>
<p>然后我们再遍历这个矩阵，对于每个位置：</p>
<ul>
<li>如果是 <code v-pre>.</code>，则替换成 <code v-pre>O</code>；</li>
<li>否则如果是 <code v-pre>O</code>，则替换成 <code v-pre>X</code>。</li>
</ul>
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
</math></span> 分别是矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func solve(board [][]byte) {</span></span>
<span class="line"><span>	m, n := len(board), len(board[0])</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	var dfs func(i, j int)</span></span>
<span class="line"><span>	dfs = func(i, j int) {</span></span>
<span class="line"><span>		if i &#x3C; 0 || i >= m || j &#x3C; 0 || j >= n || board[i][j] != 'O' {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		board[i][j] = '.'</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			dfs(i+dirs[k], j+dirs[k+1])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		dfs(i, 0)</span></span>
<span class="line"><span>		dfs(i, n-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>		dfs(0, j)</span></span>
<span class="line"><span>		dfs(m-1, j)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, row := range board {</span></span>
<span class="line"><span>		for j, c := range row {</span></span>
<span class="line"><span>			if c == '.' {</span></span>
<span class="line"><span>				board[i][j] = 'O'</span></span>
<span class="line"><span>			} else if c == 'O' {</span></span>
<span class="line"><span>				board[i][j] = 'X'</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用 DFS 染色区分「与边界连通」。并查集把相邻 <code v-pre>'O'</code> 连成块，并另设一个超级节点连上所有边界 <code v-pre>'O'</code>。最后不与超级节点同根的 <code v-pre>'O'</code> 即被包围。避免递归栈，连通关系更直观。</p>
</blockquote>
<p>我们也可以使用并查集，将矩阵边界上的每个 <code v-pre>O</code> 与一个超级节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span> 相连，将矩阵中的每个 <code v-pre>O</code> 与其上下左右的 <code v-pre>O</code> 相连。</p>
<p>然后我们遍历这个矩阵，对于每个位置，如果是 <code v-pre>O</code>，并且其与超级节点不相连，则将其替换成 <code v-pre>X</code>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
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
</math></span> 分别是矩阵的行数和列数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
</math></span> 是阿克曼函数的反函数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func solve(board [][]byte) {</span></span>
<span class="line"><span>	m, n := len(board), len(board[0])</span></span>
<span class="line"><span>	p := make([]int, m*n+1)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(x int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if board[i][j] == 'O' {</span></span>
<span class="line"><span>				if i == 0 || i == m-1 || j == 0 || j == n-1 {</span></span>
<span class="line"><span>					p[find(i*n+j)] = find(m * n)</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>						x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>						if board[x][y] == 'O' {</span></span>
<span class="line"><span>							p[find(x*n+y)] = find(i*n + j)</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if board[i][j] == 'O' &#x26;&#x26; find(i*n+j) != find(m*n) {</span></span>
<span class="line"><span>				board[i][j] = 'X'</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/surrounded-regions" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0100-0199/0130.Surrounded%20Regions/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-200" tabindex="-1">200. 岛屿数量 <a class="header-anchor" href="#q-200" aria-label="Permalink to &quot;200. 岛屿数量 {#q-200}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>4 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个由 <code>'1'</code>（陆地）和 <code>'0'</code>（水）组成的的二维网格，请你计算网格中岛屿的数量。</p>&#10;&#10;<p>岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。</p>&#10;&#10;<p>此外，你可以假设该网格的四条边均被水包围。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [&#10;  ['1','1','1','1','0'],&#10;  ['1','1','0','1','0'],&#10;  ['1','1','0','0','0'],&#10;  ['0','0','0','0','0']&#10;]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [&#10;  ['1','1','0','0','0'],&#10;  ['1','1','0','0','0'],&#10;  ['0','0','1','0','0'],&#10;  ['0','0','0','1','1']&#10;]&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 300</code></li>&#10;	<li><code>grid[i][j]</code> 的值为 <code>'0'</code> 或 <code>'1'</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>若将网格中每个值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的格子单独计为一座岛，则四连通的陆地会被重复计数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>300</mn>
</math></span>，整图遍历可行，但须在同一次搜索中把同一连通块全部消掉。</p>
<p>注意到上下左右相邻的陆地构成一个连通分量，从任一尚未访问的陆地出发即可覆盖整座岛。为此扫描每个格子，遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 便启动 DFS，沿途把陆地改写为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，每启动一次搜索将答案加一。</p>
</blockquote>
<p>我们可以使用深度优先搜索（DFS）来遍历每个岛屿。遍历网格中的每个单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果该单元格的值为 '1'，则说明我们找到了一个新的岛屿。我们可以从该单元格开始进行 DFS，将与之相连的所有陆地单元格的值都标记为 '0'，以避免重复计数。每次找到一个新的岛屿时，我们将岛屿数量加 1。</p>
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
</math></span> 分别为网格的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numIslands(grid [][]byte) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	var dfs func(i, j int)</span></span>
<span class="line"><span>	dfs = func(i, j int) {</span></span>
<span class="line"><span>		grid[i][j] = '0'</span></span>
<span class="line"><span>		dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == '1' {</span></span>
<span class="line"><span>				dfs(x, y)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] == '1' {</span></span>
<span class="line"><span>				dfs(i, j)</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一已经用显式栈按连通分量抹掉陆地。同一四连通定义下，也可以用队列按层扩展邻接陆地，同样一次抹掉一座岛。</p>
<p>扫描顺序与方法一相同，空间仍由队列规模决定。</p>
</blockquote>
<p>我们也可以使用广度优先搜索（BFS）来遍历每个岛屿。遍历网格中的每个单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果该单元格的值为 '1'，则说明我们找到了一个新的岛屿。我们可以从该单元格开始进行 BFS，将与之相连的所有陆地单元格的值都标记为 '0'，以避免重复计数。每次找到一个新的岛屿时，我们将岛屿数量加 1。</p>
<p>BFS 的具体过程如下：</p>
<ol>
<li>将起始单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 入队，并将其值标记为 '0'。</li>
<li>当队列不为空时，执行以下操作：
<ul>
<li>出队一个单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span>。</li>
<li>遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的四个相邻单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 在网格范围内且值为 '1'，则将其入队并将其值标记为 '0'。</li>
</ul>
</li>
</ol>
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
</math></span> 分别为网格的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numIslands(grid [][]byte) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	bfs := func(i, j int) {</span></span>
<span class="line"><span>		grid[i][j] = '0'</span></span>
<span class="line"><span>		q := [][]int{[]int{i, j}}</span></span>
<span class="line"><span>		dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>		for len(q) > 0 {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>				x, y := p[0]+dirs[k], p[1]+dirs[k+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == '1' {</span></span>
<span class="line"><span>					q = append(q, []int{x, y})</span></span>
<span class="line"><span>					grid[x][y] = '0'</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] == '1' {</span></span>
<span class="line"><span>				bfs(i, j)</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三： 并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>若希望把“相邻即同一座岛”显式建成集合，则可将每块陆地视作并查集结点，与四邻中的陆地合并。</p>
<p>扫描结束后，岛屿数等于连通分量个数。合并与查询均可在近似线性时间内完成，空间仍为网格规模。</p>
</blockquote>
<p>我们可以使用并查集（Union-Find）来解决这个问题。遍历网格中的每个单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果该单元格的值为 '1'，则将其与相邻的陆地单元格进行合并。最后，我们统计并查集中不同根节点的数量，即为岛屿的数量。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numIslands(grid [][]byte) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	p := make([]int, m*n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(x int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := []int{1, 0, 1}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] == '1' {</span></span>
<span class="line"><span>				for k := 0; k &#x3C; 2; k++ {</span></span>
<span class="line"><span>					x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>					if x &#x3C; m &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == '1' {</span></span>
<span class="line"><span>						p[find(x*n+y)] = find(i*n + j)</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] == '1' &#x26;&#x26; i*n+j == find(i*n+j) {</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法四：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>若将每个值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的格子单独计为一座岛，四连通的陆地会被重复计数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>300</mn>
</math></span>，一次扫描即可，但同一连通块必须在一次搜索里全部改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>从一块陆地递归走向下一个邻居时，一条 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 格的蛇形岛就会超出递归上限，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>300</mn>
  <mo>&#xD7;</mo>
  <mn>300</mn>
</math></span> 的网格容得下这条蛇。</p>
<p>抹掉一座岛不需要递归返回值，只需要把四连通的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>因此遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 就把它压入显式栈。弹出后把四个方向上仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的邻居标成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 并入栈，每启动一次搜索将答案加一。</p>
</blockquote>
<p>扫描每个格子，遇到 <code v-pre>'1'</code> 就用显式栈淹没整座岛，沿途把陆地改成 <code v-pre>'0'</code>，并将答案加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 分别为网格的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numIslands(grid [][]byte) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] != '1' {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			grid[i][j] = '0'</span></span>
<span class="line"><span>			stk := [][2]int{{i, j}}</span></span>
<span class="line"><span>			for len(stk) > 0 {</span></span>
<span class="line"><span>				cur := stk[len(stk)-1]</span></span>
<span class="line"><span>				stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>				for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>					x, y := cur[0]+dirs[k], cur[1]+dirs[k+1]</span></span>
<span class="line"><span>					if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == '1' {</span></span>
<span class="line"><span>						grid[x][y] = '0'</span></span>
<span class="line"><span>						stk = append(stk, [2]int{x, y})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-islands" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0200.Number%20of%20Islands/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-261" tabindex="-1">261. 以图判树 🔒 <a class="header-anchor" href="#q-261" aria-label="Permalink to &quot;261. 以图判树 🔒 {#q-261}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定编号从 <code>0</code> 到 <code>n - 1</code> 的 <code>n</code> 个结点。给定一个整数 <code>n</code> 和一个 <code>edges</code> 列表，其中 <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> 表示图中节点 <code>a<sub>i</sub></code> 和 <code>b<sub>i</sub></code> 之间存在一条无向边。</p>&#10;&#10;<p>如果这些边能够形成一个合法有效的树结构，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0261.Graph%20Valid%20Tree/images/tree1-graph.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>n = 5</code>, edges<code> = [[0,1],[0,2],[0,3],[1,4]]</code>&#10;<strong>输出:</strong> true</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0261.Graph%20Valid%20Tree/images/tree2-graph.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>n = 5, </code>edges<code> = [[0,1],[1,2],[2,3],[1,3],[1,4]]</code>&#10;<strong>输出:</strong> false</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 2000</code></li>&#10;	<li><code>0 &lt;= edges.length &lt;= 5000</code></li>&#10;	<li><code>edges[i].length == 2</code></li>&#10;	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; n</code></li>&#10;	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>&#10;	<li>不存在自循环或重复的边</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>无向图是树当且仅当连通且无环，边数必为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。并查集在加边时若两端已同属一个集合则成环。</p>
<p>每合并一次连通分量减一，全部边处理完后分量应为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>判断是否是树，需要满足以下两个条件：</p>
<ol>
<li>边的数量等于节点数减一；</li>
<li>不存在环。</li>
</ol>
<p>我们可以使用并查集来判断是否存在环。遍历边，如果两个节点已经在同一个集合中，说明存在环。否则，我们将两个节点合并到同一个集合中。然后将连通分量的数量减一，最后判断连通分量的数量是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func validTree(n int, edges [][]int) bool {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		pa, pb := find(e[0]), find(e[1])</span></span>
<span class="line"><span>		if pa == pb {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p[pa] = pb</span></span>
<span class="line"><span>		n--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n == 1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>并查集按边检测环。也可先要求边数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，再从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 做 DFS，访问结点数等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 则连通且无额外边。</p>
</blockquote>
<p>我们也可以使用深度优先搜索来判断是否存在环。我们可以使用一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 来记录访问过的节点，搜索时，我们先将节点标记为已访问，然后遍历与该节点相邻的节点，如果相邻节点已经访问过，则跳过，否则递归访问相邻节点。最后，我们判断是否所有节点都被访问过，如果有未访问过的节点，说明无法构成树，返回 <code v-pre>false</code>。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func validTree(n int, edges [][]int) bool {</span></span>
<span class="line"><span>	if len(edges) != n-1 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(int)</span></span>
<span class="line"><span>	dfs = func(i int) {</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		n--</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			if !vis[j] {</span></span>
<span class="line"><span>				dfs(j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(0)</span></span>
<span class="line"><span>	return n == 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/graph-valid-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0261.Graph%20Valid%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-305" tabindex="-1">305. 岛屿数量 II 🔒 <a class="header-anchor" href="#q-305" aria-label="Permalink to &quot;305. 岛屿数量 II 🔒 {#q-305}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：并查集、数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m x n</code> 的二维二进制网格 <code>grid</code> 。网格表示一个地图，其中，<code>0</code> 表示水，<code>1</code> 表示陆地。最初，<code>grid</code> 中的所有单元格都是水单元格（即，所有单元格都是 <code>0</code>）。</p>&#10;&#10;<p>可以通过执行 <code>addLand</code> 操作，将某个位置的水转换成陆地。给你一个数组 <code>positions</code> ，其中 <code>positions[i] = [r<sub>i</sub>, c<sub>i</sub>]</code> 是要执行第 <code>i</code> 次操作的位置 <code>(r<sub>i</sub>, c<sub>i</sub>)</code> 。</p>&#10;&#10;<p>返回一个整数数组 <code>answer</code> ，其中 <code>answer[i]</code> 是将单元格 <code>(r<sub>i</sub>, c<sub>i</sub>)</code> 转换为陆地后，地图中岛屿的数量。</p>&#10;&#10;<p><strong>岛屿</strong> 的定义是被「水」包围的「陆地」，通过水平方向或者垂直方向上相邻的陆地连接而成。你可以假设地图网格的四边均被无边无际的「水」所包围。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0305.Number%20of%20Islands%20II/images/tmp-grid.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>m = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1]]&#10;<strong>输出：</strong>[1,1,2,3]&#10;<strong>解释：</strong>&#10;起初，二维网格 <code>grid</code> 被全部注入「水」。（0 代表「水」，1 代表「陆地」）&#10;- 操作 #1：<code>addLand(0, 0)</code> 将 <code>grid[0][0]</code> 的水变为陆地。此时存在 1 个岛屿。&#10;- 操作 #2：<code>addLand(0, 1)</code> 将 <code>grid[0][1]</code> 的水变为陆地。此时存在 1 个岛屿。&#10;- 操作 #3：<code>addLand(1, 2)</code> 将 <code>grid[1][2]</code> 的水变为陆地。此时存在 2 个岛屿。&#10;- 操作 #4：<code>addLand(2, 1)</code> 将 <code>grid[2][1]</code> 的水变为陆地。此时存在 3 个岛屿。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>m = 1, n = 1, positions = [[0,0]]&#10;<strong>输出：</strong>[1]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= m, n, positions.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>positions[i].length == 2</code></li>&#10;	<li><code>0 &lt;= r<sub>i</sub> &lt; m</code></li>&#10;	<li><code>0 &lt;= c<sub>i</sub> &lt; n</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>你可以设计一个时间复杂度 <code>O(k log(mn))</code> 的算法解决此问题吗？（其中 <code>k == positions.length</code>）</p></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>陆地按时间逐格加入，每次需报告当前岛屿数。若每步对整图重新 DFS/BFS，总代价与操作次数、网格规模的乘积成正比。</p>
<p>新陆地先自成一岛，再与四邻已有陆地合并。并查集维护连通分量：仅当邻格已是陆地且分属不同集合时合并，同时将计数减一。重复加入同一格不改变图。因此每次操作近似常数，整体随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 线性增长。</p>
</blockquote>
<p>我们用一个二维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 来表示一个地图，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 分别表示水和陆地。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 中的所有单元格都是水单元格（即所有单元格都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>），用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 来记录岛屿的数量。而岛屿之间的连通关系可以用一个并查集 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mi>f</mi>
</math></span> 来维护。</p>
<p>接下来，我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中的每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，说明该位置已经是陆地，我们直接将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 添加到答案中；否则，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值改为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并且将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 的值增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。然后，我们遍历该位置的上下左右四个方向，如果某个方向的位置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并且该位置与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 不属于同一个连通分量，那么我们就将该位置与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 进行合并，同时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 的值减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。遍历完该位置的上下左右四个方向之后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 添加到答案中。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
</math></span> 是阿克曼函数的反函数，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 可以认为是一个很小的常数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func numIslands2(m int, n int, positions [][]int) (ans []int) {</span></span>
<span class="line"><span>	uf := newUnionFind(m * n)</span></span>
<span class="line"><span>	grid := make([][]int, m)</span></span>
<span class="line"><span>	for i := range grid {</span></span>
<span class="line"><span>		grid[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	cnt := 0</span></span>
<span class="line"><span>	for _, p := range positions {</span></span>
<span class="line"><span>		i, j := p[0], p[1]</span></span>
<span class="line"><span>		if grid[i][j] == 1 {</span></span>
<span class="line"><span>			ans = append(ans, cnt)</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		grid[i][j] = 1</span></span>
<span class="line"><span>		cnt++</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 1 &#x26;&#x26; uf.union(i*n+j, x*n+y) {</span></span>
<span class="line"><span>				cnt--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, cnt)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-islands-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0305.Number%20of%20Islands%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-323" tabindex="-1">323. 无向图中连通分量的数目 🔒 <a class="header-anchor" href="#q-323" aria-label="Permalink to &quot;323. 无向图中连通分量的数目 🔒 {#q-323}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>4 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一个包含 <code>n</code> 个节点，下标从 0 到 <code>n - 1</code> 的图。给定一个整数 <code>n</code> 和一个数组 <code>edges</code> ，其中 <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> 表示图中 <code>a<sub>i</sub></code> 和 <code>b<sub>i</sub></code> 之间有一条边。</p>&#10;&#10;<p>返回 <em>图中已连接分量的数目</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0323.Number%20of%20Connected%20Components%20in%20an%20Undirected%20Graph/images/conn1-graph.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入: </strong><code>n = 5</code>, <code>edges = [[0, 1], [1, 2], [3, 4]]</code>&#10;<strong>输出: </strong>2&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0323.Number%20of%20Connected%20Components%20in%20an%20Undirected%20Graph/images/conn2-graph.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入: </strong><code>n = 5,</code> <code>edges = [[0,1], [1,2], [2,3], [3,4]]</code>&#10;<strong>输出:  </strong>1</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 2000</code></li>&#10;	<li><code>1 &lt;= edges.length &lt;= 5000</code></li>&#10;	<li><code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code></li>&#10;	<li><code>0 &lt;= a<sub>i</sub> &lt;= b<sub>i</sub> &lt; n</code></li>&#10;	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>&#10;	<li><code>edges</code> 中不会出现重复的边</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>无向图的连通块个数。从每个未访问点出发走完其所在分量，每开始一次搜索计数加一。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>m</mi>
</math></span> 规模允许 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>建邻接表后 DFS：已访问返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，否则标记并递归邻居，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。对全部点求和即块数。</p>
</blockquote>
<p>我们先根据给定的边构建一个邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的所有邻居节点。</p>
<p>然后我们遍历所有节点，对于每个节点，我们使用 DFS 遍历所有与其相邻的节点，并将其标记为已访问，直到所有与其相邻的节点都被访问过，这样我们就找到了一个连通分量，答案加一。然后我们继续遍历下一个未访问的节点，直到所有节点都被访问过。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是节点数和边数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countComponents(n int, edges [][]int) (ans int) {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	var dfs func(int) int</span></span>
<span class="line"><span>	dfs = func(i int) int {</span></span>
<span class="line"><span>		if vis[i] {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			dfs(j)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := range g {</span></span>
<span class="line"><span>		ans += dfs(i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>DFS 需要邻接表与递归栈。并查集按边合并：成功合并则块数减一，初始块数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。无需显式建图，近似线性。</p>
</blockquote>
<p>我们可以使用并查集来维护图中的连通分量。</p>
<p>我们首先初始化一个并查集，然后遍历所有的边，对于每条边 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>，我们将节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 合并到同一个连通分量中，如果连接成功，说明节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 之前不在同一个连通分量中，连通分量数目减一。</p>
<p>最后我们返回连通分量的数目。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是节点数和边数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 是 Ackermann 函数的反函数，可以看作是一个很小的常数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func countComponents(n int, edges [][]int) int {</span></span>
<span class="line"><span>	uf := newUnionFind(n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		if uf.union(e[0], e[1]) {</span></span>
<span class="line"><span>			n--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用显式栈按深度优先扩展连通块。若改用队列，则按广度优先扩展同一块，每开始一次搜索计数同样加一。时间仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们也可以使用 BFS 来统计图中的连通分量。</p>
<p>与方法一类似，我们首先根据给定的边构建一个邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，然后遍历所有节点，对于每个节点，如果它没有被访问过，我们就从该节点开始进行 BFS 遍历，将所有与其相邻的节点都标记为已访问，直到所有与其相邻的节点都被访问过，这样我们就找到了一个连通分量，答案加一。</p>
<p>遍历所有节点后，我们就得到了图中连通分量的数目。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是节点数和边数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countComponents(n int, edges [][]int) (ans int) {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	for i := range g {</span></span>
<span class="line"><span>		if vis[i] {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		q := []int{i}</span></span>
<span class="line"><span>		for len(q) > 0 {</span></span>
<span class="line"><span>			a := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for _, b := range g[a] {</span></span>
<span class="line"><span>				if !vis[b] {</span></span>
<span class="line"><span>					vis[b] = true</span></span>
<span class="line"><span>					q = append(q, b)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法四：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>无向图的连通块个数等于从每个未访问点出发、走完其所在分量的次数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2000</mn>
</math></span>，一次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span> 的遍历就够。沿一条链递归扩展邻居时，调用深度等于节点数，链长达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 就会超出 Python 的递归上限。因此每个新连通块用栈扩展：入栈时立刻标记，弹出后把未访问的邻居压入。标记发生在入栈时，所以同一节点不会重复进入。每个新的起点使答案加一。</p>
</blockquote>
<p>先根据给定的边构建邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 是节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的全部邻居。</p>
<p>然后遍历所有节点。遇到未访问的节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，答案加一，并把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 压入栈、同时标记为已访问。栈不为空时弹出节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span>，把它每个尚未访问的邻居标记后压入栈。这一轮结束后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 所在的连通块都已访问。继续处理下一个未访问节点，直到所有节点都被访问过。邻居的入栈顺序不影响连通块的个数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是节点数和边数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countComponents(n int, edges [][]int) int {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if vis[i] {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		stk := []int{i}</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		for len(stk) > 0 {</span></span>
<span class="line"><span>			u := stk[len(stk)-1]</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			for _, v := range g[u] {</span></span>
<span class="line"><span>				if !vis[v] {</span></span>
<span class="line"><span>					vis[v] = true</span></span>
<span class="line"><span>					stk = append(stk, v)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0323.Number%20of%20Connected%20Components%20in%20an%20Undirected%20Graph/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-399" tabindex="-1">399. 除法求值 <a class="header-anchor" href="#q-399" aria-label="Permalink to &quot;399. 除法求值 {#q-399}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图、数组、字符串、最短路、Floyd 算法、Bellman–Ford 算法</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个变量对数组 <code>equations</code> 和一个实数值数组 <code>values</code> 作为已知条件，其中 <code>equations[i] = [A<sub>i</sub>, B<sub>i</sub>]</code> 和 <code>values[i]</code> 共同表示等式 <code>A<sub>i</sub> / B<sub>i</sub> = values[i]</code> 。每个 <code>A<sub>i</sub></code> 或 <code>B<sub>i</sub></code> 是一个表示单个变量的字符串。</p>&#10;&#10;<p>另有一些以数组 <code>queries</code> 表示的问题，其中 <code>queries[j] = [C<sub>j</sub>, D<sub>j</sub>]</code> 表示第 <code>j</code> 个问题，请你根据已知条件找出 <code>C<sub>j</sub> / D<sub>j</sub> = ?</code> 的结果作为答案。</p>&#10;&#10;<p>返回 <strong>所有问题的答案</strong> 。如果存在某个无法确定的答案，则用 <code>-1.0</code> 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 <code>-1.0</code> 替代这个答案。</p>&#10;&#10;<p><strong>注意：</strong>输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。</p>&#10;&#10;<p><strong>注意：</strong>未在等式列表中出现的变量是未定义的，因此无法确定它们的答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;]], values = [2.0,3.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;e&quot;],[&quot;a&quot;,&quot;a&quot;],[&quot;x&quot;,&quot;x&quot;]]&#10;<strong>输出：</strong>[6.00000,0.50000,-1.00000,1.00000,-1.00000]&#10;<strong>解释：</strong>&#10;条件：<em>a / b = 2.0</em>, <em>b / c = 3.0</em>&#10;问题：<em>a / c = ?</em>, <em>b / a = ?</em>, <em>a / e = ?</em>, <em>a / a = ?</em>, <em>x / x = ?</em>&#10;结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]&#10;注意：x 是未定义的 => -1.0</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;],[&quot;bc&quot;,&quot;cd&quot;]], values = [1.5,2.5,5.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;bc&quot;,&quot;cd&quot;],[&quot;cd&quot;,&quot;bc&quot;]]&#10;<strong>输出：</strong>[3.75000,0.40000,5.00000,0.20000]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>equations = [[&quot;a&quot;,&quot;b&quot;]], values = [0.5], queries = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;c&quot;],[&quot;x&quot;,&quot;y&quot;]]&#10;<strong>输出：</strong>[0.50000,2.00000,-1.00000,-1.00000]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= equations.length &lt;= 20</code></li>&#10;	<li><code>equations[i].length == 2</code></li>&#10;	<li><code>1 &lt;= A<sub>i</sub>.length, B<sub>i</sub>.length &lt;= 5</code></li>&#10;	<li><code>values.length == equations.length</code></li>&#10;	<li><code>0.0 &lt; values[i] &lt;= 20.0</code></li>&#10;	<li><code>1 &lt;= queries.length &lt;= 20</code></li>&#10;	<li><code>queries[i].length == 2</code></li>&#10;	<li><code>1 &lt;= C<sub>j</sub>.length, D<sub>j</sub>.length &lt;= 5</code></li>&#10;	<li><code>A<sub>i</sub>, B<sub>i</sub>, C<sub>j</sub>, D<sub>j</sub></code> 由小写英文字母与数字组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>已知 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
</math></span> 的值，查询其他比值。建图后 BFS/DFS 求路径乘积即可，变量多时并查集带权更省。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 相对根的比值。<code v-pre>find</code> 路径压缩时把权乘到根。合并 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
  <mo>=</mo>
  <mi>v</mi>
</math></span> 时按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>p</mi>
  <mi>a</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>b</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x22C5;</mo>
  <mi>v</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>a</mi>
  <mo stretchy="false">]</mo>
</math></span> 接上。查询若不同根或不存在则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {</span></span>
<span class="line"><span>	p := make(map[string]string)</span></span>
<span class="line"><span>	w := make(map[string]float64)</span></span>
<span class="line"><span>	for _, e := range equations {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		p[a], p[b] = a, b</span></span>
<span class="line"><span>		w[a], w[b] = 1.0, 1.0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var find func(x string) string</span></span>
<span class="line"><span>	find = func(x string) string {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			origin := p[x]</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>			w[x] *= w[origin]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i, v := range values {</span></span>
<span class="line"><span>		a, b := equations[i][0], equations[i][1]</span></span>
<span class="line"><span>		pa, pb := find(a), find(b)</span></span>
<span class="line"><span>		if pa == pb {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p[pa] = pb</span></span>
<span class="line"><span>		w[pa] = w[b] * v / w[a]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var ans []float64</span></span>
<span class="line"><span>	for _, e := range queries {</span></span>
<span class="line"><span>		c, d := e[0], e[1]</span></span>
<span class="line"><span>		if p[c] == "" || p[d] == "" || find(c) != find(d) {</span></span>
<span class="line"><span>			ans = append(ans, -1.0)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans = append(ans, w[c]/w[d])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/evaluate-division" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0399.Evaluate%20Division/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-547" tabindex="-1">547. 省份数量 <a class="header-anchor" href="#q-547" aria-label="Permalink to &quot;547. 省份数量 {#q-547}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><div>&#10;<div>&#10;<p>有 <code>n</code> 个城市，其中一些彼此相连，另一些没有相连。如果城市 <code>a</code> 与城市 <code>b</code> 直接相连，且城市 <code>b</code> 与城市 <code>c</code> 直接相连，那么城市 <code>a</code> 与城市 <code>c</code> 间接相连。</p>&#10;&#10;<p><strong>省份</strong> 是一组直接或间接相连的城市，组内不含其他没有相连的城市。</p>&#10;&#10;<p>给你一个 <code>n x n</code> 的矩阵 <code>isConnected</code> ，其中 <code>isConnected[i][j] = 1</code> 表示第 <code>i</code> 个城市和第 <code>j</code> 个城市直接相连，而 <code>isConnected[i][j] = 0</code> 表示二者不直接相连。</p>&#10;&#10;<p>返回矩阵中 <strong>省份</strong> 的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0547.Number%20of%20Provinces/images/graph1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>isConnected = [[1,1,0],[1,1,0],[0,0,1]]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0547.Number%20of%20Provinces/images/graph2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>isConnected = [[1,0,0],[0,1,0],[0,0,1]]&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 200</code></li>&#10;	<li><code>n == isConnected.length</code></li>&#10;	<li><code>n == isConnected[i].length</code></li>&#10;	<li><code>isConnected[i][j]</code> 为 <code>1</code> 或 <code>0</code></li>&#10;	<li><code>isConnected[i][i] == 1</code></li>&#10;	<li><code>isConnected[i][j] == isConnected[j][i]</code></li>&#10;</ul>&#10;</div>&#10;</div></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>省份是连通块。邻接矩阵给出城市之间是否直接相连，从每个未访问城市 DFS/BFS 即可染完一块。</p>
<p>扫一遍城市，遇到未访问的起点就开一次 DFS 并把答案加一。访问数组保证每个城市只进入一次。</p>
</blockquote>
<p>我们创建一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">vis</mtext>
</math></span>，用于记录每个城市是否被访问过。</p>
<p>接下来，遍历每个城市 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果该城市未被访问过，则从该城市开始深度优先搜索，通过矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">isConnected</mtext>
</math></span> 得到与该城市直接相连的城市有哪些，这些城市和该城市属于同一个省，然后对这些城市继续深度优先搜索，直到同一个省的所有城市都被访问到，即可得到一个省，将答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，然后遍历下一个未被访问过的城市，直到遍历完所有的城市。</p>
<p>最后返回答案即可。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是城市的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findCircleNum(isConnected [][]int) (ans int) {</span></span>
<span class="line"><span>	n := len(isConnected)</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	var dfs func(int)</span></span>
<span class="line"><span>	dfs = func(i int) {</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		for j, x := range isConnected[i] {</span></span>
<span class="line"><span>			if !vis[j] &#x26;&#x26; x == 1 {</span></span>
<span class="line"><span>				dfs(j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, v := range vis {</span></span>
<span class="line"><span>		if !v {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			dfs(i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>DFS 依赖递归栈与访问数组。并查集按边合并：初始 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个分量，每条互连且尚未同根的边把答案减一。</p>
<p>只枚举上三角避免重复边。路径压缩保证查找接近常数。最终答案即剩余根的个数。</p>
</blockquote>
<p>我们也可以用并查集维护每个连通分量，初始时，每个城市都属于不同的连通分量，所以省份数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。</p>
<p>接下来，遍历矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">isConnected</mtext>
</math></span>，如果两个城市 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 之间有相连关系，并且处于两个不同的连通分量，则它们将被合并成为一个连通分量，然后将省份数量减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>最后返回省份数量即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是城市的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
</math></span> 是并查集的路径压缩的时间复杂度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findCircleNum(isConnected [][]int) (ans int) {</span></span>
<span class="line"><span>	n := len(isConnected)</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(x int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans = n</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if isConnected[i][j] == 1 {</span></span>
<span class="line"><span>				pa, pb := find(i), find(j)</span></span>
<span class="line"><span>				if pa != pb {</span></span>
<span class="line"><span>					p[pa] = pb</span></span>
<span class="line"><span>					ans--</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-provinces" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0547.Number%20of%20Provinces/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-684" tabindex="-1">684. 冗余连接 <a class="header-anchor" href="#q-684" aria-label="Permalink to &quot;684. 冗余连接 {#q-684}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>树可以看成是一个连通且 <strong>无环 </strong>的 <strong>无向 </strong>图。</p>&#10;&#10;<p>给定一个图，该图从一棵 <code>n</code> 个节点 (节点值 <code>1～n</code>) 的树中添加一条边后获得。添加的边的两个不同顶点编号在 <code>1</code> 到 <code>n</code> 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 <code>n</code> 的二维数组 <code>edges</code> ，<code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> 表示图中在 <code>ai</code> 和 <code>bi</code> 之间存在一条边。</p>&#10;&#10;<p>请找出一条可以删去的边，删除后可使得剩余部分是一个有着 <code>n</code> 个节点的树。如果有多个答案，则返回数组 <code>edges</code> 中最后出现的那个。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0684.Redundant%20Connection/images/1626676174-hOEVUL-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> edges = [[1,2], [1,3], [2,3]]&#10;<strong>输出:</strong> [2,3]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0684.Redundant%20Connection/images/1626676179-kGxcmu-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]&#10;<strong>输出:</strong> [1,4]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == edges.length</code></li>&#10;	<li><code>3 &lt;= n &lt;= 1000</code></li>&#10;	<li><code>edges[i].length == 2</code></li>&#10;	<li><code>1 &lt;= ai &lt; bi &lt;= edges.length</code></li>&#10;	<li><code>ai != bi</code></li>&#10;	<li><code>edges</code> 中无重复元素</li>&#10;	<li>给定的图是连通的 </li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>无向图由树加一条边而成，要删掉使图重新成树的那条（输入中最后出现的）。DFS 找环再比边序偏繁。</p>
<p>按输入顺序并查集连边：两端已连通则这条边在环上，即为答案；否则合并。第一次冲突就是最后那条多余边。</p>
</blockquote>
<p>根据题意，我们需要找到一条可以删去的边，删除后剩余部分是一个有着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个节点的树。我们可以遍历每一条边，判断这条边是否在同一个连通分量中。如果在同一个连通分量中，则说明这条边是多余的，可以删除，直接返回这条边即可。否则，我们将这条边所连接的两个节点合并到同一个连通分量中。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为边的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findRedundantConnection(edges [][]int) []int {</span></span>
<span class="line"><span>	n := len(edges)</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; ; i++ {</span></span>
<span class="line"><span>		pa, pb := find(edges[i][0]-1), find(edges[i][1]-1)</span></span>
<span class="line"><span>		if pa == pb {</span></span>
<span class="line"><span>			return edges[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p[pa] = pb</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集（模板做法） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一内嵌 <code v-pre>find</code>。抽出带按秩合并的 <code v-pre>UnionFind</code>，<code v-pre>union</code> 返回是否成功，主循环只判断失败即返回，逻辑相同、常数更好。</p>
</blockquote>
<p>这里给出一个并查集的模板做法，供大家参考。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为边的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 是阿克曼函数的反函数，可以认为是一个很小的常数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findRedundantConnection(edges [][]int) []int {</span></span>
<span class="line"><span>	uf := newUnionFind(len(edges))</span></span>
<span class="line"><span>	for i := 0; ; i++ {</span></span>
<span class="line"><span>		if !uf.union(edges[i][0]-1, edges[i][1]-1) {</span></span>
<span class="line"><span>			return edges[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/redundant-connection" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0684.Redundant%20Connection/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-685" tabindex="-1">685. 冗余连接 II <a class="header-anchor" href="#q-685" aria-label="Permalink to &quot;685. 冗余连接 II {#q-685}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在本问题中，有根树指满足以下条件的 <strong>有向</strong> 图。该树只有一个根节点，所有其他节点都是该根节点的后继。该树除了根节点之外的每一个节点都有且只有一个父节点，而根节点没有父节点。</p>&#10;&#10;<p>输入一个有向图，该图由一个有着 <code>n</code> 个节点（节点值不重复，从 <code>1</code> 到 <code>n</code>）的树及一条附加的有向边构成。附加的边包含在 <code>1</code> 到 <code>n</code> 中的两个不同顶点间，这条附加的边不属于树中已存在的边。</p>&#10;&#10;<p>结果图是一个以边组成的二维数组 <code>edges</code> 。 每个元素是一对 <code>[u<sub>i</sub>, v<sub>i</sub>]</code>，用以表示 <strong>有向 </strong>图中连接顶点 <code>u<sub>i</sub></code> 和顶点 <code>v<sub>i</sub></code> 的边，其中 <code>u<sub>i</sub></code> 是 <code>v<sub>i</sub></code> 的一个父节点。</p>&#10;&#10;<p>返回一条能删除的边，使得剩下的图是有 <code>n</code> 个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0685.Redundant%20Connection%20II/images/graph1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>edges = [[1,2],[1,3],[2,3]]&#10;<strong>输出：</strong>[2,3]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0685.Redundant%20Connection%20II/images/graph2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]&#10;<strong>输出：</strong>[4,1]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == edges.length</code></li>&#10;	<li><code>3 &lt;= n &lt;= 1000</code></li>&#10;	<li><code>edges[i].length == 2</code></li>&#10;	<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有向树多一条边后，可能出现入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的点，或指向根形成环，或二者兼有。无向并查集不能直接处理双入边。</p>
<p>先找入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的两条边。若存在，尝试丢掉较后的那条再并查：仍成环则应删较早的。若没有双入边，则按无向情形删掉成环的那条。</p>
</blockquote>
<p>根据题目描述，对于一棵有根树，根节点的入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，其余节点的入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。在向树中添加一条边之后，可能会出现以下三种情况：</p>
<ol>
<li>
<p>添加的边指向了非根节点，该节点的入度变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，此时图中不存在有向环；</p>
<div class="language-plaintext vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>   1</span></span>
<span class="line"><span>  / \\</span></span>
<span class="line"><span> v   v</span></span>
<span class="line"><span> 2-->3</span></span></code></pre>
</div></li>
<li>
<p>添加的边指向了非根节点，该节点的入度变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，此时图中存在有向环；</p>
<div class="language-plaintext vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>   1</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   v</span></span>
<span class="line"><span>   2 &#x3C;--> 3</span></span></code></pre>
</div></li>
<li>
<p>添加的边指向了根节点，根节点的入度变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，此时图中存在有向环，但不存在入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的节点。</p>
<div class="language-plaintext vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>    1</span></span>
<span class="line"><span>    /^</span></span>
<span class="line"><span>   v  \\</span></span>
<span class="line"><span>   2-->3</span></span></code></pre>
</div></li>
</ol>
<p>因此，我们首先计算每个节点的入度，如果存在入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的节点，我们定位到该节点对应的两条边，分别记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dup</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dup</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。如果在删除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dup</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 之后，剩余的边无法形成树，则说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dup</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 是需要删除的边；否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dup</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 是需要删除的边。</p>
<p>如果不存在入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的节点，我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">edges</mtext>
</math></span>，对于每条边 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>u</mi>
  <mo>,</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
</math></span>，我们使用并查集维护节点之间的连通性。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 已经连通，说明图中存在有向环，此时当前边即为需要删除的边。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为边的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findRedundantDirectedConnection(edges [][]int) []int {</span></span>
<span class="line"><span>	n := len(edges)</span></span>
<span class="line"><span>	ind := make([]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		ind[e[1]-1]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dup := []int{}</span></span>
<span class="line"><span>	for i, e := range edges {</span></span>
<span class="line"><span>		if ind[e[1]-1] == 2 {</span></span>
<span class="line"><span>			dup = append(dup, i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(dup) > 0 {</span></span>
<span class="line"><span>		for i, e := range edges {</span></span>
<span class="line"><span>			if i == dup[1] {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			pu, pv := find(e[0]-1), find(e[1]-1)</span></span>
<span class="line"><span>			if pu == pv {</span></span>
<span class="line"><span>				return edges[dup[0]]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			p[pu] = pv</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return edges[dup[1]]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		pu, pv := find(e[0]-1), find(e[1]-1)</span></span>
<span class="line"><span>		if pu == pv {</span></span>
<span class="line"><span>			return e</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p[pu] = pv</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集（模板做法） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判定逻辑与方法一相同，只是把路径压缩与按秩合并收进模板类，主函数只处理 <code v-pre>dup</code> 与 <code v-pre>union</code> 失败。</p>
</blockquote>
<p>这里给出一个并查集的模板做法，供大家参考。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为边的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 是阿克曼函数的反函数，可以认为是一个很小的常数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findRedundantDirectedConnection(edges [][]int) []int {</span></span>
<span class="line"><span>	n := len(edges)</span></span>
<span class="line"><span>	ind := make([]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		ind[e[1]-1]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dup := []int{}</span></span>
<span class="line"><span>	for i, e := range edges {</span></span>
<span class="line"><span>		if ind[e[1]-1] == 2 {</span></span>
<span class="line"><span>			dup = append(dup, i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	uf := newUnionFind(n)</span></span>
<span class="line"><span>	if len(dup) > 0 {</span></span>
<span class="line"><span>		for i, e := range edges {</span></span>
<span class="line"><span>			if i == dup[1] {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if !uf.union(e[0]-1, e[1]-1) {</span></span>
<span class="line"><span>				return edges[dup[0]]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return edges[dup[1]]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		if !uf.union(e[0]-1, e[1]-1) {</span></span>
<span class="line"><span>			return e</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/redundant-connection-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0685.Redundant%20Connection%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-694" tabindex="-1">694. 不同岛屿的数量 🔒 <a class="header-anchor" href="#q-694" aria-label="Permalink to &quot;694. 不同岛屿的数量 🔒 {#q-694}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、哈希表、矩阵、排序、哈希函数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个非空 01 二维数组表示的网格，一个岛屿由四连通（上、下、左、右四个方向）的 <code>1</code> 组成，你可以认为网格的四周被海水包围。</p>&#10;&#10;<p>请你计算这个网格中共有多少个形状不同的岛屿。两个岛屿被认为是相同的，当且仅当一个岛屿可以通过平移变换（不可以旋转、翻转）和另一个岛屿重合。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0694.Number%20of%20Distinct%20Islands/images/distinctisland1-1-grid.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]&#10;<b>输出：</b>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]&#10;<b>输出</b><strong>:</strong> 3</pre>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0694.Number%20of%20Distinct%20Islands/images/distinctisland1-2-grid.jpg" loading="lazy"></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 50</code></li>&#10;	<li><code>grid[i][j]</code> 仅包含 <code>0</code> 或 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>两座岛相同当且仅当平移后重合，旋转镜像不算。记录相对坐标要对齐起点。</p>
<p>DFS 把前进方向与回溯方向都写入路径串，形状不同则序列不同。哈希集合去重后计数。访问过的陆地改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们遍历网格中的每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果该位置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则以其为起始节点开始进行深度优先搜索，过程中将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 修改为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，并且将搜索的方向记录下来，等搜索结束后将方向序列加入哈希表中，最后返回哈希表中不同方向序列的数量即可。</p>
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
</math></span> 分别为网格的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numDistinctIslands(grid [][]int) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	paths := map[string]bool{}</span></span>
<span class="line"><span>	path := []byte{}</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	var dfs func(i, j, k int)</span></span>
<span class="line"><span>	dfs = func(i, j, k int) {</span></span>
<span class="line"><span>		grid[i][j] = 0</span></span>
<span class="line"><span>		path = append(path, byte(k))</span></span>
<span class="line"><span>		for h := 1; h &#x3C; 5; h++ {</span></span>
<span class="line"><span>			x, y := i+dirs[h-1], j+dirs[h]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 1 {</span></span>
<span class="line"><span>				dfs(x, y, h)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		path = append(path, byte(k))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, row := range grid {</span></span>
<span class="line"><span>		for j, x := range row {</span></span>
<span class="line"><span>			if x == 1 {</span></span>
<span class="line"><span>				dfs(i, j, 0)</span></span>
<span class="line"><span>				paths[string(path)] = true</span></span>
<span class="line"><span>				path = path[:0]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(paths)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-distinct-islands" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0694.Number%20of%20Distinct%20Islands/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-695" tabindex="-1">695. 岛屿的最大面积 <a class="header-anchor" href="#q-695" aria-label="Permalink to &quot;695. 岛屿的最大面积 {#q-695}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m x n</code> 的二进制矩阵 <code>grid</code> 。</p>&#10;&#10;<p><strong>岛屿</strong> 是由一些相邻的 <code>1</code> (代表土地) 构成的组合，这里的「相邻」要求两个 <code>1</code> 必须在 <strong>水平或者竖直的四个方向上 </strong>相邻。你可以假设 <code>grid</code> 的四个边缘都被 <code>0</code>（代表水）包围着。</p>&#10;&#10;<p>岛屿的面积是岛上值为 <code>1</code> 的单元格的数目。</p>&#10;&#10;<p>计算并返回 <code>grid</code> 中最大的岛屿面积。如果没有岛屿，则返回面积为 <code>0</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0695.Max%20Area%20of%20Island/images/maxarea1-grid.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>答案不应该是 <code>11</code> ，因为岛屿只能包含水平或垂直这四个方向上的 <code>1</code> 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,0,0,0,0,0,0,0]]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 50</code></li>&#10;	<li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>岛屿面积是四连通陆地格数，求最大。每个格子至多访问一次。</p>
<p>遇到陆地就 DFS，把格子改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 并累加四向递归结果。对所有起点取最大。</p>
</blockquote>
<p>我们可以遍历每一个格子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，从每个格子开始进行深度优先搜索，如果搜索到的格子是陆地，就将当前格子标记为已访问，并且继续搜索上、下、左、右四个方向的格子。搜索结束后，计算标记的陆地的数量，即为岛屿的面积。我们找出最大的岛屿面积即为答案。</p>
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
</math></span> 分别是二维数组的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxAreaOfIsland(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	var dfs func(i, j int) int</span></span>
<span class="line"><span>	dfs = func(i, j int) int {</span></span>
<span class="line"><span>		if grid[i][j] == 0 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := 1</span></span>
<span class="line"><span>		grid[i][j] = 0</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n {</span></span>
<span class="line"><span>				ans += dfs(x, y)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := range grid {</span></span>
<span class="line"><span>		for j := range grid[i] {</span></span>
<span class="line"><span>			ans = max(ans, dfs(i, j))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/max-area-of-island" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0695.Max%20Area%20of%20Island/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-711" tabindex="-1">711. 不同岛屿的数量 II 🔒 <a class="header-anchor" href="#q-711" aria-label="Permalink to &quot;711. 不同岛屿的数量 II 🔒 {#q-711}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、哈希表、矩阵、排序、哈希函数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 <code>m x n</code> 二进制数组表示的网格 <code>grid</code> ，一个岛屿由 <strong>四连通</strong> （上、下、左、右四个方向）的 <code>1</code> 组成（代表陆地）。你可以认为网格的四周被海水包围。</p>&#10;&#10;<p>如果两个岛屿的形状相同，或者通过旋转（顺时针旋转 90°，180°，270°）、翻转（左右翻转、上下翻转）后形状相同，那么就认为这两个岛屿是相同的。</p>&#10;&#10;<p>返回 <em>这个网格中形状 <strong>不同</strong> 的岛屿的数量 </em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0711.Number%20of%20Distinct%20Islands%20II/images/distinctisland2-1-grid.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[1,1,0,0,0],[1,0,0,0,0],[0,0,0,0,1],[0,0,0,1,1]]&#10;<strong>输出:</strong> 1&#10;<strong>解释:</strong> 这两个是相同的岛屿。因为我们通过 180° 旋转第一个岛屿，两个岛屿的形状相同。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0711.Number%20of%20Distinct%20Islands%20II/images/distinctisland1-1-grid.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]&#10;<strong>输出:</strong> 1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 50</code></li>&#10;	<li><code>grid[i][j]</code> 不是 <code>0</code> 就是 <code>1</code>.</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0711.Number%20of%20Distinct%20Islands%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<blockquote>
<p>本站根据题意与 Doocs 参考思路整理为 Go，非上游原文。按 CC BY-SA 4.0 共享。</p>
</blockquote>
<p>先遍历得到每个岛屿的坐标。生成交换横纵坐标及正负号构成的八种旋转、反射形式；每种排序后减去首个坐标消除平移，并选最小编码作为规范形。相同规范形只计一次。设网格有 M·N 格、岛屿大小为 k，时间 O(MN+Σk log k)，空间 O(MN)。实现会把已访问的陆地改为零。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>import (</span></span>
<span class="line"><span>	"fmt"</span></span>
<span class="line"><span>	"sort"</span></span>
<span class="line"><span>	"strings"</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type point struct{ x, y int }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func numDistinctIslands2(grid [][]int) int {</span></span>
<span class="line"><span>	if len(grid) == 0 {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	seen := map[string]bool{}</span></span>
<span class="line"><span>	dirs := []point{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] != 1 {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			shape := []point{}</span></span>
<span class="line"><span>			stack := []point{{i, j}}</span></span>
<span class="line"><span>			grid[i][j] = 0</span></span>
<span class="line"><span>			for len(stack) > 0 {</span></span>
<span class="line"><span>				p := stack[len(stack)-1]</span></span>
<span class="line"><span>				stack = stack[:len(stack)-1]</span></span>
<span class="line"><span>				shape = append(shape, p)</span></span>
<span class="line"><span>				for _, d := range dirs {</span></span>
<span class="line"><span>					x, y := p.x+d.x, p.y+d.y</span></span>
<span class="line"><span>					if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 1 {</span></span>
<span class="line"><span>						grid[x][y] = 0</span></span>
<span class="line"><span>						stack = append(stack, point{x, y})</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			canonical := ""</span></span>
<span class="line"><span>			for variant := 0; variant &#x3C; 8; variant++ {</span></span>
<span class="line"><span>				transformed := make([]point, len(shape))</span></span>
<span class="line"><span>				for k, p := range shape {</span></span>
<span class="line"><span>					x, y := p.x, p.y</span></span>
<span class="line"><span>					if variant&#x26;4 != 0 {</span></span>
<span class="line"><span>						x, y = y, x</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					if variant&#x26;1 != 0 {</span></span>
<span class="line"><span>						x = -x</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					if variant&#x26;2 != 0 {</span></span>
<span class="line"><span>						y = -y</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					transformed[k] = point{x, y}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				sort.Slice(transformed, func(i, j int) bool {</span></span>
<span class="line"><span>					a, b := transformed[i], transformed[j]</span></span>
<span class="line"><span>					return a.x &#x3C; b.x || (a.x == b.x &#x26;&#x26; a.y &#x3C; b.y)</span></span>
<span class="line"><span>				})</span></span>
<span class="line"><span>				origin := transformed[0]</span></span>
<span class="line"><span>				var key strings.Builder</span></span>
<span class="line"><span>				for _, p := range transformed {</span></span>
<span class="line"><span>					fmt.Fprintf(&#x26;key, "%d,%d;", p.x-origin.x, p.y-origin.y)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				encoded := key.String()</span></span>
<span class="line"><span>				if variant == 0 || encoded &#x3C; canonical {</span></span>
<span class="line"><span>					canonical = encoded</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			seen[canonical] = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(seen)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-distinct-islands-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0711.Number%20of%20Distinct%20Islands%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-721" tabindex="-1">721. 账户合并 <a class="header-anchor" href="#q-721" aria-label="Permalink to &quot;721. 账户合并 {#q-721}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个列表 <code>accounts</code>，每个元素 <code>accounts[i]</code> 是一个字符串列表，其中第一个元素 <code>accounts[i][0]</code> 是 <em>名称 (name)</em>，其余元素是 <em><strong>emails</strong> </em>表示该账户的邮箱地址。</p>&#10;&#10;<p>现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。</p>&#10;&#10;<p>合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，其余元素是 <strong>按字符 ASCII 顺序排列</strong> 的邮箱地址。账户本身可以以 <strong>任意顺序</strong> 返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>accounts = [[&quot;John&quot;, &quot;johnsmith@mail.com&quot;, &quot;john00@mail.com&quot;], [&quot;John&quot;, &quot;johnnybravo@mail.com&quot;], [&quot;John&quot;, &quot;johnsmith@mail.com&quot;, &quot;john_newyork@mail.com&quot;], [&quot;Mary&quot;, &quot;mary@mail.com&quot;]]&#10;<b>输出：</b>[[&quot;John&quot;, 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  [&quot;John&quot;, &quot;johnnybravo@mail.com&quot;], [&quot;Mary&quot;, &quot;mary@mail.com&quot;]]&#10;<b>解释：</b>&#10;第一个和第三个 John 是同一个人，因为他们有共同的邮箱地址 &quot;johnsmith@mail.com&quot;。 &#10;第二个 John 和 Mary 是不同的人，因为他们的邮箱地址没有被其他帐户使用。&#10;可以以任何顺序返回这些列表，例如答案 [['Mary'，'mary@mail.com']，['John'，'johnnybravo@mail.com']，&#10;['John'，'john00@mail.com'，'john_newyork@mail.com'，'johnsmith@mail.com']] 也是正确的。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>accounts = [[&quot;Gabe&quot;,&quot;Gabe0@m.co&quot;,&quot;Gabe3@m.co&quot;,&quot;Gabe1@m.co&quot;],[&quot;Kevin&quot;,&quot;Kevin3@m.co&quot;,&quot;Kevin5@m.co&quot;,&quot;Kevin0@m.co&quot;],[&quot;Ethan&quot;,&quot;Ethan5@m.co&quot;,&quot;Ethan4@m.co&quot;,&quot;Ethan0@m.co&quot;],[&quot;Hanzo&quot;,&quot;Hanzo3@m.co&quot;,&quot;Hanzo1@m.co&quot;,&quot;Hanzo0@m.co&quot;],[&quot;Fern&quot;,&quot;Fern5@m.co&quot;,&quot;Fern1@m.co&quot;,&quot;Fern0@m.co&quot;]]&#10;<strong>输出：</strong>[[&quot;Ethan&quot;,&quot;Ethan0@m.co&quot;,&quot;Ethan4@m.co&quot;,&quot;Ethan5@m.co&quot;],[&quot;Gabe&quot;,&quot;Gabe0@m.co&quot;,&quot;Gabe1@m.co&quot;,&quot;Gabe3@m.co&quot;],[&quot;Hanzo&quot;,&quot;Hanzo0@m.co&quot;,&quot;Hanzo1@m.co&quot;,&quot;Hanzo3@m.co&quot;],[&quot;Kevin&quot;,&quot;Kevin0@m.co&quot;,&quot;Kevin3@m.co&quot;,&quot;Kevin5@m.co&quot;],[&quot;Fern&quot;,&quot;Fern0@m.co&quot;,&quot;Fern1@m.co&quot;,&quot;Fern5@m.co&quot;]]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= accounts.length &lt;= 1000</code></li>&#10;	<li><code>2 &lt;= accounts[i].length &lt;= 10</code></li>&#10;	<li><code>1 &lt;= accounts[i][j].length &lt;= 30</code></li>&#10;	<li><code>accounts[i][0]</code> 由英文字母组成</li>&#10;	<li><code>accounts[i][j] (for j > 0)</code> 是有效的邮箱地址</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同一人的多个账户会通过共享邮箱连通，需要按人合并邮箱并排序。账户数约 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>，若两两比较邮箱集合，既慢也难维护姓名。</p>
<p>连通关系发生在「账户」这一层：两个账户只要出现同一个邮箱就应合并。并查集按账户下标连边，邮箱到首次出现账户的映射用来发现这条边。</p>
<p>合并后再按根下标把邮箱收入集合，姓名取该根账户的名字，最后对邮箱排序输出。查找带路径压缩，总代价接近线性对数。</p>
</blockquote>
<p>根据题目描述，我们可以使用并查集，将具有相同邮箱地址的账户合并在一起。</p>
<p>我们首先遍历所有的账户，对于第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个账户，我们遍历其所有的邮箱地址，如果该邮箱地址在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">d</mtext>
</math></span> 中出现过，则使用并查集，将该账户的编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 与之前出现过的邮箱地址所属的账户编号进行合并；否则，将该邮箱地址与账户的编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 进行映射。</p>
<p>接下来，我们遍历所有的账户，对于第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个账户，我们使用并查集找到其根节点，然后将该账户的所有邮箱地址添加到哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">g</mtext>
</math></span> 中，其中键为根节点，值为该账户的所有邮箱地址。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为账户的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func accountsMerge(accounts [][]string) (ans [][]string) {</span></span>
<span class="line"><span>	n := len(accounts)</span></span>
<span class="line"><span>	uf := newUnionFind(n)</span></span>
<span class="line"><span>	d := make(map[string]int)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for _, email := range accounts[i][1:] {</span></span>
<span class="line"><span>			if j, ok := d[email]; ok {</span></span>
<span class="line"><span>				uf.union(i, j)</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				d[email] = i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	g := make(map[int]map[string]struct{})</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		root := uf.find(i)</span></span>
<span class="line"><span>		if _, ok := g[root]; !ok {</span></span>
<span class="line"><span>			g[root] = make(map[string]struct{})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for _, email := range accounts[i][1:] {</span></span>
<span class="line"><span>			g[root][email] = struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for root, s := range g {</span></span>
<span class="line"><span>		emails := []string{}</span></span>
<span class="line"><span>		for email := range s {</span></span>
<span class="line"><span>			emails = append(emails, email)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		sort.Strings(emails)</span></span>
<span class="line"><span>		account := append([]string{accounts[root][0]}, emails...)</span></span>
<span class="line"><span>		ans = append(ans, account)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/accounts-merge" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0721.Accounts%20Merge/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-737" tabindex="-1">737. 句子相似性 II 🔒 <a class="header-anchor" href="#q-737" aria-label="Permalink to &quot;737. 句子相似性 II 🔒 {#q-737}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们可以将一个句子表示为一个单词数组，例如，句子 <code>I am happy with leetcode&quot;</code>可以表示为 <code>arr = [&quot;I&quot;,&quot;am&quot;,happy&quot;,&quot;with&quot;,&quot;leetcode&quot;]</code></p>&#10;&#10;<p>给定两个句子 <code>sentence1</code> 和 <code>sentence2</code> 分别表示为一个字符串数组，并给定一个字符串对 <code>similarPairs</code> ，其中 <code>similarPairs[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示两个单词 <code>x<sub>i</sub></code> 和 <code>y<sub>i</sub></code> 是相似的。</p>&#10;&#10;<p>如果 <code>sentence1</code> 和 <code>sentence2</code> 相似则返回 <code>true</code> ，如果不相似则返回 <code>false</code> 。</p>&#10;&#10;<p>两个句子是相似的，如果:</p>&#10;&#10;<ul>&#10;	<li>它们具有 <strong>相同的长度</strong> (即相同的词数)</li>&#10;	<li><code>sentence1[i]</code> 和 <code>sentence2[i]</code> 是相似的</li>&#10;</ul>&#10;&#10;<p>请注意，一个词总是与它自己相似，也请注意，相似关系是可传递的。例如，如果单词 <code>a</code> 和 <code>b</code> 是相似的，单词 <code>b</code> 和 <code>c</code> 也是相似的，那么 <code>a</code> 和 <code>c</code> 也是 <strong>相似</strong> 的。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> sentence1 = [&quot;great&quot;,&quot;acting&quot;,&quot;skills&quot;], sentence2 = [&quot;fine&quot;,&quot;drama&quot;,&quot;talent&quot;], similarPairs = [[&quot;great&quot;,&quot;good&quot;],[&quot;fine&quot;,&quot;good&quot;],[&quot;drama&quot;,&quot;acting&quot;],[&quot;skills&quot;,&quot;talent&quot;]]&#10;<strong>输出:</strong> true&#10;<strong>解释:</strong> 这两个句子长度相同，每个单词都相似。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> sentence1 = [&quot;I&quot;,&quot;love&quot;,&quot;leetcode&quot;], sentence2 = [&quot;I&quot;,&quot;love&quot;,&quot;onepiece&quot;], similarPairs = [[&quot;manga&quot;,&quot;onepiece&quot;],[&quot;platform&quot;,&quot;anime&quot;],[&quot;leetcode&quot;,&quot;platform&quot;],[&quot;anime&quot;,&quot;manga&quot;]]&#10;<strong>输出:</strong> true&#10;<strong>解释:</strong> &quot;leetcode&quot; --> &quot;platform&quot; --> &quot;anime&quot; --> &quot;manga&quot; --> &quot;onepiece&quot;.&#10;因为“leetcode”和“onepiece”相似，而且前两个单词是相同的，所以这两句话是相似的。</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> sentence1 = [&quot;I&quot;,&quot;love&quot;,&quot;leetcode&quot;], sentence2 = [&quot;I&quot;,&quot;love&quot;,&quot;onepiece&quot;], similarPairs = [[&quot;manga&quot;,&quot;hunterXhunter&quot;],[&quot;platform&quot;,&quot;anime&quot;],[&quot;leetcode&quot;,&quot;platform&quot;],[&quot;anime&quot;,&quot;manga&quot;]]&#10;<strong>输出:</strong> false&#10;<strong>解释: </strong>“leetcode”和“onepiece”不相似。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= sentence1.length, sentence2.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= sentence1[i].length, sentence2[i].length &lt;= 20</code></li>&#10;	<li><code>sentence1[i]</code> 和 <code>sentence2[i]</code> 只包含大小写英文字母</li>&#10;	<li><code>0 &lt;= similarPairs.length &lt;= 2000</code></li>&#10;	<li><code>similarPairs[i].length == 2</code></li>&#10;	<li><code>1 &lt;= x<sub>i</sub>.length, y<sub>i</sub>.length &lt;= 20</code></li>&#10;	<li><code>x<sub>i</sub></code> 和 <code>y<sub>i</sub></code> 只含英文字母</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>与「句子相似性」不同，相似关系可传递。直接存边对不够，需要知道两词是否落在同一连通分量。词数由相似对规模限制，并查集合适。</p>
<p>先给出现过的词编号，相似对做一次合并。比较句子时，相同词通过；否则两者都必须出现在并查集中且根相同。</p>
<p>长度不同直接失败。查找带路径压缩，总时间与词数及句长近线性。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>var p []int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func areSentencesSimilarTwo(sentence1 []string, sentence2 []string, similarPairs [][]string) bool {</span></span>
<span class="line"><span>	if len(sentence1) != len(sentence2) {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(similarPairs)</span></span>
<span class="line"><span>	p = make([]int, (n&#x3C;&#x3C;1)+10)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(p); i++ {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	words := make(map[string]int)</span></span>
<span class="line"><span>	idx := 1</span></span>
<span class="line"><span>	for _, e := range similarPairs {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		if words[a] == 0 {</span></span>
<span class="line"><span>			words[a] = idx</span></span>
<span class="line"><span>			idx++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if words[b] == 0 {</span></span>
<span class="line"><span>			words[b] = idx</span></span>
<span class="line"><span>			idx++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p[find(words[a])] = find(words[b])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(sentence1); i++ {</span></span>
<span class="line"><span>		if sentence1[i] == sentence2[i] {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if words[sentence1[i]] == 0 || words[sentence2[i]] == 0 || find(words[sentence1[i]]) != find(words[sentence2[i]]) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func find(x int) int {</span></span>
<span class="line"><span>	if p[x] != x {</span></span>
<span class="line"><span>		p[x] = find(p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return p[x]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sentence-similarity-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0737.Sentence%20Similarity%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-765" tabindex="-1">765. 情侣牵手 <a class="header-anchor" href="#q-765" aria-label="Permalink to &quot;765. 情侣牵手 {#q-765}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、深度优先搜索、广度优先搜索、并查集、图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><code>n</code> 对情侣坐在连续排列的 <code>2n</code> 个座位上，想要牵到对方的手。</p>&#10;&#10;<p>人和座位由一个整数数组 <code>row</code> 表示，其中 <code>row[i]</code> 是坐在第 <code>i </code>个座位上的人的 <strong>ID</strong>。情侣们按顺序编号，第一对是 <code>(0, 1)</code>，第二对是 <code>(2, 3)</code>，以此类推，最后一对是 <code>(2n - 2, 2n - 1)</code>。</p>&#10;&#10;<p>返回 <em>最少交换座位的次数，以便每对情侣可以并肩坐在一起</em>。 <i>每次</i>交换可选择任意两人，让他们站起来交换座位。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> row = [0,2,1,3]&#10;<strong>输出:</strong> 1&#10;<strong>解释:</strong> 只需要交换第二个人（row[1]）和第三个人（row[2]）的位置即可。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> row = [3,2,0,1]&#10;<strong>输出:</strong> 0&#10;<strong>解释:</strong> 无需交换座位，所有的情侣都已经可以手牵手了。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>2n == row.length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 30</code></li>&#10;	<li><code>n</code> 是偶数</li>&#10;	<li><code>0 &lt;= row[i] &lt; 2n</code></li>&#10;	<li><code>row</code> 中所有元素均 <strong>无重复</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>情侣两两相邻入座，求最少交换。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 对情侣，模拟交换可行，但交换次数等于「错坐」连通块的结构。</p>
<p>把一对座位上的两个人映射成情侣编号后，若两对坐在一起则这两对进入同一置换。大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的环需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次交换。</p>
<p>并查集合并每对座位上的情侣编号，答案为对数减去连通块数。</p>
</blockquote>
<p>我们可以给每一对情侣编号，编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的人对应情侣 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的人对应情侣 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>...即编号为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 对应的情侣编号为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>r</mi>
      <mi>o</mi>
      <mi>w</mi>
      <mo stretchy="false">[</mo>
      <mi>i</mi>
      <mo stretchy="false">]</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。</p>
<p>如果有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 对情侣相互之间坐错了位置，也即是说，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 对情侣处于一个置换环中，那么他们之间需要经过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次交换才能都坐到正确的位置上。</p>
<p>为什么？不妨这样考虑，我们先调整一对情侣的位置，使其坐到正确的位置上，那么问题就从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 对情侣的问题，转换成了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 对情侣的问题。依此类推，最终 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 时，交换次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。所以，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 对情侣相互之间坐错了位置，那么需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次交换。</p>
<p>因此，我们只需要遍历一遍数组，利用并查集找出有多少个置换环，假设有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个，每个环的大小（情侣的对数）为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mi>x</mi>
  </msub>
</math></span>，那么需要交换的次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mi>x</mi>
  </msub>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>=</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mi>x</mi>
  </msub>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 为阿克曼函数的反函数，可以认为是一个很小的常数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minSwapsCouples(row []int) int {</span></span>
<span class="line"><span>	n := len(row) >> 1</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n&#x3C;&#x3C;1; i += 2 {</span></span>
<span class="line"><span>		a, b := row[i]>>1, row[i+1]>>1</span></span>
<span class="line"><span>		p[find(a)] = find(b)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := n</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		if find(i) == i {</span></span>
<span class="line"><span>			ans--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/couples-holding-hands" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0765.Couples%20Holding%20Hands/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-778" tabindex="-1">778. 水位上升的泳池中游泳 <a class="header-anchor" href="#q-778" aria-label="Permalink to &quot;778. 水位上升的泳池中游泳 {#q-778}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、极小化极大、数组、二分查找、矩阵、Dijkstra 算法、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在一个 <code>n x n</code> 的整数矩阵 <code>grid</code> 中，每一个方格的值 <code>grid[i][j]</code> 表示位置 <code>(i, j)</code> 的平台高度。</p>&#10;&#10;<p>当开始下雨时，在时间为 <code>t</code> 时，水池中的水位为 <code>t</code> 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。</p>&#10;&#10;<p>你从坐标方格的左上平台 <code>(0，0)</code> 出发。返回 <em>你到达坐标方格的右下平台 <code>(n-1, n-1)</code> 所需的最少时间 。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0778.Swim%20in%20Rising%20Water/images/swim1-grid.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[0,2],[1,3]]&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong>&#10;时间为0时，你位于坐标方格的位置为 <code>(0, 0)。</code>&#10;此时你不能游向任意方向，因为四个相邻方向平台的高度都大于当前时间为 0 时的水位。&#10;等时间到达 3 时，你才可以游向平台 (1, 1). 因为此时的水位是 3，坐标方格中的平台没有比水位 3 更高的，所以你可以游向坐标方格中的任意位置&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0778.Swim%20in%20Rising%20Water/images/swim2-grid-1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]&#10;<strong>输出:</strong> 16&#10;<strong>解释: </strong>最终的路线用加粗进行了标记。&#10;我们必须等到时间为 16，此时才能保证平台 (0, 0) 和 (4, 4) 是连通的&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 50</code></li>&#10;	<li><code>0 &lt;= grid[i][j] &lt; n<sup>2</sup></code></li>&#10;	<li><code>grid[i][j]</code> 中每个值 <strong>均无重复</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>水位随时间上涨，时刻 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 只能走高度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mi>t</mi>
</math></span> 的格子，求从左上到右下的最早时刻。高度是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.</mn>
  <mo>.</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的排列，可按高度从低到高加入格子。</p>
<p>加入高度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的格并与已加入的四邻连通后，若起点与终点连通，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 就是答案。并查集维护连通。</p>
<p>先把高度映射到坐标，再按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 递增合并。时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们可以将每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 映射为一个编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>j</mi>
</math></span>，并使用并查集维护连通分量。</p>
<p>我们首先用一个一维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>i</mi>
</math></span> 记录每个高度对应的位置编号，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>i</mi>
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示高度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 的位置编号。</p>
<p>然后我们从高度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始遍历到高度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，对于每个高度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，我们将位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>i</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span> 与其四个相邻且高度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的位置进行合并。如果合并后，位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 连通了，那么我们就找到了最小的时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
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
</math></span> 是矩阵的边长。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func swimInWater(grid [][]int) int {</span></span>
<span class="line"><span>	n := len(grid)</span></span>
<span class="line"><span>	m := n * n</span></span>
<span class="line"><span>	p := make([]int, m)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	hi := make([]int, m)</span></span>
<span class="line"><span>	for i := range grid {</span></span>
<span class="line"><span>		for j, h := range grid[i] {</span></span>
<span class="line"><span>			hi[h] = i*n + j</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for t := 0; t &#x3C; m; t++ {</span></span>
<span class="line"><span>		id := hi[t]</span></span>
<span class="line"><span>		x, y := id/n, id%n</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			nx, ny := x+dirs[k], y+dirs[k+1]</span></span>
<span class="line"><span>			if nx >= 0 &#x26;&#x26; nx &#x3C; n &#x26;&#x26; ny >= 0 &#x26;&#x26; ny &#x3C; n &#x26;&#x26; grid[nx][ny] &#x3C;= t {</span></span>
<span class="line"><span>				a := find(x*n + y)</span></span>
<span class="line"><span>				b := find(nx*n + ny)</span></span>
<span class="line"><span>				p[a] = b</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if find(0) == find(m-1) {</span></span>
<span class="line"><span>			return t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/swim-in-rising-water" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0778.Swim%20in%20Rising%20Water/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-785" tabindex="-1">785. 判断二分图 <a class="header-anchor" href="#q-785" aria-label="Permalink to &quot;785. 判断二分图 {#q-785}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图、图的着色、二分图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre>存在一个 <strong>无向图</strong> ，图中有 <code>n</code> 个节点。其中每个节点都有一个介于 <code>0</code> 到 <code>n - 1</code> 之间的唯一编号。给你一个二维数组 <code>graph</code> ，其中 <code>graph[u]</code> 是一个节点数组，由节点 <code>u</code> 的邻接节点组成。形式上，对于 <code>graph[u]</code> 中的每个 <code>v</code> ，都存在一条位于节点 <code>u</code> 和节点 <code>v</code> 之间的无向边。该无向图同时具有以下属性：&#10;<ul>&#10;	<li>不存在自环（<code>graph[u]</code> 不包含 <code>u</code>）。</li>&#10;	<li>不存在平行边（<code>graph[u]</code> 不包含重复值）。</li>&#10;	<li>如果 <code>v</code> 在 <code>graph[u]</code> 内，那么 <code>u</code> 也应该在 <code>graph[v]</code> 内（该图是无向图）</li>&#10;	<li>这个图可能不是连通图，也就是说两个节点 <code>u</code> 和 <code>v</code> 之间可能不存在一条连通彼此的路径。</li>&#10;</ul>&#10;&#10;<p><strong>二分图</strong> 定义：如果能将一个图的节点集合分割成两个独立的子集 <code>A</code> 和 <code>B</code> ，并使图中的每一条边的两个节点一个来自 <code>A</code> 集合，一个来自 <code>B</code> 集合，就将这个图称为 <strong>二分图</strong> 。</p>&#10;&#10;<p>如果图是二分图，返回 <code>true</code><em> </em>；否则，返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0785.Is%20Graph%20Bipartite/images/bi2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,2,3],[0,2],[0,1,3],[0,2]]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong><code>不能将节点分割成两个独立的子集，</code>以使每条边都连通一个子集中的一个节点与另一个子集中的一个节点。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0785.Is%20Graph%20Bipartite/images/bi1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,3],[0,2],[1,3],[0,2]]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong><code>可以将节点分成两组: {0, 2} 和 {1, 3} 。</code></pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>graph.length == n</code></li>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>0 &lt;= graph[u].length &lt; n</code></li>&#10;	<li><code>0 &lt;= graph[u][i] &lt;= n - 1</code></li>&#10;	<li><code>graph[u]</code> 不会包含 <code>u</code></li>&#10;	<li><code>graph[u]</code> 的所有值 <strong>互不相同</strong></li>&#10;	<li>如果 <code>graph[u]</code> 包含 <code>v</code>，那么 <code>graph[v]</code> 也会包含 <code>u</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：染色法判定二分图 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断无向图是否二分。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，从每个未染色点用两种颜色 DFS，邻点必须异色；若已染色且同色则失败。</p>
<p>图可能不连通，要对每个连通块都染一遍。</p>
</blockquote>
<p>遍历所有节点进行染色，比如初始为白色，DFS 对节点相邻的点染上另外一种颜色。如果要染色某节点时，要染的目标颜色和该节点的已经染过的颜色不同，则说明不能构成二分图。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isBipartite(graph [][]int) bool {</span></span>
<span class="line"><span>	n := len(graph)</span></span>
<span class="line"><span>	color := make([]int, n)</span></span>
<span class="line"><span>	var dfs func(int, int) bool</span></span>
<span class="line"><span>	dfs = func(a, c int) bool {</span></span>
<span class="line"><span>		color[a] = c</span></span>
<span class="line"><span>		for _, b := range graph[a] {</span></span>
<span class="line"><span>			if color[b] == c || (color[b] == 0 &#x26;&#x26; !dfs(b, -c)) {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := range graph {</span></span>
<span class="line"><span>		if color[i] == 0 &#x26;&#x26; !dfs(i, 1) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>染色可用并查集改写：一个点的所有邻居应在同一部，且不与该点同部。</p>
<p>若某点与邻居已在同一集合则不是二分图；否则把该点的邻居互相合并。</p>
</blockquote>
<p>对于本题，如果是二分图，那么图中每个顶点的所有邻接点都应该属于同一集合，且不与顶点处于同一集合，因此我们可以使用并查集。遍历图中每个顶点，如果发现存在当前顶点与对应的邻接点处于同一个集合，说明不是二分图。否则将当前节点的邻接点相互进行合并。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isBipartite(graph [][]int) bool {</span></span>
<span class="line"><span>	n := len(graph)</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(x int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for a, bs := range graph {</span></span>
<span class="line"><span>		for _, b := range bs {</span></span>
<span class="line"><span>			pa, pb := find(a), find(b)</span></span>
<span class="line"><span>			if pa == pb {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			p[pb] = find(bs[0])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/is-graph-bipartite" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0785.Is%20Graph%20Bipartite/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-803" tabindex="-1">803. 打砖块 <a class="header-anchor" href="#q-803" aria-label="Permalink to &quot;803. 打砖块 {#q-803}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：并查集、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有一个 <code>m x n</code> 的二元网格 <code>grid</code> ，其中 <code>1</code> 表示砖块，<code>0</code> 表示空白。砖块 <strong>稳定</strong>（不会掉落）的前提是：</p>&#10;&#10;<ul>&#10;	<li>一块砖直接连接到网格的顶部，或者</li>&#10;	<li>至少有一块相邻（4 个方向之一）砖块<strong> 稳定 </strong>不会掉落时</li>&#10;</ul>&#10;&#10;<p>给你一个数组 <code>hits</code> ，这是需要依次消除砖块的位置。每当消除 <code>hits[i] = (rowi, coli)</code> 位置上的砖块时，对应位置的砖块（若存在）会消失，然后其他的砖块可能因为这一消除操作而 <strong>掉落</strong> 。一旦砖块掉落，它会 <strong>立即</strong> 从网格 <code>grid</code> 中消失（即，它不会落在其他稳定的砖块上）。</p>&#10;&#10;<p>返回一个数组 <code>result</code> ，其中 <code>result[i]</code> 表示第 <code>i</code> 次消除操作对应掉落的砖块数目。</p>&#10;&#10;<p><strong>注意</strong>，消除可能指向是没有砖块的空白位置，如果发生这种情况，则没有砖块掉落。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]&#10;<strong>输出：</strong>[2]&#10;<strong>解释：</strong>网格开始为：&#10;[[1,0,0,0]，&#10; [<strong>1</strong>,1,1,0]]&#10;消除 (1,0) 处加粗的砖块，得到网格：&#10;[[1,0,0,0]&#10; [0,<strong>1</strong>,<strong>1</strong>,0]]&#10;两个加粗的砖不再稳定，因为它们不再与顶部相连，也不再与另一个稳定的砖相邻，因此它们将掉落。得到网格：&#10;[[1,0,0,0],&#10; [0,0,0,0]]&#10;因此，结果为 [2] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]&#10;<strong>输出：</strong>[0,0]&#10;<strong>解释：</strong>网格开始为：&#10;[[1,0,0,0],&#10; [1,<strong>1</strong>,0,0]]&#10;消除 (1,1) 处加粗的砖块，得到网格：&#10;[[1,0,0,0],&#10; [1,0,0,0]]&#10;剩下的砖都很稳定，所以不会掉落。网格保持不变：&#10;[[1,0,0,0], &#10; [<strong>1</strong>,0,0,0]]&#10;接下来消除 (1,0) 处加粗的砖块，得到网格：&#10;[[1,0,0,0],&#10; [0,0,0,0]]&#10;剩下的砖块仍然是稳定的，所以不会有砖块掉落。&#10;因此，结果为 [0,0] 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 200</code></li>&#10;	<li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li>&#10;	<li><code>1 &lt;= hits.length &lt;= 4 * 10<sup>4</sup></code></li>&#10;	<li><code>hits[i].length == 2</code></li>&#10;	<li><code>0 &lt;= x<sub>i </sub>&lt;= m - 1</code></li>&#10;	<li><code>0 &lt;= y<sub>i</sub> &lt;= n - 1</code></li>&#10;	<li>所有 <code>(x<sub>i</sub>, y<sub>i</sub>)</code> 互不相同</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次打击后正向洪水填充统计掉落， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>200</mn>
</math></span>，重复搜索过慢。掉落的本质是「与顶行的连通被切断」。</p>
<p>为此先打掉全部打击位置，用并查集把剩余砖块连到一个虚拟屋顶，再按相反顺序补回砖块。补回后屋顶连通块的增量减一，即该次打击实际掉落的砖数；原先就是空格的打击贡献为零。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func hitBricks(grid [][]int, hits [][]int) []int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	p := make([]int, m*n+1)</span></span>
<span class="line"><span>	size := make([]int, len(p))</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var find func(x int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	union := func(a, b int) {</span></span>
<span class="line"><span>		pa, pb := find(a), find(b)</span></span>
<span class="line"><span>		if pa != pb {</span></span>
<span class="line"><span>			size[pb] += size[pa]</span></span>
<span class="line"><span>			p[pa] = pb</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	g := make([][]int, m)</span></span>
<span class="line"><span>	for i := range g {</span></span>
<span class="line"><span>		g[i] = make([]int, n)</span></span>
<span class="line"><span>		for j := range g[i] {</span></span>
<span class="line"><span>			g[i][j] = grid[i][j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, h := range hits {</span></span>
<span class="line"><span>		g[h[0]][h[1]] = 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j, v := range g[0] {</span></span>
<span class="line"><span>		if v == 1 {</span></span>
<span class="line"><span>			union(j, m*n)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if g[i][j] == 0 {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if g[i-1][j] == 1 {</span></span>
<span class="line"><span>				union(i*n+j, (i-1)*n+j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if j > 0 &#x26;&#x26; g[i][j-1] == 1 {</span></span>
<span class="line"><span>				union(i*n+j, i*n+j-1)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, len(hits))</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for k := len(hits) - 1; k >= 0; k-- {</span></span>
<span class="line"><span>		i, j := hits[k][0], hits[k][1]</span></span>
<span class="line"><span>		if grid[i][j] == 0 {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		g[i][j] = 1</span></span>
<span class="line"><span>		prev := size[find(m*n)]</span></span>
<span class="line"><span>		if i == 0 {</span></span>
<span class="line"><span>			union(j, m*n)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for l := 0; l &#x3C; 4; l++ {</span></span>
<span class="line"><span>			x, y := i+dirs[l], j+dirs[l+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; g[x][y] == 1 {</span></span>
<span class="line"><span>				union(i*n+j, x*n+y)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		curr := size[find(m*n)]</span></span>
<span class="line"><span>		ans[k] = max(0, curr-prev-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/bricks-falling-when-hit" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0803.Bricks%20Falling%20When%20Hit/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-827" tabindex="-1">827. 最大人工岛 <a class="header-anchor" href="#q-827" aria-label="Permalink to &quot;827. 最大人工岛 {#q-827}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>n x n</code> 二进制矩阵 <code>grid</code> 。<strong>最多</strong> 只能将一格 <code>0</code> 变成 <code>1</code> 。</p>&#10;&#10;<p>返回执行此操作后，<code>grid</code> 中最大的岛屿面积是多少？</p>&#10;&#10;<p><strong>岛屿</strong> 由一组上、下、左、右四个方向相连的 <code>1</code> 形成。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>grid = [[1, 0], [0, 1]]&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong> 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>grid =<strong> </strong>[[1, 1], [1, 0]]&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong> 将一格0变成1，岛屿的面积扩大为 4。</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>grid = [[1, 1], [1, 1]]&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong> 没有0可以让我们变成1，面积依然为 4。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 500</code></li>&#10;	<li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最多把一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，求最大连通块。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span>，对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 做一次洪水填充会重复访问同一岛屿。</p>
<p>先 DFS 给每座岛编号并记下面积。再枚举每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，把其四邻不同岛的面积相加再加一。若全是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，答案即最大岛面积。</p>
</blockquote>
<p>我们可以给每个连通块一个唯一的标识，用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 记录每个位置所属的连通块，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 所属的连通块编号。用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录每个连通块的大小，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示连通块 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的大小。</p>
<p>首先，我们遍历整个矩阵，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 的位置，我们对其进行深度优先搜索，将其所属的连通块标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span>，并统计连通块的大小。</p>
<p>接着，我们遍历整个矩阵，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 的位置，我们找到其上、下、左、右四个位置所属的连通块，将这些连通块的大小相加，再加上当前位置的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，即可得到将当前位置变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 后的最大岛屿面积。</p>
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
</math></span> 为矩阵的边长。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestIsland(grid [][]int) int {</span></span>
<span class="line"><span>	n := len(grid)</span></span>
<span class="line"><span>	p := make([][]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := make([]int, n*n+1)</span></span>
<span class="line"><span>	dirs := []int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	root := 0</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var dfs func(int, int) int</span></span>
<span class="line"><span>	dfs = func(i, j int) int {</span></span>
<span class="line"><span>		p[i][j] = root</span></span>
<span class="line"><span>		cnt[root]++</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			x := i + dirs[k]</span></span>
<span class="line"><span>			y := j + dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; n &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 1 &#x26;&#x26; p[x][y] == 0 {</span></span>
<span class="line"><span>				dfs(x, y)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt[root]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] == 1 &#x26;&#x26; p[i][j] == 0 {</span></span>
<span class="line"><span>				root++</span></span>
<span class="line"><span>				ans = max(ans, dfs(i, j))</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if grid[i][j] == 0 {</span></span>
<span class="line"><span>				s := make(map[int]struct{})</span></span>
<span class="line"><span>				for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>					x := i + dirs[k]</span></span>
<span class="line"><span>					y := j + dirs[k+1]</span></span>
<span class="line"><span>					if x >= 0 &#x26;&#x26; x &#x3C; n &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n {</span></span>
<span class="line"><span>						s[p[x][y]] = struct{}{}</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				t := 1</span></span>
<span class="line"><span>				for x := range s {</span></span>
<span class="line"><span>					t += cnt[x]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				ans = max(ans, t)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/making-a-large-island" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0827.Making%20A%20Large%20Island/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-839" tabindex="-1">839. 相似字符串组 <a class="header-anchor" href="#q-839" aria-label="Permalink to &quot;839. 相似字符串组 {#q-839}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果交换字符串 <code>X</code> 中的两个不同位置的字母，使得它和字符串 <code>Y</code> 相等，那么称 <code>X</code> 和 <code>Y</code> 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。</p>&#10;&#10;<p>例如，<code>&quot;tars&quot;</code> 和 <code>&quot;rats&quot;</code> 是相似的 (交换 <code>0</code> 与 <code>2</code> 的位置)； <code>&quot;rats&quot;</code> 和 <code>&quot;arts&quot;</code> 也是相似的，但是 <code>&quot;star&quot;</code> 不与 <code>&quot;tars&quot;</code>，<code>&quot;rats&quot;</code>，或 <code>&quot;arts&quot;</code> 相似。</p>&#10;&#10;<p>总之，它们通过相似性形成了两个关联组：<code>{&quot;tars&quot;, &quot;rats&quot;, &quot;arts&quot;}</code> 和 <code>{&quot;star&quot;}</code>。注意，<code>&quot;tars&quot;</code> 和 <code>&quot;arts&quot;</code> 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。</p>&#10;&#10;<p>给你一个字符串列表 <code>strs</code>。列表中的每个字符串都是 <code>strs</code> 中其它所有字符串的一个字母异位词。请问 <code>strs</code> 中有多少个相似字符串组？</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;tars&quot;,&quot;rats&quot;,&quot;arts&quot;,&quot;star&quot;]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;omv&quot;,&quot;ovm&quot;]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= strs.length &lt;= 300</code></li>&#10;	<li><code>1 &lt;= strs[i].length &lt;= 300</code></li>&#10;	<li><code>strs[i]</code> 只包含小写字母。</li>&#10;	<li><code>strs</code> 中的所有单词都具有相同的长度，且是彼此的字母异位词。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>相似（至多两个位置不同）具有传递性，组数即连通块个数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>300</mn>
</math></span>，两两比较并查集合并即可。</p>
<p>题目保证互为异位词，故只需数不同位置：不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 则连边。每次成功合并使块数减一，最后剩下的块数即答案。</p>
</blockquote>
<p>我们可以枚举字符串列表中的任意两个字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 是字母异位词，因此如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的对应位置字符不同的数量不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 是相似的，我们就可以使用并查集将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 合并，如果合并成功，那么相似字符串组的数量减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>最终相似字符串组的数量就是并查集中连通分量的数量。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是字符串列表的长度和字符串的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 是 Ackermann 函数的反函数，可以看成是一个很小的常数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func numSimilarGroups(strs []string) int {</span></span>
<span class="line"><span>	n := len(strs)</span></span>
<span class="line"><span>	uf := newUnionFind(n)</span></span>
<span class="line"><span>	for i, s := range strs {</span></span>
<span class="line"><span>		for j, t := range strs[:i] {</span></span>
<span class="line"><span>			diff := 0</span></span>
<span class="line"><span>			for k := range s {</span></span>
<span class="line"><span>				if s[k] != t[k] {</span></span>
<span class="line"><span>					diff++</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if diff &#x3C;= 2 &#x26;&#x26; uf.union(i, j) {</span></span>
<span class="line"><span>				n--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/similar-string-groups" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0839.Similar%20String%20Groups/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-886" tabindex="-1">886. 可能的二分法 <a class="header-anchor" href="#q-886" aria-label="Permalink to &quot;886. 可能的二分法 {#q-886}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图、图的着色、二分图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一组 <code>n</code> 人（编号为 <code>1, 2, ..., n</code>）， 我们想把每个人分进<strong>任意</strong>大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。</p>&#10;&#10;<p>给定整数 <code>n</code> 和数组 <code>dislikes</code> ，其中 <code>dislikes[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> ，表示不允许将编号为 <code>a<sub>i</sub></code> 和  <code>b<sub>i</sub></code>的人归入同一组。当可以用这种方法将所有人分进两组时，返回 <code>true</code>；否则返回 <code>false</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 4, dislikes = [[1,2],[1,3],[2,4]]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>group1 [1,4], group2 [2,3]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3, dislikes = [[1,2],[1,3],[2,3]]&#10;<strong>输出：</strong>false&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]&#10;<strong>输出：</strong>false&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 2000</code></li>&#10;	<li><code>0 &lt;= dislikes.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>dislikes[i].length == 2</code></li>&#10;	<li><code>1 &lt;= dislikes[i][j] &lt;= n</code></li>&#10;	<li><code>a<sub>i</sub> &lt; b<sub>i</sub></code></li>&#10;	<li><code>dislikes</code> 中每一组都 <strong>不同</strong></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：染色法 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>互讨厌的人不能同组，即嫌恶图是否二分。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2000</mn>
</math></span>，染色 DFS 即可：相邻必须异色，遇同色则失败。</p>
<p>对每个未染色点染成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，沿边染成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#x2212;</mo>
  <mi>c</mi>
</math></span>。全部连通块都成功则可以划分。</p>
</blockquote>
<p>我们用两种颜色对图进行染色，如果可以完成染色，那么就说明可以将所有人分进两组。</p>
<p>具体的染色方法如下：</p>
<ul>
<li>初始化所有人的颜色为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，表示还没有染色。</li>
<li>遍历所有人，如果当前人没有染色，那么就用颜色 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 对其进行染色，然后将其所有不喜欢的人用颜色 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 进行染色。如果染色过程中出现了冲突，那么就说明无法将所有人分进两组，返回 <code v-pre>false</code>。</li>
<li>如果所有人都染色成功，那么就说明可以将所有人分进两组，返回 <code v-pre>true</code>。</li>
</ul>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是人数和不喜欢的关系数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func possibleBipartition(n int, dislikes [][]int) bool {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range dislikes {</span></span>
<span class="line"><span>		a, b := e[0]-1, e[1]-1</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	color := make([]int, n)</span></span>
<span class="line"><span>	var dfs func(int, int) bool</span></span>
<span class="line"><span>	dfs = func(i, c int) bool {</span></span>
<span class="line"><span>		color[i] = c</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			if color[j] == c {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if color[j] == 0 &#x26;&#x26; !dfs(j, 3-c) {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, c := range color {</span></span>
<span class="line"><span>		if c == 0 &#x26;&#x26; !dfs(i, 1) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一已经用显式栈完成染色。并查集不保存颜色，而是把必须同组的人合并：一个人讨厌的所有对象应当彼此同组，并且不能和这个人自己同组。若发现自己与某个讨厌对象已经在同一集合则失败，否则把这些讨厌对象合并到同一代表下。</p>
</blockquote>
<p>并查集是一种树形的数据结构，顾名思义，它用于处理一些不交集的<strong>合并</strong>及<strong>查询</strong>问题。 它支持两种操作：</p>
<ol>
<li>查找（Find）：确定某个元素处于哪个子集，单次操作时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span></li>
<li>合并（Union）：将两个子集合并成一个集合，单次操作时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span></li>
</ol>
<p>其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
</math></span> 为阿克曼函数的反函数，其增长极其缓慢，也就是说其单次操作的平均运行时间可以认为是一个很小的常数。</p>
<p>以下是并查集的常用模板，需要熟练掌握。其中：</p>
<ul>
<li><code v-pre>n</code> 表示节点数</li>
<li><code v-pre>p</code> 存储每个点的父节点，初始时每个点的父节点都是自己</li>
<li><code v-pre>size</code> 只有当节点是祖宗节点时才有意义，表示祖宗节点所在集合中，点的数量</li>
<li><code v-pre>find(x)</code> 函数用于查找 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 所在集合的祖宗节点</li>
<li><code v-pre>union(a, b)</code> 函数用于合并 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 所在的集合</li>
</ul>
<div class="language-python vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(n))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> n</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(x):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> p[x] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> x:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D">        # 路径压缩</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">        p[x] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> find(p[x])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> p[x]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0"> union</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">(a, b):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    pa, pb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> find(a), find(b)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> pa </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> pb:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">        return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    p[pa] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> pb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">    size[pb] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8"> size[pa]</span></span></code></pre>
</div><p>对于本题，我们遍历每一个人，他与他不喜欢的人不应该在同一个集合中，如果在同一个集合中，就产生了冲突，直接返回 <code v-pre>false</code>。如果没有冲突，那么就将他所有不喜欢的人合并到同一个集合中。</p>
<p>遍历结束，说明没有冲突，返回 <code v-pre>true</code>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func possibleBipartition(n int, dislikes [][]int) bool {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, e := range dislikes {</span></span>
<span class="line"><span>		a, b := e[0]-1, e[1]-1</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			if find(i) == find(j) {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			p[find(j)] = find(g[i][0])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：显式栈染色 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>互不喜欢的人不能同组，嫌恶关系构成无向图，问它是否二分。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2000</mn>
</math></span>，沿一条嫌恶链递归时，调用深度等于人数，链长达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 就会超出 Python 的递归上限。二分图等价于能用两种颜色染色且每条边两端异色。因此用栈扩展连通块：未染色的人染成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 后入栈，弹出时若邻居已是同色则失败，若尚未染色就染成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 减去当前颜色再入栈。每个连通块都染完则可以分组。</p>
</blockquote>
<p>用颜色 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 表示未染色和两组。输入编号先减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，图按下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 存放。对每个颜色仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的人，染成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 并压入栈。弹出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时检查每个邻居 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 同色，返回 <code v-pre>false</code>；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 还没染色，染成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的颜色并压入栈。所有人都处理完则返回 <code v-pre>true</code>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是人数和不喜欢的关系数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func possibleBipartition(n int, dislikes [][]int) bool {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range dislikes {</span></span>
<span class="line"><span>		a, b := e[0]-1, e[1]-1</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	color := make([]int, n)</span></span>
<span class="line"><span>	for start := 0; start &#x3C; n; start++ {</span></span>
<span class="line"><span>		if color[start] != 0 {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		color[start] = 1</span></span>
<span class="line"><span>		stk := []int{start}</span></span>
<span class="line"><span>		for len(stk) > 0 {</span></span>
<span class="line"><span>			i := stk[len(stk)-1]</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			for _, j := range g[i] {</span></span>
<span class="line"><span>				if color[j] == color[i] {</span></span>
<span class="line"><span>					return false</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if color[j] == 0 {</span></span>
<span class="line"><span>					color[j] = 3 - color[i]</span></span>
<span class="line"><span>					stk = append(stk, j)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/possible-bipartition" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0886.Possible%20Bipartition/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-924" tabindex="-1">924. 尽量减少恶意软件的传播 <a class="header-anchor" href="#q-924" aria-label="Permalink to &quot;924. 尽量减少恶意软件的传播 {#q-924}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图、数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出了一个由 <code>n</code> 个节点组成的网络，用 <code>n × n</code> 个邻接矩阵图 <code>graph</code> 表示。在节点网络中，当 <code>graph[i][j] = 1</code> 时，表示节点 <code>i</code> 能够直接连接到另一个节点 <code>j</code>。 </p>&#10;&#10;<p>一些节点 <code>initial</code> 最初被恶意软件感染。只要两个节点直接连接，且其中至少一个节点受到恶意软件的感染，那么两个节点都将被恶意软件感染。这种恶意软件的传播将继续，直到没有更多的节点可以被这种方式感染。</p>&#10;&#10;<p>假设 <code>M(initial)</code> 是在恶意软件停止传播之后，整个网络中感染恶意软件的最终节点数。</p>&#10;&#10;<p>如果从 <code>initial</code> 中<strong>移除某一节点</strong>能够最小化 <code>M(initial)</code>， 返回该节点。如果有多个节点满足条件，就返回<strong>索引最小</strong>的节点。</p>&#10;&#10;<p>请注意，如果某个节点已从受感染节点的列表 <code>initial</code> 中删除，它以后仍有可能因恶意软件传播而受到感染。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,0,0],[0,1,0],[0,0,1]], initial = [0,2]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,1,1],[1,1,1],[1,1,1]], initial = [1,2]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;&#10;<ul>&#10;	<li><code>n == graph.length</code></li>&#10;	<li><code>n == graph[i].length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 300</code></li>&#10;	<li><code>graph[i][j] == 0</code> 或 <code>1</code>.</li>&#10;	<li><code>graph[i][j] == graph[j][i]</code></li>&#10;	<li><code>graph[i][i] == 1</code></li>&#10;	<li><code>1 &lt;= initial.length &lt;= n</code></li>&#10;	<li><code>0 &lt;= initial[i] &lt;= n - 1</code></li>&#10;	<li><code>initial</code> 中所有整数均<strong>不重复</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>删掉一个初始感染点，使最终感染最少。感染沿连通块传播：一块里若有两个及以上初始点，删一个仍会被另一点感染；只有恰好一个初始点的块，删掉它能拯救整块。</p>
<p>并查集求出分量大小与各块初始点数，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 的点中选能拯救最多（并列取编号最小）者；若没有这种块，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 的最小值。</p>
</blockquote>
<p>根据题目描述，如果初始时有若干个节点属于同一个连通分量，那么一共可以分为三种情况：</p>
<ol>
<li>这些节点中没有一个节点被感染</li>
<li>这些节点中只有一个节点被感染</li>
<li>这些节点中有多个节点被感染</li>
</ol>
<p>我们要考虑的是，移除某个感染节点后，剩下的节点中被感染的节点数最少。</p>
<p>情况一没有被感染的节点，不需要考虑；情况二只有一个节点被感染，那么移除这个节点后，该连通分量中的其他节点都不会被感染；情况三有多个节点被感染，那么移除任意一个感染节点后，该连通分量中的其他节点还是会被感染，所以我们只需要考虑情况二。</p>
<p>我们利用并查集 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mi>f</mi>
</math></span> 维护节点的连通关系，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 记录答案，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 记录当前能减少感染的最大节点数，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。</p>
<p>然后遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>，用一个哈希表或者一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计每个连通分量中被感染节点的个数。</p>
<p>接下来，我们再遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>，对于每个节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，我们找到其所在的连通分量的根节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span>，如果该连通分量中只有一个被感染节点，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，我们就更新答案，更新的条件是该连通分量中的节点数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>z</mi>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>z</mi>
</math></span> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的值小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。</p>
<p>最后，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 没有被更新，说明所有的连通分量中都有多个被感染节点，那么我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 中的最小值，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是节点的个数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 是 Ackermann 函数的反函数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) getSize(root int) int {</span></span>
<span class="line"><span>	return uf.size[root]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func minMalwareSpread(graph [][]int, initial []int) int {</span></span>
<span class="line"><span>	n := len(graph)</span></span>
<span class="line"><span>	uf := newUnionFind(n)</span></span>
<span class="line"><span>	for i := range graph {</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if graph[i][j] == 1 {</span></span>
<span class="line"><span>				uf.union(i, j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := make([]int, n)</span></span>
<span class="line"><span>	ans, mx := n, 0</span></span>
<span class="line"><span>	for _, x := range initial {</span></span>
<span class="line"><span>		cnt[uf.find(x)]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range initial {</span></span>
<span class="line"><span>		root := uf.find(x)</span></span>
<span class="line"><span>		if cnt[root] == 1 {</span></span>
<span class="line"><span>			sz := uf.getSize(root)</span></span>
<span class="line"><span>			if sz > mx || sz == mx &#x26;&#x26; x &#x3C; ans {</span></span>
<span class="line"><span>				ans, mx = x, sz</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if ans == n {</span></span>
<span class="line"><span>		return slices.Min(initial)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimize-malware-spread" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0924.Minimize%20Malware%20Spread/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-928" tabindex="-1">928. 尽量减少恶意软件的传播 II <a class="header-anchor" href="#q-928" aria-label="Permalink to &quot;928. 尽量减少恶意软件的传播 II {#q-928}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、图、数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个由 <code>n</code> 个节点组成的网络，用 <code>n x n</code> 个邻接矩阵 <code>graph</code> 表示。在节点网络中，只有当 <code>graph[i][j] = 1</code> 时，节点 <code>i</code> 能够直接连接到另一个节点 <code>j</code>。</p>&#10;&#10;<p>一些节点 <code>initial</code> 最初被恶意软件感染。只要两个节点直接连接，且其中至少一个节点受到恶意软件的感染，那么两个节点都将被恶意软件感染。这种恶意软件的传播将继续，直到没有更多的节点可以被这种方式感染。</p>&#10;&#10;<p>假设 <code>M(initial)</code> 是在恶意软件停止传播之后，整个网络中感染恶意软件的最终节点数。</p>&#10;&#10;<p>我们可以从 <code>initial</code> 中 <strong>删除一个节点</strong>，<strong>并完全移除该节点以及从该节点到任何其他节点的任何连接。</strong></p>&#10;&#10;<p>请返回移除后能够使 <code>M(initial)</code> 最小化的节点。如果有多个节点满足条件，返回索引 <strong>最小的节点</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,1,0],[1,1,1],[0,1,1]], initial = [0,1]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>graph = [[1,1,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,1]], initial = [0,1]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;&#10;<ul>&#10;	<li><code>n == graph.length</code></li>&#10;	<li><code>n == graph[i].length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 300</code></li>&#10;	<li><code>graph[i][j]</code> 是 <code>0</code> 或 <code>1</code>.</li>&#10;	<li><code>graph[i][j] == graph[j][i]</code></li>&#10;	<li><code>graph[i][i] == 1</code></li>&#10;	<li><code>1 &lt;= initial.length &lt; n</code></li>&#10;	<li><code>0 &lt;= initial[i] &lt;= n - 1</code></li>&#10;	<li> <code>initial</code> 中每个整数都<strong>不同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>与上一题不同，被删节点不再传播，且其余初始点仍会感染邻居。先把所有干净节点按边合并成连通块，再看每个初始点触及哪些干净块。</p>
<p>一块若只被一个初始点碰到，删掉该点即可拯救整块。对每个初始点累加其独占块的大小，取拯救最多（并列取编号最小）的点。</p>
</blockquote>
<p>我们可以使用并查集，将所有不在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 中的节点，并且满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>a</mi>
  <mi>p</mi>
  <mi>h</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 的节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 进行合并。</p>
<p>接下来，我们创建一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示所有与节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 相连的连通分量的根节点。我们还需要一个计数器 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，用来统计每个根节点被多少个初始节点感染。</p>
<p>对于每个初始时被感染的节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们遍历所有与节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 相连的节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，如果节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 不在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 中，我们将节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的根节点加入到集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 中。同时，我们统计每个根节点被多少个初始节点感染，将结果保存到计数器 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中。</p>
<p>然后，我们用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 记录答案，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 记录最多可以减少的被感染节点的数量。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>遍历所有初始时被感染的节点，对于每个节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的所有根节点，如果根节点只被一个初始节点感染，我们累加这个根节点所在的连通分量的大小到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&gt;</mo>
  <mi>m</mi>
  <mi>x</mi>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>x</mi>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mi>i</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mi>t</mi>
</math></span>。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
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
</math></span> 是节点的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 是 Ackermann 函数的反函数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) getSize(root int) int {</span></span>
<span class="line"><span>	return uf.size[root]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func minMalwareSpread(graph [][]int, initial []int) int {</span></span>
<span class="line"><span>	n := len(graph)</span></span>
<span class="line"><span>	s := make([]bool, n)</span></span>
<span class="line"><span>	for _, i := range initial {</span></span>
<span class="line"><span>		s[i] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	uf := newUnionFind(n)</span></span>
<span class="line"><span>	for i := range graph {</span></span>
<span class="line"><span>		if !s[i] {</span></span>
<span class="line"><span>			for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>				if graph[i][j] == 1 &#x26;&#x26; !s[j] {</span></span>
<span class="line"><span>					uf.union(i, j)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	g := make([]map[int]bool, n)</span></span>
<span class="line"><span>	for _, i := range initial {</span></span>
<span class="line"><span>		g[i] = map[int]bool{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := make([]int, n)</span></span>
<span class="line"><span>	for _, i := range initial {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if !s[j] &#x26;&#x26; graph[i][j] == 1 {</span></span>
<span class="line"><span>				g[i][uf.find(j)] = true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for root := range g[i] {</span></span>
<span class="line"><span>			cnt[root]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, mx := 0, -1</span></span>
<span class="line"><span>	for _, i := range initial {</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for root := range g[i] {</span></span>
<span class="line"><span>			if cnt[root] == 1 {</span></span>
<span class="line"><span>				t += uf.getSize(root)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if t > mx || t == mx &#x26;&#x26; i &#x3C; ans {</span></span>
<span class="line"><span>			ans, mx = i, t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimize-malware-spread-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0928.Minimize%20Malware%20Spread%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-947" tabindex="-1">947. 移除最多的同行或同列石头 <a class="header-anchor" href="#q-947" aria-label="Permalink to &quot;947. 移除最多的同行或同列石头 {#q-947}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、并查集、图、哈希表、二分图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><code>n</code> 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。</p>&#10;&#10;<p>如果一块石头的 <strong>同行或者同列</strong> 上有其他石头存在，那么就可以移除这块石头。</p>&#10;&#10;<p>给你一个长度为 <code>n</code> 的数组 <code>stones</code> ，其中 <code>stones[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示第 <code>i</code> 块石头的位置，返回 <strong>可以移除的石子</strong> 的最大数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>一种移除 5 块石头的方法如下所示：&#10;1. 移除石头 [2,2] ，因为它和 [2,1] 同行。&#10;2. 移除石头 [2,1] ，因为它和 [0,1] 同列。&#10;3. 移除石头 [1,2] ，因为它和 [1,0] 同行。&#10;4. 移除石头 [1,0] ，因为它和 [0,0] 同列。&#10;5. 移除石头 [0,1] ，因为它和 [0,0] 同行。&#10;石头 [0,0] 不能移除，因为它没有与另一块石头同行/列。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>一种移除 3 块石头的方法如下所示：&#10;1. 移除石头 [2,2] ，因为它和 [2,0] 同行。&#10;2. 移除石头 [2,0] ，因为它和 [0,0] 同列。&#10;3. 移除石头 [0,2] ，因为它和 [0,0] 同行。&#10;石头 [0,0] 和 [1,1] 不能移除，因为它们没有与另一块石头同行/列。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [[0,0]]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>[0,0] 是平面上唯一一块石头，所以不可以移除它。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= stones.length &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>&#10;	<li>不会有两块石头放在同一个坐标点上</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同行或同列的石头可互相到达，一个连通块最后只能留一块，故答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 减去连通块数。两两检查是否同行同列并入并查集，成功合并的次数即为可移除数。</p>
</blockquote>
<p>我们可以用并查集维护石头之间的关系。如果两块石头在同一行或同一列，我们就认为它们之间有关系，可以通过并查集将它们连接起来。最后，我们统计并查集中有多少个连通分量，这个数值就是可以剩余的石头的数量，那么总共可以移除的石头数量就是石头总数减去剩余的石头数量。我们也可以在合并的时候，记录成功合并的次数，这个次数就是可以移除的石头的数量。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为石头的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func removeStones(stones [][]int) (ans int) {</span></span>
<span class="line"><span>	n := len(stones)</span></span>
<span class="line"><span>	uf := newUnionFind(n)</span></span>
<span class="line"><span>	for i, s1 := range stones {</span></span>
<span class="line"><span>		for j, s2 := range stones[:i] {</span></span>
<span class="line"><span>			if s1[0] == s2[0] || s1[1] == s2[1] {</span></span>
<span class="line"><span>				if uf.union(i, j) {</span></span>
<span class="line"><span>					ans++</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：并查集（优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对石头两两连边，为平方级。行与列本身可作为并查集元素：把列加上偏移后与行合并，同一行或同一列自动连通。剩余块数等于不同行根的个数。</p>
</blockquote>
<p>我们可以将石头的纵坐标加上一个偏移量，这样就可以将横坐标和纵坐标统一起来，然后用并查集维护横坐标和纵坐标之间的关系。</p>
<p>我们遍历每一块石头，将横坐标与纵坐标进行合并。</p>
<p>最后，我们再遍历所有石头，将每块石头的横坐标的根节点放到一个集合中，那么这个集合的数量就是可以剩余的石头的数量，总共可以移除的石头数量就是石头总数减去剩余的石头数量。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>&#x3B1;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别为石头的数量和横纵坐标的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type unionFind struct {</span></span>
<span class="line"><span>	p, size []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newUnionFind(n int) *unionFind {</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;unionFind{p, size}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) find(x int) int {</span></span>
<span class="line"><span>	if uf.p[x] != x {</span></span>
<span class="line"><span>		uf.p[x] = uf.find(uf.p[x])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return uf.p[x]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (uf *unionFind) union(a, b int) bool {</span></span>
<span class="line"><span>	pa, pb := uf.find(a), uf.find(b)</span></span>
<span class="line"><span>	if pa == pb {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if uf.size[pa] > uf.size[pb] {</span></span>
<span class="line"><span>		uf.p[pb] = pa</span></span>
<span class="line"><span>		uf.size[pa] += uf.size[pb]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		uf.p[pa] = pb</span></span>
<span class="line"><span>		uf.size[pb] += uf.size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func removeStones(stones [][]int) (ans int) {</span></span>
<span class="line"><span>	m := 10001</span></span>
<span class="line"><span>	uf := newUnionFind(m &#x3C;&#x3C; 1)</span></span>
<span class="line"><span>	for _, st := range stones {</span></span>
<span class="line"><span>		uf.union(st[0], st[1]+m)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for _, st := range stones {</span></span>
<span class="line"><span>		s[uf.find(st[0])] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(stones) - len(s)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-stones-removed-with-same-row-or-column" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0947.Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-952" tabindex="-1">952. 按公因数计算最大组件大小 <a class="header-anchor" href="#q-952" aria-label="Permalink to &quot;952. 按公因数计算最大组件大小 {#q-952}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：并查集、数组、哈希表、数学、数论、质因数分解</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个由不同正整数的组成的非空数组 <code>nums</code> ，考虑下面的图：</p>&#10;&#10;<ul>&#10;	<li>有 <code>nums.length</code> 个节点，按从 <code>nums[0]</code> 到 <code>nums[nums.length - 1]</code> 标记；</li>&#10;	<li>只有当 <code>nums[i]</code> 和 <code>nums[j]</code> 共用一个大于 1 的公因数时，<code>nums[i]</code> 和 <code>nums[j]</code>之间才有一条边。</li>&#10;</ul>&#10;&#10;<p>返回 <em>图中最大连通组件的大小</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0952.Largest%20Component%20Size%20by%20Common%20Factor/images/ex1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [4,6,15,35]&#10;<strong>输出：</strong>4&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0952.Largest%20Component%20Size%20by%20Common%20Factor/images/ex2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [20,50,9,63]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0952.Largest%20Component%20Size%20by%20Common%20Factor/images/ex3.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,3,6,7,4,12,21,39]&#10;<strong>输出：</strong>8&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>nums</code> 中所有值都 <strong>不同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 + 并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有公因数大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数相连，求最大连通块。两两求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">gcd</mo>
</math></span> 为平方级， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 不可行。把每个数与其所有因数在并查集中合并，同一因数的数自然连通。最后统计各数根结点的频数最大值。</p>
</blockquote>
<p>利用“试除法”，对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的每个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 分解因数，然后将每个因数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 合并， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>i</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 合并。此过程用并查集来维护连通分量。</p>
<p>最后，遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中每个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，找出所在的连通分量，出现次数最多的连通分量就是所求的答案。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestComponentSize(nums []int) int {</span></span>
<span class="line"><span>	m := slices.Max(nums)</span></span>
<span class="line"><span>	p := make([]int, m+1)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	union := func(a, b int) {</span></span>
<span class="line"><span>		pa, pb := find(a), find(b)</span></span>
<span class="line"><span>		if pa != pb {</span></span>
<span class="line"><span>			p[pa] = pb</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		i := 2</span></span>
<span class="line"><span>		for i &#x3C;= v/i {</span></span>
<span class="line"><span>			if v%i == 0 {</span></span>
<span class="line"><span>				union(v, i)</span></span>
<span class="line"><span>				union(v, v/i)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := make([]int, m+1)</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		t := find(v)</span></span>
<span class="line"><span>		cnt[t]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return slices.Max(cnt)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-component-size-by-common-factor" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0952.Largest%20Component%20Size%20by%20Common%20Factor/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-959" tabindex="-1">959. 由斜杠划分区域 <a class="header-anchor" href="#q-959" aria-label="Permalink to &quot;959. 由斜杠划分区域 {#q-959}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、哈希表、矩阵、平面图</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在由 <code>1 x 1</code> 方格组成的 <code>n x n</code> 网格 <code>grid</code> 中，每个 <code>1 x 1</code> 方块由 <code>'/'</code>、<code>'\\'</code> 或空格构成。这些字符会将方块划分为一些共边的区域。</p>&#10;&#10;<p>给定网格 <code>grid</code> 表示为一个字符串数组，返回 <em>区域的数量</em> 。</p>&#10;&#10;<p>请注意，反斜杠字符是转义的，因此 <code>'\\'</code> 用 <code>'\\\\'</code> 表示。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0959.Regions%20Cut%20By%20Slashes/images/1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [&quot; /&quot;,&quot;/ &quot;]&#10;<strong>输出：</strong>2</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0959.Regions%20Cut%20By%20Slashes/images/2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [&quot; /&quot;,&quot;  &quot;]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0959.Regions%20Cut%20By%20Slashes/images/4.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [&quot;/\\\\&quot;,&quot;\\\\/&quot;]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>回想一下，因为 \\ 字符是转义的，所以 &quot;/\\\\&quot; 表示 /\\，而 &quot;\\\\/&quot; 表示 \\/。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == grid.length == grid[i].length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 30</code></li>&#10;	<li><code>grid[i][j]</code> 是 <code>'/'</code>、<code>'\\'</code>、或 <code>' '</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>斜线把格子切成若干区域， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>30</mn>
</math></span>。把每个格子分成上下左右四块三角形，相邻块在无墙处合并：格子内部按 <code v-pre>'/'</code>、<code v-pre>'\\\\'</code> 或空格连边，格子之间沿共享边相连。并查集维护块数，初始 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
</math></span>，每次成功合并减一。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func regionsBySlashes(grid []string) int {</span></span>
<span class="line"><span>	n := len(grid)</span></span>
<span class="line"><span>	size := n * n * 4</span></span>
<span class="line"><span>	p := make([]int, size)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(x int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	union := func(a, b int) {</span></span>
<span class="line"><span>		pa, pb := find(a), find(b)</span></span>
<span class="line"><span>		if pa == pb {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p[pa] = pb</span></span>
<span class="line"><span>		size--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, row := range grid {</span></span>
<span class="line"><span>		for j, v := range row {</span></span>
<span class="line"><span>			k := i*n + j</span></span>
<span class="line"><span>			if i &#x3C; n-1 {</span></span>
<span class="line"><span>				union(4*k+2, (k+n)*4)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if j &#x3C; n-1 {</span></span>
<span class="line"><span>				union(4*k+1, (k+1)*4+3)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if v == '/' {</span></span>
<span class="line"><span>				union(4*k, 4*k+3)</span></span>
<span class="line"><span>				union(4*k+1, 4*k+2)</span></span>
<span class="line"><span>			} else if v == '\\\\' {</span></span>
<span class="line"><span>				union(4*k, 4*k+1)</span></span>
<span class="line"><span>				union(4*k+2, 4*k+3)</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				union(4*k, 4*k+1)</span></span>
<span class="line"><span>				union(4*k+1, 4*k+2)</span></span>
<span class="line"><span>				union(4*k+2, 4*k+3)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return size</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/regions-cut-by-slashes" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0959.Regions%20Cut%20By%20Slashes/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-990" tabindex="-1">990. 等式方程的可满足性 <a class="header-anchor" href="#q-990" aria-label="Permalink to &quot;990. 等式方程的可满足性 {#q-990}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：并查集、图、数组、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 <code>equations[i]</code> 的长度为 <code>4</code>，并采用两种不同的形式之一：<code>&quot;a==b&quot;</code> 或 <code>&quot;a!=b&quot;</code>。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。</p>&#10;&#10;<p>只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 <code>true</code>，否则返回 <code>false</code>。 </p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[&quot;a==b&quot;,&quot;b!=a&quot;]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[&quot;b==a&quot;,&quot;a==b&quot;]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[&quot;a==b&quot;,&quot;b==c&quot;,&quot;a==c&quot;]&#10;<strong>输出：</strong>true&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[&quot;a==b&quot;,&quot;b!=c&quot;,&quot;c==a&quot;]&#10;<strong>输出：</strong>false&#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[&quot;c==c&quot;,&quot;b==d&quot;,&quot;x!=z&quot;]&#10;<strong>输出：</strong>true&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li><code>1 &lt;= equations.length &lt;= 500</code></li>&#10;	<li><code>equations[i].length == 4</code></li>&#10;	<li><code>equations[i][0]</code> 和 <code>equations[i][3]</code> 是小写字母</li>&#10;	<li><code>equations[i][1]</code> 要么是 <code>'='</code>，要么是 <code>'!'</code></li>&#10;	<li><code>equations[i][2]</code> 是 <code>'='</code></li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>若干形如 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>==</mo>
  <mi>b</mi>
</math></span> / <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>!</mo>
  <mo>=</mo>
  <mi>b</mi>
</math></span> 的方程，判断能否同时成立。相等具有传递性，应先全部合并。并查集处理所有 <code v-pre>==</code>，再检查每条 <code v-pre>!=</code> 的两端是否已在同一连通块；若是则矛盾。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func equationsPossible(equations []string) bool {</span></span>
<span class="line"><span>	p := make([]int, 26)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; 26; i++ {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var find func(x int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, e := range equations {</span></span>
<span class="line"><span>		a, b := int(e[0]-'a'), int(e[3]-'a')</span></span>
<span class="line"><span>		if e[1] == '=' {</span></span>
<span class="line"><span>			p[find(a)] = find(b)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, e := range equations {</span></span>
<span class="line"><span>		a, b := int(e[0]-'a'), int(e[3]-'a')</span></span>
<span class="line"><span>		if e[1] == '!' &#x26;&#x26; find(a) == find(b) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/satisfiability-of-equality-equations" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0990.Satisfiability%20of%20Equality%20Equations/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1020" tabindex="-1">1020. 飞地的数量 <a class="header-anchor" href="#q-1020" aria-label="Permalink to &quot;1020. 飞地的数量 {#q-1020}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、并查集、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m x n</code> 的二进制矩阵 <code>grid</code> ，其中 <code>0</code> 表示一个海洋单元格、<code>1</code> 表示一个陆地单元格。</p>&#10;&#10;<p>一次 <strong>移动</strong> 是指从一个陆地单元格走到另一个相邻（<strong>上、下、左、右</strong>）的陆地单元格或跨过 <code>grid</code> 的边界。</p>&#10;&#10;<p>返回网格中<strong> 无法 </strong>在任意次数的移动中离开网格边界的陆地单元格的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1020.Number%20of%20Enclaves/images/enclaves1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1020.Number%20of%20Enclaves/images/enclaves2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>所有 1 都在边界上或可以到达边界。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 500</code></li>&#10;	<li><code>grid[i][j]</code> 的值为 <code>0</code> 或 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每一块陆地判断是否能走到边界，最坏要对整张图反复搜索， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span> 时常数不佳。飞地是无法走到边界的陆地，其补集恰为「与边界连通的陆地」。</p>
<p>从四条边界上的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 出发淹没所有能走到的陆地，剩下的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 便无法离岛。</p>
<p>深度优先搜索即可完成淹没，最后统计网格中剩余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数。</p>
</blockquote>
<p>我们可以从边界上的陆地开始进行深度优先搜索，将所有与边界相连的陆地都标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。最后，统计剩余的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数，即为答案。</p>
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
</math></span> 分别为矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numEnclaves(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	var dfs func(i, j int)</span></span>
<span class="line"><span>	dfs = func(i, j int) {</span></span>
<span class="line"><span>		grid[i][j] = 0</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 1 {</span></span>
<span class="line"><span>				dfs(x, y)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>		for _, i := range [2]int{0, m - 1} {</span></span>
<span class="line"><span>			if grid[i][j] == 1 {</span></span>
<span class="line"><span>				dfs(i, j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for _, j := range [2]int{0, n - 1} {</span></span>
<span class="line"><span>			if grid[i][j] == 1 {</span></span>
<span class="line"><span>				dfs(i, j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, row := range grid {</span></span>
<span class="line"><span>		for _, x := range row {</span></span>
<span class="line"><span>			ans += x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一已经用显式栈从边界淹没陆地。连通性不依赖搜索顺序，也可以把边界陆地放入队列按层扩展。</p>
<p>队列弹出后同样把四个方向上的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 标成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。四条边界处理完后，剩下的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 仍是飞地。</p>
</blockquote>
<p>我们也可以使用广度优先搜索的方法，将边界上的陆地入队，然后进行广度优先搜索，将所有与边界相连的陆地都标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。最后，统计剩余的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数，即为答案。</p>
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
</math></span> 分别为矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numEnclaves(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	q := [][2]int{}</span></span>
<span class="line"><span>	for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>		for _, i := range []int{0, m - 1} {</span></span>
<span class="line"><span>			if grid[i][j] == 1 {</span></span>
<span class="line"><span>				q = append(q, [2]int{i, j})</span></span>
<span class="line"><span>				grid[i][j] = 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for _, j := range []int{0, n - 1} {</span></span>
<span class="line"><span>			if grid[i][j] == 1 {</span></span>
<span class="line"><span>				q = append(q, [2]int{i, j})</span></span>
<span class="line"><span>				grid[i][j] = 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		i, j := q[0][0], q[0][1]</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>			x, y := i+dirs[k], j+dirs[k+1]</span></span>
<span class="line"><span>			if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 1 {</span></span>
<span class="line"><span>				q = append(q, [2]int{x, y})</span></span>
<span class="line"><span>				grid[x][y] = 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, row := range grid {</span></span>
<span class="line"><span>		for _, x := range row {</span></span>
<span class="line"><span>			ans += x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>飞地是到不了边界的陆地。对每一块陆地单独判断能否离岛，会在同一张图上反复搜索。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span>，补集是「与边界连通的陆地」。</p>
<p>从边界上的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 递归淹没时，一条贴着边界蜿蜒的陆地链会长到上千格，调用栈会先被用尽。</p>
<p>淹没只要求把能走到的格子标成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，不依赖递归返回值。</p>
<p>因此用显式栈保存待淹没的格子。弹出后把四个方向上仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的邻居标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 并入栈。四条边界都处理完后，网格里剩下的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 就是飞地。</p>
</blockquote>
<p>从四条边界上的陆地出发，用显式栈淹没所有能走到的陆地，将其标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。最后统计网格中剩余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数。</p>
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
</math></span> 分别为矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numEnclaves(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	flood := func(i, j int) {</span></span>
<span class="line"><span>		grid[i][j] = 0</span></span>
<span class="line"><span>		stk := [][2]int{{i, j}}</span></span>
<span class="line"><span>		for len(stk) > 0 {</span></span>
<span class="line"><span>			cur := stk[len(stk)-1]</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>				x, y := cur[0]+dirs[k], cur[1]+dirs[k+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 1 {</span></span>
<span class="line"><span>					grid[x][y] = 0</span></span>
<span class="line"><span>					stk = append(stk, [2]int{x, y})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>		for _, i := range [2]int{0, m - 1} {</span></span>
<span class="line"><span>			if grid[i][j] == 1 {</span></span>
<span class="line"><span>				flood(i, j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for _, j := range [2]int{0, n - 1} {</span></span>
<span class="line"><span>			if grid[i][j] == 1 {</span></span>
<span class="line"><span>				flood(i, j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, row := range grid {</span></span>
<span class="line"><span>		for _, x := range row {</span></span>
<span class="line"><span>			ans += x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-enclaves" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1020.Number%20of%20Enclaves/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1061" tabindex="-1">1061. 按字典序排列最小的等效字符串 <a class="header-anchor" href="#q-1061" aria-label="Permalink to &quot;1061. 按字典序排列最小的等效字符串 {#q-1061}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：并查集、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出长度相同的两个字符串<code>s1</code> 和 <code>s2</code> ，还有一个字符串 <code>baseStr</code> 。</p>&#10;&#10;<p>其中  <code>s1[i]</code> 和 <code>s2[i]</code>  是一组等价字符。</p>&#10;&#10;<ul>&#10;	<li>举个例子，如果 <code>s1 = &quot;abc&quot;</code> 且 <code>s2 = &quot;cde&quot;</code>，那么就有 <code>'a' == 'c', 'b' == 'd', 'c' == 'e'</code>。</li>&#10;</ul>&#10;&#10;<p>等价字符遵循任何等价关系的一般规则：</p>&#10;&#10;<ul>&#10;	<li><strong> 自反性 </strong>：<code>'a' == 'a'</code></li>&#10;	<li> <strong>对称性 </strong>：<code>'a' == 'b'</code> 则必定有 <code>'b' == 'a'</code></li>&#10;	<li> <strong>传递性</strong> ：<code>'a' == 'b'</code> 且 <code>'b' == 'c'</code> 就表明 <code>'a' == 'c'</code></li>&#10;</ul>&#10;&#10;<p>例如， <code>s1 = &quot;abc&quot;</code> 和 <code>s2 = &quot;cde&quot;</code> 的等价信息和之前的例子一样，那么 <code>baseStr = &quot;eed&quot;</code> , <code>&quot;acd&quot;</code> 或 <code>&quot;aab&quot;</code>，这三个字符串都是等价的，而 <code>&quot;aab&quot;</code> 是 <code>baseStr</code> 的按字典序最小的等价字符串</p>&#10;&#10;<p>利用<em> </em><code>s1</code> 和 <code>s2</code> 的等价信息，找出并返回<em> </em><code>baseStr</code><em> </em>的按字典序排列最小的等价字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s1 = &quot;parker&quot;, s2 = &quot;morris&quot;, baseStr = &quot;parser&quot;&#10;<strong>输出：</strong>&quot;makkek&quot;&#10;<strong>解释：</strong>根据 <code>A</code> 和 <code>B</code> 中的等价信息，我们可以将这些字符分为 <code>[m,p]</code>, <code>[a,o]</code>, <code>[k,r,s]</code>, <code>[e,i]</code> 共 4 组。每组中的字符都是等价的，并按字典序排列。所以答案是 <code>&quot;makkek&quot;</code>。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s1 = &quot;hello&quot;, s2 = &quot;world&quot;, baseStr = &quot;hold&quot;&#10;<strong>输出：</strong>&quot;hdld&quot;&#10;<strong>解释：</strong>根据 <code>A</code> 和 <code>B</code> 中的等价信息，我们可以将这些字符分为 <code>[h,w]</code>, <code>[d,e,o]</code>, <code>[l,r]</code> 共 3 组。所以只有 S 中的第二个字符 <code>'o'</code> 变成 <code>'d'</code>，最后答案为 <code>&quot;hdld&quot;</code>。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s1 = &quot;leetcode&quot;, s2 = &quot;programs&quot;, baseStr = &quot;sourcecode&quot;&#10;<strong>输出：</strong>&quot;aauaaaaada&quot;&#10;<strong>解释：</strong>我们可以把 <code>A</code> 和 <code>B</code> 中的等价字符分为 <code>[a,o,e,r,s,c]</code>, <code>[l,p]</code>, <code>[g,t]</code> 和 <code>[d,m]</code> 共 4 组，因此 <code>S</code> 中除了 <code>'u'</code> 和 <code>'d'</code> 之外的所有字母都转化成了 <code>'a'</code>，最后答案为 <code>&quot;aauaaaaada&quot;</code>。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s1.length, s2.length, baseStr &lt;= 1000</code></li>&#10;	<li><code>s1.length == s2.length</code></li>&#10;	<li>字符串<code>s1</code>, <code>s2</code>, and <code>baseStr</code> 仅由从 <code>'a'</code> 到 <code>'z'</code> 的小写英文字母组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>等价关系可传递，要把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mi>S</mi>
  <mi>t</mi>
  <mi>r</mi>
</math></span> 每个字符换成其所在等价类的最小字母。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 个字母用并查集维护连通分量即可。</p>
<p>合并 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，总是把较大的根挂到较小的根上，使代表元即字典序最小字符。</p>
<p>最后对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mi>S</mi>
  <mi>t</mi>
  <mi>r</mi>
</math></span> 每个字符输出其根对应的字母。</p>
</blockquote>
<p>我们可以使用并查集来处理等价字符的关系。每个字符可以看作一个节点，等价关系可以看作是连接这些节点的边。通过并查集，我们可以将所有等价的字符归为一类，并且在查询时能够快速找到每个字符的代表元素。我们在进行合并操作时，始终将代表元素设置为字典序最小的字符，这样可以确保最终得到的字符串是按字典序排列的最小等价字符串。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mn>2</mn>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mi>S</mi>
  <mi>t</mi>
  <mi>r</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 是字符集的大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestEquivalentString(s1 string, s2 string, baseStr string) string {</span></span>
<span class="line"><span>	p := make([]int, 26)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 26; i++ {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var find func(int) int</span></span>
<span class="line"><span>	find = func(x int) int {</span></span>
<span class="line"><span>		if p[x] != x {</span></span>
<span class="line"><span>			p[x] = find(p[x])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return p[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(s1); i++ {</span></span>
<span class="line"><span>		x := int(s1[i] - 'a')</span></span>
<span class="line"><span>		y := int(s2[i] - 'a')</span></span>
<span class="line"><span>		px := find(x)</span></span>
<span class="line"><span>		py := find(y)</span></span>
<span class="line"><span>		if px &#x3C; py {</span></span>
<span class="line"><span>			p[py] = px</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			p[px] = py</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var s []byte</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(baseStr); i++ {</span></span>
<span class="line"><span>		s = append(s, byte('a'+find(int(baseStr[i]-'a'))))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return string(s)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/lexicographically-smallest-equivalent-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1061.Lexicographically%20Smallest%20Equivalent%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const g=s(e,[["render",l]]);export{d as __pageData,g as default};
