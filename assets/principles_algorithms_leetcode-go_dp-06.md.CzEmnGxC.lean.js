import{_ as t,a,c as s,b as m}from"./chunks/framework.BSuaGltH.js";const w=JSON.parse('{"title":"LeetCode Go · 动态规划（6）","description":"动态规划分类，第 975–1162 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 动态规划（6）","description":"动态规划分类，第 975–1162 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"动态规划分类，第 975–1162 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 动态规划（5）","link":"/principles/algorithms/leetcode-go/dp-05"},"next":{"text":"LeetCode Go · 动态规划（7）","link":"/principles/algorithms/leetcode-go/dp-07"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 动态规划（5）","link":"/principles/algorithms/leetcode-go/dp-05"},"next":{"text":"LeetCode Go · 动态规划（7）","link":"/principles/algorithms/leetcode-go/dp-07"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/dp-06.md","filePath":"principles/algorithms/leetcode-go/dp-06.md"}'),e={name:"principles/algorithms/leetcode-go/dp-06.md"};function o(i,n,l,p,h,c){return a(),s("div",null,[...n[0]||(n[0]=[m("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-动态规划-6" tabindex="-1">LeetCode Go · 动态规划（6） <a class="header-anchor" href="#leetcode-go-·-动态规划-6" aria-label="Permalink to &quot;LeetCode Go · 动态规划（6）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-975" tabindex="-1">975. 奇偶跳 <a class="header-anchor" href="#q-975" aria-label="Permalink to &quot;975. 奇偶跳 {#q-975}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、数组、动态规划、有序集合、排序、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>arr</code>，你可以从某一起始索引出发，跳跃一定次数。在你跳跃的过程中，第 1、3、5... 次跳跃称为奇数跳跃，而第 2、4、6... 次跳跃称为偶数跳跃。</p>&#10;&#10;<p>你可以按以下方式从索引 <code>i</code> 向后跳转到索引 <code>j</code>（其中 <code>i &lt; j</code>）：</p>&#10;&#10;<ul>&#10;	<li>在进行奇数跳跃时（如，第 1，3，5... 次跳跃），你将会跳到索引 <code>j</code>，使得 <code>arr[i] &lt;= arr[j]</code>，且 <code>arr[j]</code> 的值尽可能小。如果存在多个这样的索引 <code>j</code>，你只能跳到满足要求的<strong>最小</strong>索引 <code>j</code> 上。</li>&#10;	<li>在进行偶数跳跃时（如，第 2，4，6... 次跳跃），你将会跳到索引 <code>j</code>，使得 <code>arr[i] >= arr[j]</code>，且 <code>arr[j]</code> 的值尽可能大。如果存在多个这样的索引 <code>j</code>，你只能跳到满足要求的<strong>最小</strong>索引 <code>j</code> 上。</li>&#10;	<li>（对于某些索引 <code>i</code>，可能无法进行合乎要求的跳跃。）</li>&#10;</ul>&#10;&#10;<p>如果从某一索引开始跳跃一定次数（可能是 0 次或多次），就可以到达数组的末尾（索引 <code>arr.length - 1</code>），那么该索引就会被认为是好的起始索引。</p>&#10;&#10;<p>返回好的起始索引的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[10,13,12,14,15]&#10;<strong>输出：</strong>2&#10;<strong>解释： </strong>&#10;从起始索引 i = 0 出发，我们可以跳到 i = 2，（因为 arr[2] 是 arr[1]，arr[2]，arr[3]，arr[4] 中大于或等于 arr[0] 的最小值），然后我们就无法继续跳下去了。&#10;从起始索引 i = 1 和 i = 2 出发，我们可以跳到 i = 3，然后我们就无法继续跳下去了。&#10;从起始索引 i = 3 出发，我们可以跳到 i = 4，到达数组末尾。&#10;从起始索引 i = 4 出发，我们已经到达数组末尾。&#10;总之，我们可以从 2 个不同的起始索引（i = 3, i = 4）出发，通过一定数量的跳跃到达数组末尾。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[2,3,1,1,4]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;从起始索引 i=0 出发，我们依次可以跳到 i = 1，i = 2，i = 3：&#10;&#10;在我们的第一次跳跃（奇数）中，我们先跳到 i = 1，因为 arr[1] 是（arr[1]，arr[2]，arr[3]，arr[4]）中大于或等于 arr[0] 的最小值。&#10;&#10;在我们的第二次跳跃（偶数）中，我们从 i = 1 跳到 i = 2，因为 arr[2] 是（arr[2]，arr[3]，arr[4]）中小于或等于 arr[1] 的最大值。arr[3] 也是最大的值，但 2 是一个较小的索引，所以我们只能跳到 i = 2，而不能跳到 i = 3。&#10;&#10;在我们的第三次跳跃（奇数）中，我们从 i = 2 跳到 i = 3，因为 arr[3] 是（arr[3]，arr[4]）中大于或等于 arr[2] 的最小值。&#10;&#10;我们不能从 i = 3 跳到 i = 4，所以起始索引 i = 0 不是好的起始索引。&#10;&#10;类似地，我们可以推断：&#10;从起始索引 i = 1 出发， 我们跳到 i = 4，这样我们就到达数组末尾。&#10;从起始索引 i = 2 出发， 我们跳到 i = 3，然后我们就不能再跳了。&#10;从起始索引 i = 3 出发， 我们跳到 i = 4，这样我们就到达数组末尾。&#10;从起始索引 i = 4 出发，我们已经到达数组末尾。&#10;总之，我们可以从 3 个不同的起始索引（i = 1, i = 3, i = 4）出发，通过一定数量的跳跃到达数组末尾。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[5,1,3,4,2]&#10;<strong>输出：</strong>3&#10;<strong>解释： </strong>&#10;我们可以从起始索引 1，2，4 出发到达数组末尾。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li><code>1 &lt;= arr.length &lt;= 20000</code></li>&#10;	<li><code>0 &lt;= arr[i] &lt; 100000</code></li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：有序集合 + 记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>奇数跳去右侧不小于当前值的最小者，偶数跳去不大于当前值的最大者，问有多少起点能到终点。从每个位置模拟跳跃会重复经过同一状态。从右往左用有序集合记下已出现的值与下标，即可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 求出下一步 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。能否到达只取决于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext>&#x5947;&#x5076;</mtext>
  <mo stretchy="false">)</mo>
</math></span>，记忆化搜索即可。</p>
</blockquote>
<p>我们先利用有序集合，预处理出每个位置能跳到的位置，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 中，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 分别表示当前位置是奇数次跳还是偶数次跳时能跳到的位置。如果不能跳到任何位置，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>然后利用记忆化搜索，从每个位置出发，且当前是奇数次跳跃，判断是否能跳到数组末尾，如果能，那么结果加一。</p>
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
</math></span> 为数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func oddEvenJumps(arr []int) (ans int) {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	rbt := redblacktree.NewWithIntComparator()</span></span>
<span class="line"><span>	f := make([][2]int, n)</span></span>
<span class="line"><span>	g := make([][2]int, n)</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		if v, ok := rbt.Ceiling(arr[i]); ok {</span></span>
<span class="line"><span>			g[i][1] = v.Value.(int)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			g[i][1] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v, ok := rbt.Floor(arr[i]); ok {</span></span>
<span class="line"><span>			g[i][0] = v.Value.(int)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			g[i][0] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		rbt.Put(arr[i], i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(int, int) int</span></span>
<span class="line"><span>	dfs = func(i, k int) int {</span></span>
<span class="line"><span>		if i == n-1 {</span></span>
<span class="line"><span>			return 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if g[i][k] == -1 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][k] != 0 {</span></span>
<span class="line"><span>			return f[i][k]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i][k] = dfs(g[i][k], k^1)</span></span>
<span class="line"><span>		return f[i][k]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if dfs(i, 1) == 1 {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：有序集合 + 动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>奇数跳去右侧不小于当前值的最小者，偶数跳去不大于当前值的最大者，问有多少起点能到终点。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可以到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。全部元素相等时，每一步都落到紧邻的下一个下标，调用链长度就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，会超出默认递归上限。</p>
<p>从右往左扫描时，有序集合里只有更靠右的下标，所以下一步 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 要么是更大的下标，要么是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>能否到达只取决于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext>&#x5947;&#x5076;</mtext>
  <mo stretchy="false">)</mo>
</math></span>，并且只依赖更靠右的位置。令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 出发、下一次按奇偶 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 跳能否到终点。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的两格都为真， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span> 递减到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，有后继就把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 设成后继上相反奇偶的结果。起点统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们先利用有序集合，预处理出每个位置能跳到的位置，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 中，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 分别表示当前位置是奇数次跳还是偶数次跳时能跳到的位置。如果不能跳到任何位置，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。因为集合里只保存更靠右的下标，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 要么为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，要么严格大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 出发、下一次跳跃的奇偶为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时能否到达数组末尾。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 都为真。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span> 递减到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2260;</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>&#x2295;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 为假。右侧状态在填写时已经确定。</p>
<p>统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 为真的下标个数，即为答案。</p>
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
</math></span> 为数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func oddEvenJumps(arr []int) (ans int) {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	rbt := redblacktree.NewWithIntComparator()</span></span>
<span class="line"><span>	g := make([][2]int, n)</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		if v, ok := rbt.Ceiling(arr[i]); ok {</span></span>
<span class="line"><span>			g[i][1] = v.Value.(int)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			g[i][1] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v, ok := rbt.Floor(arr[i]); ok {</span></span>
<span class="line"><span>			g[i][0] = v.Value.(int)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			g[i][0] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		rbt.Put(arr[i], i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([][2]bool, n)</span></span>
<span class="line"><span>	f[n-1][0], f[n-1][1] = true, true</span></span>
<span class="line"><span>	for i := n - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 2; k++ {</span></span>
<span class="line"><span>			j := g[i][k]</span></span>
<span class="line"><span>			if j != -1 {</span></span>
<span class="line"><span>				f[i][k] = f[j][k^1]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if f[i][1] {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/odd-even-jump" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0975.Odd%20Even%20Jump/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-978" tabindex="-1">978. 最长湍流子数组 <a class="header-anchor" href="#q-978" aria-label="Permalink to &quot;978. 最长湍流子数组 {#q-978}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>arr</code> ，返回 <code>arr</code> 的 <em>最大湍流子数组的<strong>长度</strong></em><strong> </strong>。</p>&#10;&#10;<p>如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是 <strong>湍流子数组</strong> 。</p>&#10;&#10;<p>更正式地来说，当 <code>arr</code> 的子数组 <code>A[i], A[i+1], ..., A[j]</code> 满足仅满足下列条件时，我们称其为<em>湍流子数组</em>：</p>&#10;&#10;<ul>&#10;	<li>若 <code>i &lt;= k &lt; j</code> ：&#10;&#10;    <ul>&#10;    	<li>当 <code>k</code> 为奇数时， <code>A[k] > A[k+1]</code>，且</li>&#10;    	<li>当 <code>k</code> 为偶数时，<code>A[k] &lt; A[k+1]</code>；</li>&#10;    </ul>&#10;    </li>&#10;    <li><strong>或 </strong>若 <code>i &lt;= k &lt; j</code> ：&#10;    <ul>&#10;    	<li>当 <code>k</code> 为偶数时，<code>A[k] > A[k+1]</code> ，且</li>&#10;    	<li>当 <code>k</code> 为奇数时， <code>A[k] &lt; A[k+1]</code>。</li>&#10;    </ul>&#10;    </li>&#10;&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [9,4,2,10,7,8,8,1,9]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>arr[1] > arr[2] &lt; arr[3] > arr[4] &lt; arr[5]</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [4,8,12,16]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [100]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 4 * 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>湍流要求相邻比较符号严格交替。枚举子数组再检查为平方级。以位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾时只需区分“最后一步上升 / 下降”两种长度，与前一位置的相反状态衔接，相等则重置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。两个变量滚动即可。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾且结尾处于上升状态的最长湍流子数组的长度，定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾且结尾处于下降状态的最长湍流子数组的长度。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</p>
<p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 只与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 有关，因此可以使用两个变量代替数组。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxTurbulenceSize(arr []int) int {</span></span>
<span class="line"><span>	ans, f, g := 1, 1, 1</span></span>
<span class="line"><span>	for i, x := range arr[1:] {</span></span>
<span class="line"><span>		ff, gg := 1, 1</span></span>
<span class="line"><span>		if arr[i] &#x3C; x {</span></span>
<span class="line"><span>			ff = g + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if arr[i] > x {</span></span>
<span class="line"><span>			gg = f + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f, g = ff, gg</span></span>
<span class="line"><span>		ans = max(ans, max(f, g))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-turbulent-subarray" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0978.Longest%20Turbulent%20Subarray/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-983" tabindex="-1">983. 最低票价 <a class="header-anchor" href="#q-983" aria-label="Permalink to &quot;983. 最低票价 {#q-983}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在一个火车旅行很受欢迎的国度，你提前一年计划了一些火车旅行。在接下来的一年里，你要旅行的日子将以一个名为 <code>days</code> 的数组给出。每一项是一个从 <code>1</code> 到 <code>365</code> 的整数。</p>&#10;&#10;<p>火车票有 <strong>三种不同的销售方式</strong> ：</p>&#10;&#10;<ul>&#10;	<li>一张 <strong>为期一天</strong> 的通行证售价为 <code>costs[0]</code> 美元；</li>&#10;	<li>一张 <strong>为期七天</strong> 的通行证售价为 <code>costs[1]</code> 美元；</li>&#10;	<li>一张 <strong>为期三十天</strong> 的通行证售价为 <code>costs[2]</code> 美元。</li>&#10;</ul>&#10;&#10;<p>通行证允许数天无限制的旅行。 例如，如果我们在第 <code>2</code> 天获得一张 <strong>为期 7 天</strong> 的通行证，那么我们可以连着旅行 7 天：第 <code>2</code> 天、第 <code>3</code> 天、第 <code>4</code> 天、第 <code>5</code> 天、第 <code>6</code> 天、第 <code>7</code> 天和第 <code>8</code> 天。</p>&#10;&#10;<p>返回 <em>你想要完成在给定的列表 <code>days</code> 中列出的每一天的旅行所需要的最低消费 </em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>days = [1,4,6,7,8,20], costs = [2,7,15]&#10;<strong>输出：</strong>11&#10;<strong>解释： </strong>&#10;例如，这里有一种购买通行证的方法，可以让你完成你的旅行计划：&#10;在第 1 天，你花了 costs[0] = $2 买了一张为期 1 天的通行证，它将在第 1 天生效。&#10;在第 3 天，你花了 costs[1] = $7 买了一张为期 7 天的通行证，它将在第 3, 4, ..., 9 天生效。&#10;在第 20 天，你花了 costs[0] = $2 买了一张为期 1 天的通行证，它将在第 20 天生效。&#10;你总共花了 $11，并完成了你计划的每一天旅行。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]&#10;<strong>输出：</strong>17&#10;<strong>解释：&#10;</strong>例如，这里有一种购买通行证的方法，可以让你完成你的旅行计划： &#10;在第 1 天，你花了 costs[2] = $15 买了一张为期 30 天的通行证，它将在第 1, 2, ..., 30 天生效。&#10;在第 31 天，你花了 costs[0] = $2 买了一张为期 1 天的通行证，它将在第 31 天生效。 &#10;你总共花了 $17，并完成了你计划的每一天旅行。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= days.length &lt;= 365</code></li>&#10;	<li><code>1 &lt;= days[i] &lt;= 365</code></li>&#10;	<li><code>days</code> 按顺序严格递增</li>&#10;	<li><code>costs.length == 3</code></li>&#10;	<li><code>1 &lt;= costs[i] &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>出行日必须被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>7</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>30</mn>
</math></span> 日票覆盖，求最少花费。在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 次出行买哪种票，下一次未覆盖的出行可用二分定位。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 对三种票取最小，出行次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>365</mn>
</math></span>，记忆化即可。</p>
</blockquote>
<p>我们定义一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(i)</mtext>
</math></span>，表示从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 次出行开始到最后一次出行结束所需的最小花费。那么答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(0)</mtext>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(i)</mtext>
</math></span> 的执行过程如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>n</mi>
</math></span>，表示所有出行已经结束，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>否则，我们需要考虑三种购买方式，分别是购买 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 天通行证、购买 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 天通行证和购买 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>30</mn>
</math></span> 天通行证。我们分别计算这三种购买方式的花费，并且利用二分查找，找到下一次出行的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，然后递归调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(j)</mtext>
</math></span>，最后返回这三种购买方式的最小花费。</li>
</ul>
<p>为了避免重复计算，我们使用记忆化搜索，将已经计算过的结果保存起来。</p>
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
</math></span> 表示出行的次数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mincostTickets(days []int, costs []int) int {</span></span>
<span class="line"><span>	valid := [3]int{1, 7, 30}</span></span>
<span class="line"><span>	n := len(days)</span></span>
<span class="line"><span>	f := make([]int, n)</span></span>
<span class="line"><span>	var dfs func(int) int</span></span>
<span class="line"><span>	dfs = func(i int) int {</span></span>
<span class="line"><span>		if i >= n {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i] > 0 {</span></span>
<span class="line"><span>			return f[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>		for k := 0; k &#x3C; 3; k++ {</span></span>
<span class="line"><span>			j := sort.SearchInts(days, days[i]+valid[k])</span></span>
<span class="line"><span>			f[i] = min(f[i], dfs(j)+costs[k])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return f[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按出行下标搜索需要二分。也可按日历日递推： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 天的最少花费，非出行日等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，出行日则在三种票的起点取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
</math></span>。日期上界为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>365</mn>
</math></span>。</p>
</blockquote>
<p>我们不妨记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">days</mtext>
</math></span> 数组中的最后一天为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，那么我们可以定义一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 天到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 天的最小花费。</p>
<p>我们可以按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">days</mtext>
</math></span> 数组中的日期递增的顺序，从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 天开始，依次计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值。如果第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 天是出行的日期，那么我们可以考虑三种购买方式，分别是购买 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 天通行证、购买 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 天通行证和购买 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>30</mn>
</math></span> 天通行证。我们分别计算这三种购买方式的花费，并且取这三种购买方式的最小花费作为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值。如果第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 天不是出行的日期，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>最终答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 表示出行的最后一天。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mincostTickets(days []int, costs []int) int {</span></span>
<span class="line"><span>	m := days[len(days)-1]</span></span>
<span class="line"><span>	f := make([]int, m+1)</span></span>
<span class="line"><span>	valid := [3]int{1, 7, 30}</span></span>
<span class="line"><span>	for i, j := 1, 0; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		if i == days[j] {</span></span>
<span class="line"><span>			f[i] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>			for k, v := range valid {</span></span>
<span class="line"><span>				c := costs[k]</span></span>
<span class="line"><span>				f[i] = min(f[i], f[max(0, i-v)]+c)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			f[i] = f[i-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[m]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-cost-for-tickets" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0983.Minimum%20Cost%20For%20Tickets/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-996" tabindex="-1">996. 平方数组的数目 <a class="header-anchor" href="#q-996" aria-label="Permalink to &quot;996. 平方数组的数目 {#q-996}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、哈希表、数学、动态规划、回溯、位掩码</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果一个数组的任意两个相邻元素之和都是 <strong>完全平方数 </strong>，则该数组称为 <strong>平方数组 </strong>。</p>&#10;&#10;<p>给定一个整数数组 <code>nums</code>，返回所有属于 <strong>平方数组 </strong>的 <code>nums</code> 的排列数量。</p>&#10;&#10;<p>如果存在某个索引 <code>i</code> 使得 <code>perm1[i] != perm2[i]</code>，则认为两个排列 <code>perm1</code> 和 <code>perm2</code> 不同。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,17,8]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>[1,8,17] 和 [17,8,1] 是有效的排列。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,2,2]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 12</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二进制状态压缩 + 动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排列使每对相邻和为完全平方。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>12</mn>
</math></span>，可用子集 DP。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>S</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示用完集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>S</mi>
</math></span>、止于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的方案；仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 为平方时从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 转移。相同数字会被不同下标重复计数，最后除以各值频数的阶乘。</p>
</blockquote>
<p>注意到，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>12</mn>
</math></span>，因此我们可以用一个二进制数表示当前所选的数字的状态，若第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则表示当前选择了第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数字，否则表示当前没有选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数字。</p>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示当前所选的数字的状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，且最后一个数字为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的方案数。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。由于最后求解的是排列数，因此还需要除以每个数字出现的次数的阶乘。</p>
<p>接下来，我们考虑如何进行状态转移。</p>
<p>假设当前所选的数字的状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，最后一个数字为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的每一位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数字作为倒数第二个数，不妨设为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么我们只需要判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 是否为完全平方数即可，若是，方案数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 就可以加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
</math></span> 表示将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 位取反，即表示将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 从当前所选的数字中去除。</p>
<p>最后，我们还需要除以每个数字出现的次数的阶乘，因为我们在枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的每一位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数字时，可能会重复计算某些排列，因此需要除以每个数字出现的次数的阶乘。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
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
  <mi>&#xFF0C;</mi>
  <mi mathvariant="normal">&#x7A7A;</mi>
  <mi mathvariant="normal">&#x95F4;</mi>
  <mi mathvariant="normal">&#x590D;</mi>
  <mi mathvariant="normal">&#x6742;</mi>
  <mi mathvariant="normal">&#x5EA6;</mi>
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numSquarefulPerms(nums []int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	f := make([][]int, 1&#x3C;&#x3C;n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := range nums {</span></span>
<span class="line"><span>		f[1&#x3C;&#x3C;j][j] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 1&#x3C;&#x3C;n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if i>>j&#x26;1 == 1 {</span></span>
<span class="line"><span>				for k := 0; k &#x3C; n; k++ {</span></span>
<span class="line"><span>					if i>>k&#x26;1 == 1 &#x26;&#x26; k != j {</span></span>
<span class="line"><span>						s := nums[j] + nums[k]</span></span>
<span class="line"><span>						t := int(math.Sqrt(float64(s)))</span></span>
<span class="line"><span>						if t*t == s {</span></span>
<span class="line"><span>							f[i][j] += f[i^(1&#x3C;&#x3C;j)][k]</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>		ans += f[(1&#x3C;&#x3C;n)-1][j]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	g := [13]int{1}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; 13; i++ {</span></span>
<span class="line"><span>		g[i] = g[i-1] * i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, v := range cnt {</span></span>
<span class="line"><span>		ans /= g[v]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-squareful-arrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0996.Number%20of%20Squareful%20Arrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1000" tabindex="-1">1000. 合并石头的最低成本 <a class="header-anchor" href="#q-1000" aria-label="Permalink to &quot;1000. 合并石头的最低成本 {#q-1000}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有 <code>n</code> 堆石头排成一排，第 <code>i</code> 堆中有 <code>stones[i]</code> 块石头。</p>&#10;&#10;<p>每次 <strong>移动</strong> 需要将 <strong>连续的</strong> <code>k</code> 堆石头合并为一堆，而这次移动的成本为这 <code>k</code> 堆中石头的总数。</p>&#10;&#10;<p>返回把所有石头合并成一堆的最低成本。如果无法合并成一堆，返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [3,2,4,1], K = 2&#10;<strong>输出：</strong>20&#10;<strong>解释：</strong>&#10;从 [3, 2, 4, 1] 开始。&#10;合并 [3, 2]，成本为 5，剩下 [5, 4, 1]。&#10;合并 [4, 1]，成本为 5，剩下 [5, 5]。&#10;合并 [5, 5]，成本为 10，剩下 [10]。&#10;总成本 20，这是可能的最小值。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [3,2,4,1], K = 3&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>任何合并操作后，都会剩下 2 堆，我们无法再进行合并。所以这项任务是不可能完成的。.&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [3,5,1,2,6], K = 3&#10;<strong>输出：</strong>25&#10;<strong>解释：</strong>&#10;从 [3, 5, 1, 2, 6] 开始。&#10;合并 [5, 1, 2]，成本为 8，剩下 [3, 8, 6]。&#10;合并 [3, 8, 6]，成本为 17，剩下 [17]。&#10;总成本 25，这是可能的最小值。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == stones.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 30</code></li>&#10;	<li><code>1 &lt;= stones[i] &lt;= 100</code></li>&#10;	<li><code>2 &lt;= k &lt;= 30</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划（区间 DP）+ 前缀和 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举所有合并顺序可以给出答案，但 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>30</mn>
</math></span> 时合法划分的数量随区间长度迅速增长，无法在时限内穷尽。任意一次操作只作用于连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>K</mi>
</math></span> 堆，因此真正决定代价的是「某一段最终并成若干堆」这一子问题，而同一区间会被许多顺序重复计算。</p>
<p>注意到每次把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>K</mi>
</math></span> 堆合成一堆，堆数减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>K</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，故仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mo stretchy="false">(</mo>
  <mi>K</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 时才能并成一堆，否则直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。可行时，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 堆，等价于先把某一前缀并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 堆、后缀并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 堆；若要并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 堆，则须先得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>K</mi>
</math></span> 堆再付出该区间石子总和。</p>
<p>为此按区间长度递推 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，并用前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 内取出区间和。枚举断点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 时只取左段的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，与「一次只能合并连续堆」的约束一致，最终答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们不妨记题目中的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>K</mi>
</math></span>，石头的堆数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示将区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的石头合并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 堆的最小成本。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，其他位置的值均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>。</p>
<p>注意到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的取值范围为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>K</mi>
  <mo stretchy="false">]</mo>
</math></span>，因此我们需要枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的值。</p>
<p>对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mi>h</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，将区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 拆分成两个区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的石头合并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 堆，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的石头合并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 堆，最后将这两堆石头合并成一堆，这样就可以将区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的石头合并成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 堆。因此，我们可以得到状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <munder>
    <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2264;</mo>
      <mi>h</mi>
      <mo>&lt;</mo>
      <mi>j</mi>
    </mrow>
  </munder>
  <mo fence="false" stretchy="false">{</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo fence="false" stretchy="false">}</mo>
</math></span><p>我们将区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>K</mi>
</math></span> 堆石头合并成一堆，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>K</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>t</mi>
      <mo>=</mo>
      <mi>i</mi>
    </mrow>
    <mi>j</mi>
  </munderover>
  <mi>s</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>t</mi>
      <mo>=</mo>
      <mi>i</mi>
    </mrow>
    <mi>j</mi>
  </munderover>
  <mi>s</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中石头的总数。</p>
<p>最后答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为石头的堆数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为石头的堆数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mergeStones(stones []int, K int) int {</span></span>
<span class="line"><span>	n := len(stones)</span></span>
<span class="line"><span>	if (n-1)%(K-1) != 0 {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, x := range stones {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([][][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([][]int, n+1)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = make([]int, K+1)</span></span>
<span class="line"><span>			for k := range f[i][j] {</span></span>
<span class="line"><span>				f[i][j][k] = 1 &#x3C;&#x3C; 20</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		f[i][i][1] = 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for l := 2; l &#x3C;= n; l++ {</span></span>
<span class="line"><span>		for i := 1; i &#x3C;= n-l+1; i++ {</span></span>
<span class="line"><span>			j := i + l - 1</span></span>
<span class="line"><span>			for k := 2; k &#x3C;= K; k++ {</span></span>
<span class="line"><span>				for h := i; h &#x3C; j; h++ {</span></span>
<span class="line"><span>					f[i][j][k] = min(f[i][j][k], f[i][h][k-1]+f[h+1][j][1])</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			f[i][j][1] = f[i][j][K] + s[j] - s[i-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[1][n][1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-cost-to-merge-stones" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1000.Minimum%20Cost%20to%20Merge%20Stones/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1012" tabindex="-1">1012. 至少有 1 位重复的数字 <a class="header-anchor" href="#q-1012" aria-label="Permalink to &quot;1012. 至少有 1 位重复的数字 {#q-1012}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定正整数 <code>n</code>，返回在<em> </em><code>[1, n]</code><em> </em>范围内具有 <strong>至少 1 位</strong> 重复数字的正整数的个数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 20&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>具有至少 1 位重复数字的正数（&lt;= 20）只有 11 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 100&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>具有至少 1 位重复数字的正数（&lt;= 100）有 11，22，33，44，55，66，77，88，99 和 100 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1000&#10;<strong>输出：</strong>262&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：状态压缩 + 数位 DP · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>直接枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 并检查是否有重复数位， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span> 不可行。改统计没有重复数位的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>数位逐位填写时，已用过的数字集合决定下一步还能选什么，前导零不应占用集合，且上界受 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的数位约束。集合大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span>，可用二进制掩码表示。</p>
<p>记忆化 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">mask</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">lead</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo stretchy="false">)</mo>
</math></span> 按第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位枚举合法数字：仍为前导零则掩码不变；否则仅当该位未出现过才继续。终点在非前导零时计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>题目要求统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 中至少有一位重复的数字的个数，我们可以换一种思路，用一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 中没有重复数字的个数，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>另外，我们可以用一个二进制数来记录数字中出现过的数字，比如数字中出现了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span>，那么对应的二进制数就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munder>
    <mn>1</mn>
    <mo accent="true">&#x2015;</mo>
  </munder>
  <mn>0</mn>
  <munder>
    <mn>1</mn>
    <mo accent="true">&#x2015;</mo>
  </munder>
  <munder>
    <mn>1</mn>
    <mo accent="true">&#x2015;</mo>
  </munder>
  <mn>0</mn>
</math></span>。</p>
<p>接下来，我们用记忆化搜索来实现数位 DP。从起点向下搜索，到最底层得到方案数，一层层向上返回答案并累加，最后从搜索起点得到最终的答案。</p>
<p>基本步骤如下：</p>
<p>我们将数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 转为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，接下来，我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">mask</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">lead</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo stretchy="false">)</mo>
</math></span>，其中：</p>
<ul>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 表示当前处理的数字下标，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始。</li>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 表示当前数字中出现过的数字，用二进制数表示。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 的二进制的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 表示数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 出现过，为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 表示数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 没有出现过。</li>
<li>布尔值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">lead</mtext>
</math></span> 表示是否只包含前导零。</li>
<li>布尔值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">limit</mtext>
</math></span> 表示当前位置是否受到上界的限制。</li>
</ul>
<p>函数的执行过程如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，说明我们已经处理完了所有的位数，此时如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">lead</mtext>
</math></span> 为真，说明当前的数字是前导零，我们应当返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；否则，我们应当返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>否则，我们计算当前位置的上界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">up</mtext>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">limit</mtext>
</math></span> 为真，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mi>p</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 对应的数字，否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mi>p</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>。</p>
<p>然后，我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">up</mtext>
  <mo stretchy="false">]</mo>
</math></span> 的范围内枚举当前位置的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">lead</mtext>
</math></span> 为真，我们递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">mask</mtext>
  <mo>,</mo>
  <mtext>true</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo>&#x2227;</mo>
  <mi>j</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">up</mtext>
  <mo stretchy="false">)</mo>
</math></span>；否则，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，我们递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">mask</mtext>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
  <mo>,</mo>
  <mtext>false</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo>&#x2227;</mo>
  <mi>j</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">up</mtext>
  <mo stretchy="false">)</mo>
</math></span>。累加所有的结果即为答案。</p>
<p>答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mtext>true</mtext>
  <mo>,</mo>
  <mtext>true</mtext>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mi>D</mi>
  </msup>
  <mo>&#xD7;</mo>
  <mi>D</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mi>D</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>D</mi>
  <mo>=</mo>
  <mn>10</mn>
</math></span>。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0233.Number%20of%20Digit%20One/README.md" target="_blank" rel="noopener noreferrer">233. 数字 1 的个数</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0357.Count%20Numbers%20with%20Unique%20Digits/README.md" target="_blank" rel="noopener noreferrer">357. 统计各位数字都不同的数字个数</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0600-0699/0600.Non-negative%20Integers%20without%20Consecutive%20Ones/README.md" target="_blank" rel="noopener noreferrer">600. 不含连续 1 的非负整数</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0700-0799/0788.Rotated%20Digits/README.md" target="_blank" rel="noopener noreferrer">788. 旋转数字</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0900-0999/0902.Numbers%20At%20Most%20N%20Given%20Digit%20Set/README.md" target="_blank" rel="noopener noreferrer">902. 最大为 N 的数字组合</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2300-2399/2376.Count%20Special%20Integers/README.md" target="_blank" rel="noopener noreferrer">2376. 统计特殊整数</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numDupDigitsAtMostN(n int) int {</span></span>
<span class="line"><span>	s := []byte(strconv.Itoa(n))</span></span>
<span class="line"><span>	m := len(s)</span></span>
<span class="line"><span>	f := make([][]int, m)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, 1&#x3C;&#x3C;10)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var dfs func(i, mask int, lead, limit bool) int</span></span>
<span class="line"><span>	dfs = func(i, mask int, lead, limit bool) int {</span></span>
<span class="line"><span>		if i >= m {</span></span>
<span class="line"><span>			if lead {</span></span>
<span class="line"><span>				return 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !lead &#x26;&#x26; !limit &#x26;&#x26; f[i][mask] != -1 {</span></span>
<span class="line"><span>			return f[i][mask]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		up := 9</span></span>
<span class="line"><span>		if limit {</span></span>
<span class="line"><span>			up = int(s[i] - '0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := 0</span></span>
<span class="line"><span>		for j := 0; j &#x3C;= up; j++ {</span></span>
<span class="line"><span>			if lead &#x26;&#x26; j == 0 {</span></span>
<span class="line"><span>				ans += dfs(i+1, mask, true, limit &#x26;&#x26; j == up)</span></span>
<span class="line"><span>			} else if mask>>j&#x26;1 == 0 {</span></span>
<span class="line"><span>				ans += dfs(i+1, mask|(1&#x3C;&#x3C;j), false, limit &#x26;&#x26; j == up)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !lead &#x26;&#x26; !limit {</span></span>
<span class="line"><span>			f[i][mask] = ans</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n - dfs(0, 0, true, true)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/numbers-with-repeated-digits" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1012.Numbers%20With%20Repeated%20Digits/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1014" tabindex="-1">1014. 最佳观光组合 <a class="header-anchor" href="#q-1014" aria-label="Permalink to &quot;1014. 最佳观光组合 {#q-1014}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数数组 <code>values</code>，其中 <code>values[i]</code> 表示第 <code>i</code> 个观光景点的评分，并且两个景点 <code>i</code> 和 <code>j</code> 之间的 <strong>距离</strong> 为 <code>j - i</code>。</p>&#10;&#10;<p>一对景点（<code>i &lt; j</code>）组成的观光组合的得分为 <code>values[i] + values[j] + i - j</code> ，也就是景点的评分之和<strong> 减去 </strong>它们两者之间的距离。</p>&#10;&#10;<p>返回一对观光景点能取得的最高分。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>values = [8,1,5,2,6]&#10;<strong>输出：</strong>11&#10;<strong>解释：</strong>i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>values = [1,2]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= values.length &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= values[i] &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span> 计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
</math></span> 为平方级。把式子拆成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 后，对固定的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 只需知道左侧 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>i</mi>
</math></span> 的最大值。</p>
<p>从左到右扫 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，用一个变量维护截至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>i</mi>
</math></span>，即可在常数时间得到当前位置的最优配对，再把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>j</mi>
</math></span> 纳入维护。</p>
<p>这样每个景点只作为右端点看一次、作为左端候选更新一次，线性即可。</p>
</blockquote>
<p>我们可以从左到右枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，同时维护 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 左侧元素中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>i</mi>
</math></span> 的最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，这样对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，最大得分为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>j</mi>
</math></span>。我们取所有位置的最大得分的最大值即为答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">values</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxScoreSightseeingPair(values []int) (ans int) {</span></span>
<span class="line"><span>	mx := 0</span></span>
<span class="line"><span>	for j, x := range values {</span></span>
<span class="line"><span>		ans = max(ans, mx+x-j)</span></span>
<span class="line"><span>		mx = max(mx, x+j)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/best-sightseeing-pair" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1014.Best%20Sightseeing%20Pair/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1024" tabindex="-1">1024. 视频拼接 <a class="header-anchor" href="#q-1024" aria-label="Permalink to &quot;1024. 视频拼接 {#q-1024}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你将会获得一系列视频片段，这些片段来自于一项持续时长为 <code>time</code> 秒的体育赛事。这些片段可能有所重叠，也可能长度不一。</p>&#10;&#10;<p>使用数组 <code>clips</code> 描述所有的视频片段，其中 <code>clips[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 表示：某个视频片段开始于 <code>start<sub>i</sub></code> 并于 <code>end<sub>i</sub></code> 结束。</p>&#10;&#10;<p>甚至可以对这些片段自由地再剪辑：</p>&#10;&#10;<ul>&#10;	<li>例如，片段 <code>[0, 7]</code> 可以剪切成 <code>[0, 1] + [1, 3] + [3, 7]</code> 三部分。</li>&#10;</ul>&#10;&#10;<p>我们需要将这些片段进行再剪辑，并将剪辑后的内容拼接成覆盖整个运动过程的片段（<code>[0, time]</code>）。返回所需片段的最小数目，如果无法完成该任务，则返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;选中 [0,2], [8,10], [1,9] 这三个片段。&#10;然后，按下面的方案重制比赛片段：&#10;将 [1,9] 再剪辑为 [1,2] + [2,8] + [8,9] 。&#10;现在手上的片段为 [0,2] + [2,8] + [8,10]，而这些覆盖了整场比赛 [0, 10]。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>clips = [[0,1],[1,2]], time = 5&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>&#10;无法只用 [0,1] 和 [1,2] 覆盖 [0,5] 的整个过程。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], time = 9&#10;<strong>输出：</strong>3&#10;<strong>解释： </strong>&#10;选取片段 [0,4], [4,7] 和 [6,9] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= clips.length &lt;= 100</code></li>&#10;	<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 100</code></li>&#10;	<li><code>1 &lt;= time &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>区间数量与时间上界均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>，枚举子集可以覆盖 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">time</mtext>
  <mo stretchy="false">]</mo>
</math></span>，但子集数为指数。同一起点只需保留右端最远的片段，问题化成「从当前位置能跳到的最远覆盖」。</p>
<p>这与跳跃游戏相同：记下每个起点的最远终点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，从左扫描维护当前可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span>；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 停在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，则无法前进。每越过上一段的右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pre</mtext>
</math></span> 就增加一段。</p>
<p>一遍扫描得到最少片段数，或在断开时返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>注意到，如果相同起点的子区间有多个，那么选择右端点最大的那个子区间是最优的。</p>
<p>因此，我们可以预处理所有子区间，对于每一个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，算出所有以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 为起点的子区间中，右端点最大的那个位置，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 中。</p>
<p>我们定义变量 <code v-pre>mx</code> 表示当前能够到达的最远位置，变量 <code v-pre>ans</code> 表示当前需要的最少子区间数，变量 <code v-pre>pre</code> 表示上一个被使用的子区间的右端点。</p>
<p>接下来，我们从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始枚举所有位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 来更新 <code v-pre>mx</code>。如果更新后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mi>i</mi>
</math></span>，说明无法覆盖下一个位置，因此无法完成任务，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>同时我们记录上一个被使用的子区间的右端点 <code v-pre>pre</code>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mo>=</mo>
  <mi>i</mi>
</math></span>，说明需要使用一个新的子区间，因此我们将 <code v-pre>ans</code> 加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并将 <code v-pre>pre</code> 更新为 <code v-pre>mx</code>。</p>
<p>遍历结束后，返回 <code v-pre>ans</code> 即可。</p>
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
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是数组 <code v-pre>clips</code> 的长度和 <code v-pre>time</code> 的值。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0045.Jump%20Game%20II/README.md" target="_blank" rel="noopener noreferrer">45. 跳跃游戏 II</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0055.Jump%20Game/README.md" target="_blank" rel="noopener noreferrer">55. 跳跃游戏</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1300-1399/1326.Minimum%20Number%20of%20Taps%20to%20Open%20to%20Water%20a%20Garden/README.md" target="_blank" rel="noopener noreferrer">1326. 灌溉花园的最少水龙头数目</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func videoStitching(clips [][]int, time int) int {</span></span>
<span class="line"><span>	last := make([]int, time)</span></span>
<span class="line"><span>	for _, v := range clips {</span></span>
<span class="line"><span>		a, b := v[0], v[1]</span></span>
<span class="line"><span>		if a &#x3C; time {</span></span>
<span class="line"><span>			last[a] = max(last[a], b)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, mx, pre := 0, 0, 0</span></span>
<span class="line"><span>	for i, v := range last {</span></span>
<span class="line"><span>		mx = max(mx, v)</span></span>
<span class="line"><span>		if mx &#x3C;= i {</span></span>
<span class="line"><span>			return -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if pre == i {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			pre = mx</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/video-stitching" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1024.Video%20Stitching/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1025" tabindex="-1">1025. 除数博弈 <a class="header-anchor" href="#q-1025" aria-label="Permalink to &quot;1025. 除数博弈 {#q-1025}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：脑筋急转弯、数学、动态规划、博弈、无偏博弈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。</p>&#10;&#10;<p>最初，黑板上有一个数字 <code>n</code> 。在每个玩家的回合，玩家需要执行以下操作：</p>&#10;&#10;<ul>&#10;	<li>选出任一整数 <code>x</code>，满足 <code>0 &lt; x &lt; n</code> 且 <code>n % x == 0</code> 。</li>&#10;	<li>用 <code>n - x</code> 替换黑板上的数字 <code>n</code> 。</li>&#10;</ul>&#10;&#10;<p>如果玩家无法执行这些操作，就会输掉游戏。</p>&#10;&#10;<p><em>只有在爱丽丝在游戏中取得胜利时才返回 <code>true</code> 。假设两个玩家都以最佳状态参与游戏。</em></p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>爱丽丝选择 1，鲍勃无法进行操作。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学归纳法 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，可用 DP 记录每个剩余值的胜负：存在一种 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 使对手面对必败态则先手胜。观察小值可知奇数先手败、偶数先手胜，随后可用归纳确认。</p>
<p>奇数的真因数仍为奇数，减去后留给对手偶数；偶数总能减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 留给对手奇数。因此胜负完全由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的奇偶决定。</p>
<p>返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为偶数即可，不必再做递推。</p>
</blockquote>
<ul>
<li>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，先手败</li>
<li>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>2</mn>
</math></span>，先手拿 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，剩下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，后手败，先手胜</li>
<li>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>3</mn>
</math></span>，先手拿 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，剩下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，后手胜，先手败</li>
<li>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>4</mn>
</math></span>，先手拿 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，剩下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，后手败，先手胜</li>
<li>...</li>
</ul>
<p>猜想，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为奇数时，先手败；当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为偶数时，先手胜。</p>
<p>证明：</p>
<ol>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>2</mn>
</math></span>，结论成立；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&gt;</mo>
  <mn>2</mn>
</math></span>，假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span> 时，该结论成立，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 时：
<ul>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 为奇数，由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的因数，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 只可能是奇数，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 为偶数，后手胜，先手败；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 为偶数，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 既可以是奇数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，也可以是偶数，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 取奇数，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 为奇数，后手败，先手胜。</li>
</ul>
</li>
</ol>
<p>综上，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为奇数时，先手败；当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为偶数时，先手胜。结论正确。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func divisorGame(n int) bool {</span></span>
<span class="line"><span>	return n%2 == 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/divisor-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1025.Divisor%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1027" tabindex="-1">1027. 最长等差数列 <a class="header-anchor" href="#q-1027" aria-label="Permalink to &quot;1027. 最长等差数列 {#q-1027}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、二分查找、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>nums</code>，返回 <code>nums</code> 中最长等差子序列的长度。</p>&#10;&#10;<p><strong>注意</strong>：</p>&#10;&#10;<ul>&#10;	<li><strong>子序列 </strong>是由另一个数组删除一些（也可以不删除）元素后得到的数组，并且不改变剩余元素之间的相对顺序。</li>&#10;	<li>如果对于所有 <code>0 &lt;= i &lt; seq.length - 1</code>，<code>seq[i + 1] - seq[i]</code> 的值都相同，则称序列 <code>seq</code> 为等差序列。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [3, 6, 9, 12]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>4</span></p>&#10;&#10;<p><strong>解释：</strong> 整个数组本身就是一个公差为 3 的等差序列，因此最长等差子序列为 <code>[3, 6, 9, 12]</code>，长度为 4。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [9, 4, 7, 2, 10]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>3</span></p>&#10;&#10;<p><strong>解释：</strong> 最长等差子序列为 <code>[4, 7, 10]</code>（下标分别为 <code>1</code>、<code>2</code>、<code>4</code>），公差为 3。不存在长度为 4 的等差子序列。</p>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [20, 1, 15, 3, 10, 5, 8]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>4</span></p>&#10;&#10;<p><strong>解释：</strong> 最长等差子序列为 <code>[20, 15, 10, 5]</code>（下标分别为 <code>0</code>、<code>2</code>、<code>4</code>、<code>5</code>），公差为 -5。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= nums.length &lt;= 1500</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 500</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举公差再对每个公差求最长子序列， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span> 且值域在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>500</mn>
  <mo stretchy="false">]</mo>
</math></span>，公差种类约 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>3</mn>
  </msup>
</math></span>，双重枚举下标即可在时限内完成。子序列不必连续，状态应落在「以某下标结尾、某公差」。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾、公差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的最长长度。因公差可负，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 平移 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>500</mn>
</math></span> 后落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1000</mn>
  <mo stretchy="false">]</mo>
</math></span>。转移枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&lt;</mo>
  <mi>i</mi>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 更新。</p>
<p>每个下标对更新一次，答案取所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的最大者。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾且公差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的等差数列的最大长度。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，即每个元素自身都是一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的等差数列。</p>
<blockquote>
<p>由于公差可能为负数，且最大差值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>500</mn>
</math></span>，因此，我们可以将统一将公差加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>500</mn>
</math></span>，这样公差的范围就变成了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1000</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的前一个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么公差 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>500</mn>
</math></span>，此时有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，然后我们更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后返回答案即可。</p>
<blockquote>
<p>如果初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，那么我们需要在最后返回答案时加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>d</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度以及数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中元素的最大值与最小值的差值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestArithSeqLength(nums []int) int {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, 1001)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for k := 0; k &#x3C; i; k++ {</span></span>
<span class="line"><span>			j := nums[i] - nums[k] + 500</span></span>
<span class="line"><span>			f[i][j] = max(f[i][j], f[k][j]+1)</span></span>
<span class="line"><span>			ans = max(ans, f[i][j])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans + 1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-arithmetic-subsequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1027.Longest%20Arithmetic%20Subsequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1031" tabindex="-1">1031. 两个无重叠子数组的最大和 <a class="header-anchor" href="#q-1031" aria-label="Permalink to &quot;1031. 两个无重叠子数组的最大和 {#q-1031}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和两个整数 <code>firstLen</code> 和 <code>secondLen</code>，请你找出并返回两个无重叠<strong> 子数组 </strong>中元素的最大和<em>，</em>长度分别为 <code>firstLen</code> 和 <code>secondLen</code> 。</p>&#10;&#10;<p>长度为 <code>firstLen</code> 的子数组可以出现在长为 <code>secondLen</code> 的子数组之前或之后，但二者必须是无重叠。</p>&#10;&#10;<p>子数组是数组的一个 <strong>连续</strong> 部分。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2&#10;<strong>输出：</strong>20&#10;<strong>解释：</strong>子数组的一种选择中，[9] 长度为 1，[6,5] 长度为 2。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2&#10;<strong>输出：</strong>29&#10;<strong>解释：</strong>子数组的一种选择中，[3,8,1] 长度为 3，[8,9] 长度为 2。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3&#10;<strong>输出：</strong>31&#10;<strong>解释：</strong>子数组的一种选择中，[5,6,0,9] 长度为 4，[0,3,8] 长度为 3。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= firstLen, secondLen &lt;= 1000</code></li>&#10;	<li><code>2 &lt;= firstLen + secondLen &lt;= 1000</code></li>&#10;	<li><code>firstLen + secondLen &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举两段的左右端点需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span> 偏紧。固定其中一段后，另一段的最优位置只取决于它左侧（或右侧）定长窗口的最大和。</p>
<p>前缀和使任意定长窗口的和可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 取出。分「长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">firstLen</mtext>
</math></span> 的段在左」与「长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">secondLen</mtext>
</math></span> 的段在左」两种情形，扫右段左端点时用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 维护左侧窗口的历史最大和。</p>
<p>两种情形各扫一遍，取较大者。</p>
</blockquote>
<p>我们先预处理得到数组 <code v-pre>nums</code> 的前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素的和。</p>
<p>接下来，我们分两种情况枚举：</p>
<p>假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组的左边，那么我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组的左端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 维护左边 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组的最大和，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。枚举完所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，就可以得到候选答案。</p>
<p>假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组的左边，那么我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组的左端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 维护左边 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span> 个元素的子数组的最大和，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>f</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。枚举完所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，就可以得到候选答案。</p>
<p>最后，我们取两种情况下的候选答案的最大值即可。</p>
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
</math></span> 为数组 <code v-pre>nums</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxSumTwoNoOverlap(nums []int, firstLen int, secondLen int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, t := firstLen, 0; i+secondLen-1 &#x3C; n; i++ {</span></span>
<span class="line"><span>		t = max(t, s[i]-s[i-firstLen])</span></span>
<span class="line"><span>		ans = max(ans, t+s[i+secondLen]-s[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, t := secondLen, 0; i+firstLen-1 &#x3C; n; i++ {</span></span>
<span class="line"><span>		t = max(t, s[i]-s[i-secondLen])</span></span>
<span class="line"><span>		ans = max(ans, t+s[i+firstLen]-s[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-sum-of-two-non-overlapping-subarrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1031.Maximum%20Sum%20of%20Two%20Non-Overlapping%20Subarrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1035" tabindex="-1">1035. 不相交的线 <a class="header-anchor" href="#q-1035" aria-label="Permalink to &quot;1035. 不相交的线 {#q-1035}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、最长公共子序列</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在两条独立的水平线上按给定的顺序写下 <code>nums1</code> 和 <code>nums2</code> 中的整数。</p>&#10;&#10;<p>现在，可以绘制一些连接两个数字 <code>nums1[i]</code> 和 <code>nums2[j]</code> 的直线，这些直线需要同时满足：</p>&#10;&#10;<ul>&#10;	<li> <code>nums1[i] == nums2[j]</code></li>&#10;	<li>且绘制的直线不与任何其他连线（非水平线）相交。</li>&#10;</ul>&#10;&#10;<p>请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。</p>&#10;&#10;<p>以这种方法绘制线条，并返回可以绘制的最大连线数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1035.Uncrossed%20Lines/images/142.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>nums1 = <span>[1,4,2]</span>, nums2 = <span>[1,2,4]</span>&#10;<strong>输出：</strong><span>2</span>&#10;<strong>解释：</strong>可以画出两条不交叉的线，如上图所示。 &#10;但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。&#10;</pre>&#10;&#10;<div>&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums1 = <span>[2,5,1,2,5]</span>, nums2 = <span>[10,5,2,1,5,2]</span>&#10;<strong>输出：</strong><span>3</span>&#10;</pre>&#10;&#10;<div>&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums1 = <span>[1,3,7,1,7,5]</span>, nums2 = <span>[1,9,2,5,1]</span>&#10;<strong>输出：</strong><span>2</span></pre>&#10;&#10;<p> </p>&#10;</div>&#10;</div>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 500</code></li>&#10;	<li><code>1 &lt;= nums1[i], nums2[j] &lt;= 2000</code></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>连线不能交叉，等价于在两序列中取一组下标严格递增的相等对，即最长公共子序列。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span>，适合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的二维 DP。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为两序列前缀的最大连线数：末元素相等则来自 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，否则取少用一侧的较优值。</p>
<p>填完表格后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 即为答案。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
</math></span> 前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个数的最大连线数。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">nums2</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 时，我们可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个数和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个数的基础上增加一条连线，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2260;</mo>
  <mtext mathvariant="italic">nums2</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 时，我们要么在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个数和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个数的基础上求解，要么在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个数的基础上求解，取两者的最大值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 即可。</p>
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
</math></span> 分别是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxUncrossedLines(nums1 []int, nums2 []int) int {</span></span>
<span class="line"><span>	m, n := len(nums1), len(nums2)</span></span>
<span class="line"><span>	f := make([][]int, m+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			if nums1[i-1] == nums2[j-1] {</span></span>
<span class="line"><span>				f[i][j] = f[i-1][j-1] + 1</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				f[i][j] = max(f[i-1][j], f[i][j-1])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[m][n]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/uncrossed-lines" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1035.Uncrossed%20Lines/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1039" tabindex="-1">1039. 多边形三角剖分的最低得分 <a class="header-anchor" href="#q-1039" aria-label="Permalink to &quot;1039. 多边形三角剖分的最低得分 {#q-1039}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、多边形、三角剖分</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一个凸的 <code>n</code> 边形，其每个顶点都有一个整数值。给定一个整数数组 <code>values</code> ，其中 <code>values[i]</code> 是按 <strong>顺时针顺序 </strong>第 <code>i</code> 个顶点的值。</p>&#10;&#10;<p>假设将多边形 <strong>剖分</strong> 为 <code>n - 2</code> 个三角形。对于每个三角形，该三角形的值是顶点标记的<strong>乘积</strong>，三角剖分的分数是进行三角剖分后所有 <code>n - 2</code> 个三角形的值之和。</p>&#10;&#10;<p>返回 <em>多边形进行三角剖分后可以得到的最低分</em> 。<br>&#10; </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1039.Minimum%20Score%20Triangulation%20of%20Polygon/images/ex0-2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>values = [1,2,3]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>多边形已经三角化，唯一三角形的分数为 6。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1039.Minimum%20Score%20Triangulation%20of%20Polygon/images/ex1-2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>values = [3,7,4,5]&#10;<strong>输出：</strong>144&#10;<strong>解释：</strong>有两种三角剖分，可能得分分别为：3*7*5 + 4*5*7 = 245，或 3*4*5 + 3*4*7 = 144。最低分数为 144。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1039.Minimum%20Score%20Triangulation%20of%20Polygon/images/ex2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>values = [1,3,1,4,1,5]&#10;<strong>输出：</strong>13&#10;<strong>解释：</strong>最低分数三角剖分的得分情况为 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == values.length</code></li>&#10;	<li><code>3 &lt;= n &lt;= 50</code></li>&#10;	<li><code>1 &lt;= values[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>凸多边形的三角剖分方案数是卡特兰数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span> 时不能枚举整棵剖分树。任意剖分都包含一条以边 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 为底、第三点为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的三角形，两侧是规模更小的子多边形。</p>
<p>子问题只依赖端点对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，用记忆化 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，代价为两侧答案加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x22C5;</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x22C5;</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。相邻顶点无法剖分，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>入口为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 进行三角剖分后的最低分数。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的计算过程如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>=</mo>
  <mi>j</mi>
</math></span>，说明多边形只有两个顶点，无法进行三角剖分，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</p>
<p>否则，我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 之间的一个顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 进行三角剖分，可以分为两个子问题：将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 进行三角剖分，以及将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 进行三角剖分。这两个子问题的最低分数分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，而顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 构成的三角形的分数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。那么，此次三角剖分的最低分数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们取所有可能的最小值，即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的值。</p>
<p>为了避免重复计算，我们可以使用记忆化搜索，即使用哈希表或者数组来存储已经计算过的函数值。</p>
<p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
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
</math></span> 为多边形的顶点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minScoreTriangulation(values []int) int {</span></span>
<span class="line"><span>	n := len(values)</span></span>
<span class="line"><span>	f := [50][50]int{}</span></span>
<span class="line"><span>	var dfs func(int, int) int</span></span>
<span class="line"><span>	dfs = func(i, j int) int {</span></span>
<span class="line"><span>		if i+1 == j {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][j] != 0 {</span></span>
<span class="line"><span>			return f[i][j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i][j] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>		for k := i + 1; k &#x3C; j; k++ {</span></span>
<span class="line"><span>			f[i][j] = min(f[i][j], dfs(i, k)+dfs(k, j)+values[i]*values[k]*values[j])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return f[i][j]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, n-1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>记忆化仍有递归开销，且状态依赖关系是区间包含。同一转移写成自底向上：较短区间先算完，较长区间才能取到子区间的值。</p>
<p>按左端点递减、右端点递增填 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的式子与搜索相同，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们可以将方法一中的记忆化搜索改为动态规划。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 进行三角剖分后的最低分数。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>（这里要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>），我们先将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 初始化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>。</p>
<p>我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 之间的一个顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 进行三角剖分，可以分为两个子问题：将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 进行三角剖分，以及将多边形的顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 进行三角剖分。这两个子问题的最低分数分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，而顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 构成的三角形的分数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。那么，此次三角剖分的最低分数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext>values</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们取所有可能的最小值，即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值。</p>
<p>综上，我们可以得到状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mn>0</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>i</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>=</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi mathvariant="normal">&#x221E;</mi>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>i</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>&lt;</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <munder>
            <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
            <mrow data-mjx-texclass="ORD">
              <mi>i</mi>
              <mo>&lt;</mo>
              <mi>k</mi>
              <mo>&lt;</mo>
              <mi>j</mi>
            </mrow>
          </munder>
          <mo fence="false" stretchy="false">{</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo stretchy="false">]</mo>
          <mo>+</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo>+</mo>
          <mtext>values</mtext>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo stretchy="false">]</mo>
          <mo>&#xD7;</mo>
          <mtext>values</mtext>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo stretchy="false">]</mo>
          <mo>&#xD7;</mo>
          <mtext>values</mtext>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo fence="false" stretchy="false">}</mo>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>i</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>&lt;</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>注意，在枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 时，我们可以有两种枚举方式：</p>
<ol>
<li>从大到小枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，从小到大枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，这样可以保证在计算状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 都已经计算过了；</li>
<li>从小到大枚举区间长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#x2264;</mo>
  <mi>l</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，然后枚举区间左端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么可以得到右端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>l</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，这样也可以保证在计算较大区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，较小区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 都已经计算过了。</li>
</ol>
<p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
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
</math></span> 为多边形的顶点数。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1300-1399/1312.Minimum%20Insertion%20Steps%20to%20Make%20a%20String%20Palindrome/README.md" target="_blank" rel="noopener noreferrer">1312. 让字符串成为回文串的最少插入次数</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minScoreTriangulation(values []int) int {</span></span>
<span class="line"><span>	n := len(values)</span></span>
<span class="line"><span>	f := [50][50]int{}</span></span>
<span class="line"><span>	for i := n - 3; i >= 0; i-- {</span></span>
<span class="line"><span>		for j := i + 2; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			f[i][j] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>			for k := i + 1; k &#x3C; j; k++ {</span></span>
<span class="line"><span>				f[i][j] = min(f[i][j], f[i][k]+f[k][j]+values[i]*values[k]*values[j])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[0][n-1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：动态规划（另一种实现方式） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法二按端点嵌套循环，需小心保证子区间已计算。按区间长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 增到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 枚举，左端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>、右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>l</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，则两侧长度更短，自然已经填好。</p>
<p>转移式不变，只是枚举顺序换成「先长度后位置」。</p>
</blockquote>
<p>方法二中，我们提到了两种枚举方式。这里我们使用第二种方式，从小到大枚举区间长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#x2264;</mo>
  <mi>l</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，然后枚举区间左端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么可以得到右端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>l</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
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
</math></span> 为多边形的顶点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minScoreTriangulation(values []int) int {</span></span>
<span class="line"><span>	n := len(values)</span></span>
<span class="line"><span>	f := [50][50]int{}</span></span>
<span class="line"><span>	for l := 3; l &#x3C;= n; l++ {</span></span>
<span class="line"><span>		for i := 0; i+l-1 &#x3C; n; i++ {</span></span>
<span class="line"><span>			j := i + l - 1</span></span>
<span class="line"><span>			f[i][j] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>			for k := i + 1; k &#x3C; j; k++ {</span></span>
<span class="line"><span>				f[i][j] = min(f[i][j], f[i][k]+f[k][j]+values[i]*values[k]*values[j])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[0][n-1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-score-triangulation-of-polygon" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1039.Minimum%20Score%20Triangulation%20of%20Polygon/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1043" tabindex="-1">1043. 分隔数组以得到最大和 <a class="header-anchor" href="#q-1043" aria-label="Permalink to &quot;1043. 分隔数组以得到最大和 {#q-1043}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>arr</code>，请你将该数组分隔为长度 <strong>最多 </strong>为 k 的一些（连续）子数组。分隔完成后，每个子数组的中的所有值都会变为该子数组中的最大值。</p>&#10;&#10;<p>返回将数组分隔变换后能够得到的元素最大和。本题所用到的测试用例会确保答案是一个 32 位整数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,15,7,9,2,5,10], k = 3&#10;<strong>输出：</strong>84&#10;<strong>解释：</strong>数组变为 [15,15,15,9,10,10,10]</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4&#10;<strong>输出：</strong>83&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1], k = 1&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 500</code></li>&#10;	<li><code>0 &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= arr.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>划分方案数为指数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span> 不能枚举全部切法。最后一段长度至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，其贡献等于该段最大值乘长度，之前的部分是规模更小的同类问题。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素的最大和。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 往左枚举最后一段起点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，同时维护段内最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">mx</mtext>
  <mo>&#x22C5;</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 更新。</p>
<p>按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 递增填表，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示将数组的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素分隔成若干个子数组，最终的最大元素和。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>我们考虑如何计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，它的最后一个元素是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。由于每个子数组的长度最多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，并且我们需要求得子数组中的最大值，因此，我们可以从右往左枚举最后一个子数组的第一个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>&lt;</mo>
  <mi>j</mi>
  <mo>&#x2264;</mo>
  <mi>i</mi>
</math></span>，过程中维护一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，表示最后一个子数组中的最大值，那么状态转移方程为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo fence="false" stretchy="false">{</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo fence="false" stretchy="false">}</mo>
</math></span><p>最终的答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxSumAfterPartitioning(arr []int, k int) int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	f := make([]int, n+1)</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		mx := 0</span></span>
<span class="line"><span>		for j := i; j > max(0, i-k); j-- {</span></span>
<span class="line"><span>			mx = max(mx, arr[j-1])</span></span>
<span class="line"><span>			f[i] = max(f[i], f[j-1]+mx*(i-j+1))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[n]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/partition-array-for-maximum-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1043.Partition%20Array%20for%20Maximum%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1048" tabindex="-1">1048. 最长字符串链 <a class="header-anchor" href="#q-1048" aria-label="Permalink to &quot;1048. 最长字符串链 {#q-1048}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、双指针、字符串、动态规划、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出一个单词数组 <code>words</code> ，其中每个单词都由小写英文字母组成。</p>&#10;&#10;<p>如果我们可以 <strong>不改变其他字符的顺序 </strong>，在 <code>word<sub>A</sub></code> 的任何地方添加 <strong>恰好一个</strong> 字母使其变成 <code>word<sub>B</sub></code> ，那么我们认为 <code>word<sub>A</sub></code> 是 <code>word<sub>B</sub></code> 的 <strong>前身</strong> 。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;abc&quot;</code> 是 <code>&quot;abac&quot;</code> 的 <strong>前身</strong> ，而 <code>&quot;cba&quot;</code> 不是 <code>&quot;bcad&quot;</code> 的 <strong>前身</strong></li>&#10;</ul>&#10;&#10;<p><strong>词链</strong>是单词 <code>[word_1, word_2, ..., word_k]</code> 组成的序列，<code>k >= 1</code>，其中 <code>word<sub>1</sub></code> 是 <code>word<sub>2</sub></code> 的前身，<code>word<sub>2</sub></code> 是 <code>word<sub>3</sub></code> 的前身，依此类推。一个单词通常是 <code>k == 1</code> 的 <strong>单词链</strong> 。</p>&#10;&#10;<p>从给定单词列表 <code>words</code> 中选择单词组成词链，返回 词链的 <strong>最长可能长度</strong> 。<br>&#10; </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;a&quot;,&quot;b&quot;,&quot;ba&quot;,&quot;bca&quot;,&quot;bda&quot;,&quot;bdca&quot;]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>最长单词链之一为 [&quot;a&quot;,&quot;<u>b</u>a&quot;,&quot;b<u>d</u>a&quot;,&quot;bd<u>c</u>a&quot;]&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>words = [&quot;xbc&quot;,&quot;pcxbcf&quot;,&quot;xb&quot;,&quot;cxbc&quot;,&quot;pcxbc&quot;]&#10;<b>输出：</b>5&#10;<b>解释：</b>所有的单词都可以放入单词链 [&quot;xb&quot;, &quot;xb<u>c</u>&quot;, &quot;<u>c</u>xbc&quot;, &quot;<u>p</u>cxbc&quot;, &quot;pcxbc<u>f</u>&quot;].&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>words = [&quot;abcd&quot;,&quot;dbqca&quot;]&#10;<strong>输出：</strong>1&#10;<b>解释：</b>字链[&quot;abcd&quot;]是最长的字链之一。&#10;[&quot;abcd&quot;，&quot;dbqca&quot;]不是一个有效的单词链，因为字母的顺序被改变了。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 16</code></li>&#10;	<li><code>words[i]</code> 仅由小写英文字母组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>词链要求每次只多一个字符， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>、串长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>16</mn>
</math></span>，可按长度排序后做序列 DP。以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾的最长链，来自某个长度恰少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 且为前身的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>。</p>
<p>双指针判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 能否通过插入一个字符得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>。对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 枚举更短的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，满足前身则用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 的最大值。</p>
</blockquote>
<p>我们先将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
</math></span> 按照字符串长度从小到大排序。定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾的最长词链长度，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</p>
<p>对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的前身，则更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。判断前身时，两个字符串的长度需相差 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，且较短串可由较长串删除恰好一个字符得到。</p>
<p>答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 是字符串的最大长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestStrChain(words []string) int {</span></span>
<span class="line"><span>	sort.Slice(words, func(i, j int) bool { return len(words[i]) &#x3C; len(words[j]) })</span></span>
<span class="line"><span>	n := len(words)</span></span>
<span class="line"><span>	f := make([]int, n)</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		f[i] = 1</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			if check(words[j], words[i]) {</span></span>
<span class="line"><span>				f[i] = max(f[i], f[j]+1)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, f[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func check(a, b string) bool {</span></span>
<span class="line"><span>	if len(a)+1 != len(b) {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	i := 0</span></span>
<span class="line"><span>	for j := range b {</span></span>
<span class="line"><span>		if i &#x3C; len(a) &#x26;&#x26; a[i] == b[j] {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return i == len(a)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 扫描全部更短单词，即使长度差不是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。前身由删去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 的一个字符唯一确定，至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 个候选，可用哈希表按单词取值。</p>
<p>仍按长度排序，对当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 枚举删除一位得到的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>p</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>w</mi>
  <mo stretchy="false">]</mo>
</math></span>。时间降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <msup>
    <mi>L</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们同样先将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
</math></span> 按长度排序。用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 记录每个单词对应的最长词链长度。</p>
<p>对于当前单词 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，枚举删除其中一个字符得到的前身 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span>。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 已在哈希表中，则可以用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>p</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>w</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>答案为所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>w</mi>
  <mo stretchy="false">]</mo>
</math></span> 的最大值。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mi>L</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestStrChain(words []string) int {</span></span>
<span class="line"><span>	sort.Slice(words, func(i, j int) bool { return len(words[i]) &#x3C; len(words[j]) })</span></span>
<span class="line"><span>	f := map[string]int{}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for _, w := range words {</span></span>
<span class="line"><span>		x := 1</span></span>
<span class="line"><span>		for i := range w {</span></span>
<span class="line"><span>			pred := w[:i] + w[i+1:]</span></span>
<span class="line"><span>			x = max(x, f[pred]+1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[w] = x</span></span>
<span class="line"><span>		ans = max(ans, x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-string-chain" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1048.Longest%20String%20Chain/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1049" tabindex="-1">1049. 最后一块石头的重量 II <a class="header-anchor" href="#q-1049" aria-label="Permalink to &quot;1049. 最后一块石头的重量 II {#q-1049}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、背包问题、0-1 背包</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有一堆石头，用整数数组 <code>stones</code> 表示。其中 <code>stones[i]</code> 表示第 <code>i</code> 块石头的重量。</p>&#10;&#10;<p>每一回合，从中选出<strong>任意两块石头</strong>，然后将它们一起粉碎。假设石头的重量分别为 <code>x</code> 和 <code>y</code>，且 <code>x &lt;= y</code>。那么粉碎的可能结果如下：</p>&#10;&#10;<ul>&#10;	<li>如果 <code>x == y</code>，那么两块石头都会被完全粉碎；</li>&#10;	<li>如果 <code>x != y</code>，那么重量为 <code>x</code> 的石头将会完全粉碎，而重量为 <code>y</code> 的石头新重量为 <code>y-x</code>。</li>&#10;</ul>&#10;&#10;<p>最后，<strong>最多只会剩下一块 </strong>石头。返回此石头 <strong>最小的可能重量 </strong>。如果没有石头剩下，就返回 <code>0</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [2,7,4,1,8,1]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>&#10;组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，&#10;组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，&#10;组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，&#10;组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stones = [31,26,33,21,40]&#10;<strong>输出：</strong>5&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= stones.length &lt;= 30</code></li>&#10;	<li><code>1 &lt;= stones[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次粉碎两块石头等价于给它们相反的符号后求和，最终剩余是把石子分成两堆后的差的绝对值。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>30</mn>
</math></span> 但总和只有几千，可转化为容量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>s</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>-<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 背包：一堆尽量接近一半。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dp</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 块能否（或最大地）凑出不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的重量。转移选或不选第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 块。</p>
<p>答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo>&#x22C5;</mo>
  <mtext mathvariant="italic">dp</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>s</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p><strong>两个</strong>石头的重量越接近，粉碎后的新重量就越小。同样的，<strong>两堆</strong>石头的重量越接近，它们粉碎后的新重量也越小。</p>
<p>所以本题可以转换为，计算容量为 <code v-pre>sum / 2</code> 的背包最多能装多少重量的石头。</p>
<p>定义 <code v-pre>dp[i][j]</code> 表示从前 i 个石头中选出若干个，使得所选石头重量之和为不超过 j 的最大重量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func lastStoneWeightII(stones []int) int {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, v := range stones {</span></span>
<span class="line"><span>		s += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m, n := len(stones), s>>1</span></span>
<span class="line"><span>	dp := make([][]int, m+1)</span></span>
<span class="line"><span>	for i := range dp {</span></span>
<span class="line"><span>		dp[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			dp[i][j] = dp[i-1][j]</span></span>
<span class="line"><span>			if stones[i-1] &#x3C;= j {</span></span>
<span class="line"><span>				dp[i][j] = max(dp[i][j], dp[i-1][j-stones[i-1]]+stones[i-1])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s - dp[m][n]*2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划优化 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>二维表中第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行只依赖第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 行。滚动到一维数组并从大到小枚举容量，即可避免同一块石头被用两次，空间降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们注意到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 只与上一行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mo>&#x22C5;</mo>
  <mo stretchy="false">]</mo>
</math></span> 有关，因此可以去掉第一维，从大到小枚举容量，将空间复杂度优化到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">sum</mtext>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func lastStoneWeightII(stones []int) int {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, v := range stones {</span></span>
<span class="line"><span>		s += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := s >> 1</span></span>
<span class="line"><span>	dp := make([]int, n+1)</span></span>
<span class="line"><span>	for _, v := range stones {</span></span>
<span class="line"><span>		for j := n; j >= v; j-- {</span></span>
<span class="line"><span>			dp[j] = max(dp[j], dp[j-v]+v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s - dp[n]*2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/last-stone-weight-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1049.Last%20Stone%20Weight%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1062" tabindex="-1">1062. 最长重复子串的长度 🔒 <a class="header-anchor" href="#q-1062" aria-label="Permalink to &quot;1062. 最长重复子串的长度 🔒 {#q-1062}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、二分查找、动态规划、后缀数组、哈希函数、滚动哈希</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code>，找出并返回 <strong>最长重复子串</strong> 的长度。如果不存在重复子串，返回 <code>0</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>没有重复子串。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abbaba&quot;&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>最长的重复子串为 &quot;ab&quot; 和 &quot;ba&quot;，每个出现 2 次。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;aabcaabdaab&quot;&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>最长的重复子串为 &quot;aab&quot;，出现 3 次。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 2000</code></li>&#10;	<li>字符串 <code>s</code> 仅包含从 <code>'a'</code> 到 <code>'z'</code> 的小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最长重复子串可用后缀数组或二分哈希， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2000</mn>
</math></span> 时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 的 DP 更直接。以不同位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&gt;</mo>
  <mi>j</mi>
</math></span> 结尾的公共后缀长度，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 时比以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 结尾的长度多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为该公共后缀长，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>i</mi>
</math></span>，相等则转移并更新全局最大。</p>
<p>答案即最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾的最长重复子串的长度，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。</p>
<p>我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的区间内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 的区间内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>+</mo>
          <mn>1</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>j</mi>
          <mo>&gt;</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>1</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>j</mi>
          <mo>=</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>我们求出所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的最大值即为答案。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1000-1099/1044.Longest%20Duplicate%20Substring/README.md" target="_blank" rel="noopener noreferrer">1044. 最长重复子串 🔒</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestRepeatingSubstring(s string) (ans int) {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			if s[i] == s[j] {</span></span>
<span class="line"><span>				if j > 0 {</span></span>
<span class="line"><span>					f[i][j] = f[i-1][j-1]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				f[i][j]++</span></span>
<span class="line"><span>				ans = max(ans, f[i][j])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-repeating-substring" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1062.Longest%20Repeating%20Substring/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1066" tabindex="-1">1066. 校园自行车分配 II 🔒 <a class="header-anchor" href="#q-1066" aria-label="Permalink to &quot;1066. 校园自行车分配 II 🔒 {#q-1066}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、动态规划、回溯、位掩码、匈牙利算法、二分图、图的匹配、最小费用流、SSP 算法、网络流</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在由 2D 网格表示的校园里有 <code>n</code> 位工人（<code>worker</code>）和 <code>m</code> 辆自行车（<code>bike</code>），<code>n &lt;= m</code>。所有工人和自行车的位置都用网格上的 2D 坐标表示。</p>&#10;&#10;<p>我们为每一位工人分配一辆专属自行车，使每个工人与其分配到的自行车之间的 <strong>曼哈顿距离</strong> 最小化。</p>&#10;&#10;<p>返回 <code>每个工人与分配到的自行车之间的曼哈顿距离的最小可能总和</code> 。</p>&#10;&#10;<p><code>p1</code> 和 <code>p2</code> 之间的 <strong>曼哈顿距离</strong> 为 <code>Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1066.Campus%20Bikes%20II/images/1261_example_1_v2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>&#10;自行车 0 分配给工人 0，自行车 1 分配给工人 1 。分配得到的曼哈顿距离都是 3, 所以输出为 6 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1066.Campus%20Bikes%20II/images/1261_example_2_v2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>&#10;先将自行车 0 分配给工人 0，再将自行车 1 分配给工人 1（或工人 2），自行车 2 给工人 2（或工人 1）。如此分配使得曼哈顿距离的总和为 4。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>workers = [[0,0],[1,0],[2,0],[3,0],[4,0]], bikes = [[0,999],[1,999],[2,999],[3,999],[4,999]]&#10;<strong>输出：</strong>4995&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == workers.length</code></li>&#10;	<li><code>m == bikes.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= m &lt;= 10</code></li>&#10;	<li><code>workers[i].length == 2</code></li>&#10;	<li><code>bikes[i].length == 2</code></li>&#10;	<li><code>0 &lt;= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] &lt; 1000</code></li>&#10;	<li>所有的工人和自行车的位置都是 <strong>不同</strong> 的。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：状态压缩动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>工人与自行车至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 个，全排列分配为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>!</mo>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mi>P</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，偏大。已分配的自行车集合可用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 位掩码表示，状态数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
</math></span> 可接受。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工人使用集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的最小总距离。枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 中为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 辆车，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo stretchy="false">]</mo>
</math></span> 加上这对曼哈顿距离转移。</p>
<p>答案为第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 行的最小值。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工人分配到自行车的状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 时的最小曼哈顿距离总和，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 是一个二进制数，表示自行车的分配情况。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，其余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo>+</mo>
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>。</p>
<p>考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们枚举第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工人分配到的自行车的编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 可以从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo stretchy="false">]</mo>
</math></span> 转移而来，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2295;</mo>
</math></span> 表示异或运算。这是因为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo stretchy="false">]</mo>
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个工人分配到自行车的状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
</math></span> 时的最小曼哈顿距离总和，而第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工人分配到自行车 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时，其曼哈顿距离为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>k</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>b</mi>
  <mi>i</mi>
  <mi>k</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>x</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的绝对值。因此我们可以列出状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>m</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mo fence="false" stretchy="false">{</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>k</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>b</mi>
  <mi>i</mi>
  <mi>k</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo fence="false" stretchy="false">}</mo>
</math></span><p>最终的答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <msup>
        <mn>2</mn>
        <mi>m</mi>
      </msup>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mo fence="false" stretchy="false">{</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo fence="false" stretchy="false">}</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是工人和自行车的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func assignBikes(workers [][]int, bikes [][]int) int {</span></span>
<span class="line"><span>	n, m := len(workers), len(bikes)</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	const inf = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, 1&#x3C;&#x3C;m)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = inf</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[0][0] = 0</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; 1&#x3C;&#x3C;m; j++ {</span></span>
<span class="line"><span>			for k := 0; k &#x3C; m; k++ {</span></span>
<span class="line"><span>				if j>>k&#x26;1 == 1 {</span></span>
<span class="line"><span>					d := abs(workers[i-1][0]-bikes[k][0]) + abs(workers[i-1][1]-bikes[k][1])</span></span>
<span class="line"><span>					f[i][j] = min(f[i][j], f[i-1][j^(1&#x3C;&#x3C;k)]+d)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return slices.Min(f[n])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/campus-bikes-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1066.Campus%20Bikes%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1067" tabindex="-1">1067. 范围内的数字计数 🔒 <a class="header-anchor" href="#q-1067" aria-label="Permalink to &quot;1067. 范围内的数字计数 🔒 {#q-1067}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个在 <code>0</code> 到 <code>9</code> 之间的整数 <code>d</code>，和两个正整数 <code>low</code> 和 <code>high</code> 分别作为上下界。返回 <code>d</code> 在 <code>low</code> 和 <code>high</code> 之间的整数中出现的次数，包括边界 <code>low</code> 和 <code>high</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>d = 1, low = 1, high = 13&#10;<strong>输出：</strong>6&#10;<strong>解释： </strong>&#10;数字 <code>d=1</code> 在 <code>1,10,11,12,13 中出现 6 次</code>。注意 <code>d=1</code> 在数字 11 中出现两次。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>d = 3, low = 100, high = 250&#10;<strong>输出：</strong>35&#10;<strong>解释：</strong>&#10;数字 <code>d=3</code> 在 <code>103,113,123,130,131,...,238,239,243 出现 35 次。</code>&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li><code>0 &lt;= d &lt;= 9</code></li>&#10;	<li><code>1 &lt;= low &lt;= high &lt;= 2×10^8</code></li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：数位 DP · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">low</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">high</mtext>
  <mo stretchy="false">]</mo>
</math></span> 上统计数位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 的出现次数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">high</mtext>
  <mo>&#x2264;</mo>
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>8</mn>
  </msup>
</math></span>，枚举每个数不可行。区间计数化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">high</mtext>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">low</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1.</mn>
  <mo>.</mo>
  <mi>n</mi>
</math></span> 中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 出现的次数。</p>
<p>按位填写时记录已出现次数、是否仍为前导零、是否贴上界。前导零不把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 计入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 的次数。</p>
<p>把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 拆成数位数组后记忆化 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">pos</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">lead</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>这道题实际上是求在给定区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 中，数字中出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 的个数。个数与数的位数以及每一位上的数字有关。我们可以用数位 DP 的思路来解决这道题。数位 DP 中，数的大小对复杂度的影响很小。</p>
<p>对于区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 问题，我们一般会将其转化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 然后再减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>l</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的问题，即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>r</mi>
    </mrow>
  </munderover>
  <mi>a</mi>
  <mi>n</mi>
  <msub>
    <mi>s</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>l</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>a</mi>
  <mi>n</mi>
  <msub>
    <mi>s</mi>
    <mi>i</mi>
  </msub>
</math></span><p>这里我们用记忆化搜索来实现数位 DP。从起点向下搜索，到最底层得到方案数，一层层向上返回答案并累加，最后从搜索起点得到最终的答案。</p>
<p>基本步骤如下：</p>
<ol>
<li>将数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 转为 int 数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 为最低位，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 为最高位；</li>
<li>根据题目信息，设计函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span>，对于本题，我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>t</mi>
  <mi>r</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mo>,</mo>
  <mi>t</mi>
  <mi>r</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ol>
<p>其中：</p>
<ul>
<li><code v-pre>pos</code> 表示数字的位数，从末位或者第一位开始，一般根据题目的数字构造性质来选择顺序。对于本题，我们选择从高位开始，因此，<code v-pre>pos</code> 的初始值为 <code v-pre>len</code>；</li>
<li><code v-pre>cnt</code> 表示当前数字中包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 的个数；</li>
<li><code v-pre>lead</code> 表示当前数字是否有前导零，如果有前导零，则 <code v-pre>lead</code> 为 <code v-pre>true</code>，否则为 <code v-pre>false</code>，初始化为 <code v-pre>true</code>；</li>
<li><code v-pre>limit</code> 表示可填的数字的限制，如果无限制，那么可以选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mn>.9</mn>
  <mo stretchy="false">]</mo>
</math></span>，否则，只能选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>a</mi>
  <mo stretchy="false">[</mo>
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>。如果 <code v-pre>limit</code> 为 <code v-pre>true</code> 且已经取到了能取到的最大值，那么下一个 <code v-pre>limit</code> 同样为 <code v-pre>true</code>；如果 <code v-pre>limit</code> 为 <code v-pre>true</code> 但是还没有取到最大值，或者 <code v-pre>limit</code> 为 <code v-pre>false</code>，那么下一个 <code v-pre>limit</code> 为 <code v-pre>false</code>。</li>
</ul>
<p>关于函数的实现细节，可以参考下面的代码。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为题目中的 <code v-pre>low</code> 和 <code v-pre>high</code>。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0233.Number%20of%20Digit%20One/README.md" target="_blank" rel="noopener noreferrer">233. 数字 1 的个数</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func digitsCount(d int, low int, high int) int {</span></span>
<span class="line"><span>	f := func(n int) int {</span></span>
<span class="line"><span>		a := make([]int, 11)</span></span>
<span class="line"><span>		dp := make([][]int, 11)</span></span>
<span class="line"><span>		for i := range dp {</span></span>
<span class="line"><span>			dp[i] = make([]int, 11)</span></span>
<span class="line"><span>			for j := range dp[i] {</span></span>
<span class="line"><span>				dp[i][j] = -1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l := 0</span></span>
<span class="line"><span>		for n > 0 {</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>			a[l] = n % 10</span></span>
<span class="line"><span>			n /= 10</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		var dfs func(int, int, bool, bool) int</span></span>
<span class="line"><span>		dfs = func(pos, cnt int, lead, limit bool) int {</span></span>
<span class="line"><span>			if pos &#x3C;= 0 {</span></span>
<span class="line"><span>				return cnt</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if !lead &#x26;&#x26; !limit &#x26;&#x26; dp[pos][cnt] != -1 {</span></span>
<span class="line"><span>				return dp[pos][cnt]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			up := 9</span></span>
<span class="line"><span>			if limit {</span></span>
<span class="line"><span>				up = a[pos]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans := 0</span></span>
<span class="line"><span>			for i := 0; i &#x3C;= up; i++ {</span></span>
<span class="line"><span>				if i == 0 &#x26;&#x26; lead {</span></span>
<span class="line"><span>					ans += dfs(pos-1, cnt, lead, limit &#x26;&#x26; i == up)</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					t := cnt</span></span>
<span class="line"><span>					if d == i {</span></span>
<span class="line"><span>						t++</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					ans += dfs(pos-1, t, false, limit &#x26;&#x26; i == up)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if !lead &#x26;&#x26; !limit {</span></span>
<span class="line"><span>				dp[pos][cnt] = ans</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return ans</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		return dfs(l, 0, true, true)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f(high) - f(low-1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/digit-count-in-range" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1067.Digit%20Count%20in%20Range/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1092" tabindex="-1">1092. 最短公共超序列 <a class="header-anchor" href="#q-1092" aria-label="Permalink to &quot;1092. 最短公共超序列 {#q-1092}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、动态规划、最长公共子序列</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个字符串 <code>str1</code> 和 <code>str2</code>，返回同时以 <code>str1</code> 和 <code>str2</code> 作为 <strong>子序列</strong> 的最短字符串。如果答案不止一个，则可以返回满足条件的 <strong>任意一个</strong> 答案。</p>&#10;&#10;<p>如果从字符串 <code>t</code> 中删除一些字符（也可能不删除），可以得到字符串 <code>s</code> ，那么 <code>s</code> 就是 t 的一个子序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>str1 = &quot;abac&quot;, str2 = &quot;cab&quot;&#10;<strong>输出：</strong>&quot;cabac&quot;&#10;<strong>解释：</strong>&#10;str1 = &quot;abac&quot; 是 &quot;cabac&quot; 的一个子串，因为我们可以删去 &quot;cabac&quot; 的第一个 &quot;c&quot;得到 &quot;abac&quot;。 &#10;str2 = &quot;cab&quot; 是 &quot;cabac&quot; 的一个子串，因为我们可以删去 &quot;cabac&quot; 末尾的 &quot;ac&quot; 得到 &quot;cab&quot;。&#10;最终我们给出的答案是满足上述属性的最短字符串。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>str1 = &quot;aaaaaaaa&quot;, str2 = &quot;aaaaaaaa&quot;&#10;<strong>输出：</strong>&quot;aaaaaaaa&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li>&#10;	<li><code>str1</code> 和 <code>str2</code> 都由小写英文字母组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 + 构造 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最短公共超序列长度等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>s</mi>
    <mn>1</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>s</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2212;</mo>
  <mrow data-mjx-texclass="ORD">
    <mi data-mjx-auto-op="false">LCS</mi>
  </mrow>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，先求 LCS 表，再沿转移回溯把非公共字符按序插入。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为两前缀的 LCS 长。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 往回走：若来自上方或左方则输出被丢掉的那个字符；否则输出公共字符并对角后退。</p>
<p>路径是逆序收集的，最后反转。某一侧耗尽时把另一侧剩余字符全部接上。</p>
</blockquote>
<p>我们先用动态规划求出两个字符串的最长公共子序列，然后根据最长公共子序列构造出最短公共超序列。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符和字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个字符的最长公共子序列的长度。状态转移方程如下：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mi>i</mi>
          <mo>=</mo>
          <mn>0</mn>
          <mtext mathvariant="italic">&#xA0;or&#xA0;</mtext>
          <mi>j</mi>
          <mo>=</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>+</mo>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mi>s</mi>
          <mi>t</mi>
          <mi>r</mi>
          <mn>1</mn>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>=</mo>
          <mi>s</mi>
          <mi>t</mi>
          <mi>r</mi>
          <mn>2</mn>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
          <mo stretchy="false">(</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo>,</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">)</mo>
        </mtd>
        <mtd>
          <mi>s</mi>
          <mi>t</mi>
          <mi>r</mi>
          <mn>1</mn>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>&#x2260;</mo>
          <mi>s</mi>
          <mi>t</mi>
          <mi>r</mi>
          <mn>2</mn>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>接下来我们基于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 构造出最短公共超序列。</p>
<div class="language-bash vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">str1:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">       a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">str2:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   b</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0">ans:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">    c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF">   c</span></span></code></pre>
</div><p>不妨对照着上面的示例字符串，来看看如何构造出最短公共超序列。</p>
<p>我们用双指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 分别指向字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 的末尾，然后从后往前遍历，每次比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的任意一个字符加入到最答案序列的末尾，然后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 同时减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2260;</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 中的最大值进行比较：
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入到答案序列的末尾，然后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入到答案序列的末尾，然后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</li>
</ul>
</li>
</ul>
<p>重复上述操作，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，然后将剩余的字符串加入到答案序列的末尾即可。</p>
<p>最后我们将答案序列反转，即可得到最终的答案。</p>
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
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func shortestCommonSupersequence(str1 string, str2 string) string {</span></span>
<span class="line"><span>	m, n := len(str1), len(str2)</span></span>
<span class="line"><span>	f := make([][]int, m+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			if str1[i-1] == str2[j-1] {</span></span>
<span class="line"><span>				f[i][j] = f[i-1][j-1] + 1</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				f[i][j] = max(f[i-1][j], f[i][j-1])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	i, j := m, n</span></span>
<span class="line"><span>	for i > 0 || j > 0 {</span></span>
<span class="line"><span>		if i == 0 {</span></span>
<span class="line"><span>			j--</span></span>
<span class="line"><span>			ans = append(ans, str2[j])</span></span>
<span class="line"><span>		} else if j == 0 {</span></span>
<span class="line"><span>			i--</span></span>
<span class="line"><span>			ans = append(ans, str1[i])</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			if f[i][j] == f[i-1][j] {</span></span>
<span class="line"><span>				i--</span></span>
<span class="line"><span>				ans = append(ans, str1[i])</span></span>
<span class="line"><span>			} else if f[i][j] == f[i][j-1] {</span></span>
<span class="line"><span>				j--</span></span>
<span class="line"><span>				ans = append(ans, str2[j])</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				i, j = i-1, j-1</span></span>
<span class="line"><span>				ans = append(ans, str1[i])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j = 0, len(ans)-1; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>		ans[i], ans[j] = ans[j], ans[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/shortest-common-supersequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1092.Shortest%20Common%20Supersequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1105" tabindex="-1">1105. 填充书架 <a class="header-anchor" href="#q-1105" aria-label="Permalink to &quot;1105. 填充书架 {#q-1105}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个数组 <code>books</code> ，其中 <code>books[i] = [thickness<sub>i</sub>, height<sub>i</sub>]</code> 表示第 <code>i</code> 本书的厚度和高度。你也会得到一个整数 <code>shelfWidth</code> 。</p>&#10;&#10;<p><strong>按顺序</strong> 将这些书摆放到总宽度为 <code>shelfWidth</code> 的书架上。</p>&#10;&#10;<p>先选几本书放在书架上（它们的厚度之和小于等于书架的宽度 <code>shelfWidth</code> ），然后再建一层书架。重复这个过程，直到把所有的书都放在书架上。</p>&#10;&#10;<p>需要注意的是，在上述过程的每个步骤中，<strong>摆放书的顺序与给定图书数组 </strong><code>books</code><strong> 顺序相同</strong>。</p>&#10;&#10;<ul>&#10;	<li>例如，如果这里有 5 本书，那么可能的一种摆放情况是：第一和第二本书放在第一层书架上，第三本书放在第二层书架上，第四和第五本书放在最后一层书架上。</li>&#10;</ul>&#10;&#10;<p>每一层所摆放的书的最大高度就是这一层书架的层高，书架整体的高度为各层高之和。</p>&#10;&#10;<p>以这种方式布置书架，返回书架整体可能的最小高度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1105.Filling%20Bookcase%20Shelves/images/shelves.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>&#10;3 层书架的高度和为 1 + 3 + 2 = 6 。&#10;第 2 本书不必放在第一层书架上。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> books = [[1,3],[2,4],[3,2]], shelfWidth = 6&#10;<strong>输出:</strong> 4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= books.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= thickness<sub>i</sub> &lt;= shelfWidth &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= height<sub>i</sub> &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每本书可单独开一层，或与前面若干本同层，决策随层划分指数增长。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，可用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 动态规划。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为摆放前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 本书的最小总高度。最后一层以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>k</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 结尾，自后向前扩张同层书籍并累加宽度，一旦超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>h</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>f</mi>
  <mi>W</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 即可停止；层高取这些书的最大高度，再接上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。从后往前枚举同时保证宽度单调增加。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 本书摆放的最小高度，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，最后一本书为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>k</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，其厚度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，高度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span>。</p>
<ul>
<li>如果这本书单独摆放在新的一层，那么有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>h</mi>
</math></span>；</li>
<li>如果这本书可以与前面的最后几本书摆放在同一层，我们从后往前枚举同一层的第一本书 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，将书的厚度累积到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mo>&gt;</mo>
  <mi>s</mi>
  <mi>h</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>f</mi>
  <mi>W</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span>，说明此时的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>k</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 已经无法与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>k</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 摆放在同一层，停止枚举；否则我们更新当前层的最大高度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>k</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，那么此时有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ul>
<p>最终的答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>k</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minHeightShelves(books [][]int, shelfWidth int) int {</span></span>
<span class="line"><span>	n := len(books)</span></span>
<span class="line"><span>	f := make([]int, n+1)</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		w, h := books[i-1][0], books[i-1][1]</span></span>
<span class="line"><span>		f[i] = f[i-1] + h</span></span>
<span class="line"><span>		for j := i - 1; j > 0; j-- {</span></span>
<span class="line"><span>			w += books[j-1][0]</span></span>
<span class="line"><span>			if w > shelfWidth {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			h = max(h, books[j-1][1])</span></span>
<span class="line"><span>			f[i] = min(f[i], f[j-1]+h)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[n]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/filling-bookcase-shelves" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1105.Filling%20Bookcase%20Shelves/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1125" tabindex="-1">1125. 最小的必要团队 <a class="header-anchor" href="#q-1125" aria-label="Permalink to &quot;1125. 最小的必要团队 {#q-1125}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、动态规划、位掩码</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>作为项目经理，你规划了一份需求的技能清单 <code>req_skills</code>，并打算从备选人员名单 <code>people</code> 中选出些人组成一个「必要团队」（ 编号为 <code>i</code> 的备选人员 <code>people[i]</code> 含有一份该备选人员掌握的技能列表）。</p>&#10;&#10;<p>所谓「必要团队」，就是在这个团队中，对于所需求的技能列表 <code>req_skills</code> 中列出的每项技能，团队中至少有一名成员已经掌握。可以用每个人的编号来表示团队中的成员：</p>&#10;&#10;<ul>&#10;	<li>例如，团队 <code>team = [0, 1, 3]</code> 表示掌握技能分别为 <code>people[0]</code>，<code>people[1]</code>，和 <code>people[3]</code> 的备选人员。</li>&#10;</ul>&#10;&#10;<p>请你返回 <strong>任一</strong> 规模最小的必要团队，团队成员用人员编号表示。你可以按 <strong>任意顺序</strong> 返回答案，题目数据保证答案存在。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>req_skills = [&quot;java&quot;,&quot;nodejs&quot;,&quot;reactjs&quot;], people = [[&quot;java&quot;],[&quot;nodejs&quot;],[&quot;nodejs&quot;,&quot;reactjs&quot;]]&#10;<strong>输出：</strong>[0,2]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>req_skills = [&quot;algorithms&quot;,&quot;math&quot;,&quot;java&quot;,&quot;reactjs&quot;,&quot;csharp&quot;,&quot;aws&quot;], people = [[&quot;algorithms&quot;,&quot;math&quot;,&quot;java&quot;],[&quot;algorithms&quot;,&quot;math&quot;,&quot;reactjs&quot;],[&quot;java&quot;,&quot;csharp&quot;,&quot;aws&quot;],[&quot;reactjs&quot;,&quot;csharp&quot;],[&quot;csharp&quot;,&quot;math&quot;],[&quot;aws&quot;,&quot;java&quot;]]&#10;<strong>输出：</strong>[1,2]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= req_skills.length &lt;= 16</code></li>&#10;	<li><code>1 &lt;= req_skills[i].length &lt;= 16</code></li>&#10;	<li><code>req_skills[i]</code> 由小写英文字母组成</li>&#10;	<li><code>req_skills</code> 中的所有字符串 <strong>互不相同</strong></li>&#10;	<li><code>1 &lt;= people.length &lt;= 60</code></li>&#10;	<li><code>0 &lt;= people[i].length &lt;= 16</code></li>&#10;	<li><code>1 &lt;= people[i][j].length &lt;= 16</code></li>&#10;	<li><code>people[i][j]</code> 由小写英文字母组成</li>&#10;	<li><code>people[i]</code> 中的所有字符串 <strong>互不相同</strong></li>&#10;	<li><code>people[i]</code> 中的每个技能是 <code>req_skills</code> 中的技能</li>&#10;	<li>题目数据保证「必要团队」一定存在</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：状态压缩动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>技能种数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2264;</mo>
  <mn>16</mn>
</math></span>，子集可用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
</math></span> 个状态表示；对人的组合枚举则达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span>。把每人掌握的技能压成掩码 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为覆盖技能集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的最少人数。</p>
<p>对每个已达状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 尝试加入第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 人，转移到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2223;</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。另用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo>,</mo>
  <mi>h</mi>
</math></span> 记下最后加入的人与上一状态，从全集沿指针回溯即可还原下标列表。</p>
</blockquote>
<p>我们注意到，技能清单 <code v-pre>req_skills</code> 的长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>16</mn>
</math></span>，因此，我们可以用一个长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>16</mn>
</math></span> 的二进制数来表示每一种技能是否被掌握。不妨记数组 <code v-pre>req_skills</code> 的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，数组 <code v-pre>people</code> 的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。</p>
<p>我们先将 <code v-pre>req_skills</code> 中的每个技能映射到一个编号，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示技能 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的编号。然后，我们遍历 <code v-pre>people</code> 中的每个人，将其掌握的技能用二进制数表示，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示编号为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的人掌握的技能。</p>
<p>接下来，我们定义以下三个数组，其中：</p>
<ul>
<li>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示掌握技能集合为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的最少人数，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的二进制表示中的每一位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的位置，表示对应的技能被掌握。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，其余位置均为无穷大。</li>
<li>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示掌握技能集合为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的最少人数时，最后一个人的编号。</li>
<li>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示掌握技能集合为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的最少人数时，上一个技能集合状态。</li>
</ul>
<p>我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <msup>
    <mn>.2</mn>
    <mi>m</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的范围内枚举每个技能集合，对于每个技能集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>：</p>
<p>我们枚举 <code v-pre>people</code> 中的每个人 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&lt;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 可以通过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 转移得到，此时，我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，同时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。即当前技能集合状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，最后一个人的编号为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，上一个技能集合状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。这里符号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 表示按位或运算。</p>
<p>最后，我们从技能集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 开始，找到此时最后一个人的编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，将其加入答案中，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，不断地向前回溯，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，即可得到最小的必要团队中的人员编号。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>m</mi>
  </msup>
  <mo>&#xD7;</mo>
  <mi>n</mi>
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
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为 <code v-pre>req_skills</code> 和 <code v-pre>people</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestSufficientTeam(req_skills []string, people [][]string) (ans []int) {</span></span>
<span class="line"><span>	d := map[string]int{}</span></span>
<span class="line"><span>	for i, s := range req_skills {</span></span>
<span class="line"><span>		d[s] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m, n := len(req_skills), len(people)</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	for i, ss := range people {</span></span>
<span class="line"><span>		for _, s := range ss {</span></span>
<span class="line"><span>			p[i] |= 1 &#x3C;&#x3C; d[s]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const inf = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	f := make([]int, 1&#x3C;&#x3C;m)</span></span>
<span class="line"><span>	g := make([]int, 1&#x3C;&#x3C;m)</span></span>
<span class="line"><span>	h := make([]int, 1&#x3C;&#x3C;m)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = inf</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[0] = 0</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		if f[i] == inf {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if f[i]+1 &#x3C; f[i|p[j]] {</span></span>
<span class="line"><span>				f[i|p[j]] = f[i] + 1</span></span>
<span class="line"><span>				g[i|p[j]] = j</span></span>
<span class="line"><span>				h[i|p[j]] = i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1&#x3C;&#x3C;m - 1; i != 0; i = h[i] {</span></span>
<span class="line"><span>		ans = append(ans, g[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/smallest-sufficient-team" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1125.Smallest%20Sufficient%20Team/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1130" tabindex="-1">1130. 叶值的最小代价生成树 <a class="header-anchor" href="#q-1130" aria-label="Permalink to &quot;1130. 叶值的最小代价生成树 {#q-1130}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、数组、动态规划、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数数组 <code>arr</code>，考虑所有满足以下条件的二叉树：</p>&#10;&#10;<ul>&#10;	<li>每个节点都有 <code>0</code> 个或是 <code>2</code> 个子节点。</li>&#10;	<li>数组 <code>arr</code> 中的值与树的中序遍历中每个叶节点的值一一对应。</li>&#10;	<li>每个非叶节点的值等于其左子树和右子树中叶节点的最大值的乘积。</li>&#10;</ul>&#10;&#10;<p>在所有这样的二叉树中，返回每个非叶节点的值的最小可能总和。这个和的值是一个 32 位整数。</p>&#10;&#10;<p>如果一个节点有 0 个子节点，那么该节点为叶节点。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1130.Minimum%20Cost%20Tree%20From%20Leaf%20Values/images/tree1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>arr = [6,2,4]&#10;<strong>输出：</strong>32&#10;<strong>解释：</strong>有两种可能的树，第一种的非叶节点的总和为 36 ，第二种非叶节点的总和为 32 。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1130.Minimum%20Cost%20Tree%20From%20Leaf%20Values/images/tree2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>arr = [4,11]&#10;<strong>输出：</strong>44&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= arr.length &lt;= 40</code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 15</code></li>&#10;	<li>答案保证是一个 32 位带符号整数，即小于 <code>2<sup>31</sup></code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>中序叶序列固定，树形由切分位置决定。枚举所有切分的递归若不记忆会重复计算同一区间。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 返回区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的最小非叶代价与叶最大值；枚举切点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，左右代价加上两侧叶最大值之积。区间数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>、切点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，记忆化后为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>根据题目描述，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中的值与树的中序遍历中每个叶节点的值一一对应，我们可以将数组划分为左右两个非空子数组，分别对应树的左右子树，递归地求解每个子树的所有非叶节点的值的最小可能总和。</p>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中下标范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的所有非叶节点的值的最小可能总和，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的计算过程如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>j</mi>
</math></span>，说明数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中只有一个元素，没有非叶节点，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。</li>
<li>否则，我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 划分为两个子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x22EF;</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&#x22EF;</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，我们递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中下标范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的所有非叶节点的值的最小可能总和，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中下标范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的所有非叶节点的值的最小可能总和，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <munder>
    <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2264;</mo>
      <mi>k</mi>
      <mo>&lt;</mo>
      <mi>j</mi>
    </mrow>
  </munder>
  <mo fence="false" stretchy="false">{</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <munder>
    <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2264;</mo>
      <mi>t</mi>
      <mo>&#x2264;</mo>
      <mi>k</mi>
    </mrow>
  </munder>
  <mo fence="false" stretchy="false">{</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo fence="false" stretchy="false">}</mo>
  <munder>
    <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&lt;</mo>
      <mi>t</mi>
      <mo>&#x2264;</mo>
      <mi>j</mi>
    </mrow>
  </munder>
  <mo fence="false" stretchy="false">{</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo fence="false" stretchy="false">}</mo>
  <mo fence="false" stretchy="false">}</mo>
</math></span>。</li>
</ul>
<p>综上所述，我们可以得到：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mn>0</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mtext mathvariant="italic">if&#xA0;</mtext>
          <mi>i</mi>
          <mo>=</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <munder>
            <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
            <mrow data-mjx-texclass="ORD">
              <mi>i</mi>
              <mo>&#x2264;</mo>
              <mi>k</mi>
              <mo>&lt;</mo>
              <mi>j</mi>
            </mrow>
          </munder>
          <mo fence="false" stretchy="false">{</mo>
          <mi>d</mi>
          <mi>f</mi>
          <mi>s</mi>
          <mo stretchy="false">(</mo>
          <mi>i</mi>
          <mo>,</mo>
          <mi>k</mi>
          <mo stretchy="false">)</mo>
          <mo>+</mo>
          <mi>d</mi>
          <mi>f</mi>
          <mi>s</mi>
          <mo stretchy="false">(</mo>
          <mi>k</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>,</mo>
          <mi>j</mi>
          <mo stretchy="false">)</mo>
          <mo>+</mo>
          <munder>
            <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
            <mrow data-mjx-texclass="ORD">
              <mi>i</mi>
              <mo>&#x2264;</mo>
              <mi>t</mi>
              <mo>&#x2264;</mo>
              <mi>k</mi>
            </mrow>
          </munder>
          <mo fence="false" stretchy="false">{</mo>
          <mi>a</mi>
          <mi>r</mi>
          <mi>r</mi>
          <mo stretchy="false">[</mo>
          <mi>t</mi>
          <mo stretchy="false">]</mo>
          <mo fence="false" stretchy="false">}</mo>
          <munder>
            <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
            <mrow data-mjx-texclass="ORD">
              <mi>k</mi>
              <mo>&lt;</mo>
              <mi>t</mi>
              <mo>&#x2264;</mo>
              <mi>j</mi>
            </mrow>
          </munder>
          <mo fence="false" stretchy="false">{</mo>
          <mi>a</mi>
          <mi>r</mi>
          <mi>r</mi>
          <mo stretchy="false">[</mo>
          <mi>t</mi>
          <mo stretchy="false">]</mo>
          <mo fence="false" stretchy="false">}</mo>
          <mo fence="false" stretchy="false">}</mo>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mtext mathvariant="italic">if&#xA0;</mtext>
          <mi>i</mi>
          <mo>&lt;</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>上述递归过程中，我们可以使用记忆化搜索的方法，避免重复计算。另外，我们还可以使用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 记录数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中下标范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的所有叶节点的最大值，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的计算过程可以优化为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mn>0</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mtext mathvariant="italic">if&#xA0;</mtext>
          <mi>i</mi>
          <mo>=</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <munder>
            <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
            <mrow data-mjx-texclass="ORD">
              <mi>i</mi>
              <mo>&#x2264;</mo>
              <mi>k</mi>
              <mo>&lt;</mo>
              <mi>j</mi>
            </mrow>
          </munder>
          <mo fence="false" stretchy="false">{</mo>
          <mi>d</mi>
          <mi>f</mi>
          <mi>s</mi>
          <mo stretchy="false">(</mo>
          <mi>i</mi>
          <mo>,</mo>
          <mi>k</mi>
          <mo stretchy="false">)</mo>
          <mo>+</mo>
          <mi>d</mi>
          <mi>f</mi>
          <mi>s</mi>
          <mo stretchy="false">(</mo>
          <mi>k</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>,</mo>
          <mi>j</mi>
          <mo stretchy="false">)</mo>
          <mo>+</mo>
          <mi>g</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo stretchy="false">]</mo>
          <mo>&#x22C5;</mo>
          <mi>g</mi>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo fence="false" stretchy="false">}</mo>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mtext mathvariant="italic">if&#xA0;</mtext>
          <mi>i</mi>
          <mo>&lt;</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mctFromLeafValues(arr []int) int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for i := range g {</span></span>
<span class="line"><span>		f[i] = make([]int, n)</span></span>
<span class="line"><span>		g[i] = make([]int, n)</span></span>
<span class="line"><span>		g[i][i] = arr[i]</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			g[i][j] = max(g[i][j-1], arr[j])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(int, int) int</span></span>
<span class="line"><span>	dfs = func(i, j int) int {</span></span>
<span class="line"><span>		if i == j {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][j] > 0 {</span></span>
<span class="line"><span>			return f[i][j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i][j] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>		for k := i; k &#x3C; j; k++ {</span></span>
<span class="line"><span>			f[i][j] = min(f[i][j], dfs(i, k)+dfs(k+1, j)+g[i][k]*g[k+1][j])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return f[i][j]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, n-1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一的递归栈与哈希缓存可改成区间 DP。先预处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为区间最大叶，再按区间长度递推 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，转移式与记忆化相同，避免递归开销。</p>
</blockquote>
<p>我们可以将方法一中的记忆化搜索改为动态规划的方式进行求解。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中下标范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的所有非叶节点的值的最小可能总和，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中下标范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的所有叶节点的最大值，那么状态转移方程为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mn>0</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mtext mathvariant="italic">if&#xA0;</mtext>
          <mi>i</mi>
          <mo>=</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <munder>
            <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
            <mrow data-mjx-texclass="ORD">
              <mi>i</mi>
              <mo>&#x2264;</mo>
              <mi>k</mi>
              <mo>&lt;</mo>
              <mi>j</mi>
            </mrow>
          </munder>
          <mo fence="false" stretchy="false">{</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo stretchy="false">]</mo>
          <mo>+</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo>+</mo>
          <mi>g</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo stretchy="false">]</mo>
          <mo>&#x22C5;</mo>
          <mi>g</mi>
          <mo stretchy="false">[</mo>
          <mi>k</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo fence="false" stretchy="false">}</mo>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mtext mathvariant="italic">if&#xA0;</mtext>
          <mi>i</mi>
          <mo>&lt;</mo>
          <mi>j</mi>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mctFromLeafValues(arr []int) int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for i := range g {</span></span>
<span class="line"><span>		f[i] = make([]int, n)</span></span>
<span class="line"><span>		g[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		g[i][i] = arr[i]</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			g[i][j] = max(g[i][j-1], arr[j])</span></span>
<span class="line"><span>			f[i][j] = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>			for k := i; k &#x3C; j; k++ {</span></span>
<span class="line"><span>				f[i][j] = min(f[i][j], f[i][k]+f[k+1][j]+g[i][k]*g[k+1][j])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[0][n-1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-cost-tree-from-leaf-values" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1130.Minimum%20Cost%20Tree%20From%20Leaf%20Values/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1137" tabindex="-1">1137. 第 N 个泰波那契数 <a class="header-anchor" href="#q-1137" aria-label="Permalink to &quot;1137. 第 N 个泰波那契数 {#q-1137}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：记忆化、数学、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>泰波那契序列 T<sub>n</sub> 定义如下： </p>&#10;&#10;<p>T<sub>0</sub> = 0, T<sub>1</sub> = 1, T<sub>2</sub> = 1, 且在 n >= 0 的条件下 T<sub>n+3</sub> = T<sub>n</sub> + T<sub>n+1</sub> + T<sub>n+2</sub></p>&#10;&#10;<p>给你整数 <code>n</code>，请返回第 n 个泰波那契数 T<sub>n </sub>的值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 4&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>&#10;T_3 = 0 + 1 + 1 = 2&#10;T_4 = 1 + 1 + 2 = 4&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 25&#10;<strong>输出：</strong>1389537&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= n &lt;= 37</code></li>&#10;	<li>答案保证是一个 32 位整数，即 <code>answer &lt;= 2^31 - 1</code>。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>泰波那契由三项递推定义， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>37</mn>
</math></span> 时线性递推足够。用三个变量滚动保存最近三项，循环 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次后返回第一项，空间为常数。</p>
</blockquote>
<p>根据题目中给出的递推式，我们可以使用动态规划求解。</p>
<p>我们定义三个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，分别表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>3</mn>
    </mrow>
  </msub>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>2</mn>
    </mrow>
  </msub>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
</math></span>，初始值分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>然后从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 减小到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，每次更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 的值，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时，答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为给定的整数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func tribonacci(n int) int {</span></span>
<span class="line"><span>	a, b, c := 0, 1, 1</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		a, b, c = b, c, a+b+c</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return a</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：矩阵快速幂加速递推 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。将递推写成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#xD7;</mo>
  <mn>3</mn>
</math></span> 状态乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <mn>3</mn>
</math></span> 转移矩阵后，可用快速幂在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 次矩阵乘法得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mi>n</mi>
  </msub>
</math></span>，适合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 更大的情形。</p>
</blockquote>
<p>我们设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mi>i</mi>
  <mi>b</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#xD7;</mo>
  <mn>3</mn>
</math></span> 的矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <msub>
            <mi>T</mi>
            <mi>n</mi>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>1</mn>
            </mrow>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>2</mn>
            </mrow>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mi>n</mi>
  </msub>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>2</mn>
    </mrow>
  </msub>
</math></span> 分别表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个、第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个和第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span> 个泰波那契数。</p>
<p>我们希望根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mi>i</mi>
  <mi>b</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>1</mn>
            </mrow>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>2</mn>
            </mrow>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>3</mn>
            </mrow>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span> 推出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mi>i</mi>
  <mi>b</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。也即是说，我们需要一个矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mi>i</mi>
  <mi>b</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mo>=</mo>
  <mi>T</mi>
  <mi>i</mi>
  <mi>b</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>1</mn>
            </mrow>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>2</mn>
            </mrow>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>3</mn>
            </mrow>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
  <mo>&#xD7;</mo>
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <msub>
            <mi>T</mi>
            <mi>n</mi>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>1</mn>
            </mrow>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>T</mi>
            <mrow data-mjx-texclass="ORD">
              <mi>n</mi>
              <mo>&#x2212;</mo>
              <mn>2</mn>
            </mrow>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span><p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mi>n</mi>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>2</mn>
    </mrow>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>T</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>3</mn>
    </mrow>
  </msub>
</math></span>，所以矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
</math></span> 为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span><p>我们定义初始矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>T</mi>
    <mi>n</mi>
  </msub>
</math></span> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>a</mi>
  <mi>s</mi>
  <msup>
    <mi>e</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>3</mn>
    </mrow>
  </msup>
</math></span> 的结果矩阵中所有元素之和。使用矩阵快速幂求解即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func tribonacci(n int) (ans int) {</span></span>
<span class="line"><span>	if n == 0 {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n &#x3C; 3 {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a := [][]int{{1, 1, 0}, {1, 0, 1}, {1, 0, 0}}</span></span>
<span class="line"><span>	res := pow(a, n-3)</span></span>
<span class="line"><span>	for _, x := range res[0] {</span></span>
<span class="line"><span>		ans += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func mul(a, b [][]int) [][]int {</span></span>
<span class="line"><span>	m, n := len(a), len(b[0])</span></span>
<span class="line"><span>	c := make([][]int, m)</span></span>
<span class="line"><span>	for i := range c {</span></span>
<span class="line"><span>		c[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			for k := 0; k &#x3C; len(b); k++ {</span></span>
<span class="line"><span>				c[i][j] += a[i][k] * b[k][j]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return c</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func pow(a [][]int, n int) [][]int {</span></span>
<span class="line"><span>	res := [][]int{{1, 1, 0}}</span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		if n&#x26;1 == 1 {</span></span>
<span class="line"><span>			res = mul(res, a)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		a = mul(a, a)</span></span>
<span class="line"><span>		n >>= 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return res</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/n-th-tribonacci-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1137.N-th%20Tribonacci%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1139" tabindex="-1">1139. 最大的以 1 为边界的正方形 <a class="header-anchor" href="#q-1139" aria-label="Permalink to &quot;1139. 最大的以 1 为边界的正方形 {#q-1139}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个由若干 <code>0</code> 和 <code>1</code> 组成的二维网格 <code>grid</code>，请你找出边界全部由 <code>1</code> 组成的最大 <strong>正方形</strong> 子网格，并返回该子网格中的元素数量。如果不存在，则返回 <code>0</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>grid = [[1,1,1],[1,0,1],[1,1,1]]&#10;<strong>输出：</strong>9&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>grid = [[1,1,0,0]]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= grid.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= grid[0].length &lt;= 100</code></li>&#10;	<li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断边长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的正方形四边是否全为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，若每次再扫边则立方之上还要乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。从每个格子预处理向下、向右连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的长度后，四条边是否够长均可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 判定。</p>
<p>从大到小枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 再枚举左上角，第一次成立即得最大面积，避免继续检查更小正方形。</p>
</blockquote>
<p>我们可以使用前缀和的方法预处理出每个位置向下和向右的连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数，记为 <code v-pre>down[i][j]</code> 和 <code v-pre>right[i][j]</code>。</p>
<p>然后我们枚举正方形的边长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，从最大的边长开始枚举，然后枚举正方形的左上角位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果满足条件，即可返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>k</mi>
    <mn>2</mn>
  </msup>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>,</mo>
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
</math></span> 分别是网格的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largest1BorderedSquare(grid [][]int) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	down := make([][]int, m)</span></span>
<span class="line"><span>	right := make([][]int, m)</span></span>
<span class="line"><span>	for i := range down {</span></span>
<span class="line"><span>		down[i] = make([]int, n)</span></span>
<span class="line"><span>		right[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := m - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		for j := n - 1; j >= 0; j-- {</span></span>
<span class="line"><span>			if grid[i][j] == 1 {</span></span>
<span class="line"><span>				down[i][j], right[i][j] = 1, 1</span></span>
<span class="line"><span>				if i+1 &#x3C; m {</span></span>
<span class="line"><span>					down[i][j] += down[i+1][j]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if j+1 &#x3C; n {</span></span>
<span class="line"><span>					right[i][j] += right[i][j+1]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for k := min(m, n); k > 0; k-- {</span></span>
<span class="line"><span>		for i := 0; i &#x3C;= m-k; i++ {</span></span>
<span class="line"><span>			for j := 0; j &#x3C;= n-k; j++ {</span></span>
<span class="line"><span>				if down[i][j] >= k &#x26;&#x26; right[i][j] >= k &#x26;&#x26; right[i+k-1][j] >= k &#x26;&#x26; down[i][j+k-1] >= k {</span></span>
<span class="line"><span>					return k * k</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-1-bordered-square" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1139.Largest%201-Bordered%20Square/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1140" tabindex="-1">1140. 石子游戏 II <a class="header-anchor" href="#q-1140" aria-label="Permalink to &quot;1140. 石子游戏 II {#q-1140}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：极小化极大、数组、数学、动态规划、博弈、前缀和、零和博弈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Alice 和 Bob 继续他们的石子游戏。许多堆石子 <strong>排成一行</strong>，每堆都有正整数颗石子 <code>piles[i]</code>。游戏以谁手中的石子最多来决出胜负。</p>&#10;&#10;<p>Alice 和 Bob 轮流进行，Alice 先开始。最初，<code>M = 1</code>。</p>&#10;&#10;<p>在每个玩家的回合中，该玩家可以拿走剩下的 <strong>前</strong> <code>X</code> 堆的所有石子，其中 <code>1 &lt;= X &lt;= 2M</code>。然后，令 <code>M = max(M, X)</code>。</p>&#10;&#10;<p>游戏一直持续到所有石子都被拿走。</p>&#10;&#10;<p>假设 Alice 和 Bob 都发挥出最佳水平，返回 Alice 可以得到的最大数量的石头。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>piles = [2,7,9,4,4]&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>如果一开始 Alice 取了一堆，Bob 取了两堆，然后 Alice 再取两堆。Alice 可以得到 2 + 4 + 4 = 10 堆。&#10;如果 Alice 一开始拿走了两堆，那么 Bob 可以拿走剩下的三堆。在这种情况下，Alice 得到 2 + 7 = 9 堆。返回 10，因为它更大。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>piles = [1,2,3,4,5,100]&#10;<strong>输出：</strong>104&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= piles.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= piles[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>双方轮流从剩余前缀取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1.</mn>
  <mn>.2</mn>
  <mi>M</mi>
</math></span> 堆，状态为起点下标与当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span>。直接搜索重复子问题很多。前缀和给出「从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到末尾的石子总和」，当前人得到的是该总和减去对手在新状态的最优。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>M</mi>
</math></span> 已覆盖剩余堆，则一次取完；否则枚举取堆数并记忆化。爱丽丝从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 出发。</p>
</blockquote>
<p>由于玩家每次可以拿走前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>X</mi>
</math></span> 堆的所有石子，也就是说能拿走一个区间的石子，因此，我们可以先预处理出一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示数组 <code v-pre>piles</code> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素的和。</p>
<p>然后我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示当前轮到的人可以从数组 <code v-pre>piles</code> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 开始拿，且当前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 时，当前轮到的人能够拿到的最大石子数。初始时爱丽丝从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，所以我们需要求的答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span> 的计算过程如下：</p>
<ul>
<li>如果当前轮到的人可以拿走剩下的所有石子，能够拿到的最大石子数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>；</li>
<li>否则，当前轮到的人可以拿走剩下的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 堆的所有石子，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mn>2</mn>
  <mi>m</mi>
</math></span>，能够拿到的最大石子数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。也即是说，当前轮的人能够拿到的石子数为当前剩下的所有石子数减去下一轮对手能够拿到的石子数。我们需要枚举所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，取其中的最大值作为函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span> 的返回值。</li>
</ul>
<p>为了避免重复计算，我们可以使用记忆化搜索。</p>
<p>最后，我们返回将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 作为答案返回即可。</p>
<p>时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <code v-pre>piles</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func stoneGameII(piles []int) int {</span></span>
<span class="line"><span>	n := len(piles)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	for i, x := range piles {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>		f[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(i, m int) int</span></span>
<span class="line"><span>	dfs = func(i, m int) int {</span></span>
<span class="line"><span>		if m*2 >= n-i {</span></span>
<span class="line"><span>			return s[n] - s[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][m] > 0 {</span></span>
<span class="line"><span>			return f[i][m]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i][m] = 0</span></span>
<span class="line"><span>		for x := 1; x &#x3C;= m&#x3C;&#x3C;1; x++ {</span></span>
<span class="line"><span>			f[i][m] = max(f[i][m], s[n]-s[i]-dfs(i+x, max(m, x)))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return f[i][m]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, 1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/stone-game-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1140.Stone%20Game%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1143" tabindex="-1">1143. 最长公共子序列 <a class="header-anchor" href="#q-1143" aria-label="Permalink to &quot;1143. 最长公共子序列 {#q-1143}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、动态规划、最长公共子序列</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个字符串 <code>text1</code> 和 <code>text2</code>，返回这两个字符串的最长 <strong>公共子序列</strong> 的长度。如果不存在 <strong>公共子序列</strong> ，返回 <code>0</code> 。</p>&#10;&#10;<p>一个字符串的 <strong>子序列</strong><em> </em>是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;ace&quot;</code> 是 <code>&quot;abcde&quot;</code> 的子序列，但 <code>&quot;aec&quot;</code> 不是 <code>&quot;abcde&quot;</code> 的子序列。</li>&#10;</ul>&#10;&#10;<p>两个字符串的 <strong>公共子序列</strong> 是这两个字符串所共同拥有的子序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text1 = &quot;abcde&quot;, text2 = &quot;ace&quot; &#10;<strong>输出：</strong>3  &#10;<strong>解释：</strong>最长公共子序列是 &quot;ace&quot; ，它的长度为 3 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text1 = &quot;abc&quot;, text2 = &quot;abc&quot;&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>最长公共子序列是 &quot;abc&quot; ，它的长度为 3 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text1 = &quot;abc&quot;, text2 = &quot;def&quot;&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>两个字符串没有公共子序列，返回 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code></li>&#10;	<li><code>text1</code> 和 <code>text2</code> 仅由小写英文字符组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>公共子序列不必连续，枚举所有子序列再匹配代价过高。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示两串前缀的 LCS 长度：末字符相同则由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 加一，否则取少用一侧字符的较大值。按前缀长度递推，每个格子只依赖更短前缀。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>1</mn>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>2</mn>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个字符的最长公共子序列的长度。那么答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>1</mn>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>2</mn>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个字符相同，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>1</mn>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>2</mn>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个字符不同，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。即状态转移方程为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>+</mo>
          <mn>1</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>t</mi>
          <mi>e</mi>
          <mi>x</mi>
          <mi>t</mi>
          <mn>1</mn>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>=</mo>
          <mi>t</mi>
          <mi>e</mi>
          <mi>x</mi>
          <mi>t</mi>
          <mn>2</mn>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
          <mo stretchy="false">(</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo>,</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">)</mo>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>t</mi>
          <mi>e</mi>
          <mi>x</mi>
          <mi>t</mi>
          <mn>1</mn>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>&#x2260;</mo>
          <mi>t</mi>
          <mi>e</mi>
          <mi>x</mi>
          <mi>t</mi>
          <mn>2</mn>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestCommonSubsequence(text1 string, text2 string) int {</span></span>
<span class="line"><span>	m, n := len(text1), len(text2)</span></span>
<span class="line"><span>	f := make([][]int, m+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			if text1[i-1] == text2[j-1] {</span></span>
<span class="line"><span>				f[i][j] = f[i-1][j-1] + 1</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				f[i][j] = max(f[i-1][j], f[i][j-1])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[m][n]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-common-subsequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1143.Longest%20Common%20Subsequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1147" tabindex="-1">1147. 段式回文 <a class="header-anchor" href="#q-1147" aria-label="Permalink to &quot;1147. 段式回文 {#q-1147}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、双指针、字符串、动态规划、哈希函数、滚动哈希</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你会得到一个字符串 <code>text</code> 。你应该把它分成 <code>k</code> 个子字符串 <code>(subtext1, subtext2，…， subtextk)</code> ，要求满足:</p>&#10;&#10;<ul>&#10;	<li><code>subtext<sub>i</sub></code><sub> </sub>是 <strong>非空 </strong>字符串</li>&#10;	<li>所有子字符串的连接等于 <code>text</code> ( 即<code>subtext<sub>1</sub> + subtext<sub>2</sub> + ... + subtext<sub>k</sub> == text</code> )</li>&#10;	<li>对于所有 <span><span>i</span></span> 的有效值( 即 <code>1 &lt;= i &lt;= k</code> ) ，<code>subtext<sub>i</sub> == subtext<sub>k - i + 1</sub></code> 均成立</li>&#10;</ul>&#10;&#10;<p>返回<code>k</code>可能最大值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text = &quot;ghiabcdefhelloadamhelloabcdefghi&quot;&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>我们可以把字符串拆分成 &quot;(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text = &quot;merchant&quot;&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>我们可以把字符串拆分成 &quot;(merchant)&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text = &quot;antaprezatepzapreanta&quot;&#10;<strong>输出：</strong>11&#10;<strong>解释：</strong>我们可以把字符串拆分成 &quot;(a)(nt)(a)(pre)(za)(tep)(za)(pre)(a)(nt)(a)&quot;。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= text.length &lt;= 1000</code></li>&#10;	<li><code>text</code> 仅由小写英文字符组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>段式回文要求左右段文字相等。为使段数最多，应尽量切出最短的一对相等前后缀：更长的一对总可以再拆。双指针从两端增长长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，一旦 <code v-pre>text[i:i+k]</code> 与右端对应串相等就切下并各进 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，中间剩一段则再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们可以从字符串的两端开始，寻找长度最短的、相同且不重叠的前后缀：</p>
<ul>
<li>如果找不到这样的前后缀，那么整个字符串作为一个段式回文，答案加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；</li>
<li>如果找到了这样的前后缀，那么这个前后缀作为一个段式回文，答案加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，然后继续寻找剩下的字符串的前后缀。</li>
</ul>
<p>以上贪心策略的证明如下：</p>
<p>假设有一个前后缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>A</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>A</mi>
    <mn>2</mn>
  </msub>
</math></span> 满足条件，又有一个前后缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>4</mn>
  </msub>
</math></span> 满足条件，由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>A</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>A</mi>
    <mn>2</mn>
  </msub>
</math></span>，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>B</mi>
    <mn>4</mn>
  </msub>
</math></span>，那么有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>3</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>B</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>B</mi>
    <mn>4</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>B</mi>
    <mn>2</mn>
  </msub>
</math></span>，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>C</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>C</mi>
    <mn>2</mn>
  </msub>
</math></span>，因此，如果我们贪心地将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>4</mn>
  </msub>
</math></span> 分割出来，那么剩下的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>C</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>C</mi>
    <mn>2</mn>
  </msub>
</math></span>，以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>2</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>B</mi>
    <mn>3</mn>
  </msub>
</math></span> 也能成功分割。因此我们应该贪心地选择长度最短的相同前后缀进行分割，这样剩余的字符串中，将可能分割出更多的段式回文串。</p>
<p>&lt;p&gt;&lt;img alt=&quot;&quot; src=&quot;<a href="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1147.Longest%20Chunked%20Palindrome%20Decomposition/images/demo.png&amp;quot" target="_blank" rel="noopener noreferrer">https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1147.Longest Chunked Palindrome Decomposition/images/demo.png&amp;quot</a>; style=&quot;width: 300px;&quot; /&gt;&lt;/p&gt;</p>
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
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestDecomposition(text string) (ans int) {</span></span>
<span class="line"><span>	for i, j := 0, len(text)-1; i &#x3C;= j; {</span></span>
<span class="line"><span>		ok := false</span></span>
<span class="line"><span>		for k := 1; i+k-1 &#x3C; j-k+1; k++ {</span></span>
<span class="line"><span>			if text[i:i+k] == text[j-k+1:j+1] {</span></span>
<span class="line"><span>				ans += 2</span></span>
<span class="line"><span>				i += k</span></span>
<span class="line"><span>				j -= k</span></span>
<span class="line"><span>				ok = true</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !ok {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：字符串哈希 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一每次用切片比较，最坏 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。预计算前缀哈希后，等长子串的相等性可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 判定，贪心切分策略不变，比较不再扫字符。</p>
</blockquote>
<p><strong>字符串哈希</strong>是把一个任意长度的字符串映射成一个非负整数，并且其冲突的概率几乎为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。字符串哈希用于计算字符串哈希值，快速判断两个字符串是否相等。</p>
<p>因此，在方法一的基础上，我们可以使用字符串哈希的方法，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 时间内比较两个字符串是否相等。</p>
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
</math></span> 为字符串的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestDecomposition(text string) (ans int) {</span></span>
<span class="line"><span>	n := len(text)</span></span>
<span class="line"><span>	base := 131</span></span>
<span class="line"><span>	h := make([]int, n+10)</span></span>
<span class="line"><span>	p := make([]int, n+10)</span></span>
<span class="line"><span>	p[0] = 1</span></span>
<span class="line"><span>	for i, c := range text {</span></span>
<span class="line"><span>		t := int(c-'a') + 1</span></span>
<span class="line"><span>		p[i+1] = p[i] * base</span></span>
<span class="line"><span>		h[i+1] = h[i]*base + t</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	get := func(l, r int) int {</span></span>
<span class="line"><span>		return h[r] - h[l-1]*p[r-l+1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i, j := 0, n-1; i &#x3C;= j; {</span></span>
<span class="line"><span>		ok := false</span></span>
<span class="line"><span>		for k := 1; i+k-1 &#x3C; j-k+1; k++ {</span></span>
<span class="line"><span>			if get(i+1, i+k) == get(j-k+2, j+1) {</span></span>
<span class="line"><span>				ans += 2</span></span>
<span class="line"><span>				i += k</span></span>
<span class="line"><span>				j -= k</span></span>
<span class="line"><span>				ok = true</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !ok {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-chunked-palindrome-decomposition" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1147.Longest%20Chunked%20Palindrome%20Decomposition/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1155" tabindex="-1">1155. 掷骰子等于目标和的方法数 <a class="header-anchor" href="#q-1155" aria-label="Permalink to &quot;1155. 掷骰子等于目标和的方法数 {#q-1155}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>这里有 <code>n</code> 个一样的骰子，每个骰子上都有 <code>k</code> 个面，分别标号为 <code>1</code> 到 <code>k</code> 。</p>&#10;&#10;<p>给定三个整数 <code>n</code>、<code>k</code> 和 <code>target</code>，请返回投掷骰子的所有可能得到的结果（共有 <code>k<sup>n</sup></code> 种方式），使得骰子面朝上的数字总和等于 <code>target</code>。</p>&#10;&#10;<p>由于答案可能很大，你需要对 <code>10<sup>9</sup> + 7</code> <strong>取模</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1, k = 6, target = 3&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>你掷了一个有 6 个面的骰子。&#10;得到总和为 3 的结果的方式只有一种。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2, k = 6, target = 7&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>你掷了两个骰子，每个骰子有 6 个面。&#10;有 6 种方式得到总和为 7 的结果: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 30, k = 30, target = 500&#10;<strong>输出：</strong>222616187&#10;<strong>解释：</strong>返回的结果必须对 10<sup>9</sup> + 7 取模。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n, k &lt;= 30</code></li>&#10;	<li><code>1 &lt;= target &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 面骰子组成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，枚举每个骰子朝向为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>k</mi>
    <mi>n</mi>
  </msup>
</math></span>。令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个骰子组成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的方案数，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个骰子点数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 时由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span> 转移。空骰子组成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 种，取模防止溢出。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示使用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个骰子，和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的方案数。那么我们可以得到状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>h</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
      <mo stretchy="false">(</mo>
      <mi>j</mi>
      <mo>,</mo>
      <mi>k</mi>
      <mo stretchy="false">)</mo>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span><p>其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个骰子的点数。</p>
<p>初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，最终的答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numRollsToTarget(n int, k int, target int) int {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, target+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[0][0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= min(target, i*k); j++ {</span></span>
<span class="line"><span>			for h := 1; h &#x3C;= min(j, k); h++ {</span></span>
<span class="line"><span>				f[i][j] = (f[i][j] + f[i-1][j-h]) % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[n][target]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划（滚动数组） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 只依赖 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。用两个一维数组滚动，空间从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，转移不变。</p>
</blockquote>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 只与上一行有关，用两个一维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 滚动即可，空间复杂度降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numRollsToTarget(n int, k int, target int) int {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	f := make([]int, target+1)</span></span>
<span class="line"><span>	f[0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		g := make([]int, target+1)</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= min(target, i*k); j++ {</span></span>
<span class="line"><span>			for h := 1; h &#x3C;= min(j, k); h++ {</span></span>
<span class="line"><span>				g[j] = (g[j] + f[j-h]) % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f = g</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[target]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1155.Number%20of%20Dice%20Rolls%20With%20Target%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1162" tabindex="-1">1162. 地图分析 <a class="header-anchor" href="#q-1162" aria-label="Permalink to &quot;1162. 地图分析 {#q-1162}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：广度优先搜索、数组、动态规划、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你现在手里有一份大小为 <code>n x n</code> 的 网格 <code>grid</code>，上面的每个 单元格 都用 <code>0</code> 和 <code>1</code> 标记好了。其中 <code>0</code> 代表海洋，<code>1</code> 代表陆地。</p>&#10;&#10;<p>请你找出一个海洋单元格，这个海洋单元格到离它最近的陆地单元格的距离是最大的，并返回该距离。如果网格上只有陆地或者海洋，请返回 <code>-1</code>。</p>&#10;&#10;<p>我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：<code>(x0, y0)</code> 和 <code>(x1, y1)</code> 这两个单元格之间的距离是 <code>|x0 - x1| + |y0 - y1|</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1162.As%20Far%20from%20Land%20as%20Possible/images/1336_ex1.jpeg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[1,0,1],[0,0,0],[1,0,1]]&#10;<strong>输出：</strong>2&#10;<strong>解释： </strong>&#10;海洋单元格 (1, 1) 和所有陆地单元格之间的距离都达到最大，最大距离为 2。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1162.As%20Far%20from%20Land%20as%20Possible/images/1336_ex2.jpeg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[1,0,0],[0,0,0],[0,0,0]]&#10;<strong>输出：</strong>4&#10;<strong>解释： </strong>&#10;海洋单元格 (2, 2) 和所有陆地单元格之间的距离都达到最大，最大距离为 4。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<p></p>&#10;&#10;<ul>&#10;	<li><code>n == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>grid[i][j]</code> 不是 <code>0</code> 就是 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>所求是海洋格到最近陆地的距离的最大值。对每个海洋分别 BFS 会重复访问。把全部陆地同时入队做多源 BFS，每扩散一层距离加一，最后一层海洋被染上的步数即最远距。全是陆地或全是海洋时不存在答案，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们可以将所有陆地单元格加入队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 中，如果队列为空，或者队列中元素个数等于网格中的单元格个数，则说明网格中只有陆地或者海洋，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>否则，我们从陆地单元格开始进行广度优先搜索。定义初始步数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>在每一轮搜索中，我们将队列中的所有单元格向四个方向扩散，若单元格是海洋单元格，则将其标记为陆地单元格，并加入队列。在一轮扩散完成后，我们将步数加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。重复这一过程，直到队列为空。</p>
<p>最后，我们返回步数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 是网格的边长。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxDistance(grid [][]int) int {</span></span>
<span class="line"><span>	n := len(grid)</span></span>
<span class="line"><span>	q := [][2]int{}</span></span>
<span class="line"><span>	for i, row := range grid {</span></span>
<span class="line"><span>		for j, v := range row {</span></span>
<span class="line"><span>			if v == 1 {</span></span>
<span class="line"><span>				q = append(q, [2]int{i, j})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := -1</span></span>
<span class="line"><span>	if len(q) == 0 || len(q) == n*n {</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dirs := [5]int{-1, 0, 1, 0, -1}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		for i := len(q); i > 0; i-- {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			for k := 0; k &#x3C; 4; k++ {</span></span>
<span class="line"><span>				x, y := p[0]+dirs[k], p[1]+dirs[k+1]</span></span>
<span class="line"><span>				if x >= 0 &#x26;&#x26; x &#x3C; n &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n &#x26;&#x26; grid[x][y] == 0 {</span></span>
<span class="line"><span>					grid[x][y] = 1</span></span>
<span class="line"><span>					q = append(q, [2]int{x, y})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/as-far-from-land-as-possible" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1162.As%20Far%20from%20Land%20as%20Possible/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const d=t(e,[["render",o]]);export{w as __pageData,d as default};
