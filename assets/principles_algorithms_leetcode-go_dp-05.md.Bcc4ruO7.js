import{_ as t,a,c as m,b as s}from"./chunks/framework.BSuaGltH.js";const w=JSON.parse('{"title":"LeetCode Go · 动态规划（5）","description":"动态规划分类，第 799–964 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 动态规划（5）","description":"动态规划分类，第 799–964 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"动态规划分类，第 799–964 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 动态规划（4）","link":"/principles/algorithms/leetcode-go/dp-04"},"next":{"text":"LeetCode Go · 动态规划（6）","link":"/principles/algorithms/leetcode-go/dp-06"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 动态规划（4）","link":"/principles/algorithms/leetcode-go/dp-04"},"next":{"text":"LeetCode Go · 动态规划（6）","link":"/principles/algorithms/leetcode-go/dp-06"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/dp-05.md","filePath":"principles/algorithms/leetcode-go/dp-05.md"}'),e={name:"principles/algorithms/leetcode-go/dp-05.md"};function o(i,n,l,p,h,c){return a(),m("div",null,[...n[0]||(n[0]=[s("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-动态规划-5" tabindex="-1">LeetCode Go · 动态规划（5） <a class="header-anchor" href="#leetcode-go-·-动态规划-5" aria-label="Permalink to &quot;LeetCode Go · 动态规划（5）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-799" tabindex="-1">799. 香槟塔 <a class="header-anchor" href="#q-799" aria-label="Permalink to &quot;799. 香槟塔 {#q-799}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们把玻璃杯摆成金字塔的形状，其中 <strong>第一层</strong> 有 <code>1</code> 个玻璃杯， <strong>第二层</strong> 有 <code>2</code> 个，依次类推到第 100 层，每个玻璃杯将盛有香槟。</p>&#10;&#10;<p>从顶层的第一个玻璃杯开始倾倒一些香槟，当顶层的杯子满了，任何溢出的香槟都会立刻等流量的流向左右两侧的玻璃杯。当左右两边的杯子也满了，就会等流量的流向它们左右两边的杯子，依次类推。（当最底层的玻璃杯满了，香槟会流到地板上）</p>&#10;&#10;<p>例如，在倾倒一杯香槟后，最顶层的玻璃杯满了。倾倒了两杯香槟后，第二层的两个玻璃杯各自盛放一半的香槟。在倒三杯香槟后，第二层的香槟满了 - 此时总共有三个满的玻璃杯。在倒第四杯后，第三层中间的玻璃杯盛放了一半的香槟，他两边的玻璃杯各自盛放了四分之一的香槟，如下图所示。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0700-0799/0799.Champagne%20Tower/images/tower.png" loading="lazy"></p>&#10;&#10;<p>现在当倾倒了非负整数杯香槟后，返回第 <code>i</code> 行 <code>j</code> 个玻璃杯所盛放的香槟占玻璃杯容积的比例（ <code>i</code> 和 <code>j</code> 都从0开始）。</p>&#10;&#10;<p> </p>&#10;&#10;<pre>&#10;<strong>示例 1:</strong>&#10;<strong>输入:</strong> poured(倾倒香槟总杯数) = 1, query_glass(杯子的位置数) = 1, query_row(行数) = 1&#10;<strong>输出:</strong> 0.00000&#10;<strong>解释:</strong> 我们在顶层（下标是（0，0））倒了一杯香槟后，没有溢出，因此所有在顶层以下的玻璃杯都是空的。&#10;&#10;<strong>示例 2:</strong>&#10;<strong>输入:</strong> poured(倾倒香槟总杯数) = 2, query_glass(杯子的位置数) = 1, query_row(行数) = 1&#10;<strong>输出:</strong> 0.50000&#10;<strong>解释:</strong> 我们在顶层（下标是（0，0）倒了两杯香槟后，有一杯量的香槟将从顶层溢出，位于（1，0）的玻璃杯和（1，1）的玻璃杯平分了这一杯香槟，所以每个玻璃杯有一半的香槟。&#10;</pre>&#10;&#10;<p></p>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> poured = 100000009, query_row = 33, query_glass = 17&#10;<strong>输出:</strong> 1.00000&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= poured &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= query_glass &lt;= query_row &lt; 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>从塔顶倒 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>d</mi>
</math></span> 杯，求指定杯的容积（至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>）。行数至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>99</mn>
</math></span>，按层模拟溢出。</p>
<p>一杯超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 则多出的一半流向左下与右下。先填当前杯再下溢，查到目标行即可。</p>
</blockquote>
<p>我们直接模拟倒香槟的过程。</p>
<p>定义一个二维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 层第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个玻璃杯中的香槟量。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>p</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>d</mi>
</math></span>。</p>
<p>对于每一层，如果当前杯子的香槟量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，香槟会流向下一层的两个杯子，流入的量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>f</mi>
      <mo stretchy="false">[</mo>
      <mi>i</mi>
      <mo stretchy="false">]</mo>
      <mo stretchy="false">[</mo>
      <mi>j</mi>
      <mo stretchy="false">]</mo>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，即当前杯子的香槟量减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 后除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，然后当前杯子的香槟量更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>模拟结束，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>q</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>y</mi>
  <mi mathvariant="normal">_</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>q</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>y</mi>
  <mi mathvariant="normal">_</mi>
  <mi>g</mi>
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
</math></span> 即可。</p>
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
</math></span> 为层数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>query_row</mtext>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func champagneTower(poured int, query_row int, query_glass int) float64 {</span></span>
<span class="line"><span>	f := [101][101]float64{}</span></span>
<span class="line"><span>	f[0][0] = float64(poured)</span></span>
<span class="line"><span>	for i := 0; i &#x3C;= query_row; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C;= i; j++ {</span></span>
<span class="line"><span>			if f[i][j] > 1 {</span></span>
<span class="line"><span>				half := (f[i][j] - 1) / 2.0</span></span>
<span class="line"><span>				f[i][j] = 1</span></span>
<span class="line"><span>				f[i+1][j] += half</span></span>
<span class="line"><span>				f[i+1][j+1] += half</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[query_row][query_glass]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：模拟（空间优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行只依赖第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 行，整表不必保留。一行滚动，溢出写入下一行数组。查询杯可能未满，与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 取最小。</p>
</blockquote>
<p>由于每一层的香槟量只与上一层的香槟量有关，因此我们可以用滚动数组的方式优化空间复杂度，将二维数组优化为一维数组。</p>
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
</math></span> 为层数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>query_row</mtext>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func champagneTower(poured int, query_row int, query_glass int) float64 {</span></span>
<span class="line"><span>	f := []float64{float64(poured)}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= query_row; i++ {</span></span>
<span class="line"><span>		g := make([]float64, i+1)</span></span>
<span class="line"><span>		for j, v := range f {</span></span>
<span class="line"><span>			if v > 1 {</span></span>
<span class="line"><span>				half := (v - 1) / 2.0</span></span>
<span class="line"><span>				g[j] += half</span></span>
<span class="line"><span>				g[j+1] += half</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f = g</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return math.Min(1, f[query_glass])</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/champagne-tower" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0799.Champagne%20Tower/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-801" tabindex="-1">801. 使序列递增的最小交换次数 <a class="header-anchor" href="#q-801" aria-label="Permalink to &quot;801. 使序列递增的最小交换次数 {#q-801}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们有两个长度相等且不为空的整型数组 <code>nums1</code> 和 <code>nums2</code> 。在一次操作中，我们可以交换 <code>nums1[i]</code> 和 <code>nums2[i]</code>的元素。</p>&#10;&#10;<ul>&#10;	<li>例如，如果 <code>nums1 = [1,2,3,<u>8</u>]</code> ， <code>nums2 =[5,6,7,<u>4</u>]</code> ，你可以交换 <code>i = 3</code> 处的元素，得到 <code>nums1 =[1,2,3,4]</code> 和 <code>nums2 =[5,6,7,8]</code> 。</li>&#10;</ul>&#10;&#10;<p>返回 <em>使 <code>nums1</code> 和 <code>nums2</code> <strong>严格递增 </strong>所需操作的最小次数</em> 。</p>&#10;&#10;<p>数组 <code>arr</code> <strong>严格递增</strong> 且  <code>arr[0] &lt; arr[1] &lt; arr[2] &lt; ... &lt; arr[arr.length - 1]</code> 。</p>&#10;&#10;<p><b>注意：</b></p>&#10;&#10;<ul>&#10;	<li>用例保证可以实现操作。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums1 = [1,3,5,4], nums2 = [1,2,3,7]&#10;<strong>输出:</strong> 1&#10;<strong>解释: </strong>&#10;交换 A[3] 和 B[3] 后，两个数组如下:&#10;A = [1, 3, 5, 7] ， B = [1, 2, 3, 4]&#10;两个数组均为严格递增的。</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]&#10;<strong>输出:</strong> 1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= nums1.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>nums2.length == nums1.length</code></li>&#10;	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 2 * 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个下标可选择交换或不交换，穷举全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 方案在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时不可行。某一位置能否保持两条序列严格递增，只取决于它与前一位置在交换后的相对大小。</p>
<p>为此记录做到当前位置且「本位置不换 / 本位置交换」的最少次数。转移按与前一位是否已经递增、以及交叉后是否仍递增分情况讨论；转移只依赖上一位置的两个状态，滚动两个变量即可。</p>
</blockquote>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 分别表示使得下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0.</mn>
  <mo>.</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的元素序列严格递增，且第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素不交换、交换的最小交换次数。下标从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 时，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span> 时，我们先将此前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 的值保存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 中，然后分情况讨论：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，为了使得两个序列均严格递增，下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 对应的元素的相对位置必须发生变化。也就是说，如果前一个位置交换了，那么当前位置不交换，因此有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mi>y</mi>
</math></span>；如果前一个位置没有交换，那么当前位置必须交换，因此有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>=</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>否则，下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 对应的元素的相对位置可以不发生变化，那么有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>=</mo>
  <mi>y</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。另外，如果满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 对应的元素的相对位置可以发生变化，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 可以取较小值，因此有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 中较小值即可。</p>
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
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minSwap(nums1 []int, nums2 []int) int {</span></span>
<span class="line"><span>	a, b, n := 0, 1, len(nums1)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		x, y := a, b</span></span>
<span class="line"><span>		if nums1[i-1] >= nums1[i] || nums2[i-1] >= nums2[i] {</span></span>
<span class="line"><span>			a, b = y, x+1</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			b = y + 1</span></span>
<span class="line"><span>			if nums1[i-1] &#x3C; nums2[i] &#x26;&#x26; nums2[i-1] &#x3C; nums1[i] {</span></span>
<span class="line"><span>				a = min(a, y)</span></span>
<span class="line"><span>				b = min(b, x+1)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return min(a, b)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0801.Minimum%20Swaps%20To%20Make%20Sequences%20Increasing/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-805" tabindex="-1">805. 数组的均值分割 <a class="header-anchor" href="#q-805" aria-label="Permalink to &quot;805. 数组的均值分割 {#q-805}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、哈希表、数学、动态规划、位掩码、中途相遇</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定你一个整数数组 <code>nums</code></p>&#10;&#10;<p>我们要将 <code>nums</code> 数组中的每个元素移动到 <code>A</code> 数组 或者 <code>B</code> 数组中，使得 <code>A</code> 数组和 <code>B</code> 数组不为空，并且 <code>average(A) == average(B)</code> 。</p>&#10;&#10;<p>如果可以完成则返回<code>true</code> ， 否则返回 <code>false</code>  。</p>&#10;&#10;<p><strong>注意：</strong>对于数组 <code>arr</code> ,  <code>average(arr)</code> 是 <code>arr</code> 的所有元素的和除以 <code>arr</code> 长度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,2,3,4,5,6,7,8]&#10;<strong>输出:</strong> true&#10;<strong>解释: </strong>我们可以将数组分割为 [1,4,5,8] 和 [2,3,6,7], 他们的平均值都是4.5。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [3,1]&#10;<strong>输出:</strong> false&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 30</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：折半查找 + 二进制枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>将数组分成两个非空子集且平均值相等，等价于存在大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子集其和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x22C5;</mo>
  <mrow data-mjx-texclass="ORD">
    <mi data-mjx-auto-op="false">avg</mi>
  </mrow>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>30</mn>
</math></span> 时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 枚举偏慢，但折半后每半约 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 个数，二进制枚举可接受。</p>
<p>先把每个数变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x22C5;</mo>
  <msub>
    <mi>a</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <mi>S</mi>
</math></span>，则目标转化为「存在非空真子集其和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>」。左半子集和放入集合，右半枚举时若自身为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或相反数已在左半出现（且不是全集对全集），即可判定。</p>
</blockquote>
<p>根据题目要求，要判断是否可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 划分为两个子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span>，使得两个子数组的平均值相等。</p>
<p>我们记数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，元素个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 的和以及个数分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 的和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mn>2</mn>
  </msub>
  <mo>=</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <msub>
    <mi>s</mi>
    <mn>1</mn>
  </msub>
</math></span>，个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span>，即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mfrac>
    <msub>
      <mi>s</mi>
      <mn>1</mn>
    </msub>
    <mi>k</mi>
  </mfrac>
  <mo>=</mo>
  <mfrac>
    <msub>
      <mi>s</mi>
      <mn>2</mn>
    </msub>
    <mrow>
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>k</mi>
    </mrow>
  </mfrac>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo>&#x2212;</mo>
      <msub>
        <mi>s</mi>
        <mn>1</mn>
      </msub>
    </mrow>
    <mrow>
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>k</mi>
    </mrow>
  </mfrac>
</math></span><p>整理可得：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msub>
    <mi>s</mi>
    <mn>1</mn>
  </msub>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <msub>
    <mi>s</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mi>k</mi>
</math></span><p>化简可得：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mfrac>
    <msub>
      <mi>s</mi>
      <mn>1</mn>
    </msub>
    <mi>k</mi>
  </mfrac>
  <mo>=</mo>
  <mfrac>
    <mi>s</mi>
    <mi>n</mi>
  </mfrac>
</math></span><p>也就是说，要我们找出一个子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span>，使得其平均值等于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的平均值。我们考虑将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 每个元素都减去数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的平均值，这样问题就转化为了在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中找出一个子数组，使得其和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>但是，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的平均值可能不是整数，浮点数计算可能存在精度问题，我们不妨将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的每个元素都乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">&#x2190;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span>，上述式子就变成：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mfrac>
    <mrow>
      <msub>
        <mi>s</mi>
        <mn>1</mn>
      </msub>
      <mo>&#xD7;</mo>
      <mi>n</mi>
    </mrow>
    <mi>k</mi>
  </mfrac>
  <mo>=</mo>
  <mi>s</mi>
</math></span><p>此时我们将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中每个元素都减去整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，题目就转化为：在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中找出一个子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span>，使得其和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度范围为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>30</mn>
  <mo stretchy="false">]</mo>
</math></span>，如果我们使用暴力枚举子数组的方法，时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，会超时。我们可以使用折半查找的方法，将时间复杂度降低到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mrow data-mjx-texclass="ORD">
        <mo>/</mo>
      </mrow>
      <mn>2</mn>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>我们将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 分成左右两部分，那么子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 可能存在三种情况：</p>
<ol>
<li>子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 完全在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的左半部分；</li>
<li>子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 完全在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的右半部分；</li>
<li>子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 一部分在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的左半部分，一部分在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的右半部分。</li>
</ol>
<p>我们可以使用二进制枚举的方法，先枚举左半部分所有子数组的和，如果存在一个子数组和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，直接返回 <code v-pre>true</code>，否则我们将其存入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">vis</mtext>
</math></span> 中；然后枚举右半部分所有子数组的和，如果存在一个子数组和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，直接返回 <code v-pre>true</code>，否则我们判断此时哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">vis</mtext>
</math></span> 中是否存在该和的相反数，如果存在，直接返回 <code v-pre>true</code>。</p>
<p>需要注意的是，我们不能同时全选左半部分和右半部分，因为这样会导致子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 为空，这是不符合题意的。在实现上，我们只需要考虑数组的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mfrac>
        <mi>n</mi>
        <mn>2</mn>
      </mfrac>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mfrac>
        <mi>n</mi>
        <mn>2</mn>
      </mfrac>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func splitArraySameAverage(nums []int) bool {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	if n == 1 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		s += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, v := range nums {</span></span>
<span class="line"><span>		nums[i] = v*n - s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m := n >> 1</span></span>
<span class="line"><span>	vis := map[int]bool{}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; 1&#x3C;&#x3C;m; i++ {</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for j, v := range nums[:m] {</span></span>
<span class="line"><span>			if (i >> j &#x26; 1) == 1 {</span></span>
<span class="line"><span>				t += v</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if t == 0 {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[t] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; 1&#x3C;&#x3C;(n-m); i++ {</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for j, v := range nums[m:] {</span></span>
<span class="line"><span>			if (i >> j &#x26; 1) == 1 {</span></span>
<span class="line"><span>				t += v</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if t == 0 || (i != (1&#x3C;&#x3C;(n-m))-1 &#x26;&#x26; vis[-t]) {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/split-array-with-same-average" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0805.Split%20Array%20With%20Same%20Average/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-808" tabindex="-1">808. 分汤 <a class="header-anchor" href="#q-808" aria-label="Permalink to &quot;808. 分汤 {#q-808}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、动态规划、概率与统计</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有两种汤，<strong>A</strong> 和 <strong>B</strong>，每种初始为 <code>n</code> 毫升。在每一轮中，会随机选择以下四种操作中的一种，每种操作的概率为 <code>0.25</code>，且与之前的所有轮次 <strong>无关</strong>：</p>&#10;&#10;<ol>&#10;	<li>从汤 A 取 100 毫升，从汤 B 取 0 毫升</li>&#10;	<li>从汤 A 取 75 毫升，从汤 B 取 25 毫升</li>&#10;	<li>从汤 A 取 50 毫升，从汤 B 取 50 毫升</li>&#10;	<li>从汤 A 取 25 毫升，从汤 B 取 75 毫升</li>&#10;</ol>&#10;&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li>不存在从汤 A 取 <code>0</code> ml 和从汤 B 取 <code>100</code> ml 的操作。</li>&#10;	<li>汤 A 和 B 在每次操作中同时被取出。</li>&#10;	<li>如果一次操作要求你取出比剩余的汤更多的量，请取出该汤剩余的所有部分。</li>&#10;</ul>&#10;&#10;<p>操作过程在任何回合中任一汤被取完后立即停止。</p>&#10;&#10;<p>返回汤 A 在 B 前取完的概率，加上两种汤在 <strong>同一回合 </strong>取完概率的一半。返回值在正确答案 <code>10<sup>-5</sup></code> 的范围内将被认为是正确的。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 50&#10;<strong>输出：</strong>0.62500&#10;<strong>解释：&#10;</strong>如果我们选择前两个操作<strong>，</strong>A 首先将变为空。&#10;对于第三个操作，A 和 B 会同时变为空。&#10;对于第四个操作，B 首先将变为空。<strong>&#10;</strong>所以 A 变为空的总概率加上 A 和 B 同时变为空的概率的一半是 0.25 *(1 + 1 + 0.5 + 0)= 0.625。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 100&#10;<strong>输出：</strong>0.71875&#10;<strong>解释：</strong>&#10;如果我们选择第一个操作，A 首先将变为空。&#10;如果我们选择第二个操作，A 将在执行操作 [1, 2, 3] 时变为空，然后 A 和 B 在执行操作 4 时同时变空。&#10;如果我们选择第三个操作，A 将在执行操作 [1, 2] 时变为空，然后 A 和 B 在执行操作 3 时同时变空。&#10;如果我们选择第四个操作，A 将在执行操作 1 时变为空，然后 A 和 B 在执行操作 2 时同时变空。&#10;所以 A 变为空的总概率加上 A 和 B 同时变为空的概率的一半是 0.71875。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>四种操作等概率减少汤量，求 A 先倒完的概率（同时倒完计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>）。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，按毫升逐步模拟不可行；注意到每次至少减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mrow data-mjx-texclass="ORD">
    <mi data-mjx-auto-op="false">ml</mi>
  </mrow>
</math></span>，可把状态缩到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>25</mn>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span> 的格点。</p>
<p>记忆化搜索 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示剩余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 份时的概率，边界按谁先耗尽返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 很大时 A 几乎必然先空，代码在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&gt;</mo>
  <mn>4800</mn>
</math></span> 时直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，避免状态爆炸。</p>
</blockquote>
<p>在这道题中，由于每次操作都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
</math></span> 的倍数，因此，我们可以将每 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
  <mi>m</mi>
  <mi>l</mi>
</math></span> 的汤视为一份。这样就能将数据规模缩小到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x2308;</mo>
    <mfrac>
      <mi>n</mi>
      <mn>25</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x2309;</mo>
  </mrow>
</math></span>。</p>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示当前剩余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 的结果概率。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span> 并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span> 时，表示两种汤都分配完了，此时应该返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.5</mn>
</math></span>；当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span> 时，表示汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 先分配完了，此时应该返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span> 时，表示汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 先分配完了，此时应该返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>接下来，对于每一次操作，我们都有四种选择，即：</p>
<ul>
<li>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 份，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 份；</li>
<li>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 份，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 份；</li>
<li>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 份，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 份；</li>
<li>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 份，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 份汤 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>B</mi>
</math></span> 中取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 份；</li>
</ul>
<p>每一种选择的概率都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.25</mn>
</math></span>，因此，我们可以得到：</p>
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
  <mn>0.25</mn>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>4</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>3</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>3</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span><p>记忆化搜索即可。</p>
<p>另外，我们发现在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>4800</mn>
</math></span> 时，结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.999994994426</mn>
</math></span>，而题目要求的精度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>5</mn>
    </mrow>
  </msup>
</math></span>，并且随着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的增大，结果越来越接近 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，因此，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&gt;</mo>
  <mn>4800</mn>
</math></span> 时，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>C</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>C</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>200</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func soupServings(n int) float64 {</span></span>
<span class="line"><span>	if n > 4800 {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := [200][200]float64{}</span></span>
<span class="line"><span>	var dfs func(i, j int) float64</span></span>
<span class="line"><span>	dfs = func(i, j int) float64 {</span></span>
<span class="line"><span>		if i &#x3C;= 0 &#x26;&#x26; j &#x3C;= 0 {</span></span>
<span class="line"><span>			return 0.5</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if i &#x3C;= 0 {</span></span>
<span class="line"><span>			return 1.0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if j &#x3C;= 0 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][j] > 0 {</span></span>
<span class="line"><span>			return f[i][j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := 0.25 * (dfs(i-4, j) + dfs(i-3, j-1) + dfs(i-2, j-2) + dfs(i-1, j-3))</span></span>
<span class="line"><span>		f[i][j] = ans</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs((n+24)/25, (n+24)/25)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/soup-servings" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0808.Soup%20Servings/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-813" tabindex="-1">813. 最大平均值和的分组 <a class="header-anchor" href="#q-813" aria-label="Permalink to &quot;813. 最大平均值和的分组 {#q-813}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定数组 <code>nums</code> 和一个整数 <code>k</code> 。我们将给定的数组 <code>nums</code> 分成 <strong>最多</strong> <code>k</code> 个非空子数组，且数组内部是连续的 。 <strong>分数</strong> 由每个子数组内的平均值的总和构成。</p>&#10;&#10;<p>注意我们必须使用 <code>nums</code> 数组中的每一个数进行分组，并且分数不一定需要是整数。</p>&#10;&#10;<p>返回我们所能得到的最大 <strong>分数</strong> 是多少。答案误差在 <code>10<sup>-6</sup></code> 内被视为是正确的。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [9,1,2,3,9], k = 3&#10;<strong>输出:</strong> 20.00000&#10;<strong>解释:</strong> &#10;nums 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20. &#10;我们也可以把 nums 分成[9, 1], [2], [3, 9]. &#10;这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值.&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,2,3,4,5,6,7], k = 4&#10;<strong>输出:</strong> 20.50000&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= nums.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把数组分成至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 段、最大化各段平均值之和。段的分界未知，朴素子集划分过多； <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，按「从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 起还剩 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 段」搜索并记忆化即可。</p>
<p>前缀和使一段 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的平均值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 可得。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 时整段只能作为最后一组；否则枚举第一段右端，递归剩余。</p>
</blockquote>
<p>我们可以先预处理得到前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，方便快速得到子数组的和。</p>
<p>接下来，我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从数组下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 开始，最多分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 组的最大平均值和。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行逻辑如下：</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span> 时，表示已经遍历到数组末尾，此时返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 时，表示只剩下一组，此时返回从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 开始到数组末尾的平均值。</p>
<p>否则，我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的区间内枚举下一个分组的开始位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，计算从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的平均值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>j</mi>
      <mo stretchy="false">]</mo>
      <mo>&#x2212;</mo>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>i</mi>
      <mo stretchy="false">]</mo>
    </mrow>
    <mrow>
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mi>i</mi>
    </mrow>
  </mfrac>
</math></span>，加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的结果，取所有结果的最大值。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestSumOfAverages(nums []int, k int) float64 {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([][]float64, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]float64, k+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(int, int) float64</span></span>
<span class="line"><span>	dfs = func(i, k int) float64 {</span></span>
<span class="line"><span>		if i == n {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][k] > 0 {</span></span>
<span class="line"><span>			return f[i][k]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if k == 1 {</span></span>
<span class="line"><span>			return float64(s[n]-s[i]) / float64(n-i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := 0.0</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			ans = math.Max(ans, float64(s[j]-s[i])/float64(j-i)+dfs(j, k-1))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i][k] = ans</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, k)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>记忆化搜索的递归深度与枚举顺序可以改写成递推，去掉递归常数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 组的最大平均值和，内层枚举上一组分界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span>。</p>
<p>边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 即前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数的平均值。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，复杂度同为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们可以将方法一的记忆化搜索转化为动态规划。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素最多分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 组的最大平均值和。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
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
</math></span>，我们可以枚举上一组的结束位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span>，计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>i</mi>
      <mo stretchy="false">]</mo>
      <mo>&#x2212;</mo>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>h</mi>
      <mo stretchy="false">]</mo>
    </mrow>
    <mrow>
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mi>h</mi>
    </mrow>
  </mfrac>
</math></span> 的结果，取所有结果的最大值。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestSumOfAverages(nums []int, k int) float64 {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([][]float64, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]float64, k+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		f[i][1] = float64(s[i]) / float64(i)</span></span>
<span class="line"><span>		for j := 2; j &#x3C;= min(i, k); j++ {</span></span>
<span class="line"><span>			for h := 0; h &#x3C; i; h++ {</span></span>
<span class="line"><span>				f[i][j] = max(f[i][j], f[h][j-1]+float64(s[i]-s[h])/float64(i-h))</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[n][k]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-sum-of-averages" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0813.Largest%20Sum%20of%20Averages/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-818" tabindex="-1">818. 赛车 <a class="header-anchor" href="#q-818" aria-label="Permalink to &quot;818. 赛车 {#q-818}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：动态规划、A* 搜索</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre>你的赛车可以从位置 <code>0</code> 开始，并且速度为 <code>+1</code> ，在一条无限长的数轴上行驶。赛车也可以向负方向行驶。赛车可以按照由加速指令 <code>'A'</code> 和倒车指令 <code>'R'</code> 组成的指令序列自动行驶。&#10;<ul>&#10;	<li>当收到指令 <code>'A'</code> 时，赛车这样行驶：&#10;	<ul>&#10;		<li><code>position += speed</code></li>&#10;		<li><code>speed *= 2</code></li>&#10;	</ul>&#10;	</li>&#10;	<li>当收到指令 <code>'R'</code> 时，赛车这样行驶：&#10;	<ul>&#10;		<li>如果速度为正数，那么<code>speed = -1</code></li>&#10;		<li>否则 <code>speed = 1</code></li>&#10;	</ul>&#10;	当前所处位置不变。</li>&#10;</ul>&#10;&#10;<p>例如，在执行指令 <code>&quot;AAR&quot;</code> 后，赛车位置变化为 <code>0 --> 1 --> 3 --> 3</code> ，速度变化为 <code>1 --> 2 --> 4 --> -1</code> 。</p>&#10;&#10;<p>给你一个目标位置 <code>target</code> ，返回能到达目标位置的最短指令序列的长度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>target = 3&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;最短指令序列是 &quot;AA&quot; 。&#10;位置变化 0 --> 1 --> 3 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>target = 6&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>&#10;最短指令序列是 &quot;AAARA&quot; 。&#10;位置变化 0 --> 1 --> 3 --> 7 --> 7 --> 6 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= target &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>指令序列对应在数轴上加速或掉头，目标位置可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，直接 BFS 状态（位置、速度）偏多。注意到连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次 A 到达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，任何目标都可由「越过再回头」或「中途回头再加速」拼成。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为到达位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的最少指令。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 则恰好 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次 A；否则比较「冲到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 再回头」以及在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次加速后提前回头走 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 步再折返的代价，取最小。</p>
</blockquote>
<p>设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示到达位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的最短指令序列的长度。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>对于任意位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，都有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>&#x2264;</mo>
  <mi>i</mi>
  <mo>&lt;</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
</math></span>，并且我们可以有三种方式到达位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，那么我们可以直接执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个 <code v-pre>A</code> 指令到达位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>k</mi>
</math></span>；</li>
<li>否则，我们可以先执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个 <code v-pre>A</code> 指令到达位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，然后执行 <code v-pre>R</code> 指令，剩余距离为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>；我们也可以先执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个 <code v-pre>A</code> 指令到达位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，然后执行 <code v-pre>R</code> 指令，接着执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>（其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>&#x2264;</mo>
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
</math></span>） 个 <code v-pre>A</code>，再执行 <code v-pre>R</code>，剩余距离为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>+</mo>
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>+</mo>
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>+</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>2</mn>
</math></span>。求出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的最小值即可。</li>
</ul>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func racecar(target int) int {</span></span>
<span class="line"><span>	dp := make([]int, target+1)</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= target; i++ {</span></span>
<span class="line"><span>		k := bits.Len(uint(i))</span></span>
<span class="line"><span>		if i == (1&#x3C;&#x3C;k)-1 {</span></span>
<span class="line"><span>			dp[i] = k</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dp[i] = dp[(1&#x3C;&#x3C;k)-1-i] + k + 1</span></span>
<span class="line"><span>		for j := 0; j &#x3C; k; j++ {</span></span>
<span class="line"><span>			dp[i] = min(dp[i], dp[i-(1&#x3C;&#x3C;(k-1))+(1&#x3C;&#x3C;j)]+k-1+j+2)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dp[target]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/race-car" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0818.Race%20Car/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-823" tabindex="-1">823. 带因子的二叉树 <a class="header-anchor" href="#q-823" aria-label="Permalink to &quot;823. 带因子的二叉树 {#q-823}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、动态规划、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出一个含有不重复整数元素的数组 <code>arr</code> ，每个整数 <code>arr[i]</code> 均大于 1。</p>&#10;&#10;<p>用这些整数来构建二叉树，每个整数可以使用任意次数。其中：每个非叶结点的值应等于它的两个子结点的值的乘积。</p>&#10;&#10;<p>满足条件的二叉树一共有多少个？答案可能很大，返回<strong> 对 </strong><code>10<sup>9</sup> + 7</code> <strong>取余</strong> 的结果。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>arr = [2, 4]</code>&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong> 可以得到这些二叉树: <code>[2], [4], [4, 2, 2]</code></pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>arr = [2, 4, 5, 10]</code>&#10;<strong>输出:</strong> <code>7</code>&#10;<strong>解释:</strong> 可以得到这些二叉树: <code>[2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2]</code>.</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 1000</code></li>&#10;	<li><code>2 &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>arr</code> 中的所有值 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>以数组中的数为结点、且孩子之积等于父结点，统计可构成的带标号二叉树。数组长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，值互不相同，应按值从小到大构造，以便孩子先于父亲算完。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为根的方案数，枚举左孩子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
</math></span> 也在数组中则累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>b</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x22C5;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span>。每个结点至少有一种单结点树，最后对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 求和取模。</p>
</blockquote>
<p>我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中的每一个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 作为二叉树的根节点（根节点一定最大），然后枚举枚举左子树的值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 整除，则右子树的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
</math></span> 也在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中，则可以构成一棵二叉树。此时，以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 为根节点的二叉树的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span> 分别为左子树和右子树的二叉树个数。</p>
<p>因此，我们先将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 排序，然后用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为根节点的二叉树的个数，最终答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。注意答案可能很大，需要对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
<p>时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numFactoredBinaryTrees(arr []int) int {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	sort.Ints(arr)</span></span>
<span class="line"><span>	f := make([]int, len(arr))</span></span>
<span class="line"><span>	idx := map[int]int{}</span></span>
<span class="line"><span>	for i, v := range arr {</span></span>
<span class="line"><span>		f[i] = 1</span></span>
<span class="line"><span>		idx[v] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, a := range arr {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			b := arr[j]</span></span>
<span class="line"><span>			if c := a / b; a%b == 0 {</span></span>
<span class="line"><span>				if k, ok := idx[c]; ok {</span></span>
<span class="line"><span>					f[i] = (f[i] + f[j]*f[k]) % mod</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for _, v := range f {</span></span>
<span class="line"><span>		ans = (ans + v) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/binary-trees-with-factors" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0823.Binary%20Trees%20With%20Factors/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-828" tabindex="-1">828. 统计子串中的唯一字符 <a class="header-anchor" href="#q-828" aria-label="Permalink to &quot;828. 统计子串中的唯一字符 {#q-828}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们定义了一个函数 <code>countUniqueChars(s)</code> 来统计字符串 <code>s</code> 中的唯一字符，并返回唯一字符的个数。</p>&#10;&#10;<p>例如：<code>s = &quot;LEETCODE&quot;</code> ，则其中 <code>&quot;L&quot;</code>, <code>&quot;T&quot;</code>,<code>&quot;C&quot;</code>,<code>&quot;O&quot;</code>,<code>&quot;D&quot;</code> 都是唯一字符，因为它们只出现一次，所以 <code>countUniqueChars(s) = 5</code> 。</p>&#10;&#10;<p>本题将会给你一个字符串 <code>s</code> ，我们需要返回 <code>countUniqueChars(t)</code> 的总和，其中 <code>t</code> 是 <code>s</code> 的子字符串。输入用例保证返回值为 32 位整数。</p>&#10;&#10;<p>注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 <code>s</code> 的所有子字符串中的唯一字符）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>s = &quot;ABC&quot;&#10;<strong>输出: </strong>10&#10;<strong>解释:</strong> 所有可能的子串为：&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;AB&quot;,&quot;BC&quot; 和 &quot;ABC&quot;。&#10;     其中，每一个子串都由独特字符构成。&#10;     所以其长度总和为：1 + 1 + 1 + 2 + 2 + 3 = 10&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>s = &quot;ABA&quot;&#10;<strong>输出: </strong>8&#10;<strong>解释: </strong>除了 countUniqueChars(&quot;ABA&quot;) = 1 之外，其余与示例 1 相同。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;LEETCODE&quot;&#10;<strong>输出：</strong>92&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 只包含大写英文字符</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计算每个字符的贡献 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子串数量达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时不能枚举。一个字符在某个子串中「唯一」当且仅当该子串覆盖它、且不覆盖同字母的相邻两次出现。</p>
<p>对每种字母记下出现下标，两端补哨兵。第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 次出现可与左侧空档、右侧空档独立组合，贡献为相邻间隔之积。对所有字母求和。</p>
</blockquote>
<p>对于字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>c</mi>
    <mi>i</mi>
  </msub>
</math></span>，当它在某个子字符串中仅出现一次时，它会对这个子字符串统计唯一字符时有贡献。</p>
<p>因此，我们只需要对每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>c</mi>
    <mi>i</mi>
  </msub>
</math></span>，计算有多少子字符串仅包含该字符一次即可。</p>
<p>我们用一个哈希表或者长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>，按照下标顺序存储每个字符在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中所有出现的位置。</p>
<p>对于每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>c</mi>
    <mi>i</mi>
  </msub>
</math></span>，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <msub>
    <mi>c</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">]</mo>
</math></span> 中的每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span>，找出左侧相邻的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和右侧相邻的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，那么从位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 向左右两边扩散，满足要求的子字符串的数量就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>p</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>p</mi>
  <mo stretchy="false">)</mo>
</math></span>。我们对每个字符都进行这样的操作，累加所有字符的贡献，即可得到答案。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func uniqueLetterString(s string) (ans int) {</span></span>
<span class="line"><span>	d := make([][]int, 26)</span></span>
<span class="line"><span>	for i := range d {</span></span>
<span class="line"><span>		d[i] = []int{-1}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		d[c-'A'] = append(d[c-'A'], i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, v := range d {</span></span>
<span class="line"><span>		v = append(v, len(s))</span></span>
<span class="line"><span>		for i := 1; i &#x3C; len(v)-1; i++ {</span></span>
<span class="line"><span>			ans += (v[i] - v[i-1]) * (v[i+1] - v[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-unique-characters-of-all-substrings-of-a-given-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0828.Count%20Unique%20Characters%20of%20All%20Substrings%20of%20a%20Given%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-837" tabindex="-1">837. 新 21 点 <a class="header-anchor" href="#q-837" aria-label="Permalink to &quot;837. 新 21 点 {#q-837}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、动态规划、滑动窗口、概率与统计</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>爱丽丝参与一个大致基于纸牌游戏 <strong>“21点”</strong> 规则的游戏，描述如下：</p>&#10;&#10;<p>爱丽丝以 <code>0</code> 分开始，并在她的得分少于 <code>k</code> 分时抽取数字。 抽取时，她从 <code>[1, maxPts]</code> 的范围中随机获得一个整数作为分数进行累计，其中 <code>maxPts</code> 是一个整数。 每次抽取都是独立的，其结果具有相同的概率。</p>&#10;&#10;<p>当爱丽丝获得 <code>k</code> 分 <strong>或更多分</strong> 时，她就停止抽取数字。</p>&#10;&#10;<p>爱丽丝的分数不超过 <code>n</code> 的概率是多少？</p>&#10;&#10;<p>与实际答案误差不超过 <code>10<sup>-5</sup></code> 的答案将被视为正确答案。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 10, k = 1, maxPts = 10&#10;<strong>输出：</strong>1.00000&#10;<strong>解释：</strong>爱丽丝得到一张牌，然后停止。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 6, k = 1, maxPts = 10&#10;<strong>输出：</strong>0.60000&#10;<strong>解释：</strong>爱丽丝得到一张牌，然后停止。 在 10 种可能性中的 6 种情况下，她的得分不超过 6 分。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 21, k = 17, maxPts = 10&#10;<strong>输出：</strong>0.73278&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= maxPts &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始每次均匀加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">]</mo>
</math></span>，达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 停止，求点数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的概率。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，按每次抽牌展开博弈树不可行，应对「当前点数」做记忆化。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 为已有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 点时的成功概率。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 时停止并按是否 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span> 返回； <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 可闭式算出。其余用相邻状态的差分把转移从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span> 降到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示当前分数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时，到最终停止抽取数字时，分数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的概率。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 的计算方法如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>，那么停止抽取数字，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>否则，可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">]</mo>
</math></span> 范围内抽取下一个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mrow>
      <mi>m</mi>
      <mi>a</mi>
      <mi>x</mi>
      <mi>P</mi>
      <mi>t</mi>
      <mi>s</mi>
    </mrow>
  </mfrac>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>m</mi>
      <mi>a</mi>
      <mi>x</mi>
      <mi>P</mi>
      <mi>t</mi>
      <mi>s</mi>
    </mrow>
  </munderover>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ul>
<p>这里我们可以使用记忆化搜索来加速计算。</p>
<p>以上方法的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>，会超出时间限制，我们需要优化一下。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
</math></span> 时，以下等式成立：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left right" columnspacing="0em 2em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>2</mn>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mo>&#x22EF;</mo>
        <mo>+</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext>&#xA0;</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">(</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 时，以下等式成立：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left right" columnspacing="0em 2em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>2</mn>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>3</mn>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mo>&#x22EF;</mo>
        <mo>+</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">(</mo>
        <mn>2</mn>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>因此，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 时，我们将等式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 减去等式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
</math></span>，得到：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo stretchy="false">)</mo>
        <mo>&#x2212;</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>&#x2212;</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mo stretchy="false">(</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>&#x2212;</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left right left" columnspacing="0em 2em 0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>k</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
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
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mo>&#x22EF;</mo>
        <mo>+</mo>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>k</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">(</mo>
        <mn>3</mn>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>我们假设有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，又因为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">maxPts</mtext>
</math></span>，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>，因此等式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>3</mn>
  <mo stretchy="false">)</mo>
</math></span> 可以写成：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>k</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo>&#x2212;</mo>
        <mi>k</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo>,</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>综上所述，有以下状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>d</mi>
        <mi>f</mi>
        <mi>s</mi>
        <mo stretchy="false">(</mo>
        <mi>i</mi>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow data-mjx-texclass="INNER">
          <mo data-mjx-texclass="OPEN">{</mo>
          <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
            <mtr>
              <mtd>
                <mn>1</mn>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>&#x2265;</mo>
                <mi>k</mi>
                <mo>,</mo>
                <mi>i</mi>
                <mo>&#x2264;</mo>
                <mi>n</mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>&#x2265;</mo>
                <mi>k</mi>
                <mo>,</mo>
                <mi>i</mi>
                <mo>&gt;</mo>
                <mi>n</mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
                <mo stretchy="false">(</mo>
                <mi>n</mi>
                <mo>&#x2212;</mo>
                <mi>k</mi>
                <mo>+</mo>
                <mn>1</mn>
                <mo>,</mo>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo stretchy="false">)</mo>
                <mrow data-mjx-texclass="ORD">
                  <mo>/</mo>
                </mrow>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>=</mo>
                <mi>k</mi>
                <mo>&#x2212;</mo>
                <mn>1</mn>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>d</mi>
                <mi>f</mi>
                <mi>s</mi>
                <mo stretchy="false">(</mo>
                <mi>i</mi>
                <mo>+</mo>
                <mn>1</mn>
                <mo stretchy="false">)</mo>
                <mo>+</mo>
                <mo stretchy="false">(</mo>
                <mi>d</mi>
                <mi>f</mi>
                <mi>s</mi>
                <mo stretchy="false">(</mo>
                <mi>i</mi>
                <mo>+</mo>
                <mn>1</mn>
                <mo stretchy="false">)</mo>
                <mo>&#x2212;</mo>
                <mi>d</mi>
                <mi>f</mi>
                <mi>s</mi>
                <mo stretchy="false">(</mo>
                <mi>i</mi>
                <mo>+</mo>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo>+</mo>
                <mn>1</mn>
                <mo stretchy="false">)</mo>
                <mo stretchy="false">)</mo>
                <mrow data-mjx-texclass="ORD">
                  <mo>/</mo>
                </mrow>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>&lt;</mo>
                <mi>k</mi>
                <mo>&#x2212;</mo>
                <mn>1</mn>
              </mtd>
            </mtr>
          </mtable>
          <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
        </mrow>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为最大分数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func new21Game(n int, k int, maxPts int) float64 {</span></span>
<span class="line"><span>	f := make([]float64, k)</span></span>
<span class="line"><span>	var dfs func(int) float64</span></span>
<span class="line"><span>	dfs = func(i int) float64 {</span></span>
<span class="line"><span>		if i >= k {</span></span>
<span class="line"><span>			if i &#x3C;= n {</span></span>
<span class="line"><span>				return 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if i == k-1 {</span></span>
<span class="line"><span>			return float64(min(n-k+1, maxPts)) / float64(maxPts)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i] > 0 {</span></span>
<span class="line"><span>			return f[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i] = dfs(i+1) + (dfs(i+1)-dfs(i+maxPts+1))/float64(maxPts)</span></span>
<span class="line"><span>		return f[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一已经从高分往低分填好这张表。同一转移是： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 与窗口右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 推出。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span> 的终止态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，其余为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，时间仍是线性的。</p>
</blockquote>
<p>方法一已经按上述转移填表。下面直接写出同一组递推。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示当前分数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时，到最终停止抽取数字时，分数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的概率。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 时，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 时，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mtext mathvariant="italic">maxPts</mtext>
</math></span>。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 时，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mtext mathvariant="italic">maxPts</mtext>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为最大分数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func new21Game(n int, k int, maxPts int) float64 {</span></span>
<span class="line"><span>	if k == 0 {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([]float64, k+maxPts)</span></span>
<span class="line"><span>	for i := k; i &#x3C; min(n+1, k+maxPts); i++ {</span></span>
<span class="line"><span>		f[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[k-1] = float64(min(n-k+1, maxPts)) / float64(maxPts)</span></span>
<span class="line"><span>	for i := k - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		f[i] = f[i+1] + (f[i+1]-f[i+maxPts+1])/float64(maxPts)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始每次均匀加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">]</mo>
</math></span>，达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 停止，求点数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的概率。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，按每次抽牌展开不可行。</p>
<p>差分之后，除了闭式的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，每个状态都先访问更大的分数。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 走到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的调用链长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，栈会溢出。</p>
<p>更大的分数在从高往低填时已经就绪。令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为当前点数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的成功概率，终止区间先写成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，再从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span> 填到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示当前分数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时，到最终停止抽取数字时，分数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的概率。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的取值如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>，那么停止抽取数字，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，则为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，否则为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>否则，可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">]</mo>
</math></span> 范围内抽取下一个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mrow>
      <mi>m</mi>
      <mi>a</mi>
      <mi>x</mi>
      <mi>P</mi>
      <mi>t</mi>
      <mi>s</mi>
    </mrow>
  </mfrac>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>m</mi>
      <mi>a</mi>
      <mi>x</mi>
      <mi>P</mi>
      <mi>t</mi>
      <mi>s</mi>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</li>
</ul>
<p>每个状态只依赖更大的分数，因此从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span> 填到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 时尚未抽牌，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>以上方法的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>，会超出时间限制，我们需要优化一下。</p>
<p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
</math></span> 时，以下等式成立：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left right" columnspacing="0em 2em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>2</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mo>&#x22EF;</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext>&#xA0;</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">(</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 时，以下等式成立：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left right" columnspacing="0em 2em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>2</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>3</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mo>&#x22EF;</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">(</mo>
        <mn>2</mn>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>因此，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 时，我们将等式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 减去等式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
</math></span>，得到：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
        <mo>&#x2212;</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>&#x2212;</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mo stretchy="false">(</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>&#x2212;</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left right left" columnspacing="0em 2em 0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>k</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
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
        <mo>+</mo>
        <mo>&#x22EF;</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>k</mi>
        <mo>+</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">(</mo>
        <mn>3</mn>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>我们假设有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，又因为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">maxPts</mtext>
</math></span>，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>，因此等式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>3</mn>
  <mo stretchy="false">)</mo>
</math></span> 可以写成：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>k</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo>&#x2212;</mo>
        <mi>k</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo>,</mo>
        <mtext mathvariant="italic">maxPts</mtext>
        <mo stretchy="false">)</mo>
        <mrow data-mjx-texclass="ORD">
          <mo>/</mo>
        </mrow>
        <mtext mathvariant="italic">maxPts</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>综上所述，有以下状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mrow data-mjx-texclass="INNER">
          <mo data-mjx-texclass="OPEN">{</mo>
          <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
            <mtr>
              <mtd>
                <mn>1</mn>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>&#x2265;</mo>
                <mi>k</mi>
                <mo>,</mo>
                <mi>i</mi>
                <mo>&#x2264;</mo>
                <mi>n</mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>&#x2265;</mo>
                <mi>k</mi>
                <mo>,</mo>
                <mi>i</mi>
                <mo>&gt;</mo>
                <mi>n</mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
                <mo stretchy="false">(</mo>
                <mi>n</mi>
                <mo>&#x2212;</mo>
                <mi>k</mi>
                <mo>+</mo>
                <mn>1</mn>
                <mo>,</mo>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo stretchy="false">)</mo>
                <mrow data-mjx-texclass="ORD">
                  <mo>/</mo>
                </mrow>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>=</mo>
                <mi>k</mi>
                <mo>&#x2212;</mo>
                <mn>1</mn>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>f</mi>
                <mo stretchy="false">[</mo>
                <mi>i</mi>
                <mo>+</mo>
                <mn>1</mn>
                <mo stretchy="false">]</mo>
                <mo>+</mo>
                <mo stretchy="false">(</mo>
                <mi>f</mi>
                <mo stretchy="false">[</mo>
                <mi>i</mi>
                <mo>+</mo>
                <mn>1</mn>
                <mo stretchy="false">]</mo>
                <mo>&#x2212;</mo>
                <mi>f</mi>
                <mo stretchy="false">[</mo>
                <mi>i</mi>
                <mo>+</mo>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo>+</mo>
                <mn>1</mn>
                <mo stretchy="false">]</mo>
                <mo stretchy="false">)</mo>
                <mrow data-mjx-texclass="ORD">
                  <mo>/</mo>
                </mrow>
                <mtext mathvariant="italic">maxPts</mtext>
                <mo>,</mo>
              </mtd>
              <mtd>
                <mi>i</mi>
                <mo>&lt;</mo>
                <mi>k</mi>
                <mo>&#x2212;</mo>
                <mn>1</mn>
              </mtd>
            </mtr>
          </mtable>
          <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
        </mrow>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">maxPts</mtext>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为最大分数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func new21Game(n int, k int, maxPts int) float64 {</span></span>
<span class="line"><span>	if k == 0 {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([]float64, k+maxPts)</span></span>
<span class="line"><span>	for i := k; i &#x3C; min(n+1, k+maxPts); i++ {</span></span>
<span class="line"><span>		f[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[k-1] = float64(min(n-k+1, maxPts)) / float64(maxPts)</span></span>
<span class="line"><span>	for i := k - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		f[i] = f[i+1] + (f[i+1]-f[i+maxPts+1])/float64(maxPts)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/new-21-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0837.New%2021%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-838" tabindex="-1">838. 推多米诺 <a class="header-anchor" href="#q-838" aria-label="Permalink to &quot;838. 推多米诺 {#q-838}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：双指针、字符串、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><code>n</code> 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。</p>&#10;&#10;<p>每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。</p>&#10;&#10;<p>如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。</p>&#10;&#10;<p>就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。</p>&#10;&#10;<p>给你一个字符串 <code>dominoes</code> 表示这一行多米诺骨牌的初始状态，其中：</p>&#10;&#10;<ul>&#10;	<li><code>dominoes[i] = 'L'</code>，表示第 <code>i</code> 张多米诺骨牌被推向左侧，</li>&#10;	<li><code>dominoes[i] = 'R'</code>，表示第 <code>i</code> 张多米诺骨牌被推向右侧，</li>&#10;	<li><code>dominoes[i] = '.'</code>，表示没有推动第 <code>i</code> 张多米诺骨牌。</li>&#10;</ul>&#10;&#10;<p>返回表示最终状态的字符串。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>dominoes = &quot;RR.L&quot;&#10;<strong>输出：</strong>&quot;RR.L&quot;&#10;<strong>解释：</strong>第一张多米诺骨牌没有给第二张施加额外的力。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0800-0899/0838.Push%20Dominoes/images/domino.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>dominoes = &quot;.L.R...LR..L..&quot;&#10;<strong>输出：</strong>&quot;LL.RR.LLRRLL..&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == dominoes.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>dominoes[i]</code> 为 <code>'L'</code>、<code>'R'</code> 或 <code>'.'</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：多源  BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>多米诺同时向左右倒，相向作用会抵消。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，模拟每一秒全体倾倒偏慢。力从已倒下的牌向外传播，等价于多源 BFS。</p>
<p>初始所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>R</mi>
</math></span> 入队。某格只在同一时刻收到一种力才倒下；同时收到左右力则保持竖直。按时间分层扩展即可得到最终状态。</p>
</blockquote>
<p>把所有初始受到推力的骨牌（<code v-pre>L</code>  或  <code v-pre>R</code>）视作 <strong>源点</strong>，它们会同时向外扩散各自的力。用队列按时间层级（0, 1, 2 …）进行  BFS：</p>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>time[i]</mtext>
</math></span>  记录第  <em>i</em>  张骨牌第一次受力的时刻，<code v-pre>-1</code>  表示尚未受力，定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>force[i]</mtext>
</math></span>  是一个长度可变的列表，存放该骨牌在同一时刻收到的方向（<code v-pre>'L'</code>、<code v-pre>'R'</code>）。初始时把所有  <code v-pre>L/R</code>  的下标压入队列，并将它们的时间置  0。</p>
<p>当弹出下标  <em>i</em> 时，若  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>force[i]</mtext>
</math></span>  只有一个方向，骨牌就会倒向该方向  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>。设下一张骨牌下标为</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>j</mi>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>f</mi>
          <mo>=</mo>
          <mi>L</mi>
          <mo>,</mo>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>i</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>f</mi>
          <mo>=</mo>
          <mi>R</mi>
          <mo>.</mo>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>若  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>&#x2264;</mo>
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>n</mi>
</math></span>：</p>
<ul>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>time[j]</mtext>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，说明  <em>j</em>  从未受力，记录 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>time[j]</mtext>
  <mo>=</mo>
  <mtext>time[i]</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 并入队，同时把  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 写入  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>force[j]</mtext>
</math></span>。</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>time[j]</mtext>
  <mo>=</mo>
  <mtext>time[i]</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，说明它在同一“下一刻”已受过另一股力，此时只把  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 追加到  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>force[j]</mtext>
</math></span>，形成对冲；后续因  <code v-pre>len(force[j])==2</code>，它将保持竖直。</li>
</ul>
<p>队列清空后，所有  <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>force[i]</mtext>
</math></span>  长度为  1  的位置倒向对应方向；长度为  2  的位置保持  <code v-pre>.</code>。最终将字符数组拼接为答案。</p>
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
</math></span> 是骨牌的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func pushDominoes(dominoes string) string {</span></span>
<span class="line"><span>	n := len(dominoes)</span></span>
<span class="line"><span>	q := []int{}</span></span>
<span class="line"><span>	time := make([]int, n)</span></span>
<span class="line"><span>	for i := range time {</span></span>
<span class="line"><span>		time[i] = -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	force := make([][]byte, n)</span></span>
<span class="line"><span>	for i, c := range dominoes {</span></span>
<span class="line"><span>		if c != '.' {</span></span>
<span class="line"><span>			q = append(q, i)</span></span>
<span class="line"><span>			time[i] = 0</span></span>
<span class="line"><span>			force[i] = append(force[i], byte(c))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ans := bytes.Repeat([]byte{'.'}, n)</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		i := q[0]</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		if len(force[i]) > 1 {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f := force[i][0]</span></span>
<span class="line"><span>		ans[i] = f</span></span>
<span class="line"><span>		j := i - 1</span></span>
<span class="line"><span>		if f == 'R' {</span></span>
<span class="line"><span>			j = i + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if 0 &#x3C;= j &#x26;&#x26; j &#x3C; n {</span></span>
<span class="line"><span>			t := time[i]</span></span>
<span class="line"><span>			if time[j] == -1 {</span></span>
<span class="line"><span>				q = append(q, j)</span></span>
<span class="line"><span>				time[j] = t + 1</span></span>
<span class="line"><span>				force[j] = append(force[j], f)</span></span>
<span class="line"><span>			} else if time[j] == t+1 {</span></span>
<span class="line"><span>				force[j] = append(force[j], f)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/push-dominoes" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0838.Push%20Dominoes/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-845" tabindex="-1">845. 数组中的最长山脉 <a class="header-anchor" href="#q-845" aria-label="Permalink to &quot;845. 数组中的最长山脉 {#q-845}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、动态规划、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>把符合下列属性的数组 <code>arr</code> 称为 <strong>山脉数组</strong> ：</p>&#10;&#10;<ul>&#10;	<li><code>arr.length >= 3</code></li>&#10;	<li>存在下标 <code>i</code>（<code>0 &lt; i &lt; arr.length - 1</code>），满足&#10;	<ul>&#10;		<li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li>&#10;		<li><code>arr[i] > arr[i + 1] > ... > arr[arr.length - 1]</code></li>&#10;	</ul>&#10;	</li>&#10;</ul>&#10;&#10;<p>给出一个整数数组 <code>arr</code>，返回最长山脉子数组的长度。如果不存在山脉子数组，返回 <code>0</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [2,1,4,7,3,2,5]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>最长的山脉子数组是 [1,4,7,3,2]，长度为 5。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [2,2,2]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>不存在山脉子数组。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong></p>&#10;&#10;<ul>&#10;	<li>你可以仅用一趟扫描解决此问题吗？</li>&#10;	<li>你可以用 <code>O(1)</code> 空间解决此问题吗？</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：预处理 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>山形子数组先严格上升再严格下降，长度至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举峰并分别向两侧扩展可行，但会重复走同一段坡。</p>
<p>预处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾的最长上升长度， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 开头的最长下降长度。仅当两侧都大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 时， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 才是一座山。</p>
</blockquote>
<p>我们定义两个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾的最长上升子序列的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 开头的最长下降子序列的长度。那么对于每个下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mn>1</mn>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mn>1</mn>
</math></span>，那么以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为山顶的山脉的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，我们只需要枚举所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，找出最大的那个值即可。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestMountain(arr []int) (ans int) {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	f := make([]int, n)</span></span>
<span class="line"><span>	g := make([]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = 1</span></span>
<span class="line"><span>		g[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if arr[i] > arr[i-1] {</span></span>
<span class="line"><span>			f[i] = f[i-1] + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := n - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		if arr[i] > arr[i+1] {</span></span>
<span class="line"><span>			g[i] = g[i+1] + 1</span></span>
<span class="line"><span>			if f[i] > 1 {</span></span>
<span class="line"><span>				ans = max(ans, f[i]+g[i]-1)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：一次遍历（枚举左侧山脚） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>两个辅助数组可以省掉。从左山脚出发一次扫描：先爬升到峰，再下降到右山脚，用区间长度更新答案，然后把左指针移到当前右端。</p>
<p>无法形成峰的位置直接前进。整段数组每个元素至多被左右指针各经过常数次。</p>
</blockquote>
<p>我们可以枚举山脉的左侧山脚，然后向右寻找山脉的右侧山脚。我们可以使用两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 表示左侧山脚的下标， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 表示右侧山脚的下标，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>,<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，然后我们向右移动 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，找到山顶的位置，此时判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 是否满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&lt;</mo>
  <mi>n</mi>
</math></span> 并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，如果满足，我们向右继续移动 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，直到找到右侧山脚的位置，此时山脉的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，我们更新答案，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 的值更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，继续寻找下一个山脉。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestMountain(arr []int) (ans int) {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	for l, r := 0, 0; l+2 &#x3C; n; l = r {</span></span>
<span class="line"><span>		r = l + 1</span></span>
<span class="line"><span>		if arr[l] &#x3C; arr[r] {</span></span>
<span class="line"><span>			for r+1 &#x3C; n &#x26;&#x26; arr[r] &#x3C; arr[r+1] {</span></span>
<span class="line"><span>				r++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if r+1 &#x3C; n &#x26;&#x26; arr[r] > arr[r+1] {</span></span>
<span class="line"><span>				for r+1 &#x3C; n &#x26;&#x26; arr[r] > arr[r+1] {</span></span>
<span class="line"><span>					r++</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				ans = max(ans, r-l+1)</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				r++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-mountain-in-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0845.Longest%20Mountain%20in%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-871" tabindex="-1">871. 最低加油次数 <a class="header-anchor" href="#q-871" aria-label="Permalink to &quot;871. 最低加油次数 {#q-871}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、动态规划、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>汽车从起点出发驶向目的地，该目的地位于出发位置东面 <code>target</code> 英里处。</p>&#10;&#10;<p>沿途有加油站，用数组 <code>stations</code> 表示。其中 <code>stations[i] = [position<sub>i</sub>, fuel<sub>i</sub>]</code> 表示第 <code>i</code> 个加油站位于出发位置东面 <code>position<sub>i</sub></code> 英里处，并且有 <code>fuel<sub>i</sub></code> 升汽油。</p>&#10;&#10;<p>假设汽车油箱的容量是无限的，其中最初有 <code>startFuel</code> 升燃料。它每行驶 1 英里就会用掉 1 升汽油。当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。</p>&#10;&#10;<p>为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 <code>-1</code> 。</p>&#10;&#10;<p>注意：如果汽车到达加油站时剩余燃料为 <code>0</code>，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 <code>0</code>，仍然认为它已经到达目的地。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>target = 1, startFuel = 1, stations = []&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>可以在不加油的情况下到达目的地。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>target = 100, startFuel = 1, stations = [[10,100]]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>无法抵达目的地，甚至无法到达第一个加油站。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;出发时有 10 升燃料。&#10;开车来到距起点 10 英里处的加油站，消耗 10 升燃料。将汽油从 0 升加到 60 升。&#10;然后，从 10 英里处的加油站开到 60 英里处的加油站（消耗 50 升燃料），&#10;并将汽油从 10 升加到 50 升。然后开车抵达目的地。&#10;沿途在两个加油站停靠，所以返回 2 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= target, startFuel &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= stations.length &lt;= 500</code></li>&#10;	<li><code>1 &lt;= position<sub>i</sub> &lt; position<sub>i+1</sub> &lt; target</code></li>&#10;	<li><code>1 &lt;= fuel<sub>i</sub> &lt; 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在加油站选择加油使到达终点的次数最少。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 很大而站数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span>，枚举加油子集可行但偏慢。关键是：走到下一站时若油不够，应补加「已经路过且油量最大」的站。</p>
<p>按位置扫描，把经过的油量放入大根堆；油箱为负就从堆中取出最大油量。堆空仍为负则不可达。终点当作最后一个站。</p>
</blockquote>
<p>我们可以利用优先队列（大根堆） <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 记录所有已经到达过的加油站的加油量，每次当油量不足时，贪心地取出最大加油量，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 的堆顶元素，并累计加油次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 为空并且当前油量仍然不足，说明无法到达目的地，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
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
</math></span> 表示加油站的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minRefuelStops(target int, startFuel int, stations [][]int) int {</span></span>
<span class="line"><span>	pq := &#x26;hp{}</span></span>
<span class="line"><span>	ans, pre := 0, 0</span></span>
<span class="line"><span>	stations = append(stations, []int{target, 0})</span></span>
<span class="line"><span>	for _, station := range stations {</span></span>
<span class="line"><span>		pos, fuel := station[0], station[1]</span></span>
<span class="line"><span>		dist := pos - pre</span></span>
<span class="line"><span>		startFuel -= dist</span></span>
<span class="line"><span>		for startFuel &#x3C; 0 &#x26;&#x26; pq.Len() > 0 {</span></span>
<span class="line"><span>			startFuel += heap.Pop(pq).(int)</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if startFuel &#x3C; 0 {</span></span>
<span class="line"><span>			return -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		heap.Push(pq, fuel)</span></span>
<span class="line"><span>		pre = pos</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp) Less(i, j int) bool { return h.IntSlice[i] > h.IntSlice[j] }</span></span>
<span class="line"><span>func (h *hp) Push(v any)        { h.IntSlice = append(h.IntSlice, v.(int)) }</span></span>
<span class="line"><span>func (h *hp) Pop() any {</span></span>
<span class="line"><span>	a := h.IntSlice</span></span>
<span class="line"><span>	v := a[len(a)-1]</span></span>
<span class="line"><span>	h.IntSlice = a[:len(a)-1]</span></span>
<span class="line"><span>	return v</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-number-of-refueling-stops" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0871.Minimum%20Number%20of%20Refueling%20Stops/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-873" tabindex="-1">873. 最长的斐波那契子序列的长度 <a class="header-anchor" href="#q-873" aria-label="Permalink to &quot;873. 最长的斐波那契子序列的长度 {#q-873}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果序列 <code>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></code> 满足下列条件，就说它是 <em>斐波那契式 </em>的：</p>&#10;&#10;<ul>&#10;	<li><code>n >= 3</code></li>&#10;	<li>对于所有 <code>i + 2 &lt;= n</code>，都有 <code>x<sub>i</sub> + x<sub>i+1</sub> == x<sub>i+2</sub></code></li>&#10;</ul>&#10;&#10;<p>给定一个 <strong>严格递增 </strong>的正整数数组形成序列 <code>arr</code> ，找到 <code><span><span><span>arr</span></span></span></code> 中最长的斐波那契式的子序列的长度。如果不存在，返回  <code>0</code> 。</p>&#10;&#10;<p><strong>子序列</strong> 是通过从另一个序列 <code>arr</code> 中删除任意数量的元素（包括删除 0 个元素）得到的，同时不改变剩余元素顺序。例如，<code>[3, 5, 8]</code> 是 <code>[3, 4, 5, 6, 7, 8]</code> 的子序列。</p>&#10;&#10;<p> </p>&#10;&#10;<ul>&#10;</ul>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>arr =<strong> </strong>[1,2,3,4,5,6,7,8]&#10;<strong>输出: </strong>5&#10;<strong>解释: </strong>最长的斐波那契式子序列为 [1,2,3,5,8] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>arr =<strong> </strong>[1,3,7,11,12,14,18]&#10;<strong>输出: </strong>3&#10;<strong>解释</strong>: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= arr.length &lt;= 1000</code></li>&#10;	<li>&#10;	<p><code>1 &lt;= arr[i] &lt; arr[i + 1] &lt;= 10<sup>9</sup></code></p>&#10;	</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在严格递增数组中找最长斐波那契子序列。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，枚举前两项再向后跳可行，但对同一对结尾会重复。</p>
<p>令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾的最长长度。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 出现在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 之前，则可接在那对后面。长度至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 才更新答案。</p>
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
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为最后一个元素，以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为倒数第二个元素的最长斐波那契子序列的长度。初始时，对于任意的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，都有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>2</mn>
</math></span>。其余的元素都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 中每个元素对应的下标。</p>
<p>然后，我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>。假设当前枚举到的元素是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们可以得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，记作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 中，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，那么我们可以得到一个以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为最后两个元素的斐波那契子序列，其长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。我们可以用这种方法不断更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值，然后更新答案。</p>
<p>枚举结束后，返回答案即可。</p>
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
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func lenLongestFibSubseq(arr []int) (ans int) {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	d := make(map[int]int)</span></span>
<span class="line"><span>	for i, x := range arr {</span></span>
<span class="line"><span>		d[x] = i</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			f[i][j] = 2</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 2; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			t := arr[i] - arr[j]</span></span>
<span class="line"><span>			if k, ok := d[t]; ok &#x26;&#x26; k &#x3C; j {</span></span>
<span class="line"><span>				f[i][j] = max(f[i][j], f[j][k]+1)</span></span>
<span class="line"><span>				ans = max(ans, f[i][j])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0873.Length%20of%20Longest%20Fibonacci%20Subsequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-877" tabindex="-1">877. 石子游戏 <a class="header-anchor" href="#q-877" aria-label="Permalink to &quot;877. 石子游戏 {#q-877}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：极小化极大、数组、数学、动态规划、博弈、零和博弈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Alice 和 Bob 用几堆石子在做游戏。一共有偶数堆石子，<strong>排成一行</strong>；每堆都有 <strong>正</strong> 整数颗石子，数目为 <code>piles[i]</code> 。</p>&#10;&#10;<p>游戏以谁手中的石子最多来决出胜负。石子的 <strong>总数</strong> 是 <strong>奇数</strong> ，所以没有平局。</p>&#10;&#10;<p>Alice 和 Bob 轮流进行，<strong>Alice 先开始</strong> 。 每回合，玩家从行的 <strong>开始</strong> 或 <strong>结束</strong> 处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中 <strong>石子最多</strong> 的玩家 <strong>获胜</strong> 。</p>&#10;&#10;<p>假设 Alice 和 Bob 都发挥出最佳水平，当 Alice 赢得比赛时返回 <code>true</code> ，当 Bob 赢得比赛时返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>piles = [5,3,4,5]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>&#10;Alice 先开始，只能拿前 5 颗或后 5 颗石子 。&#10;假设他取了前 5 颗，这一行就变成了 [3,4,5] 。&#10;如果 Bob 拿走前 3 颗，那么剩下的是 [4,5]，Alice 拿走后 5 颗赢得 10 分。&#10;如果 Bob 拿走后 5 颗，那么剩下的是 [3,4]，Alice 拿走后 4 颗赢得 9 分。&#10;这表明，取前 5 颗石子对 Alice 来说是一个胜利的举动，所以返回 true 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>piles = [3,7,2,3]&#10;<strong>输出：</strong>true&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= piles.length &lt;= 500</code></li>&#10;	<li><code>piles.length</code> 是 <strong>偶数</strong></li>&#10;	<li><code>1 &lt;= piles[i] &lt;= 500</code></li>&#10;	<li><code>sum(piles[i])</code> 是 <strong>奇数</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>两端取石子的零和博弈，求先手是否得分更高。堆数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span>，状态可用区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 上「当前手相对对手的净收益」表示。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
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
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的较大者。先手净收益为正即获胜。题目条件下先手必胜，但代码仍按区间 DP 写出。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 堆石子到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 堆石子，当前玩家与另一个玩家的石子数量之差的最大值。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的计算方法如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&gt;</mo>
  <mi>j</mi>
</math></span>，说明当前没有石子了，所以当前玩家没有石子可以拿，差值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<li>否则，当前玩家有两种选择，如果选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 堆石子，那么当前玩家与另一个玩家的石子数量之差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
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
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>；如果选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 堆石子，那么当前玩家与另一个玩家的石子数量之差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。当前玩家会选择两种情况中差值较大的情况，也就是说 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
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
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>,</mo>
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ul>
<p>最后，我们只需要判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span> 即可。</p>
<p>为了避免重复计算，我们可以使用记忆化搜索的方法，用一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 记录所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的值，当函数再次被调用到时，我们可以直接从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 中取出答案而不需要重新计算。</p>
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
</math></span> 是石子的堆数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func stoneGame(piles []int) bool {</span></span>
<span class="line"><span>	n := len(piles)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(i, j int) int</span></span>
<span class="line"><span>	dfs = func(i, j int) int {</span></span>
<span class="line"><span>		if i > j {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][j] == 0 {</span></span>
<span class="line"><span>			f[i][j] = max(piles[i]-dfs(i+1, j), piles[j]-dfs(i, j-1))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return f[i][j]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, n-1) > 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>记忆化搜索的区间转移可改成递推，去掉递归。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 上当前手的净收益，由长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的对角线向外填。</p>
<p>转移式与方法一相同。答案看 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 是否为正。</p>
</blockquote>
<p>我们也可以使用动态规划的方法，定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示当前玩家在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 这部分石子中能够获得的最大石子数的差值。那么最后答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>。</p>
<p>初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，因为只有一堆石子，所以当前玩家只能拿取这堆石子，差值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，有两种情况：</p>
<ul>
<li>如果当前玩家拿走了石子堆 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么剩下的石子堆为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1.</mn>
  <mo>.</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，此时轮到另一个玩家进行游戏，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</li>
<li>如果当前玩家拿走了石子堆 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么剩下的石子堆为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，此时轮到另一个玩家进行游戏，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</li>
</ul>
<p>因此，最终的状态转移方程为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
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
<p>最后，我们只需要判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span> 即可。</p>
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
</math></span> 是石子的堆数。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0400-0499/0486.Predict%20the%20Winner/README.md" target="_blank" rel="noopener noreferrer">486. 预测赢家</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func stoneGame(piles []int) bool {</span></span>
<span class="line"><span>	n := len(piles)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	for i, x := range piles {</span></span>
<span class="line"><span>		f[i] = make([]int, n)</span></span>
<span class="line"><span>		f[i][i] = x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := n - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			f[i][j] = max(piles[i]-f[i+1][j], piles[j]-f[i][j-1])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[0][n-1] > 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/stone-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0877.Stone%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-879" tabindex="-1">879. 盈利计划 <a class="header-anchor" href="#q-879" aria-label="Permalink to &quot;879. 盈利计划 {#q-879}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、背包问题、0-1 背包</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>集团里有 <code>n</code> 名员工，他们可以完成各种各样的工作创造利润。</p>&#10;&#10;<p>第 <code>i</code> 种工作会产生 <code>profit[i]</code> 的利润，它要求 <code>group[i]</code> 名成员共同参与。如果成员参与了其中一项工作，就不能参与另一项工作。</p>&#10;&#10;<p>工作的任何至少产生 <code>minProfit</code> 利润的子集称为 <strong>盈利计划</strong> 。并且工作的成员总数最多为 <code>n</code> 。</p>&#10;&#10;<p>有多少种计划可以选择？因为答案很大，所以<strong> 返回结果模 </strong><code>10^9 + 7</code><strong> 的值</strong>。</p>&#10;&#10;<div>&#10;<div>&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, minProfit = 3, group = [2,2], profit = [2,3]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>至少产生 3 的利润，该集团可以完成工作 0 和工作 1 ，或仅完成工作 1 。&#10;总的来说，有两种计划。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>至少产生 5 的利润，只要完成其中一种工作就行，所以该集团可以完成任何工作。&#10;有 7 种可能的计划：(0)，(1)，(2)，(0,1)，(0,2)，(1,2)，以及 (0,1,2) 。</pre>&#10;</div>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>0 &lt;= minProfit &lt;= 100</code></li>&#10;	<li><code>1 &lt;= group.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= group[i] &lt;= 100</code></li>&#10;	<li><code>profit.length == group.length</code></li>&#10;	<li><code>0 &lt;= profit[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个犯罪可选或不可选，受人数与最低利润约束，方案数取模。犯罪与人数规模有限，状态可记「考虑到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 项、已用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 人、已获利润（封顶到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">minProfit</mtext>
</math></span>）」。</p>
<p>记忆化 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>：不选则前进，人数够则再加选中的一支。利润封顶是为了让达到门槛后的状态合并。边界在物品用尽时看 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 是否已达门槛。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工作开始，且当前已经选择了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个员工，且当前产生的利润为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，这种情况下的方案数。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行过程如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span>，表示所有工作都已经考虑过了，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2265;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>，则方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，否则方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>n</mi>
</math></span>，我们可以选择不选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工作，此时方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>+</mo>
  <mi>g</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，我们也可以选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工作，此时方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mi>g</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mi>p</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。这里我们将利润上限限制在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>，是因为利润超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 对我们的答案没有任何影响。</li>
</ul>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 即可。</p>
<p>为了避免重复计算，我们可以使用记忆化搜索的方法，用一个三维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 记录所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 的结果。当我们计算出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 的值后，我们将其存入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 中。调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 已经被计算过，我们直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为工作的数量和员工的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 为至少产生的利润。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func profitableSchemes(n int, minProfit int, group []int, profit []int) int {</span></span>
<span class="line"><span>	m := len(group)</span></span>
<span class="line"><span>	f := make([][][]int, m)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([][]int, n+1)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = make([]int, minProfit+1)</span></span>
<span class="line"><span>			for k := range f[i][j] {</span></span>
<span class="line"><span>				f[i][j][k] = -1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	var dfs func(i, j, k int) int</span></span>
<span class="line"><span>	dfs = func(i, j, k int) int {</span></span>
<span class="line"><span>		if i >= m {</span></span>
<span class="line"><span>			if k >= minProfit {</span></span>
<span class="line"><span>				return 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][j][k] != -1 {</span></span>
<span class="line"><span>			return f[i][j][k]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := dfs(i+1, j, k)</span></span>
<span class="line"><span>		if j+group[i] &#x3C;= n {</span></span>
<span class="line"><span>			ans += dfs(i+1, j+group[i], min(k+profit[i], minProfit))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans %= mod</span></span>
<span class="line"><span>		f[i][j][k] = ans</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, 0, 0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同一三维状态可按物品下标递推，避免递归。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 项、人数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>、利润至少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的方案数。</p>
<p>不选抄上一件，选则从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>p</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">]</mo>
</math></span> 转移。空方案在利润 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 处为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">minProfit</mtext>
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
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工作中，选择了不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个员工，且至少产生 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的利润的方案数。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，表示不选择任何工作，且至少产生 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的利润的方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>对于第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个工作，我们可以选择参与或不参与。如果不参与，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>；如果参与，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>g</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>p</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">]</mo>
</math></span>。我们需要枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，并将所有的方案数相加。</p>
<p>最终的答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为工作的数量和员工的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>P</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>f</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 为至少产生的利润。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func profitableSchemes(n int, minProfit int, group []int, profit []int) int {</span></span>
<span class="line"><span>	m := len(group)</span></span>
<span class="line"><span>	f := make([][][]int, m+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([][]int, n+1)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = make([]int, minProfit+1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>		f[0][j][0] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			for k := 0; k &#x3C;= minProfit; k++ {</span></span>
<span class="line"><span>				f[i][j][k] = f[i-1][j][k]</span></span>
<span class="line"><span>				if j >= group[i-1] {</span></span>
<span class="line"><span>					f[i][j][k] += f[i-1][j-group[i-1]][max(0, k-profit[i-1])]</span></span>
<span class="line"><span>					f[i][j][k] %= mod</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[m][n][minProfit]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/profitable-schemes" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0879.Profitable%20Schemes/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-887" tabindex="-1">887. 鸡蛋掉落 <a class="header-anchor" href="#q-887" aria-label="Permalink to &quot;887. 鸡蛋掉落 {#q-887}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、二分查找、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你 <code>k</code> 枚相同的鸡蛋，并可以使用一栋从第 <code>1</code> 层到第 <code>n</code> 层共有 <code>n</code> 层楼的建筑。</p>&#10;&#10;<p>已知存在楼层 <code>f</code> ，满足 <code>0 &lt;= f &lt;= n</code> ，任何从<strong> 高于</strong> <code>f</code> 的楼层落下的鸡蛋都会碎，从 <code>f</code> 楼层或比它低的楼层落下的鸡蛋都不会破。</p>&#10;&#10;<p>每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 <code>x</code> 扔下（满足 <code>1 &lt;= x &lt;= n</code>）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 <strong>重复使用</strong> 这枚鸡蛋。</p>&#10;&#10;<p>请你计算并返回要确定 <code>f</code> <strong>确切的值</strong> 的 <strong>最小操作次数</strong> 是多少？</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>k = 1, n = 2&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;鸡蛋从 1 楼掉落。如果它碎了，肯定能得出 f = 0 。 &#10;否则，鸡蛋从 2 楼掉落。如果它碎了，肯定能得出 f = 1 。 &#10;如果它没碎，那么肯定能得出 f = 2 。 &#10;因此，在最坏的情况下我们需要移动 2 次以确定 f 是多少。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>k = 2, n = 6&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>k = 3, n = 14&#10;<strong>输出：</strong>4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= 100</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个鸡蛋、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 层楼，求最坏情况下最少扔几次。朴素枚举扔的楼层是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，在约束下偏慢。对固定鸡蛋数，最坏次数关于楼层单调，存在使「碎 / 不碎」两次子问题尽量均衡的楼层。</p>
<p>记忆化 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 层 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个蛋。对扔的楼层二分，比较碎与不碎的代价，取平衡点后再加一次。一层或一蛋有闭式。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 层楼以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个鸡蛋时，确定 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 值的最小操作次数，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行逻辑如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mn>1</mn>
</math></span>，说明楼层已经小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，此时返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，说明只有一个鸡蛋，那么只能从第一层开始一层一层试，最坏情况下需要试 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 次，此时返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>；</p>
<p>否则，我们考虑枚举第一个鸡蛋从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 层扔下的情况，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mi>i</mi>
</math></span>。如果鸡蛋在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 层扔下时碎了，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo>&lt;</mo>
  <mi>x</mi>
</math></span>，此时我们接下来需要在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 层下方以及剩下的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个鸡蛋确定 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 值，总共需要的最小操作次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 次；如果鸡蛋在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 层扔下时没碎，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo>&gt;</mo>
  <mi>x</mi>
</math></span>，此时我们需要在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 层及以上以及剩下的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个鸡蛋确定 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 值，总共需要的最小操作次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 次。由于我们要保证最坏情况下操作次数最少，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
      <mn>1</mn>
      <mo>&#x2264;</mo>
      <mi>x</mi>
      <mo>&#x2264;</mo>
      <mi>i</mi>
    </mrow>
  </munder>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>如果按照这样的方式枚举，由于状态数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
</math></span>，每个状态需要枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次，那么总时间复杂度达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，这会超出时间限制，我们考虑如何进行优化。</p>
<p>我们注意到函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 随着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的增大而单调递增，而函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 随着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的增大而单调递减，因此存在一个最优的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 值使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span> 达到最小值。我们可以对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 进行二分查找，找出这个最优的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 值。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#x2264;</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的最大整数。这样我们可以将时间复杂度降低到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 分别是楼层数和鸡蛋数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func superEggDrop(k int, n int) int {</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, k+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(i, j int) int</span></span>
<span class="line"><span>	dfs = func(i, j int) int {</span></span>
<span class="line"><span>		if i &#x3C; 1 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if j == 1 {</span></span>
<span class="line"><span>			return i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][j] != 0 {</span></span>
<span class="line"><span>			return f[i][j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l, r := 1, i</span></span>
<span class="line"><span>		for l &#x3C; r {</span></span>
<span class="line"><span>			mid := (l + r + 1) >> 1</span></span>
<span class="line"><span>			a, b := dfs(mid-1, j-1), dfs(i-mid, j)</span></span>
<span class="line"><span>			if a &#x3C;= b {</span></span>
<span class="line"><span>				l = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				r = mid - 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i][j] = max(dfs(l-1, j-1), dfs(i-l, j)) + 1</span></span>
<span class="line"><span>		return f[i][j]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(n, k)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同一转移可改成表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，按层数与蛋数填，避免递归。一蛋时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>i</mi>
</math></span>。</p>
<p>内层仍用二分找平衡楼层。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，渐近与方法一相同，常数更稳。</p>
</blockquote>
<p>我们也可以使用动态规划的方法解决这个问题。</p>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 层楼以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个鸡蛋时，确定 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 值的最小操作次数，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>状态转移方程为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <munder>
    <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
    <mrow data-mjx-texclass="ORD">
      <mn>1</mn>
      <mo>&#x2264;</mo>
      <mi>x</mi>
      <mo>&#x2264;</mo>
      <mi>i</mi>
    </mrow>
  </munder>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>与方法一类似，我们可以使用二分查找来优化 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的枚举过程。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 分别是楼层数和鸡蛋数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func superEggDrop(k int, n int) int {</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, k+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		f[i][1] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		for j := 2; j &#x3C;= k; j++ {</span></span>
<span class="line"><span>			l, r := 1, i</span></span>
<span class="line"><span>			for l &#x3C; r {</span></span>
<span class="line"><span>				mid := (l + r + 1) >> 1</span></span>
<span class="line"><span>				a, b := f[mid-1][j-1], f[i-mid][j]</span></span>
<span class="line"><span>				if a &#x3C;= b {</span></span>
<span class="line"><span>					l = mid</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					r = mid - 1</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			f[i][j] = max(f[l-1][j-1], f[i-l][j]) + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[n][k]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/super-egg-drop" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0887.Super%20Egg%20Drop/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-898" tabindex="-1">898. 子数组按位或操作 <a class="header-anchor" href="#q-898" aria-label="Permalink to &quot;898. 子数组按位或操作 {#q-898}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>arr</code>，返回所有 <code>arr</code> 的非空子数组的不同按位或的数量。</p>&#10;&#10;<p>子数组的按位或是子数组中每个整数的按位或。含有一个整数的子数组的按位或就是该整数。</p>&#10;&#10;<p><strong>子数组</strong> 是数组内连续的非空元素序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [0]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>&#10;只有一个可能的结果 0 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,1,2]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;可能的子数组为 [1]，[1]，[2]，[1, 1]，[1, 2]，[1, 1, 2]。&#10;产生的结果为 1，1，2，1，3，3 。&#10;有三个唯一值，所以答案是 3 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,2,4]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>&#10;可能的结果是 1，2，3，4，6，以及 7 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计所有子数组按位或的不同结果。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>5</mn>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举子数组是平方级。以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾的或值集合，等于「上一结尾集合中每个值或上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>」再并上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">{</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo fence="false" stretchy="false">}</mo>
</math></span>。</p>
<p>或运算只增不减，以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾的不同或值至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>A</mi>
  <mo stretchy="false">)</mo>
</math></span> 个。用集合滚动这些值，并入全局集合后取其大小。</p>
</blockquote>
<p>题目求的是子数组按位或操作的结果的数量，如果我们枚举子数组的结束位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 结尾的子数组按位或操作的结果的数量最多不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>32</mn>
</math></span> 个。这是因为，按位或是一个单调递增的操作。</p>
<p>因此，我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 记录所有子数组按位或操作的结果，用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 记录以当前元素结尾的子数组按位或操作的结果，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 只包含一个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>接下来，我们枚举子数组的结束位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾的子数组按位或操作的结果，是以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 结尾的子数组按位或操作的结果与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 进行按位或操作的结果的集合，再加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 本身。我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 记录以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾的子数组按位或操作的结果，然后我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mi>t</mi>
</math></span>，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中的所有元素加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。</p>
<p>最终，我们返回哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中元素的数量即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 分别为数组长度和数组中元素的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func subarrayBitwiseORs(arr []int) int {</span></span>
<span class="line"><span>	ans := map[int]bool{}</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for _, x := range arr {</span></span>
<span class="line"><span>		t := map[int]bool{x: true}</span></span>
<span class="line"><span>		for y := range s {</span></span>
<span class="line"><span>			t[x|y] = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for y := range t {</span></span>
<span class="line"><span>			ans[y] = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s = t</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/bitwise-ors-of-subarrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0898.Bitwise%20ORs%20of%20Subarrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-902" tabindex="-1">902. 最大为 N 的数字组合 <a class="header-anchor" href="#q-902" aria-label="Permalink to &quot;902. 最大为 N 的数字组合 {#q-902}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、字符串、二分查找、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个按 <strong>非递减顺序</strong> 排列的数字数组 <code>digits</code> 。你可以用任意次数 <code>digits[i]</code> 来写的数字。例如，如果 <code>digits = ['1','3','5']</code>，我们可以写数字，如 <code>'13'</code>, <code>'551'</code>, 和 <code>'1351315'</code>。</p>&#10;&#10;<p>返回 <em>可以生成的小于或等于给定整数 <code>n</code> 的正整数的个数</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>digits = [&quot;1&quot;,&quot;3&quot;,&quot;5&quot;,&quot;7&quot;], n = 100&#10;<strong>输出：</strong>20&#10;<strong>解释：</strong>&#10;可写出的 20 个数字是：&#10;1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>digits = [&quot;1&quot;,&quot;4&quot;,&quot;9&quot;], n = 1000000000&#10;<strong>输出：</strong>29523&#10;<strong>解释：</strong>&#10;我们可以写 3 个一位数字，9 个两位数字，27 个三位数字，&#10;81 个四位数字，243 个五位数字，729 个六位数字，&#10;2187 个七位数字，6561 个八位数字和 19683 个九位数字。&#10;总共，可以使用D中的数字写出 29523 个整数。</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>digits = [&quot;7&quot;], n = 8&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;&#10;<ul>&#10;	<li><code>1 &lt;= digits.length &lt;= 9</code></li>&#10;	<li><code>digits[i].length == 1</code></li>&#10;	<li><code>digits[i]</code> 是从 <code>'1'</code> 到 <code>'9'</code> 的数</li>&#10;	<li><code>digits</code> 中的所有值都 <strong>不同</strong> </li>&#10;	<li><code>digits</code> 按 <strong>非递减顺序</strong> 排列</li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数位 DP · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>用给定数位拼出不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的正整数，按长度枚举全部排列会在接近 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的位数上重复展开相同前缀。方案数只取决于当前位、是否仍为前导零、以及是否贴着上界。</p>
<p>将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 写成字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，记忆化搜索 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">lead</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo stretchy="false">)</mo>
</math></span>：前导零可继续填 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，否则只能填 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">digits</mtext>
</math></span> 中的数字，并按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">limit</mtext>
</math></span> 限制本界。处理完所有位后，非前导零的构造计为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
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
</math></span> 中，由 <code v-pre>digits</code> 中的数字生成的正整数的个数。个数与数的位数以及每一位上的数字有关。我们可以用数位 DP 的思路来解决这道题。数位 DP 中，数的大小对复杂度的影响很小。</p>
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
</math></span><p>不过对于本题而言，我们只需要求出区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值即可。</p>
<p>这里我们用记忆化搜索来实现数位 DP。从起点向下搜索，到最底层得到方案数，一层层向上返回答案并累加，最后从搜索起点得到最终的答案。</p>
<p>基本步骤如下：</p>
<p>我们将数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 转化为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，记字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。</p>
<p>接下来，我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">lead</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo stretchy="false">)</mo>
</math></span>，表示当前处理到字符串的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位，到最后一位的方案数。其中：</p>
<ul>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 表示当前处理到字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位；</li>
<li>布尔值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">lead</mtext>
</math></span> 表示是否只包含前导零；</li>
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
  <mtext>true</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">limit</mtext>
  <mo>&#x2227;</mo>
  <mi>j</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">up</mtext>
  <mo stretchy="false">)</mo>
</math></span>；否则，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">digits</mtext>
</math></span> 中，我们递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
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
<p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mtext>true</mtext>
  <mo>,</mo>
  <mtext>true</mtext>
  <mo stretchy="false">)</mo>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>D</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
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
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1000-1099/1012.Numbers%20With%20Repeated%20Digits/README.md" target="_blank" rel="noopener noreferrer">1012. 至少有 1 位重复的数字</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2300-2399/2376.Count%20Special%20Integers/README.md" target="_blank" rel="noopener noreferrer">2376. 统计特殊整数</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func atMostNGivenDigitSet(digits []string, n int) int {</span></span>
<span class="line"><span>	s := strconv.Itoa(n)</span></span>
<span class="line"><span>	m := len(s)</span></span>
<span class="line"><span>	f := make([]int, m)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	nums := map[int]bool{}</span></span>
<span class="line"><span>	for _, d := range digits {</span></span>
<span class="line"><span>		x, _ := strconv.Atoi(d)</span></span>
<span class="line"><span>		nums[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(i int, lead, limit bool) int</span></span>
<span class="line"><span>	dfs = func(i int, lead, limit bool) int {</span></span>
<span class="line"><span>		if i >= m {</span></span>
<span class="line"><span>			if lead {</span></span>
<span class="line"><span>				return 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !lead &#x26;&#x26; !limit &#x26;&#x26; f[i] != -1 {</span></span>
<span class="line"><span>			return f[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		up := 9</span></span>
<span class="line"><span>		if limit {</span></span>
<span class="line"><span>			up = int(s[i] - '0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := 0</span></span>
<span class="line"><span>		for j := 0; j &#x3C;= up; j++ {</span></span>
<span class="line"><span>			if j == 0 &#x26;&#x26; lead {</span></span>
<span class="line"><span>				ans += dfs(i+1, true, limit &#x26;&#x26; j == up)</span></span>
<span class="line"><span>			} else if nums[j] {</span></span>
<span class="line"><span>				ans += dfs(i+1, false, limit &#x26;&#x26; j == up)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !lead &#x26;&#x26; !limit {</span></span>
<span class="line"><span>			f[i] = ans</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, true, true)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/numbers-at-most-n-given-digit-set" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0902.Numbers%20At%20Most%20N%20Given%20Digit%20Set/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-903" tabindex="-1">903. DI 序列的有效排列 <a class="header-anchor" href="#q-903" aria-label="Permalink to &quot;903. DI 序列的有效排列 {#q-903}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、动态规划、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个长度为 <code>n</code> 的字符串 <code>s</code> ，其中 <code>s[i]</code> 是:</p>&#10;&#10;<ul>&#10;	<li><code>“D”</code> 意味着减少，或者</li>&#10;	<li><code>“I”</code> 意味着增加</li>&#10;</ul>&#10;&#10;<p><strong>有效排列</strong> 是对有 <code>n + 1</code> 个在 <code>[0, n]</code>  范围内的整数的一个排列 <code>perm</code> ，使得对所有的 <code>i</code>：</p>&#10;&#10;<ul>&#10;	<li>如果 <code>s[i] == 'D'</code>，那么 <code>perm[i] > perm[i+1]</code>，以及；</li>&#10;	<li>如果 <code>s[i] == 'I'</code>，那么 <code>perm[i] &lt; perm[i+1]</code>。</li>&#10;</ul>&#10;&#10;<p>返回 <em><strong>有效排列 </strong> </em><code>perm</code><em>的数量 </em>。因为答案可能很大，所以请<strong>返回你的答案对</strong> <code>10<sup>9</sup> + 7</code><strong> 取余</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;DID&quot;&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>&#10;(0, 1, 2, 3) 的五个有效排列是：&#10;(1, 0, 3, 2)&#10;(2, 0, 3, 1)&#10;(2, 1, 3, 0)&#10;(3, 0, 2, 1)&#10;(3, 1, 2, 0)&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> s = &quot;D&quot;&#10;<strong>输出:</strong> 1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == s.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 200</code></li>&#10;	<li><code>s[i]</code> 不是 <code>'I'</code> 就是 <code>'D'</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的 DI 串对应 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.</mn>
  <mo>.</mo>
  <mi>n</mi>
</math></span> 的排列， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>200</mn>
</math></span>，枚举排列不可行。关键在于相对名次：放完前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数后，下一个数在剩余数中的名次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 决定与上一位置的升降关系。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符、以名次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 结尾的方案数。遇 <code v-pre>'D'</code> 时从更大的名次转移，遇 <code v-pre>'I'</code> 时从更小的名次转移；已用名次压缩到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，得到立方级递推。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示字符串的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符中，以数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 结尾的满足题目要求的排列的数量。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，其余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mi>n</mi>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>如果第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 是 <code v-pre>'D'</code>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 转移而来，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，而由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 最大只能为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 向左移动一位，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，因此有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
      <mi>k</mi>
      <mo>=</mo>
      <mi>j</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>如果第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 是 <code v-pre>'I'</code>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 转移而来，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，因此有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
      <mi>k</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>最终的答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mi>n</mi>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
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
</math></span> 是字符串的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numPermsDISequence(s string) (ans int) {</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[0][0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		if s[i-1] == 'D' {</span></span>
<span class="line"><span>			for j := 0; j &#x3C;= i; j++ {</span></span>
<span class="line"><span>				for k := j; k &#x3C; i; k++ {</span></span>
<span class="line"><span>					f[i][j] = (f[i][j] + f[i-1][k]) % mod</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			for j := 0; j &#x3C;= i; j++ {</span></span>
<span class="line"><span>				for k := 0; k &#x3C; j; k++ {</span></span>
<span class="line"><span>					f[i][j] = (f[i][j] + f[i-1][k]) % mod</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>		ans = (ans + f[n][j]) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：前缀和优化 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一每次转移要扫一段 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，同一行上相邻的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 共享几乎相同的区间和。用按方向滚动的前缀和在常数时间内得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，时间降为平方级，状态定义不变。</p>
</blockquote>
<p>我们可以用前缀和优化状态转移，将时间复杂度降低到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numPermsDISequence(s string) (ans int) {</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[0][0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		pre := 0</span></span>
<span class="line"><span>		if s[i-1] == 'D' {</span></span>
<span class="line"><span>			for j := i; j >= 0; j-- {</span></span>
<span class="line"><span>				pre = (pre + f[i-1][j]) % mod</span></span>
<span class="line"><span>				f[i][j] = pre</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			for j := 0; j &#x3C;= i; j++ {</span></span>
<span class="line"><span>				f[i][j] = pre</span></span>
<span class="line"><span>				pre = (pre + f[i-1][j]) % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>		ans = (ans + f[n][j]) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：滚动数组优化 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，二维表中多数空间可以丢掉。用一维数组滚动，按 <code v-pre>'D'</code>/<code v-pre>'I'</code> 的方向维护累加和写入新一层，空间降至线性。</p>
</blockquote>
<p>在方法二的基础上，我们使用滚动数组将空间复杂度优化到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。时间复杂度仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numPermsDISequence(s string) (ans int) {</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	f := make([]int, n+1)</span></span>
<span class="line"><span>	f[0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		pre := 0</span></span>
<span class="line"><span>		g := make([]int, n+1)</span></span>
<span class="line"><span>		if s[i-1] == 'D' {</span></span>
<span class="line"><span>			for j := i; j >= 0; j-- {</span></span>
<span class="line"><span>				pre = (pre + f[j]) % mod</span></span>
<span class="line"><span>				g[j] = pre</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			for j := 0; j &#x3C;= i; j++ {</span></span>
<span class="line"><span>				g[j] = pre</span></span>
<span class="line"><span>				pre = (pre + f[j]) % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f = g</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 0; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>		ans = (ans + f[j]) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/valid-permutations-for-di-sequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0903.Valid%20Permutations%20for%20DI%20Sequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-907" tabindex="-1">907. 子数组的最小值之和 <a class="header-anchor" href="#q-907" aria-label="Permalink to &quot;907. 子数组的最小值之和 {#q-907}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、数组、动态规划、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>arr</code>，找到 <code>min(b)</code> 的总和，其中 <code>b</code> 的范围为 <code>arr</code> 的每个（连续）子数组。</p>&#10;&#10;<p>由于答案可能很大，因此<strong> 返回答案模 <code>10^9 + 7</code></strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [3,1,2,4]&#10;<strong>输出：</strong>17&#10;<strong>解释：&#10;</strong>子数组为<strong> </strong>[3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 &#10;最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [11,81,94,43,3]&#10;<strong>输出：</strong>444&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 3 * 10<sup>4</sup></code></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：单调栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个子数组取最小值再求和，区间数为平方级，直接枚举不可行。改为贡献法：每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为最小值出现的次数乘以自身。</p>
<p>用单调栈求左侧第一个更小、右侧第一个小于等于的边界，使相等元素只被一侧认领，避免重复。次数即为两侧跨度之积。</p>
</blockquote>
<p>题目要求的是每个子数组的最小值之和，实际上相当于，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，求以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为最小值的子数组的个数，然后乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，最后求和。</p>
<p>因此，题目的重点转换为：求以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为最小值的子数组的个数。对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们找出其左边第一个小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，右侧第一个小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，则以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为最小值的子数组的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>注意，这里为什么要求右侧第一个小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，而不是小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置呢？这是因为，如果是右侧第一个小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，则会导致重复计算。</p>
<p>我们可以举个例子来说明，对于以下数组：</p>
<p>下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的元素大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，左侧第一个小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的元素下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，如果我们求右侧第一个小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的元素下标，可以得到下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span>。也即是说，子数组区间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>7</mn>
  <mo stretchy="false">)</mo>
</math></span>。注意，这里是开区间。</p>
<div class="language- vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>0 4 3 2 5 3 2 1</span></span>
<span class="line"><span>*     ^       *</span></span></code></pre>
</div><p>按照同样的方法，我们可以求出下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>6</mn>
</math></span> 的元素的子数组区间，可以发现，其子数组区间也为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>7</mn>
  <mo stretchy="false">)</mo>
</math></span>，也即是说，下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 和下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>6</mn>
</math></span> 的元素的子数组区间是重复的。这样就造成了重复计算。</p>
<div class="language- vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>0 4 3 2 5 3 2 1</span></span>
<span class="line"><span>*           ^ *</span></span></code></pre>
</div><p>如果我们求的是右侧第一个小于等于其值的下标，就不会有重复问题，因为下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的子数组区间变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>6</mn>
  <mo stretchy="false">)</mo>
</math></span>，下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>6</mn>
</math></span> 的子数组区间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>7</mn>
  <mo stretchy="false">)</mo>
</math></span>，两者不重复。</p>
<p>回到这道题上，我们只需要遍历数组，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，利用单调栈求出其左侧第一个小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，右侧第一个小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，则以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为最小值的子数组的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，然后乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，最后求和即可。</p>
<p>注意数据的溢出以及取模操作。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func sumSubarrayMins(arr []int) (ans int) {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	left := make([]int, n)</span></span>
<span class="line"><span>	right := make([]int, n)</span></span>
<span class="line"><span>	for i := range left {</span></span>
<span class="line"><span>		left[i] = -1</span></span>
<span class="line"><span>		right[i] = n</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	stk := []int{}</span></span>
<span class="line"><span>	for i, v := range arr {</span></span>
<span class="line"><span>		for len(stk) > 0 &#x26;&#x26; arr[stk[len(stk)-1]] >= v {</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if len(stk) > 0 {</span></span>
<span class="line"><span>			left[i] = stk[len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stk = append(stk, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	stk = []int{}</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		for len(stk) > 0 &#x26;&#x26; arr[stk[len(stk)-1]] > arr[i] {</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if len(stk) > 0 {</span></span>
<span class="line"><span>			right[i] = stk[len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stk = append(stk, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	for i, v := range arr {</span></span>
<span class="line"><span>		ans += (i - left[i]) * (right[i] - i) * v % mod</span></span>
<span class="line"><span>		ans %= mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-of-subarray-minimums" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0907.Sum%20of%20Subarray%20Minimums/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-918" tabindex="-1">918. 环形子数组的最大和 <a class="header-anchor" href="#q-918" aria-label="Permalink to &quot;918. 环形子数组的最大和 {#q-918}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：队列、数组、分治、动态规划、单调队列</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个长度为 <code>n</code> 的<strong>环形整数数组</strong> <code>nums</code> ，返回<em> <code>nums</code> 的非空 <strong>子数组</strong> 的最大可能和 </em>。</p>&#10;&#10;<p><strong>环形数组</strong><em> </em>意味着数组的末端将会与开头相连呈环状。形式上， <code>nums[i]</code> 的下一个元素是 <code>nums[(i + 1) % n]</code> ， <code>nums[i]</code> 的前一个元素是 <code>nums[(i - 1 + n) % n]</code> 。</p>&#10;&#10;<p><strong>子数组</strong> 最多只能包含固定缓冲区 <code>nums</code> 中的每个元素一次。形式上，对于子数组 <code>nums[i], nums[i + 1], ..., nums[j]</code> ，不存在 <code>i &lt;= k1, k2 &lt;= j</code> 其中 <code>k1 % n == k2 % n</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,-2,3,-2]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>从子数组 [3] 得到最大和 3&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,-3,5]&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>从子数组 [5,5] 得到最大和 5 + 5 = 10&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,-2,2,-3]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code>​​​​​​​</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：维护前缀最值 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>环形最大子段和有两种形态：不跨越端点时即普通最大子段；跨越时等于总和减去最小子段。一次扫描同时维护前缀最小与前缀最大，分别得到这两种量，最后取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mi>m</mi>
  <mi>i</mi>
</math></span> 的较大者。</p>
</blockquote>
<p>求环形子数组的最大和，可以分为两种情况：</p>
<ul>
<li>情况一：最大和的子数组不包含环形部分，即为普通的最大子数组和；</li>
<li>情况二：最大和的子数组包含环形部分，我们可以转换为：求数组总和减去最小子数组和。</li>
</ul>
<p>因此，我们维护以下几个变量：</p>
<ul>
<li>前缀和最小值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>m</mi>
  <mi>i</mi>
</math></span>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>前缀和最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>m</mi>
  <mi>x</mi>
</math></span>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>；</li>
<li>前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>最小子数组和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>m</mi>
  <mi>i</mi>
</math></span>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>；</li>
<li>答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>。</li>
</ul>
<p>接下来，我们只需要遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，对于当前遍历到的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，我们做以下更新操作：</p>
<ul>
<li>更新前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mi>s</mi>
  <mo>+</mo>
  <mi>x</mi>
</math></span>；</li>
<li>更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>p</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，即为情况一的答案（前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 减去最小前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>m</mi>
  <mi>i</mi>
</math></span>，可以得到最大子数组和）；</li>
<li>更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>p</mi>
  <mi>m</mi>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，即为情况二的最小子数组和；</li>
<li>更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>p</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>，即为最小前缀和；</li>
<li>更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>p</mi>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>，即为最大前缀和。</li>
</ul>
<p>遍历结束，我们取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mi>m</mi>
  <mi>i</mi>
</math></span> 的最大值作为答案返回即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxSubarraySumCircular(nums []int) int {</span></span>
<span class="line"><span>	const inf = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	pmi, pmx := 0, -inf</span></span>
<span class="line"><span>	ans, s, smi := -inf, 0, inf</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>		ans = max(ans, s-pmi)</span></span>
<span class="line"><span>		smi = min(smi, s-pmx)</span></span>
<span class="line"><span>		pmi = min(pmi, s)</span></span>
<span class="line"><span>		pmx = max(pmx, s)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return max(ans, s-smi)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-sum-circular-subarray" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0918.Maximum%20Sum%20Circular%20Subarray/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-920" tabindex="-1">920. 播放列表的数量 <a class="header-anchor" href="#q-920" aria-label="Permalink to &quot;920. 播放列表的数量 {#q-920}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、动态规划、组合数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你的音乐播放器里有 <code>n</code> 首不同的歌，在旅途中，你计划听 <code>goal</code> 首歌（不一定不同，即，允许歌曲重复）。你将会按如下规则创建播放列表：</p>&#10;&#10;<ul>&#10;	<li>每首歌 <strong>至少播放一次</strong> 。</li>&#10;	<li>一首歌只有在其他 <code>k</code> 首歌播放完之后才能再次播放。</li>&#10;</ul>&#10;&#10;<p>给你 <code>n</code>、<code>goal</code> 和 <code>k</code> ，返回可以满足要求的播放列表的数量。由于答案可能非常大，请返回对 <code>10<sup>9</sup> + 7</code> <strong>取余</strong> 的结果。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3, goal = 3, k = 1&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>有 6 种可能的播放列表。[1, 2, 3]，[1, 3, 2]，[2, 1, 3]，[2, 3, 1]，[3, 1, 2]，[3, 2, 1] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2, goal = 3, k = 0&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>有 6 种可能的播放列表。[1, 1, 2]，[1, 2, 1]，[2, 1, 1]，[2, 2, 1]，[2, 1, 2]，[1, 2, 2] 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2, goal = 3, k = 1&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>有 2 种可能的播放列表。[1, 2, 1]，[2, 1, 2] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= k &lt; n &lt;= goal &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 的播放列表须恰好用到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 首不同歌，且同一首再次出现至少间隔 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，状态规模允许 DP。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示听了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 首、其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 首不同：新歌有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 种，老歌在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span> 时有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span> 种。目标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
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
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示听 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 首歌，且这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 首歌中有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 首不同歌曲的播放列表的数量。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
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
</math></span>，我们可以选择没听过的歌，那么上一个状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，这样的选择有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 种，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
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
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。我们也可以选择听过的歌，那么上一个状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，这样的选择有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span> 种，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
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
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>。</p>
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
          <mn>1</mn>
        </mtd>
        <mtd>
          <mi>i</mi>
          <mo>=</mo>
          <mn>0</mn>
          <mo>,</mo>
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
          <mo>&#xD7;</mo>
          <mo stretchy="false">(</mo>
          <mi>n</mi>
          <mo>&#x2212;</mo>
          <mi>j</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo stretchy="false">)</mo>
          <mo>+</mo>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo stretchy="false">]</mo>
          <mo>&#xD7;</mo>
          <mo stretchy="false">(</mo>
          <mi>j</mi>
          <mo>&#x2212;</mo>
          <mi>k</mi>
          <mo stretchy="false">)</mo>
        </mtd>
        <mtd>
          <mi>i</mi>
          <mo>&#x2265;</mo>
          <mn>1</mn>
          <mo>,</mo>
          <mi>j</mi>
          <mo>&#x2265;</mo>
          <mn>1</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>最终的答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>o</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为题目中给定的参数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numMusicPlaylists(n int, goal int, k int) int {</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	f := make([][]int, goal+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[0][0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= goal; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			f[i][j] = f[i-1][j-1] * (n - j + 1)</span></span>
<span class="line"><span>			if j > k {</span></span>
<span class="line"><span>				f[i][j] += f[i-1][j] * (j - k)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			f[i][j] %= mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[goal][n]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划（空间优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 层只依赖第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 层的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，二维表可滚成一维，空间降至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们注意到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 只与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 有关，因此我们可以使用滚动数组优化空间复杂度，将空间复杂度优化至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numMusicPlaylists(n int, goal int, k int) int {</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	f := make([]int, goal+1)</span></span>
<span class="line"><span>	f[0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= goal; i++ {</span></span>
<span class="line"><span>		g := make([]int, goal+1)</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			g[j] = f[j-1] * (n - j + 1)</span></span>
<span class="line"><span>			if j > k {</span></span>
<span class="line"><span>				g[j] += f[j] * (j - k)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			g[j] %= mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f = g</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[n]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-music-playlists" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0920.Number%20of%20Music%20Playlists/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-926" tabindex="-1">926. 将字符串翻转到单调递增 <a class="header-anchor" href="#q-926" aria-label="Permalink to &quot;926. 将字符串翻转到单调递增 {#q-926}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果一个二进制字符串，是以一些 <code>0</code>（可能没有 <code>0</code>）后面跟着一些 <code>1</code>（也可能没有 <code>1</code>）的形式组成的，那么该字符串是 <strong>单调递增 </strong>的。</p>&#10;&#10;<p>给你一个二进制字符串 <code>s</code>，你可以将任何 <code>0</code> 翻转为 <code>1</code> 或者将 <code>1</code> 翻转为 <code>0</code> 。</p>&#10;&#10;<p>返回使 <code>s</code> 单调递增的最小翻转次数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;00110&quot;&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>翻转最后一位得到 00111.&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;010110&quot;&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>翻转得到 011111，或者是 000111。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;00011000&quot;&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>翻转得到 00000000。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s[i]</code> 为 <code>'0'</code> 或 <code>'1'</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>单调递增即某分割点左侧全为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>、右侧全为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，对每个分割点重扫代价过高。记全串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">tot</mtext>
</math></span>，枚举分割点时用前缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span> 即可算出左侧翻 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>、右侧翻 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">cur</mtext>
  <mo>+</mo>
  <mtext mathvariant="italic">tot</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">cur</mtext>
</math></span>，取最小者。</p>
</blockquote>
<p>我们可以先统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的个数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span>。定义一个答案变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span>，表示将所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的翻转次数。</p>
<p>然后，我们可以枚举每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，将位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 及其左边的所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，将位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 右边的所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，计算这种情况下的翻转次数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mo>+</mo>
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span> 表示位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 及其左边的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的个数，更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mo>+</mo>
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后返回答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minFlipsMonoIncr(s string) int {</span></span>
<span class="line"><span>	tot := strings.Count(s, "0")</span></span>
<span class="line"><span>	ans, cur := tot, 0</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		if c == '0' {</span></span>
<span class="line"><span>			cur++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = min(ans, i+1-cur+tot-cur)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/flip-string-to-monotone-increasing" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0926.Flip%20String%20to%20Monotone%20Increasing/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-931" tabindex="-1">931. 下降路径最小和 <a class="header-anchor" href="#q-931" aria-label="Permalink to &quot;931. 下降路径最小和 {#q-931}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>n x n</code> 的<strong> 方形 </strong>整数数组 <code>matrix</code> ，请你找出并返回通过 <code>matrix</code> 的<strong>下降路径</strong><em> </em>的<strong> </strong><strong>最小和</strong> 。</p>&#10;&#10;<p><strong>下降路径</strong> 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 <code>(row, col)</code> 的下一个元素应当是 <code>(row + 1, col - 1)</code>、<code>(row + 1, col)</code> 或者 <code>(row + 1, col + 1)</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0931.Minimum%20Falling%20Path%20Sum/images/1729566253-aneDag-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>matrix = [[2,1,3],[6,5,4],[7,8,9]]&#10;<strong>输出：</strong>13&#10;<strong>解释：</strong>如图所示，为和最小的两条下降路径&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0931.Minimum%20Falling%20Path%20Sum/images/1729566282-dtXwRd-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>matrix = [[-19,57],[-40,-5]]&#10;<strong>输出：</strong>-59&#10;<strong>解释：</strong>如图所示，为和最小的下降路径&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == matrix.length == matrix[i].length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划（滚动数组） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>下降路径每步只能走到下一行相邻三列， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>。枚举全部路径不可行。到达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的最小和只依赖上一行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。逐行递推，并用一维数组滚动，空间降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示从第一行下降到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 列的最小路径和：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">matrix</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable displaystyle="true" columnalign="right left right" columnspacing="0em 2em" rowspacing="3pt">
      <mtr>
        <mtd></mtd>
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
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>j</mi>
          <mo>&gt;</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd>
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
        </mtd>
        <mtd>
          <mn>0</mn>
          <mo>&#x2264;</mo>
          <mi>j</mi>
          <mo>&lt;</mo>
          <mi>n</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd>
          <mi>f</mi>
          <mo stretchy="false">[</mo>
          <mi>i</mi>
          <mo>&#x2212;</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo stretchy="false">[</mo>
          <mi>j</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo stretchy="false">]</mo>
          <mo>,</mo>
        </mtd>
        <mtd>
          <mi>j</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>&lt;</mo>
          <mi>n</mi>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munder>
    <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
    <mrow data-mjx-texclass="ORD">
      <mn>0</mn>
      <mo>&#x2264;</mo>
      <mi>j</mi>
      <mo>&lt;</mo>
      <mi>n</mi>
    </mrow>
  </munder>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 只依赖上一行，因此只用两个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的一维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 滚动即可。</p>
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
</math></span> 是矩阵的边长。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minFallingPathSum(matrix [][]int) int {</span></span>
<span class="line"><span>	n := len(matrix)</span></span>
<span class="line"><span>	f := make([]int, n)</span></span>
<span class="line"><span>	for _, row := range matrix {</span></span>
<span class="line"><span>		g := make([]int, n)</span></span>
<span class="line"><span>		copy(g, f)</span></span>
<span class="line"><span>		for j, x := range row {</span></span>
<span class="line"><span>			if j > 0 {</span></span>
<span class="line"><span>				g[j] = min(g[j], f[j-1])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if j+1 &#x3C; n {</span></span>
<span class="line"><span>				g[j] = min(g[j], f[j+1])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			g[j] += x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f = g</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return slices.Min(f)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-falling-path-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0931.Minimum%20Falling%20Path%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-935" tabindex="-1">935. 骑士拨号器 <a class="header-anchor" href="#q-935" aria-label="Permalink to &quot;935. 骑士拨号器 {#q-935}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>象棋骑士有一个<strong>独特的移动方式</strong>，它可以垂直移动两个方格，水平移动一个方格，或者水平移动两个方格，垂直移动一个方格(两者都形成一个 <strong>L </strong>的形状)。</p>&#10;&#10;<p>象棋骑士可能的移动方式如下图所示:</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0935.Knight%20Dialer/images/chess.jpg" loading="lazy"></p>&#10;&#10;<p>我们有一个象棋骑士和一个电话垫，如下所示，骑士<strong>只能站在一个数字单元格上</strong>(即蓝色单元格)。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0935.Knight%20Dialer/images/phone.jpg" loading="lazy"></p>&#10;&#10;<p>给定一个整数 n，返回我们可以拨多少个长度为 n 的不同电话号码。</p>&#10;&#10;<p>你可以将骑士放置在<strong>任何数字单元格</strong>上，然后你应该执行 n - 1 次移动来获得长度为 n 的号码。所有的跳跃应该是<strong>有效</strong>的骑士跳跃。</p>&#10;&#10;<p>因为答案可能很大，<strong>所以输出答案模 </strong><code>10<sup>9</sup> + 7</code>.</p>&#10;&#10;<p> </p>&#10;&#10;<ul>&#10;</ul>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>我们需要拨一个长度为1的数字，所以把骑士放在10个单元格中的任何一个数字单元格上都能满足条件。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2&#10;<strong>输出：</strong>20&#10;<strong>解释：</strong>我们可以拨打的所有有效号码为[04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3131&#10;<strong>输出：</strong>136006598&#10;<strong>解释：</strong>注意取模&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 5000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递推 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>骑士在电话键盘上跳 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 步， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>5000</mn>
</math></span>。每格的前驱固定，长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 且落在数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 的方案只依赖上一跳的前驱。用长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的数组递推 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 轮，最后求和取模。</p>
</blockquote>
<p>根据题目描述，我们需要计算出长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的不同电话号码的数量。其中，每个数字的上一个数字只有固定的几个，我们可以列出每个数字的上一个数字：</p>
<table tabindex="0">
<thead>
<tr>
<th>当前数字</th>
<th>上一个数字</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>4, 6</td>
</tr>
<tr>
<td>1</td>
<td>6, 8</td>
</tr>
<tr>
<td>2</td>
<td>7, 9</td>
</tr>
<tr>
<td>3</td>
<td>4, 8</td>
</tr>
<tr>
<td>4</td>
<td>0, 3, 9</td>
</tr>
<tr>
<td>5</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>0, 1, 7</td>
</tr>
<tr>
<td>7</td>
<td>2, 6</td>
</tr>
<tr>
<td>8</td>
<td>1, 3</td>
</tr>
<tr>
<td>9</td>
<td>2, 4</td>
</tr>
</tbody>
</table>
<p>我们可以通过递推的方式，计算出长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的不同电话号码的数量。设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的不同电话号码的数量，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。对于长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的电话号码，我们可以通过长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的电话号码计算出来，因此我们可以得到递推关系：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>0</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>4</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>6</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>6</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>8</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>2</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>7</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>9</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>3</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>4</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>8</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>4</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>0</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>3</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>9</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>6</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>0</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>7</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>7</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>2</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>6</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>8</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>3</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>g</mi>
        <mo stretchy="false">[</mo>
        <mn>9</mn>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>2</mn>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mn>4</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>然后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，继续计算下一个长度的电话号码，直到计算出长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的电话号码的数量。</p>
<p>最后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 中所有元素相加，取模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span>，即为答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为电话号码的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 为数字集合，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>10</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func knightDialer(n int) (ans int) {</span></span>
<span class="line"><span>	f := make([]int, 10)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		g := make([]int, 10)</span></span>
<span class="line"><span>		g[0] = (f[4] + f[6]) % mod</span></span>
<span class="line"><span>		g[1] = (f[6] + f[8]) % mod</span></span>
<span class="line"><span>		g[2] = (f[7] + f[9]) % mod</span></span>
<span class="line"><span>		g[3] = (f[4] + f[8]) % mod</span></span>
<span class="line"><span>		g[4] = (f[0] + f[3] + f[9]) % mod</span></span>
<span class="line"><span>		g[6] = (f[0] + f[1] + f[7]) % mod</span></span>
<span class="line"><span>		g[7] = (f[2] + f[6]) % mod</span></span>
<span class="line"><span>		g[8] = (f[1] + f[3]) % mod</span></span>
<span class="line"><span>		g[9] = (f[2] + f[4]) % mod</span></span>
<span class="line"><span>		f = g</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range f {</span></span>
<span class="line"><span>		ans = (ans + x) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：矩阵快速幂加速递推 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一为线性于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的递推。该转移是常系数线性，可写成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
  <mo>&#xD7;</mo>
  <mn>10</mn>
</math></span> 矩阵，用快速幂在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 次矩阵乘内得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#xD7;</mo>
  <mn>10</mn>
</math></span> 的矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <msub>
            <mi>F</mi>
            <mn>0</mn>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>F</mi>
            <mn>1</mn>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>F</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x22EF;</mo>
          <msub>
            <mi>F</mi>
            <mn>9</mn>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>F</mi>
    <mi>i</mi>
  </msub>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个电话号码的数量。我们希望根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 推出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。也即是说，我们需要一个矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">base</mtext>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">base</mtext>
  <mo>=</mo>
  <mi>T</mi>
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
            <mi>F</mi>
            <mn>0</mn>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>F</mi>
            <mn>1</mn>
          </msub>
        </mtd>
        <mtd>
          <msub>
            <mi>F</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x22EF;</mo>
          <msub>
            <mi>F</mi>
            <mn>9</mn>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">base</mtext>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <msubsup>
            <mi>F</mi>
            <mn>0</mn>
            <mo data-mjx-alternate="1">&#x2032;</mo>
          </msubsup>
        </mtd>
        <mtd>
          <msubsup>
            <mi>F</mi>
            <mn>1</mn>
            <mo data-mjx-alternate="1">&#x2032;</mo>
          </msubsup>
        </mtd>
        <mtd>
          <msubsup>
            <mi>F</mi>
            <mn>2</mn>
            <mo data-mjx-alternate="1">&#x2032;</mo>
          </msubsup>
          <mo>&#x22EF;</mo>
          <msubsup>
            <mi>F</mi>
            <mn>9</mn>
            <mo data-mjx-alternate="1">&#x2032;</mo>
          </msubsup>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span><p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>F</mi>
    <mi>i</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msubsup>
  <mo>=</mo>
  <munder>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
    </mrow>
  </munder>
  <msub>
    <mi>F</mi>
    <mi>j</mi>
  </msub>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的上一个数字，所以矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">base</mtext>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 列为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span><p>依次类推，我们可以得到矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">base</mtext>
</math></span> 如下：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mtable columnspacing="1em" rowspacing="4pt">
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
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
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
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
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
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
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
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
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
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
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
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
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
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
          <mn>1</mn>
          <mo>&#x22EF;</mo>
          <mn>1</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
</math></span>，与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">base</mtext>
</math></span> 矩阵相乘，即可得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。最后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>T</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 中所有元素相加，取模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span>，即为答案。求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mtext mathvariant="italic">base</mtext>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span>，可以通过矩阵快速幂的方式，时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
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
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <msup>
    <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 为数字集合，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>10</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>const mod = 1e9 + 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func knightDialer(n int) int {</span></span>
<span class="line"><span>	base := [][]int{</span></span>
<span class="line"><span>		{0, 0, 0, 0, 1, 0, 1, 0, 0, 0},</span></span>
<span class="line"><span>		{0, 0, 0, 0, 0, 0, 1, 0, 1, 0},</span></span>
<span class="line"><span>		{0, 0, 0, 0, 0, 0, 0, 1, 0, 1},</span></span>
<span class="line"><span>		{0, 0, 0, 0, 1, 0, 0, 0, 1, 0},</span></span>
<span class="line"><span>		{1, 0, 0, 1, 0, 0, 0, 0, 0, 1},</span></span>
<span class="line"><span>		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0},</span></span>
<span class="line"><span>		{1, 1, 0, 0, 0, 0, 0, 1, 0, 0},</span></span>
<span class="line"><span>		{0, 0, 1, 0, 0, 0, 1, 0, 0, 0},</span></span>
<span class="line"><span>		{0, 1, 0, 1, 0, 0, 0, 0, 0, 0},</span></span>
<span class="line"><span>		{0, 0, 1, 0, 1, 0, 0, 0, 0, 0},</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	res := pow(base, n-1)</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for _, x := range res[0] {</span></span>
<span class="line"><span>		ans = (ans + x) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func mul(a, b [][]int) [][]int {</span></span>
<span class="line"><span>	m := len(a)</span></span>
<span class="line"><span>	n := len(b[0])</span></span>
<span class="line"><span>	c := make([][]int, m)</span></span>
<span class="line"><span>	for i := range c {</span></span>
<span class="line"><span>		c[i] = make([]int, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			for k := 0; k &#x3C; len(b); k++ {</span></span>
<span class="line"><span>				c[i][j] = (c[i][j] + a[i][k]*b[k][j]) % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return c</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func pow(a [][]int, n int) [][]int {</span></span>
<span class="line"><span>	size := len(a)</span></span>
<span class="line"><span>	res := make([][]int, 1)</span></span>
<span class="line"><span>	res[0] = make([]int, size)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; size; i++ {</span></span>
<span class="line"><span>		res[0][i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		if n%2 == 1 {</span></span>
<span class="line"><span>			res = mul(res, a)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		a = mul(a, a)</span></span>
<span class="line"><span>		n /= 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return res</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/knight-dialer" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0935.Knight%20Dialer/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-940" tabindex="-1">940. 不同的子序列 II <a class="header-anchor" href="#q-940" aria-label="Permalink to &quot;940. 不同的子序列 II {#q-940}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个字符串 <code>s</code>，计算 <code>s</code> 的 <strong>不同非空子序列</strong> 的个数。因为结果可能很大，所以返回答案需要对<strong> </strong><strong><code>10^9 + 7</code> 取余</strong> 。</p>&#10;&#10;<p>字符串的 <strong>子序列</strong> 是经由原字符串删除一些（也可能不删除）字符但不改变剩余字符相对位置的一个新字符串。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;ace&quot;</code> 是 <code>&quot;<em><strong>a</strong></em>b<em><strong>c</strong></em>d<em><strong>e</strong></em>&quot;</code> 的一个子序列，但 <code>&quot;aec&quot;</code> 不是。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abc&quot;&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>7 个不同的子序列分别是 &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;ab&quot;, &quot;ac&quot;, &quot;bc&quot;, 以及 &quot;abc&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;aba&quot;&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>6 个不同的子序列分别是 &quot;a&quot;, &quot;b&quot;, &quot;ab&quot;, &quot;ba&quot;, &quot;aa&quot; 以及 &quot;aba&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;aaa&quot;&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>3 个不同的子序列分别是 &quot;a&quot;, &quot;aa&quot; 以及 &quot;aaa&quot;。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 2000</code></li>&#10;	<li><code>s</code> 仅由小写英文字母组成</li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>不同非空子序列的个数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2000</mn>
</math></span>，不能枚举子集。以末字符分类： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示当前以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 结尾的不同子序列数。读入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 时，它可以接在此前任意子序列之后，也可以单独成串，故 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">&#x2190;</mo>
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mi>f</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，重复字符会覆盖旧的以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 结尾的集合。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个小写字母结尾的不同子序列的个数。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 中所有元素均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，对于当前字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mn>25</mn>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mn>25</mn>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示此前已经得到的所有不同子序列的个数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mn>1</mn>
</math></span> 表示字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 本身也可以作为一个子序列。</p>
<p>最后，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mn>25</mn>
    </mrow>
  </munderover>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取余。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 是字符集的大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distinctSubseqII(s string) int {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	f := [26]int{}</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		x := 1</span></span>
<span class="line"><span>		for _, v := range f {</span></span>
<span class="line"><span>			x = (x + v) % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[c-'a'] = x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for _, v := range f {</span></span>
<span class="line"><span>		ans = (ans + v) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划优化 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一每次更新要扫 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 个格子。维护总和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>，新增量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，即可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>。</p>
</blockquote>
<p>在方法一的基础上，我们可以维护一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 表示当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 数组中所有元素的和。每次更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，新增的不同子序列个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，据此同时更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1900-1999/1987.Number%20of%20Unique%20Good%20Subsequences/README.md" target="_blank" rel="noopener noreferrer">1987. 不同的好子序列数目</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distinctSubseqII(s string) int {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	f := [26]int{}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		i := c - 'a'</span></span>
<span class="line"><span>		add := (ans + 1 + mod - f[i]) % mod</span></span>
<span class="line"><span>		ans = (ans + add) % mod</span></span>
<span class="line"><span>		f[i] = (f[i] + add) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/distinct-subsequences-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0940.Distinct%20Subsequences%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-943" tabindex="-1">943. 最短超级串 <a class="header-anchor" href="#q-943" aria-label="Permalink to &quot;943. 最短超级串 {#q-943}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、字符串、动态规划、位掩码、哈密顿通路</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个字符串数组 <code>words</code>，找到以 <code>words</code> 中每个字符串作为子字符串的最短字符串。如果有多个有效最短字符串满足题目条件，返回其中 <strong>任意一个</strong> 即可。</p>&#10;&#10;<p>我们可以假设 <code>words</code> 中没有字符串是 <code>words</code> 中另一个字符串的子字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;alex&quot;,&quot;loves&quot;,&quot;leetcode&quot;]&#10;<strong>输出：</strong>&quot;alexlovesleetcode&quot;&#10;<strong>解释：</strong>&quot;alex&quot;，&quot;loves&quot;，&quot;leetcode&quot; 的所有排列都会被接受。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;catg&quot;,&quot;ctaagt&quot;,&quot;gcta&quot;,&quot;ttca&quot;,&quot;atgcatc&quot;]&#10;<strong>输出：</strong>&quot;gctaagttcatgcatc&quot;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 12</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 20</code></li>&#10;	<li><code>words[i]</code> 由小写英文字母组成</li>&#10;	<li><code>words</code> 中的所有字符串 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：状态压缩 + 动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最短超级串相当于一条经过每个单词恰好一次的路径，重叠尽量大。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>12</mn>
</math></span>，状态可用子集表示。预处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 接到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的最大重叠，再 DP： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>S</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为走过集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>S</mi>
</math></span>、止于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的最大重叠。记录前驱后逆推出顺序并拼接未覆盖的单词。</p>
</blockquote>
<p>由于题目中字符串数组 <code v-pre>words</code> 的长度不超过 12，因此可以使用状态压缩的方法来表示字符串数组中的每个字符串是否被选中。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示字符串当前选中状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，且最后一个选中的字符串为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，字符串重叠部分的最大长度。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的二进制表示中的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 表示字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 被选中，为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 表示字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 未被选中。重叠部分达到最大时，最终得到的字符串最短。我们只要求出重叠部分的最大值以及对应的字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，记录每一步状态转移，就能够逆推出最终的字符串。</p>
<p>字符串两两之间的重叠部分长度可以预处理出来，存储在二维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 中，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 之间的重叠部分长度。</p>
<p>动态规划的状态转移方程如下：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <munder>
    <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2208;</mo>
      <mo fence="false" stretchy="false">{</mo>
      <mn>0</mn>
      <mo>,</mo>
      <mn>1</mn>
      <mo>,</mo>
      <mo>&#x22EF;</mo>
      <mo>,</mo>
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo fence="false" stretchy="false">}</mo>
    </mrow>
  </munder>
  <mo fence="false" stretchy="false">{</mo>
  <mi>d</mi>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo fence="false" stretchy="false">}</mo>
</math></span><p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 为字符串数组 <code v-pre>words</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func shortestSuperstring(words []string) string {</span></span>
<span class="line"><span>	n := len(words)</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for i, a := range words {</span></span>
<span class="line"><span>		g[i] = make([]int, n)</span></span>
<span class="line"><span>		for j, b := range words {</span></span>
<span class="line"><span>			if i != j {</span></span>
<span class="line"><span>				for k := min(len(a), len(b)); k > 0; k-- {</span></span>
<span class="line"><span>					if a[len(a)-k:] == b[:k] {</span></span>
<span class="line"><span>						g[i][j] = k</span></span>
<span class="line"><span>						break</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dp := make([][]int, 1&#x3C;&#x3C;n)</span></span>
<span class="line"><span>	p := make([][]int, 1&#x3C;&#x3C;n)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 1&#x3C;&#x3C;n; i++ {</span></span>
<span class="line"><span>		dp[i] = make([]int, n)</span></span>
<span class="line"><span>		p[i] = make([]int, n)</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			p[i][j] = -1</span></span>
<span class="line"><span>			if ((i >> j) &#x26; 1) == 1 {</span></span>
<span class="line"><span>				pi := i ^ (1 &#x3C;&#x3C; j)</span></span>
<span class="line"><span>				for k := 0; k &#x3C; n; k++ {</span></span>
<span class="line"><span>					if ((pi >> k) &#x26; 1) == 1 {</span></span>
<span class="line"><span>						v := dp[pi][k] + g[k][j]</span></span>
<span class="line"><span>						if v > dp[i][j] {</span></span>
<span class="line"><span>							dp[i][j] = v</span></span>
<span class="line"><span>							p[i][j] = k</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	j := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if dp[(1&#x3C;&#x3C;n)-1][i] > dp[(1&#x3C;&#x3C;n)-1][j] {</span></span>
<span class="line"><span>			j = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	arr := []int{j}</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	vis[j] = true</span></span>
<span class="line"><span>	for i := (1 &#x3C;&#x3C; n) - 1; p[i][j] != -1; {</span></span>
<span class="line"><span>		k := i</span></span>
<span class="line"><span>		i ^= (1 &#x3C;&#x3C; j)</span></span>
<span class="line"><span>		j = p[k][j]</span></span>
<span class="line"><span>		arr = append(arr, j)</span></span>
<span class="line"><span>		vis[j] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if !vis[i] {</span></span>
<span class="line"><span>			arr = append(arr, i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := &#x26;strings.Builder{}</span></span>
<span class="line"><span>	ans.WriteString(words[arr[n-1]])</span></span>
<span class="line"><span>	for i := n - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		k := g[arr[i+1]][arr[i]]</span></span>
<span class="line"><span>		ans.WriteString(words[arr[i]][k:])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans.String()</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-shortest-superstring" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0943.Find%20the%20Shortest%20Superstring/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-956" tabindex="-1">956. 最高的广告牌 <a class="header-anchor" href="#q-956" aria-label="Permalink to &quot;956. 最高的广告牌 {#q-956}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、动态规划、背包问题、0-1 背包、中途相遇</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你正在安装一个广告牌，并希望它高度最大。这块广告牌将有两个钢制支架，两边各一个。每个钢支架的高度必须相等。</p>&#10;&#10;<p>你有一堆可以焊接在一起的钢筋 <code>rods</code>。举个例子，如果钢筋的长度为 <code>1</code>、<code>2</code> 和 <code>3</code>，则可以将它们焊接在一起形成长度为 <code>6</code> 的支架。</p>&#10;&#10;<p>返回 <em>广告牌的最大可能安装高度</em> 。如果没法安装广告牌，请返回 <code>0</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[1,2,3,6]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>我们有两个不相交的子集 {1,2,3} 和 {6}，它们具有相同的和 sum = 6。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[1,2,3,4,5,6]&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>我们有两个不相交的子集 {2,3,5} 和 {4,6}，它们具有相同的和 sum = 10。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[1,2]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>没法安装广告牌，所以返回 0。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li><code>0 &lt;= rods.length &lt;= 20</code></li>&#10;	<li><code>1 &lt;= rods[i] &lt;= 1000</code></li>&#10;	<li><code>sum(rods[i]) &lt;= 5000</code></li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三分配钢筋：左柱、右柱或丢弃，使两柱等高且尽量高。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 不大但子集和较大，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>3</mn>
    <mi>n</mi>
  </msup>
</math></span> 不可行。状态只需“用到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根、当前高度差 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>”的最大共同高度。三选一转移，差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时即为可行高度。记忆化避免重复。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根钢筋开始，且当前高度差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 时，两边的最大共同高度。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
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
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span>，此时判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，如果是则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>n</mi>
</math></span>，此时有三种情况：</p>
<ol>
<li>不选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根钢筋，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根钢筋，并且放置在原本高度较高的一边，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>选择第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根钢筋，并且放置在高度较低的一边，此时共同高度增加了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ol>
<p>我们取这三种情况下的最大值，即可得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的值。</p>
<p>为了避免重复计算，我们使用一个二维数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 来记录已经计算过的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的值，调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 已经被计算过，则直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。否则，我们计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的值，并将其存入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>S</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>S</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>S</mi>
</math></span> 分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 的长度和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中所有元素的和。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func tallestBillboard(rods []int) int {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range rods {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(rods)</span></span>
<span class="line"><span>	f := make([][]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, s+1)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(i, j int) int</span></span>
<span class="line"><span>	dfs = func(i, j int) int {</span></span>
<span class="line"><span>		if i >= n {</span></span>
<span class="line"><span>			if j == 0 {</span></span>
<span class="line"><span>				return 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return -(1 &#x3C;&#x3C; 30)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][j] != -1 {</span></span>
<span class="line"><span>			return f[i][j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := max(dfs(i+1, j), dfs(i+1, j+rods[i]))</span></span>
<span class="line"><span>		ans = max(ans, dfs(i+1, abs(j-rods[i]))+min(j, rods[i]))</span></span>
<span class="line"><span>		f[i][j] = ans</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, 0)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>搜索可改成自底向上： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根、高度差 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的最大共同高度。转移与搜索相同，避免递归常数，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
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
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根钢筋，两边高度差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 时的最大共同高度。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>。我们求出所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的和，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的取值范围为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>对于第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 根钢筋，我们可以不选择它，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>；也可以选择它，此时有三种情况：</p>
<ol>
<li>放置在原本高度较高的一边，即满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2265;</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>放置在原本高度较低的一遍，如果满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>s</mi>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>；如果满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ol>
<p>综上，我们可以得到状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left right" columnspacing="0em 2em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">[</mo>
        <mi>j</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
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
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">[</mo>
        <mi>j</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>m</mi>
        <mi>a</mi>
        <mi>x</mi>
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
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">[</mo>
        <mi>j</mi>
        <mo>&#x2212;</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mtext mathvariant="italic">if&#xA0;</mtext>
        <mi>j</mi>
        <mo>&#x2265;</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">[</mo>
        <mi>j</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>m</mi>
        <mi>a</mi>
        <mi>x</mi>
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
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">[</mo>
        <mi>j</mi>
        <mo>+</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mtext mathvariant="italic">if&#xA0;</mtext>
        <mi>j</mi>
        <mo>+</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>&#x2264;</mo>
        <mi>s</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>f</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">[</mo>
        <mi>j</mi>
        <mo stretchy="false">]</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mi>m</mi>
        <mi>a</mi>
        <mi>x</mi>
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
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">[</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>&#x2212;</mo>
        <mi>j</mi>
        <mo stretchy="false">]</mo>
        <mo>+</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
        <mo>&#x2212;</mo>
        <mi>j</mi>
        <mo stretchy="false">)</mo>
      </mtd>
      <mtd>
        <mtext mathvariant="italic">if&#xA0;</mtext>
        <mi>j</mi>
        <mo>&lt;</mo>
        <mi>r</mi>
        <mi>o</mi>
        <mi>d</mi>
        <mi>s</mi>
        <mo stretchy="false">[</mo>
        <mi>i</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>最终答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>S</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>S</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>S</mi>
</math></span> 分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 的长度和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中所有元素的和。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func tallestBillboard(rods []int) int {</span></span>
<span class="line"><span>	n := len(rods)</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range rods {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := make([][]int, n+1)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = make([]int, s+1)</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = -(1 &#x3C;&#x3C; 30)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f[0][0] = 0</span></span>
<span class="line"><span>	for i, t := 1, 0; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		x := rods[i-1]</span></span>
<span class="line"><span>		t += x</span></span>
<span class="line"><span>		for j := 0; j &#x3C;= t; j++ {</span></span>
<span class="line"><span>			f[i][j] = f[i-1][j]</span></span>
<span class="line"><span>			if j >= x {</span></span>
<span class="line"><span>				f[i][j] = max(f[i][j], f[i-1][j-x])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if j+x &#x3C;= t {</span></span>
<span class="line"><span>				f[i][j] = max(f[i][j], f[i-1][j+x]+x)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if j &#x3C; x {</span></span>
<span class="line"><span>				f[i][j] = max(f[i][j], f[i-1][x-j]+x-j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f[n][0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/tallest-billboard" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0956.Tallest%20Billboard/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-960" tabindex="-1">960. 删列造序 III <a class="header-anchor" href="#q-960" aria-label="Permalink to &quot;960. 删列造序 III {#q-960}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、字符串、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定由 <code>n</code> 个小写字母字符串组成的数组 <code>strs</code> ，其中每个字符串长度相等。</p>&#10;&#10;<p>选取一个删除索引序列，对于 <code>strs</code> 中的每个字符串，删除对应每个索引处的字符。</p>&#10;&#10;<p>比如，有 <code>strs = [&quot;abcdef&quot;,&quot;uvwxyz&quot;]</code> ，删除索引序列 <code>{0, 2, 3}</code> ，删除后为 <code>[&quot;bef&quot;, &quot;vyz&quot;]</code> 。</p>&#10;&#10;<p>假设，我们选择了一组删除索引 <code>answer</code> ，那么在执行删除操作之后，最终得到的数组的行中的 <strong>每个元素</strong> 都是按<strong>字典序</strong>排列的（即 <code>(strs[0][0] &lt;= strs[0][1] &lt;= ... &lt;= strs[0][strs[0].length - 1])</code> 和 <code>(strs[1][0] &lt;= strs[1][1] &lt;= ... &lt;= strs[1][strs[1].length - 1])</code> ，依此类推）。</p>&#10;&#10;<p>请返回<em> <code>answer.length</code> 的最小可能值</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;babca&quot;,&quot;bbazb&quot;]&#10;<strong>输出：</strong>3&#10;<strong>解释：&#10;</strong>删除 0、1 和 4 这三列后，最终得到的数组是 strs = [&quot;bc&quot;, &quot;az&quot;]。&#10;这两行是分别按字典序排列的（即，strs[0][0] &lt;= strs[0][1] 且 strs[1][0] &lt;= strs[1][1]）。&#10;注意，strs[0] > strs[1] —— 数组 strs 不一定是按字典序排列的。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;edcba&quot;]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>如果删除的列少于 4 列，则剩下的行都不会按字典序排列。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;ghi&quot;,&quot;def&quot;,&quot;abc&quot;]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>所有行都已按字典序排列。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;&#10;<ul>&#10;	<li><code>n == strs.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>1 &lt;= strs[i].length &lt;= 100</code></li>&#10;	<li><code>strs[i]</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>可删任意列，使留下的列对每一行都非降，求最少删除。等价于在列下标上求最长“对所有行都非降”的子序列，删除数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 减该长度。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 以第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 列结尾，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>i</mi>
</math></span> 且所有行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 时转移。</p>
</blockquote>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示以第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 列结尾的最长不下降子序列的长度，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>考虑计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>i</mi>
</math></span>，如果对于所有的字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>。</p>
<p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
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
  <mi>m</mi>
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
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">strs</mtext>
</math></span> 每个字符串的长度和数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minDeletionSize(strs []string) int {</span></span>
<span class="line"><span>	n := len(strs[0])</span></span>
<span class="line"><span>	f := make([]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		f[i] = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			ok := true</span></span>
<span class="line"><span>			for _, s := range strs {</span></span>
<span class="line"><span>				if s[j] > s[i] {</span></span>
<span class="line"><span>					ok = false</span></span>
<span class="line"><span>					break</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if ok {</span></span>
<span class="line"><span>				f[i] = max(f[i], f[j]+1)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n - slices.Max(f)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/delete-columns-to-make-sorted-iii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0960.Delete%20Columns%20to%20Make%20Sorted%20III/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-964" tabindex="-1">964. 表示数字的最少运算符 <a class="header-anchor" href="#q-964" aria-label="Permalink to &quot;964. 表示数字的最少运算符 {#q-964}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：记忆化、数学、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个正整数 <code>x</code>，我们将会写出一个形如 <code>x (op1) x (op2) x (op3) x ...</code> 的表达式，其中每个运算符 <code>op1</code>，<code>op2</code>，… 可以是加、减、乘、除（<code>+</code>，<code>-</code>，<code>*</code>，或是 <code>/</code>）之一。例如，对于 <code>x = 3</code>，我们可以写出表达式 <code>3 * 3 / 3 + 3 - 3</code>，该式的值为 3 。</p>&#10;&#10;<p>在写这样的表达式时，我们需要遵守下面的惯例：</p>&#10;&#10;<ul>&#10;	<li>除运算符（<code>/</code>）返回有理数。</li>&#10;	<li>任何地方都没有括号。</li>&#10;	<li>我们使用通常的操作顺序：乘法和除法发生在加法和减法之前。</li>&#10;	<li>不允许使用一元否定运算符（<code>-</code>）。例如，“<code>x - x</code>” 是一个有效的表达式，因为它只使用减法，但是 “<code>-x + x</code>” 不是，因为它使用了否定运算符。 </li>&#10;</ul>&#10;&#10;<p>我们希望编写一个能使表达式等于给定的目标值 <code>target</code> 且运算符最少的表达式。返回所用运算符的最少数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>x = 3, target = 19&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>3 * 3 + 3 * 3 + 3 / 3 。表达式包含 5 个运算符。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>x = 5, target = 501&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>5 * 5 * 5 * 5 - 5 * 5 * 5 + 5 / 5 。表达式包含 8 个运算符。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>x = 100, target = 100000000&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>100 * 100 * 100 * 100 。表达式包含 3 个运算符。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= x &lt;= 100</code></li>&#10;	<li><code>1 &lt;= target &lt;= 2 * 10<sup>8</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>只用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 与四则运算凑出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span>，运算符尽量少。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
</math></span> 是自然积木。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo>&#x2264;</mo>
  <mi>x</mi>
</math></span> 时用若干个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>x</mi>
</math></span> 加减即可。否则找到最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 使 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
  <mo>&#x2265;</mo>
  <mi>v</mi>
</math></span>，在“先凑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span> 再补差”与“先凑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
</math></span> 再减去多余”（当多余小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>）之间取优，记忆化搜索。</p>
</blockquote>
<p>我们定义一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 凑成数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 所需要的最少运算符数量。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行逻辑如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2265;</mo>
  <mi>v</mi>
</math></span>，那么此时可以用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>x</mi>
</math></span> 相加来得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，运算符数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>；也可以用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>x</mi>
</math></span> 来得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，运算符数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mn>2</mn>
</math></span>。取两者的最小值。</p>
<p>否则，我们从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>2</mn>
</math></span> 开始枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
</math></span>，找到第一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
  <mo>&#x2265;</mo>
  <mi>v</mi>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>：</p>
<ul>
<li>如果此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo>&#x2265;</mo>
  <mi>v</mi>
</math></span>，那么只能先得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span>，然后再递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mo>&#x2212;</mo>
  <msup>
    <mi>x</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，此时运算符数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mo>&#x2212;</mo>
  <msup>
    <mi>x</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>如果此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo>&lt;</mo>
  <mi>v</mi>
</math></span>，那么可以按照上面的方式得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，此时运算符数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mo>&#x2212;</mo>
  <msup>
    <mi>x</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>；也可以先得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
</math></span>，再递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
</math></span>，此时运算符数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mi>k</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
</math></span>。取两者的最小值。</li>
</ul>
<p>为了避免重复计算，我们使用记忆化搜索的方式实现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
</math></span> 函数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>log</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>x</mi>
    </mrow>
  </msub>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mrow data-mjx-texclass="ORD">
    <mi>t</mi>
    <mi>a</mi>
    <mi>r</mi>
    <mi>g</mi>
    <mi>e</mi>
    <mi>t</mi>
  </mrow>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>log</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>x</mi>
    </mrow>
  </msub>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mrow data-mjx-texclass="ORD">
    <mi>t</mi>
    <mi>a</mi>
    <mi>r</mi>
    <mi>g</mi>
    <mi>e</mi>
    <mi>t</mi>
  </mrow>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func leastOpsExpressTarget(x int, target int) int {</span></span>
<span class="line"><span>	f := map[int]int{}</span></span>
<span class="line"><span>	var dfs func(int) int</span></span>
<span class="line"><span>	dfs = func(v int) int {</span></span>
<span class="line"><span>		if x > v {</span></span>
<span class="line"><span>			return min(v*2-1, 2*(x-v))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if val, ok := f[v]; ok {</span></span>
<span class="line"><span>			return val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		k := 2</span></span>
<span class="line"><span>		y := x * x</span></span>
<span class="line"><span>		for y &#x3C; v {</span></span>
<span class="line"><span>			y *= x</span></span>
<span class="line"><span>			k++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := k - 1 + dfs(v-y/x)</span></span>
<span class="line"><span>		if y-v &#x3C; v {</span></span>
<span class="line"><span>			ans = min(ans, k+dfs(y-v))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[v] = ans</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(target)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/least-operators-to-express-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0964.Least%20Operators%20to%20Express%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const d=t(e,[["render",o]]);export{w as __pageData,d as default};
