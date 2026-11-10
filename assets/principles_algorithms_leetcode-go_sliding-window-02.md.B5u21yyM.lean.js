import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 滑动窗口（2）","description":"滑动窗口分类，第 1343–2730 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 滑动窗口（2）","description":"滑动窗口分类，第 1343–2730 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"滑动窗口分类，第 1343–2730 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 滑动窗口（1）","link":"/principles/algorithms/leetcode-go/sliding-window-01"},"next":{"text":"LeetCode Go · 滑动窗口（3）","link":"/principles/algorithms/leetcode-go/sliding-window-03"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 滑动窗口（1）","link":"/principles/algorithms/leetcode-go/sliding-window-01"},"next":{"text":"LeetCode Go · 滑动窗口（3）","link":"/principles/algorithms/leetcode-go/sliding-window-03"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/sliding-window-02.md","filePath":"principles/algorithms/leetcode-go/sliding-window-02.md"}'),m={name:"principles/algorithms/leetcode-go/sliding-window-02.md"};function p(o,n,l,i,c,h){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-滑动窗口-2" tabindex="-1">LeetCode Go · 滑动窗口（2） <a class="header-anchor" href="#leetcode-go-·-滑动窗口-2" aria-label="Permalink to &quot;LeetCode Go · 滑动窗口（2）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-1343" tabindex="-1">1343. 大小为 K 且平均值大于等于阈值的子数组数目 <a class="header-anchor" href="#q-1343" aria-label="Permalink to &quot;1343. 大小为 K 且平均值大于等于阈值的子数组数目 {#q-1343}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>arr</code> 和两个整数 <code>k</code> 和 <code>threshold</code> 。</p>&#10;&#10;<p>请你返回长度为 <code>k</code> 且平均值大于等于 <code>threshold</code> 的子数组数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>子数组 [2,5,5],[5,5,5] 和 [5,5,8] 的平均值分别为 4，5 和 6 。其他长度为 3 的子数组的平均值都小于 4 （threshold 的值)。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>前 6 个长度为 3 的子数组平均值都大于 5 。注意平均值不是整数。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= arr.length</code></li>&#10;	<li><code>0 &lt;= threshold &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>定长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组平均数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mtext mathvariant="italic">threshold</mtext>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不可每次重算窗口。平均数比较等价于窗口和与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">threshold</mtext>
</math></span> 比较。维护长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动和，右进左出，线性统计达标窗口。</p>
</blockquote>
<p>不妨将 <code v-pre>threshold</code> 乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，这样我们就可以直接比较窗口内的和与 <code v-pre>threshold</code> 的大小关系。</p>
<p>我们维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口，每次计算窗口内的和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 大于等于 <code v-pre>threshold</code>，则答案加一。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <code v-pre>arr</code> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numOfSubarrays(arr []int, k int, threshold int) (ans int) {</span></span>
<span class="line"><span>	threshold *= k</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range arr[:k] {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if s >= threshold {</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(arr); i++ {</span></span>
<span class="line"><span>		s += arr[i] - arr[i-k]</span></span>
<span class="line"><span>		if s >= threshold {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1343.Number%20of%20Sub-arrays%20of%20Size%20K%20and%20Average%20Greater%20than%20or%20Equal%20to%20Threshold/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1358" tabindex="-1">1358. 包含所有三种字符的子字符串数目 <a class="header-anchor" href="#q-1358" aria-label="Permalink to &quot;1358. 包含所有三种字符的子字符串数目 {#q-1358}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> ，它只包含三种字符 a, b 和 c 。</p>&#10;&#10;<p>请你返回 a，b 和 c 都 <strong>至少 </strong>出现过一次的子字符串数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcabc&quot;&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>包含 a，b 和 c 各至少一次的子字符串为<em> &quot;</em>abc<em>&quot;, &quot;</em>abca<em>&quot;, &quot;</em>abcab<em>&quot;, &quot;</em>abcabc<em>&quot;, &quot;</em>bca<em>&quot;, &quot;</em>bcab<em>&quot;, &quot;</em>bcabc<em>&quot;, &quot;</em>cab<em>&quot;, &quot;</em>cabc<em>&quot; </em>和<em> &quot;</em>abc<em>&quot; </em>(<strong>相同</strong><strong>字符串算多次</strong>)<em>。</em>&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;aaacb&quot;&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>包含 a，b 和 c 各至少一次的子字符串为<em> &quot;</em>aaacb<em>&quot;, &quot;</em>aacb<em>&quot; </em>和<em> &quot;</em>acb<em>&quot; 。</em>&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abc&quot;&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= s.length &lt;= 5 x 10<sup>4</sup></code></li>&#10;	<li><code>s</code> 只包含字符 <code>'a'</code>，<code>'b'</code> 和 <code>'c'</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：一次遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计同时含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>c</mi>
</math></span> 的子串个数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举两端为平方级。以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 为右端时，左端只需落到三个字母最近出现位置的最小值（含）之前。维护三个字母的最后下标，每次加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>a</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>b</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录三种字符最近一次出现的位置，初始时均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，对于当前位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们先更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>i</mi>
</math></span>，然后合法的字符串个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，累加到答案中。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfSubstrings(s string) (ans int) {</span></span>
<span class="line"><span>	d := [3]int{-1, -1, -1}</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		d[c-'a'] = i</span></span>
<span class="line"><span>		ans += min(d[0], min(d[1], d[2])) + 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一依赖「最近出现」的闭式。也可用计数窗口：右端纳入后，当三种字母都出现时收缩左端，直到缺一种；此时以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 为右端的合法左端个数恰为当前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>。两种线性写法，后者不显式存最后位置。</p>
</blockquote>
<p>我们可以使用滑动窗口的方法求解。维护一个窗口 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 和一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录窗口内各字符的出现次数。</p>
<p>遍历字符串，不断右移右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入窗口。若窗口内 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 均至少出现一次，则不断右移左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，直到窗口内不再同时包含三种字符为止。</p>
<p>此时，所有以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 为右端点且包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 的子字符串的左端点可取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
  <mo>,</mo>
  <mi>l</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 个，累加到答案中。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfSubstrings(s string) int {</span></span>
<span class="line"><span>	ans, l := 0, 0</span></span>
<span class="line"><span>	cnt := [3]int{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for r := 0; r &#x3C; len(s); r++ {</span></span>
<span class="line"><span>		cnt[s[r]-'a']++</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		for cnt[0] > 0 &#x26;&#x26; cnt[1] > 0 &#x26;&#x26; cnt[2] > 0 {</span></span>
<span class="line"><span>			cnt[s[l]-'a']--</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		ans += l</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1358.Number%20of%20Substrings%20Containing%20All%20Three%20Characters/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1423" tabindex="-1">1423. 可获得的最大点数 <a class="header-anchor" href="#q-1423" aria-label="Permalink to &quot;1423. 可获得的最大点数 {#q-1423}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、前缀和、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>几张卡牌<strong> 排成一行</strong>，每张卡牌都有一个对应的点数。点数由整数数组 <code>cardPoints</code> 给出。</p>&#10;&#10;<p>每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 <code>k</code> 张卡牌。</p>&#10;&#10;<p>你的点数就是你拿到手中的所有卡牌的点数之和。</p>&#10;&#10;<p>给你一个整数数组 <code>cardPoints</code> 和整数 <code>k</code>，请你返回可以获得的最大点数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>cardPoints = [1,2,3,4,5,6,1], k = 3&#10;<strong>输出：</strong>12&#10;<strong>解释：</strong>第一次行动，不管拿哪张牌，你的点数总是 1 。但是，先拿最右边的卡牌将会最大化你的可获得点数。最优策略是拿右边的三张牌，最终点数为 1 + 6 + 5 = 12 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>cardPoints = [2,2,2], k = 2&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>无论你拿起哪两张卡牌，可获得的点数总是 4 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>cardPoints = [9,7,7,9,7,7,9], k = 7&#10;<strong>输出：</strong>55&#10;<strong>解释：</strong>你必须拿起所有卡牌，可以获得的点数为所有卡牌的点数之和。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>cardPoints = [1,1000,1], k = 1&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>你无法拿到中间那张卡牌，所以可以获得的最大点数为 1 。 &#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<pre><strong>输入：</strong>cardPoints = [1,79,80,1,1,1,200,1], k = 3&#10;<strong>输出：</strong>202&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= cardPoints.length &lt;= 10^5</code></li>&#10;	<li><code>1 &lt;= cardPoints[i] &lt;= 10^4</code></li>&#10;	<li><code>1 &lt;= k &lt;= cardPoints.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次只能从两端取牌，共取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 张，等价于左边取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 张、右边取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span> 张。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 重新求和。</p>
<p>先取右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 张作为窗口，再依次用左端一张替换窗口最左的那张右端牌，线性更新和并取最大。</p>
</blockquote>
<p>我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口来模拟这个过程。</p>
<p>初始时我们将窗口放在数组的末尾，即索引为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span> 到索引 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个位置，窗口内卡牌的点数之和记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，初始答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 的值也为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。这其实是从数组的开头拿走 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 张卡牌的情况。</p>
<p>接下来，我们考虑从数组的开头依次拿 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>,</mo>
  <mi>k</mi>
</math></span> 张卡牌的情况，假设取到的卡牌为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>P</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么我们将其加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，由于窗口的长度限制为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，我们需要将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>P</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中减去，这样我们就可以计算出拿到的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 张卡牌的点数之和，更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 给题目中给出的整数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxScore(cardPoints []int, k int) int {</span></span>
<span class="line"><span>	n := len(cardPoints)</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range cardPoints[n-k:] {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := s</span></span>
<span class="line"><span>	for i := 0; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		s += cardPoints[i] - cardPoints[n-k+i]</span></span>
<span class="line"><span>		ans = max(ans, s)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1423.Maximum%20Points%20You%20Can%20Obtain%20from%20Cards/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1438" tabindex="-1">1438. 绝对差不超过限制的最长连续子数组 <a class="header-anchor" href="#q-1438" aria-label="Permalink to &quot;1438. 绝对差不超过限制的最长连续子数组 {#q-1438}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：队列、数组、有序集合、滑动窗口、单调队列、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>limit</code>。</p>&#10;&#10;<p>请你返回 <strong>最长非空子数组 </strong>的长度，要求该 <strong>子数组 </strong>中 <strong>任意两个元素 </strong>之间的差的 <strong>绝对值 </strong>都 <strong>小于或等于</strong> <code>limit</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [8,2,4,7], limit = 4</span></p>&#10;&#10;<p><strong>输出：</strong> <span>2</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>检查所有子数组，计算每个子数组中任意两个元素之间的最大绝对差：<br>&#10;<code>[8]</code> 的最大绝对差为 <code>|8-8| = 0 &lt;= 4</code>。<br>&#10;<code>[8,2]</code> 的最大绝对差为 <code>|8-2| = 6 > 4</code>。<br>&#10;<code>[8,2,4]</code> 的最大绝对差为 <code>|8-2| = 6 > 4</code>。<br>&#10;<code>[8,2,4,7]</code> 的最大绝对差为 <code>|8-2| = 6 > 4</code>。<br>&#10;<code>[2]</code> 的最大绝对差为 <code>|2-2| = 0 &lt;= 4</code>。<br>&#10;<code>[2,4]</code> 的最大绝对差为 <code>|4-2| = 2 &lt;= 4</code>。<br>&#10;<code>[2,4,7]</code> 的最大绝对差为 <code>|7-2| = 5 > 4</code>。注意，元素对 <code>(2, 7)</code> 并不相邻，但仍然需要进行比较。<br>&#10;<code>[4]</code> 的最大绝对差为 <code>|4-4| = 0 &lt;= 4</code>。<br>&#10;<code>[4,7]</code> 的最大绝对差为 <code>|7-4| = 3 &lt;= 4</code>。<br>&#10;<code>[7]</code> 的最大绝对差为 <code>|7-7| = 0 &lt;= 4</code>。<br>&#10;因此，最长子数组的长度为 2。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [10,1,2,4,7,2], limit = 5</span></p>&#10;&#10;<p><strong>输出：</strong> <span>4</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>子数组 <code>[2,4,7,2]</code> 满足条件，因为其中任意两个元素之间的绝对差都不超过 <code>5</code>，最大绝对差为 <code>|7-2| = 5</code>。</p>&#10;&#10;<p>该子数组无法向左扩展，因为 <code>[1,2,4,7,2]</code> 包含元素对 <code>(1, 7)</code>，其绝对差为 <code>|7-1| = 6 > 5</code>。因此，最长子数组的长度为 4。</p>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [4,2,2,2,4,4,2,2], limit = 0</span></p>&#10;&#10;<p><strong>输出：</strong> <span>3</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>由于 <code>limit = 0</code>，子数组中任意两个元素都必须相等，因此只有由相同元素连续组成的子数组才满足条件。</p>&#10;&#10;<p>满足条件的最长子数组为 <code>[2,2,2]</code>，长度为 3。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= limit &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：有序集合 + 滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子数组的最大最小之差随窗口变长而不减。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，枚举所有区间是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。固定右端点，左端只需右移到窗口极值差不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>。</p>
<p>有序集合同时给出当前窗口的最小、最大值，超限则删除左端元素。最长合法窗口即答案。</p>
</blockquote>
<p>我们可以枚举每个位置作为子数组的右端点，找到其对应的最靠左的左端点，满足区间内中最大值与最小值的差值不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>。过程中，我们用有序集合维护窗口内的最大值和最小值。</p>
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
</math></span> 是数组 <code v-pre>nums</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestSubarray(nums []int, limit int) (ans int) {</span></span>
<span class="line"><span>	merge := func(st *redblacktree.Tree[int, int], x, v int) {</span></span>
<span class="line"><span>		c, _ := st.Get(x)</span></span>
<span class="line"><span>		if c+v == 0 {</span></span>
<span class="line"><span>			st.Remove(x)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			st.Put(x, c+v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	st := redblacktree.New[int, int]()</span></span>
<span class="line"><span>	j := 0</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		merge(st, x, 1)</span></span>
<span class="line"><span>		for ; st.Right().Key-st.Left().Key > limit; j++ {</span></span>
<span class="line"><span>			merge(st, nums[j], -1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, i-j+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：二分查找 + 滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对每个右端点动态收缩，长度本身具有单调性：若存在长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的合法段，则更短的也存在。可二分长度，再用两个单调队列检查是否有窗口满足差值约束。</p>
<p>时间仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，把「求最长」改成了判定问题。</p>
</blockquote>
<p>我们注意到，如果一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组满足条件，那么长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>k</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>&lt;</mo>
  <mi>k</mi>
</math></span> 的子数组也满足条件，这存在着单调性，因此，我们可以使用二分查找，找到最长的满足条件的子数组。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span>。对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>l</mi>
      <mo>+</mo>
      <mi>r</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，我们检查是否存在一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的子数组满足条件。如果存在，我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，否则更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。那么问题转换为数组中是否存在一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的子数组满足条件，这其实是求滑动窗口中的最大值和最小值的差值不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>。我们可以用两个单调队列分别维护窗口内的最大值和最小值。</p>
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
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestSubarray(nums []int, limit int) int {</span></span>
<span class="line"><span>	l, r := 0, len(nums)</span></span>
<span class="line"><span>	check := func(k int) bool {</span></span>
<span class="line"><span>		minq := Deque{}</span></span>
<span class="line"><span>		maxq := Deque{}</span></span>
<span class="line"><span>		for i, x := range nums {</span></span>
<span class="line"><span>			for !minq.Empty() &#x26;&#x26; i-minq.Front()+1 > k {</span></span>
<span class="line"><span>				minq.PopFront()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			for !maxq.Empty() &#x26;&#x26; i-maxq.Front()+1 > k {</span></span>
<span class="line"><span>				maxq.PopFront()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			for !minq.Empty() &#x26;&#x26; nums[minq.Back()] >= x {</span></span>
<span class="line"><span>				minq.PopBack()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			for !maxq.Empty() &#x26;&#x26; nums[maxq.Back()] &#x3C;= x {</span></span>
<span class="line"><span>				maxq.PopBack()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			minq.PushBack(i)</span></span>
<span class="line"><span>			maxq.PushBack(i)</span></span>
<span class="line"><span>			if i >= k-1 &#x26;&#x26; nums[maxq.Front()]-nums[minq.Front()] &#x3C;= limit {</span></span>
<span class="line"><span>				return true</span></span>
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
<span class="line"><span>	return l</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// template</span></span>
<span class="line"><span>type Deque struct{ l, r []int }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Empty() bool {</span></span>
<span class="line"><span>	return len(q.l) == 0 &#x26;&#x26; len(q.r) == 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Size() int {</span></span>
<span class="line"><span>	return len(q.l) + len(q.r)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PushFront(v int) {</span></span>
<span class="line"><span>	q.l = append(q.l, v)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PushBack(v int) {</span></span>
<span class="line"><span>	q.r = append(q.r, v)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PopFront() (v int) {</span></span>
<span class="line"><span>	if len(q.l) > 0 {</span></span>
<span class="line"><span>		q.l, v = q.l[:len(q.l)-1], q.l[len(q.l)-1]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		v, q.r = q.r[0], q.r[1:]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PopBack() (v int) {</span></span>
<span class="line"><span>	if len(q.r) > 0 {</span></span>
<span class="line"><span>		q.r, v = q.r[:len(q.r)-1], q.r[len(q.r)-1]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		v, q.l = q.l[0], q.l[1:]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Front() int {</span></span>
<span class="line"><span>	if len(q.l) > 0 {</span></span>
<span class="line"><span>		return q.l[len(q.l)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return q.r[0]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Back() int {</span></span>
<span class="line"><span>	if len(q.r) > 0 {</span></span>
<span class="line"><span>		return q.r[len(q.r)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return q.l[0]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Get(i int) int {</span></span>
<span class="line"><span>	if i &#x3C; len(q.l) {</span></span>
<span class="line"><span>		return q.l[len(q.l)-1-i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return q.r[i-len(q.l)]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：滑动窗口 + 双向队列 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一、二都带对数因子。窗口最大、最小本身可用两个单调双端队列在摊还 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 内维护，右端扩张、左端在差值超限时收缩，总体线性。</p>
</blockquote>
<p>我们可以使用双向队列维护窗口内的最大值和最小值。我们维护两个双向队列，分别存储窗口内的最大值和最小值的下标。定义两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 分别指向窗口的左边界和右边界。</p>
<p>每次向右移动右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，判断最大值队列的队尾下标对应的元素是否小于当前元素，如果小于，则将队尾元素出队，直到最大值队列的队尾元素对应的元素不小于当前元素。同理，判断最小值队列的队尾下标对应的元素是否大于当前元素，如果大于，则将队尾元素出队，直到最小值队列的队尾元素对应的元素不大于当前元素。然后，将当前元素的下标入队。</p>
<p>如果最大值队列的队首元素和最小值队列的队首元素的差值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
</math></span>，则向右移动左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，然后如果最大值队列的队首元素小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，则将最大值队列的队首元素出队，如果最小值队列的队首元素小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，则将最小值队列的队首元素出队。</p>
<p>答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
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
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestSubarray(nums []int, limit int) int {</span></span>
<span class="line"><span>	var maxq, minq Deque</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	l := 0</span></span>
<span class="line"><span>	for r, x := range nums {</span></span>
<span class="line"><span>		for !maxq.Empty() &#x26;&#x26; nums[maxq.Back()] &#x3C; x {</span></span>
<span class="line"><span>			maxq.PopBack()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for !minq.Empty() &#x26;&#x26; nums[minq.Back()] > x {</span></span>
<span class="line"><span>			minq.PopBack()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		maxq.PushBack(r)</span></span>
<span class="line"><span>		minq.PushBack(r)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if nums[maxq.Front()]-nums[minq.Front()] > limit {</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>			if maxq.Front() &#x3C; l {</span></span>
<span class="line"><span>				maxq.PopFront()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if minq.Front() &#x3C; l {</span></span>
<span class="line"><span>				minq.PopFront()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n - l</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Deque struct{ l, r []int }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Empty() bool {</span></span>
<span class="line"><span>	return len(q.l) == 0 &#x26;&#x26; len(q.r) == 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Size() int {</span></span>
<span class="line"><span>	return len(q.l) + len(q.r)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PushFront(v int) {</span></span>
<span class="line"><span>	q.l = append(q.l, v)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PushBack(v int) {</span></span>
<span class="line"><span>	q.r = append(q.r, v)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PopFront() (v int) {</span></span>
<span class="line"><span>	if len(q.l) > 0 {</span></span>
<span class="line"><span>		q.l, v = q.l[:len(q.l)-1], q.l[len(q.l)-1]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		v, q.r = q.r[0], q.r[1:]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q *Deque) PopBack() (v int) {</span></span>
<span class="line"><span>	if len(q.r) > 0 {</span></span>
<span class="line"><span>		q.r, v = q.r[:len(q.r)-1], q.r[len(q.r)-1]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		v, q.l = q.l[0], q.l[1:]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Front() int {</span></span>
<span class="line"><span>	if len(q.l) > 0 {</span></span>
<span class="line"><span>		return q.l[len(q.l)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return q.r[0]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Back() int {</span></span>
<span class="line"><span>	if len(q.r) > 0 {</span></span>
<span class="line"><span>		return q.r[len(q.r)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return q.l[0]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (q Deque) Get(i int) int {</span></span>
<span class="line"><span>	if i &#x3C; len(q.l) {</span></span>
<span class="line"><span>		return q.l[len(q.l)-1-i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return q.r[i-len(q.l)]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1438.Longest%20Continuous%20Subarray%20With%20Absolute%20Diff%20Less%20Than%20or%20Equal%20to%20Limit/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1456" tabindex="-1">1456. 定长子串中元音的最大数目 <a class="header-anchor" href="#q-1456" aria-label="Permalink to &quot;1456. 定长子串中元音的最大数目 {#q-1456}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你字符串 <code>s</code> 和整数 <code>k</code> 。</p>&#10;&#10;<p>请返回字符串 <code>s</code> 中长度为 <code>k</code> 的单个子字符串中可能包含的最大元音字母数。</p>&#10;&#10;<p>英文中的 <strong>元音字母 </strong>为（<code>a</code>, <code>e</code>, <code>i</code>, <code>o</code>, <code>u</code>）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;abciiidef&quot;, k = 3&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>子字符串 &quot;iii&quot; 包含 3 个元音字母。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;aeiou&quot;, k = 2&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>任意长度为 2 的子字符串都包含 2 个元音字母。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;leetcode&quot;, k = 3&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&quot;lee&quot;、&quot;eet&quot; 和 &quot;ode&quot; 都包含 2 个元音字母。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;rhythms&quot;, k = 4&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>字符串 s 中不含任何元音字母。&#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;tryhard&quot;, k = 4&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10^5</code></li>&#10;	<li><code>s</code> 由小写英文字母组成</li>&#10;	<li><code>1 &lt;= k &lt;= s.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>定长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子串中元音最多。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能对每个起点重数。先统计前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个，再滑窗加减进出字符是否为元音。</p>
</blockquote>
<p>我们首先统计前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个字符中元音字母的个数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，初始化答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>。</p>
<p>然后我们从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 开始遍历字符串，每次遍历时，我们将当前字符加入窗口，如果当前字符是元音字母，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 加一；将窗口第一个字符移出窗口，如果移除的字符是元音字母，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 减一。然后，我们更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>遍历结束后，返回答案即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxVowels(s string, k int) int {</span></span>
<span class="line"><span>	isVowel := func(c byte) bool {</span></span>
<span class="line"><span>		return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		if isVowel(s[i]) {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := cnt</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>		if isVowel(s[i-k]) {</span></span>
<span class="line"><span>			cnt--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if isVowel(s[i]) {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, cnt)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1456.Maximum%20Number%20of%20Vowels%20in%20a%20Substring%20of%20Given%20Length/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1499" tabindex="-1">1499. 满足不等式的最大值 <a class="header-anchor" href="#q-1499" aria-label="Permalink to &quot;1499. 满足不等式的最大值 {#q-1499}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：队列、数组、滑动窗口、单调队列、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个数组 <code>points</code> 和一个整数 <code>k</code> 。数组中每个元素都表示二维平面上的点的坐标，并按照横坐标 x 的值从小到大排序。也就是说 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> ，并且在 <code>1 &lt;= i &lt; j &lt;= points.length</code> 的前提下， <code>x<sub>i</sub> &lt; x<sub>j</sub></code> 总成立。</p>&#10;&#10;<p>请你找出<em> </em><code>y<sub>i</sub> + y<sub>j</sub> + |x<sub>i</sub> - x<sub>j</sub>|</code> 的 <strong>最大值</strong>，其中 <code>|x<sub>i</sub> - x<sub>j</sub>| &lt;= k</code> 且 <code>1 &lt;= i &lt; j &lt;= points.length</code>。</p>&#10;&#10;<p>题目测试数据保证至少存在一对能够满足 <code>|x<sub>i</sub> - x<sub>j</sub>| &lt;= k</code> 的点。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[1,3],[2,0],[5,10],[6,-10]], k = 1&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>前两个点满足 |x<sub>i</sub> - x<sub>j</sub>| &lt;= 1 ，代入方程计算，则得到值 3 + 0 + |1 - 2| = 4 。第三个和第四个点也满足条件，得到值 10 + -10 + |5 - 6| = 1 。&#10;没有其他满足条件的点，所以返回 4 和 1 中最大的那个。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[0,0],[3,0],[9,2]], k = 3&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>只有前两个点满足 |x<sub>i</sub> - x<sub>j</sub>| &lt;= 3 ，代入方程后得到值 0 + 0 + |0 - 3| = 3 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= points.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>-10<sup>8</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>8</sup></code></li>&#10;	<li><code>0 &lt;= k &lt;= 2 * 10<sup>8</sup></code></li>&#10;	<li>对于所有的 <code>1 &lt;= i &lt; j &lt;= points.length</code>，均有 <code>x<sub>i</sub> &lt; x<sub>j</sub></code>。</li>&#10;	<li><code>x<sub>i</sub></code> 构成一个严格递增序列。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 严格递增， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，枚举点对不可行。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mi>j</mi>
  </msub>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mi>j</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>，对当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 只需窗口 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span> 内最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
</math></span>。</p>
<p>堆中存 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>（最小堆即最大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>），弹出过期点后与当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 相加。</p>
</blockquote>
<p>题目要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mi>j</mi>
  </msub>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 的最大值，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span>。由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
</math></span> 是严格单调递增的，那么：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <msub>
          <mi>y</mi>
          <mi>i</mi>
        </msub>
        <mo>+</mo>
        <msub>
          <mi>y</mi>
          <mi>j</mi>
        </msub>
        <mo>+</mo>
        <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
        <msub>
          <mi>x</mi>
          <mi>i</mi>
        </msub>
        <mo>&#x2212;</mo>
        <msub>
          <mi>x</mi>
          <mi>j</mi>
        </msub>
        <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <msub>
          <mi>y</mi>
          <mi>i</mi>
        </msub>
        <mo>+</mo>
        <msub>
          <mi>y</mi>
          <mi>j</mi>
        </msub>
        <mo>+</mo>
        <msub>
          <mi>x</mi>
          <mi>j</mi>
        </msub>
        <mo>&#x2212;</mo>
        <msub>
          <mi>x</mi>
          <mi>i</mi>
        </msub>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <msub>
          <mi>y</mi>
          <mi>i</mi>
        </msub>
        <mo>&#x2212;</mo>
        <msub>
          <mi>x</mi>
          <mi>i</mi>
        </msub>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mo stretchy="false">(</mo>
        <msub>
          <mi>x</mi>
          <mi>j</mi>
        </msub>
        <mo>+</mo>
        <msub>
          <mi>y</mi>
          <mi>j</mi>
        </msub>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>因此，对于当前遍历到的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mi>j</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>，我们只需要找到前面所有满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span> 的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
</math></span> 的最大值，再加上当前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mi>j</mi>
  </msub>
</math></span> 即可。而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
</math></span> 的最大值，我们可以使用优先队列（大根堆）来维护。</p>
<p>具体地，我们定义一个优先队列（大根堆） <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span>，堆中每个元素是一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>当我们遍历到点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，如果堆 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 不为空，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>p</mi>
  <mi>q</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span>，那么循环将堆顶元素弹出，直到堆为空或者满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>p</mi>
  <mi>q</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span>。此时，堆顶元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 即为所有满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span> 的点中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
</math></span> 的最大值，此时更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo>+</mo>
  <mi>p</mi>
  <mi>q</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>然后，我们将点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 加入堆中，继续遍历下一个点，直到遍历完整个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
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
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMaxValueOfEquation(points [][]int, k int) int {</span></span>
<span class="line"><span>	ans := -(1 &#x3C;&#x3C; 30)</span></span>
<span class="line"><span>	hp := hp{}</span></span>
<span class="line"><span>	for _, p := range points {</span></span>
<span class="line"><span>		x, y := p[0], p[1]</span></span>
<span class="line"><span>		for hp.Len() > 0 &#x26;&#x26; x-hp[0].x > k {</span></span>
<span class="line"><span>			heap.Pop(&#x26;hp)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if hp.Len() > 0 {</span></span>
<span class="line"><span>			ans = max(ans, x+y+hp[0].v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		heap.Push(&#x26;hp, pair{y - x, x})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct{ v, x int }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp []pair</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp) Len() int { return len(h) }</span></span>
<span class="line"><span>func (h hp) Less(i, j int) bool {</span></span>
<span class="line"><span>	a, b := h[i], h[j]</span></span>
<span class="line"><span>	return a.v > b.v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (h hp) Swap(i, j int) { h[i], h[j] = h[j], h[i] }</span></span>
<span class="line"><span>func (h *hp) Push(v any)   { *h = append(*h, v.(pair)) }</span></span>
<span class="line"><span>func (h *hp) Pop() any     { a := *h; v := a[len(a)-1]; *h = a[:len(a)-1]; return v }</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：单调队列 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一每次操作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。窗口内 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 的最大值可用单调递减双端队列在摊还 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 内维护：过期弹队首，队尾不优于当前的弹出后再入队。</p>
</blockquote>
<p>这道题实际上需要我们维护的是一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的窗口中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 的最大值，单调队列可以很好地解决这个问题。</p>
<p>具体地，我们定义一个单调队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，队列中每个元素是一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>当我们遍历到点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，如果队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 不为空，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>q</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span>，那么不断弹出队首元素，直到队列为空或者满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>q</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span>。此时，队首元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 即为所有满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mi>j</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span> 的点中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
</math></span> 的最大值，此时更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>接下来，在将点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 加入队尾之前，我们将队列中所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2264;</mo>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 弹出队列，然后将点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 加入队尾。继续遍历下一个点，直到遍历完整个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
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
  <mi>p</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMaxValueOfEquation(points [][]int, k int) int {</span></span>
<span class="line"><span>	ans := -(1 &#x3C;&#x3C; 30)</span></span>
<span class="line"><span>	q := [][2]int{}</span></span>
<span class="line"><span>	for _, p := range points {</span></span>
<span class="line"><span>		x, y := p[0], p[1]</span></span>
<span class="line"><span>		for len(q) > 0 &#x26;&#x26; x-q[0][0] > k {</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if len(q) > 0 {</span></span>
<span class="line"><span>			ans = max(ans, x+y+q[0][1]-q[0][0])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for len(q) > 0 &#x26;&#x26; y-x >= q[len(q)-1][1]-q[len(q)-1][0] {</span></span>
<span class="line"><span>			q = q[:len(q)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q = append(q, [2]int{x, y})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/max-value-of-equation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1499.Max%20Value%20of%20Equation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1610" tabindex="-1">1610. 可见点的最大数目 <a class="header-anchor" href="#q-1610" aria-label="Permalink to &quot;1610. 可见点的最大数目 {#q-1610}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、排序、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个点数组 <code>points</code> 和一个表示角度的整数 <code>angle</code> ，你的位置是 <code>location</code> ，其中 <code>location = [pos<sub>x</sub>, pos<sub>y</sub>]</code> 且 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 都表示 X-Y 平面上的整数坐标。</p>&#10;&#10;<p>最开始，你面向东方进行观测。你 <strong>不能</strong> 进行移动改变位置，但可以通过 <strong>自转</strong> 调整观测角度。换句话说，<code>pos<sub>x</sub></code> 和 <code>pos<sub>y</sub></code> 不能改变。你的视野范围的角度用 <code>angle</code> 表示， 这决定了你观测任意方向时可以多宽。设 <code>d</code> 为你逆时针自转旋转的度数，那么你的视野就是角度范围 <code>[d - angle/2, d + angle/2]</code> 所指示的那片区域。</p>&#10;&#10;Your browser does not support the video tag or this video format.&#10;&#10;<p>对于每个点，如果由该点、你的位置以及从你的位置直接向东的方向形成的角度 <strong>位于你的视野中</strong> ，那么你就可以看到它。</p>&#10;&#10;<p>同一个坐标上可以有多个点。你所在的位置也可能存在一些点，但不管你的怎么旋转，总是可以看到这些点。同时，点不会阻碍你看到其他点。</p>&#10;&#10;<p>返回你能看到的点的最大数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1610.Maximum%20Number%20of%20Visible%20Points/images/89a07e9b-00ab-4967-976a-c723b2aa8656.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>阴影区域代表你的视野。在你的视野中，所有的点都清晰可见，尽管 [2,2] 和 [3,3]在同一条直线上，你仍然可以看到 [3,3] 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[2,1],[2,2],[3,4],[1,1]], angle = 90, location = [1,1]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>在你的视野中，所有的点都清晰可见，包括你所在位置的那个点。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1610.Maximum%20Number%20of%20Visible%20Points/images/5010bfd3-86e6-465f-ac64-e9df941d2e49.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[1,0],[2,1]], angle = 13, location = [1,1]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>如图所示，你只能看到两点之一。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= points.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>location.length == 2</code></li>&#10;	<li><code>0 &lt;= angle &lt; 360</code></li>&#10;	<li><code>0 &lt;= pos<sub>x</sub>, pos<sub>y</sub>, x<sub>i</sub>, y<sub>i</sub> &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>视野是以自身为顶点、张角为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">angle</mtext>
</math></span> 的扇形，点数可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，枚举每一对极角边界会超时。与位置重合的点对任意朝向均可见，应单独计入。</p>
<p>将其余点换成相对极角并排序后，可见集合对应长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">angle</mtext>
</math></span> 的圆周窗口。将序列拼接一份加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>&#x3C0;</mi>
</math></span>，即可把环形窗口化为线性区间。</p>
<p>对每个左端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，用二分查找不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>&#x3B8;</mi>
</math></span> 的最右位置，窗口点数取最大后再加上重合点数。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func visiblePoints(points [][]int, angle int, location []int) int {</span></span>
<span class="line"><span>	same := 0</span></span>
<span class="line"><span>	v := []float64{}</span></span>
<span class="line"><span>	for _, p := range points {</span></span>
<span class="line"><span>		if p[0] == location[0] &#x26;&#x26; p[1] == location[1] {</span></span>
<span class="line"><span>			same++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			v = append(v, math.Atan2(float64(p[1]-location[1]), float64(p[0]-location[0])))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Float64s(v)</span></span>
<span class="line"><span>	for _, deg := range v {</span></span>
<span class="line"><span>		v = append(v, deg+2*math.Pi)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	mx := 0</span></span>
<span class="line"><span>	t := float64(angle) * math.Pi / 180</span></span>
<span class="line"><span>	for i, j := 0, 0; j &#x3C; len(v); j++ {</span></span>
<span class="line"><span>		for i &#x3C; j &#x26;&#x26; v[j]-v[i] > t {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		mx = max(mx, j-i+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return same + mx</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-visible-points" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1610.Maximum%20Number%20of%20Visible%20Points/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1652" tabindex="-1">1652. 拆炸弹 <a class="header-anchor" href="#q-1652" aria-label="Permalink to &quot;1652. 拆炸弹 {#q-1652}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 <code>n</code> 的 <strong>循环</strong> 数组 <code>code</code> 以及一个密钥 <code>k</code> 。</p>&#10;&#10;<p>为了获得正确的密码，你需要替换掉每一个数字。所有数字会 <strong>同时</strong> 被替换。</p>&#10;&#10;<ul>&#10;	<li>如果 <code>k > 0</code> ，将第 <code>i</code> 个数字用 <strong>接下来</strong> <code>k</code> 个数字之和替换。</li>&#10;	<li>如果 <code>k &lt; 0</code> ，将第 <code>i</code> 个数字用 <strong>之前</strong> <code>k</code> 个数字之和替换。</li>&#10;	<li>如果 <code>k == 0</code> ，将第 <code>i</code> 个数字用 <code>0</code> 替换。</li>&#10;</ul>&#10;&#10;<p>由于 <code>code</code> 是循环的， <code>code[n-1]</code> 下一个元素是 <code>code[0]</code> ，且 <code>code[0]</code> 前一个元素是 <code>code[n-1]</code> 。</p>&#10;&#10;<p>给你 <strong>循环</strong> 数组 <code>code</code> 和整数密钥 <code>k</code> ，请你返回解密后的结果来拆除炸弹！</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>code = [5,7,1,4], k = 3&#10;<b>输出：</b>[12,10,16,13]&#10;<b>解释：</b>每个数字都被接下来 3 个数字之和替换。解密后的密码为 [7+1+4, 1+4+5, 4+5+7, 5+7+1]。注意到数组是循环连接的。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>code = [1,2,3,4], k = 0&#10;<b>输出：</b>[0,0,0,0]&#10;<b>解释：</b>当 k 为 0 时，所有数字都被 0 替换。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>code = [2,4,9,3], k = -2&#10;<b>输出：</b>[12,5,6,13]&#10;<b>解释：</b>解密后的密码为 [3+9, 2+3, 4+2, 9+4] 。注意到数组是循环连接的。如果 k 是负数，那么和为 <strong>之前</strong> 的数字。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == code.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>1 &lt;= code[i] &lt;= 100</code></li>&#10;	<li><code>-(n - 1) &lt;= k &lt;= n - 1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>环形数组上每个位置替换为后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 项或前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OPEN" fence="false" stretchy="false">|</mo>
  <mi>k</mi>
  <mo data-mjx-texclass="CLOSE" fence="false" stretchy="false">|</mo>
</math></span> 项之和， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 则全零。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OPEN" fence="false" stretchy="false">|</mo>
  <mi>k</mi>
  <mo data-mjx-texclass="CLOSE" fence="false" stretchy="false">|</mo>
</math></span> 都很小，直接按定义累加即可。</p>
<p>下标对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 取模处理环；正 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 扫 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，负 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 扫 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们定义一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，初始时所有元素都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。根据题意，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。</p>
<p>否则，遍历每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>：</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为正数，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个位置的值之和，即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
    </mrow>
  </munderover>
  <mi>c</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span><p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为负数，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>k</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 个位置的值之和，即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mi>c</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span><p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>k</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，忽略答案的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func decrypt(code []int, k int) []int {</span></span>
<span class="line"><span>	n := len(code)</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	if k == 0 {</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if k > 0 {</span></span>
<span class="line"><span>			for j := i + 1; j &#x3C; i+k+1; j++ {</span></span>
<span class="line"><span>				ans[i] += code[j%n]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			for j := i + k; j &#x3C; i; j++ {</span></span>
<span class="line"><span>				ans[i] += code[(j+n)%n]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：前缀和 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 重复相加。把数组拼接一份求前缀和后，任意环形区间变成两次前缀相减，总时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>在方法一中，对于每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，都需要遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个位置，有很多重复计算的操作。我们可以利用前缀和来优化。</p>
<p>我们将 <code v-pre>code</code> 数组复制一份（可以不用执行复制操作，直接通过循环遍历取模实现），得到两倍长度的数组，对其求前缀和，得到长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为正数，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个位置的值之和，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为负数，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>k</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 个位置的值之和，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
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
</math></span> 为 <code v-pre>code</code> 数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func decrypt(code []int, k int) []int {</span></span>
<span class="line"><span>	n := len(code)</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	if k == 0 {</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := make([]int, n&#x3C;&#x3C;1|1)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n&#x3C;&#x3C;1; i++ {</span></span>
<span class="line"><span>		s[i+1] = s[i] + code[i%n]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := range code {</span></span>
<span class="line"><span>		if k > 0 {</span></span>
<span class="line"><span>			ans[i] = s[i+k+1] - s[i+1]</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans[i] = s[i+n] - s[i+k+n]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/defuse-the-bomb" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1652.Defuse%20the%20Bomb/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1695" tabindex="-1">1695. 删除子数组的最大得分 <a class="header-anchor" href="#q-1695" aria-label="Permalink to &quot;1695. 删除子数组的最大得分 {#q-1695}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数数组 <code>nums</code> ，请你从中删除一个含有 <strong>若干不同元素</strong> 的子数组<strong>。</strong>删除子数组的 <strong>得分</strong> 就是子数组各元素之 <strong>和</strong> 。</p>&#10;&#10;<p>返回 <strong>只删除一个</strong> 子数组可获得的 <strong>最大得分</strong><em> 。</em></p>&#10;&#10;<p>如果数组 <code>b</code> 是数组 <code>a</code> 的一个连续子序列，即如果它等于 <code>a[l],a[l+1],...,a[r]</code> ，那么它就是 <code>a</code> 的一个子数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [4,2,4,5,6]&#10;<strong>输出：</strong>17&#10;<strong>解释：</strong>最优子数组是 [2,4,5,6]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,2,1,2,5,2,1,2,5]&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>最优子数组是 [5,2,1] 或 [1,2,5]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组或哈希表 + 前缀和 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求元素互异的连续子数组的最大和。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，用上次出现位置把左端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 推到重复点之后，前缀和给出区间和。</p>
<p>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记下每个值最近下标，扫到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>v</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 更新答案。</p>
</blockquote>
<p>我们用数组或哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>d</mtext>
</math></span> 记录每个数字最后一次出现的位置，用前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>s</mtext>
</math></span> 记录从起点到当前位置的和。我们用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 记录当前不重复子数组的左端点。</p>
<p>遍历数组，对于每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>d</mtext>
  <mo stretchy="false">[</mo>
  <mi>v</mi>
  <mo stretchy="false">]</mo>
</math></span> 存在，那么我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mtext>d</mtext>
  <mo stretchy="false">[</mo>
  <mi>v</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，这样就保证了当前不重复子数组不包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>。然后我们更新答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext>ans</mtext>
  <mo>,</mo>
  <mtext>s</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mtext>s</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，最后更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>d</mtext>
  <mo stretchy="false">[</mo>
  <mi>v</mi>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumUniqueSubarray(nums []int) (ans int) {</span></span>
<span class="line"><span>	d := [10001]int{}</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, v := range nums {</span></span>
<span class="line"><span>		s[i+1] = s[i] + v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j := 1, 0; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		v := nums[i-1]</span></span>
<span class="line"><span>		j = max(j, d[v])</span></span>
<span class="line"><span>		ans = max(ans, s[i]-s[j])</span></span>
<span class="line"><span>		d[v] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双指针（滑动窗口） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用前缀和与下标表。也可用滑动窗口维护当前互异段的和：右端纳入时若重复则左端弹出，省掉前缀数组。</p>
</blockquote>
<p>题目实际上是让我们找出一个最长的子数组，该子数组中所有元素都不相同。我们可以用两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 分别指向子数组的左右边界，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。另外，我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>vis</mtext>
</math></span> 记录子数组中的元素。</p>
<p>遍历数组，对于每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>vis</mtext>
</math></span> 中，那么我们不断地将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>vis</mtext>
</math></span> 中移除，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 不在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>vis</mtext>
</math></span> 中为止。这样我们就找到了一个不包含重复元素的子数组。我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>vis</mtext>
</math></span>，并更新子数组的和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，然后更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>ans</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext>ans</mtext>
  <mo>,</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>遍历结束后，我们就可以得到最大的子数组和。</p>
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
  <mtext>nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumUniqueSubarray(nums []int) (ans int) {</span></span>
<span class="line"><span>	vis := map[int]bool{}</span></span>
<span class="line"><span>	var s, i int</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		for vis[x] {</span></span>
<span class="line"><span>			s -= nums[i]</span></span>
<span class="line"><span>			vis[nums[i]] = false</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[x] = true</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>		ans = max(ans, s)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-erasure-value" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1695.Maximum%20Erasure%20Value/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1763" tabindex="-1">1763. 最长的美好子字符串 <a class="header-anchor" href="#q-1763" aria-label="Permalink to &quot;1763. 最长的美好子字符串 {#q-1763}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、哈希表、字符串、分治、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>当一个字符串 <code>s</code> 包含的每一种字母的大写和小写形式 <strong>同时</strong> 出现在 <code>s</code> 中，就称这个字符串 <code>s</code> 是 <strong>美好</strong> 字符串。比方说，<code>&quot;abABB&quot;</code> 是美好字符串，因为 <code>'A'</code> 和 <code>'a'</code> 同时出现了，且 <code>'B'</code> 和 <code>'b'</code> 也同时出现了。然而，<code>&quot;abA&quot;</code> 不是美好字符串因为 <code>'b'</code> 出现了，而 <code>'B'</code> 没有出现。</p>&#10;&#10;<p>给你一个字符串 <code>s</code> ，请你返回 <code>s</code> 最长的 <strong>美好子字符串</strong> 。如果有多个答案，请你返回 <strong>最早</strong> 出现的一个。如果不存在美好子字符串，请你返回一个空字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;YazaAay&quot;&#10;<b>输出：</b>&quot;aAa&quot;&#10;<strong>解释：</strong>&quot;aAa&quot; 是一个美好字符串，因为这个子串中仅含一种字母，其小写形式 'a' 和大写形式 'A' 也同时出现了。&#10;&quot;aAa&quot; 是最长的美好子字符串。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;Bb&quot;&#10;<b>输出：</b>&quot;Bb&quot;&#10;<b>解释：</b>&quot;Bb&quot; 是美好字符串，因为 'B' 和 'b' 都出现了。整个字符串也是原字符串的子字符串。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;c&quot;&#10;<b>输出：</b>&quot;&quot;&#10;<b>解释：</b>没有美好子字符串。</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;dDzeE&quot;&#10;<b>输出：</b>&quot;dD&quot;&#10;<strong>解释：</strong>&quot;dD&quot; 和 &quot;eE&quot; 都是最长美好子字符串。&#10;由于有多个美好子字符串，返回 &quot;dD&quot; ，因为它出现得最早。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 100</code></li>&#10;	<li><code>s</code> 只包含大写和小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>美好子串要求每个出现的字母大小写都在。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 很小，可枚举全部子串。</p>
<p>固定左端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，向右扩张并用集合记录字符；集合内每个字母的大小写都在且更长时更新答案。同长时保留先出现的那段。</p>
</blockquote>
<p>我们可以直接枚举所有子串的起点位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，找到以该位置所在的字符为首字符的所有子串，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 记录子串的所有字符。</p>
<p>如果子串中存在一个字母找不到对应的大写字母或者小写字母，那么不满足条件，否则取最长的且最早出现的子串。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集的大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestNiceSubstring(s string) string {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	k, mx := -1, 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		ss := map[byte]bool{}</span></span>
<span class="line"><span>		for j := i; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			ss[s[j]] = true</span></span>
<span class="line"><span>			ok := true</span></span>
<span class="line"><span>			for a := range ss {</span></span>
<span class="line"><span>				b := a ^ 32</span></span>
<span class="line"><span>				if !(ss[a] &#x26;&#x26; ss[b]) {</span></span>
<span class="line"><span>					ok = false</span></span>
<span class="line"><span>					break</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if ok &#x26;&#x26; mx &#x3C; j-i+1 {</span></span>
<span class="line"><span>				mx = j - i + 1</span></span>
<span class="line"><span>				k = i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if k &#x3C; 0 {</span></span>
<span class="line"><span>		return ""</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s[k : k+mx]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：枚举 + 位运算 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对每个窗口扫描集合判断大小写，多一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 因子。字母只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 对，可用两个位掩码分别记小写与大写，窗口合法当且仅当两掩码相等。</p>
</blockquote>
<p>与方法一类似，我们可以直接枚举所有子串的起点位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，找到以该位置所在的字符为首字符的所有子串，用两个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mi>p</mi>
  <mi>p</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 分别记录子串中小写字母和大写字母的出现情况。</p>
<p>判断子串是否满足条件，只需要判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mi>p</mi>
  <mi>p</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 中对应的位是否都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
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
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestNiceSubstring(s string) string {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	k, mx := -1, 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		var lower, upper int</span></span>
<span class="line"><span>		for j := i; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if unicode.IsLower(rune(s[j])) {</span></span>
<span class="line"><span>				lower |= 1 &#x3C;&#x3C; (s[j] - 'a')</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				upper |= 1 &#x3C;&#x3C; (s[j] - 'A')</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if lower == upper &#x26;&#x26; mx &#x3C; j-i+1 {</span></span>
<span class="line"><span>				mx = j - i + 1</span></span>
<span class="line"><span>				k = i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if k &#x3C; 0 {</span></span>
<span class="line"><span>		return ""</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s[k : k+mx]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-nice-substring" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1763.Longest%20Nice%20Substring/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1839" tabindex="-1">1839. 所有元音按顺序排布的最长子字符串 <a class="header-anchor" href="#q-1839" aria-label="Permalink to &quot;1839. 所有元音按顺序排布的最长子字符串 {#q-1839}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>当一个字符串满足如下条件时，我们称它是 <b>美丽的</b> ：</p>&#10;&#10;<ul>&#10;	<li>所有 5 个英文元音字母（<code>'a'</code> ，<code>'e'</code> ，<code>'i'</code> ，<code>'o'</code> ，<code>'u'</code>）都必须 <strong>至少</strong> 出现一次。</li>&#10;	<li>这些元音字母的顺序都必须按照 <strong>字典序</strong> 升序排布（也就是说所有的 <code>'a'</code> 都在 <code>'e'</code> 前面，所有的 <code>'e'</code> 都在 <code>'i'</code> 前面，以此类推）</li>&#10;</ul>&#10;&#10;<p>比方说，字符串 <code>&quot;aeiou&quot;</code> 和 <code>&quot;aaaaaaeiiiioou&quot;</code> 都是 <strong>美丽的</strong> ，但是 <code>&quot;uaeio&quot;</code> ，<code>&quot;aeoiu&quot;</code> 和 <code>&quot;aaaeeeooo&quot;</code> <strong>不是美丽的</strong> 。</p>&#10;&#10;<p>给你一个只包含英文元音字母的字符串 <code>word</code> ，请你返回 <code>word</code> 中 <strong>最长美丽子字符串的长度</strong> 。如果不存在这样的子字符串，请返回 <code>0</code> 。</p>&#10;&#10;<p><strong>子字符串</strong> 是字符串中一个连续的字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>word = &quot;aeiaaio<strong>aaaaeiiiiouuu</strong>ooaauuaeiu&quot;&#10;<b>输出：</b>13&#10;<b>解释：</b>最长子字符串是 &quot;aaaaeiiiiouuu&quot; ，长度为 13 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>word = &quot;aeeeiiiioooauuu<strong>aeiou</strong>&quot;&#10;<b>输出：</b>5&#10;<b>解释：</b>最长子字符串是 &quot;aeiou&quot; ，长度为 5 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>word = &quot;a&quot;&#10;<b>输出：</b>0&#10;<b>解释：</b>没有美丽子字符串，所以返回 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= word.length &lt;= 5 * 10<sup>5</sup></code></li>&#10;	<li><code>word</code> 只包含字符 <code>'a'</code>，<code>'e'</code>，<code>'i'</code>，<code>'o'</code> 和 <code>'u'</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>美丽子串必须按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>,</mo>
  <mi>e</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>o</mi>
  <mo>,</mo>
  <mi>u</mi>
</math></span> 的顺序各至少出现一次，且中间不能回退。暴力枚举左右端再检查， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 不可行。</p>
<p>先把相同字母的连续段压成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">&#x5B57;&#x6BCD;</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">&#x957F;&#x5EA6;</mtext>
  <mo stretchy="false">)</mo>
</math></span>。美丽串恰好对应连续五段且字母拼成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">aeiou</mtext>
</math></span>，其长度之和即为候选。线性扫描这些段即可。</p>
</blockquote>
<p>我们可以先将字符串 <code v-pre>word</code> 做个转化，比如对于 <code v-pre>word=&quot;aaaeiouu&quot;</code>，我们可以将其转化为数据项 <code v-pre>('a', 3)</code>, <code v-pre>('e', 1)</code>, <code v-pre>('i', 1)</code>, <code v-pre>('o', 1)</code>, <code v-pre>('u', 2)</code>，存放在数组 <code v-pre>arr</code> 中。其中每个数据项的第一个元素表示元音字母，第二个元素表示该元音字母连续出现的次数。这部分转化可以通过双指针来实现。</p>
<p>接下来，我们遍历数组 <code v-pre>arr</code>，每次取相邻的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 个数据项，判断这些数据项中的元音字母是否分别为 <code v-pre>'a'</code>, <code v-pre>'e'</code>, <code v-pre>'i'</code>, <code v-pre>'o'</code>, <code v-pre>'u'</code>，如果是，则计算这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 个数据项中元音字母的总次数，即为当前的美丽子字符串的长度，更新答案的最大值即可。</p>
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
</math></span> 为字符串 <code v-pre>word</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestBeautifulSubstring(word string) (ans int) {</span></span>
<span class="line"><span>	arr := []pair{}</span></span>
<span class="line"><span>	n := len(word)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; {</span></span>
<span class="line"><span>		j := i</span></span>
<span class="line"><span>		for j &#x3C; n &#x26;&#x26; word[j] == word[i] {</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		arr = append(arr, pair{word[i], j - i})</span></span>
<span class="line"><span>		i = j</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(arr)-4; i++ {</span></span>
<span class="line"><span>		a, b, c, d, e := arr[i], arr[i+1], arr[i+2], arr[i+3], arr[i+4]</span></span>
<span class="line"><span>		if a.c == 'a' &#x26;&#x26; b.c == 'e' &#x26;&#x26; c.c == 'i' &#x26;&#x26; d.c == 'o' &#x26;&#x26; e.c == 'u' {</span></span>
<span class="line"><span>			ans = max(ans, a.v+b.v+c.v+d.v+e.v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct {</span></span>
<span class="line"><span>	c byte</span></span>
<span class="line"><span>	v int</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-substring-of-all-vowels-in-order" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1839.Longest%20Substring%20Of%20All%20Vowels%20in%20Order/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1852" tabindex="-1">1852. 每个子数组的数字种类数 🔒 <a class="header-anchor" href="#q-1852" aria-label="Permalink to &quot;1852. 每个子数组的数字种类数 🔒 {#q-1852}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> 与一个整数 <code>k</code>。你的任务是找到 <code>nums</code> <strong>所有</strong> 长度为 <code>k</code> 的子数组中 <strong>不同</strong> 元素的数量。</p>&#10;&#10;<p>返回一个数组 <code>ans</code>，其中 <code>ans[i]</code> 是对于每个索引 <code>0 &lt;= i &lt; n - k</code>，<code>nums[i..(i + k - 1)]</code> 中不同元素的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,2,3,2,2,1,3], k = 3&#10;<strong>输出:</strong> [3,2,2,2,3]&#10;<b>解释</b>：每个子数组的数字种类计算方法如下：&#10;- nums[0..2] = [1,2,3] 所以 ans[0] = 3&#10;- nums[1..3] = [2,3,2] 所以 ans[1] = 2&#10;- nums[2..4] = [3,2,2] 所以 ans[2] = 2&#10;- nums[3..5] = [2,2,1] 所以 ans[3] = 2&#10;- nums[4..6] = [2,1,3] 所以 ans[4] = 3&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,1,1,1,2,3,4], k = 4&#10;<strong>输出:</strong> [1,2,3,4]&#10;<strong>解释: </strong>每个子数组的数字种类计算方法如下：&#10;- nums[0..3] = [1,1,1,1] 所以 ans[0] = 1&#10;- nums[1..4] = [1,1,1,2] 所以 ans[1] = 2&#10;- nums[2..5] = [1,1,2,3] 所以 ans[2] = 3&#10;- nums[3..6] = [1,2,3,4] 所以 ans[3] = 4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的窗口统计不同数字个数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，每个窗口单独用集合去重会超时。</p>
<p>维护窗口内的频次表：右端进入加一，左端离开减一至 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则删除。表的大小即当前窗口的不同个数，窗口滑动一遍即可。</p>
</blockquote>
<p>我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录每个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组中数字的出现次数。</p>
<p>接下来，我们首先遍历数组前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个元素，记录每个元素出现的次数，遍历后，我们将哈希表的大小作为答案数组的第一个元素。</p>
<p>然后，我们从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 继续遍历数组，每次遍历时，我们将当前元素的出现次数加一，并且将当前元素左边的元素的出现次数减一，如果减一后的出现次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则将其从哈希表中删除，然后将哈希表的大小作为答案数组的下一个元素，继续遍历。</p>
<p>遍历结束后，我们返回答案数组。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为题目给定的参数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distinctNumbers(nums []int, k int) []int {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range nums[:k] {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []int{len(cnt)}</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(nums); i++ {</span></span>
<span class="line"><span>		cnt[nums[i]]++</span></span>
<span class="line"><span>		cnt[nums[i-k]]--</span></span>
<span class="line"><span>		if cnt[nums[i-k]] == 0 {</span></span>
<span class="line"><span>			delete(cnt, nums[i-k])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, len(cnt))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：滑动窗口 + 数组 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用哈希表，常数与哈希开销较大。数值范围不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，可用数组代替映射。窗口逻辑不变，只是把计数下标换成数值本身。</p>
</blockquote>
<p>我们也可以用数组来代替哈希表，这样可以提升一定的性能。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的最大值，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distinctNumbers(nums []int, k int) (ans []int) {</span></span>
<span class="line"><span>	m := slices.Max(nums)</span></span>
<span class="line"><span>	cnt := make([]int, m+1)</span></span>
<span class="line"><span>	v := 0</span></span>
<span class="line"><span>	for _, x := range nums[:k] {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>		if cnt[x] == 1 {</span></span>
<span class="line"><span>			v++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans = append(ans, v)</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(nums); i++ {</span></span>
<span class="line"><span>		cnt[nums[i]]++</span></span>
<span class="line"><span>		if cnt[nums[i]] == 1 {</span></span>
<span class="line"><span>			v++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt[nums[i-k]]--</span></span>
<span class="line"><span>		if cnt[nums[i-k]] == 0 {</span></span>
<span class="line"><span>			v--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, v)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/distinct-numbers-in-each-subarray" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1852.Distinct%20Numbers%20in%20Each%20Subarray/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1876" tabindex="-1">1876. 长度为三且各字符不同的子字符串 <a class="header-anchor" href="#q-1876" aria-label="Permalink to &quot;1876. 长度为三且各字符不同的子字符串 {#q-1876}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果一个字符串不含有任何重复字符，我们称这个字符串为 <strong>好</strong> 字符串。</p>&#10;&#10;<p>给你一个字符串 <code>s</code> ，请你返回 <code>s</code> 中长度为 <strong>3</strong> 的 <strong>好子字符串</strong> 的数量。</p>&#10;&#10;<p>注意，如果相同的好子字符串出现多次，每一次都应该被记入答案之中。</p>&#10;&#10;<p><strong>子字符串</strong> 是一个字符串中连续的字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;xyzzaz&quot;&#10;<b>输出：</b>1&#10;<b>解释：</b>总共有 4 个长度为 3 的子字符串：&quot;xyz&quot;，&quot;yzz&quot;，&quot;zza&quot; 和 &quot;zaz&quot; 。&#10;唯一的长度为 3 的好子字符串是 &quot;xyz&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;aababcabc&quot;&#10;<b>输出：</b>4&#10;<b>解释：</b>总共有 7 个长度为 3 的子字符串：&quot;aab&quot;，&quot;aba&quot;，&quot;bab&quot;，&quot;abc&quot;，&quot;bca&quot;，&quot;cab&quot; 和 &quot;abc&quot; 。&#10;好子字符串包括 &quot;abc&quot;，&quot;bca&quot;，&quot;cab&quot; 和 &quot;abc&quot; 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 100</code></li>&#10;	<li><code>s</code>​​​​​​ 只包含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 且字符互不相同的子串。窗口很短，枚举每个起点检查三位即可；写成可扩展的滑动窗口则能推广到任意 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>维护无重复字符的窗口： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 标记窗口内字母，右端遇重复则收缩左端。窗口长度至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 时，以右端结尾的长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的子串一定互异，计入答案。</p>
</blockquote>
<p>我们可以维护一个滑动窗口，使得窗口内的字符不重复。初始时，我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的二进制整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 表示窗口内的字符，其中第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 表示字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 在窗口内出现过，否则表示字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 在窗口内没有出现过。</p>
<p>然后，我们遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，对于每一个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 在窗口内出现过，我们需要将窗口的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 右移，直到窗口内不再有重复的字符。在这之后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入窗口内，此时如果窗口的长度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，那么我们就找到了一个以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 结尾的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的好子字符串。</p>
<p>遍历结束后，我们就找到了所有的好子字符串的数量。</p>
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
<blockquote>
<p>该解法可以拓展到长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的好子字符串的数量。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countGoodSubstrings(s string) (ans int) {</span></span>
<span class="line"><span>	mask, l := 0, 0</span></span>
<span class="line"><span>	for r, c := range s {</span></span>
<span class="line"><span>		x := int(c - 'a')</span></span>
<span class="line"><span>		for (mask>>x)&#x26;1 == 1 {</span></span>
<span class="line"><span>			y := int(s[l] - 'a')</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>			mask ^= 1 &#x3C;&#x3C; y</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		mask |= 1 &#x3C;&#x3C; x</span></span>
<span class="line"><span>		if r-l+1 >= 3 {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/substrings-of-size-three-with-distinct-characters" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1800-1899/1876.Substrings%20of%20Size%20Three%20with%20Distinct%20Characters/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1984" tabindex="-1">1984. 学生分数的最小差值 <a class="header-anchor" href="#q-1984" aria-label="Permalink to &quot;1984. 学生分数的最小差值 {#q-1984}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、排序、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <strong>下标从 0 开始</strong> 的整数数组 <code>nums</code> ，其中 <code>nums[i]</code> 表示第 <code>i</code> 名学生的分数。另给你一个整数 <code>k</code> 。</p>&#10;&#10;<p>从数组中选出任意 <code>k</code> 名学生的分数，使这 <code>k</code> 个分数间 <strong>最高分</strong> 和 <strong>最低分</strong> 的 <strong>差值</strong> 达到<strong> 最小化</strong> 。</p>&#10;&#10;<p>返回可能的 <strong>最小差值</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [90], k = 1&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>选出 1 名学生的分数，仅有 1 种方法：&#10;- [<em><strong>90</strong></em>] 最高分和最低分之间的差值是 90 - 90 = 0&#10;可能的最小差值是 0&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [9,4,1,7], k = 2&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>选出 2 名学生的分数，有 6 种方法：&#10;- [<em><strong>9</strong></em>,<em><strong>4</strong></em>,1,7] 最高分和最低分之间的差值是 9 - 4 = 5&#10;- [<em><strong>9</strong></em>,4,<em><strong>1</strong></em>,7] 最高分和最低分之间的差值是 9 - 1 = 8&#10;- [<em><strong>9</strong></em>,4,1,<em><strong>7</strong></em>] 最高分和最低分之间的差值是 9 - 7 = 2&#10;- [9,<em><strong>4</strong></em>,<em><strong>1</strong></em>,7] 最高分和最低分之间的差值是 4 - 1 = 3&#10;- [9,<em><strong>4</strong></em>,1,<em><strong>7</strong></em>] 最高分和最低分之间的差值是 7 - 4 = 3&#10;- [9,4,<em><strong>1</strong></em>,<em><strong>7</strong></em>] 最高分和最低分之间的差值是 7 - 1 = 6&#10;可能的最小差值是 2</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个分数使最大最小之差最小。排序后最优的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个必连续，否则两端只会更远。</p>
<p>对每个窗口 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 取最小。</p>
</blockquote>
<p>我们可以将学生的分数按照升序排序，然后使用滑动窗口的方法，每次取大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的窗口，计算窗口内的最大值和最小值的差值，最后取所有窗口的差值的最小值。</p>
<p>为什么是取连续的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个学生的分数呢？因为如果不连续，那么最大值和最小值的的差值可能不变，或者变大，但一定不会变小。因此，我们只需要考虑排序后的连续的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个学生的分数。</p>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是学生的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumDifference(nums []int, k int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	ans := 100000</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(nums)-k+1; i++ {</span></span>
<span class="line"><span>		ans = min(ans, nums[i+k-1]-nums[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-difference-between-highest-and-lowest-of-k-scores" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1900-1999/1984.Minimum%20Difference%20Between%20Highest%20and%20Lowest%20of%20K%20Scores/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2067" tabindex="-1">2067. 等计数子串的数量 🔒 <a class="header-anchor" href="#q-2067" aria-label="Permalink to &quot;2067. 等计数子串的数量 🔒 {#q-2067}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code>，只包含小写英文字母和一个整数 <code>count</code>。如果 <code>s</code> 的 <strong>子串 </strong>中的每种字母在子串中恰好出现 <code>count</code> 次，这个子串就被称为 <strong>等计数子串</strong>。</p>&#10;&#10;<p>返回<em> <code>s</code> 中 <strong>等计数子串 </strong>的个数。</em></p>&#10;&#10;<p><strong>子串 </strong>是字符串中连续的非空字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> s = &quot;aaabcbbcc&quot;, count = 3&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong>&#10;从下标 0 开始到下标 2 结束的子串是 &quot;aaa&quot;。&#10;字母 “a” 在子串中恰好出现了 3 次。&#10;从下标 3 开始到下标 8 结束的子串是 &quot;bcbbcc&quot;。&#10;字母 “b” 和 “c” 在子串中恰好出现了 3 次。&#10;从下标 0 开始到下标 8 结束的子串是 &quot;aaabcbbcc&quot;。&#10;字母 “a”、“b” 和 “c” 在子串中恰好出现了 3 次。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> s = &quot;abcd&quot;, count = 2&#10;<strong>输出:</strong> 0&#10;<strong>解释:</strong>&#10;每种字母在 s 中出现的次数小于 count。&#10;因此，s 中没有子串是等计数子串，返回 0。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> s = &quot;a&quot;, count = 5&#10;<strong>输出:</strong> 0&#10;<strong>解释:</strong>&#10;每种字母在 s 中出现的次数小于 count。&#10;因此，s 中没有子串是等计数子串，返回 0。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= count &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>s</code> 只由小写英文字母组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + 滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子串中出现的每种字母都恰有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 次。字母种类 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>26</mn>
  <mo stretchy="false">]</mo>
</math></span> 时，窗口长度锁定为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x22C5;</mo>
  <mi>c</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，可滑动统计。</p>
<p>维护窗口内「频次恰为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>」的字母数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，进出窗口时调整。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>t</mi>
</math></span> 则该窗口合法。</p>
</blockquote>
<p>我们可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1.</mn>
  <mn>.26</mn>
  <mo stretchy="false">]</mo>
</math></span> 范围内枚举子串的字母种类数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么子串长度就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#xD7;</mo>
  <mi>c</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>。</p>
<p>接下来，我们将当前子串长度作为窗口的大小，统计窗口大小中有多少种字母的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，记录在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中。如果此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>t</mi>
</math></span>，说明当前窗口中的字母个数都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，那么就可以将答案加一。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字母的种类数，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func equalCountSubstrings(s string, count int) (ans int) {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; 27 &#x26;&#x26; i*count &#x3C;= n; i++ {</span></span>
<span class="line"><span>		k := i * count</span></span>
<span class="line"><span>		cnt := [26]int{}</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for j, c := range s {</span></span>
<span class="line"><span>			a := c - 'a'</span></span>
<span class="line"><span>			cnt[a]++</span></span>
<span class="line"><span>			if cnt[a] == count {</span></span>
<span class="line"><span>				t++</span></span>
<span class="line"><span>			} else if cnt[a] == count+1 {</span></span>
<span class="line"><span>				t--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if j >= k {</span></span>
<span class="line"><span>				b := s[j-k] - 'a'</span></span>
<span class="line"><span>				cnt[b]--</span></span>
<span class="line"><span>				if cnt[b] == count {</span></span>
<span class="line"><span>					t++</span></span>
<span class="line"><span>				} else if cnt[b] == count-1 {</span></span>
<span class="line"><span>					t--</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if i == t {</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-equal-count-substrings" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2000-2099/2067.Number%20of%20Equal%20Count%20Substrings/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2090" tabindex="-1">2090. 半径为 k 的子数组平均值 <a class="header-anchor" href="#q-2090" aria-label="Permalink to &quot;2090. 半径为 k 的子数组平均值 {#q-2090}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，数组中有 <code>n</code> 个整数，另给你一个整数 <code>k</code> 。</p>&#10;&#10;<p><strong>半径为 k 的子数组平均值</strong> 是指：<code>nums</code> 中一个以下标 <code>i</code> 为 <strong>中心</strong> 且 <strong>半径</strong> 为 <code>k</code> 的子数组中所有元素的平均值，即下标在 <code>i - k</code> 和 <code>i + k</code> 范围（<strong>含</strong> <code>i - k</code> 和 <code>i + k</code>）内所有元素的平均值。如果在下标 <code>i</code> 前或后不足 <code>k</code> 个元素，那么<strong> 半径为 k 的子数组平均值 </strong>是 <code>-1</code> 。</p>&#10;&#10;<p>构建并返回一个长度为 <code>n</code> 的数组<em> </em><code>avgs</code><em> </em>，其中<em> </em><code>avgs[i]</code><em> </em>是以下标 <code>i</code> 为中心的子数组的<strong> 半径为 k 的子数组平均值 </strong>。</p>&#10;&#10;<p><code>x</code> 个元素的 <strong>平均值</strong> 是 <code>x</code> 个元素相加之和除以 <code>x</code> ，此时使用截断式 <strong>整数除法</strong> ，即需要去掉结果的小数部分。</p>&#10;&#10;<ul>&#10;	<li>例如，四个元素 <code>2</code>、<code>3</code>、<code>1</code> 和 <code>5</code> 的平均值是 <code>(2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75</code>，截断后得到 <code>2</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2000-2099/2090.K%20Radius%20Subarray%20Averages/images/eg1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [7,4,3,9,1,8,5,2,6], k = 3&#10;<strong>输出：</strong>[-1,-1,-1,5,4,4,-1,-1,-1]&#10;<strong>解释：</strong>&#10;- avg[0]、avg[1] 和 avg[2] 是 -1 ，因为在这几个下标前的元素数量都不足 k 个。&#10;- 中心为下标 3 且半径为 3 的子数组的元素总和是：7 + 4 + 3 + 9 + 1 + 8 + 5 = 37 。&#10;  使用截断式 <strong>整数除法</strong>，avg[3] = 37 / 7 = 5 。&#10;- 中心为下标 4 的子数组，avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4 。&#10;- 中心为下标 5 的子数组，avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4 。&#10;- avg[6]、avg[7] 和 avg[8] 是 -1 ，因为在这几个下标后的元素数量都不足 k 个。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [100000], k = 0&#10;<strong>输出：</strong>[100000]&#10;<strong>解释：</strong>&#10;- 中心为下标 0 且半径 0 的子数组的元素总和是：100000 。&#10;  avg[0] = 100000 / 1 = 100000 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [8], k = 100000&#10;<strong>输出：</strong>[-1]&#10;<strong>解释：</strong>&#10;- avg[0] 是 -1 ，因为在下标 0 前后的元素数量均不足 k 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i], k &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>窗口长度固定为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，两端不足则答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，滑动维护窗口和。</p>
<p>右端进入、左端离开，中心下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span>，整除得到平均值。</p>
</blockquote>
<p>半径为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，因此我们可以维护一个大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的窗口，记窗口中的所有元素和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。</p>
<p>我们创建一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>，初始时每个元素都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>接下来，我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值加到窗口的和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中，如果此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
</math></span>，说明此时窗口大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mfrac>
    <mi>s</mi>
    <mrow>
      <mi>k</mi>
      <mo>&#xD7;</mo>
      <mn>2</mn>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </mfrac>
</math></span>，然后我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span> 的值从窗口和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中移出。继续遍历下个元素。</p>
<p>最后返回答案数组即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。忽略答案数组的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func getAverages(nums []int, k int) []int {</span></span>
<span class="line"><span>	ans := make([]int, len(nums))</span></span>
<span class="line"><span>	for i := range ans {</span></span>
<span class="line"><span>		ans[i] = -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>		if i >= k*2 {</span></span>
<span class="line"><span>			ans[i-k] = s / (k*2 + 1)</span></span>
<span class="line"><span>			s -= nums[i-k*2]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/k-radius-subarray-averages" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2000-2099/2090.K%20Radius%20Subarray%20Averages/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2107" tabindex="-1">2107. 分享 K 个糖果后独特口味的数量 🔒 <a class="header-anchor" href="#q-2107" aria-label="Permalink to &quot;2107. 分享 K 个糖果后独特口味的数量 🔒 {#q-2107}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>您将获得一个 <strong>从0开始的</strong> 整数数组 <code>candies</code> ，其中 <code>candies[i]</code> 表示第 <code>i</code> 个糖果的味道。你妈妈想让你和你妹妹分享这些糖果，给她 <code>k</code> 个 <strong>连续 </strong>的糖果，但你想保留尽可能多的糖果口味。<br>&#10;在与妹妹分享后，返回 <strong>最多</strong> 可保留的 <strong>独特</strong> 口味的糖果。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> candies = [1,<u>2,2,3</u>,4,3], k = 3&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong>&#10;将[1,3]（含[2,2,3]）范围内的糖果加入[2,2,3]口味。&#10;你可以吃各种口味的糖果[1,4,3]。&#10;有3种独特的口味，所以返回3。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> candies = [2,2,2,<u>2,3</u>,3], k = 2&#10;<strong>输出:</strong> 2&#10;<strong>解释:</strong>&#10;在[3,4]范围内（含[2,3]）的糖果中加入[2,3]口味。&#10;你可以吃各种口味的糖果[2,2,2,3]。&#10;有两种独特的口味，所以返回2。&#10;请注意，你也可以分享口味为[2,2]的糖果，吃口味为[2,2,3,3]的糖果。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> candies = [2,4,5], k = 0&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong>&#10;你不必给任何糖果。&#10;你可以吃各种口味的糖果[2,4,5]。&#10;有3种独特的口味，所以返回3。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= candies.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= candies[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= k &lt;= candies.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>分出的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 颗糖必须是连续一段，自己留下的是这段的补集。若对每个窗口重建口味集合，每次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，总时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时不可行。</p>
<p>窗口长度固定为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，右移一格时只有两端各一颗糖进出补集。用计数表维护窗口外每种口味的个数，种类数即表的大小。</p>
<p>初始将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">candies</mtext>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>:</mo>
  <mo stretchy="false">]</mo>
</math></span> 放入计数表，再滑过每个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的窗口，更新两端并记录种类数的最大值。</p>
</blockquote>
<p>我们可以维护一个大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口，窗口外的糖果为自己的，窗口内的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个糖果分给妹妹和妈妈。我们可以用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录窗口外的糖果口味以及对应的数量。</p>
<p>初始时，哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中存储的是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的糖果口味以及对应的数量。此时糖果口味的种类数为哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 的大小，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>s</mi>
  <mi>i</mi>
  <mi>z</mi>
  <mi>e</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>接下来，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 范围内的糖果，将当前糖果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入窗口内，同时将窗口左侧的糖果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 移出窗口外。然后我们更新哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，并且更新糖果口味的种类数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>s</mi>
  <mi>i</mi>
  <mi>z</mi>
  <mi>e</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>遍历完所有糖果后，我们即可得到最多可保留的独特口味的糖果。</p>
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
</math></span> 为糖果的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func shareCandies(candies []int, k int) (ans int) {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, c := range candies[k:] {</span></span>
<span class="line"><span>		cnt[c]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans = len(cnt)</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(candies); i++ {</span></span>
<span class="line"><span>		cnt[candies[i-k]]++</span></span>
<span class="line"><span>		cnt[candies[i]]--</span></span>
<span class="line"><span>		if cnt[candies[i]] == 0 {</span></span>
<span class="line"><span>			delete(cnt, candies[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, len(cnt))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-unique-flavors-after-sharing-k-candies" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2107.Number%20of%20Unique%20Flavors%20After%20Sharing%20K%20Candies/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2134" tabindex="-1">2134. 最少交换次数来组合所有的 1 II <a class="header-anchor" href="#q-2134" aria-label="Permalink to &quot;2134. 最少交换次数来组合所有的 1 II {#q-2134}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><strong>交换</strong> 定义为选中一个数组中的两个 <strong>互不相同</strong> 的位置并交换二者的值。</p>&#10;&#10;<p><strong>环形</strong> 数组是一个数组，可以认为 <strong>第一个</strong> 元素和 <strong>最后一个</strong> 元素 <strong>相邻</strong> 。</p>&#10;&#10;<p>给你一个 <strong>二进制环形</strong> 数组 <code>nums</code> ，返回在 <strong>任意位置</strong> 将数组中的所有 <code>1</code> 聚集在一起需要的最少交换次数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [0,1,0,1,1,0,0]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>这里列出一些能够将所有 1 聚集在一起的方案：&#10;[0,<strong><em>0</em></strong>,<em><strong>1</strong></em>,1,1,0,0] 交换 1 次。&#10;[0,1,<em><strong>1</strong></em>,1,<em><strong>0</strong></em>,0,0] 交换 1 次。&#10;[1,1,0,0,0,0,1] 交换 2 次（利用数组的环形特性）。&#10;无法在交换 0 次的情况下将数组中的所有 1 聚集在一起。&#10;因此，需要的最少交换次数为 1 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [0,1,1,1,0,0,1,1,0]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>这里列出一些能够将所有 1 聚集在一起的方案：&#10;[1,1,1,0,0,0,0,1,1] 交换 2 次（利用数组的环形特性）。&#10;[1,1,1,1,1,0,0,0,0] 交换 2 次。&#10;无法在交换 0 次或 1 次的情况下将数组中的所有 1 聚集在一起。&#10;因此，需要的最少交换次数为 2 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,1,0,0,1]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>得益于数组的环形特性，所有的 1 已经聚集在一起。&#10;因此，需要的最少交换次数为 0 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>nums[i]</code> 为 <code>0</code> 或者 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>环形数组中把全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 换到一起，等价于找一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">count</mtext>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的窗口，使其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 最多，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 减该最大值。枚举所有窗口若每次重算计数则为二次。</p>
<p>窗口长度固定，环形只要把下标对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 取模继续滑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 步。先统计前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数，再每次加右端、减左端。</p>
<p>扫完一圈后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">mx</mtext>
</math></span>。</p>
</blockquote>
<p>我们先统计数组中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么题目实际上就是求一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的环形子数组，使得子数组中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数最多，那么最少交换次数就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 减去子数组中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数最多的那个子数组中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数。</p>
<p>我们可以使用滑动窗口来解决这个问题，首先统计数组中前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个元素中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，然后我们维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口，每次向右移动一个位置，更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，同时更新最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，最后答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
  <mi>x</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minSwaps(nums []int) int {</span></span>
<span class="line"><span>	k := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		k += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		cnt += nums[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mx := cnt</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for i := k; i &#x3C; n+k; i++ {</span></span>
<span class="line"><span>		cnt += nums[i%n] - nums[(i-k+n)%n]</span></span>
<span class="line"><span>		mx = max(mx, cnt)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return k - mx</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-swaps-to-group-all-1s-together-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2134.Minimum%20Swaps%20to%20Group%20All%201's%20Together%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2156" tabindex="-1">2156. 查找给定哈希值的子串 <a class="header-anchor" href="#q-2156" aria-label="Permalink to &quot;2156. 查找给定哈希值的子串 {#q-2156}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、滑动窗口、哈希函数、滚动哈希</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定整数 <code>p</code> 和 <code>m</code> ，一个长度为 <code>k</code> 且下标从 <strong>0</strong> 开始的字符串 <code>s</code> 的哈希值按照如下函数计算：</p>&#10;&#10;<ul>&#10;	<li><code>hash(s, p, m) = (val(s[0]) * p<sup>0</sup> + val(s[1]) * p<sup>1</sup> + ... + val(s[k-1]) * p<sup>k-1</sup>) mod m</code>.</li>&#10;</ul>&#10;&#10;<p>其中 <code>val(s[i])</code> 表示 <code>s[i]</code> 在字母表中的下标，从 <code>val('a') = 1</code> 到 <code>val('z') = 26</code> 。</p>&#10;&#10;<p>给你一个字符串 <code>s</code> 和整数 <code>power</code>，<code>modulo</code>，<code>k</code> 和 <code>hashValue</code> 。请你返回 <code>s</code> 中 <strong>第一个</strong> 长度为 <code>k</code> 的 <strong>子串</strong> <code>sub</code> ，满足<em> </em><code>hash(sub, power, modulo) == hashValue</code> 。</p>&#10;&#10;<p>测试数据保证一定 <strong>存在</strong> 至少一个这样的子串。</p>&#10;&#10;<p><strong>子串</strong> 定义为一个字符串中连续非空字符组成的序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>s = &quot;leetcode&quot;, power = 7, modulo = 20, k = 2, hashValue = 0&#10;<strong>输出：</strong>&quot;ee&quot;&#10;<strong>解释：</strong>&quot;ee&quot; 的哈希值为 hash(&quot;ee&quot;, 7, 20) = (5 * 1 + 5 * 7) mod 20 = 40 mod 20 = 0 。&#10;&quot;ee&quot; 是长度为 2 的第一个哈希值为 0 的子串，所以我们返回 &quot;ee&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>s = &quot;fbxzaad&quot;, power = 31, modulo = 100, k = 3, hashValue = 32&#10;<b>输出：</b>&quot;fbx&quot;&#10;<b>解释：</b>&quot;fbx&quot; 的哈希值为 hash(&quot;fbx&quot;, 31, 100) = (6 * 1 + 2 * 31 + 24 * 31<sup>2</sup>) mod 100 = 23132 mod 100 = 32 。&#10;&quot;bxz&quot; 的哈希值为 hash(&quot;bxz&quot;, 31, 100) = (2 * 1 + 24 * 31 + 26 * 31<sup>2</sup>) mod 100 = 25732 mod 100 = 32 。&#10;&quot;fbx&quot; 是长度为 3 的第一个哈希值为 32 的子串，所以我们返回 &quot;fbx&quot; 。&#10;注意，&quot;bxz&quot; 的哈希值也为 32 ，但是它在字符串中比 &quot;fbx&quot; 更晚出现。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= s.length &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= power, modulo &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= hashValue &lt; modulo</code></li>&#10;	<li><code>s</code> 只包含小写英文字母。</li>&#10;	<li>测试数据保证一定 <strong>存在</strong> 满足条件的子串。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 + 倒序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>需要长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>、哈希等于给定值的最靠后子串。正着滑窗时去掉左端相当于除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 再取模，模逆元处理麻烦。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，需线性滑窗。</p>
<p>倒序计算 Rabin–Karp：窗口右移（在原串上左移）时，去掉旧的最高位、乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 再加新的最低位，只需乘法和取模。</p>
<p>先算末尾 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个字符的哈希并记下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>p</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span>，再向左滑，每次命中则更新起点。</p>
</blockquote>
<p>我们可以维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口，用来计算子串的哈希值。考虑到如果正序遍历字符串，在哈希值的计算中，涉及到除法取模的操作，处理起来比较麻烦。因此我们可以倒序遍历字符串，这样在计算哈希值的时候，只需要乘法和取模操作。</p>
<p>我们首先计算字符串末尾的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个字符的哈希值，然后从字符串末尾开始倒序遍历，每次计算当前窗口的哈希值，如果等于给定的哈希值，我们就找到了一个满足条件的子串，更新答案字符串的起始位置。</p>
<p>最后返回答案字符串即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func subStrHash(s string, power int, modulo int, k int, hashValue int) string {</span></span>
<span class="line"><span>	h, p := 0, 1</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	for i := n - 1; i >= n-k; i-- {</span></span>
<span class="line"><span>		val := int(s[i] - 'a' + 1)</span></span>
<span class="line"><span>		h = (h*power%modulo + val) % modulo</span></span>
<span class="line"><span>		if i != n-k {</span></span>
<span class="line"><span>			p = p * power % modulo</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	j := n - k</span></span>
<span class="line"><span>	for i := n - k - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		pre := int(s[i+k] - 'a' + 1)</span></span>
<span class="line"><span>		cur := int(s[i] - 'a' + 1)</span></span>
<span class="line"><span>		h = ((h-pre*p%modulo+modulo)*power%modulo + cur) % modulo</span></span>
<span class="line"><span>		if h == hashValue {</span></span>
<span class="line"><span>			j = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s[j : j+k]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-substring-with-given-hash-value" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2156.Find%20Substring%20With%20Given%20Hash%20Value/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2260" tabindex="-1">2260. 必须拿起的最小连续卡牌数 <a class="header-anchor" href="#q-2260" aria-label="Permalink to &quot;2260. 必须拿起的最小连续卡牌数 {#q-2260}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>cards</code> ，其中 <code>cards[i]</code> 表示第 <code>i</code> 张卡牌的 <strong>值</strong> 。如果两张卡牌的值相同，则认为这一对卡牌 <strong>匹配</strong> 。</p>&#10;&#10;<p>返回你必须拿起的最小连续卡牌数，以使在拿起的卡牌中有一对匹配的卡牌。如果无法得到一对匹配的卡牌，返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>cards = [3,4,2,3,4,7]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>拿起卡牌 [3,4,2,3] 将会包含一对值为 3 的匹配卡牌。注意，拿起 [4,2,3,4] 也是最优方案。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>cards = [1,0,5,3]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>无法找出含一对匹配卡牌的一组连续卡牌。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= cards.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= cards[i] &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要拿起至少两张相同点数的连续段，长度尽量短。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，枚举左右端再检查是否有重复过慢。最短段一定以某次「同一点数的相邻两次出现」为两端。</p>
<p>哈希表记下每个点数上次出现的下标，再次遇到时用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 更新最短长度。没有重复则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们初始化答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>，遍历数组，对于每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 存在，则表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 有一对匹配卡牌，此时更新答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">ans</mtext>
  <mo>,</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，最后如果答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mi mathvariant="normal">&#x221E;</mi>
</math></span>，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，否则返回答案。</p>
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
</math></span> 为数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumCardPickup(cards []int) int {</span></span>
<span class="line"><span>	last := map[int]int{}</span></span>
<span class="line"><span>	n := len(cards)</span></span>
<span class="line"><span>	ans := n + 1</span></span>
<span class="line"><span>	for i, x := range cards {</span></span>
<span class="line"><span>		if j, ok := last[x]; ok &#x26;&#x26; ans > i-j+1 {</span></span>
<span class="line"><span>			ans = i - j + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		last[x] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if ans > n {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-consecutive-cards-to-pick-up" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2260.Minimum%20Consecutive%20Cards%20to%20Pick%20Up/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2269" tabindex="-1">2269. 找到一个数字的 K 美丽值 <a class="header-anchor" href="#q-2269" aria-label="Permalink to &quot;2269. 找到一个数字的 K 美丽值 {#q-2269}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一个整数 <code>num</code> 的 <strong>k </strong>美丽值定义为 <code>num</code> 中符合以下条件的 <strong>子字符串</strong> 数目：</p>&#10;&#10;<ul>&#10;	<li>子字符串长度为 <code>k</code> 。</li>&#10;	<li>子字符串能整除 <code>num</code> 。</li>&#10;</ul>&#10;&#10;<p>给你整数 <code>num</code> 和 <code>k</code> ，请你返回<em> </em><code>num</code> 的 k 美丽值。</p>&#10;&#10;<p>注意：</p>&#10;&#10;<ul>&#10;	<li>允许有 <strong>前缀</strong> <strong>0</strong> 。</li>&#10;	<li><code>0</code> 不能整除任何值。</li>&#10;</ul>&#10;&#10;<p>一个 <strong>子字符串</strong> 是一个字符串里的连续一段字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>num = 240, k = 2&#10;<b>输出：</b>2&#10;<b>解释：</b>以下是 num 里长度为 k 的子字符串：&#10;- &quot;<em><strong>24</strong></em>0&quot; 中的 &quot;24&quot; ：24 能整除 240 。&#10;- &quot;2<em><strong>40</strong></em>&quot; 中的 &quot;40&quot; ：40 能整除 240 。&#10;所以，k 美丽值为 2 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>num = 430043, k = 2&#10;<b>输出：</b>2&#10;<b>解释：</b>以下是 num 里长度为 k 的子字符串：&#10;- &quot;<em><strong>43</strong></em>0043&quot; 中的 &quot;43&quot; ：43 能整除 430043 。&#10;- &quot;4<em><strong>30</strong></em>043&quot; 中的 &quot;30&quot; ：30 不能整除 430043 。&#10;- &quot;43<em><strong>00</strong></em>43&quot; 中的 &quot;00&quot; ：0 不能整除 430043 。&#10;- &quot;430<em><strong>04</strong></em>3&quot; 中的 &quot;04&quot; ：4 不能整除 430043 。&#10;- &quot;4300<em><strong>43</strong></em>&quot; 中的 &quot;43&quot; ：43 能整除 430043 。&#10;所以，k 美丽值为 2 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= num &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= num.length</code> （将 <code>num</code> 视为字符串）</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 美是长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 且能整除原数的子串个数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，十进制位数很少，枚举每个长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子串转成整数即可，注意除数不能为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 转成字符串，对每个起点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>:</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们可以将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 转换为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，然后枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的所有长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子字符串，将其转换为整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 是否能整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span>，如果能则答案加一。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func divisorSubstrings(num int, k int) int {</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	s := strconv.Itoa(num)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(s)-k+1; i++ {</span></span>
<span class="line"><span>		t, _ := strconv.Atoi(s[i : i+k])</span></span>
<span class="line"><span>		if t > 0 &#x26;&#x26; num%t == 0 {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一每次切片再转整数，有字符串开销。窗口在十进制上滑动时，去掉最低位、在最高位加上新数字，即可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 更新窗口值。</p>
<p>先从低位取出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 位得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，再反复 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo stretchy="false">&#x2190;</mo>
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>10</mn>
</math></span> 并在高位补上新数位，同时判断整除。额外空间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们可以维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口，初始时窗口中包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的最低 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 位数字，然后每次向右移动一位，更新窗口中的数字，判断窗口中的数字是否能整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span>，如果能则答案加一。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func divisorSubstrings(num int, k int) (ans int) {</span></span>
<span class="line"><span>	x, p, t := 0, 1, num</span></span>
<span class="line"><span>	for ; k > 0; k-- {</span></span>
<span class="line"><span>		v := t % 10</span></span>
<span class="line"><span>		t /= 10</span></span>
<span class="line"><span>		x = p*v + x</span></span>
<span class="line"><span>		p *= 10</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if x != 0 &#x26;&#x26; num%x == 0 {</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for p /= 10; t > 0; t /= 10 {</span></span>
<span class="line"><span>		x /= 10</span></span>
<span class="line"><span>		v := t % 10</span></span>
<span class="line"><span>		x = p*v + x</span></span>
<span class="line"><span>		if x != 0 &#x26;&#x26; num%x == 0 {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-k-beauty-of-a-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2269.Find%20the%20K-Beauty%20of%20a%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2379" tabindex="-1">2379. 得到 K 个黑块的最少涂色次数 <a class="header-anchor" href="#q-2379" aria-label="Permalink to &quot;2379. 得到 K 个黑块的最少涂色次数 {#q-2379}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 下标从 <strong>0</strong> 开始的字符串 <code>blocks</code> ，<code>blocks[i]</code> 要么是 <code>'W'</code> 要么是 <code>'B'</code> ，表示第 <code>i</code> 块的颜色。字符 <code>'W'</code> 和 <code>'B'</code> 分别表示白色和黑色。</p>&#10;&#10;<p>给你一个整数 <code>k</code> ，表示想要 <strong>连续</strong> 黑色块的数目。</p>&#10;&#10;<p>每一次操作中，你可以选择一个白色块将它 <strong>涂成</strong> 黑色块。</p>&#10;&#10;<p>请你返回至少出现 <strong>一次</strong> 连续 <code>k</code> 个黑色块的 <strong>最少</strong> 操作次数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>blocks = &quot;WBBWWBBWBW&quot;, k = 7&#10;<b>输出：</b>3&#10;<strong>解释：</strong>&#10;一种得到 7 个连续黑色块的方法是把第 0 ，3 和 4 个块涂成黑色。&#10;得到 blocks = &quot;BBBBBBBWBW&quot; 。&#10;可以证明无法用少于 3 次操作得到 7 个连续的黑块。&#10;所以我们返回 3 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>blocks = &quot;WBWBBBW&quot;, k = 2&#10;<b>输出：</b>0&#10;<strong>解释：</strong>&#10;不需要任何操作，因为已经有 2 个连续的黑块。&#10;所以我们返回 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><b>提示：</b></p>&#10;&#10;<ul>&#10;	<li><code>n == blocks.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>blocks[i]</code> 要么是 <code>'W'</code> ，要么是 <code>'B'</code> 。</li>&#10;	<li><code>1 &lt;= k &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把某一段长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的窗口染成全黑，代价等于其中白块个数。扫描所有窗口即可，不必搜索染色方案。</p>
<p>先统计前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个白块，再滑窗加减两端，维护白块数的最小值。</p>
</blockquote>
<p>我们观察发现，题目实际上求的是一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 大小的滑动窗口中白色块的最小数量。</p>
<p>因此，我们只需要遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>c</mi>
  <mi>k</mi>
  <mi>s</mi>
</math></span>，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计当前窗口中白色块的数量，然后用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 维护最小值即可。</p>
<p>遍历结束后即可得到答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>c</mi>
  <mi>k</mi>
  <mi>s</mi>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumRecolors(blocks string, k int) int {</span></span>
<span class="line"><span>	cnt := strings.Count(blocks[:k], "W")</span></span>
<span class="line"><span>	ans := cnt</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(blocks); i++ {</span></span>
<span class="line"><span>		if blocks[i] == 'W' {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if blocks[i-k] == 'W' {</span></span>
<span class="line"><span>			cnt--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ans > cnt {</span></span>
<span class="line"><span>			ans = cnt</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2379.Minimum%20Recolors%20to%20Get%20K%20Consecutive%20Black%20Blocks/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2401" tabindex="-1">2401. 最长优雅子数组 <a class="header-anchor" href="#q-2401" aria-label="Permalink to &quot;2401. 最长优雅子数组 {#q-2401}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、数组、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个由 <strong>正</strong> 整数组成的数组 <code>nums</code> 。</p>&#10;&#10;<p>如果 <code>nums</code> 的子数组中位于 <strong>不同</strong> 位置的每对元素按位 <strong>与（AND）</strong>运算的结果等于 <code>0</code> ，则称该子数组为 <strong>优雅</strong> 子数组。</p>&#10;&#10;<p>返回 <strong>最长</strong> 的优雅子数组的长度。</p>&#10;&#10;<p><strong>子数组</strong> 是数组中的一个 <strong>连续</strong> 部分。</p>&#10;&#10;<p><strong>注意：</strong>长度为 <code>1</code> 的子数组始终视作优雅子数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,3,8,48,10]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>最长的优雅子数组是 [3,8,48] 。子数组满足题目条件：&#10;- 3 AND 8 = 0&#10;- 3 AND 48 = 0&#10;- 8 AND 48 = 0&#10;可以证明不存在更长的优雅子数组，所以返回 3 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [3,1,5,11,13]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>最长的优雅子数组长度为 1 ，任何长度为 1 的子数组都满足题目条件。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举全部子数组再检查两两按位与是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，子数组有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 个， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 无法通过。对每个右端点向左扫描，最坏仍是平方级。</p>
<p>「任意两数按位与为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>」等价于各数置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的二进制位互不重叠，因此窗口内所有数的按位或即可作为占用位集合。窗口一旦与新元素冲突，必须从左侧移出元素直至冲突消失，故左端点单调右移。</p>
<p>用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 维护窗口按位或，右指针扫描；冲突时用异或撤销左端元素。每个下标进出窗口至多一次，即可在线性时间内得到最长合法窗口。</p>
</blockquote>
<p>根据题目描述，子数组的每个元素的二进制位上的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的位置不能相同，这样才能保证任意两个元素的按位与结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>因此，我们可以使用双指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 维护一个滑动窗口，使得窗口内的元素满足题目条件。</p>
<p>我们用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 来表示窗口内的元素的按位或的结果，接下来，遍历数组的每个元素。对于当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的按位与结果不为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，说明当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 与窗口内的元素有重复的二进制位，此时需要移动左指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的按位与结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。然后，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的按位或的结果赋值给 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mask</mtext>
</math></span>，并更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">ans</mtext>
  <mo>,</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
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
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestNiceSubarray(nums []int) (ans int) {</span></span>
<span class="line"><span>	mask, l := 0, 0</span></span>
<span class="line"><span>	for r, x := range nums {</span></span>
<span class="line"><span>		for mask&#x26;x != 0 {</span></span>
<span class="line"><span>			mask ^= nums[l]</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		mask |= x</span></span>
<span class="line"><span>		ans = max(ans, r-l+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-nice-subarray" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2401.Longest%20Nice%20Subarray/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2444" tabindex="-1">2444. 统计定界子数组的数目 <a class="header-anchor" href="#q-2444" aria-label="Permalink to &quot;2444. 统计定界子数组的数目 {#q-2444}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：队列、数组、滑动窗口、单调队列</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和两个整数 <code>minK</code> 以及 <code>maxK</code> 。</p>&#10;&#10;<p><code>nums</code> 的定界子数组是满足下述条件的一个子数组：</p>&#10;&#10;<ul>&#10;	<li>子数组中的 <strong>最小值</strong> 等于 <code>minK</code> 。</li>&#10;	<li>子数组中的 <strong>最大值</strong> 等于 <code>maxK</code> 。</li>&#10;</ul>&#10;&#10;<p>返回定界子数组的数目。</p>&#10;&#10;<p>子数组是数组中的一个连续部分。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,3,5,2,7,5], minK = 1, maxK = 5&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>定界子数组是 [1,3,5] 和 [1,3,5,2] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,1,1,1], minK = 1, maxK = 1&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>nums 的每个子数组都是一个定界子数组。共有 10 个子数组。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i], minK, maxK &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举右端点 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，定界子数组要求元素落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">minK</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">maxK</mtext>
  <mo stretchy="false">]</mo>
</math></span> 且两端极值都出现。以右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 统计时，左端必须晚于最近的越界位置，且不晚于最近的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">minK</mtext>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxK</mtext>
</math></span> 中较左者。</p>
<p>维护越界下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>j</mi>
    <mn>1</mn>
  </msub>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>j</mi>
    <mn>2</mn>
  </msub>
</math></span>，答案累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>j</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>j</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。每个右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>由题意，我们可以知道，定界子数组的所有元素都在区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">minK</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">maxK</mtext>
  <mo stretchy="false">]</mo>
</math></span> 中，且最小值一定为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">minK</mtext>
</math></span>，最大值一定为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxK</mtext>
</math></span>。</p>
<p>我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，统计以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为右端点的定界子数组的个数，然后将所有的个数相加即可。</p>
<p>具体实现逻辑如下：</p>
<ol>
<li>维护最近一个不在区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">minK</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">maxK</mtext>
  <mo stretchy="false">]</mo>
</math></span> 中的元素的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。那么当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的左端点一定大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</li>
<li>维护最近一个值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">minK</mtext>
</math></span> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>j</mi>
    <mn>1</mn>
  </msub>
</math></span>，最近一个值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxK</mtext>
</math></span> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>j</mi>
    <mn>2</mn>
  </msub>
</math></span>，初始值均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。那么当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的左端点一定小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>j</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>j</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</li>
<li>综上可知，以当前元素为右端点的定界子数组的个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mrow data-mjx-texclass="OPEN">
    <mo minsize="1.2em" maxsize="1.2em">(</mo>
  </mrow>
  <mn>0</mn>
  <mo>,</mo>
  <mtext>&#xA0;</mtext>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>j</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>j</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mrow data-mjx-texclass="CLOSE">
    <mo minsize="1.2em" maxsize="1.2em">)</mo>
  </mrow>
</math></span>。累加所有的个数即可。</li>
</ol>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countSubarrays(nums []int, minK int, maxK int) int64 {</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	j1, j2, k := -1, -1, -1</span></span>
<span class="line"><span>	for i, v := range nums {</span></span>
<span class="line"><span>		if v &#x3C; minK || v > maxK {</span></span>
<span class="line"><span>			k = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v == minK {</span></span>
<span class="line"><span>			j1 = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v == maxK {</span></span>
<span class="line"><span>			j2 = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += max(0, min(j1, j2)-k)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-subarrays-with-fixed-bounds" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2444.Count%20Subarrays%20With%20Fixed%20Bounds/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2461" tabindex="-1">2461. 长度为 K 子数组中的最大和 <a class="header-anchor" href="#q-2461" aria-label="Permalink to &quot;2461. 长度为 K 子数组中的最大和 {#q-2461}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> 。请你从 <code>nums</code> 中满足下述条件的全部子数组中找出最大子数组和：</p>&#10;&#10;<ul>&#10;	<li>子数组的长度是 <code>k</code>，且</li>&#10;	<li>子数组中的所有元素 <strong>各不相同 。</strong></li>&#10;</ul>&#10;&#10;<p>返回满足题面要求的最大子数组和。如果不存在子数组满足这些条件，返回 <code>0</code> 。</p>&#10;&#10;<p><strong>子数组</strong> 是数组中一段连续非空的元素序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,5,4,2,9,9,9], k = 3&#10;<strong>输出：</strong>15&#10;<strong>解释：</strong>nums 中长度为 3 的子数组是：&#10;- [1,5,4] 满足全部条件，和为 10 。&#10;- [5,4,2] 满足全部条件，和为 11 。&#10;- [4,2,9] 满足全部条件，和为 15 。&#10;- [2,9,9] 不满足全部条件，因为元素 9 出现重复。&#10;- [9,9,9] 不满足全部条件，因为元素 9 出现重复。&#10;因为 15 是满足全部条件的所有子数组中的最大子数组和，所以返回 15 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [4,4,4], k = 3&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>nums 中长度为 3 的子数组是：&#10;- [4,4,4] 不满足全部条件，因为元素 4 出现重复。&#10;因为不存在满足全部条件的子数组，所以返回 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>定长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 且元素互异的子数组最大和， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。滑动窗口维护和与频次表：窗口内不同元素个数等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时更新答案。右端纳入、左端弹出，弹出后次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则删键。</p>
</blockquote>
<p>我们维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录窗口中每个数字出现的次数，用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 记录窗口中所有数字的和。每次滑动窗口，如果窗口中的数字都不重复，那么更新答案。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumSubarraySum(nums []int, k int) (ans int64) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	cnt := map[int]int64{}</span></span>
<span class="line"><span>	var s int64</span></span>
<span class="line"><span>	for _, x := range nums[:k] {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>		s += int64(x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(cnt) == k {</span></span>
<span class="line"><span>		ans = s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := k; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		cnt[nums[i]]++</span></span>
<span class="line"><span>		cnt[nums[i-k]]--</span></span>
<span class="line"><span>		if cnt[nums[i-k]] == 0 {</span></span>
<span class="line"><span>			delete(cnt, nums[i-k])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s += int64(nums[i] - nums[i-k])</span></span>
<span class="line"><span>		if len(cnt) == k &#x26;&#x26; ans &#x3C; s {</span></span>
<span class="line"><span>			ans = s</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-sum-of-distinct-subarrays-with-length-k" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2461.Maximum%20Sum%20of%20Distinct%20Subarrays%20With%20Length%20K/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2516" tabindex="-1">2516. 每种字符至少取 K 个 <a class="header-anchor" href="#q-2516" aria-label="Permalink to &quot;2516. 每种字符至少取 K 个 {#q-2516}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个由字符 <code>'a'</code>、<code>'b'</code>、<code>'c'</code> 组成的字符串 <code>s</code> 和一个非负整数 <code>k</code> 。每分钟，你可以选择取走 <code>s</code> <strong>最左侧</strong> 还是 <strong>最右侧</strong> 的那个字符。</p>&#10;&#10;<p>你必须取走每种字符 <strong>至少</strong> <code>k</code> 个，返回需要的 <strong>最少</strong> 分钟数；如果无法取到，则返回<em> </em><code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;aabaaaacaabc&quot;, k = 2&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>&#10;从 s 的左侧取三个字符，现在共取到两个字符 'a' 、一个字符 'b' 。&#10;从 s 的右侧取五个字符，现在共取到四个字符 'a' 、两个字符 'b' 和两个字符 'c' 。&#10;共需要 3 + 5 = 8 分钟。&#10;可以证明需要的最少分钟数是 8 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;a&quot;, k = 1&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>无法取到一个字符 'b' 或者 'c'，所以返回 -1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 仅由字母 <code>'a'</code>、<code>'b'</code>、<code>'c'</code> 组成</li>&#10;	<li><code>0 &lt;= k &lt;= s.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次只能从当前串的左端或右端取走一个字符，要使 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>c</mi>
</math></span> 各至少取到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个，并最小化取走次数。枚举左右各取多少在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 下为平方级。</p>
<p>取走的是一段前缀加一段后缀，留下的是中间一个窗口。等价于在剩余字符中每种仍不少于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的前提下最大化窗口。先统计全串频次，不足则无解；再滑动窗口扩大右端、在某种字符不足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时收缩左端，最长合法窗口对应最少取走长度。</p>
</blockquote>
<p>我们先用哈希表或者一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字符的个数，如果有字符的个数小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个，则无法取到，提前返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>题目要我们在字符串左侧以及右侧取走字符，最终取到的每种字符的个数都不少于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个。我们不妨反着考虑问题，取走中间某个窗口大小的字符串，使得剩下的两侧字符串中，每种字符的个数都不少于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个。</p>
<p>因此，我们维护一个滑动窗口，用指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 分别表示窗口的左右边界，窗口内的字符串是我们要取走的。我们每一次移动右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，将对应的字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入到窗口中（也即取走一个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>），此时如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 个数小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么我们循环移动左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 个数不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为止。此时的窗口大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，更新最大窗口。</p>
<p>最终的答案就是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度减去最大窗口的大小。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func takeCharacters(s string, k int) int {</span></span>
<span class="line"><span>	cnt := [3]int{}</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range cnt {</span></span>
<span class="line"><span>		if x &#x3C; k {</span></span>
<span class="line"><span>			return -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mx, j := 0, 0</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		c -= 'a'</span></span>
<span class="line"><span>		for cnt[c]--; cnt[c] &#x3C; k; j++ {</span></span>
<span class="line"><span>			cnt[s[j]-'a']++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		mx = max(mx, i-j+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(s) - mx</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2516.Take%20K%20of%20Each%20Character%20From%20Left%20and%20Right/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2524" tabindex="-1">2524. 子数组的最大频率分数 🔒 <a class="header-anchor" href="#q-2524" aria-label="Permalink to &quot;2524. 子数组的最大频率分数 🔒 {#q-2524}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、数组、哈希表、数学、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数数组 <code>nums</code> 和一个 <strong>正</strong> 整数 <code>k</code> 。</p>&#10;&#10;<p>数组的 <strong>频率得分</strong> 是数组中 <strong>不同</strong> 值的 <strong>幂次</strong> 之和，并将和对 <code>10<sup>9</sup> + 7</code> <strong>取模</strong>。</p>&#10;&#10;<p>例如，数组 <code>[5,4,5,7,4,4]</code> 的频率得分为 <code>(4<sup>3</sup> + 5<sup>2</sup> + 7<sup>1</sup>) modulo (10<sup>9</sup> + 7) = 96</code> 。</p>&#10;&#10;<p>返回 <code>nums</code> 中长度为 <code>k</code> 的 <strong>子数组</strong> 的 <strong>最大 </strong>频率得分。你需要返回取模后的最大值，而不是实际值。</p>&#10;&#10;<p><strong>子数组</strong> 是一个数组的连续部分。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1 ：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,1,1,2,1,2], k = 3&#10;<b>输出：</b>5&#10;<b>解释：</b>子数组 [2,1,2] 的频率分数等于 5。可以证明这是我们可以获得的最大频率分数。&#10;</pre>&#10;&#10;<p><strong>示例 2 ：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,1,1,1,1,1], k = 4&#10;<b>输出：</b>1&#10;<b>解释：</b>所有长度为 4 的子数组的频率得分都等于 1。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 滑动窗口 + 快速幂 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>定长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 窗口的分数是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <msup>
    <mi>x</mi>
    <mrow data-mjx-texclass="ORD">
      <mtext mathvariant="italic">freq</mtext>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
    </mrow>
  </msup>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
  <mo stretchy="false">)</mo>
</math></span>，要求所有窗口的最大分数。每个窗口从头计算需对频次做快速幂，窗口数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 时偏慢。</p>
<p>相邻窗口只进一个元素、出一个元素。用哈希表维护频次，分数按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>c</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>&#x2212;</mo>
  <msup>
    <mi>x</mi>
    <mi>c</mi>
  </msup>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <msup>
    <mi>x</mi>
    <mi>c</mi>
  </msup>
</math></span> 增量更新（新出现则加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，频次降到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>）。进出相同则分数不变。</p>
</blockquote>
<p>我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 维护窗口大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的元素及其出现的次数。</p>
<p>先算出初始窗口为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的所有元素的分数。然后利用滑动窗口，每次加入一个元素，并移除最左边的元素，同时利用快速幂更新分数。</p>
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
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxFrequencyScore(nums []int, k int) int {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, v := range nums[:k] {</span></span>
<span class="line"><span>		cnt[v]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cur := 0</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
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
<span class="line"><span>	for k, v := range cnt {</span></span>
<span class="line"><span>		cur = (cur + qpow(k, v)) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := cur</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(nums); i++ {</span></span>
<span class="line"><span>		a, b := nums[i-k], nums[i]</span></span>
<span class="line"><span>		if a != b {</span></span>
<span class="line"><span>			if cnt[b] > 0 {</span></span>
<span class="line"><span>				cur += (b - 1) * qpow(b, cnt[b]) % mod</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				cur += b</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if cnt[a] > 1 {</span></span>
<span class="line"><span>				cur -= (a - 1) * qpow(a, cnt[a]-1) % mod</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				cur -= a</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			cur = (cur + mod) % mod</span></span>
<span class="line"><span>			ans = max(ans, cur)</span></span>
<span class="line"><span>			cnt[b]++</span></span>
<span class="line"><span>			cnt[a]--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-frequency-score-of-a-subarray" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2524.Maximum%20Frequency%20Score%20of%20a%20Subarray/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2537" tabindex="-1">2537. 统计好子数组的数目 <a class="header-anchor" href="#q-2537" aria-label="Permalink to &quot;2537. 统计好子数组的数目 {#q-2537}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你返回 <code>nums</code> 中 <strong>好</strong> 子数组的数目。</p>&#10;&#10;<p>一个子数组 <code>arr</code> 如果有 <strong>至少</strong> <code>k</code> 对下标 <code>(i, j)</code> 满足 <code>i &lt; j</code> 且 <code>arr[i] == arr[j]</code> ，那么称它是一个 <strong>好</strong> 子数组。</p>&#10;&#10;<p><strong>子数组</strong> 是原数组中一段连续 <strong>非空</strong> 的元素序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,1,1,1,1], k = 10&#10;<b>输出：</b>1&#10;<b>解释：</b>唯一的好子数组是这个数组本身。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [3,1,4,3,2,2,4], k = 2&#10;<b>输出：</b>4&#10;<b>解释：</b>总共有 4 个不同的好子数组：&#10;- [3,1,4,3,2,2] 有 2 对。&#10;- [3,1,4,3,2,2,4] 有 3 对。&#10;- [1,4,3,2,2,4] 有 2 对。&#10;- [4,3,2,2,4] 有 2 对。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i], k &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子数组“好”当且仅当其中相同元素对不少于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。枚举左右端点再统计对数是立方或平方级， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 不可行。</p>
<p>对数随窗口增大而单调不减。右端点右移时，新元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 贡献已有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 对。左端点尽量右移，只要移出后对数仍至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 都可作为左端，答案加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>如果一个子数组中包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 对相同的元素，那么这个子数组一定包含至少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 对相同的元素。</p>
<p>我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 统计窗口内数组元素出现的次数，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
</math></span> 统计窗口内相同元素的对数，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 维护窗口的左端点。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，我们将当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 作为右端点，那么窗口内相同元素的对数将增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span>，同时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的出现次数加一，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">&#x2190;</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。接下来，我们循环判断移出左端点后窗口内相同元素的对数是否大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，如果大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么我们将左端点元素的出现次数减一，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">&#x2190;</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，同时将窗口内相同元素的对数减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cur</mtext>
  <mo stretchy="false">&#x2190;</mo>
  <mtext mathvariant="italic">cur</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>，同时将左端点右移，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo stretchy="false">&#x2190;</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。此时窗口左端点以及左侧的所有元素都可以作为当前右端点的左端点，因此答案加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>最后，我们返回答案即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countGood(nums []int, k int) int64 {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	ans, cur := 0, 0</span></span>
<span class="line"><span>	i := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cur += cnt[x]</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>		for cur-cnt[nums[i]]+1 >= k {</span></span>
<span class="line"><span>			cnt[nums[i]]--</span></span>
<span class="line"><span>			cur -= cnt[nums[i]]</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cur >= k {</span></span>
<span class="line"><span>			ans += i + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-the-number-of-good-subarrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2537.Count%20the%20Number%20of%20Good%20Subarrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2653" tabindex="-1">2653. 滑动子数组的美丽值 <a class="header-anchor" href="#q-2653" aria-label="Permalink to &quot;2653. 滑动子数组的美丽值 {#q-2653}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> ，请你求出每个长度为 <code>k</code> 的子数组的 <b>美丽值</b> 。</p>&#10;&#10;<p>一个子数组的 <strong>美丽值</strong> 定义为：如果子数组中第 <code>x</code> <strong>小整数</strong> 是 <strong>负数</strong> ，那么美丽值为第 <code>x</code> 小的数，否则美丽值为 <code>0</code> 。</p>&#10;&#10;<p>请你返回一个包含<em> </em><code>n - k + 1</code> 个整数的数组，<strong>依次</strong> 表示数组中从第一个下标开始，每个长度为 <code>k</code> 的子数组的<strong> 美丽值</strong> 。</p>&#10;&#10;<ul>&#10;	<li>&#10;	<p>子数组指的是数组中一段连续 <strong>非空</strong> 的元素序列。</p>&#10;	</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,-1,-3,-2,3], k = 3, x = 2&#10;<b>输出：</b>[-1,-2,-2]&#10;<b>解释：</b>总共有 3 个 k = 3 的子数组。&#10;第一个子数组是 <code>[1, -1, -3]</code> ，第二小的数是负数 -1 。&#10;第二个子数组是 <code>[-1, -3, -2]</code> ，第二小的数是负数 -2 。&#10;第三个子数组是 <code>[-3, -2, 3] ，第二小的数是负数 -2 。</code></pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [-1,-2,-3,-4,-5], k = 2, x = 2&#10;<b>输出：</b>[-1,-2,-3,-4]&#10;<b>解释：</b>总共有 4 个 k = 2 的子数组。&#10;<code>[-1, -2] 中第二小的数是负数 -1 。</code>&#10;<code>[-2, -3] 中第二小的数是负数 -2 。</code>&#10;<code>[-3, -4] 中第二小的数是负数 -3 。</code>&#10;<code>[-4, -5] 中第二小的数是负数 -4 。</code></pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [-3,1,2,-3,0,-3], k = 2, x = 1&#10;<b>输出：</b>[-3,0,-3,-3,-3]&#10;<b>解释：</b>总共有 5 个 k = 2 的子数组。&#10;<code>[-3, 1] 中最小的数是负数 -3 。</code>&#10;<code>[1, 2] 中最小的数不是负数，所以美丽值为 0 。</code>&#10;<code>[2, -3] 中最小的数是负数 -3 。</code>&#10;<code>[-3, 0] 中最小的数是负数 -3 。</code>&#10;<code>[0, -3] 中最小的数是负数 -3 。</code></pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length </code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= n</code></li>&#10;	<li><code>1 &lt;= x &lt;= k </code></li>&#10;	<li><code>-50 &lt;= nums[i] &lt;= 50 </code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>窗口第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 小若为负则输出该值，否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。值域仅 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>50</mn>
  <mo>,</mo>
  <mn>50</mn>
  <mo stretchy="false">]</mo>
</math></span>，不必对每个窗口排序。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>k</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 偏紧。</p>
<p>用长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>101</mn>
</math></span> 的计数数组维护窗口，查询时从负数一侧累加计数，首次达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 即第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 小；若全非负则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们注意到，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中元素的范围为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>50</mn>
  <mo>,</mo>
  <mn>50</mn>
  <mo stretchy="false">]</mo>
</math></span>，因此，我们可以用一个数组长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>101</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>50</mn>
  <mo>,</mo>
  <mn>50</mn>
  <mo stretchy="false">]</mo>
</math></span> 中每个数出现的次数。由于负数的存在，我们可以将每个数加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>50</mn>
</math></span>，使得每个数都变成非负数，这样就可以用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计每个数出现的次数了。</p>
<p>接下来，我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的滑动窗口，窗口中所有元素出现的次记数录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中，然后我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，找到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 小的负数，即为当前滑动窗口的美丽值。如果不存在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 小的负数，那么美丽值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mn>50</mn>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>100</mn>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func getSubarrayBeauty(nums []int, k int, x int) []int {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	cnt := [101]int{}</span></span>
<span class="line"><span>	for _, x := range nums[:k] {</span></span>
<span class="line"><span>		cnt[x+50]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, n-k+1)</span></span>
<span class="line"><span>	f := func(x int) int {</span></span>
<span class="line"><span>		s := 0</span></span>
<span class="line"><span>		for i := 0; i &#x3C; 50; i++ {</span></span>
<span class="line"><span>			s += cnt[i]</span></span>
<span class="line"><span>			if s >= x {</span></span>
<span class="line"><span>				return i - 50</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans[0] = f(x)</span></span>
<span class="line"><span>	for i, j := k, 1; i &#x3C; n; i, j = i+1, j+1 {</span></span>
<span class="line"><span>		cnt[nums[i]+50]++</span></span>
<span class="line"><span>		cnt[nums[i-k]+50]--</span></span>
<span class="line"><span>		ans[j] = f(x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双优先队列（大小根堆） + 延迟删除 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一依赖狭小值域。对偶堆把较小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个数放在大根堆一侧，堆顶即候选美丽值，再以延迟删除处理滑出窗口的元素。</p>
<p>值域更大时仍可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 维护第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 小，本题作为对计数法的结构替换。</p>
</blockquote>
<p>我们可以使用两个优先队列（大小根堆）维护当前窗口中的元素，其中一个优先队列存储当前窗口中较小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个元素，另一个优先队列存储当前窗口中较大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 个元素。我们还需要一个延迟删除字典 <code v-pre>delayed</code>，用于记录当前窗口中的元素是否需要删除。</p>
<p>我们设计一个类 <code v-pre>MedianFinder</code>，用于维护当前窗口中的元素。该类包含以下方法：</p>
<ul>
<li><code v-pre>add_num(num)</code>：将 <code v-pre>num</code> 加入当前窗口中。</li>
<li><code v-pre>find()</code>：返回当前窗口的美丽值。</li>
<li><code v-pre>remove_num(num)</code>：将 <code v-pre>num</code> 从当前窗口中移除。</li>
<li><code v-pre>prune(pq)</code>：如果堆顶元素在延迟删除字典 <code v-pre>delayed</code> 中，则将其从堆顶弹出，并从该元素的延迟删除次数中减一。如果该元素的延迟删除次数为零，则将其从延迟删除字典中删除。</li>
<li><code v-pre>rebalance()</code>：平衡两个优先队列的大小。</li>
</ul>
<p>在 <code v-pre>add_num(num)</code> 方法中，我们先考虑将 <code v-pre>num</code> 加入较小的队列中，如果数量大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 或者 <code v-pre>num</code> 小于等于较小的队列的堆顶元素，则将 <code v-pre>num</code> 加入较小的队列中；否则，将 <code v-pre>num</code> 加入较大的队列中。然后我们调用 <code v-pre>rebalance()</code> 方法，使得较小的队列中的元素数量不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
<p>在 <code v-pre>remove_num(num)</code> 方法中，我们将 <code v-pre>num</code> 的延迟删除次数加一。然后我们将 <code v-pre>num</code> 与较小的队列的堆顶元素进行比较，如果 <code v-pre>num</code> 小于等于较小的队列的堆顶元素，则更新较小的队列的大小，并且调用 <code v-pre>prune()</code> 方法，使得较小的队列的堆顶元素不在延迟删除字典中。否则，我们更新较大的队列的大小，并且调用 <code v-pre>prune()</code> 方法，使得较大的队列的堆顶元素不在延迟删除字典中。</p>
<p>在 <code v-pre>find()</code> 方法中，如果较小的队列的大小等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，则返回较小的队列的堆顶元素，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>在 <code v-pre>prune(pq)</code> 方法中，如果堆顶元素在延迟删除字典中，则将其从堆顶弹出，并从该元素的延迟删除次数中减一。如果该元素的延迟删除次数为零，则将其从延迟删除字典中删除。</p>
<p>在 <code v-pre>rebalance()</code> 方法中，如果较小的队列的大小大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，则将较小的队列的堆顶元素加入较大的队列中，并调用 <code v-pre>prune()</code> 方法，使得较小的队列的堆顶元素不在延迟删除字典中。如果较小的队列的大小小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 且较大的队列的大小大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则将较大的队列的堆顶元素加入较小的队列中，并调用 <code v-pre>prune()</code> 方法，使得较大的队列的堆顶元素不在延迟删除字典中。</p>
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
</math></span> 为数组 <code v-pre>nums</code> 的长度。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0400-0499/0480.Sliding%20Window%20Median/README.md" target="_blank" rel="noopener noreferrer">480. 滑动窗口中位数</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type MedianFinder struct {</span></span>
<span class="line"><span>	small                hp</span></span>
<span class="line"><span>	large                hp</span></span>
<span class="line"><span>	delayed              map[int]int</span></span>
<span class="line"><span>	smallSize, largeSize int</span></span>
<span class="line"><span>	x                    int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(x int) MedianFinder {</span></span>
<span class="line"><span>	return MedianFinder{hp{}, hp{}, map[int]int{}, 0, 0, x}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *MedianFinder) AddNum(num int) {</span></span>
<span class="line"><span>	if this.smallSize &#x3C; this.x || num &#x3C;= -this.small.IntSlice[0] {</span></span>
<span class="line"><span>		heap.Push(&#x26;this.small, -num)</span></span>
<span class="line"><span>		this.smallSize++</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		heap.Push(&#x26;this.large, num)</span></span>
<span class="line"><span>		this.largeSize++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.rebalance()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *MedianFinder) Find() int {</span></span>
<span class="line"><span>	if this.smallSize == this.x {</span></span>
<span class="line"><span>		return -this.small.IntSlice[0]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *MedianFinder) RemoveNum(num int) {</span></span>
<span class="line"><span>	this.delayed[num]++</span></span>
<span class="line"><span>	if num &#x3C;= -this.small.IntSlice[0] {</span></span>
<span class="line"><span>		this.smallSize--</span></span>
<span class="line"><span>		if num == -this.small.IntSlice[0] {</span></span>
<span class="line"><span>			this.prune(&#x26;this.small)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		this.largeSize--</span></span>
<span class="line"><span>		if num == this.large.IntSlice[0] {</span></span>
<span class="line"><span>			this.prune(&#x26;this.large)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.rebalance()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *MedianFinder) prune(pq *hp) {</span></span>
<span class="line"><span>	sign := 1</span></span>
<span class="line"><span>	if pq == &#x26;this.small {</span></span>
<span class="line"><span>		sign = -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for pq.Len() > 0 &#x26;&#x26; this.delayed[sign*pq.IntSlice[0]] > 0 {</span></span>
<span class="line"><span>		this.delayed[sign*pq.IntSlice[0]]--</span></span>
<span class="line"><span>		if this.delayed[sign*pq.IntSlice[0]] == 0 {</span></span>
<span class="line"><span>			delete(this.delayed, sign*pq.IntSlice[0])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		heap.Pop(pq)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *MedianFinder) rebalance() {</span></span>
<span class="line"><span>	if this.smallSize > this.x {</span></span>
<span class="line"><span>		heap.Push(&#x26;this.large, -heap.Pop(&#x26;this.small).(int))</span></span>
<span class="line"><span>		this.smallSize--</span></span>
<span class="line"><span>		this.largeSize++</span></span>
<span class="line"><span>		this.prune(&#x26;this.small)</span></span>
<span class="line"><span>	} else if this.smallSize &#x3C; this.x &#x26;&#x26; this.largeSize > 0 {</span></span>
<span class="line"><span>		heap.Push(&#x26;this.small, -heap.Pop(&#x26;this.large).(int))</span></span>
<span class="line"><span>		this.smallSize++</span></span>
<span class="line"><span>		this.largeSize--</span></span>
<span class="line"><span>		this.prune(&#x26;this.large)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp) Less(i, j int) bool { return h.IntSlice[i] &#x3C; h.IntSlice[j] }</span></span>
<span class="line"><span>func (h *hp) Push(v any)        { h.IntSlice = append(h.IntSlice, v.(int)) }</span></span>
<span class="line"><span>func (h *hp) Pop() any {</span></span>
<span class="line"><span>	a := h.IntSlice</span></span>
<span class="line"><span>	v := a[len(a)-1]</span></span>
<span class="line"><span>	h.IntSlice = a[:len(a)-1]</span></span>
<span class="line"><span>	return v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func getSubarrayBeauty(nums []int, k int, x int) []int {</span></span>
<span class="line"><span>	finder := Constructor(x)</span></span>
<span class="line"><span>	for _, num := range nums[:k] {</span></span>
<span class="line"><span>		if num &#x3C; 0 {</span></span>
<span class="line"><span>			finder.AddNum(num)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []int{finder.Find()}</span></span>
<span class="line"><span>	for i := k; i &#x3C; len(nums); i++ {</span></span>
<span class="line"><span>		if nums[i] &#x3C; 0 {</span></span>
<span class="line"><span>			finder.AddNum(nums[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if nums[i-k] &#x3C; 0 {</span></span>
<span class="line"><span>			finder.RemoveNum(nums[i-k])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, finder.Find())</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sliding-subarray-beauty" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2653.Sliding%20Subarray%20Beauty/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2730" tabindex="-1">2730. 找到最长的半重复子字符串 <a class="header-anchor" href="#q-2730" aria-label="Permalink to &quot;2730. 找到最长的半重复子字符串 {#q-2730}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> ，这个字符串只包含 <code>0</code> 到 <code>9</code> 的数字字符。</p>&#10;&#10;<p>如果一个字符串 <code>t</code> 中至多有一对相邻字符是相等的，那么称这个字符串 <code>t</code> 是 <strong>半重复的</strong> 。例如，<code>&quot;0010&quot;</code> 、<code>&quot;002020&quot;</code> 、<code>&quot;0123&quot;</code> 、<code>&quot;2002&quot;</code> 和 <code>&quot;54944&quot;</code> 是半重复字符串，而 <code>&quot;00101022&quot;</code> （相邻的相同数字对是 00 和 22）和 <code>&quot;1101234883&quot;</code> （相邻的相同数字对是 11 和 88）不是半重复字符串。</p>&#10;&#10;<p>请你返回 <code>s</code> 中最长 <strong>半重复</strong> <span>子字符串</span> 的长度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>s = &quot;52233&quot;</span></p>&#10;&#10;<p><strong>输出：</strong><span>4</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>最长的半重复子字符串是 &quot;5223&quot;。整个字符串 &quot;52233&quot; 有两个相邻的相同数字对 22 和 33，但最多只能选取一个。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>s = &quot;5494&quot;</span></p>&#10;&#10;<p><strong>输出：</strong><span>4</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><code>s</code> 是一个半重复字符串。</p>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>s = &quot;1111111&quot;</span></p>&#10;&#10;<p><strong>输出：</strong><span>2</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>最长的半重复子字符串是 &quot;11&quot;。子字符串 &quot;111&quot; 有两个相邻的相同数字对，但最多允许选取一个。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 50</code></li>&#10;	<li><code>'0' &lt;= s[i] &lt;= '9'</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>半重复串至多有一对相邻相同字符，求最长长度。枚举左右端点再检查相邻对，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时不可行。</p>
<p>右端点右移时累计相邻相等的次数；次数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 则左端点右移直至合法。窗口内始终最多一对重复，长度的最大值即为答案。</p>
</blockquote>
<p>我们用双指针维护一个区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，使得区间内最多只有一个相邻字符相等，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。初始化答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</p>
<p>我们用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录区间内相邻字符相等的个数，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>&gt;</mo>
  <mn>1</mn>
</math></span>，那么我们就需要移动左指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>&#x2264;</mo>
  <mn>1</mn>
</math></span>。每一次，我们更新答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestSemiRepetitiveSubstring(s string) (ans int) {</span></span>
<span class="line"><span>	ans = 1</span></span>
<span class="line"><span>	for i, j, cnt := 1, 0, 0; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>		if s[i] == s[i-1] {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for ; cnt > 1; j++ {</span></span>
<span class="line"><span>			if s[j] == s[j+1] {</span></span>
<span class="line"><span>				cnt--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, i-j+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双指针（优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一在窗口不合法时可能连续收缩并维护全局最大。题目只要最长长度，每次越界只需把左端点右移一格，窗口长度单调不减，最后用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
</math></span> 即得最长合法窗口。</p>
</blockquote>
<p>由于题目只需要我们找到最长的半重复子字符串的长度，因此，每次当区间内相邻字符相等的个数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 时，我们可以只移动左指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 一次，右指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 继续向右移动。这样可以保证子字符串的长度不会减小。</p>
<p>最后答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串的长度。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func longestSemiRepetitiveSubstring(s string) (ans int) {</span></span>
<span class="line"><span>	cnt, l := 0, 0</span></span>
<span class="line"><span>	for i, c := range s[1:] {</span></span>
<span class="line"><span>		if byte(c) == s[i] {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt > 1 {</span></span>
<span class="line"><span>			if s[l] == s[l+1] {</span></span>
<span class="line"><span>				cnt--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(s) - l</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-longest-semi-repetitive-substring" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2730.Find%20the%20Longest%20Semi-Repetitive%20Substring/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=s(m,[["render",p]]);export{d as __pageData,w as default};
