import{_ as a,a as s,c as t,b as m}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 二分查找（3）","description":"二分查找分类，第 1099–1712 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 二分查找（3）","description":"二分查找分类，第 1099–1712 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"二分查找分类，第 1099–1712 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 二分查找（2）","link":"/principles/algorithms/leetcode-go/binary-search-02"},"next":{"text":"LeetCode Go · 二分查找（4）","link":"/principles/algorithms/leetcode-go/binary-search-04"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 二分查找（2）","link":"/principles/algorithms/leetcode-go/binary-search-02"},"next":{"text":"LeetCode Go · 二分查找（4）","link":"/principles/algorithms/leetcode-go/binary-search-04"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/binary-search-03.md","filePath":"principles/algorithms/leetcode-go/binary-search-03.md"}'),e={name:"principles/algorithms/leetcode-go/binary-search-03.md"};function o(p,n,l,i,h,c){return s(),t("div",null,[...n[0]||(n[0]=[m("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-二分查找-3" tabindex="-1">LeetCode Go · 二分查找（3） <a class="header-anchor" href="#leetcode-go-·-二分查找-3" aria-label="Permalink to &quot;LeetCode Go · 二分查找（3）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-1099" tabindex="-1">1099. 小于 K 的两数之和 🔒 <a class="header-anchor" href="#q-1099" aria-label="Permalink to &quot;1099. 小于 K 的两数之和 🔒 {#q-1099}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和整数 <code>k</code> ，返回最大和 <code>sum</code> ，满足存在 <code>i &lt; j</code> 使得 <code>nums[i] + nums[j] = sum</code> 且 <code>sum &lt; k</code> 。如果没有满足此等式的 <code>i,j</code> 存在，则返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [34,23,1,24,75,33,54,8], k = 60&#10;<strong>输出：</strong>58&#10;<strong>解释：</strong>&#10;34 和 24 相加得到 58，58 小于 60，满足题意。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [10,20,30], k = 15&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>&#10;我们无法找到和小于 15 的两个元素。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= k &lt;= 2000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的最大两数之和，枚举一对是平方级。排序后对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 找小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 的最大右端，可用二分。</p>
<p>对下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 上 <code v-pre>bisect_left</code> 定位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>，前一个位置若仍大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 则更新答案。</p>
<p>无合法对时保持 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们可以先对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 进行排序，初始化答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>接下来，我们枚举数组中的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，并在数组中寻找满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>k</mi>
</math></span> 的最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。这里我们可以使用二分查找来加速寻找过程。如果找到了这样的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么我们就可以更新答案，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>枚举结束后，返回答案即可。</p>
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
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func twoSumLessThanK(nums []int, k int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	ans := -1</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		j := sort.SearchInts(nums[i+1:], k-x) + i</span></span>
<span class="line"><span>		if v := nums[i] + nums[j]; i &#x3C; j &#x26;&#x26; ans &#x3C; v {</span></span>
<span class="line"><span>			ans = v</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：排序 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 一次二分共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。两端相向是同一单调性：和偏小则左端右移以增大，和达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 则右端左移。</p>
<p>双指针一次扫完所有互异下标对的帕累托前沿，常数更小。</p>
</blockquote>
<p>与方法一类似，我们可以先对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 进行排序，初始化答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>接下来，我们使用双指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 分别指向数组的左右两端，每次判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
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
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 是否小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，如果小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，那么我们就可以更新答案，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo stretchy="false">)</mo>
</math></span>，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 右移一位，否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 左移一位。</p>
<p>枚举结束后，返回答案即可。</p>
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
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func twoSumLessThanK(nums []int, k int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	ans := -1</span></span>
<span class="line"><span>	for i, j := 0, len(nums)-1; i &#x3C; j; {</span></span>
<span class="line"><span>		if s := nums[i] + nums[j]; s &#x3C; k {</span></span>
<span class="line"><span>			ans = max(ans, s)</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			j--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/two-sum-less-than-k" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1099.Two%20Sum%20Less%20Than%20K/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1150" tabindex="-1">1150. 检查一个数是否在数组中占绝大多数 🔒 <a class="header-anchor" href="#q-1150" aria-label="Permalink to &quot;1150. 检查一个数是否在数组中占绝大多数 🔒 {#q-1150}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出一个按 <strong>非递减</strong> 顺序排列的数组 <code>nums</code>，和一个目标数值 <code>target</code>。假如数组 <code>nums</code> 中绝大多数元素的数值都等于 <code>target</code>，则返回 <code>True</code>，否则请返回 <code>False</code>。</p>&#10;&#10;<p>所谓占绝大多数，是指在长度为 <code>N</code> 的数组中出现必须<strong> 超过 <code>N/2</code></strong> <strong>次</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,4,5,5,5,5,5,6,6], target = 5&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>&#10;数字 5 出现了 5 次，而数组的长度为 9。&#10;所以，5 在数组中占绝大多数，因为 5 次 > 9/2。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [10,100,101,101], target = 101&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>&#10;数字 101 出现了 2 次，而数组的长度是 4。&#10;所以，101 <strong>不是 </strong>数组占绝大多数的元素，因为 2 次 = 4/2。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10^9</code></li>&#10;	<li><code>1 &lt;= target &lt;= 10^9</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有序数组中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的出现次数等于其左右边界之差。两次二分分别得第一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 与第一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&gt;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的下标，差大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 则为多数元素。线性计数在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 较大时没有必要。</p>
</blockquote>
<p>我们注意到，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的元素是非递减的，也就是说，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的元素单调递增。因此，我们可以使用二分查找的方法，找到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的元素的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span>，以及第一个大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的元素的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>&gt;</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
</math></span>，则说明数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 出现的次数超过了数组长度的一半，因此返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>u</mi>
  <mi>e</mi>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mi>e</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isMajorityElement(nums []int, target int) bool {</span></span>
<span class="line"><span>	left := sort.SearchInts(nums, target)</span></span>
<span class="line"><span>	right := sort.SearchInts(nums, target+1)</span></span>
<span class="line"><span>	return right-left > len(nums)/2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：二分查找（优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用两次二分定位区间。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 出现超过一半，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 处仍应等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>。一次 <code v-pre>bisect_left</code> 后再做一次下标检查即可，少一次二分。</p>
</blockquote>
<p>方法一中，我们使用了两次二分查找，分别找到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的元素的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span>，以及第一个大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的元素的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span>。但是，我们可以使用一次二分查找，找到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的元素的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span>，然后判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>+</mo>
  <mfrac>
    <mi>n</mi>
    <mn>2</mn>
  </mfrac>
  <mo stretchy="false">]</mo>
</math></span> 是否等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，如果相等，说明数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 出现的次数超过了数组长度的一半，因此返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>u</mi>
  <mi>e</mi>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mi>e</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isMajorityElement(nums []int, target int) bool {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	left := sort.SearchInts(nums, target)</span></span>
<span class="line"><span>	right := left + n/2</span></span>
<span class="line"><span>	return right &#x3C; n &#x26;&#x26; nums[right] == target</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-if-a-number-is-majority-element-in-a-sorted-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1150.Check%20If%20a%20Number%20Is%20Majority%20Element%20in%20a%20Sorted%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1170" tabindex="-1">1170. 比较字符串最小字母出现频次 <a class="header-anchor" href="#q-1170" aria-label="Permalink to &quot;1170. 比较字符串最小字母出现频次 {#q-1170}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>定义一个函数 <code>f(s)</code>，统计 <code>s</code>  中<strong>（按字典序比较）最小字母的出现频次</strong> ，其中 <code>s</code> 是一个非空字符串。</p>&#10;&#10;<p>例如，若 <code>s = &quot;dcce&quot;</code>，那么 <code>f(s) = 2</code>，因为字典序最小字母是 <code>&quot;c&quot;</code>，它出现了 2 次。</p>&#10;&#10;<p>现在，给你两个字符串数组待查表 <code>queries</code> 和词汇表 <code>words</code> 。对于每次查询 <code>queries[i]</code> ，需统计 <code>words</code> 中满足 <code>f(queries[i])</code> &lt; <code>f(W)</code> 的<strong> 词的数目</strong> ，<code>W</code> 表示词汇表 <code>words</code> 中的每个词。</p>&#10;&#10;<p>请你返回一个整数数组 <code>answer</code> 作为答案，其中每个 <code>answer[i]</code> 是第 <code>i</code> 次查询的结果。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>queries = [&quot;cbd&quot;], words = [&quot;zaaaz&quot;]&#10;<strong>输出：</strong>[1]&#10;<strong>解释：</strong>查询 f(&quot;cbd&quot;) = 1，而 f(&quot;zaaaz&quot;) = 3 所以 f(&quot;cbd&quot;) &lt; f(&quot;zaaaz&quot;)。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>queries = [&quot;bbb&quot;,&quot;cc&quot;], words = [&quot;a&quot;,&quot;aa&quot;,&quot;aaa&quot;,&quot;aaaa&quot;]&#10;<strong>输出：</strong>[1,2]&#10;<strong>解释：</strong>第一个查询 f(&quot;bbb&quot;) &lt; f(&quot;aaaa&quot;)，第二个查询 f(&quot;aaa&quot;) 和 f(&quot;aaaa&quot;) 都 > f(&quot;cc&quot;)。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= queries.length &lt;= 2000</code></li>&#10;	<li><code>1 &lt;= words.length &lt;= 2000</code></li>&#10;	<li><code>1 &lt;= queries[i].length, words[i].length &lt;= 10</code></li>&#10;	<li><code>queries[i][j]</code>、<code>words[i][j]</code> 都由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个查询要数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 值严格更大的个数。对每个查询扫描全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>q</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。先把每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>w</mi>
  <mo stretchy="false">)</mo>
</math></span> 算出并排序，查询时二分第一个大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>q</mi>
  <mo stretchy="false">)</mo>
</math></span> 的位置，右侧长度即为答案。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 只依赖最小字母的次数，对短串线性可求。</p>
</blockquote>
<p>我们先按照题目描述，实现函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>，函数返回字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中按字典序比较最小字母的出现频次。</p>
<p>接下来，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中的每个字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 都计算出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>w</mi>
  <mo stretchy="false">)</mo>
</math></span>，并将其排序，存放在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中。</p>
<p>然后，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 中的每个字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中二分查找第一个大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>q</mi>
  <mo stretchy="false">)</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 及其后面的元素都满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>q</mi>
  <mo stretchy="false">)</mo>
  <mo>&lt;</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>W</mi>
  <mo stretchy="false">)</mo>
</math></span>，那么当前查询的答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>q</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是字符串的最大长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numSmallerByFrequency(queries []string, words []string) (ans []int) {</span></span>
<span class="line"><span>	f := func(s string) int {</span></span>
<span class="line"><span>		cnt := [26]int{}</span></span>
<span class="line"><span>		for _, c := range s {</span></span>
<span class="line"><span>			cnt[c-'a']++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for _, x := range cnt {</span></span>
<span class="line"><span>			if x > 0 {</span></span>
<span class="line"><span>				return x</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(words)</span></span>
<span class="line"><span>	nums := make([]int, n)</span></span>
<span class="line"><span>	for i, w := range words {</span></span>
<span class="line"><span>		nums[i] = f(w)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	for _, q := range queries {</span></span>
<span class="line"><span>		x := f(q)</span></span>
<span class="line"><span>		ans = append(ans, n-sort.SearchInts(nums, x+1))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/compare-strings-by-frequency-of-the-smallest-character" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1170.Compare%20Strings%20by%20Frequency%20of%20the%20Smallest%20Character/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1198" tabindex="-1">1198. 找出所有行中最小公共元素 🔒 <a class="header-anchor" href="#q-1198" aria-label="Permalink to &quot;1198. 找出所有行中最小公共元素 🔒 {#q-1198}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、二分查找、计数、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m x n</code> 的矩阵 <code>mat</code>，其中每一行的元素均符合 <strong>严格递增</strong> 。请返回 <em>所有行中的 <strong>最小公共元素</strong> </em>。</p>&#10;&#10;<p>如果矩阵中没有这样的公共元素，就请返回 <code>-1</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]&#10;<strong>输出：</strong>5&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>mat = [[1,2,3],[2,3,4],[2,3,5]]&#10;<strong>输出：</strong> 2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == mat.length</code></li>&#10;	<li><code>n == mat[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 500</code></li>&#10;	<li><code>1 &lt;= mat[i][j] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>mat[i]</code> 已按严格递增顺序排列。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每行严格递增，故同一数字在一行至多一次。按行扫描并计数，某值次数到达行数即出现在每一行。行内从左到右保证较小值先被加满，因此第一次凑齐行数的值就是最小公共元素；若无则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10001</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计每个数出现的次数。顺序遍历矩阵中的每个数，将其出现次数加一。当某个数的出现次数等于矩阵的行数时，说明该数在每一行都出现过，即为最小公共元素，返回该数即可。</p>
<p>若遍历结束后没有找到最小公共元素，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestCommonElement(mat [][]int) int {</span></span>
<span class="line"><span>	cnt := [10001]int{}</span></span>
<span class="line"><span>	for _, row := range mat {</span></span>
<span class="line"><span>		for _, x := range row {</span></span>
<span class="line"><span>			cnt[x]++</span></span>
<span class="line"><span>			if cnt[x] == len(mat) {</span></span>
<span class="line"><span>				return x</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-smallest-common-element-in-all-rows" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1198.Find%20Smallest%20Common%20Element%20in%20All%20Rows/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1201" tabindex="-1">1201. 丑数 III <a class="header-anchor" href="#q-1201" aria-label="Permalink to &quot;1201. 丑数 III {#q-1201}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、二分查找、组合数学、最大公约数、数论、容斥原理、欧几里得算法、最小公倍数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>丑数是可以被 <code>a</code> <strong>或</strong> <code>b</code> <strong>或</strong> <code>c</code> 整除的 <strong>正整数</strong> 。</p>&#10;&#10;<p>给你四个整数：<code>n</code> 、<code>a</code> 、<code>b</code> 、<code>c</code> ，请你设计一个算法来找出第 <code>n</code> 个丑数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3, a = 2, b = 3, c = 5&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>丑数序列为 2, 3, 4, 5, 6, 8, 9, 10... 其中第 3 个是 4。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 4, a = 2, b = 3, c = 4&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>丑数序列为 2, 3, 4, 6, 8, 9, 10, 12... 其中第 4 个是 6。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, a = 2, b = 11, c = 13&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>丑数序列为 2, 4, 6, 8, 10, 11, 12, 13... 其中第 5 个是 10。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n, a, b, c &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= a * b * c &lt;= 10<sup>18</sup></code></li>&#10;	<li>本题结果在 <code>[1, 2 * 10<sup>9</sup>]</code> 的范围内</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 + 容斥原理 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按从小到大枚举丑数需要生成约 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个候选， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，无法在时限内完成。</p>
<p>小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的丑数个数随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 单调不减，因此第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个丑数是使该计数至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的最小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。计数本身可用容斥在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 内求出：并上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>c</mi>
</math></span> 的倍数，再减去两两最小公倍数的倍数，加上三者最小公倍数的倍数。</p>
<p>为此在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo stretchy="false">]</mo>
</math></span> 上二分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，中点用容斥判断是否已覆盖至少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个丑数。答案范围由题目保证，无需枚举具体丑数。</p>
</blockquote>
<p>我们可以将题目转换为：找到最小的正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，使得小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的丑数个数恰好为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个。</p>
<p>对于一个正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mi>a</mi>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mi>b</mi>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mi>c</mi>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 同时整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 同时整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>c</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 同时整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>b</mi>
        <mo>,</mo>
        <mi>c</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span> 个，能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 同时整除的数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo>,</mo>
        <mi>c</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span> 个。根据容斥原理，小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的丑数个数为：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mi>a</mi>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>+</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mi>b</mi>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>+</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mi>c</mi>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>&#x2212;</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>&#x2212;</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>c</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>&#x2212;</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>b</mi>
        <mo>,</mo>
        <mi>c</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
  <mo>+</mo>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>l</mi>
        <mi>c</mi>
        <mi>m</mi>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo>,</mo>
        <mi>c</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span><p>我们可以使用二分查找的方法找到最小的正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，使得小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的丑数个数恰好为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个。</p>
<p>定义二分查找的左边界为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，右边界为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span> 是题目给定的最大值。在二分查找的每一步中，我们找出中间数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，如果小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的丑数个数大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，那么说明最小的正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
</math></span> 区间内，否则落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 区间内。在二分查找的过程中，我们需要不断更新小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的丑数个数，直到找到最小的正整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func nthUglyNumber(n int, a int, b int, c int) int {</span></span>
<span class="line"><span>	ab, bc, ac := lcm(a, b), lcm(b, c), lcm(a, c)</span></span>
<span class="line"><span>	abc := lcm(ab, c)</span></span>
<span class="line"><span>	var l, r int = 1, 2e9</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r) >> 1</span></span>
<span class="line"><span>		if mid/a+mid/b+mid/c-mid/ab-mid/bc-mid/ac+mid/abc >= n {</span></span>
<span class="line"><span>			r = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			l = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return l</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func gcd(a, b int) int {</span></span>
<span class="line"><span>	if b == 0 {</span></span>
<span class="line"><span>		return a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return gcd(b, a%b)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func lcm(a, b int) int {</span></span>
<span class="line"><span>	return a * b / gcd(a, b)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/ugly-number-iii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1201.Ugly%20Number%20III/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1208" tabindex="-1">1208. 尽可能使字符串相等 <a class="header-anchor" href="#q-1208" aria-label="Permalink to &quot;1208. 尽可能使字符串相等 {#q-1208}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：字符串、二分查找、前缀和、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个长度相同的字符串，<code>s</code> 和 <code>t</code>。</p>&#10;&#10;<p>将 <code>s</code> 中的第 <code>i</code> 个字符变到 <code>t</code> 中的第 <code>i</code> 个字符需要 <code>|s[i] - t[i]|</code> 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。</p>&#10;&#10;<p>用于变更字符串的最大预算是 <code>maxCost</code>。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。</p>&#10;&#10;<p>如果你可以将 <code>s</code> 的子字符串转化为它在 <code>t</code> 中对应的子字符串，则返回可以转化的最大长度。</p>&#10;&#10;<p>如果 <code>s</code> 中没有子字符串可以转化成 <code>t</code> 中对应的子字符串，则返回 <code>0</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;, t = &quot;bcdf&quot;, maxCost = 3&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>s<strong> </strong>中的<strong> </strong>&quot;abc&quot; 可以变为 &quot;bcd&quot;。开销为 3，所以最大长度为 3。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;, t = &quot;cdef&quot;, maxCost = 3&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>s 中的任一字符要想变成 t 中对应的字符，其开销都是 2。因此，最大长度为<code> 1。</code>&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;, t = &quot;acde&quot;, maxCost = 0&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>a -> a, cost = 0，字符串未发生变化，所以最大长度为 1。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>t.length == s.length</code></li>&#10;	<li><code>0 &lt;= maxCost &lt;= 10<sup>6</sup></code></li>&#10;	<li><code>s</code> 和 <code>t</code> 都只含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子串费用是对应位置 ASCII 差的绝对值和。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，枚举全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 子串不可行。</p>
<p>固定长度时，存在费用不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>C</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span> 的子串具有单调性：长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 可行则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 也可行。任意区间费用可由前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 求出。</p>
<p>为此先建差分数组的前缀和，再对长度二分，并用滑动窗口式枚举验证。二分利用单调性，前缀和去掉内层求和。</p>
</blockquote>
<p>我们可以创建一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符与字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符的 ASCII 码值的差的绝对值之和。这样，我们就可以通过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 来计算字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个字符的 ASCII 码值的差的绝对值之和，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>&#x2264;</mo>
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>n</mi>
</math></span>。</p>
<p>注意到长度具有单调性，即如果存在长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的子串满足条件，那么长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的子串也一定满足条件。因此，我们可以使用二分查找的方法来求解最大长度。</p>
<p>我们定义函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>k</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示是否存在长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的子串满足条件。在该函数中，我们只需要枚举所有长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的子串，判断其是否满足条件即可。如果存在满足条件的子串，那么函数返回 <code v-pre>true</code>，否则返回 <code v-pre>false</code>。</p>
<p>接下来，我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。在每一步中，我们令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>=</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
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
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>，如果函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>k</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">)</mo>
</math></span> 的返回值为 <code v-pre>true</code>，那么我们将左边界更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，否则我们将右边界更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。在二分查找结束后，我们得到的左边界即为答案。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func equalSubstring(s string, t string, maxCost int) int {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	f := make([]int, n+1)</span></span>
<span class="line"><span>	for i, a := range s {</span></span>
<span class="line"><span>		f[i+1] = f[i] + abs(int(a)-int(t[i]))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	check := func(x int) bool {</span></span>
<span class="line"><span>		for i := 0; i+x-1 &#x3C; n; i++ {</span></span>
<span class="line"><span>			if f[i+x]-f[i] &#x3C;= maxCost {</span></span>
<span class="line"><span>				return true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	l, r := 0, n</span></span>
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
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一额外需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 前缀数组，总时间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。费用非负，窗口右端右移时费用只增，左端右移时费用只减，因此可用双指针在一次扫描中维护最大可行窗口，线性时间且常数空间。</p>
</blockquote>
<p>我们可以维护两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>r</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>；维护一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
</math></span>，表示下标区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
</math></span> 之间的 ASCII 码值的差的绝对值之和。在每一步中，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 向右移动一位，然后更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">cost</mtext>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
  <mo>&gt;</mo>
  <mtext mathvariant="italic">maxCost</mtext>
</math></span>，那么我们就循环将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 向右移动一位，并且减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
</math></span> 的值，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">maxCost</mtext>
</math></span>。然后我们更新答案，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<p>最后返回答案即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func equalSubstring(s string, t string, maxCost int) (ans int) {</span></span>
<span class="line"><span>	var cost, l int</span></span>
<span class="line"><span>	for r := range s {</span></span>
<span class="line"><span>		cost += abs(int(s[r]) - int(t[r]))</span></span>
<span class="line"><span>		for ; cost > maxCost; l++ {</span></span>
<span class="line"><span>			cost -= abs(int(s[l]) - int(t[l]))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, r-l+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：双指针的另一种写法 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法二在费用超标时可能把窗口缩短后再拉长，并显式维护答案。题目只要最大长度，可让左指针至多前进、窗口单调变长，最终 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
</math></span> 即为该最大长度，省去对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 的更新。</p>
</blockquote>
<p>在方法二中，双指针维护的区间可能变短，也可能变长，由于题目只需要求出最大长度，我们可以维护一个单调变长的区间。</p>
<p>具体地，我们用两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 指向区间的左右端点，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>r</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。在每一步中，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 向右移动一位，然后更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">cost</mtext>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mo stretchy="false">]</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
  <mo>&gt;</mo>
  <mtext mathvariant="italic">maxCost</mtext>
</math></span>，那么我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 向右移动一位，并且减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
</math></span> 的值。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func equalSubstring(s string, t string, maxCost int) int {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	var cost, l int</span></span>
<span class="line"><span>	for r := range s {</span></span>
<span class="line"><span>		cost += abs(int(s[r]) - int(t[r]))</span></span>
<span class="line"><span>		if cost > maxCost {</span></span>
<span class="line"><span>			cost -= abs(int(s[l]) - int(t[l]))</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n - l</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/get-equal-substrings-within-budget" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1208.Get%20Equal%20Substrings%20Within%20Budget/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1213" tabindex="-1">1213. 三个有序数组的交集 🔒 <a class="header-anchor" href="#q-1213" aria-label="Permalink to &quot;1213. 三个有序数组的交集 🔒 {#q-1213}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、二分查找、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出三个均为 <strong>严格递增排列 </strong>的整数数组 <code>arr1</code>，<code>arr2</code> 和 <code>arr3</code>。返回一个由 <strong>仅 </strong>在这三个数组中 <strong>同时出现 </strong>的整数所构成的有序数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]&#10;<strong>输出: </strong>[1,5]&#10;<strong>解释: </strong>只有 1 和 5 同时在这三个数组中出现.&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]&#10;<strong>输出: </strong>[]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr1.length, arr2.length, arr3.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= arr1[i], arr2[i], arr3[i] &lt;= 2000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三数组均已有序且长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>，值域在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2000</mn>
</math></span> 以内。将三个数组一并计数后，值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的元素即公共元素；因各数组内部元素互不相同，该计数不会被同一数组重复抬高。按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 的顺序输出即可保持升序。</p>
</blockquote>
<p>遍历三个数组，统计每个数字出现的次数，然后遍历任意一个数组，若某个数字出现的次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，则将其加入结果数组。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
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
</math></span> 分别为数组的长度和数组中数字的范围。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func arraysIntersection(arr1 []int, arr2 []int, arr3 []int) (ans []int) {</span></span>
<span class="line"><span>	cnt := [2001]int{}</span></span>
<span class="line"><span>	for _, x := range arr1 {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range arr2 {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range arr3 {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>		if cnt[x] == 3 {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>计数需要与值域成正比的额外数组。三个数组已有序，可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>3</mn>
</math></span> 上二分判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 的每个值是否存在，额外空间降为常数，时间变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>遍历第一个数组，对于其中的每个数字，使用二分查找在第二个数组和第三个数组中查找该数字，若都找到，则将该数字加入结果数组。</p>
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
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func arraysIntersection(arr1 []int, arr2 []int, arr3 []int) (ans []int) {</span></span>
<span class="line"><span>	for _, x := range arr1 {</span></span>
<span class="line"><span>		i := sort.SearchInts(arr2, x)</span></span>
<span class="line"><span>		j := sort.SearchInts(arr3, x)</span></span>
<span class="line"><span>		if i &#x3C; len(arr2) &#x26;&#x26; j &#x3C; len(arr3) &#x26;&#x26; arr2[i] == x &#x26;&#x26; arr3[j] == x {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/intersection-of-three-sorted-arrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1213.Intersection%20of%20Three%20Sorted%20Arrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1231" tabindex="-1">1231. 分享巧克力 🔒 <a class="header-anchor" href="#q-1231" aria-label="Permalink to &quot;1231. 分享巧克力 🔒 {#q-1231}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一大块巧克力，它由一些甜度不完全相同的小块组成。我们用数组 <code>sweetness</code> 来表示每一小块的甜度。</p>&#10;&#10;<p>你打算和 <code>K</code> 名朋友一起分享这块巧克力，所以你需要将切割 <code>K</code> 次才能得到 <code>K+1</code> 块，每一块都由一些 <strong>连续 </strong>的小块组成。</p>&#10;&#10;<p>为了表现出你的慷慨，你将会吃掉 <strong>总甜度最小</strong> 的一块，并将其余几块分给你的朋友们。</p>&#10;&#10;<p>请找出一个最佳的切割策略，使得你所分得的巧克力 <strong>总甜度最大</strong>，并返回这个 <strong>最大总甜度</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>sweetness = [1,2,3,4,5,6,7,8,9], K = 5&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>你可以把巧克力分成 [1,2,3], [4,5], [6], [7], [8], [9]。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>sweetness = [5,6,7,8,9,1,2,3,4], K = 8&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>只有一种办法可以把巧克力分成 9 块。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>sweetness = [1,2,2,1,2,2,1,2,2], K = 2&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>你可以把巧克力分成 [1,2,2], [1,2,2], [1,2,2]。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= K &lt; sweetness.length &lt;= 10^4</code></li>&#10;	<li><code>1 &lt;= sweetness[i] &lt;= 10^5</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要把巧克力分成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 段并最大化自己那一段的最小甜度。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举切点不可行。若最小甜度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 可达，则更小的阈值也可达，具有单调性。</p>
<p>判定时从左到右累加，每凑满 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 就切一刀；能切出多于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 段（自己再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 位朋友）则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 可行。在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mi>s</mi>
  <mi>w</mi>
  <mi>e</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
</math></span> 上二分最大可行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。贪心切分保证判定正确：尽早成段只会留下更多剩余去凑后面的段。</p>
</blockquote>
<p>我们注意到，如果我们能吃到一块甜度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的巧克力，那么甜度小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的巧克力也都能吃到。这存在着单调性，因此，我们可以使用二分查找，找到最大的满足条件的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
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
  <mi>s</mi>
  <mi>w</mi>
  <mi>e</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。每一次，我们取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 的中间值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，然后判断能否吃到一块甜度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的巧克力。如果能吃到，那么我们就尝试吃掉甜度更大的巧克力，即令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>；否则，我们就尝试吃掉甜度更小的巧克力，即令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。在二分查找结束后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 即可。</p>
<p>问题的关键在于，我们如何判断能否吃到一块甜度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的巧克力。我们可以使用贪心的思想，从左到右遍历数组，每次累加当前的甜度，当累加的甜度大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 时，那么巧克力数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并将累加的甜度清零。最后判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 是否大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
  <mi>s</mi>
  <mi>w</mi>
  <mi>e</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mi>n</mi>
  <mi>e</mi>
  <mi>s</mi>
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
</math></span> 是数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximizeSweetness(sweetness []int, k int) int {</span></span>
<span class="line"><span>	l, r := 0, 0</span></span>
<span class="line"><span>	for _, v := range sweetness {</span></span>
<span class="line"><span>		r += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	check := func(x int) bool {</span></span>
<span class="line"><span>		s, cnt := 0, 0</span></span>
<span class="line"><span>		for _, v := range sweetness {</span></span>
<span class="line"><span>			s += v</span></span>
<span class="line"><span>			if s >= x {</span></span>
<span class="line"><span>				s = 0</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt > k</span></span>
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
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/divide-chocolate" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1231.Divide%20Chocolate/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1237" tabindex="-1">1237. 找出给定方程的正整数解 <a class="header-anchor" href="#q-1237" aria-label="Permalink to &quot;1237. 找出给定方程的正整数解 {#q-1237}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、双指针、二分查找、交互</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个函数  <code>f(x, y)</code> 和一个目标结果 <code>z</code>，函数公式未知，请你计算方程 <code>f(x,y) == z</code> 所有可能的正整数 <strong>数对</strong> <code>x</code> 和 <code>y</code>。满足条件的结果数对可以按任意顺序返回。</p>&#10;&#10;<p>尽管函数的具体式子未知，但它是单调递增函数，也就是说：</p>&#10;&#10;<ul>&#10;	<li><code>f(x, y) &lt; f(x + 1, y)</code></li>&#10;	<li><code>f(x, y) &lt; f(x, y + 1)</code></li>&#10;</ul>&#10;&#10;<p>函数接口定义如下：</p>&#10;&#10;<pre>&#10;interface CustomFunction {&#10;public:&#10;  // Returns some positive integer f(x, y) for two positive integers x and y based on a formula.&#10;  int f(int x, int y);&#10;};</pre>&#10;&#10;<p>你的解决方案将按如下规则进行评判：</p>&#10;&#10;<ul>&#10;	<li>判题程序有一个由 <code>CustomFunction</code> 的 <code>9</code> 种实现组成的列表，以及一种为特定的 <code>z</code> 生成所有有效数对的答案的方法。</li>&#10;	<li>判题程序接受两个输入：<code>function_id</code>（决定使用哪种实现测试你的代码）以及目标结果 <code>z</code> 。</li>&#10;	<li>判题程序将会调用你实现的 <code>findSolution</code> 并将你的结果与答案进行比较。</li>&#10;	<li>如果你的结果与答案相符，那么解决方案将被视作正确答案，即 <code>Accepted</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>function_id = 1, z = 5&#10;<strong>输出：</strong>[[1,4],[2,3],[3,2],[4,1]]&#10;<strong>解释：</strong>function_id = 1 暗含的函数式子为 f(x, y) = x + y&#10;以下 x 和 y 满足 f(x, y) 等于 5：&#10;x=1, y=4 -> f(1, 4) = 1 + 4 = 5&#10;x=2, y=3 -> f(2, 3) = 2 + 3 = 5&#10;x=3, y=2 -> f(3, 2) = 3 + 2 = 5&#10;x=4, y=1 -> f(4, 1) = 4 + 1 = 5&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>function_id = 2, z = 5&#10;<strong>输出：</strong>[[1,5],[5,1]]&#10;<strong>解释：</strong>function_id = 2 暗含的函数式子为 f(x, y) = x * y&#10;以下 x 和 y 满足 f(x, y) 等于 5：&#10;x=1, y=5 -> f(1, 5) = 1 * 5 = 5&#10;x=5, y=1 -> f(5, 1) = 5 * 1 = 5</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= function_id &lt;= 9</code></li>&#10;	<li><code>1 &lt;= z &lt;= 100</code></li>&#10;	<li>题目保证 <code>f(x, y) == z</code> 的解处于 <code>1 &lt;= x, y &lt;= 1000</code> 的范围内。</li>&#10;	<li>在 <code>1 &lt;= x, y &lt;= 1000</code> 的前提下，题目保证 <code>f(x, y)</code> 是一个 32 位有符号整数。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 对两个自变量均严格递增， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span> 且解在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2026;</mo>
  <mn>1000</mn>
</math></span>。双重线性枚举最坏 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span> 次调用，可以接受但可再降。固定 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mo>&#x22C5;</mo>
  <mo stretchy="false">)</mo>
</math></span> 单调，可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 上二分定位等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
</math></span> 的位置。</p>
<p>对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 二分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，命中则记录。单调性把内层从线性变成对数。</p>
</blockquote>
<p>根据题目我们可以知道，函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 是单调递增函数，因此，我们可以枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，然后在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>z</mi>
  <mo stretchy="false">]</mo>
</math></span> 中二分查找 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>z</mi>
</math></span>。如果找到了，就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 加入答案中。</p>
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
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
</math></span> 的值，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * This is the declaration of customFunction API.</span></span>
<span class="line"><span> * @param  x    int</span></span>
<span class="line"><span> * @param  x    int</span></span>
<span class="line"><span> * @return 	    Returns f(x, y) for any given positive integers x and y.</span></span>
<span class="line"><span> *			    Note that f(x, y) is increasing with respect to both x and y.</span></span>
<span class="line"><span> *              i.e. f(x, y) &#x3C; f(x + 1, y), f(x, y) &#x3C; f(x, y + 1)</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findSolution(customFunction func(int, int) int, z int) (ans [][]int) {</span></span>
<span class="line"><span>	for x := 1; x &#x3C;= 1000; x++ {</span></span>
<span class="line"><span>		y := 1 + sort.Search(999, func(y int) bool { return customFunction(x, y+1) >= z })</span></span>
<span class="line"><span>		if customFunction(x, y) == z {</span></span>
<span class="line"><span>			ans = append(ans, []int{x, y})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 各做一次二分，调用次数仍带对数因子。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>1000</mn>
  <mo stretchy="false">)</mo>
</math></span> 出发：值偏小只能增大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>（再减小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 会更小），值偏大只能减小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>。相等则收入并同时移动两端。总调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>z</mi>
  <mo stretchy="false">)</mo>
</math></span> 级，利用了双单调性。</p>
</blockquote>
<p>我们可以定义两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mi>z</mi>
</math></span>。</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>z</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 加入答案中，然后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo stretchy="false">&#x2190;</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo stretchy="false">&#x2190;</mo>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>&lt;</mo>
  <mi>z</mi>
</math></span>，此时对任意的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>y</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>&lt;</mo>
  <mi>y</mi>
</math></span>，都有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <msup>
    <mi>y</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo stretchy="false">)</mo>
  <mo>&lt;</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>&lt;</mo>
  <mi>z</mi>
</math></span>，因此我们不能将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 减小，只能将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 增大，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo stretchy="false">&#x2190;</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>&gt;</mo>
  <mi>z</mi>
</math></span>，此时对任意的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>x</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>&gt;</mo>
  <mi>x</mi>
</math></span>，都有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>&gt;</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>&gt;</mo>
  <mi>z</mi>
</math></span>，因此我们不能将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 增大，只能将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 减小，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo stretchy="false">&#x2190;</mo>
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</li>
</ul>
<p>循环结束后，返回答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
</math></span> 的值，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * This is the declaration of customFunction API.</span></span>
<span class="line"><span> * @param  x    int</span></span>
<span class="line"><span> * @param  x    int</span></span>
<span class="line"><span> * @return 	    Returns f(x, y) for any given positive integers x and y.</span></span>
<span class="line"><span> *			    Note that f(x, y) is increasing with respect to both x and y.</span></span>
<span class="line"><span> *              i.e. f(x, y) &#x3C; f(x + 1, y), f(x, y) &#x3C; f(x, y + 1)</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findSolution(customFunction func(int, int) int, z int) (ans [][]int) {</span></span>
<span class="line"><span>	x, y := 1, 1000</span></span>
<span class="line"><span>	for x &#x3C;= 1000 &#x26;&#x26; y > 0 {</span></span>
<span class="line"><span>		t := customFunction(x, y)</span></span>
<span class="line"><span>		if t &#x3C; z {</span></span>
<span class="line"><span>			x++</span></span>
<span class="line"><span>		} else if t > z {</span></span>
<span class="line"><span>			y--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans = append(ans, []int{x, y})</span></span>
<span class="line"><span>			x, y = x+1, y-1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-positive-integer-solution-for-a-given-equation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1237.Find%20Positive%20Integer%20Solution%20for%20a%20Given%20Equation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1283" tabindex="-1">1283. 使结果不超过阈值的最小除数 <a class="header-anchor" href="#q-1283" aria-label="Permalink to &quot;1283. 使结果不超过阈值的最小除数 {#q-1283}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个正整数 <code>threshold</code>  ，你需要选择一个正整数作为除数，然后将数组里每个数都除以它，并对除法结果求和。</p>&#10;&#10;<p>请你找出能够使上述结果小于等于阈值 <code>threshold</code> 的除数中 <strong>最小</strong> 的那个。</p>&#10;&#10;<p>每个数除以除数后都向上取整，比方说 7/3 = 3 ， 10/2 = 5 。</p>&#10;&#10;<p>题目保证一定有解。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,5,9], threshold = 6&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>如果除数为 1 ，我们可以得到和为 17 （1+2+5+9）。&#10;如果除数为 4 ，我们可以得到和为 7 (1+1+2+3) 。如果除数为 5 ，和为 5 (1+1+1+2)。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,3,5,7,11], threshold = 11&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [19], threshold = 5&#10;<strong>输出：</strong>4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 5 * 10^4</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10^6</code></li>&#10;	<li><code>nums.length &lt;= threshold &lt;= 10^6</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>除数越大，向上取整之和越小，存在单调性。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举除数不可行。在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
</math></span> 上二分最小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，使 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <msub>
    <mi>s</mi>
    <mi>i</mi>
  </msub>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>v</mi>
  <mo fence="false" stretchy="false">&#x2309;</mo>
  <mo>&#x2264;</mo>
  <mi>t</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>h</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mi>d</mi>
</math></span>。判定一遍线性扫描。</p>
</blockquote>
<p>我们注意到，对于一个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，如果将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的每个数字都除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 的结果之和小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>h</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mi>d</mi>
</math></span>，那么所有大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 的值都满足条件。这存在着单调性，因此我们可以使用二分查找的方法找到最小的满足条件的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>。</p>
<p>我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>，每次取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中每个数字除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的结果之和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>h</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mi>d</mi>
</math></span>，那么说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 满足条件，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
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
</math></span> 中的最大值。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestDivisor(nums []int, threshold int) int {</span></span>
<span class="line"><span>	return sort.Search(slices.Max(nums), func(v int) bool {</span></span>
<span class="line"><span>		v++</span></span>
<span class="line"><span>		s := 0</span></span>
<span class="line"><span>		for _, x := range nums {</span></span>
<span class="line"><span>			s += (x + v - 1) / v</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return s &#x3C;= threshold</span></span>
<span class="line"><span>	}) + 1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1283.Find%20the%20Smallest%20Divisor%20Given%20a%20Threshold/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1292" tabindex="-1">1292. 元素和小于等于阈值的正方形的最大边长 <a class="header-anchor" href="#q-1292" aria-label="Permalink to &quot;1292. 元素和小于等于阈值的正方形的最大边长 {#q-1292}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、矩阵、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m x n</code> 的矩阵 <code>mat</code> 和一个整数阈值 <code>threshold</code>。</p>&#10;&#10;<p>请你返回元素总和小于或等于阈值的正方形区域的最大边长；如果没有这样的正方形区域，则返回 <strong>0 </strong>。<br>&#10; </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1292.Maximum%20Side%20Length%20of%20a%20Square%20with%20Sum%20Less%20than%20or%20Equal%20to%20Threshold/images/e1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>总和小于或等于 4 的正方形的最大边长为 2，如图所示。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == mat.length</code></li>&#10;	<li><code>n == mat[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 300</code></li>&#10;	<li><code>0 &lt;= mat[i][j] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= threshold &lt;= 10<sup>5</sup></code><sup> </sup></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二维前缀和 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>正方形区域和随边长增大而增大（元素非负），存在单调性。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>300</mn>
</math></span>，枚举边长再扫左上角若每次求和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>k</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 则过慢。二维前缀和使任意正方形求和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，再对边长二分。</p>
<p>判定函数枚举左上角，用前缀和比较阈值。二分找最大可行边长。</p>
</blockquote>
<p>我们可以先预处理得到二维前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 表示矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
</math></span> 中从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的元素和，那么对于任意的正方形区域，我们都可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的时间内得到其元素和。</p>
<p>接下来，我们可以使用二分查找的方法得到最大的边长。我们枚举正方形的边长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，然后枚举正方形的左上角位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，那么我们可以得到正方形的元素和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo>&#x2264;</mo>
  <mi>t</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>h</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mi>d</mi>
</math></span>，那么说明存在边长为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的正方形区域的元素和小于或等于阈值，否则不存在。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxSideLength(mat [][]int, threshold int) int {</span></span>
<span class="line"><span>	m, n := len(mat), len(mat[0])</span></span>
<span class="line"><span>	s := make([][]int, m+1)</span></span>
<span class="line"><span>	for i := range s {</span></span>
<span class="line"><span>		s[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + mat[i-1][j-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	check := func(k int) bool {</span></span>
<span class="line"><span>		for i := 0; i &#x3C; m-k+1; i++ {</span></span>
<span class="line"><span>			for j := 0; j &#x3C; n-k+1; j++ {</span></span>
<span class="line"><span>				if s[i+k][j+k]-s[i][j+k]-s[i+k][j]+s[i][j] &#x3C;= threshold {</span></span>
<span class="line"><span>					return true</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	l, r := 0, min(m, n)</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r + 1) >> 1</span></span>
<span class="line"><span>		if check(mid) {</span></span>
<span class="line"><span>			l = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			r = mid - 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return l</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1292.Maximum%20Side%20Length%20of%20a%20Square%20with%20Sum%20Less%20than%20or%20Equal%20to%20Threshold/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1300" tabindex="-1">1300. 转变数组后最接近目标值的数组和 <a class="header-anchor" href="#q-1300" aria-label="Permalink to &quot;1300. 转变数组后最接近目标值的数组和 {#q-1300}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>arr</code> 和一个目标值 <code>target</code> ，请你返回一个整数 <code>value</code> ，使得将数组中所有大于 <code>value</code> 的值变成 <code>value</code> 后，数组的和最接近  <code>target</code> （最接近表示两者之差的绝对值最小）。</p>&#10;&#10;<p>如果有多种使得和最接近 <code>target</code> 的方案，请你返回这些整数中的最小值。</p>&#10;&#10;<p>请注意，答案不一定是 <code>arr</code> 中的数字。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [4,9,3], target = 10&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>当选择 value 为 3 时，数组会变成 [3, 3, 3]，和为 9 ，这是最接近 target 的方案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [2,3,5], target = 10&#10;<strong>输出：</strong>5&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [60864,25176,27249,21296,20204], target = 56803&#10;<strong>输出：</strong>11361&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 10^4</code></li>&#10;	<li><code>1 &lt;= arr[i], target &lt;= 10^5</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 前缀和 + 二分查找 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>若对每个候选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span> 都扫描一遍数组求转变后的和，则复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，难以稳定通过。</p>
<p>转变后的和只取决于「不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span> 的部分原样保留、超过的部分一律改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span>」。将数组排序后，分界点是一段前缀，可用二分定位，前缀和一次算出保留部分。因此按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">)</mo>
</math></span> 枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span>，每次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 求转变和并维护与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 的最小绝对差；差值相同时取更小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span>。</p>
</blockquote>
<p>我们注意到，题目中要把所有大于 <code v-pre>value</code> 的值变成 <code v-pre>value</code>，并且求和，因此我们可以考虑先对数组 <code v-pre>arr</code> 进行排序，然后求出前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示数组前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素之和。</p>
<p>接下来，我们可以从小到大枚举所有 <code v-pre>value</code> 值，对于每个 <code v-pre>value</code>，我们可以通过二分查找找到数组中第一个大于 <code v-pre>value</code> 的元素的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，此时数组中大于 <code v-pre>value</code> 的元素个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
</math></span>，因此数组中小于等于 <code v-pre>value</code> 的元素个数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，此时数组中小于等于 <code v-pre>value</code> 的元素之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，数组中大于 <code v-pre>value</code> 的元素之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">value</mtext>
</math></span>，因此数组中所有元素之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">value</mtext>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">value</mtext>
</math></span> 与 <code v-pre>target</code> 的差的绝对值小于当前的最小差值 <code v-pre>diff</code>，则更新 <code v-pre>diff</code> 和 <code v-pre>ans</code>。</p>
<p>枚举完所有 <code v-pre>value</code> 后，即可得到最终答案 <code v-pre>ans</code>。</p>
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
</math></span> 为数组 <code v-pre>arr</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findBestValue(arr []int, target int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(arr)</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	mx := slices.Max(arr)</span></span>
<span class="line"><span>	for i, x := range arr {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	diff := 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	for value := 0; value &#x3C;= mx; value++ {</span></span>
<span class="line"><span>		i := sort.SearchInts(arr, value+1)</span></span>
<span class="line"><span>		d := abs(s[i] + (n-i)*value - target)</span></span>
<span class="line"><span>		if diff > d {</span></span>
<span class="line"><span>			diff = d</span></span>
<span class="line"><span>			ans = value</span></span>
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
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-of-mutated-array-closest-to-target" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1300.Sum%20of%20Mutated%20Array%20Closest%20to%20Target/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1337" tabindex="-1">1337. 矩阵中战斗力最弱的 K 行 <a class="header-anchor" href="#q-1337" aria-label="Permalink to &quot;1337. 矩阵中战斗力最弱的 K 行 {#q-1337}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、矩阵、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m * n</code> 的矩阵 <code>mat</code>，矩阵由若干军人和平民组成，分别用 1 和 0 表示。</p>&#10;&#10;<p>请你返回矩阵中战斗力最弱的 <code>k</code> 行的索引，按从最弱到最强排序。</p>&#10;&#10;<p>如果第 <em><strong>i</strong></em> 行的军人数量少于第 <em><strong>j</strong></em> 行，或者两行军人数量相同但<em><strong> i</strong></em> 小于 <em><strong>j</strong></em>，那么我们认为第<em><strong> i </strong></em>行的战斗力比第<em><strong> j </strong></em>行弱。</p>&#10;&#10;<p>军人 <strong>总是</strong> 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mat = &#10;[[1,1,0,0,0],&#10; [1,1,1,1,0],&#10; [1,0,0,0,0],&#10; [1,1,0,0,0],&#10; [1,1,1,1,1]], &#10;k = 3&#10;<strong>输出：</strong>[2,0,3]&#10;<strong>解释：</strong>&#10;每行中的军人数目：&#10;行 0 -> 2 &#10;行 1 -> 4 &#10;行 2 -> 1 &#10;行 3 -> 2 &#10;行 4 -> 5 &#10;从最弱到最强对这些行排序后得到 [2,0,3,1,4]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>mat = &#10;[[1,0,0,0],&#10; [1,1,1,1],&#10; [1,0,0,0],&#10; [1,0,0,0]], &#10;k = 2&#10;<strong>输出：</strong>[0,2]&#10;<strong>解释：</strong> &#10;每行中的军人数目：&#10;行 0 -> 1 &#10;行 1 -> 4 &#10;行 2 -> 1 &#10;行 3 -> 1 &#10;从最弱到最强对这些行排序后得到 [0,2,3,1]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == mat.length</code></li>&#10;	<li><code>n == mat[i].length</code></li>&#10;	<li><code>2 &lt;= n, m &lt;= 100</code></li>&#10;	<li><code>1 &lt;= k &lt;= m</code></li>&#10;	<li><code>matrix[i][j]</code> 不是 0 就是 1</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>行按军人数量升序、行号升序取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 行。每行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 在左、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 在右，军人个数等于首次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的位置。将行反转后二分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的右界，得到军人数量；再按该数量对行号排序，截取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func kWeakestRows(mat [][]int, k int) []int {</span></span>
<span class="line"><span>	m, n := len(mat), len(mat[0])</span></span>
<span class="line"><span>	res := make([]int, m)</span></span>
<span class="line"><span>	var idx []int</span></span>
<span class="line"><span>	for i, row := range mat {</span></span>
<span class="line"><span>		idx = append(idx, i)</span></span>
<span class="line"><span>		left, right := 0, n</span></span>
<span class="line"><span>		for left &#x3C; right {</span></span>
<span class="line"><span>			mid := (left + right) >> 1</span></span>
<span class="line"><span>			if row[mid] == 0 {</span></span>
<span class="line"><span>				right = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				left = mid + 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		res[i] = left</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(idx, func(i, j int) bool {</span></span>
<span class="line"><span>		return res[idx[i]] &#x3C; res[idx[j]] || (res[idx[i]] == res[idx[j]] &#x26;&#x26; idx[i] &#x3C; idx[j])</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	return idx[:k]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/the-k-weakest-rows-in-a-matrix" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1337.The%20K%20Weakest%20Rows%20in%20a%20Matrix/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1346" tabindex="-1">1346. 检查整数及其两倍数是否存在 <a class="header-anchor" href="#q-1346" aria-label="Permalink to &quot;1346. 检查整数及其两倍数是否存在 {#q-1346}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>arr</code>，请你检查是否存在两个整数 <code>N</code> 和 <code>M</code>，满足 <code>N</code> 是 <code>M</code> 的两倍（即，<code>N = 2 * M</code>）。</p>&#10;&#10;<p>更正式地，检查是否存在两个下标 <code>i</code> 和 <code>j</code> 满足：</p>&#10;&#10;<ul>&#10;	<li><code>i != j</code></li>&#10;	<li><code>0 &lt;= i, j &lt; arr.length</code></li>&#10;	<li><code>arr[i] == 2 * arr[j]</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [10,2,5,3]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>N<code> = 10</code> 是 M<code> = 5 的两倍</code>，即 <code>10 = 2 * 5 。</code>&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [7,1,14,11]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>N<code> = 14</code> 是 M<code> = 7 的两倍</code>，即 <code>14 = 2 * 7 </code>。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [3,1,7,11]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>在该情况下不存在 N 和 M 满足 N = 2 * M 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= arr.length &lt;= 500</code></li>&#10;	<li><code>-10^3 &lt;= arr[i] &lt;= 10^3</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>是否存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2260;</mo>
  <mi>j</mi>
</math></span> 使 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>2</mn>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。双重循环在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>500</mn>
</math></span> 可过，但一遍哈希即可：扫描时若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>x</mi>
</math></span> 或（偶数时） <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 已出现则成功，否则把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 放入集合。集合只含左侧元素，自然保证下标不同。</p>
</blockquote>
<p>我们定义一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，用于记录访问过的元素。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span>，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的两倍或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的一半在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中，那么返回 <code v-pre>true</code>。否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 加入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。</p>
<p>若遍历结束后没有找到满足条件的元素，返回 <code v-pre>false</code>。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func checkIfExist(arr []int) bool {</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for _, x := range arr {</span></span>
<span class="line"><span>		if s[x*2] || (x%2 == 0 &#x26;&#x26; s[x/2]) {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-if-n-and-its-double-exist" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1346.Check%20If%20N%20and%20Its%20Double%20Exist/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1351" tabindex="-1">1351. 统计有序矩阵中的负数 <a class="header-anchor" href="#q-1351" aria-label="Permalink to &quot;1351. 统计有序矩阵中的负数 {#q-1351}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m * n</code> 的矩阵 <code>grid</code>，矩阵中的元素无论是按行还是按列，都以非严格递减顺序排列。 请你统计并返回 <code>grid</code> 中 <strong>负数</strong> 的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>矩阵中共有 8 个负数。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[3,2],[1,0]]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 100</code></li>&#10;	<li><code>-100 &lt;= grid[i][j] &lt;= 100</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>你可以设计一个时间复杂度为 <code>O(n + m)</code> 的解决方案吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一：从左下角开始遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每行每列非严格递减，统计负数个数。逐格扫描为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。左下角是「当前行最小、当前列最大」的分界：该格非负则本行左侧皆非负，右移；为负则本行从这里到右端全负，计入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
</math></span> 后上移。行列各走一遍，复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>由于矩阵是按行和按列非严格递减排序的，我们可以从矩阵的左下角开始遍历，记当前位置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>如果当前位置的元素大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，说明该行的前面所有元素也都大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，因此我们将列索引 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 向右移动一位，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>如果当前位置的元素小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，说明该列的当前元素以及其右侧的所有元素都是负数，因此我们可以将负数的数量增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
</math></span>（其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是矩阵的列数），然后将行索引 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 向上移动一位，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>我们重复上述过程，直到行索引 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或列索引 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。最终，负数的数量即为答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countNegatives(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	m := len(grid)</span></span>
<span class="line"><span>	n := len(grid[0])</span></span>
<span class="line"><span>	i := m - 1</span></span>
<span class="line"><span>	j := 0</span></span>
<span class="line"><span>	for i >= 0 &#x26;&#x26; j &#x3C; n {</span></span>
<span class="line"><span>		if grid[i][j] >= 0 {</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans += n - j</span></span>
<span class="line"><span>			i--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-negative-numbers-in-a-sorted-matrix" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1351.Count%20Negative%20Numbers%20in%20a%20Sorted%20Matrix/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1385" tabindex="-1">1385. 两个数组间的距离值 <a class="header-anchor" href="#q-1385" aria-label="Permalink to &quot;1385. 两个数组间的距离值 {#q-1385}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数数组 <code>arr1</code> ， <code>arr2</code> 和一个整数 <code>d</code> ，请你返回两个数组之间的 <strong>距离值</strong> 。</p>&#10;&#10;<p>「<strong>距离值</strong>」<strong> </strong>定义为符合此距离要求的元素数目：对于元素 <code>arr1[i]</code> ，不存在任何元素 <code>arr2[j]</code> 满足 <code>|arr1[i]-arr2[j]| &lt;= d</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;对于 arr1[0]=4 我们有：&#10;|4-10|=6 > d=2 &#10;|4-9|=5 > d=2 &#10;|4-1|=3 > d=2 &#10;|4-8|=4 > d=2 &#10;所以 arr1[0]=4 符合距离要求&#10;&#10;对于 arr1[1]=5 我们有：&#10;|5-10|=5 > d=2 &#10;|5-9|=4 > d=2 &#10;|5-1|=4 > d=2 &#10;|5-8|=3 > d=2&#10;所以 arr1[1]=5 也符合距离要求&#10;&#10;对于 arr1[2]=8 我们有：&#10;<strong>|8-10|=2 &lt;= d=2</strong>&#10;<strong>|8-9|=1 &lt;= d=2</strong>&#10;|8-1|=7 > d=2&#10;<strong>|8-8|=0 &lt;= d=2</strong>&#10;存在距离小于等于 2 的情况，不符合距离要求 &#10;&#10;故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr1.length, arr2.length &lt;= 500</code></li>&#10;	<li><code>-10^3 &lt;= arr1[i], arr2[j] &lt;= 10^3</code></li>&#10;	<li><code>0 &lt;= d &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 中与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 所有元素距离都大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 的个数。双重扫描为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 排序后，每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 只需看是否存在落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>d</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的值：二分第一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>d</mi>
</math></span> 的位置，若越界或该值已大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>d</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 合法。</p>
</blockquote>
<p>我们可以先对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr2</mtext>
</math></span> 排序，然后对于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr1</mtext>
</math></span> 中的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，使用二分查找，找到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr2</mtext>
</math></span> 中第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>d</mi>
</math></span> 的元素，如果元素存在，且小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>d</mi>
</math></span>，则说明不符合距离要求，否则说明符合距离要求。我们将符合距离要求的元素个数累加，即为答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
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
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr2</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findTheDistanceValue(arr1 []int, arr2 []int, d int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(arr2)</span></span>
<span class="line"><span>	for _, x := range arr1 {</span></span>
<span class="line"><span>		i := sort.SearchInts(arr2, x-d)</span></span>
<span class="line"><span>		if i == len(arr2) || arr2[i] > x+d {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-distance-value-between-two-arrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1385.Find%20the%20Distance%20Value%20Between%20Two%20Arrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1428" tabindex="-1">1428. 至少有一个 1 的最左端列 🔒 <a class="header-anchor" href="#q-1428" aria-label="Permalink to &quot;1428. 至少有一个 1 的最左端列 🔒 {#q-1428}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、交互、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><strong>行排序二进制矩阵</strong> 表示所有元素都是 <code>0</code> 或 <code>1</code>，并且矩阵的每一行都以非递减排序。</p>&#10;&#10;<p>给定一个 <strong>行排序二进制矩阵 </strong><code>binaryMatrix</code>，返回至少包含一个 <code>1</code> 的 <strong>最左端列 </strong>的索引（从 0 开始）。如果这样的列不存在，返回 <code>-1</code>。</p>&#10;&#10;<p><strong>您不能直接访问该二进制矩阵。</strong>你只可以通过 <code>BinaryMatrix</code> 接口来访问。</p>&#10;&#10;<ul>&#10;	<li><code>BinaryMatrix.get(row, col)</code> 返回位于索引 <code>(row, col)</code> （从 0 开始）的元素。</li>&#10;	<li><code>BinaryMatrix.dimensions()</code> 返回含有 2 个元素的列表 <code>[rows, cols]</code>，表示这是一个 <code>rows * cols</code>的矩阵。</li>&#10;</ul>&#10;&#10;<p>如果提交的答案调用 <code>BinaryMatrix.get</code> 超过 <code>1000</code> 次，则该答案会被判定为<em>错误答案</em>。提交任何试图规避判定机制的答案将会被取消资格。</p>&#10;&#10;<p>下列示例中， <code>mat</code> 为给定的二进制矩阵。您不能直接访问该矩阵。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1428.Leftmost%20Column%20with%20at%20Least%20a%20One/images/untitled-diagram-5.jpg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> mat = [[0,0],[1,1]]&#10;<strong>输出:</strong> 0&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1428.Leftmost%20Column%20with%20at%20Least%20a%20One/images/untitled-diagram-4.jpg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> mat = [[0,0],[0,1]]&#10;<strong>输出:</strong> 1&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1428.Leftmost%20Column%20with%20at%20Least%20a%20One/images/untitled-diagram-3.jpg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> mat = [[0,0],[0,0]]&#10;<strong>输出:</strong> -1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>rows == mat.length</code></li>&#10;	<li><code>cols == mat[i].length</code></li>&#10;	<li><code>1 &lt;= rows, cols &lt;= 100</code></li>&#10;	<li><code>mat[i][j]</code> 只会是 <code>0</code> 或 <code>1</code>。</li>&#10;	<li><code>mat[i]</code> 已按非递减顺序排序。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>矩阵每行非递减，且访问次数受限，不能整表扫描。每一行中第一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的位置可用二分在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 次 <code v-pre>get</code> 内求出。</p>
<p>对所有行取这些列号的最小值；若没有任何 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们先调用 <code v-pre>BinaryMatrix.dimensions()</code> 得到矩阵的行数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和列数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，然后对于每一行，我们使用二分查找来找到最左边的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 所在的列数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，找出所有行中最小的满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的值即为答案。如果不存在这样的列，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是矩阵的行数和列数。需要遍历每一行，每一行内使用二分查找，时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> *</span><span> // This is the BinaryMatrix's API interface.</span></span>
<span class="line"><span> *</span><span> // You should not implement it, or speculate about its implementation</span></span>
<span class="line"><span> * type BinaryMatrix struct {</span></span>
<span class="line"><span> *     Get func(int, int) int</span></span>
<span class="line"><span> *     Dimensions func() []int</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func leftMostColumnWithOne(binaryMatrix BinaryMatrix) int {</span></span>
<span class="line"><span>	e := binaryMatrix.Dimensions()</span></span>
<span class="line"><span>	m, n := e[0], e[1]</span></span>
<span class="line"><span>	ans := n</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		l, r := 0, n</span></span>
<span class="line"><span>		for l &#x3C; r {</span></span>
<span class="line"><span>			mid := (l + r) >> 1</span></span>
<span class="line"><span>			if binaryMatrix.Get(i, mid) == 1 {</span></span>
<span class="line"><span>				r = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				l = mid + 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = min(ans, l)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if ans >= n {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/leftmost-column-with-at-least-a-one" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1428.Leftmost%20Column%20with%20at%20Least%20a%20One/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1439" tabindex="-1">1439. 有序矩阵中的第 k 个最小数组和 <a class="header-anchor" href="#q-1439" aria-label="Permalink to &quot;1439. 有序矩阵中的第 k 个最小数组和 {#q-1439}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、矩阵、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m * n</code> 的矩阵 <code>mat</code>，以及一个整数 <code>k</code> ，矩阵中的每一行都以非递减的顺序排列。</p>&#10;&#10;<p>你可以从每一行中选出 1 个元素形成一个数组。返回所有可能数组中的第 k 个 <strong>最小</strong> 数组和。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>mat = [[1,3,11],[2,4,6]], k = 5&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>从每一行中选出一个元素，前 k 个和最小的数组分别是：&#10;[1,2], [1,4], [3,2], [3,4], [1,6]。其中第 5 个的和是 7 。  </pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>mat = [[1,3,11],[2,4,6]], k = 9&#10;<strong>输出：</strong>17&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>mat = [[1,10,10],[1,4,5],[2,3,6]], k = 7&#10;<strong>输出：</strong>9&#10;<strong>解释：</strong>从每一行中选出一个元素，前 k 个和最小的数组分别是：&#10;[1,1,2], [1,1,3], [1,4,2], [1,4,3], [1,1,6], [1,5,2], [1,5,3]。其中第 7 个的和是 9 。 &#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>mat = [[1,1,10],[2,2,9]], k = 7&#10;<strong>输出：</strong>12&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == mat.length</code></li>&#10;	<li><code>n == mat.length[i]</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 40</code></li>&#10;	<li><code>1 &lt;= k &lt;= min(200, n ^ m)</code></li>&#10;	<li><code>1 &lt;= mat[i][j] &lt;= 5000</code></li>&#10;	<li><code>mat[i]</code> 是一个非递减数组</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：逐行遍历 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每行选一个数求和， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>n</mi>
    <mi>m</mi>
  </msup>
</math></span> 种组合而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <mn>200</mn>
</math></span>。只需保留前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 小的部分和。行已有序，与下一行相加时只需用到该行前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个元素。</p>
<p>设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span> 为已处理行的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 小和，与当前行做笛卡尔加后排序截断前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 项。处理完所有行后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 即为答案。</p>
</blockquote>
<p>根据题目描述，我们需要找出前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 行的所有可能数组中的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个最小数组和。</p>
<p>如果我们能够找出前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 行的所有可能数组中的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个最小数组和，那么我们可以将第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 行的每个元素与前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 行的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个最小数组和相加，将得到的所有结果排序后，取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个最小值，即为前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 行的所有可能数组中的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个最小值。</p>
<p>因此，我们可以定义一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span>，用于存储此前遍历到的行的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个最小数组和，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span> 只有一个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>然后，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
</math></span> 的每一行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span> 中的每个元素与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span> 中的每个元素相加，将得到的所有结果排序后，取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个最小值作为新的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span>。继续遍历下一行，直到遍历完所有行。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span> 中的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个数（下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>）即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func kthSmallest(mat [][]int, k int) int {</span></span>
<span class="line"><span>	pre := []int{0}</span></span>
<span class="line"><span>	for _, row := range mat {</span></span>
<span class="line"><span>		cur := []int{}</span></span>
<span class="line"><span>		for _, a := range pre {</span></span>
<span class="line"><span>			for _, b := range row {</span></span>
<span class="line"><span>				cur = append(cur, a+b)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		sort.Ints(cur)</span></span>
<span class="line"><span>		pre = cur[:min(k, len(cur))]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return pre[k-1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1439.Find%20the%20Kth%20Smallest%20Sum%20of%20a%20Matrix%20With%20Sorted%20Rows/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1482" tabindex="-1">1482. 制作 m 束花所需的最少天数 <a class="header-anchor" href="#q-1482" aria-label="Permalink to &quot;1482. 制作 m 束花所需的最少天数 {#q-1482}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>bloomDay</code>，以及两个整数 <code>m</code> 和 <code>k</code> 。</p>&#10;&#10;<p>现需要制作 <code>m</code> 束花。制作花束时，需要使用花园中 <strong>相邻的 <code>k</code> 朵花</strong> 。</p>&#10;&#10;<p>花园中有 <code>n</code> 朵花，第 <code>i</code> 朵花会在 <code>bloomDay[i]</code> 时盛开，<strong>恰好</strong> 可以用于 <strong>一束</strong> 花中。</p>&#10;&#10;<p>请你返回从花园中摘 <code>m</code> 束花需要等待的 <strong>最少</strong> 的天数。如果不能摘到 <code>m</code> 束花则返回 -1。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>bloomDay = [1,10,3,10,2], m = 3, k = 1&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>让我们一起观察这三天的花开过程，x 表示花开，而 _ 表示花还未开。&#10;现在需要制作 3 束花，每束只需要 1 朵。&#10;1 天后：[x, _, _, _, _]   // 只能制作 1 束花&#10;2 天后：[x, _, _, _, x]   // 只能制作 2 束花&#10;3 天后：[x, _, x, _, x]   // 可以制作 3 束花，答案为 3&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>bloomDay = [1,10,3,10,2], m = 3, k = 2&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>要制作 3 束花，每束需要 2 朵花，也就是一共需要 6 朵花。而花园中只有 5 朵花，无法满足制作要求，返回 -1 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3&#10;<strong>输出：</strong>12&#10;<strong>解释：</strong>要制作 2 束花，每束需要 3 朵。&#10;花园在 7 天后和 12 天后的情况如下：&#10;7 天后：[x, x, x, x, _, x, x]&#10;可以用前 3 朵盛开的花制作第一束花。但不能使用后 3 朵盛开的花，因为它们不相邻。&#10;12 天后：[x, x, x, x, x, x, x]&#10;显然，我们可以用不同的方式制作两束花。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>bloomDay = [1000000000,1000000000], m = 1, k = 1&#10;<strong>输出：</strong>1000000000&#10;<strong>解释：</strong>需要等 1000000000 天才能采到花来制作花束&#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2&#10;<strong>输出：</strong>9&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>bloomDay.length == n</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10^5</code></li>&#10;	<li><code>1 &lt;= bloomDay[i] &lt;= 10^9</code></li>&#10;	<li><code>1 &lt;= m &lt;= 10^6</code></li>&#10;	<li><code>1 &lt;= k &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>天数越大越容易凑齐 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束，具有单调性。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>D</mi>
  <mi>a</mi>
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，对天数二分。判定时从左到右数连续已开且长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的段数是否至少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。找不到则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>根据题目描述，如果一个天数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 可以满足制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花，那么对任意 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>t</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>&gt;</mo>
  <mi>t</mi>
</math></span>，也一定可以满足制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花。因此，我们可以使用二分查找的方法找到最小的满足制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花的天数。</p>
<p>我们记花园中最大的开花天数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，接下来，我们定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>然后，我们进行二分查找，对于每一个中间值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mi>l</mi>
      <mo>+</mo>
      <mi>r</mi>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，我们判断是否可以制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花。如果可以，我们将右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span>，否则，我们将左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>最终，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mi>r</mi>
</math></span> 时，结束二分查找。此时如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>&gt;</mo>
  <mi>m</mi>
  <mi>x</mi>
</math></span>，说明无法制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>。</p>
<p>因此，问题转换为判断一个天数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">days</mtext>
</math></span> 是否可以制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花。</p>
<p>我们可以使用一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>check</mtext>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">days</mtext>
  <mo stretchy="false">)</mo>
</math></span> 来判断是否可以制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花。具体地，我们从左到右遍历花园中的每一朵花，如果当前花开的天数小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">days</mtext>
</math></span>，我们将当前花加入到当前花束中，否则，我们将当前花束清空。当当前花束中的花的数量等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时，我们将当前花束的数量加一，并清空当前花束。最后，我们判断当前花束的数量是否大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，如果是，说明可以制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花，否则，说明无法制作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 束花。</p>
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
</math></span> 分别为花园中的花的数量和最大的开花天数，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minDays(bloomDay []int, m int, k int) int {</span></span>
<span class="line"><span>	mx := slices.Max(bloomDay)</span></span>
<span class="line"><span>	if l := sort.Search(mx+2, func(days int) bool {</span></span>
<span class="line"><span>		cnt, cur := 0, 0</span></span>
<span class="line"><span>		for _, x := range bloomDay {</span></span>
<span class="line"><span>			if x &#x3C;= days {</span></span>
<span class="line"><span>				cur++</span></span>
<span class="line"><span>				if cur == k {</span></span>
<span class="line"><span>					cnt++</span></span>
<span class="line"><span>					cur = 0</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				cur = 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt >= m</span></span>
<span class="line"><span>	}); l &#x3C;= mx {</span></span>
<span class="line"><span>		return l</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-number-of-days-to-make-m-bouquets" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1482.Minimum%20Number%20of%20Days%20to%20Make%20m%20Bouquets/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1498" tabindex="-1">1498. 满足条件的子序列数目 <a class="header-anchor" href="#q-1498" aria-label="Permalink to &quot;1498. 满足条件的子序列数目 {#q-1498}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>target</code> 。</p>&#10;&#10;<p>请你统计并返回 <code>nums</code> 中能满足其最小元素与最大元素的 <strong>和</strong> 小于或等于 <code>target</code> 的 <strong>非空</strong> 子序列的数目。</p>&#10;&#10;<p>由于答案可能很大，请将结果对 <code>10<sup>9</sup> + 7</code> 取余后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,5,6,7], target = 9&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>有 4 个子序列满足该条件。&#10;[3] -> 最小元素 + 最大元素 &lt;= target (3 + 3 &lt;= 9)&#10;[3,5] -> (3 + 5 &lt;= 9)&#10;[3,5,6] -> (3 + 6 &lt;= 9)&#10;[3,6] -> (3 + 6 &lt;= 9)&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,3,6,8], target = 10&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>有 6 个子序列满足该条件。（nums 中可以有重复数字）&#10;[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,3,3,4,6,7], target = 12&#10;<strong>输出：</strong>61&#10;<strong>解释：</strong>共有 63 个非空子序列，其中 2 个不满足条件（[6,7], [7]）&#10;有效序列总数为（63 - 2 = 61）&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;	<li><code>1 &lt;= target &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子序列只关心最小与最大，排序不改变可组成的最值对。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，枚举最小值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，二分最大合法 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，中间元素可任意选，方案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mi>i</mi>
    </mrow>
  </msup>
</math></span>。</p>
<p>预处理二的幂以免重复计算。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#x22C5;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，更大的最小值已不可能。</p>
</blockquote>
<p>由于题目中描述的是子序列，并且涉及到最小元素与最大元素的和，因此我们可以先对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 进行排序。</p>
<p>然后我们枚举最小元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 中找到最大元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">target</mtext>
</math></span>，此时满足条件的子序列数目为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mi>i</mi>
    </mrow>
  </msup>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mi>i</mi>
    </mrow>
  </msup>
</math></span> 表示从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的所有子序列的数目。我们将所有的子序列数目累加即可。</p>
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
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numSubseq(nums []int, target int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	f := make([]int, n+1)</span></span>
<span class="line"><span>	f[0] = 1</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		f[i] = f[i-1] * 2 % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		if x*2 > target {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		j := sort.SearchInts(nums[i+1:], target-x+1) + i</span></span>
<span class="line"><span>		ans = (ans + f[j-i]) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-subsequences-that-satisfy-the-given-sum-condition" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1498.Number%20of%20Subsequences%20That%20Satisfy%20the%20Given%20Sum%20Condition/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1508" tabindex="-1">1508. 子数组和排序后的区间和 <a class="header-anchor" href="#q-1508" aria-label="Permalink to &quot;1508. 子数组和排序后的区间和 {#q-1508}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、前缀和、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个数组 <code>nums</code> ，它包含 <code>n</code> 个正整数。你需要计算所有非空连续子数组的和，并将它们按升序排序，得到一个新的包含 <code>n * (n + 1) / 2</code> 个数字的数组。</p>&#10;&#10;<p>请你返回在新数组中下标为<em> </em><code>left</code> 到 <code>right</code> <strong>（下标从 1 开始）</strong>的所有数字和（包括左右端点）。由于答案可能很大，请你将它对 10^9 + 7 取模后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,4], n = 4, left = 1, right = 5&#10;<strong>输出：</strong>13 &#10;<strong>解释：</strong>所有的子数组和为 1, 3, 6, 10, 2, 5, 9, 3, 7, 4 。将它们升序排序后，我们得到新的数组 [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] 。下标从 le = 1 到 ri = 5 的和为 1 + 2 + 3 + 3 + 4 = 13 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,4], n = 4, left = 3, right = 4&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>给定数组与示例 1 一样，所以新数组为 [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] 。下标从 le = 3 到 ri = 4 的和为 3 + 3 = 6 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,4], n = 4, left = 1, right = 10&#10;<strong>输出：</strong>50&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10^3</code></li>&#10;	<li><code>nums.length == n</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;	<li><code>1 &lt;= left &lt;= right &lt;= n * (n + 1) / 2</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>需要把所有子数组和排序后，求第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">left</mtext>
</math></span> 到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">right</mtext>
</math></span> 项之和。子数组有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
    <mn>3</mn>
  </msup>
</math></span>，若再对每个询问区间重新求和会重复劳动，但本题只询问一次。</p>
<p>枚举左端点并维护向右延伸的前缀和，即可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 内列出全部子数组和；排序后对指定闭区间求和并对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
</math></span> 的量级可以接受。</p>
</blockquote>
<p>我们可以按照题目的要求，生成数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span>，然后对数组进行排序，最后求出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">left</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">right</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 范围的所有元素的和，得到结果。</p>
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
</math></span> 为题目给定的数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func rangeSum(nums []int, n int, left int, right int) (ans int) {</span></span>
<span class="line"><span>	var arr []int</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		s := 0</span></span>
<span class="line"><span>		for j := i; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			s += nums[j]</span></span>
<span class="line"><span>			arr = append(arr, s)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(arr)</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	for _, x := range arr[left-1 : right] {</span></span>
<span class="line"><span>		ans = (ans + x) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/range-sum-of-sorted-subarray-sums" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1508.Range%20Sum%20of%20Sorted%20Subarray%20Sums/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1533" tabindex="-1">1533. 找到最大整数的索引 🔒 <a class="header-anchor" href="#q-1533" aria-label="Permalink to &quot;1533. 找到最大整数的索引 🔒 {#q-1533}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、交互</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们有这样一个整数数组 <code>arr</code> ，除了一个最大的整数外，其他所有整数都相等。你不能直接访问该数组，你需要通过 <strong>API</strong> <code>ArrayReader</code> 来间接访问，这个 API 有以下成员函数：</p>&#10;&#10;<ul>&#10;	<li><code>int compareSub(int l, int r, int x, int y)</code>：其中 <code>0 &lt;= l, r, x, y &lt; ArrayReader.length()</code>， <code>l &lt;= r</code> 且 <code>x &lt;= y</code>。这个函数比较子数组 <code>arr[l..r]</code> 与子数组 <code>arr[x..y]</code> 的和。该函数返回：&#10;&#10;    <ul>&#10;    	<li><strong>1</strong> 若 <code>arr[l]+arr[l+1]+...+arr[r] > arr[x]+arr[x+1]+...+arr[y]</code> 。</li>&#10;    	<li><strong>0</strong> 若 <code>arr[l]+arr[l+1]+...+arr[r] == arr[x]+arr[x+1]+...+arr[y]</code> 。</li>&#10;    	<li><strong>-1</strong> 若 <code>arr[l]+arr[l+1]+...+arr[r] &lt; arr[x]+arr[x+1]+...+arr[y]</code> 。</li>&#10;    </ul>&#10;    </li>&#10;    <li><code>int length()</code>：返回数组的长度。</li>&#10;&#10;</ul>&#10;&#10;<p>你最多可以调用函数 <code>compareSub()</code> <strong>20 次</strong>。你可以认为这两个函数的时间复杂度都为 <code>O(1)</code> 。</p>&#10;&#10;<p>返回<em> <code>arr</code> 中最大整数的索引。</em></p>&#10;&#10;<ul>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> arr = [7,7,7,7,10,7,7,7]&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong> API 的调用如下：&#10;reader.compareSub(0, 0, 1, 1) // 返回 0。比较子数组 (0, 0) 与子数组 (1, 1) （即比较 arr[0] 和 arr[1]）。&#10;因此我们知道 arr[0] 和 arr[1] 不包含最大元素。&#10;reader.compareSub(2, 2, 3, 3) // 返回 0。我们可以排除 arr[2] 和 arr[3]。&#10;reader.compareSub(4, 4, 5, 5) // 返回 1。因此，可以确定 arr[4] 是数组中最大的元素。&#10;注意，我们只调用了 3 次 compareSub，所以这个答案是有效的。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [6,6,12]&#10;<strong>输出:</strong> 2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= arr.length &lt;= 5 * 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 100</code></li>&#10;	<li><code>arr</code> 中除一个最大元素外，其余所有元素都相等。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶</strong></p>&#10;&#10;<ul>&#10;	<li>如果 <code>arr</code> 中有两个整数比其他数大呢？</li>&#10;	<li>如果有一个数比其他数大，另一个数比其他数小呢？</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数组除一个较大值外全相等，只能通过比较两段区间和来定位，且长度可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，线性次比较不够，必须对数次缩小范围。</p>
<p>将当前区间近似三等分：比较左段 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <msub>
    <mi>t</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>t</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">]</mo>
</math></span> 与中段 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <msub>
    <mi>t</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <msub>
    <mi>t</mi>
    <mn>3</mn>
  </msub>
  <mo stretchy="false">]</mo>
</math></span>。和相等则大数在剩下的右段；左段更大则落在左段；否则落在中段。每次丢掉约三分之一，直至左右端重合。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> *</span><span> // This is the ArrayReader's API interface.</span></span>
<span class="line"><span> *</span><span> // You should not implement it, or speculate about its implementation</span></span>
<span class="line"><span> * type ArrayReader struct {</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> *</span><span> // Compares the sum of arr[l..r] with the sum of arr[x..y]</span></span>
<span class="line"><span> *</span><span> // return 1 if sum(arr[l..r]) > sum(arr[x..y])</span></span>
<span class="line"><span> *</span><span> // return 0 if sum(arr[l..r]) == sum(arr[x..y])</span></span>
<span class="line"><span> *</span><span> // return -1 if sum(arr[l..r]) &#x3C; sum(arr[x..y])</span></span>
<span class="line"><span> * func (this *ArrayReader) compareSub(l, r, x, y int) int {}</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *</span><span> // Returns the length of the array</span></span>
<span class="line"><span> * func (this *ArrayReader) length() int {}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func getIndex(reader *ArrayReader) int {</span></span>
<span class="line"><span>	left, right := 0, reader.length()-1</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		t1, t2, t3 := left, left+(right-left)/3, left+(right-left)/3*2+1</span></span>
<span class="line"><span>		cmp := reader.compareSub(t1, t2, t2+1, t3)</span></span>
<span class="line"><span>		if cmp == 0 {</span></span>
<span class="line"><span>			left = t3 + 1</span></span>
<span class="line"><span>		} else if cmp == 1 {</span></span>
<span class="line"><span>			right = t2</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left, right = t2+1, t3</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-index-of-the-large-integer" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1533.Find%20the%20Index%20of%20the%20Large%20Integer/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1539" tabindex="-1">1539. 第 k 个缺失的正整数 <a class="header-anchor" href="#q-1539" aria-label="Permalink to &quot;1539. 第 k 个缺失的正整数 {#q-1539}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <strong>严格升序排列</strong> 的正整数数组 <code>arr</code> 和一个整数 <code>k</code> 。</p>&#10;&#10;<p>请你找到这个数组里第 <code>k</code> 个缺失的正整数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [2,3,4,7,11], k = 5&#10;<strong>输出：</strong>9&#10;<strong>解释：</strong>缺失的正整数包括 [1,5,6,8,9,10,12,13,...] 。第 5 个缺失的正整数为 9 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,2,3,4], k = 2&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>缺失的正整数包括 [5,6,7,...] 。第 2 个缺失的正整数为 6 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= k &lt;= 1000</code></li>&#10;	<li>对于所有 <code>1 &lt;= i &lt; j &lt;= arr.length</code> 的 <code>i</code> 和 <code>j</code> 满足 <code>arr[i] &lt; arr[j]</code> </li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong></p>&#10;&#10;<p>你可以设计一个时间复杂度小于 O(n) 的算法解决此问题吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>有序正数组中求第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个缺失正整数。线性扫描在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 同阶时可行，但缺失个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 单调，适合二分。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span>，答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。否则二分第一个「缺失数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>」的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span>，其左侧 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 处已缺失 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个，再向后补 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 与该值的差即可。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findKthPositive(arr []int, k int) int {</span></span>
<span class="line"><span>	if arr[0] > k {</span></span>
<span class="line"><span>		return k</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	left, right := 0, len(arr)</span></span>
<span class="line"><span>	for left &#x3C; right {</span></span>
<span class="line"><span>		mid := (left + right) >> 1</span></span>
<span class="line"><span>		if arr[mid]-mid-1 >= k {</span></span>
<span class="line"><span>			right = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			left = mid + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return arr[left-1] + k - (arr[left-1] - (left - 1) - 1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/kth-missing-positive-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1539.Kth%20Missing%20Positive%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1552" tabindex="-1">1552. 两球之间的磁力 <a class="header-anchor" href="#q-1552" aria-label="Permalink to &quot;1552. 两球之间的磁力 {#q-1552}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在代号为 C-137 的地球上，Rick 发现如果他将两个球放在他新发明的篮子里，它们之间会形成特殊形式的磁力。Rick 有 <code>n</code> 个空的篮子，第 <code>i</code> 个篮子的位置在 <code>position[i]</code> ，Morty 想把 <code>m</code> 个球放到这些篮子里，使得任意两球间 <strong>最小磁力</strong> 最大。</p>&#10;&#10;<p>已知两个球如果分别位于 <code>x</code> 和 <code>y</code> ，那么它们之间的磁力为 <code>|x - y|</code> 。</p>&#10;&#10;<p>给你一个整数数组 <code>position</code> 和一个整数 <code>m</code> ，请你返回最大化的最小磁力。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1552.Magnetic%20Force%20Between%20Two%20Balls/images/q3v1.jpg" loading="lazy"></p>&#10;&#10;<pre><strong>输入：</strong>position = [1,2,3,4,7], m = 3&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>将 3 个球分别放入位于 1，4 和 7 的三个篮子，两球间的磁力分别为 [3, 3, 6]。最小磁力为 3 。我们没办法让最小磁力大于 3 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>position = [5,4,3,2,1,1000000000], m = 2&#10;<strong>输出：</strong>999999999&#10;<strong>解释：</strong>我们使用位于 1 和 1000000000 的篮子时最小磁力最大。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == position.length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 10^5</code></li>&#10;	<li><code>1 &lt;= position[i] &lt;= 10^9</code></li>&#10;	<li>所有 <code>position</code> 中的整数 <strong>互不相同</strong> 。</li>&#10;	<li><code>2 &lt;= m &lt;= position.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在篮子上放 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 个球，最大化任意两球间距的最小值。位置坐标达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，不能按间距枚举所有放法； <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，需要更快的判定。</p>
<p>间距越大能放下的球越少，存在单调性。排序后二分间距 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>，从左到右贪心：与上一球距离至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 才放入。用「无法放下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 个」作为二分键，第一个失败的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 的前驱即为最大可行间距。</p>
</blockquote>
<p>我们注意到，任意两球间的最小磁力越大，能够放入的球的数量就越少，这存在着单调性。我们可以使用二分查找，找到最大的最小磁力，使得能够放入的球的数量不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。</p>
<p>我们首先对篮子的位置进行排序，然后使用二分查找的方法，定义二分查找的左边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，右边界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">position</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为篮子的数量。在每次二分查找的过程中，我们计算取中值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，然后判断是否存在一种放置球的方法，使得能够放入的球的数量不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。</p>
<p>问题转换为判断一个给定的最小磁力 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 是否能够放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 个球。我们可以从左到右遍历篮子的位置，如果上一个球的位置与当前篮子的位置的距离大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>，则说明可以在当前篮子放置一个球。最后判断放置的球的数量是否不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
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
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 分别为篮子的数量和篮子的位置的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxDistance(position []int, m int) int {</span></span>
<span class="line"><span>	sort.Ints(position)</span></span>
<span class="line"><span>	return sort.Search(position[len(position)-1], func(f int) bool {</span></span>
<span class="line"><span>		prev := position[0]</span></span>
<span class="line"><span>		cnt := 1</span></span>
<span class="line"><span>		for _, curr := range position {</span></span>
<span class="line"><span>			if curr-prev >= f {</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>				prev = curr</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt &#x3C; m</span></span>
<span class="line"><span>	}) - 1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/magnetic-force-between-two-balls" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1552.Magnetic%20Force%20Between%20Two%20Balls/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1562" tabindex="-1">1562. 查找大小为 M 的最新分组 <a class="header-anchor" href="#q-1562" aria-label="Permalink to &quot;1562. 查找大小为 M 的最新分组 {#q-1562}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、二分查找、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个数组 <code>arr</code> ，该数组表示一个从 <code>1</code> 到 <code>n</code> 的数字排列。有一个长度为 <code>n</code> 的二进制字符串，该字符串上的所有位最初都设置为 <code>0</code> 。</p>&#10;&#10;<p>在从 <code>1</code> 到 <code>n</code> 的每个步骤 <code>i</code> 中（假设二进制字符串和 <code>arr</code> 都是从 <code>1</code> 开始索引的情况下），二进制字符串上位于位置 <code>arr[i]</code> 的位将会设为 <code>1</code> 。</p>&#10;&#10;<p>给你一个整数 <code>m</code> ，请你找出二进制字符串上存在长度为 <code>m</code> 的一组 <code>1</code> 的最后步骤。一组 <code>1</code> 是一个连续的、由 <code>1</code> 组成的子串，且左右两边不再有可以延伸的 <code>1</code> 。</p>&#10;&#10;<p>返回存在长度 <strong>恰好</strong> 为 <code>m</code> 的 <strong>一组 <code>1</code> </strong> 的最后步骤。如果不存在这样的步骤，请返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [3,5,1,2,4], m = 1&#10;<strong>输出：</strong>4&#10;<strong>解释：&#10;</strong>步骤 1：&quot;00<strong>1</strong>00&quot;，由 1 构成的组：[&quot;1&quot;]&#10;步骤 2：&quot;0010<strong>1</strong>&quot;，由 1 构成的组：[&quot;1&quot;, &quot;1&quot;]&#10;步骤 3：&quot;<strong>1</strong>0101&quot;，由 1 构成的组：[&quot;1&quot;, &quot;1&quot;, &quot;1&quot;]&#10;步骤 4：&quot;1<strong>1</strong>101&quot;，由 1 构成的组：[&quot;111&quot;, &quot;1&quot;]&#10;步骤 5：&quot;111<strong>1</strong>1&quot;，由 1 构成的组：[&quot;11111&quot;]&#10;存在长度为 1 的一组 1 的最后步骤是步骤 4 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [3,1,5,4,2], m = 2&#10;<strong>输出：</strong>-1&#10;<strong>解释：&#10;</strong>步骤 1：&quot;00<strong>1</strong>00&quot;，由 1 构成的组：[&quot;1&quot;]&#10;步骤 2：&quot;<strong>1</strong>0100&quot;，由 1 构成的组：[&quot;1&quot;, &quot;1&quot;]&#10;步骤 3：&quot;1010<strong>1</strong>&quot;，由 1 构成的组：[&quot;1&quot;, &quot;1&quot;, &quot;1&quot;]&#10;步骤 4：&quot;101<strong>1</strong>1&quot;，由 1 构成的组：[&quot;1&quot;, &quot;111&quot;]&#10;步骤 5：&quot;1<strong>1</strong>111&quot;，由 1 构成的组：[&quot;11111&quot;]&#10;不管是哪一步骤都无法形成长度为 2 的一组 1 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [1], m = 1&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>arr = [2,1], m = 2&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == arr.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10^5</code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= n</code></li>&#10;	<li><code>arr</code> 中的所有整数 <strong>互不相同</strong></li>&#10;	<li><code>1 &lt;= m &lt;= arr.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：并查集 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 的顺序把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，求最后一次出现长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 的连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 段的时刻。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，每步重建全串不可行。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mi>n</mi>
</math></span> 时整段一次填满，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。</p>
<p>并查集维护当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 连通块的大小。新点与左或右已填邻居合并前，若邻居块长度恰为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，则该时刻仍有一段长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>（即将被合并破坏），记下步骤。合并后更新块大小。</p>
</blockquote>
<p>正向遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span>，利用并查集动态维护每组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的长度。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2300-2399/2334.Subarray%20With%20Elements%20Greater%20Than%20Varying%20Threshold/README.md" target="_blank" rel="noopener noreferrer">2334. 元素值大于变化阈值的子数组</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findLatestStep(arr []int, m int) int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	if m == n {</span></span>
<span class="line"><span>		return n</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	p := make([]int, n)</span></span>
<span class="line"><span>	size := make([]int, n)</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	for i := range p {</span></span>
<span class="line"><span>		p[i] = i</span></span>
<span class="line"><span>		size[i] = 1</span></span>
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
<span class="line"><span>		if pa == pb {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p[pa] = pb</span></span>
<span class="line"><span>		size[pb] += size[pa]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ans := -1</span></span>
<span class="line"><span>	for i, v := range arr {</span></span>
<span class="line"><span>		v--</span></span>
<span class="line"><span>		if v > 0 &#x26;&#x26; vis[v-1] {</span></span>
<span class="line"><span>			if size[find(v-1)] == m {</span></span>
<span class="line"><span>				ans = i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			union(v, v-1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v &#x3C; n-1 &#x26;&#x26; vis[v+1] {</span></span>
<span class="line"><span>			if size[find(v+1)] == m {</span></span>
<span class="line"><span>				ans = i</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			union(v, v+1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[v] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态维护区间端点的长度 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>并查集查找带来额外对数因子，而合并只发生在区间端点。在每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 段的左右端记下长度，新点根据左右邻居的端点长度拼出新段，并写回新端点。判断与更新都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，总时间线性。</p>
</blockquote>
<p>我们其实并不需要去通过查找并查集来获取每个区间长度，我们只需要在每个区间端点处记录每个区间长度，由于合并的时候<strong>只会访问区间端点</strong>，所以合并区间的时候修改端点区间长度即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findLatestStep(arr []int, m int) int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	if m == n {</span></span>
<span class="line"><span>		return n</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := make([]int, n+2)</span></span>
<span class="line"><span>	ans := -1</span></span>
<span class="line"><span>	for i, v := range arr {</span></span>
<span class="line"><span>		l, r := cnt[v-1], cnt[v+1]</span></span>
<span class="line"><span>		if l == m || r == m {</span></span>
<span class="line"><span>			ans = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt[v-l], cnt[v+r] = l+r+1, l+r+1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-latest-group-of-size-m" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1562.Find%20Latest%20Group%20of%20Size%20M/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1574" tabindex="-1">1574. 删除最短的子数组使剩余数组有序 <a class="header-anchor" href="#q-1574" aria-label="Permalink to &quot;1574. 删除最短的子数组使剩余数组有序 {#q-1574}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、数组、双指针、二分查找、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>arr</code> ，请你删除一个子数组（可以为空），使得 <code>arr</code> 中剩下的元素是 <strong>非递减</strong> 的。</p>&#10;&#10;<p>一个子数组指的是原数组中连续的一个子序列。</p>&#10;&#10;<p>请你返回满足题目要求的最短子数组的长度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,2,3,10,4,2,3,5]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>我们需要删除的最短子数组是 [10,4,2] ，长度为 3 。剩余元素形成非递减数组 [1,2,3,3,5] 。&#10;另一个正确的解为删除子数组 [3,10,4] 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [5,4,3,2,1]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>由于数组是严格递减的，我们只能保留一个元素。所以我们需要删除长度为 4 的子数组，要么删除 [5,4,3,2]，要么删除 [4,3,2,1]。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1,2,3]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>数组已经是非递减的了，我们不需要删除任何元素。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [1]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 10^5</code></li>&#10;	<li><code>0 &lt;= arr[i] &lt;= 10^9</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>删除一段连续子数组后使剩余部分非递减，求最短删除长度。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能枚举删除区间。剩余数组只能是「一段前缀加一段后缀」，且前缀的末元不超过后缀的首元。</p>
<p>先找出最长非递减前缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与后缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。整段有序则答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；否则至少可删掉整段后缀或整段前缀。再枚举前缀右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，在后缀中二分第一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，删除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
</math></span> 并取最短。</p>
</blockquote>
<p>我们先找出数组的最长非递减前缀和最长非递减后缀，分别记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mn>0.</mn>
  <mo>.</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>j</mi>
</math></span>，说明数组本身就是非递减的，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则，我们可以选择删除右侧后缀，也可以选择删除左侧前缀，因此初始时答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>接下来，我们枚举左侧前缀的最右端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，我们可以通过二分查找，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 中找到第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，此时我们可以删除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1.</mn>
  <mo>.</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，并且更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">ans</mtext>
  <mo>,</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。继续枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，最终得到答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findLengthOfShortestSubarray(arr []int) int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	i, j := 0, n-1</span></span>
<span class="line"><span>	for i+1 &#x3C; n &#x26;&#x26; arr[i] &#x3C;= arr[i+1] {</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j-1 >= 0 &#x26;&#x26; arr[j-1] &#x3C;= arr[j] {</span></span>
<span class="line"><span>		j--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if i >= j {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := min(n-i-1, j)</span></span>
<span class="line"><span>	for l := 0; l &#x3C;= i; l++ {</span></span>
<span class="line"><span>		r := j + sort.SearchInts(arr[j:], arr[l])</span></span>
<span class="line"><span>		ans = min(ans, r-l-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 单独二分，多出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
</math></span> 因子。前缀与后缀都有序，随着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 增大，对应的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 只增不减，右指针单调右移即可，总时间降为线性。</p>
</blockquote>
<p>与方法一类似，我们先找出数组的最长非递减前缀和最长非递减后缀，分别记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mn>0.</mn>
  <mo>.</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2265;</mo>
  <mi>j</mi>
</math></span>，说明数组本身就是非递减的，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则，我们可以选择删除右侧后缀，也可以选择删除左侧前缀，因此初始时答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>接下来，我们枚举左侧前缀的最右端点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，我们直接利用双指针找到第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span> 的位置，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，此时我们可以删除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1.</mn>
  <mo>.</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，并且更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">ans</mtext>
  <mo>,</mo>
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。继续枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，最终得到答案。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findLengthOfShortestSubarray(arr []int) int {</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	i, j := 0, n-1</span></span>
<span class="line"><span>	for i+1 &#x3C; n &#x26;&#x26; arr[i] &#x3C;= arr[i+1] {</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j-1 >= 0 &#x26;&#x26; arr[j-1] &#x3C;= arr[j] {</span></span>
<span class="line"><span>		j--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if i >= j {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := min(n-i-1, j)</span></span>
<span class="line"><span>	r := j</span></span>
<span class="line"><span>	for l := 0; l &#x3C;= i; l++ {</span></span>
<span class="line"><span>		for r &#x3C; n &#x26;&#x26; arr[r] &#x3C; arr[l] {</span></span>
<span class="line"><span>			r += 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = min(ans, r-l-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/shortest-subarray-to-be-removed-to-make-array-sorted" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1574.Shortest%20Subarray%20to%20be%20Removed%20to%20Make%20Array%20Sorted/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1608" tabindex="-1">1608. 特殊数组的特征值 <a class="header-anchor" href="#q-1608" aria-label="Permalink to &quot;1608. 特殊数组的特征值 {#q-1608}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个非负整数数组 <code>nums</code> 。如果存在一个数 <code>x</code> ，使得 <code>nums</code> 中恰好有 <code>x</code> 个元素 <strong>大于或者等于</strong> <code>x</code> ，那么就称 <code>nums</code> 是一个 <strong>特殊数组</strong> ，而 <code>x</code> 是该数组的 <strong>特征值</strong> 。</p>&#10;&#10;<p>注意： <code>x</code> <strong>不必</strong> 是 <code>nums</code> 的中的元素。</p>&#10;&#10;<p>如果数组 <code>nums</code> 是一个 <strong>特殊数组</strong> ，请返回它的特征值 <code>x</code> 。否则，返回<em> </em><code>-1</code> 。可以证明的是，如果 <code>nums</code> 是特殊数组，那么其特征值 <code>x</code> 是 <strong>唯一的</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [3,5]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>有 2 个元素（3 和 5）大于或等于 2 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [0,0]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>没有满足题目要求的特殊数组，故而也不存在特征值 x 。&#10;如果 x = 0，应该有 0 个元素 >= x，但实际有 2 个。&#10;如果 x = 1，应该有 1 个元素 >= x，但实际有 0 个。&#10;如果 x = 2，应该有 2 个元素 >= x，但实际有 0 个。&#10;x 不能取更大的值，因为 nums 中只有两个元素。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [0,4,3,0,4]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>有 3 个元素大于或等于 3 。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [3,6,7,7,0]&#10;<strong>输出：</strong>-1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：暴力枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>特数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 只能落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，对每个候选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 扫描数组统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>x</mi>
</math></span> 的个数即可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 内判定。</p>
<p>若不存在这样的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，按题意返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>实现上直接枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，用一次线性计数比较是否等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
</blockquote>
<p>我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1.</mn>
  <mo>.</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，然后统计数组中大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的元素个数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>。若存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 相等，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</p>
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
</math></span> 是数组的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func specialArray(nums []int) int {</span></span>
<span class="line"><span>	for x := 1; x &#x3C;= len(nums); x++ {</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for _, v := range nums {</span></span>
<span class="line"><span>			if v >= x {</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt == x {</span></span>
<span class="line"><span>			return x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：排序 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 都整表扫描。排序之后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>x</mi>
</math></span> 的个数等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 减去第一个不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的下标，可用二分在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 内求得。</p>
<p>总复杂度降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 更大时更稳妥，本题规模下两者均可通过。</p>
</blockquote>
<p>我们也可以先对 <code v-pre>nums</code> 进行排序。</p>
<p>接下来同样枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，利用二分查找，找到 <code v-pre>nums</code> 中第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的元素，快速统计出 <code v-pre>nums</code> 中大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的元素个数。</p>
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
</math></span> 是数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func specialArray(nums []int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for x := 1; x &#x3C;= n; x++ {</span></span>
<span class="line"><span>		left, right := 0, n</span></span>
<span class="line"><span>		for left &#x3C; right {</span></span>
<span class="line"><span>			mid := (left + right) >> 1</span></span>
<span class="line"><span>			if nums[mid] >= x {</span></span>
<span class="line"><span>				right = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				left = mid + 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt := n - left</span></span>
<span class="line"><span>		if cnt == x {</span></span>
<span class="line"><span>			return x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1608.Special%20Array%20With%20X%20Elements%20Greater%20Than%20or%20Equal%20X/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1618" tabindex="-1">1618. 找出适应屏幕的最大字号 🔒 <a class="header-anchor" href="#q-1618" aria-label="Permalink to &quot;1618. 找出适应屏幕的最大字号 🔒 {#q-1618}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、字符串、二分查找、交互</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个字符串 <code>text</code>。并能够在 宽为 <code>w</code> 高为 <code>h</code> 的屏幕上显示该文本。</p>&#10;&#10;<p>字体数组中包含按<strong>升序排列</strong>的可用字号，您可以从该数组中选择任何字体大小。</p>&#10;&#10;<p>您可以使用<code>FontInfo</code>接口来获取任何<strong>可用字体大小</strong>的任何字符的宽度和高度。</p>&#10;&#10;<p><code>FontInfo</code>接口定义如下：</p>&#10;&#10;<pre>&#10;interface FontInfo {&#10;  // 返回 fontSize 大小的字符 ch 在屏幕上的宽度。&#10;  // 每调用该函数复杂度为 O(1)&#10;  public int getWidth(int fontSize, char ch);&#10;&#10;  // 返回 fontSize 大小的任意字符在屏幕上的高度。&#10;  // 每调用该函数复杂度为 O(1)&#10;  public int getHeight(int fontSize);&#10;}</pre>&#10;&#10;<p>一串字符的文本宽度应该是 <strong>每一个字符 </strong>在对应字号<code>(fontSize)</code>下返回的宽度<code>getWidth(fontSize, text[i])</code>的 <strong>总和 </strong>。对应字号的文本高度可由 <code>getHeight(fontSize)</code> 计算得到。</p>&#10;&#10;<p><strong>请注意：文本最多只能排放一排</strong></p>&#10;&#10;<p>如果使用相同的参数调用 <code>getHeight</code> 或 <code>getWidth</code> ，则可以保证 <code>FontInfo</code> 将返回相同的值。</p>&#10;&#10;<p>同时，对于任何字体大小的 <code>fontSize</code> 和任何字符 <code>ch</code> ：</p>&#10;&#10;<ul>&#10;	<li><code>getHeight(fontSize) &lt;= getHeight(fontSize+1)</code></li>&#10;	<li><code>getWidth(fontSize, ch) &lt;= getWidth(fontSize+1, ch)</code></li>&#10;</ul>&#10;&#10;<p>返回可用于在屏幕上显示文本的最大字体大小。<strong>如果文本不能以任何字体大小显示，则返回-1</strong>。</p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> text = &quot;helloworld&quot;, w = 80, h = 20, fonts = [6,8,10,12,14,16,18,24,36]&#10;<strong>输出:</strong> 6&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> text = &quot;leetcode&quot;, w = 1000, h = 50, fonts = [1,2,4]&#10;<strong>输出:</strong> 4&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> text = &quot;easyquestion&quot;, w = 100, h = 100, fonts = [10,15,20,25]&#10;<strong>输出:</strong> -1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>注意:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= text.length &lt;= 50000</code></li>&#10;	<li><code>text</code> 只包含小写字母</li>&#10;	<li><code>1 &lt;= w &lt;= 10<sup>7</sup></code></li>&#10;	<li><code>1 &lt;= h &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= fonts.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= fonts[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>fonts </code>已经按升序排序，且不包含重复项。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1618.Maximum%20Font%20to%20Fit%20a%20Sentence%20in%20a%20Screen/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p>基于 Doocs 二分参考改写，并先统计字符频次，避免每次判定扫描全文。fits(s) 要求字高不超过 h，且每个字符宽度乘次数的总和不超过 w；单调性允许查找最后一个可行字号。n 为文本长度，f 为字号数，时间 O(n + 26 log f)，空间 O(1)。宽度乘法用 int64。平台接口 FontInfo 提供 GetWidth(fontSize int, ch byte) int 和 GetHeight(fontSize int) int；代码用 Go interface 表达接口，测试 mock 的单调尺寸与官方样例结果兼容，真实尺寸由平台提供。</p>
<p>出处：<a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1618.Maximum%20Font%20to%20Fit%20a%20Sentence%20in%20a%20Screen/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题与题解</a>，固定提交 91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011；题意、参考及本 Go 改写采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 题意与参考：Doocs LeetCode，CC BY-SA 4.0。</span></span>
<span class="line"><span>// https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1618.Maximum%20Font%20to%20Fit%20a%20Sentence%20in%20a%20Screen/README.md</span></span>
<span class="line"><span>// Go 实现与测试沿用 CC BY-SA 4.0；来源性质见配套说明。</span></span>
<span class="line"><span>type FontInfo interface {</span></span>
<span class="line"><span>	GetWidth(int, byte) int</span></span>
<span class="line"><span>	GetHeight(int) int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func maxFont(text string, w, h int, fonts []int, fontInfo FontInfo) int {</span></span>
<span class="line"><span>	var counts [26]int64</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(text); i++ {</span></span>
<span class="line"><span>		counts[text[i]-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	fits := func(size int) bool {</span></span>
<span class="line"><span>		if fontInfo.GetHeight(size) > h {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		var width int64</span></span>
<span class="line"><span>		for c, n := range counts {</span></span>
<span class="line"><span>			if n > 0 {</span></span>
<span class="line"><span>				width += n * int64(fontInfo.GetWidth(size, byte(c)+'a'))</span></span>
<span class="line"><span>				if width > int64(w) {</span></span>
<span class="line"><span>					return false</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	lo, hi := 0, len(fonts)</span></span>
<span class="line"><span>	for lo &#x3C; hi {</span></span>
<span class="line"><span>		mid := lo + (hi-lo)/2</span></span>
<span class="line"><span>		if fits(fonts[mid]) {</span></span>
<span class="line"><span>			lo = mid + 1</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			hi = mid</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if lo == 0 {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return fonts[lo-1]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-font-to-fit-a-sentence-in-a-screen" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1618.Maximum%20Font%20to%20Fit%20a%20Sentence%20in%20a%20Screen/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1658" tabindex="-1">1658. 将 x 减到 0 的最小操作数 <a class="header-anchor" href="#q-1658" aria-label="Permalink to &quot;1658. 将 x 减到 0 的最小操作数 {#q-1658}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、二分查找、前缀和、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>x</code> 。每一次操作时，你应当移除数组 <code>nums</code> 最左边或最右边的元素，然后从 <code>x</code> 中减去该元素的值。请注意，需要 <strong>修改</strong> 数组以供接下来的操作使用。</p>&#10;&#10;<p>如果可以将 <code>x</code> <strong>恰好</strong> 减到 <code>0</code> ，返回<strong> 最小操作数 </strong>；否则，返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,1,4,2,3], x = 5&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>最佳解决方案是移除后两个元素，将 x 减到 0 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,6,7,8,9], x = 4&#10;<strong>输出：</strong>-1&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,2,20,1,1,3], x = 10&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= x &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 前缀和 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次只能删左右端点，使删除之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 且次数最少，等价于中间留下和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 的最长子数组。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，需要线性查找该子数组。</p>
<p>前缀和哈希：记下和第一次出现的下标，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>s</mi>
</math></span> 已出现则更新最长长度，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 减该长度。</p>
</blockquote>
<p>根据题目描述，我们需要移除数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 左右两端的元素，使得移除的元素和等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，且移除的元素个数最少。我们可以将问题转化为：找到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中最长的连续子数组，使得子数组的和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
      <mi>n</mi>
    </mrow>
  </munderover>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span>。这样，我们就可以将问题转化为求解数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的最长连续子数组的长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
  <mi>x</mi>
</math></span>。</p>
<p>我们初始化 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，然后使用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 来存储前缀和，键为前缀和，值为前缀和对应的下标。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，对于当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，计算前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 不在哈希表中，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 加入哈希表；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>s</mi>
</math></span> 在哈希表中，则更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minOperations(nums []int, x int) int {</span></span>
<span class="line"><span>	s := -x</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		s += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis := map[int]int{0: -1}</span></span>
<span class="line"><span>	mx, t := -1, 0</span></span>
<span class="line"><span>	for i, v := range nums {</span></span>
<span class="line"><span>		t += v</span></span>
<span class="line"><span>		if _, ok := vis[t]; !ok {</span></span>
<span class="line"><span>			vis[t] = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if j, ok := vis[t-s]; ok {</span></span>
<span class="line"><span>			mx = max(mx, i-j)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if mx == -1 {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(nums) - mx</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用哈希表。元素均为正，前缀和严格递增，可用双指针把窗口和压到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，省掉额外空间。</p>
</blockquote>
<p>基于方法一的分析，我们需要求解数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的最长连续子数组的长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。由于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的元素都是正整数，数组的前缀和只会单调递增，因此我们可以使用双指针来求解。</p>
<p>我们初始化指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，最长连续子数组的长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，对于当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，计算前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>+</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&gt;</mo>
  <mi>s</mi>
</math></span>，则移动指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2264;</mo>
  <mi>s</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>=</mo>
  <mi>s</mi>
</math></span>，则更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minOperations(nums []int, x int) int {</span></span>
<span class="line"><span>	s := -x</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		s += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mx, t, j := -1, 0, 0</span></span>
<span class="line"><span>	for i, v := range nums {</span></span>
<span class="line"><span>		t += v</span></span>
<span class="line"><span>		for ; j &#x3C;= i &#x26;&#x26; t > s; j++ {</span></span>
<span class="line"><span>			t -= nums[j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if t == s {</span></span>
<span class="line"><span>			mx = max(mx, i-j+1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if mx == -1 {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(nums) - mx</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1658.Minimum%20Operations%20to%20Reduce%20X%20to%20Zero/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1712" tabindex="-1">1712. 将数组分成三个子数组的方案数 <a class="header-anchor" href="#q-1712" aria-label="Permalink to &quot;1712. 将数组分成三个子数组的方案数 {#q-1712}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、双指针、二分查找、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们称一个分割整数数组的方案是 <strong>好的</strong> ，当它满足：</p>&#10;&#10;<ul>&#10;	<li>数组被分成三个 <strong>非空</strong> 连续子数组，从左至右分别命名为 <code>left</code> ， <code>mid</code> ， <code>right</code> 。</li>&#10;	<li><code>left</code> 中元素和小于等于 <code>mid</code> 中元素和，<code>mid</code> 中元素和小于等于 <code>right</code> 中元素和。</li>&#10;</ul>&#10;&#10;<p>给你一个 <strong>非负</strong> 整数数组 <code>nums</code> ，请你返回 <strong>好的</strong> 分割 <code>nums</code> 方案数目。由于答案可能会很大，请你将结果对 <code>10<sup>9 </sup>+ 7</code> 取余后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,1,1]&#10;<b>输出：</b>1&#10;<b>解释：</b>唯一一种好的分割方案是将 nums 分成 [1] [1] [1] 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [1,2,2,2,5,0]&#10;<b>输出：</b>3&#10;<b>解释：</b>nums 总共有 3 种好的分割方案：&#10;[1] [2] [2,2,5,0]&#10;[1] [2,2] [2,5,0]&#10;[1,2] [2,2] [5,0]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [3,2,1]&#10;<b>输出：</b>0&#10;<b>解释：</b>没有好的分割方案。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀和 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三段非空且前缀和满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mtext mathvariant="italic">left</mtext>
    </mrow>
  </msub>
  <mo>&#x2264;</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mtext mathvariant="italic">mid</mtext>
    </mrow>
  </msub>
  <mo>&#x2264;</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mtext mathvariant="italic">right</mtext>
    </mrow>
  </msub>
</math></span>。两重枚举分割点为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 不可行。</p>
<p>元素非负，前缀和单调。固定左段右端 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mid</mtext>
</math></span> 的右端落在一段连续区间，可用二分求出。</p>
<p>条件化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mn>2</mn>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>。对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 做两次二分，方案数对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
</blockquote>
<p>我们先预处理出数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表述数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个元素之和。</p>
<p>由于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的元素都是非负整数，因此前缀和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 是一个单调递增数组。</p>
<p>我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
</math></span> 的范围内枚举 <code v-pre>left</code> 子数组所能到达的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，然后利用前缀和数组单调递增的特性，通过二分查找的方式找到 <code v-pre>mid</code> 子数组分割的合理范围，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，累加方案数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
</math></span>。</p>
<p>二分细节上，子数组分割必须满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
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
</math></span>。即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2265;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mfrac>
    <mrow>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo stretchy="false">]</mo>
      <mo>+</mo>
      <mi>s</mi>
      <mo stretchy="false">[</mo>
      <mi>i</mi>
      <mo stretchy="false">]</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>。</p>
<p>最后，将方案数对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模后返回即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func waysToSplit(nums []int) (ans int) {</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	s := make([]int, n)</span></span>
<span class="line"><span>	s[0] = nums[0]</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		s[i] = s[i-1] + nums[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n-2; i++ {</span></span>
<span class="line"><span>		j := sort.Search(n-1, func(h int) bool { return h > i &#x26;&#x26; s[h] >= (s[i]&#x3C;&#x3C;1) })</span></span>
<span class="line"><span>		k := sort.Search(n-1, func(h int) bool { return h >= j &#x26;&#x26; s[h] > (s[n-1]+s[i])>>1 })</span></span>
<span class="line"><span>		ans = (ans + k - j) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/ways-to-split-array-into-three-subarrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1700-1799/1712.Ways%20to%20Split%20Array%20Into%20Three%20Subarrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=a(e,[["render",o]]);export{d as __pageData,w as default};
