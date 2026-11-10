import{_ as a,a as t,c as s,b as m}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 二分查找（2）","description":"二分查找分类，第 497–1095 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 二分查找（2）","description":"二分查找分类，第 497–1095 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"二分查找分类，第 497–1095 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 二分查找（1）","link":"/principles/algorithms/leetcode-go/binary-search-01"},"next":{"text":"LeetCode Go · 二分查找（3）","link":"/principles/algorithms/leetcode-go/binary-search-03"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 二分查找（1）","link":"/principles/algorithms/leetcode-go/binary-search-01"},"next":{"text":"LeetCode Go · 二分查找（3）","link":"/principles/algorithms/leetcode-go/binary-search-03"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/binary-search-02.md","filePath":"principles/algorithms/leetcode-go/binary-search-02.md"}'),e={name:"principles/algorithms/leetcode-go/binary-search-02.md"};function o(p,n,l,i,h,c){return t(),s("div",null,[...n[0]||(n[0]=[m("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-二分查找-2" tabindex="-1">LeetCode Go · 二分查找（2） <a class="header-anchor" href="#leetcode-go-·-二分查找-2" aria-label="Permalink to &quot;LeetCode Go · 二分查找（2）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-497" tabindex="-1">497. 非重叠矩形中的随机点 <a class="header-anchor" href="#q-497" aria-label="Permalink to &quot;497. 非重叠矩形中的随机点 {#q-497}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：水塘抽样、数组、数学、二分查找、有序集合、前缀和、随机化</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个由非重叠的轴对齐矩形的数组 <code>rects</code> ，其中 <code>rects[i] = [ai, bi, xi, yi]</code> 表示 <code>(ai, bi)</code> 是第 <code>i</code> 个矩形的左下角点，<code>(xi, yi)</code> 是第 <code>i</code> 个矩形的右上角点。设计一个算法来随机挑选一个被某一矩形覆盖的整数点。矩形周长上的点也算做是被矩形覆盖。所有满足要求的点必须等概率被返回。</p>&#10;&#10;<p>在给定的矩形覆盖的空间内的任何整数点都有可能被返回。</p>&#10;&#10;<p><strong>请注意 </strong>，整数点是具有整数坐标的点。</p>&#10;&#10;<p>实现 <code>Solution</code> 类:</p>&#10;&#10;<ul>&#10;	<li><code>Solution(int[][] rects)</code> 用给定的矩形数组 <code>rects</code> 初始化对象。</li>&#10;	<li><code>int[] pick()</code> 返回一个随机的整数点 <code>[u, v]</code> 在给定的矩形所覆盖的空间内。</li>&#10;</ul>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0497.Random%20Point%20in%20Non-overlapping%20Rectangles/images/lc-pickrandomrec.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入: &#10;</strong>[&quot;Solution&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;]&#10;[[[[-2, -2, 1, 1], [2, 2, 4, 6]]], [], [], [], [], []]&#10;<strong>输出: &#10;</strong>[null, [1, -2], [1, -1], [-1, -2], [-2, -2], [0, 0]]&#10;&#10;<strong>解释：</strong>&#10;Solution solution = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);&#10;solution.pick(); // 返回 [1, -2]&#10;solution.pick(); // 返回 [1, -1]&#10;solution.pick(); // 返回 [-1, -2]&#10;solution.pick(); // 返回 [-2, -2]&#10;solution.pick(); // 返回 [0, 0]</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= rects.length &lt;= 100</code></li>&#10;	<li><code>rects[i].length == 4</code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= a<sub>i</sub> &lt; x<sub>i</sub> &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= b<sub>i</sub> &lt; y<sub>i</sub> &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>x<sub>i</sub> - a<sub>i</sub> &lt;= 2000</code></li>&#10;	<li><code>y<sub>i</sub> - b<sub>i</sub> &lt;= 2000</code></li>&#10;	<li>所有的矩形不重叠。</li>&#10;	<li><code>pick</code> 最多被调用 <code>10<sup>4</sup></code> 次。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在若干不重叠矩形的整数点上均匀采样。若先等概率选矩形再选点，小矩形被抽中的机会过大。</p>
<p>按格子数做前缀和，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">total</mtext>
  <mo stretchy="false">]</mo>
</math></span> 上均匀取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，二分定位矩形，再在该矩形内均匀取整点。</p>
<p>前缀和把「按面积加权」变成一次二分。矩形不重叠保证每个整点只属于一个矩形。</p>
</blockquote>
<p>将矩形面积求前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，然后随机获取到一个面积 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，利用二分查找定位到是哪个矩形，然后继续随机获取该矩形的其中一个整数点坐标即可。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type Solution struct {</span></span>
<span class="line"><span>	s     []int</span></span>
<span class="line"><span>	rects [][]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(rects [][]int) Solution {</span></span>
<span class="line"><span>	n := len(rects)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, v := range rects {</span></span>
<span class="line"><span>		s[i+1] = s[i] + (v[2]-v[0]+1)*(v[3]-v[1]+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return Solution{s, rects}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Solution) Pick() []int {</span></span>
<span class="line"><span>	n := len(this.rects)</span></span>
<span class="line"><span>	v := 1 + rand.Intn(this.s[len(this.s)-1])</span></span>
<span class="line"><span>	left, right := 0, n</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		if this.s[mid] >= v {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	rect := this.rects[left-1]</span></span>
<span class="line"><span>	x, y := rect[0]+rand.Intn(rect[2]-rect[0]+1), rect[1]+rand.Intn(rect[3]-rect[1]+1)</span></span>
<span class="line"><span>	return []int{x, y}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/random-point-in-non-overlapping-rectangles" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0497.Random%20Point%20in%20Non-overlapping%20Rectangles/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-528" tabindex="-1">528. 按权重随机选择 <a class="header-anchor" href="#q-528" aria-label="Permalink to &quot;528. 按权重随机选择 {#q-528}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、二分查找、前缀和、随机化</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <strong>下标从 0 开始</strong> 的正整数数组 <code>w</code> ，其中 <code>w[i]</code> 代表第 <code>i</code> 个下标的权重。</p>&#10;&#10;<p>请你实现一个函数 <code>pickIndex</code> ，它可以 <strong>随机地</strong> 从范围 <code>[0, w.length - 1]</code> 内（含 <code>0</code> 和 <code>w.length - 1</code>）选出并返回一个下标。选取下标 <code>i</code> 的 <strong>概率</strong> 为 <code>w[i] / sum(w)</code> 。</p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<ul>&#10;	<li>例如，对于 <code>w = [1, 3]</code>，挑选下标 <code>0</code> 的概率为 <code>1 / (1 + 3) = 0.25</code> （即，25%），而选取下标 <code>1</code> 的概率为 <code>3 / (1 + 3) = 0.75</code>（即，<code>75%</code>）。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;Solution&quot;,&quot;pickIndex&quot;]&#10;[[[1]],[]]&#10;<strong>输出：</strong>&#10;[null,0]&#10;<strong>解释：</strong>&#10;Solution solution = new Solution([1]);&#10;solution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;Solution&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;]&#10;[[[1,3]],[],[],[],[],[]]&#10;<strong>输出：</strong>&#10;[null,1,1,1,1,0]&#10;<strong>解释：</strong>&#10;Solution solution = new Solution([1, 3]);&#10;solution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。&#10;solution.pickIndex(); // 返回 1&#10;solution.pickIndex(); // 返回 1&#10;solution.pickIndex(); // 返回 1&#10;solution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。&#10;&#10;由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:&#10;[null,1,1,1,1,0]&#10;[null,1,1,1,1,1]&#10;[null,1,1,1,0,0]&#10;[null,1,1,1,0,1]&#10;[null,1,0,1,0,0]&#10;......&#10;诸若此类。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= w.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= w[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>pickIndex</code> 将被调用不超过 <code>10<sup>4</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按权重 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 做离散抽样，调用次数很多，不能每次线性扫描累加。</p>
<p>前缀和把权重变成数轴上的区间，均匀随机一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>S</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的整数后再二分定位所属区间。构造 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，单次抽取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。下标要减一，因为前缀和数组在开头垫了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type Solution struct {</span></span>
<span class="line"><span>	s []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(w []int) Solution {</span></span>
<span class="line"><span>	n := len(w)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		s[i+1] = s[i] + w[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return Solution{s}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Solution) PickIndex() int {</span></span>
<span class="line"><span>	n := len(this.s)</span></span>
<span class="line"><span>	x := 1 + rand.Intn(this.s[n-1])</span></span>
<span class="line"><span>	left, right := 1, n-1</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		if this.s[mid] >= x {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left - 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your Solution object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(w);</span></span>
<span class="line"><span> * param_1 := obj.PickIndex();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/random-pick-with-weight" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0528.Random%20Pick%20with%20Weight/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-532" tabindex="-1">532. 数组中的 k-diff 数对 <a class="header-anchor" href="#q-532" aria-label="Permalink to &quot;532. 数组中的 k-diff 数对 {#q-532}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code>，请你在数组中找出<strong> 不同的 </strong>k-diff 数对，并返回不同的 <strong>k-diff 数对</strong> 的数目。</p>&#10;&#10;<p><strong>k-diff</strong> 数对定义为一个整数对 <code>(nums[i], nums[j])</code><strong> </strong>，并满足下述全部条件：</p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= i, j &lt; nums.length</code></li>&#10;	<li><code>i != j</code></li>&#10;	<li><code>|nums[i] - nums[j]| == k</code></li>&#10;</ul>&#10;&#10;<p><strong>注意</strong>，<code>|val|</code> 表示 <code>val</code> 的绝对值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3, 1, 4, 1, 5], k = 2&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。&#10;尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1, 2, 3, 4, 5], k = 1&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5) 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1, 3, 1, 5, 4], k = 0&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>数组中只有一个 0-diff 数对，(1, 1) 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>-10<sup>7</sup> &lt;= nums[i] &lt;= 10<sup>7</sup></code></li>&#10;	<li><code>0 &lt;= k &lt;= 10<sup>7</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>a</mi>
  <mo>&#x2212;</mo>
  <mi>b</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mi>k</mi>
</math></span> 的不同数对（值不同，与下标无关）。枚举所有下标对是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>一边遍历一边把已见过的值放入集合：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>k</mi>
</math></span> 已出现，则把较小元加入答案集合，避免同一数对重复计数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 固定，查找是期望常数。</p>
</blockquote>
<p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 是一个定值，我们可以用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 记录数对的较小值，就能够确定较大的值。最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 的大小作为答案。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，当前遍历到的数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">vis</mtext>
</math></span> 记录此前遍历到的所有数字。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">vis</mtext>
</math></span> 中，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span> 添加至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>k</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">vis</mtext>
</math></span> 中，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 添加至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>。然后我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 添加至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">vis</mtext>
</math></span>。继续遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 直至遍历结束。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 的大小作为答案。</p>
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
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findPairs(nums []int, k int) int {</span></span>
<span class="line"><span>	ans := make(map[int]struct{})</span></span>
<span class="line"><span>	vis := make(map[int]struct{})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		if _, ok := vis[x-k]; ok {</span></span>
<span class="line"><span>			ans[x-k] = struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if _, ok := vis[x+k]; ok {</span></span>
<span class="line"><span>			ans[x] = struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[x] = struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/k-diff-pairs-in-an-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0532.K-diff%20Pairs%20in%20an%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-540" tabindex="-1">540. 有序数组中的单一元素 <a class="header-anchor" href="#q-540" aria-label="Permalink to &quot;540. 有序数组中的单一元素 {#q-540}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。</p>&#10;&#10;<p>请你找出并返回只出现一次的那个数。</p>&#10;&#10;<p>你设计的解决方案必须满足 <code>O(log n)</code> 时间复杂度和 <code>O(1)</code> 空间复杂度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,1,2,3,3,4,4,8,8]&#10;<strong>输出:</strong> 2&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums =  [3,3,7,7,10,11,11]&#10;<strong>输出:</strong> 10&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p></p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有序数组中只有一个元素出现一次，其余成对相邻。要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，不能整表扫描。</p>
<p>成对元素占据偶数-奇数下标。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>&#x2295;</mo>
  <mn>1</mn>
</math></span> 仍是一对，则单独元素在右半，否则在左半（含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>）。二分缩小到单独元素。按位异或避免讨论 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 奇偶分支。</p>
</blockquote>
<p>题目给定的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 是有序的，且要求在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">O</mtext>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 时间找到只出现一次的元素，因此我们考虑使用二分查找解决。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">l</mtext>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">r</mtext>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组的长度。</p>
<p>在每一步中，我们取中间位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，如果下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span> 为偶数，那么我们应该将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 进行比较；如果下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span> 为奇数，那么我们应该将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 进行比较。因此，我们可以统一将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo>&#x2295;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 进行比较，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2295;</mo>
</math></span> 表示异或运算。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
  <mo>&#x2260;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo>&#x2295;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，那么答案在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">l</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
</math></span> 中，我们令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">r</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">mid</mtext>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo>&#x2295;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，那么答案在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">r</mtext>
  <mo stretchy="false">]</mo>
</math></span> 中，我们令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">l</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。继续二分查找，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">l</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">r</mtext>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">l</mtext>
  <mo stretchy="false">]</mo>
</math></span> 即为只出现一次的元素。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">O</mtext>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">O</mtext>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func singleNonDuplicate(nums []int) int {</span></span>
<span class="line"><span>	l, r := 0, len(nums)-1</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r) >> 1</span></span>
<span class="line"><span>		if nums[mid] != nums[mid^1] {</span></span>
<span class="line"><span>			r = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			l = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nums[l]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/single-element-in-a-sorted-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0540.Single%20Element%20in%20a%20Sorted%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-633" tabindex="-1">633. 平方数之和 <a class="header-anchor" href="#q-633" aria-label="Permalink to &quot;633. 平方数之和 {#q-633}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、双指针、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个非负整数 <code>c</code> ，你要判断是否存在两个整数 <code>a</code> 和 <code>b</code>，使得 <code>a<sup>2</sup> + b<sup>2</sup> = c</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>c = 5&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>1 * 1 + 2 * 2 = 5&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>c = 3&#10;<strong>输出：</strong>false&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= c &lt;= 2<sup>31</sup> - 1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断是否存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>b</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <mi>c</mi>
</math></span>。对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 再开方检查 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>&#x2212;</mo>
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
</math></span> 需要多次开方。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>31</mn>
    </mrow>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <mi>c</mi>
  </msqrt>
</math></span> 两端相向移动即可。</p>
<p>和偏小则增大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，偏大则减小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>。平方关于指针单调，不会漏解。</p>
</blockquote>
<p>我们可以使用双指针的方法来解决这个问题，定义两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，分别指向 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <mi>c</mi>
  </msqrt>
</math></span>。在每一步中，我们会计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>b</mi>
    <mn>2</mn>
  </msup>
</math></span> 的值，然后比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 的大小。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mi>c</mi>
</math></span>，我们就找到了两个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>b</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <mi>c</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&lt;</mo>
  <mi>c</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 的值增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&gt;</mo>
  <mi>c</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 的值减小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。我们不断进行这个过程直到找到答案，或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 的值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 的值，返回 <code v-pre>false</code>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>c</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 是给定的非负整数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func judgeSquareSum(c int) bool {</span></span>
<span class="line"><span>	a, b := 0, int(math.Sqrt(float64(c)))</span></span>
<span class="line"><span>	for a &#x3C;= b {</span></span>
<span class="line"><span>		s := a*a + b*b</span></span>
<span class="line"><span>		if s == c {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if s &#x3C; c {</span></span>
<span class="line"><span>			a++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			b--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>双指针是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>c</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span> 的搜索。数论上， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 能写成两平方和当且仅当所有形如 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
  <mi>k</mi>
  <mo>+</mo>
  <mn>3</mn>
</math></span> 的素因子幂次为偶数。质因数分解后按此判定，复杂度同阶但不再枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>这个问题实际上是关于一个数能否表示为两个平方数之和的条件。这个定理可以追溯到费马（Fermat）和欧拉（Euler），它在数论中是一个经典结果。</p>
<p>具体来说，这个定理可以表述为：</p>
<p><strong>一个正整数 ( n ) 能表示为两个平方数之和的充要条件是：( n ) 的所有形如 ( 4k + 3 ) 的素数因子的幂次均为偶数。</strong></p>
<p>这意味着，如果我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分解成素数因子乘积的形式，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <msubsup>
    <mi>p</mi>
    <mn>1</mn>
    <mrow data-mjx-texclass="ORD">
      <msub>
        <mi>e</mi>
        <mn>1</mn>
      </msub>
    </mrow>
  </msubsup>
  <msubsup>
    <mi>p</mi>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <msub>
        <mi>e</mi>
        <mn>2</mn>
      </msub>
    </mrow>
  </msubsup>
  <mo>&#x22EF;</mo>
  <msubsup>
    <mi>p</mi>
    <mi>k</mi>
    <mrow data-mjx-texclass="ORD">
      <msub>
        <mi>e</mi>
        <mi>k</mi>
      </msub>
    </mrow>
  </msubsup>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>p</mi>
    <mi>i</mi>
  </msub>
</math></span> 是素数且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>e</mi>
    <mi>i</mi>
  </msub>
</math></span> 是它们对应的幂次，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可以表示为两个平方数之和，当且仅当所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
  <mi>k</mi>
  <mo>+</mo>
  <mn>3</mn>
</math></span> 形式的素数因子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>p</mi>
    <mi>i</mi>
  </msub>
</math></span> 的幂次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>e</mi>
    <mi>i</mi>
  </msub>
</math></span> 都是偶数。</p>
<p>更正式地，假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>p</mi>
    <mi>i</mi>
  </msub>
</math></span> 是形如 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
  <mi>k</mi>
  <mo>+</mo>
  <mn>3</mn>
</math></span> 的素数，则对于每一个这样的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>p</mi>
    <mi>i</mi>
  </msub>
</math></span>，要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>e</mi>
    <mi>i</mi>
  </msub>
</math></span> 是偶数。</p>
<p>例如：</p>
<ul>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>13</mn>
</math></span> 是素数，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>13</mn>
  <mo>&#x2261;</mo>
  <mn>1</mn>
  <mspace width="0.444em"></mspace>
  <mo stretchy="false">(</mo>
  <mi>mod</mi>
  <mspace width="0.333em"></mspace>
  <mn>4</mn>
  <mo stretchy="false">)</mo>
</math></span>，因此它可以表示为两个平方数之和，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>13</mn>
  <mo>=</mo>
  <msup>
    <mn>2</mn>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mn>3</mn>
    <mn>2</mn>
  </msup>
</math></span>。</li>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>21</mn>
</math></span> 分解为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <mn>7</mn>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 都是形如 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
  <mi>k</mi>
  <mo>+</mo>
  <mn>3</mn>
</math></span> 的素数因子，并且它们的幂次都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>（奇数），因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>21</mn>
</math></span> 不能表示为两个平方数之和。</li>
</ul>
<p>总结起来，这个定理在数论中非常重要，用于判断一个数是否可以表示为两个平方数之和。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>c</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 是给定的非负整数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func judgeSquareSum(c int) bool {</span></span>
<span class="line"><span>	n := int(math.Sqrt(float64(c)))</span></span>
<span class="line"><span>	for i := 2; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		if c%i == 0 {</span></span>
<span class="line"><span>			exp := 0</span></span>
<span class="line"><span>			for c%i == 0 {</span></span>
<span class="line"><span>				c /= i</span></span>
<span class="line"><span>				exp++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if i%4 == 3 &#x26;&#x26; exp%2 != 0 {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return c%4 != 3</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-of-square-numbers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0633.Sum%20of%20Square%20Numbers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-644" tabindex="-1">644. 子数组最大平均数 II 🔒 <a class="header-anchor" href="#q-644" aria-label="Permalink to &quot;644. 子数组最大平均数 II 🔒 {#q-644}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个包含 <code>n</code> 个整数的数组 <code>nums</code> ，和一个整数 <code>k</code> 。</p>&#10;&#10;<p>请你找出<strong> 长度大于等于</strong> <code>k</code> 且含最大平均值的连续子数组。并输出这个最大平均值。任何计算误差小于 <code>10<sup>-5</sup></code> 的结果都将被视为正确答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,12,-5,-6,50,3], k = 4&#10;<strong>输出：</strong>12.75000&#10;<strong>解释：&#10;</strong>- 当长度为 4 的时候，连续子数组平均值分别为 [0.5, 12.75, 10.5] ，其中最大平均值是 12.75 。&#10;- 当长度为 5 的时候，连续子数组平均值分别为 [10.4, 10.8] ，其中最大平均值是 10.8 。&#10;- 当长度为 6 的时候，连续子数组平均值分别为 [9.16667] ，其中最大平均值是 9.16667 。&#10;当取长度为 4 的子数组（即，子数组 [12, -5, -6, 50]）的时候，可以得到最大的连续子数组平均值 12.75 ，所以返回 12.75 。&#10;根据题目要求，无需考虑长度小于 4 的子数组。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5], k = 1&#10;<strong>输出：</strong>5.00000&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>长度至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组最大平均值，枚举区间是平方级， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。平均值对阈值单调：存在均值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>v</mi>
</math></span> 则答案不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>。</p>
<p>对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 二分，把每个元素减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 后问是否存在长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 的非负和子数组。用前缀和减去此前最短合法前缀的最小值即可判定。</p>
</blockquote>
<p>我们注意到，如果一个长度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的平均值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，那么最大平均数一定大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，否则最大平均数一定小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>。因此，我们可以使用二分查找的方法找出最大平均数。</p>
<p>我们考虑二分查找的左右边界分别是什么？左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 一定是数组中的最小值，而右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 则是数组中的最大值。接下来，我们二分查找中点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，判断是否存在长度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的平均值大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>。如果存在，那么我们就将左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，否则我们就将右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>。当左边界和右边界的差小于一个极小的非负数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>&lt;</mo>
  <mi>&#x3F5;</mi>
</math></span> 时，我们就可以得到最大平均数，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3F5;</mi>
</math></span> 表示一个极小的正数，可以取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>5</mn>
    </mrow>
  </msup>
</math></span>。</p>
<p>问题的关键在于如何判断一个长度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的平均值是否大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>。</p>
<p>我们假设在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中，存在一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的子数组，元素分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mi>j</mi>
  </msub>
</math></span>，满足其平均值大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mfrac>
    <mrow>
      <msub>
        <mi>a</mi>
        <mn>1</mn>
      </msub>
      <mo>+</mo>
      <msub>
        <mi>a</mi>
        <mn>2</mn>
      </msub>
      <mo>+</mo>
      <mo>&#x22EF;</mo>
      <mo>+</mo>
      <msub>
        <mi>a</mi>
        <mi>j</mi>
      </msub>
    </mrow>
    <mi>j</mi>
  </mfrac>
  <mo>&#x2265;</mo>
  <mi>v</mi>
</math></span><p>那么：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <msub>
    <mi>a</mi>
    <mi>j</mi>
  </msub>
  <mo>&#x2265;</mo>
  <mi>v</mi>
  <mo>&#xD7;</mo>
  <mi>j</mi>
</math></span><p>即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mi>j</mi>
  </msub>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mn>0</mn>
</math></span><p>可以发现，如果我们将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的每个元素都减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，那么原问题就转换成了一个求长度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的元素和是否大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的问题。我们可以使用滑动窗口来解决这个问题。</p>
<p>我们先计算得到数组前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个元素与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 的差值之和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2265;</mo>
  <mn>0</mn>
</math></span>，那么就说明存在长度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的元素和大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则，我们继续往后遍历元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，假设当前前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 项元素与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 的差值之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mi>j</mi>
  </msub>
</math></span>，那么我们可以维护在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内元素的前缀和与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 的差值之和的最小值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
</math></span>，如果存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mi>j</mi>
  </msub>
  <mo>&#x2265;</mo>
  <mi>m</mi>
  <mi>i</mi>
</math></span>，那么就说明存在长度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的元素和大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>u</mi>
  <mi>e</mi>
</math></span>。</p>
<p>否则，我们继续往后遍历元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，直到遍历完整个数组。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度以及数组中的最大值和最小值的差值。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMaxAverage(nums []int, k int) float64 {</span></span>
<span class="line"><span>	eps := 1e-5</span></span>
<span class="line"><span>	l := float64(slices.Min(nums))</span></span>
<span class="line"><span>	r := float64(slices.Max(nums))</span></span>
<span class="line"><span>	check := func(v float64) bool {</span></span>
<span class="line"><span>		s := 0.0</span></span>
<span class="line"><span>		for _, x := range nums[:k] {</span></span>
<span class="line"><span>			s += float64(x) - v</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if s >= 0 {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := 0.0</span></span>
<span class="line"><span>		mi := 0.0</span></span>
<span class="line"><span>		for i := k; i &#x3C; len(nums); i++ {</span></span>
<span class="line"><span>			s += float64(nums[i]) - v</span></span>
<span class="line"><span>			t += float64(nums[i-k]) - v</span></span>
<span class="line"><span>			mi = math.Min(mi, t)</span></span>
<span class="line"><span>			if s >= mi {</span></span>
<span class="line"><span>				return true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for r-l >= eps {</span></span>
<span class="line"><span>		mid := (l + r) / 2</span></span>
<span class="line"><span>		if check(mid) {</span></span>
<span class="line"><span>			l = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			r = mid</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return l</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-average-subarray-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0644.Maximum%20Average%20Subarray%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-658" tabindex="-1">658. 找到 K 个最接近的元素 <a class="header-anchor" href="#q-658" aria-label="Permalink to &quot;658. 找到 K 个最接近的元素 {#q-658}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、排序、滑动窗口、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 <strong>排序好</strong> 的数组 <code>arr</code> ，两个整数 <code>k</code> 和 <code>x</code> ，从数组中找到最靠近 <code>x</code>（两数之差最小）的 <code>k</code> 个数。返回的结果必须要是按升序排好的。</p>&#10;&#10;<p>整数 <code>a</code> 比整数 <code>b</code> 更接近 <code>x</code> 需要满足：</p>&#10;&#10;<ul>&#10;	<li><code>|a - x| &lt; |b - x|</code> 或者</li>&#10;	<li><code>|a - x| == |b - x|</code> 且 <code>a &lt; b</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,2,3,4,5], k = 4, x = 3&#10;<strong>输出：</strong>[1,2,3,4]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,1,2,3,4,5], k = 4, x = -1&#10;<strong>输出：</strong>[1,1,2,3]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= arr.length</code></li>&#10;	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>arr</code> 按 <strong>升序</strong> 排列</li>&#10;	<li><code>-10<sup>4</sup> &lt;= arr[i], x &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有序数组中找与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 最接近的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个数，结果仍要有序。按距离排序再取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个即可，代价是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>v</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 为键排序，截取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个后再按值排序。</p>
</blockquote>
<p>将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中的所有元素按照与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的距离从小到大进行排列。取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个元素排序后返回。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findClosestElements(arr []int, k int, x int) []int {</span></span>
<span class="line"><span>	sort.Slice(arr, func(i, j int) bool {</span></span>
<span class="line"><span>		v := abs(arr[i]-x) - abs(arr[j]-x)</span></span>
<span class="line"><span>		if v == 0 {</span></span>
<span class="line"><span>			return arr[i] &#x3C; arr[j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return v &#x3C; 0</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	ans := arr[:k]</span></span>
<span class="line"><span>	sort.Ints(ans)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x >= 0 {</span></span>
<span class="line"><span>		return x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>答案必是一段连续子数组。两端指针按距离把更远的一侧收进来，直到长度恰为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，线性即可，且结果已有序。</p>
</blockquote>
<p>直觉上，有序数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 最靠近 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个数必然是一段连续的子数组。</p>
<p>我们可以声明头尾指针，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，然后根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 的大小比较结果缩小范围，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>=</mo>
  <mi>k</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findClosestElements(arr []int, k int, x int) []int {</span></span>
<span class="line"><span>	l, r := 0, len(arr)</span></span>
<span class="line"><span>	for r-l > k {</span></span>
<span class="line"><span>		if x-arr[l] &#x3C;= arr[r-1]-x {</span></span>
<span class="line"><span>			r--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return arr[l:r]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>双指针是线性。窗口左端在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 上单调：比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 即可二分左端，降到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>在方法二的基础上，我们更进一步，查找大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的窗口的左边界。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findClosestElements(arr []int, k int, x int) []int {</span></span>
<span class="line"><span>	left, right := 0, len(arr)-k</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		if x-arr[mid] &#x3C;= arr[mid+k]-x {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return arr[left : left+k]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-k-closest-elements" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0658.Find%20K%20Closest%20Elements/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-668" tabindex="-1">668. 乘法表中第k小的数 <a class="header-anchor" href="#q-668" aria-label="Permalink to &quot;668. 乘法表中第k小的数 {#q-668}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>几乎每一个人都用 <a href="https://baike.baidu.com/item/%E4%B9%98%E6%B3%95%E8%A1%A8" target="_blank" rel="noopener noreferrer">乘法表</a>。但是你能在乘法表中快速找到第 <code>k</code> 小的数字吗？</p>&#10;&#10;<p>乘法表是大小为 <code>m x n</code> 的一个整数矩阵，其中 <code>mat[i][j] == i * j</code>（下标从 <strong>1</strong> 开始）。</p>&#10;&#10;<p>给你三个整数 <code>m</code>、<code>n</code> 和 <code>k</code>，请你在大小为 <code>m x n</code> 的乘法表中，找出并返回第 <code>k</code> 小的数字。</p>&#10;&#10;<div>&#10;<div>&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0668.Kth%20Smallest%20Number%20in%20Multiplication%20Table/images/multtable1-grid.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>m = 3, n = 3, k = 5&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>第 5 小的数字是 3 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0668.Kth%20Smallest%20Number%20in%20Multiplication%20Table/images/multtable2-grid.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>m = 2, n = 3, k = 6&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>第 6 小的数字是 6 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= m, n &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= m * n</code></li>&#10;</ul>&#10;</div>&#10;</div></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span> 乘法表中第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 小。表最大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 边，物化排序不可行。</p>
<p>对值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 二分：第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>i</mi>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。累加后与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 比较，找最小满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
</blockquote>
<p>题目可以转换为，求有多少个数不超过 x。对于每一行 i，所有数都是 i 的倍数，不超过 x 的个数有 <code v-pre>x / i</code> 个。</p>
<p>二分枚举 x，累加每一行不超过 x 的个数，得到 cnt。找到 <code v-pre>cnt &gt;= k</code> 的最小 x。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findKthNumber(m int, n int, k int) int {</span></span>
<span class="line"><span>	left, right := 1, m*n</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>			cnt += min(mid/i, n)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt >= k {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0668.Kth%20Smallest%20Number%20in%20Multiplication%20Table/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-702" tabindex="-1">702. 搜索长度未知的有序数组 🔒 <a class="header-anchor" href="#q-702" aria-label="Permalink to &quot;702. 搜索长度未知的有序数组 🔒 {#q-702}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、交互</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>这是一个<strong>交互问题</strong>。</p>&#10;&#10;<p>您有一个<strong>升序</strong>整数数组，其<strong>长度未知</strong>。您没有访问数组的权限，但是可以使用 <code>ArrayReader</code> 接口访问它。你可以调用 <code>ArrayReader.get(i)</code>:</p>&#10;&#10;<ul>&#10;	<li>&#10;	<p>返回数组第<code>i<sup>th</sup></code>个索引(<strong>0-indexed</strong>)处的值(即 <code>secret[i]</code>)，或者</p>&#10;	</li>&#10;	<li>&#10;	<p>如果 <code>i</code>  超出了数组的边界，则返回 <code>2<sup>31</sup> - 1</code></p>&#10;	</li>&#10;</ul>&#10;&#10;<p>你也会得到一个整数 <code>target</code>。</p>&#10;&#10;<p>如果存在<code>secret[k] == target</code>，请返回索引 <code>k</code> 的值；否则返回 <code>-1</code></p>&#10;&#10;<p>你必须写一个时间复杂度为 <code>O(log n)</code> 的算法。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>secret</code> = [-1,0,3,5,9,12], <code>target</code> = 9&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong> 9 存在在 nums 中，下标为 4&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>secret</code> = [-1,0,3,5,9,12], <code>target</code> = 2&#10;<strong>输出:</strong> -1&#10;<strong>解释:</strong> 2 不在数组中所以返回 -1</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= secret.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= secret[i], target &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>secret</code> 严格递增</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数组有序但长度未知，只能通过接口按下落标取值，越界返回哨兵。线性从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 扫到目标，调用次数与目标位置成正比，在长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 时偏慢，也未利用有序性。</p>
<p>长度未知时无法直接对全区间二分。若先把右端点按倍增扩大，直到取值不小于目标，则目标必落在刚刚跨过的那一段，长度与目标位置同阶。</p>
<p>为此先令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 并不断左移一位，再在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 上做二分。查找区间长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，总调用次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为目标下标。</p>
</blockquote>
<p>我们先定义一个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，每一次判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 处的值是否小于目标值，如果小于目标值，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，即左移一位，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 处的值大于等于目标值。此时，我们可以确定目标值在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 的区间内。</p>
<p>接下来，我们定义一个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>r</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，然后我们可以使用二分查找的方法在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 的区间内查找目标值的位置。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为目标值的位置。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> *</span><span> // This is the ArrayReader's API interface.</span></span>
<span class="line"><span> *</span><span> // You should not implement it, or speculate about its implementation</span></span>
<span class="line"><span> * type ArrayReader struct {</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * func (this *ArrayReader) get(index int) int {}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func search(reader ArrayReader, target int) int {</span></span>
<span class="line"><span>	r := 1</span></span>
<span class="line"><span>	for reader.get(r) &#x3C; target {</span></span>
<span class="line"><span>		r &#x3C;&#x3C;= 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	l := r >> 1</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r) >> 1</span></span>
<span class="line"><span>		if reader.get(mid) >= target {</span></span>
<span class="line"><span>			r = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			l = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if reader.get(l) == target {</span></span>
<span class="line"><span>		return l</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/search-in-a-sorted-array-of-unknown-size" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0702.Search%20in%20a%20Sorted%20Array%20of%20Unknown%20Size/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-704" tabindex="-1">704. 二分查找 <a class="header-anchor" href="#q-704" aria-label="Permalink to &quot;704. 二分查找 {#q-704}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 <code>n</code> 个元素有序的（升序）整型数组 <code>nums</code> 和一个目标值 <code>target</code>  ，写一个函数搜索 <code>nums</code> 中的 <code>target</code>，如果 <code>target</code> 存在返回下标，否则返回 <code>-1</code>。</p>&#10;&#10;<p>你必须编写一个具有 <code>O(log n)</code> 时间复杂度的算法。</p>&#10;&#10;<p><br>&#10;<strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>nums</code> = [-1,0,3,5,9,12], <code>target</code> = 9&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong> 9 出现在 <code>nums</code> 中并且下标为 4&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>nums</code> = [-1,0,3,5,9,12], <code>target</code> = 2&#10;<strong>输出:</strong> -1&#10;<strong>解释:</strong> 2 不存在 <code>nums</code> 中因此返回 -1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li>你可以假设 <code>nums</code> 中的所有元素是不重复的。</li>&#10;	<li><code>n</code> 将在 <code>[1, 10000]</code>之间。</li>&#10;	<li><code>nums</code> 的每个元素都将在 <code>[-9999, 9999]</code>之间。</li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在升序且无重复的数组中查找 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，线性扫描可以通过，但有序数组上每次比较都能丢掉一半候选。</p>
<p>取中点后，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span>，答案不会在右侧，将右端收拢到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span>；否则答案只可能在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span> 右侧，左端移到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>循环至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>r</mi>
</math></span> 时落在第一个不小于目标的位置，再与目标比较即可区分命中与缺失。时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，额外空间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>每一次循环，我们计算中间位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，然后比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 的大小。</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">mid</mtext>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span>，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 在左半部分，我们将右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 移动到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span>；</li>
<li>否则，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 在右半部分，我们将左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 移动到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</li>
</ul>
<p>循环结束的条件是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>&lt;</mo>
  <mi>r</mi>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span> 就是我们要找的目标值，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func search(nums []int, target int) int {</span></span>
<span class="line"><span>	l, r := 0, len(nums)-1</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r) >> 1</span></span>
<span class="line"><span>		if nums[mid] >= target {</span></span>
<span class="line"><span>			r = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			l = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if nums[l] == target {</span></span>
<span class="line"><span>		return l</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/binary-search" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0704.Binary%20Search/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-710" tabindex="-1">710. 黑名单中的随机数 <a class="header-anchor" href="#q-710" aria-label="Permalink to &quot;710. 黑名单中的随机数 {#q-710}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学、二分查找、排序、随机化</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数 <code>n</code> 和一个 <strong>无重复</strong> 黑名单整数数组 <code>blacklist</code> 。设计一种算法，从 <code>[0, n - 1]</code> 范围内的任意整数中选取一个 <strong>未加入 </strong>黑名单 <code>blacklist</code> 的整数。任何在上述范围内且不在黑名单 <code>blacklist</code> 中的整数都应该有 <strong>同等的可能性</strong> 被返回。</p>&#10;&#10;<p>优化你的算法，使它最小化调用语言 <strong>内置</strong> 随机函数的次数。</p>&#10;&#10;<p>实现 <code>Solution</code> 类:</p>&#10;&#10;<ul>&#10;	<li><code>Solution(int n, int[] blacklist)</code> 初始化整数 <code>n</code> 和被加入黑名单 <code>blacklist</code> 的整数</li>&#10;	<li><code>int pick()</code> 返回一个范围为 <code>[0, n - 1]</code> 且不在黑名单 <code>blacklist</code> 中的随机整数</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入</strong>&#10;[&quot;Solution&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;, &quot;pick&quot;]&#10;[[7, [2, 3, 5]], [], [], [], [], [], [], []]&#10;<strong>输出</strong>&#10;[null, 0, 4, 1, 6, 1, 0, 4]&#10;&#10;<b>解释&#10;</b>Solution solution = new Solution(7, [2, 3, 5]);&#10;solution.pick(); // 返回0，任何[0,1,4,6]的整数都可以。注意，对于每一个pick的调用，&#10;                 // 0、1、4和6的返回概率必须相等(即概率为1/4)。&#10;solution.pick(); // 返回 4&#10;solution.pick(); // 返回 1&#10;solution.pick(); // 返回 6&#10;solution.pick(); // 返回 1&#10;solution.pick(); // 返回 0&#10;solution.pick(); // 返回 4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= blacklist.length &lt;= min(10<sup>5</sup>, n - 1)</code></li>&#10;	<li><code>0 &lt;= blacklist[i] &lt; n</code></li>&#10;	<li><code>blacklist</code> 中所有值都 <strong>不同</strong></li>&#10;	<li> <code>pick</code> 最多被调用 <code>2 * 10<sup>4</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 中等概率抽取不在黑名单中的整数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 很大而黑名单相对较短，每次现场扫描或拒绝采样都可能反复撞上黑名单。</p>
<p>合法整数恰好有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>B</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 个。若能把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 中「被拉黑」的位置一一映射到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 中的白名单，则只需在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 上均匀取数，再按映射替换即可。</p>
<p>预处理时把黑名单放入集合，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>k</mi>
</math></span> 起跳过黑名单，将每个小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的黑名单值映到下一个可用的大号。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pick</mtext>
</math></span> 时取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，查表得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo>.</mo>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type Solution struct {</span></span>
<span class="line"><span>	d map[int]int</span></span>
<span class="line"><span>	k int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int, blacklist []int) Solution {</span></span>
<span class="line"><span>	k := n - len(blacklist)</span></span>
<span class="line"><span>	i := k</span></span>
<span class="line"><span>	black := map[int]bool{}</span></span>
<span class="line"><span>	for _, b := range blacklist {</span></span>
<span class="line"><span>		black[b] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	d := map[int]int{}</span></span>
<span class="line"><span>	for _, b := range blacklist {</span></span>
<span class="line"><span>		if b &#x3C; k {</span></span>
<span class="line"><span>			for black[i] {</span></span>
<span class="line"><span>				i++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			d[b] = i</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return Solution{d, k}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Solution) Pick() int {</span></span>
<span class="line"><span>	x := rand.Intn(this.k)</span></span>
<span class="line"><span>	if v, ok := this.d[x]; ok {</span></span>
<span class="line"><span>		return v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your Solution object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(n, blacklist);</span></span>
<span class="line"><span> * param_1 := obj.Pick();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/random-pick-with-blacklist" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0710.Random%20Pick%20with%20Blacklist/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-713" tabindex="-1">713. 乘积小于 K 的子数组 <a class="header-anchor" href="#q-713" aria-label="Permalink to &quot;713. 乘积小于 K 的子数组 {#q-713}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、前缀和、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>nums</code> 和一个整数 <code>k</code>。</p>&#10;&#10;<p>请你返回 <strong>子数组</strong> 内所有元素的 <strong>乘积严格小于</strong><em> </em><code>k</code> 的连续子数组的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [10,5,2,6], k = 100&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>8 个乘积小于 100 的子数组分别为：[10]、[5]、[2]、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。&#10;需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3], k = 0&#10;<strong>输出：</strong>0</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示: </strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= k &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计乘积严格小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的连续子数组个数。数组长度可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举左右端点再求积为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，偏紧。</p>
<p>元素均为正整数，窗口乘积随右端扩张而单调不减。一旦乘积达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，必须右移左端才能恢复合法，因此每个端点至多移动一次。</p>
<p>维护乘积 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 与左端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>：右端纳入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 后，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 则不断除掉 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span>。此时以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 结尾的合法子数组个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。一遍扫描即可。</p>
</blockquote>
<p>我们可以用双指针维护一个滑动窗口，窗口内所有元素的乘积小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>定义两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 分别指向滑动窗口的左右边界，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>r</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。我们用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 记录窗口内所有元素的乘积，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</p>
<p>每次，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 右移一位，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 指向的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 加入窗口，更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>=</mo>
  <mi>p</mi>
  <mo>&#xD7;</mo>
  <mi>x</mi>
</math></span>。然后，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>，我们循环地将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 右移一位，并更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>=</mo>
  <mi>p</mi>
  <mo>&#xF7;</mo>
  <mtext>nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>&gt;</mo>
  <mi>r</mi>
</math></span> 为止。这样，以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 结尾的、乘积小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的连续子数组的个数即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。然后我们将答案加上这个数量，并继续移动 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 到达数组的末尾。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numSubarrayProductLessThanK(nums []int, k int) (ans int) {</span></span>
<span class="line"><span>    l, p := 0, 1</span></span>
<span class="line"><span>    for r, x := range nums {</span></span>
<span class="line"><span>        p *= x</span></span>
<span class="line"><span>        for l &#x3C;= r &#x26;&#x26; p >= k {</span></span>
<span class="line"><span>            p /= nums[l]</span></span>
<span class="line"><span>            l++</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ans += r - l + 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/subarray-product-less-than-k" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0713.Subarray%20Product%20Less%20Than%20K/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-719" tabindex="-1">719. 找出第 K 小的数对距离 <a class="header-anchor" href="#q-719" aria-label="Permalink to &quot;719. 找出第 K 小的数对距离 {#q-719}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>数对 <code>(a,b)</code> 由整数 <code>a</code> 和 <code>b</code> 组成，其数对距离定义为 <code>a</code> 和 <code>b</code> 的绝对差值。</p>&#10;&#10;<p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，数对由 <code>nums[i]</code> 和 <code>nums[j]</code> 组成且满足 <code>0 &lt;= i &lt; j &lt; nums.length</code> 。返回 <strong>所有数对距离中</strong> 第 <code>k</code> 小的数对距离。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,3,1], k = 1&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>数对和对应的距离如下：&#10;(1,3) -> 2&#10;(1,1) -> 0&#10;(3,1) -> 2&#10;距离第 1 小的数对是 (1,1) ，距离为 0 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,1,1], k = 2&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,6,1], k = 3&#10;<strong>输出：</strong>5&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= n * (n - 1) / 2</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数对距离的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 小。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 对再排序超出限制。距离取值在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">]</mo>
</math></span>，具有单调性：不大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 的对数随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 增大而不减。</p>
<p>因此可以对距离二分，判定「有多少对数对距离 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mi>d</mi>
</math></span>」。数组排序后，对每个右端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，左端最小合法值是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mi>d</mi>
</math></span>，用二分找到下界即可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 内数完。</p>
<p>在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 上二分最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 使得计数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>，即为第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 小距离。</p>
</blockquote>
<p>先对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 数组进行排序，然后在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 范围内二分枚举数对距离 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中数对距离小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span> 的数量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，则尝试缩小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>，否则尝试扩大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mi>n</mi>
  <mi>&#xD7;</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中两个数的最大差值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestDistancePair(nums []int, k int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	left, right := 0, nums[n-1]-nums[0]</span></span>
<span class="line"><span>	count := func(dist int) int {</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for i, v := range nums {</span></span>
<span class="line"><span>			target := v - dist</span></span>
<span class="line"><span>			left, right := 0, i</span></span>
<span class="line"><span>			for left &#x3C; right {</span></span>
<span class="line"><span>				mid := (left + right) >> 1</span></span>
<span class="line"><span>				if nums[mid] >= target {</span></span>
<span class="line"><span>					right = mid</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					left = mid + 1</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			cnt += i - left</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		if count(mid) >= k {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-k-th-smallest-pair-distance" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0719.Find%20K-th%20Smallest%20Pair%20Distance/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-744" tabindex="-1">744. 寻找比目标字母大的最小字母 <a class="header-anchor" href="#q-744" aria-label="Permalink to &quot;744. 寻找比目标字母大的最小字母 {#q-744}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符数组 <code>letters</code>，该数组按 <strong>非递减顺序 </strong>排序，以及一个字符 <code>target</code>。<code>letters</code> 里<strong>至少有两个不同</strong>的字符。</p>&#10;&#10;<p>返回 <code>letters</code> 中大于 <code>target</code> 的最小的字符。如果不存在这样的字符，则返回 <code>letters</code> 的第一个字符。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>letters = ['c', 'f', 'j'], target = 'a'&#10;<strong>输出:</strong> 'c'&#10;<strong>解释：</strong>letters 中字典上比 'a' 大的最小字符是 'c'。</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> letters = ['c','f','j'], target = 'c'&#10;<strong>输出:</strong> 'f'&#10;<strong>解释：</strong>letters 中字典顺序上大于 'c' 的最小字符是 'f'。</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> letters = ['x','x','y','y'], target = 'z'&#10;<strong>输出:</strong> 'x'&#10;<strong>解释：</strong>letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= letters.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>letters[i]</code> 是一个小写字母</li>&#10;	<li><code>letters</code> 按<strong>非递减顺序</strong>排序</li>&#10;	<li><code>letters</code> 最少包含两个不同的字母</li>&#10;	<li><code>target</code> 是一个小写字母</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在非递减的字母数组中找严格大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 的最小字符，并环形回到开头。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，有序故可二分。</p>
<p>这是上界查找：第一个大于目标的位置。若该位置等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，则应取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，对下标取模即可。</p>
<p>对码值做 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">bisect_right</mtext>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>。时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">letters</mtext>
</math></span> 是按照非递减顺序排序的，所以我们可以使用二分查找来找到大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 的最小字符。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span>。对于每一次二分查找，我们计算中间位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span>，则说明我们需要在左半部分继续查找，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>；否则我们需要在右半部分继续查找，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>最后我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">letters</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func nextGreatestLetter(letters []byte, target byte) byte {</span></span>
<span class="line"><span>	i := sort.Search(len(letters), func(i int) bool { return letters[i] > target })</span></span>
<span class="line"><span>	return letters[i%len(letters)]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-smallest-letter-greater-than-target" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0744.Find%20Smallest%20Letter%20Greater%20Than%20Target/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-754" tabindex="-1">754. 到达终点数字 <a class="header-anchor" href="#q-754" aria-label="Permalink to &quot;754. 到达终点数字 {#q-754}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在一根无限长的数轴上，你站在<code>0</code>的位置。终点在<code>target</code>的位置。</p>&#10;&#10;<p>你可以做一些数量的移动 <code>numMoves</code> :</p>&#10;&#10;<ul>&#10;	<li>每次你可以选择向左或向右移动。</li>&#10;	<li>第 <code>i</code> 次移动（从  <code>i == 1</code> 开始，到 <code>i == numMoves</code> ），在选择的方向上走 <code>i</code> 步。</li>&#10;</ul>&#10;&#10;<p>给定整数 <code>target</code> ，返回 <em>到达目标所需的 <strong>最小 </strong>移动次数(即最小 <code>numMoves</code> ) </em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> target = 2&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong>&#10;第一次移动，从 0 到 1 。&#10;第二次移动，从 1 到 -1 。&#10;第三次移动，从 -1 到 2 。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> target = 3&#10;<strong>输出:</strong> 2&#10;<strong>解释:</strong>&#10;第一次移动，从 0 到 1 。&#10;第二次移动，从 1 到 3 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>target != 0</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学分析 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 步必须走 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，方向自选，求到达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 的最少步数。目标可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，搜索步数序列不可行。</p>
<p>方向关于原点对称，可先取绝对值。连续向右走 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 步到达三角数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span> 为偶数，把其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo>&#x2212;</mo>
      <mtext mathvariant="italic">target</mtext>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span> 这一步反向即可，步数不变。</p>
<p>增大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2265;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span> 且差为偶数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
    <mtext mathvariant="italic">target</mtext>
    <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>由于对称性，每次可以选择向左或向右移动，因此，我们可以将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 统一取绝对值。</p>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 表示当前所处的位置，用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 记录移动的次数。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 一直循环累加，直到满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2265;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span> 并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">target</mtext>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>2</mn>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，此时的移动次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 就是答案，直接返回。</p>
<p>为什么？因为如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2265;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">target</mtext>
  <mo stretchy="false">)</mo>
  <mspace width="0.667em"></mspace>
  <mi>mod</mi>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mn>2</mn>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，我们只需要把前面 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo>&#x2212;</mo>
      <mtext mathvariant="italic">target</mtext>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span> 这个正整数变为负数，就能使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 相等。正整数变负数的过程，实际上是将移动的方向改变，但实际移动次数仍然不变。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">|</mo>
      <mtext mathvariant="italic">target</mtext>
      <mo data-mjx-texclass="CLOSE">|</mo>
    </mrow>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func reachNumber(target int) int {</span></span>
<span class="line"><span>	if target &#x3C; 0 {</span></span>
<span class="line"><span>		target = -target</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var s, k int</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		if s >= target &#x26;&#x26; (s-target)%2 == 0 {</span></span>
<span class="line"><span>			return k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		k++</span></span>
<span class="line"><span>		s += k</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/reach-a-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0754.Reach%20a%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-774" tabindex="-1">774. 最小化去加油站的最大距离 🔒 <a class="header-anchor" href="#q-774" aria-label="Permalink to &quot;774. 最小化去加油站的最大距离 🔒 {#q-774}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>整数数组 <code>stations</code> 表示 <strong>水平数轴</strong> 上各个加油站的位置。给你一个整数 <code>k</code> 。</p>&#10;&#10;<p>请你在数轴上增设 <code>k</code> 个加油站，新增加油站可以位于 <strong>水平数轴</strong> 上的任意位置，而不必放在整数位置上。</p>&#10;&#10;<p>设 <code>penalty()</code> 是：增设 <code>k</code> 个新加油站后，<strong>相邻</strong> 两个加油站间的最大距离。</p>&#10;请你返回 <code>penalty()</code><strong> </strong>可能的最小值。与实际答案误差在 <code>10<sup>-6</sup></code> 范围内的答案将被视作正确答案。&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stations = [1,2,3,4,5,6,7,8,9,10], k = 9&#10;<strong>输出：</strong>0.50000&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>stations = [23,24,36,39,46,56,57,65,84,98], k = 1&#10;<strong>输出：</strong>14.00000&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>10 &lt;= stations.length &lt;= 2000</code></li>&#10;	<li><code>0 &lt;= stations[i] &lt;= 10<sup>8</sup></code></li>&#10;	<li><code>stations</code> 按 <strong>严格递增</strong> 顺序排列</li>&#10;	<li><code>1 &lt;= k &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找（浮点数二分） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在已有站之间插入至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个新站，最小化相邻站的最大间距。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span>，不能枚举每段插几个。</p>
<p>答案关于「最大间距 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>」单调：间距越小需要的插入越多。一段长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>d</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>x</mi>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 个新站才能把间距压到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 以下。</p>
<p>对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 做浮点二分，判定插入总数是否 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span>。精度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>6</mn>
    </mrow>
  </msup>
</math></span>。</p>
</blockquote>
<p>我们二分枚举相邻两个加油站间的距离，找到最小的距离，使得加油站的数量不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为加油站的数量；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为答案的范围，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>8</mn>
  </msup>
</math></span> 除以答案的精度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>6</mn>
    </mrow>
  </msup>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minmaxGasDist(stations []int, k int) float64 {</span></span>
<span class="line"><span>	check := func(x float64) bool {</span></span>
<span class="line"><span>		s := 0</span></span>
<span class="line"><span>		for i, v := range stations[:len(stations)-1] {</span></span>
<span class="line"><span>			s += int(float64(stations[i+1]-v) / x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return s &#x3C;= k</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var left, right float64 = 0, 1e8</span></span>
<span class="line"><span>	for right-left > 1e-6 {</span></span>
<span class="line"><span>		mid := (left + right) / 2.0</span></span>
<span class="line"><span>		if check(mid) {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimize-max-distance-to-gas-station" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0774.Minimize%20Max%20Distance%20to%20Gas%20Station/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-786" tabindex="-1">786. 第 K 个最小的质数分数 <a class="header-anchor" href="#q-786" aria-label="Permalink to &quot;786. 第 K 个最小的质数分数 {#q-786}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个按递增顺序排序的数组 <code>arr</code> 和一个整数 <code>k</code> 。数组 <code>arr</code> 由 <code>1</code> 和若干 <strong>质数</strong> 组成，且其中所有整数互不相同。</p>&#10;&#10;<p>对于每对满足 <code>0 &lt;= i &lt; j &lt; arr.length</code> 的 <code>i</code> 和 <code>j</code> ，可以得到分数 <code>arr[i] / arr[j]</code> 。</p>&#10;&#10;<p>那么第 <code>k</code> 个最小的分数是多少呢?  以长度为 <code>2</code> 的整数数组返回你的答案, 这里 <code>answer[0] == arr[i]</code> 且 <code>answer[1] == arr[j]</code> 。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,2,3,5], k = 3&#10;<strong>输出：</strong>[2,5]&#10;<strong>解释：</strong>已构造好的分数,排序后如下所示: &#10;1/5, 1/3, 2/5, 1/2, 3/5, 2/3&#10;很明显第三个最小的分数是 2/5&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,7], k = 1&#10;<strong>输出：</strong>[1,7]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= arr.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>arr[0] == 1</code></li>&#10;	<li><code>arr[i]</code> 是一个 <strong>质数</strong> ，<code>i > 0</code></li>&#10;	<li><code>arr</code> 中的所有数字 <strong>互不相同</strong> ，且按 <strong>严格递增</strong> 排序</li>&#10;	<li><code>1 &lt;= k &lt;= arr.length * (arr.length - 1) / 2</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>你可以设计并实现时间复杂度小于 <code>O(n<sup>2</sup>)</code> 的算法解决此问题吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有序质数数组中第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 小的真分数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>（ <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>）。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，枚举全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 对再排序偏慢。</p>
<p>固定分母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 时分子增大分数增大，全体分数构成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 条有序链。多路归并用小根堆每次弹出当前最小，把同一 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的下一个分子推入。</p>
<p>初态放入每条链的最小元 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，弹出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次后堆顶即答案。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type frac struct{ x, y, i, j int }</span></span>
<span class="line"><span>type hp []frac</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (a hp) Len() int           { return len(a) }</span></span>
<span class="line"><span>func (a hp) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }</span></span>
<span class="line"><span>func (a hp) Less(i, j int) bool { return a[i].x*a[j].y &#x3C; a[j].x*a[i].y }</span></span>
<span class="line"><span>func (a *hp) Push(x any)        { *a = append(*a, x.(frac)) }</span></span>
<span class="line"><span>func (a *hp) Pop() any          { l := len(*a); tmp := (*a)[l-1]; *a = (*a)[:l-1]; return tmp }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func kthSmallestPrimeFraction(arr []int, k int) []int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	h := make(hp, 0, n-1)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		h = append(h, frac{1, arr[i], 0, i})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	heap.Init(&#x26;h)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		f := heap.Pop(&#x26;h).(frac)</span></span>
<span class="line"><span>		if f.i+1 &#x3C; f.j {</span></span>
<span class="line"><span>			heap.Push(&#x26;h, frac{arr[f.i+1], arr[f.j], f.i + 1, f.j})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return []int{h[0].x, h[0].y}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/k-th-smallest-prime-fraction" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0786.K-th%20Smallest%20Prime%20Fraction/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-793" tabindex="-1">793. 阶乘函数后 K 个零 <a class="header-anchor" href="#q-793" aria-label="Permalink to &quot;793. 阶乘函数后 K 个零 {#q-793}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p> <code>f(x)</code> 是 <code>x!</code> 末尾是 0 的数量。回想一下 <code>x! = 1 * 2 * 3 * ... * x</code>，且 <code>0! = 1</code> 。</p>&#10;&#10;<ul>&#10;	<li>例如， <code>f(3) = 0</code> ，因为 <code>3! = 6</code> 的末尾没有 0 ；而 <code>f(11) = 2</code> ，因为 <code>11!= 39916800</code> 末端有 2 个 0 。</li>&#10;</ul>&#10;&#10;<p>给定 <code>k</code>，找出返回能满足 <code>f(x) = k</code> 的非负整数 <code>x</code> 的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong><strong> </strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>k = 0<strong>&#10;输出：</strong>5<strong>&#10;解释：</strong>0!, 1!, 2!, 3!, 和 4! 均符合 k = 0 的条件。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>k = 5&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>没有匹配到这样的 x!，符合 k = 5 的条件。</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> k = 3&#10;<strong>输出:</strong> 5&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= k &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>!</mo>
</math></span> 尾零个数，问有多少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 使 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>k</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 单调不降且会跳过某些值，跳过则答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，否则一段连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 同值，长度多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>。</p>
<p>最小的满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，所求即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>5</mn>
</math></span>，故在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>5</mn>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 上二分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>。</p>
</blockquote>
<p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>!</mo>
</math></span> 末尾零的个数，那么</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mn>0</mn>
          <mo>,</mo>
          <mi>x</mi>
          <mo>=</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>x</mi>
          <mrow data-mjx-texclass="ORD">
            <mo>/</mo>
          </mrow>
          <mn>5</mn>
          <mo>+</mo>
          <mi>f</mi>
          <mo stretchy="false">(</mo>
          <mi>x</mi>
          <mrow data-mjx-texclass="ORD">
            <mo>/</mo>
          </mrow>
          <mn>5</mn>
          <mo stretchy="false">)</mo>
          <mo>,</mo>
          <mi>x</mi>
          <mo>&gt;</mo>
          <mn>0</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>!</mo>
</math></span> 末尾为零的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 值，那么题目等价于求解 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 是单调递增的，因此可以使用二分查找求解 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>同时，由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>5</mn>
  <mo>+</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>5</mn>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>5</mn>
</math></span>，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mn>5</mn>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>。所以，求解 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，二分的右边界可以取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
  <mi>k</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>o</mi>
  <msup>
    <mi>g</mi>
    <mn>2</mn>
  </msup>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为题目给定的整数。二分查找 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，因此总时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>o</mi>
  <msup>
    <mi>g</mi>
    <mn>2</mn>
  </msup>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func preimageSizeFZF(k int) int {</span></span>
<span class="line"><span>	f := func(x int) int {</span></span>
<span class="line"><span>		res := 0</span></span>
<span class="line"><span>		for x != 0 {</span></span>
<span class="line"><span>			x /= 5</span></span>
<span class="line"><span>			res += x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return res</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	g := func(k int) int {</span></span>
<span class="line"><span>		left, right := 0, k*5</span></span>
<span class="line"><span>		for left &#x3C; right {</span></span>
<span class="line"><span>			mid := (left + right) >> 1</span></span>
<span class="line"><span>			if f(mid) >= k {</span></span>
<span class="line"><span>				right = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				left = mid + 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return left</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return g(k+1) - g(k)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/preimage-size-of-factorial-zeroes-function" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0793.Preimage%20Size%20of%20Factorial%20Zeroes%20Function/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-825" tabindex="-1">825. 适龄的朋友 <a class="header-anchor" href="#q-825" aria-label="Permalink to &quot;825. 适龄的朋友 {#q-825}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在社交媒体网站上有 <code>n</code> 个用户。给你一个整数数组 <code>ages</code> ，其中 <code>ages[i]</code> 是第 <code>i</code> 个用户的年龄。</p>&#10;&#10;<p>如果下述任意一个条件为真，那么用户 <code>x</code> 将不会向用户 <code>y</code>（<code>x != y</code>）发送好友请求：</p>&#10;&#10;<ul>&#10;	<li><code>ages[y] &lt;= 0.5 * ages[x] + 7</code></li>&#10;	<li><code>ages[y] > ages[x]</code></li>&#10;	<li><code>ages[y] > 100 &amp;&amp; ages[x] &lt; 100</code></li>&#10;</ul>&#10;&#10;<p>否则，<code>x</code> 将会向 <code>y</code> 发送一条好友请求。</p>&#10;&#10;<p>注意，如果 <code>x</code> 向 <code>y</code> 发送一条好友请求，<code>y</code> 不必也向 <code>x</code> 发送一条好友请求。另外，用户不会向自己发送好友请求。</p>&#10;&#10;<p>返回在该社交媒体网站上产生的好友请求总数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>ages = [16,16]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>2 人互发好友请求。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>ages = [16,17,18]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>产生的好友请求为 17 -> 16 ，18 -> 17 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>ages = [20,30,100,110,120]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>产生的好友请求为 110 -> 100 ，120 -> 110 ，120 -> 100 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == ages.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= ages[i] &lt;= 120</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>好友请求的条件只依赖两个年龄，且年龄范围仅 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2026;</mo>
  <mn>120</mn>
</math></span>，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。两两枚举人会重复计算相同年龄对。</p>
<p>先计数每个年龄的人数，再枚举年龄对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 判断是否满足三个不等式。同一年龄内部要去掉自己给自己发请求，贡献为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x22C5;</mo>
  <mo stretchy="false">(</mo>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo>=</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>121</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录每个年龄的人数。</p>
<p>接下来，枚举所有可能的年龄对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">ax</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">ay</mtext>
  <mo stretchy="false">)</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ax</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ay</mtext>
</math></span> 不满足题目中的任意一个条件，这些年龄对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">ax</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">ay</mtext>
  <mo stretchy="false">)</mo>
</math></span> 就可以互发好友请求。</p>
<p>此时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ax</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">ay</mtext>
</math></span>，年龄相同，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ax</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ay</mtext>
</math></span> 之间的好友请求数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">ax</mtext>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">ax</mtext>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>；否则，年龄不同，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ax</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ay</mtext>
</math></span> 之间的好友请求数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">ax</mtext>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">ay</mtext>
  <mo stretchy="false">]</mo>
</math></span>。我们将这些好友请求数累加到答案中即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <msup>
    <mi>m</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ages</mtext>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是年龄的最大值，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mn>121</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numFriendRequests(ages []int) (ans int) {</span></span>
<span class="line"><span>	cnt := [121]int{}</span></span>
<span class="line"><span>	for _, x := range ages {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for ax, x := range cnt {</span></span>
<span class="line"><span>		for ay, y := range cnt {</span></span>
<span class="line"><span>			if ay &#x3C;= ax/2+7 || ay > ax || (ay > 100 &#x26;&#x26; ax &#x3C; 100) {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if ax == ay {</span></span>
<span class="line"><span>				ans += x * (x - 1)</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				ans += x * y</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/friends-of-appropriate-ages" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0825.Friends%20Of%20Appropriate%20Ages/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-852" tabindex="-1">852. 山脉数组的峰顶索引 <a class="header-anchor" href="#q-852" aria-label="Permalink to &quot;852. 山脉数组的峰顶索引 {#q-852}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、三分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个长度为 <code>n</code> 的整数 <strong>山脉 </strong>数组 <code>arr</code> ，其中的值递增到一个 <strong>峰值元素</strong> 然后递减。</p>&#10;&#10;<p>返回峰值元素的下标。</p>&#10;&#10;<p>你必须设计并实现时间复杂度为 <code>O(log(n))</code> 的解决方案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [0,1,0]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [0,2,1,0]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [0,10,5,2]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= arr[i] &lt;= 10<sup>6</sup></code></li>&#10;	<li>题目数据 <strong>保证</strong> <code>arr</code> 是一个山脉数组</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数组保证先严格上升再严格下降，求峰下标。线性扫描可行，但 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 且题目暗示对数时间。峰左侧 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，右侧相反。</p>
<p>在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span> 上二分：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 则峰在左半（含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>），否则在右半。收缩后左端点即峰。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func peakIndexInMountainArray(arr []int) int {</span></span>
<span class="line"><span>	left, right := 1, len(arr)-2</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		if arr[mid] > arr[mid+1] {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/peak-index-in-a-mountain-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0852.Peak%20Index%20in%20a%20Mountain%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-862" tabindex="-1">862. 和至少为 K 的最短子数组 <a class="header-anchor" href="#q-862" aria-label="Permalink to &quot;862. 和至少为 K 的最短子数组 {#q-862}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：队列、数组、二分查找、前缀和、滑动窗口、单调队列、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，找出 <code>nums</code> 中和至少为 <code>k</code> 的 <strong>最短非空子数组</strong> ，并返回该子数组的长度。如果不存在这样的 <strong>子数组</strong> ，返回 <code>-1</code> 。</p>&#10;&#10;<p><strong>子数组</strong> 是数组中 <strong>连续</strong> 的一部分。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1], k = 1&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2], k = 4&#10;<strong>输出：</strong>-1&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,-1,2], k = 3&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 单调队列 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最短子数组和至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。含负数时滑动窗口的单调性被破坏， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 不能平方枚举。前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 上即求最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span> 满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>。</p>
<p>维护 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 下标的单调递增队列：队头已能组成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 则弹出并更新长度；队尾不小于当前前缀和则丢掉，因为更短且前缀和更大的起点更优。</p>
</blockquote>
<p>题目要求找到一个最短的子数组，使得子数组的和大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。不难想到，可以使用前缀和快速计算子数组的和。</p>
<p>我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素的和。另外，我们需要维护一个严格单调递增的队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，队列中存储的是前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的下标。注意，这里的单调递增是指下标对应的前缀和的大小，而不是下标的大小。</p>
<p>为什么存的是下标呢？这是为了方便计算子数组的长度。那为什么队列严格单调递增？我们可以用反证法来说明。</p>
<p>假设队列元素非严格单调递增，也即是说，存在下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>当遍历到下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的长度小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的长度。由于下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的存在，子数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 一定不是最优解，队列中的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 是不必要的，需要将其移除。因此，队列中的元素一定严格单调递增。</p>
<p>回到这道题目上，我们遍历前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，对于遍历到的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>q</mi>
  <mo>.</mo>
  <mi>f</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>，说明当前遇到了一个可行解，我们可以更新答案。此时，我们需要将队首元素出队，直到队列为空或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>q</mi>
  <mo>.</mo>
  <mi>f</mi>
  <mi>r</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>k</mi>
</math></span> 为止。</p>
<p>如果此时队列不为空，为了维持队列的严格单调递增，我们还需要判断队尾元素是否需要出队，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>q</mi>
  <mo>.</mo>
  <mi>b</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，则需要循环将队尾元素出队，直到队列为空或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>q</mi>
  <mo>.</mo>
  <mi>b</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为止。然后，我们将下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 入队。</p>
<p>遍历结束，如果我们没有找到可行解，那么返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。否则，返回答案。</p>
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
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func shortestSubarray(nums []int, k int) int {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q := []int{}</span></span>
<span class="line"><span>	ans := n + 1</span></span>
<span class="line"><span>	for i, v := range s {</span></span>
<span class="line"><span>		for len(q) > 0 &#x26;&#x26; v-s[q[0]] >= k {</span></span>
<span class="line"><span>			ans = min(ans, i-q[0])</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for len(q) > 0 &#x26;&#x26; s[q[len(q)-1]] >= v {</span></span>
<span class="line"><span>			q = q[:len(q)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q = append(q, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if ans > n {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0862.Shortest%20Subarray%20with%20Sum%20at%20Least%20K/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-875" tabindex="-1">875. 爱吃香蕉的珂珂 <a class="header-anchor" href="#q-875" aria-label="Permalink to &quot;875. 爱吃香蕉的珂珂 {#q-875}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>珂珂喜欢吃香蕉。这里有 <code>n</code> 堆香蕉，第 <code>i</code> 堆中有 <code>piles[i]</code> 根香蕉。警卫已经离开了，将在 <code>h</code> 小时后回来。</p>&#10;&#10;<p>珂珂可以决定她吃香蕉的速度 <code>k</code> （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 <code>k</code> 根。如果这堆香蕉少于 <code>k</code> 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  </p>&#10;&#10;<p>珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。</p>&#10;&#10;<p>返回她可以在 <code>h</code> 小时内吃掉所有香蕉的最小速度 <code>k</code>（<code>k</code> 为整数）。</p>&#10;&#10;<p> </p>&#10;&#10;<ul>&#10;</ul>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>piles = [3,6,7,11], h = 8&#10;<strong>输出：</strong>4&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>piles = [30,11,23,4,20], h = 5&#10;<strong>输出：</strong>30&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>piles = [30,11,23,4,20], h = 6&#10;<strong>输出：</strong>23&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= piles.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>piles.length &lt;= h &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= piles[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>速度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 越大，耗时越少，要在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 小时内吃完的最小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 与堆大小达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 不可行，但「能否在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 小时吃完」对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 单调。</p>
<p>在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mi>p</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
</math></span> 上二分，判定函数把每堆按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 向上取整后求和。第一个使判定为真的速度即答案。</p>
</blockquote>
<p>我们注意到，如果珂珂能够以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的速度在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 小时内吃完所有香蕉，那么她也可以以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>k</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span> 的速度在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 小时内吃完所有香蕉。这存在着单调性，因此我们可以使用二分查找，找到最小的满足条件的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">piles</mtext>
  <mo stretchy="false">)</mo>
</math></span>。每一次二分，我们取中间值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>l</mi>
      <mo>+</mo>
      <mi>r</mi>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，然后计算以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的速度吃香蕉需要的时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2264;</mo>
  <mi>h</mi>
</math></span>，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的速度可以满足条件，我们将右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>；否则，我们将左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。最终，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>r</mi>
</math></span> 时，我们找到了最小的满足条件的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">piles</mtext>
</math></span> 的长度和最大值。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minEatingSpeed(piles []int, h int) int {</span></span>
<span class="line"><span>	return 1 + sort.Search(slices.Max(piles), func(k int) bool {</span></span>
<span class="line"><span>		k++</span></span>
<span class="line"><span>		s := 0</span></span>
<span class="line"><span>		for _, x := range piles {</span></span>
<span class="line"><span>			s += (x + k - 1) / k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return s &#x3C;= h</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/koko-eating-bananas" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0875.Koko%20Eating%20Bananas/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-878" tabindex="-1">878. 第 N 个神奇数字 <a class="header-anchor" href="#q-878" aria-label="Permalink to &quot;878. 第 N 个神奇数字 {#q-878}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、二分查找、容斥原理、最小公倍数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一个正整数如果能被 <code>a</code> 或 <code>b</code> 整除，那么它是神奇的。</p>&#10;&#10;<p>给定三个整数 <code>n</code> , <code>a</code> , <code>b</code> ，返回第 <code>n</code> 个神奇的数字。因为答案可能很大，所以返回答案 <strong>对 </strong><code>10<sup>9</sup> + 7</code> <strong>取模 </strong>后的值。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1, a = 2, b = 3&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 4, a = 2, b = 3&#10;<strong>输出：</strong>6&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>2 &lt;= a, b &lt;= 4 * 10<sup>4</sup></code></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：数学 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 整除的正整数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>。直接按倍数枚举过慢。不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的神奇数个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>a</mi>
  <mo>+</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mrow data-mjx-texclass="ORD">
    <mi data-mjx-auto-op="false">lcm</mi>
  </mrow>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>，该函数对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 单调。</p>
<p>在足够大的上界上二分最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 使计数达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，再取模。上界取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x22C5;</mo>
  <mi>n</mi>
</math></span> 已覆盖。</p>
</blockquote>
<p>根据题目描述，神奇数字是能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 整除的正整数。</p>
<p>而我们知道，对于任意正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>a</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>b</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 同时整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>c</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 个，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 的最小公倍数。最小公倍数的计算公式为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>=</mo>
  <mi>l</mi>
  <mi>c</mi>
  <mi>m</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>a</mi>
      <mo>&#xD7;</mo>
      <mi>b</mi>
    </mrow>
    <mrow>
      <mi>g</mi>
      <mi>c</mi>
      <mi>d</mi>
      <mo stretchy="false">(</mo>
      <mi>a</mi>
      <mo>,</mo>
      <mi>b</mi>
      <mo stretchy="false">)</mo>
    </mrow>
  </mfrac>
</math></span>。</p>
<p>因此，对于任意正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内，神奇数字的个数为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>a</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>+</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>b</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#x2212;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>c</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span><p>为什么要减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>c</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 呢？可以这样理解，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 同时整除的数，它们既能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 整除，也能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 整除，因此它们被计算了两次，需要减去一次。</p>
<p>题目要我们找到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个神奇数字，也即是说，要找到一个最小的正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，使得以下式子成立：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>a</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>+</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>b</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#x2212;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>x</mi>
    <mi>c</mi>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#x2265;</mo>
  <mi>n</mi>
</math></span><p>随着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的增大，神奇数字的个数也会增大，因此我们可以使用二分查找的方法，找到最小的正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，使得上述式子成立。</p>
<p>注意答案的取模操作。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是二分查找的上界，本题可以取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func nthMagicalNumber(n int, a int, b int) int {</span></span>
<span class="line"><span>	c := a * b / gcd(a, b)</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	r := (a + b) * n</span></span>
<span class="line"><span>	return sort.Search(r, func(x int) bool { return x/a+x/b-x/c >= n }) % mod</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func gcd(a, b int) int {</span></span>
<span class="line"><span>	if b == 0 {</span></span>
<span class="line"><span>		return a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return gcd(b, a%b)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/nth-magical-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0878.Nth%20Magical%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-888" tabindex="-1">888. 公平的糖果交换 <a class="header-anchor" href="#q-888" aria-label="Permalink to &quot;888. 公平的糖果交换 {#q-888}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 <code>aliceSizes</code> 和 <code>bobSizes</code> ，<code>aliceSizes[i]</code> 是爱丽丝拥有的第 <code>i</code> 盒糖果中的糖果数量，<code>bobSizes[j]</code> 是鲍勃拥有的第 <code>j</code> 盒糖果中的糖果数量。</p>&#10;&#10;<p>两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。</p>&#10;&#10;<p>返回一个整数数组 <code>answer</code>，其中 <code>answer[0]</code> 是爱丽丝必须交换的糖果盒中的糖果的数目，<code>answer[1]</code> 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 <strong>任何一个</strong> 。题目测试用例保证存在与输入对应的答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>aliceSizes = [1,1], bobSizes = [2,2]&#10;<strong>输出：</strong>[1,2]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>aliceSizes = [1,2], bobSizes = [2,3]&#10;<strong>输出：</strong>[1,2]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>aliceSizes = [2], bobSizes = [1,3]&#10;<strong>输出：</strong>[2,3]&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>aliceSizes = [1,2,5], bobSizes = [2,4]&#10;<strong>输出：</strong>[5,4]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= aliceSizes.length, bobSizes.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= aliceSizes[i], bobSizes[j] &lt;= 10<sup>5</sup></code></li>&#10;	<li>爱丽丝和鲍勃的糖果总数量不同。</li>&#10;	<li>题目数据保证对于给定的输入至少存在一个有效答案。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>各换一盒使两人糖数相等。设爱丽丝拿出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>、鲍勃拿出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x2212;</mo>
  <mi>b</mi>
</math></span> 等于总差的一半。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 扫描鲍勃会平方。</p>
<p>把鲍勃的盒重放入集合，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 查 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">diff</mtext>
</math></span> 是否存在。题目保证有解。</p>
</blockquote>
<p>我们可以先计算出爱丽丝和鲍勃的糖果总数之差，除以二得到需要交换的糖果数之差 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">diff</mtext>
</math></span>，用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 存储鲍勃的糖果盒中的糖果数，然后遍历爱丽丝的糖果盒，对于每个糖果数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">a</mtext>
</math></span>，我们判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">a</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">diff</mtext>
</math></span> 是否在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中，如果存在，说明找到了一组答案，返回即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是爱丽丝和鲍勃的糖果盒的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func fairCandySwap(aliceSizes []int, bobSizes []int) []int {</span></span>
<span class="line"><span>	s1, s2 := 0, 0</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for _, a := range aliceSizes {</span></span>
<span class="line"><span>		s1 += a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, b := range bobSizes {</span></span>
<span class="line"><span>		s2 += b</span></span>
<span class="line"><span>		s[b] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	diff := (s1 - s2) / 2</span></span>
<span class="line"><span>	for _, a := range aliceSizes {</span></span>
<span class="line"><span>		if b := a - diff; s[b] {</span></span>
<span class="line"><span>			return []int{a, b}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/fair-candy-swap" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0888.Fair%20Candy%20Swap/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1004" tabindex="-1">1004. 最大连续1的个数 III <a class="header-anchor" href="#q-1004" aria-label="Permalink to &quot;1004. 最大连续1的个数 III {#q-1004}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、前缀和、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二进制数组 <code>nums</code> 和一个整数 <code>k</code>，假设最多可以翻转 <code>k</code> 个 <code>0</code> ，则返回执行操作后 <em>数组中连续 <code>1</code> 的最大个数</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>[1,1,1,0,0,<strong>1</strong>,1,1,1,1,<strong>1</strong>]&#10;粗体数字从 0 翻转到 1，最长的子数组长度为 6。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>[0,0,1,1,<strong>1</strong>,<strong>1</strong>,1,1,1,<strong>1</strong>,1,1,0,0,0,1,1,1,1]&#10;粗体数字从 0 翻转到 1，最长的子数组长度为 10。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>nums[i]</code> 不是 0 就是 1</li>&#10;	<li><code>0 &lt;= k &lt;= nums.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举所有子数组并统计其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的个数需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不可行。所求是「至多翻转 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>」后最长的连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，等价于最长且含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个的窗口。</p>
<p>窗口右端每前进一步，若零的个数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，则左端也必须前进以恢复可行性。题目只要最长长度，窗口只需单调变长，左端每次至多移动一格，不必缩到合法后再继续。</p>
<p>用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 维护当前窗口：右端扫过每个位置，超限则丢掉左端的一个位置。结束时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
</math></span> 即为最大可行窗口长度。</p>
</blockquote>
<p>我们可以遍历数组，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录当前窗口中 0 的个数，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span> 时，我们将窗口的左边界右移一位。</p>
<p>遍历结束后，窗口的长度即为最大连续 1 的个数。</p>
<p>注意，在上述过程中，我们不需要循环将窗口的左边界右移，而是直接将左边界右移一位，这是因为，题目求的是最大连续 1 的个数，因此，窗口的长度只会增加，不会减少，所以我们不需要循环右移左边界。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0400-0499/0487.Max%20Consecutive%20Ones%20II/README.md" target="_blank" rel="noopener noreferrer">487. 最大连续 1 的个数 II</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2000-2099/2024.Maximize%20the%20Confusion%20of%20an%20Exam/README.md" target="_blank" rel="noopener noreferrer">2024. 考试的最大困扰度</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestOnes(nums []int, k int) int {</span></span>
<span class="line"><span>	l, cnt := 0, 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt += x ^ 1</span></span>
<span class="line"><span>		if cnt > k {</span></span>
<span class="line"><span>			cnt -= nums[l] ^ 1</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(nums) - l</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/max-consecutive-ones-iii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1004.Max%20Consecutive%20Ones%20III/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1011" tabindex="-1">1011. 在 D 天内送达包裹的能力 <a class="header-anchor" href="#q-1011" aria-label="Permalink to &quot;1011. 在 D 天内送达包裹的能力 {#q-1011}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>传送带上的包裹必须在 <code>days</code> 天内从一个港口运送到另一个港口。</p>&#10;&#10;<p>传送带上的第 <code>i</code> 个包裹的重量为 <code>weights[i]</code>。每一天，我们都会按给出重量（<code>weights</code>）的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。</p>&#10;&#10;<p>返回能在 <code>days</code> 天内将传送带上的所有包裹送达的船的最低运载能力。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>weights = [1,2,3,4,5,6,7,8,9,10], days = 5&#10;<strong>输出：</strong>15&#10;<strong>解释：</strong>&#10;船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：&#10;第 1 天：1, 2, 3, 4, 5&#10;第 2 天：6, 7&#10;第 3 天：8&#10;第 4 天：9&#10;第 5 天：10&#10;&#10;请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>weights = [3,2,2,4,1,4], days = 3&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>&#10;船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：&#10;第 1 天：3, 2&#10;第 2 天：2, 4&#10;第 3 天：1, 4&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>weights = [1,2,3,1,1], days = 4&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;第 1 天：1&#10;第 2 天：2&#10;第 3 天：3&#10;第 4 天：1, 1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= days &lt;= weights.length &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= weights[i] &lt;= 500</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>运载能力的下界是最重包裹，上界是全部重量之和，在该范围内逐一验证所需天数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 且总和可达千万级，线性枚举不可行。</p>
<p>能力增大时所需天数不会增加，因此「能否在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">days</mtext>
</math></span> 天内运完」对能力值单调，最小可行能力可以用二分定位。</p>
<p>对给定上限 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，按顺序把包裹装入当前船，超重则换一天。在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <msub>
    <mi>w</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <msub>
    <mi>w</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">]</mo>
</math></span> 上二分第一次使 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check</mtext>
</math></span> 为真的位置。</p>
</blockquote>
<p>我们注意到，如果运载能力 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 能够在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mi>s</mi>
</math></span> 天内运送完所有包裹，那么运载能力 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 也能在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mi>s</mi>
</math></span> 天内运送完所有包裹。也即是说，随着运载能力的增加，运送天数只会减少，不会增加。这存在一个单调性，因此我们可以使用二分查找的方法来寻找最小的运载能力。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP">max</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>w</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP" movablelimits="false">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>w</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。然后二分枚举运载能力 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，判断是否能在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mi>s</mi>
</math></span> 天内运送完所有包裹。如果能，那么我们将右边界调整为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，否则将左边界调整为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>判断是否能在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mi>s</mi>
</math></span> 天内运送完所有包裹的方法是，我们从左到右遍历包裹，将当前包裹加入当前运载能力的船上，如果当前船的运载能力超过了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，那么我们将当前包裹放到下一天的船上，同时天数加一。如果天数超过了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mi>s</mi>
</math></span>，那么我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mi>e</mi>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>u</mi>
  <mi>e</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <munderover>
    <mo data-mjx-texclass="OP" movablelimits="false">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>w</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为包裹数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func shipWithinDays(weights []int, days int) int {</span></span>
<span class="line"><span>	var left, right int</span></span>
<span class="line"><span>	for _, w := range weights {</span></span>
<span class="line"><span>		if left &#x3C; w {</span></span>
<span class="line"><span>			left = w</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		right += w</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left + sort.Search(right, func(mx int) bool {</span></span>
<span class="line"><span>		mx += left</span></span>
<span class="line"><span>		ws, cnt := 0, 1</span></span>
<span class="line"><span>		for _, w := range weights {</span></span>
<span class="line"><span>			ws += w</span></span>
<span class="line"><span>			if ws > mx {</span></span>
<span class="line"><span>				ws = w</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt &#x3C;= days</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1011.Capacity%20To%20Ship%20Packages%20Within%20D%20Days/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1044" tabindex="-1">1044. 最长重复子串 <a class="header-anchor" href="#q-1044" aria-label="Permalink to &quot;1044. 最长重复子串 {#q-1044}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、二分查找、后缀数组、滑动窗口、哈希函数、滚动哈希、Boyer–Moore 算法、扩展 KMP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> ，考虑其所有 <em>重复子串</em> ：即 <code>s</code> 的（连续）子串，在 <code>s</code> 中出现 2 次或更多次。这些出现之间可能存在重叠。</p>&#10;&#10;<p>返回 <strong>任意一个</strong> 可能具有最长长度的重复子串。如果 <code>s</code> 不含重复子串，那么答案为 <code>&quot;&quot;</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;banana&quot;&#10;<strong>输出：</strong>&quot;ana&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;&#10;<strong>输出：</strong>&quot;&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>s</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：字符串哈希 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举所有子串再放入集合判断重复， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 时平方级不可行。若存在长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 的重复子串，则更短的也存在，长度具有单调性。</p>
<p>对长度二分：检查函数把所有长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span> 的切片放入集合，一旦碰撞就返回该串。能找到则尝试更长，否则缩短。</p>
<p>实现直接用 Python 切片与哈希集合；二分过程中记下最后一次命中的串作为答案。</p>
</blockquote>
<p><strong>字符串哈希</strong>是把一个任意长度的字符串映射成一个非负整数，并且其冲突的概率几乎为 0。字符串哈希用于计算字符串哈希值，快速判断两个字符串是否相等。</p>
<p>取一固定值 BASE，把字符串看作是 BASE 进制数，并分配一个大于 0 的数值，代表每种字符。一般来说，我们分配的数值都远小于 BASE。例如，对于小写字母构成的字符串，可以令 a=1, b=2, ..., z=26。取一固定值 MOD，求出该 BASE 进制对 M 的余数，作为该字符串的 hash 值。</p>
<p>一般来说，取 BASE=131 或者 BASE=13331，此时 hash 值产生的冲突概率极低。只要两个字符串 hash 值相同，我们就认为两个字符串是相等的。通常 MOD 取 2^64，C++ 里，可以直接使用 unsigned long long 类型存储这个 hash 值，在计算时不处理算术溢出问题，产生溢出时相当于自动对 2^64 取模，这样可以避免低效取模运算。</p>
<p>除了在极特殊构造的数据上，上述 hash 算法很难产生冲突，一般情况下上述 hash 算法完全可以出现在题目的标准答案中。我们还可以多取一些恰当的 BASE 和 MOD 的值（例如大质数），多进行几组 hash 运算，当结果都相同时才认为原字符串相等，就更加难以构造出使这个 hash 产生错误的数据。</p>
<p>对于本题，二分枚举长度，找到满足条件的最大长度即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串长度。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1000-1099/1062.Longest%20Repeating%20Substring/README.md" target="_blank" rel="noopener noreferrer">1062. 最长重复子串</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestDupSubstring(s string) string {</span></span>
<span class="line"><span>	base, n := 131, len(s)</span></span>
<span class="line"><span>	p := make([]int64, n+10)</span></span>
<span class="line"><span>	h := make([]int64, n+10)</span></span>
<span class="line"><span>	p[0] = 1</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		p[i+1] = p[i] * int64(base)</span></span>
<span class="line"><span>		h[i+1] = h[i]*int64(base) + int64(s[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	check := func(l int) string {</span></span>
<span class="line"><span>		vis := make(map[int64]bool)</span></span>
<span class="line"><span>		for i := 1; i+l-1 &#x3C;= n; i++ {</span></span>
<span class="line"><span>			j := i + l - 1</span></span>
<span class="line"><span>			t := h[j] - h[i-1]*p[j-i+1]</span></span>
<span class="line"><span>			if vis[t] {</span></span>
<span class="line"><span>				return s[i-1 : j]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			vis[t] = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ""</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	left, right := 0, n</span></span>
<span class="line"><span>	ans := ""</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right + 1) >> 1</span></span>
<span class="line"><span>		t := check(mid)</span></span>
<span class="line"><span>		if len(t) > 0 {</span></span>
<span class="line"><span>			left = mid</span></span>
<span class="line"><span>			ans = t</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			right = mid - 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-duplicate-substring" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1044.Longest%20Duplicate%20Substring/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1060" tabindex="-1">1060. 有序数组中的缺失元素 🔒 <a class="header-anchor" href="#q-1060" aria-label="Permalink to &quot;1060. 有序数组中的缺失元素 🔒 {#q-1060}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>现有一个按 <strong>升序</strong> 排列的整数数组 <code>nums</code> ，其中每个数字都 <strong>互不相同</strong> 。</p>&#10;&#10;<p>给你一个整数 <code>k</code> ，请你找出并返回从数组最左边开始的第 <code>k</code> 个缺失数字。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [4,7,9,10], k = 1&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>第一个缺失数字为 5 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [4,7,9,10], k = 3&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>缺失数字有 [5,6,8,...]，因此第三个缺失数字为 8 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,4], k = 3&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>缺失数字有 [3,5,6,7,...]，因此第三个缺失数字为 6 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>7</sup></code></li>&#10;	<li><code>nums</code> 按 <strong>升序</strong> 排列，其中所有元素 <strong>互不相同</strong> 。</li>&#10;	<li><code>1 &lt;= k &lt;= 10<sup>8</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>你可以设计一个对数时间复杂度（即，<code>O(log(n))</code>）的解决方案吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有序且互异，下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 之前缺失的个数是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>。线性扫到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个缺失即可，但进阶要求对数时间。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">missing</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 递增。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 大于末尾缺失数，答案在数组右侧；否则二分最小的满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">missing</mtext>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，再从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 补上剩余缺口。</p>
<p>二分边界为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 之间缺失的元素个数。那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 就等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>。我们可以通过二分查找找到最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 就是第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个缺失的元素。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func missingElement(nums []int, k int) int {</span></span>
<span class="line"><span>	missing := func(i int) int {</span></span>
<span class="line"><span>		return nums[i] - nums[0] - i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	if k > missing(n-1) {</span></span>
<span class="line"><span>		return nums[n-1] + k - missing(n-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	l, r := 0, n-1</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r) >> 1</span></span>
<span class="line"><span>		if missing(mid) >= k {</span></span>
<span class="line"><span>			r = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			l = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nums[l-1] + k - missing(l-1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/missing-element-in-sorted-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1060.Missing%20Element%20in%20Sorted%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1064" tabindex="-1">1064. 不动点 🔒 <a class="header-anchor" href="#q-1064" aria-label="Permalink to &quot;1064. 不动点 🔒 {#q-1064}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定已经按 <strong>升序</strong> 排列、由不同整数组成的数组 <code>arr</code>，返回满足 <code>arr[i] == i</code> 的最小索引 <code>i</code>。如果不存在这样的 <code>i</code>，返回 <code>-1</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [-10,-5,0,3,7]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>对于给定的数组，<code>arr[0] = -10，arr[1] = -5，arr[2] = 0，arr[3] = 3</code>，因此输出为 3 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [0,2,5,8,17]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong><code>arr[0] = 0</code>，因此输出为 0 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [-10,-5,3,4,7,9]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>不存在这样的 i 满足 <code>arr[i] = i</code>，因此输出为 -1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt; 10<sup>4</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>时间复杂度为 <code>O(n)</code> 的解决方案很直观也很简单。你可以设计更优的解决方案吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>线性扫描找 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>i</mi>
</math></span> 的最小下标即可，进阶希望 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。数组严格递增，故 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span> 单调不降，第一个非负处即最小不动点候选。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，答案不会在右侧；否则只可能在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 之后。</p>
<p>二分到左端后检查是否真的相等，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>题目给定的数组是按升序排列的，因此我们可以使用二分查找的方法找出最小的满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。每一次，我们找到当前的中间位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，如果中间位置满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，那么我们就确定了最小的不动点 🔒 的位置一定不会出现在下标大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的位置，因此我们令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>；如果中间位置满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，那么最小的不动点 🔒 一定出现在下标大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的位置，因此我们令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>最后，如果我们没有找到最小的不动点 🔒，那么我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func fixedPoint(arr []int) int {</span></span>
<span class="line"><span>	left, right := 0, len(arr)-1</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		if arr[mid] >= mid {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if arr[left] == left {</span></span>
<span class="line"><span>		return left</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/fixed-point" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1064.Fixed%20Point/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1095" tabindex="-1">1095. 山脉数组中查找目标值 <a class="header-anchor" href="#q-1095" aria-label="Permalink to &quot;1095. 山脉数组中查找目标值 {#q-1095}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、交互、三分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>（这是一个 <strong>交互式问题 </strong>）</p>&#10;&#10;<p>你可以将一个数组 <code>arr</code> 称为 <strong>山脉数组 </strong>当且仅当：</p>&#10;&#10;<ul>&#10;	<li><code>arr.length >= 3</code></li>&#10;	<li>存在一些 <code>0 &lt; i &lt; arr.length - 1</code> 的 <code>i</code> 使得：&#10;	<ul>&#10;		<li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li>&#10;		<li><code>arr[i] > arr[i + 1] > ... > arr[arr.length - 1]</code></li>&#10;	</ul>&#10;	</li>&#10;</ul>&#10;&#10;<p>给定一个山脉数组 <code>mountainArr</code> ，返回 <strong>最小</strong> 的 <code>index</code> 使得 <code>mountainArr.get(index) == target</code>。如果不存在这样的 <code>index</code>，返回 <code>-1</code> 。</p>&#10;&#10;<p><strong>你无法直接访问山脉数组</strong>。你只能使用 <code>MountainArray</code> 接口来访问数组：</p>&#10;&#10;<ul>&#10;	<li><code>MountainArray.get(k)</code> 返回数组中下标为 <code>k</code> 的元素（从 0 开始）。</li>&#10;	<li><code>MountainArray.length()</code> 返回数组的长度。</li>&#10;</ul>&#10;&#10;<p>调用 <code>MountainArray.get</code> 超过 <code>100</code> 次的提交会被判定为错误答案。此外，任何试图绕过在线评测的解决方案都将导致取消资格。</p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mountainArr = [1,2,3,4,5,3,1], target = 3&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>3 在数组中出现了两次，下标分别为 2 和 5，我们返回最小的下标 2。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mountainArr = [0,1,2,4,2,1], target = 3&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>3 在数组中没有出现，返回 -1。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= mountainArr.length() &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= target &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= mountainArr.get(index) &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>山脉数组只能通过 <code v-pre>get</code> 访问，长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，必须把查询次数压到对数。先定位峰顶，再在左侧升序、右侧降序各做一次二分。</p>
<p>比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">)</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 可判断峰在哪一侧。<code v-pre>search</code> 用系数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mo>&#xB1;</mo>
  <mn>1</mn>
</math></span> 统一升序与降序上的下界查找。</p>
<p>先查左半，没有再查右半，保证返回最小下标。</p>
</blockquote>
<p>我们先通过二分查找，找到数组中的最大值所在的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，那么数组就可以被分成两段，前半段是递增的，后半段是递减的。</p>
<p>然后我们在前半段中使用二分查找，查找目标值所在的下标，如果找不到，再在后半段中使用二分查找，查找目标值所在的下标。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> *</span><span> // This is the MountainArray's API interface.</span></span>
<span class="line"><span> *</span><span> // You should not implement it, or speculate about its implementation</span></span>
<span class="line"><span> * type MountainArray struct {</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * func (this *MountainArray) get(index int) int {}</span></span>
<span class="line"><span> * func (this *MountainArray) length() int {}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findInMountainArray(target int, mountainArr *MountainArray) int {</span></span>
<span class="line"><span>	n := mountainArr.length()</span></span>
<span class="line"><span>	l, r := 0, n-1</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r) >> 1</span></span>
<span class="line"><span>		if mountainArr.get(mid) > mountainArr.get(mid+1) {</span></span>
<span class="line"><span>			r = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			l = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	search := func(l, r, k int) int {</span></span>
<span class="line"><span>		for l &#x3C; r {</span></span>
<span class="line"><span>			mid := (l + r) >> 1</span></span>
<span class="line"><span>			if k*mountainArr.get(mid) >= k*target {</span></span>
<span class="line"><span>				r = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				l = mid + 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if mountainArr.get(l) == target {</span></span>
<span class="line"><span>			return l</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := search(0, l, 1)</span></span>
<span class="line"><span>	if ans == -1 {</span></span>
<span class="line"><span>		return search(l+1, n-1, -1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-in-mountain-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1095.Find%20in%20Mountain%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=a(e,[["render",o]]);export{d as __pageData,w as default};
