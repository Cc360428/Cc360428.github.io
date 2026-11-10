import{_ as s,a,c as t,b as m}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 数学与几何（5）","description":"数学与几何分类，第 1453–1925 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 数学与几何（5）","description":"数学与几何分类，第 1453–1925 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"数学与几何分类，第 1453–1925 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 数学与几何（4）","link":"/principles/algorithms/leetcode-go/math-04"},"next":{"text":"LeetCode Go · 数学与几何（6）","link":"/principles/algorithms/leetcode-go/math-06"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 数学与几何（4）","link":"/principles/algorithms/leetcode-go/math-04"},"next":{"text":"LeetCode Go · 数学与几何（6）","link":"/principles/algorithms/leetcode-go/math-06"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/math-05.md","filePath":"principles/algorithms/leetcode-go/math-05.md"}'),e={name:"principles/algorithms/leetcode-go/math-05.md"};function o(p,n,l,i,c,h){return a(),t("div",null,[...n[0]||(n[0]=[m("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-数学与几何-5" tabindex="-1">LeetCode Go · 数学与几何（5） <a class="header-anchor" href="#leetcode-go-·-数学与几何-5" aria-label="Permalink to &quot;LeetCode Go · 数学与几何（5）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-1453" tabindex="-1">1453. 圆形靶内的最大飞镖数量 <a class="header-anchor" href="#q-1453" aria-label="Permalink to &quot;1453. 圆形靶内的最大飞镖数量 {#q-1453}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Alice 向一面非常大的墙上掷出 <code>n</code> 支飞镖。给你一个数组 <code>darts</code> ，其中 <code>darts[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示 Alice 掷出的第 <code>i</code> 支飞镖落在墙上的位置。</p>&#10;&#10;<p>Bob 知道墙上所有 <code>n</code> 支飞镖的位置。他想要往墙上放置一个半径为 <code>r</code> 的圆形靶。使 Alice 掷出的飞镖尽可能多地落在靶上。</p>&#10;&#10;<p>给你整数 <code>r</code> ，请返回能够落在 <strong>任意</strong> 半径为 <code>r</code> 的圆形靶内或靶上的最大飞镖数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1 ：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1453.Maximum%20Number%20of%20Darts%20Inside%20of%20a%20Circular%20Dartboard/images/sample_1_1806.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>darts = [[-2,0],[2,0],[0,2],[0,-2]], r = 2&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>如果圆形靶的圆心为 (0,0) ，半径为 2 ，所有的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 4 。&#10;</pre>&#10;&#10;<p><strong>示例 2 ：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1453.Maximum%20Number%20of%20Darts%20Inside%20of%20a%20Circular%20Dartboard/images/sample_2_1806.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>darts = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>如果圆形靶的圆心为 (0,4) ，半径为 5 ，则除了 (7,8) 之外的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 5 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= darts.length &lt;= 100</code></li>&#10;	<li><code>darts[i].length == 2</code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>darts</code> 中的元素互不相同</li>&#10;	<li><code>1 &lt;= r &lt;= 5000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，覆盖最多点的半径为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 的圆，其最优位置往往使至少两点落在圆周上。枚举点对，若距离不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>r</mi>
</math></span>，可求出两个候选圆心，再数有多少点落入圆内。</p>
<p>单点答案至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。浮点比较时对半径加微小误差以免边界漏计。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numPoints(darts [][]int, r int) int {</span></span>
<span class="line"><span>	n := len(darts)</span></span>
<span class="line"><span>	maxDarts := 1</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			for _, c := range possibleCenters(darts[i][0], darts[i][1], darts[j][0], darts[j][1], r) {</span></span>
<span class="line"><span>				maxDarts = max(maxDarts, countDarts(c[0], c[1], darts, r))</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return maxDarts</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func possibleCenters(x1, y1, x2, y2, r int) [][2]float64 {</span></span>
<span class="line"><span>	dx := float64(x2 - x1)</span></span>
<span class="line"><span>	dy := float64(y2 - y1)</span></span>
<span class="line"><span>	d := math.Sqrt(dx*dx + dy*dy)</span></span>
<span class="line"><span>	if d > 2*float64(r) {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	midX := float64(x1+x2) / 2</span></span>
<span class="line"><span>	midY := float64(y1+y2) / 2</span></span>
<span class="line"><span>	distToCenter := math.Sqrt(float64(r*r) - (d/2)*(d/2))</span></span>
<span class="line"><span>	offsetX := distToCenter * dy / d</span></span>
<span class="line"><span>	offsetY := distToCenter * -dx / d</span></span>
<span class="line"><span>	return [][2]float64{{midX + offsetX, midY + offsetY}, {midX - offsetX, midY - offsetY}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func countDarts(x, y float64, darts [][]int, r int) (count int) {</span></span>
<span class="line"><span>	for _, dart := range darts {</span></span>
<span class="line"><span>		if math.Hypot(float64(dart[0])-x, float64(dart[1])-y) &#x3C;= float64(r)+1e-7 {</span></span>
<span class="line"><span>			count++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-darts-inside-of-a-circular-dartboard" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1453.Maximum%20Number%20of%20Darts%20Inside%20of%20a%20Circular%20Dartboard/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1492" tabindex="-1">1492. n 的第 k 个因子 <a class="header-anchor" href="#q-1492" aria-label="Permalink to &quot;1492. n 的第 k 个因子 {#q-1492}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、数论、质因数分解</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个正整数 <code>n</code> 和 <code>k</code> 。</p>&#10;&#10;<p>如果正整数 <code>i</code> 满足 <code>n % i == 0</code> ，那么我们就说正整数 <code>i</code> 是整数 <code>n</code> 的因子。</p>&#10;&#10;<p>考虑整数 <code>n</code> 的所有因子，将它们 <strong>升序排列</strong> 。请你返回第 <code>k</code> 个因子。如果 <code>n</code> 的因子数少于 <code>k</code> ，请你返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 12, k = 3&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>因子列表包括 [1, 2, 3, 4, 6, 12]，第 3 个因子是 3 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 7, k = 2&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>因子列表包括 [1, 7] ，第 2 个因子是 7 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 4, k = 4&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>因子列表包括 [1, 2, 4] ，只有 3 个因子，所以我们应该返回 -1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= n &lt;= 1000</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong></p>&#10;&#10;<p>你可以设计时间复杂度小于 O(n) 的算法来解决此问题吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一：暴力枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 扫到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，每遇到因子把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 减一，减到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 即第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 小因子；扫完则不存在。</p>
</blockquote>
<p>“因子”是指能整除某个数的数。因此，我们只需要从小到大枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>，找到所有能整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的数，然后返回第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func kthFactor(n int, k int) int {</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		if n%i == 0 {</span></span>
<span class="line"><span>			k--</span></span>
<span class="line"><span>			if k == 0 {</span></span>
<span class="line"><span>				return i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：枚举优化 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。因子成对出现，先枚举到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <msqrt>
    <mi>n</mi>
  </msqrt>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 收集较小因子；若还不够，再倒序用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>i</mi>
</math></span> 取较大因子，降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>n</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们可以发现，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 有一个因子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 一定也有一个因子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>x</mi>
</math></span>。</p>
<p>因此，我们先需要枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <msqrt>
      <mi>n</mi>
    </msqrt>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo stretchy="false">]</mo>
</math></span>，找到所有能整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的数，如果找到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个因子，那么直接返回即可。如果没有找到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个因子，那么我们再倒序枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <msqrt>
      <mi>n</mi>
    </msqrt>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>,</mo>
  <mo>.</mo>
  <mn>.1</mn>
  <mo stretchy="false">]</mo>
</math></span>，找到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个因子即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>n</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func kthFactor(n int, k int) int {</span></span>
<span class="line"><span>	i := 1</span></span>
<span class="line"><span>	for ; i &#x3C; n/i; i++ {</span></span>
<span class="line"><span>		if n%i == 0 {</span></span>
<span class="line"><span>			k--</span></span>
<span class="line"><span>			if k == 0 {</span></span>
<span class="line"><span>				return i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if i*i != n {</span></span>
<span class="line"><span>		i--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for ; i > 0; i-- {</span></span>
<span class="line"><span>		if n%(n/i) == 0 {</span></span>
<span class="line"><span>			k--</span></span>
<span class="line"><span>			if k == 0 {</span></span>
<span class="line"><span>				return n / i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/the-kth-factor-of-n" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1492.The%20kth%20Factor%20of%20n/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1512" tabindex="-1">1512. 好数对的数目 <a class="header-anchor" href="#q-1512" aria-label="Permalink to &quot;1512. 好数对的数目 {#q-1512}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 。</p>&#10;&#10;<p>如果一组数字 <code>(i,j)</code> 满足 <code>nums[i]</code> == <code>nums[j]</code> 且 <code>i</code> &lt; <code>j</code> ，就可以认为这是一组 <strong>好数对</strong> 。</p>&#10;&#10;<p>返回好数对的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,2,3,1,1,3]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,1,1,1]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>数组中的每组数字都是好数对</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,2,3]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的下标对。双重循环在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span> 时可通过，但每次都回头扫描相同值。</p>
<p>对当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 而言，它能与此前出现的每一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 各组成一对。用计数器记录已扫过的频次，遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 时先把已有次数加入答案再自增，一次遍历即可。</p>
</blockquote>
<p>遍历数组，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 之前有多少个元素与其相等，即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 与之前元素组成的好数对的数目。遍历完数组后，即可得到答案。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为数组中元素的取值范围。本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>101</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numIdenticalPairs(nums []int) (ans int) {</span></span>
<span class="line"><span>	cnt := [101]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		ans += cnt[x]</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-good-pairs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1512.Number%20of%20Good%20Pairs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1513" tabindex="-1">1513. 仅含 1 的子串数 <a class="header-anchor" href="#q-1513" aria-label="Permalink to &quot;1513. 仅含 1 的子串数 {#q-1513}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二进制字符串 <code>s</code>（仅由 '0' 和 '1' 组成的字符串）。</p>&#10;&#10;<p>返回所有字符都为 1 的子字符串的数目。</p>&#10;&#10;<p>由于答案可能很大，请你将它对 10^9 + 7 取模后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;0110111&quot;&#10;<strong>输出</strong>：9&#10;<strong>解释：</strong>共有 9 个子字符串仅由 '1' 组成&#10;&quot;1&quot; -> 5 次&#10;&quot;11&quot; -> 3 次&#10;&quot;111&quot; -> 1 次</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;101&quot;&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>子字符串 &quot;1&quot; 在 s 中共出现 2 次&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;111111&quot;&#10;<strong>输出：</strong>21&#10;<strong>解释：</strong>每个子字符串都仅由 '1' 组成&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;000&quot;&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>s[i] == '0'</code> 或 <code>s[i] == '1'</code></li>&#10;	<li><code>1 &lt;= s.length &lt;= 10^5</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：遍历计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计全为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的子串个数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能枚举全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 个子串。被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 隔开的连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 段彼此独立，只需对每段计数。</p>
<p>长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的全 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 段贡献 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 个子串，也等价于扫描时维护当前连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span>：每多一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span> 加一并把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span> 累入答案；遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则清零。这样不必预先切段。</p>
</blockquote>
<p>我们遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span> 记录当前连续的 1 的个数，用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 记录答案。当遍历到字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span> 置 0，否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span> 自增 1，然后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 自增 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span>，并对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
<p>遍历结束，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
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
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0400-0499/0413.Arithmetic%20Slices/README.md" target="_blank" rel="noopener noreferrer">413. 等差数列划分</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2300-2399/2348.Number%20of%20Zero-Filled%20Subarrays/README.md" target="_blank" rel="noopener noreferrer">2348. 全 0 子数组的数目</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numSub(s string) (ans int) {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	cur := 0</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		if c == '0' {</span></span>
<span class="line"><span>			cur = 0</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			cur++</span></span>
<span class="line"><span>			ans = (ans + cur) % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-substrings-with-only-1s" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1513.Number%20of%20Substrings%20With%20Only%201s/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1515" tabindex="-1">1515. 服务中心的最佳位置 <a class="header-anchor" href="#q-1515" aria-label="Permalink to &quot;1515. 服务中心的最佳位置 {#q-1515}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、随机化</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一家快递公司希望在新城市建立新的服务中心。公司统计了该城市所有客户在二维地图上的坐标，并希望能够以此为依据为新的服务中心选址：使服务中心 <strong>到所有客户的欧几里得距离的总和最小</strong> 。</p>&#10;&#10;<p>给你一个数组 <code>positions</code> ，其中 <code>positions[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示第 <code>i</code> 个客户在二维地图上的位置，返回到所有客户的 <strong>欧几里得距离的最小总和 。</strong></p>&#10;&#10;<p>换句话说，请你为服务中心选址，该位置的坐标 <code>[x<sub>centre</sub>, y<sub>centre</sub>]</code> 需要使下面的公式取到最小值：</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1515.Best%20Position%20for%20a%20Service%20Centre/images/q4_edited.jpg" loading="lazy"></p>&#10;&#10;<p>与真实值误差在 <code>10<sup>-5</sup></code>之内的答案将被视作正确答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1515.Best%20Position%20for%20a%20Service%20Centre/images/q4_e1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>positions = [[0,1],[1,0],[1,2],[2,1]]&#10;<strong>输出：</strong>4.00000&#10;<strong>解释：</strong>如图所示，你可以选 [x<sub>centre</sub>, y<sub>centre</sub>] = [1, 1] 作为新中心的位置，这样一来到每个客户的距离就都是 1，所有距离之和为 4 ，这也是可以找到的最小值。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1515.Best%20Position%20for%20a%20Service%20Centre/images/q4_e3.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>positions = [[1,1],[3,3]]&#10;<strong>输出：</strong>2.82843&#10;<strong>解释：</strong>欧几里得距离可能的最小总和为 sqrt(2) + sqrt(2) = 2.82843&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= positions.length &lt;= 50</code></li>&#10;	<li><code>positions[i].length == 2</code></li>&#10;	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：梯度下降法 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>几何中位（费马—韦伯点）使到各客户的欧氏距离之和最小，目标函数对平面坐标可微但没有简单闭式。客户数不大，允许迭代逼近，误差不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>5</mn>
    </mrow>
  </msup>
</math></span>。</p>
<p>从质心出发做梯度下降：梯度是各点方向单位向量之和。学习率按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.999</mn>
</math></span> 衰减，并在距离为零处加上微小分母以免除零。步长分量均小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>6</mn>
    </mrow>
  </msup>
</math></span> 时停止，返回当前距离和。</p>
</blockquote>
<p>我们可以先设定一个初始的服务中心位置为所有客户坐标的几何中心 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>。接下来，使用梯度下降法不断迭代，设定一个学习率 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x3B1;</mi>
  <mo>=</mo>
  <mn>0.5</mn>
</math></span>，衰减率 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mo>=</mo>
  <mn>0.999</mn>
</math></span>。每次一次迭代，计算当前位置到所有客户的距离之和，然后计算当前位置的梯度，最后更新当前位置。当梯度的绝对值都小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>6</mn>
    </mrow>
  </msup>
</math></span> 时，停止迭代，返回当前位置到所有客户的距离之和。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func getMinDistSum(positions [][]int) float64 {</span></span>
<span class="line"><span>	n := len(positions)</span></span>
<span class="line"><span>	var x, y float64</span></span>
<span class="line"><span>	for _, p := range positions {</span></span>
<span class="line"><span>		x += float64(p[0])</span></span>
<span class="line"><span>		y += float64(p[1])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	x /= float64(n)</span></span>
<span class="line"><span>	y /= float64(n)</span></span>
<span class="line"><span>	const decay float64 = 0.999</span></span>
<span class="line"><span>	const eps float64 = 1e-6</span></span>
<span class="line"><span>	var alpha float64 = 0.5</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		var gradX, gradY float64</span></span>
<span class="line"><span>		var dist float64</span></span>
<span class="line"><span>		for _, p := range positions {</span></span>
<span class="line"><span>			a := x - float64(p[0])</span></span>
<span class="line"><span>			b := y - float64(p[1])</span></span>
<span class="line"><span>			c := math.Sqrt(a*a + b*b)</span></span>
<span class="line"><span>			gradX += a / (c + 1e-8)</span></span>
<span class="line"><span>			gradY += b / (c + 1e-8)</span></span>
<span class="line"><span>			dist += c</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dx := gradX * alpha</span></span>
<span class="line"><span>		dy := gradY * alpha</span></span>
<span class="line"><span>		if math.Abs(dx) &#x3C;= eps &#x26;&#x26; math.Abs(dy) &#x3C;= eps {</span></span>
<span class="line"><span>			return dist</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		x -= dx</span></span>
<span class="line"><span>		y -= dy</span></span>
<span class="line"><span>		alpha *= decay</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/best-position-for-a-service-centre" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1515.Best%20Position%20for%20a%20Service%20Centre/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1518" tabindex="-1">1518. 换水问题 <a class="header-anchor" href="#q-1518" aria-label="Permalink to &quot;1518. 换水问题 {#q-1518}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>超市正在促销，你可以用 <code>numExchange</code> 个空水瓶从超市兑换一瓶水。最开始，你一共购入了 <code>numBottles</code> 瓶水。</p>&#10;&#10;<p>如果喝掉了水瓶中的水，那么水瓶就会变成空的。</p>&#10;&#10;<p>给你两个整数 <code>numBottles</code> 和 <code>numExchange</code> ，返回你 <strong>最多</strong> 可以喝到多少瓶水。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1518.Water%20Bottles/images/sample_1_1875.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>numBottles = 9, numExchange = 3&#10;<strong>输出：</strong>13&#10;<strong>解释：</strong>你可以用 <code>3</code> 个空瓶兑换 1 瓶水。&#10;所以最多能喝到 9 + 3 + 1 = 13 瓶水。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1518.Water%20Bottles/images/sample_2_1875.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>numBottles = 15, numExchange = 4&#10;<strong>输出：</strong>19&#10;<strong>解释：</strong>你可以用 <code>4</code> 个空瓶兑换 1 瓶水。&#10;所以最多能喝到 15 + 3 + 1 = 19 瓶水。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= numBottles &lt;= 100</code></li>&#10;	<li><code>2 &lt;= numExchange &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>喝完的空瓶可按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>E</mi>
  <mi>x</mi>
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>e</mi>
</math></span> 个兑换一瓶新酒，问总共能喝多少瓶。数值上限不大，按轮次模拟兑换即可，无需闭式。</p>
<p>先喝掉手上的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>B</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 瓶。每当空瓶数不少于兑换阈值，就拿出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>E</mi>
  <mi>x</mi>
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>e</mi>
</math></span> 个空瓶换回一瓶，喝完后又多一个空瓶，净减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>E</mi>
  <mi>x</mi>
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个空瓶并给答案加一。直到不够兑换为止。</p>
</blockquote>
<p>我们可以直接模拟整个过程。</p>
<p>初始时，我们有 <code v-pre>numBottles</code> 瓶水，因此可以喝到 <code v-pre>ans = numBottles</code> 瓶水，然后得到 <code v-pre>numBottles</code> 个空瓶子。</p>
<p>接下来，如果我们有 <code v-pre>numExchange</code> 个空瓶子，那么我们可以用它们兑换一瓶水并喝掉，此时我们剩余的空瓶子数量为 <code v-pre>numBottles - numExchange + 1</code>，然后我们累加喝到的水的数量，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>最后，返回 <code v-pre>ans</code> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mi>u</mi>
      <mi>m</mi>
      <mi>B</mi>
      <mi>o</mi>
      <mi>t</mi>
      <mi>t</mi>
      <mi>l</mi>
      <mi>e</mi>
      <mi>s</mi>
    </mrow>
    <mrow>
      <mi>n</mi>
      <mi>u</mi>
      <mi>m</mi>
      <mi>E</mi>
      <mi>x</mi>
      <mi>c</mi>
      <mi>h</mi>
      <mi>a</mi>
      <mi>n</mi>
      <mi>g</mi>
      <mi>e</mi>
    </mrow>
  </mfrac>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numWaterBottles(numBottles int, numExchange int) int {</span></span>
<span class="line"><span>	ans := numBottles</span></span>
<span class="line"><span>	for ; numBottles >= numExchange; ans++ {</span></span>
<span class="line"><span>		numBottles -= (numExchange - 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/water-bottles" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1518.Water%20Bottles/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1523" tabindex="-1">1523. 在区间范围内统计奇数数目 <a class="header-anchor" href="#q-1523" aria-label="Permalink to &quot;1523. 在区间范围内统计奇数数目 {#q-1523}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个非负整数 <code>low</code> 和 <code>high</code> 。请你返回<em> </em><code>low</code><em> </em>和<em> </em><code>high</code><em> </em>之间（包括二者）奇数的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>low = 3, high = 7&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>3 到 7 之间奇数数字为 [3,5,7] 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>low = 8, high = 10&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>8 到 10 之间奇数数字为 [9] 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= low &lt;= high &lt;= 10^9</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和思想 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计闭区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo>,</mo>
  <mi>h</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的奇数个数。区间长度可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，不能逐个数判断奇偶。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 中奇数的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。因此答案等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>h</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span> 的奇数个数减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的奇数个数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#x2212;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>，可用移位在常数时间内求出。</p>
</blockquote>
<p>我们知道，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内奇数的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。因此， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo>,</mo>
  <mi>h</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内奇数的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>h</mi>
      <mi>i</mi>
      <mi>g</mi>
      <mi>h</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#x2212;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>l</mi>
      <mi>o</mi>
      <mi>w</mi>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countOdds(low int, high int) int {</span></span>
<span class="line"><span>	return ((high + 1) >> 1) - (low >> 1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-odd-numbers-in-an-interval-range" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1523.Count%20Odd%20Numbers%20in%20an%20Interval%20Range/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1538" tabindex="-1">1538. 找出隐藏数组中出现次数最多的元素 🔒 <a class="header-anchor" href="#q-1538" aria-label="Permalink to &quot;1538. 找出隐藏数组中出现次数最多的元素 🔒 {#q-1538}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、交互、摩尔投票算法</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>nums</code>，且 <code>nums</code> 中的所有整数都为 <strong>0</strong> 或 <strong>1</strong>。你不能直接访问这个数组，你需要使用 API <code>ArrayReader</code> ，该 API 含有下列成员函数：</p>&#10;&#10;<ul>&#10;	<li><code>int query(int a, int b, int c, int d)</code>：其中 <code>0 &lt;= a &lt; b &lt; c &lt; d &lt; ArrayReader.length()</code> 。此函数查询以这四个参数为下标的元素并返回：&#10;&#10;    <ul>&#10;    	<li><strong>4 </strong>: 当这四个元素相同（0 或 1）时。</li>&#10;    	<li><strong>2</strong> : 当其中三个元素的值等于 0 且一个元素等于 1 时，或当其中三个元素的值等于 1 且一个元素等于 0 时。</li>&#10;    	<li><strong>0 </strong>: 当其中两个元素等于 0 且两个元素等于 1 时。</li>&#10;    </ul>&#10;    </li>&#10;    <li><code>int length()</code>：返回数组的长度。</li>&#10;&#10;</ul>&#10;&#10;<p>你可以调用 <code>query()</code> 最多 <strong>2 * n 次</strong>，其中 n 等于 <code>ArrayReader.length()</code>。</p>&#10;&#10;<p>返回 <code>nums</code> 中出现次数最多的值的<strong>任意</strong>索引，若所有的值出现次数均相同，返回 -1。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [0,0,1,0,1,1,1,1]&#10;<strong>输出:</strong> 5&#10;<strong>解释:</strong> API 的调用情况如下：&#10;reader.length() // 返回 8，因为隐藏数组中有 8 个元素。&#10;reader.query(0,1,2,3) // 返回 2，查询元素 nums[0], nums[1], nums[2], nums[3] 间的比较。&#10;// 三个元素等于 0 且一个元素等于 1 或出现相反情况。&#10;reader.query(4,5,6,7) // 返回 4，因为 nums[4], nums[5], nums[6], nums[7] 有相同值。&#10;我们可以推断，最常出现的值在最后 4 个元素中。&#10;索引 2, 4, 6, 7 也是正确答案。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [0,0,1,1,0]&#10;<strong>输出:</strong> 0&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,0,1,0,1,0,1,0]&#10;<strong>输出:</strong> -1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>5 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 1</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>要找到出现次数最多的元素，需要至少调用 <code>query()</code> 多少次？</p></div>
</details>
<details class="details custom-block"><summary>方法一：脑筋急转弯 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>隐藏数组只含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>1</mn>
</math></span>，每次查询四个互异下标返回其中多数情况的编码，要找出多数值的一个下标，查询次数还受限制。不能读出全部元素。</p>
<p>以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>y</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mn>3</mn>
  <mo stretchy="false">)</mo>
</math></span> 为基准 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mn>4</mn>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>y</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>x</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 同类，否则与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 异类。再用三次查询把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
</math></span> 分别与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 比较。较大的一类即多数；两类相等则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。除下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 外，异类下标记在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 中以便输出。</p>
</blockquote>
<p>我们先调用 <code v-pre>reader.query(0, 1, 2, 3)</code>，将得到的结果记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
<p>接下来，我们从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 开始遍历，每次调用 <code v-pre>reader.query(0, 1, 2, i)</code>，如果结果与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 相同，我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 的值加一，否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 的值加一，同时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的值更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。</p>
<p>然后，我们还需要判断下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
</math></span> 与下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的元素是否相同，如果相同，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 的值加一，否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 的值加一，同时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的值更新为对应的下标。</p>
<p>最后，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mi>b</mi>
</math></span>，说明数组中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数相同，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>；否则，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&gt;</mo>
  <mi>b</mi>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
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
<span class="line"><span> *</span><span> // This is the ArrayReader's API interface.</span></span>
<span class="line"><span> *</span><span> // You should not implement it, or speculate about its implementation</span></span>
<span class="line"><span> * type ArrayReader struct {</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> *</span><span> // Compares 4 different elements in the array</span></span>
<span class="line"><span> *</span><span> // return 4 if the values of the 4 elements are the same (0 or 1).</span></span>
<span class="line"><span> *</span><span> // return 2 if three elements have a value equal to 0 and one element has value equal to 1 or vice versa.</span></span>
<span class="line"><span> *</span><span> // return 0 : if two element have a value equal to 0 and two elements have a value equal to 1.</span></span>
<span class="line"><span> * func (this *ArrayReader) query(a, b, c, d int) int {}</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *</span><span> // Returns the length of the array</span></span>
<span class="line"><span> * func (this *ArrayReader) length() int {}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func guessMajority(reader *ArrayReader) int {</span></span>
<span class="line"><span>	n := reader.length()</span></span>
<span class="line"><span>	x := reader.query(0, 1, 2, 3)</span></span>
<span class="line"><span>	a, b := 1, 0</span></span>
<span class="line"><span>	k := 0</span></span>
<span class="line"><span>	for i := 4; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if reader.query(0, 1, 2, i) == x {</span></span>
<span class="line"><span>			a++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			b++</span></span>
<span class="line"><span>			k = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	y := reader.query(0, 1, 2, 4)</span></span>
<span class="line"><span>	if reader.query(1, 2, 3, 4) == y {</span></span>
<span class="line"><span>		a++</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		b++</span></span>
<span class="line"><span>		k = 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if reader.query(0, 2, 3, 4) == y {</span></span>
<span class="line"><span>		a++</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		b++</span></span>
<span class="line"><span>		k = 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if reader.query(0, 1, 3, 4) == y {</span></span>
<span class="line"><span>		a++</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		b++</span></span>
<span class="line"><span>		k = 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if a == b {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if a > b {</span></span>
<span class="line"><span>		return 3</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return k</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/guess-the-majority-in-a-hidden-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1538.Guess%20the%20Majority%20in%20a%20Hidden%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1551" tabindex="-1">1551. 使数组中所有元素相等的最小操作数 <a class="header-anchor" href="#q-1551" aria-label="Permalink to &quot;1551. 使数组中所有元素相等的最小操作数 {#q-1551}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>存在一个长度为 <code>n</code> 的数组 <code>arr</code> ，其中 <code>arr[i] = (2 * i) + 1</code> （ <code>0 &lt;= i &lt; n</code> ）。</p>&#10;&#10;<p>一次操作中，你可以选出两个下标，记作 <code>x</code> 和 <code>y</code> （ <code>0 &lt;= x, y &lt; n</code> ）并使 <code>arr[x]</code> 减去 <code>1</code> 、<code>arr[y]</code> 加上 <code>1</code> （即 <code>arr[x] -=1 </code>且 <code>arr[y] += 1</code> ）。最终的目标是使数组中的所有元素都 <strong>相等</strong> 。题目测试用例将会 <strong>保证</strong> ：在执行若干步操作后，数组中的所有元素最终可以全部相等。</p>&#10;&#10;<p>给你一个整数 <code>n</code>，即数组的长度。请你返回使数组 <code>arr</code> 中所有元素相等所需的 <strong>最小操作数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 3&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>arr = [1, 3, 5]&#10;第一次操作选出 x = 2 和 y = 0，使数组变为 [2, 3, 4]&#10;第二次操作继续选出 x = 2 和 y = 0，数组将会变成 [3, 3, 3]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 6&#10;<strong>输出：</strong>9&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10^4</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数组为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>3</mn>
  <mo>,</mo>
  <mn>5</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
  <mo>,</mo>
  <mn>2</mn>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，每次把一个数加一、另一个减一，要使所有值相等。模拟每次操作在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 时偏慢，且总和守恒给出了目标值。</p>
<p>元素之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
</math></span>，平均值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。只需把小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的前一半元素补到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个奇数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mn>2</mn>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 次。对这些缺口求和即得最少操作数。</p>
</blockquote>
<p>根据题目描述，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 是一个首项为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，公差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的等差数列。那么数组前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 项的和为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <msub>
          <mi>S</mi>
          <mi>n</mi>
        </msub>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mfrac>
          <mi>n</mi>
          <mn>2</mn>
        </mfrac>
        <mo>&#xD7;</mo>
        <mo stretchy="false">(</mo>
        <msub>
          <mi>a</mi>
          <mn>1</mn>
        </msub>
        <mo>+</mo>
        <msub>
          <mi>a</mi>
          <mi>n</mi>
        </msub>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mfrac>
          <mi>n</mi>
          <mn>2</mn>
        </mfrac>
        <mo>&#xD7;</mo>
        <mo stretchy="false">(</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mo stretchy="false">(</mo>
        <mn>2</mn>
        <mi>n</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>由于一次操作中，一个数减一，另一个数加一，数组中所有元素的和不变。因此，数组中所有元素相等时，每个元素的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>S</mi>
    <mi>n</mi>
  </msub>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>n</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span>。那么，数组中所有元素相等所需的最小操作数为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <munder>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
  </munder>
  <mrow data-mjx-texclass="ORD">
    <mfrac>
      <mi>n</mi>
      <mn>2</mn>
    </mfrac>
  </mrow>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mn>2</mn>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span><p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minOperations(n int) (ans int) {</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n>>1; i++ {</span></span>
<span class="line"><span>		ans += n - (i&#x3C;&#x3C;1 | 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-make-array-equal" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1551.Minimum%20Operations%20to%20Make%20Array%20Equal/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1573" tabindex="-1">1573. 分割字符串的方案数 <a class="header-anchor" href="#q-1573" aria-label="Permalink to &quot;1573. 分割字符串的方案数 {#q-1573}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二进制串 <code>s</code>  （一个只包含 0 和 1 的字符串），我们可以将 <code>s</code> 分割成 3 个 <strong>非空</strong> 字符串 s1, s2, s3 （s1 + s2 + s3 = s）。</p>&#10;&#10;<p>请你返回分割 <code>s</code> 的方案数，满足 s1，s2 和 s3 中字符 '1' 的数目相同。</p>&#10;&#10;<p>由于答案可能很大，请将它对 10^9 + 7 取余后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;10101&quot;&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>总共有 4 种方法将 s 分割成含有 '1' 数目相同的三个子字符串。&#10;&quot;1|010|1&quot;&#10;&quot;1|01|01&quot;&#10;&quot;10|10|1&quot;&#10;&quot;10|1|01&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;1001&quot;&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;0000&quot;&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>总共有 3 种分割 s 的方法。&#10;&quot;0|0|00&quot;&#10;&quot;0|00|0&quot;&#10;&quot;00|0|0&quot;&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;100100010100110&quot;&#10;<strong>输出：</strong>12&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>s[i] == '0'</code> 或者 <code>s[i] == '1'</code></li>&#10;	<li><code>3 &lt;= s.length &lt;= 10^5</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把字符串切成三段，使每段中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数相同。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能枚举两个切点。三段的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 数必须都等于总数的三分之一。</p>
<p>总数不能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 整除则无解；全 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时任意两个切点都合法，方案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mn>2</mn>
    </mrow>
  </msubsup>
</math></span>。否则找到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 与第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的位置作为第一刀的可选区间，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 与第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 作为第二刀的可选区间，两段长度相乘即方案数。</p>
</blockquote>
<p>我们先遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，统计其中字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 不能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 整除，那么无法分割，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，说明字符串中没有字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，我们可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个位置中任意选择两个位置，将字符串分割成三个子串，那么方案数就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
    </mrow>
    <mn>3</mn>
  </mfrac>
</math></span>，即每个子串中字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数。</p>
<p>接下来我们找到第一个子字符串的右边界的最小下标，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>i</mi>
    <mn>1</mn>
  </msub>
</math></span>，第一个子字符串的右边界的最大下标（不包含），记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>i</mi>
    <mn>2</mn>
  </msub>
</math></span>；第二个子字符串的右边界的最小下标，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>j</mi>
    <mn>1</mn>
  </msub>
</math></span>，第二个子字符串的右边界的最大下标（不包含），记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>j</mi>
    <mn>2</mn>
  </msub>
</math></span>。那么方案数就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>i</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>i</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>j</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>j</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>注意答案可能很大，需要对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0900-0999/0927.Three%20Equal%20Parts/README.md" target="_blank" rel="noopener noreferrer">927. 三等分</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numWays(s string) int {</span></span>
<span class="line"><span>	cnt := 0</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		if c == '1' {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m := cnt % 3</span></span>
<span class="line"><span>	if m != 0 {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	if cnt == 0 {</span></span>
<span class="line"><span>		return (n - 1) * (n - 2) / 2 % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt /= 3</span></span>
<span class="line"><span>	find := func(x int) int {</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for i := 0; ; i++ {</span></span>
<span class="line"><span>			if s[i] == '1' {</span></span>
<span class="line"><span>				t++</span></span>
<span class="line"><span>				if t == x {</span></span>
<span class="line"><span>					return i</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	i1, i2 := find(cnt), find(cnt+1)</span></span>
<span class="line"><span>	j1, j2 := find(cnt*2), find(cnt*2+1)</span></span>
<span class="line"><span>	return (i2 - i1) * (j2 - j1) % mod</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-ways-to-split-a-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1573.Number%20of%20Ways%20to%20Split%20a%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1688" tabindex="-1">1688. 比赛中的配对次数 <a class="header-anchor" href="#q-1688" aria-label="Permalink to &quot;1688. 比赛中的配对次数 {#q-1688}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>n</code> ，表示比赛中的队伍数。比赛遵循一种独特的赛制：</p>&#10;&#10;<ul>&#10;	<li>如果当前队伍数是 <strong>偶数</strong> ，那么每支队伍都会与另一支队伍配对。总共进行 <code>n / 2</code> 场比赛，且产生 <code>n / 2</code> 支队伍进入下一轮。</li>&#10;	<li>如果当前队伍数为 <strong>奇数</strong> ，那么将会随机轮空并晋级一支队伍，其余的队伍配对。总共进行 <code>(n - 1) / 2</code> 场比赛，且产生 <code>(n - 1) / 2 + 1</code> 支队伍进入下一轮。</li>&#10;</ul>&#10;&#10;<p>返回在比赛中进行的配对次数，直到决出获胜队伍为止。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 7&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>比赛详情：&#10;- 第 1 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。&#10;- 第 2 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。&#10;- 第 3 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。&#10;总配对次数 = 3 + 2 + 1 = 6&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 14&#10;<strong>输出：</strong>13&#10;<strong>解释：</strong>比赛详情：&#10;- 第 1 轮：队伍数 = 14 ，配对次数 = 7 ，7 支队伍晋级。&#10;- 第 2 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。 &#10;- 第 3 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。&#10;- 第 4 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。&#10;总配对次数 = 7 + 3 + 2 + 1 = 13&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 200</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：脑筋急转弯 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每场比赛淘汰一支队伍，产生一名冠军需要淘汰 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 支，因此比赛场数恒为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，不必按奇偶模拟。</p>
</blockquote>
<p>根据题目描述我们知道，一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 支队伍，每一次的配对，都会淘汰一支队伍，所以配对次数就是淘汰的队伍数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfMatches(n int) int {</span></span>
<span class="line"><span>	return n - 1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-of-matches-in-tournament" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1688.Count%20of%20Matches%20in%20Tournament/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1716" tabindex="-1">1716. 计算力扣银行的钱 <a class="header-anchor" href="#q-1716" aria-label="Permalink to &quot;1716. 计算力扣银行的钱 {#q-1716}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Hercy 想要为购买第一辆车存钱。他 <strong>每天</strong> 都往力扣银行里存钱。</p>&#10;&#10;<p>最开始，他在周一的时候存入 <code>1</code> 块钱。从周二到周日，他每天都比前一天多存入 <code>1</code> 块钱。在接下来每一个周一，他都会比 <strong>前一个周一</strong> 多存入 <code>1</code> 块钱。<span> </span></p>&#10;&#10;<p>给你 <code>n</code> ，请你返回在第 <code>n</code> 天结束的时候他在力扣银行总共存了多少块钱。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 4&#10;<b>输出：</b>10&#10;<b>解释：</b>第 4 天后，总额为 1 + 2 + 3 + 4 = 10 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 10&#10;<b>输出：</b>37&#10;<b>解释：</b>第 10 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37 。注意到第二个星期一，Hercy 存入 2 块钱。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 20&#10;<b>输出：</b>96&#10;<b>解释：</b>第 20 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 周每天比上一周多存 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，完整周与零头都是等差数列。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span> 虽可逐日累加，闭式求和更直接。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>7</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 个完整周的首周和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>28</mn>
</math></span>，公差 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span>；余下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>7</mn>
</math></span> 天从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 起连续递增。</p>
<p>两段分别用等差求和公式，相加即总存款。</p>
</blockquote>
<p>根据题目描述，每周的存款情况如下：</p>
<div class="language- vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>第 1 周：1, 2, 3, 4, 5, 6, 7</span></span>
<span class="line"><span>第 2 周：2, 3, 4, 5, 6, 7, 8</span></span>
<span class="line"><span>第 3 周：3, 4, 5, 6, 7, 8, 9</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>第 k 周：k, k+1, k+2, k+3, k+4, k+5, k+6</span></span></code></pre>
</div><p>存款天数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，那么完整的周数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>7</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>，剩余天数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mspace width="0.667em"></mspace>
  <mi>mod</mi>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mn>7</mn>
</math></span>。</p>
<p>完整的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 周的存款总额，可以通过等差数列求和公式计算：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msub>
    <mi>S</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <mfrac>
    <mi>k</mi>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mn>28</mn>
  <mo>+</mo>
  <mn>28</mn>
  <mo>+</mo>
  <mn>7</mn>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span><p>剩余的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 天的存款总额，同样可以通过等差数列求和公式计算：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msub>
    <mi>S</mi>
    <mn>2</mn>
  </msub>
  <mo>=</mo>
  <mfrac>
    <mi>b</mi>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>+</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span><p>最终的总存款金额为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>S</mi>
  <mo>=</mo>
  <msub>
    <mi>S</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>S</mi>
    <mn>2</mn>
  </msub>
</math></span>。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func totalMoney(n int) int {</span></span>
<span class="line"><span>	k, b := n/7, n%7</span></span>
<span class="line"><span>	s1 := (28 + 28 + 7*(k-1)) * k / 2</span></span>
<span class="line"><span>	s2 := (k + 1 + k + 1 + b - 1) * b / 2</span></span>
<span class="line"><span>	return s1 + s2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/calculate-money-in-leetcode-bank" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1716.Calculate%20Money%20in%20Leetcode%20Bank/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1742" tabindex="-1">1742. 盒子中小球的最大数量 <a class="header-anchor" href="#q-1742" aria-label="Permalink to &quot;1742. 盒子中小球的最大数量 {#q-1742}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、数学、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你在一家生产小球的玩具厂工作，有 <code>n</code> 个小球，编号从 <code>lowLimit</code> 开始，到 <code>highLimit</code> 结束（包括 <code>lowLimit</code> 和 <code>highLimit</code> ，即 <code>n == highLimit - lowLimit + 1</code>）。另有无限数量的盒子，编号从 <code>1</code> 到 <code>infinity</code> 。</p>&#10;&#10;<p>你的工作是将每个小球放入盒子中，其中盒子的编号应当等于小球编号上每位数字的和。例如，编号 <code>321</code> 的小球应当放入编号 <code>3 + 2 + 1 = 6</code> 的盒子，而编号 <code>10</code> 的小球应当放入编号 <code>1 + 0 = 1</code> 的盒子。</p>&#10;&#10;<p>给你两个整数 <code>lowLimit</code> 和 <code>highLimit</code> ，返回放有最多小球的盒子中的小球数量<em>。</em>如果有多个盒子都满足放有最多小球，只需返回其中任一盒子的小球数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>lowLimit = 1, highLimit = 10&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;盒子编号：1 2 3 4 5 6 7 8 9 10 11 ...&#10;小球数量：2 1 1 1 1 1 1 1 1 0  0  ...&#10;编号 1 的盒子放有最多小球，小球数量为 2 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>lowLimit = 5, highLimit = 15&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;盒子编号：1 2 3 4 5 6 7 8 9 10 11 ...&#10;小球数量：1 1 1 1 2 2 1 1 1 0  0  ...&#10;编号 5 和 6 的盒子放有最多小球，每个盒子中的小球数量都是 2 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>lowLimit = 19, highLimit = 28&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;盒子编号：1 2 3 4 5 6 7 8 9 10 11 12 ...&#10;小球数量：0 1 1 1 1 1 1 1 1 2  0  0  ...&#10;编号 10 的盒子放有最多小球，小球数量为 2 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= lowLimit &lt;= highLimit &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>盒子编号为各位数字之和。编号不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，数位和小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>50</mn>
</math></span>，可开定长计数数组。</p>
<p>枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">lowLimit</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">highLimit</mtext>
  <mo stretchy="false">]</mo>
</math></span>，累加数位后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mo>+</mo>
</math></span>，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 的最大值。</p>
</blockquote>
<p>观察题目的数据范围，小球的编号最大不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，那么每个编号的各个位数之和的最大值小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>50</mn>
</math></span>。因此，我们可以直接开一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>50</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 来统计每个编号的各个位数之和的数量。</p>
<p>答案就是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 中的最大值。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msub>
    <mi>log</mi>
    <mrow data-mjx-texclass="ORD">
      <mn>10</mn>
    </mrow>
  </msub>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">highLimit</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">lowLimit</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">highLimit</mtext>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countBalls(lowLimit int, highLimit int) (ans int) {</span></span>
<span class="line"><span>	cnt := [50]int{}</span></span>
<span class="line"><span>	for i := lowLimit; i &#x3C;= highLimit; i++ {</span></span>
<span class="line"><span>		y := 0</span></span>
<span class="line"><span>		for x := i; x > 0; x /= 10 {</span></span>
<span class="line"><span>			y += x % 10</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt[y]++</span></span>
<span class="line"><span>		if ans &#x3C; cnt[y] {</span></span>
<span class="line"><span>			ans = cnt[y]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-balls-in-a-box" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1742.Maximum%20Number%20of%20Balls%20in%20a%20Box/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1759" tabindex="-1">1759. 统计同质子字符串的数目 <a class="header-anchor" href="#q-1759" aria-label="Permalink to &quot;1759. 统计同质子字符串的数目 {#q-1759}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> ，返回<em> </em><code>s</code><em> </em>中 <strong>同质子字符串</strong> 的数目。由于答案可能很大，只需返回对 <code>10<sup>9</sup> + 7</code> <strong>取余 </strong>后的结果。</p>&#10;&#10;<p><strong>同质字符串</strong> 的定义为：如果一个字符串中的所有字符都相同，那么该字符串就是同质字符串。</p>&#10;&#10;<p><strong>子字符串</strong> 是字符串中的一个连续字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abbcccaa&quot;&#10;<strong>输出：</strong>13&#10;<strong>解释：</strong>同质子字符串如下所列：&#10;&quot;a&quot;   出现 3 次。&#10;&quot;aa&quot;  出现 1 次。&#10;&quot;b&quot;   出现 2 次。&#10;&quot;bb&quot;  出现 1 次。&#10;&quot;c&quot;   出现 3 次。&#10;&quot;cc&quot;  出现 2 次。&#10;&quot;ccc&quot; 出现 1 次。&#10;3 + 1 + 2 + 1 + 3 + 2 + 1 = 13</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;xy&quot;&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>同质子字符串是 &quot;x&quot; 和 &quot;y&quot; 。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;zzzzz&quot;&#10;<strong>输出：</strong>15&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 由小写字符串组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同构子串必落在一段连续相同字符内。长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 的段贡献 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，按段扫描即可。</p>
<p>双指针圈出每段，累加三角形数并对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
</blockquote>
<p>遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，用指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 指向当前字符，指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 指向下一个不同的字符，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 区间内的字符都是相同的，假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>，那么该区间内的同构子字符串个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mo stretchy="false">(</mo>
      <mn>1</mn>
      <mo>+</mo>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
      <mo stretchy="false">)</mo>
      <mo>&#xD7;</mo>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，将其累加到答案中即可。继续遍历，直到指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 到达字符串末尾。</p>
<p>遍历完字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 后，返回答案即可。注意答案的取模操作。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countHomogenous(s string) (ans int) {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	for i, j := 0, 0; i &#x3C; n; i = j {</span></span>
<span class="line"><span>		j = i</span></span>
<span class="line"><span>		for j &#x3C; n &#x26;&#x26; s[j] == s[i] {</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt := j - i</span></span>
<span class="line"><span>		ans += (1 + cnt) * cnt / 2</span></span>
<span class="line"><span>		ans %= mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一按段整段求和。也可线性扫：相邻相同则段长加一，否则重置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并把当前段长加入答案。避免显式求段边界。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countHomogenous(s string) int {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	ans, cnt := 1, 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if s[i] == s[i-1] {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			cnt = 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = (ans + cnt) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-number-of-homogenous-substrings" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1759.Count%20Number%20of%20Homogenous%20Substrings/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1780" tabindex="-1">1780. 判断一个数字是否可以表示成三的幂的和 <a class="header-anchor" href="#q-1780" aria-label="Permalink to &quot;1780. 判断一个数字是否可以表示成三的幂的和 {#q-1780}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>n</code> ，如果你可以将 <code>n</code> 表示成若干个不同的三的幂之和，请你返回 <code>true</code> ，否则请返回 <code>false</code> 。</p>&#10;&#10;<p>对于一个整数 <code>y</code> ，如果存在整数 <code>x</code> 满足 <code>y == 3<sup>x</sup></code> ，我们称这个整数 <code>y</code> 是三的幂。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 12&#10;<b>输出：</b>true&#10;<b>解释：</b>12 = 3<sup>1</sup> + 3<sup>2</sup>&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 91&#10;<b>输出：</b>true&#10;<b>解释：</b>91 = 3<sup>0</sup> + 3<sup>2</sup> + 3<sup>4</sup>&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 21&#10;<b>输出：</b>false&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>7</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学分析 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 能否写成若干互异三的幂之和。这等价于三进制里每一位只能是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，不能出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。</p>
<p>反复取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>3</mn>
</math></span>，若余数大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 则失败，否则整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 继续，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们发现，如果一个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可以表示成若干个“不同的”三的幂之和，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的三进制表示中，每一位上的数字只能是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>因此，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 转换成三进制，然后判断每一位上的数字是否是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。如果不是，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 就不可以表示成若干个三的幂之和，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">false</mtext>
</math></span>；否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可以表示成若干个三的幂之和，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>log</mi>
    <mn>3</mn>
  </msub>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func checkPowersOfThree(n int) bool {</span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		if n%3 > 1 {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		n /= 3</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-if-number-is-a-sum-of-powers-of-three" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1780.Check%20if%20Number%20is%20a%20Sum%20of%20Powers%20of%20Three/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1806" tabindex="-1">1806. 还原排列的最少操作步数 <a class="header-anchor" href="#q-1806" aria-label="Permalink to &quot;1806. 还原排列的最少操作步数 {#q-1806}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个偶数 <code>n</code>​​​​​​ ，已知存在一个长度为 <code>n</code> 的排列 <code>perm</code> ，其中 <code>perm[i] == i</code>​（下标 <strong>从 0 开始</strong> 计数）。</p>&#10;&#10;<p>一步操作中，你将创建一个新数组 <code>arr</code> ，对于每个 <code>i</code> ：</p>&#10;&#10;<ul>&#10;	<li>如果 <code>i % 2 == 0</code> ，那么 <code>arr[i] = perm[i / 2]</code></li>&#10;	<li>如果 <code>i % 2 == 1</code> ，那么 <code>arr[i] = perm[n / 2 + (i - 1) / 2]</code></li>&#10;</ul>&#10;&#10;<p>然后将 <code>arr</code>​​ 赋值​​给 <code>perm</code> 。</p>&#10;&#10;<p>要想使 <code>perm</code> 回到排列初始值，至少需要执行多少步操作？返回最小的 <strong>非零</strong> 操作步数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>最初，perm = [0,1]&#10;第 1 步操作后，perm = [0,1]&#10;所以，仅需执行 1 步操作</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 4&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>最初，perm = [0,1,2,3]&#10;第 1 步操作后，perm = [0,2,1,3]&#10;第 2 步操作后，perm = [0,1,2,3]&#10;所以，仅需执行 2 步操作</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 6&#10;<strong>输出：</strong>4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n &lt;= 1000</code></li>&#10;	<li><code>n</code>​​​​​​ 是一个偶数</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：找规律 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次操作把前半段映射到偶数下标、后半段映射到奇数下标，问最少几次回到初始排列。若完整模拟整个数组，单轮为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，轮数最坏也是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 量级，虽然可通过，但不必维护全部位置。</p>
<p>一次操作对每个下标的映射是固定的，除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 外任意位置回到原处即意味着整个排列复原。跟踪下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>：落在前半则变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x226A;</mo>
  <mn>1</mn>
</math></span>，否则变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x226B;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
  <mo>&#x226A;</mo>
  <mn>1</mn>
  <mo>&#x2223;</mo>
  <mn>1</mn>
</math></span>，直至再次等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，步数即为答案。</p>
</blockquote>
<p>我们观察数字的变化规律，发现：</p>
<ol>
<li>新数组的偶数位数字依次是原数组的前半段数字；</li>
<li>新数组的奇数位数字依次是原数组的后半段数字。</li>
</ol>
<p>即，如果原数组的某个数字下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 在 <code v-pre>[0, n &gt;&gt; 1)</code> 范围内，那么这个数字的新下标就是 <code v-pre>i &lt;&lt; 1</code>；否则，新下标就是 <code v-pre>(i - (n &gt;&gt; 1)) &lt;&lt; 1 | 1</code>。</p>
<p>另外，每一轮操作，数字移动的路径都是一样的，只要有一个数字（数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 除外）回到了它原来的位置，那么整个序列就和之前的一致了。</p>
<p>因此，我们选择数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，初始时下标也是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，每次将数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 移动到新的位置，直到数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 回到原来的位置，就可以得到最小的操作次数。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func reinitializePermutation(n int) (ans int) {</span></span>
<span class="line"><span>	for i := 1; ; {</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		if i &#x3C; (n >> 1) {</span></span>
<span class="line"><span>			i &#x3C;&#x3C;= 1</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			i = (i-(n>>1))&#x3C;&#x3C;1 | 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if i == 1 {</span></span>
<span class="line"><span>			return ans</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-number-of-operations-to-reinitialize-a-permutation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1806.Minimum%20Number%20of%20Operations%20to%20Reinitialize%20a%20Permutation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1808" tabindex="-1">1808. 好因子的最大数目 <a class="header-anchor" href="#q-1808" aria-label="Permalink to &quot;1808. 好因子的最大数目 {#q-1808}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：递归、数学、数论</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数 <code>primeFactors</code> 。你需要构造一个正整数 <code>n</code> ，它满足以下条件：</p>&#10;&#10;<ul>&#10;	<li><code>n</code> 质因数（质因数需要考虑重复的情况）的数目 <strong>不超过 </strong><code>primeFactors</code> 个。</li>&#10;	<li><code>n</code> 好因子的数目最大化。如果 <code>n</code> 的一个因子可以被 <code>n</code> 的每一个质因数整除，我们称这个因子是 <strong>好因子</strong> 。比方说，如果 <code>n = 12</code> ，那么它的质因数为 <code>[2,2,3]</code> ，那么 <code>6</code> 和 <code>12</code> 是好因子，但 <code>3</code> 和 <code>4</code> 不是。</li>&#10;</ul>&#10;&#10;<p>请你返回 <code>n</code> 的好因子的数目。由于答案可能会很大，请返回答案对 <code>10<sup>9</sup> + 7</code> <b>取余</b> 的结果。</p>&#10;&#10;<p>请注意，一个质数的定义是大于 <code>1</code> ，且不能被分解为两个小于该数的自然数相乘。一个数 <code>n</code> 的质因子是将 <code>n</code> 分解为若干个质因子，且它们的乘积为 <code>n</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>primeFactors = 5&#10;<strong>输出：</strong>6&#10;<b>解释：</b>200 是一个可行的 n 。&#10;它有 5 个质因子：[2,2,2,5,5] ，且有 6 个好因子：[10,20,40,50,100,200] 。&#10;不存在别的 n 有至多 5 个质因子，且同时有更多的好因子。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>primeFactors = 8&#10;<b>输出：</b>18&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= primeFactors &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：问题转换 + 快速幂 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>好因子必须含全部质因子各至少一次，其个数等于各质因子指数的乘积，且指数之和不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">primeFactors</mtext>
</math></span>。直接枚举分拆方案的数量随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 增长过快。</p>
<p>问题化为：把整数拆成若干正整数使乘积最大。由整数拆分的经典结论，应尽量拆成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，并避开单独的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>（余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 时改为两个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>）。对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&lt;</mo>
  <mn>4</mn>
</math></span> 直接返回；否则按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>3</mn>
</math></span> 分类，用快速幂计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的幂并对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
</blockquote>
<p>我们可以将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 进行质因数分解，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <msubsup>
    <mi>a</mi>
    <mn>1</mn>
    <mrow data-mjx-texclass="ORD">
      <msub>
        <mi>k</mi>
        <mn>1</mn>
      </msub>
    </mrow>
  </msubsup>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>a</mi>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <msub>
        <mi>k</mi>
        <mn>2</mn>
      </msub>
    </mrow>
  </msubsup>
  <mo>&#xD7;</mo>
  <mo>&#x22EF;</mo>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>a</mi>
    <mi>m</mi>
    <mrow data-mjx-texclass="ORD">
      <msub>
        <mi>k</mi>
        <mi>m</mi>
      </msub>
    </mrow>
  </msubsup>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mi>i</mi>
  </msub>
</math></span> 为质因子，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>k</mi>
    <mi>i</mi>
  </msub>
</math></span> 为质因子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mi>i</mi>
  </msub>
</math></span> 的指数。由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的质因子个数不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>F</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 个，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>k</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>k</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <msub>
    <mi>k</mi>
    <mi>m</mi>
  </msub>
  <mo>&#x2264;</mo>
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>F</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span>。</p>
<p>而根据题意描述，我们知道 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的好因子要满足能被所有的质因子整除，也即是说 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的好因子需要包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <mo>&#xD7;</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>&#xD7;</mo>
  <mo>&#x22EF;</mo>
  <mo>&#xD7;</mo>
  <msub>
    <mi>a</mi>
    <mi>m</mi>
  </msub>
</math></span> 作为因数。那么好因子的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <msub>
    <mi>k</mi>
    <mn>1</mn>
  </msub>
  <mo>&#xD7;</mo>
  <msub>
    <mi>k</mi>
    <mn>2</mn>
  </msub>
  <mo>&#xD7;</mo>
  <mo>&#x22EF;</mo>
  <mo>&#xD7;</mo>
  <msub>
    <mi>k</mi>
    <mi>m</mi>
  </msub>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>k</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>k</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <msub>
    <mi>k</mi>
    <mi>m</mi>
  </msub>
</math></span> 的乘积。要最大化好因子的个数，也即是说我们要将 <code v-pre>primeFactors</code> 拆分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>k</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>k</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <msub>
    <mi>k</mi>
    <mi>m</mi>
  </msub>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>k</mi>
    <mn>1</mn>
  </msub>
  <mo>&#xD7;</mo>
  <msub>
    <mi>k</mi>
    <mn>2</mn>
  </msub>
  <mo>&#xD7;</mo>
  <mo>&#x22EF;</mo>
  <mo>&#xD7;</mo>
  <msub>
    <mi>k</mi>
    <mi>m</mi>
  </msub>
</math></span> 最大。因此问题转换为：将整数 <code v-pre>primeFactors</code> 拆分成若干个整数的乘积，使得乘积最大。</p>
<p>接下来，我们只需要分情况讨论。</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>F</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo>&lt;</mo>
  <mn>4</mn>
</math></span>，那么直接返回 <code v-pre>primeFactors</code> 即可。</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>F</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的倍数，那么我们将 <code v-pre>primeFactors</code> 拆分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的倍数个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>3</mn>
    <mrow data-mjx-texclass="ORD">
      <mfrac>
        <mrow>
          <mi>p</mi>
          <mi>r</mi>
          <mi>i</mi>
          <mi>m</mi>
          <mi>e</mi>
          <mi>F</mi>
          <mi>a</mi>
          <mi>c</mi>
          <mi>t</mi>
          <mi>o</mi>
          <mi>r</mi>
          <mi>s</mi>
        </mrow>
        <mn>3</mn>
      </mfrac>
    </mrow>
  </msup>
</math></span>。</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>F</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，那么我们将 <code v-pre>primeFactors</code> 拆分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>p</mi>
      <mi>r</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>e</mi>
      <mi>F</mi>
      <mi>a</mi>
      <mi>c</mi>
      <mi>t</mi>
      <mi>o</mi>
      <mi>r</mi>
      <mi>s</mi>
    </mrow>
    <mn>3</mn>
  </mfrac>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，再乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>3</mn>
    <mrow data-mjx-texclass="ORD">
      <mfrac>
        <mrow>
          <mi>p</mi>
          <mi>r</mi>
          <mi>i</mi>
          <mi>m</mi>
          <mi>e</mi>
          <mi>F</mi>
          <mi>a</mi>
          <mi>c</mi>
          <mi>t</mi>
          <mi>o</mi>
          <mi>r</mi>
          <mi>s</mi>
        </mrow>
        <mn>3</mn>
      </mfrac>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>&#xD7;</mo>
  <mn>4</mn>
</math></span>。</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>F</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>t</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，那么我们将 <code v-pre>primeFactors</code> 拆分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>p</mi>
      <mi>r</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>e</mi>
      <mi>F</mi>
      <mi>a</mi>
      <mi>c</mi>
      <mi>t</mi>
      <mi>o</mi>
      <mi>r</mi>
      <mi>s</mi>
    </mrow>
    <mn>3</mn>
  </mfrac>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，再乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>3</mn>
    <mrow data-mjx-texclass="ORD">
      <mfrac>
        <mrow>
          <mi>p</mi>
          <mi>r</mi>
          <mi>i</mi>
          <mi>m</mi>
          <mi>e</mi>
          <mi>F</mi>
          <mi>a</mi>
          <mi>c</mi>
          <mi>t</mi>
          <mi>o</mi>
          <mi>r</mi>
          <mi>s</mi>
        </mrow>
        <mn>3</mn>
      </mfrac>
    </mrow>
  </msup>
  <mo>&#xD7;</mo>
  <mn>2</mn>
</math></span>。</li>
</ul>
<p>以上过程中，我们利用快速幂取模求解。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxNiceDivisors(primeFactors int) int {</span></span>
<span class="line"><span>	if primeFactors &#x3C; 4 {</span></span>
<span class="line"><span>		return primeFactors</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	qpow := func(a, n int) int {</span></span>
<span class="line"><span>		ans := 1</span></span>
<span class="line"><span>		for ; n > 0; n >>= 1 {</span></span>
<span class="line"><span>			if n&#x26;1 == 1 {</span></span>
<span class="line"><span>				ans = ans * a % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			a = a * a % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if primeFactors%3 == 0 {</span></span>
<span class="line"><span>		return qpow(3, primeFactors/3)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if primeFactors%3 == 1 {</span></span>
<span class="line"><span>		return qpow(3, primeFactors/3-1) * 4 % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return qpow(3, primeFactors/3) * 2 % mod</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximize-number-of-nice-divisors" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1808.Maximize%20Number%20of%20Nice%20Divisors/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1812" tabindex="-1">1812. 判断国际象棋棋盘中一个格子的颜色 <a class="header-anchor" href="#q-1812" aria-label="Permalink to &quot;1812. 判断国际象棋棋盘中一个格子的颜色 {#q-1812}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个坐标 <code>coordinates</code> ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1800-1899/1812.Determine%20Color%20of%20a%20Chessboard%20Square/images/chessboard.png" loading="lazy"></p>&#10;&#10;<p>如果所给格子的颜色是白色，请你返回 <code>true</code>，如果是黑色，请返回 <code>false</code> 。</p>&#10;&#10;<p>给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>coordinates = &quot;a1&quot;&#10;<b>输出：</b>false&#10;<b>解释：</b>如上图棋盘所示，&quot;a1&quot; 坐标的格子是黑色的，所以返回 false 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>coordinates = &quot;h3&quot;&#10;<b>输出：</b>true&#10;<b>解释：</b>如上图棋盘所示，&quot;h3&quot; 坐标的格子是白色的，所以返回 true 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>coordinates = &quot;c7&quot;&#10;<b>输出：</b>false&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>coordinates.length == 2</code></li>&#10;	<li><code>'a' &lt;= coordinates[0] &lt;= 'h'</code></li>&#10;	<li><code>'1' &lt;= coordinates[1] &lt;= '8'</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：找规律 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>国际象棋棋盘黑白相间，给定坐标判断是否为白格。若按行画出整盘再查表，对单次查询并无必要。</p>
<p>相邻格颜色相反，等价于行号与列号之和的奇偶性交替。把字母与数字转成整数后相加，奇则为白、偶则为黑，常数时间即可判定。</p>
</blockquote>
<p>观察棋盘我们发现，颜色相同的两个格子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span> 均为奇数或偶数。</p>
<p>因此，我们可以根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">coordinates</mtext>
</math></span> 获取对应的坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 为奇数，则格子为白色，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">false</mtext>
</math></span>。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func squareIsWhite(coordinates string) bool {</span></span>
<span class="line"><span>	return (coordinates[0]+coordinates[1])%2 == 1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/determine-color-of-a-chessboard-square" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1812.Determine%20Color%20of%20a%20Chessboard%20Square/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1814" tabindex="-1">1814. 统计一个数组中好对子的数目 <a class="header-anchor" href="#q-1814" aria-label="Permalink to &quot;1814. 统计一个数组中好对子的数目 {#q-1814}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个数组 <code>nums</code> ，数组中只包含非负整数。定义 <code>rev(x)</code> 的值为将整数 <code>x</code> 各个数字位反转得到的结果。比方说 <code>rev(123) = 321</code> ， <code>rev(120) = 21</code> 。我们称满足下面条件的下标对 <code>(i, j)</code> 是 <strong>好的</strong> ：</p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= i &lt; j &lt; nums.length</code></li>&#10;	<li><code>nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])</code></li>&#10;</ul>&#10;&#10;<p>请你返回好下标对的数目。由于结果可能会很大，请将结果对 <code>10<sup>9</sup> + 7</code> <b>取余</b> 后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [42,11,1,97]&#10;<b>输出：</b>2&#10;<b>解释：</b>两个坐标对为：&#10; - (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。&#10; - (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [13,10,35,24,76]&#10;<b>输出：</b>4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：式子变换 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>好数对满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。直接枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 再计算翻转，时间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，无法通过。</p>
<p>移项后条件变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。对每个数计算该差值并计数，答案即各差值出现次数的组合数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mo>,</mo>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
</math></span>，再对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
</blockquote>
<p>对于下标对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果满足条件，那么有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>因此，我们可以将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span> 作为哈希表的键，统计每个键出现的次数。最后计算每个键对应的值的组合数，相加得到最终的答案。</p>
<p>注意答案的取模操作。</p>
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
</math></span> 分别是数组 <code v-pre>nums</code> 的长度和数组 <code v-pre>nums</code> 中的最大值。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countNicePairs(nums []int) (ans int) {</span></span>
<span class="line"><span>	rev := func(x int) (y int) {</span></span>
<span class="line"><span>		for ; x > 0; x /= 10 {</span></span>
<span class="line"><span>			y = y*10 + x%10</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		y := x - rev(x)</span></span>
<span class="line"><span>		cnt[y]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	for _, v := range cnt {</span></span>
<span class="line"><span>		ans = (ans + v*(v-1)/2) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一先完整计数再求组合数，需要两次遍历哈希表。本题只需无序对数目，可以在从左到右扫描时，用当前差值已经出现的次数累加答案，再把该差值写入表中，避免事后再算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mo>,</mo>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countNicePairs(nums []int) (ans int) {</span></span>
<span class="line"><span>	rev := func(x int) (y int) {</span></span>
<span class="line"><span>		for ; x > 0; x /= 10 {</span></span>
<span class="line"><span>			y = y*10 + x%10</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		y := x - rev(x)</span></span>
<span class="line"><span>		ans = (ans + cnt[y]) % mod</span></span>
<span class="line"><span>		cnt[y]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-nice-pairs-in-an-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1814.Count%20Nice%20Pairs%20in%20an%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1819" tabindex="-1">1819. 序列中不同最大公约数的数目 <a class="header-anchor" href="#q-1819" aria-label="Permalink to &quot;1819. 序列中不同最大公约数的数目 {#q-1819}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、计数、最大公约数、数论、欧几里得算法</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个由正整数组成的数组 <code>nums</code> 。</p>&#10;&#10;<p>数字序列的 <strong>最大公约数</strong> 定义为序列中所有整数的共有约数中的最大整数。</p>&#10;&#10;<ul>&#10;	<li>例如，序列 <code>[4,6,16]</code> 的最大公约数是 <code>2</code> 。</li>&#10;</ul>&#10;&#10;<p>数组的一个 <strong>子序列</strong> 本质是一个序列，可以通过删除数组中的某些元素（或者不删除）得到。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>[2,5,10]</code> 是 <code>[1,2,1,<strong>2</strong>,4,1,<strong>5</strong>,<strong>10</strong>]</code> 的一个子序列。</li>&#10;</ul>&#10;&#10;<p>计算并返回 <code>nums</code> 的所有 <strong>非空</strong> 子序列中 <strong>不同</strong> 最大公约数的 <strong>数目</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1800-1899/1819.Number%20of%20Different%20Subsequences%20GCDs/images/image-1.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>nums = [6,10,3]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>上图显示了所有的非空子序列与各自的最大公约数。&#10;不同的最大公约数为 6 、10 、3 、2 和 1 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,15,40,5,6]&#10;<strong>输出：</strong>7&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 2 * 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + 数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子序列的 GCD 种类数最多不超过数组最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，但子序列有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 个， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能枚举。</p>
<p>一个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 能成为某子序列的 GCD，当且仅当数组中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的若干倍数的 GCD 恰好为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 枚举其倍数并累积 gcd，一旦得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 即可计数并停止。倍数枚举的调和级数总复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>对于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的所有子序列，其最大公约数一定不超过数组中的最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。</p>
<p>因此我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的每个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是否为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的子序列的最大公约数，如果是，则答案加一。</p>
<p>那么问题转换为：判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是否为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的子序列的最大公约数。我们可以通过枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的倍数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 是否在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中，则计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的最大公约数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，如果出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo>=</mo>
  <mi>x</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的子序列的最大公约数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>M</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countDifferentSubsequenceGCDs(nums []int) (ans int) {</span></span>
<span class="line"><span>	mx := slices.Max(nums)</span></span>
<span class="line"><span>	vis := make([]bool, mx+1)</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		vis[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x := 1; x &#x3C;= mx; x++ {</span></span>
<span class="line"><span>		g := 0</span></span>
<span class="line"><span>		for y := x; y &#x3C;= mx; y += x {</span></span>
<span class="line"><span>			if vis[y] {</span></span>
<span class="line"><span>				g = gcd(g, y)</span></span>
<span class="line"><span>				if g == x {</span></span>
<span class="line"><span>					ans++</span></span>
<span class="line"><span>					break</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func gcd(a, b int) int {</span></span>
<span class="line"><span>	if b == 0 {</span></span>
<span class="line"><span>		return a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return gcd(b, a%b)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-different-subsequences-gcds" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1819.Number%20of%20Different%20Subsequences%20GCDs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1822" tabindex="-1">1822. 数组元素积的符号 <a class="header-anchor" href="#q-1822" aria-label="Permalink to &quot;1822. 数组元素积的符号 {#q-1822}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>已知函数 <code>signFunc(x)</code> 将会根据 <code>x</code> 的正负返回特定值：</p>&#10;&#10;<ul>&#10;	<li>如果 <code>x</code> 是正数，返回 <code>1</code> 。</li>&#10;	<li>如果 <code>x</code> 是负数，返回 <code>-1</code> 。</li>&#10;	<li>如果 <code>x</code> 是等于 <code>0</code> ，返回 <code>0</code> 。</li>&#10;</ul>&#10;&#10;<p>给你一个整数数组 <code>nums</code> 。令 <code>product</code> 为数组 <code>nums</code> 中所有元素值的乘积。</p>&#10;&#10;<p>返回 <code>signFunc(product)</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [-1,-2,-3,-4,3,2,1]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>数组中所有值的乘积是 144 ，且 signFunc(144) = 1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,5,0,2,-3]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>数组中所有值的乘积是 0 ，且 signFunc(0) = 0&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [-1,1,-1,1,-1]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>数组中所有值的乘积是 -1 ，且 signFunc(-1) = -1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：直接遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>乘积的符号只取决于是否出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 以及负数的个数。若先算出全部乘积再取符号，中间结果可能溢出。</p>
<p>从左到右维护符号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，遇 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 立即返回，遇负数则翻转 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。遍历结束即得乘积符号，全程使用常数空间且无需乘法。</p>
</blockquote>
<p>题目要求返回数组元素乘积的符号，即正数返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，负数返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>， 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>我们可以定义一个答案变量 <code v-pre>ans</code>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>然后遍历数组每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 为负数，则将 <code v-pre>ans</code> 乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则提前返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>遍历结束后，返回 <code v-pre>ans</code> 即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func arraySign(nums []int) int {</span></span>
<span class="line"><span>	ans := 1</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		if v == 0 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v &#x3C; 0 {</span></span>
<span class="line"><span>			ans *= -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sign-of-the-product-of-an-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1822.Sign%20of%20the%20Product%20of%20an%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1828" tabindex="-1">1828. 统计一个圆中点的数目 <a class="header-anchor" href="#q-1828" aria-label="Permalink to &quot;1828. 统计一个圆中点的数目 {#q-1828}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个数组 <code>points</code> ，其中 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> ，表示第 <code>i</code> 个点在二维平面上的坐标。多个点可能会有 <strong>相同</strong> 的坐标。</p>&#10;&#10;<p>同时给你一个数组 <code>queries</code> ，其中 <code>queries[j] = [x<sub>j</sub>, y<sub>j</sub>, r<sub>j</sub>]</code> ，表示一个圆心在 <code>(x<sub>j</sub>, y<sub>j</sub>)</code> 且半径为 <code>r<sub>j</sub></code><sub> </sub>的圆。</p>&#10;&#10;<p>对于每一个查询 <code>queries[j]</code> ，计算在第 <code>j</code> 个圆 <strong>内</strong> 点的数目。如果一个点在圆的 <strong>边界上</strong> ，我们同样认为它在圆 <strong>内</strong> 。</p>&#10;&#10;<p>请你返回一个数组<em> </em><code>answer</code> ，其中<em> </em><code>answer[j]</code>是第 <code>j</code> 个查询的答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1800-1899/1828.Queries%20on%20Number%20of%20Points%20Inside%20a%20Circle/images/chrome_2021-03-25_22-34-16.png" loading="lazy">&#10;<pre><b>输入：</b>points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]&#10;<b>输出：</b>[3,2,2]&#10;<b>解释：</b>所有的点和圆如上图所示。&#10;queries[0] 是绿色的圆，queries[1] 是红色的圆，queries[2] 是蓝色的圆。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1800-1899/1828.Queries%20on%20Number%20of%20Points%20Inside%20a%20Circle/images/chrome_2021-03-25_22-42-07.png" loading="lazy">&#10;<pre><b>输入：</b>points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]&#10;<b>输出：</b>[2,3,2,4]&#10;<b>解释：</b>所有的点和圆如上图所示。&#10;queries[0] 是绿色的圆，queries[1] 是红色的圆，queries[2] 是蓝色的圆，queries[3] 是紫色的圆。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= points.length &lt;= 500</code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>0 &lt;= x<sub>​​​​​​i</sub>, y<sub>​​​​​​i</sub> &lt;= 500</code></li>&#10;	<li><code>1 &lt;= queries.length &lt;= 500</code></li>&#10;	<li><code>queries[j].length == 3</code></li>&#10;	<li><code>0 &lt;= x<sub>j</sub>, y<sub>j</sub> &lt;= 500</code></li>&#10;	<li><code>1 &lt;= r<sub>j</sub> &lt;= 500</code></li>&#10;	<li>所有的坐标都是整数。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个询问圆统计有多少给定点落在圆内。点数与询问数均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>500</mn>
</math></span>，平方距离判断为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，双重枚举即可。</p>
<p>不必建空间索引：对每个圆遍历全部点，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <mi>d</mi>
  <msup>
    <mi>y</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2264;</mo>
  <msup>
    <mi>r</mi>
    <mn>2</mn>
  </msup>
</math></span> 避免开方。总时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 符合约束。</p>
</blockquote>
<p>枚举所有的圆点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
</math></span>，对于每个圆点，计算在圆内的点的个数，即可得到答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为数组 <code v-pre>queries</code> 的长度和 <code v-pre>points</code> 的长度。忽略答案的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countPoints(points [][]int, queries [][]int) (ans []int) {</span></span>
<span class="line"><span>	for _, q := range queries {</span></span>
<span class="line"><span>		x, y, r := q[0], q[1], q[2]</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for _, p := range points {</span></span>
<span class="line"><span>			i, j := p[0], p[1]</span></span>
<span class="line"><span>			dx, dy := i-x, j-y</span></span>
<span class="line"><span>			if dx*dx+dy*dy &#x3C;= r*r {</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, cnt)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1828.Queries%20on%20Number%20of%20Points%20Inside%20a%20Circle/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1830" tabindex="-1">1830. 使字符串有序的最少操作次数 <a class="header-anchor" href="#q-1830" aria-label="Permalink to &quot;1830. 使字符串有序的最少操作次数 {#q-1830}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、数学、字符串、组合数学、计数、费马小定理</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> （<strong>下标从 0 开始</strong>）。你需要对 <code>s</code> 执行以下操作直到它变为一个有序字符串：</p>&#10;&#10;<ol>&#10;	<li>找到 <strong>最大下标</strong> <code>i</code> ，使得 <code>1 &lt;= i &lt; s.length</code> 且 <code>s[i] &lt; s[i - 1]</code> 。</li>&#10;	<li>找到 <strong>最大下标</strong> <code>j</code> ，使得 <code>i &lt;= j &lt; s.length</code> 且对于所有在闭区间 <code>[i, j]</code> 之间的 <code>k</code> 都有 <code>s[k] &lt; s[i - 1]</code> 。</li>&#10;	<li>交换下标为 <code>i - 1</code>​​​​ 和 <code>j</code>​​​​ 处的两个字符。</li>&#10;	<li>将下标 <code>i</code> 开始的字符串后缀反转。</li>&#10;</ol>&#10;&#10;<p>请你返回将字符串变成有序的最少操作次数。由于答案可能会很大，请返回它对 <code>10<sup>9</sup> + 7</code> <strong>取余</strong> 的结果。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>s = &quot;cba&quot;&#10;<b>输出：</b>5&#10;<b>解释：</b>模拟过程如下所示：&#10;操作 1：i=2，j=2。交换 s[1] 和 s[2] 得到 s=&quot;cab&quot; ，然后反转下标从 2 开始的后缀字符串，得到 s=&quot;cab&quot; 。&#10;操作 2：i=1，j=2。交换 s[0] 和 s[2] 得到 s=&quot;bac&quot; ，然后反转下标从 1 开始的后缀字符串，得到 s=&quot;bca&quot; 。&#10;操作 3：i=2，j=2。交换 s[1] 和 s[2] 得到 s=&quot;bac&quot; ，然后反转下标从 2 开始的后缀字符串，得到 s=&quot;bac&quot; 。&#10;操作 4：i=1，j=1。交换 s[0] 和 s[1] 得到 s=&quot;abc&quot; ，然后反转下标从 1 开始的后缀字符串，得到 s=&quot;acb&quot; 。&#10;操作 5：i=2，j=2。交换 s[1] 和 s[2] 得到 s=&quot;abc&quot; ，然后反转下标从 2 开始的后缀字符串，得到 s=&quot;abc&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>s = &quot;aabaa&quot;&#10;<b>输出：</b>2&#10;<b>解释：</b>模拟过程如下所示：&#10;操作 1：i=3，j=4。交换 s[2] 和 s[4] 得到 s=&quot;aaaab&quot; ，然后反转下标从 3 开始的后缀字符串，得到 s=&quot;aaaba&quot; 。&#10;操作 2：i=4，j=4。交换 s[3] 和 s[4] 得到 s=&quot;aaaab&quot; ，然后反转下标从 4 开始的后缀字符串，得到 s=&quot;aaaab&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>s = &quot;cdbea&quot;&#10;<b>输出：</b>63</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><b>输入：</b>s = &quot;leetcodeleetcodeleetcode&quot;&#10;<b>输出：</b>982157772&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 3000</code></li>&#10;	<li><code>s</code>​ 只包含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 排列组合 + 预处理 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一次操作是变成上一个字典序排列，问要多少次才能变成最小排列，即有多少个排列严格小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2264;</mo>
  <mn>3000</mn>
</math></span>，不能枚举排列。</p>
<p>从左到右看每一位：比 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 更小的字母放在该位时，后面是剩余字母的多重排列。用预处理的阶乘与逆元在模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 下计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>!</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mo data-mjx-texclass="OP">&#x220F;</mo>
  <msub>
    <mi>n</mi>
    <mi>c</mi>
  </msub>
  <mo>!</mo>
</math></span>，再从计数中去掉当前字母。各位贡献之和即为答案。</p>
</blockquote>
<p>题目中的操作实际上是求当前排列的上一个字典序排列，因此，我们只需要求出比当前排列小的排列的数量，就是答案。</p>
<p>这里我们需要考虑一个问题，给定每一种字母的频率，我们可以构造出多少种不同的排列？</p>
<p>假设总共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个字母，其中字母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>n</mi>
    <mn>1</mn>
  </msub>
</math></span> 个，字母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>n</mi>
    <mn>2</mn>
  </msub>
</math></span> 个，字母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>n</mi>
    <mn>3</mn>
  </msub>
</math></span> 个，那么我们可以构造出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>!</mo>
    </mrow>
    <mrow>
      <msub>
        <mi>n</mi>
        <mn>1</mn>
      </msub>
      <mo>!</mo>
      <mo>&#xD7;</mo>
      <msub>
        <mi>n</mi>
        <mn>2</mn>
      </msub>
      <mo>!</mo>
      <mo>&#xD7;</mo>
      <msub>
        <mi>n</mi>
        <mn>3</mn>
      </msub>
      <mo>!</mo>
    </mrow>
  </mfrac>
</math></span> 种不同的排列。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <msub>
    <mi>n</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>n</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>n</mi>
    <mn>3</mn>
  </msub>
</math></span>。</p>
<p>我们可以通过预处理的方式，预先计算出所有的阶乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 和阶乘的逆元 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>。其中阶乘的逆元可以通过费马小定理求得。</p>
<p>接下来，我们从左到右遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，对于每一个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们需要求出当前总共有多少个比 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 小的字母，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。那么，我们可以构造出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mfrac>
    <mrow>
      <mo stretchy="false">(</mo>
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
      <mo>!</mo>
    </mrow>
    <mrow>
      <msub>
        <mi>n</mi>
        <mn>1</mn>
      </msub>
      <mo>!</mo>
      <mo>&#xD7;</mo>
      <msub>
        <mi>n</mi>
        <mn>2</mn>
      </msub>
      <mo>!</mo>
      <mo>&#x22EF;</mo>
      <mo>&#xD7;</mo>
      <msub>
        <mi>n</mi>
        <mi>k</mi>
      </msub>
      <mo>!</mo>
    </mrow>
  </mfrac>
</math></span> 种不同的排列，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为字母的种类数，累加到答案中。接下来，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的频率减一，继续遍历下一个位置。</p>
<p>遍历完整个字符串后，即可得到答案。注意答案的取模操作。</p>
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
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 分别为字符串的长度和字母的种类数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>const n = 3010</span></span>
<span class="line"><span>const mod = 1e9 + 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var f = make([]int, n)</span></span>
<span class="line"><span>var g = make([]int, n)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func qmi(a, k int) int {</span></span>
<span class="line"><span>	res := 1</span></span>
<span class="line"><span>	for k != 0 {</span></span>
<span class="line"><span>		if k&#x26;1 == 1 {</span></span>
<span class="line"><span>			res = res * a % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		k >>= 1</span></span>
<span class="line"><span>		a = a * a % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return res</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>	f[0], g[0] = 1, 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		f[i] = f[i-1] * i % mod</span></span>
<span class="line"><span>		g[i] = qmi(f[i], mod-2)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func makeStringSorted(s string) (ans int) {</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		m := 0</span></span>
<span class="line"><span>		for j := int(c-'a') - 1; j >= 0; j-- {</span></span>
<span class="line"><span>			m += cnt[j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := m * f[len(s)-i-1] % mod</span></span>
<span class="line"><span>		for _, v := range cnt {</span></span>
<span class="line"><span>			t = t * g[v] % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = (ans + t + mod) % mod</span></span>
<span class="line"><span>		cnt[c-'a']--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-number-of-operations-to-make-string-sorted" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1830.Minimum%20Number%20of%20Operations%20to%20Make%20String%20Sorted/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1837" tabindex="-1">1837. K 进制表示下的各位数字总和 <a class="header-anchor" href="#q-1837" aria-label="Permalink to &quot;1837. K 进制表示下的各位数字总和 {#q-1837}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>n</code>（<code>10</code> 进制）和一个基数 <code>k</code> ，请你将 <code>n</code> 从 <code>10</code> 进制表示转换为 <code>k</code> 进制表示，计算并返回转换后各位数字的 <strong>总和</strong> 。</p>&#10;&#10;<p>转换后，各位数字应当视作是 <code>10</code> 进制数字，且它们的总和也应当按 <code>10</code> 进制表示返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 34, k = 6&#10;<strong>输出：</strong>9&#10;<strong>解释：</strong>34 (10 进制) 在 6 进制下表示为 54 。5 + 4 = 9 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 10, k = 10&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>n 本身就是 10 进制。 1 + 0 = 1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>2 &lt;= k &lt;= 10</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 进制下各位数字之和。不必先转成字符串。</p>
<p>反复取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>k</mi>
</math></span> 并整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，把余数累加直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，即按位展开。</p>
</blockquote>
<p>我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 取余，直至为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，余数相加即可得到结果。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>log</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
    </mrow>
  </msub>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func sumBase(n int, k int) (ans int) {</span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		ans += n % k</span></span>
<span class="line"><span>		n /= k</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-of-digits-in-base-k" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1837.Sum%20of%20Digits%20in%20Base%20K/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1840" tabindex="-1">1840. 最高建筑高度 <a class="header-anchor" href="#q-1840" aria-label="Permalink to &quot;1840. 最高建筑高度 {#q-1840}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在一座城市里，你需要建 <code>n</code> 栋新的建筑。这些新的建筑会从 <code>1</code> 到 <code>n</code> 编号排成一列。</p>&#10;&#10;<p>这座城市对这些新建筑有一些规定：</p>&#10;&#10;<ul>&#10;	<li>每栋建筑的高度必须是一个非负整数。</li>&#10;	<li>第一栋建筑的高度 <strong>必须</strong> 是 <code>0</code> 。</li>&#10;	<li>任意两栋相邻建筑的高度差 <strong>不能超过</strong>  <code>1</code> 。</li>&#10;</ul>&#10;&#10;<p>除此以外，某些建筑还有额外的最高高度限制。这些限制会以二维整数数组 <code>restrictions</code> 的形式给出，其中 <code>restrictions[i] = [id<sub>i</sub>, maxHeight<sub>i</sub>]</code> ，表示建筑 <code>id<sub>i</sub></code> 的高度 <strong>不能超过</strong> <code>maxHeight<sub>i</sub></code> 。</p>&#10;&#10;<p>题目保证每栋建筑在 <code>restrictions</code> 中<strong> 至多出现一次</strong> ，同时建筑 <code>1</code> <strong>不会</strong> 出现在 <code>restrictions</code> 中。</p>&#10;&#10;<p>请你返回 <strong>最高</strong> 建筑能达到的 <strong>最高高度</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1800-1899/1840.Maximum%20Building%20Height/images/ic236-q4-ex1-1.png" loading="lazy">&#10;<pre>&#10;<b>输入：</b>n = 5, restrictions = [[2,1],[4,1]]&#10;<b>输出：</b>2&#10;<b>解释：</b>上图中的绿色区域为每栋建筑被允许的最高高度。&#10;我们可以使建筑高度分别为 [0,1,2,1,2] ，最高建筑的高度为 2 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1800-1899/1840.Maximum%20Building%20Height/images/ic236-q4-ex2.png" loading="lazy">&#10;<pre>&#10;<b>输入：</b>n = 6, restrictions = []&#10;<b>输出：</b>5&#10;<b>解释：</b>上图中的绿色区域为每栋建筑被允许的最高高度。&#10;我们可以使建筑高度分别为 [0,1,2,3,4,5] ，最高建筑的高度为 5 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1800-1899/1840.Maximum%20Building%20Height/images/ic236-q4-ex3.png" loading="lazy">&#10;<pre>&#10;<b>输入：</b>n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]&#10;<b>输出：</b>5&#10;<b>解释：</b>上图中的绿色区域为每栋建筑被允许的最高高度。&#10;我们可以使建筑高度分别为 [0,1,2,3,3,4,4,5,4,3] ，最高建筑的高度为 5 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= restrictions.length &lt;= min(n - 1, 10<sup>5</sup>)</code></li>&#10;	<li><code>2 &lt;= id<sub>i</sub> &lt;= n</code></li>&#10;	<li><code>id<sub>i</sub></code> 是 <strong>唯一的</strong> 。</li>&#10;	<li><code>0 &lt;= maxHeight<sub>i</sub> &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>相邻楼高度差至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，若干位置还有上限，求可能出现的最大高度。楼数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，不能逐栋模拟。</p>
<p>限制点把数轴分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span> 段。先按编号排序，再左右各传一遍「高度差不能超过距离」，得到每个限制点的真实上界。两限制点之间最优轮廓先升后降，峰高由两端上界与间距的闭式给出，取最大即可。</p>
</blockquote>
<p>首先，我们将所有的限制条件按照建筑物的编号从小到大排序。</p>
<p>然后我们从左到右遍历所有的限制条件，对于每个限制条件，我们可以得到一个最高高度的上界，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个限制条件，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 分别表示建筑物的编号以及建筑物的最高高度的上界。</p>
<p>然后我们从右到左遍历所有的限制条件，对于每个限制条件，我们可以得到一个最高高度的上界，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>这样，我们就得到了每个限制建筑物的最高高度的上界。</p>
<p>题目求的是最高建筑物的高度，我们可以枚举相邻两个限制条件之间的建筑物 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，要使得高度最大，那么高度应该是先增大后减小，假设最大高度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2264;</mo>
  <mfrac>
    <mrow>
      <msub>
        <mi>r</mi>
        <mi>i</mi>
      </msub>
      <mo stretchy="false">[</mo>
      <mn>1</mn>
      <mo stretchy="false">]</mo>
      <mo>+</mo>
      <msub>
        <mi>r</mi>
        <mrow data-mjx-texclass="ORD">
          <mi>i</mi>
          <mo>+</mo>
          <mn>1</mn>
        </mrow>
      </msub>
      <mo stretchy="false">[</mo>
      <mn>1</mn>
      <mo stretchy="false">]</mo>
      <mo>+</mo>
      <msub>
        <mi>r</mi>
        <mrow data-mjx-texclass="ORD">
          <mi>i</mi>
          <mo>+</mo>
          <mn>1</mn>
        </mrow>
      </msub>
      <mo stretchy="false">[</mo>
      <mn>0</mn>
      <mo stretchy="false">]</mo>
      <mo>&#x2212;</mo>
      <msub>
        <mi>r</mi>
        <mrow data-mjx-texclass="ORD">
          <mi>i</mi>
        </mrow>
      </msub>
      <mo stretchy="false">[</mo>
      <mn>0</mn>
      <mo stretchy="false">]</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，我们取所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中的最大值即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 为限制条件的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxBuilding(n int, restrictions [][]int) (ans int) {</span></span>
<span class="line"><span>	r := restrictions</span></span>
<span class="line"><span>	r = append(r, []int{1, 0})</span></span>
<span class="line"><span>	sort.Slice(r, func(i, j int) bool { return r[i][0] &#x3C; r[j][0] })</span></span>
<span class="line"><span>	if r[len(r)-1][0] != n {</span></span>
<span class="line"><span>		r = append(r, []int{n, n - 1})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m := len(r)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		r[i][1] = min(r[i][1], r[i-1][1]+r[i][0]-r[i-1][0])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := m - 2; i > 0; i-- {</span></span>
<span class="line"><span>		r[i][1] = min(r[i][1], r[i+1][1]+r[i+1][0]-r[i][0])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m-1; i++ {</span></span>
<span class="line"><span>		t := (r[i][1] + r[i+1][1] + r[i+1][0] - r[i][0]) / 2</span></span>
<span class="line"><span>		ans = max(ans, t)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-building-height" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1840.Maximum%20Building%20Height/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1860" tabindex="-1">1860. 增长的内存泄露 <a class="header-anchor" href="#q-1860" aria-label="Permalink to &quot;1860. 增长的内存泄露 {#q-1860}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数 <code>memory1</code> 和 <code>memory2</code> 分别表示两个内存条剩余可用内存的位数。现在有一个程序每秒递增的速度消耗着内存。</p>&#10;&#10;<p>在第 <code>i</code> 秒（秒数从 1 开始），有 <code>i</code> 位内存被分配到 <strong>剩余内存较多</strong> 的内存条（如果两者一样多，则分配到第一个内存条）。如果两者剩余内存都不足 <code>i</code> 位，那么程序将 <b>意外退出</b> 。</p>&#10;&#10;<p>请你返回一个数组，包含<em> </em><code>[crashTime, memory1<sub>crash</sub>, memory2<sub>crash</sub>]</code> ，其中 <code>crashTime</code>是程序意外退出的时间（单位为秒），<em> </em><code>memory1<sub>crash</sub></code><em> </em>和<em> </em><code>memory2<sub>crash</sub></code><em> </em>分别是两个内存条最后剩余内存的位数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>memory1 = 2, memory2 = 2&#10;<b>输出：</b>[3,1,0]&#10;<b>解释：</b>内存分配如下：&#10;- 第 1 秒，内存条 1 被占用 1 位内存。内存条 1 现在有 1 位剩余可用内存。&#10;- 第 2 秒，内存条 2 被占用 2 位内存。内存条 2 现在有 0 位剩余可用内存。&#10;- 第 3 秒，程序意外退出，两个内存条分别有 1 位和 0 位剩余可用内存。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>memory1 = 8, memory2 = 11&#10;<b>输出：</b>[6,0,4]&#10;<b>解释：</b>内存分配如下：&#10;- 第 1 秒，内存条 2 被占用 1 位内存，内存条 2 现在有 10 位剩余可用内存。&#10;- 第 2 秒，内存条 2 被占用 2 位内存，内存条 2 现在有 8 位剩余可用内存。&#10;- 第 3 秒，内存条 1 被占用 3 位内存，内存条 1 现在有 5 位剩余可用内存。&#10;- 第 4 秒，内存条 2 被占用 4 位内存，内存条 2 现在有 4 位剩余可用内存。&#10;- 第 5 秒，内存条 1 被占用 5 位内存，内存条 1 现在有 0 位剩余可用内存。&#10;- 第 6 秒，程序意外退出，两个内存条分别有 0 位和 4 位剩余可用内存。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= memory1, memory2 &lt;= 2<sup>31</sup> - 1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 秒消耗 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 单位内存，优先从当前较大的一根扣除，直到两根都不够。内存可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>31</mn>
    </mrow>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，但消耗是平方增长，秒数约为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <msub>
      <mi>m</mi>
      <mn>1</mn>
    </msub>
    <mo>+</mo>
    <msub>
      <mi>m</mi>
      <mn>2</mn>
    </msub>
  </msqrt>
</math></span>，直接模拟即可。</p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 开始，比较两根剩余量，够则减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 并递增，否则返回当前秒与剩余。</p>
</blockquote>
<p>我们直接模拟内存的分配。</p>
<p>假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 为意外退出的时刻，那么两个内存条一定可以容纳 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 时刻及以前消耗的内存，因此有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>t</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>i</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>t</mi>
      <mo>&#xD7;</mo>
      <mo stretchy="false">(</mo>
      <mi>t</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo>&#x2264;</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span><p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <msub>
      <mi>m</mi>
      <mn>1</mn>
    </msub>
    <mo>+</mo>
    <msub>
      <mi>m</mi>
      <mn>2</mn>
    </msub>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span> 分别为两个内存条的内存大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func memLeak(memory1 int, memory2 int) []int {</span></span>
<span class="line"><span>	i := 1</span></span>
<span class="line"><span>	for ; i &#x3C;= memory1 || i &#x3C;= memory2; i++ {</span></span>
<span class="line"><span>		if memory1 >= memory2 {</span></span>
<span class="line"><span>			memory1 -= i</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			memory2 -= i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return []int{i, memory1, memory2}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/incremental-memory-leak" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1860.Incremental%20Memory%20Leak/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1904" tabindex="-1">1904. 你完成的完整对局数 <a class="header-anchor" href="#q-1904" aria-label="Permalink to &quot;1904. 你完成的完整对局数 {#q-1904}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一款新的在线电子游戏在近期发布，在该电子游戏中，以 <strong>刻钟</strong> 为周期规划若干时长为 <strong>15 分钟</strong> 的游戏对局。这意味着，在 <code>HH:00</code>、<code>HH:15</code>、<code>HH:30</code> 和 <code>HH:45</code> ，将会开始一个新的对局，其中 <code>HH</code> 用一个从 <code>00</code> 到 <code>23</code> 的整数表示。游戏中使用 <strong>24 小时制的时钟</strong> ，所以一天中最早的时间是 <code>00:00</code> ，最晚的时间是 <code>23:59</code> 。</p>&#10;&#10;<p>给你两个字符串 <code>startTime</code> 和 <code>finishTime</code> ，均符合 <code>&quot;HH:MM&quot;</code> 格式，分别表示你 <strong>进入</strong> 和 <strong>退出</strong> 游戏的确切时间，请计算在整个游戏会话期间，你完成的 <strong>完整对局的对局数</strong> 。</p>&#10;&#10;<ul>&#10;	<li>例如，如果 <code>startTime = &quot;05:20&quot;</code> 且 <code>finishTime = &quot;05:59&quot;</code> ，这意味着你仅仅完成从 <code>05:30</code> 到 <code>05:45</code> 这一个完整对局。而你没有完成从 <code>05:15</code> 到 <code>05:30</code> 的完整对局，因为你是在对局开始后进入的游戏；同时，你也没有完成从 <code>05:45</code> 到 <code>06:00</code> 的完整对局，因为你是在对局结束前退出的游戏。</li>&#10;</ul>&#10;&#10;<p>如果 <code>finishTime</code> <strong>早于</strong> <code>startTime</code> ，这表示你玩了个通宵（也就是从 <code>startTime</code> 到午夜，再从午夜到 <code>finishTime</code>）。</p>&#10;&#10;<p>假设你是从 <code>startTime</code> 进入游戏，并在 <code>finishTime</code> 退出游戏，请计算并返回你完成的 <strong>完整对局的对局数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>startTime = &quot;12:01&quot;, finishTime = &quot;12:44&quot;&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>你完成了从 12:15 到 12:30 的一个完整对局。&#10;你没有完成从 12:00 到 12:15 的完整对局，因为你是在对局开始后的 12:01 进入的游戏。&#10;你没有完成从 12:30 到 12:45 的完整对局，因为你是在对局结束前的 12:44 退出的游戏。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>startTime = &quot;20:00&quot;, finishTime = &quot;06:00&quot;&#10;<strong>输出：</strong>40&#10;<strong>解释：</strong>你完成了从 20:00 到 00:00 的 16 个完整的对局，以及从 00:00 到 06:00 的 24 个完整的对局。&#10;16 + 24 = 40&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>startTime = &quot;00:00&quot;, finishTime = &quot;23:59&quot;&#10;<strong>输出：</strong>95&#10;<strong>解释：</strong>除最后一个小时你只完成了 3 个完整对局外，其余每个小时均完成了 4 场完整对局。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>startTime</code> 和 <code>finishTime</code> 的格式为 <code>HH:MM</code></li>&#10;	<li><code>00 &lt;= HH &lt;= 23</code></li>&#10;	<li><code>00 &lt;= MM &lt;= 59</code></li>&#10;	<li><code>startTime</code> 和 <code>finishTime</code> 不相等</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：转换为分钟数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>完整回合对齐到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 分钟整点，直接按字符串比较跨日区间容易出错。将时刻化为当天分钟数后，区间长度至多再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1440</mn>
</math></span>。</p>
<p>登录时刻须向上取整到下一回合起点，登出时刻须向下取整到上一回合终点，二者之差除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 即为完整回合数。</p>
<p>实现上对起点加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>14</mn>
</math></span> 再整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span>，对终点直接整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span>，并与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 取最大，避免登出早于第一个完整回合时得到负数。</p>
</blockquote>
<p>我们可以将输入的字符串转换为分钟数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&gt;</mo>
  <mi>b</mi>
</math></span>，则说明跨越了午夜，需要将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 加上一天的分钟数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1440</mn>
</math></span>。</p>
<p>然后我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 向上取整到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 的倍数，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 向下取整到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 的倍数，最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 的差值即可，注意要取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
</math></span> 中的较大值。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfRounds(loginTime string, logoutTime string) int {</span></span>
<span class="line"><span>	f := func(s string) int {</span></span>
<span class="line"><span>		var h, m int</span></span>
<span class="line"><span>		fmt.Sscanf(s, "%d:%d", &#x26;h, &#x26;m)</span></span>
<span class="line"><span>		return h*60 + m</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b := f(loginTime), f(logoutTime)</span></span>
<span class="line"><span>	if a > b {</span></span>
<span class="line"><span>		b += 1440</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return max(0, b/15-(a+14)/15)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/the-number-of-full-rounds-you-have-played" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1904.The%20Number%20of%20Full%20Rounds%20You%20Have%20Played/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1922" tabindex="-1">1922. 统计好数字的数目 <a class="header-anchor" href="#q-1922" aria-label="Permalink to &quot;1922. 统计好数字的数目 {#q-1922}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：递归、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们称一个数字字符串是 <strong>好数字</strong> 当它满足（下标从 <strong>0</strong> 开始）<strong>偶数</strong> 下标处的数字为 <strong>偶数</strong> 且 <strong>奇数</strong> 下标处的数字为 <strong>质数</strong> （<code>2</code>，<code>3</code>，<code>5</code> 或 <code>7</code>）。</p>&#10;&#10;<ul>&#10;	<li>比方说，<code>&quot;2582&quot;</code> 是好数字，因为偶数下标处的数字（<code>2</code> 和 <code>8</code>）是偶数且奇数下标处的数字（<code>5</code> 和 <code>2</code>）为质数。但 <code>&quot;3245&quot;</code> <strong>不是</strong> 好数字，因为 <code>3</code> 在偶数下标处但不是偶数。</li>&#10;</ul>&#10;&#10;<p>给你一个整数 <code>n</code> ，请你返回长度为 <code>n</code> 且为好数字的数字字符串 <strong>总数</strong> 。由于答案可能会很大，请你将它对<strong> </strong><code>10<sup>9</sup> + 7</code> <strong>取余后返回</strong> 。</p>&#10;&#10;<p>一个 <strong>数字字符串</strong> 是每一位都由 <code>0</code> 到 <code>9</code> 组成的字符串，且可能包含前导 0 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 1&#10;<b>输出：</b>5&#10;<b>解释：</b>长度为 1 的好数字包括 &quot;0&quot;，&quot;2&quot;，&quot;4&quot;，&quot;6&quot;，&quot;8&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 4&#10;<b>输出：</b>400&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 50&#10;<b>输出：</b>564908303&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>15</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：快速幂 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>偶下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 种选择、奇下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 种选择，各位独立相乘。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>15</mn>
    </mrow>
  </msup>
</math></span>，不能按位循环累乘。</p>
<p>好数字个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>5</mn>
    <mrow data-mjx-texclass="ORD">
      <mo fence="false" stretchy="false">&#x2308;</mo>
      <mi>n</mi>
      <mrow data-mjx-texclass="ORD">
        <mo>/</mo>
      </mrow>
      <mn>2</mn>
      <mo fence="false" stretchy="false">&#x2309;</mo>
    </mrow>
  </msup>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>4</mn>
    <mrow data-mjx-texclass="ORD">
      <mo fence="false" stretchy="false">&#x230A;</mo>
      <mi>n</mi>
      <mrow data-mjx-texclass="ORD">
        <mo>/</mo>
      </mrow>
      <mn>2</mn>
      <mo fence="false" stretchy="false">&#x230B;</mo>
    </mrow>
  </msup>
</math></span>。快速幂在模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 下于对数时间内求出。</p>
</blockquote>
<p>长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的好数字，偶数下标一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x2309;</mo>
  <mo>=</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 位，偶数下标可以填入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 种数字（ <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mn>4</mn>
  <mo>,</mo>
  <mn>6</mn>
  <mo>,</mo>
  <mn>8</mn>
</math></span>）；奇数下标一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 位，奇数下标可以填入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 种数字（ <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>,</mo>
  <mn>3</mn>
  <mo>,</mo>
  <mn>5</mn>
  <mo>,</mo>
  <mn>7</mn>
</math></span>）。因此长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的好数字的个数为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <msup>
    <mn>5</mn>
    <mrow data-mjx-texclass="ORD">
      <mo fence="false" stretchy="false">&#x2308;</mo>
      <mfrac>
        <mi>n</mi>
        <mn>2</mn>
      </mfrac>
      <mo fence="false" stretchy="false">&#x2309;</mo>
    </mrow>
  </msup>
  <mo>&#xD7;</mo>
  <msup>
    <mn>4</mn>
    <mrow data-mjx-texclass="ORD">
      <mo fence="false" stretchy="false">&#x230A;</mo>
      <mfrac>
        <mi>n</mi>
        <mn>2</mn>
      </mfrac>
      <mo fence="false" stretchy="false">&#x230B;</mo>
    </mrow>
  </msup>
</math></span><p>我们可以使用快速幂来计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>5</mn>
    <mrow data-mjx-texclass="ORD">
      <mo fence="false" stretchy="false">&#x2308;</mo>
      <mfrac>
        <mi>n</mi>
        <mn>2</mn>
      </mfrac>
      <mo fence="false" stretchy="false">&#x2309;</mo>
    </mrow>
  </msup>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>4</mn>
    <mrow data-mjx-texclass="ORD">
      <mo fence="false" stretchy="false">&#x230A;</mo>
      <mfrac>
        <mi>n</mi>
        <mn>2</mn>
      </mfrac>
      <mo fence="false" stretchy="false">&#x230B;</mo>
    </mrow>
  </msup>
</math></span>，时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>const mod int64 = 1e9 + 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func countGoodNumbers(n int64) int {</span></span>
<span class="line"><span>	return int(myPow(5, (n+1)>>1) * myPow(4, n>>1) % mod)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func myPow(x, n int64) int64 {</span></span>
<span class="line"><span>	var res int64 = 1</span></span>
<span class="line"><span>	for n != 0 {</span></span>
<span class="line"><span>		if (n &#x26; 1) == 1 {</span></span>
<span class="line"><span>			res = res * x % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		x = x * x % mod</span></span>
<span class="line"><span>		n >>= 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return res</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-good-numbers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1922.Count%20Good%20Numbers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1924" tabindex="-1">1924. 安装栅栏 II 🔒 <a class="header-anchor" href="#q-1924" aria-label="Permalink to &quot;1924. 安装栅栏 II 🔒 {#q-1924}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、最小圆覆盖</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二维整数数组 <code>trees</code>，其中 <code>trees[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示花园中第 <code>i</code> 棵树的坐标。</p>&#10;&#10;<p>你需要用最少的原材料给花园安装一个 <strong>圆形</strong> 的栅栏，使花园中所有的树都在被 <strong>围在栅栏内部</strong>（在栅栏边界上的树也算在内）。</p>&#10;&#10;<p>正式地说，你需要求出栅栏的圆心坐标 <code>(x,y)</code> 和半径 <code>r</code>，使花园中所有的树都在圆的内部或边界上，并且让半径 <code>r</code> <strong>最小</strong>。</p>&#10;&#10;<p>请用一个长度为 3 的数组 <code>[x,y,r]</code> 来返回圆心坐标和半径。如果答案与正确答案的误差不超过 <code>10<sup>-5</sup></code>，则该答案将被视为正确答案通过。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1924.Erect%20the%20Fence%20II/images/trees1.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入:</strong> trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]&#10;<strong>输出:</strong> [2.00000,2.00000,2.00000]&#10;<strong>解释:</strong> 栅栏的圆心应当在 (2, 2) 处，半径为 2。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1900-1999/1924.Erect%20the%20Fence%20II/images/trees2.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入:</strong> trees = [[1,2],[2,2],[4,2]]&#10;<strong>输出:</strong> [2.50000,2.00000,1.50000]&#10;<strong>解释:</strong> 栅栏的圆心应当在 (2.5, 2) 处，半径为 1.5。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= trees.length &lt;= 3000</code></li>&#10;	<li><code>trees[i].length == 2</code></li>&#10;	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 3000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1924.Erect%20the%20Fence%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p>根据题意整理：源文只有最小包围圆思考，没有非空实现。随机打乱后增量维护圆：新点在圆外时令它成为边界点，再逐层固定第二、第三个边界点。两点用直径圆，三点用外接圆；共线时取最远两点的直径圆。圆的比较保留微小绝对容差，计算均用 float64。n 为点数，随机增量期望时间 O(n)，最坏 O(n³)，空间 O(n)；固定局部随机种子使结果可复现。入口 outerTrees 返回 [圆心横坐标, 圆心纵坐标, 半径]，不修改输入。</p>
<p>出处：<a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1924.Erect%20the%20Fence%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题与题解</a>，固定提交 91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011；题意、参考及本 Go 改写采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 题意与参考：Doocs LeetCode，CC BY-SA 4.0。</span></span>
<span class="line"><span>// https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1924.Erect%20the%20Fence%20II/README.md</span></span>
<span class="line"><span>// Go 实现与测试沿用 CC BY-SA 4.0；来源性质见配套说明。</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	"math"</span></span>
<span class="line"><span>	"math/rand"</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type point struct{ x, y float64 }</span></span>
<span class="line"><span>type circle struct{ x, y, r float64 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func contains(c circle, p point) bool { return math.Hypot(c.x-p.x, c.y-p.y) &#x3C;= c.r+1e-8 }</span></span>
<span class="line"><span>func diameter(a, b point) circle {</span></span>
<span class="line"><span>	return circle{(a.x + b.x) / 2, (a.y + b.y) / 2, math.Hypot(a.x-b.x, a.y-b.y) / 2}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func throughThree(a, b, c point) circle {</span></span>
<span class="line"><span>	bx, by, cx, cy := b.x-a.x, b.y-a.y, c.x-a.x, c.y-a.y</span></span>
<span class="line"><span>	d := 2 * (bx*cy - by*cx)</span></span>
<span class="line"><span>	if math.Abs(d) &#x3C; 1e-12 {</span></span>
<span class="line"><span>		best := diameter(a, b)</span></span>
<span class="line"><span>		for _, v := range []circle{diameter(a, c), diameter(b, c)} {</span></span>
<span class="line"><span>			if v.r > best.r {</span></span>
<span class="line"><span>				best = v</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return best</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	b2, c2 := bx*bx+by*by, cx*cx+cy*cy</span></span>
<span class="line"><span>	x := (cy*b2 - by*c2) / d</span></span>
<span class="line"><span>	y := (bx*c2 - cx*b2) / d</span></span>
<span class="line"><span>	return circle{a.x + x, a.y + y, math.Hypot(x, y)}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func outerTrees(trees [][]int) []float64 {</span></span>
<span class="line"><span>	ps := make([]point, len(trees))</span></span>
<span class="line"><span>	for i, p := range trees {</span></span>
<span class="line"><span>		ps[i] = point{float64(p[0]), float64(p[1])}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	rng := rand.New(rand.NewSource(1924))</span></span>
<span class="line"><span>	rng.Shuffle(len(ps), func(i, j int) { ps[i], ps[j] = ps[j], ps[i] })</span></span>
<span class="line"><span>	c := circle{r: -1}</span></span>
<span class="line"><span>	for i, p := range ps {</span></span>
<span class="line"><span>		if contains(c, p) {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		c = circle{p.x, p.y, 0}</span></span>
<span class="line"><span>		for j := 0; j &#x3C; i; j++ {</span></span>
<span class="line"><span>			q := ps[j]</span></span>
<span class="line"><span>			if contains(c, q) {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			c = diameter(p, q)</span></span>
<span class="line"><span>			for k := 0; k &#x3C; j; k++ {</span></span>
<span class="line"><span>				if !contains(c, ps[k]) {</span></span>
<span class="line"><span>					c = throughThree(p, q, ps[k])</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return []float64{c.x, c.y, c.r}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/erect-the-fence-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1924.Erect%20the%20Fence%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1925" tabindex="-1">1925. 统计平方和三元组的数目 <a class="header-anchor" href="#q-1925" aria-label="Permalink to &quot;1925. 统计平方和三元组的数目 {#q-1925}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一个 <strong>平方和三元组</strong> <code>(a,b,c)</code> 指的是满足 <code>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></code> 的 <strong>整数 </strong>三元组 <code>a</code>，<code>b</code> 和 <code>c</code> 。</p>&#10;&#10;<p>给你一个整数 <code>n</code> ，请你返回满足<em> </em><code>1 &lt;= a, b, c &lt;= n</code> 的 <strong>平方和三元组</strong> 的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 5&#10;<b>输出：</b>2&#10;<b>解释：</b>平方和三元组为 (3,4,5) 和 (4,3,5) 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>n = 10&#10;<b>输出：</b>4&#10;<b>解释：</b>平方和三元组为 (3,4,5)，(4,3,5)，(6,8,10) 和 (8,6,10) 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 250</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 通常不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>250</mn>
</math></span>，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
</math></span> 再检验 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>b</mi>
    <mn>2</mn>
  </msup>
</math></span> 是否为不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的完全平方，次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，可以接受。</p>
<p>对每个数对取整数平方根 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>&#x22C5;</mo>
  <mi>c</mi>
</math></span> 还原且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span> 则计入。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 独立枚举，故 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mo stretchy="false">)</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mo stretchy="false">)</mo>
</math></span> 均统计。</p>
</blockquote>
<p>我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的范围内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，然后计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>=</mo>
  <msqrt>
    <msup>
      <mi>a</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>b</mi>
      <mn>2</mn>
    </msup>
  </msqrt>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 是整数且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>，那么就找到了一个平方和三元组，答案加一。</p>
<p>枚举结束后，返回答案即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是给定的整数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countTriples(n int) (ans int) {</span></span>
<span class="line"><span>	for a := 1; a &#x3C; n; a++ {</span></span>
<span class="line"><span>		for b := 1; b &#x3C; n; b++ {</span></span>
<span class="line"><span>			x := a*a + b*b</span></span>
<span class="line"><span>			c := int(math.Sqrt(float64(x)))</span></span>
<span class="line"><span>			if c &#x3C;= n &#x26;&#x26; c*c == x {</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-square-sum-triples" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1925.Count%20Square%20Sum%20Triples/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=s(e,[["render",o]]);export{d as __pageData,w as default};
