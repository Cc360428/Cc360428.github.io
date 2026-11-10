import{_ as s,a,c as t,b as m}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 数学与几何（8）","description":"数学与几何分类，第 2748–3115 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 数学与几何（8）","description":"数学与几何分类，第 2748–3115 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"数学与几何分类，第 2748–3115 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 数学与几何（7）","link":"/principles/algorithms/leetcode-go/math-07"},"next":{"text":"LeetCode Go · 数学与几何（9）","link":"/principles/algorithms/leetcode-go/math-09"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 数学与几何（7）","link":"/principles/algorithms/leetcode-go/math-07"},"next":{"text":"LeetCode Go · 数学与几何（9）","link":"/principles/algorithms/leetcode-go/math-09"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/math-08.md","filePath":"principles/algorithms/leetcode-go/math-08.md"}'),e={name:"principles/algorithms/leetcode-go/math-08.md"};function o(p,n,l,i,c,h){return a(),t("div",null,[...n[0]||(n[0]=[m("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-数学与几何-8" tabindex="-1">LeetCode Go · 数学与几何（8） <a class="header-anchor" href="#leetcode-go-·-数学与几何-8" aria-label="Permalink to &quot;LeetCode Go · 数学与几何（8）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-2748" tabindex="-1">2748. 美丽下标对的数目 <a class="header-anchor" href="#q-2748" aria-label="Permalink to &quot;2748. 美丽下标对的数目 {#q-2748}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学、计数、数论</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 。如果下标对 <code>i</code>、<code>j</code> 满足 <code>0 ≤ i &lt; j &lt; nums.length</code> ，如果 <code>nums[i]</code> 的 <strong>第一个数字</strong> 和 <code>nums[j]</code> 的 <strong>最后一个数字</strong> <strong>互质</strong> ，则认为 <code>nums[i]</code> 和 <code>nums[j]</code> 是一组 <strong>美丽下标对</strong> 。</p>&#10;&#10;<p>返回 <code>nums</code> 中 <strong>美丽下标对</strong> 的总数目。</p>&#10;&#10;<p>对于两个整数 <code>x</code> 和 <code>y</code> ，如果不存在大于 1 的整数可以整除它们，则认为 <code>x</code> 和 <code>y</code> <strong>互质</strong> 。换而言之，如果 <code>gcd(x, y) == 1</code> ，则认为 <code>x</code> 和 <code>y</code> 互质，其中 <code>gcd(x, y)</code> 是 <code>x</code> 和 <code>y</code> 的 <strong>最大公因数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,5,1,4]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>nums 中共有 5 组美丽下标对：&#10;i = 0 和 j = 1 ：nums[0] 的第一个数字是 2 ，nums[1] 的最后一个数字是 5 。2 和 5 互质，因此 gcd(2,5) == 1 。&#10;i = 0 和 j = 2 ：nums[0] 的第一个数字是 2 ，nums[2] 的最后一个数字是 1 。2 和 1 互质，因此 gcd(2,1) == 1 。&#10;i = 1 和 j = 2 ：nums[1] 的第一个数字是 5 ，nums[2] 的最后一个数字是 1 。5 和 1 互质，因此 gcd(5,1) == 1 。&#10;i = 1 和 j = 3 ：nums[1] 的第一个数字是 5 ，nums[3] 的最后一个数字是 4 。5 和 4 互质，因此 gcd(5,4) == 1 。&#10;i = 2 和 j = 3 ：nums[2] 的第一个数字是 1 ，nums[3] 的最后一个数字是 4 。1 和 4 互质，因此 gcd(1,4) == 1 。&#10;因此，返回 5 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [11,21,12]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>共有 2 组美丽下标对：&#10;i = 0 和 j = 1 ：nums[0] 的第一个数字是 1 ，nums[1] 的最后一个数字是 1 。gcd(1,1) == 1 。&#10;i = 0 和 j = 2 ：nums[0] 的第一个数字是 1 ，nums[2] 的最后一个数字是 2 。gcd(1,2) == 1 。&#10;因此，返回 2 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 9999</code></li>&#10;	<li><code>nums[i] % 10 != 0</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计满足首位与末位互质的下标对。双重循环在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span> 下可通过，但对每个左端点重复取首位。</p>
<p>从左到右扫描：用长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的计数器记录已经出现过的首位，对当前数的末位枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.</mn>
  <mn>.9</mn>
</math></span> 中与之互质的计数并累加，再把当前首位写入计数器。</p>
</blockquote>
<p>我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 来记录每个数字的第一个数字出现的次数。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，对于每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 不为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">gcd</mtext>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mi>b</mi>
  <mspace width="0.667em"></mspace>
  <mi>mod</mi>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mn>10</mn>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，则答案加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span>。然后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的第一个数字出现的次数加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>遍历结束后，返回答案即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 分别表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的数字的种类以及最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countBeautifulPairs(nums []int) (ans int) {</span></span>
<span class="line"><span>	cnt := [10]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		for y := 0; y &#x3C; 10; y++ {</span></span>
<span class="line"><span>			if cnt[y] > 0 &#x26;&#x26; gcd(x%10, y) == 1 {</span></span>
<span class="line"><span>				ans += cnt[y]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for x > 9 {</span></span>
<span class="line"><span>			x /= 10</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt[x]++</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-beautiful-pairs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2748.Number%20of%20Beautiful%20Pairs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2761" tabindex="-1">2761. 和等于目标值的质数对 <a class="header-anchor" href="#q-2761" aria-label="Permalink to &quot;2761. 和等于目标值的质数对 {#q-2761}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、枚举、数论</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>n</code> 。如果两个整数 <code>x</code> 和 <code>y</code> 满足下述条件，则认为二者形成一个质数对：</p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= x &lt;= y &lt;= n</code></li>&#10;	<li><code>x + y == n</code></li>&#10;	<li><code>x</code> 和 <code>y</code> 都是质数</li>&#10;</ul>&#10;&#10;<p>请你以二维有序列表的形式返回符合题目要求的所有 <code>[x<sub>i</sub>, y<sub>i</sub>]</code> ，列表需要按 <code>x<sub>i</sub></code> 的 <strong>非递减顺序</strong> 排序。如果不存在符合要求的质数对，则返回一个空数组。</p>&#10;&#10;<p><strong>注意：</strong>质数是大于 <code>1</code> 的自然数，并且只有两个因子，即它本身和 <code>1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 10&#10;<strong>输出：</strong>[[3,7],[5,5]]&#10;<strong>解释：</strong>在这个例子中，存在满足条件的两个质数对。 &#10;这两个质数对分别是 [3,7] 和 [5,5]，按照题面描述中的方式排序后返回。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 2&#10;<strong>输出：</strong>[]&#10;<strong>解释：</strong>可以证明不存在和为 2 的质数对，所以返回一个空数组。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：预处理 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>找出所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span> 且两者皆质、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mi>y</mi>
</math></span> 的数对。对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 试除判断质数，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span> 时偏慢。</p>
<p>先用埃氏筛标记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 中的质数，再枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 都为质则输出。</p>
</blockquote>
<p>我们先预处理出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 范围内的所有质数，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 中，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为 <code v-pre>true</code> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 是一个质数。</p>
<p>接下来，我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo stretchy="false">]</mo>
</math></span> 的范围内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 均为 <code v-pre>true</code>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 是一个质数对，添加到答案中。</p>
<p>枚举结束后，返回答案即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
</math></span> 是题目给定的数字。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findPrimePairs(n int) (ans [][]int) {</span></span>
<span class="line"><span>	primes := make([]bool, n)</span></span>
<span class="line"><span>	for i := range primes {</span></span>
<span class="line"><span>		primes[i] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 2; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if primes[i] {</span></span>
<span class="line"><span>			for j := i + i; j &#x3C; n; j += i {</span></span>
<span class="line"><span>				primes[j] = false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x := 2; x &#x3C;= n/2; x++ {</span></span>
<span class="line"><span>		y := n - x</span></span>
<span class="line"><span>		if primes[x] &#x26;&#x26; primes[y] {</span></span>
<span class="line"><span>			ans = append(ans, []int{x, y})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/prime-pairs-with-target-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2761.Prime%20Pairs%20With%20Target%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2769" tabindex="-1">2769. 找出最大的可达成数字 <a class="header-anchor" href="#q-2769" aria-label="Permalink to &quot;2769. 找出最大的可达成数字 {#q-2769}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数 <code>num</code> 和 <code>t</code> 。如果整数 <code>x</code> 可以在执行下述操作 <strong>不超过</strong> <code>t</code> 次的情况下变为与 <code>num</code> 相等，则称其为 <strong>可达成数字</strong> ：</p>&#10;&#10;<ul>&#10;	<li>每次操作将 <code>x</code> 的值增加或减少 <code>1</code> ，同时可以选择将 <code>num</code> 的值增加或减少 <code>1</code> 。</li>&#10;</ul>&#10;&#10;<p>返回所有可达成数字中的 <strong>最大</strong> 值 <code>x</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong>num = 4, t = 1</p>&#10;&#10;<p><strong>输出：</strong>6</p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>执行下述操作可以使最大可达成数字等于 <code>num</code> ：</p>&#10;&#10;<ul>&#10;	<li>最大可达成数字减少 1 ，同时 <code>num</code> 增加 1 。</li>&#10;</ul>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong>num = 3, t = 2</p>&#10;&#10;<p><strong>输出：</strong>7</p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>执行两次下述操作可以使最大可达成数字等于 num ：</p>&#10;&#10;<ul>&#10;	<li>最大可达成数字减少 1 ，同时 <code>num</code> 增加 1。</li>&#10;</ul>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= num, t &lt;= 50</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一次操作让 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 朝相反方向各走 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，最多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 次，求能与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 相等的最大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。模拟逐步逼近没有必要。</p>
<p>每次操作把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 缩小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，故最大可行的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo>+</mo>
  <mn>2</mn>
  <mi>t</mi>
</math></span>。</p>
</blockquote>
<p>我们注意到，每次操作可以将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，同时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，这样 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的差值就会减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，而最多可以操作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 次，所以最大可达成数字为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo>+</mo>
  <mi>t</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func theMaximumAchievableX(num int, t int) int {</span></span>
<span class="line"><span>	return num + t*2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-maximum-achievable-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2769.Find%20the%20Maximum%20Achievable%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2806" tabindex="-1">2806. 取整购买后的账户余额 <a class="header-anchor" href="#q-2806" aria-label="Permalink to &quot;2806. 取整购买后的账户余额 {#q-2806}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一开始，你的银行账户里有 <code>100</code> 块钱。</p>&#10;&#10;<p>给你一个整数<code>purchaseAmount</code> ，它表示你在一次购买中愿意支出的金额。</p>&#10;&#10;<p>在一个商店里，你进行一次购买，实际支出的金额会向 <strong>最近</strong> 的 <code>10</code> 的 <strong>倍数</strong> 取整。换句话说，你实际会支付一个 <strong>非负</strong> 金额 <code>roundedAmount</code> ，满足 <code>roundedAmount</code> 是 <code>10</code> 的倍数且 <code>abs(roundedAmount - purchaseAmount)</code> 的值 <strong>最小</strong> 。</p>&#10;&#10;<p>如果存在多于一个最接近的 <code>10</code> 的倍数，<strong>较大的倍数</strong> 是你的实际支出金额。</p>&#10;&#10;<p>请你返回一个整数，表示你在愿意支出金额为<em> </em><code>purchaseAmount</code><em> </em>块钱的前提下，购买之后剩下的余额。</p>&#10;&#10;<p><strong>注意：</strong> <code>0</code> 也是 <code>10</code> 的倍数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>purchaseAmount = 9&#10;<b>输出：</b>90&#10;<b>解释：</b>这个例子中，最接近 9 的 10 的倍数是 10 。所以你的账户余额为 100 - 10 = 90 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>purchaseAmount = 15&#10;<b>输出：</b>80&#10;<b>解释：</b>这个例子中，有 2 个最接近 15 的 10 的倍数：10 和 20，较大的数 20 是你的实际开销。&#10;所以你的账户余额为 100 - 20 = 80 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= purchaseAmount &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>购买额在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>100</mn>
  <mo stretchy="false">]</mo>
</math></span>，须四舍五入到最近的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的倍数（距离相等时取较大者），余额为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span> 减去该值。十一个候选均可枚举。自 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span> 递减并仅在距离严格更小时更新，从而在平局时保留较大的倍数。</p>
</blockquote>
<p>我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>100</mn>
  <mo stretchy="false">]</mo>
</math></span> 的范围内枚举所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的倍数，然后找到与 <code v-pre>purchaseAmount</code> 最接近的那个数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
  <mo>&#x2212;</mo>
  <mi>x</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func accountBalanceAfterPurchase(purchaseAmount int) int {</span></span>
<span class="line"><span>	diff, x := 100, 0</span></span>
<span class="line"><span>	for y := 100; y >= 0; y -= 10 {</span></span>
<span class="line"><span>		t := abs(y - purchaseAmount)</span></span>
<span class="line"><span>		if t &#x3C; diff {</span></span>
<span class="line"><span>			diff = t</span></span>
<span class="line"><span>			x = y</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 100 - x</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/account-balance-after-rounded-purchase" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2806.Account%20Balance%20After%20Rounded%20Purchase/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2843" tabindex="-1">2843. 统计对称整数的数目 <a class="header-anchor" href="#q-2843" aria-label="Permalink to &quot;2843. 统计对称整数的数目 {#q-2843}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个正整数 <code>low</code> 和 <code>high</code> 。</p>&#10;&#10;<p>对于一个由 <code>2 * n</code> 位数字组成的整数 <code>x</code> ，如果其前 <code>n</code> 位数字之和与后 <code>n</code> 位数字之和相等，则认为这个数字是一个对称整数。</p>&#10;&#10;<p>返回在 <code>[low, high]</code> 范围内的 <strong>对称整数的数目</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>low = 1, high = 100&#10;<strong>输出：</strong>9&#10;<strong>解释：</strong>在 1 到 100 范围内共有 9 个对称整数：11、22、33、44、55、66、77、88 和 99 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>low = 1200, high = 1230&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>在 1200 到 1230 范围内共有 4 个对称整数：1203、1212、1221 和 1230 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= low &lt;= high &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举区间内每个整数并判断位数为偶数且左右半段数字和相等即可。无需数位 DP。</p>
</blockquote>
<p>我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 中的每个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，判断其是否是对称整数。如果是，那么答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 中整数的个数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是题目中给出的最大整数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countSymmetricIntegers(low int, high int) (ans int) {</span></span>
<span class="line"><span>	f := func(x int) int {</span></span>
<span class="line"><span>		s := strconv.Itoa(x)</span></span>
<span class="line"><span>		n := len(s)</span></span>
<span class="line"><span>		if n&#x26;1 == 1 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		a, b := 0, 0</span></span>
<span class="line"><span>		for i := 0; i &#x3C; n/2; i++ {</span></span>
<span class="line"><span>			a += int(s[i] - '0')</span></span>
<span class="line"><span>			b += int(s[n/2+i] - '0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if a == b {</span></span>
<span class="line"><span>			return 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x := low; x &#x3C;= high; x++ {</span></span>
<span class="line"><span>		ans += f(x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-symmetric-integers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2843.Count%20Symmetric%20Integers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2849" tabindex="-1">2849. 判断能否在给定时间到达单元格 <a class="header-anchor" href="#q-2849" aria-label="Permalink to &quot;2849. 判断能否在给定时间到达单元格 {#q-2849}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你四个整数 <code>sx</code>、<code>sy</code>、<code>fx</code>、<code>fy</code>  以及一个 <strong>非负整数</strong> <code>t</code> 。</p>&#10;&#10;<p>在一个无限的二维网格中，你从单元格 <code>(sx, sy)</code> 开始出发。每一秒，你 <strong>必须</strong> 移动到任一与之前所处单元格相邻的单元格中。</p>&#10;&#10;<p>如果你能在 <strong>恰好 </strong><code>t</code><strong> 秒</strong> 后到达单元格<em> </em><code>(fx, fy)</code> ，返回 <code>true</code> ；否则，返回  <code>false</code> 。</p>&#10;&#10;<p>单元格的 <strong>相邻单元格</strong> 是指该单元格周围与其至少共享一个角的 8 个单元格。你可以多次访问同一个单元格。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2800-2899/2849.Determine%20if%20a%20Cell%20Is%20Reachable%20at%20a%20Given%20Time/images/example2.svg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>sx = 2, sy = 4, fx = 7, fy = 7, t = 6&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>从单元格 (2, 4) 开始出发，穿过上图标注的单元格，可以在恰好 6 秒后到达单元格 (7, 7) 。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2800-2899/2849.Determine%20if%20a%20Cell%20Is%20Reachable%20at%20a%20Given%20Time/images/example1.svg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>sx = 3, sy = 1, fx = 7, fy = 3, t = 3&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>从单元格 (3, 1) 开始出发，穿过上图标注的单元格，至少需要 4 秒后到达单元格 (7, 3) 。 因此，无法在 3 秒后到达单元格 (7, 3) 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= sx, sy, fx, fy &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= t &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：分情况讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每秒可走相邻八个方向，最短时间是切比雪夫距离 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>d</mi>
  <mi>x</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>,</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>d</mi>
  <mi>y</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>。起点与终点重合时， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 会走出再无法在下一秒回到原处（除非再花时间），故仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2260;</mo>
  <mn>1</mn>
</math></span> 可达；其余情形只要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 不小于该距离即可，多出的时间可在附近迂回。</p>
</blockquote>
<p>如果起点和终点相同，那么只有当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2260;</mo>
  <mn>1</mn>
</math></span> 时，才能在给定时间到达终点。</p>
<p>否则，我们可以计算出起点和终点的横纵坐标之差，然后取最大值，如果最大值小于等于给定时间，那么就可以在给定时间到达终点。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isReachableAtTime(sx int, sy int, fx int, fy int, t int) bool {</span></span>
<span class="line"><span>	if sx == fx &#x26;&#x26; sy == fy {</span></span>
<span class="line"><span>		return t != 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dx := abs(sx - fx)</span></span>
<span class="line"><span>	dy := abs(sy - fy)</span></span>
<span class="line"><span>	return max(dx, dy) &#x3C;= t</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/determine-if-a-cell-is-reachable-at-a-given-time" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2849.Determine%20if%20a%20Cell%20Is%20Reachable%20at%20a%20Given%20Time/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2862" tabindex="-1">2862. 完全子集的最大元素和 <a class="header-anchor" href="#q-2862" aria-label="Permalink to &quot;2862. 完全子集的最大元素和 {#q-2862}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、数论</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>1</strong> 开始、由 <code>n</code> 个整数组成的数组。你需要从 <code>nums</code> 选择一个 <strong>完全集</strong>，其中每对元素下标的乘积都是一个 <span>完全平方数</span>，例如选择 <code>a<sub>i</sub></code> 和 <code>a<sub>j</sub></code> ，<code>i * j</code> 一定是完全平方数。</p>&#10;&#10;<p>返回 <strong>完全子集</strong> 所能取到的 <strong>最大元素和</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [8,7,3,5,7,2,4,9]</span></p>&#10;&#10;<p><strong>输出：</strong><span>16</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>我们选择下标为 2 和 8 的元素，并且 <code>2 * 8</code> 是一个完全平方数。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>nums = [8,10,3,8,1,13,7,9,4]</span></p>&#10;&#10;<p><span><b>输出：</b>20</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>我们选择下标为 1, 4, 9 的元素。<code>1 * 4</code>, <code>1 * 9</code>, <code>4 * 9</code> 是完全平方数。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n == nums.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>下标集合完全当且仅当任意两下标之积为完全平方数，即它们除去平方因子后的核相同。枚举核 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，累加所有形如 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x22C5;</mo>
  <msup>
    <mi>j</mi>
    <mn>2</mn>
  </msup>
</math></span> 的下标对应的值，取最大和。</p>
</blockquote>
<p>我们注意到，如果一个数字可以表示成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mi>j</mi>
    <mn>2</mn>
  </msup>
</math></span> 的形式，那么所有该形式的数字的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 是相同的。</p>
<p>因此，我们可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，然后从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 开始枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，每一次累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mi>j</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的值到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mi>j</mi>
    <mn>2</mn>
  </msup>
  <mo>&gt;</mo>
  <mi>n</mi>
</math></span>。此时更新答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>t</mi>
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
</math></span> 是数组的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumSum(nums []int) (ans int64) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for k := 1; k &#x3C;= n; k++ {</span></span>
<span class="line"><span>		var t int64</span></span>
<span class="line"><span>		for j := 1; k*j*j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			t += int64(nums[k*j*j-1])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, t)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-element-sum-of-a-complete-subset-of-indices" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2862.Maximum%20Element-Sum%20of%20a%20Complete%20Subset%20of%20Indices/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2894" tabindex="-1">2894. 分类求和并作差 <a class="header-anchor" href="#q-2894" aria-label="Permalink to &quot;2894. 分类求和并作差 {#q-2894}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个正整数 <code>n</code> 和 <code>m</code> 。</p>&#10;&#10;<p>现定义两个整数 <code>num1</code> 和 <code>num2</code> ，如下所示：</p>&#10;&#10;<ul>&#10;	<li><code>num1</code>：范围 <code>[1, n]</code> 内所有 <strong>无法被 </strong><code>m</code><strong> 整除</strong> 的整数之和。</li>&#10;	<li><code>num2</code>：范围 <code>[1, n]</code> 内所有 <strong>能够被 </strong><code>m</code><strong> 整除</strong> 的整数之和。</li>&#10;</ul>&#10;&#10;<p>返回整数 <code>num1 - num2</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 10, m = 3&#10;<strong>输出：</strong>19&#10;<strong>解释：</strong>在这个示例中：&#10;- 范围 [1, 10] 内无法被 3 整除的整数为 [1,2,4,5,7,8,10] ，num1 = 这些整数之和 = 37 。&#10;- 范围 [1, 10] 内能够被 3 整除的整数为 [3,6,9] ，num2 = 这些整数之和 = 18 。&#10;返回 37 - 18 = 19 作为答案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, m = 6&#10;<strong>输出：</strong>15&#10;<strong>解释：</strong>在这个示例中：&#10;- 范围 [1, 5] 内无法被 6 整除的整数为 [1,2,3,4,5] ，num1 = 这些整数之和 =  15 。&#10;- 范围 [1, 5] 内能够被 6 整除的整数为 [] ，num2 = 这些整数之和 = 0 。&#10;返回 15 - 0 = 15 作为答案。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, m = 1&#10;<strong>输出：</strong>-15&#10;<strong>解释：</strong>在这个示例中：&#10;- 范围 [1, 5] 内无法被 1 整除的整数为 [] ，num1 = 这些整数之和 = 0 。 &#10;- 范围 [1, 5] 内能够被 1 整除的整数为 [1,2,3,4,5] ，num2 = 这些整数之和 = 15 。&#10;返回 0 - 15 = -15 作为答案。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n, m &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 不大，遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>：能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 整除则从答案中减去，否则加上，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span>。</p>
</blockquote>
<p>我们遍历区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的每一个数，如果它能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 整除，那么答案就减去这个数，否则答案就加上这个数。</p>
<p>遍历结束后，返回答案即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是题目给定的整数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func differenceOfSums(n int, m int) (ans int) {</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		if i%m == 0 {</span></span>
<span class="line"><span>			ans -= i</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans += i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/divisible-and-non-divisible-sums-difference" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2894.Divisible%20and%20Non-divisible%20Sums%20Difference/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2927" tabindex="-1">2927. 给小朋友们分糖果 III 🔒 <a class="header-anchor" href="#q-2927" aria-label="Permalink to &quot;2927. 给小朋友们分糖果 III 🔒 {#q-2927}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、组合数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你被给定两个正整数 <code>n</code> 和 <code>limit</code>。</p>&#10;&#10;<p>返回 <em>在每个孩子得到不超过 </em><code>limit</code><em> 个糖果的情况下，将</em> <code>n</code> <em>个糖果分发给</em> <code>3</code> <em>个孩子的 <strong>总方法数</strong>。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><b>示例 1:</b></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 5, limit = 2&#10;<b>输出：</b>3&#10;<b>解释：</b>有 3 种方式将 5 个糖果分发给 3 个孩子，使得每个孩子得到不超过 2 个糖果：(1, 2, 2), (2, 1, 2) 和 (2, 2, 1)。&#10;</pre>&#10;&#10;<p><b>示例 2:</b></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 3, limit = 3&#10;<b>输出：</b>10&#10;<b>解释：</b>有 10 种方式将 3 个糖果分发给 3 个孩子，使得每个孩子得到不超过 3 个糖果：(0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) 和 (3, 0, 0)。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><b>提示：</b></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>8</sup></code></li>&#10;	<li><code>1 &lt;= limit &lt;= 10<sup>8</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：组合数学 + 容斥原理 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>非负整数解 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo>+</mo>
  <mi>z</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>&#x2264;</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo>,</mo>
  <mi>z</mi>
  <mo>&#x2264;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>18</mn>
    </mrow>
  </msup>
</math></span> 量级，三重循环不可用。无上界时隔板法给出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mn>2</mn>
    </mrow>
  </msubsup>
</math></span>；再容斥减去某变量至少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的方案，并加回两个变量同时越界的方案。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&gt;</mo>
  <mn>3</mn>
  <mo>&#x22C5;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 则直接为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。实现时对组合数自变量加判断，以免负数阶乘。公式为常数时间。</p>
</blockquote>
<p>根据题目描述，我们需要将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个糖果分给 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个小孩，每个小孩分到的糖果数在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span> 之间。</p>
<p>这实际上等价于把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个球放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个盒子中。由于盒子可以为空，我们可以再增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个虚拟球，然后再利用隔板法，即一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
</math></span> 个球，我们在其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个位置插入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 个隔板，从而将实际的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个球分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 组，并且允许盒子为空，因此初始方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。</p>
<p>我们需要在这些方案中，排除掉存在盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 的方案。考虑其中有一个盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>，那么剩下的球（包括虚拟球）最多有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>2</mn>
</math></span> 个，位置数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，因此方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。由于存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个盒子，因此这样的方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。这样子算，我们会多排除掉同时存在两个盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 的方案，因此我们需要再加上这样的方案数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>2</mn>
      <mo>&#xD7;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
    </mrow>
    <mn>2</mn>
  </msubsup>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distributeCandies(n int, limit int) int64 {</span></span>
<span class="line"><span>	comb2 := func(n int) int {</span></span>
<span class="line"><span>		return n * (n - 1) / 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n > 3*limit {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := comb2(n + 2)</span></span>
<span class="line"><span>	if n > limit {</span></span>
<span class="line"><span>		ans -= 3 * comb2(n-limit+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n-2 >= 2*limit {</span></span>
<span class="line"><span>		ans += 3 * comb2(n-2*limit)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/distribute-candies-among-children-iii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2927.Distribute%20Candies%20Among%20Children%20III/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2928" tabindex="-1">2928. 给小朋友们分糖果 I <a class="header-anchor" href="#q-2928" aria-label="Permalink to &quot;2928. 给小朋友们分糖果 I {#q-2928}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、组合数学、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个正整数 <code>n</code> 和 <code>limit</code> 。</p>&#10;&#10;<p>请你将 <code>n</code> 颗糖果分给 <code>3</code> 位小朋友，确保没有任何小朋友得到超过 <code>limit</code> 颗糖果，请你返回满足此条件下的 <strong>总方案数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 5, limit = 2&#10;<b>输出：</b>3&#10;<b>解释：</b>总共有 3 种方法分配 5 颗糖果，且每位小朋友的糖果数不超过 2 ：(1, 2, 2) ，(2, 1, 2) 和 (2, 2, 1) 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 3, limit = 3&#10;<b>输出：</b>10&#10;<b>解释：</b>总共有 10 种方法分配 3 颗糖果，且每位小朋友的糖果数不超过 3 ：(0, 0, 3) ，(0, 1, 2) ，(0, 2, 1) ，(0, 3, 0) ，(1, 0, 2) ，(1, 1, 1) ，(1, 2, 0) ，(2, 0, 1) ，(2, 1, 0) 和 (3, 0, 0) 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 50</code></li>&#10;	<li><code>1 &lt;= limit &lt;= 50</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：组合数学 + 容斥原理 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>与 III 相同的三点分配，仅 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span>。三重枚举可行，但隔板加容斥仍是闭式： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mn>2</mn>
    </mrow>
  </msubsup>
</math></span> 减去三个「某人超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>」的情形，再加回两人同时越界。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&gt;</mo>
  <mn>3</mn>
  <mo>&#x22C5;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 时无解。约束很小，公式与较大数据版本共用，避免两套逻辑。</p>
</blockquote>
<p>根据题目描述，我们需要将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个糖果分给 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个小孩，每个小孩分到的糖果数在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span> 之间。</p>
<p>这实际上等价于把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个球放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个盒子中。由于盒子可以为空，我们可以再增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个虚拟球，然后再利用隔板法，即一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
</math></span> 个球，我们在其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个位置插入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 个隔板，从而将实际的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个球分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 组，并且允许盒子为空，因此初始方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。</p>
<p>我们需要在这些方案中，排除掉存在盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 的方案。考虑其中有一个盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>，那么剩下的球（包括虚拟球）最多有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>2</mn>
</math></span> 个，位置数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，因此方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。由于存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个盒子，因此这样的方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。这样子算，我们会多排除掉同时存在两个盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 的方案，因此我们需要再加上这样的方案数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>2</mn>
      <mo>&#xD7;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
    </mrow>
    <mn>2</mn>
  </msubsup>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distributeCandies(n int, limit int) int {</span></span>
<span class="line"><span>	comb2 := func(n int) int {</span></span>
<span class="line"><span>		return n * (n - 1) / 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n > 3*limit {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := comb2(n + 2)</span></span>
<span class="line"><span>	if n > limit {</span></span>
<span class="line"><span>		ans -= 3 * comb2(n-limit+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n-2 >= 2*limit {</span></span>
<span class="line"><span>		ans += 3 * comb2(n-2*limit)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/distribute-candies-among-children-i" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2928.Distribute%20Candies%20Among%20Children%20I/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2929" tabindex="-1">2929. 给小朋友们分糖果 II <a class="header-anchor" href="#q-2929" aria-label="Permalink to &quot;2929. 给小朋友们分糖果 II {#q-2929}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、组合数学、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个正整数 <code>n</code> 和 <code>limit</code> 。</p>&#10;&#10;<p>请你将 <code>n</code> 颗糖果分给 <code>3</code> 位小朋友，确保没有任何小朋友得到超过 <code>limit</code> 颗糖果，请你返回满足此条件下的 <strong>总方案数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 5, limit = 2&#10;<b>输出：</b>3&#10;<b>解释：</b>总共有 3 种方法分配 5 颗糖果，且每位小朋友的糖果数不超过 2 ：(1, 2, 2) ，(2, 1, 2) 和 (2, 2, 1) 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 3, limit = 3&#10;<b>输出：</b>10&#10;<b>解释：</b>总共有 10 种方法分配 3 颗糖果，且每位小朋友的糖果数不超过 3 ：(0, 0, 3) ，(0, 1, 2) ，(0, 2, 1) ，(0, 3, 0) ，(1, 0, 2) ，(1, 1, 1) ，(1, 2, 0) ，(2, 0, 1) ，(2, 1, 0) 和 (3, 0, 0) 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>6</sup></code></li>&#10;	<li><code>1 &lt;= limit &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：组合数学 + 容斥原理 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>约束升至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span>，枚举两个变量已达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，在部分语言中偏紧。容斥公式与 I、III 相同，组合数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>m</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mn>2</mn>
    </mrow>
  </msubsup>
  <mo>=</mo>
  <mi>m</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 计算。</p>
<p>因此仍先判 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&gt;</mo>
  <mn>3</mn>
  <mo>&#x22C5;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>，再对无约束、单人越界、双人越界三项做加减。无需循环。</p>
</blockquote>
<p>根据题目描述，我们需要将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个糖果分给 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个小孩，每个小孩分到的糖果数在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span> 之间。</p>
<p>这实际上等价于把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个球放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个盒子中。由于盒子可以为空，我们可以再增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个虚拟球，然后再利用隔板法，即一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
</math></span> 个球，我们在其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个位置插入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 个隔板，从而将实际的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个球分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 组，并且允许盒子为空，因此初始方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。</p>
<p>我们需要在这些方案中，排除掉存在盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 的方案。考虑其中有一个盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>，那么剩下的球（包括虚拟球）最多有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>2</mn>
</math></span> 个，位置数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，因此方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。由于存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个盒子，因此这样的方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </msubsup>
</math></span>。这样子算，我们会多排除掉同时存在两个盒子分到的小球数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span> 的方案，因此我们需要再加上这样的方案数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>C</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>2</mn>
      <mo>&#xD7;</mo>
      <mi>l</mi>
      <mi>i</mi>
      <mi>m</mi>
      <mi>i</mi>
      <mi>t</mi>
    </mrow>
    <mn>2</mn>
  </msubsup>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distributeCandies(n int, limit int) int64 {</span></span>
<span class="line"><span>	comb2 := func(n int) int {</span></span>
<span class="line"><span>		return n * (n - 1) / 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n > 3*limit {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := comb2(n + 2)</span></span>
<span class="line"><span>	if n > limit {</span></span>
<span class="line"><span>		ans -= 3 * comb2(n-limit+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n-2 >= 2*limit {</span></span>
<span class="line"><span>		ans += 3 * comb2(n-2*limit)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/distribute-candies-among-children-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2929.Distribute%20Candies%20Among%20Children%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2946" tabindex="-1">2946. 循环移位后的矩阵相似检查 <a class="header-anchor" href="#q-2946" aria-label="Permalink to &quot;2946. 循环移位后的矩阵相似检查 {#q-2946}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、矩阵、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个<strong>下标从 0 开始</strong>且大小为 <code>m x n</code> 的整数矩阵 <code>mat</code> 和一个整数 <code>k</code> 。矩阵行的下标是从 0 开始的。</p>&#10;&#10;<p>进行下面操作 <code>k</code> 次：</p>&#10;&#10;<ul>&#10;	<li><strong>偶数行</strong>（0, 2, 4, ...）循环向左移动。</li>&#10;</ul>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2900-2999/2946.Matrix%20Similarity%20After%20Cyclic%20Shifts/images/lshift.jpg" loading="lazy"></p>&#10;&#10;<ul>&#10;	<li><strong>奇数行</strong>（1, 3, 5, ...）循环向右移动。</li>&#10;</ul>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2900-2999/2946.Matrix%20Similarity%20After%20Cyclic%20Shifts/images/rshift-stlone.jpg" loading="lazy"></p>&#10;&#10;<p>如果经过 <code>k</code> 步后的最终修改矩阵与原始矩阵相同，则返回 <code>true</code>，否则返回 <code>false</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4</span></p>&#10;&#10;<p><span><b>输出：</b>false</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>在每一步中，行 0 和行 2（偶数下标）进行左移，行 1（奇数下标）进行右移。</p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2900-2999/2946.Matrix%20Similarity%20After%20Cyclic%20Shifts/images/t1-2.jpg" loading="lazy"></p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2</span></p>&#10;&#10;<p><span><b>输出：</b>true</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2900-2999/2946.Matrix%20Similarity%20After%20Cyclic%20Shifts/images/t1-3.jpg" loading="lazy"></p>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>mat = [[2,2],[2,2]], k = 3</span></p>&#10;&#10;<p><span><b>输出：</b>true</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>矩阵中的所有值都相等，即使进行循环移位，矩阵也会保持不变。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= mat.length &lt;= 25</code></li>&#10;	<li><code>1 &lt;= mat[i].length &lt;= 25</code></li>&#10;	<li><code>1 &lt;= mat[i][j] &lt;= 25</code></li>&#10;	<li><code>1 &lt;= k &lt;= 50</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>奇数行右移 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>、偶数行左移 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 后须与原矩阵相同。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 可先对列数取模，但直接比较「移位后应对齐的格子」不必真的旋转。</p>
<p>对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，奇数行看 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>，偶数行看 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>，有一处不等即否。矩阵不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
  <mo>&#xD7;</mo>
  <mn>25</mn>
</math></span>。</p>
</blockquote>
<p>我们遍历矩阵的每个元素，判断其在循环移位后的位置是否与原位置的元素相同。</p>
<p>对于奇数行，我们将元素向右移动 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个位置，因此元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 在循环移位后的位置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是矩阵的列数。</p>
<p>对于偶数行，我们将元素向左移动 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个位置，因此元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 在循环移位后的位置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>如果在遍历过程中发现有任何一个元素在循环移位后的位置与原位置的元素不同，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。如果遍历完成后所有元素都相同，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>。</p>
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
</math></span> 分别是矩阵的行数和列数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func areSimilar(mat [][]int, k int) bool {</span></span>
<span class="line"><span>	n := len(mat[0])</span></span>
<span class="line"><span>	k %= n</span></span>
<span class="line"><span>	for i, row := range mat {</span></span>
<span class="line"><span>		for j, x := range row {</span></span>
<span class="line"><span>			if i%2 == 1 &#x26;&#x26; x != mat[i][(j+k)%n] {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if i%2 == 0 &#x26;&#x26; x != mat[i][(j-k+n)%n] {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/matrix-similarity-after-cyclic-shifts" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2946.Matrix%20Similarity%20After%20Cyclic%20Shifts/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2954" tabindex="-1">2954. 统计感冒序列的数目 <a class="header-anchor" href="#q-2954" aria-label="Permalink to &quot;2954. 统计感冒序列的数目 {#q-2954}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、组合数学、费马小定理</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>n</code> 和一个下标从 <strong>0</strong> 开始的整数数组 <code>sick</code> ，数组按 <strong>升序</strong> 排序。</p>&#10;&#10;<p>有 <code>n</code> 位小朋友站成一排，按顺序编号为 <code>0</code> 到 <code>n - 1</code> 。数组 <code>sick</code> 包含一开始得了感冒的小朋友的位置。如果位置为 <code>i</code> 的小朋友得了感冒，他会传染给下标为 <code>i - 1</code> 或者 <code>i + 1</code> 的小朋友，<strong>前提</strong> 是被传染的小朋友存在且还没有得感冒。每一秒中， <strong>至多一位</strong> 还没感冒的小朋友会被传染。</p>&#10;&#10;<p>经过有限的秒数后，队列中所有小朋友都会感冒。<strong>感冒序列</strong> 指的是 <strong>所有</strong> 一开始没有感冒的小朋友最后得感冒的顺序序列。请你返回所有感冒序列的数目。</p>&#10;&#10;<p>由于答案可能很大，请你将答案对 <code>10<sup>9</sup> + 7</code> 取余后返回。</p>&#10;&#10;<p><b>注意</b>，感冒序列 <strong>不</strong> 包含一开始就得了感冒的小朋友的下标。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 5, sick = [0,4]&#10;<b>输出：</b>4&#10;<b>解释：</b>一开始，下标为 1 ，2 和 3 的小朋友没有感冒。总共有 4 个可能的感冒序列：&#10;- 一开始，下标为 1 和 3 的小朋友可以被传染，因为他们分别挨着有感冒的小朋友 0 和 4 ，令下标为 1 的小朋友先被传染。&#10;然后，下标为 2 的小朋友挨着感冒的小朋友 1 ，下标为 3 的小朋友挨着感冒的小朋友 4 ，两位小朋友都可以被传染，令下标为 2 的小朋友被传染。&#10;最后，下标为 3 的小朋友被传染，因为他挨着感冒的小朋友 2 和 4 ，感冒序列为 [1,2,3] 。&#10;- 一开始，下标为 1 和 3 的小朋友可以被传染，因为他们分别挨着感冒的小朋友 0 和 4 ，令下标为 1 的小朋友先被传染。&#10;然后，下标为 2 的小朋友挨着感冒的小朋友 1 ，下标为 3 的小朋友挨着感冒的小朋友 4 ，两位小朋友都可以被传染，令下标为 3 的小朋友被传染。&#10;最后，下标为 2 的小朋友被传染，因为他挨着感冒的小朋友 1 和 3 ，感冒序列为  [1,3,2] 。&#10;- 感冒序列 [3,1,2] ，被传染的顺序：[<strong><em>0</em></strong>,1,2,3,<strong><em>4</em></strong>] => [<strong><em>0</em></strong>,1,2,<strong><em>3</em></strong>,<strong><em>4</em></strong>] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,2,<em><strong>3</strong></em>,<strong><em>4</em></strong>] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,<strong><em>2</em></strong>,<strong><em>3</em></strong>,<strong><em>4</em></strong>] 。&#10;- 感冒序列 [3,2,1] ，被传染的顺序：[<strong><em>0</em></strong>,1,2,3,<strong><em>4</em></strong>] => [<strong><em>0</em></strong>,1,2,<strong><em>3</em></strong>,<strong><em>4</em></strong>] => [<strong><em>0</em></strong>,1,<strong><em>2</em></strong>,<strong><em>3</em></strong>,<strong><em>4</em></strong>] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,<strong><em>2</em></strong>,<strong><em>3</em></strong>,<strong><em>4</em></strong>] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 4, sick = [1]&#10;<b>输出：</b>3&#10;<b>解释：</b>一开始，下标为 0 ，2 和 3 的小朋友没有感冒。总共有 3 个可能的感冒序列：&#10;- 感冒序列 [0,2,3] ，被传染的顺序：[0,<strong><em>1</em></strong>,2,3] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,2,3] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,<strong><em>2</em></strong>,3] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,<strong><em>2</em></strong>,<strong><em>3</em></strong>] 。&#10;- 感冒序列 [2,0,3] ，被传染的顺序：[0,<strong><em>1</em></strong>,2,3] => [0,<strong><em>1</em></strong>,<strong><em>2</em></strong>,3] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,<strong><em>2</em></strong>,3] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,<strong><em>2</em></strong>,<strong><em>3</em></strong>] 。&#10;- 感冒序列 [2,3,0] ，被传染的顺序：[0,<strong><em>1</em></strong>,2,3] => [0,<strong><em>1</em></strong>,<strong><em>2</em></strong>,3] => [0,<strong><em>1</em></strong>,<strong><em>2</em></strong>,<strong><em>3</em></strong>] => [<strong><em>0</em></strong>,<strong><em>1</em></strong>,<strong><em>2</em></strong>,<strong><em>3</em></strong>] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= sick.length &lt;= n - 1</code></li>&#10;	<li><code>0 &lt;= sick[i] &lt;= n - 1</code></li>&#10;	<li><code>sick</code> 按升序排列。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：组合数学 + 乘法逆元 + 快速幂 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>已感染下标把未感染者切成若干间隙。全部间隙的感染顺序是多重集排列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>!</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mo data-mjx-texclass="OP">&#x220F;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>!</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 为未感染总数。两端的间隙只能从内侧单向推进，中间间隙每次可从左右两端选一侧，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>x</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span> 种。</p>
<p>预处理阶乘，除法用逆元，幂用快速幂。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，线性预处理即可。</p>
</blockquote>
<p>根据题目描述，感冒的小朋友把还没有感冒的小朋友划分成了若干个连续段。我们可以用一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 记录每一段不感冒的小朋友的认识，不感冒人数一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
    </mrow>
  </munderover>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 人。我们可以发现，感冒序列的数目就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 个不同元素的全排列数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>!</mo>
</math></span>。</p>
<p>假设每一段不感冒小朋友只有一种传播方案，那么一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo>!</mo>
    </mrow>
    <mrow>
      <munderover>
        <mo data-mjx-texclass="OP">&#x220F;</mo>
        <mrow data-mjx-texclass="ORD">
          <mi>i</mi>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi>k</mi>
        </mrow>
      </munderover>
      <mi>n</mi>
      <mi>u</mi>
      <mi>m</mi>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>k</mi>
      <mo stretchy="false">]</mo>
      <mo>!</mo>
    </mrow>
  </mfrac>
</math></span> 种感冒序列。</p>
<p>接下来，我们再考虑每一段不感冒小朋友的传播方案。假设一段不感冒小朋友有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个人，那么他们的传播方案有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>x</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span> 种，因为每一次可以从一段的左右两端选择其中一端传播，即：两种选择，一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次传播。不过，如果是第一段或者最后一段，那么只有一种选择。</p>
<p>综上所述，总的感冒序列数目为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo>!</mo>
    </mrow>
    <mrow>
      <munderover>
        <mo data-mjx-texclass="OP">&#x220F;</mo>
        <mrow data-mjx-texclass="ORD">
          <mi>i</mi>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi>k</mi>
        </mrow>
      </munderover>
      <mi>n</mi>
      <mi>u</mi>
      <mi>m</mi>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>k</mi>
      <mo stretchy="false">]</mo>
      <mo>!</mo>
    </mrow>
  </mfrac>
  <munderover>
    <mo data-mjx-texclass="OP">&#x220F;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mi>u</mi>
      <mi>m</mi>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>i</mi>
      <mo stretchy="false">]</mo>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span><p>最后，我们需要考虑到答案可能很大，需要对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。因此，我们需要预处理阶乘和乘法逆元。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>i</mi>
  <mi>c</mi>
  <mi>k</mi>
</math></span> 的长度。忽略预处理数组的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>const MX = 1e5</span></span>
<span class="line"><span>const MOD = 1e9 + 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var fac [MX + 1]int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>	fac[0] = 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= MX; i++ {</span></span>
<span class="line"><span>		fac[i] = fac[i-1] * i % MOD</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func qpow(a, n int) int {</span></span>
<span class="line"><span>	ans := 1</span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		if n&#x26;1 == 1 {</span></span>
<span class="line"><span>			ans = (ans * a) % MOD</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		a = (a * a) % MOD</span></span>
<span class="line"><span>		n >>= 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func numberOfSequence(n int, sick []int) int {</span></span>
<span class="line"><span>	m := len(sick)</span></span>
<span class="line"><span>	nums := make([]int, m+1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	nums[0] = sick[0]</span></span>
<span class="line"><span>	nums[m] = n - sick[m-1] - 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		nums[i] = sick[i] - sick[i-1] - 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := fac[s]</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		if x > 0 {</span></span>
<span class="line"><span>			ans = ans * qpow(fac[x], MOD-2) % MOD</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; len(nums)-1; i++ {</span></span>
<span class="line"><span>		if nums[i] > 1 {</span></span>
<span class="line"><span>			ans = ans * qpow(2, nums[i]-1) % MOD</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-the-number-of-infection-sequences" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2954.Count%20the%20Number%20of%20Infection%20Sequences/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2961" tabindex="-1">2961. 双模幂运算 <a class="header-anchor" href="#q-2961" aria-label="Permalink to &quot;2961. 双模幂运算 {#q-2961}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0 </strong>开始的二维数组 <code>variables</code> ，其中 <code>variables[i] = [a<sub>i</sub>, b<sub>i</sub>, c<sub>i,</sub> m<sub>i</sub>]</code>，以及一个整数 <code>target</code> 。</p>&#10;&#10;<p>如果满足以下公式，则下标 <code>i</code> 是 <strong>好下标</strong>：</p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= i &lt; variables.length</code></li>&#10;	<li><code>((a<sub>i</sub><sup>b<sub>i</sub></sup> % 10)<sup>c<sub>i</sub></sup>) % m<sub>i</sub> == target</code></li>&#10;</ul>&#10;&#10;<p>返回一个由<strong> 好下标 </strong>组成的数组，<strong>顺序不限</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>variables = [[2,3,3,10],[3,3,3,1],[6,1,1,4]], target = 2&#10;<strong>输出：</strong>[0,2]&#10;<strong>解释：</strong>对于 variables 数组中的每个下标 i ：&#10;1) 对于下标 0 ，variables[0] = [2,3,3,10] ，(2<sup>3</sup> % 10)<sup>3</sup> % 10 = 2 。&#10;2) 对于下标 1 ，variables[1] = [3,3,3,1] ，(3<sup>3</sup> % 10)<sup>3</sup> % 1 = 0 。&#10;3) 对于下标 2 ，variables[2] = [6,1,1,4] ，(6<sup>1</sup> % 10)<sup>1</sup> % 4 = 2 。&#10;因此，返回 [0,2] 作为答案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>variables = [[39,3,1000,1000]], target = 17&#10;<strong>输出：</strong>[]&#10;<strong>解释：</strong>对于 variables 数组中的每个下标 i ：&#10;1) 对于下标 0 ，variables[0] = [39,3,1000,1000] ，(39<sup>3</sup> % 10)<sup>1000</sup> % 1000 = 1 。&#10;因此，返回 [] 作为答案。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= variables.length &lt;= 100</code></li>&#10;	<li><code>variables[i] == [a<sub>i</sub>, b<sub>i</sub>, c<sub>i</sub>, m<sub>i</sub>]</code></li>&#10;	<li><code>1 &lt;= a<sub>i</sub>, b<sub>i</sub>, c<sub>i</sub>, m<sub>i</sub> &lt;= 10<sup>3</sup></code></li>&#10;	<li><code>0 &lt;= target &lt;= 10<sup>3</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 + 快速幂 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msup>
    <mi>a</mi>
    <mi>b</mi>
  </msup>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>10</mn>
  <msup>
    <mo stretchy="false">)</mo>
    <mi>c</mi>
  </msup>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>m</mi>
</math></span> 是否等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>。指数与模均 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>3</mn>
  </msup>
</math></span>，直接快速幂两层即可，无需预处理。</p>
<p>外层枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 收集下标。</p>
</blockquote>
<p>我们直接根据题目描述模拟即可。对于幂运算取模，我们可以使用快速幂来加速运算。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mi>i</mi>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>c</mi>
    <mi>i</mi>
  </msub>
</math></span> 中的最大值，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>3</mn>
  </msup>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func getGoodIndices(variables [][]int, target int) (ans []int) {</span></span>
<span class="line"><span>	qpow := func(a, n, mod int) int {</span></span>
<span class="line"><span>		ans := 1</span></span>
<span class="line"><span>		for ; n > 0; n >>= 1 {</span></span>
<span class="line"><span>			if n&#x26;1 == 1 {</span></span>
<span class="line"><span>				ans = ans * a % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			a = a * a % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, e := range variables {</span></span>
<span class="line"><span>		a, b, c, m := e[0], e[1], e[2], e[3]</span></span>
<span class="line"><span>		if qpow(qpow(a, b, 10), c, m) == target {</span></span>
<span class="line"><span>			ans = append(ans, i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/double-modular-exponentiation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2961.Double%20Modular%20Exponentiation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2963" tabindex="-1">2963. 统计好分割方案的数目 <a class="header-anchor" href="#q-2963" aria-label="Permalink to &quot;2963. 统计好分割方案的数目 {#q-2963}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学、组合数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始、由 <strong>正整数</strong> 组成的数组 <code>nums</code>。</p>&#10;&#10;<p>将数组分割成一个或多个<strong> 连续</strong> 子数组，如果不存在包含了相同数字的两个子数组，则认为是一种 <strong>好分割方案</strong> 。</p>&#10;&#10;<p>返回 <code>nums</code> 的 <strong>好分割方案</strong> 的 <strong>数目</strong>。</p>&#10;&#10;<p>由于答案可能很大，请返回答案对 <code>10<sup>9</sup> + 7</code> <strong>取余</strong> 的结果。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,4]&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>有 8 种 <strong>好分割方案 </strong>：([1], [2], [3], [4]), ([1], [2], [3,4]), ([1], [2,3], [4]), ([1], [2,3,4]), ([1,2], [3], [4]), ([1,2], [3,4]), ([1,2,3], [4]) 和 ([1,2,3,4]) 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,1,1,1]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>唯一的 <strong>好分割方案</strong> 是：([1,1,1,1]) 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,1,3]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>有 2 种<strong> 好分割方案 </strong>：([1,2,1], [3]) 和 ([1,2,1,3]) 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 分组 + 快速幂 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>好划分要求相同值落在同一段，故每个值的首次到末次必须覆盖在一段内。用最后出现下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span> 把数组切成若干不可再拆的块；块与块之间的切缝可以任选切或不切。</p>
<p>扫描时用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 维护当前块右端，每当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>j</mi>
</math></span> 则块数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 加一。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 块有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 条可选缝，方案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span> 取模。</p>
</blockquote>
<p>根据题目描述，我们可以知道，相同的数字必须在同一个子数组中。因此，我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span> 记录每个数字最后一次出现的下标。</p>
<p>接下来，我们用一个下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 标识已经出现过的元素中最后一个元素的下标，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 记录当前可以划分的子数组的个数。</p>
<p>然后，我们从左到右遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，对于当前遍历到的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们获取其最后一次出现的下标，更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>j</mi>
</math></span>，那么说明当前位置可以是一个子数组的结尾，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。继续遍历，直到遍历完整个数组。</p>
<p>最后，我们考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个子数组的划分方案数。子数组数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个位置可以划分（拼接），因此方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span>。由于答案可能很大，我们需要对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。这里我们可以使用快速幂来加速运算。</p>
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
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfGoodPartitions(nums []int) int {</span></span>
<span class="line"><span>	qpow := func(a, n, mod int) int {</span></span>
<span class="line"><span>		ans := 1</span></span>
<span class="line"><span>		for ; n > 0; n >>= 1 {</span></span>
<span class="line"><span>			if n&#x26;1 == 1 {</span></span>
<span class="line"><span>				ans = ans * a % mod</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			a = a * a % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	last := map[int]int{}</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		last[x] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	j, k := -1, 0</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		j = max(j, last[x])</span></span>
<span class="line"><span>		if i == j {</span></span>
<span class="line"><span>			k++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return qpow(2, k-1, mod)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-the-number-of-good-partitions" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2963.Count%20the%20Number%20of%20Good%20Partitions/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2965" tabindex="-1">2965. 找出缺失和重复的数字 <a class="header-anchor" href="#q-2965" aria-label="Permalink to &quot;2965. 找出缺失和重复的数字 {#q-2965}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从<strong> 0 </strong>开始的二维整数矩阵 <code>grid</code>，大小为 <code>n * n</code> ，其中的值在 <code>[1, n<sup>2</sup>]</code> 范围内。除了 <code>a</code> 出现 <strong>两次</strong>，<code>b</code> <strong>缺失</strong> 之外，每个整数都<strong> 恰好出现一次</strong> 。</p>&#10;&#10;<p>任务是找出重复的数字<code>a</code> 和缺失的数字 <code>b</code> 。</p>&#10;&#10;<p>返回一个下标从 0 开始、长度为 <code>2</code> 的整数数组 <code>ans</code> ，其中 <code>ans[0]</code> 等于 <code>a</code> ，<code>ans[1]</code> 等于 <code>b</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[1,3],[2,2]]&#10;<strong>输出：</strong>[2,4]&#10;<strong>解释：</strong>数字 2 重复，数字 4 缺失，所以答案是 [2,4] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[9,1,7],[8,9,2],[3,4,6]]&#10;<strong>输出：</strong>[9,5]&#10;<strong>解释：</strong>数字 9 重复，数字 5 缺失，所以答案是 [9,5] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n == grid.length == grid[i].length &lt;= 50</code></li>&#10;	<li><code>1 &lt;= grid[i][j] &lt;= n * n</code></li>&#10;	<li>对于所有满足<code>1 &lt;= x &lt;= n * n</code> 的 <code>x</code> ，恰好存在一个 <code>x</code> 与矩阵中的任何成员都不相等。</li>&#10;	<li>对于所有满足<code>1 &lt;= x &lt;= n * n</code> 的 <code>x</code> ，恰好存在一个 <code>x</code> 与矩阵中的两个成员相等。</li>&#10;	<li>除上述的两个之外，对于所有满足<code>1 &lt;= x &lt;= n * n</code> 的 <code>x</code> ，都恰好存在一对 <code>i, j</code> 满足 <code>0 &lt;= i, j &lt;= n - 1</code> 且 <code>grid[i][j] == x</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span> 矩阵应含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2026;</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
</math></span> 各一次，却有一个重复、一个缺失。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span>，开 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的计数数组扫两遍即可。</p>
<p>出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 次者为重复， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 次者为缺失。无需数学公式。</p>
</blockquote>
<p>我们创建一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，统计矩阵中每个数字出现的次数。</p>
<p>接下来遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">]</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>2</mn>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 是重复的数字，我们将答案的第一个元素设为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 是缺失的数字，我们将答案的第二个元素设为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
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
</math></span> 是矩阵的边长。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMissingAndRepeatedValues(grid [][]int) []int {</span></span>
<span class="line"><span>	n := len(grid)</span></span>
<span class="line"><span>	ans := make([]int, 2)</span></span>
<span class="line"><span>	cnt := make([]int, n*n+1)</span></span>
<span class="line"><span>	for _, row := range grid {</span></span>
<span class="line"><span>		for _, x := range row {</span></span>
<span class="line"><span>			cnt[x]++</span></span>
<span class="line"><span>			if cnt[x] == 2 {</span></span>
<span class="line"><span>				ans[0] = x</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x := 1; ; x++ {</span></span>
<span class="line"><span>		if cnt[x] == 0 {</span></span>
<span class="line"><span>			ans[1] = x</span></span>
<span class="line"><span>			return ans</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-missing-and-repeated-values" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2965.Find%20Missing%20and%20Repeated%20Values/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3001" tabindex="-1">3001. 捕获黑皇后需要的最少移动次数 <a class="header-anchor" href="#q-3001" aria-label="Permalink to &quot;3001. 捕获黑皇后需要的最少移动次数 {#q-3001}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>现有一个下标从 <strong>1</strong> 开始的 <code>8 x 8</code> 棋盘，上面有 <code>3</code> 枚棋子。</p>&#10;&#10;<p>给你 <code>6</code> 个整数 <code>a</code> 、<code>b</code> 、<code>c</code> 、<code>d</code> 、<code>e</code> 和 <code>f</code> ，其中：</p>&#10;&#10;<ul>&#10;	<li><code>(a, b)</code> 表示白色车的位置。</li>&#10;	<li><code>(c, d)</code> 表示白色象的位置。</li>&#10;	<li><code>(e, f)</code> 表示黑皇后的位置。</li>&#10;</ul>&#10;&#10;<p>假定你只能移动白色棋子，返回捕获黑皇后所需的<strong>最少</strong>移动次数。</p>&#10;&#10;<p><strong>请注意</strong>：</p>&#10;&#10;<ul>&#10;	<li>车可以向垂直或水平方向移动任意数量的格子，但不能跳过其他棋子。</li>&#10;	<li>象可以沿对角线方向移动任意数量的格子，但不能跳过其他棋子。</li>&#10;	<li>如果车或象能移向皇后所在的格子，则认为它们可以捕获皇后。</li>&#10;	<li>皇后不能移动。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3001.Minimum%20Moves%20to%20Capture%20The%20Queen/images/ex1.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>a = 1, b = 1, c = 8, d = 8, e = 2, f = 3&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>将白色车先移动到 (1, 3) ，然后移动到 (2, 3) 来捕获黑皇后，共需移动 2 次。&#10;由于起始时没有任何棋子正在攻击黑皇后，要想捕获黑皇后，移动次数不可能少于 2 次。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3001.Minimum%20Moves%20to%20Capture%20The%20Queen/images/ex2.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>a = 5, b = 3, c = 3, d = 4, e = 5, f = 2&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>可以通过以下任一方式移动 1 次捕获黑皇后：&#10;- 将白色车移动到 (5, 2) 。&#10;- 将白色象移动到 (5, 2) 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= a, b, c, d, e, f &lt;= 8</code></li>&#10;	<li>两枚棋子不会同时出现在同一个格子上。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：分类讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>棋盘仅 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mn>8</mn>
</math></span>，枚举车、象的走法并模拟阻挡在常数时间内可行。车与象各自最多走一步即可到达任意与自己共线的格子，因此答案至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。</p>
<p>真正需要判定的是「一步能否直接吃到皇后」。车同行列、象同对角线时，只要中间没有另一枚己方棋子挡住，一步即可。</p>
<p>代码用乘积 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">)</mo>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span> 等判断挡子是否落在开区间外侧。四类共线均不成立时，车绕行两步总能吃到皇后。</p>
</blockquote>
<p>根据题意，我们可以将捕获黑皇后的情况分为以下几种：</p>
<ol>
<li>白色车和黑皇后在同一行，且中间没有其他棋子，此时只需要移动白色车 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 一次；</li>
<li>白色车和黑皇后在同一列，且中间没有其他棋子，此时只需要移动白色车 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 一次；</li>
<li>白色象和黑皇后在对角线 <code v-pre>\\</code> 上，且中间没有其他棋子，此时只需要移动白色象 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 一次；</li>
<li>白色象和黑皇后在对角线 <code v-pre>/</code> 上，且中间没有其他棋子，此时只需要移动白色象 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 一次；</li>
<li>其他情况，只需要移动两次。</li>
</ol>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minMovesToCaptureTheQueen(a int, b int, c int, d int, e int, f int) int {</span></span>
<span class="line"><span>	if a == e &#x26;&#x26; (c != a || (d-b)*(d-f) > 0) {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if b == f &#x26;&#x26; (d != b || (c-a)*(c-e) > 0) {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if c-e == d-f &#x26;&#x26; (a-e != b-f || (a-c)*(a-e) > 0) {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if c-e == f-d &#x26;&#x26; (a-e != f-b || (a-c)*(a-e) > 0) {</span></span>
<span class="line"><span>		return 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-moves-to-capture-the-queen" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3001.Minimum%20Moves%20to%20Capture%20The%20Queen/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3021" tabindex="-1">3021. Alice 和 Bob 玩鲜花游戏 <a class="header-anchor" href="#q-3021" aria-label="Permalink to &quot;3021. Alice 和 Bob 玩鲜花游戏 {#q-3021}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Alice 和 Bob 在一片田野上玩一个回合制游戏，他们之间有两排花。Alice 和 Bob 之间第一排有 <code>x</code> 朵花，第二排有 <code>y</code> 朵花。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3021.Alice%20and%20Bob%20Playing%20Flower%20Game/images/3021.png" loading="lazy"></p>&#10;&#10;<p>游戏过程如下：</p>&#10;&#10;<ol>&#10;	<li>Alice 先行动。</li>&#10;	<li>每一次行动中，当前玩家必须选择其中一排，然后在这边摘一朵鲜花。</li>&#10;	<li>一次行动结束后，如果两排上都没有剩下鲜花，那么 <strong>当前</strong> 玩家抓住对手并赢得游戏的胜利。</li>&#10;</ol>&#10;&#10;<p>给你两个整数 <code>n</code> 和 <code>m</code> ，你的任务是求出满足以下条件的所有 <code>(x, y)</code> 对：</p>&#10;&#10;<ul>&#10;	<li>按照上述规则，Alice 必须赢得游戏。</li>&#10;	<li>第一排的鲜花数目 <code>x</code> 必须在区间 <code>[1,n]</code> 之间。</li>&#10;	<li>第二排的鲜花数目 <code>y</code> 必须在区间 <code>[1,m]</code> 之间。</li>&#10;</ul>&#10;&#10;<p>请你返回满足题目描述的数对 <code>(x, y)</code> 的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 3, m = 2&#10;<b>输出：</b>3&#10;<b>解释：</b>以下数对满足题目要求：(1,2) ，(3,2) ，(2,1) 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 1, m = 1&#10;<b>输出：</b>0&#10;<b>解释：</b>没有数对满足题目要求。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n, m &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每步从某一行摘一朵，先手在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 为奇数时获胜。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，枚举格子不可行。</p>
<p>奇数对偶数、偶数对奇数各构成合法对。两侧奇数个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span> 等，乘积相加即得。</p>
<p>因此用整除直接计算四类奇偶个数再交叉相乘。</p>
</blockquote>
<p>根据题目描述，每一次行动，玩家都会选择顺时针或者逆时针方向，然后摘一朵鲜花。由于 Alice 先行动，因此当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 为奇数时，Alice 一定会赢得游戏。</p>
<p>因此，鲜花数目 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 满足以下条件：</p>
<ol>
<li><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 为奇数；</li>
<li><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
</math></span>；</li>
<li><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>y</mi>
  <mo>&#x2264;</mo>
  <mi>m</mi>
</math></span>。</li>
</ol>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 为奇数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 一定为偶数。此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的取值个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的取值个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>，因此满足条件的数对个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x2309;</mo>
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 为偶数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 一定为奇数。此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的取值个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的取值个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span>，因此满足条件的数对个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span>。</p>
<p>因此，满足条件的数对个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x2309;</mo>
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>+</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>+</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>m</mi>
      <mo>+</mo>
      <mn>1</mn>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func flowerGame(n int, m int) int64 {</span></span>
<span class="line"><span>	a1, b1 := (n+1)/2, (m+1)/2</span></span>
<span class="line"><span>	a2, b2 := n/2, m/2</span></span>
<span class="line"><span>	return int64(a1*b2 + a2*b1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：数学（优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一的交叉乘积按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>m</mi>
</math></span> 的奇偶展开后，四种情形均可写成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>n</mi>
  <mi>m</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。</p>
<p>因此不必再分奇偶，一次整除乘法即可。</p>
</blockquote>
<p>方法一得出的结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>+</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>&#xD7;</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>m</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 都是奇数，那么结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mrow>
      <mi>m</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo>+</mo>
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mrow>
      <mi>m</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>&#xD7;</mo>
      <mi>m</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 都是偶数，那么结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo>+</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>&#xD7;</mo>
      <mi>m</mi>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是奇数，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是偶数，那么结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
  <mo>+</mo>
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mi>m</mi>
    <mn>2</mn>
  </mfrac>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>&#xD7;</mo>
      <mi>m</mi>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是偶数，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是奇数，那么结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mrow>
      <mi>m</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
  <mo>+</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo>&#xD7;</mo>
  <mfrac>
    <mrow>
      <mi>m</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>&#xD7;</mo>
      <mi>m</mi>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>。</p>
<p>上面四种情况可以合并为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mfrac>
    <mrow>
      <mi>n</mi>
      <mo>&#xD7;</mo>
      <mi>m</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func flowerGame(n int, m int) int64 {</span></span>
<span class="line"><span>	return int64((n * m) / 2)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/alice-and-bob-playing-flower-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3021.Alice%20and%20Bob%20Playing%20Flower%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3024" tabindex="-1">3024. 三角形类型 <a class="header-anchor" href="#q-3024" aria-label="Permalink to &quot;3024. 三角形类型 {#q-3024}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、多边形、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始长度为 <code>3</code> 的整数数组 <code>nums</code> ，需要用它们来构造三角形。</p>&#10;&#10;<ul>&#10;	<li>如果一个三角形的所有边长度相等，那么这个三角形称为 <strong>equilateral</strong> 。</li>&#10;	<li>如果一个三角形恰好有两条边长度相等，那么这个三角形称为 <strong>isosceles</strong> 。</li>&#10;	<li>如果一个三角形三条边的长度互不相同，那么这个三角形称为 <strong>scalene</strong> 。</li>&#10;</ul>&#10;&#10;<p>如果这个数组无法构成一个三角形，请你返回字符串 <code>&quot;none&quot;</code> ，否则返回一个字符串表示这个三角形的类型。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [3,3,3]&#10;<b>输出：</b>&quot;equilateral&quot;&#10;<b>解释：</b>由于三条边长度相等，所以可以构成一个等边三角形，返回 &quot;equilateral&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [3,4,5]&#10;<b>输出：</b>&quot;scalene&quot;&#10;<b>解释：</b>&#10;nums[0] + nums[1] = 3 + 4 = 7 ，大于 nums[2] = 5 <span>。</span>&#10;nums[0] + nums[2] = 3 + 5 = 8 ，大于 nums[1] = 4 。&#10;nums[1] + nums[2] = 4 + 5 = 9 ，大于 nums[0] = 3 。&#10;由于任意两边之和都大于第三边，所以可以构成一个三角形，因为三条边的长度互不相等，所以返回 &quot;scalene&quot;。&#10;</pre>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>nums.length == 3</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 分类讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三边已给出且范围很小。先判定能否构成三角形，再区分等边、等腰与不等边。</p>
<p>排序后三角形不等式化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&gt;</mo>
  <mi>c</mi>
</math></span>；等边即最小等于最大；等腰即相邻两边相等。</p>
<p>为此先排序再按上述顺序分支。</p>
</blockquote>
<p>我们先对数组进行排序，然后根据三角形的定义进行分类讨论即可。</p>
<ul>
<li>如果最小的两个数之和小于等于最大的数，那么无法构成三角形，返回 &quot;none&quot;。</li>
<li>如果最小的数等于最大的数，那么是等边三角形，返回 &quot;equilateral&quot;。</li>
<li>如果最小的数等于中间的数或者中间的数等于最大的数，那么是等腰三角形，返回 &quot;isosceles&quot;。</li>
<li>否则，返回 &quot;scalene&quot;。</li>
</ul>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func triangleType(nums []int) string {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	if nums[0]+nums[1] &#x3C;= nums[2] {</span></span>
<span class="line"><span>		return "none"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if nums[0] == nums[2] {</span></span>
<span class="line"><span>		return "equilateral"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if nums[0] == nums[1] || nums[1] == nums[2] {</span></span>
<span class="line"><span>		return "isosceles"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return "scalene"</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/type-of-triangle" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3024.Type%20of%20Triangle/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3025" tabindex="-1">3025. 人员站位的方案数 I <a class="header-anchor" href="#q-3025" aria-label="Permalink to &quot;3025. 人员站位的方案数 I {#q-3025}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、枚举、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个  <code>n x 2</code> 的二维数组 <code>points</code> ，它表示二维平面上的一些点坐标，其中 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p>计算点对 <code>(A, B)</code> 的数量，其中</p>&#10;&#10;<ul>&#10;	<li><code>A</code> 在 <code>B</code> 的左上角，并且</li>&#10;	<li>它们形成的长方形中（或直线上）没有其它点（<strong>包括边界</strong>），除了点 <code>A</code> 和点 <code>B</code>。</li>&#10;</ul>&#10;&#10;<p>返回数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>points = [[1,1],[2,2],[3,3]]</span></p>&#10;&#10;<p><span><b>输出：</b>0</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3025.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20I/images/example1alicebob.png" loading="lazy"></p>&#10;&#10;<p>没有办法选择 <code>A</code> 和 <code>B</code>，使得 <code>A</code> 在 <code>B</code> 的左上角。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b></span><span>points = [[6,2],[4,4],[2,6]]</span></p>&#10;&#10;<p><span><b>输出：</b></span><span>2</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3025.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20I/images/t2.jpg" loading="lazy"></p>&#10;&#10;<ul>&#10;	<li>左边的是点对 <code>(points[1], points[0])</code>，其中 <code>points[1]</code> 在 <code>points[0]</code> 的左上角，并且形成的长方形内部是空的。</li>&#10;	<li>中间的是点对 <code>(points[2], points[1])</code>，和左边的一样是合法的点对。</li>&#10;	<li>右边的是点对 <code>(points[2], points[0])</code>，其中 <code>points[2]</code> 在 <code>points[0]</code> 的左上角，但 <code>points[1]</code> 在长方形内部，所以不是一个合法的点对。</li>&#10;</ul>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b></span><span>points = [[3,1],[1,3],[1,1]]</span></p>&#10;&#10;<p><span><b>输出：</b></span><span>2</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3025.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20I/images/t3.jpg" loading="lazy"></p>&#10;&#10;<ul>&#10;	<li>左边的是点对 <code>(points[2], points[0])</code>，其中 <code>points[2]</code> 在 <code>points[0]</code> 的左上角并且在它们形成的直线上没有其它点。注意两个点形成一条线的情况是合法的。</li>&#10;	<li>中间的是点对 <code>(points[1], points[2])</code>，和左边一样也是合法的点对。</li>&#10;	<li>右边的是点对 <code>(points[1], points[0])</code>，它不是合法的点对，因为 <code>points[2]</code> 在长方形的边上。</li>&#10;</ul>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n &lt;= 50</code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>0 &lt;= points[i][0], points[i][1] &lt;= 50</code></li>&#10;	<li><code>points[i]</code> 点对两两不同。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span>，枚举左上角与右下角后检查矩形内是否有其它点，最坏 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 可过，但重复检查较多。</p>
<p>将点按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 升序、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 相同时按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 降序排列后，从左到右扫描时候选右下角的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 必须严格递增，否则会落入已形成的矩形内部。</p>
<p>为此对每个左上角维护已选用的最大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>，仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxY</mtext>
  <mo>&lt;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2264;</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
</math></span> 时计一对并更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxY</mtext>
</math></span>。</p>
</blockquote>
<p>我们不妨考虑枚举矩形左上角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，那么根据题目，右下角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 随着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的增大，纵坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 也会要严格增大，才符合题意。</p>
<p>因此，我们对所有点按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 坐标升序排序，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 坐标相同，按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 坐标降序排序。</p>
<p>然后我们枚举左上角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，并且维护一个最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>Y</mi>
</math></span>，表示所有右下角的点的纵坐标的最大值。然后我们枚举右下角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>Y</mi>
</math></span> 并且小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
</math></span>，那么我们就找到了一个合法的方案，将答案加一，然后更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>Y</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>。</p>
<p>枚举完所有的点对后，我们就得到了答案。</p>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是点的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfPairs(points [][]int) (ans int) {</span></span>
<span class="line"><span>	sort.Slice(points, func(i, j int) bool {</span></span>
<span class="line"><span>		return points[i][0] &#x3C; points[j][0] || points[i][0] == points[j][0] &#x26;&#x26; points[j][1] &#x3C; points[i][1]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	for i, p1 := range points {</span></span>
<span class="line"><span>		y1 := p1[1]</span></span>
<span class="line"><span>		maxY := math.MinInt32</span></span>
<span class="line"><span>		for _, p2 := range points[i+1:] {</span></span>
<span class="line"><span>			y2 := p2[1]</span></span>
<span class="line"><span>			if maxY &#x3C; y2 &#x26;&#x26; y2 &#x3C;= y1 {</span></span>
<span class="line"><span>				maxY = y2</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-i" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3025.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20I/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3027" tabindex="-1">3027. 人员站位的方案数 II <a class="header-anchor" href="#q-3027" aria-label="Permalink to &quot;3027. 人员站位的方案数 II {#q-3027}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、枚举、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个  <code>n x 2</code> 的二维数组 <code>points</code> ，它表示二维平面上的一些点坐标，其中 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 。</p>&#10;&#10;<p>我们定义 x 轴的正方向为 <strong>右</strong> （<strong>x 轴递增的方向</strong>），x 轴的负方向为 <strong>左</strong> （<strong>x 轴递减的方向</strong>）。类似的，我们定义 y 轴的正方向为 <strong>上</strong> （<strong>y 轴递增的方向</strong>），y 轴的负方向为 <strong>下</strong> （<strong>y 轴递减的方向</strong>）。</p>&#10;&#10;<p>你需要安排这 <code>n</code> 个人的站位，这 <code>n</code> 个人中包括 Alice 和 Bob 。你需要确保每个点处 <strong>恰好</strong> 有 <strong>一个</strong> 人。同时，Alice 想跟 Bob 单独玩耍，所以 Alice 会以 Alice<b> </b>的坐标为 <strong>左上角</strong> ，Bob 的坐标为 <strong>右下角</strong> 建立一个矩形的围栏（<strong>注意</strong>，围栏可能 <strong>不</strong> 包含任何区域，也就是说围栏可能是一条线段）。如果围栏的 <strong>内部</strong> 或者 <strong>边缘</strong> 上有任何其他人，Alice 都会难过。</p>&#10;&#10;<p>请你在确保 Alice <strong>不会</strong> 难过的前提下，返回 Alice 和 Bob 可以选择的 <strong>点对</strong> 数目。</p>&#10;&#10;<p><b>注意</b>，Alice 建立的围栏必须确保 Alice 的位置是矩形的左上角，Bob 的位置是矩形的右下角。比方说，以 <code>(1, 1)</code> ，<code>(1, 3)</code> ，<code>(3, 1)</code> 和 <code>(3, 3)</code> 为矩形的四个角，给定下图的两个输入，Alice 都不能建立围栏，原因如下：</p>&#10;&#10;<ul>&#10;	<li>图一中，Alice 在 <code>(3, 3)</code> 且 Bob 在 <code>(1, 1)</code> ，Alice 的位置不是左上角且 Bob 的位置不是右下角。</li>&#10;	<li>图二中，Alice 在 <code>(1, 3)</code> 且 Bob 在 <code>(1, 1)</code>（如图所示，用矩形代替线条），Bob 的位置不是在围栏的右下角。</li>&#10;</ul>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3027.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20II/images/example0alicebob-1.png" loading="lazy">&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3027.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20II/images/example1alicebob.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<b>输入：</b>points = [[1,1],[2,2],[3,3]]&#10;<b>输出：</b>0&#10;<strong>解释：</strong>没有办法可以让 Alice 的围栏以 Alice 的位置为左上角且 Bob 的位置为右下角。所以我们返回 0 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><a href="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3027.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20II/images/1708226715-CxjXKb-20240218-112338.jpeg" target="_blank" rel="noopener noreferrer"><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3027.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20II/images/1708226715-CxjXKb-20240218-112338.jpeg" loading="lazy"></a></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>points = [[6,2],[4,4],[2,6]]&#10;<b>输出：</b>2&#10;<b>解释：</b>总共有 2 种方案安排 Alice 和 Bob 的位置，使得 Alice 不会难过：&#10;- Alice 站在 (4, 4) ，Bob 站在 (6, 2) 。&#10;- Alice 站在 (2, 6) ，Bob 站在 (4, 4) 。&#10;不能安排 Alice 站在 (2, 6) 且 Bob 站在 (6, 2) ，因为站在 (4, 4) 的人处于围栏内。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><strong><a href="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3027.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20II/images/1708226721-wTbEuK-20240218-112351.jpeg" target="_blank" rel="noopener noreferrer"><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3027.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20II/images/1708226721-wTbEuK-20240218-112351.jpeg" loading="lazy"></a></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>points = [[3,1],[1,3],[1,1]]&#10;<b>输出：</b>2&#10;<b>解释：</b>总共有 2 种方案安排 Alice 和 Bob 的位置，使得 Alice 不会难过：&#10;- Alice 站在 (1, 1) ，Bob 站在 (3, 1) 。&#10;- Alice 站在 (1, 3) ，Bob 站在 (1, 1) 。&#10;不能安排 Alice 站在 (1, 3) 且 Bob 站在 (3, 1) ，因为站在 (1, 1) 的人处于围栏内。&#10;注意围栏是可以不包含任何面积的，上图中第一和第二个围栏都是合法的。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n &lt;= 1000</code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= points[i][0], points[i][1] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>points[i]</code> 点对两两不同。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>题意与 I 相同，但 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，原先若采用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 检查矩形内部则会超时。</p>
<p>I 中「排序后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 严格递增」的观察与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 无关，枚举点对已是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，恰好落在本约束可接受的范围内。</p>
<p>因此沿用同一排序与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxY</mtext>
</math></span> 扫描，无需再检查矩形内部的其它点。</p>
</blockquote>
<p>我们不妨考虑枚举矩形左上角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，那么根据题目，右下角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 随着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的增大，纵坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 也会要严格增大，才符合题意。</p>
<p>因此，我们对所有点按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 坐标升序排序，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 坐标相同，按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 坐标降序排序。</p>
<p>然后我们枚举左上角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，并且维护一个最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>Y</mi>
</math></span>，表示所有右下角的点的纵坐标的最大值。然后我们枚举右下角的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>Y</mi>
</math></span> 并且小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
</math></span>，那么我们就找到了一个合法的方案，将答案加一，然后更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>Y</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>。</p>
<p>枚举完所有的点对后，我们就得到了答案。</p>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是点的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfPairs(points [][]int) (ans int) {</span></span>
<span class="line"><span>	sort.Slice(points, func(i, j int) bool {</span></span>
<span class="line"><span>		return points[i][0] &#x3C; points[j][0] || points[i][0] == points[j][0] &#x26;&#x26; points[j][1] &#x3C; points[i][1]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	for i, p1 := range points {</span></span>
<span class="line"><span>		y1 := p1[1]</span></span>
<span class="line"><span>		maxY := math.MinInt32</span></span>
<span class="line"><span>		for _, p2 := range points[i+1:] {</span></span>
<span class="line"><span>			y2 := p2[1]</span></span>
<span class="line"><span>			if maxY &#x3C; y2 &#x26;&#x26; y2 &#x3C;= y1 {</span></span>
<span class="line"><span>				maxY = y2</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3027.Find%20the%20Number%20of%20Ways%20to%20Place%20People%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3044" tabindex="-1">3044. 出现频率最高的质数 <a class="header-anchor" href="#q-3044" aria-label="Permalink to &quot;3044. 出现频率最高的质数 {#q-3044}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学、计数、枚举、矩阵、数论、素性测试、筛法、素数筛法</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m x n</code> 、下标从 <strong>0</strong> 开始的二维矩阵 <code>mat</code> 。在每个单元格，你可以按以下方式生成数字：</p>&#10;&#10;<ul>&#10;	<li>最多有 <code>8</code> 条路径可以选择：东，东南，南，西南，西，西北，北，东北。</li>&#10;	<li>选择其中一条路径，沿着这个方向移动，并且将路径上的数字添加到正在形成的数字后面。</li>&#10;	<li>注意，每一步都会生成数字，例如，如果路径上的数字是 <code>1, 9, 1</code>，那么在这个方向上会生成三个数字：<code>1, 19, 191</code> 。</li>&#10;</ul>&#10;&#10;<p>返回在遍历矩阵所创建的所有数字中，出现频率最高的、<strong>大于</strong> <code>10</code>的<span>质数</span>；如果不存在这样的质数，则返回 <code>-1</code><em> </em>。如果存在多个出现频率最高的质数，那么返回其中最大的那个。</p>&#10;&#10;<p><strong>注意：</strong>移动过程中不允许改变方向。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3044.Most%20Frequent%20Prime/images/south" loading="lazy"> </strong>&#10;&#10;<pre>&#10;<strong>&#10;输入：</strong>mat = [[1,1],[9,9],[1,1]]&#10;<strong>输出：</strong>19&#10;<strong>解释：</strong> &#10;从单元格 (0,0) 出发，有 3 个可能的方向，这些方向上可以生成的大于 10 的数字有：&#10;东方向: [11], 东南方向: [19], 南方向: [19,191] 。&#10;从单元格 (0,1) 出发，所有可能方向上生成的大于 10 的数字有：[19,191,19,11] 。&#10;从单元格 (1,0) 出发，所有可能方向上生成的大于 10 的数字有：[99,91,91,91,91] 。&#10;从单元格 (1,1) 出发，所有可能方向上生成的大于 10 的数字有：[91,91,99,91,91] 。&#10;从单元格 (2,0) 出发，所有可能方向上生成的大于 10 的数字有：[11,19,191,19] 。&#10;从单元格 (2,1) 出发，所有可能方向上生成的大于 10 的数字有：[11,19,19,191] 。&#10;在所有生成的数字中，出现频率最高的质数是 19 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mat = [[7]]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>唯一可以生成的数字是 7 。它是一个质数，但不大于 10 ，所以返回 -1 。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mat = [[9,7,8],[4,6,5],[2,8,6]]&#10;<strong>输出：</strong>97&#10;<strong>解释：</strong> &#10;从单元格 (0,0) 出发，所有可能方向上生成的大于 10 的数字有: [97,978,96,966,94,942] 。&#10;从单元格 (0,1) 出发，所有可能方向上生成的大于 10 的数字有: [78,75,76,768,74,79] 。&#10;从单元格 (0,2) 出发，所有可能方向上生成的大于 10 的数字有: [85,856,86,862,87,879] 。&#10;从单元格 (1,0) 出发，所有可能方向上生成的大于 10 的数字有: [46,465,48,42,49,47] 。&#10;从单元格 (1,1) 出发，所有可能方向上生成的大于 10 的数字有: [65,66,68,62,64,69,67,68] 。&#10;从单元格 (1,2) 出发，所有可能方向上生成的大于 10 的数字有: [56,58,56,564,57,58] 。&#10;从单元格 (2,0) 出发，所有可能方向上生成的大于 10 的数字有: [28,286,24,249,26,268] 。&#10;从单元格 (2,1) 出发，所有可能方向上生成的大于 10 的数字有: [86,82,84,86,867,85] 。&#10;从单元格 (2,2) 出发，所有可能方向上生成的大于 10 的数字有: [68,682,66,669,65,658] 。&#10;在所有生成的数字中，出现频率最高的质数是 97 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == mat.length</code></li>&#10;	<li><code>n == mat[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 6</code></li>&#10;	<li><code>1 &lt;= mat[i][j] &lt;= 9</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>矩阵至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>6</mn>
  <mo>&#xD7;</mo>
  <mn>6</mn>
</math></span>，从每格沿 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span> 个方向拼出的数个数很少。需要其中大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的质数的众数，并列时取较大者。</p>
<p>方向与步数均可枚举，对每个拼出的数做试除判定素性并计数。</p>
<p>最后扫描计数表，按频次、数值选取答案；若没有质数则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们可以使用哈希表来统计每个大于 10 的素数出现的次数。</p>
<p>对于每个单元格，我们可以从它出发，沿着 8 个方向之一生成数字，然后判断生成的数字是否是大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的素数，如果是的话，就将它加入到哈希表中。</p>
<p>最后，我们遍历哈希表，找到出现频率最高的质数，如果有多个出现频率最高的质数，那么返回其中最大的那个。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <msup>
    <mrow data-mjx-texclass="ORD">
      <mn>10</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mfrac>
        <mrow>
          <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
          <mo stretchy="false">(</mo>
          <mi>m</mi>
          <mo>,</mo>
          <mi>n</mi>
          <mo stretchy="false">)</mo>
        </mrow>
        <mn>2</mn>
      </mfrac>
    </mrow>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是 <code v-pre>mat</code> 的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mostFrequentPrime(mat [][]int) int {</span></span>
<span class="line"><span>	m, n := len(mat), len(mat[0])</span></span>
<span class="line"><span>	cnt := make(map[int]int)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			for a := -1; a &#x3C;= 1; a++ {</span></span>
<span class="line"><span>				for b := -1; b &#x3C;= 1; b++ {</span></span>
<span class="line"><span>					if a == 0 &#x26;&#x26; b == 0 {</span></span>
<span class="line"><span>						continue</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					x, y, v := i+a, j+b, mat[i][j]</span></span>
<span class="line"><span>					for x >= 0 &#x26;&#x26; x &#x3C; m &#x26;&#x26; y >= 0 &#x26;&#x26; y &#x3C; n {</span></span>
<span class="line"><span>						v = v*10 + mat[x][y]</span></span>
<span class="line"><span>						if isPrime(v) {</span></span>
<span class="line"><span>							cnt[v]++</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>						x += a</span></span>
<span class="line"><span>						y += b</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, mx := -1, 0</span></span>
<span class="line"><span>	for v, x := range cnt {</span></span>
<span class="line"><span>		if mx &#x3C; x || (mx == x &#x26;&#x26; ans &#x3C; v) {</span></span>
<span class="line"><span>			mx = x</span></span>
<span class="line"><span>			ans = v</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func isPrime(n int) bool {</span></span>
<span class="line"><span>	for i := 2; i &#x3C;= n/i; i++ {</span></span>
<span class="line"><span>		if n%i == 0 {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-frequent-prime" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3044.Most%20Frequent%20Prime/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3047" tabindex="-1">3047. 求交集区域内的最大正方形面积 <a class="header-anchor" href="#q-3047" aria-label="Permalink to &quot;3047. 求交集区域内的最大正方形面积 {#q-3047}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在二维平面上存在 <code>n</code> 个矩形。给你两个下标从 <strong>0</strong> 开始的二维整数数组 <code>bottomLeft</code> 和 <code>topRight</code>，两个数组的大小都是 <code>n x 2</code> ，其中 <code>bottomLeft[i]</code> 和 <code>topRight[i]</code> 分别代表第 <code>i</code> 个矩形的<strong> 左下角 </strong>和 <strong>右上角 </strong>坐标。</p>&#10;&#10;<p>我们定义 <strong>向右 </strong>的方向为 x 轴正半轴（<strong>x 坐标增加</strong>），<strong>向左 </strong>的方向为 x 轴负半轴（<strong>x 坐标减少</strong>）。同样地，定义 <strong>向上 </strong>的方向为 y 轴正半轴（<strong>y 坐标增加</strong>）<strong>，向下 </strong>的方向为 y 轴负半轴（<strong>y 坐标减少</strong>）。</p>&#10;&#10;<p>你可以选择一个区域，该区域由两个矩形的 <strong>交集</strong> 形成。你需要找出能够放入该区域 <strong>内 </strong>的<strong> 最大 </strong>正方形面积，并选择最优解。</p>&#10;&#10;<p>返回能够放入交集区域的正方形的 <strong>最大 </strong>可能面积，如果矩形之间不存在任何交集区域，则返回 <code>0</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3047.Find%20the%20Largest%20Area%20of%20Square%20Inside%20Two%20Rectangles/images/example12.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>边长为 1 的正方形可以放入矩形 0 和矩形 1 的交集区域，或矩形 1 和矩形 2 的交集区域。因此最大面积是边长 * 边长，即 1 * 1 = 1。&#10;可以证明，边长更大的正方形无法放入任何交集区域。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3047.Find%20the%20Largest%20Area%20of%20Square%20Inside%20Two%20Rectangles/images/rectanglesexample2.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>bottomLeft = [[1,1],[2,2],[1,2]], topRight = [[3,3],[4,4],[3,4]]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>边长为 1 的正方形可以放入矩形 0 和矩形 1，矩形 1 和矩形 2，或所有三个矩形的交集区域。因此最大面积是边长 * 边长，即 1 * 1 = 1。&#10;可以证明，边长更大的正方形无法放入任何交集区域。&#10;请注意，区域可以由多于两个矩形的交集构成。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3000-3099/3047.Find%20the%20Largest%20Area%20of%20Square%20Inside%20Two%20Rectangles/images/rectanglesexample3.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>bottomLeft = [[1,1],[3,3],[3,1]], topRight = [[2,2],[4,4],[4,2]]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>不存在相交的矩形，因此，返回 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == bottomLeft.length == topRight.length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 10<sup>3</sup></code></li>&#10;	<li><code>bottomLeft[i].length == topRight[i].length == 2</code></li>&#10;	<li><code>1 &lt;= bottomLeft[i][0], bottomLeft[i][1] &lt;= 10<sup>7</sup></code></li>&#10;	<li><code>1 &lt;= topRight[i][0], topRight[i][1] &lt;= 10<sup>7</sup></code></li>&#10;	<li><code>bottomLeft[i][0] &lt; topRight[i][0]</code></li>&#10;	<li><code>bottomLeft[i][1] &lt; topRight[i][1]</code></li>&#10;</ul></div>
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
    <mn>3</mn>
  </msup>
</math></span> 个矩形，正方形必须完全落在某两个矩形的交集内。边长受交集宽高的较小者限制。</p>
<p>两矩形交集的宽高可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 算出，枚举所有矩形对并取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>w</mi>
  <mo>,</mo>
  <mi>h</mi>
  <msup>
    <mo stretchy="false">)</mo>
    <mn>2</mn>
  </msup>
</math></span> 的最大值即可。</p>
<p>无正面积交集时贡献为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们可以枚举两个矩形，其中矩形 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的左下角和右上角坐标分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，矩形 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的左下角和右上角坐标分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>3</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>3</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>4</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>4</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>如果矩形 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 和矩形 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 有交集，那么交集的坐标分别为：</p>
<ul>
<li>左下角横坐标是两个矩形左下角横坐标的最大值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>3</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>左下角纵坐标是两个矩形左下角纵坐标的最大值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>3</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>右上角横坐标是两个矩形右上角横坐标的最小值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>4</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>；</li>
<li>右上角纵坐标是两个矩形右上角纵坐标的最小值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>4</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ul>
<p>那么交集的宽和高分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>4</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>3</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>4</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>3</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。我们取两者的最小值作为边长，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>w</mi>
  <mo>,</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>，那么我们就可以得到一个正方形，其面积为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>e</mi>
    <mn>2</mn>
  </msup>
</math></span>，我们取所有正方形的最大面积即可。</p>
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
</math></span> 是矩形的数量。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestSquareArea(bottomLeft [][]int, topRight [][]int) (ans int64) {</span></span>
<span class="line"><span>	for i, b1 := range bottomLeft {</span></span>
<span class="line"><span>		t1 := topRight[i]</span></span>
<span class="line"><span>		x1, y1 := b1[0], b1[1]</span></span>
<span class="line"><span>		x2, y2 := t1[0], t1[1]</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; len(bottomLeft); j++ {</span></span>
<span class="line"><span>			x3, y3 := bottomLeft[j][0], bottomLeft[j][1]</span></span>
<span class="line"><span>			x4, y4 := topRight[j][0], topRight[j][1]</span></span>
<span class="line"><span>			w := min(x2, x4) - max(x1, x3)</span></span>
<span class="line"><span>			h := min(y2, y4) - max(y1, y3)</span></span>
<span class="line"><span>			e := min(w, h)</span></span>
<span class="line"><span>			if e > 0 {</span></span>
<span class="line"><span>				ans = max(ans, int64(e)*int64(e))</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-largest-area-of-square-inside-two-rectangles" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3047.Find%20the%20Largest%20Area%20of%20Square%20Inside%20Two%20Rectangles/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3079" tabindex="-1">3079. 求出加密整数的和 <a class="header-anchor" href="#q-3079" aria-label="Permalink to &quot;3079. 求出加密整数的和 {#q-3079}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> ，数组中的元素都是 <strong>正</strong> 整数。定义一个加密函数 <code>encrypt</code> ，<code>encrypt(x)</code> 将一个整数 <code>x</code> 中 <strong>每一个</strong> 数位都用 <code>x</code> 中的 <strong>最大</strong> 数位替换。比方说 <code>encrypt(523) = 555</code> 且 <code>encrypt(213) = 333</code> 。</p>&#10;&#10;<p>请你返回数组中所有元素加密后的 <strong>和</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [1,2,3]</span></p>&#10;&#10;<p><strong>输出：</strong><span>6</span></p>&#10;&#10;<p><b>解释：</b>加密后的元素位 <code>[1,2,3]</code> 。加密元素的和为 <code>1 + 2 + 3 == 6</code> 。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [10,21,31]</span></p>&#10;&#10;<p><strong>输出：</strong><span>66</span></p>&#10;&#10;<p><b>解释：</b>加密后的元素为 <code>[11,22,33]</code> 。加密元素的和为 <code>11 + 22 + 33 == 66</code> 。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 50</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>加密是把每个数的所有数位换成其中的最大数位。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，对每个数模拟即可。</p>
<p>一边取模得到各位并维护最大值，一边用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>=</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>11</mn>
  <mo>,</mo>
  <mn>111</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span> 记录位数，加密结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>&#x22C5;</mo>
  <mi>p</mi>
</math></span>。</p>
<p>对数组求和即答案。</p>
</blockquote>
<p>我们直接模拟加密的过程，定义一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
  <mi>n</mi>
  <mi>c</mi>
  <mi>r</mi>
  <mi>y</mi>
  <mi>p</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，将一个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 中每一个数位都用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 中的最大数位替换。函数的实现如下：</p>
<p>我们可以通过不断地对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 取模和整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 来得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的每一位数，找到最大的数位，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。在循环的过程中，我们还可以用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 来记录 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 的基础底数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>=</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>11</mn>
  <mo>,</mo>
  <mn>111</mn>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
</math></span>。最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>&#xD7;</mo>
  <mi>p</mi>
</math></span> 即可。</p>
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
</math></span> 是数组的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是数组中元素的最大值。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func sumOfEncryptedInt(nums []int) (ans int) {</span></span>
<span class="line"><span>	encrypt := func(x int) int {</span></span>
<span class="line"><span>		mx, p := 0, 0</span></span>
<span class="line"><span>		for ; x > 0; x /= 10 {</span></span>
<span class="line"><span>			mx = max(mx, x%10)</span></span>
<span class="line"><span>			p = p*10 + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return mx * p</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		ans += encrypt(x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-sum-of-encrypted-integers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3079.Find%20the%20Sum%20of%20Encrypted%20Integers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3084" tabindex="-1">3084. 统计以给定字符开头和结尾的子字符串总数 <a class="header-anchor" href="#q-3084" aria-label="Permalink to &quot;3084. 统计以给定字符开头和结尾的子字符串总数 {#q-3084}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> 和一个字符 <code>c </code>。返回在字符串 <code>s</code> 中并且以 <code>c</code> 字符开头和结尾的<span>非空子字符串</span>的总数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>s = &quot;abada&quot;, c = &quot;a&quot;</span></p>&#10;&#10;<p><strong>输出：</strong><span>6</span></p>&#10;&#10;<p><strong>解释：</strong>以 <code>&quot;a&quot;</code> 开头和结尾的子字符串有： <code>&quot;<strong><u>a</u></strong>bada&quot;</code>、<code>&quot;<u><strong>aba</strong></u>da&quot;</code>、<code>&quot;<u><strong>abada</strong></u>&quot;</code>、<code>&quot;ab<u><strong>a</strong></u>da&quot;</code>、<code>&quot;ab<u><strong>ada</strong></u>&quot;</code>、<code>&quot;abad<u><strong>a</strong></u>&quot;</code>。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>s = &quot;zzz&quot;, c = &quot;z&quot;</span></p>&#10;&#10;<p><strong>输出：</strong><span>6</span></p>&#10;&#10;<p><strong>解释：</strong>字符串 <code>s</code> 中总共有 <code>6</code> 个子字符串，并且它们都以 <code>&quot;z&quot;</code> 开头和结尾。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 和 <code>c</code> 均由小写英文字母组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子串须以同一给定字符起止。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能枚举两端。</p>
<p>每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 都可作左端或右端：单独一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 是合法子串，任意两个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 又确定唯一一段。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 次，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo>+</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>。</p>
</blockquote>
<p>我们可以先统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 的个数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>。</p>
<p>每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 字符可以单独作为一个子字符串，所以有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 个子字符串满足条件。每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 字符可以和其他 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 字符组成一个满足条件的子字符串，所以有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
      <mo>&#xD7;</mo>
      <mo stretchy="false">(</mo>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span> 个子字符串满足条件。</p>
<p>所以答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mfrac>
    <mrow>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
      <mo>&#xD7;</mo>
      <mo stretchy="false">(</mo>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo stretchy="false">)</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countSubstrings(s string, c byte) int64 {</span></span>
<span class="line"><span>	cnt := int64(strings.Count(s, string(c)))</span></span>
<span class="line"><span>	return cnt + cnt*(cnt-1)/2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-substrings-starting-and-ending-with-given-character" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3084.Count%20Substrings%20Starting%20and%20Ending%20with%20Given%20Character/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3099" tabindex="-1">3099. 哈沙德数 <a class="header-anchor" href="#q-3099" aria-label="Permalink to &quot;3099. 哈沙德数 {#q-3099}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果一个整数能够被其各个数位上的数字之和整除，则称之为<strong> 哈沙德数</strong>（Harshad number）。给你一个整数 <code>x</code> 。如果 <code>x</code> 是 <strong>哈沙德数 </strong>，则返回<em> </em><code>x</code> 各个数位上的数字之和，否则，返回<em> </em><code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>x = 18</span></p>&#10;&#10;<p><strong>输出：</strong> <span>9</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><code>x</code> 各个数位上的数字之和为 <code>9</code> 。<code>18</code> 能被 <code>9</code> 整除。因此 <code>18</code> 是哈沙德数，答案是 <code>9</code> 。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>x = 23</span></p>&#10;&#10;<p><strong>输出：</strong> <span>-1</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><code>x</code> 各个数位上的数字之和为 <code>5</code> 。<code>23</code> 不能被 <code>5</code> 整除。因此 <code>23</code> 不是哈沙德数，答案是 <code>-1</code> 。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= x &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是否能被其数位和整除，是则返回该数位和。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，模拟取模即可。</p>
<p>用临时变量累加各位，再做一次整除判断，避免破坏原值。</p>
</blockquote>
<p>我们可以通过模拟的方法，计算出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的各个数位上的数字之和，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 整除，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是输入的整数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func sumOfTheDigitsOfHarshadNumber(x int) int {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for y := x; y > 0; y /= 10 {</span></span>
<span class="line"><span>		s += y % 10</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if x%s == 0 {</span></span>
<span class="line"><span>		return s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/harshad-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3099.Harshad%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3100" tabindex="-1">3100. 换水问题 II <a class="header-anchor" href="#q-3100" aria-label="Permalink to &quot;3100. 换水问题 II {#q-3100}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数 <code>numBottles</code> 和 <code>numExchange</code> 。</p>&#10;&#10;<p><code>numBottles</code> 代表你最初拥有的满水瓶数量。在一次操作中，你可以执行以下操作之一：</p>&#10;&#10;<ul>&#10;	<li>喝掉任意数量的满水瓶，使它们变成空水瓶。</li>&#10;	<li>用 <code>numExchange</code> 个空水瓶交换一个满水瓶。然后，将 <code>numExchange</code> 的值增加 1 。</li>&#10;</ul>&#10;&#10;<p>注意，你不能使用相同的 <code>numExchange</code> 值交换多批空水瓶。例如，如果 <code>numBottles == 3</code> 并且 <code>numExchange == 1</code> ，则不能用 <code>3</code> 个空水瓶交换成 <code>3</code> 个满水瓶。</p>&#10;&#10;<p>返回你 <strong>最多</strong> 可以喝到多少瓶水。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3100-3199/3100.Water%20Bottles%20II/images/exampleone1.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>numBottles = 13, numExchange = 6&#10;<strong>输出：</strong>15&#10;<strong>解释：</strong>上表显示了满水瓶的数量、空水瓶的数量、numExchange 的值，以及累计喝掉的水瓶数量。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/3100-3199/3100.Water%20Bottles%20II/images/example231.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>numBottles = 10, numExchange = 3&#10;<strong>输出：</strong>13&#10;<strong>解释：</strong>上表显示了满水瓶的数量、空水瓶的数量、numExchange 的值，以及累计喝掉的水瓶数量。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= numBottles &lt;= 100 </code></li>&#10;	<li><code>1 &lt;= numExchange &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>兑换阈值每次成功后都会加一，若试图用闭式公式一次算出总瓶数，需处理空瓶与递增阈值之间的二次关系，推导并不轻松。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numExchange</mtext>
</math></span> 至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>，按规则逐步兑换的循环次数与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <mi>n</mi>
  </msqrt>
</math></span> 同阶，足以在时限内完成。</p>
<p>注意到满瓶可先全部喝掉，此后能否继续只取决于当前空瓶数是否不少于阈值。每换一瓶便喝掉它，空瓶净减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numExchange</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，阈值同时加一。</p>
<p>因此先把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numBottles</mtext>
</math></span> 计入答案，再在空瓶不少于当前阈值时减去阈值、阈值加一、答案与空瓶各加一。循环结束时的累计瓶数即为最多能喝到的数量。</p>
</blockquote>
<p>我们可以在一开始就喝掉所有的满水瓶，因此初始时我们喝到的水数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numBottles</mtext>
</math></span>。然后我们不断地进行以下操作：</p>
<ul>
<li>如果当前有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numExchange</mtext>
</math></span> 个空水瓶，我们就可以用它们换一瓶满水瓶，换完后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numExchange</mtext>
</math></span> 的值增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。然后，我们喝掉这瓶水，喝到的水数量增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，空水瓶数量增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</li>
<li>如果当前没有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numExchange</mtext>
</math></span> 个空水瓶，那么我们就不能再换水了，此时我们就可以停止操作。</li>
</ul>
<p>我们不断地进行上述操作，直到我们无法再换水为止。最终我们喝到的水的数量就是答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>n</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是初始的满水瓶数量。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxBottlesDrunk(numBottles int, numExchange int) int {</span></span>
<span class="line"><span>	ans := numBottles</span></span>
<span class="line"><span>	for numBottles >= numExchange {</span></span>
<span class="line"><span>		numBottles -= numExchange</span></span>
<span class="line"><span>		numExchange++</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		numBottles++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/water-bottles-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3100-3199/3100.Water%20Bottles%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3101" tabindex="-1">3101. 交替子数组计数 <a class="header-anchor" href="#q-3101" aria-label="Permalink to &quot;3101. 交替子数组计数 {#q-3101}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个<span>二进制数组 </span><code>nums</code> 。</p>&#10;&#10;<p>如果一个<span>子数组</span>中 <strong>不存在 </strong>两个 <strong>相邻 </strong>元素的值 <strong>相同</strong> 的情况，我们称这样的子数组为 <strong>交替子数组 </strong>。</p>&#10;&#10;<p>返回数组 <code>nums</code> 中交替子数组的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [0,1,1,1]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>5</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;&#10;<p>以下子数组是交替子数组：<code>[0]</code> 、<code>[1]</code> 、<code>[1]</code> 、<code>[1]</code> 以及 <code>[0,1]</code> 。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [1,0,1,0]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>10</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;&#10;<p>数组的每个子数组都是交替子数组。可以统计在内的子数组共有 10 个。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>nums[i]</code> 不是 <code>0</code> 就是 <code>1</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>交替子数组要求相邻元素互异。若枚举全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 个区间再逐段检查，大量相邻比较会被重复执行。</p>
<p>以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 结尾的交替子数组，要么只含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，要么在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2260;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 时把以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 结尾的段整体延长一位。相等则此前的交替段无法越过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。</p>
<p>为此维护以当前位置结尾的交替长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，相邻不同则加一，否则重置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并累加到答案。一遍扫描即可统计全部合法子数组。</p>
</blockquote>
<p>我们可以枚举以每个位置结尾的子数组，计算满足条件的子数组的数量，累加所有位置的满足条件的子数组的数量即可。</p>
<p>具体地，我们定义变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 表示以元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾的满足条件的子数组的数量，初始时我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，表示以第一个元素结尾的满足条件的子数组的数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>接下来，我们从第二个元素开始遍历数组，对于每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的关系更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的值：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2260;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的值增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mi>s</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的值重置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</li>
</ul>
<p>然后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的值累加到答案中，继续遍历数组的下一个位置，直到遍历完整个数组。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countAlternatingSubarrays(nums []int) int64 {</span></span>
<span class="line"><span>	ans, s := int64(1), int64(1)</span></span>
<span class="line"><span>	for i, x := range nums[1:] {</span></span>
<span class="line"><span>		if x != nums[i] {</span></span>
<span class="line"><span>			s++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			s = 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-alternating-subarrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3100-3199/3101.Count%20Alternating%20Subarrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3102" tabindex="-1">3102. 最小化曼哈顿距离 <a class="header-anchor" href="#q-3102" aria-label="Permalink to &quot;3102. 最小化曼哈顿距离 {#q-3102}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、有序集合、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的数组 <code>points</code> ，它表示二维平面上一些点的整数坐标，其中 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 。</p>&#10;&#10;<p>两点之间的距离定义为它们的<span>曼哈顿距离</span>。</p>&#10;&#10;<p>请你恰好移除一个点，返回移除后任意两点之间的 <strong>最大 </strong>距离可能的 <strong>最小 </strong>值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[3,10],[5,15],[10,2],[4,4]]&#10;<strong>输出：</strong>12&#10;<strong>解释：</strong>移除每个点后的最大距离如下所示：&#10;- 移除第 0 个点后，最大距离在点 (5, 15) 和 (10, 2) 之间，为 |5 - 10| + |15 - 2| = 18 。&#10;- 移除第 1 个点后，最大距离在点 (3, 10) 和 (10, 2) 之间，为 |3 - 10| + |10 - 2| = 15 。&#10;- 移除第 2 个点后，最大距离在点 (5, 15) 和 (4, 4) 之间，为 |5 - 4| + |15 - 4| = 12 。&#10;- 移除第 3 个点后，最大距离在点 (5, 15) 和 (10, 2) 之间的，为 |5 - 10| + |15 - 2| = 18 。&#10;在恰好移除一个点后，任意两点之间的最大距离可能的最小值是 12 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[1,1],[1,1],[1,1]]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>移除任一点后，任意两点之间的最大距离都是 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= points.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>1 &lt;= points[i][0], points[i][1] &lt;= 10<sup>8</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：有序集合 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>删除一个点后，剩余点对的最大曼哈顿距离需要重新计算。若对每个被删点再两两扫描，时间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 达到数千时不可接受。</p>
<p>曼哈顿距离 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 可改写成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>y</mi>
</math></span> 两组坐标差的最大值。全集的最大距离因此只取决于这两套坐标的两端极值。</p>
<p>将全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>y</mi>
</math></span> 放入有序集合后，枚举每个点并暂时移除它，用两端极值更新答案再放回。每次删除与插入为对数时间，从而在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 内得到最优删除。</p>
</blockquote>
<p>对于两个点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，它们的曼哈顿距离为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span>。我们可以将其转化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>，即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>整理可得：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">{</mo>
    <mtable columnalign="left left" columnspacing="1em" rowspacing=".2em">
      <mtr>
        <mtd>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
          <mo stretchy="false">)</mo>
          <mo>&#x2212;</mo>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
          <mo stretchy="false">)</mo>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
          <mo stretchy="false">)</mo>
          <mo>&#x2212;</mo>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>+</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
          <mo stretchy="false">)</mo>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
          <mo stretchy="false">)</mo>
          <mo>&#x2212;</mo>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
          <mo stretchy="false">)</mo>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>2</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>2</mn>
          </msub>
          <mo stretchy="false">)</mo>
          <mo>&#x2212;</mo>
          <mo stretchy="false">(</mo>
          <msub>
            <mi>x</mi>
            <mn>1</mn>
          </msub>
          <mo>&#x2212;</mo>
          <msub>
            <mi>y</mi>
            <mn>1</mn>
          </msub>
          <mo stretchy="false">)</mo>
        </mtd>
      </mtr>
    </mtable>
    <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
  </mrow>
</math></span><p>其中，前两项可以表示为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，后两项可以表示为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>因此，我们可以将所有点按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>y</mi>
</math></span> 的值分别存入两个有序集合中，然后枚举每个点，移除该点后，更新有序集合中的值，计算最大值和最小值的差值，取最小值即可。</p>
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
</math></span> 为点的个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumDistance(points [][]int) int {</span></span>
<span class="line"><span>	st1 := redblacktree.New[int, int]()</span></span>
<span class="line"><span>	st2 := redblacktree.New[int, int]()</span></span>
<span class="line"><span>	merge := func(st *redblacktree.Tree[int, int], x, v int) {</span></span>
<span class="line"><span>		c, _ := st.Get(x)</span></span>
<span class="line"><span>		if c+v == 0 {</span></span>
<span class="line"><span>			st.Remove(x)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			st.Put(x, c+v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, p := range points {</span></span>
<span class="line"><span>		x, y := p[0], p[1]</span></span>
<span class="line"><span>		merge(st1, x+y, 1)</span></span>
<span class="line"><span>		merge(st2, x-y, 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := math.MaxInt</span></span>
<span class="line"><span>	for _, p := range points {</span></span>
<span class="line"><span>		x, y := p[0], p[1]</span></span>
<span class="line"><span>		merge(st1, x+y, -1)</span></span>
<span class="line"><span>		merge(st2, x-y, -1)</span></span>
<span class="line"><span>		ans = min(ans, max(st1.Right().Key-st1.Left().Key, st2.Right().Key-st2.Left().Key))</span></span>
<span class="line"><span>		merge(st1, x+y, 1)</span></span>
<span class="line"><span>		merge(st2, x-y, 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimize-manhattan-distances" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3100-3199/3102.Minimize%20Manhattan%20Distances/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3115" tabindex="-1">3115. 质数的最大距离 <a class="header-anchor" href="#q-3115" aria-label="Permalink to &quot;3115. 质数的最大距离 {#q-3115}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、数论、素性测试</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code>。</p>&#10;&#10;<p>返回两个（不一定不同的）质数在 <code>nums</code> 中 <strong>下标</strong> 的 <strong>最大距离</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [4,2,9,5,3]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>3</span></p>&#10;&#10;<p><strong>解释：</strong> <code>nums[1]</code>、<code>nums[3]</code> 和 <code>nums[4]</code> 是质数。因此答案是 <code>|4 - 1| = 3</code>。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [4,8,2,8]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>0</span></p>&#10;&#10;<p><strong>解释：</strong> <code>nums[2]</code> 是质数。因为只有一个质数，所以答案是 <code>|2 - 2| = 0</code>。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;	<li>输入保证 <code>nums</code> 中至少有一个质数。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>所求为最左质数与最右质数的下标差。若对每个质数对都计算距离，只是在重复取两端。</p>
<p>质数判定对单个值至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>M</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，数组长度与值域都不大，找到两端即可。</p>
<p>因此从左找第一个质数下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，再从右找最后一个质数下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>。中间元素不必参与距离计算。</p>
</blockquote>
<p>根据题目描述，我们需要找出第一个质数所在的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，然后找出最后一个质数所在的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span> 作为答案返回即可。</p>
<p>因此，我们可以从左到右遍历数组，找到第一个质数所在的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，然后从右到左遍历数组，找到最后一个质数所在的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msqrt>
    <mi>M</mi>
  </msqrt>
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
</math></span> 的长度和数组中的最大值。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumPrimeDifference(nums []int) int {</span></span>
<span class="line"><span>	for i := 0; ; i++ {</span></span>
<span class="line"><span>		if isPrime(nums[i]) {</span></span>
<span class="line"><span>			for j := len(nums) - 1; ; j-- {</span></span>
<span class="line"><span>				if isPrime(nums[j]) {</span></span>
<span class="line"><span>					return j - i</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func isPrime(n int) bool {</span></span>
<span class="line"><span>	if n &#x3C; 2 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 2; i &#x3C;= n/i; i++ {</span></span>
<span class="line"><span>		if n%i == 0 {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-prime-difference" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3100-3199/3115.Maximum%20Prime%20Difference/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=s(e,[["render",o]]);export{d as __pageData,w as default};
