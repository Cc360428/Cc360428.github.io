import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 数学与几何（2）","description":"数学与几何分类，第 415–800 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 数学与几何（2）","description":"数学与几何分类，第 415–800 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"数学与几何分类，第 415–800 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 数学与几何（1）","link":"/principles/algorithms/leetcode-go/math-01"},"next":{"text":"LeetCode Go · 数学与几何（3）","link":"/principles/algorithms/leetcode-go/math-03"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 数学与几何（1）","link":"/principles/algorithms/leetcode-go/math-01"},"next":{"text":"LeetCode Go · 数学与几何（3）","link":"/principles/algorithms/leetcode-go/math-03"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/math-02.md","filePath":"principles/algorithms/leetcode-go/math-02.md"}'),p={name:"principles/algorithms/leetcode-go/math-02.md"};function o(m,n,l,i,c,r){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-数学与几何-2" tabindex="-1">LeetCode Go · 数学与几何（2） <a class="header-anchor" href="#leetcode-go-·-数学与几何-2" aria-label="Permalink to &quot;LeetCode Go · 数学与几何（2）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-415" tabindex="-1">415. 字符串相加 <a class="header-anchor" href="#q-415" aria-label="Permalink to &quot;415. 字符串相加 {#q-415}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个字符串形式的非负整数 <code>num1</code> 和<code>num2</code> ，计算它们的和并同样以字符串形式返回。</p>&#10;&#10;<p>你不能使用任何內建的用于处理大整数的库（比如 <code>BigInteger</code>）， 也不能直接将输入的字符串转换为整数形式。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num1 = &quot;11&quot;, num2 = &quot;123&quot;&#10;<strong>输出：</strong>&quot;134&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num1 = &quot;456&quot;, num2 = &quot;77&quot;&#10;<strong>输出：</strong>&quot;533&quot;&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num1 = &quot;0&quot;, num2 = &quot;0&quot;&#10;<strong>输出：</strong>&quot;0&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= num1.length, num2.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>num1</code> 和<code>num2</code> 都只包含数字 <code>0-9</code></li>&#10;	<li><code>num1</code> 和<code>num2</code> 都不包含任何前导零</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>大整数以字符串给出，不能先转成整型。加法从低位开始，与竖式相同。</p>
<p>双指针从尾部取数字，连同进位求和，个位写入缓冲区、十位作为新进位。某一串耗尽则当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，直到两串与进位都结束，最后反转。</p>
<p>从低位处理才能正确传播进位；结果先逆序收集，避免反复在头部插入。</p>
</blockquote>
<p>我们用两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 分别指向两个字符串的末尾，从末尾开始逐位相加。每次取出对应位的数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，计算它们的和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>+</mo>
  <mi>c</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 表示上一次相加的进位，最后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>+</mo>
  <mi>c</mi>
</math></span> 的个位数添加到追加到答案字符串的末尾，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>+</mo>
  <mi>c</mi>
</math></span> 的十位数作为进位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 的值，循环此过程直至两个字符串的指针都已经指向了字符串的开头并且进位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>最后将答案字符串反转并返回即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是两个字符串的长度。忽略答案字符串的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>以下代码还实现了字符串相减，参考 <code v-pre>subStrings(num1, num2)</code> 函数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func addStrings(num1 string, num2 string) string {</span></span>
<span class="line"><span>	i, j := len(num1)-1, len(num2)-1</span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	for c := 0; i >= 0 || j >= 0 || c > 0; i, j = i-1, j-1 {</span></span>
<span class="line"><span>		if i >= 0 {</span></span>
<span class="line"><span>			c += int(num1[i] - '0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if j >= 0 {</span></span>
<span class="line"><span>			c += int(num2[j] - '0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, byte(c%10+'0'))</span></span>
<span class="line"><span>		c /= 10</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j := 0, len(ans)-1; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>		ans[i], ans[j] = ans[j], ans[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func subStrings(num1 string, num2 string) string {</span></span>
<span class="line"><span>	m, n := len(num1), len(num2)</span></span>
<span class="line"><span>	neg := m &#x3C; n || (m == n &#x26;&#x26; num1 &#x3C; num2)</span></span>
<span class="line"><span>	if neg {</span></span>
<span class="line"><span>		num1, num2 = num2, num1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	i, j := len(num1)-1, len(num2)-1</span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	for c := 0; i >= 0; i, j = i-1, j-1 {</span></span>
<span class="line"><span>		c = int(num1[i]-'0') - c</span></span>
<span class="line"><span>		if j >= 0 {</span></span>
<span class="line"><span>			c -= int(num2[j] - '0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, byte((c+10)%10+'0'))</span></span>
<span class="line"><span>		if c &#x3C; 0 {</span></span>
<span class="line"><span>			c = 1</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			c = 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for len(ans) > 1 &#x26;&#x26; ans[len(ans)-1] == '0' {</span></span>
<span class="line"><span>		ans = ans[:len(ans)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if neg {</span></span>
<span class="line"><span>		ans = append(ans, '-')</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j := 0, len(ans)-1; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>		ans[i], ans[j] = ans[j], ans[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/add-strings" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0415.Add%20Strings/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-423" tabindex="-1">423. 从英文中重建数字 <a class="header-anchor" href="#q-423" aria-label="Permalink to &quot;423. 从英文中重建数字 {#q-423}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> ，其中包含字母顺序打乱的用英文单词表示的若干数字（<code>0-9</code>）。按 <strong>升序</strong> 返回原始的数字。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;owoztneoer&quot;&#10;<strong>输出：</strong>&quot;012&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;fviefuro&quot;&#10;<strong>输出：</strong>&quot;45&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s[i]</code> 为 <code>[&quot;e&quot;,&quot;g&quot;,&quot;f&quot;,&quot;i&quot;,&quot;h&quot;,&quot;o&quot;,&quot;n&quot;,&quot;s&quot;,&quot;r&quot;,&quot;u&quot;,&quot;t&quot;,&quot;w&quot;,&quot;v&quot;,&quot;x&quot;,&quot;z&quot;]</code> 这些字符之一</li>&#10;	<li><code>s</code> 保证是一个符合题目要求的字符串</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>英文数字的字母互相重叠，不能按单词顺序贪心匹配。若干字母却只属于一个数字。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">z</mtext>
</math></span> 只在 zero， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">w</mtext>
</math></span> 只在 two， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">u</mtext>
</math></span> 只在 four， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">x</mtext>
</math></span> 只在 six， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">g</mtext>
</math></span> 只在 eight。扣掉这些之后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">h</mtext>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">f</mtext>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">s</mtext>
</math></span> 分别确定 three、five、seven，最后用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">o</mtext>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span> 确定 one、nine。</p>
<p>按「唯一字母」的偏序计数，每个数字的个数被线性方程组唯一确定，再按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 拼回字符串。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func originalDigits(s string) string {</span></span>
<span class="line"><span>	counter := make([]int, 26)</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		counter[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := make([]int, 10)</span></span>
<span class="line"><span>	cnt[0] = counter['z'-'a']</span></span>
<span class="line"><span>	cnt[2] = counter['w'-'a']</span></span>
<span class="line"><span>	cnt[4] = counter['u'-'a']</span></span>
<span class="line"><span>	cnt[6] = counter['x'-'a']</span></span>
<span class="line"><span>	cnt[8] = counter['g'-'a']</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cnt[3] = counter['h'-'a'] - cnt[8]</span></span>
<span class="line"><span>	cnt[5] = counter['f'-'a'] - cnt[4]</span></span>
<span class="line"><span>	cnt[7] = counter['s'-'a'] - cnt[6]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cnt[1] = counter['o'-'a'] - cnt[0] - cnt[2] - cnt[4]</span></span>
<span class="line"><span>	cnt[9] = counter['i'-'a'] - cnt[5] - cnt[6] - cnt[8]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	for i, c := range cnt {</span></span>
<span class="line"><span>		ans = append(ans, bytes.Repeat([]byte{byte('0' + i)}, c)...)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/reconstruct-original-digits-from-english" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0423.Reconstruct%20Original%20Digits%20from%20English/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-447" tabindex="-1">447. 回旋镖的数量 <a class="header-anchor" href="#q-447" aria-label="Permalink to &quot;447. 回旋镖的数量 {#q-447}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定平面上<em> </em><code>n</code><em> </em>对 <strong>互不相同</strong> 的点 <code>points</code> ，其中 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 。<strong>回旋镖</strong> 是由点 <code>(i, j, k)</code> 表示的元组 ，其中 <code>i</code> 和 <code>j</code> 之间的欧式距离和 <code>i</code> 和 <code>k</code> 之间的欧式距离相等（<strong>需要考虑元组的顺序</strong>）。</p>&#10;&#10;<p>返回平面上所有回旋镖的数量。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[0,0],[1,0],[2,0]]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>两个回旋镖为 <strong>[[1,0],[0,0],[2,0]]</strong> 和 <strong>[[1,0],[2,0],[0,0]]</strong>&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[1,1],[2,2],[3,3]]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>points = [[1,1]]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == points.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 500</code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>&#10;	<li>所有点都 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + 计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>回旋镖是有序三元组，枚举三点是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 固定后，到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 距离相同的点可以任意排列成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>,</mo>
  <mi>k</mi>
</math></span>。</p>
<p>枚举中心 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>p</mi>
    <mn>1</mn>
  </msub>
</math></span>，用哈希表统计到其余点的距离。每遇到一个已出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 次的距离，可与这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个点组成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个有序对，再乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 得到两个方向。</p>
<p>边插入边累加，避免对每个距离再扫一遍哈希表。</p>
</blockquote>
<p>我们可以枚举 <code v-pre>points</code> 中的每个点作为回旋镖的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，然后用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录其他点到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的距离出现的次数。</p>
<p>如果有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个点到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的距离相等，那么我们可以任选其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 个点作为回旋镖的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，方案数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>A</mi>
    <mi>x</mi>
    <mn>2</mn>
  </msubsup>
  <mo>=</mo>
  <mi>x</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。因此，我们对哈希表中的每个值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，都计算并累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>A</mi>
    <mi>x</mi>
    <mn>2</mn>
  </msubsup>
</math></span>，就可以得到满足题目要求的回旋镖数量之和。</p>
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
</math></span> 是数组 <code v-pre>points</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfBoomerangs(points [][]int) (ans int) {</span></span>
<span class="line"><span>	for _, p1 := range points {</span></span>
<span class="line"><span>		cnt := map[int]int{}</span></span>
<span class="line"><span>		for _, p2 := range points {</span></span>
<span class="line"><span>			d := (p1[0]-p2[0])*(p1[0]-p2[0]) + (p1[1]-p2[1])*(p1[1]-p2[1])</span></span>
<span class="line"><span>			ans += cnt[d]</span></span>
<span class="line"><span>			cnt[d]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans &#x3C;&#x3C;= 1</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一边走边加。也可以先把距离全部计入，再对每个次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msubsup>
    <mi>A</mi>
    <mi>x</mi>
    <mn>2</mn>
  </msubsup>
</math></span>。实现更直白，渐近相同。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberOfBoomerangs(points [][]int) (ans int) {</span></span>
<span class="line"><span>	for _, p1 := range points {</span></span>
<span class="line"><span>		cnt := map[int]int{}</span></span>
<span class="line"><span>		for _, p2 := range points {</span></span>
<span class="line"><span>			d := (p1[0]-p2[0])*(p1[0]-p2[0]) + (p1[1]-p2[1])*(p1[1]-p2[1])</span></span>
<span class="line"><span>			cnt[d]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for _, x := range cnt {</span></span>
<span class="line"><span>			ans += x * (x - 1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-boomerangs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0447.Number%20of%20Boomerangs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-453" tabindex="-1">453. 最小操作次数使数组元素相等 <a class="header-anchor" href="#q-453" aria-label="Permalink to &quot;453. 最小操作次数使数组元素相等 {#q-453}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的整数数组，每次操作将会使 <code>n - 1</code> 个元素增加 <code>1</code> 。返回让数组所有元素相等的最小操作次数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;只需要3次操作（注意每次操作会增加两个元素的值）：&#10;[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,1,1]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li>答案保证符合 <strong>32-bit</strong> 整数</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个数加一，等价于把剩下那个数减一，直到全部等于最小值。模拟加一会改动整个数组。</p>
<p>因此答案是每个数减到最小值的次数之和，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mo>&#x22C5;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>一次求最小与总和即可，不必真的执行操作。</p>
</blockquote>
<p>我们不妨记数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的最小值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mi</mtext>
</math></span>，数组的和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span>，数组的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">n</mtext>
</math></span>。</p>
<p>假设最小操作次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">k</mtext>
</math></span>，最终数组的所有元素都为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">x</mtext>
</math></span>，则有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mtext mathvariant="italic">s</mtext>
        <mo>+</mo>
        <mo stretchy="false">(</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>&#xD7;</mo>
        <mtext mathvariant="italic">k</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#xD7;</mo>
        <mtext mathvariant="italic">x</mtext>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mtext mathvariant="italic">x</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mtext mathvariant="italic">mi</mtext>
        <mo>+</mo>
        <mtext mathvariant="italic">k</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>将第二个式子代入第一个式子，得到：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <mtext mathvariant="italic">s</mtext>
        <mo>+</mo>
        <mo stretchy="false">(</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>&#xD7;</mo>
        <mtext mathvariant="italic">k</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#xD7;</mo>
        <mo stretchy="false">(</mo>
        <mtext mathvariant="italic">mi</mtext>
        <mo>+</mo>
        <mtext mathvariant="italic">k</mtext>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mtext mathvariant="italic">s</mtext>
        <mo>+</mo>
        <mo stretchy="false">(</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#x2212;</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>&#xD7;</mo>
        <mtext mathvariant="italic">k</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#xD7;</mo>
        <mtext mathvariant="italic">mi</mtext>
        <mo>+</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#xD7;</mo>
        <mtext mathvariant="italic">k</mtext>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mtext mathvariant="italic">k</mtext>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
        <mtext mathvariant="italic">s</mtext>
        <mo>&#x2212;</mo>
        <mtext mathvariant="italic">n</mtext>
        <mo>&#xD7;</mo>
        <mtext mathvariant="italic">mi</mtext>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>因此，最小操作次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">n</mtext>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">mi</mtext>
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
</math></span> 为数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minMoves(nums []int) int {</span></span>
<span class="line"><span>	mi := 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>		if x &#x3C; mi {</span></span>
<span class="line"><span>			mi = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s - mi*len(nums)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-moves-to-equal-array-elements" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0453.Minimum%20Moves%20to%20Equal%20Array%20Elements/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-462" tabindex="-1">462. 最小操作次数使数组元素相等 II <a class="header-anchor" href="#q-462" aria-label="Permalink to &quot;462. 最小操作次数使数组元素相等 II {#q-462}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> ，返回使所有数组元素相等需要的最小操作数。</p>&#10;&#10;<p>在一次操作中，你可以使数组中的一个元素加 <code>1</code> 或者减 <code>1</code> 。</p>&#10;&#10;<p>测试用例经过设计以使答案在 <strong>32 位</strong> 整数范围内。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;只需要两次操作（每次操作指南使一个元素加 1 或减 1）：&#10;[<u>1</u>,2,3]  =>  [2,2,<u>3</u>]  =>  [2,2,2]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,10,2,9]&#10;<strong>输出：</strong>16&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 中位数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次把一个数加一或减一，求变成相等的最少次数。目标值若选两端，距离之和会变大。</p>
<p>一维点到汇合点的距离之和在中位数处最小：两端点到汇合点的贡献是常数，问题缩小到内部点。排序后取中位数，累加绝对差。</p>
<p>不必关心最终值是奇数长度的正中还是偶数长度的两个中位之一，二者距离和相同。</p>
</blockquote>
<p>这个问题可以抽象为，在数轴上有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个点，找到一个点使得所有点到该点的距离之和最小。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个点的中位数。</p>
<p>中位数有这样的性质：所有数与中位数的距离之和最小。</p>
<p>证明：</p>
<p>首先，给定一个从小到大的数列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
    <mi>n</mi>
  </msub>
</math></span>，我们假设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mi>n</mi>
  </msub>
</math></span> 与其距离之和最小的点，显然 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 必须位于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mi>n</mi>
  </msub>
</math></span> 之间。而由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mi>n</mi>
  </msub>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的距离之和都相等，都等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mi>n</mi>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
</math></span>，因此，接下来不考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mi>n</mi>
  </msub>
</math></span>，我们只考虑 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mn>3</mn>
  </msub>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
</math></span>，这样的话，我们就可以把问题转化为在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mn>3</mn>
  </msub>
  <mo>,</mo>
  <mo>&#x22EF;</mo>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
</math></span> 中找到一个点与其距离之和最小，依此类推，我们最后可以得出结论：在一个数列中，中位数与其余数的距离之和最小。</p>
<p>在这个问题中，我们可以先对数组进行排序，然后找到中位数，最后计算所有数与中位数的距离之和即可。</p>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0296.Best%20Meeting%20Point/README.md" target="_blank" rel="noopener noreferrer">296. 最佳的碰头地点</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2400-2499/2448.Minimum%20Cost%20to%20Make%20Array%20Equal/README.md" target="_blank" rel="noopener noreferrer">2448. 使数组相等的最小开销</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minMoves2(nums []int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	k := nums[len(nums)>>1]</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		ans += abs(v - k)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0462.Minimum%20Moves%20to%20Equal%20Array%20Elements%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-469" tabindex="-1">469. 凸多边形 🔒 <a class="header-anchor" href="#q-469" aria-label="Permalink to &quot;469. 凸多边形 🔒 {#q-469}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、多边形</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定 <strong>X-Y</strong> 平面上的一组点 <code>points</code> ，其中 <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 。这些点按顺序连成一个多边形。</p>&#10;&#10;<p>如果该多边形为 <strong>凸</strong> 多边形<a href="https://baike.baidu.com/item/%E5%87%B8%E5%A4%9A%E8%BE%B9%E5%BD%A2/" target="_blank" rel="noopener noreferrer">（凸多边形的定义）</a>则返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p>你可以假设由给定点构成的多边形总是一个 简单的多边形<a href="https://baike.baidu.com/item/%E7%AE%80%E5%8D%95%E5%A4%9A%E8%BE%B9%E5%BD%A2" target="_blank" rel="noopener noreferrer">（简单多边形的定义）</a>。换句话说，我们要保证每个顶点处恰好是两条边的汇合点，并且这些边 <strong>互不相交 </strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0469.Convex%20Polygon/images/covpoly1-plane.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> points = [[0,0],[0,5],[5,5],[5,0]]&#10;<strong>输出:</strong> true</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0469.Convex%20Polygon/images/covpoly2-plane.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> points = [[0,0],[0,10],[10,10],[10,0],[5,5]]&#10;<strong>输出:</strong> false</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= points.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>&#10;	<li>所有点都 <strong>不同</strong></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：数学（向量叉积） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>凸多边形要求所有转向同号。枚举每三个顶点的夹角方向即可，不必求凸包。</p>
<p>对顶点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mover>
    <mrow>
      <msub>
        <mi>p</mi>
        <mi>i</mi>
      </msub>
      <msub>
        <mi>p</mi>
        <mrow data-mjx-texclass="ORD">
          <mi>i</mi>
          <mo>+</mo>
          <mn>1</mn>
        </mrow>
      </msub>
    </mrow>
    <mo>&#x2192;</mo>
  </mover>
  <mo>&#xD7;</mo>
  <mover>
    <mrow>
      <msub>
        <mi>p</mi>
        <mi>i</mi>
      </msub>
      <msub>
        <mi>p</mi>
        <mrow data-mjx-texclass="ORD">
          <mi>i</mi>
          <mo>+</mo>
          <mn>2</mn>
        </mrow>
      </msub>
    </mrow>
    <mo>&#x2192;</mo>
  </mover>
</math></span>。叉积非零时若与上一次非零叉积异号，则出现凹角。共线（叉积为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>）不更新方向。</p>
<p>下标对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 取模封闭多边形。只在转向真正发生时比较符号，共线点不会误判。</p>
</blockquote>
<p>假设当前连续的三个顶点分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>p</mi>
    <mn>1</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>p</mi>
    <mn>2</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>p</mi>
    <mn>3</mn>
  </msub>
</math></span>，我们可以计算向量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mover>
    <mrow>
      <msub>
        <mi>p</mi>
        <mn>1</mn>
      </msub>
      <msub>
        <mi>p</mi>
        <mn>2</mn>
      </msub>
    </mrow>
    <mo>&#x2192;</mo>
  </mover>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mover>
    <mrow>
      <msub>
        <mi>p</mi>
        <mn>1</mn>
      </msub>
      <msub>
        <mi>p</mi>
        <mn>3</mn>
      </msub>
    </mrow>
    <mo>&#x2192;</mo>
  </mover>
</math></span> 的叉积，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span> 的方向与之前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
</math></span> 方向不一致，说明多边形不是凸多边形 🔒。否则，我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mo>=</mo>
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span>，继续遍历下一个顶点。</p>
<p>遍历结束，如果没有发现不一致的情况，说明多边形是凸多边形 🔒。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是顶点的数量。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isConvex(points [][]int) bool {</span></span>
<span class="line"><span>	n := len(points)</span></span>
<span class="line"><span>	pre, cur := 0, 0</span></span>
<span class="line"><span>	for i := range points {</span></span>
<span class="line"><span>		x1 := points[(i+1)%n][0] - points[i][0]</span></span>
<span class="line"><span>		y1 := points[(i+1)%n][1] - points[i][1]</span></span>
<span class="line"><span>		x2 := points[(i+2)%n][0] - points[i][0]</span></span>
<span class="line"><span>		y2 := points[(i+2)%n][1] - points[i][1]</span></span>
<span class="line"><span>		cur = x1*y2 - x2*y1</span></span>
<span class="line"><span>		if cur != 0 {</span></span>
<span class="line"><span>			if cur*pre &#x3C; 0 {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			pre = cur</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/convex-polygon" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0469.Convex%20Polygon/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-470" tabindex="-1">470. 用 Rand7() 实现 Rand10() <a class="header-anchor" href="#q-470" aria-label="Permalink to &quot;470. 用 Rand7() 实现 Rand10() {#q-470}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、拒绝采样、概率与统计、随机化</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定方法 <code>rand7</code> 可生成 <code>[1,7]</code> 范围内的均匀随机整数，试写一个方法 <code>rand10</code> 生成 <code>[1,10]</code> 范围内的均匀随机整数。</p>&#10;&#10;<p>你只能调用 <code>rand7()</code> 且不能调用其他方法。请不要使用系统的 <code>Math.random()</code> 方法。</p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p>每个测试用例将有一个内部参数 <code>n</code>，即你实现的函数 <code>rand10()</code> 在测试时将被调用的次数。请注意，这不是传递给 <code>rand10()</code> 的参数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>1&#10;<strong>输出: </strong>[2]&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>2&#10;<strong>输出: </strong>[2,8]&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>3&#10;<strong>输出: </strong>[3,8,10]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶:</strong></p>&#10;&#10;<ul>&#10;	<li><code>rand7()</code>调用次数的 <a href="https://en.wikipedia.org/wiki/Expected_value" target="_blank" rel="noopener noreferrer">期望值</a> 是多少 ?</li>&#10;	<li>你能否尽量少调用 <code>rand7()</code> ?</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：拒绝采样 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>用均匀的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mn>7</mn>
</math></span> 造均匀的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mn>10</mn>
</math></span>。直接 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">rand7</mtext>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>10</mn>
</math></span> 会偏斜。两次调用可生成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>49</mn>
  <mo stretchy="false">]</mo>
</math></span> 的均匀整数。</p>
<p>拒绝采样：保留 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>40</mn>
  <mo stretchy="false">]</mo>
</math></span>，映射为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>10</mn>
  <mo>+</mo>
  <mn>1</mn>
</math></span>；落在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>41</mn>
</math></span>– <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>49</mn>
</math></span> 则重来。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>40</mn>
</math></span> 能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 整除，十个残差各出现四次，因而均匀。</p>
<p>期望调用次数为常数。拒绝区间保证每个结果概率相同。</p>
</blockquote>
<p>我们可以使用拒绝采样的方法实现等概率生成任意区间的随机数。拒绝采样的思路是如果生成的随机数落在我们希望的区间内，那么就返回该随机数，否则会不断生成直到生成一个落在区间内的随机数为止。</p>
<p>对于本题，我们可以通过调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mn>7</mn>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 两次来实现生成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>10</mn>
  <mo stretchy="false">]</mo>
</math></span> 以内的随机数，具体如下：</p>
<p>我们生成一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 且小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>40</mn>
</math></span> 的整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，其中等概率生成的方式为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mn>7</mn>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mn>7</mn>
  <mo>+</mo>
  <mi>r</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mn>7</mn>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span>，然后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>10</mn>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 即可。</p>
<p>期望时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，但是最坏情况下会达到无穷大的时间复杂度。空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func rand10() int {</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		i := rand7() - 1</span></span>
<span class="line"><span>		j := rand7()</span></span>
<span class="line"><span>		x := i*7 + j</span></span>
<span class="line"><span>		if x &#x3C;= 40 {</span></span>
<span class="line"><span>			return x%10 + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/implement-rand10-using-rand7" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0470.Implement%20Rand10()%20Using%20Rand7()/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-478" tabindex="-1">478. 在圆内随机生成点 <a class="header-anchor" href="#q-478" aria-label="Permalink to &quot;478. 在圆内随机生成点 {#q-478}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数学、拒绝采样、随机化</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定圆的半径和圆心的位置，实现函数 <code>randPoint</code> ，在圆中产生均匀随机点。</p>&#10;&#10;<p>实现 <code>Solution</code> 类:</p>&#10;&#10;<ul>&#10;	<li><code>Solution(double radius, double x_center, double y_center)</code> 用圆的半径 <code>radius</code> 和圆心的位置<code> (x_center, y_center)</code> 初始化对象</li>&#10;	<li><code>randPoint()</code> 返回圆内的一个随机点。圆周上的一点被认为在圆内。答案作为数组返回 <code>[x, y]</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: &#10;</strong>[&quot;Solution&quot;,&quot;randPoint&quot;,&quot;randPoint&quot;,&quot;randPoint&quot;]&#10;[[1.0, 0.0, 0.0], [], [], []]&#10;<strong>输出: </strong>[null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]&#10;<strong>解释:</strong>&#10;Solution solution = new Solution(1.0, 0.0, 0.0);&#10;solution.randPoint ();//返回[-0.02493，-0.38077]&#10;solution.randPoint ();//返回[0.82314,0.38945]&#10;solution.randPoint ();//返回[0.36572,0.17248]</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt; radius &lt;= 10<sup>8</sup></code></li>&#10;	<li><code>-10<sup>7</sup> &lt;= x_center, y_center &lt;= 10<sup>7</sup></code></li>&#10;	<li><code>randPoint</code> 最多被调用 <code>3 * 10<sup>4</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 实现（halfrost） · Go 实现</summary>
<p><a href="https://github.com/halfrost/LeetCode-Go/blob/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e/leetcode/0478.Generate-Random-Point-in-a-Circle/478.%20Generate%20Random%20Point%20in%20a%20Circle.go" target="_blank" rel="noopener noreferrer">halfrost · 源码</a> · <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer">MIT 许可</a></p>
<div v-pre>
<blockquote>
<p>本次根据原始 Go 源码整理的中文说明，非 halfrost 书籍原文。</p>
</blockquote>
<p>构造对象时记录半径和圆心。RandPoint 在圆的外接正方形内随机生成坐标，拒绝圆外点，接受后平移到给定圆心；实际运行的是拒绝采样分支。文件中的极坐标片段处于注释中，angle 辅助函数仍按原文保留。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>import (</span></span>
<span class="line"><span>	"math"</span></span>
<span class="line"><span>	"math/rand"</span></span>
<span class="line"><span>	"time"</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Solution struct {</span></span>
<span class="line"><span>	r float64</span></span>
<span class="line"><span>	x float64</span></span>
<span class="line"><span>	y float64</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(radius float64, x_center float64, y_center float64) Solution {</span></span>
<span class="line"><span>	rand.Seed(time.Now().UnixNano())</span></span>
<span class="line"><span>	return Solution{radius, x_center, y_center}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Solution) RandPoint() []float64 {</span></span>
<span class="line"><span>	/*</span></span>
<span class="line"><span>	   a := angle()</span></span>
<span class="line"><span>	   r := this.r * math.Sqrt(rand.Float64())</span></span>
<span class="line"><span>	   x := r * math.Cos(a) + this.x</span></span>
<span class="line"><span>	   y := r * math.Sin(a) + this.y</span></span>
<span class="line"><span>	   return []float64{x, y}*/</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		rx := 2*rand.Float64() - 1.0</span></span>
<span class="line"><span>		ry := 2*rand.Float64() - 1.0</span></span>
<span class="line"><span>		x := this.r * rx</span></span>
<span class="line"><span>		y := this.r * ry</span></span>
<span class="line"><span>		if x*x+y*y &#x3C;= this.r*this.r {</span></span>
<span class="line"><span>			return []float64{x + this.x, y + this.y}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func angle() float64 {</span></span>
<span class="line"><span>	return rand.Float64() * 2 * math.Pi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your Solution object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(radius, x_center, y_center);</span></span>
<span class="line"><span> * param_1 := obj.RandPoint();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/generate-random-point-in-a-circle" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0478.Generate%20Random%20Point%20in%20a%20Circle/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-479" tabindex="-1">479. 最大回文数乘积 <a class="header-anchor" href="#q-479" aria-label="Permalink to &quot;479. 最大回文数乘积 {#q-479}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数 n ，返回 <em>可表示为两个 <code>n</code> 位整数乘积的 <strong>最大回文整数</strong></em> 。因为答案可能非常大，所以返回它对 <code>1337</code> <strong>取余</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2&#10;<strong>输出：</strong>987&#10;<strong>解释：</strong>99 x 91 = 9009, 9009 % 1337 = 987&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1&#10;<strong>输出：</strong>9&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 8</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求两个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 位整数乘积中最大的回文，再模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1337</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>8</mn>
</math></span>，枚举所有乘积再判回文过大。</p>
<p>从大到小枚举回文的前半 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，镜像得到回文 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，再检查是否存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 位因子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>（从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mi>n</mi>
  </msup>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 向下， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>t</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2265;</mo>
  <mi>x</mi>
</math></span>）。第一个成功的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 即为最大。</p>
<p>先构造回文再试因子，比枚举乘积更早遇到最大值。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 的哨兵返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestPalindrome(n int) int {</span></span>
<span class="line"><span>	mx := int(math.Pow10(n)) - 1</span></span>
<span class="line"><span>	for a := mx; a > mx/10; a-- {</span></span>
<span class="line"><span>		x := a</span></span>
<span class="line"><span>		for b := a; b != 0; b /= 10 {</span></span>
<span class="line"><span>			x = x*10 + b%10</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for t := mx; t*t >= x; t-- {</span></span>
<span class="line"><span>			if x%t == 0 {</span></span>
<span class="line"><span>				return x % 1337</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 9</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-palindrome-product" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0479.Largest%20Palindrome%20Product/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-492" tabindex="-1">492. 构造矩形 <a class="header-anchor" href="#q-492" aria-label="Permalink to &quot;492. 构造矩形 {#q-492}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>作为一位web开发者， 懂得怎样去规划一个页面的尺寸是很重要的。 所以，现给定一个具体的矩形页面面积，你的任务是设计一个长度为 L 和宽度为 W 且满足以下要求的矩形的页面。要求：</p>&#10;&#10;<ol>&#10;	<li>你设计的矩形页面必须等于给定的目标面积。</li>&#10;	<li>宽度 <code>W</code> 不应大于长度 <code>L</code> ，换言之，要求 <code>L >= W </code>。</li>&#10;	<li>长度 <code>L</code> 和宽度 <code>W</code> 之间的差距应当尽可能小。</li>&#10;</ol>&#10;&#10;<p>返回一个 <em>数组</em> <code>[L, W]</code>，其中 <em><code>L</code> 和 <code>W</code> 是你按照顺序设计的网页的长度和宽度</em>。<br>&#10; </p>&#10;&#10;<p><strong>示例1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> 4&#10;<strong>输出:</strong> [2, 2]&#10;<strong>解释:</strong> 目标面积是 4， 所有可能的构造方案有 [1,4], [2,2], [4,1]。&#10;但是根据要求2，[1,4] 不符合要求; 根据要求3，[2,2] 比 [4,1] 更能符合要求. 所以输出长度 L 为 2， 宽度 W 为 2。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> area = 37&#10;<strong>输出:</strong> [37,1]&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> area = 122122&#10;<strong>输出:</strong> [427,286]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= area &lt;= 10<sup>7</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>面积固定，要求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
  <mo>&#x2265;</mo>
  <mi>W</mi>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
  <mo>&#x2212;</mo>
  <mi>W</mi>
</math></span> 最小，即尽量接近正方形。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 扫到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">area</mtext>
</math></span> 找因子偏慢。</p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>W</mi>
  <mo>=</mo>
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <msqrt>
    <mtext mathvariant="italic">area</mtext>
  </msqrt>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 向下找能整除的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>W</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">area</mtext>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>W</mi>
</math></span> 自动不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>W</mi>
</math></span>，差值最小。</p>
<p>从平方根向下保证第一组因子就是最接近的一对。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func constructRectangle(area int) []int {</span></span>
<span class="line"><span>	w := int(math.Sqrt(float64(area)))</span></span>
<span class="line"><span>	for area%w != 0 {</span></span>
<span class="line"><span>		w--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return []int{area / w, w}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/construct-the-rectangle" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0492.Construct%20the%20Rectangle/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-504" tabindex="-1">504. 七进制数 <a class="header-anchor" href="#q-504" aria-label="Permalink to &quot;504. 七进制数 {#q-504}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个整数 <code>num</code>，将其转化为 <strong>7 进制</strong>，并以字符串形式输出。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> num = 100&#10;<strong>输出:</strong> &quot;202&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> num = -7&#10;<strong>输出:</strong> &quot;-10&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>-10<sup>7</sup> &lt;= num &lt;= 10<sup>7</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>七进制转换就是反复除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 取余。负数可先转绝对值再补符号； <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 单独返回。余数序列是低位在前，拼接前需要反转。</p>
<p>除法次数与位数成正比，位数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，远小于任何更重的字符串模拟。</p>
</blockquote>
<p>我们不妨假设 <code v-pre>num</code> 大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么，如果 <code v-pre>num</code> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，只需要返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 即可。否则，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>7</mn>
</math></span> 的结果保存起来，最后逆序拼接成字符串即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，忽略答案的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是 <code v-pre>num</code> 的绝对值大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func convertToBase7(num int) string {</span></span>
<span class="line"><span>	if num == 0 {</span></span>
<span class="line"><span>		return "0"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if num &#x3C; 0 {</span></span>
<span class="line"><span>		return "-" + convertToBase7(-num)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	for num != 0 {</span></span>
<span class="line"><span>		ans = append([]byte{'0' + byte(num%7)}, ans...)</span></span>
<span class="line"><span>		num /= 7</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/base-7" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0504.Base%207/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-507" tabindex="-1">507. 完美数 <a class="header-anchor" href="#q-507" aria-label="Permalink to &quot;507. 完美数 {#q-507}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>对于一个 <strong>正整数</strong>，如果它和除了它自身以外的所有 <strong>正因子</strong> 之和相等，我们称它为 <strong>「完美数」</strong>。</p>&#10;&#10;<p>给定一个 <strong>整数 </strong><code>n</code>， 如果是完美数，返回 <code>true</code>；否则返回 <code>false</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num = 28&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>28 = 1 + 2 + 4 + 7 + 14&#10;1, 2, 4, 7, 和 14 是 28 的所有正因子。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num = 7&#10;<strong>输出：</strong>false&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= num &lt;= 10<sup>8</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>完美数要求真因子之和等于自身。枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的因子在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>8</mn>
  </msup>
</math></span> 时过慢。</p>
<p>因子成对出现：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>i</mi>
</math></span> 也是因子，枚举上界可收到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <mi>n</mi>
    <mi>u</mi>
    <mi>m</mi>
  </msqrt>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的真因子之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，需单独排除。累加全部真因子后与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 比较即可。</p>
</blockquote>
<p>我们首先判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 是否为 1，如果为 1，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 不是完美数，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。</p>
<p>然后，我们从 2 开始枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 的所有正因子，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 的某个正因子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 整除，那么我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 加入到答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 得到的商不等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们也将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 得到的商加入到答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中。</p>
<p>最后，我们判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 是否等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msqrt>
    <mi>n</mi>
  </msqrt>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">num</mtext>
</math></span> 的大小。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func checkPerfectNumber(num int) bool {</span></span>
<span class="line"><span>	if num == 1 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := 1</span></span>
<span class="line"><span>	for i := 2; i &#x3C;= num/i; i++ {</span></span>
<span class="line"><span>		if num%i == 0 {</span></span>
<span class="line"><span>			s += i</span></span>
<span class="line"><span>			if j := num / i; i != j {</span></span>
<span class="line"><span>				s += j</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s == num</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/perfect-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0507.Perfect%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-519" tabindex="-1">519. 随机翻转矩阵 <a class="header-anchor" href="#q-519" aria-label="Permalink to &quot;519. 随机翻转矩阵 {#q-519}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：水塘抽样、哈希表、数学、随机化</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m x n</code> 的二元矩阵 <code>matrix</code> ，且所有值被初始化为 <code>0</code> 。请你设计一个算法，随机选取一个满足 <code>matrix[i][j] == 0</code> 的下标 <code>(i, j)</code> ，并将它的值变为 <code>1</code> 。所有满足 <code>matrix[i][j] == 0</code> 的下标 <code>(i, j)</code> 被选取的概率应当均等。</p>&#10;&#10;<p>尽量最少调用内置的随机函数，并且优化时间和空间复杂度。</p>&#10;&#10;<p>实现 <code>Solution</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>Solution(int m, int n)</code> 使用二元矩阵的大小 <code>m</code> 和 <code>n</code> 初始化该对象</li>&#10;	<li><code>int[] flip()</code> 返回一个满足 <code>matrix[i][j] == 0</code> 的随机下标 <code>[i, j]</code> ，并将其对应格子中的值变为 <code>1</code></li>&#10;	<li><code>void reset()</code> 将矩阵中所有的值重置为 <code>0</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入</strong>&#10;[&quot;Solution&quot;, &quot;flip&quot;, &quot;flip&quot;, &quot;flip&quot;, &quot;reset&quot;, &quot;flip&quot;]&#10;[[3, 1], [], [], [], [], []]&#10;<strong>输出</strong>&#10;[null, [1, 0], [2, 0], [0, 0], null, [2, 0]]&#10;&#10;<strong>解释</strong>&#10;Solution solution = new Solution(3, 1);&#10;solution.flip();  // 返回 [1, 0]，此时返回 [0,0]、[1,0] 和 [2,0] 的概率应当相同&#10;solution.flip();  // 返回 [2, 0]，因为 [1,0] 已经返回过了，此时返回 [2,0] 和 [0,0] 的概率应当相同&#10;solution.flip();  // 返回 [0, 0]，根据前面已经返回过的下标，此时只能返回 [0,0]&#10;solution.reset(); // 所有值都重置为 0 ，并可以再次选择下标返回&#10;solution.flip();  // 返回 [2, 0]，此时返回 [0,0]、[1,0] 和 [2,0] 的概率应当相同</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>&#10;	<li>每次调用<code>flip</code> 时，矩阵中至少存在一个值为 0 的格子。</li>&#10;	<li>最多调用 <code>1000</code> 次 <code>flip</code> 和 <code>reset</code> 方法。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 实现（halfrost） · Go 实现</summary>
<p><a href="https://github.com/halfrost/LeetCode-Go/blob/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e/leetcode/0519.Random-Flip-Matrix/519.Random%20Flip%20Matrix.go" target="_blank" rel="noopener noreferrer">halfrost · 源码</a> · <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer">MIT 许可</a></p>
<div v-pre>
<blockquote>
<p>本次根据原始 Go 源码整理的中文说明，非 halfrost 书籍原文。</p>
</blockquote>
<p>将矩阵位置映射为一维下标。Flip 从尚未使用的下标范围随机取一个位置，通过映射取得实际格子，然后把范围末尾的映射移到该位置并缩小范围；返回值再转换成行列坐标。Reset 恢复总数并清空映射，避免显式存储整个矩阵。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>import (</span></span>
<span class="line"><span>	"math/rand"</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Solution struct {</span></span>
<span class="line"><span>	r     int</span></span>
<span class="line"><span>	c     int</span></span>
<span class="line"><span>	total int</span></span>
<span class="line"><span>	mp    map[int]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(m int, n int) Solution {</span></span>
<span class="line"><span>	return Solution{</span></span>
<span class="line"><span>		r:     m,</span></span>
<span class="line"><span>		c:     n,</span></span>
<span class="line"><span>		total: m * n,</span></span>
<span class="line"><span>		mp:    map[int]int{},</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Solution) Flip() []int {</span></span>
<span class="line"><span>	k := rand.Intn(this.total)</span></span>
<span class="line"><span>	val := k</span></span>
<span class="line"><span>	if v, ok := this.mp[k]; ok {</span></span>
<span class="line"><span>		val = v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if _, ok := this.mp[this.total-1]; ok {</span></span>
<span class="line"><span>		this.mp[k] = this.mp[this.total-1]</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		this.mp[k] = this.total - 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	delete(this.mp, this.total-1)</span></span>
<span class="line"><span>	this.total--</span></span>
<span class="line"><span>	newR, newC := val/this.c, val%this.c</span></span>
<span class="line"><span>	return []int{newR, newC}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Solution) Reset() {</span></span>
<span class="line"><span>	this.total = this.r * this.c</span></span>
<span class="line"><span>	this.mp = map[int]int{}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/random-flip-matrix" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0519.Random%20Flip%20Matrix/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-537" tabindex="-1">537. 复数乘法 <a class="header-anchor" href="#q-537" aria-label="Permalink to &quot;537. 复数乘法 {#q-537}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><a href="https://baike.baidu.com/item/%E5%A4%8D%E6%95%B0/254365?fr=aladdin" target="_blank" rel="noopener noreferrer">复数</a> 可以用字符串表示，遵循 <code>&quot;<strong>实部</strong>+<strong>虚部</strong>i&quot;</code> 的形式，并满足下述条件：</p>&#10;&#10;<ul>&#10;	<li><code>实部</code> 是一个整数，取值范围是 <code>[-100, 100]</code></li>&#10;	<li><code>虚部</code> 也是一个整数，取值范围是 <code>[-100, 100]</code></li>&#10;	<li><code>i<sup>2</sup> == -1</code></li>&#10;</ul>&#10;&#10;<p>给你两个字符串表示的复数 <code>num1</code> 和 <code>num2</code> ，请你遵循复数表示形式，返回表示它们乘积的字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num1 = &quot;1+1i&quot;, num2 = &quot;1+1i&quot;&#10;<strong>输出：</strong>&quot;0+2i&quot;&#10;<strong>解释：</strong>(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>num1 = &quot;1+-1i&quot;, num2 = &quot;1+-1i&quot;&#10;<strong>输出：</strong>&quot;0+-2i&quot;&#10;<strong>解释：</strong>(1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>num1</code> 和 <code>num2</code> 都是有效的复数表示。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>复数乘法有闭式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">(</mo>
  <mi>c</mi>
  <mo>+</mo>
  <mi>d</mi>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mi>c</mi>
  <mo>&#x2212;</mo>
  <mi>b</mi>
  <mi>d</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mi>d</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mi>c</mi>
  <mo stretchy="false">)</mo>
  <mi>i</mi>
</math></span>。输入已是 <code v-pre>a+bi</code> 形式，拆出四个整数即可套公式。</p>
<p>去掉末尾 <code v-pre>i</code> 再按 <code v-pre>+</code> 分割，得到实部虚部；按公式计算后格式化回去。无需模拟多项式展开。</p>
</blockquote>
<p>我们可以将复数字符串转换成对应的实部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和虚部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，然后根据复数乘法的公式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>b</mi>
    <mn>1</mn>
  </msub>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>b</mi>
    <mn>2</mn>
  </msub>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>b</mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>b</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>b</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <msub>
    <mi>b</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mi>i</mi>
</math></span> 计算出结果。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func complexNumberMultiply(num1 string, num2 string) string {</span></span>
<span class="line"><span>	x, _ := strconv.ParseComplex(num1, 64)</span></span>
<span class="line"><span>	y, _ := strconv.ParseComplex(num2, 64)</span></span>
<span class="line"><span>	return fmt.Sprintf("%d+%di", int(real(x*y)), int(imag(x*y)))</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/complex-number-multiplication" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0537.Complex%20Number%20Multiplication/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-539" tabindex="-1">539. 最小时间差 <a class="header-anchor" href="#q-539" aria-label="Permalink to &quot;539. 最小时间差 {#q-539}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 24 小时制（小时:分钟 <strong>&quot;HH:MM&quot;</strong>）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>timePoints = [&quot;23:59&quot;,&quot;00:00&quot;]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>timePoints = [&quot;00:00&quot;,&quot;23:59&quot;,&quot;00:00&quot;]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= timePoints.length &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>timePoints[i]</code> 格式为 <strong>&quot;HH:MM&quot;</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最小时间差出现在排序后的相邻时刻，还要比较「最后一个与第一个跨午夜」的差。时刻只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1440</mn>
</math></span> 种，点数超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1440</mn>
</math></span> 必有重复，差为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>化成分钟后排序，再把首元素加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1440</mn>
</math></span> 接到末尾，相邻差的最小值即为答案。排序决定总复杂度。</p>
</blockquote>
<p>我们注意到，时间点最多只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>24</mn>
  <mo>&#xD7;</mo>
  <mn>60</mn>
  <mo>=</mo>
  <mn>1440</mn>
</math></span> 个，因此，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>P</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 长度超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1440</mn>
</math></span>，说明有重复的时间点，提前返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>接下来，我们首先遍历时间列表，将其转换为“分钟制”列表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，比如，对于时间点 <code v-pre>13:14</code>，将其转换为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>13</mn>
  <mo>&#xD7;</mo>
  <mn>60</mn>
  <mo>+</mo>
  <mn>14</mn>
</math></span>。</p>
<p>接着将“分钟制”列表按升序排列，然后将此列表的最小时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1440</mn>
</math></span> 追加至列表尾部，用于处理最大值、最小值的差值这种特殊情况。</p>
<p>最后遍历“分钟制”列表，找出相邻两个时间的最小值即可。</p>
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
</math></span> 为时间点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMinDifference(timePoints []string) int {</span></span>
<span class="line"><span>	if len(timePoints) > 1440 {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	n := len(timePoints)</span></span>
<span class="line"><span>	nums := make([]int, n+1)</span></span>
<span class="line"><span>	for i, time := range timePoints {</span></span>
<span class="line"><span>		parts := strings.Split(time, ":")</span></span>
<span class="line"><span>		hours, _ := strconv.Atoi(parts[0])</span></span>
<span class="line"><span>		minutes, _ := strconv.Atoi(parts[1])</span></span>
<span class="line"><span>		nums[i] = hours*60 + minutes</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	sort.Ints(nums[:n])</span></span>
<span class="line"><span>	nums[n] = nums[0] + 1440</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ans := 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>		ans = min(ans, nums[i]-nums[i-1])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-time-difference" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0539.Minimum%20Time%20Difference/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-564" tabindex="-1">564. 寻找最近的回文数 <a class="header-anchor" href="#q-564" aria-label="Permalink to &quot;564. 寻找最近的回文数 {#q-564}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个表示整数的字符串 <code>n</code> ，返回与它最近的回文整数（不包括自身）。如果不止一个，返回较小的那个。</p>&#10;&#10;<p>“最近的”定义为两个整数<strong>差的绝对值</strong>最小。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> n = &quot;123&quot;&#10;<strong>输出:</strong> &quot;121&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> n = &quot;1&quot;&#10;<strong>输出:</strong> &quot;0&quot;&#10;<strong>解释:</strong> 0 和 2是最近的回文，但我们返回最小的，也就是 0。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n.length &lt;= 18</code></li>&#10;	<li><code>n</code> 只由数字组成</li>&#10;	<li><code>n</code> 不含前导 0</li>&#10;	<li><code>n</code> 代表在 <code>[1, 10<sup>18</sup> - 1]</code> 范围内的整数</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要找与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 数值最接近且不等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的回文数。在附近枚举整数再判断回文，范围漫无边界。</p>
<p>最近回文只可能来自「镜像前半」及其 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#xB1;</mo>
  <mn>1</mn>
</math></span>，再加上位数变化的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>99</mn>
  <mo>&#x2026;</mo>
  <mn>9</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
  <mo>&#x2026;</mo>
  <mn>001</mn>
</math></span>。对前半加减一后按长度镜像，丢掉 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 本身，再按距离、再按数值选取。候选只有常数个。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func nearestPalindromic(n string) string {</span></span>
<span class="line"><span>	x := new(big.Int)</span></span>
<span class="line"><span>	x.SetString(n, 10)</span></span>
<span class="line"><span>	l := len(n)</span></span>
<span class="line"><span>	ten := big.NewInt(10)</span></span>
<span class="line"><span>	base := new(big.Int).Exp(ten, big.NewInt(int64(l-1)), nil)</span></span>
<span class="line"><span>	res := []*big.Int{</span></span>
<span class="line"><span>		new(big.Int).Sub(new(big.Int).Set(base), big.NewInt(1)),</span></span>
<span class="line"><span>		new(big.Int).Add(new(big.Int).Mul(new(big.Int).Set(base), ten), big.NewInt(1)),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	left := new(big.Int)</span></span>
<span class="line"><span>	left.SetString(n[:(l+1)/2], 10)</span></span>
<span class="line"><span>	for d := int64(-1); d &#x3C;= 1; d++ {</span></span>
<span class="line"><span>		i := new(big.Int).Add(left, big.NewInt(d))</span></span>
<span class="line"><span>		j := new(big.Int).Set(i)</span></span>
<span class="line"><span>		if l&#x26;1 == 1 {</span></span>
<span class="line"><span>			j.Quo(j, ten)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for j.Sign() > 0 {</span></span>
<span class="line"><span>			i.Mul(i, ten)</span></span>
<span class="line"><span>			i.Add(i, new(big.Int).Mod(j, ten))</span></span>
<span class="line"><span>			j.Quo(j, ten)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		res = append(res, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var ans *big.Int</span></span>
<span class="line"><span>	for _, t := range res {</span></span>
<span class="line"><span>		if t.Cmp(x) == 0 {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dist := new(big.Int).Abs(new(big.Int).Sub(t, x))</span></span>
<span class="line"><span>		if ans == nil {</span></span>
<span class="line"><span>			ans = new(big.Int).Set(t)</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		best := new(big.Int).Abs(new(big.Int).Sub(ans, x))</span></span>
<span class="line"><span>		if dist.Cmp(best) &#x3C; 0 || (dist.Cmp(best) == 0 &#x26;&#x26; t.Cmp(ans) &#x3C; 0) {</span></span>
<span class="line"><span>			ans = new(big.Int).Set(t)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans.String()</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-the-closest-palindrome" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0564.Find%20the%20Closest%20Palindrome/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-573" tabindex="-1">573. 松鼠模拟 🔒 <a class="header-anchor" href="#q-573" aria-label="Permalink to &quot;573. 松鼠模拟 🔒 {#q-573}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数 <code>height</code> 和 <code>width</code> ，代表一个大小为 <code>height x width</code> 的花园。你还得到了以下信息：</p>&#10;&#10;<ul>&#10;	<li>一个数组 <code>tree</code> ，其中 <code>tree = [tree<sub>r</sub>, tree<sub>c</sub>]</code> 是花园中树的位置，</li>&#10;	<li>一个数组 <code>squirrel</code> ，其中 <code>squirrel = [squirrel<sub>r</sub>, squirrel<sub>c</sub>]</code> 是花园中松鼠的位置，</li>&#10;	<li>一个数组 <code>nuts</code> ，其中 <code>nuts[i] = [nut<sub>i<sub>r</sub></sub>, nut<sub>i<sub>c</sub></sub>]</code> 是花园中第 <code>i<sup>th</sup></code> 个坚果的位置。</li>&#10;</ul>&#10;&#10;<p>松鼠一次最多只能携带一个坚果，并且能够向上、下、左、右四个方向移动到相邻的单元格。</p>&#10;&#10;<p>返回松鼠收集所有坚果并逐一放在树下的 <strong>最小距离</strong> 。</p>&#10;&#10;<p><strong>距离</strong> 是指移动的次数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0573.Squirrel%20Simulation/images/squirrel1-grid.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>height = 5, width = 7, tree = [2,2], squirrel = [4,4], nuts = [[3,0], [2,5]]&#10;<strong>输出：</strong>12&#10;<strong>解释：</strong>为实现最小的距离，松鼠应该先摘 [2, 5] 位置的坚果。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0573.Squirrel%20Simulation/images/squirrel2-grid.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>height = 1, width = 3, tree = [0,1], squirrel = [0,0], nuts = [[0,2]]&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= height, width &lt;= 100</code></li>&#10;	<li><code>tree.length == 2</code></li>&#10;	<li><code>squirrel.length == 2</code></li>&#10;	<li><code>1 &lt;= nuts.length &lt;= 5000</code></li>&#10;	<li><code>nuts[i].length == 2</code></li>&#10;	<li><code>0 &lt;= tree<sub>r</sub>, squirrel<sub>r</sub>, nut<sub>i<sub>r</sub></sub> &lt;= height</code></li>&#10;	<li><code>0 &lt;= tree<sub>c</sub>, squirrel<sub>c</sub>, nut<sub>i<sub>c</sub></sub> &lt;= width</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>松鼠先衔一颗坚果上树，之后每颗坚果都是树往返。若枚举第一颗坚果再模拟全部路径，只是在重复加同一组往返。</p>
<p>全部坚果到树的往返之和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。若第一颗是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mo stretchy="false">)</mo>
</math></span>，则少走一次该坚果到树的距离 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，多走松鼠到该坚果的距离 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，总长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
</math></span>。枚举第一颗取最小即可。</p>
</blockquote>
<p>我们观察松鼠的移动路径，可以发现，松鼠会首先移动到某个坚果的位置，然后移动到树的位置。接下来，松鼠的移动路径之和等于“其余坚果到树的位置之和”再乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。</p>
<p>因此，我们只需要选出一个坚果，作为松鼠的第一个目标，使得其到树的位置之和最小，即可得到最小路径。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为坚果的数量。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minDistance(height int, width int, tree []int, squirrel []int, nuts [][]int) int {</span></span>
<span class="line"><span>	tr, tc := tree[0], tree[1]</span></span>
<span class="line"><span>	sr, sc := squirrel[0], squirrel[1]</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, e := range nuts {</span></span>
<span class="line"><span>		s += abs(e[0]-tr) + abs(e[1]-tc)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s &#x3C;&#x3C;= 1</span></span>
<span class="line"><span>	ans := math.MaxInt32</span></span>
<span class="line"><span>	for _, e := range nuts {</span></span>
<span class="line"><span>		a := abs(e[0]-tr) + abs(e[1]-tc)</span></span>
<span class="line"><span>		b := abs(e[0]-sr) + abs(e[1]-sc)</span></span>
<span class="line"><span>		ans = min(ans, s-a+b)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/squirrel-simulation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0573.Squirrel%20Simulation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-587" tabindex="-1">587. 安装栅栏 <a class="header-anchor" href="#q-587" aria-label="Permalink to &quot;587. 安装栅栏 {#q-587}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数组、数学、凸包、多边形</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个数组 <code>trees</code>，其中 <code>trees[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 表示树在花园中的位置。</p>&#10;&#10;<p>你被要求用最短长度的绳子把整个花园围起来，因为绳子很贵。只有把 <strong>所有的树都围起来</strong>，花园才围得很好。</p>&#10;&#10;<p>返回<em>恰好位于围栏周边的树木的坐标</em>。</p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0587.Erect%20the%20Fence/images/erect2-plane.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> points = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]&#10;<strong>输出:</strong> [[1,1],[2,0],[3,3],[2,4],[4,2]]</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0587.Erect%20the%20Fence/images/erect1-plane.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> points = [[1,2],[2,2],[4,2]]&#10;<strong>输出:</strong> [[4,2],[2,2],[1,2]]</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>注意:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= points.length &lt;= 3000</code></li>&#10;	<li><code>points[i].length == 2</code></li>&#10;	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 100</code></li>&#10;	<li>&#10;	<p>所有给定的点都是 <strong>唯一 </strong>的。</p>&#10;	</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Andrew 算法 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>围栏是点集的凸包。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 不大时 Jarvis 可以，Andrew 扫描在排序后线性围一圈，更稳。边上的点也要留下，因此叉积用严格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&lt;</mo>
  <mn>0</mn>
</math></span> 才弹出，共线点保留。</p>
<p>按坐标排序后先走下凸壳，再用访问标记走上凸壳，避免重复。最后弹出起点。点数少于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 时全部返回。</p>
</blockquote>
<p>原理：</p>
<p>利用夹角，让整个图形保持左转。先将最左边的前两个点加入栈中，每次加入新点时判断是否左拐（叉积大于 0），如果是就将新点直接加入；如果不是，就弹出栈顶，直到左拐，将新点加入栈中。</p>
<p>流程：</p>
<ol>
<li>将所有点 <code v-pre>(x, y)</code> 进行排序，以 x 为第一关键字，y 为第二关键字升序排序；</li>
<li>先从左至右维护凸包的下半部分，然后再从右至左维护上半部分；</li>
<li>将第一个点放入栈中，这个点一定时凸包的最左边的点了，是不会清理掉的，然后再将第二个点放入栈中。当栈中元素大于等于 2 的时候，就要判断栈顶元素是否还要保留：
<ul>
<li>如果新点在栈顶元素和次栈顶元素所组成的直线的逆时针方向上，那么直接将新点加入栈中；</li>
<li>否则，将栈顶元素不断弹出，直至新点的位置出现在栈顶元素与次栈顶元素所在直线的逆时针方向。</li>
</ul>
</li>
</ol>
<p>这个过程，是从左往右走的，并且得到的凸包是凸壳的下半部分。求上半部分的时候，从右往左遍历。</p>
<p>时间复杂度 O(nlogn)。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func outerTrees(trees [][]int) [][]int {</span></span>
<span class="line"><span>	n := len(trees)</span></span>
<span class="line"><span>	if n &#x3C; 4 {</span></span>
<span class="line"><span>		return trees</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(trees, func(i, j int) bool {</span></span>
<span class="line"><span>		if trees[i][0] == trees[j][0] {</span></span>
<span class="line"><span>			return trees[i][1] &#x3C; trees[j][1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return trees[i][0] &#x3C; trees[j][0]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	cross := func(i, j, k int) int {</span></span>
<span class="line"><span>		a, b, c := trees[i], trees[j], trees[k]</span></span>
<span class="line"><span>		return (b[0]-a[0])*(c[1]-b[1]) - (b[1]-a[1])*(c[0]-b[0])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	stk := []int{0}</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for len(stk) > 1 &#x26;&#x26; cross(stk[len(stk)-1], stk[len(stk)-2], i) &#x3C; 0 {</span></span>
<span class="line"><span>			vis[stk[len(stk)-1]] = false</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		stk = append(stk, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m := len(stk)</span></span>
<span class="line"><span>	for i := n - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		if vis[i] {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for len(stk) > m &#x26;&#x26; cross(stk[len(stk)-1], stk[len(stk)-2], i) &#x3C; 0 {</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stk = append(stk, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var ans [][]int</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(stk)-1; i++ {</span></span>
<span class="line"><span>		ans = append(ans, trees[stk[i]])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/erect-the-fence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0587.Erect%20the%20Fence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-592" tabindex="-1">592. 分数加减运算 <a class="header-anchor" href="#q-592" aria-label="Permalink to &quot;592. 分数加减运算 {#q-592}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串、最大公约数、模拟、欧几里得算法</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个表示分数加减运算的字符串 <code>expression</code> ，你需要返回一个字符串形式的计算结果。 </p>&#10;&#10;<p>这个结果应该是不可约分的分数，即 <a href="https://baike.baidu.com/item/%E6%9C%80%E7%AE%80%E5%88%86%E6%95%B0" target="_blank" rel="noopener noreferrer">最简分数</a>。 如果最终结果是一个整数，例如 <code>2</code>，你需要将它转换成分数形式，其分母为 <code>1</code>。所以在上述例子中, <code>2</code> 应该被转换为 <code>2/1</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>expression</code> = &quot;-1/2+1/2&quot;&#10;<strong>输出:</strong> &quot;0/1&quot;&#10;</pre>&#10;&#10;<p><strong> 示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>expression</code> = &quot;-1/2+1/2+1/3&quot;&#10;<strong>输出:</strong> &quot;1/3&quot;&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> <code>expression</code> = &quot;1/3-1/2&quot;&#10;<strong>输出:</strong> &quot;-1/6&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>输入和输出字符串只包含 <code>'0'</code> 到 <code>'9'</code> 的数字，以及 <code>'/'</code>, <code>'+'</code> 和 <code>'-'</code>。 </li>&#10;	<li>输入和输出分数格式均为 <code>±分子/分母</code>。如果输入的第一个分数或者输出的分数是正数，则 <code>'+'</code> 会被省略掉。</li>&#10;	<li>输入只包含合法的 <strong>最简分数</strong>，每个分数的<strong>分子</strong>与<strong>分母</strong>的范围是 <code>[1,10]</code>。 如果分母是 1，意味着这个分数实际上是一个整数。</li>&#10;	<li>输入的分数个数范围是 [1,10]。</li>&#10;	<li><strong>最终结果 </strong>的分子与分母保证是 32 位整数范围内的有效整数。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>若干分数相加减，分母在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span>。通分后再约分即可，不必用分数类。</p>
<p>取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的最小公倍数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 作公共分母，扫描带符号的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>b</mi>
</math></span> 累加到分子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。最后与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 求 gcd 约分。表达式若不以符号开头则先补 <code v-pre>+</code>，便于统一解析。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func fractionAddition(expression string) string {</span></span>
<span class="line"><span>	x, y := 0, 6*7*8*9*10</span></span>
<span class="line"><span>	if unicode.IsDigit(rune(expression[0])) {</span></span>
<span class="line"><span>		expression = "+" + expression</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	i, n := 0, len(expression)</span></span>
<span class="line"><span>	for i &#x3C; n {</span></span>
<span class="line"><span>		sign := 1</span></span>
<span class="line"><span>		if expression[i] == '-' {</span></span>
<span class="line"><span>			sign = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>		j := i</span></span>
<span class="line"><span>		for j &#x3C; n &#x26;&#x26; expression[j] != '+' &#x26;&#x26; expression[j] != '-' {</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s := expression[i:j]</span></span>
<span class="line"><span>		t := strings.Split(s, "/")</span></span>
<span class="line"><span>		a, _ := strconv.Atoi(t[0])</span></span>
<span class="line"><span>		b, _ := strconv.Atoi(t[1])</span></span>
<span class="line"><span>		x += sign * a * y / b</span></span>
<span class="line"><span>		i = j</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	z := gcd(abs(x), y)</span></span>
<span class="line"><span>	x /= z</span></span>
<span class="line"><span>	y /= z</span></span>
<span class="line"><span>	return fmt.Sprintf("%d/%d", x, y)</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/fraction-addition-and-subtraction" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0592.Fraction%20Addition%20and%20Subtraction/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-593" tabindex="-1">593. 有效的正方形 <a class="header-anchor" href="#q-593" aria-label="Permalink to &quot;593. 有效的正方形 {#q-593}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：几何、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定2D空间中四个点的坐标 <code>p1</code>, <code>p2</code>, <code>p3</code> 和 <code>p4</code>，如果这四个点构成一个正方形，则返回 <code>true</code> 。</p>&#10;&#10;<p>点的坐标 <code>p<sub>i</sub></code> 表示为 <code>[xi, yi]</code> 。 <code>输入没有任何顺序</code> 。</p>&#10;&#10;<p>一个 <strong>有效的正方形</strong> 有四条等边和四个等角(90度角)。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]&#10;<strong>输出:</strong> true&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]&#10;<b>输出：</b>false&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]&#10;<b>输出：</b>true&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>p1.length == p2.length == p3.length == p4.length == 2</code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>四点能否构成正方形：四边相等且邻边垂直，或等价地任意三点都是等腰直角三角形。枚举排列再判断 quadrilateral 较繁。</p>
<p>对每三个点检查三条边是否满足两边相等且勾股（并排除零边长）。四个三点组都成立则四点构成正方形。用平方距离避免开方。</p>
</blockquote>
<p>若任选三个点，都能构成等腰直角三角形，说明是有效的正方形。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func validSquare(p1 []int, p2 []int, p3 []int, p4 []int) bool {</span></span>
<span class="line"><span>	check := func(a, b, c []int) bool {</span></span>
<span class="line"><span>		x1, y1 := a[0], a[1]</span></span>
<span class="line"><span>		x2, y2 := b[0], b[1]</span></span>
<span class="line"><span>		x3, y3 := c[0], c[1]</span></span>
<span class="line"><span>		d1 := (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)</span></span>
<span class="line"><span>		d2 := (x1-x3)*(x1-x3) + (y1-y3)*(y1-y3)</span></span>
<span class="line"><span>		d3 := (x2-x3)*(x2-x3) + (y2-y3)*(y2-y3)</span></span>
<span class="line"><span>		if d1 == d2 &#x26;&#x26; d1+d2 == d3 &#x26;&#x26; d1 > 0 {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if d1 == d3 &#x26;&#x26; d1+d3 == d2 &#x26;&#x26; d1 > 0 {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if d2 == d3 &#x26;&#x26; d2+d3 == d1 &#x26;&#x26; d2 > 0 {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return check(p1, p2, p3) &#x26;&#x26; check(p1, p3, p4) &#x26;&#x26; check(p1, p2, p4) &#x26;&#x26; check(p2, p3, p4)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/valid-square" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0593.Valid%20Square/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-598" tabindex="-1">598. 区间加法 II <a class="header-anchor" href="#q-598" aria-label="Permalink to &quot;598. 区间加法 II {#q-598}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m x n</code> 的矩阵 <code>M</code><strong> </strong>和一个操作数组 <code>op</code> 。矩阵初始化时所有的单元格都为 <code>0</code> 。<code>ops[i] = [ai, bi]</code> 意味着当所有的 <code>0 &lt;= x &lt; ai</code> 和 <code>0 &lt;= y &lt; bi</code> 时， <code>M[x][y]</code> 应该加 1。</p>&#10;&#10;<p>在 <em>执行完所有操作后</em> ，计算并返回 <em>矩阵中最大整数的个数</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0598.Range%20Addition%20II/images/ex1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> m = 3, n = 3，ops = [[2,2],[3,3]]&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong> M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]&#10;<strong>输出:</strong> 4&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> m = 3, n = 3, ops = []&#10;<strong>输出:</strong> 9&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<p></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= m, n &lt;= 4 * 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= ops.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>ops[i].length == 2</code></li>&#10;	<li><code>1 &lt;= a<sub>i</sub> &lt;= m</code></li>&#10;	<li><code>1 &lt;= b<sub>i</sub> &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：脑筋急转弯 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次给左上角子矩阵加一，最后的最大值等于操作次数，其出现次数等于所有操作子矩阵的交集面积。子矩阵都从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 出发，交集就是最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 与最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>。</p>
<p>扫一遍操作取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <msub>
    <mi>a</mi>
    <mi>i</mi>
  </msub>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <msub>
    <mi>b</mi>
    <mi>i</mi>
  </msub>
</math></span>，乘积即答案。无需真正建 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span> 的差分数组。</p>
</blockquote>
<p>我们注意到，所有操作子矩阵的交集就是最终的最大整数所在的子矩阵，并且每个操作子矩阵都是从左上角 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 开始的，因此，我们遍历所有操作子矩阵，求出行数和列数的最小值，最后返回这两个值的乘积即可。</p>
<p>注意，如果操作数组为空，那么矩阵中的最大整数个数就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 是操作数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ops</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxCount(m int, n int, ops [][]int) int {</span></span>
<span class="line"><span>	for _, op := range ops {</span></span>
<span class="line"><span>		m = min(m, op[0])</span></span>
<span class="line"><span>		n = min(n, op[1])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return m * n</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/range-addition-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0598.Range%20Addition%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-628" tabindex="-1">628. 三个数的最大乘积 <a class="header-anchor" href="#q-628" aria-label="Permalink to &quot;628. 三个数的最大乘积 {#q-628}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整型数组 <code>nums</code>。</p>&#10;&#10;<p>在数组中找出由三个数组成的 <strong>最大</strong> 乘积，并返回这个 <strong>最大</strong> 乘积。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,-3]&#10;<strong>输出：</strong>-6&#10;<strong>解释：</strong>只有三个数字 1、2 和 -3，因此最大乘积是 1 * 2 * -3 = -6。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,4]&#10;<strong>输出：</strong>24&#10;<strong>解释：</strong>最大的乘积来自三个最大的数字：2 * 3 * 4 = 24。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [-1,-2,-3]&#10;<strong>输出：</strong>-6&#10;<strong>解释：</strong>只有三个数字 -1、-2 和 -3，因此最大乘积是 (-1) * (-2) * (-3) = -6。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 分类讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三个数乘积的最大者，可能来自三个最大正数，也可能来自两个绝对值很大的负数再乘最大正数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，排序后分类即可。</p>
<p>排序后比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>3</mn>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，覆盖全正、全负与正负并存。</p>
</blockquote>
<p>我们先对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 进行排序，接下来分两种情况讨论：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中全是非负数或者全是非正数，那么答案即为最后三个数的乘积，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>3</mn>
  <mo stretchy="false">]</mo>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中既有正数也有负数，那么答案可能是两个最小负数和一个最大整数的乘积，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>；也可能是最后三个数的乘积，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>3</mn>
  <mo stretchy="false">]</mo>
</math></span>。</li>
</ul>
<p>最后返回两种情况的最大值即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumProduct(nums []int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	a := nums[n-1] * nums[n-2] * nums[n-3]</span></span>
<span class="line"><span>	b := nums[n-1] * nums[0] * nums[1]</span></span>
<span class="line"><span>	if a > b {</span></span>
<span class="line"><span>		return a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return b</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：一次遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一付出排序的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。乘积只依赖最小两个与最大三个数，一次遍历（或 <code v-pre>nlargest</code>）维护这五个极值即可降到线性。</p>
</blockquote>
<p>我们可以不用对数组进行排序，而是维护五个变量，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mi1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mi2</mtext>
</math></span> 表示数组中最小的两个数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx1</mtext>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx2</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx3</mtext>
</math></span> 表示数组中最大的三个数。</p>
<p>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">mi1</mtext>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">mi2</mtext>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">mx1</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">mx1</mtext>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">mx2</mtext>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">mx3</mtext>
  <mo stretchy="false">)</mo>
</math></span> 即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumProduct(nums []int) int {</span></span>
<span class="line"><span>	const inf = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	mi1, mi2 := inf, inf</span></span>
<span class="line"><span>	mx1, mx2, mx3 := -inf, -inf, -inf</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		if x &#x3C; mi1 {</span></span>
<span class="line"><span>			mi1, mi2 = x, mi1</span></span>
<span class="line"><span>		} else if x &#x3C; mi2 {</span></span>
<span class="line"><span>			mi2 = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if x > mx1 {</span></span>
<span class="line"><span>			mx1, mx2, mx3 = x, mx1, mx2</span></span>
<span class="line"><span>		} else if x > mx2 {</span></span>
<span class="line"><span>			mx2, mx3 = x, mx2</span></span>
<span class="line"><span>		} else if x > mx3 {</span></span>
<span class="line"><span>			mx3 = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return max(mi1*mi2*mx1, mx1*mx2*mx3)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-product-of-three-numbers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0628.Maximum%20Product%20of%20Three%20Numbers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-640" tabindex="-1">640. 求解方程 <a class="header-anchor" href="#q-640" aria-label="Permalink to &quot;640. 求解方程 {#q-640}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串、线性代数、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>求解一个给定的方程，将<code>x</code>以字符串 <code>&quot;x=#value&quot;</code> 的形式返回。该方程仅包含 <code>'+'</code> ， <code>'-'</code> 操作，变量 <code>x</code> 和其对应系数。</p>&#10;&#10;<p>如果方程没有解或存在的解不为整数，请返回 <code>&quot;No solution&quot;</code> 。如果方程有无限解，则返回 <code>“Infinite solutions”</code> 。</p>&#10;&#10;<p>题目保证，如果方程中只有一个解，则 <span><span>'x'</span></span> 的值是一个整数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> equation = &quot;x+5-3+x=6+x-2&quot;&#10;<strong>输出:</strong> &quot;x=2&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> equation = &quot;x=x&quot;&#10;<strong>输出:</strong> &quot;Infinite solutions&quot;&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> equation = &quot;2x=x&quot;&#10;<strong>输出:</strong> &quot;x=0&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= equation.length &lt;= 1000</code></li>&#10;	<li><code>equation</code> 只有一个 <code>'='</code>. </li>&#10;	<li>方程由绝对值在 <code>[0, 100]</code>  范围内且无任何前导零的整数和变量 <code>'x'</code> 组成。<span><span><span>​​​</span></span></span></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一元一次方程要化成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 再讨论解的个数。字符串里系数可省、符号相连，按字符手写状态机容易漏。</p>
<p>以 <code v-pre>=</code> 切开左右，各自扫描带符号项：以 <code v-pre>x</code> 结尾计入系数，否则计入常数。比较两侧系数与常数即可判定无穷解、无解或唯一整数解。</p>
</blockquote>
<p>将方程 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
  <mi>q</mi>
  <mi>u</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
</math></span> 按照等号 “=” 切分为左右两个式子，分别算出左右两个式子中 &quot;x&quot; 的系数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mi>i</mi>
  </msub>
</math></span>，以及常数的值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mi>i</mi>
  </msub>
</math></span>。</p>
<p>那么方程转换为等式 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#xD7;</mo>
  <mi>x</mi>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
  <mo>&#xD7;</mo>
  <mi>x</mi>
  <mo>+</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>。</p>
<ul>
<li>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
</math></span>：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2260;</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>，方程无解；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>y</mi>
    <mn>1</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>y</mi>
    <mn>2</mn>
  </msub>
</math></span>，方程有无限解。</li>
<li>当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
  <mo>&#x2260;</mo>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
</math></span>：方程有唯一解 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <msub>
        <mi>y</mi>
        <mn>2</mn>
      </msub>
      <mo>&#x2212;</mo>
      <msub>
        <mi>y</mi>
        <mn>1</mn>
      </msub>
    </mrow>
    <mrow>
      <msub>
        <mi>x</mi>
        <mn>1</mn>
      </msub>
      <mo>&#x2212;</mo>
      <msub>
        <mi>x</mi>
        <mn>2</mn>
      </msub>
    </mrow>
  </mfrac>
</math></span>。</li>
</ul>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0500-0599/0592.Fraction%20Addition%20and%20Subtraction/README.md" target="_blank" rel="noopener noreferrer">592. 分数加减运算</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func solveEquation(equation string) string {</span></span>
<span class="line"><span>	f := func(s string) []int {</span></span>
<span class="line"><span>		x, y := 0, 0</span></span>
<span class="line"><span>		if s[0] != '-' {</span></span>
<span class="line"><span>			s = "+" + s</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		i, n := 0, len(s)</span></span>
<span class="line"><span>		for i &#x3C; n {</span></span>
<span class="line"><span>			sign := 1</span></span>
<span class="line"><span>			if s[i] == '-' {</span></span>
<span class="line"><span>				sign = -1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>			j := i</span></span>
<span class="line"><span>			for j &#x3C; n &#x26;&#x26; s[j] != '+' &#x26;&#x26; s[j] != '-' {</span></span>
<span class="line"><span>				j++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			v := s[i:j]</span></span>
<span class="line"><span>			if s[j-1] == 'x' {</span></span>
<span class="line"><span>				a := 1</span></span>
<span class="line"><span>				if len(v) > 1 {</span></span>
<span class="line"><span>					a, _ = strconv.Atoi(v[:len(v)-1])</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				x += sign * a</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				a, _ := strconv.Atoi(v)</span></span>
<span class="line"><span>				y += sign * a</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			i = j</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return []int{x, y}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	es := strings.Split(equation, "=")</span></span>
<span class="line"><span>	a, b := f(es[0]), f(es[1])</span></span>
<span class="line"><span>	x1, y1 := a[0], a[1]</span></span>
<span class="line"><span>	x2, y2 := b[0], b[1]</span></span>
<span class="line"><span>	if x1 == x2 {</span></span>
<span class="line"><span>		if y1 == y2 {</span></span>
<span class="line"><span>			return "Infinite solutions"</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			return "No solution"</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return fmt.Sprintf("x=%d", (y2-y1)/(x1-x2))</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/solve-the-equation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0640.Solve%20the%20Equation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-660" tabindex="-1">660. 移除 9 🔒 <a class="header-anchor" href="#q-660" aria-label="Permalink to &quot;660. 移除 9 🔒 {#q-660}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>从 <code>1</code> 开始，移除包含数字 <code>9</code> 的所有整数，例如 <code>9</code>，<code>19</code>，<code>29</code>，……</p>&#10;&#10;<p>这样就获得了一个新的整数数列：<code>1</code>，<code>2</code>，<code>3</code>，<code>4</code>，<code>5</code>，<code>6</code>，<code>7</code>，<code>8</code>，<code>10</code>，<code>11</code>，……</p>&#10;&#10;<p>给你一个整数 <code>n</code>，请你返回新数列中第 <code>n</code> 个数字是多少（下标从 <strong>1</strong> 开始）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 9&#10;<strong>输出：</strong>10&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 10&#10;<strong>输出：</strong>11&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 8 * 10<sup>8</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0660.Remove%209/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<blockquote>
<p>本站根据题意与 Doocs 参考思路整理为 Go，非上游原文。按 CC BY-SA 4.0 共享。</p>
</blockquote>
<p>根据题意补写：把 n 转成九进制，再把九进制的各位当作十进制数字。这样每一位只会出现 0 到 8，且顺序与所有不含 9 的正整数一致。时间 O(log₉ n)，额外空间 O(1)；Go 的整数范围应能够容纳结果。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func newInteger(n int) int {</span></span>
<span class="line"><span>	answer, place := 0, 1</span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		answer += (n % 9) * place</span></span>
<span class="line"><span>		place *= 10</span></span>
<span class="line"><span>		n /= 9</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return answer</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/remove-9" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0660.Remove%209/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-667" tabindex="-1">667. 优美的排列 II <a class="header-anchor" href="#q-667" aria-label="Permalink to &quot;667. 优美的排列 II {#q-667}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数 <code>n</code> 和 <code>k</code> ，请你构造一个答案列表 <code>answer</code> ，该列表应当包含从 <code>1</code> 到 <code>n</code> 的 <code>n</code> 个不同正整数，并同时满足下述条件：</p>&#10;&#10;<ul>&#10;	<li>假设该列表是 <code>answer = [a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ... , a<sub>n</sub>]</code> ，那么列表 <code>[|a<sub>1</sub> - a<sub>2</sub>|, |a<sub>2</sub> - a<sub>3</sub>|, |a<sub>3</sub> - a<sub>4</sub>|, ... , |a<sub>n-1</sub> - a<sub>n</sub>|]</code> 中应该有且仅有 <code>k</code> 个不同整数。</li>&#10;</ul>&#10;&#10;<p>返回列表 <code>answer</code> 。如果存在多种答案，只需返回其中 <strong>任意一种</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3, k = 1&#10;<strong>输出：</strong>[1, 2, 3]&#10;<strong>解释：</strong>[1, 2, 3] 包含 3 个范围在 1-3 的不同整数，并且 [1, 1] 中有且仅有 1 个不同整数：1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 3, k = 2&#10;<strong>输出：</strong>[1, 3, 2]&#10;<strong>解释：</strong>[1, 3, 2] 包含 3 个范围在 1-3 的不同整数，并且 [2, 1] 中有且仅有 2 个不同整数：1 和 2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt; n &lt;= 10<sup>4</sup></code></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：构造 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1.</mn>
  <mo>.</mo>
  <mi>n</mi>
</math></span> 的排列要使相邻差恰好出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 种。随机搜索不可靠。</p>
<p>前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 项按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span> 交错，先产生 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个不同差；余下按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的奇偶沿当前左端或右端单调填完，不再引入新差。</p>
</blockquote>
<p>先按照 <code v-pre>1, n, 2, n-1, 3,...</code> 构造答案数据 <code v-pre>ans</code> 的前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个数，共产生 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个不同的整数。然后根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的奇偶性确定从哪个数开始构造下一个数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，忽略答案数组的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func constructArray(n int, k int) []int {</span></span>
<span class="line"><span>	l, r := 1, n</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; k; i++ {</span></span>
<span class="line"><span>		if i%2 == 0 {</span></span>
<span class="line"><span>			ans[i] = l</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans[i] = r</span></span>
<span class="line"><span>			r--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := k; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		if k%2 == 0 {</span></span>
<span class="line"><span>			ans[i] = r</span></span>
<span class="line"><span>			r--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans[i] = l</span></span>
<span class="line"><span>			l++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/beautiful-arrangement-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0667.Beautiful%20Arrangement%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-728" tabindex="-1">728. 自除数 <a class="header-anchor" href="#q-728" aria-label="Permalink to &quot;728. 自除数 {#q-728}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><strong>自除数</strong><em> </em>是指可以被它包含的每一位数整除的数。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>128</code> 是一个 <strong>自除数</strong> ，因为 <code>128 % 1 == 0</code>，<code>128 % 2 == 0</code>，<code>128 % 8 == 0</code>。</li>&#10;</ul>&#10;&#10;<p><strong>自除数</strong> 不允许包含 0 。</p>&#10;&#10;<p>给定两个整数 <code>left</code> 和 <code>right</code> ，返回一个列表，<em>列表的元素是范围 <code>[left, right]</code>（包括两个端点）内所有的 <strong>自除数</strong></em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>left = 1, right = 22&#10;<strong>输出：</strong>[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>left = 47, right = 85&#10;<b>输出：</b>[48,55,66,77]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= left &lt;= right &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>区间上界为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，判断一个数是否能被自己的每一位整除只需拆位。线性枚举区间内每个数完全可行。</p>
<p>含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的数无法整除对应位，应直接排除。其余位则检查 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 能否被该位整除。</p>
<p>对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 逐位取末位，遇 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或不能整除则否，全部通过则收入答案。</p>
</blockquote>
<p>我们定义一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check</mtext>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，用来判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是否是自除数。函数的实现思路如下：</p>
<p>我们用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 来记录 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的值，然后不断地对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。在这个过程中，我们判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的末位是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是否不能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的末位整除，如果满足这两个条件中的任意一个，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 就不是自除数，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。否则遍历完所有的位数后，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>。</p>
<p>最后，我们遍历区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">left</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">right</mtext>
  <mo stretchy="false">]</mo>
</math></span> 中的所有数，对每个数调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">check</mtext>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
</math></span>，那么我们就将这个数加入答案数组中。</p>
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
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">left</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">right</mtext>
  <mo stretchy="false">]</mo>
</math></span> 中的元素个数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">right</mtext>
</math></span>，表示区间中的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func selfDividingNumbers(left int, right int) (ans []int) {</span></span>
<span class="line"><span>	check := func(x int) bool {</span></span>
<span class="line"><span>		for y := x; y > 0; y /= 10 {</span></span>
<span class="line"><span>			if y%10 == 0 || x%(y%10) != 0 {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x := left; x &#x3C;= right; x++ {</span></span>
<span class="line"><span>		if check(x) {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/self-dividing-numbers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0728.Self%20Dividing%20Numbers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-775" tabindex="-1">775. 全局倒置与局部倒置 <a class="header-anchor" href="#q-775" aria-label="Permalink to &quot;775. 全局倒置与局部倒置 {#q-775}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> ，表示由范围 <code>[0, n - 1]</code> 内所有整数组成的一个排列。</p>&#10;&#10;<p><strong>全局倒置</strong> 的数目等于满足下述条件不同下标对 <code>(i, j)</code> 的数目：</p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= i &lt; j &lt; n</code></li>&#10;	<li><code>nums[i] > nums[j]</code></li>&#10;</ul>&#10;&#10;<p><strong>局部倒置</strong> 的数目等于满足下述条件的下标 <code>i</code> 的数目：</p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= i &lt; n - 1</code></li>&#10;	<li><code>nums[i] > nums[i + 1]</code></li>&#10;</ul>&#10;&#10;<p>当数组 <code>nums</code> 中 <strong>全局倒置</strong> 的数量等于 <strong>局部倒置</strong> 的数量时，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,0,2]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>有 1 个全局倒置，和 1 个局部倒置。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,0]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>有 2 个全局倒置，和 1 个局部倒置。&#10;</pre>&#10;&#10; &#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt; n</code></li>&#10;	<li><code>nums</code> 中的所有整数 <strong>互不相同</strong></li>&#10;	<li><code>nums</code> 是范围 <code>[0, n - 1]</code> 内所有数字组成的一个排列</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：维护前缀最大值 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断全局逆序是否等于局部（相邻）逆序。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，数全部逆序对可以，但更弱的条件是：不存在跨度大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的逆序。</p>
<p>即不存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。维护 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0.</mn>
  <mo>.</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span> 的最大值，一旦大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 则失败。</p>
</blockquote>
<p>根据题意，我们可以发现，一个数组中的局部倒置一定是全局倒置，但是全局倒置不一定是局部倒置。也就是说，全局倒置的数量一定大于等于局部倒置的数量。</p>
<p>因此，我们枚举每个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#x2264;</mo>
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，维护前缀数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span> 中的最大值，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。如果存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，则说明全局倒置的数量大于局部倒置的数量，返回 <code v-pre>false</code> 即可。</p>
<p>遍历结束后，返回 <code v-pre>true</code>。</p>
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
</math></span> 为数组 <code v-pre>nums</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isIdealPermutation(nums []int) bool {</span></span>
<span class="line"><span>	mx := 0</span></span>
<span class="line"><span>	for i := 2; i &#x3C; len(nums); i++ {</span></span>
<span class="line"><span>		mx = max(mx, nums[i-2])</span></span>
<span class="line"><span>		if mx > nums[i] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：树状数组 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用充要条件直接判断。若要分别计数，局部逆序扫相邻即可，全局逆序用树状数组数左侧更大的个数。</p>
<p>边走边比较两者之差，一旦全局更多即可返回。复杂度多一个对数。</p>
</blockquote>
<p>这道题目实际上是一个“逆序对”问题。</p>
<p>局部倒置的数量等于相邻元素之间逆序对的个数，可以在遍历数组 <code v-pre>nums</code> 的过程中直接求出；而全局倒置的数量等于逆序对的个数，求解逆序对个数的一个常用做法是使用树状数组。</p>
<p>树状数组，也称作“二叉索引树”（Binary Indexed Tree）或 Fenwick 树。 它可以高效地实现如下两个操作：</p>
<ol>
<li>单点更新：即函数 <code v-pre>update(x, delta)</code>，把序列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 位置的数加上一个值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>t</mi>
  <mi>a</mi>
</math></span>。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</li>
<li>前缀和查询：即函数 <code v-pre>query(x)</code>，查询序列 <code v-pre>[1,...x]</code> 区间的区间和，即位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的前缀和。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ol>
<p>对于本题，我们定义一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录局部倒置的数量与全局倒置的数量之差。如果遍历过程中， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 的值小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则说明全局倒置的数量大于局部倒置的数量，返回 <code v-pre>false</code> 即可。</p>
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
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isIdealPermutation(nums []int) bool {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	tree := newBinaryIndexedTree(n)</span></span>
<span class="line"><span>	cnt := 0</span></span>
<span class="line"><span>	for i, v := range nums {</span></span>
<span class="line"><span>		if i &#x3C; n-1 &#x26;&#x26; v > nums[i+1] {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt -= (i - tree.query(v))</span></span>
<span class="line"><span>		if cnt &#x3C; 0 {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		tree.update(v+1, 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return cnt == 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type BinaryIndexedTree struct {</span></span>
<span class="line"><span>	n int</span></span>
<span class="line"><span>	c []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newBinaryIndexedTree(n int) BinaryIndexedTree {</span></span>
<span class="line"><span>	c := make([]int, n+1)</span></span>
<span class="line"><span>	return BinaryIndexedTree{n, c}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this BinaryIndexedTree) update(x, delta int) {</span></span>
<span class="line"><span>	for x &#x3C;= this.n {</span></span>
<span class="line"><span>		this.c[x] += delta</span></span>
<span class="line"><span>		x += x &#x26; -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this BinaryIndexedTree) query(x int) int {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for x > 0 {</span></span>
<span class="line"><span>		s += this.c[x]</span></span>
<span class="line"><span>		x -= x &#x26; -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/global-and-local-inversions" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0775.Global%20and%20Local%20Inversions/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-780" tabindex="-1">780. 到达终点 <a class="header-anchor" href="#q-780" aria-label="Permalink to &quot;780. 到达终点 {#q-780}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、最大公约数、欧几里得算法</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定四个整数 <code>sx</code> , <code>sy</code> ，<code>tx</code> 和 <code>ty</code>，如果通过一系列的<strong>转换</strong>可以从起点 <code>(sx, sy)</code> 到达终点 <code>(tx, ty)</code>，则返回 <code>true</code>，否则返回 <code>false</code>。</p>&#10;&#10;<p>从点 <code>(x, y)</code> 可以<strong>转换</strong>到 <code>(x, x+y)</code>  或者 <code>(x+y, y)</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> sx = 1, sy = 1, tx = 3, ty = 5&#10;<strong>输出:</strong> true&#10;<strong>解释:&#10;</strong>可以通过以下一系列<strong>转换</strong>从起点转换到终点：&#10;(1, 1) -> (1, 2)&#10;(1, 2) -> (3, 2)&#10;(3, 2) -> (3, 5)&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> sx = 1, sy = 1, tx = 2, ty = 2 &#10;<strong>输出:</strong> false&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> sx = 1, sy = 1, tx = 1, ty = 1 &#10;<strong>输出:</strong> true&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= sx, sy, tx, ty &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：逆向计算 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 只能做 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，终点坐标可以很大，正向搜索分支无法收敛。逆运算是从较大维减去若干个较小维，即取模。</p>
<p>当两维都还大于起点且不相等时，把大的对小的取模，相当于一次走完能减的步。落到某一维已对齐后，另一维若能被该维整除地减到起点，则可达。</p>
<p>相等且等于起点则成功；两维都对不上则失败。取模避免逐次减法。</p>
</blockquote>
<p>从 <code v-pre>(tx, ty)</code> 开始逆向计算，判断是否可以到达状态 <code v-pre>(sx, sy)</code>。由于逆向计算是将 tx, ty 中的较大值减少，因此当 <code v-pre>tx &gt; ty</code> 时可以直接将 tx 的值更新为 <code v-pre>tx % ty</code>，当 <code v-pre>tx &lt; ty</code> 时可以将 ty 的值更新为 <code v-pre>ty % tx</code>。逆向计算需要满足 <code v-pre>tx &gt; sx &amp;&amp; ty &gt; sy &amp;&amp; tx != ty</code>。</p>
<p>当条件不成立时，根据此时 tx 和 ty 判断是否可以从起点转换到终点。</p>
<ul>
<li>如果 <code v-pre>tx == sx &amp;&amp; ty == sy</code>，说明此时已经到达起点状态，返回 true；</li>
<li>如果 <code v-pre>tx == sx</code>，若 <code v-pre>ty &gt; sy &amp;&amp; (ty - sy) % tx == 0</code>，返回 true，否则返回 false；</li>
<li>如果 <code v-pre>ty == sy</code>，若 <code v-pre>tx &gt; sx &amp;&amp; (tx - sx) % ty == 0</code>，返回 true，否则返回 false；</li>
<li>如果 <code v-pre>tx ≠ sx &amp;&amp; ty ≠ sy</code>，则不可以从起点转换到终点。</li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func reachingPoints(sx int, sy int, tx int, ty int) bool {</span></span>
<span class="line"><span>	for tx > sx &#x26;&#x26; ty > sy &#x26;&#x26; tx != ty {</span></span>
<span class="line"><span>		if tx > ty {</span></span>
<span class="line"><span>			tx %= ty</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ty %= tx</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if tx == sx &#x26;&#x26; ty == sy {</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if tx == sx {</span></span>
<span class="line"><span>		return ty > sy &#x26;&#x26; (ty-sy)%tx == 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if ty == sy {</span></span>
<span class="line"><span>		return tx > sx &#x26;&#x26; (tx-sx)%ty == 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/reaching-points" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0780.Reaching%20Points/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-789" tabindex="-1">789. 逃脱阻碍者 <a class="header-anchor" href="#q-789" aria-label="Permalink to &quot;789. 逃脱阻碍者 {#q-789}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你在进行一个简化版的吃豆人游戏。你从 <code>[0, 0]</code> 点开始出发，你的目的地是 <code>target = [x<sub>target</sub>, y<sub>target</sub>]</code> 。地图上有一些阻碍者，以数组 <code>ghosts</code> 给出，第 <code>i</code> 个阻碍者从 <code>ghosts[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> 出发。所有输入均为 <strong>整数坐标</strong> 。</p>&#10;&#10;<p>每一回合，你和阻碍者们可以同时向东，西，南，北四个方向移动，每次可以移动到距离原位置 <strong>1 个单位</strong> 的新位置。当然，也可以选择 <strong>不动</strong> 。所有动作 <strong>同时</strong> 发生。</p>&#10;&#10;<p>如果你可以在任何阻碍者抓住你 <strong>之前</strong> 到达目的地（阻碍者可以采取任意行动方式），则被视为逃脱成功。如果你和阻碍者 <strong>同时</strong> 到达了一个位置（包括目的地） <strong>都不算</strong> 是逃脱成功。</p>&#10;&#10;<p>如果不管阻碍者怎么移动都可以成功逃脱时，输出 <code>true</code> ；否则，输出 <code>false</code> 。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>ghosts = [[1,0],[0,3]], target = [0,1]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>你可以直接一步到达目的地 (0,1) ，在 (1, 0) 或者 (0, 3) 位置的阻碍者都不可能抓住你。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>ghosts = [[1,0]], target = [2,0]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>你需要走到位于 (2, 0) 的目的地，但是在 (1, 0) 的阻碍者位于你和目的地之间。 &#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>ghosts = [[2,0]], target = [1,0]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>阻碍者可以和你同时达到目的地。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= ghosts.length &lt;= 100</code></li>&#10;	<li><code>ghosts[i].length == 2</code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>&#10;	<li>同一位置可能有 <strong>多个阻碍者</strong> 。</li>&#10;	<li><code>target.length == 2</code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= x<sub>target</sub>, y<sub>target</sub> &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：曼哈顿距离 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>你与鬼魂同时移动，问能否先到终点且不被抓。若某鬼到终点的曼哈顿距离不大于你的，它可以在终点或途中拦截。</p>
<p>因此只需你到终点的距离严格小于每一个鬼到终点的距离。你从原点出发。</p>
</blockquote>
<p>对于任意一个阻碍者，如果它到目的地的曼哈顿距离小于等于你到目的地的曼哈顿距离，那么它就可以在你到达目的地之前抓住你。因此，我们只需要判断所有阻碍者到目的地的曼哈顿距离是否都大于你到目的地的曼哈顿距离即可。</p>
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
</math></span> 为阻碍者的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func escapeGhosts(ghosts [][]int, target []int) bool {</span></span>
<span class="line"><span>	tx, ty := target[0], target[1]</span></span>
<span class="line"><span>	for _, g := range ghosts {</span></span>
<span class="line"><span>		x, y := g[0], g[1]</span></span>
<span class="line"><span>		if abs(tx-x)+abs(ty-y) &#x3C;= abs(tx)+abs(ty) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func abs(x int) int {</span></span>
<span class="line"><span>	if x &#x3C; 0 {</span></span>
<span class="line"><span>		return -x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/escape-the-ghosts" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0789.Escape%20The%20Ghosts/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-800" tabindex="-1">800. 相似 RGB 颜色 🔒 <a class="header-anchor" href="#q-800" aria-label="Permalink to &quot;800. 相似 RGB 颜色 🔒 {#q-800}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数学、字符串、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>RGB 颜色 <code>&quot;#AABBCC&quot;</code> 可以简写成 <code>&quot;#ABC&quot;</code> 。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;#15c&quot;</code> 其实是 <code>&quot;#1155cc&quot;</code> 的简写。</li>&#10;</ul>&#10;&#10;<p>现在，假如我们分别定义两个颜色 <code>&quot;#ABCDEF&quot;</code> 和 <code>&quot;#UVWXYZ&quot;</code>，则他们的相似度可以通过这个表达式 <code>-(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2</code> 来计算。</p>&#10;&#10;<p>那么给你一个按 <code>&quot;#ABCDEF&quot;</code> 形式定义的字符串 <code>color</code> 表示 RGB 颜色，请你以字符串形式，返回一个与它相似度最大且可以简写的颜色。（比如，可以表示成类似 <code>&quot;#XYZ&quot;</code> 的形式）</p>&#10;&#10;<p><strong>任何</strong> 具有相同的（最大）相似度的答案都会被视为正确答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>color = &quot;#09f166&quot;&#10;<strong>输出：</strong>&quot;#11ee66&quot;&#10;<strong>解释：</strong> &#10;因为相似度计算得出 -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64 -9 -0 = -73&#10;这已经是所有可以简写的颜色中最相似的了&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>color = &quot;#4e3fe1&quot;&#10;<strong>输出：</strong>&quot;#5544dd&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>color.length == 7</code></li>&#10;	<li><code>color[0] == '#'</code></li>&#10;	<li>对于任何 <code>i > 0</code>，<code>color[i]</code> 都是一个在范围 <code>['0', 'f']</code> 内的 16 进制数</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>可简写颜色的每个通道只能取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>00</mn>
  <mo>,</mo>
  <mn>11</mn>
  <mo>,</mo>
  <mo>&#x2026;</mo>
  <mo>,</mo>
  <mi>f</mi>
  <mi>f</mi>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>17</mn>
</math></span> 的倍数。相似度按三个通道平方差之和衡量，而通道之间互不影响，因此不必在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>16</mn>
    <mn>3</mn>
  </msup>
</math></span> 种简写色上穷举。</p>
<p>对单个通道 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，将其表示为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>17</mn>
  <mi>y</mi>
  <mo>+</mo>
  <mi>z</mi>
</math></span> 后，余数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>z</mi>
  <mo>&gt;</mo>
  <mn>8</mn>
</math></span> 时向最近的下一档进位，否则取当前档。三个通道各自取最近简写值再拼接，即得到题目所求颜色。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func similarRGB(color string) string {</span></span>
<span class="line"><span>	f := func(x string) string {</span></span>
<span class="line"><span>		q, _ := strconv.ParseInt(x, 16, 64)</span></span>
<span class="line"><span>		if q%17 > 8 {</span></span>
<span class="line"><span>			q = q/17 + 1</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			q = q / 17</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return fmt.Sprintf("%02x", 17*q)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b, c := color[1:3], color[3:5], color[5:7]</span></span>
<span class="line"><span>	return "#" + f(a) + f(b) + f(c)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/similar-rgb-color" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0800.Similar%20RGB%20Color/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const u=s(p,[["render",o]]);export{d as __pageData,u as default};
