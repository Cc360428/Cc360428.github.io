import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 哈希表（5）","description":"哈希表分类，第 2229–2682 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 哈希表（5）","description":"哈希表分类，第 2229–2682 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"哈希表分类，第 2229–2682 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 哈希表（4）","link":"/principles/algorithms/leetcode-go/hash-04"},"next":{"text":"LeetCode Go · 哈希表（6）","link":"/principles/algorithms/leetcode-go/hash-06"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 哈希表（4）","link":"/principles/algorithms/leetcode-go/hash-04"},"next":{"text":"LeetCode Go · 哈希表（6）","link":"/principles/algorithms/leetcode-go/hash-06"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/hash-05.md","filePath":"principles/algorithms/leetcode-go/hash-05.md"}'),m={name:"principles/algorithms/leetcode-go/hash-05.md"};function o(p,n,l,i,c,h){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-哈希表-5" tabindex="-1">LeetCode Go · 哈希表（5） <a class="header-anchor" href="#leetcode-go-·-哈希表-5" aria-label="Permalink to &quot;LeetCode Go · 哈希表（5）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-2229" tabindex="-1">2229. 检查数组是否连贯 🔒 <a class="header-anchor" href="#q-2229" aria-label="Permalink to &quot;2229. 检查数组是否连贯 🔒 {#q-2229}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> ，如果 <code>nums</code> 是一个 <strong>连贯数组</strong> ，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p><span>如果数组包含 </span><code>[x, x + n - 1]</code><span> 范围内的所有数字（包括 <code>x</code> 和 <code>x + n - 1</code> ），则该数组为连贯数组；其中</span> <code>x</code><span> 是数组中最小的数，</span><code>n</code> <span>是数组的长度。</span></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,3,4,2]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>&#10;最小值是 1 ，数组长度为 4 。&#10;范围 [x, x + n - 1] 中的所有值都出现在 nums 中：[1, 1 + 4 - 1] = [1, 4] = (1, 2, 3, 4) 。&#10;因此，nums 是一个连贯数组。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,3]&#10;<strong>输出：</strong>false&#10;<strong>解释：&#10;</strong>最小值是 1 ，数组长度为 2 。 &#10;范围 [x, x + n - 1] 中的所有值没有都出现在 nums 中：[1, 1 + 2 - 1] = [1, 2] = (1, 2) 。 &#10;因此，nums 不是一个连贯数组。 &#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,5,4]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>&#10;最小值是 3 ，数组长度为 3 。&#10;范围 [x, x + n - 1] 中的所有值都出现在 nums 中：[3, 3 + 3 - 1] = [3, 5] = (3，4，5) 。&#10;因此，nums 是一个连贯数组。&#10;</pre>&#10;&#10;<p> </p>&#10;<strong>提示：</strong>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断数组能否排成一段连续整数。排序后检查相邻差是否均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，可以过，但连续性还有更便宜的充要条件：元素互异，且最大值减最小值加一恰好等于长度。</p>
<p>用集合去重并同时取最小、最大。三量相等当且仅当原数组是某段连续区间的一个排列。</p>
</blockquote>
<p>我们可以用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 来存储数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的所有元素，用两个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mi</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 分别表示数组中的最小值和最大值。</p>
<p>如果数组中的所有元素都不相同，且数组的长度等于最大值和最小值之间的差值加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，那么数组就是连贯数组，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
</math></span>；否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">false</mtext>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isConsecutive(nums []int) bool {</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	mi, mx := nums[0], 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		if s[x] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s[x] = true</span></span>
<span class="line"><span>		mi = min(mi, x)</span></span>
<span class="line"><span>		mx = max(mx, x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return mx-mi+1 == len(nums)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-if-an-array-is-consecutive" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2229.Check%20if%20an%20Array%20Is%20Consecutive/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2248" tabindex="-1">2248. 多个数组求交集 <a class="header-anchor" href="#q-2248" aria-label="Permalink to &quot;2248. 多个数组求交集 {#q-2248}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二维整数数组 <code>nums</code> ，其中 <code>nums[i]</code> 是由 <strong>不同</strong> 正整数组成的一个非空数组，按 <strong>升序排列</strong> 返回一个数组，数组中的每个元素在 <code>nums</code> <strong>所有数组</strong> 中都出现过。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [[<em><strong>3</strong></em>,1,2,<em><strong>4</strong></em>,5],[1,2,<em><strong>3</strong></em>,<em><strong>4</strong></em>],[<em><strong>3</strong></em>,<em><strong>4</strong></em>,5,6]]&#10;<strong>输出：</strong>[3,4]&#10;<strong>解释：</strong>&#10;nums[0] = [<em><strong>3</strong></em>,1,2,<em><strong>4</strong></em>,5]，nums[1] = [1,2,<em><strong>3</strong></em>,<em><strong>4</strong></em>]，nums[2] = [<em><strong>3</strong></em>,<em><strong>4</strong></em>,5,6]，在 nums 中每个数组中都出现的数字是 3 和 4 ，所以返回 [3,4] 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [[1,2,3],[4,5,6]]&#10;<strong>输出：</strong>[]&#10;<strong>解释：</strong>&#10;不存在同时出现在 nums[0] 和 nums[1] 的整数，所以返回一个空列表 [] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= sum(nums[i].length) &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= nums[i][j] &lt;= 1000</code></li>&#10;	<li><code>nums[i]</code> 中的所有值 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求同时出现在每一个子数组中的数，并升序输出。各子数组内部元素互异，值域为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>1000</mn>
  <mo stretchy="false">]</mo>
</math></span>。逐对做集合交也可以，但多次分配集合没有必要。</p>
<p>开长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1001</mn>
</math></span> 的计数数组，每在一个子数组中见到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 就给 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 加一。最后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 等于子数组个数的那些 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 即为交集，按下标输出已有序。</p>
</blockquote>
<p>遍历数组 <code v-pre>nums</code>，对于每个数组 <code v-pre>arr</code>，统计数组 <code v-pre>arr</code> 中每个数字出现的次数，然后遍历计数数组，统计出现次数等于数组 <code v-pre>nums</code> 的长度的数字，即为答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>N</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1000</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>N</mi>
</math></span> 为数组 <code v-pre>nums</code> 中数字的总数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func intersection(nums [][]int) (ans []int) {</span></span>
<span class="line"><span>	cnt := [1001]int{}</span></span>
<span class="line"><span>	for _, arr := range nums {</span></span>
<span class="line"><span>		for _, x := range arr {</span></span>
<span class="line"><span>			cnt[x]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x, v := range cnt {</span></span>
<span class="line"><span>		if v == len(nums) {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一扫完再收集答案。计数过程中一旦 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 达到子数组个数，就可以立刻把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 放入答案，少一次整表扫描。最后再排序即可。值域不大，两种写法时间同阶。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func intersection(nums [][]int) (ans []int) {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, arr := range nums {</span></span>
<span class="line"><span>		for _, x := range arr {</span></span>
<span class="line"><span>			cnt[x]++</span></span>
<span class="line"><span>			if cnt[x] == len(nums) {</span></span>
<span class="line"><span>				ans = append(ans, x)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(ans)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/intersection-of-multiple-arrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2248.Intersection%20of%20Multiple%20Arrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2273" tabindex="-1">2273. 移除字母异位词后的结果数组 <a class="header-anchor" href="#q-2273" aria-label="Permalink to &quot;2273. 移除字母异位词后的结果数组 {#q-2273}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的字符串数组 <code>words</code> ，其中 <code>words[i]</code> 由小写英文字符组成。</p>&#10;&#10;<p>在一步操作中，需要选出任一下标 <code>i</code> ，从 <code>words</code> 中 <strong>删除</strong> <code>words[i]</code> 。其中下标 <code>i</code> 需要同时满足下述两个条件：</p>&#10;&#10;<ol>&#10;	<li><code>0 &lt; i &lt; words.length</code></li>&#10;	<li><code>words[i - 1]</code> 和 <code>words[i]</code> 是 <strong>字母异位词</strong> 。</li>&#10;</ol>&#10;&#10;<p>只要可以选出满足条件的下标，就一直执行这个操作。</p>&#10;&#10;<p>在执行所有操作后，返回 <code>words</code> 。可以证明，按任意顺序为每步操作选择下标都会得到相同的结果。</p>&#10;&#10;<p><strong>字母异位词</strong> 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。例如，<code>&quot;dacb&quot;</code> 是 <code>&quot;abdc&quot;</code> 的一个字母异位词。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;abba&quot;,&quot;baba&quot;,&quot;bbaa&quot;,&quot;cd&quot;,&quot;cd&quot;]&#10;<strong>输出：</strong>[&quot;abba&quot;,&quot;cd&quot;]&#10;<strong>解释：</strong>&#10;获取结果数组的方法之一是执行下述步骤：&#10;- 由于 words[2] = &quot;bbaa&quot; 和 words[1] = &quot;baba&quot; 是字母异位词，选择下标 2 并删除 words[2] 。&#10;  现在 words = [&quot;abba&quot;,&quot;baba&quot;,&quot;cd&quot;,&quot;cd&quot;] 。&#10;- 由于 words[1] = &quot;baba&quot; 和 words[0] = &quot;abba&quot; 是字母异位词，选择下标 1 并删除 words[1] 。&#10;  现在 words = [&quot;abba&quot;,&quot;cd&quot;,&quot;cd&quot;] 。&#10;- 由于 words[2] = &quot;cd&quot; 和 words[1] = &quot;cd&quot; 是字母异位词，选择下标 2 并删除 words[2] 。&#10;  现在 words = [&quot;abba&quot;,&quot;cd&quot;] 。&#10;无法再执行任何操作，所以 [&quot;abba&quot;,&quot;cd&quot;] 是最终答案。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]&#10;<strong>输出：</strong>[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]&#10;<strong>解释：</strong>&#10;words 中不存在互为字母异位词的两个相邻字符串，所以无需执行任何操作。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 10</code></li>&#10;	<li><code>words[i]</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>反复删除与前一个词互为字母异位词的词，直到相邻都不是。词数与词长都很小，一次从左到右保留「与答案末尾不是异位词」的词即可，因为删除不影响更早已经合法的相邻对。</p>
<p>先放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，其后仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check</mtext>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>,</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 判定不是异位词时追加。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check</mtext>
</math></span> 用计数数组比较，长度不同则一定保留。</p>
</blockquote>
<p>我们首先将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 加入答案数组，然后从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 开始遍历，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 不是字母异位词，我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入答案数组。</p>
<p>问题转换为判断两个字符串是否是字母异位词，我们定义一个辅助函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check</mtext>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>,</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 来实现这个功能。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 不是字母异位词，我们就返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。</p>
<p>在函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check</mtext>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>,</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 中，我们首先判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的长度是否相等，如果不相等，我们就返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>。否则，我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 来统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字符出现的次数，然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中的每个字符，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span> 减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span> 小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，我们就返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>。如果正常遍历完 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中的每个字符，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 是字母异位词，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">words</mtext>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 是字符集，这里是小写英文字母，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func removeAnagrams(words []string) []string {</span></span>
<span class="line"><span>	ans := []string{words[0]}</span></span>
<span class="line"><span>	check := func(s, t string) bool {</span></span>
<span class="line"><span>		if len(s) != len(t) {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt := [26]int{}</span></span>
<span class="line"><span>		for _, c := range s {</span></span>
<span class="line"><span>			cnt[c-'a']++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for _, c := range t {</span></span>
<span class="line"><span>			cnt[c-'a']--</span></span>
<span class="line"><span>			if cnt[c-'a'] &#x3C; 0 {</span></span>
<span class="line"><span>				return true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, t := range words[1:] {</span></span>
<span class="line"><span>		if check(words[i], t) {</span></span>
<span class="line"><span>			ans = append(ans, t)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-resultant-array-after-removing-anagrams" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2273.Find%20Resultant%20Array%20After%20Removing%20Anagrams/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2283" tabindex="-1">2283. 判断一个数的数字计数是否等于数位的值 <a class="header-anchor" href="#q-2283" aria-label="Permalink to &quot;2283. 判断一个数的数字计数是否等于数位的值 {#q-2283}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的字符串 <code>num</code> ，它只包含数字。</p>&#10;&#10;<p>如果对于 <strong>每个</strong><em> </em><code>0 &lt;= i &lt; n</code> 的下标 <code>i</code> ，都满足数位<em> </em><code>i</code> 在 <code>num</code> 中出现了 <code>num[i]</code>次，那么请你返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>num = &quot;1210&quot;&#10;<b>输出：</b>true&#10;<strong>解释：</strong>&#10;num[0] = '1' 。数字 0 在 num 中出现了一次。&#10;num[1] = '2' 。数字 1 在 num 中出现了两次。&#10;num[2] = '1' 。数字 2 在 num 中出现了一次。&#10;num[3] = '0' 。数字 3 在 num 中出现了零次。&#10;&quot;1210&quot; 满足题目要求条件，所以返回 true 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>num = &quot;030&quot;&#10;<b>输出：</b>false&#10;<strong>解释：</strong>&#10;num[0] = '0' 。数字 0 应该出现 0 次，但是在 num 中出现了两次。&#10;num[1] = '3' 。数字 1 应该出现 3 次，但是在 num 中出现了零次。&#10;num[2] = '0' 。数字 2 在 num 中出现了 0 次。&#10;下标 0 和 1 都违反了题目要求，所以返回 false 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == num.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10</code></li>&#10;	<li><code>num</code> 只包含数字。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 等于数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 在串中的出现次数。长度至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span>，先计数再按下标核对即可。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Counter</mtext>
</math></span> 统计各位，再检查 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 是否等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 中每个数字出现的次数，然后再枚举字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 中的每个数字，判断其出现的次数是否等于该数字本身。如果对于所有的数字都满足这个条件，那么返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。</p>
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
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 是数字的取值范围，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func digitCount(num string) bool {</span></span>
<span class="line"><span>	cnt := [10]int{}</span></span>
<span class="line"><span>	for _, c := range num {</span></span>
<span class="line"><span>		cnt[c-'0']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, c := range num {</span></span>
<span class="line"><span>		if int(c-'0') != cnt[i] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2283.Check%20if%20Number%20Has%20Equal%20Digit%20Count%20and%20Digit%20Value/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2284" tabindex="-1">2284. 最多单词数的发件人 <a class="header-anchor" href="#q-2284" aria-label="Permalink to &quot;2284. 最多单词数的发件人 {#q-2284}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个聊天记录，共包含 <code>n</code> 条信息。给你两个字符串数组 <code>messages</code> 和 <code>senders</code> ，其中 <code>messages[i]</code> 是 <code>senders[i]</code> 发出的一条 <strong>信息</strong> 。</p>&#10;&#10;<p>一条 <strong>信息</strong> 是若干用单个空格连接的 <strong>单词</strong> ，信息开头和结尾不会有多余空格。发件人的 <strong>单词计数</strong> 是这个发件人总共发出的 <strong>单词数</strong> 。注意，一个发件人可能会发出多于一条信息。</p>&#10;&#10;<p>请你返回发出单词数 <strong>最多</strong> 的发件人名字。如果有多个发件人发出最多单词数，请你返回 <strong>字典序</strong> 最大的名字。</p>&#10;&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li>字典序里，大写字母小于小写字母。</li>&#10;	<li><code>&quot;Alice&quot;</code> 和 <code>&quot;alice&quot;</code> 是不同的名字。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>messages = [&quot;Hello userTwooo&quot;,&quot;Hi userThree&quot;,&quot;Wonderful day Alice&quot;,&quot;Nice day userThree&quot;], senders = [&quot;Alice&quot;,&quot;userTwo&quot;,&quot;userThree&quot;,&quot;Alice&quot;]&#10;<b>输出：</b>&quot;Alice&quot;&#10;<b>解释：</b>Alice 总共发出了 2 + 3 = 5 个单词。&#10;userTwo 发出了 2 个单词。&#10;userThree 发出了 3 个单词。&#10;由于 Alice 发出单词数最多，所以我们返回 &quot;Alice&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>messages = [&quot;How is leetcode for everyone&quot;,&quot;Leetcode is useful for practice&quot;], senders = [&quot;Bob&quot;,&quot;Charlie&quot;]&#10;<b>输出：</b>&quot;Charlie&quot;&#10;<b>解释：</b>Bob 总共发出了 5 个单词。&#10;Charlie 总共发出了 5 个单词。&#10;由于最多单词数打平，返回字典序最大的名字，也就是 Charlie 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == messages.length == senders.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= messages[i].length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= senders[i].length &lt;= 10</code></li>&#10;	<li><code>messages[i]</code> 包含大写字母、小写字母和 <code>' '</code> 。</li>&#10;	<li><code>messages[i]</code> 中所有单词都由 <strong>单个空格</strong> 隔开。</li>&#10;	<li><code>messages[i]</code> 不包含前导和后缀空格。</li>&#10;	<li><code>senders[i]</code> 只包含大写英文字母和小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计每人发出的单词总数，取最大者；并列时取字典序更大的名字。消息数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，按空格切分即可，不必建复杂结构。</p>
<p>单词数等于空格数加一。哈希表累加后遍历，同时用当前最优名字做并列比较。</p>
</blockquote>
<p>我们可以用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录每个发件人的单词数，然后遍历哈希表找到单词数最多的发件人，如果有多个发件人发出最多单词数，我们返回字典序最大的名字。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是消息的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 是所有消息的总长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestWordCount(messages []string, senders []string) string {</span></span>
<span class="line"><span>	cnt := make(map[string]int)</span></span>
<span class="line"><span>	for i, message := range messages {</span></span>
<span class="line"><span>		v := strings.Count(message, " ") + 1</span></span>
<span class="line"><span>		cnt[senders[i]] += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ans := senders[0]</span></span>
<span class="line"><span>	for k, v := range cnt {</span></span>
<span class="line"><span>		if cnt[ans] &#x3C; v || (cnt[ans] == v &#x26;&#x26; ans &#x3C; k) {</span></span>
<span class="line"><span>			ans = k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sender-with-largest-word-count" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2284.Sender%20With%20Largest%20Word%20Count/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2287" tabindex="-1">2287. 重排字符形成目标字符串 <a class="header-anchor" href="#q-2287" aria-label="Permalink to &quot;2287. 重排字符形成目标字符串 {#q-2287}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个下标从 <strong>0</strong> 开始的字符串 <code>s</code> 和 <code>target</code> 。你可以从 <code>s</code> 取出一些字符并将其重排，得到若干新的字符串。</p>&#10;&#10;<p>从 <code>s</code> 中取出字符并重新排列，返回可以形成 <code>target</code> 的 <strong>最大</strong> 副本数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;ilovecodingonleetcode&quot;, target = &quot;code&quot;&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;对于 &quot;code&quot; 的第 1 个副本，选取下标为 4 、5 、6 和 7 的字符。&#10;对于 &quot;code&quot; 的第 2 个副本，选取下标为 17 、18 、19 和 20 的字符。&#10;形成的字符串分别是 &quot;ecod&quot; 和 &quot;code&quot; ，都可以重排为 &quot;code&quot; 。&#10;可以形成最多 2 个 &quot;code&quot; 的副本，所以返回 2 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcba&quot;, target = &quot;abc&quot;&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>&#10;选取下标为 0 、1 和 2 的字符，可以形成 &quot;abc&quot; 的 1 个副本。 &#10;可以形成最多 1 个 &quot;abc&quot; 的副本，所以返回 1 。&#10;注意，尽管下标 3 和 4 分别有额外的 'a' 和 'b' ，但不能重用下标 2 处的 'c' ，所以无法形成 &quot;abc&quot; 的第 2 个副本。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abbaccaddaeea&quot;, target = &quot;aaaaa&quot;&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>&#10;选取下标为 0 、3 、6 、9 和 12 的字符，可以形成 &quot;aaaaa&quot; 的 1 个副本。&#10;可以形成最多 1 个 &quot;aaaaa&quot; 的副本，所以返回 1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= target.length &lt;= 10</code></li>&#10;	<li><code>s</code> 和 <code>target</code> 由小写英文字母组成</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>注意：</strong>本题与 <a href="https://leetcode.cn/problems/maximum-number-of-balloons/" target="_blank" rel="noopener noreferrer">1189. “气球” 的最大数量</a> 相同。</p></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中的字母复制 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 尽量多次，字母不能重复使用。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，瓶颈是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 中需求最多、相对供给最少的那个字母。</p>
<p>分别计数后，对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的每种字母取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>c</mi>
  <mi>n</mi>
  <msub>
    <mi>t</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>c</mi>
  <mi>n</mi>
  <msub>
    <mi>t</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 的最小值。</p>
</blockquote>
<p>我们统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 中每个字符出现的次数，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt2</mtext>
</math></span>。对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 中的每个字符，我们计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt1</mtext>
</math></span> 中该字符出现的次数除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt2</mtext>
</math></span> 中该字符出现的次数，取最小值即可。</p>
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
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 的长度。而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func rearrangeCharacters(s string, target string) int {</span></span>
<span class="line"><span>	var cnt1, cnt2 [26]int</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		cnt1[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, c := range target {</span></span>
<span class="line"><span>		cnt2[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 100</span></span>
<span class="line"><span>	for i, v := range cnt2 {</span></span>
<span class="line"><span>		if v > 0 {</span></span>
<span class="line"><span>			ans = min(ans, cnt1[i]/v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/rearrange-characters-to-make-target-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2287.Rearrange%20Characters%20to%20Make%20Target%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2295" tabindex="-1">2295. 替换数组中的元素 <a class="header-anchor" href="#q-2295" aria-label="Permalink to &quot;2295. 替换数组中的元素 {#q-2295}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，它包含 <code>n</code> 个 <strong>互不相同</strong> 的正整数。请你对这个数组执行 <code>m</code> 个操作，在第 <code>i</code> 个操作中，你需要将数字 <code>operations[i][0]</code> 替换成 <code>operations[i][1]</code> 。</p>&#10;&#10;<p>题目保证在第 <code>i</code> 个操作中：</p>&#10;&#10;<ul>&#10;	<li><code>operations[i][0]</code> 在 <code>nums</code> 中存在。</li>&#10;	<li><code>operations[i][1]</code> 在 <code>nums</code> 中不存在。</li>&#10;</ul>&#10;&#10;<p>请你返回执行完所有操作后的数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]]&#10;<b>输出：</b>[3,2,7,1]&#10;<b>解释：</b>我们对 nums 执行以下操作：&#10;- 将数字 1 替换为 3 。nums 变为 [<em><strong>3</strong></em>,2,4,6] 。&#10;- 将数字 4 替换为 7 。nums 变为 [3,2,<em><strong>7</strong></em>,6] 。&#10;- 将数字 6 替换为 1 。nums 变为 [3,2,7,<em><strong>1</strong></em>] 。&#10;返回最终数组 [3,2,7,1] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,2], operations = [[1,3],[2,1],[3,2]]&#10;<b>输出：</b>[2,1]&#10;<b>解释：</b>我们对 nums 执行以下操作：&#10;- 将数字 1 替换为 3 。nums 变为 [<em><strong>3</strong></em>,2] 。&#10;- 将数字 2 替换为 1 。nums 变为 [3,<em><strong>1</strong></em>] 。&#10;- 将数字 3 替换为 2 。nums 变为 [<em><strong>2</strong></em>,1] 。&#10;返回最终数组 [2,1] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>m == operations.length</code></li>&#10;	<li><code>1 &lt;= n, m &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>nums</code> 中所有数字 <strong>互不相同</strong> 。</li>&#10;	<li><code>operations[i].length == 2</code></li>&#10;	<li><code>1 &lt;= nums[i], operations[i][0], operations[i][1] &lt;= 10<sup>6</sup></code></li>&#10;	<li>在执行第 <code>i</code> 个操作时，<code>operations[i][0]</code> 在 <code>nums</code> 中存在。</li>&#10;	<li>在执行第 <code>i</code> 个操作时，<code>operations[i][1]</code> 在 <code>nums</code> 中不存在。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次把数组中的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 换成尚未出现的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，操作达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。线性查找 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的位置会超时。值互不相同，可用哈希表记下值到下标的映射。</p>
<p>执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 时改 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>，并把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 设为同一位置。无需删除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span>，因为后续不会再操作旧值。</p>
</blockquote>
<p>我们先用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中每个数字的下标，然后遍历操作数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">operations</mtext>
</math></span>，对于每个操作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 对应的数字替换为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，并更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 即可。</p>
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
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度和操作数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">operations</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func arrayChange(nums []int, operations [][]int) []int {</span></span>
<span class="line"><span>	d := map[int]int{}</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		d[x] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, op := range operations {</span></span>
<span class="line"><span>		x, y := op[0], op[1]</span></span>
<span class="line"><span>		nums[d[x]] = y</span></span>
<span class="line"><span>		d[y] = d[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nums</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/replace-elements-in-an-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2295.Replace%20Elements%20in%20an%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2301" tabindex="-1">2301. 替换字符后匹配 <a class="header-anchor" href="#q-2301" aria-label="Permalink to &quot;2301. 替换字符后匹配 {#q-2301}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、字符串匹配</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个字符串 <code>s</code> 和 <code>sub</code> 。同时给你一个二维字符数组 <code>mappings</code> ，其中 <code>mappings[i] = [old<sub>i</sub>, new<sub>i</sub>]</code> 表示你可以将 <code>sub</code> 中任意数目的 <code>old<sub>i</sub></code> 字符替换为 <code>new<sub>i</sub></code> 。<code>sub</code> 中每个字符 <b>不能</b> 被替换超过一次。</p>&#10;&#10;<p>如果使用 <code>mappings</code> 替换 0 个或者若干个字符，可以将 <code>sub</code> 变成 <code>s</code> 的一个子字符串，请你返回 <code>true</code>，否则返回 <code>false</code> 。</p>&#10;&#10;<p>一个 <strong>子字符串</strong> 是字符串中连续非空的字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;fool3e7bar&quot;, sub = &quot;leet&quot;, mappings = [[&quot;e&quot;,&quot;3&quot;],[&quot;t&quot;,&quot;7&quot;],[&quot;t&quot;,&quot;8&quot;]]&#10;<b>输出：</b>true&#10;<b>解释：</b>将 sub 中第一个 'e' 用 '3' 替换，将 't' 用 '7' 替换。&#10;现在 sub = &quot;l3e7&quot; ，它是 s 的子字符串，所以我们返回 true 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;fooleetbar&quot;, sub = &quot;f00l&quot;, mappings = [[&quot;o&quot;,&quot;0&quot;]]&#10;<b>输出：</b>false&#10;<b>解释：</b>字符串 &quot;f00l&quot; 不是 s 的子串且没有可以进行的修改。&#10;注意我们不能用 'o' 替换 '0' 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>s = &quot;Fool33tbaR&quot;, sub = &quot;leetd&quot;, mappings = [[&quot;e&quot;,&quot;3&quot;],[&quot;t&quot;,&quot;7&quot;],[&quot;t&quot;,&quot;8&quot;],[&quot;d&quot;,&quot;b&quot;],[&quot;p&quot;,&quot;b&quot;]]&#10;<b>输出：</b>true&#10;<b>解释：</b>将 sub 里第一个和第二个 'e' 用 '3' 替换，用 'b' 替换 sub 里的 'd' 。&#10;得到 sub = &quot;l33tb&quot; ，它是 s 的子字符串，所以我们返回 true 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= sub.length &lt;= s.length &lt;= 5000</code></li>&#10;	<li><code>0 &lt;= mappings.length &lt;= 1000</code></li>&#10;	<li><code>mappings[i].length == 2</code></li>&#10;	<li><code>old<sub>i</sub> != new<sub>i</sub></code></li>&#10;	<li><code>s</code> 和 <code>sub</code> 只包含大写和小写英文字母和数字。</li>&#10;	<li><code>old<sub>i</sub></code> 和 <code>new<sub>i</sub></code> 是大写、小写字母或者是个数字。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>映射只允许一步替换，因此判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>b</mi>
</math></span> 能否对准 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的某一段，只需按长度枚举起点并逐位核验。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2264;</mo>
  <mn>5000</mn>
</math></span>，对齐次数与子串长度之积约为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2.5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>7</mn>
  </msup>
</math></span>，可以接受。</p>
<p>同一字符可能对应多个新字符，逐次扫描映射表会重复工作。将每个旧字符的可达集合收入哈希表后，对齐时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 查询「相等或可替换」即可。</p>
</blockquote>
<p>我们先用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录每个字符可以替换成的字符集合。</p>
<p>然后我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中所有长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>b</mi>
</math></span> 长度的子串，判断字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>b</mi>
</math></span> 是否可以通过替换得到该子串，如果可以则返回 <code v-pre>true</code>，否则枚举下一个子串。</p>
<p>枚举结束，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>b</mi>
</math></span> 无法通过替换得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中的任何子串，返回 <code v-pre>false</code>。</p>
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
    <mi>C</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>b</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 是字符集的大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func matchReplacement(s string, sub string, mappings [][]byte) bool {</span></span>
<span class="line"><span>	d := map[byte]map[byte]bool{}</span></span>
<span class="line"><span>	for _, e := range mappings {</span></span>
<span class="line"><span>		if d[e[0]] == nil {</span></span>
<span class="line"><span>			d[e[0]] = map[byte]bool{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		d[e[0]][e[1]] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(s)-len(sub)+1; i++ {</span></span>
<span class="line"><span>		ok := true</span></span>
<span class="line"><span>		for j := 0; j &#x3C; len(sub) &#x26;&#x26; ok; j++ {</span></span>
<span class="line"><span>			a, b := s[i+j], sub[j]</span></span>
<span class="line"><span>			if a != b &#x26;&#x26; !d[b][a] {</span></span>
<span class="line"><span>				ok = false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ok {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：数组 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用哈希集合存储映射，常数受散列影响。字符集仅为大小写字母与数字，因此改用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>128</mn>
  <mo>&#xD7;</mo>
  <mn>128</mn>
</math></span> 的布尔数组标记可达关系，查询与空间均变为下标访问，算法流程不变。</p>
</blockquote>
<p>由于字符集只包含大写和小写英文字母和数字，因此我们可以直接用一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>128</mn>
  <mo>&#xD7;</mo>
  <mn>128</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录每个字符可以替换成的字符集合。</p>
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
    <mi>C</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func matchReplacement(s string, sub string, mappings [][]byte) bool {</span></span>
<span class="line"><span>	d := [128][128]bool{}</span></span>
<span class="line"><span>	for _, e := range mappings {</span></span>
<span class="line"><span>		d[e[0]][e[1]] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(s)-len(sub)+1; i++ {</span></span>
<span class="line"><span>		ok := true</span></span>
<span class="line"><span>		for j := 0; j &#x3C; len(sub) &#x26;&#x26; ok; j++ {</span></span>
<span class="line"><span>			a, b := s[i+j], sub[j]</span></span>
<span class="line"><span>			if a != b &#x26;&#x26; !d[b][a] {</span></span>
<span class="line"><span>				ok = false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ok {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/match-substring-after-replacement" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2301.Match%20Substring%20After%20Replacement/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2309" tabindex="-1">2309. 兼具大小写的最好英文字母 <a class="header-anchor" href="#q-2309" aria-label="Permalink to &quot;2309. 兼具大小写的最好英文字母 {#q-2309}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个由英文字母组成的字符串 <code>s</code> ，请你找出并返回 <code>s</code> 中的 <strong>最好</strong> 英文字母。返回的字母必须为大写形式。如果不存在满足条件的字母，则返回一个空字符串。</p>&#10;&#10;<p><strong>最好</strong> 英文字母的大写和小写形式必须 <strong>都</strong> 在 <code>s</code> 中出现。</p>&#10;&#10;<p>英文字母 <code>b</code> 比另一个英文字母 <code>a</code> <strong>更好</strong> 的前提是：英文字母表中，<code>b</code> 在 <code>a</code> 之 <strong>后</strong> 出现。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;l<em><strong>Ee</strong></em>TcOd<em><strong>E</strong></em>&quot;&#10;<strong>输出：</strong>&quot;E&quot;&#10;<strong>解释：</strong>&#10;字母 'E' 是唯一一个大写和小写形式都出现的字母。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;a<em><strong>rR</strong></em>AzFif&quot;&#10;<strong>输出：</strong>&quot;R&quot;&#10;<strong>解释：</strong>&#10;字母 'R' 是大写和小写形式都出现的最好英文字母。&#10;注意 'A' 和 'F' 的大写和小写形式也都出现了，但是 'R' 比 'F' 和 'A' 更好。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;AbCdEfGhIjK&quot;&#10;<strong>输出：</strong>&quot;&quot;&#10;<strong>解释：</strong>&#10;不存在大写和小写形式都出现的字母。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 1000</code></li>&#10;	<li><code>s</code> 由小写和大写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>，需要同时出现大小写的最大字母。将出现过的字符放入集合后，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>Z</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>A</mi>
</math></span> 检查即可，第一次命中便是答案。</p>
<p>集合保证大小写各一次哈希查询。若都不存在，返回空串。</p>
</blockquote>
<p>我们先用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>s</mi>
</math></span> 记录字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中出现的所有字母，然后从大写字母表的最后一个字母开始枚举，如果当前字母的大写和小写形式都在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>s</mi>
</math></span> 中，则返回该字母。</p>
<p>枚举结束后，如果没有找到符合条件的字母，则返回空字符串。</p>
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
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度和字符集的大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func greatestLetter(s string) string {</span></span>
<span class="line"><span>	ss := map[rune]bool{}</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		ss[c] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for c := 'Z'; c >= 'A'; c-- {</span></span>
<span class="line"><span>		if ss[c] &#x26;&#x26; ss[rune(c+32)] {</span></span>
<span class="line"><span>			return string(c)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ""</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：位运算（空间优化） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一占用与字符集同阶的额外空间。字母只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 个，可用两个整型掩码分别记录大小写出现位，再取交。最高的置位对应最大字母，从而把空间压到常数。</p>
</blockquote>
<p>我们可以用两个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span> 分别记录字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中出现的小写字母和大写字母，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个小写字母是否出现，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个大写字母是否出现。</p>
<p>然后我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span> 进行与运算，得到的结果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字母的大小写是否同时出现。</p>
<p>接下来我们只要获取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 的二进制表示中最高位的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的位置，将其转换为对应的大写字母即可。如果所有二进制位都不为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，说明不存在大小写同时出现的字母，返回空字符串。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func greatestLetter(s string) string {</span></span>
<span class="line"><span>	mask1, mask2 := 0, 0</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		if unicode.IsLower(c) {</span></span>
<span class="line"><span>			mask1 |= 1 &#x3C;&#x3C; (c - 'a')</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			mask2 |= 1 &#x3C;&#x3C; (c - 'A')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mask := mask1 &#x26; mask2</span></span>
<span class="line"><span>	if mask == 0 {</span></span>
<span class="line"><span>		return ""</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(byte(bits.Len(uint(mask))-1) + 'A')</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2309.Greatest%20English%20Letter%20in%20Upper%20and%20Lower%20Case/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2325" tabindex="-1">2325. 解密消息 <a class="header-anchor" href="#q-2325" aria-label="Permalink to &quot;2325. 解密消息 {#q-2325}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你字符串 <code>key</code> 和 <code>message</code> ，分别表示一个加密密钥和一段加密消息。解密 <code>message</code> 的步骤如下：</p>&#10;&#10;<ol>&#10;	<li>使用 <code>key</code> 中 26 个英文小写字母第一次出现的顺序作为替换表中的字母 <strong>顺序</strong> 。</li>&#10;	<li>将替换表与普通英文字母表对齐，形成对照表。</li>&#10;	<li>按照对照表 <strong>替换</strong> <code>message</code> 中的每个字母。</li>&#10;	<li>空格 <code>' '</code> 保持不变。</li>&#10;</ol>&#10;&#10;<ul>&#10;	<li>例如，<code>key = &quot;<em><strong>hap</strong></em>p<em><strong>y</strong></em> <em><strong>bo</strong></em>y&quot;</code>（实际的加密密钥会包含字母表中每个字母 <strong>至少一次</strong>），据此，可以得到部分对照表（<code>'h' -> 'a'</code>、<code>'a' -> 'b'</code>、<code>'p' -> 'c'</code>、<code>'y' -> 'd'</code>、<code>'b' -> 'e'</code>、<code>'o' -> 'f'</code>）。</li>&#10;</ul>&#10;&#10;<p>返回解密后的消息。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2300-2399/2325.Decode%20the%20Message/images/ex1new4.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>key = &quot;the quick brown fox jumps over the lazy dog&quot;, message = &quot;vkbs bs t suepuv&quot;&#10;<strong>输出：</strong>&quot;this is a secret&quot;&#10;<strong>解释：</strong>对照表如上图所示。&#10;提取 &quot;<em><strong>the</strong></em> <em><strong>quick</strong></em> <em><strong>brown</strong></em> <em><strong>f</strong></em>o<em><strong>x</strong></em> <em><strong>j</strong></em>u<em><strong>mps</strong></em> o<em><strong>v</strong></em>er the <em><strong>lazy</strong></em> <em><strong>d</strong></em>o<em><strong>g</strong></em>&quot; 中每个字母的首次出现可以得到替换表。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2300-2399/2325.Decode%20the%20Message/images/ex2new.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>key = &quot;eljuxhpwnyrdgtqkviszcfmabo&quot;, message = &quot;zwx hnfx lqantp mnoeius ycgk vcnjrdb&quot;&#10;<strong>输出：</strong>&quot;the five boxing wizards jump quickly&quot;&#10;<strong>解释：</strong>对照表如上图所示。&#10;提取 &quot;<em><strong>eljuxhpwnyrdgtqkviszcfmabo</strong></em>&quot; 中每个字母的首次出现可以得到替换表。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>26 &lt;= key.length &lt;= 2000</code></li>&#10;	<li><code>key</code> 由小写英文字母及 <code>' '</code> 组成</li>&#10;	<li><code>key</code> 包含英文字母表中每个字符（<code>'a'</code> 到 <code>'z'</code>）<strong>至少一次</strong></li>&#10;	<li><code>1 &lt;= message.length &lt;= 2000</code></li>&#10;	<li><code>message</code> 由小写英文字母和 <code>' '</code> 组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组或哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>密钥按首次出现的字母依次对应 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mi>e</mi>
  <mi>y</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mi>a</mi>
  <mi>g</mi>
  <mi>e</mi>
</math></span> 均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2000</mn>
</math></span>，建表后替换即可。</p>
<p>用哈希表记下每个字母第一次出现时分到的明文，空格保持空格。遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>s</mi>
  <mi>a</mi>
  <mi>g</mi>
  <mi>e</mi>
</math></span> 按表写出译文，避免对每个字符重新扫描密钥。</p>
</blockquote>
<p>我们可以使用数组或哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 存储对照表，然后遍历 <code v-pre>message</code> 中的每个字符，将其替换为对应的字符即可。</p>
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
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为 <code v-pre>key</code> 和 <code v-pre>message</code> 的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func decodeMessage(key string, message string) string {</span></span>
<span class="line"><span>	d := [128]byte{}</span></span>
<span class="line"><span>	d[' '] = ' '</span></span>
<span class="line"><span>	for i, j := 0, 0; i &#x3C; len(key); i++ {</span></span>
<span class="line"><span>		if d[key[i]] == 0 {</span></span>
<span class="line"><span>			d[key[i]] = byte('a' + j)</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []byte(message)</span></span>
<span class="line"><span>	for i, c := range ans {</span></span>
<span class="line"><span>		ans[i] = d[c]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/decode-the-message" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2325.Decode%20the%20Message/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2341" tabindex="-1">2341. 数组能形成多少数对 <a class="header-anchor" href="#q-2341" aria-label="Permalink to &quot;2341. 数组能形成多少数对 {#q-2341}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 。在一步操作中，你可以执行以下步骤：</p>&#10;&#10;<ul>&#10;	<li>从 <code>nums</code> 选出 <strong>两个</strong> <strong>相等的</strong> 整数</li>&#10;	<li>从 <code>nums</code> 中移除这两个整数，形成一个 <strong>数对</strong></li>&#10;</ul>&#10;&#10;<p>请你在 <code>nums</code> 上多次执行此操作直到无法继续执行。</p>&#10;&#10;<p>返回一个下标从 <strong>0</strong> 开始、长度为 <code>2</code> 的整数数组 <code>answer</code> 作为答案，其中<em> </em><code>answer[0]</code><em> </em>是形成的数对数目，<code>answer[1]</code> 是对 <code>nums</code> 尽可能执行上述操作后剩下的整数数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,3,2,1,3,2,2]&#10;<strong>输出：</strong>[3,1]&#10;<strong>解释：</strong>&#10;nums[0] 和 nums[3] 形成一个数对，并从 nums 中移除，nums = [3,2,3,2,2] 。&#10;nums[0] 和 nums[2] 形成一个数对，并从 nums 中移除，nums = [2,2,2] 。&#10;nums[0] 和 nums[1] 形成一个数对，并从 nums 中移除，nums = [2] 。&#10;无法形成更多数对。总共形成 3 个数对，nums 中剩下 1 个数字。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,1]&#10;<strong>输出：</strong>[1,0]&#10;<strong>解释：</strong>nums[0] 和 nums[1] 形成一个数对，并从 nums 中移除，nums = [] 。&#10;无法形成更多数对。总共形成 1 个数对，nums 中剩下 0 个数字。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [0]&#10;<strong>输出：</strong>[0,1]&#10;<strong>解释：</strong>无法形成数对，nums 中剩下 1 个数字。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>相同数字两两成对，求对数与剩余个数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，计数后整除即可。</p>
<p>统计每个值的出现次数，对数为各 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>v</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 之和，剩余为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mi>s</mi>
</math></span>。</p>
</blockquote>
<p>我们可以统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 出现的次数，记录在哈希表或数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 中。</p>
<p>然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>，对于每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 出现的次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则可以从数组中选出两个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 形成一个数对，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 向下取整，即可得到当前数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 可以形成的数对数目，然后我们累加这个数目到变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中。</p>
<p>最后剩余的个数为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度减去可以形成的数对数目乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
</math></span>。</p>
<p>答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
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
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中数字的范围，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>101</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfPairs(nums []int) []int {</span></span>
<span class="line"><span>	cnt := [101]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, v := range cnt {</span></span>
<span class="line"><span>		s += v / 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return []int{s, len(nums) - s*2}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-pairs-in-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2341.Maximum%20Number%20of%20Pairs%20in%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2347" tabindex="-1">2347. 最好的扑克手牌 <a class="header-anchor" href="#q-2347" aria-label="Permalink to &quot;2347. 最好的扑克手牌 {#q-2347}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>ranks</code> 和一个字符数组 <code>suit</code> 。你有 <code>5</code> 张扑克牌，第 <code>i</code> 张牌大小为 <code>ranks[i]</code> ，花色为 <code>suits[i]</code> 。</p>&#10;&#10;<p>下述是从好到坏你可能持有的 <strong>手牌类型 </strong>：</p>&#10;&#10;<ol>&#10;	<li><code>&quot;Flush&quot;</code>：同花，五张相同花色的扑克牌。</li>&#10;	<li><code>&quot;Three of a Kind&quot;</code>：三条，有 3 张大小相同的扑克牌。</li>&#10;	<li><code>&quot;Pair&quot;</code>：对子，两张大小一样的扑克牌。</li>&#10;	<li><code>&quot;High Card&quot;</code>：高牌，五张大小互不相同的扑克牌。</li>&#10;</ol>&#10;&#10;<p>请你返回一个字符串，表示给定的 5 张牌中，你能组成的 <strong>最好手牌类型</strong> 。</p>&#10;&#10;<p><strong>注意：</strong>返回的字符串 <strong>大小写</strong> 需与题目描述相同。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>ranks = [13,2,3,1,9], suits = [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;a&quot;]&#10;<b>输出：</b>&quot;Flush&quot;&#10;<b>解释：</b>5 张扑克牌的花色相同，所以返回 &quot;Flush&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>ranks = [4,4,2,4,4], suits = [&quot;d&quot;,&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]&#10;<b>输出：</b>&quot;Three of a Kind&quot;&#10;<b>解释：</b>第一、二和四张牌组成三张相同大小的扑克牌，所以得到 &quot;Three of a Kind&quot; 。&#10;注意我们也可以得到 &quot;Pair&quot; ，但是 &quot;Three of a Kind&quot; 是更好的手牌类型。&#10;有其他的 3 张牌也可以组成 &quot;Three of a Kind&quot; 手牌类型。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>ranks = [10,10,2,12,9], suits = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;a&quot;,&quot;d&quot;]&#10;<b>输出：</b>&quot;Pair&quot;&#10;<b>解释：</b>第一和第二张牌大小相同，所以得到 &quot;Pair&quot; 。&#10;我们无法得到 &quot;Flush&quot; 或者 &quot;Three of a Kind&quot; 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>ranks.length == suits.length == 5</code></li>&#10;	<li><code>1 &lt;= ranks[i] &lt;= 13</code></li>&#10;	<li><code>'a' &lt;= suits[i] &lt;= 'd'</code></li>&#10;	<li>任意两张扑克牌不会同时有相同的大小和花色。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>五张牌判定同花、三条、对子或高牌，按优先级只返回一种。牌数固定，计数即可。</p>
<p>先看花色是否全同；再用点数频次判断是否存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mn>3</mn>
</math></span> 或恰好 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。都不满足则为高牌。</p>
</blockquote>
<p>我们可以先遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">suits</mtext>
</math></span>，判断相邻两个元素是否均相等，如果是，则返回 <code v-pre>&quot;Flush&quot;</code>。</p>
<p>接下来，我们用哈希表或数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 统计每张牌的数量：</p>
<ul>
<li>如果有任意一张牌的数量等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span>，返回 <code v-pre>&quot;Three of a Kind&quot;</code>；</li>
<li>否则，如果有任意一张牌的数量等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，返回 <code v-pre>&quot;Pair&quot;</code>；</li>
<li>否则，返回 <code v-pre>&quot;High Card&quot;</code>。</li>
</ul>
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
  <mtext mathvariant="italic">ranks</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func bestHand(ranks []int, suits []byte) string {</span></span>
<span class="line"><span>	flush := true</span></span>
<span class="line"><span>	for i := 1; i &#x3C; 5 &#x26;&#x26; flush; i++ {</span></span>
<span class="line"><span>		flush = suits[i] == suits[i-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if flush {</span></span>
<span class="line"><span>		return "Flush"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := [14]int{}</span></span>
<span class="line"><span>	pair := false</span></span>
<span class="line"><span>	for _, x := range ranks {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>		if cnt[x] == 3 {</span></span>
<span class="line"><span>			return "Three of a Kind"</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		pair = pair || cnt[x] == 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if pair {</span></span>
<span class="line"><span>		return "Pair"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return "High Card"</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/best-poker-hand" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2347.Best%20Poker%20Hand/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2352" tabindex="-1">2352. 相等行列对 <a class="header-anchor" href="#q-2352" aria-label="Permalink to &quot;2352. 相等行列对 {#q-2352}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、矩阵、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始、大小为 <code>n x n</code> 的整数矩阵 <code>grid</code> ，返回满足 <code>R<sub>i</sub></code><em> </em>行和<em> </em><code>C<sub>j</sub></code><em> </em>列相等的行列对<em> </em><code>(R<sub>i</sub>, C<sub>j</sub>)</code><em> </em>的数目<em>。</em></p>&#10;&#10;<p>如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2300-2399/2352.Equal%20Row%20and%20Column%20Pairs/images/ex1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[3,2,1],[1,7,6],[2,7,7]]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>存在一对相等行列对：&#10;- (第 2 行，第 1 列)：[2,7,7]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2300-2399/2352.Equal%20Row%20and%20Column%20Pairs/images/ex2.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>存在三对相等行列对：&#10;- (第 0 行，第 0 列)：[3,1,2,2]&#10;- (第 2 行, 第 2 列)：[2,4,2,2]&#10;- (第 3 行, 第 2 列)：[2,4,2,2]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == grid.length == grid[i].length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 200</code></li>&#10;	<li><code>1 &lt;= grid[i][j] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计与某行完全相同的列的对数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>200</mn>
</math></span>，三重循环比较一行与一列的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个位置可以接受。</p>
<p>枚举行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>、列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">all</mtext>
</math></span> 判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。无需先哈希整行，实现与题意一致。</p>
</blockquote>
<p>我们直接将矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的每一行和每一列进行比较，如果相等，那么就是一对相等行列对，答案加一。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的行数或列数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func equalPairs(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	for i := range grid {</span></span>
<span class="line"><span>		for j := range grid {</span></span>
<span class="line"><span>			ok := 1</span></span>
<span class="line"><span>			for k := range grid {</span></span>
<span class="line"><span>				if grid[i][k] != grid[k][j] {</span></span>
<span class="line"><span>					ok = 0</span></span>
<span class="line"><span>					break</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans += ok</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/equal-row-and-column-pairs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2352.Equal%20Row%20and%20Column%20Pairs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2363" tabindex="-1">2363. 合并相似的物品 <a class="header-anchor" href="#q-2363" aria-label="Permalink to &quot;2363. 合并相似的物品 {#q-2363}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、有序集合、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个二维整数数组 <code>items1</code> 和 <code>items2</code> ，表示两个物品集合。每个数组 <code>items</code> 有以下特质：</p>&#10;&#10;<ul>&#10;	<li><code>items[i] = [value<sub>i</sub>, weight<sub>i</sub>]</code> 其中 <code>value<sub>i</sub></code> 表示第 <code>i</code> 件物品的 <strong>价值</strong> ，<code>weight<sub>i</sub></code> 表示第 <code>i</code> 件物品的 <strong>重量</strong> 。</li>&#10;	<li><code>items</code> 中每件物品的价值都是 <strong>唯一的</strong> 。</li>&#10;</ul>&#10;&#10;<p>请你返回一个二维数组 <code>ret</code>，其中 <code>ret[i] = [value<sub>i</sub>, weight<sub>i</sub>]</code>， <code>weight<sub>i</sub></code> 是所有价值为 <code>value<sub>i</sub></code><sub> </sub>物品的 <strong>重量之和</strong> 。</p>&#10;&#10;<p><strong>注意：</strong><code>ret</code> 应该按价值 <strong>升序</strong> 排序后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]&#10;<b>输出：</b>[[1,6],[3,9],[4,5]]&#10;<b>解释：</b>&#10;value = 1 的物品在 items1 中 weight = 1 ，在 items2 中 weight = 5 ，总重量为 1 + 5 = 6 。&#10;value = 3 的物品在 items1 中 weight = 8 ，在 items2 中 weight = 1 ，总重量为 8 + 1 = 9 。&#10;value = 4 的物品在 items1 中 weight = 5 ，总重量为 5 。&#10;所以，我们返回 [[1,6],[3,9],[4,5]] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]&#10;<b>输出：</b>[[1,4],[2,4],[3,4]]&#10;<b>解释：</b>&#10;value = 1 的物品在 items1 中 weight = 1 ，在 items2 中 weight = 3 ，总重量为 1 + 3 = 4 。&#10;value = 2 的物品在 items1 中 weight = 3 ，在 items2 中 weight = 1 ，总重量为 3 + 1 = 4 。&#10;value = 3 的物品在 items1 中 weight = 2 ，在 items2 中 weight = 2 ，总重量为 2 + 2 = 4 。&#10;所以，我们返回 [[1,4],[2,4],[3,4]] 。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>items1 = [[1,3],[2,2]], items2 = [[7,1],[2,2],[1,4]]&#10;<b>输出：</b>[[1,7],[2,4],[7,1]]&#10;<strong>解释：&#10;</strong>value = 1 的物品在 items1 中 weight = 3 ，在 items2 中 weight = 4 ，总重量为 3 + 4 = 7 。&#10;value = 2 的物品在 items1 中 weight = 2 ，在 items2 中 weight = 2 ，总重量为 2 + 2 = 4 。&#10;value = 7 的物品在 items2 中 weight = 1 ，总重量为 1 。&#10;所以，我们返回 [[1,7],[2,4],[7,1]] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= items1.length, items2.length &lt;= 1000</code></li>&#10;	<li><code>items1[i].length == items2[i].length == 2</code></li>&#10;	<li><code>1 &lt;= value<sub>i</sub>, weight<sub>i</sub> &lt;= 1000</code></li>&#10;	<li><code>items1</code> 中每个 <code>value<sub>i</sub></code> 都是 <b>唯一的</b> 。</li>&#10;	<li><code>items2</code> 中每个 <code>value<sub>i</sub></code> 都是 <b>唯一的</b> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表或数组 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>两份清单按价值合并重量。价值范围与长度均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>，哈希累计后排序即可。</p>
<p>遍历两份 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mo>,</mo>
  <mi>w</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 累加到计数器，再按价值升序输出键值对。</p>
</blockquote>
<p>我们可以用哈希表或数组 <code v-pre>cnt</code> 统计 <code v-pre>items1</code> 和 <code v-pre>items2</code> 中每个物品的总重量，然后从小到大遍历价值，将每个价值以及对应的总重量加入结果数组即可。</p>
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
</math></span> 分别是 <code v-pre>items1</code> 和 <code v-pre>items2</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mergeSimilarItems(items1 [][]int, items2 [][]int) (ans [][]int) {</span></span>
<span class="line"><span>	cnt := [1010]int{}</span></span>
<span class="line"><span>	for _, x := range items1 {</span></span>
<span class="line"><span>		cnt[x[0]] += x[1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range items2 {</span></span>
<span class="line"><span>		cnt[x[0]] += x[1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, x := range cnt {</span></span>
<span class="line"><span>		if x > 0 {</span></span>
<span class="line"><span>			ans = append(ans, []int{i, x})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/merge-similar-items" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2363.Merge%20Similar%20Items/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2365" tabindex="-1">2365. 任务调度器 II <a class="header-anchor" href="#q-2365" aria-label="Permalink to &quot;2365. 任务调度器 II {#q-2365}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的正整数数组 <code>tasks</code> ，表示需要 <strong>按顺序</strong> 完成的任务，其中 <code>tasks[i]</code> 表示第 <code>i</code> 件任务的 <strong>类型</strong> 。</p>&#10;&#10;<p>同时给你一个正整数 <code>space</code> ，表示一个任务完成 <strong>后</strong> ，另一个 <strong>相同</strong> 类型任务完成前需要间隔的 <strong>最少</strong> 天数。</p>&#10;&#10;<p>在所有任务完成前的每一天，你都必须进行以下两种操作中的一种：</p>&#10;&#10;<ul>&#10;	<li>完成 <code>tasks</code> 中的下一个任务</li>&#10;	<li>休息一天</li>&#10;</ul>&#10;&#10;<p>请你返回完成所有任务所需的 <strong>最少</strong> 天数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>tasks = [1,2,1,2,3,1], space = 3&#10;<b>输出：</b>9&#10;<strong>解释：</strong>&#10;9 天完成所有任务的一种方法是：&#10;第 1 天：完成任务 0 。&#10;第 2 天：完成任务 1 。&#10;第 3 天：休息。&#10;第 4 天：休息。&#10;第 5 天：完成任务 2 。&#10;第 6 天：完成任务 3 。&#10;第 7 天：休息。&#10;第 8 天：完成任务 4 。&#10;第 9 天：完成任务 5 。&#10;可以证明无法少于 9 天完成所有任务。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>tasks = [5,8,8,5], space = 2&#10;<b>输出：</b>6&#10;<strong>解释：</strong>&#10;6 天完成所有任务的一种方法是：&#10;第 1 天：完成任务 0 。&#10;第 2 天：完成任务 1 。&#10;第 3 天：休息。&#10;第 4 天：休息。&#10;第 5 天：完成任务 2 。&#10;第 6 天：完成任务 3 。&#10;可以证明无法少于 6 天完成所有任务。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= tasks.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= tasks[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= space &lt;= tasks.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>相同任务之间至少间隔 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>e</mi>
</math></span> 天，任务必须按给定顺序完成。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能真的插入空闲日模拟日历。</p>
<p>哈希表记下每种任务下一次允许执行的日期。当前日加一后与该日期取最大，再把下次允许日写成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>e</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
</blockquote>
<p>我们可以用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
</math></span> 记录每个任务下一次可以被执行的时间，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
</math></span> 中的所有值都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，用变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 记录当前时间。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi>s</mi>
</math></span>，对于每个任务 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span>，当前时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 加一，表示从上一次执行任务到现在已经过去了一天，如果此时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，说明任务 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 需要在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 天才能被执行，因此我们更新当前时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。然后更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>y</mi>
  <mo stretchy="false">[</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>e</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，表示任务 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 下一次可以被执行的时间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>e</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>遍历结束后，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 返回即可。</p>
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
  <mi>t</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func taskSchedulerII(tasks []int, space int) (ans int64) {</span></span>
<span class="line"><span>	day := map[int]int64{}</span></span>
<span class="line"><span>	for _, task := range tasks {</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		if ans &#x3C; day[task] {</span></span>
<span class="line"><span>			ans = day[task]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		day[task] = ans + int64(space) + 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/task-scheduler-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2365.Task%20Scheduler%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2395" tabindex="-1">2395. 和相等的子数组 <a class="header-anchor" href="#q-2395" aria-label="Permalink to &quot;2395. 和相等的子数组 {#q-2395}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，判断是否存在 <strong>两个</strong> 长度为 <code>2</code> 的子数组且它们的 <strong>和</strong> 相等。注意，这两个子数组起始位置的下标必须 <strong>不相同</strong> 。</p>&#10;&#10;<p>如果这样的子数组存在，请返回 <code>true</code>，否则返回 <code>false</code><em> </em>。</p>&#10;&#10;<p><strong>子数组</strong> 是一个数组中一段连续非空的元素组成的序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [4,2,4]&#10;<b>输出：</b>true&#10;<b>解释：</b>元素为 [4,2] 和 [2,4] 的子数组有相同的和 6 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,2,3,4,5]&#10;<b>输出：</b>false&#10;<b>解释：</b>没有长度为 2 的两个子数组和相等。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [0,0,0]&#10;<b>输出：</b>true&#10;<b>解释：</b>子数组 [nums[0],nums[1]] 和 [nums[1],nums[2]] 的和相等，都为 0 。&#10;注意即使子数组的元素相同，这两个子数组也视为不相同的子数组，因为它们在原数组中的起始位置不同。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= nums.length &lt;= 1000</code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>是否存在两个长度恰为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 的不同子数组和相等。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，记录相邻对的和即可。</p>
<p>扫过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>w</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>e</mi>
</math></span> 和，若和已在集合中则找到；否则插入。无需更长子数组。</p>
</blockquote>
<p>我们可以遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 记录数组中每两个相邻元素的和，如果当前两个元素的和已经在哈希表中出现过，则返回 <code v-pre>true</code>，否则将当前两个元素的和加入哈希表中。</p>
<p>遍历结束后，说明没有找到满足条件的两个子数组，返回 <code v-pre>false</code>。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findSubarrays(nums []int) bool {</span></span>
<span class="line"><span>	vis := map[int]bool{}</span></span>
<span class="line"><span>	for i, b := range nums[1:] {</span></span>
<span class="line"><span>		x := nums[i] + b</span></span>
<span class="line"><span>		if vis[x] {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-subarrays-with-equal-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2395.Find%20Subarrays%20With%20Equal%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2399" tabindex="-1">2399. 检查相同字母间的距离 <a class="header-anchor" href="#q-2399" aria-label="Permalink to &quot;2399. 检查相同字母间的距离 {#q-2399}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> ，该字符串仅由小写英文字母组成，<code>s</code> 中的每个字母都 <strong>恰好</strong> 出现 <strong>两次</strong> 。另给你一个下标从 <strong>0</strong> 开始、长度为 <code>26</code> 的的整数数组 <code>distance</code> 。</p>&#10;&#10;<p>字母表中的每个字母按从 <code>0</code> 到 <code>25</code> 依次编号（即，<code>'a' -> 0</code>, <code>'b' -> 1</code>, <code>'c' -> 2</code>, ... , <code>'z' -> 25</code>）。</p>&#10;&#10;<p>在一个 <strong>匀整</strong> 字符串中，第 <code>i</code> 个字母的两次出现之间的字母数量是 <code>distance[i]</code> 。如果第 <code>i</code> 个字母没有在 <code>s</code> 中出现，那么 <code>distance[i]</code> 可以 <strong>忽略</strong> 。</p>&#10;&#10;<p>如果 <code>s</code> 是一个 <strong>匀整</strong> 字符串，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;abaccb&quot;, distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>&#10;- 'a' 在下标 0 和下标 2 处出现，所以满足 distance[0] = 1 。&#10;- 'b' 在下标 1 和下标 5 处出现，所以满足 distance[1] = 3 。&#10;- 'c' 在下标 3 和下标 4 处出现，所以满足 distance[2] = 0 。&#10;注意 distance[3] = 5 ，但是由于 'd' 没有在 s 中出现，可以忽略。&#10;因为 s 是一个匀整字符串，返回 true 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;aa&quot;, distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>&#10;- 'a' 在下标 0 和 1 处出现，所以两次出现之间的字母数量为 0 。&#10;但是 distance[0] = 1 ，s 不是一个匀整字符串。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= s.length &lt;= 52</code></li>&#10;	<li><code>s</code> 仅由小写英文字母组成</li>&#10;	<li><code>s</code> 中的每个字母恰好出现两次</li>&#10;	<li><code>distance.length == 26</code></li>&#10;	<li><code>0 &lt;= distance[i] &lt;= 50</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组或哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个字母恰好出现两次，需验证中间隔的字符数等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>c</mi>
  <mi>e</mi>
</math></span> 中的给定值。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>52</mn>
</math></span>，记下上次下标即可。</p>
<p>第一次记下位置，第二次比较间距；不符则失败。未在串中出现的字母不必检查。</p>
</blockquote>
<p>我们可以用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录每个字母出现的下标，然后遍历哈希表，判断每个字母的下标之差是否等于 <code v-pre>distance</code> 中对应的值。如果出现不等的情况，直接返回 <code v-pre>false</code>。如果遍历结束后，没有出现不等的情况，返回 <code v-pre>true</code>。</p>
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
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 为字符集，这里为小写字母集合。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func checkDistances(s string, distance []int) bool {</span></span>
<span class="line"><span>	d := [26]int{}</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		c -= 'a'</span></span>
<span class="line"><span>		if d[c] > 0 &#x26;&#x26; i-d[c] != distance[c] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		d[c] = i + 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-distances-between-same-letters" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2399.Check%20Distances%20Between%20Same%20Letters/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2404" tabindex="-1">2404. 出现最频繁的偶数元素 <a class="header-anchor" href="#q-2404" aria-label="Permalink to &quot;2404. 出现最频繁的偶数元素 {#q-2404}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> ，返回出现最频繁的偶数元素。</p>&#10;&#10;<p>如果存在多个满足条件的元素，只需要返回 <strong>最小</strong> 的一个。如果不存在这样的元素，返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [0,1,2,2,4,4,1]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;数组中的偶数元素为 0、2 和 4 ，在这些元素中，2 和 4 出现次数最多。&#10;返回最小的那个，即返回 2 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [4,4,4,9,2,4]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>4 是出现最频繁的偶数元素。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [29,47,21,41,13,37,25,7]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>不存在偶数元素。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 2000</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2000</mn>
</math></span>，扫描一遍即可统计偶数频次。需要同时满足「次数最多」与「值最小」，不必排序：用哈希表计数后遍历键值对，次数更大或次数相同但数值更小时更新答案。</p>
</blockquote>
<p>我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计所有偶数元素出现的次数，然后找出出现次数最多且值最小的偶数元素。</p>
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
</math></span> 是数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mostFrequentEven(nums []int) int {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		if x%2 == 0 {</span></span>
<span class="line"><span>			cnt[x]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, mx := -1, 0</span></span>
<span class="line"><span>	for x, v := range cnt {</span></span>
<span class="line"><span>		if mx &#x3C; v || (mx == v &#x26;&#x26; x &#x3C; ans) {</span></span>
<span class="line"><span>			ans, mx = x, v</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-frequent-even-element" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2404.Most%20Frequent%20Even%20Element/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2418" tabindex="-1">2418. 按身高排序 <a class="header-anchor" href="#q-2418" aria-label="Permalink to &quot;2418. 按身高排序 {#q-2418}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串数组 <code>names</code> ，和一个由 <strong>互不相同</strong> 的正整数组成的数组 <code>heights</code> 。两个数组的长度均为 <code>n</code> 。</p>&#10;&#10;<p>对于每个下标 <code>i</code>，<code>names[i]</code> 和 <code>heights[i]</code> 表示第 <code>i</code> 个人的名字和身高。</p>&#10;&#10;<p>请按身高 <strong>降序</strong> 顺序返回对应的名字数组 <code>names</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>names = [&quot;Mary&quot;,&quot;John&quot;,&quot;Emma&quot;], heights = [180,165,170]&#10;<strong>输出：</strong>[&quot;Mary&quot;,&quot;Emma&quot;,&quot;John&quot;]&#10;<strong>解释：</strong>Mary 最高，接着是 Emma 和 John 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>names = [&quot;Alice&quot;,&quot;Bob&quot;,&quot;Bob&quot;], heights = [155,185,150]&#10;<strong>输出：</strong>[&quot;Bob&quot;,&quot;Alice&quot;,&quot;Bob&quot;]&#10;<strong>解释：</strong>第一个 Bob 最高，然后是 Alice 和第二个 Bob 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == names.length == heights.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>3</sup></code></li>&#10;	<li><code>1 &lt;= names[i].length &lt;= 20</code></li>&#10;	<li><code>1 &lt;= heights[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>names[i]</code> 由大小写英文字母组成</li>&#10;	<li><code>heights</code> 中的所有值互不相同</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 · Go 实现</summary>
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
</math></span>，按身高降序排列姓名即可。身高互不相同，排序关键字唯一。为保持姓名与身高对应，对下标按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 降序排序，再按下标取姓名。</p>
</blockquote>
<p>根据题目描述，我们可以创建一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的下标数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>i</mi>
</math></span>。然后我们对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
</math></span> 中的每个下标按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 中对应的身高降序排序，最后遍历排序后的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
</math></span> 中的每个下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入答案数组即可。</p>
<p>我们也可以创建一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span>，数组中每个元素是一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，然后我们对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 按照身高降序排序。最后遍历排序后的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入答案数组即可。</p>
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
  <mi>a</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func sortPeople(names []string, heights []int) (ans []string) {</span></span>
<span class="line"><span>	n := len(names)</span></span>
<span class="line"><span>	idx := make([]int, n)</span></span>
<span class="line"><span>	for i := range idx {</span></span>
<span class="line"><span>		idx[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(idx, func(i, j int) bool { return heights[idx[j]] &#x3C; heights[idx[i]] })</span></span>
<span class="line"><span>	for _, i := range idx {</span></span>
<span class="line"><span>		ans = append(ans, names[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一已用下标数组完成排序。也可以把身高与姓名绑成二元组后按身高降序排序，省去显式下标数组，语义相同。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func sortPeople(names []string, heights []int) []string {</span></span>
<span class="line"><span>	n := len(names)</span></span>
<span class="line"><span>	arr := make([][2]int, n)</span></span>
<span class="line"><span>	for i, h := range heights {</span></span>
<span class="line"><span>		arr[i] = [2]int{h, i}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(arr, func(i, j int) bool { return arr[i][0] > arr[j][0] })</span></span>
<span class="line"><span>	ans := make([]string, n)</span></span>
<span class="line"><span>	for i, x := range arr {</span></span>
<span class="line"><span>		ans[i] = names[x[1]]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sort-the-people" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2418.Sort%20the%20People/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2423" tabindex="-1">2423. 删除字符使频率相同 <a class="header-anchor" href="#q-2423" aria-label="Permalink to &quot;2423. 删除字符使频率相同 {#q-2423}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>word</code> ，字符串只包含小写英文字母。你需要选择 <strong>一个</strong> 下标并 <strong>删除</strong> 下标处的字符，使得 <code>word</code> 中剩余每个字母出现 <strong>频率</strong> 相同。</p>&#10;&#10;<p>如果删除一个字母后，<code>word</code> 中剩余所有字母的出现频率都相同，那么返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li>字母 <code>x</code> 的 <strong>频率</strong><strong> </strong>是这个字母在字符串中出现的次数。</li>&#10;	<li>你 <strong>必须</strong> 恰好删除一个字母，不能一个字母都不删除。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>word = &quot;abcc&quot;&#10;<b>输出：</b>true&#10;<b>解释：</b>选择下标 3 并删除该字母：word 变成 &quot;abc&quot; 且每个字母出现频率都为 1 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>word = &quot;aazz&quot;&#10;<b>输出：</b>false&#10;<b>解释：</b>我们必须删除一个字母，所以要么 &quot;a&quot; 的频率变为 1 且 &quot;z&quot; 的频率为 2 ，要么两个字母频率反过来。所以不可能让剩余所有字母出现频率相同。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= word.length &lt;= 100</code></li>&#10;	<li><code>word</code> 只包含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，删除哪一个字符可以枚举。频次是否「全部相同」只取决于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 个计数，不必每次重扫字符串。</p>
<p>先统计各字母次数，再对每个出现过的字母试减一，看剩余正频次是否恰有一种。还原后试下一个。</p>
</blockquote>
<p>我们先用哈希表或者一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计字符串中每个字母出现的次数。</p>
<p>接下来，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 个字母，如果字母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 在字符串中出现过，我们将其出现次数减一，然后判断剩余的字母出现次数是否相同。如果相同，返回 <code v-pre>true</code>，否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 的出现次数加一，继续枚举下一个字母。</p>
<p>枚举结束，说明无法通过删除一个字母使得剩余字母出现次数相同，返回 <code v-pre>false</code>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <msup>
    <mi>C</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集的大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func equalFrequency(word string) bool {</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for _, c := range word {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := range cnt {</span></span>
<span class="line"><span>		if cnt[i] > 0 {</span></span>
<span class="line"><span>			cnt[i]--</span></span>
<span class="line"><span>			x := 0</span></span>
<span class="line"><span>			ok := true</span></span>
<span class="line"><span>			for _, v := range cnt {</span></span>
<span class="line"><span>				if v == 0 {</span></span>
<span class="line"><span>					continue</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				if x > 0 &#x26;&#x26; v != x {</span></span>
<span class="line"><span>					ok = false</span></span>
<span class="line"><span>					break</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				x = v</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if ok {</span></span>
<span class="line"><span>				return true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			cnt[i]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/remove-letter-to-equalize-frequency" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2423.Remove%20Letter%20To%20Equalize%20Frequency/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2451" tabindex="-1">2451. 差值数组不同的字符串 <a class="header-anchor" href="#q-2451" aria-label="Permalink to &quot;2451. 差值数组不同的字符串 {#q-2451}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串数组 <code>words</code> ，每一个字符串长度都相同，令所有字符串的长度都为 <code>n</code> 。</p>&#10;&#10;<p>每个字符串 <code>words[i]</code> 可以被转化为一个长度为 <code>n - 1</code> 的 <strong>差值整数数组</strong> <code>difference[i]</code> ，其中对于 <code>0 &lt;= j &lt;= n - 2</code> 有 <code>difference[i][j] = words[i][j+1] - words[i][j]</code> 。注意两个字母的差值定义为它们在字母表中 <strong>位置</strong> 之差，也就是说 <code>'a'</code> 的位置是 <code>0</code> ，<code>'b'</code> 的位置是 <code>1</code> ，<code>'z'</code> 的位置是 <code>25</code> 。</p>&#10;&#10;<ul>&#10;	<li>比方说，字符串 <code>&quot;acb&quot;</code> 的差值整数数组是 <code>[2 - 0, 1 - 2] = [2, -1]</code> 。</li>&#10;</ul>&#10;&#10;<p><code>words</code> 中所有字符串 <strong>除了一个字符串以外</strong> ，其他字符串的差值整数数组都相同。你需要找到那个不同的字符串。</p>&#10;&#10;<p>请你返回<em> </em><code>words</code>中 <strong>差值整数数组</strong> 不同的字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>words = [&quot;adc&quot;,&quot;wzy&quot;,&quot;abc&quot;]&#10;<b>输出：</b>&quot;abc&quot;&#10;<b>解释：</b>&#10;- &quot;adc&quot; 的差值整数数组是 [3 - 0, 2 - 3] = [3, -1] 。&#10;- &quot;wzy&quot; 的差值整数数组是 [25 - 22, 24 - 25]= [3, -1] 。&#10;- &quot;abc&quot; 的差值整数数组是 [1 - 0, 2 - 1] = [1, 1] 。&#10;不同的数组是 [1, 1]，所以返回对应的字符串，&quot;abc&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>words = [&quot;aaa&quot;,&quot;bob&quot;,&quot;ccc&quot;,&quot;ddd&quot;]&#10;<b>输出：</b>&quot;bob&quot;&#10;<b>解释：</b>除了 &quot;bob&quot; 的差值整数数组是 [13, -13] 以外，其他字符串的差值整数数组都是 [0, 0] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= words.length &lt;= 100</code></li>&#10;	<li><code>n == words[i].length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 20</code></li>&#10;	<li><code>words[i]</code> 只含有小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>差值数组由相邻字符 ASCII 差构成，除一个单词外其余相同。单词数与长度都很小，把每个差值元组映射到单词列表，长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的那一组即答案。</p>
</blockquote>
<p>我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 维护字符串的差值数组和字符串的映射关系，其中差值数组为字符串的相邻字符的差值构成的数组。由于题目保证了除了一个字符串以外，其他字符串的差值数组都相同，因此我们只需要找到差值数组不同的字符串即可。</p>
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
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为字符串的长度和字符串的个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func oddString(words []string) string {</span></span>
<span class="line"><span>	d := map[string][]string{}</span></span>
<span class="line"><span>	for _, s := range words {</span></span>
<span class="line"><span>		m := len(s)</span></span>
<span class="line"><span>		cs := make([]byte, m-1)</span></span>
<span class="line"><span>		for i := 0; i &#x3C; m-1; i++ {</span></span>
<span class="line"><span>			cs[i] = s[i+1] - s[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := string(cs)</span></span>
<span class="line"><span>		d[t] = append(d[t], s)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, ss := range d {</span></span>
<span class="line"><span>		if len(ss) == 1 {</span></span>
<span class="line"><span>			return ss[0]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ""</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/odd-string-difference" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2451.Odd%20String%20Difference/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2453" tabindex="-1">2453. 摧毁一系列目标 <a class="header-anchor" href="#q-2453" aria-label="Permalink to &quot;2453. 摧毁一系列目标 {#q-2453}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，它包含若干正整数，表示数轴上你需要摧毁的目标所在的位置。同时给你一个整数 <code>space</code> 。</p>&#10;&#10;<p>你有一台机器可以摧毁目标。给机器 <strong>输入</strong> <code>nums[i]</code> ，这台机器会摧毁所有位置在 <code>nums[i] + c * space</code> 的目标，其中 <code>c</code> 是任意非负整数。你想摧毁 <code>nums</code> 中 <strong>尽可能多</strong> 的目标。</p>&#10;&#10;<p>请你返回在摧毁数目最多的前提下，<code>nums[i]</code> 的 <strong>最小值</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [3,7,8,1,1,5], space = 2&#10;<b>输出：</b>1&#10;<b>解释：</b>如果我们输入 nums[3] ，我们可以摧毁位于 1,3,5,7,9,... 这些位置的目标。&#10;这种情况下， 我们总共可以摧毁 5 个目标（除了 nums[2]）。&#10;没有办法摧毁多于 5 个目标，所以我们返回 nums[3] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [1,3,5,2,4,6], space = 2&#10;<b>输出：</b>1&#10;<b>解释：</b>输入 nums[0] 或者 nums[3] 都会摧毁 3 个目标。&#10;没有办法摧毁多于 3 个目标。&#10;由于 nums[0] 是最小的可以摧毁 3 个目标的整数，所以我们返回 1 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [6,2,5], space = 100&#10;<b>输出：</b>2&#10;<b>解释：</b>无论我们输入哪个数字，都只能摧毁 1 个目标。输入的最小整数是 nums[1] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= space &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：取模 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>从种子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 出发可摧毁所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo>&#x22C5;</mo>
  <mi>s</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>e</mi>
</math></span>，即同一余数类。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>s</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>e</mi>
</math></span> 计数，次数最多的一类摧毁最多；同类中取最小 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 作为种子。</p>
</blockquote>
<p>我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计每个数模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>e</mi>
</math></span> 后的余数出现的次数。次数越多，意味着可以摧毁的目标越多。我们找到最多次数的组，取组中的最小值即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func destroyTargets(nums []int, space int) int {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		cnt[v%space]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, mx := 0, 0</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		t := cnt[v%space]</span></span>
<span class="line"><span>		if t > mx || (t == mx &#x26;&#x26; v &#x3C; ans) {</span></span>
<span class="line"><span>			ans = v</span></span>
<span class="line"><span>			mx = t</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/destroy-sequential-targets" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2453.Destroy%20Sequential%20Targets/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2459" tabindex="-1">2459. 通过移动项目到空白区域来排序数组 🔒 <a class="header-anchor" href="#q-2459" aria-label="Permalink to &quot;2459. 通过移动项目到空白区域来排序数组 🔒 {#q-2459}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个大小为 <code>n</code> 的整数数组 <code>nums</code>，其中包含从 <code>0</code> 到 <code>n - 1</code> (<strong>包含边界</strong>) 的 <strong>每个 </strong>元素。从 <code>1</code> 到 <code>n - 1</code> 的每一个元素都代表一项目，元素 <code>0</code> 代表一个空白区域。</p>&#10;&#10;<p>在一个操作中，您可以将 <strong>任何 </strong>项目移动到空白区域。如果所有项目的编号都是 <strong>升序 </strong>的，并且空格在数组的开头或结尾，则认为 <code>nums</code> 已排序。</p>&#10;&#10;<p>例如，如果 <code>n = 4</code>，则 <code>nums</code> 按以下条件排序:</p>&#10;&#10;<ul>&#10;	<li><code>nums = [0,1,2,3]</code> 或</li>&#10;	<li><code>nums = [1,2,3,0]</code></li>&#10;</ul>&#10;&#10;<p>...否则被认为是无序的。</p>&#10;&#10;<p>返回<em>排序 <code>nums</code> 所需的最小操作数。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [4,2,0,3,1]&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong>&#10;- 将项目 2 移动到空白区域。现在，nums =[4,0,2,3,1]。&#10;- 将项目 1 移动到空白区域。现在，nums =[4,1,2,3,0]。&#10;- 将项目 4 移动到空白区域。现在，nums =[0,1,2,3,4]。&#10;可以证明，3 是所需的最小操作数。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,2,3,4,0]&#10;<strong>输出:</strong> 0&#10;<strong>解释:</strong> nums 已经排序了，所以返回 0。</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [1,0,2,4,3]&#10;<strong>输出:</strong> 2&#10;<strong>解释:</strong>&#10;- 将项目 2 移动到空白区域。现在，nums =[1,2,0,4,3]。&#10;- 将项目 3 移动到空白区域。现在，nums =[1,2,3,4,0]。&#10;可以证明，2 是所需的最小操作数。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt; n</code></li>&#10;	<li><code>nums</code> 的所有值都是 <strong>唯一 </strong>的。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：置换环 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次只能与空位交换，本质是置换环上的归位。空位在环内时长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 的环需 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次，否则需 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 次。目标可以是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>0</mn>
</math></span>。</p>
<p>枚举环并按「空位不在环内」累计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，若空位错位则空位必在某环中，总数减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。两种目标取较小者。</p>
</blockquote>
<p>一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 的置换环，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 在环中，那么交换次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，否则交换次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>我们找到所有置换环，先按照交换次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 计算总的次数，然后判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 是否错位，若是，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 在置换环中，那么总的次数减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。</p>
<p>这里 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 位置，也可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 位置，我们取这两种情况的最小值。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func sortArray(nums []int) int {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	f := func(nums []int, k int) int {</span></span>
<span class="line"><span>		vis := make([]bool, n)</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for i, v := range nums {</span></span>
<span class="line"><span>			if i == v || vis[i] {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>			j := i</span></span>
<span class="line"><span>			for !vis[j] {</span></span>
<span class="line"><span>				vis[j] = true</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>				j = nums[j]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if nums[k] != k {</span></span>
<span class="line"><span>			cnt -= 2</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cnt</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a := f(nums, 0)</span></span>
<span class="line"><span>	arr := make([]int, n)</span></span>
<span class="line"><span>	for i, v := range nums {</span></span>
<span class="line"><span>		arr[i] = (v - 1 + n) % n</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	b := f(arr, n-1)</span></span>
<span class="line"><span>	return min(a, b)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sort-array-by-moving-items-to-empty-space" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2459.Sort%20Array%20by%20Moving%20Items%20to%20Empty%20Space/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2475" tabindex="-1">2475. 数组中不等三元组的数目 <a class="header-anchor" href="#q-2475" aria-label="Permalink to &quot;2475. 数组中不等三元组的数目 {#q-2475}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的正整数数组 <code>nums</code> 。请你找出并统计满足下述条件的三元组 <code>(i, j, k)</code> 的数目：</p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= i &lt; j &lt; k &lt; nums.length</code></li>&#10;	<li><code>nums[i]</code>、<code>nums[j]</code> 和 <code>nums[k]</code> <strong>两两不同</strong> 。&#10;	<ul>&#10;		<li>换句话说：<code>nums[i] != nums[j]</code>、<code>nums[i] != nums[k]</code> 且 <code>nums[j] != nums[k]</code> 。</li>&#10;	</ul>&#10;	</li>&#10;</ul>&#10;&#10;<p>返回满足上述条件三元组的数目<em>。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [4,4,2,4,3]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>下面列出的三元组均满足题目条件：&#10;- (0, 2, 4) 因为 4 != 2 != 3&#10;- (1, 2, 4) 因为 4 != 2 != 3&#10;- (2, 3, 4) 因为 2 != 4 != 3&#10;共计 3 个三元组，返回 3 。&#10;注意 (2, 0, 4) 不是有效的三元组，因为 2 > 0 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,1,1,1,1]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>不存在满足条件的三元组，所以返回 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：暴力枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，三元组下标有序即可。三重循环比较三数互不相等，约束很小，可以接受。</p>
</blockquote>
<p>我们可以直接枚举所有的三元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，统计所有符合条件的数量。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func unequalTriplets(nums []int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			for k := j + 1; k &#x3C; n; k++ {</span></span>
<span class="line"><span>				if nums[i] != nums[j] &#x26;&#x26; nums[j] != nums[k] &#x26;&#x26; nums[i] != nums[k] {</span></span>
<span class="line"><span>					ans++</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：排序 + 枚举中间元素 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一已是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。排序后相等值相邻：枚举中间下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，左侧严格小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的个数与右侧严格大于的个数之积即贡献。两次二分即可定位边界。</p>
</blockquote>
<p>我们也可以先对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 进行排序。</p>
<p>然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，枚举中间元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，利用二分查找，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 左侧找到最近的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 成立；在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 右侧找到最近的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 成立。那么以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为中间元素，且符合条件的三元组数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，累加到答案中。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func unequalTriplets(nums []int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for j := 1; j &#x3C; n-1; j++ {</span></span>
<span class="line"><span>		i := sort.Search(j, func(h int) bool { return nums[h] >= nums[j] }) - 1</span></span>
<span class="line"><span>		k := sort.Search(n, func(h int) bool { return h > j &#x26;&#x26; nums[h] > nums[j] })</span></span>
<span class="line"><span>		if i >= 0 &#x26;&#x26; k &#x3C; n {</span></span>
<span class="line"><span>			ans += (i + 1) * (n - k)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法二仍付排序与二分。三元组只要求三值两两不同，与下标无关，故按值计数：枚举中间值的次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，左侧已扫过的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，右侧 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mo>&#x2212;</mo>
  <mi>b</mi>
</math></span>，累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x22C5;</mo>
  <mi>b</mi>
  <mo>&#x22C5;</mo>
  <mi>c</mi>
</math></span>。线性。</p>
</blockquote>
<p>我们还可以使用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 来统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中每个元素的数量。</p>
<p>然后遍历哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，枚举中间元素的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，左侧元素个数记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，那么右侧元素个数有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mo>&#x2212;</mo>
  <mi>b</mi>
</math></span>，此时符合条件的三元组数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#xD7;</mo>
  <mi>b</mi>
  <mo>&#xD7;</mo>
  <mi>c</mi>
</math></span>，累加到答案中。接着更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
</math></span>，继续枚举中间元素的个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func unequalTriplets(nums []int) (ans int) {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		cnt[v]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, n := 0, len(nums)</span></span>
<span class="line"><span>	for _, b := range cnt {</span></span>
<span class="line"><span>		c := n - a - b</span></span>
<span class="line"><span>		ans += a * b * c</span></span>
<span class="line"><span>		a += b</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-unequal-triplets-in-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2475.Number%20of%20Unequal%20Triplets%20in%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2531" tabindex="-1">2531. 使字符串中不同字符的数目相等 <a class="header-anchor" href="#q-2531" aria-label="Permalink to &quot;2531. 使字符串中不同字符的数目相等 {#q-2531}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个下标从 <strong>0</strong> 开始的字符串 <code>word1</code> 和 <code>word2</code> 。</p>&#10;&#10;<p>一次 <strong>移动</strong> 由以下两个步骤组成：</p>&#10;&#10;<ul>&#10;	<li>选中两个下标 <code>i</code> 和 <code>j</code> ，分别满足 <code>0 &lt;= i &lt; word1.length</code> 和 <code>0 &lt;= j &lt; word2.length</code> ，</li>&#10;	<li>交换 <code>word1[i]</code> 和 <code>word2[j]</code> 。</li>&#10;</ul>&#10;&#10;<p>如果可以通过 <strong>恰好一次</strong> 移动，使 <code>word1</code> 和 <code>word2</code> 中不同字符的数目相等，则返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>word1 = &quot;ac&quot;, word2 = &quot;b&quot;&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>交换任何一组下标都会导致第一个字符串中有 2 个不同的字符，而在第二个字符串中只有 1 个不同字符。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>word1 = &quot;abcc&quot;, word2 = &quot;aab&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>交换第一个字符串的下标 2 和第二个字符串的下标 0 。之后得到 word1 = &quot;abac&quot; 和 word2 = &quot;cab&quot; ，各有 3 个不同字符。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>word1 = &quot;abcde&quot;, word2 = &quot;fghij&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>无论交换哪一组下标，两个字符串中都会有 5 个不同字符。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= word1.length, word2.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>word1</code> 和 <code>word2</code> 仅由小写英文字母组成。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>必须交换恰好一个字符，使两串的不同字母个数相等。字符串很长，但字母只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 种，真正影响答案的是频次而非位置。</p>
<p>先统计两侧频次与种类数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
</math></span>。枚举从第一串拿出的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>c</mi>
    <mn>1</mn>
  </msub>
</math></span> 与从第二串拿出的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>c</mi>
    <mn>2</mn>
  </msub>
</math></span>：相同则种类不变，只需 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mi>y</mi>
</math></span>；不同则按“该字母是否因此消失或新出现”修正两侧种类，相等即成功。</p>
</blockquote>
<p>我们先用两个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt2</mtext>
</math></span> 分别记录字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word2</mtext>
</math></span> 中每个字符的出现次数。</p>
<p>然后我们分别统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word2</mtext>
</math></span> 中不同字符的个数，分别记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>。</p>
<p>接下来我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word1</mtext>
</math></span> 中的每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word2</mtext>
</math></span> 中的每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mn>2</mn>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mn>1</mn>
  <mo>=</mo>
  <mi>c</mi>
  <mn>2</mn>
</math></span>，那么我们只需要判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 是否相等；否则，我们需要判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">cnt1</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">cnt1</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">cnt2</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">cnt2</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 是否相等。如果相等，那么我们就找到了一种方案，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>。</p>
<p>如果我们枚举完所有的字符都没有找到合适的方案，那么我们就返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <msup>
    <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">word2</mtext>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 是字符集，本题中字符集为小写字母，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isItPossible(word1 string, word2 string) bool {</span></span>
<span class="line"><span>	cnt1 := [26]int{}</span></span>
<span class="line"><span>	cnt2 := [26]int{}</span></span>
<span class="line"><span>	x, y := 0, 0</span></span>
<span class="line"><span>	for _, c := range word1 {</span></span>
<span class="line"><span>		cnt1[c-'a']++</span></span>
<span class="line"><span>		if cnt1[c-'a'] == 1 {</span></span>
<span class="line"><span>			x++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, c := range word2 {</span></span>
<span class="line"><span>		cnt2[c-'a']++</span></span>
<span class="line"><span>		if cnt2[c-'a'] == 1 {</span></span>
<span class="line"><span>			y++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := range cnt1 {</span></span>
<span class="line"><span>		for j := range cnt2 {</span></span>
<span class="line"><span>			if cnt1[i] > 0 &#x26;&#x26; cnt2[j] > 0 {</span></span>
<span class="line"><span>				if i == j {</span></span>
<span class="line"><span>					if x == y {</span></span>
<span class="line"><span>						return true</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					a := x</span></span>
<span class="line"><span>					if cnt1[i] == 1 {</span></span>
<span class="line"><span>						a--</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					if cnt1[j] == 0 {</span></span>
<span class="line"><span>						a++</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>					b := y</span></span>
<span class="line"><span>					if cnt2[j] == 1 {</span></span>
<span class="line"><span>						b--</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					if cnt2[i] == 0 {</span></span>
<span class="line"><span>						b++</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>					if a == b {</span></span>
<span class="line"><span>						return true</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/make-number-of-distinct-characters-equal" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2531.Make%20Number%20of%20Distinct%20Characters%20Equal/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2605" tabindex="-1">2605. 从两个数字数组里生成最小数字 <a class="header-anchor" href="#q-2605" aria-label="Permalink to &quot;2605. 从两个数字数组里生成最小数字 {#q-2605}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre>给你两个只包含 1 到 9 之间数字的数组 <code>nums1</code> 和 <code>nums2</code> ，每个数组中的元素 <strong>互不相同</strong> ，请你返回 <strong>最小</strong> 的数字，两个数组都 <strong>至少</strong> 包含这个数字的某个数位。&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums1 = [4,1,3], nums2 = [5,7]&#10;<b>输出：</b>15&#10;<b>解释：</b>数字 15 的数位 1 在 nums1 中出现，数位 5 在 nums2 中出现。15 是我们能得到的最小数字。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums1 = [3,5,2,6], nums2 = [3,1,7]&#10;<b>输出：</b>3&#10;<b>解释：</b>数字 3 的数位 3 在两个数组中都出现了。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 9</code></li>&#10;	<li><code>1 &lt;= nums1[i], nums2[i] &lt;= 9</code></li>&#10;	<li>每个数组中，元素 <strong>互不相同</strong> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>答案至多两位，且每位分别来自两个数组。两数组长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，枚举全部数对即可覆盖「取公共数字」与「拼接两个不同数字」两种形态。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mi>b</mi>
</math></span> 则一位数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 优于任何两位；否则比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
  <mi>b</mi>
  <mo>+</mo>
  <mi>a</mi>
</math></span>。全程维护最小值。</p>
</blockquote>
<p>我们观察发现，如果数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中有相同的数字，那么相同数字中的最小值一定是最小的数字。否则我们取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 中的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 拼接成两个数字，取其中较小的数字即可。</p>
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
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minNumber(nums1 []int, nums2 []int) int {</span></span>
<span class="line"><span>	ans := 100</span></span>
<span class="line"><span>	for _, a := range nums1 {</span></span>
<span class="line"><span>		for _, b := range nums2 {</span></span>
<span class="line"><span>			if a == b {</span></span>
<span class="line"><span>				ans = min(ans, a)</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				ans = min(ans, min(a*10+b, b*10+a))</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：哈希表或数组 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一对每个数对都比较一次。公共数字一旦存在，最小公共值就是答案，不必再看拼接；若不存在，只需两侧最小值拼接。</p>
<p>用集合求交后取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
</math></span>，或直接取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">)</mo>
</math></span> 拼接，将双重循环降为线性扫描。</p>
</blockquote>
<p>我们可以用哈希表或数组记录数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中的数字，然后枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x223C;</mo>
  <mn>9</mn>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 在两个数组中都出现了，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 就是最小的数字。否则我们取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 中的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 拼接成两个数字，取其中较小的数字即可。</p>
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
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中数字的范围，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>10</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minNumber(nums1 []int, nums2 []int) int {</span></span>
<span class="line"><span>	s1 := [10]bool{}</span></span>
<span class="line"><span>	s2 := [10]bool{}</span></span>
<span class="line"><span>	for _, x := range nums1 {</span></span>
<span class="line"><span>		s1[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range nums2 {</span></span>
<span class="line"><span>		s2[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b := 0, 0</span></span>
<span class="line"><span>	for i := 1; i &#x3C; 10; i++ {</span></span>
<span class="line"><span>		if s1[i] &#x26;&#x26; s2[i] {</span></span>
<span class="line"><span>			return i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if a == 0 &#x26;&#x26; s1[i] {</span></span>
<span class="line"><span>			a = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if b == 0 &#x26;&#x26; s2[i] {</span></span>
<span class="line"><span>			b = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return min(a*10+b, b*10+a)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：位运算 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数字只在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，集合可用位掩码代替。两掩码按位与非空则最低位置即最小公共数字；否则分别取两侧最低位拼接。</p>
<p>与方法二同一观察，只是把哈希集合换成常数空间的位运算。</p>
</blockquote>
<p>由于数字的范围是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x223C;</mo>
  <mn>9</mn>
</math></span>，我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的二进制数来表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中的数字。我们用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 中的数字，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span> 表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中的数字。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span> 进行按位与得到的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 不等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么我们提取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 中最后一位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 所在的位置，即为最小的数字。</p>
<p>否则，我们分别提取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span> 中最后一位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 所在的位置，分别记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，那么最小的数字就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>&#xD7;</mo>
  <mn>10</mn>
  <mo>+</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo>&#xD7;</mo>
  <mn>10</mn>
  <mo>+</mo>
  <mi>a</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
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
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minNumber(nums1 []int, nums2 []int) int {</span></span>
<span class="line"><span>	var mask1, mask2 uint</span></span>
<span class="line"><span>	for _, x := range nums1 {</span></span>
<span class="line"><span>		mask1 |= 1 &#x3C;&#x3C; x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range nums2 {</span></span>
<span class="line"><span>		mask2 |= 1 &#x3C;&#x3C; x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if mask := mask1 &#x26; mask2; mask != 0 {</span></span>
<span class="line"><span>		return bits.TrailingZeros(mask)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b := bits.TrailingZeros(mask1), bits.TrailingZeros(mask2)</span></span>
<span class="line"><span>	return min(a*10+b, b*10+a)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/form-smallest-number-from-two-digit-arrays" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2605.Form%20Smallest%20Number%20From%20Two%20Digit%20Arrays/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2610" tabindex="-1">2610. 转换二维数组 <a class="header-anchor" href="#q-2610" aria-label="Permalink to &quot;2610. 转换二维数组 {#q-2610}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 。请你创建一个满足以下条件的二维数组：</p>&#10;&#10;<ul>&#10;	<li>二维数组应该 <strong>只</strong> 包含数组 <code>nums</code> 中的元素。</li>&#10;	<li>二维数组中的每一行都包含 <strong>不同</strong> 的整数。</li>&#10;	<li>二维数组的行数应尽可能 <strong>少</strong> 。</li>&#10;</ul>&#10;&#10;<p>返回结果数组。如果存在多种答案，则返回其中任何一种。</p>&#10;&#10;<p>请注意，二维数组的每一行上可以存在不同数量的元素。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,3,4,1,2,3,1]&#10;<strong>输出：</strong>[[1,3,4,2],[1,3],[1]]&#10;<strong>解释：</strong>根据题目要求可以创建包含以下几行元素的二维数组：&#10;- 1,3,4,2&#10;- 1,3&#10;- 1&#10;nums 中的所有元素都有用到，并且每一行都由不同的整数组成，所以这是一个符合题目要求的答案。&#10;可以证明无法创建少于三行且符合题目要求的二维数组。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,2,3,4]&#10;<strong>输出：</strong>[[4,3,2,1]]&#10;<strong>解释：</strong>nums 中的所有元素都不同，所以我们可以将其全部保存在二维数组中的第一行。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 200</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= nums.length</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组或哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同一行不得出现重复值，行数应尽量少。出现次数最多的值决定最少行数，若按行贪心放置，需反复查找当前行是否已含该值。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>200</mn>
</math></span> 尚可，但次数已知时不必搜索。</p>
<p>值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 次时，必然占用前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 行各一次。按频次把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 依次写入第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
  <mo>,</mo>
  <mi>v</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 行，即可同时满足无重复与行数最少。</p>
</blockquote>
<p>我们先用一个数组或者哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中每个元素出现的次数。</p>
<p>然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，我们将其添加到答案列表中的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 行，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 行，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 行，...，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 行。</p>
<p>最后返回答案列表即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMatrix(nums []int) (ans [][]int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	cnt := make([]int, n+1)</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x, v := range cnt {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; v; j++ {</span></span>
<span class="line"><span>			if len(ans) &#x3C;= j {</span></span>
<span class="line"><span>				ans = append(ans, []int{})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans[j] = append(ans[j], x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/convert-an-array-into-a-2d-array-with-conditions" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2610.Convert%20an%20Array%20Into%20a%202D%20Array%20With%20Conditions/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2661" tabindex="-1">2661. 找出叠涂元素 <a class="header-anchor" href="#q-2661" aria-label="Permalink to &quot;2661. 找出叠涂元素 {#q-2661}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>arr</code> 和一个 <code>m x n</code> 的整数 <strong>矩阵</strong> <code>mat</code> 。<code>arr</code> 和 <code>mat</code> 都包含范围 <code>[1，m * n]</code> 内的 <strong>所有</strong> 整数。</p>&#10;&#10;<p>从下标 <code>0</code> 开始遍历 <code>arr</code> 中的每个下标 <code>i</code> ，并将包含整数 <code>arr[i]</code> 的 <code>mat</code> 单元格涂色。</p>&#10;&#10;<p>请你找出 <code>arr</code> 中第一个使得 <code>mat</code> 的某一行或某一列都被涂色的元素，并返回其下标 <code>i</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="image explanation for example 1" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2600-2699/2661.First%20Completely%20Painted%20Row%20or%20Column/images/grid1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>arr = [1,3,4,2], mat = [[1,4],[2,3]]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>遍历如上图所示，arr[2] 在矩阵中的第一行或第二列上都被涂色。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="image explanation for example 2" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2600-2699/2661.First%20Completely%20Painted%20Row%20or%20Column/images/grid2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>遍历如上图所示，arr[3] 在矩阵中的第二列上都被涂色。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == mat.length</code></li>&#10;	<li><code>n = mat[i].length</code></li>&#10;	<li><code>arr.length == m * n</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= m * n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= arr[i], mat[r][c] &lt;= m * n</code></li>&#10;	<li><code>arr</code> 中的所有整数 <strong>互不相同</strong></li>&#10;	<li><code>mat</code> 中的所有整数 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 数组计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 顺序涂色，问何时首次出现整行或整列涂满。每次检查整行整列， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时会重复扫描。</p>
<p>先把每个值映射到坐标，再用行、列计数：涂到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 则对应计数加一，达到列数或行数即完成。第一次满足时的下标即答案。</p>
</blockquote>
<p>我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
</math></span> 记录每个元素在矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
</math></span> 中的位置，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
  <mo stretchy="false">[</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，定义两个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>l</mi>
</math></span> 分别记录每行和每列已经涂色的元素个数。</p>
<p>遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span>，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们找到其在矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
</math></span> 中的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 分别加一，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>n</mi>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>m</mi>
</math></span>，说明第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行或第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 列已经被涂色，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 就是我们要找的元素，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
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
</math></span> 分别是矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>t</mi>
</math></span> 的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func firstCompleteIndex(arr []int, mat [][]int) int {</span></span>
<span class="line"><span>	m, n := len(mat), len(mat[0])</span></span>
<span class="line"><span>	idx := map[int][2]int{}</span></span>
<span class="line"><span>	for i := range mat {</span></span>
<span class="line"><span>		for j := range mat[i] {</span></span>
<span class="line"><span>			idx[mat[i][j]] = [2]int{i, j}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	row := make([]int, m)</span></span>
<span class="line"><span>	col := make([]int, n)</span></span>
<span class="line"><span>	for k := 0; ; k++ {</span></span>
<span class="line"><span>		x := idx[arr[k]]</span></span>
<span class="line"><span>		i, j := x[0], x[1]</span></span>
<span class="line"><span>		row[i]++</span></span>
<span class="line"><span>		col[j]++</span></span>
<span class="line"><span>		if row[i] == n || col[j] == m {</span></span>
<span class="line"><span>			return k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/first-completely-painted-row-or-column" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2661.First%20Completely%20Painted%20Row%20or%20Column/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2670" tabindex="-1">2670. 找出不同元素数目差数组 <a class="header-anchor" href="#q-2670" aria-label="Permalink to &quot;2670. 找出不同元素数目差数组 {#q-2670}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，数组长度为 <code>n</code> 。</p>&#10;&#10;<p><code>nums</code> 的 <strong>不同元素数目差</strong> 数组可以用一个长度为 <code>n</code> 的数组 <code>diff</code> 表示，其中 <code>diff[i]</code> 等于前缀 <code>nums[0, ..., i]</code> 中不同元素的数目 <strong>减去</strong> 后缀 <code>nums[i + 1, ..., n - 1]</code> 中不同元素的数目。</p>&#10;&#10;<p>返回<em> </em><code>nums</code> 的 <strong>不同元素数目差</strong> 数组。</p>&#10;&#10;<p>注意 <code>nums[i, ..., j]</code> 表示 <code>nums</code> 的一个从下标 <code>i</code> 开始到下标 <code>j</code> 结束的子数组（包含下标 <code>i</code> 和 <code>j</code> 对应元素）。特别需要说明的是，如果 <code>i > j</code> ，则 <code>nums[i, ..., j]</code> 表示一个空子数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,4,5]&#10;<strong>输出：</strong>[-3,-1,1,3,5]&#10;<strong>解释：&#10;</strong>对于 i = 0，前缀中有 1 个不同的元素，而在后缀中有 4 个不同的元素。因此，diff[0] = 1 - 4 = -3 。&#10;对于 i = 1，前缀中有 2 个不同的元素，而在后缀中有 3 个不同的元素。因此，diff[1] = 2 - 3 = -1 。&#10;对于 i = 2，前缀中有 3 个不同的元素，而在后缀中有 2 个不同的元素。因此，diff[2] = 3 - 2 = 1 。&#10;对于 i = 3，前缀中有 4 个不同的元素，而在后缀中有 1 个不同的元素。因此，diff[3] = 4 - 1 = 3 。&#10;对于 i = 4，前缀中有 5 个不同的元素，而在后缀中有 0 个不同的元素。因此，diff[4] = 5 - 0 = 5 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,2,3,4,2]&#10;<strong>输出：</strong>[-2,-1,0,2,3]&#10;<strong>解释：</strong>&#10;对于 i = 0，前缀中有 1 个不同的元素，而在后缀中有 3 个不同的元素。因此，diff[0] = 1 - 3 = -2 。&#10;对于 i = 1，前缀中有 2 个不同的元素，而在后缀中有 3 个不同的元素。因此，diff[1] = 2 - 3 = -1 。&#10;对于 i = 2，前缀中有 2 个不同的元素，而在后缀中有 2 个不同的元素。因此，diff[2] = 2 - 2 = 0 。&#10;对于 i = 3，前缀中有 3 个不同的元素，而在后缀中有 1 个不同的元素。因此，diff[3] = 3 - 1 = 2 。&#10;对于 i = 4，前缀中有 3 个不同的元素，而在后缀中有 0 个不同的元素。因此，diff[4] = 3 - 0 = 3 。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n == nums.length &lt;= 50</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 50</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 预处理后缀 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每位要前缀不同数减后缀不同数。若每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 都重建两个集合， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span> 勉强，但重复计数可预处理。</p>
<p>先自右向左用集合得到后缀不同数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，再自左向右维护前缀集合，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>我们可以预处理出一个后缀数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 表示后缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 中不同元素的数目，在预处理过程中，我们使用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 来维护后缀中出现过的元素，这样我们就可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的时间内查询后缀中不同元素的数目。</p>
<p>预处理完后缀数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
</math></span> 后，我们清空哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，然后再次遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 来维护前缀中出现过的元素，那么位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中不同元素的数目减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mi>u</mi>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
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
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func distinctDifferenceArray(nums []int) []int {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	suf := make([]int, n+1)</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		s[nums[i]] = true</span></span>
<span class="line"><span>		suf[i] = len(s)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	s = map[int]bool{}</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		s[x] = true</span></span>
<span class="line"><span>		ans[i] = len(s) - suf[i+1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-distinct-difference-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2670.Find%20the%20Distinct%20Difference%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2682" tabindex="-1">2682. 找出转圈游戏输家 <a class="header-anchor" href="#q-2682" aria-label="Permalink to &quot;2682. 找出转圈游戏输家 {#q-2682}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><code>n</code> 个朋友在玩游戏。这些朋友坐成一个圈，按 <strong>顺时针方向</strong> 从 <code>1</code> 到 <code>n</code> 编号。准确的说，从第 <code>i</code> 个朋友的位置开始顺时针移动 <code>1</code> 步会到达第 <code>(i + 1)</code> 个朋友的位置（<code>1 &lt;= i &lt; n</code>），而从第 <code>n</code> 个朋友的位置开始顺时针移动 <code>1</code> 步会回到第 <code>1</code> 个朋友的位置。</p>&#10;&#10;<p>游戏规则如下：</p>&#10;&#10;<p>第 <code>1</code> 个朋友接球。</p>&#10;&#10;<ul>&#10;	<li>接着，第 <code>1</code> 个朋友将球传给距离他顺时针方向 <code>k</code> 步的朋友。</li>&#10;	<li>然后，接球的朋友应该把球传给距离他顺时针方向 <code>2 * k</code> 步的朋友。</li>&#10;	<li>接着，接球的朋友应该把球传给距离他顺时针方向 <code>3 * k</code> 步的朋友，以此类推。</li>&#10;</ul>&#10;&#10;<p>换句话说，在第 <code>i</code> 轮中持有球的那位朋友需要将球传递给距离他顺时针方向 <code>i * k</code> 步的朋友。</p>&#10;&#10;<p>当某个朋友第 2 次接到球时，游戏结束。</p>&#10;&#10;<p>在整场游戏中没有接到过球的朋友是 <strong>输家</strong> 。</p>&#10;&#10;<p>给你参与游戏的朋友数量 <code>n</code> 和一个整数 <code>k</code> ，请按升序排列返回包含所有输家编号的数组 <code>answer</code> 作为答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, k = 2&#10;<strong>输出：</strong>[4,5]&#10;<strong>解释：</strong>以下为游戏进行情况：&#10;1）第 1 个朋友接球，第 1 个朋友将球传给距离他顺时针方向 2 步的玩家 —— 第 3 个朋友。&#10;2）第 3 个朋友将球传给距离他顺时针方向 4 步的玩家 —— 第 2 个朋友。&#10;3）第 2 个朋友将球传给距离他顺时针方向 6 步的玩家 —— 第 3 个朋友。&#10;4）第 3 个朋友接到两次球，游戏结束。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 4, k = 4&#10;<strong>输出：</strong>[2,3,4]&#10;<strong>解释：</strong>以下为游戏进行情况：&#10;1）第 1 个朋友接球，第 1 个朋友将球传给距离他顺时针方向 4 步的玩家 —— 第 1 个朋友。&#10;2）第 1 个朋友接到两次球，游戏结束。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= n &lt;= 50</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按步长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>k</mi>
</math></span> 在环上传球，直至某人第二次接到。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span>，模拟到重复即可。访问数组标记接过球的人，循环结束时未标记者即输家，编号改回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 起。</p>
</blockquote>
<p>我们用一个数组 <code v-pre>vis</code> 记录每个朋友是否接到过球，初始时所有朋友都没有接到过球。然后我们按照题目描述的规则模拟游戏的过程，直到某个朋友第二次接到球为止。</p>
<p>在模拟过程中，我们用两个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 分别表示当前持球的朋友编号和当前传球的步长。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>p</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，表示第一个朋友接到球。每次传球时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>p</mi>
  <mo>&#xD7;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
</math></span>，表示下一个接球的朋友编号，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，表示下一次传球的步长。当某个朋友第二次接到球时，游戏结束。</p>
<p>最后我们遍历数组 <code v-pre>vis</code>，将没有接到过球的朋友编号加入答案数组中即可。</p>
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
</math></span> 是朋友的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func circularGameLosers(n int, k int) (ans []int) {</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	for i, p := 0, 1; !vis[i]; p++ {</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		i = (i + p*k) % n</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, x := range vis {</span></span>
<span class="line"><span>		if !x {</span></span>
<span class="line"><span>			ans = append(ans, i+1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-losers-of-the-circular-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2682.Find%20the%20Losers%20of%20the%20Circular%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=s(m,[["render",o]]);export{d as __pageData,w as default};
