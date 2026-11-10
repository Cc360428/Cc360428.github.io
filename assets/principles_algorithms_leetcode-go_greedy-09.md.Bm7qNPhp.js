import{_ as a,a as s,c as t,b as m}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 贪心（9）","description":"贪心分类，第 2576–2856 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 贪心（9）","description":"贪心分类，第 2576–2856 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"贪心分类，第 2576–2856 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 贪心（8）","link":"/principles/algorithms/leetcode-go/greedy-08"},"next":{"text":"LeetCode Go · 贪心（10）","link":"/principles/algorithms/leetcode-go/greedy-10"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 贪心（8）","link":"/principles/algorithms/leetcode-go/greedy-08"},"next":{"text":"LeetCode Go · 贪心（10）","link":"/principles/algorithms/leetcode-go/greedy-10"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/greedy-09.md","filePath":"principles/algorithms/leetcode-go/greedy-09.md"}'),e={name:"principles/algorithms/leetcode-go/greedy-09.md"};function p(i,n,o,l,c,h){return s(),t("div",null,[...n[0]||(n[0]=[m("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-贪心-9" tabindex="-1">LeetCode Go · 贪心（9） <a class="header-anchor" href="#leetcode-go-·-贪心-9" aria-label="Permalink to &quot;LeetCode Go · 贪心（9）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-2576" tabindex="-1">2576. 求出最多标记下标 <a class="header-anchor" href="#q-2576" aria-label="Permalink to &quot;2576. 求出最多标记下标 {#q-2576}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 。</p>&#10;&#10;<p>一开始，所有下标都没有被标记。你可以执行以下操作任意次：</p>&#10;&#10;<ul>&#10;	<li>选择两个 <strong>互不相同且未标记</strong> 的下标 <code>i</code> 和 <code>j</code> ，满足 <code>2 * nums[i] &lt;= nums[j]</code> ，标记下标 <code>i</code> 和 <code>j</code> 。</li>&#10;</ul>&#10;&#10;<p>请你执行上述操作任意次，返回<em> </em><code>nums</code> 中最多可以标记的下标数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [3,5,2,4]&#10;<b>输出：</b>2&#10;<strong>解释：</strong>第一次操作中，选择 i = 2 和 j = 1 ，操作可以执行的原因是 2 * nums[2] &lt;= nums[1] ，标记下标 2 和 1 。&#10;没有其他更多可执行的操作，所以答案为 2 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [9,2,5,4]&#10;<b>输出：</b>4&#10;<strong>解释：</strong>第一次操作中，选择 i = 3 和 j = 0 ，操作可以执行的原因是 2 * nums[3] &lt;= nums[0] ，标记下标 3 和 0 。&#10;第二次操作中，选择 i = 1 和 j = 2 ，操作可以执行的原因是 2 * nums[1] &lt;= nums[2] ，标记下标 1 和 2 。&#10;没有其他更多可执行的操作，所以答案为 4 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [7,6,8]&#10;<b>输出：</b>0&#10;<strong>解释：</strong>没有任何可以执行的操作，所以答案为 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一对可标记当且仅当较小者的两倍不超过较大者，每个下标至多用一次，求最多标记个数。配对数量至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>，应让较小的一半去配较大的一半。</p>
<p>排序后，左指针停在较小一半，右半从中位数之后扫过：当前值至少是左值的两倍则配对成功并右移左指针。答案为成功次数的两倍。</p>
</blockquote>
<p>根据题目描述，题目最多产生 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 组标记，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
<p>为了将下标尽可能多地标记，我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 排序，接下来，我们遍历右半部分的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，用一个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span> 指向左半部分的最小元素，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，则可以标记下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">j</mtext>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span> 向右移动一个位置。继续遍历右半部分的元素，直到到达数组的末尾。此时，我们可以标记的下标数目为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
  <mo>&#xD7;</mo>
  <mn>2</mn>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxNumOfMarkedIndices(nums []int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	i, n := 0, len(nums)</span></span>
<span class="line"><span>	for _, x := range nums[(n+1)/2:] {</span></span>
<span class="line"><span>		if nums[i]*2 &#x3C;= x {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return i * 2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-maximum-number-of-marked-indices" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2576.Find%20the%20Maximum%20Number%20of%20Marked%20Indices/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2578" tabindex="-1">2578. 最小和分割 <a class="header-anchor" href="#q-2578" aria-label="Permalink to &quot;2578. 最小和分割 {#q-2578}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数 <code>num</code> ，请你将它分割成两个非负整数 <code>num1</code> 和 <code>num2</code> ，满足：</p>&#10;&#10;<ul>&#10;	<li><code>num1</code> 和 <code>num2</code> 直接连起来，得到 <code>num</code> 各数位的一个排列。&#10;&#10;    <ul>&#10;    	<li>换句话说，<code>num1</code> 和 <code>num2</code> 中所有数字出现的次数之和等于 <code>num</code> 中所有数字出现的次数。</li>&#10;    </ul>&#10;    </li>&#10;    <li><code>num1</code> 和 <code>num2</code> 可以包含前导 0 。</li>&#10;&#10;</ul>&#10;&#10;<p>请你返回 <code>num1</code> 和 <code>num2</code> 可以得到的和的 <strong>最小</strong> 值。</p>&#10;&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li><code>num</code> 保证没有前导 0 。</li>&#10;	<li><code>num1</code> 和 <code>num2</code> 中数位顺序可以与 <code>num</code> 中数位顺序不同。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>num = 4325&#10;<b>输出：</b>59&#10;<b>解释：</b>我们可以将 4325 分割成 <code>num1 </code>= 24 和 <code>num2 </code>= 35 ，和为 59 ，59 是最小和。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>num = 687&#10;<b>输出：</b>75&#10;<b>解释：</b>我们可以将 687 分割成 <code>num1</code> = 68 和 <code>num2 </code>= 7 ，和为最优值 75 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>10 &lt;= num &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的数位分成两个整数，使二者之和最小。高位应尽量小，故较小的数位应轮流放到两个数的高位。</p>
<p>统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>– <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的次数后，从小到大交替接到两个数的末尾，等价于让两个数的位数尽量接近且高位都尽量小。</p>
</blockquote>
<p>我们先用哈希表或数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 中各个数字出现的次数，用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 记录 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的位数。</p>
<p>接下来，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 所有位数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中的数字按照从小到大的顺序交替地分配给 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mn>2</mn>
</math></span>，记录在一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中。最后，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中的两个数之和即可。</p>
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
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的位数；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 中不同数字的个数，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>&#x2264;</mo>
  <mn>10</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func splitNum(num int) int {</span></span>
<span class="line"><span>	cnt := [10]int{}</span></span>
<span class="line"><span>	n := 0</span></span>
<span class="line"><span>	for ; num > 0; num /= 10 {</span></span>
<span class="line"><span>		cnt[num%10]++</span></span>
<span class="line"><span>		n++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := [2]int{}</span></span>
<span class="line"><span>	for i, j := 0, 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for cnt[j] == 0 {</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt[j]--</span></span>
<span class="line"><span>		ans[i&#x26;1] = ans[i&#x26;1]*10 + j</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans[0] + ans[1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：排序 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用手写计数保证线性。位数至多十位，排序字符串后取偶数位与奇数位分别拼成两个整数，分配规则相同，实现更短。</p>
</blockquote>
<p>我们可以将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 转换成字符串或者字符数组，然后对其进行排序，接下来将排序后的数组中的数字按照从小到大的顺序交替地分配给 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mn>2</mn>
</math></span>，最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mn>2</mn>
</math></span> 的和即可。</p>
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
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的位数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func splitNum(num int) int {</span></span>
<span class="line"><span>	s := []byte(strconv.Itoa(num))</span></span>
<span class="line"><span>	sort.Slice(s, func(i, j int) bool { return s[i] &#x3C; s[j] })</span></span>
<span class="line"><span>	ans := [2]int{}</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		ans[i&#x26;1] = ans[i&#x26;1]*10 + int(c-'0')</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans[0] + ans[1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/split-with-minimum-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2578.Split%20With%20Minimum%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2587" tabindex="-1">2587. 重排数组以得到最大前缀分数 <a class="header-anchor" href="#q-2587" aria-label="Permalink to &quot;2587. 重排数组以得到最大前缀分数 {#q-2587}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、前缀和、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 。你可以将 <code>nums</code> 中的元素按 <strong>任意顺序</strong> 重排（包括给定顺序）。</p>&#10;&#10;<p>令 <code>prefix</code> 为一个数组，它包含了 <code>nums</code> 重新排列后的前缀和。换句话说，<code>prefix[i]</code> 是 <code>nums</code> 重新排列后下标从 <code>0</code> 到 <code>i</code> 的元素之和。<code>nums</code> 的 <strong>分数</strong> 是 <code>prefix</code> 数组中正整数的个数。</p>&#10;&#10;<p>返回可以得到的最大分数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [2,-1,0,1,-3,3,-3]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>数组重排为 nums = [2,3,1,-1,-3,0,-3] 。&#10;prefix = [2,5,6,5,2,2,-1] ，分数为 6 。&#10;可以证明 6 是能够得到的最大分数。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [-2,-3,0]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>不管怎么重排数组得到的分数都是 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>6</sup> &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>重排数组，使严格为正的前缀和尽量多。正数应尽早出现，负数尽量靠后，故降序排列。</p>
<p>累加前缀，一旦和落入非正，后面只会更小，此前的个数即为答案；全程为正则答案是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。</p>
</blockquote>
<p>要使得前缀和数组中正整数的个数最多，就要使得前缀和数组中的元素尽可能大，即尽可能多的正整数相加。因此，我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 降序排序，然后遍历数组，维护前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span>，则说明当前位置以及之后的位置都不可能再有正整数，因此直接返回当前位置即可。</p>
<p>否则，遍历结束后，返回数组长度。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxScore(nums []int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for i := range nums {</span></span>
<span class="line"><span>		s += nums[n-i-1]</span></span>
<span class="line"><span>		if s &#x3C;= 0 {</span></span>
<span class="line"><span>			return i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/rearrange-array-to-maximize-prefix-score" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2587.Rearrange%20Array%20to%20Maximize%20Prefix%20Score/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2589" tabindex="-1">2589. 完成所有任务的最少时间 <a class="header-anchor" href="#q-2589" aria-label="Permalink to &quot;2589. 完成所有任务的最少时间 {#q-2589}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、数组、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一台电脑，它可以 <strong>同时</strong> 运行无数个任务。给你一个二维整数数组 <code>tasks</code> ，其中 <code>tasks[i] = [start<sub>i</sub>, end<sub>i</sub>, duration<sub>i</sub>]</code> 表示第 <code>i</code> 个任务需要在 <strong>闭区间</strong> 时间段 <code>[start<sub>i</sub>, end<sub>i</sub>]</code> 内运行 <code>duration<sub>i</sub></code> 个整数时间点（但不需要连续）。</p>&#10;&#10;<p>当电脑需要运行任务时，你可以打开电脑，如果空闲时，你可以将电脑关闭。</p>&#10;&#10;<p>请你返回完成所有任务的情况下，电脑最少需要运行多少秒。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>tasks = [[2,3,1],[4,5,1],[1,5,2]]&#10;<b>输出：</b>2&#10;<b>解释：</b>&#10;- 第一个任务在闭区间 [2, 2] 运行。&#10;- 第二个任务在闭区间 [5, 5] 运行。&#10;- 第三个任务在闭区间 [2, 2] 和 [5, 5] 运行。&#10;电脑总共运行 2 个整数时间点。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>tasks = [[1,3,2],[2,5,3],[5,6,2]]&#10;<b>输出：</b>4&#10;<b>解释：</b>&#10;- 第一个任务在闭区间 [2, 3] 运行&#10;- 第二个任务在闭区间 [2, 3] 和 [5, 5] 运行。&#10;- 第三个任务在闭区间 [5, 6] 运行。&#10;电脑总共运行 4 个整数时间点。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= tasks.length &lt;= 2000</code></li>&#10;	<li><code>tasks[i].length == 3</code></li>&#10;	<li><code>1 &lt;= start<sub>i</sub>, end<sub>i</sub> &lt;= 2000</code></li>&#10;	<li><code>1 &lt;= duration<sub>i</sub> &lt;= end<sub>i</sub> - start<sub>i</sub> + 1 </code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个任务须在闭区间内占用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">duration</mtext>
</math></span> 个整点，电脑同时只跑一个任务，求最少开机时长。时间轴只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2000</mn>
</math></span>，但任务组合很多。</p>
<p>按结束时间排序后，尽量占用区间最右端尚未使用的时刻，这些点更可能被后续更晚结束的任务共享。先扣除区间内已占用的点，再从右往左补足差额。</p>
</blockquote>
<p>我们观察发现，题目相当于在每一个区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>,</mo>
  <mi>e</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
</math></span> 中，选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
</math></span> 个整数时间点，使得总共选择的整数时间点最少。</p>
<p>因此，我们可以先对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi>s</mi>
</math></span> 按照结束时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
  <mi>n</mi>
  <mi>d</mi>
</math></span> 从小到大排序。然后贪心地进行选择，对于每一个任务，我们从结束时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
  <mi>n</mi>
  <mi>d</mi>
</math></span> 开始，从后往前选择尽可能靠后的点，这样这些点更有可能被后面的任务重复利用。</p>
<p>我们在实现上，可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2010</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 记录每个时间点是否被选择过。然后对于每一个任务，我们先统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>,</mo>
  <mi>e</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
</math></span> 区间内已经被选择过的点的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，然后从后往前选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 个点，同时记录选择的点的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 以及更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 数组。</p>
<p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
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
</math></span> 分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi>s</mi>
</math></span> 的长度和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 数组的长度。本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mn>2010</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMinimumTime(tasks [][]int) (ans int) {</span></span>
<span class="line"><span>	sort.Slice(tasks, func(i, j int) bool { return tasks[i][1] &#x3C; tasks[j][1] })</span></span>
<span class="line"><span>	vis := [2010]int{}</span></span>
<span class="line"><span>	for _, task := range tasks {</span></span>
<span class="line"><span>		start, end, duration := task[0], task[1], task[2]</span></span>
<span class="line"><span>		for _, x := range vis[start : end+1] {</span></span>
<span class="line"><span>			duration -= x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for i := end; i >= start &#x26;&#x26; duration > 0; i-- {</span></span>
<span class="line"><span>			if vis[i] == 0 {</span></span>
<span class="line"><span>				vis[i] = 1</span></span>
<span class="line"><span>				duration--</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-time-to-complete-all-tasks" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2589.Minimum%20Time%20to%20Complete%20All%20Tasks/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2591" tabindex="-1">2591. 将钱分给最多的儿童 <a class="header-anchor" href="#q-2591" aria-label="Permalink to &quot;2591. 将钱分给最多的儿童 {#q-2591}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>money</code> ，表示你总共有的钱数（单位为美元）和另一个整数 <code>children</code> ，表示你要将钱分配给多少个儿童。</p>&#10;&#10;<p>你需要按照如下规则分配：</p>&#10;&#10;<ul>&#10;	<li>所有的钱都必须被分配。</li>&#10;	<li>每个儿童至少获得 <code>1</code> 美元。</li>&#10;	<li>没有人获得 <code>4</code> 美元。</li>&#10;</ul>&#10;&#10;<p>请你按照上述规则分配金钱，并返回 <strong>最多</strong> 有多少个儿童获得 <strong>恰好</strong><em> </em><code>8</code> 美元。如果没有任何分配方案，返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>money = 20, children = 3&#10;<b>输出：</b>1&#10;<b>解释：</b>&#10;最多获得 8 美元的儿童数为 1 。一种分配方案为：&#10;- 给第一个儿童分配 8 美元。&#10;- 给第二个儿童分配 9 美元。&#10;- 给第三个儿童分配 3 美元。&#10;没有分配方案能让获得 8 美元的儿童数超过 1 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>money = 16, children = 2&#10;<b>输出：</b>2&#10;<b>解释：</b>每个儿童都可以获得 8 美元。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= money &lt;= 200</code></li>&#10;	<li><code>2 &lt;= children &lt;= 30</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：分类讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每人至少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 美元，得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span> 美元的人数尽量多，且不能有人恰好得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 美元。钱不够每人 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 美元则无解。</p>
<p>总额超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">children</mtext>
</math></span> 时必须有人多于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>，最多只能让 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">children</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 人拿满 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>。总额恰为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>4</mn>
</math></span> 时，若已有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 人拿 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>，剩下的人会拿到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span>，故再少一人。其余情形每人先拿 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，剩余每 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 美元可多造一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">money</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">children</mtext>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>7</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。</p>
</blockquote>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
  <mo>&lt;</mo>
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span>，那么一定存在儿童没有分到钱，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
  <mo>&gt;</mo>
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
</math></span>，那么有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个儿童获得了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span> 美元，剩下的一个儿童获得了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 美元，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
  <mo>=</mo>
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>4</mn>
</math></span>，那么有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span> 个儿童获得了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span> 美元，剩下的两个儿童分摊剩下的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>12</mn>
</math></span> 美元（只要不是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span> 美元就行），返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span>。</p>
<p>如果，我们假设有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个儿童获得了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span> 美元，那么剩下的钱为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mi>x</mi>
</math></span>，只要保证大于等于剩下的儿童数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>，就可以满足题意。因此，我们只需要求出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的最大值，即为答案。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distMoney(money int, children int) int {</span></span>
<span class="line"><span>	if money &#x3C; children {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if money > 8*children {</span></span>
<span class="line"><span>		return children - 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if money == 8*children-4 {</span></span>
<span class="line"><span>		return children - 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// money-8x >= children-x, x &#x3C;= (money-children)/7</span></span>
<span class="line"><span>	return (money - children) / 7</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/distribute-money-to-maximum-children" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2591.Distribute%20Money%20to%20Maximum%20Children/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2592" tabindex="-1">2592. 最大化数组的伟大值 <a class="header-anchor" href="#q-2592" aria-label="Permalink to &quot;2592. 最大化数组的伟大值 {#q-2592}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 0 开始的整数数组 <code>nums</code> 。你需要将 <code>nums</code> 重新排列成一个新的数组 <code>perm</code> 。</p>&#10;&#10;<p>定义 <code>nums</code> 的 <strong>伟大值</strong> 为满足 <code>0 &lt;= i &lt; nums.length</code> 且 <code>perm[i] > nums[i]</code> 的下标数目。</p>&#10;&#10;<p>请你返回重新排列 <code>nums</code> 后的 <strong>最大</strong> 伟大值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,3,5,2,1,3,1]&#10;<b>输出：</b>4&#10;<b>解释：</b>一个最优安排方案为 perm = [2,5,1,3,3,1,1] 。&#10;在下标为 0, 1, 3 和 4 处，都有 perm[i] > nums[i] 。因此我们返回 4 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,2,3,4]&#10;<b>输出：</b>3&#10;<b>解释：</b>最优排列为 [2,3,4,1] 。&#10;在下标为 0, 1 和 2 处，都有 perm[i] > nums[i] 。因此我们返回 3 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>m</mi>
</math></span> 的伟大程度是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>m</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置数，求最大值。这是两侧多重集相同的配对，应让较大值去压过尽可能多的较小数。</p>
<p>排序后用双指针：从左到右扫较大候选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，若它严格大于当前未被压过的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 则配对成功。能压过的个数即答案。</p>
</blockquote>
<p>我们可以先将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 进行排序。</p>
<p>接下来定义一个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，初始时指向数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的第一个元素。然后遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，对于遍历到的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，则将指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 向右移动一位。</p>
<p>最后返回指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的值即可。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximizeGreatness(nums []int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	i := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		if x > nums[i] {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return i</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximize-greatness-of-an-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2592.Maximize%20Greatness%20of%20an%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2598" tabindex="-1">2598. 执行操作后的最大 MEX <a class="header-anchor" href="#q-2598" aria-label="Permalink to &quot;2598. 执行操作后的最大 MEX {#q-2598}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个整数 <code>value</code> 。</p>&#10;&#10;<p>在一步操作中，你可以对 <code>nums</code> 中的任一元素加上或减去 <code>value</code> 。</p>&#10;&#10;<ul>&#10;	<li>例如，如果 <code>nums = [1,2,3]</code> 且 <code>value = 2</code> ，你可以选择 <code>nums[0]</code> 减去 <code>value</code> ，得到 <code>nums = [-1,2,3]</code> 。</li>&#10;</ul>&#10;&#10;<p>数组的 MEX (minimum excluded) 是指其中数组中缺失的最小非负整数。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>[-1,2,3]</code> 的 MEX 是 <code>0</code> ，而 <code>[1,0,3]</code> 的 MEX 是 <code>2</code> 。</li>&#10;</ul>&#10;&#10;<p>返回在执行上述操作 <strong>任意次</strong> 后，<code>nums</code><em> </em>的最大 MEX <em>。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,-10,7,13,6,8], value = 5&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>执行下述操作可以得到这一结果：&#10;- nums[1] 加上 value 两次，nums = [1,<em><strong>0</strong></em>,7,13,6,8]&#10;- nums[2] 减去 value 一次，nums = [1,0,<em><strong>2</strong></em>,13,6,8]&#10;- nums[3] 减去 value 两次，nums = [1,0,2,<em><strong>3</strong></em>,6,8]&#10;nums 的 MEX 是 4 。可以证明 4 是可以取到的最大 MEX 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,-10,7,13,6,8], value = 7&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>执行下述操作可以得到这一结果：&#10;- nums[2] 减去 value 一次，nums = [1,-10,<em><strong>0</strong></em>,13,6,8]&#10;nums 的 MEX 是 2 。可以证明 2 是可以取到的最大 MEX 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length, value &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个数可加减任意次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span>，即可以变成与它同余的任意整数。求操作后能达到的最小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>e</mi>
  <mi>x</mi>
</math></span>。</p>
<p>同余类 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 能提供 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">value</mtext>
  <mo>,</mo>
  <mi>r</mi>
  <mo>+</mo>
  <mn>2</mn>
  <mtext mathvariant="italic">value</mtext>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span>。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 起依次需要余数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span>，某余数用尽时该整数即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>e</mi>
  <mi>x</mi>
</math></span>。统计各余数个数后线性扫描即可。</p>
</blockquote>
<p>我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 统计数组中每个数对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span> 取模后的余数的个数。</p>
<p>然后从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始遍历，对于当前遍历到的数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mtext mathvariant="italic">value</mtext>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，说明数组中不存在一个数对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span> 取模后的余数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 就是数组的 MEX，直接返回即可。否则，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mtext mathvariant="italic">value</mtext>
  <mo stretchy="false">]</mo>
</math></span> 减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，继续遍历。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">value</mtext>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findSmallestInteger(nums []int, value int) int {</span></span>
<span class="line"><span>	cnt := make([]int, value)</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[(x%value+value)%value]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; ; i++ {</span></span>
<span class="line"><span>		if cnt[i%value] == 0 {</span></span>
<span class="line"><span>			return i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt[i%value]--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/smallest-missing-non-negative-integer-after-operations" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2598.Smallest%20Missing%20Non-negative%20Integer%20After%20Operations/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2599" tabindex="-1">2599. 使前缀和数组非负 🔒 <a class="header-anchor" href="#q-2599" aria-label="Permalink to &quot;2599. 使前缀和数组非负 🔒 {#q-2599}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 <strong>下标从0开始</strong> 的整数数组 <code>nums</code> 。你可以任意多次执行以下操作：</p>&#10;&#10;<ul>&#10;	<li>从 <code>nums</code> 中选择任意一个元素，并将其放到 <code>nums</code> 的末尾。</li>&#10;</ul>&#10;&#10;<p><code>nums</code> 的前缀和数组是一个与 <code>nums</code> 长度相同的数组 <code>prefix</code> ，其中 <code>prefix[i]</code> 是所有整数 <code>nums[j]</code>（其中 <code>j</code> 在包括区间 <code>[0，i]</code> 内）的总和。</p>&#10;&#10;<p>返回使前缀和数组不包含负整数的最小操作次数。测试用例的生成方式保证始终可以使前缀和数组非负。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1 ：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [2,3,-5,4]&#10;<b>输出：</b>0&#10;<b>解释：</b>我们不需要执行任何操作。&#10;给定数组为 [2, 3, -5, 4]，它的前缀和数组是 [2, 5, 0, 4]。&#10;</pre>&#10;&#10;<p><strong>示例 2 ：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [3,-5,-2,6]&#10;<b>输出：</b>1&#10;<b>解释：</b>我们可以对索引为1的元素执行一次操作。&#10;操作后的数组为 [3, -2, 6, -5]，它的前缀和数组是 [3, 1, 7, 2]。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次可把一个元素移到数组末尾，要使每个前缀和都不为负，求最少移动次数。移动会改变后续前缀，枚举移动集合不可行。</p>
<p>从左到右累加，负数才可能把前缀拉负。当前和一旦为负，应移走此前仍留在原位的最小负数，这样用最少次数让和回到非负。小根堆保存这些负数，弹出时从和里减去（相当于移走）并计数。</p>
</blockquote>
<p>我们用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 记录当前数组的前缀和。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，将当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 加入前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 为负数，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 加入小根堆中。如果此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 为负数，我们贪心地取出最小的负数，将其从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中减去，同时将答案加一。最终返回答案即可。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func makePrefSumNonNegative(nums []int) (ans int) {</span></span>
<span class="line"><span>	pq := hp{}</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>		if x &#x3C; 0 {</span></span>
<span class="line"><span>			heap.Push(&#x26;pq, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for s &#x3C; 0 {</span></span>
<span class="line"><span>			s -= heap.Pop(&#x26;pq).(int)</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
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
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/make-the-prefix-sum-non-negative" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2599.Make%20the%20Prefix%20Sum%20Non-negative/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2600" tabindex="-1">2600. K 件物品的最大和 <a class="header-anchor" href="#q-2600" aria-label="Permalink to &quot;2600. K 件物品的最大和 {#q-2600}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>袋子中装有一些物品，每个物品上都标记着数字 <code>1</code> 、<code>0</code> 或 <code>-1</code> 。</p>&#10;&#10;<p>给你四个非负整数 <code>numOnes</code> 、<code>numZeros</code> 、<code>numNegOnes</code> 和 <code>k</code> 。</p>&#10;&#10;<p>袋子最初包含：</p>&#10;&#10;<ul>&#10;	<li><code>numOnes</code> 件标记为 <code>1</code> 的物品。</li>&#10;	<li><code>numZeros</code> 件标记为 <code>0</code> 的物品。</li>&#10;	<li><code>numNegOnes</code> 件标记为 <code>-1</code> 的物品。</li>&#10;</ul>&#10;&#10;<p>现计划从这些物品中恰好选出 <code>k</code> 件物品。返回所有可行方案中，物品上所标记数字之和的最大值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>袋子中的物品分别标记为 {1, 1, 1, 0, 0} 。取 2 件标记为 1 的物品，得到的数字之和为 2 。&#10;可以证明 2 是所有可行方案中的最大值。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>袋子中的物品分别标记为 {1, 1, 1, 0, 0} 。取 3 件标记为 1 的物品，1 件标记为 0 的物品，得到的数字之和为 3 。&#10;可以证明 3 是所有可行方案中的最大值。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= numOnes, numZeros, numNegOnes &lt;= 50</code></li>&#10;	<li><code>0 &lt;= k &lt;= numOnes + numZeros + numNegOnes</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三种标记的取值固定，若枚举取了几件 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>、几件 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>、几件 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，组合数随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 线性增长。题目要求恰好取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 件且和最大，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 与各计数均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>50</mn>
</math></span>，穷举可行，但并无必要。</p>
<p>和由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 线性叠加，多取一件 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 严格优于多取一件 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，多取一件 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 又优于多取一件 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。因此最优策略唯一：先取尽 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，不足再取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，仍不足才取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numOnes</mtext>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numZeros</mtext>
</math></span> 即可在常数时间内落到上述三段之一，无需真正构造选取方案。</p>
</blockquote>
<p>根据题目描述，我们应该尽可能多地取标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的物品，然后取标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的物品，最后取标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的物品。</p>
<p>因此：</p>
<ul>
<li>如果袋子中的物品标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数量大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 件物品，数字之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>；</li>
<li>如果袋子中的物品标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数量小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numOnes</mtext>
</math></span> 件物品，数字之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numOnes</mtext>
</math></span>；如果标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的物品数量大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">numOnes</mtext>
</math></span>，那么再取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">numOnes</mtext>
</math></span> 件物品，数字之和还是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numOnes</mtext>
</math></span>；</li>
<li>否则，我们再从标记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的物品中取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">numOnes</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">numZeros</mtext>
</math></span> 件物品，数字之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">numOnes</mtext>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">numOnes</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">numZeros</mtext>
  <mo stretchy="false">)</mo>
</math></span>。</li>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func kItemsWithMaximumSum(numOnes int, numZeros int, numNegOnes int, k int) int {</span></span>
<span class="line"><span>	if numOnes >= k {</span></span>
<span class="line"><span>		return k</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if numZeros >= k-numOnes {</span></span>
<span class="line"><span>		return numOnes</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return numOnes - (k - numOnes - numZeros)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/k-items-with-the-maximum-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2600.K%20Items%20With%20the%20Maximum%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2601" tabindex="-1">2601. 质数减法运算 <a class="header-anchor" href="#q-2601" aria-label="Permalink to &quot;2601. 质数减法运算 {#q-2601}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、数学、二分查找、数论</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，数组长度为 <code>n</code> 。</p>&#10;&#10;<p>你可以执行无限次下述运算：</p>&#10;&#10;<ul>&#10;	<li>选择一个之前未选过的下标 <code>i</code> ，并选择一个 <strong>严格小于</strong> <code>nums[i]</code> 的质数 <code>p</code> ，从 <code>nums[i]</code> 中减去 <code>p</code> 。</li>&#10;</ul>&#10;&#10;<p>如果你能通过上述运算使得 <code>nums</code> 成为严格递增数组，则返回 <code>true</code> ；否则返回 <code>false</code> 。</p>&#10;&#10;<p><strong>严格递增数组</strong> 中的每个元素都严格大于其前面的元素。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [4,9,6,10]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>&#10;在第一次运算中：选择 i = 0 和 p = 3 ，然后从 nums[0] 减去 3 ，nums 变为 [1,9,6,10] 。&#10;在第二次运算中：选择 i = 1 和 p = 7 ，然后从 nums[1] 减去 7 ，nums 变为 [1,2,6,10] 。&#10;第二次运算后，nums 按严格递增顺序排序，因此答案为 true 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [6,8,11,12]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>nums 从一开始就按严格递增顺序排序，因此不需要执行任何运算。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,8,3]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>可以证明，执行运算无法使 nums 按严格递增顺序排序，因此答案是 false 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>&#10;	<li><code>nums.length == n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：预处理质数 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个位置至多减一次质数，且须使整个数组严格递增。若从左向右贪心，当前值压得过低可能让后续无法衔接；若对每个位置枚举全部质数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span> 且值域不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>，时间尚可，但需要确定扫描方向。</p>
<p>注意到右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 越大越宽松，因此从右往左处理：当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 时，必须减去一个严格大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 且小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的质数，并取其中最小者，以免过度压缩左侧空间。</p>
<p>为此先筛出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 以内质数表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span>，再在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 上二分定位满足下界的最小质数。若无此类质数则不可行。</p>
</blockquote>
<p>我们先预处理得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 以内的所有质数，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 中。</p>
<p>对于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们需要找到一个质数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，使得 p[j] \\gt nums[i] - nums[i + 1]，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 尽可能小。如果找不到这样的质数，说明无法通过减法运算使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 严格递增，返回 <code v-pre>false</code>。如果找到了这样的质数，我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，并继续处理下一个元素。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的所有元素都处理完了，说明可以通过减法运算使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 严格递增，返回 <code v-pre>true</code>。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func primeSubOperation(nums []int) bool {</span></span>
<span class="line"><span>	p := []int{}</span></span>
<span class="line"><span>	for i := 2; i &#x3C;= 1000; i++ {</span></span>
<span class="line"><span>		ok := true</span></span>
<span class="line"><span>		for _, j := range p {</span></span>
<span class="line"><span>			if i%j == 0 {</span></span>
<span class="line"><span>				ok = false</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ok {</span></span>
<span class="line"><span>			p = append(p, i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := len(nums) - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		if nums[i] &#x3C; nums[i+1] {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		j := sort.SearchInts(p, nums[i]-nums[i+1]+1)</span></span>
<span class="line"><span>		if j == len(p) || p[j] >= nums[i] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		nums[i] -= p[j]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/prime-subtraction-operation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2601.Prime%20Subtraction%20Operation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2607" tabindex="-1">2607. 使子数组元素和相等 <a class="header-anchor" href="#q-2607" aria-label="Permalink to &quot;2607. 使子数组元素和相等 {#q-2607}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、数学、数论、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>arr</code> 和一个整数 <code>k</code> 。数组 <code>arr</code> 是一个循环数组。换句话说，数组中的最后一个元素的下一个元素是数组中的第一个元素，数组中第一个元素的前一个元素是数组中的最后一个元素。</p>&#10;&#10;<p>你可以执行下述运算任意次：</p>&#10;&#10;<ul>&#10;	<li>选中 <code>arr</code> 中任意一个元素，并使其值加上 <code>1</code> 或减去 <code>1</code> 。</li>&#10;</ul>&#10;&#10;<p>执行运算使每个长度为 <code>k</code> 的 <strong>子数组</strong> 的元素总和都相等，返回所需要的最少运算次数。</p>&#10;&#10;<p><strong>子数组</strong> 是数组的一个连续部分。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [1,4,1,3], k = 2&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>在下标为 1 的元素那里执行一次运算，使其等于 3 。&#10;执行运算后，数组变为 [1,3,1,3] 。&#10;- 0 处起始的子数组为 [1, 3] ，元素总和为 4 &#10;- 1 处起始的子数组为 [3, 1] ，元素总和为 4 &#10;- 2 处起始的子数组为 [1, 3] ，元素总和为 4 &#10;- 3 处起始的子数组为 [3, 1] ，元素总和为 4 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [2,5,5,7], k = 3&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>在下标为 0 的元素那里执行三次运算，使其等于 5 。在下标为 3 的元素那里执行两次运算，使其等于 5 。&#10;执行运算后，数组变为 [5,5,5,5] 。&#10;- 0 处起始的子数组为 [5, 5, 5] ，元素总和为 15&#10;- 1 处起始的子数组为 [5, 5, 5] ，元素总和为 15&#10;- 2 处起始的子数组为 [5, 5, 5] ，元素总和为 15&#10;- 3 处起始的子数组为 [5, 5, 5] ，元素总和为 15&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= arr.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学（裴蜀定理） + 中位数贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>相邻长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组和相等，化简后得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo>=</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
    </mrow>
  </msub>
</math></span>。数组又是环状的，故间隔 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 与间隔 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的完全剩余系必须取同一值。</p>
<p>由裴蜀定理，这些下标按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">gcd</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 分成若干独立链。链内元素须改成同一个数，操作次数为到某目标的绝对差之和，中位数使其最小。</p>
<p>因此对每个剩余类排序后取中位数，累加偏差。</p>
</blockquote>
<p>题目要求每个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子数组的元素总和相等，那么有以下等式成立：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo>+</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>=</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>+</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
  </msub>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
    </mrow>
  </msub>
</math></span><p>化简得：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo>=</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
    </mrow>
  </msub>
</math></span><p>也即是说，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 有一个大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的循环节，而由于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 是一个循环数组，那么数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 也有一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的循环节。换句话说，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 上间隔为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，以及间隔为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的元素均相等。即有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo>=</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
      <mo>&#xD7;</mo>
      <mi>x</mi>
      <mo>+</mo>
      <mi>n</mi>
      <mo>&#xD7;</mo>
      <mi>y</mi>
    </mrow>
  </msub>
</math></span><p>根据裴蜀定理，有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#xD7;</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&#xD7;</mo>
  <mi>y</mi>
  <mo>=</mo>
  <mi>g</mi>
  <mi>c</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>，因此，有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mi>i</mi>
  </msub>
  <mo>=</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>k</mi>
      <mo>&#xD7;</mo>
      <mi>x</mi>
      <mo>+</mo>
      <mi>n</mi>
      <mo>&#xD7;</mo>
      <mi>y</mi>
    </mrow>
  </msub>
  <mo>=</mo>
  <mi>a</mi>
  <mi>r</mi>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>+</mo>
      <mi>g</mi>
      <mi>c</mi>
      <mi>d</mi>
      <mo stretchy="false">(</mo>
      <mi>k</mi>
      <mo>,</mo>
      <mi>n</mi>
      <mo stretchy="false">)</mo>
    </mrow>
  </msub>
</math></span><p>因此，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 上的元素可以分为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>c</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 组，每组的元素间隔为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>c</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，且每一组中的所有元素均相等。对于每一组，我们可以将其元素按照大小排序，然后取中位数，即可将该组中的所有元素变为中位数。对于所有组，我们将其中位数之差的绝对值求和，即为答案。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func makeSubKSumEqual(arr []int, k int) (ans int64) {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	g := gcd(n, k)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; g; i++ {</span></span>
<span class="line"><span>		t := []int{}</span></span>
<span class="line"><span>		for j := i; j &#x3C; n; j += g {</span></span>
<span class="line"><span>			t = append(t, arr[j])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		sort.Ints(t)</span></span>
<span class="line"><span>		mid := t[len(t)/2]</span></span>
<span class="line"><span>		for _, x := range t {</span></span>
<span class="line"><span>			ans += int64(abs(x - mid))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func gcd(a, b int) int {</span></span>
<span class="line"><span>	if b == 0 {</span></span>
<span class="line"><span>		return a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return gcd(b, a%b)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/make-k-subarray-sums-equal" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2607.Make%20K-Subarray%20Sums%20Equal/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2611" tabindex="-1">2611. 老鼠和奶酪 <a class="header-anchor" href="#q-2611" aria-label="Permalink to &quot;2611. 老鼠和奶酪 {#q-2611}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有两只老鼠和 <code>n</code> 块不同类型的奶酪，每块奶酪都只能被其中一只老鼠吃掉。</p>&#10;&#10;<p>下标为 <code>i</code> 处的奶酪被吃掉的得分为：</p>&#10;&#10;<ul>&#10;	<li>如果第一只老鼠吃掉，则得分为 <code>reward1[i]</code> 。</li>&#10;	<li>如果第二只老鼠吃掉，则得分为 <code>reward2[i]</code> 。</li>&#10;</ul>&#10;&#10;<p>给你一个正整数数组 <code>reward1</code> ，一个正整数数组 <code>reward2</code> ，和一个非负整数 <code>k</code> 。</p>&#10;&#10;<p>请你返回第一只老鼠恰好吃掉 <code>k</code> 块奶酪的情况下，<strong>最大</strong> 得分为多少。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2&#10;<b>输出：</b>15&#10;<b>解释：</b>这个例子中，第一只老鼠吃掉第 2 和 3 块奶酪（下标从 0 开始），第二只老鼠吃掉第 0 和 1 块奶酪。&#10;总得分为 4 + 4 + 3 + 4 = 15 。&#10;15 是最高得分。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>reward1 = [1,1], reward2 = [1,1], k = 2&#10;<b>输出：</b>2&#10;<b>解释：</b>这个例子中，第一只老鼠吃掉第 0 和 1 块奶酪（下标从 0 开始），第二只老鼠不吃任何奶酪。&#10;总得分为 1 + 1 = 2 。&#10;2 是最高得分。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n == reward1.length == reward2.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= reward1[i], reward2[i] &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= k &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第一只老鼠恰吃 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 块，其余归第二只。枚举子集 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 下不可行。</p>
<p>先把全部奶酪记给第二只，再挑选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 块改给第一只，得分变化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。变化量越大越应改分。</p>
<p>按下标差降序排序，前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 块用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>1</mn>
</math></span>，其余用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>2</mn>
</math></span>。</p>
</blockquote>
<p>我们可以先将所有奶酪分给第二只老鼠，因此初始得分为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
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
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>接下来，考虑将其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 块奶酪分给第一只老鼠，那么我们应该如何选择这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 块奶酪呢？显然，将第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 块奶酪从第二只老鼠分给第一只老鼠，得分的变化量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们希望这个变化量尽可能大，这样才能使得总得分最大。</p>
<p>因此，我们将奶酪按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 从大到小排序，前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 块奶酪由第一只老鼠吃掉，剩下的奶酪由第二只老鼠吃掉，即可得到最大得分。也即是说，我们将初始得分加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>0</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </munderover>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>1</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span> 即可。</p>
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
</math></span> 为奶酪的数量。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1000-1099/1029.Two%20City%20Scheduling/README.md" target="_blank" rel="noopener noreferrer">1029. 两地调度</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func miceAndCheese(reward1 []int, reward2 []int, k int) (ans int) {</span></span>
<span class="line"><span>	n := len(reward1)</span></span>
<span class="line"><span>	idx := make([]int, n)</span></span>
<span class="line"><span>	for i := range idx {</span></span>
<span class="line"><span>		idx[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(idx, func(i, j int) bool {</span></span>
<span class="line"><span>		i, j = idx[i], idx[j]</span></span>
<span class="line"><span>		return reward1[j]-reward2[j] &#x3C; reward1[i]-reward2[i]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	for i := 0; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		ans += reward1[idx[i]]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := k; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		ans += reward2[idx[i]]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一另开下标数组排序。把差值写回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>1</mn>
</math></span> 再原地降序，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>w</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mn>2</mn>
</math></span> 加上最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个差值，省去下标映射。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func miceAndCheese(reward1 []int, reward2 []int, k int) (ans int) {</span></span>
<span class="line"><span>	for i, x := range reward2 {</span></span>
<span class="line"><span>		ans += x</span></span>
<span class="line"><span>		reward1[i] -= x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(reward1)</span></span>
<span class="line"><span>	n := len(reward1)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		ans += reward1[n-i-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/mice-and-cheese" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2611.Mice%20and%20Cheese/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2656" tabindex="-1">2656. K 个元素的最大和 <a class="header-anchor" href="#q-2656" aria-label="Permalink to &quot;2656. K 个元素的最大和 {#q-2656}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个整数 <code>k</code> 。你需要执行以下操作<strong> 恰好</strong> <code>k</code> 次，最大化你的得分：</p>&#10;&#10;<ol>&#10;	<li>从 <code>nums</code> 中选择一个元素 <code>m</code> 。</li>&#10;	<li>将选中的元素 <code>m</code> 从数组中删除。</li>&#10;	<li>将新元素 <code>m + 1</code> 添加到数组中。</li>&#10;	<li>你的得分增加 <code>m</code> 。</li>&#10;</ol>&#10;&#10;<p>请你返回执行以上操作恰好 <code>k</code> 次后的最大得分。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,2,3,4,5], k = 3&#10;<b>输出：</b>18&#10;<b>解释：</b>我们需要从 nums 中恰好选择 3 个元素并最大化得分。&#10;第一次选择 5 。和为 5 ，nums = [1,2,3,4,6] 。&#10;第二次选择 6 。和为 6 ，nums = [1,2,3,4,7] 。&#10;第三次选择 7 。和为 5 + 6 + 7 = 18 ，nums = [1,2,3,4,8] 。&#10;所以我们返回 18 。&#10;18 是可以得到的最大答案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [5,5,5], k = 2&#10;<b>输出：</b>11&#10;<b>解释：</b>我们需要从 nums 中恰好选择 2 个元素并最大化得分。&#10;第一次选择 5 。和为 5 ，nums = [5,5,6] 。&#10;第二次选择 6 。和为 6 ，nums = [5,5,7] 。&#10;所以我们返回 11 。&#10;11 是可以得到的最大答案。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;	<li><code>1 &lt;= k &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次取当前最大并把它加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 放回，做 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次。若真的模拟插入， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span> 尚可，但最优总是反复操作全局最大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
<p>得分是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>k</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，一次求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
</math></span> 即可。</p>
</blockquote>
<p>我们注意到，要使得最终的得分最大，我们应该尽可能地使得每次选择的元素最大。因此，我们第一次选择数组中的最大元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，第二次选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，第三次选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>2</mn>
</math></span>，以此类推，直到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。这样的选择方式可以保证每次选择的元素都是当前数组中的最大值，因此最终的得分也是最大的。答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的和加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>+</mo>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mo>&#x22EF;</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximizeSum(nums []int, k int) int {</span></span>
<span class="line"><span>	x := slices.Max(nums)</span></span>
<span class="line"><span>	return k*x + k*(k-1)/2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-sum-with-exactly-k-elements" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2656.Maximum%20Sum%20With%20Exactly%20K%20Elements/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2663" tabindex="-1">2663. 字典序最小的美丽字符串 <a class="header-anchor" href="#q-2663" aria-label="Permalink to &quot;2663. 字典序最小的美丽字符串 {#q-2663}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果一个字符串满足以下条件，则称其为 <strong>美丽字符串</strong> ：</p>&#10;&#10;<ul>&#10;	<li>它由英语小写字母表的前 <code>k</code> 个字母组成。</li>&#10;	<li>它不包含任何长度为 <code>2</code> 或更长的回文子字符串。</li>&#10;</ul>&#10;&#10;<p>给你一个长度为 <code>n</code> 的美丽字符串 <code>s</code> 和一个正整数 <code>k</code> 。</p>&#10;&#10;<p>请你找出并返回一个长度为 <code>n</code> 的美丽字符串，该字符串还满足：在字典序大于 <code>s</code> 的所有美丽字符串中字典序最小。如果不存在这样的字符串，则返回一个空字符串。</p>&#10;&#10;<p>对于长度相同的两个字符串 <code>a</code> 和 <code>b</code> ，如果字符串 <code>a</code> 在与字符串 <code>b</code> 不同的第一个位置上的字符字典序更大，则字符串 <code>a</code> 的字典序大于字符串 <code>b</code> 。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;abcd&quot;</code> 的字典序比 <code>&quot;abcc&quot;</code> 更大，因为在不同的第一个位置（第四个字符）上 <code>d</code> 的字典序大于 <code>c</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcz&quot;, k = 26&#10;<strong>输出：</strong>&quot;abda&quot;&#10;<strong>解释：</strong>字符串 &quot;abda&quot; 既是美丽字符串，又满足字典序大于 &quot;abcz&quot; 。&#10;可以证明不存在字符串同时满足字典序大于 &quot;abcz&quot;、美丽字符串、字典序小于 &quot;abda&quot; 这三个条件。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;dc&quot;, k = 4&#10;<strong>输出：</strong>&quot;&quot;&#10;<strong>解释：</strong>可以证明，不存在既是美丽字符串，又字典序大于 &quot;dc&quot; 的字符串。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n == s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>4 &lt;= k &lt;= 26</code></li>&#10;	<li><code>s</code> 是一个美丽字符串</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>美丽串不含长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mn>2</mn>
</math></span> 的回文，即每位与前两位都不同。要找比 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 大的最小美丽串。从左修改会牵动后缀，字典序最小应尽量改最右侧。</p>
<p>自右向左找第一位还能升格到某个合法更大字母；其后各位放尽可能小的合法字母。若无人可升格则无解。字母表大小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <mn>26</mn>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 下每位尝试常数次。</p>
</blockquote>
<p>我们可以发现，一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的回文字符串，其相邻两个字符一定相同；而一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的回文字符串，其首尾两个字符一定相同。因此，一个美丽字符串不包含任何长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 或更长的回文子字符串，意味着该字符串的每个字符与其相邻的前两个字符都不相同。</p>
<p>我们可以贪心地从字符串的最后一个下标开始往前查找，找到一个下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，使得下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 处的字符可以被替换为一个比其稍大的字符，同时保证其与其相邻的前两个字符都不相同的字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>。</p>
<ul>
<li>若找到了这样的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 替换为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的字符依次替换为字典序尽可能小的、不与前面相邻两个字符相同的、且在字母表前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个字符中的字符，替换完成后，我们就得到了一个字典序最小的且大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的美丽字符串。</li>
<li>若找不到这样的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，那么我们就无法构造出字典序大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的美丽字符串，因此返回空字符串。</li>
</ul>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestBeautifulString(s string, k int) string {</span></span>
<span class="line"><span>	cs := []byte(s)</span></span>
<span class="line"><span>	n := len(cs)</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		p := int(cs[i] - 'a' + 1)</span></span>
<span class="line"><span>		for j := p; j &#x3C; k; j++ {</span></span>
<span class="line"><span>			c := byte('a' + j)</span></span>
<span class="line"><span>			if (i > 0 &#x26;&#x26; cs[i-1] == c) || (i > 1 &#x26;&#x26; cs[i-2] == c) {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			cs[i] = c</span></span>
<span class="line"><span>			for l := i + 1; l &#x3C; n; l++ {</span></span>
<span class="line"><span>				for m := 0; m &#x3C; k; m++ {</span></span>
<span class="line"><span>					c = byte('a' + m)</span></span>
<span class="line"><span>					if (l > 0 &#x26;&#x26; cs[l-1] == c) || (l > 1 &#x26;&#x26; cs[l-2] == c) {</span></span>
<span class="line"><span>						continue</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					cs[l] = c</span></span>
<span class="line"><span>					break</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return string(cs)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ""</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/lexicographically-smallest-beautiful-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2663.Lexicographically%20Smallest%20Beautiful%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2680" tabindex="-1">2680. 最大或值 <a class="header-anchor" href="#q-2680" aria-label="Permalink to &quot;2680. 最大或值 {#q-2680}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、位运算、数组、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>nums</code> 和一个整数 <code>k</code> 。每一次操作中，你可以选择一个数并将它乘 <code>2</code> 。</p>&#10;&#10;<p>你最多可以进行 <code>k</code> 次操作，请你返回<em> </em><code>nums[0] | nums[1] | ... | nums[n - 1]</code> 的最大值。</p>&#10;&#10;<p><code>a | b</code> 表示两个整数 <code>a</code> 和 <code>b</code> 的 <strong>按位或</strong> 运算。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [12,9], k = 1&#10;<b>输出：</b>30&#10;<b>解释：</b>如果我们对下标为 1 的元素进行操作，新的数组为 [12,18] 。此时得到最优答案为 12 和 18 的按位或运算的结果，也就是 30 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [8,1,2], k = 2&#10;<b>输出：</b>35&#10;<b>解释：</b>如果我们对下标 0 处的元素进行操作，得到新数组 [32,1,2] 。此时得到最优答案为 32|1|2 = 35 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= 15</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 预处理 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>可把某数左移至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次，使全体按位或最大。移位分散到多个数会把高位拆开，不如把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次全给同一个数。</p>
<p>枚举被放大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 时，其余部分是其前缀或与后缀或，预处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
</math></span> 后一次扫描即可。</p>
</blockquote>
<p>我们注意到，为了使得答案最大，我们应该将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 作用于同一个数。</p>
<p>我们先预处理出数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的后缀或值数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
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
</math></span> 的按位或值。</p>
<p>接下来，我们从左到右遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，同时维护当前的前缀或值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span>。对于当前遍历到的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次方，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
</math></span>，与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span> 进行按位或运算，得到的结果再与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 进行按位或运算，即可得到以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为最后一个数的最大或值。枚举所有的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，即可得到答案。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumOr(nums []int, k int) int64 {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	suf := make([]int, n+1)</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		suf[i] = suf[i+1] | nums[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, pre := 0, 0</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		ans = max(ans, pre|(nums[i]&#x3C;&#x3C;k)|suf[i+1])</span></span>
<span class="line"><span>		pre |= x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-or" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2680.Maximum%20OR/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2697" tabindex="-1">2697. 字典序最小回文串 <a class="header-anchor" href="#q-2697" aria-label="Permalink to &quot;2697. 字典序最小回文串 {#q-2697}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、双指针、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个由 <strong>小写英文字母</strong> 组成的字符串 <code>s</code> ，你可以对其执行一些操作。在一步操作中，你可以用其他小写英文字母 <strong>替换</strong>  <code>s</code> 中的一个字符。</p>&#10;&#10;<p>请你执行 <strong>尽可能少的操作</strong> ，使 <code>s</code> 变成一个 <strong>回文串</strong> 。如果执行 <strong>最少</strong> 操作次数的方案不止一种，则只需选取 <strong>字典序最小</strong> 的方案。</p>&#10;&#10;<p>对于两个长度相同的字符串 <code>a</code> 和 <code>b</code> ，在 <code>a</code> 和 <code>b</code> 出现不同的第一个位置，如果该位置上 <code>a</code> 中对应字母比 <code>b</code> 中对应字母在字母表中出现顺序更早，则认为 <code>a</code> 的字典序比 <code>b</code> 的字典序要小。</p>&#10;&#10;<p>返回最终的回文字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;egcfe&quot;&#10;<strong>输出：</strong>&quot;efcfe&quot;&#10;<strong>解释：</strong>将 &quot;egcfe&quot; 变成回文字符串的最小操作次数为 1 ，修改 1 次得到的字典序最小回文字符串是 &quot;efcfe&quot;，只需将 'g' 改为 'f' 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;&#10;<strong>输出：</strong>&quot;abba&quot;&#10;<strong>解释：</strong>将 &quot;abcd&quot; 变成回文字符串的最小操作次数为 2 ，修改 2 次得到的字典序最小回文字符串是 &quot;abba&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;seven&quot;&#10;<strong>输出：</strong>&quot;neven&quot;&#10;<strong>解释：</strong>将 &quot;seven&quot; 变成回文字符串的最小操作次数为 1 ，修改 1 次得到的字典序最小回文字符串是 &quot;neven&quot; 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 1000</code></li>&#10;	<li><code>s</code> 仅由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>只能把字母改小，且最终须为回文。两端应对称，字典序最小应取两端中的较小者同时写入。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，双指针一次扫描即可，无需枚举改哪些位。</p>
</blockquote>
<p>我们用两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 分别指向字符串的首尾，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>接下来，我们每一次都贪心地将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 修改为它们中的较小值，使得它们相等。然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 向后移动一位，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 向前移动一位，继续进行这一过程，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>j</mi>
</math></span> 为止。此时，我们就得到了最小的回文串。</p>
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
</math></span> 是字符串的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func makeSmallestPalindrome(s string) string {</span></span>
<span class="line"><span>	cs := []byte(s)</span></span>
<span class="line"><span>	for i, j := 0, len(s)-1; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>		cs[i] = min(cs[i], cs[j])</span></span>
<span class="line"><span>		cs[j] = cs[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(cs)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/lexicographically-smallest-palindrome" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2697.Lexicographically%20Smallest%20Palindrome/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2706" tabindex="-1">2706. 购买两块巧克力 <a class="header-anchor" href="#q-2706" aria-label="Permalink to &quot;2706. 购买两块巧克力 {#q-2706}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>prices</code> ，它表示一个商店里若干巧克力的价格。同时给你一个整数 <code>money</code> ，表示你一开始拥有的钱数。</p>&#10;&#10;<p>你必须购买 <strong>恰好 </strong>两块巧克力，而且剩余的钱数必须是 <strong>非负数</strong> 。同时你想最小化购买两块巧克力的总花费。</p>&#10;&#10;<p>请你返回在购买两块巧克力后，最多能剩下多少钱。如果购买任意两块巧克力都超过了你拥有的钱，请你返回 <code>money</code> 。注意剩余钱数必须是非负数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>prices = [1,2,2], money = 3&#10;<b>输出：</b>0&#10;<b>解释：</b>分别购买价格为 1 和 2 的巧克力。你剩下 3 - 3 = 0 块钱。所以我们返回 0 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>prices = [3,2,3], money = 3&#10;<b>输出：</b>3&#10;<b>解释：</b>购买任意 2 块巧克力都会超过你拥有的钱数，所以我们返回 3 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= prices.length &lt;= 50</code></li>&#10;	<li><code>1 &lt;= prices[i] &lt;= 100</code></li>&#10;	<li><code>1 &lt;= money &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>必须恰好买两块且花费不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
</math></span>，并最大化剩余。枚举所有无序对在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span> 下可通过，但答案只取决于最便宜的两块。</p>
<p>将价格排序后取前两项之和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>&gt;</mo>
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
</math></span> 则无法购买，否则剩余为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>c</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>。</p>
</blockquote>
<p>我们可以将巧克力的价格从小到大排序，然后取前两个价格相加，就是我们购买两块巧克力的最小花费 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>。如果这个花费大于我们拥有的钱数，那么我们就返回 <code v-pre>money</code>，否则返回 <code v-pre>money - cost</code>。</p>
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
</math></span> 是数组 <code v-pre>prices</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func buyChoco(prices []int, money int) int {</span></span>
<span class="line"><span>	sort.Ints(prices)</span></span>
<span class="line"><span>	cost := prices[0] + prices[1]</span></span>
<span class="line"><span>	if money &#x3C; cost {</span></span>
<span class="line"><span>		return money</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return money - cost</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：一次遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排序付出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，而我们只需要两个最小值。一次扫描维护当前最小与次小，即可在线性时间内得到同样的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>。</p>
</blockquote>
<p>我们可以在一次遍历中找到最小的两个价格，然后计算花费。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <code v-pre>prices</code> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func buyChoco(prices []int, money int) int {</span></span>
<span class="line"><span>	a, b := 1001, 1001</span></span>
<span class="line"><span>	for _, x := range prices {</span></span>
<span class="line"><span>		if x &#x3C; a {</span></span>
<span class="line"><span>			a, b = x, a</span></span>
<span class="line"><span>		} else if x &#x3C; b {</span></span>
<span class="line"><span>			b = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cost := a + b</span></span>
<span class="line"><span>	if money &#x3C; cost {</span></span>
<span class="line"><span>		return money</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return money - cost</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/buy-two-chocolates" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2706.Buy%20Two%20Chocolates/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2734" tabindex="-1">2734. 执行子串操作后的字典序最小字符串 <a class="header-anchor" href="#q-2734" aria-label="Permalink to &quot;2734. 执行子串操作后的字典序最小字符串 {#q-2734}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个仅由小写英文字母组成的字符串 <code>s</code> 。在一步操作中，你可以完成以下行为：</p>&#10;&#10;<ul>&#10;	<li>选择 <code>s</code> 的任一非空子字符串，可能是整个字符串，接着将字符串中的每一个字符替换为英文字母表中的前一个字符。例如，'b' 用 'a' 替换，'a' 用 'z' 替换。</li>&#10;</ul>&#10;&#10;<p>返回执行上述操作 <strong>恰好一次</strong> 后可以获得的 <strong>字典序最小</strong> 的字符串。</p>&#10;&#10;<p><strong>子字符串</strong> 是字符串中的一个连续字符序列。</p>&#10;现有长度相同的两个字符串 <code>x</code> 和 字符串 <code>y</code> ，在满足 <code>x[i] != y[i]</code> 的第一个位置 <code>i</code> 上，如果  <code>x[i]</code> 在字母表中先于 <code>y[i]</code> 出现，则认为字符串 <code>x</code> 比字符串 <code>y</code> <strong>字典序更小</strong> 。&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;cbabc&quot;&#10;<strong>输出：</strong>&quot;baabc&quot;&#10;<strong>解释：</strong>我们选择从下标 0 开始、到下标 1 结束的子字符串执行操作。 &#10;可以证明最终得到的字符串是字典序最小的。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;acbbc&quot;&#10;<strong>输出：</strong>&quot;abaab&quot;&#10;<strong>解释：</strong>我们选择从下标 1 开始、到下标 4 结束的子字符串执行操作。&#10;可以证明最终得到的字符串是字典序最小的。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;leetcode&quot;&#10;<strong>输出：</strong>&quot;kddsbncd&quot;&#10;<strong>解释：</strong>我们选择整个字符串执行操作。&#10;可以证明最终得到的字符串是字典序最小的。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 仅由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>必须对一段连续子串把每个字母减一（ <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
</math></span>），且只能操作一次，求字典序最小结果。枚举所有子串在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时不可行。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 减一会变成最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
</math></span>，应尽量避开。从左侧第一段非 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 开始减到下一处 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 之前，可使最早的位置下降。整串皆 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 时题目仍要求操作一次，只能把末位改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
</math></span>。</p>
</blockquote>
<p>我们可以从左到右遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，找到第一个不是 'a' 的字符所在的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，然后找到从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 开始的第一个 'a' 字符所在的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>:</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的字符都减一，最后返回处理后的字符串即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestString(s string) string {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	i := 0</span></span>
<span class="line"><span>	for i &#x3C; n &#x26;&#x26; s[i] == 'a' {</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cs := []byte(s)</span></span>
<span class="line"><span>	if i == n {</span></span>
<span class="line"><span>		cs[n-1] = 'z'</span></span>
<span class="line"><span>		return string(cs)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	j := i</span></span>
<span class="line"><span>	for j &#x3C; n &#x26;&#x26; cs[j] != 'a' {</span></span>
<span class="line"><span>		cs[j] = cs[j] - 1</span></span>
<span class="line"><span>		j++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(cs)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/lexicographically-smallest-string-after-substring-operation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2734.Lexicographically%20Smallest%20String%20After%20Substring%20Operation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2789" tabindex="-1">2789. 合并后数组中的最大元素 <a class="header-anchor" href="#q-2789" aria-label="Permalink to &quot;2789. 合并后数组中的最大元素 {#q-2789}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始、由正整数组成的数组 <code>nums</code> 。</p>&#10;&#10;<p>你可以在数组上执行下述操作 <strong>任意</strong> 次：</p>&#10;&#10;<ul>&#10;	<li>选中一个同时满足 <code>0 &lt;= i &lt; nums.length - 1</code> 和 <code>nums[i] &lt;= nums[i + 1]</code> 的下标 <code>i</code> 。将元素 <code>nums[i + 1]</code> 替换为 <code>nums[i] + nums[i + 1]</code> ，并从数组中删除元素 <code>nums[i]</code> 。</li>&#10;</ul>&#10;&#10;<p>返回你可以从最终数组中获得的 <strong>最大</strong> 元素的值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,3,7,9,3]&#10;<strong>输出：</strong>21&#10;<strong>解释：</strong>我们可以在数组上执行下述操作：&#10;- 选中 i = 0 ，得到数组 nums = [<strong><em>5</em></strong>,7,9,3] 。&#10;- 选中 i = 1 ，得到数组 nums = [5,<em><strong>16</strong></em>,3] 。&#10;- 选中 i = 0 ，得到数组 nums = [<em><strong>21</strong></em>,3] 。&#10;最终数组中的最大元素是 21 。可以证明我们无法获得更大的元素。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,3,3]&#10;<strong>输出：</strong>11&#10;<strong>解释：</strong>我们可以在数组上执行下述操作：&#10;- 选中 i = 1 ，得到数组 nums = [5,<em><strong>6</strong></em>] 。&#10;- 选中 i = 0 ，得到数组 nums = [<em><strong>11</strong></em>] 。&#10;最终数组中只有一个元素，即 11 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：倒序合并 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 时才能把二者合成右侧之和，求操作后可能出现的最大元素。从左合并会过早用掉较小的数，挡住后面的连锁。</p>
<p>从右向左：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 就原地累加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，相当于把右侧已经尽量大的段并进来。最后数组中的最大值即为答案。</p>
</blockquote>
<p>根据题目描述，为了最大化合并后的数组中的最大元素，我们应该先合并右侧的元素，使得右侧的元素尽可能大，从而尽可能多地执行合并操作，最终得到最大的元素。</p>
<p>因此，我们可以从右向左遍历数组，对于每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。这样做，相当于将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 合并，并且删掉 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>最终，数组中的最大元素就是合并后的数组中的最大元素。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxArrayValue(nums []int) int64 {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	ans, t := nums[n-1], nums[n-1]</span></span>
<span class="line"><span>	for i := n - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		if nums[i] &#x3C;= t {</span></span>
<span class="line"><span>			t += nums[i]</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			t = nums[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, t)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-element-in-an-array-after-merge-operations" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2789.Largest%20Element%20in%20an%20Array%20after%20Merge%20Operations/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2790" tabindex="-1">2790. 长度递增组的最大数目 <a class="header-anchor" href="#q-2790" aria-label="Permalink to &quot;2790. 长度递增组的最大数目 {#q-2790}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、数学、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始、长度为 <code>n</code> 的数组 <code>usageLimits</code> 。</p>&#10;&#10;<p>你的任务是使用从 <code>0</code> 到 <code>n - 1</code> 的数字创建若干组，并确保每个数字 <code>i</code> 在 <strong>所有组</strong> 中使用的次数总共不超过 <code>usageLimits[i]</code> 次。此外，还必须满足以下条件：</p>&#10;&#10;<ul>&#10;	<li>每个组必须由 <strong>不同</strong> 的数字组成，也就是说，单个组内不能存在重复的数字。</li>&#10;	<li>每个组（除了第一个）的长度必须 <strong>严格大于</strong> 前一个组。</li>&#10;</ul>&#10;&#10;<p>在满足所有条件的情况下，以整数形式返回可以创建的最大组数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>usageLimits = [1,2,5]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>在这个示例中，我们可以使用 0 至多一次，使用 1 至多 2 次，使用 2 至多 5 次。&#10;一种既能满足所有条件，又能创建最多组的方式是： &#10;组 1 包含数字 [2] 。&#10;组 2 包含数字 [1,2] 。&#10;组 3 包含数字 [0,1,2] 。 &#10;可以证明能够创建的最大组数是 3 。 &#10;所以，输出是 3 。 </pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>usageLimits = [2,1,2]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>在这个示例中，我们可以使用 0 至多 2 次，使用 1 至多 1 次，使用 2 至多 2 次。&#10;一种既能满足所有条件，又能创建最多组的方式是： &#10;组 1 包含数字 [0] 。 &#10;组 2 包含数字 [1,2] 。&#10;可以证明能够创建的最大组数是 2 。 &#10;所以，输出是 2 。 &#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>usageLimits = [1,1]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>在这个示例中，我们可以使用 0 和 1 至多 1 次。 &#10;一种既能满足所有条件，又能创建最多组的方式是：&#10;组 1 包含数字 [0] 。&#10;可以证明能够创建的最大组数是 1 。 &#10;所以，输出是 1 。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= usageLimits.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= usageLimits[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 组需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个两两不同的数，且每个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 至多用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
  <mi>s</mi>
  <mi>a</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>L</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 次，求最多组数。直接枚举组数再分配额度需要匹配。</p>
<p>限额升序后从左消耗：累计剩余额度一旦够开第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 组就开一组并扣掉 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，余量滚入下一个限额。贪心保证先用掉较小配额，组数尽量多。</p>
</blockquote>
<p>将限额从小到大排序后依次累加。每多出一个可用额度，就尝试多开一组；能开则把该组消耗从累计中扣掉。最终组数即为答案。</p>
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
</math></span> 是数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxIncreasingGroups(usageLimits []int) int {</span></span>
<span class="line"><span>	sort.Ints(usageLimits)</span></span>
<span class="line"><span>	s, k := 0, 0</span></span>
<span class="line"><span>	for _, x := range usageLimits {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>		if s > k {</span></span>
<span class="line"><span>			k++</span></span>
<span class="line"><span>			s -= k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return k</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-groups-with-increasing-length" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2700-2799/2790.Maximum%20Number%20of%20Groups%20With%20Increasing%20Length/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2800" tabindex="-1">2800. 包含三个字符串的最短字符串 <a class="header-anchor" href="#q-2800" aria-label="Permalink to &quot;2800. 包含三个字符串的最短字符串 {#q-2800}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、字符串、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre>给你三个字符串 <code>a</code> ，<code>b</code> 和 <code>c</code> ， 你的任务是找到长度 <strong>最短</strong> 的字符串，且这三个字符串都是它的 <strong>子字符串</strong> 。&#10;<p>如果有多个这样的字符串，请你返回 <strong>字典序最小</strong> 的一个。</p>&#10;&#10;<p>请你返回满足题目要求的字符串。</p>&#10;&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li>两个长度相同的字符串 <code>a</code> 和 <code>b</code> ，如果在第一个不相同的字符处，<code>a</code> 的字母在字母表中比 <code>b</code> 的字母 <strong>靠前</strong> ，那么字符串 <code>a</code> 比字符串 <code>b</code> <strong>字典序小</strong> 。</li>&#10;	<li><strong>子字符串</strong> 是一个字符串中一段连续的字符序列。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><code><span><b>输入：</b></span>a</code> = &quot;abc&quot;, <code>b</code> = &quot;bca&quot;, <code>c</code> = &quot;aaa&quot;&#10;<b>输出：</b>&quot;aaabca&quot;&#10;<b>解释：</b>字符串 &quot;aaabca&quot; 包含所有三个字符串：a = ans[2...4] ，b = ans[3..5] ，c = ans[0..2] 。结果字符串的长度至少为 6 ，且&quot;aaabca&quot; 是字典序最小的一个。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><code><span><b>输入：</b></span>a</code> = &quot;ab&quot;, <code>b</code> = &quot;ba&quot;, <code>c</code> = &quot;aba&quot;&#10;<b>输出：</b>&quot;aba&quot;&#10;<strong>解释：</strong>字符串 &quot;aba&quot; 包含所有三个字符串：a = ans[0..1] ，b = ans[1..2] ，c = ans[0..2] 。由于 c 的长度为 3 ，结果字符串的长度至少为 3 。&quot;aba&quot; 是字典序最小的一个。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= a.length, b.length, c.length &lt;= 100</code></li>&#10;	<li><code>a</code> ，<code>b</code> ，<code>c</code> 只包含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三个字符串长度均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>，排列只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>6</mn>
</math></span> 种，因而可以穷尽所有拼接顺序。答案须同时最短且字典序最小，包含关系与首尾重叠都会改变候选。若某一串已是另一串的子串，则不必再单独拼接；否则最优超串对应某一种排列下的依次合并。函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 先处理包含，再从大到小检查后缀与前缀的重合，并按长度与字典序维护最优解。</p>
</blockquote>
<p>我们枚举三个字符串的所有排列，然后对于每个排列，对三个字符串进行合并，找到最短的且字典序最小的字符串。</p>
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
</math></span> 是三个字符串的长度的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumString(a string, b string, c string) string {</span></span>
<span class="line"><span>	f := func(s, t string) string {</span></span>
<span class="line"><span>		if strings.Contains(s, t) {</span></span>
<span class="line"><span>			return s</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if strings.Contains(t, s) {</span></span>
<span class="line"><span>			return t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		m, n := len(s), len(t)</span></span>
<span class="line"><span>		for i := min(m, n); i > 0; i-- {</span></span>
<span class="line"><span>			if s[m-i:] == t[:i] {</span></span>
<span class="line"><span>				return s + t[i:]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return s + t</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := [3]string{a, b, c}</span></span>
<span class="line"><span>	ans := ""</span></span>
<span class="line"><span>	for _, p := range [][]int{{0, 1, 2}, {0, 2, 1}, {1, 0, 2}, {1, 2, 0}, {2, 0, 1}, {2, 1, 0}} {</span></span>
<span class="line"><span>		i, j, k := p[0], p[1], p[2]</span></span>
<span class="line"><span>		t := f(f(s[i], s[j]), s[k])</span></span>
<span class="line"><span>		if ans == "" || len(t) &#x3C; len(ans) || (len(t) == len(ans) &#x26;&#x26; t &#x3C; ans) {</span></span>
<span class="line"><span>			ans = t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：枚举 + KMP · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一在合并时对重叠长度做线性扫描，单次合并达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi mathvariant="normal">#</mi>
  <mi>s</mi>
</math></span> 做 KMP 前缀函数后，最末一项即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的前缀与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的后缀的最长重合，合并可在线性时间内完成，排列枚举不必改动。</p>
</blockquote>
<p>我们可以使用 KMP 算法来优化字符串的合并过程。</p>
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
</math></span> 是三个字符串的长度之和。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumString(a string, b string, c string) string {</span></span>
<span class="line"><span>	f := func(s, t string) string {</span></span>
<span class="line"><span>		if strings.Contains(s, t) {</span></span>
<span class="line"><span>			return s</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if strings.Contains(t, s) {</span></span>
<span class="line"><span>			return t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p := t + "#" + s + "$"</span></span>
<span class="line"><span>		n := len(p)</span></span>
<span class="line"><span>		next := make([]int, n)</span></span>
<span class="line"><span>		next[0] = -1</span></span>
<span class="line"><span>		for i, j := 2, 0; i &#x3C; n; {</span></span>
<span class="line"><span>			if p[i-1] == p[j] {</span></span>
<span class="line"><span>				j++</span></span>
<span class="line"><span>				next[i] = j</span></span>
<span class="line"><span>				i++</span></span>
<span class="line"><span>			} else if j > 0 {</span></span>
<span class="line"><span>				j = next[j]</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				next[i] = 0</span></span>
<span class="line"><span>				i++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return s + t[next[n-1]:]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := [3]string{a, b, c}</span></span>
<span class="line"><span>	ans := ""</span></span>
<span class="line"><span>	for _, p := range [][]int{{0, 1, 2}, {0, 2, 1}, {1, 0, 2}, {1, 2, 0}, {2, 0, 1}, {2, 1, 0}} {</span></span>
<span class="line"><span>		i, j, k := p[0], p[1], p[2]</span></span>
<span class="line"><span>		t := f(f(s[i], s[j]), s[k])</span></span>
<span class="line"><span>		if ans == "" || len(t) &#x3C; len(ans) || (len(t) == len(ans) &#x26;&#x26; t &#x3C; ans) {</span></span>
<span class="line"><span>			ans = t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/shortest-string-that-contains-three-strings" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2800.Shortest%20String%20That%20Contains%20Three%20Strings/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2813" tabindex="-1">2813. 子序列最大优雅度 <a class="header-anchor" href="#q-2813" aria-label="Permalink to &quot;2813. 子序列最大优雅度 {#q-2813}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、数组、哈希表、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的二维整数数组 <code>items</code> 和一个整数 <code>k</code> 。</p>&#10;&#10;<p><code>items[i] = [profit<sub>i</sub>, category<sub>i</sub>]</code>，其中 <code>profit<sub>i</sub></code> 和 <code>category<sub>i</sub></code> 分别表示第 <code>i</code> 个项目的利润和类别。</p>&#10;&#10;<p>现定义 <code>items</code> 的 <strong>子序列</strong> 的 <strong>优雅度</strong> 可以用 <code>total_profit + distinct_categories<sup>2</sup></code> 计算，其中 <code>total_profit</code> 是子序列中所有项目的利润总和，<code>distinct_categories</code> 是所选子序列所含的所有类别中不同类别的数量。</p>&#10;&#10;<p>你的任务是从 <code>items</code> 所有长度为 <code>k</code> 的子序列中，找出 <strong>最大优雅度</strong> 。</p>&#10;&#10;<p>用整数形式表示并返回 <code>items</code> 中所有长度恰好为 <code>k</code> 的子序列的最大优雅度。</p>&#10;&#10;<p><strong>注意：</strong>数组的子序列是经由原数组删除一些元素（可能不删除）而产生的新数组，且删除不改变其余元素相对顺序。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>items = [[3,2],[5,1],[10,1]], k = 2&#10;<strong>输出：</strong>17&#10;<strong>解释：&#10;</strong>在这个例子中，我们需要选出长度为 2 的子序列。&#10;其中一种方案是 items[0] = [3,2] 和 items[2] = [10,1] 。&#10;子序列的总利润为 3 + 10 = 13 ，子序列包含 2 种不同类别 [2,1] 。&#10;因此，优雅度为 13 + 2<sup>2</sup> = 17 ，可以证明 17 是可以获得的最大优雅度。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>items = [[3,1],[3,1],[2,2],[5,3]], k = 3&#10;<strong>输出：</strong>19&#10;<strong>解释：</strong>&#10;在这个例子中，我们需要选出长度为 3 的子序列。 &#10;其中一种方案是 items[0] = [3,1] ，items[2] = [2,2] 和 items[3] = [5,3] 。&#10;子序列的总利润为 3 + 2 + 5 = 10 ，子序列包含 3 种不同类别 [1, 2, 3] 。 &#10;因此，优雅度为 10 + 3<sup>2</sup> = 19 ，可以证明 19 是可以获得的最大优雅度。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>items = [[1,1],[2,1],[3,1]], k = 3&#10;<strong>输出：</strong>7&#10;<strong>解释：&#10;</strong>在这个例子中，我们需要选出长度为 3 的子序列。&#10;我们需要选中所有项目。&#10;子序列的总利润为 1 + 2 + 3 = 6，子序列包含 1 种不同类别 [1] 。&#10;因此，最大优雅度为 6 + 1<sup>2</sup> = 7 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= items.length == n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>items[i].length == 2</code></li>&#10;	<li><code>items[i][0] == profit<sub>i</sub></code></li>&#10;	<li><code>items[i][1] == category<sub>i</sub></code></li>&#10;	<li><code>1 &lt;= profit<sub>i</sub> &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= category<sub>i</sub> &lt;= n </code></li>&#10;	<li><code>1 &lt;= k &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>优雅度为利润和加上不同类别数的平方，直接枚举长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子序列不可行。利润大的项目应优先入选：先取利润前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，用集合记录类别、用栈记下其中重复类别的利润。其后若出现新类别，便弹出栈顶重复项以换入该项目，从而用类别数的平方增量补偿利润损失。</p>
</blockquote>
<p>我们可以将所有项目按照利润从大到小排序，先选取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个项目，计算其总利润 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span>，用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 记录这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个项目的类别，用一个栈 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>u</mi>
  <mi>p</mi>
</math></span> 按顺序记录这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个项目中重复类别的利润，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 记录当前的最大优雅度。</p>
<p>接下来，我们考虑从第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个项目开始，如果其类别已经在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 中，这意味着如果选择该类别，不会使得不同的类别数量增加，因此我们可以直接跳过该项目。如果此前不存在重复类别，我们也可以直接跳过该项目。否则，我们可以考虑将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>u</mi>
  <mi>p</mi>
</math></span> 栈顶的项目（即重复类别中利润最小的项目）替换为当前项目，这样可以使得总利润增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>&#x2212;</mo>
  <mi>d</mi>
  <mi>u</mi>
  <mi>p</mi>
  <mo>.</mo>
  <mi>p</mi>
  <mi>o</mi>
  <mi>p</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span>，同时不同类别数量增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，因此我们可以更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。</p>
<p>最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 即可。</p>
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
</math></span> 为项目数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMaximumElegance(items [][]int, k int) int64 {</span></span>
<span class="line"><span>	sort.Slice(items, func(i, j int) bool { return items[i][0] > items[j][0] })</span></span>
<span class="line"><span>	tot := 0</span></span>
<span class="line"><span>	vis := map[int]bool{}</span></span>
<span class="line"><span>	dup := []int{}</span></span>
<span class="line"><span>	for _, item := range items[:k] {</span></span>
<span class="line"><span>		p, c := item[0], item[1]</span></span>
<span class="line"><span>		tot += p</span></span>
<span class="line"><span>		if vis[c] {</span></span>
<span class="line"><span>			dup = append(dup, p)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			vis[c] = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := tot + len(vis)*len(vis)</span></span>
<span class="line"><span>	for _, item := range items[k:] {</span></span>
<span class="line"><span>		p, c := item[0], item[1]</span></span>
<span class="line"><span>		if vis[c] || len(dup) == 0 {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[c] = true</span></span>
<span class="line"><span>		tot += p - dup[len(dup)-1]</span></span>
<span class="line"><span>		dup = dup[:len(dup)-1]</span></span>
<span class="line"><span>		ans = max(ans, tot+len(vis)*len(vis))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-elegance-of-a-k-length-subsequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2813.Maximum%20Elegance%20of%20a%20K-Length%20Subsequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2818" tabindex="-1">2818. 操作使得分最大 <a class="header-anchor" href="#q-2818" aria-label="Permalink to &quot;2818. 操作使得分最大 {#q-2818}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、数组、数学、数论、排序、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的正整数数组 <code>nums</code> 和一个整数 <code>k</code> 。</p>&#10;&#10;<p>一开始，你的分数为 <code>1</code> 。你可以进行以下操作至多 <code>k</code> 次，目标是使你的分数最大：</p>&#10;&#10;<ul>&#10;	<li>选择一个之前没有选过的 <strong>非空</strong> 子数组 <code>nums[l, ..., r]</code> 。</li>&#10;	<li>从 <code>nums[l, ..., r]</code> 里面选择一个 <strong>质数分数</strong> 最高的元素 <code>x</code> 。如果多个元素质数分数相同且最高，选择下标最小的一个。</li>&#10;	<li>将你的分数乘以 <code>x</code> 。</li>&#10;</ul>&#10;&#10;<p><code>nums[l, ..., r]</code> 表示 <code>nums</code> 中起始下标为 <code>l</code> ，结束下标为 <code>r</code> 的子数组，两个端点都包含。</p>&#10;&#10;<p>一个整数的 <strong>质数分数</strong> 等于 <code>x</code> 不同质因子的数目。比方说， <code>300</code> 的质数分数为 <code>3</code> ，因为 <code>300 = 2 * 2 * 3 * 5 * 5</code> 。</p>&#10;&#10;<p>请你返回进行至多 <code>k</code> 次操作后，可以得到的 <strong>最大分数</strong> 。</p>&#10;&#10;<p>由于答案可能很大，请你将结果对 <code>10<sup>9 </sup>+ 7</code> 取余后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [8,3,9,3,8], k = 2&#10;<b>输出：</b>81&#10;<b>解释：</b>进行以下操作可以得到分数 81 ：&#10;- 选择子数组 nums[2, ..., 2] 。nums[2] 是子数组中唯一的元素。所以我们将分数乘以 nums[2] ，分数变为 1 * 9 = 9 。&#10;- 选择子数组 nums[2, ..., 3] 。nums[2] 和 nums[3] 质数分数都为 1 ，但是 nums[2] 下标更小。所以我们将分数乘以 nums[2] ，分数变为 9 * 9 = 81 。&#10;81 是可以得到的最高得分。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [19,12,14,6,10,18], k = 3&#10;<b>输出：</b>4788&#10;<b>解释：</b>进行以下操作可以得到分数 4788 ：&#10;- 选择子数组 nums[0, ..., 0] 。nums[0] 是子数组中唯一的元素。所以我们将分数乘以 nums[0] ，分数变为 1 * 19 = 19 。&#10;- 选择子数组 nums[5, ..., 5] 。nums[5] 是子数组中唯一的元素。所以我们将分数乘以 nums[5] ，分数变为 19 * 18 = 342 。&#10;- 选择子数组 nums[2, ..., 3] 。nums[2] 和 nums[3] 质数分数都为 2，但是 nums[2] 下标更小。所以我们将分数乘以 nums[2] ，分数变为  342 * 14 = 4788 。&#10;4788 是可以得到的最高的分。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length == n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= min(n * (n + 1) / 2, 10<sup>9</sup>)</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：单调栈 + 排序贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子数组的质数分数由其质因数个数最多的元素决定（并列时取最左）。对每个位置用单调栈求出它作为最高分的左右范围，可贡献 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 次操作。次数受 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 限制，故再按数值从大到小贪心取幂，直至用尽 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次。</p>
</blockquote>
<p>我们不妨考虑枚举每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为质数分数最高的元素，那么我们需要找出左边第一个质数分数大于等于当前元素的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，以及右边第一个质数分数大于当前元素的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，那么以当前元素为最高质数分数的子数组有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 个，它对答案的贡献为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <msup>
    <mo stretchy="false">]</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
    </mrow>
  </msup>
</math></span>。</p>
<p>而题目限制了最多进行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次操作，我们可以贪心地从大到小枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，每一次算出其子数组的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 对答案的贡献就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <msup>
    <mo stretchy="false">]</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
    </mrow>
  </msup>
</math></span>，然后我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，继续枚举下一个元素。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 对答案的贡献就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <msup>
    <mo stretchy="false">]</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>k</mi>
    </mrow>
  </msup>
</math></span>，然后退出循环。</p>
<p>枚举结束，返回答案即可。注意，由于幂次较大，我们需要用到快速幂。</p>
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
</math></span> 是数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumScore(nums []int, k int) int {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
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
<span class="line"><span>	arr := make([][3]int, n)</span></span>
<span class="line"><span>	left := make([]int, n)</span></span>
<span class="line"><span>	right := make([]int, n)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		left[i] = -1</span></span>
<span class="line"><span>		right[i] = n</span></span>
<span class="line"><span>		arr[i] = [3]int{i, primeFactors(x), x}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	stk := []int{}</span></span>
<span class="line"><span>	for _, e := range arr {</span></span>
<span class="line"><span>		i, f := e[0], e[1]</span></span>
<span class="line"><span>		for len(stk) > 0 &#x26;&#x26; arr[stk[len(stk)-1]][1] &#x3C; f {</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if len(stk) > 0 {</span></span>
<span class="line"><span>			left[i] = stk[len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stk = append(stk, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	stk = []int{}</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		f := arr[i][1]</span></span>
<span class="line"><span>		for len(stk) > 0 &#x26;&#x26; arr[stk[len(stk)-1]][1] &#x3C;= f {</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if len(stk) > 0 {</span></span>
<span class="line"><span>			right[i] = stk[len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stk = append(stk, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(arr, func(i, j int) bool { return arr[i][2] > arr[j][2] })</span></span>
<span class="line"><span>	ans := 1</span></span>
<span class="line"><span>	for _, e := range arr {</span></span>
<span class="line"><span>		i, x := e[0], e[2]</span></span>
<span class="line"><span>		l, r := left[i], right[i]</span></span>
<span class="line"><span>		cnt := (i - l) * (r - i)</span></span>
<span class="line"><span>		if cnt &#x3C;= k {</span></span>
<span class="line"><span>			ans = ans * qpow(x, cnt) % mod</span></span>
<span class="line"><span>			k -= cnt</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans = ans * qpow(x, k) % mod</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func primeFactors(n int) int {</span></span>
<span class="line"><span>	i := 2</span></span>
<span class="line"><span>	ans := map[int]bool{}</span></span>
<span class="line"><span>	for i &#x3C;= n/i {</span></span>
<span class="line"><span>		for n%i == 0 {</span></span>
<span class="line"><span>			ans[i] = true</span></span>
<span class="line"><span>			n /= i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n > 1 {</span></span>
<span class="line"><span>		ans[n] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/apply-operations-to-maximize-score" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2818.Apply%20Operations%20to%20Maximize%20Score/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2829" tabindex="-1">2829. k-avoiding 数组的最小总和 <a class="header-anchor" href="#q-2829" aria-label="Permalink to &quot;2829. k-avoiding 数组的最小总和 {#q-2829}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数 <code>n</code> 和 <code>k</code> 。</p>&#10;&#10;<p>对于一个由 <strong>不同</strong> 正整数组成的数组，如果其中不存在任何求和等于 k 的不同元素对，则称其为 <strong>k-avoiding</strong> 数组。</p>&#10;&#10;<p>返回长度为 <code>n</code> 的 <strong>k-avoiding</strong> 数组的可能的最小总和。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, k = 4&#10;<strong>输出：</strong>18&#10;<strong>解释：</strong>设若 k-avoiding 数组为 [1,2,4,5,6] ，其元素总和为 18 。&#10;可以证明不存在总和小于 18 的 k-avoiding 数组。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2, k = 6&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>可以构造数组 [1,2] ，其元素总和为 3 。&#10;可以证明不存在总和小于 3 的 k-avoiding 数组。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n, k &lt;= 50</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数组由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个不同正整数构成，且不能同时包含和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的一对，要求和最小。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 起贪心选取尚未被禁止的数，并立刻将搭档 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span> 标为不可用，从而始终取当前最小可行值。</p>
</blockquote>
<p>我们从正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 开始，依次判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 是否可以加入数组中，如果可以加入，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 加入数组中，累加到答案中，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span> 置为已访问，表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span> 不能加入数组中。循环直到数组长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumSum(n int, k int) int {</span></span>
<span class="line"><span>	s, i := 0, 1</span></span>
<span class="line"><span>	vis := make([]bool, n+k+1)</span></span>
<span class="line"><span>	for ; n > 0; n-- {</span></span>
<span class="line"><span>		for vis[i] {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if k >= i {</span></span>
<span class="line"><span>			vis[k-i] = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s += i</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/determine-the-minimum-sum-of-a-k-avoiding-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2829.Determine%20the%20Minimum%20Sum%20of%20a%20k-avoiding%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2834" tabindex="-1">2834. 找出美丽数组的最小和 <a class="header-anchor" href="#q-2834" aria-label="Permalink to &quot;2834. 找出美丽数组的最小和 {#q-2834}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个正整数：<code>n</code> 和 <code>target</code> 。</p>&#10;&#10;<p>如果数组 <code>nums</code> 满足下述条件，则称其为 <strong>美丽数组</strong> 。</p>&#10;&#10;<ul>&#10;	<li><code>nums.length == n</code>.</li>&#10;	<li><code>nums</code> 由两两互不相同的正整数组成。</li>&#10;	<li>在范围 <code>[0, n-1]</code> 内，<strong>不存在 </strong>两个 <strong>不同</strong> 下标 <code>i</code> 和 <code>j</code> ，使得 <code>nums[i] + nums[j] == target</code> 。</li>&#10;</ul>&#10;&#10;<p>返回符合条件的美丽数组所可能具备的 <strong>最小</strong> 和，并对结果进行取模 <code>10<sup>9</sup> + 7</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2, target = 3&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>nums = [1,3] 是美丽数组。&#10;- nums 的长度为 n = 2 。&#10;- nums 由两两互不相同的正整数组成。&#10;- 不存在两个不同下标 i 和 j ，使得 nums[i] + nums[j] == 3 。&#10;可以证明 4 是符合条件的美丽数组所可能具备的最小和。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3, target = 3&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>&#10;nums = [1,3,4] 是美丽数组。 &#10;- nums 的长度为 n = 3 。 &#10;- nums 由两两互不相同的正整数组成。 &#10;- 不存在两个不同下标 i 和 j ，使得 nums[i] + nums[j] == 3 。&#10;可以证明 8 是符合条件的美丽数组所可能具备的最小和。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1, target = 1&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>nums = [1] 是美丽数组。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= target &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>美丽数组不能同时包含和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的一对，且要求和最小。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 起贪心选取时，不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 的数均可取；若还不够 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个，则从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 起接着取连续整数。两段均为等差数列，可用通项公式在常数时间内求和。</p>
</blockquote>
<p>我们可以贪心地从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 开始构造数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，每次选择 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，并且排除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>。</p>
<p>我们不妨记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mrow>
        <mi>t</mi>
        <mi>a</mi>
        <mi>r</mi>
        <mi>g</mi>
        <mi>e</mi>
        <mi>t</mi>
      </mrow>
      <mn>2</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&lt;=</mo>
  <mi>m</mi>
</math></span>，那么我们可以选择的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <mi>n</mi>
</math></span>，所以数组的和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
        <mi>n</mi>
      </mrow>
      <mn>2</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&gt;</mo>
  <mi>m</mi>
</math></span>，那么我们可以选择的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <mi>m</mi>
</math></span>，共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 个数，以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
</math></span> 个从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 开始的数，所以数组的和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mi>m</mi>
        <mo stretchy="false">)</mo>
        <mi>m</mi>
      </mrow>
      <mn>2</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>+</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mrow>
        <mo stretchy="false">(</mo>
        <mi>t</mi>
        <mi>a</mi>
        <mi>r</mi>
        <mi>g</mi>
        <mi>e</mi>
        <mi>t</mi>
        <mo>+</mo>
        <mi>t</mi>
        <mi>a</mi>
        <mi>r</mi>
        <mi>g</mi>
        <mi>e</mi>
        <mi>t</mi>
        <mo>+</mo>
        <mi>n</mi>
        <mo>&#x2212;</mo>
        <mi>m</mi>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">(</mo>
        <mi>n</mi>
        <mo>&#x2212;</mo>
        <mi>m</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mn>2</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span>。</p>
<p>注意，我们需要对结果取模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumPossibleSum(n int, target int) int {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	m := target / 2</span></span>
<span class="line"><span>	if n &#x3C;= m {</span></span>
<span class="line"><span>		return (n + 1) * n / 2 % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a := (m + 1) * m / 2 % mod</span></span>
<span class="line"><span>	b := (target + target + n - m - 1) * (n - m) / 2 % mod</span></span>
<span class="line"><span>	return (a + b) % mod</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-minimum-possible-sum-of-a-beautiful-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2834.Find%20the%20Minimum%20Possible%20Sum%20of%20a%20Beautiful%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2835" tabindex="-1">2835. 使子序列的和等于目标的最少操作次数 <a class="header-anchor" href="#q-2835" aria-label="Permalink to &quot;2835. 使子序列的和等于目标的最少操作次数 {#q-2835}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、位运算、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，它包含 <strong>非负</strong> 整数，且全部为 <code>2</code> 的幂，同时给你一个整数 <code>target</code> 。</p>&#10;&#10;<p>一次操作中，你必须对数组做以下修改：</p>&#10;&#10;<ul>&#10;	<li>选择数组中一个元素 <code>nums[i]</code> ，满足 <code>nums[i] > 1</code> 。</li>&#10;	<li>将 <code>nums[i]</code> 从数组中删除。</li>&#10;	<li>在 <code>nums</code> 的 <strong>末尾</strong> 添加 <strong>两个</strong> 数，值都为 <code>nums[i] / 2</code> 。</li>&#10;</ul>&#10;&#10;<p>你的目标是让 <code>nums</code> 的一个 <strong>子序列</strong> 的元素和等于 <code>target</code> ，请你返回达成这一目标的 <strong>最少操作次数</strong> 。如果无法得到这样的子序列，请你返回 <code>-1</code> 。</p>&#10;&#10;<p>数组中一个 <strong>子序列</strong> 是通过删除原数组中一些元素，并且不改变剩余元素顺序得到的剩余数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,2,8], target = 7&#10;<b>输出：</b>1&#10;<b>解释：</b>第一次操作中，我们选择元素 nums[2] 。数组变为 nums = [1,2,4,4] 。&#10;这时候，nums 包含子序列 [1,2,4] ，和为 7 。&#10;无法通过更少的操作得到和为 7 的子序列。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,32,1,2], target = 12&#10;<b>输出：</b>2&#10;<b>解释：</b>第一次操作中，我们选择元素 nums[1] 。数组变为 nums = [1,1,2,16,16] 。&#10;第二次操作中，我们选择元素 nums[3] 。数组变为 nums = [1,1,2,16,8,8] 。&#10;这时候，nums 包含子序列 [1,1,2,8] ，和为 12 。&#10;无法通过更少的操作得到和为 12 的子序列。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,32,1], target = 35&#10;<b>输出：</b>-1&#10;<b>解释：</b>无法得到和为 35 的子序列。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 2<sup>30</sup></code></li>&#10;	<li><code>nums</code> 只包含非负整数，且均为 2 的幂。</li>&#10;	<li><code>1 &lt;= target &lt; 2<sup>31</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 位运算 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>操作把一个大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的幂次拆成两个相等的较小幂次，数组总和不变。若总和小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 则无解。按位统计后，从低到高凑齐 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的每一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>：不足时把更高位拆下来，拆一次计一次操作。</p>
</blockquote>
<p>观察题目中的操作，我们发现，每次操作实际上是把一个大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数拆分为两个相等的数，这意味着操作后数组的元素和不会发生变化。因此，如果数组的元素和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，则无法通过题目描述的操作得到和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的子序列，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 即可。否则，我们一定可以通过拆分操作，使得数组某个子序列的元素和等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>。</p>
<p>另外，拆分操作实际上会把二进制高位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，并把低一位的数加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。因此，我们先用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>32</mn>
</math></span> 的数组记录数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 所有元素的二进制表示中每个二进制位上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的出现次数。</p>
<p>接下来，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的低位开始遍历，对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位，如果当前位数字为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则直接跳过，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。如果当前位数字为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，我们需要在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中，找到最小的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>（其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2265;</mo>
  <mi>i</mi>
</math></span>），使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>，然后我们将该位的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 往低位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 拆分，即把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的每一位置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，操作次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>。接下来，我们令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>i</mi>
</math></span>，然后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。重复上述操作，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 超出数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 的下标范围，返回此时的操作次数。</p>
<p>注意，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>i</mi>
</math></span>，实际上两个低位的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 可以合并成一个高一位的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。因此，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>i</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>c</mi>
      <mi>n</mi>
      <mi>t</mi>
      <mo stretchy="false">[</mo>
      <mi>j</mi>
      <mo stretchy="false">]</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span> 加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 中，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 取模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，然后令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，继续上述操作。</p>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minOperations(nums []int, target int) (ans int) {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	cnt := [32]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>		for i := 0; i &#x3C; 32; i++ {</span></span>
<span class="line"><span>			if x>>i&#x26;1 > 0 {</span></span>
<span class="line"><span>				cnt[i]++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if s &#x3C; target {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var i, j int</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		for i &#x3C; 32 &#x26;&#x26; target>>i&#x26;1 == 0 {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if i == 32 {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for j &#x3C; i {</span></span>
<span class="line"><span>			cnt[j+1] += cnt[j] >> 1</span></span>
<span class="line"><span>			cnt[j] %= 2</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for cnt[j] == 0 {</span></span>
<span class="line"><span>			cnt[j] = 1</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += j - i</span></span>
<span class="line"><span>		cnt[j]--</span></span>
<span class="line"><span>		j = i</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-form-subsequence-with-target-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2835.Minimum%20Operations%20to%20Form%20Subsequence%20With%20Target%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2842" tabindex="-1">2842. 统计一个字符串的 k 子序列美丽值最大的数目 <a class="header-anchor" href="#q-2842" aria-label="Permalink to &quot;2842. 统计一个字符串的 k 子序列美丽值最大的数目 {#q-2842}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、哈希表、数学、字符串、组合数学、排序、费马小定理</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> 和一个整数 <code>k</code> 。</p>&#10;&#10;<p><strong>k 子序列</strong>指的是 <code>s</code> 的一个长度为 <code>k</code> 的 <strong>子序列</strong> ，且所有字符都是 <strong>唯一</strong> 的，也就是说每个字符在子序列里只出现过一次。</p>&#10;&#10;<p>定义 <code>f(c)</code> 为字符 <code>c</code> 在 <code>s</code> 中出现的次数。</p>&#10;&#10;<p>k 子序列的 <strong>美丽值</strong> 定义为这个子序列中每一个字符 <code>c</code> 的 <code>f(c)</code> 之 <strong>和</strong> 。</p>&#10;&#10;<p>比方说，<code>s = &quot;abbbdd&quot;</code> 和 <code>k = 2</code> ，我们有：</p>&#10;&#10;<ul>&#10;	<li><code>f('a') = 1</code>, <code>f('b') = 3</code>, <code>f('d') = 2</code></li>&#10;	<li><code>s</code> 的部分 k 子序列为：&#10;	<ul>&#10;		<li><code>&quot;<em><strong>ab</strong></em>bbdd&quot;</code> -> <code>&quot;ab&quot;</code> ，美丽值为 <code>f('a') + f('b') = 4</code></li>&#10;		<li><code>&quot;<em><strong>a</strong></em>bbb<em><strong>d</strong></em>d&quot;</code> -> <code>&quot;ad&quot;</code> ，美丽值为 <code>f('a') + f('d') = 3</code></li>&#10;		<li><code>&quot;a<em><strong>b</strong></em>bb<em><strong>d</strong></em>d&quot;</code> -> <code>&quot;bd&quot;</code> ，美丽值为 <code>f('b') + f('d') = 5</code></li>&#10;	</ul>&#10;	</li>&#10;</ul>&#10;&#10;<p>请你返回一个整数，表示所有 <strong>k 子序列 </strong>里面 <strong>美丽值 </strong>是 <strong>最大值</strong> 的子序列数目。由于答案可能很大，将结果对 <code>10<sup>9</sup> + 7</code> 取余后返回。</p>&#10;&#10;<p>一个字符串的子序列指的是从原字符串里面删除一些字符（也可能一个字符也不删除），不改变剩下字符顺序连接得到的新字符串。</p>&#10;&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li><code>f(c)</code> 指的是字符 <code>c</code> 在字符串 <code>s</code> 的出现次数，不是在 k 子序列里的出现次数。</li>&#10;	<li>两个 k 子序列如果有任何一个字符在原字符串中的下标不同，则它们是两个不同的子序列。所以两个不同的 k 子序列可能产生相同的字符串。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;bcca&quot;, k = 2&#10;<b>输出：</b>4&#10;<b>解释：</b><span>s 中我们有 f('a') = 1 ，f('b') = 1 和 f('c') = 2 。</span>&#10;s 的 k 子序列为：&#10;<u><strong>bc</strong></u>ca ，美丽值为 f('b') + f('c') = 3&#10;<u><strong>b</strong></u>c<u><strong>c</strong></u>a ，美丽值为 f('b') + f('c') = 3&#10;<u><strong>b</strong></u>cc<u><strong>a</strong></u> ，美丽值为 f('b') + f('a') = 2&#10;b<u><strong>c</strong></u>c<u><strong>a</strong></u><strong> </strong>，美丽值为 f('c') + f('a') = 3&#10;bc<u><strong>ca</strong></u> ，美丽值为 f('c') + f('a') = 3&#10;总共有 4 个 k 子序列美丽值为最大值 3 。&#10;所以答案为 4 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;abbcd&quot;, k = 4&#10;<b>输出：</b>2&#10;<b>解释：</b><span>s 中我们有 f('a') = 1 ，f('b') = 2 ，f('c') = 1 和</span> f('d') = 1 。&#10;s 的 k 子序列为：&#10;<u><strong>ab</strong></u>b<u><strong>cd</strong></u> ，美丽值为 f('a') + f('b') + f('c') + f('d') = 5&#10;<u><span><b>a</b></span></u>b<u><strong>bcd</strong></u> ，美丽值为 f('a') + f('b') + f('c') + f('d') = 5 &#10;总共有 2 个 k 子序列美丽值为最大值 5 。&#10;所以答案为 2 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= s.length</code></li>&#10;	<li><code>s</code> 只包含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 组合数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>美丽值是子序列中各字符频次之和，且字符须互异。应优先选用频次最高的若干字符。将频次降序排列，严格大于第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 大频次的字符必须全选；并列在阈值上的字符用组合数从中选满剩余名额，再乘以该频次的幂。</p>
</blockquote>
<p>我们先用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字符的出现次数，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 在字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中出现的次数。</p>
<p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 子序列是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的子序列，且字符唯一，因此，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 中不同字符的个数小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么不存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 子序列，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 即可。</p>
<p>否则，要使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 子序列的美丽值最大，我们需要尽可能地让美丽值大的字符尽可能地多地出现在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 子序列中。因此，我们可以对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 中的值进行倒序排序，得到一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>s</mi>
</math></span>。</p>
<p>我们记数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>s</mi>
</math></span> 第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个字符的出现次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>，一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个字符出现的次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>。</p>
<p>那么我们先找出出现次数大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 的字符，将每个字符出现的次数相乘，得到初始答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，剩余的需要选取的字符个数更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。我们需要从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个字符中选取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个字符，因此答案需要乘上组合数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>C</mi>
    <mi>x</mi>
    <mi>k</mi>
  </msubsup>
</math></span>，最后再乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <msup>
    <mi>l</mi>
    <mi>k</mi>
  </msup>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>&#xD7;</mo>
  <msubsup>
    <mi>C</mi>
    <mi>x</mi>
    <mi>k</mi>
  </msubsup>
  <mo>&#xD7;</mo>
  <mi>v</mi>
  <mi>a</mi>
  <msup>
    <mi>l</mi>
    <mi>k</mi>
  </msup>
</math></span>。</p>
<p>注意，这里需要用到快速幂，以及取模操作。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
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
</math></span> 是字符串的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 是字符集。本题中字符集为小写字母，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countKSubsequencesWithMaxBeauty(s string, k int) int {</span></span>
<span class="line"><span>	f := [26]int{}</span></span>
<span class="line"><span>	cnt := 0</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		f[c-'a']++</span></span>
<span class="line"><span>		if f[c-'a'] == 1 {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if cnt &#x3C; k {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vs := []int{}</span></span>
<span class="line"><span>	for _, x := range f {</span></span>
<span class="line"><span>		if x > 0 {</span></span>
<span class="line"><span>			vs = append(vs, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(vs, func(i, j int) bool {</span></span>
<span class="line"><span>		return vs[i] > vs[j]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	ans := 1</span></span>
<span class="line"><span>	val := vs[k-1]</span></span>
<span class="line"><span>	x := 0</span></span>
<span class="line"><span>	for _, v := range vs {</span></span>
<span class="line"><span>		if v == val {</span></span>
<span class="line"><span>			x++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, v := range vs {</span></span>
<span class="line"><span>		if v == val {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		k--</span></span>
<span class="line"><span>		ans = ans * v % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	c := make([][]int, x+1)</span></span>
<span class="line"><span>	for i := range c {</span></span>
<span class="line"><span>		c[i] = make([]int, x+1)</span></span>
<span class="line"><span>		c[i][0] = 1</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= i; j++ {</span></span>
<span class="line"><span>			c[i][j] = (c[i-1][j-1] + c[i-1][j]) % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
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
<span class="line"><span>	ans = (ans * c[x][k] % mod) * qpow(val, k) % mod</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-k-subsequences-of-a-string-with-maximum-beauty" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2842.Count%20K-Subsequences%20of%20a%20String%20With%20Maximum%20Beauty/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2844" tabindex="-1">2844. 生成特殊数字的最少操作 <a class="header-anchor" href="#q-2844" aria-label="Permalink to &quot;2844. 生成特殊数字的最少操作 {#q-2844}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学、字符串、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>num</code> ，表示一个非负整数。</p>&#10;&#10;<p>在一次操作中，您可以选择 <code>num</code> 的任意一位数字并将其删除。请注意，如果你删除 <code>num</code> 中的所有数字，则 <code>num</code> 变为 <code>0</code>。</p>&#10;&#10;<p>返回最少需要多少次操作可以使 <code>num</code> 变成特殊数字。</p>&#10;&#10;<p>如果整数 <code>x</code> 能被 <code>25</code> 整除，则该整数 <code>x</code> 被认为是特殊数字。</p>&#10;&#10;<p> </p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num = &quot;2245047&quot;&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>删除数字 num[5] 和 num[6] ，得到数字 &quot;22450&quot; ，可以被 25 整除。&#10;可以证明要使数字变成特殊数字，最少需要删除 2 位数字。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num = &quot;2908305&quot;&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>删除 num[3]、num[4] 和 num[6] ，得到数字 &quot;2900&quot; ，可以被 25 整除。&#10;可以证明要使数字变成特殊数字，最少需要删除 3 位数字。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num = &quot;10&quot;&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>删除 num[0] ，得到数字 &quot;0&quot; ，可以被 25 整除。&#10;可以证明要使数字变成特殊数字，最少需要删除 1 位数字。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= num.length &lt;= 100</code></li>&#10;	<li><code>num</code> 仅由数字 <code>'0'</code> 到 <code>'9'</code> 组成</li>&#10;	<li><code>num</code> 不含任何前导零</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：记忆化搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
</math></span> 整除即模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，允许删除任意位。从左到右决定保留或删除当前位， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 表示处理到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位、当前余数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时的最少删除次数；删则余数不变，留则余数变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#x22C5;</mo>
  <mn>10</mn>
  <mo>+</mo>
  <mi>d</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>25</mn>
</math></span>。</p>
</blockquote>
<p>我们注意到，整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 要能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
</math></span> 整除，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>25</mn>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。因此，我们可以设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位开始，且当前数字模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
</math></span> 的结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的情况下，要使得数字变成特殊数字，最少需要删除多少位数字。那么答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行逻辑如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span>，即已经处理完字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的所有位，那么如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，则当前数字可以被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>25</mn>
</math></span> 整除，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>；</li>
<li>否则，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位可以被删除，此时需要删除一位，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>；第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位不删除，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的值变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mn>10</mn>
  <mo>+</mo>
  <mtext mathvariant="italic">num</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>25</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mn>10</mn>
  <mo>+</mo>
  <mtext mathvariant="italic">num</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>25</mn>
  <mo stretchy="false">)</mo>
</math></span>。取这两者的最小值即可。</li>
</ul>
<p>为了防止重复计算，我们可以使用记忆化的方法优化时间复杂度。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mn>25</mn>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mn>25</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumOperations(num string) int {</span></span>
<span class="line"><span>	n := len(num)</span></span>
<span class="line"><span>	f := make([][25]int, n)</span></span>
<span class="line"><span>	for i := range f {</span></span>
<span class="line"><span>		for j := range f[i] {</span></span>
<span class="line"><span>			f[i][j] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(i, k int) int</span></span>
<span class="line"><span>	dfs = func(i, k int) int {</span></span>
<span class="line"><span>		if i == n {</span></span>
<span class="line"><span>			if k == 0 {</span></span>
<span class="line"><span>				return 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return n</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if f[i][k] != -1 {</span></span>
<span class="line"><span>			return f[i][k]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		f[i][k] = dfs(i+1, k) + 1</span></span>
<span class="line"><span>		f[i][k] = min(f[i][k], dfs(i+1, (k*10+int(num[i]-'0'))%25))</span></span>
<span class="line"><span>		return f[i][k]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, 0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-make-a-special-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2844.Minimum%20Operations%20to%20Make%20a%20Special%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2847" tabindex="-1">2847. 给定数字乘积的最小数字 🔒 <a class="header-anchor" href="#q-2847" aria-label="Permalink to &quot;2847. 给定数字乘积的最小数字 🔒 {#q-2847}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 <strong>正</strong> 整数 <code>n</code>。</p>&#10;&#10;<p>返回一个字符串，表示使其各位数字的乘积等于 <code>n</code> 的 <strong>最小正整数</strong>，如果不存在这样的数字，则返回 <code>&quot;-1&quot;</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><b>示例 1：</b></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 105&#10;<b>输出：</b>&quot;357&quot;&#10;<b>解释：</b>3 * 5 * 7 = 105。可以证明，357 是各位数字的乘积等于 105 的最小数字。因此答案为 &quot;357&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 7&#10;<b>输出：</b>&quot;7&quot;&#10;<b>解释：</b>由于 7 只有一位数字，其各位数字的乘积为 7。由于数字 1 到 6 的乘积分别为 1 到 6，所以答案为 &quot;7&quot;。可以证明 7 是乘积等于 7 的最小数字。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>n = 44&#10;<b>输出：</b>&quot;-1&quot;&#10;<b>解释：</b>可以证明，没有数字的各位数字乘积等于 44。因此答案为 &quot;-1&quot;。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>15</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：质因数分解 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>所求数的各位之积为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，且字典序最小。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 含大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的质因子则无解。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 尽量拆出较大数位，再从小到大拼接，以保证位数最少且字典序最小； <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 时答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们考虑对数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 进行质因数分解，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的质因数中存在大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的质数，那么一定无法找到符合条件的数字，因为大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的质数无法通过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的数字相乘得到，例如 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>11</mn>
</math></span> 无法通过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的数字相乘得到，因此我们只需要考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的质因数中是否存在大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的质数即可，如果存在，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>否则，如果质因数中包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>，那么数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 首先可以拆分为若干个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>，两个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 可以合成一个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，三个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 可以合成一个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>，数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 和数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 可以合成一个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>6</mn>
</math></span>，因此我们只需要将数字拆分为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mn>.9</mn>
  <mo stretchy="false">]</mo>
</math></span> 的数字即可，我们可以使用贪心的方法，优先拆分出数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，然后拆分出数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>8</mn>
</math></span>，依次类推。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestNumber(n int64) string {</span></span>
<span class="line"><span>	cnt := [10]int{}</span></span>
<span class="line"><span>	for i := 9; i > 1; i-- {</span></span>
<span class="line"><span>		for n%int64(i) == 0 {</span></span>
<span class="line"><span>			cnt[i]++</span></span>
<span class="line"><span>			n /= int64(i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if n != 1 {</span></span>
<span class="line"><span>		return "-1"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sb := &#x26;strings.Builder{}</span></span>
<span class="line"><span>	for i := 2; i &#x3C; 10; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; cnt[i]; j++ {</span></span>
<span class="line"><span>			sb.WriteByte(byte(i) + '0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := sb.String()</span></span>
<span class="line"><span>	if len(ans) > 0 {</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return "1"</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/smallest-number-with-given-digit-product" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2847.Smallest%20Number%20With%20Given%20Digit%20Product/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2856" tabindex="-1">2856. 删除数对后的最小数组长度 <a class="header-anchor" href="#q-2856" aria-label="Permalink to &quot;2856. 删除数对后的最小数组长度 {#q-2856}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、双指针、二分查找、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的 <strong>非递减</strong> 整数数组 <code>nums</code> 。</p>&#10;&#10;<p>你可以执行以下操作任意次：</p>&#10;&#10;<ul>&#10;	<li>选择 <strong>两个 </strong>下标 <code>i</code> 和 <code>j</code> ，满足 <code>nums[i] &lt; nums[j]</code> 。</li>&#10;	<li>将 <code>nums</code> 中下标在 <code>i</code> 和 <code>j</code> 处的元素删除。剩余元素按照原来的顺序组成新的数组，下标也重新从 <strong>0</strong> 开始编号。</li>&#10;</ul>&#10;&#10;<p>请你返回一个整数，表示执行以上操作任意次后（可以执行 <strong>0</strong> 次），<code>nums</code> 数组的 <strong>最小</strong> 数组长度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [1,2,3,4]</span></p>&#10;&#10;<p><strong>输出：</strong><span>0</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2800-2899/2856.Minimum%20Array%20Length%20After%20Pair%20Removals/images/1716779983-AHhkVn-tcase1.gif" loading="lazy"></p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [1,1,2,2,3,3]</span></p>&#10;&#10;<p><strong>输出：</strong><span>0</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2800-2899/2856.Minimum%20Array%20Length%20After%20Pair%20Removals/images/1716779979-GyQhVf-tcase2.gif" loading="lazy"></p>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [1000000000,1000000000]</span></p>&#10;&#10;<p><strong>输出：</strong><span>2</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>由于两个数字相等，不能删除它们。</p>&#10;</div>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [2,3,4,4,4]</span></p>&#10;&#10;<p><strong>输出：</strong><span>1</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2800-2899/2856.Minimum%20Array%20Length%20After%20Pair%20Removals/images/1716779940-qRRlHk-tcase3.gif" loading="lazy"></p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>nums</code> 是 <strong>非递减</strong> 数组。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次删除两个不同的数。剩余长度由出现次数最多的值决定：若某值次数超过半数，删完其它数后它仍会剩下。用大根堆反复取出两个最大频次各减一，模拟配对过程，也可得到同一结果。</p>
</blockquote>
<p>我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中每个元素的出现次数，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中的每个值加入一个优先队列（大根堆） <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 中。每次从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 中取出两个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，将它们的值减一，如果减一后的值仍大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则将减一后的值重新加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span>。每次从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 中取出两个元素，表示将数组中的两个数对删除，因此数组的长度减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 的大小小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 时，停止删除操作。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minLengthAfterRemovals(nums []int) int {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	h := &#x26;hp{}</span></span>
<span class="line"><span>	for _, x := range cnt {</span></span>
<span class="line"><span>		h.push(x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := len(nums)</span></span>
<span class="line"><span>	for h.Len() > 1 {</span></span>
<span class="line"><span>		x, y := h.pop(), h.pop()</span></span>
<span class="line"><span>		if x > 1 {</span></span>
<span class="line"><span>			h.push(x - 1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if y > 1 {</span></span>
<span class="line"><span>			h.push(y - 1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans -= 2</span></span>
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
<span class="line"><span>}</span></span>
<span class="line"><span>func (h *hp) push(v int) { heap.Push(h, v) }</span></span>
<span class="line"><span>func (h *hp) pop() int   { return heap.Pop(h).(int) }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-array-length-after-pair-removals" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2800-2899/2856.Minimum%20Array%20Length%20After%20Pair%20Removals/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=a(e,[["render",p]]);export{d as __pageData,w as default};
