import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 哈希表（2）","description":"哈希表分类，第 791–1189 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 哈希表（2）","description":"哈希表分类，第 791–1189 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"哈希表分类，第 791–1189 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 哈希表（1）","link":"/principles/algorithms/leetcode-go/hash-01"},"next":{"text":"LeetCode Go · 哈希表（3）","link":"/principles/algorithms/leetcode-go/hash-03"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 哈希表（1）","link":"/principles/algorithms/leetcode-go/hash-01"},"next":{"text":"LeetCode Go · 哈希表（3）","link":"/principles/algorithms/leetcode-go/hash-03"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/hash-02.md","filePath":"principles/algorithms/leetcode-go/hash-02.md"}'),o={name:"principles/algorithms/leetcode-go/hash-02.md"};function p(l,n,m,i,c,r){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-哈希表-2" tabindex="-1">LeetCode Go · 哈希表（2） <a class="header-anchor" href="#leetcode-go-·-哈希表-2" aria-label="Permalink to &quot;LeetCode Go · 哈希表（2）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-791" tabindex="-1">791. 自定义字符串排序 <a class="header-anchor" href="#q-791" aria-label="Permalink to &quot;791. 自定义字符串排序 {#q-791}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个字符串 <code>order</code> 和 <code>s</code> 。<code>order</code> 的所有字母都是 <strong>唯一</strong> 的，并且预先按照一些自定义的顺序排序。</p>&#10;&#10;<p>对 <code>s</code> 的字符进行置换，使其与排序的 <code>order</code> 相匹配。更具体地说，如果在 <code>order</code> 中的字符 <code>x</code> 出现字符 <code>y</code> 之前，那么在排列后的字符串中， <code>x</code> 也应该出现在 <code>y</code> 之前。</p>&#10;&#10;<p>返回 <em>满足这个性质的 <code>s</code> 的任意一种排列 </em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span> order = &quot;cba&quot;, s = &quot;abcd&quot; </span></p>&#10;&#10;<p><strong>输出：</strong> <span> &quot;cbad&quot; </span></p>&#10;&#10;<p><strong>解释：</strong> <code>&quot;a&quot;</code>，<code>&quot;b&quot;</code>，<code>&quot;c&quot;</code> 在 <code>order</code> 中出现，所以 <code>&quot;a&quot;</code>，<code>&quot;b&quot;</code>，<code>&quot;c&quot;</code> 的顺序应该是 <code>&quot;c&quot;</code>，<code>&quot;b&quot;</code>，和 <code>&quot;a&quot;</code>。</p>&#10;&#10;<p>由于 <code>&quot;d&quot;</code> 没有在 <code>order</code> 中出现，它可以在返回字符串的任意位置。<code>&quot;dcba&quot;</code>，<code>&quot;cdba&quot;</code>，<code>&quot;cbda&quot;</code> 也是合法的输出。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span> order = &quot;bcafg&quot;, s = &quot;abcd&quot; </span></p>&#10;&#10;<p><strong>输出：</strong> <span> &quot;bcad&quot; </span></p>&#10;&#10;<p><strong>解释：</strong><code>order</code><strong> </strong>中的字符 <code>&quot;b&quot;</code>、<code>&quot;c&quot;</code> 和 <code>&quot;a&quot;</code> 决定了 <code>s</code> 中字符的顺序。<code>s</code> 中的字符 <code>&quot;d&quot;</code> 没有出现在 <code>order</code> 中，因此其位置是可变的。</p>&#10;&#10;<p>按照 <code>order</code> 中的出现顺序，<code>&quot;b&quot;</code>、<code>&quot;c&quot;</code> 和 <code>&quot;a&quot;</code> 应该按 <code>&quot;b&quot;</code>、<code>&quot;c&quot;</code>、<code>&quot;a&quot;</code> 的顺序排列。<code>&quot;d&quot;</code> 可以放在任何位置，因为它不受顺序限制。输出 <code>&quot;bcad&quot;</code> 正确遵循了这一规则。其他排列如 <code>&quot;dbca&quot;</code> 或 <code>&quot;bcda&quot;</code> 也是合法的，只要 <code>&quot;b&quot;</code>、<code>&quot;c&quot;</code>、<code>&quot;a&quot;</code> 的顺序保持不变。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= order.length &lt;= 26</code></li>&#10;	<li><code>1 &lt;= s.length &lt;= 200</code></li>&#10;	<li><code>order</code> 和 <code>s</code> 由小写英文字母组成</li>&#10;	<li><code>order</code> 中的所有字符都 <strong>不同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：自定义排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 要按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 中的相对顺序重排，未出现的字符顺序任意。直接按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 下标当键排序即可。</p>
<p>不在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 中的键取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，会聚在前面，仍满足「相对顺序」的要求。</p>
</blockquote>
<p>一种比较直接的思路是，用哈希表或数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 中每个字符的位置，然后对字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字符按照其在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 中的位置进行排序。如果某个字符不在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 中，我们可以将其位置置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func customSortString(order string, s string) string {</span></span>
<span class="line"><span>	d := [26]int{}</span></span>
<span class="line"><span>	for i := range order {</span></span>
<span class="line"><span>		d[order[i]-'a'] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cs := []byte(s)</span></span>
<span class="line"><span>	sort.Slice(cs, func(i, j int) bool { return d[cs[i]-'a'] &#x3C; d[cs[j]-'a'] })</span></span>
<span class="line"><span>	return string(cs)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：字符计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排序多了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
</math></span>。先计数，再按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 依次输出对应个数，剩余字符任意追加，线性即可。</p>
</blockquote>
<p>我们还可以先统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字符的出现次数，存储在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 数组中。</p>
<p>然后把字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 中出现的字符按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 中的顺序排序，添加到结果字符串中。最后把剩余的字符直接追加到结果字符串中。</p>
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
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func customSortString(order string, s string) string {</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []rune{}</span></span>
<span class="line"><span>	for _, c := range order {</span></span>
<span class="line"><span>		for cnt[c-'a'] > 0 {</span></span>
<span class="line"><span>			ans = append(ans, c)</span></span>
<span class="line"><span>			cnt[c-'a']--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, v := range cnt {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; v; j++ {</span></span>
<span class="line"><span>			ans = append(ans, rune('a'+i))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/custom-sort-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0791.Custom%20Sort%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-804" tabindex="-1">804. 唯一摩尔斯密码词 <a class="header-anchor" href="#q-804" aria-label="Permalink to &quot;804. 唯一摩尔斯密码词 {#q-804}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如:</p>&#10;&#10;<ul>&#10;	<li><code>'a'</code> 对应 <code>&quot;.-&quot;</code> ，</li>&#10;	<li><code>'b'</code> 对应 <code>&quot;-...&quot;</code> ，</li>&#10;	<li><code>'c'</code> 对应 <code>&quot;-.-.&quot;</code> ，以此类推。</li>&#10;</ul>&#10;&#10;<p>为了方便，所有 <code>26</code> 个英文字母的摩尔斯密码表如下：</p>&#10;&#10;<pre>&#10;[&quot;.-&quot;,&quot;-...&quot;,&quot;-.-.&quot;,&quot;-..&quot;,&quot;.&quot;,&quot;..-.&quot;,&quot;--.&quot;,&quot;....&quot;,&quot;..&quot;,&quot;.---&quot;,&quot;-.-&quot;,&quot;.-..&quot;,&quot;--&quot;,&quot;-.&quot;,&quot;---&quot;,&quot;.--.&quot;,&quot;--.-&quot;,&quot;.-.&quot;,&quot;...&quot;,&quot;-&quot;,&quot;..-&quot;,&quot;...-&quot;,&quot;.--&quot;,&quot;-..-&quot;,&quot;-.--&quot;,&quot;--..&quot;]</pre>&#10;&#10;<p>给你一个字符串数组 <code>words</code> ，每个单词可以写成每个字母对应摩尔斯密码的组合。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;cab&quot;</code> 可以写成 <code>&quot;-.-..--...&quot;</code> ，(即 <code>&quot;-.-.&quot;</code> + <code>&quot;.-&quot;</code> + <code>&quot;-...&quot;</code> 字符串的结合)。我们将这样一个连接过程称作 <strong>单词翻译</strong> 。</li>&#10;</ul>&#10;&#10;<p>对<strong> </strong><code>words</code> 中所有单词进行单词翻译，返回不同 <strong>单词翻译</strong> 的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> words = [&quot;gin&quot;, &quot;zen&quot;, &quot;gig&quot;, &quot;msg&quot;]&#10;<strong>输出:</strong> 2&#10;<strong>解释: </strong>&#10;各单词翻译如下:&#10;&quot;gin&quot; -> &quot;--...-.&quot;&#10;&quot;zen&quot; -> &quot;--...-.&quot;&#10;&quot;gig&quot; -> &quot;--...--.&quot;&#10;&quot;msg&quot; -> &quot;--...--.&quot;&#10;&#10;共有 2 种不同翻译, &quot;--...-.&quot; 和 &quot;--...--.&quot;.&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;a&quot;]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 12</code></li>&#10;	<li><code>words[i]</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个单词按字母表映射成摩尔斯串后，需要统计有多少种不同编码。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span> 个、长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>12</mn>
</math></span>，直接变换即可。</p>
<p>用集合存放变换结果，最后取集合大小。无需比较原词，编码相同即视为同一种变换。</p>
</blockquote>
<p>将 words 所有单词翻译成对应的摩尔斯密码，加入到哈希表中，最后返回哈希表的 size。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func uniqueMorseRepresentations(words []string) int {</span></span>
<span class="line"><span>	codes := []string{".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.",</span></span>
<span class="line"><span>		"---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."}</span></span>
<span class="line"><span>	s := make(map[string]bool)</span></span>
<span class="line"><span>	for _, word := range words {</span></span>
<span class="line"><span>		t := &#x26;strings.Builder{}</span></span>
<span class="line"><span>		for _, c := range word {</span></span>
<span class="line"><span>			t.WriteString(codes[c-'a'])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s[t.String()] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(s)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/unique-morse-code-words" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0804.Unique%20Morse%20Code%20Words/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-811" tabindex="-1">811. 子域名访问计数 <a class="header-anchor" href="#q-811" aria-label="Permalink to &quot;811. 子域名访问计数 {#q-811}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>网站域名 <code>&quot;discuss.leetcode.com&quot;</code> 由多个子域名组成。顶级域名为 <code>&quot;com&quot;</code> ，二级域名为 <code>&quot;leetcode.com&quot;</code> ，最低一级为 <code>&quot;discuss.leetcode.com&quot;</code> 。当访问域名 <code>&quot;discuss.leetcode.com&quot;</code> 时，同时也会隐式访问其父域名 <code>&quot;leetcode.com&quot; </code>以及 <code>&quot;com&quot;</code> 。</p>&#10;&#10;<p><strong>计数配对域名</strong> 是遵循 <code>&quot;rep d1.d2.d3&quot;</code> 或 <code>&quot;rep d1.d2&quot;</code> 格式的一个域名表示，其中 <code>rep</code> 表示访问域名的次数，<code>d1.d2.d3</code> 为域名本身。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;9001 discuss.leetcode.com&quot;</code> 就是一个 <strong>计数配对域名</strong> ，表示 <code>discuss.leetcode.com</code> 被访问了 <code>9001</code> 次。</li>&#10;</ul>&#10;&#10;<p>给你一个<strong> 计数配对域名 </strong>组成的数组 <code>cpdomains</code> ，解析得到输入中每个子域名对应的 <strong>计数配对域名</strong> ，并以数组形式返回。可以按 <strong>任意顺序</strong> 返回答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>cpdomains = [&quot;9001 discuss.leetcode.com&quot;]&#10;<strong>输出：</strong>[&quot;9001 leetcode.com&quot;,&quot;9001 discuss.leetcode.com&quot;,&quot;9001 com&quot;]&#10;<strong>解释：</strong>例子中仅包含一个网站域名：&quot;discuss.leetcode.com&quot;。&#10;按照前文描述，子域名 &quot;leetcode.com&quot; 和 &quot;com&quot; 都会被访问，所以它们都被访问了 9001 次。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>cpdomains = [&quot;900 google.mail.com&quot;, &quot;50 yahoo.com&quot;, &quot;1 intel.mail.com&quot;, &quot;5 wiki.org&quot;]&#10;<strong>输出：</strong>[&quot;901 mail.com&quot;,&quot;50 yahoo.com&quot;,&quot;900 google.mail.com&quot;,&quot;5 wiki.org&quot;,&quot;5 org&quot;,&quot;1 intel.mail.com&quot;,&quot;951 com&quot;]&#10;<strong>解释：</strong>按照前文描述，会访问 &quot;google.mail.com&quot; 900 次，&quot;yahoo.com&quot; 50 次，&quot;intel.mail.com&quot; 1 次，&quot;wiki.org&quot; 5 次。&#10;而对于父域名，会访问 &quot;mail.com&quot; 900 + 1 = 901 次，&quot;com&quot; 900 + 50 + 1 = 951 次，和 &quot;org&quot; 5 次。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= cpdomain.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= cpdomain[i].length &lt;= 100</code></li>&#10;	<li><code>cpdomain[i]</code> 会遵循 <code>&quot;rep<sub>i</sub> d1<sub>i</sub>.d2<sub>i</sub>.d3<sub>i</sub>&quot;</code> 或 <code>&quot;rep<sub>i</sub> d1<sub>i</sub>.d2<sub>i</sub>&quot;</code> 格式</li>&#10;	<li><code>rep<sub>i</sub></code> 是范围 <code>[1, 10<sup>4</sup>]</code> 内的一个整数</li>&#10;	<li><code>d1<sub>i</sub></code>、<code>d2<sub>i</sub></code> 和 <code>d3<sub>i</sub></code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一条计数记录要同时累加到自身及其所有上级域名。记录条数与串长均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>，按点号拆分即可。</p>
<p>扫描每个空格或点号后的后缀，把访问次数加到该后缀上，最后把计数表格式化输出。</p>
</blockquote>
<p>我们用哈希表 <code v-pre>cnt</code> 存储每个域名（子域名）对应的访问次数。</p>
<p>然后遍历数组，对于每个域名，我们将其拆分为子域名，然后更新哈希表 <code v-pre>cnt</code> 中对应的访问次数。</p>
<p>最后，我们将哈希表中的键值对转换为数组，即可得到答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 是数组 <code v-pre>cpdomains</code> 中所有域名的长度之和。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func subdomainVisits(cpdomains []string) []string {</span></span>
<span class="line"><span>	cnt := map[string]int{}</span></span>
<span class="line"><span>	for _, s := range cpdomains {</span></span>
<span class="line"><span>		i := strings.IndexByte(s, ' ')</span></span>
<span class="line"><span>		v, _ := strconv.Atoi(s[:i])</span></span>
<span class="line"><span>		for ; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>			if s[i] == ' ' || s[i] == '.' {</span></span>
<span class="line"><span>				cnt[s[i+1:]] += v</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]string, 0, len(cnt))</span></span>
<span class="line"><span>	for s, v := range cnt {</span></span>
<span class="line"><span>		ans = append(ans, strconv.Itoa(v)+" "+s)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/subdomain-visit-count" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0811.Subdomain%20Visit%20Count/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-819" tabindex="-1">819. 最常见的单词 <a class="header-anchor" href="#q-819" aria-label="Permalink to &quot;819. 最常见的单词 {#q-819}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>paragraph</code> 和一个表示禁用词的字符串数组 <code>banned</code> ，返回出现频率最高的非禁用词。题目数据 <strong>保证 </strong>至少存在一个非禁用词，且答案<strong> 唯一 </strong>。</p>&#10;&#10;<p><code>paragraph</code> 中的单词 <strong>不区分大小写</strong> ，答案应以 <strong>小写 </strong>形式返回。</p>&#10;&#10;<p><b>注意</b> 单词不包含标点符号。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>paragraph = &quot;Bob hit a ball, the hit BALL flew far after it was hit.&quot;, banned = [&quot;hit&quot;]&#10;<strong>输出：</strong>&quot;ball&quot;&#10;<strong>解释：</strong>&#10;&quot;hit&quot; 出现了 3 次，但它是禁用词。&#10;&quot;ball&quot; 出现了两次（没有其他单词出现这么多次），因此它是段落中出现频率最高的非禁用词。&#10;请注意，段落中的单词不区分大小写，&#10;标点符号会被忽略（即使它们紧挨着单词，如 &quot;ball,&quot;），&#10;并且尽管 &quot;hit&quot; 出现的次数更多，但它不能作为答案，因为它是禁用词。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>paragraph = &quot;a.&quot;, banned = []&#10;<strong>输出：</strong>&quot;a&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= paragraph.length &lt;= 1000</code></li>&#10;	<li><code>paragraph</code> 由英文字母、空格 <code>' '</code>、和以下符号组成：<code>&quot;!?',;.&quot;</code></li>&#10;	<li><code>0 &lt;= banned.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= banned[i].length &lt;= 10</code></li>&#10;	<li><code>banned[i]</code> 仅由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：正则匹配/双指针 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要在段落中统计单词频率并排除禁用表，同时标点视为分隔符。段落长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，先规范化再计数即可。</p>
<p>将段落转小写后用正则取出连续字母作为单词，计数后按频率从高到低跳过禁用词，返回第一个合法单词。</p>
</blockquote>
<p>正则匹配（或双指针）找出所有单词，用哈希表统计每个单词出现的频率，找到出现未在 banned 中出现且频率最大的单词。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mostCommonWord(paragraph string, banned []string) string {</span></span>
<span class="line"><span>	s := make(map[string]bool)</span></span>
<span class="line"><span>	for _, w := range banned {</span></span>
<span class="line"><span>		s[w] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	counter := make(map[string]int)</span></span>
<span class="line"><span>	var ans string</span></span>
<span class="line"><span>	for i, mx, n := 0, 0, len(paragraph); i &#x3C; n; {</span></span>
<span class="line"><span>		if !unicode.IsLetter(rune(paragraph[i])) {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		j := i</span></span>
<span class="line"><span>		var word []byte</span></span>
<span class="line"><span>		for j &#x3C; n &#x26;&#x26; unicode.IsLetter(rune(paragraph[j])) {</span></span>
<span class="line"><span>			word = append(word, byte(unicode.ToLower(rune(paragraph[j]))))</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		i = j + 1</span></span>
<span class="line"><span>		t := string(word)</span></span>
<span class="line"><span>		if s[t] {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		counter[t]++</span></span>
<span class="line"><span>		if counter[t] > mx {</span></span>
<span class="line"><span>			ans = t</span></span>
<span class="line"><span>			mx = counter[t]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-common-word" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0819.Most%20Common%20Word/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-822" tabindex="-1">822. 翻转卡片游戏 <a class="header-anchor" href="#q-822" aria-label="Permalink to &quot;822. 翻转卡片游戏 {#q-822}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在桌子上有 <code>n</code> 张卡片，每张卡片的正面和背面都写着一个正数（正面与背面上的数有可能不一样）。</p>&#10;&#10;<p>我们可以先翻转任意张卡片，然后选择其中一张卡片。</p>&#10;&#10;<p>如果选中的那张卡片背面的数字 <code>x</code> 与任意一张卡片的正面的数字都不同，那么这个数字是我们想要的数字。</p>&#10;&#10;<p>哪个数是这些想要的数字中最小的数（找到这些数中的最小值）呢？如果没有一个数字符合要求的，输出 <code>0</code> 。</p>&#10;&#10;<p>其中, <code>fronts[i]</code> 和 <code>backs[i]</code> 分别代表第 <code>i</code> 张卡片的正面和背面的数字。</p>&#10;&#10;<p>如果我们通过翻转卡片来交换正面与背面上的数，那么当初在正面的数就变成背面的数，背面的数就变成正面的数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>fronts = [1,2,4,4,7], backs = [1,3,4,1,3]&#10;<strong>输出：</strong><code>2</code>&#10;<strong>解释：</strong>假设我们翻转第二张卡片，那么在正面的数变成了 <code>[1,3,4,4,7]</code> ， 背面的数变成了 <code>[1,2,4,1,3]。</code>&#10;接着我们选择第二张卡片，因为现在该卡片的背面的数是 2，2 与任意卡片上正面的数都不同，所以 2 就是我们想要的数字。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>fronts = [1], backs = [1]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>&#10;无论如何翻转都无法得到想要的数字，所以返回 0 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == fronts.length == backs.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= fronts[i], backs[i] &lt;= 2000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>翻牌后正面朝上的数若在某张牌的正反面同时出现，则该数不可能成为答案。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，先找出所有正反相同的数，它们永远不能作为最终正面。</p>
<p>在其余出现过的数字中取最小者；若没有合法数字则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们注意到，对于位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">fronts</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">backs</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 元素相同，则一定不满足条件。</p>
<p>因此，我们先找出正面与背面相同的元素，记录在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中。</p>
<p>接下来，遍历正面与背面的元素，若元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 不在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中，则更新答案的最小值。</p>
<p>最后，若找到一个满足条件的元素，返回答案，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
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
</math></span> 是数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func flipgame(fronts []int, backs []int) int {</span></span>
<span class="line"><span>	s := map[int]struct{}{}</span></span>
<span class="line"><span>	for i, a := range fronts {</span></span>
<span class="line"><span>		if a == backs[i] {</span></span>
<span class="line"><span>			s[a] = struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 9999</span></span>
<span class="line"><span>	for _, v := range fronts {</span></span>
<span class="line"><span>		if _, ok := s[v]; !ok {</span></span>
<span class="line"><span>			ans = min(ans, v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, v := range backs {</span></span>
<span class="line"><span>		if _, ok := s[v]; !ok {</span></span>
<span class="line"><span>			ans = min(ans, v)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans % 9999</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/card-flipping-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0822.Card%20Flipping%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-833" tabindex="-1">833. 字符串中的查找与替换 <a class="header-anchor" href="#q-833" aria-label="Permalink to &quot;833. 字符串中的查找与替换 {#q-833}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你会得到一个字符串 <code>s</code> (索引从 0 开始)，你必须对它执行 <code>k</code> 个替换操作。替换操作以三个长度均为 <code>k</code> 的并行数组给出：<code>indices</code>, <code>sources</code>,  <code>targets</code>。</p>&#10;&#10;<p>要完成第 <code>i</code> 个替换操作:</p>&#10;&#10;<ol>&#10;	<li>检查 <strong>子字符串</strong>  <code>sources[i]</code> 是否出现在 <strong>原字符串</strong> <code>s</code> 的索引 <code>indices[i]</code> 处。</li>&#10;	<li>如果没有出现， <strong>什么也不做</strong> 。</li>&#10;	<li>如果出现，则用 <code>targets[i]</code> <strong>替换</strong> 该子字符串。</li>&#10;</ol>&#10;&#10;<p>例如，如果 <code>s = &quot;abcd&quot;</code> ， <code>indices[i] = 0</code> , <code>sources[i] = &quot;ab&quot;</code>， <code>targets[i] = &quot;eee&quot;</code> ，那么替换的结果将是 <code>&quot;<u>eee</u>cd&quot;</code> 。</p>&#10;&#10;<p>所有替换操作必须 <strong>同时</strong> 发生，这意味着替换操作不应该影响彼此的索引。测试用例保证元素间<strong>不会重叠 </strong>。</p>&#10;&#10;<ul>&#10;	<li>例如，一个 <code>s = &quot;abc&quot;</code> ，  <code>indices = [0,1]</code> ， <code>sources = [&quot;ab&quot;，&quot;bc&quot;]</code> 的测试用例将不会生成，因为 <code>&quot;ab&quot;</code> 和 <code>&quot;bc&quot;</code> 替换重叠。</li>&#10;</ul>&#10;&#10;<p><em>在对 <code>s</code> 执行所有替换操作后返回 <strong>结果字符串</strong> 。</em></p>&#10;&#10;<p><strong>子字符串</strong> 是字符串中连续的字符序列。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0800-0899/0833.Find%20And%20Replace%20in%20String/images/833-ex1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;, indices = [0,2], sources = [&quot;a&quot;,&quot;cd&quot;], targets = [&quot;eee&quot;,&quot;ffff&quot;]&#10;<strong>输出：</strong>&quot;eeebffff&quot;&#10;<strong>解释：&#10;</strong>&quot;a&quot; 从 s 中的索引 0 开始，所以它被替换为 &quot;eee&quot;。&#10;&quot;cd&quot; 从 s 中的索引 2 开始，所以它被替换为 &quot;ffff&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0800-0899/0833.Find%20And%20Replace%20in%20String/images/833-ex2-1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcd&quot;, indices = [0,2], sources = [&quot;ab&quot;,&quot;ec&quot;], targets = [&quot;eee&quot;,&quot;ffff&quot;]&#10;<strong>输出：</strong>&quot;eeecd&quot;&#10;<strong>解释：&#10;</strong>&quot;ab&quot; 从 s 中的索引 0 开始，所以它被替换为 &quot;eee&quot;。&#10;&quot;ec&quot; 没有从<strong>原始的</strong> S 中的索引 2 开始，所以它没有被替换。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 1000</code></li>&#10;	<li><code>k == indices.length == sources.length == targets.length</code></li>&#10;	<li><code>1 &lt;= k &lt;= 100</code></li>&#10;	<li><code>0 &lt;= indices[i] &lt; s.length</code></li>&#10;	<li><code>1 &lt;= sources[i].length, targets[i].length &lt;= 50</code></li>&#10;	<li><code>s</code> 仅由小写英文字母组成</li>&#10;	<li><code>sources[i]</code> 和 <code>targets[i]</code> 仅由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>多组替换同时生效，且只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">source</mtext>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 在给定下标精确匹配才替换。从左扫描时若立即改写，后续下标会错位。</p>
<p>先在原串下标上标记哪些位置匹配成功，再从左到右拼接：命中则写入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 并跳过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">source</mtext>
</math></span> 长度，否则抄原字符。</p>
</blockquote>
<p>我们遍历每个替换操作，对于当前第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个替换操作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext>src</mtext>
  <mo stretchy="false">)</mo>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mtext>src</mtext>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>src</mtext>
</math></span> 相等，此时我们记录下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 处需要替换的是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>targets</mtext>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个字符串，否则不需要替换。</p>
<p>接下来，我们只需要遍历原字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，根据记录的信息进行替换即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 是所有字符串的长度之和，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findReplaceString(s string, indices []int, sources []string, targets []string) string {</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	d := make([]int, n)</span></span>
<span class="line"><span>	for k, i := range indices {</span></span>
<span class="line"><span>		if strings.HasPrefix(s[i:], sources[k]) {</span></span>
<span class="line"><span>			d[i] = k + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := &#x26;strings.Builder{}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; {</span></span>
<span class="line"><span>		if d[i] > 0 {</span></span>
<span class="line"><span>			ans.WriteString(targets[d[i]-1])</span></span>
<span class="line"><span>			i += len(sources[d[i]-1])</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans.WriteByte(s[i])</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans.String()</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-and-replace-in-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0833.Find%20And%20Replace%20in%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-859" tabindex="-1">859. 亲密字符串 <a class="header-anchor" href="#q-859" aria-label="Permalink to &quot;859. 亲密字符串 {#q-859}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个字符串 <code>s</code> 和 <code>goal</code> ，只要我们可以通过交换 <code>s</code> 中的两个字母得到与 <code>goal</code> 相等的结果，就返回 <code>true</code> ；否则返回 <code>false</code> 。</p>&#10;&#10;<p>交换字母的定义是：取两个下标 <code>i</code> 和 <code>j</code> （下标从 <code>0</code> 开始）且满足 <code>i != j</code> ，接着交换 <code>s[i]</code> 和 <code>s[j]</code> 处的字符。</p>&#10;&#10;<ul>&#10;	<li>例如，在 <code>&quot;abcd&quot;</code> 中交换下标 <code>0</code> 和下标 <code>2</code> 的元素可以生成 <code>&quot;cbad&quot;</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;ab&quot;, goal = &quot;ba&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 &quot;ba&quot;，此时 s 和 goal 相等。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;ab&quot;, goal = &quot;ab&quot;&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 &quot;ba&quot;，此时 s 和 goal 不相等。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;aa&quot;, goal = &quot;aa&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 &quot;aa&quot;，此时 s 和 goal 相等。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length, goal.length &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>s</code> 和 <code>goal</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：字符统计 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>恰好交换 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中两个字符后等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">goal</mtext>
</math></span>。长度不同或字母计数不同则不可能。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2</mn>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，一次扫描数出不同位置即可。</p>
<p>不同位置恰为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 时，交换这两处即可（计数已保证字母可对齐）。完全相同则需要某个字母出现至少两次，才能做一次无效果交换。</p>
</blockquote>
<p>首先，先理解亲密字符串的意思：</p>
<ul>
<li>若两个字符串的长度或字符出现的频数不等，一定不是亲密字符串；</li>
<li>若两个字符串对应位置不相等的字符数量为 2，或者数量为 0 并且字符串存在两个相同字符，则是亲密字符串。</li>
</ul>
<p>因此，我们先判断两个字符串长度，若不等，直接返回 <code v-pre>false</code>。</p>
<p>接着，统计两个字符串的字符频数，记为 <code v-pre>cnt1</code> 和 <code v-pre>cnt2</code>，若 <code v-pre>cnt1</code> 不等于 <code v-pre>cnt2</code>，直接返回 <code v-pre>false</code>。</p>
<p>然后枚举两个字符串，统计对应位置不相等的字符数量，若为 2，则返回 <code v-pre>true</code>；若为 0，且字符串存在两个相同字符，则返回 <code v-pre>true</code>。</p>
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
</math></span> 是字符串 <code v-pre>s</code> 或 <code v-pre>goal</code> 的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集大小。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func buddyStrings(s string, goal string) bool {</span></span>
<span class="line"><span>	m, n := len(s), len(goal)</span></span>
<span class="line"><span>	if m != n {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	diff := 0</span></span>
<span class="line"><span>	cnt1 := make([]int, 26)</span></span>
<span class="line"><span>	cnt2 := make([]int, 26)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		cnt1[s[i]-'a']++</span></span>
<span class="line"><span>		cnt2[goal[i]-'a']++</span></span>
<span class="line"><span>		if s[i] != goal[i] {</span></span>
<span class="line"><span>			diff++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f := false</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 26; i++ {</span></span>
<span class="line"><span>		if cnt1[i] != cnt2[i] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt1[i] > 1 {</span></span>
<span class="line"><span>			f = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return diff == 2 || (diff == 0 &#x26;&#x26; f)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/buddy-strings" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0859.Buddy%20Strings/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-874" tabindex="-1">874. 模拟行走机器人 <a class="header-anchor" href="#q-874" aria-label="Permalink to &quot;874. 模拟行走机器人 {#q-874}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>机器人在一个无限大小的 XY 网格平面上行走，从点 <code>(0, 0)</code> 处开始出发，面向北方。该机器人可以接收以下三种类型的命令 <code>commands</code> ：</p>&#10;&#10;<ul>&#10;	<li><code>-2</code> ：向左转 <code>90</code> 度</li>&#10;	<li><code>-1</code> ：向右转 <code>90</code> 度</li>&#10;	<li><code>1 &lt;= x &lt;= 9</code> ：向前移动 <code>x</code> 个单位长度</li>&#10;</ul>&#10;&#10;<p>在网格上有一些格子被视为障碍物 <code>obstacles</code> 。第 <code>i</code> 个障碍物位于网格点  <code>obstacles[i] = (x<sub>i</sub>, y<sub>i</sub>)</code> 。</p>&#10;&#10;<p>机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，并继续执行下一个命令。</p>&#10;&#10;<p>返回机器人距离原点的 <strong>最大欧式距离</strong> 的 <strong>平方</strong> 。（即，如果距离为 <code>5</code> ，则返回 <code>25</code> ）</p>&#10;&#10;<div>&#10;<div>&#10;<div>&#10;<div>&#10;<div> </div>&#10;</div>&#10;&#10;<div>&#10;<p><strong>注意：</strong></p>&#10;&#10;<ul>&#10;	<li>北方表示 +Y 方向。</li>&#10;	<li>东方表示 +X 方向。</li>&#10;	<li>南方表示 -Y 方向。</li>&#10;	<li>西方表示 -X 方向。</li>&#10;	<li>原点 [0,0] 可能会有障碍物。</li>&#10;</ul>&#10;</div>&#10;</div>&#10;</div>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>commands = [4,-1,3], obstacles = []&#10;<strong>输出：</strong>25&#10;<strong>解释：&#10;</strong>机器人开始位于 (0, 0)：&#10;1. 向北移动 4 个单位，到达 (0, 4)&#10;2. 右转&#10;3. 向东移动 3 个单位，到达 (3, 4)&#10;距离原点最远的是 (3, 4) ，距离为 3<sup>2</sup> + 4<sup>2</sup> = 25</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>commands = [4,-1,4,-2,4], obstacles = [[2,4]]&#10;<strong>输出：</strong>65&#10;<strong>解释</strong>：机器人开始位于 (0, 0)：&#10;1. 向北移动 4 个单位，到达 (0, 4)&#10;2. 右转&#10;3. 向东移动 1 个单位，然后被位于 (2, 4) 的障碍物阻挡，机器人停在 (1, 4)&#10;4. 左转&#10;5. 向北走 4 个单位，到达 (1, 8)&#10;距离原点最远的是 (1, 8) ，距离为 1<sup>2</sup> + 8<sup>2</sup> = 65</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>commands = [6,-1,-1,6], obstacles = []&#10;<b>输出：</b>36&#10;<b>解释：</b>机器人开始位于 (0, 0):&#10;1. 向北移动 6 个单位，到达 (0, 6).&#10;2. 右转&#10;3. 右转&#10;4. 向南移动 6 个单位，到达 (0, 0).&#10;机器人距离原点最远的点是 (0, 6)，其距离的平方是 6<sup>2</sup> = 36 个单位。</pre>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= commands.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>commands[i]</code> 的值可以取 <code>-2</code>、<code>-1</code> 或者是范围 <code>[1, 9]</code> 内的一个整数。</li>&#10;	<li><code>0 &lt;= obstacles.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>-3 * 10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li>答案保证小于 <code>2<sup>31</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>机器人按指令转向或前进，障碍物挡住一步则停在原地。指令与障碍均 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，逐步模拟即可，但障碍查询必须 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>障碍放入集合，方向用循环数组。前进时每一步先看下一格是否在集合中，更新最远欧氏距离平方。</p>
</blockquote>
<p>我们定义一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 的方向数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，数组中的相邻两个元素表示一个方向。即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span> 表示向北，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>d</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span> 表示向东，以此类推。</p>
<p>我们使用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 来存储所有障碍物的坐标，这样可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的时间内判断下一步是否会遇到障碍物。</p>
<p>另外，使用两个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 来表示机器人当前所在的坐标，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mi>y</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 表示机器人当前的方向，答案变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 表示机器人距离原点的最大欧式距离的平方。</p>
<p>接下来，我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>m</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>2</mn>
</math></span>，表示机器人向左转 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>90</mn>
</math></span> 度，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>3</mn>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>4</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，表示机器人向右转 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>90</mn>
</math></span> 度，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>4</mn>
</math></span>；</li>
<li>否则，表示机器人向前移动 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 个单位长度。我们将机器人当前的方向 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 与方向数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 结合，即可得到机器人在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 轴和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 轴上的增量。我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 个单位长度的增量分别累加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 上，并判断每次移动后的新坐标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 是否在障碍物的坐标中，如果不在，则更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，否则停止模拟，进行下一条指令的模拟。</li>
</ul>
<p>最后返回答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>C</mi>
  <mo>&#xD7;</mo>
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
  <mi>C</mi>
</math></span> 表示每次可以移动的最大步数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>m</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func robotSim(commands []int, obstacles [][]int) (ans int) {</span></span>
<span class="line"><span>	dirs := [5]int{0, 1, 0, -1, 0}</span></span>
<span class="line"><span>	type pair struct{ x, y int }</span></span>
<span class="line"><span>	s := map[pair]bool{}</span></span>
<span class="line"><span>	for _, e := range obstacles {</span></span>
<span class="line"><span>		s[pair{e[0], e[1]}] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var x, y, k int</span></span>
<span class="line"><span>	for _, c := range commands {</span></span>
<span class="line"><span>		if c == -2 {</span></span>
<span class="line"><span>			k = (k + 3) % 4</span></span>
<span class="line"><span>		} else if c == -1 {</span></span>
<span class="line"><span>			k = (k + 1) % 4</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			for ; c > 0 &#x26;&#x26; !s[pair{x + dirs[k], y + dirs[k+1]}]; c-- {</span></span>
<span class="line"><span>				x += dirs[k]</span></span>
<span class="line"><span>				y += dirs[k+1]</span></span>
<span class="line"><span>				ans = max(ans, x*x+y*y)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/walking-robot-simulation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0874.Walking%20Robot%20Simulation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-884" tabindex="-1">884. 两句话中的不常见单词 <a class="header-anchor" href="#q-884" aria-label="Permalink to &quot;884. 两句话中的不常见单词 {#q-884}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><strong>句子</strong> 是一串由空格分隔的单词。每个 <strong>单词</strong><em> </em>仅由小写字母组成。</p>&#10;&#10;<p>如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 <strong>没有出现</strong> ，那么这个单词就是 <strong>不常见的</strong><em> </em>。</p>&#10;&#10;<p>给你两个 <strong>句子</strong> <code>s1</code> 和 <code>s2</code> ，返回所有 <strong>不常用单词</strong> 的列表。返回列表中单词可以按 <strong>任意顺序</strong> 组织。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s1 = &quot;this apple is sweet&quot;, s2 = &quot;this apple is sour&quot;&#10;<strong>输出：</strong>[&quot;sweet&quot;,&quot;sour&quot;]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s1 = &quot;apple apple&quot;, s2 = &quot;banana&quot;&#10;<strong>输出：</strong>[&quot;banana&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s1.length, s2.length &lt;= 200</code></li>&#10;	<li><code>s1</code> 和 <code>s2</code> 由小写英文字母和空格组成</li>&#10;	<li><code>s1</code> 和 <code>s2</code> 都不含前导或尾随空格</li>&#10;	<li><code>s1</code> 和 <code>s2</code> 中的所有单词间均由单个空格分隔</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>只在一句中出现一次、且另一句中不出现的单词。句子很短，合并计数后筛出频次为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的词即可。</p>
<p>两句拆词后加到同一个计数器，值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的键即答案。</p>
</blockquote>
<p>根据题目描述，只要单词出现一次，就符合题目要求。因此，我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录所有单词以及出现的次数。</p>
<p>然后遍历哈希表，取出所有出现次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的字符串即可。</p>
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
  <mi>m</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func uncommonFromSentences(s1 string, s2 string) (ans []string) {</span></span>
<span class="line"><span>	cnt := map[string]int{}</span></span>
<span class="line"><span>	for _, s := range strings.Split(s1, " ") {</span></span>
<span class="line"><span>		cnt[s]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, s := range strings.Split(s2, " ") {</span></span>
<span class="line"><span>		cnt[s]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for s, v := range cnt {</span></span>
<span class="line"><span>		if v == 1 {</span></span>
<span class="line"><span>			ans = append(ans, s)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/uncommon-words-from-two-sentences" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0884.Uncommon%20Words%20from%20Two%20Sentences/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-890" tabindex="-1">890. 查找和替换模式 <a class="header-anchor" href="#q-890" aria-label="Permalink to &quot;890. 查找和替换模式 {#q-890}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一个单词列表 <code>words</code> 和一个模式  <code>pattern</code>，你想知道 <code>words</code> 中的哪些单词与模式匹配。</p>&#10;&#10;<p>如果存在字母的排列 <code>p</code> ，使得将模式中的每个字母 <code>x</code> 替换为 <code>p(x)</code> 之后，我们就得到了所需的单词，那么单词与模式是匹配的。</p>&#10;&#10;<p><em>（回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）</em></p>&#10;&#10;<p>返回 <code>words</code> 中与给定模式匹配的单词列表。</p>&#10;&#10;<p>你可以按任何顺序返回答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;abc&quot;,&quot;deq&quot;,&quot;mee&quot;,&quot;aqq&quot;,&quot;dkd&quot;,&quot;ccc&quot;], pattern = &quot;abb&quot;&#10;<strong>输出：</strong>[&quot;mee&quot;,&quot;aqq&quot;]&#10;<strong>解释：&#10;</strong>&quot;mee&quot; 与模式匹配，因为存在排列 {a -> m, b -> e, ...}。&#10;&quot;ccc&quot; 与模式不匹配，因为 {a -> c, b -> c, ...} 不是排列。&#10;因为 a 和 b 映射到同一个字母。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= pattern.length &lt;= 20</code></li>&#10;	<li><code>1 &lt;= words.length &lt;= 50</code></li>&#10;	<li><code>words[i].length == pattern.length</code></li>&#10;	<li><code>pattern</code> 和 <code>words[i]</code> 只包含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断单词与模式是否存在双射。词数与长度都很小，对每个词做一次映射检查即可。</p>
<p>同步扫描两串，用两个数组记下字母首次绑定的位置编号；编号不同则不是同一映射。双向同时记录可避免多对一。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findAndReplacePattern(words []string, pattern string) []string {</span></span>
<span class="line"><span>	match := func(s, t string) bool {</span></span>
<span class="line"><span>		m1, m2 := make([]int, 128), make([]int, 128)</span></span>
<span class="line"><span>		for i := 0; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>			if m1[s[i]] != m2[t[i]] {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			m1[s[i]] = i + 1</span></span>
<span class="line"><span>			m2[t[i]] = i + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var ans []string</span></span>
<span class="line"><span>	for _, word := range words {</span></span>
<span class="line"><span>		if match(word, pattern) {</span></span>
<span class="line"><span>			ans = append(ans, word)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-and-replace-pattern" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0890.Find%20and%20Replace%20Pattern/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-893" tabindex="-1">893. 特殊等价字符串组 <a class="header-anchor" href="#q-893" aria-label="Permalink to &quot;893. 特殊等价字符串组 {#q-893}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串数组 <code>words</code>。</p>&#10;&#10;<p>一步操作中，你可以交换字符串 <code>words[i]</code> 的任意两个偶数下标对应的字符或任意两个奇数下标对应的字符。</p>&#10;&#10;<p>对两个字符串 <code>words[i]</code> 和 <code>words[j]</code> 而言，如果经过任意次数的操作，<code>words[i] == words[j]</code> ，那么这两个字符串是 <strong>特殊等价 </strong>的。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>words[i] = &quot;zzxy&quot;</code> 和 <code>words[j] = &quot;xyzz&quot;</code> 是一对 <strong>特殊等价</strong> 字符串，因为可以按 <code>&quot;zzxy&quot; -> &quot;xzzy&quot; -> &quot;xyzz&quot;</code> 的操作路径使 <code>words[i] == words[j]</code> 。</li>&#10;</ul>&#10;&#10;<p>现在规定，<strong><code>words</code> </strong>的 <strong>一组特殊等价字符串 </strong>就是 <code>words</code> 的一个同时满足下述条件的非空子集：</p>&#10;&#10;<ul>&#10;	<li>该组中的每一对字符串都是<strong> 特殊等价 </strong>的</li>&#10;	<li>该组字符串已经涵盖了该类别中的所有特殊等价字符串，容量达到理论上的最大值（也就是说，如果一个字符串不在该组中，那么这个字符串就 <strong>不会</strong> 与该组内任何字符串特殊等价）</li>&#10;</ul>&#10;&#10;<p>返回 <code>words</code> 中 <strong>特殊等价字符串组</strong> 的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<ul>&#10;</ul>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;abcd&quot;,&quot;cdab&quot;,&quot;cbad&quot;,&quot;xyzz&quot;,&quot;zzxy&quot;,&quot;zzyx&quot;]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;其中一组为 [&quot;abcd&quot;, &quot;cdab&quot;, &quot;cbad&quot;]，因为它们是成对的特殊等价字符串，且没有其他字符串与这些字符串特殊等价。&#10;另外两组分别是 [&quot;xyzz&quot;, &quot;zzxy&quot;] 和 [&quot;zzyx&quot;]。特别需要注意的是，&quot;zzxy&quot; 不与 &quot;zzyx&quot; 特殊等价。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;abc&quot;,&quot;acb&quot;,&quot;bac&quot;,&quot;bca&quot;,&quot;cab&quot;,&quot;cba&quot;]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>3 组 [&quot;abc&quot;,&quot;cba&quot;]，[&quot;acb&quot;,&quot;bca&quot;]，[&quot;bac&quot;,&quot;cab&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 20</code></li>&#10;	<li>所有 <code>words[i]</code> 都只由小写字母组成。</li>&#10;	<li>所有 <code>words[i]</code> 都具有相同的长度。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>奇数位与偶数位可分别任意重排，等价类由这两套字母的可重集合决定。词数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>、长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>20</mn>
</math></span>，规范化后放入集合即可。</p>
<p>对每个词把偶位、奇位分别排序再拼接，作为签名。不同签名的个数即组数。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numSpecialEquivGroups(words []string) int {</span></span>
<span class="line"><span>	s := map[string]bool{}</span></span>
<span class="line"><span>	for _, word := range words {</span></span>
<span class="line"><span>		a, b := []rune{}, []rune{}</span></span>
<span class="line"><span>		for i, c := range word {</span></span>
<span class="line"><span>			if i&#x26;1 == 1 {</span></span>
<span class="line"><span>				a = append(a, c)</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				b = append(b, c)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		sort.Slice(a, func(i, j int) bool {</span></span>
<span class="line"><span>			return a[i] &#x3C; a[j]</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>		sort.Slice(b, func(i, j int) bool {</span></span>
<span class="line"><span>			return b[i] &#x3C; b[j]</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>		s[string(a)+string(b)] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(s)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/groups-of-special-equivalent-strings" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0893.Groups%20of%20Special-Equivalent%20Strings/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-916" tabindex="-1">916. 单词子集 <a class="header-anchor" href="#q-916" aria-label="Permalink to &quot;916. 单词子集 {#q-916}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个字符串数组 <code>words1</code> 和 <code>words2</code>。</p>&#10;&#10;<p>现在，如果 <code>b</code> 中的每个字母都出现在 <code>a</code> 中，<strong>包括重复出现的字母</strong>，那么称字符串 <code>b</code> 是字符串 <code>a</code> 的 <strong>子集</strong> 。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;wrr&quot;</code> 是 <code>&quot;warrior&quot;</code> 的子集，但不是 <code>&quot;world&quot;</code> 的子集。</li>&#10;</ul>&#10;&#10;<p>如果对 <code>words2</code> 中的每一个单词 <code>b</code>，<code>b</code> 都是 <code>a</code> 的子集，那么我们称 <code>words1</code> 中的单词 <code>a</code> 是<em> </em><strong>通用单词</strong><em> </em>。</p>&#10;&#10;<p>以数组形式返回 <code>words1</code> 中所有的 <strong>通用</strong> 单词。你可以按 <strong>任意顺序</strong> 返回答案。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;e&quot;,&quot;o&quot;]</span></p>&#10;&#10;<p><span><b>输出：</b>[&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;]</span></p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b></span><span>words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;lc&quot;,&quot;eo&quot;]</span></p>&#10;&#10;<p><span><b>输出：</b></span><span>[&quot;leetcode&quot;]</span></p>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b></span><span>words1 = [&quot;acaac&quot;,&quot;cccbb&quot;,&quot;aacbb&quot;,&quot;caacc&quot;,&quot;bcbbb&quot;], words2 = [&quot;c&quot;,&quot;cc&quot;,&quot;b&quot;]</span></p>&#10;&#10;<p><span><b>输出：</b></span><span>[&quot;cccbb&quot;]</span></p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words1.length, words2.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= words1[i].length, words2[i].length &lt;= 10</code></li>&#10;	<li><code>words1[i]</code> 和 <code>words2[i]</code> 仅由小写英文字母组成</li>&#10;	<li><code>words1</code> 中的所有字符串 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 要覆盖 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中每一个词的字母需求。对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 逐个检查每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 仍可，但 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 之间的约束可以合并：每个字母取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 中的最大需求，得到一份总约束 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>，再对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 做一次计数比较即可。</p>
</blockquote>
<p>遍历 <code v-pre>words2</code> 中的每个单词 <code v-pre>b</code>，统计每个字母出现的最大次数，记为 <code v-pre>cnt</code>。</p>
<p>然后遍历 <code v-pre>words1</code> 中的每个单词 <code v-pre>a</code>，统计每个字母出现的次数，记为 <code v-pre>t</code>。如果 <code v-pre>cnt</code> 中的每个字母的出现次数都不大于 <code v-pre>t</code> 中的出现次数，则 <code v-pre>a</code> 是通用单词，将其加入答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 为 <code v-pre>words1</code> 和 <code v-pre>words2</code> 中所有单词的长度之和。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func wordSubsets(words1 []string, words2 []string) (ans []string) {</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for _, b := range words2 {</span></span>
<span class="line"><span>		t := [26]int{}</span></span>
<span class="line"><span>		for _, c := range b {</span></span>
<span class="line"><span>			t[c-'a']++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for i := range cnt {</span></span>
<span class="line"><span>			cnt[i] = max(cnt[i], t[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, a := range words1 {</span></span>
<span class="line"><span>		t := [26]int{}</span></span>
<span class="line"><span>		for _, c := range a {</span></span>
<span class="line"><span>			t[c-'a']++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ok := true</span></span>
<span class="line"><span>		for i, v := range cnt {</span></span>
<span class="line"><span>			if v > t[i] {</span></span>
<span class="line"><span>				ok = false</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ok {</span></span>
<span class="line"><span>			ans = append(ans, a)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/word-subsets" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0916.Word%20Subsets/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-929" tabindex="-1">929. 独特的电子邮件地址 <a class="header-anchor" href="#q-929" aria-label="Permalink to &quot;929. 独特的电子邮件地址 {#q-929}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>每个 <strong>有效电子邮件地址</strong> 都由一个 <strong>本地名</strong> 和一个 <strong>域名</strong> 组成，以 <code>'@'</code> 符号分隔。除小写字母之外，电子邮件地址还可以含有一个或多个 <code>'.'</code> 或 <code>'+'</code> 。</p>&#10;&#10;<ul>&#10;	<li>例如，在 <code>alice@leetcode.com</code>中， <code>alice</code> 是 <strong>本地名</strong> ，而 <code>leetcode.com</code> 是 <strong>域名</strong> 。</li>&#10;</ul>&#10;&#10;<p>如果在电子邮件地址的<strong> 本地名 </strong>部分中的某些字符之间添加句点（<code>'.'</code>），则发往那里的邮件将会转发到本地名中没有点的同一地址。请注意，此规则 <strong>不适用于域名</strong> 。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>&quot;alice.z@leetcode.com”</code> 和 <code>“alicez@leetcode.com”</code> 会转发到同一电子邮件地址。</li>&#10;</ul>&#10;&#10;<p>如果在<strong> 本地名 </strong>中添加加号（<code>'+'</code>），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件。同样，此规则 <strong>不适用于域名</strong> 。</p>&#10;&#10;<ul>&#10;	<li>例如 <code>m.y+name@email.com</code> 将转发到 <code>my@email.com</code>。</li>&#10;</ul>&#10;&#10;<p>可以同时使用这两个规则。</p>&#10;&#10;<p>给你一个字符串数组 <code>emails</code>，我们会向每个 <code>emails[i]</code> 发送一封电子邮件。返回实际收到邮件的不同地址数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>emails = [&quot;test.email+alex@leetcode.com&quot;,&quot;test.e.mail+bob.cathy@leetcode.com&quot;,&quot;testemail+david@lee.tcode.com&quot;]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>实际收到邮件的是 &quot;testemail@leetcode.com&quot; 和 &quot;testemail@lee.tcode.com&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>emails = [&quot;a@leetcode.com&quot;,&quot;b@leetcode.com&quot;,&quot;c@leetcode.com&quot;]&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p><br>&#10;<strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= emails.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= emails[i].length &lt;= 100</code></li>&#10;	<li><code>emails[i]</code> 由小写英文字母、<code>'+'</code>、<code>'.'</code> 和 <code>'@'</code> 组成</li>&#10;	<li>每个 <code>emails[i]</code> 都包含有且仅有一个 <code>'@'</code> 字符</li>&#10;	<li>所有本地名和域名都不为空</li>&#10;	<li>本地名不会以 <code>'+'</code> 字符作为开头</li>&#10;	<li>域名以 <code>&quot;.com&quot;</code> 后缀结尾。</li>&#10;	<li>域名在 <code>&quot;.com&quot;</code> 后缀前至少包含一个字符</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>规则只作用于 <code v-pre>@</code> 左侧：忽略 <code v-pre>.</code>，并丢掉第一个 <code v-pre>+</code> 及其后内容。规范化后相同的地址应只计一次。对每个邮箱按规则改写本地名，再与域名拼回，放入集合，集合大小即为答案。</p>
</blockquote>
<p>我们可以用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 来存储所有的电子邮件地址，然后遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">emails</mtext>
</math></span>，对于每个电子邮件地址，我们将其分为本地名和域名两部分，然后对本地名进行处理，去掉所有的点号和加号后面的字符，最后将处理后的本地名和域名拼接起来，加入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中。</p>
<p>最后返回哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的大小即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 为所有电子邮件地址的长度之和。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numUniqueEmails(emails []string) int {</span></span>
<span class="line"><span>	s := make(map[string]struct{})</span></span>
<span class="line"><span>	for _, email := range emails {</span></span>
<span class="line"><span>		parts := strings.Split(email, "@")</span></span>
<span class="line"><span>		local := parts[0]</span></span>
<span class="line"><span>		domain := parts[1]</span></span>
<span class="line"><span>		var t strings.Builder</span></span>
<span class="line"><span>		for _, c := range local {</span></span>
<span class="line"><span>			if c == '.' {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if c == '+' {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			t.WriteByte(byte(c))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s[t.String()+"@"+domain] = struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(s)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/unique-email-addresses" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0929.Unique%20Email%20Addresses/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-953" tabindex="-1">953. 验证外星语词典 <a class="header-anchor" href="#q-953" aria-label="Permalink to &quot;953. 验证外星语词典 {#q-953}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>某种外星语也使用英文小写字母，但可能顺序 <code>order</code> 不同。字母表的顺序（<code>order</code>）是一些小写字母的排列。</p>&#10;&#10;<p>给定一组用外星语书写的单词 <code>words</code>，以及其字母表的顺序 <code>order</code>，只有当给定的单词在这种外星语中按字典序排列时，返回 <code>true</code>；否则，返回 <code>false</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;hello&quot;,&quot;leetcode&quot;], order = &quot;hlabcdefgijkmnopqrstuvwxyz&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;word&quot;,&quot;world&quot;,&quot;row&quot;], order = &quot;worldabcefghijkmnpqstuvxyz&quot;&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;apple&quot;,&quot;app&quot;], order = &quot;abcdefghijklmnopqrstuvwxyz&quot;&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>当前三个字符 &quot;app&quot; 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 &quot;apple&quot; > &quot;app&quot;，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小（<a href="https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">更多信息</a>）。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 20</code></li>&#10;	<li><code>order.length == 26</code></li>&#10;	<li>在 <code>words[i]</code> 和 <code>order</code> 中的所有字符都是英文小写字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按外星字母序判断单词是否非降。逐对比较相邻词当然可以，按位扫描也能一次判定：第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位的外星序必须非降，且较短词在该位视为更小。若某一列所有相邻位都严格上升，则后续列不必再看。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isAlienSorted(words []string, order string) bool {</span></span>
<span class="line"><span>	m := make([]int, 26)</span></span>
<span class="line"><span>	for i, c := range order {</span></span>
<span class="line"><span>		m[c-'a'] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 20; i++ {</span></span>
<span class="line"><span>		prev := -1</span></span>
<span class="line"><span>		valid := true</span></span>
<span class="line"><span>		for _, x := range words {</span></span>
<span class="line"><span>			curr := -1</span></span>
<span class="line"><span>			if i &#x3C; len(x) {</span></span>
<span class="line"><span>				curr = m[x[i]-'a']</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if prev > curr {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if prev == curr {</span></span>
<span class="line"><span>				valid = false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			prev = curr</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if valid {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/verifying-an-alien-dictionary" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0953.Verifying%20an%20Alien%20Dictionary/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-961" tabindex="-1">961. 在长度 2N 的数组中找出重复 N 次的元素 <a class="header-anchor" href="#q-961" aria-label="Permalink to &quot;961. 在长度 2N 的数组中找出重复 N 次的元素 {#q-961}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、抽屉原理</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> ，该数组具有以下属性：</p>&#10;&#10;<div>&#10;<div>&#10;<ul>&#10;	<li><code>nums.length == 2 * n</code>.</li>&#10;	<li><code>nums</code> 包含 <code>n + 1</code> 个 <strong>不同的</strong> 元素，其中 <code>n</code> 个值在数组中出现 <strong>恰好一次</strong>。</li>&#10;	<li><code>nums</code> 中恰有一个元素重复 <code>n</code> 次</li>&#10;</ul>&#10;&#10;<p>找出并返回重复了 <code>n</code><em> </em>次的那个元素。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,3]&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,1,2,5,3,2]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,1,5,2,5,3,5,4]&#10;<strong>输出：</strong>5&#10;</pre>&#10;</div>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= n &lt;= 5000</code></li>&#10;	<li><code>nums.length == 2 * n</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>nums</code> 由 <code>n + 1</code> 个<strong> 不同的</strong> 元素组成，且其中一个元素恰好重复 <code>n</code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>n</mi>
</math></span> 的数组中恰有一个元素出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次，其余各一次。第一次碰到已见过的值即为答案，用集合记录即可。</p>
</blockquote>
<p>由于数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>n</mi>
</math></span> 个元素，其中有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个不同的元素，且有一个元素重复了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次，说明数组中的其余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个元素都是不同的。</p>
<p>因此，我们只需要遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 记录遍历过的元素。当遍历到某个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中已经存在，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 是重复的元素，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func repeatedNTimes(nums []int) int {</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	for i := 0; ; i++ {</span></span>
<span class="line"><span>		if s[nums[i]] {</span></span>
<span class="line"><span>			return nums[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s[nums[i]] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>哈希需要线性空间。出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次的元素在环形意义下间隔至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>，故从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 起与前两项比较即可；若都不同，答案必为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
</blockquote>
<p>根据题目描述，数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中有一半的元素都是相同的，如果我们将数组视为环形排列，那么两个相同元素之间的最多间隔 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 个其他元素。</p>
<p>因此，我们从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 开始遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，对于每个下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span> 的值，如果相等则返回该值。</p>
<p>如果没有在上述过程中找到重复的元素，那么重复的元素一定是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，我们直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func repeatedNTimes(nums []int) int {</span></span>
<span class="line"><span>	for i := 2; i &#x3C; len(nums); i++ {</span></span>
<span class="line"><span>		if nums[i] == nums[i-1] || nums[i] == nums[i-2] {</span></span>
<span class="line"><span>			return nums[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nums[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/n-repeated-element-in-size-2n-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0961.N-Repeated%20Element%20in%20Size%202N%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-966" tabindex="-1">966. 元音拼写检查器 <a class="header-anchor" href="#q-966" aria-label="Permalink to &quot;966. 元音拼写检查器 {#q-966}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在给定单词列表 <code>wordlist</code> 的情况下，我们希望实现一个拼写检查器，将查询单词转换为正确的单词。</p>&#10;&#10;<p>对于给定的查询单词 <code>query</code>，拼写检查器将会处理两类拼写错误：</p>&#10;&#10;<ul>&#10;	<li>大小写：如果查询匹配单词列表中的某个单词（<strong>不区分大小写</strong>），则返回的正确单词与单词列表中的大小写相同。&#10;&#10;    <ul>&#10;    	<li>例如：<code>wordlist = [&quot;yellow&quot;]</code>, <code>query = &quot;YellOw&quot;</code>: <code>correct = &quot;yellow&quot;</code></li>&#10;    	<li>例如：<code>wordlist = [&quot;Yellow&quot;]</code>, <code>query = &quot;yellow&quot;</code>: <code>correct = &quot;Yellow&quot;</code></li>&#10;    	<li>例如：<code>wordlist = [&quot;yellow&quot;]</code>, <code>query = &quot;yellow&quot;</code>: <code>correct = &quot;yellow&quot;</code></li>&#10;    </ul>&#10;    </li>&#10;    <li>元音错误：如果在将查询单词中的元音 <code>('a', 'e', 'i', 'o', 'u')</code>  分别替换为任何元音后，能与单词列表中的单词匹配（<strong>不区分大小写</strong>），则返回的正确单词与单词列表中的匹配项大小写相同。&#10;    <ul>&#10;    	<li>例如：<code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yollow&quot;</code>: <code>correct = &quot;YellOw&quot;</code></li>&#10;    	<li>例如：<code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yeellow&quot;</code>: <code>correct = &quot;&quot;</code> （无匹配项）</li>&#10;    	<li>例如：<code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yllw&quot;</code>: <code>correct = &quot;&quot;</code> （无匹配项）</li>&#10;    </ul>&#10;    </li>&#10;&#10;</ul>&#10;&#10;<p>此外，拼写检查器还按照以下优先级规则操作：</p>&#10;&#10;<ul>&#10;	<li>当查询完全匹配单词列表中的某个单词（<strong>区分大小写</strong>）时，应返回相同的单词。</li>&#10;	<li>当查询匹配到大小写问题的单词时，您应该返回单词列表中的第一个这样的匹配项。</li>&#10;	<li>当查询匹配到元音错误的单词时，您应该返回单词列表中的第一个这样的匹配项。</li>&#10;	<li>如果该查询在单词列表中没有匹配项，则应返回空字符串。</li>&#10;</ul>&#10;&#10;<p>给出一些查询 <code>queries</code>，返回一个单词列表 <code>answer</code>，其中 <code>answer[i]</code> 是由查询 <code>query = queries[i]</code> 得到的正确单词。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>wordlist = [&quot;KiTe&quot;,&quot;kite&quot;,&quot;hare&quot;,&quot;Hare&quot;], queries = [&quot;kite&quot;,&quot;Kite&quot;,&quot;KiTe&quot;,&quot;Hare&quot;,&quot;HARE&quot;,&quot;Hear&quot;,&quot;hear&quot;,&quot;keti&quot;,&quot;keet&quot;,&quot;keto&quot;]&#10;<strong>输出：</strong>[&quot;kite&quot;,&quot;KiTe&quot;,&quot;KiTe&quot;,&quot;Hare&quot;,&quot;hare&quot;,&quot;&quot;,&quot;&quot;,&quot;KiTe&quot;,&quot;&quot;,&quot;KiTe&quot;]</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>wordlist = [&quot;yellow&quot;], queries = [&quot;YellOw&quot;]&#10;<b>输出：</b>[&quot;yellow&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= wordlist.length, queries.length &lt;= 5000</code></li>&#10;	<li><code>1 &lt;= wordlist[i].length, queries[i].length &lt;= 7</code></li>&#10;	<li><code>wordlist[i]</code> 和 <code>queries[i]</code> 只包含英文字母</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>查询按“完全匹配、忽略大小写、元音视为相同”三级规则映射到词表，同级取词表中最先出现者。预处理三张表：原词集合、小写首次出现、元音替换为 <code v-pre>*</code> 后的首次出现。查询依次查三张表。</p>
</blockquote>
<p>我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wordlist</mtext>
</math></span>，将单词按照大小写不敏感、元音不敏感的规则分别存入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">low</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pat</mtext>
</math></span> 中，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">low</mtext>
</math></span> 的键为单词的小写形式， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pat</mtext>
</math></span> 的键为将单词的元音字母替换为 <code v-pre>*</code> 后的字符串，值为单词本身。用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 存储 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wordlist</mtext>
</math></span> 中的单词。</p>
<p>遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">queries</mtext>
</math></span>，对于每个单词 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wordlist</mtext>
</math></span> 中，直接将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 加入答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 中。</p>
<p>否则，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的小写形式在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">low</mtext>
</math></span> 中，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wordlist</mtext>
</math></span> 中，且大小写不敏感，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">low</mtext>
  <mo stretchy="false">[</mo>
  <mi>q</mi>
  <mo>.</mo>
  <mtext>lower</mtext>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">]</mo>
</math></span> 加入答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 中。</p>
<p>否则，如果将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的元音字母替换为 <code v-pre>*</code> 后的字符串在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pat</mtext>
</math></span> 中，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wordlist</mtext>
</math></span> 中，且元音不敏感，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pat</mtext>
  <mo stretchy="false">[</mo>
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>q</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">]</mo>
</math></span> 加入答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 中。</p>
<p>否则，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wordlist</mtext>
</math></span> 中，且大小写和元音都不敏感，将空字符串加入答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 中。</p>
<p>最后返回答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
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
</math></span> 分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wordlist</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">queries</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func spellchecker(wordlist []string, queries []string) (ans []string) {</span></span>
<span class="line"><span>	s := map[string]bool{}</span></span>
<span class="line"><span>	low := map[string]string{}</span></span>
<span class="line"><span>	pat := map[string]string{}</span></span>
<span class="line"><span>	f := func(w string) string {</span></span>
<span class="line"><span>		res := []byte(w)</span></span>
<span class="line"><span>		for i := range res {</span></span>
<span class="line"><span>			if res[i] == 'a' || res[i] == 'e' || res[i] == 'i' || res[i] == 'o' || res[i] == 'u' {</span></span>
<span class="line"><span>				res[i] = '*'</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return string(res)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, w := range wordlist {</span></span>
<span class="line"><span>		s[w] = true</span></span>
<span class="line"><span>		t := strings.ToLower(w)</span></span>
<span class="line"><span>		if _, ok := low[t]; !ok {</span></span>
<span class="line"><span>			low[t] = w</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if _, ok := pat[f(t)]; !ok {</span></span>
<span class="line"><span>			pat[f(t)] = w</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, q := range queries {</span></span>
<span class="line"><span>		if s[q] {</span></span>
<span class="line"><span>			ans = append(ans, q)</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q = strings.ToLower(q)</span></span>
<span class="line"><span>		if s, ok := low[q]; ok {</span></span>
<span class="line"><span>			ans = append(ans, s)</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		q = f(q)</span></span>
<span class="line"><span>		if s, ok := pat[q]; ok {</span></span>
<span class="line"><span>			ans = append(ans, s)</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, "")</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/vowel-spellchecker" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0966.Vowel%20Spellchecker/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1001" tabindex="-1">1001. 网格照明 <a class="header-anchor" href="#q-1001" aria-label="Permalink to &quot;1001. 网格照明 {#q-1001}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在大小为 <code>n x n</code> 的网格 <code>grid</code> 上，每个单元格都有一盏灯，最初灯都处于 <strong>关闭</strong> 状态。</p>&#10;&#10;<p>给你一个由灯的位置组成的二维数组 <code>lamps</code> ，其中 <code>lamps[i] = [row<sub>i</sub>, col<sub>i</sub>]</code> 表示 <strong>打开</strong> 位于 <code>grid[row<sub>i</sub>][col<sub>i</sub>]</code> 的灯。即便同一盏灯可能在 <code>lamps</code> 中多次列出，不会影响这盏灯处于 <strong>打开</strong> 状态。</p>&#10;&#10;<p>当一盏灯处于打开状态，它将会照亮 <strong>自身所在单元格</strong> 以及同一 <strong>行</strong> 、同一 <strong>列</strong> 和两条 <strong>对角线</strong> 上的 <strong>所有其他单元格</strong> 。</p>&#10;&#10;<p>另给你一个二维数组 <code>queries</code> ，其中 <code>queries[j] = [row<sub>j</sub>, col<sub>j</sub>]</code> 。对于第 <code>j</code> 个查询，如果单元格 <code>[row<sub>j</sub>, col<sub>j</sub>]</code> 是被照亮的，则查询结果为 <code>1</code> ，否则为 <code>0</code> 。在第 <code>j</code> 次查询之后 [按照查询的顺序] ，<strong>关闭</strong> 位于单元格 <code>grid[row<sub>j</sub>][col<sub>j</sub>]</code> 上及相邻 8 个方向上（与单元格 <code>grid[row<sub>i</sub>][col<sub>i</sub>]</code> 共享角或边）的任何灯。</p>&#10;&#10;<p>返回一个整数数组 <code>ans</code> 作为答案， <code>ans[j]</code> 应等于第 <code>j</code> 次查询 <code>queries[j]</code> 的结果，<code>1</code> 表示照亮，<code>0</code> 表示未照亮。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1001.Grid%20Illumination/images/illu_1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]&#10;<strong>输出：</strong>[1,0]&#10;<strong>解释：</strong>最初所有灯都是关闭的。在执行查询之前，打开位于 [0, 0] 和 [4, 4] 的灯。第 0 次查询检查 grid[1][1] 是否被照亮（蓝色方框）。该单元格被照亮，所以 ans[0] = 1 。然后，关闭红色方框中的所有灯。&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1001.Grid%20Illumination/images/illu_step1.jpg" loading="lazy">&#10;第 1 次查询检查 grid[1][0] 是否被照亮（蓝色方框）。该单元格没有被照亮，所以 ans[1] = 0 。然后，关闭红色矩形中的所有灯。&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1000-1099/1001.Grid%20Illumination/images/illu_step2.jpg" loading="lazy">&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]&#10;<strong>输出：</strong>[1,1]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]&#10;<strong>输出：</strong>[1,1,0]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= lamps.length &lt;= 20000</code></li>&#10;	<li><code>0 &lt;= queries.length &lt;= 20000</code></li>&#10;	<li><code>lamps[i].length == 2</code></li>&#10;	<li><code>0 &lt;= row<sub>i</sub>, col<sub>i</sub> &lt; n</code></li>&#10;	<li><code>queries[j].length == 2</code></li>&#10;	<li><code>0 &lt;= row<sub>j</sub>, col<sub>j</sub> &lt; n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>网格边长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，按格子模拟照明或关灯既无法建图也无法扫描。灯与查询各自至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，真正有用的只是灯所在的行、列与两条对角线。</p>
<p>一盏位于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 的灯照亮整行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>、整列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>y</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span> 两条斜线。查询点被照亮当且仅当这四条线之一上仍有灯；随后只需关闭该点及其八邻域中仍存在的灯，并同步减少对应直线上的计数。</p>
<p>因此用集合去重灯的坐标，再用四张哈希表维护每条直线上的灯数。每次查询先看四条线的计数是否为正，再在常数个邻格上更新集合与计数，复杂度与灯数、查询数线性相关，与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 无关。</p>
</blockquote>
<p>假设一盏灯的坐标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span>，那么它所在的行的数值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，列的数值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，正对角线的数值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mi>y</mi>
</math></span>，反对角线的数值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span>。确定某一直线的唯一数值标识后，我们就可以通过哈希表来记录某一直线所拥有的灯的数目。</p>
<p>我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">lamps</mtext>
</math></span>，将当前遍历到的灯所在的行、列和正、反对角线拥有灯的数目分别加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>注意，在处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">lamps</mtext>
</math></span> 时，需要进行去重，因为我们将重复的灯看作同一盏灯。</p>
<p>接下来，我们遍历 queries，判断当前查询点所在的行，列和正、反对角线是否有灯，如果有，则置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，即该点在查询时是被照亮的。然后进行关闭操作，查找查询点所在的八近邻点及它本身是否有灯，如果有，将该点所在的行、列和正、反对角线的灯数目分别减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并且将灯从网格中去掉。</p>
<p>最后，返回答案数组即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>q</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 分别为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">lamps</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">queries</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func gridIllumination(n int, lamps [][]int, queries [][]int) []int {</span></span>
<span class="line"><span>	row, col, diag1, diag2 := map[int]int{}, map[int]int{}, map[int]int{}, map[int]int{}</span></span>
<span class="line"><span>	type pair struct{ x, y int }</span></span>
<span class="line"><span>	s := map[pair]bool{}</span></span>
<span class="line"><span>	for _, lamp := range lamps {</span></span>
<span class="line"><span>		i, j := lamp[0], lamp[1]</span></span>
<span class="line"><span>		p := pair{i, j}</span></span>
<span class="line"><span>		if !s[p] {</span></span>
<span class="line"><span>			s[p] = true</span></span>
<span class="line"><span>			row[i]++</span></span>
<span class="line"><span>			col[j]++</span></span>
<span class="line"><span>			diag1[i-j]++</span></span>
<span class="line"><span>			diag2[i+j]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m := len(queries)</span></span>
<span class="line"><span>	ans := make([]int, m)</span></span>
<span class="line"><span>	for k, q := range queries {</span></span>
<span class="line"><span>		i, j := q[0], q[1]</span></span>
<span class="line"><span>		if row[i] > 0 || col[j] > 0 || diag1[i-j] > 0 || diag2[i+j] > 0 {</span></span>
<span class="line"><span>			ans[k] = 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for x := i - 1; x &#x3C;= i+1; x++ {</span></span>
<span class="line"><span>			for y := j - 1; y &#x3C;= j+1; y++ {</span></span>
<span class="line"><span>				p := pair{x, y}</span></span>
<span class="line"><span>				if s[p] {</span></span>
<span class="line"><span>					s[p] = false</span></span>
<span class="line"><span>					row[x]--</span></span>
<span class="line"><span>					col[y]--</span></span>
<span class="line"><span>					diag1[x-y]--</span></span>
<span class="line"><span>					diag2[x+y]--</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/grid-illumination" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1001.Grid%20Illumination/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1002" tabindex="-1">1002. 查找共用字符 <a class="header-anchor" href="#q-1002" aria-label="Permalink to &quot;1002. 查找共用字符 {#q-1002}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre>给你一个字符串数组 <code>words</code> ，请你找出所有在 <code>words</code> 的每个字符串中都出现的共用字符（<strong>包括重复字符</strong>），并以数组形式返回。你可以按 <strong>任意顺序</strong> 返回答案。&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;bella&quot;,&quot;label&quot;,&quot;roller&quot;]&#10;<strong>输出：</strong>[&quot;e&quot;,&quot;l&quot;,&quot;l&quot;]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;cool&quot;,&quot;lock&quot;,&quot;cook&quot;]&#10;<strong>输出：</strong>[&quot;c&quot;,&quot;o&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 100</code></li>&#10;	<li><code>words[i]</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个字符扫描全部单词可以统计公共出现次数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 与串长均不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>，时间足够。重复扫描同一字符集会做许多无用比较。</p>
<p>一个字符能进入答案的次数，等于它在所有单词中出现次数的最小值，即各单词字母多重集合的交。</p>
<p>为此先统计第一个单词的频次，再与其余单词逐个取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
</math></span>，最后按频次展开即可，字符集大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span>，额外空间为常数。</p>
</blockquote>
<p>我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录每个字符在所有字符串中出现的最小次数，最后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 数组，将出现次数大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的字符加入答案即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <msub>
    <mi>w</mi>
    <mi>i</mi>
  </msub>
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
</math></span> 为字符串数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>w</mi>
    <mi>i</mi>
  </msub>
</math></span> 为字符串数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字符串的长度，另外 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 为字符集的大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func commonChars(words []string) (ans []string) {</span></span>
<span class="line"><span>	cnt := make([]int, 26)</span></span>
<span class="line"><span>	for i := range cnt {</span></span>
<span class="line"><span>		cnt[i] = 20000</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, w := range words {</span></span>
<span class="line"><span>		t := make([]int, 26)</span></span>
<span class="line"><span>		for _, c := range w {</span></span>
<span class="line"><span>			t[c-'a']++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for i := 0; i &#x3C; 26; i++ {</span></span>
<span class="line"><span>			cnt[i] = min(cnt[i], t[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 26; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; cnt[i]; j++ {</span></span>
<span class="line"><span>			ans = append(ans, string('a'+rune(i)))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-common-characters" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1002.Find%20Common%20Characters/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1010" tabindex="-1">1010. 总持续时间可被 60 整除的歌曲 <a class="header-anchor" href="#q-1010" aria-label="Permalink to &quot;1010. 总持续时间可被 60 整除的歌曲 {#q-1010}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在歌曲列表中，第 <code>i</code> 首歌曲的持续时间为 <code>time[i]</code> 秒。</p>&#10;&#10;<p>返回其总持续时间（以秒为单位）可被 <code>60</code> 整除的歌曲对的数量。形式上，我们希望下标数字 <code>i</code> 和 <code>j</code> 满足  <code>i &lt; j</code> 且有 <code>(time[i] + time[j]) % 60 == 0</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>time = [30,20,150,100,40]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>这三对的总持续时间可被 60 整除：&#10;(time[0] = 30, time[2] = 150): 总持续时间 180&#10;(time[1] = 20, time[3] = 100): 总持续时间 120&#10;(time[1] = 20, time[4] = 40): 总持续时间 60&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>time = [60,60,60]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>所有三对的总持续时间都是 120，可以被 60 整除。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= time.length &lt;= 6 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= time[i] &lt;= 500</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数学 + 计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>枚举所有无序对判断时长之和是否整除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>6</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 时为平方级。配对只依赖对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span> 取模后的余数。</p>
<p>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mi>a</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
</math></span>，则与之匹配的余数是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mn>60</mn>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
</math></span>。对每个已出现的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 计数，即可在读入当前歌时累加合法对数。</p>
<p>用长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span> 的计数表边遍历边查询再更新，避免把同一首歌与自己配对，时间和余数域均为线性。</p>
</blockquote>
<p>如果一个数对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span> 之和能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span> 整除，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
  <mo>+</mo>
  <mi>b</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，不妨记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mi>a</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mi>b</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
</math></span>，那么有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mn>60</mn>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
</math></span>。</p>
<p>因此，我们可以遍历歌曲列表，用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录每个余数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 出现的次数。对于当前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中存在余数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mn>60</mn>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mn>60</mn>
</math></span>，那么将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 累加进答案中。然后，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中的出现次数加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。继续遍历，直到遍历完整个歌曲列表。</p>
<p>遍历结束后，即可得到满足条件的歌曲对数目。</p>
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
</math></span> 是歌曲列表的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 是余数的可能取值，这里 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>60</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numPairsDivisibleBy60(time []int) (ans int) {</span></span>
<span class="line"><span>	cnt := [60]int{}</span></span>
<span class="line"><span>	for _, x := range time {</span></span>
<span class="line"><span>		x %= 60</span></span>
<span class="line"><span>		y := (60 - x) % 60</span></span>
<span class="line"><span>		ans += cnt[y]</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/pairs-of-songs-with-total-durations-divisible-by-60" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1010.Pairs%20of%20Songs%20With%20Total%20Durations%20Divisible%20by%2060/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1072" tabindex="-1">1072. 按列翻转得到最大值等行数 <a class="header-anchor" href="#q-1072" aria-label="Permalink to &quot;1072. 按列翻转得到最大值等行数 {#q-1072}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定 <code>m x n</code> 矩阵 <code>matrix</code> 。</p>&#10;&#10;<p>你可以从中选出任意数量的列并翻转其上的 <strong>每个 </strong>单元格。（即翻转后，单元格的值从 <code>0</code> 变成 <code>1</code>，或者从 <code>1</code> 变为 <code>0</code> 。）</p>&#10;&#10;<p>返回 <em>经过一些翻转后，行内所有值都相等的最大行数</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>matrix = [[0,1],[1,1]]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>不进行翻转，有 1 行所有值都相等。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>matrix = [[0,1],[1,0]]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>翻转第一列的值之后，这两行都由相等的值组成。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>matrix = [[0,0,0],[0,0,1],[1,1,0]]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>翻转前两列的值之后，后两行由相等的值组成。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == matrix.length</code></li>&#10;	<li><code>n == matrix[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 300</code></li>&#10;	<li><code>matrix[i][j] == 0</code> 或 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>翻转若干列后，相同的行会变成全 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或全 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。两行能同时被翻成相等，当且仅当它们相同或互为取反。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>300</mn>
</math></span>，应按模式计数而不是枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 种翻转。</p>
<p>把每行规范化为「首元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>」的形式：若以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 开头则整行取反。这样互反的两行落入同一键。</p>
<p>哈希表统计规范化元组的出现次数，最大值即为答案。</p>
</blockquote>
<p>我们观察发现，如果矩阵中的两行满足以下条件之一，则它们可以通过翻转某些列的方式得到相等的行：</p>
<ol>
<li>两行的对应位置元素相等，即如果其中一行元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
</math></span>，则另一行元素也为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
</math></span>；</li>
<li>两行的对应位置元素相反，即如果其中一行元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
</math></span>，则另一行元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>0</mn>
</math></span>。</li>
</ol>
<p>我们称满足以上条件之一的两行元素为“等价行”，那么题目所求的答案即为矩阵中最多包含等价行的行数。</p>
<p>因此，我们可以遍历矩阵的每一行，将每一行转换成第一个元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的“等价行”。具体做法如下：</p>
<ul>
<li>如果当前行的第一个元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么当前行的元素保持不变；</li>
<li>如果当前行的第一个元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，那么我们将当前行的每个元素进行翻转，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。也就是说，我们将以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 开头的行翻转成以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开头的“等价行”。</li>
</ul>
<p>这样一来，我们只需要用一个哈希表来统计转换后的每一行的出现次数，其中键为转换后的行（可以将所有数字拼接成一个字符串），值为该行出现的次数。最后，哈希表中值的最大值即为矩阵中最多包含等价行的行数。</p>
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
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是矩阵的行数和列数。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2100-2199/2128.Remove%20All%20Ones%20With%20Row%20and%20Column%20Flips/README.md" target="_blank" rel="noopener noreferrer">2128. 通过翻转行或列来去除所有的 1</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxEqualRowsAfterFlips(matrix [][]int) (ans int) {</span></span>
<span class="line"><span>	cnt := map[string]int{}</span></span>
<span class="line"><span>	for _, row := range matrix {</span></span>
<span class="line"><span>		s := []byte{}</span></span>
<span class="line"><span>		for _, x := range row {</span></span>
<span class="line"><span>			if row[0] == 1 {</span></span>
<span class="line"><span>				x ^= 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			s = append(s, byte(x)+'0')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := string(s)</span></span>
<span class="line"><span>		cnt[t]++</span></span>
<span class="line"><span>		ans = max(ans, cnt[t])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/flip-columns-for-maximum-number-of-equal-rows" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1072.Flip%20Columns%20For%20Maximum%20Number%20of%20Equal%20Rows/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1122" tabindex="-1">1122. 数组的相对排序 <a class="header-anchor" href="#q-1122" aria-label="Permalink to &quot;1122. 数组的相对排序 {#q-1122}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、冒泡排序、计数排序、排序、快速排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个数组，<code>arr1</code> 和 <code>arr2</code>，<code>arr2</code> 中的元素各不相同，<code>arr2</code> 中的每个元素都出现在 <code>arr1</code> 中。</p>&#10;&#10;<p>对 <code>arr1</code> 中的元素进行排序，使 <code>arr1</code> 中项的相对顺序和 <code>arr2</code> 中的相对顺序相同。未在 <code>arr2</code> 中出现过的元素需要按照升序放在 <code>arr1</code> 的末尾。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]&#10;<strong>输出：</strong>[2,2,2,1,4,3,3,9,6,7,19]&#10;</pre>&#10;&#10;<p><strong>示例  2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]&#10;<strong>输出：</strong>[22,28,8,6,17,44]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr1.length, arr2.length &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= arr1[i], arr2[i] &lt;= 1000</code></li>&#10;	<li><code>arr2</code> 中的元素 <code>arr2[i]</code>  <strong>各不相同</strong> </li>&#10;	<li><code>arr2</code> 中的每个元素 <code>arr2[i]</code> 都出现在 <code>arr1</code> 中</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：自定义排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排序关键字由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 中的相对次序决定，未出现的元素再按自身大小排在后面。哈希表记下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 的下标，自定义比较键为「在表中则用下标，否则用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
  <mo>+</mo>
  <mi>x</mi>
</math></span>」，一次排序即可同时处理两类元素。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 中的值互不相同，下标作为次序是稳定的。</p>
</blockquote>
<p>我们先用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
</math></span> 记录数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 中每个元素的位置。然后，我们将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 中的每个元素映射成一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mo>.</mo>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mn>1000</mn>
  <mo>+</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，并对二元组进行排序。最后我们取出所有二元组的第二个元素并返回即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
</math></span> 分别是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func relativeSortArray(arr1 []int, arr2 []int) []int {</span></span>
<span class="line"><span>	pos := map[int]int{}</span></span>
<span class="line"><span>	for i, x := range arr2 {</span></span>
<span class="line"><span>		pos[x] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	arr := make([][2]int, len(arr1))</span></span>
<span class="line"><span>	for i, x := range arr1 {</span></span>
<span class="line"><span>		if p, ok := pos[x]; ok {</span></span>
<span class="line"><span>			arr[i] = [2]int{p, x}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			arr[i] = [2]int{len(arr2), x}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(arr, func(i, j int) bool {</span></span>
<span class="line"><span>		return arr[i][0] &#x3C; arr[j][0] || arr[i][0] == arr[j][0] &#x26;&#x26; arr[i][1] &#x3C; arr[j][1]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	for i, x := range arr {</span></span>
<span class="line"><span>		arr1[i] = x[1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return arr1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：计数排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一的比较排序为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。值域不大时，先统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 频次，再按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 顺序依次输出，最后按值扫描剩余元素，可在线性时间内完成。</p>
</blockquote>
<p>我们可以使用计数排序的思想，首先统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 中每个元素的出现次数，然后按照数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 中的顺序，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 中的元素按照出现次数放入答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中。最后，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 中的所有元素，将未在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 中出现的元素按照升序放入答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 的末尾。</p>
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
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mn>2</mn>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func relativeSortArray(arr1 []int, arr2 []int) []int {</span></span>
<span class="line"><span>	cnt := make([]int, 1001)</span></span>
<span class="line"><span>	mi, mx := 1001, 0</span></span>
<span class="line"><span>	for _, x := range arr1 {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>		mi = min(mi, x)</span></span>
<span class="line"><span>		mx = max(mx, x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, 0, len(arr1))</span></span>
<span class="line"><span>	for _, x := range arr2 {</span></span>
<span class="line"><span>		for cnt[x] > 0 {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>			cnt[x]--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x := mi; x &#x3C;= mx; x++ {</span></span>
<span class="line"><span>		for cnt[x] > 0 {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>			cnt[x]--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/relative-sort-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1122.Relative%20Sort%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1128" tabindex="-1">1128. 等价多米诺骨牌对的数量 <a class="header-anchor" href="#q-1128" aria-label="Permalink to &quot;1128. 等价多米诺骨牌对的数量 {#q-1128}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一组多米诺骨牌 <code>dominoes</code> 。</p>&#10;&#10;<p>形式上，<code>dominoes[i] = [a, b]</code> 与 <code>dominoes[j] = [c, d]</code> <strong>等价</strong> 当且仅当 (<code>a == c</code> 且 <code>b == d</code>) 或者 (<code>a == d</code> 且 <code>b == c</code>) 。即一张骨牌可以通过旋转 <code>0</code> 度或 <code>180</code> 度得到另一张多米诺骨牌。</p>&#10;&#10;<p>在 <code>0 &lt;= i &lt; j &lt; dominoes.length</code> 的前提下，找出满足 <code>dominoes[i]</code> 和 <code>dominoes[j]</code> 等价的骨牌对 <code>(i, j)</code> 的数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>dominoes = [[1,2],[2,1],[3,4],[5,6]]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= dominoes.length &lt;= 4 * 10<sup>4</sup></code></li>&#10;	<li><code>dominoes[i].length == 2</code></li>&#10;	<li><code>1 &lt;= dominoes[i][j] &lt;= 9</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>等价对把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">]</mo>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>b</mi>
  <mo>,</mo>
  <mi>a</mi>
  <mo stretchy="false">]</mo>
</math></span> 视为同一。若对每张牌扫描此前全部牌，时间为平方级。将较小数字放十位、较大放个位，得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>99</mn>
</math></span> 的键，遍历时答案累加该键已出现次数再入表，每张牌只与已见过的等价牌配对一次。</p>
</blockquote>
<p>我们可以将每个多米诺骨牌的两个数字按照大小顺序拼接成一个两位数，这样就可以将等价的多米诺骨牌拼接成相同的两位数。例如，<code v-pre>[1, 2]</code> 和 <code v-pre>[2, 1]</code> 拼接成的两位数都是 <code v-pre>12</code>，<code v-pre>[3, 4]</code> 和 <code v-pre>[4, 3]</code> 拼接成的两位数都是 <code v-pre>34</code>。</p>
<p>然后我们遍历所有的多米诺骨牌，用一个哈希表或者一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录每个两位数出现的次数。对于每个多米诺骨牌，我们拼接成的两位数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，那么答案就会增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span>，接着我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。继续遍历下一个多米诺骨牌，就可以统计出所有等价的多米诺骨牌对的数量。</p>
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
</math></span> 是多米诺骨牌的数量，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 是多米诺骨牌中拼接成的两位数的最大数量，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numEquivDominoPairs(dominoes [][]int) (ans int) {</span></span>
<span class="line"><span>	cnt := [100]int{}</span></span>
<span class="line"><span>	for _, e := range dominoes {</span></span>
<span class="line"><span>		x := e[0]*10 + e[1]</span></span>
<span class="line"><span>		if e[0] > e[1] {</span></span>
<span class="line"><span>			x = e[1]*10 + e[0]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += cnt[x]</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-equivalent-domino-pairs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1128.Number%20of%20Equivalent%20Domino%20Pairs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1133" tabindex="-1">1133. 最大唯一数 🔒 <a class="header-anchor" href="#q-1133" aria-label="Permalink to &quot;1133. 最大唯一数 🔒 {#q-1133}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>A</code>，请找出并返回在该数组中仅出现一次的最大整数。</p>&#10;&#10;<p>如果不存在这个只出现一次的整数，则返回 -1。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[5,7,3,9,4,9,8,3,1]&#10;<strong>输出：</strong>8&#10;<strong>解释： </strong>&#10;数组中最大的整数是 9，但它在数组中重复出现了。而第二大的整数是 8，它只出现了一次，所以答案是 8。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[9,9,8,8]&#10;<strong>输出：</strong>-1&#10;<strong>解释： </strong>&#10;数组中不存在仅出现一次的整数。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li><code>1 &lt;= A.length &lt;= 2000</code></li>&#10;	<li><code>0 &lt;= A[i] &lt;= 1000</code></li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 倒序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>只出现一次的数中取最大，没有则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。计数后筛选频次为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的键并取最大即可。值域 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span> 时也可用定长数组从大到小扫，语义相同。</p>
</blockquote>
<p>注意到题目的数据范围，我们可以使用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1001</mn>
</math></span> 的数组来统计每个数字出现的次数，然后倒序遍历数组，找到第一个出现次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数字即可。如果没有找到，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为数组中出现的最大数字，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestUniqueNumber(nums []int) int {</span></span>
<span class="line"><span>	cnt := [1001]int{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x := 1000; x >= 0; x-- {</span></span>
<span class="line"><span>		if cnt[x] == 1 {</span></span>
<span class="line"><span>			return x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-unique-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1133.Largest%20Unique%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1138" tabindex="-1">1138. 字母板上的路径 <a class="header-anchor" href="#q-1138" aria-label="Permalink to &quot;1138. 字母板上的路径 {#q-1138}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们从一块字母板上的位置 <code>(0, 0)</code> 出发，该坐标对应的字符为 <code>board[0][0]</code>。</p>&#10;&#10;<p>在本题里，字母板为<code>board = [&quot;abcde&quot;, &quot;fghij&quot;, &quot;klmno&quot;, &quot;pqrst&quot;, &quot;uvwxy&quot;, &quot;z&quot;]</code>，如下所示。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1138.Alphabet%20Board%20Path/images/azboard.png" loading="lazy"></p>&#10;&#10;<p>我们可以按下面的指令规则行动：</p>&#10;&#10;<ul>&#10;	<li>如果方格存在，<code>'U'</code> 意味着将我们的位置上移一行；</li>&#10;	<li>如果方格存在，<code>'D'</code> 意味着将我们的位置下移一行；</li>&#10;	<li>如果方格存在，<code>'L'</code> 意味着将我们的位置左移一列；</li>&#10;	<li>如果方格存在，<code>'R'</code> 意味着将我们的位置右移一列；</li>&#10;	<li><code>'!'</code> 会把在我们当前位置 <code>(r, c)</code> 的字符 <code>board[r][c]</code> 添加到答案中。</li>&#10;</ul>&#10;&#10;<p>（注意，字母板上只存在有字母的位置。）</p>&#10;&#10;<p>返回指令序列，用最小的行动次数让答案和目标 <code>target</code> 相同。你可以返回任何达成目标的路径。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>target = &quot;leet&quot;&#10;<strong>输出：</strong>&quot;DDR!UURRR!!DDD!&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>target = &quot;code&quot;&#10;<strong>输出：</strong>&quot;RR!DDRR!UUL!R!&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= target.length &lt;= 100</code></li>&#10;	<li><code>target</code> 仅含有小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>棋盘按字母行列排列，目标是从上一字母走到下一字母并输出路径。普通格子四向皆可，但 <code v-pre>z</code> 只有上方邻居，若先向下或向右可能走出棋盘。</p>
<p>对每步按「左、上、右、下」的次序移动：先消掉需要左移、上移的量，再右移、下移，从而在到达 <code v-pre>z</code> 之前先离开危险方向，最后追加 <code v-pre>!</code>。</p>
</blockquote>
<p>从起点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 出发，模拟每一步的移动，将每一步的移动结果拼接到答案中。注意移动的方向遵循“左、上、右、下”的顺序。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的长度，需要遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 中的每一个字符。忽略答案的空间消耗，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func alphabetBoardPath(target string) string {</span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	var i, j int</span></span>
<span class="line"><span>	for _, c := range target {</span></span>
<span class="line"><span>		v := int(c - 'a')</span></span>
<span class="line"><span>		x, y := v/5, v%5</span></span>
<span class="line"><span>		for j > y {</span></span>
<span class="line"><span>			j--</span></span>
<span class="line"><span>			ans = append(ans, 'L')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for i > x {</span></span>
<span class="line"><span>			i--</span></span>
<span class="line"><span>			ans = append(ans, 'U')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for j &#x3C; y {</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>			ans = append(ans, 'R')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for i &#x3C; x {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>			ans = append(ans, 'D')</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, '!')</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/alphabet-board-path" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1138.Alphabet%20Board%20Path/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1152" tabindex="-1">1152. 用户网站访问行为分析 🔒 <a class="header-anchor" href="#q-1152" aria-label="Permalink to &quot;1152. 用户网站访问行为分析 🔒 {#q-1152}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个字符串数组 <code>username</code> 和 <code>website</code> 和一个整数数组 <code>timestamp</code> 。给定的数组长度相同，其中元组 <code>[username[i], website[i], timestamp[i]]</code> 表示用户 <code>username[i]</code> 在时间 <code>timestamp[i]</code> 访问了网站 <code>website[i]</code> 。</p>&#10;&#10;<p><strong>访问模式</strong> 是包含三个网站的列表(不一定是完全不同的)。</p>&#10;&#10;<ul>&#10;	<li>例如，<code>[&quot;home&quot;， &quot;away&quot;， &quot;love&quot;]</code>， <code>[&quot;leetcode&quot;， &quot;love&quot;， &quot;leetcode&quot;]</code>，和 <code>[&quot;luffy&quot;， &quot;luffy&quot;， &quot;luffy&quot;]</code> 都是模式。</li>&#10;</ul>&#10;&#10;<p>一种 <strong>访问</strong><strong>模式</strong> 的 <strong>得分</strong> 是访问该模式中所有网站的用户数量，这些网站在该模式中出现的顺序相同。</p>&#10;&#10;<ul>&#10;	<li>例如，如果模式是 <code>[“home”，“away”，“love”] </code>，那么分数就是用户数量 <code>x</code> , <code>x</code> 访问了 “<code>home”</code> ，然后访问了 <code>“away”</code> ，然后访问了 <code>“love” </code>。</li>&#10;	<li>同样，如果模式是 <code>[&quot;leetcode&quot;， &quot;love&quot;， &quot;leetcode&quot;]</code> ，那么分数就是用户数量 <code>x</code> ，使得 <code>x</code> 访问了<code>&quot;leetcode&quot;</code>，然后访问了 <code>&quot;love&quot;</code> ，之后又访问了 <code>&quot;leetcode&quot;</code> 。</li>&#10;	<li>另外，如果模式是 <code>[“luffy”，“luffy”，“luffy”]</code> ，那么分数就是用户数量 <code>x</code> ，使得 <code>x</code> 就可以在不同的时间戳上访问 <code>“luffy”</code> 三次。</li>&#10;</ul>&#10;&#10;<p>返回<em> <strong>得分</strong> 最大的 <strong>访问</strong><strong>模式</strong></em> 。如果有多个访问模式具有相同的最大分数，则返回字典序最小的。</p>&#10;&#10;<p>请注意，模式中的网站不需要连续访问，只需按照模式中出现的顺序访问即可。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>username = [&quot;joe&quot;,&quot;joe&quot;,&quot;joe&quot;,&quot;james&quot;,&quot;james&quot;,&quot;james&quot;,&quot;james&quot;,&quot;mary&quot;,&quot;mary&quot;,&quot;mary&quot;], timestamp = [1,2,3,4,5,6,7,8,9,10], website = [&quot;home&quot;,&quot;about&quot;,&quot;career&quot;,&quot;home&quot;,&quot;cart&quot;,&quot;maps&quot;,&quot;home&quot;,&quot;home&quot;,&quot;about&quot;,&quot;career&quot;]&#10;<strong>输出：</strong>[&quot;home&quot;,&quot;about&quot;,&quot;career&quot;]&#10;<strong>解释：</strong>本例中的元组是:&#10;[&quot;joe&quot;,&quot;home&quot;,1],[&quot;joe&quot;,&quot;about&quot;,2],[&quot;joe&quot;,&quot;career&quot;,3],[&quot;james&quot;,&quot;home&quot;,4],[&quot;james&quot;,&quot;cart&quot;,5],[&quot;james&quot;,&quot;maps&quot;,6],[&quot;james&quot;,&quot;home&quot;,7],[&quot;mary&quot;,&quot;home&quot;,8],[&quot;mary&quot;,&quot;about&quot;,9] 和 [&quot;mary&quot;,&quot;career&quot;,10]。&#10;模式 (&quot;home&quot;, &quot;about&quot;, &quot;career&quot;) 的得分为 2（joe 和 mary）。&#10;模式 (&quot;home&quot;, &quot;cart&quot;, &quot;maps&quot;) 的得分为 1 (james).&#10;模式 (&quot;home&quot;, &quot;cart&quot;, &quot;home&quot;) 的得分为 1 (james).&#10;模式 (&quot;home&quot;, &quot;maps&quot;, &quot;home&quot;) 的得分为 1 (james).&#10;模式 (&quot;cart&quot;, &quot;maps&quot;, &quot;home&quot;) 的得分为 1 (james).&#10;模式 (&quot;home&quot;, &quot;home&quot;, &quot;home&quot;) 的得分为 0(没有用户访问过 home 3次)。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> username = [&quot;ua&quot;,&quot;ua&quot;,&quot;ua&quot;,&quot;ub&quot;,&quot;ub&quot;,&quot;ub&quot;], timestamp = [1,2,3,4,5,6], website = [&quot;a&quot;,&quot;b&quot;,&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]&#10;<strong>输出:</strong> [&quot;a&quot;,&quot;b&quot;,&quot;a&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= username.length &lt;= 50</code></li>&#10;	<li><code>1 &lt;= username[i].length &lt;= 10</code></li>&#10;	<li><code>timestamp.length == username.length</code></li>&#10;	<li><code>1 &lt;= timestamp[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>website.length == username.length</code></li>&#10;	<li><code>1 &lt;= website[i].length &lt;= 10</code></li>&#10;	<li><code>username[i]</code> 和 <code>website[i]</code> 都只含小写字符</li>&#10;	<li>它保证至少有一个用户访问了至少三个网站</li>&#10;	<li>所有元组 <code>[username[i]， timestamp[i]， website[i]</code> 均<strong> 不重复</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>模式按时间顺序的三元组计，同一用户的相同三元组只贡献一次，再在用户间累加。先按时间排序并按用户收集访问序列，对每人枚举有序三下标得到去重三元组，用计数器统计后按次数降序、字典序升序取第一条。</p>
</blockquote>
<p>我们先用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录每个用户访问的网站，然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>，对于每个用户，我们枚举其访问的所有三元组，统计去重三元组的出现次数，最后遍历所有三元组，返回出现次数最多的、字典序最小的三元组。</p>
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
    <mn>3</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是 <code v-pre>username</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mostVisitedPattern(username []string, timestamp []int, website []string) []string {</span></span>
<span class="line"><span>	d := map[string][]pair{}</span></span>
<span class="line"><span>	for i, user := range username {</span></span>
<span class="line"><span>		ts := timestamp[i]</span></span>
<span class="line"><span>		site := website[i]</span></span>
<span class="line"><span>		d[user] = append(d[user], pair{ts, site})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt := map[string]int{}</span></span>
<span class="line"><span>	for _, sites := range d {</span></span>
<span class="line"><span>		m := len(sites)</span></span>
<span class="line"><span>		s := map[string]bool{}</span></span>
<span class="line"><span>		if m > 2 {</span></span>
<span class="line"><span>			sort.Slice(sites, func(i, j int) bool { return sites[i].ts &#x3C; sites[j].ts })</span></span>
<span class="line"><span>			for i := 0; i &#x3C; m-2; i++ {</span></span>
<span class="line"><span>				for j := i + 1; j &#x3C; m-1; j++ {</span></span>
<span class="line"><span>					for k := j + 1; k &#x3C; m; k++ {</span></span>
<span class="line"><span>						s[sites[i].site+","+sites[j].site+","+sites[k].site] = true</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for t := range s {</span></span>
<span class="line"><span>			cnt[t]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mx, t := 0, ""</span></span>
<span class="line"><span>	for p, v := range cnt {</span></span>
<span class="line"><span>		if mx &#x3C; v || (mx == v &#x26;&#x26; p &#x3C; t) {</span></span>
<span class="line"><span>			mx = v</span></span>
<span class="line"><span>			t = p</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return strings.Split(t, ",")</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct {</span></span>
<span class="line"><span>	ts   int</span></span>
<span class="line"><span>	site string</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/analyze-user-website-visit-pattern" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1152.Analyze%20User%20Website%20Visit%20Pattern/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1160" tabindex="-1">1160. 拼写单词 <a class="header-anchor" href="#q-1160" aria-label="Permalink to &quot;1160. 拼写单词 {#q-1160}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个字符串数组 <code>words</code> 和一个字符串 <code>chars</code>。</p>&#10;&#10;<p>如果字符串可以由 <code>chars</code> 中的字符组成（每个字符在 <strong>每个</strong> <code>words</code> 中只能使用一次），则认为它是好的。</p>&#10;&#10;<p>返回 <code>words</code> 中所有好的字符串的长度之和。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;cat&quot;,&quot;bt&quot;,&quot;hat&quot;,&quot;tree&quot;], chars = &quot;atach&quot;&#10;<strong>输出：</strong>6&#10;<strong>解释： </strong>&#10;可以形成字符串 &quot;cat&quot; 和 &quot;hat&quot;，所以答案是 3 + 3 = 6。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>words = [&quot;hello&quot;,&quot;world&quot;,&quot;leetcode&quot;], chars = &quot;welldonehoneyr&quot;&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>&#10;可以形成字符串 &quot;hello&quot; 和 &quot;world&quot;，所以答案是 5 + 5 = 10。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= words[i].length, chars.length &lt;= 100</code></li>&#10;	<li><code>words[i]</code> 和 <code>chars</code> 中都仅包含小写英文字母</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>单词能否由 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 拼出，取决于每种字母的用量不超过库存。对每个单词再扫描 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 会重复计数。先统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 的频次，再对每个词做频次比较：任一字母超出则不可用，否则把词长累加。字母表大小为常数，比较为线性。</p>
</blockquote>
<p>我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 中每个字母出现的次数。</p>
<p>然后遍历字符串数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span>，对于每个字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>c</mi>
</math></span> 统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 中每个字母出现的次数，如果对于每个字母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>c</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2264;</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span>，那么我们就可以用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>h</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>s</mi>
</math></span> 中的字母拼写出字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，否则我们无法拼写出字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>。如果可以拼写出字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，那么我们就将字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 的长度加到答案中。</p>
<p>遍历结束后，即可得到答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>C</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 为题目中所有字符串的长度之和；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集的大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countCharacters(words []string, chars string) (ans int) {</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for _, c := range chars {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, w := range words {</span></span>
<span class="line"><span>		wc := [26]int{}</span></span>
<span class="line"><span>		ok := true</span></span>
<span class="line"><span>		for _, c := range w {</span></span>
<span class="line"><span>			c -= 'a'</span></span>
<span class="line"><span>			wc[c]++</span></span>
<span class="line"><span>			if wc[c] > cnt[c] {</span></span>
<span class="line"><span>				ok = false</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if ok {</span></span>
<span class="line"><span>			ans += len(w)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1160.Find%20Words%20That%20Can%20Be%20Formed%20by%20Characters/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1165" tabindex="-1">1165. 单行键盘 🔒 <a class="header-anchor" href="#q-1165" aria-label="Permalink to &quot;1165. 单行键盘 🔒 {#q-1165}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们定制了一款特殊的键盘，所有的键都 <strong>排列在一行上</strong> 。</p>&#10;&#10;<p>给定一个长度为 <code>26</code> 的字符串 <code>keyboard</code> ，来表示键盘的布局(索引从 <code>0</code> 到 <code>25</code> )。一开始，你的手指在索引 <code>0</code> 处。要输入一个字符，你必须把你的手指移动到所需字符的索引处。手指从索引 <code>i</code> 移动到索引 <code>j</code> 所需要的时间是 <code>|i - j|</code>。</p>&#10;&#10;<p>您需要输入一个字符串 <code>word</code> 。写一个函数来计算用一个手指输入需要多少时间。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>keyboard = &quot;abcdefghijklmnopqrstuvwxyz&quot;, word = &quot;cba&quot;&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>从 0 号键移动到 2 号键来输出 'c'，又移动到 1 号键来输出 'b'，接着移动到 0 号键来输出 'a'。&#10;总用时 = 2 + 1 + 1 = 4. &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>keyboard = &quot;pqrstuvwxyzabcdefghijklmno&quot;, word = &quot;leetcode&quot;&#10;<strong>输出：</strong>73&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>keyboard.length == 26</code></li>&#10;	<li><code>keyboard</code> 按某种特定顺序排列，并包含每个小写英文字母一次。</li>&#10;	<li><code>1 &lt;= word.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>word[i]</code> 为小写英文字母</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表或数组 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次移动代价是键盘上两字符下标之差的绝对值。先把键盘字符映射到位置，再从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 起依次累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mtext mathvariant="italic">pos</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 并更新手指位置。不必每次在键盘串里线性查找。</p>
</blockquote>
<p>我们可以用哈希表或者一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
</math></span> 来存储每个字符在键盘上的位置，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 在键盘上的位置。</p>
<p>然后我们遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
</math></span>，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 记录当前手指所在的位置，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。每次计算当前字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 在键盘上的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，并将答案增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span>，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>。继续遍历下一个字符，直到遍历完整个字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
</math></span>。</p>
<p>遍历完字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
</math></span> 之后，即可得到答案。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
</math></span> 的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func calculateTime(keyboard string, word string) (ans int) {</span></span>
<span class="line"><span>	pos := [26]int{}</span></span>
<span class="line"><span>	for i, c := range keyboard {</span></span>
<span class="line"><span>		pos[c-'a'] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	i := 0</span></span>
<span class="line"><span>	for _, c := range word {</span></span>
<span class="line"><span>		j := pos[c-'a']</span></span>
<span class="line"><span>		ans += abs(i - j)</span></span>
<span class="line"><span>		i = j</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/single-row-keyboard" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1165.Single-Row%20Keyboard/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1169" tabindex="-1">1169. 查询无效交易 <a class="header-anchor" href="#q-1169" aria-label="Permalink to &quot;1169. 查询无效交易 {#q-1169}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果出现下述两种情况，交易 <strong>可能无效</strong>：</p>&#10;&#10;<ul>&#10;	<li>交易金额超过 <code>$1000</code></li>&#10;	<li>或者，它和 <strong>另一个城市</strong> 中 <strong>同名</strong> 的另一笔交易相隔不超过 <code>60</code> 分钟（包含 60 分钟整）</li>&#10;</ul>&#10;&#10;<p>给定字符串数组交易清单 <code>transaction</code> 。每个交易字符串 <code>transactions[i]</code> 由一些用逗号分隔的值组成，这些值分别表示交易的名称，时间（以分钟计），金额以及城市。</p>&#10;&#10;<p>返回 <code>transactions</code>，返回可能无效的交易列表。你可以按 <strong>任何顺序</strong> 返回答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>transactions = [&quot;alice,20,800,mtv&quot;,&quot;alice,50,100,beijing&quot;]&#10;<strong>输出：</strong>[&quot;alice,20,800,mtv&quot;,&quot;alice,50,100,beijing&quot;]&#10;<strong>解释：</strong>第一笔交易是无效的，因为第二笔交易和它间隔不超过 60 分钟、名称相同且发生在不同的城市。同样，第二笔交易也是无效的。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>transactions = [&quot;alice,20,800,mtv&quot;,&quot;alice,50,1200,mtv&quot;]&#10;<strong>输出：</strong>[&quot;alice,50,1200,mtv&quot;]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>transactions = [&quot;alice,20,800,mtv&quot;,&quot;bob,50,1200,mtv&quot;]&#10;<strong>输出：</strong>[&quot;bob,50,1200,mtv&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>transactions.length &lt;= 1000</code></li>&#10;	<li>每笔交易 <code>transactions[i]</code> 按 <code>&quot;{name},{time},{amount},{city}&quot;</code> 的格式进行记录</li>&#10;	<li>每个交易名称 <code>{name}</code> 和城市 <code>{city}</code> 都由小写英文字母组成，长度在 <code>1</code> 到 <code>10</code> 之间</li>&#10;	<li>每个交易时间 <code>{time}</code> 由一些数字组成，表示一个 <code>0</code> 到 <code>1000</code> 之间的整数</li>&#10;	<li>每笔交易金额 <code>{amount}</code> 由一些数字组成，表示一个 <code>0</code> 到 <code>2000</code> 之间的整数</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一笔交易无效当且仅当金额超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>，或同名不同城且时间差不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span>。按姓名分组记录 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">time</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">city</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">index</mtext>
  <mo stretchy="false">)</mo>
</math></span>，新交易与同组已有记录比较即可标出双方。金额条件单独判定。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 不大，组内两两检查可接受。</p>
</blockquote>
<p>遍历交易列表，对于每笔交易，如果金额大于 1000，或者同名且城市不同且时间间隔不超过 60 分钟，则将其加入答案。</p>
<p>具体地，我们使用哈希表 <code v-pre>d</code> 记录每个交易，其中键为交易名称，值为一个列表，列表中的每个元素为一个三元组 <code v-pre>(time, city, index)</code>，表示在 <code v-pre>time</code> 时刻在 <code v-pre>city</code> 城市进行了编号为 <code v-pre>index</code> 的交易。同时，我们使用哈希表 <code v-pre>idx</code> 记录答案中的交易编号。</p>
<p>遍历交易列表，对于每笔交易，我们首先将其加入哈希表 <code v-pre>d</code> 中，然后判断其金额是否大于 1000，如果是，则将其编号加入答案中。然后我们遍历哈希表 <code v-pre>d</code> 中的交易，如果交易名称相同且城市不同且时间间隔不超过 60 分钟，则将其编号加入答案中。</p>
<p>最后，我们遍历答案中的交易编号，将其对应的交易加入答案即可。</p>
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
</math></span> 为交易列表的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func invalidTransactions(transactions []string) (ans []string) {</span></span>
<span class="line"><span>	d := map[string][]tuple{}</span></span>
<span class="line"><span>	idx := map[int]bool{}</span></span>
<span class="line"><span>	for i, x := range transactions {</span></span>
<span class="line"><span>		e := strings.Split(x, ",")</span></span>
<span class="line"><span>		name := e[0]</span></span>
<span class="line"><span>		time, _ := strconv.Atoi(e[1])</span></span>
<span class="line"><span>		amount, _ := strconv.Atoi(e[2])</span></span>
<span class="line"><span>		city := e[3]</span></span>
<span class="line"><span>		d[name] = append(d[name], tuple{time, city, i})</span></span>
<span class="line"><span>		if amount > 1000 {</span></span>
<span class="line"><span>			idx[i] = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for _, item := range d[name] {</span></span>
<span class="line"><span>			if city != item.city &#x26;&#x26; abs(time-item.t) &#x3C;= 60 {</span></span>
<span class="line"><span>				idx[i], idx[item.i] = true, true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := range idx {</span></span>
<span class="line"><span>		ans = append(ans, transactions[i])</span></span>
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
<span class="line"><span>type tuple struct {</span></span>
<span class="line"><span>	t    int</span></span>
<span class="line"><span>	city string</span></span>
<span class="line"><span>	i    int</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/invalid-transactions" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1169.Invalid%20Transactions/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1181" tabindex="-1">1181. 前后拼接 🔒 <a class="header-anchor" href="#q-1181" aria-label="Permalink to &quot;1181. 前后拼接 🔒 {#q-1181}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个「短语」列表 <code>phrases</code>，请你帮忙按规则生成拼接后的「新短语」列表。</p>&#10;&#10;<p>「短语」（phrase）是仅由小写英文字母和空格组成的字符串。「短语」的开头和结尾都不会出现空格，「短语」中的空格不会连续出现。</p>&#10;&#10;<p>「前后拼接」（Before and After puzzles）是合并两个「短语」形成「新短语」的方法。我们规定拼接时，<strong>第一个短语的最后一个单词</strong> 和 <strong>第二个短语的第一个单词</strong> 必须相同。</p>&#10;&#10;<p>返回每两个「短语」 <code>phrases[i]</code> 和 <code>phrases[j]</code>（<code>i != j</code>）进行「前后拼接」得到的「新短语」。</p>&#10;&#10;<p>注意，两个「短语」拼接时的顺序也很重要，我们需要同时考虑这两个「短语」。另外，同一个「短语」可以多次参与拼接，但「新短语」不能再参与拼接。</p>&#10;&#10;<p>请你按字典序排列并返回「新短语」列表，列表中的字符串应该是 <strong>不重复的</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong>phrases = [&quot;writing code&quot;,&quot;code rocks&quot;]</p>&#10;&#10;<p><strong>输出：</strong>[&quot;writing code rocks&quot;]</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong>phrases = [&quot;mission statement&quot;, &quot;a quick bite to eat&quot;,   &quot;a chip off the old block&quot;,   &quot;chocolate bar&quot;,   &quot;mission impossible&quot;,   &quot;a man on a mission&quot;,   &quot;block party&quot;,   &quot;eat my words&quot;,   &quot;bar of soap&quot;]</p>&#10;&#10;<p><strong>输出：</strong>[&quot;a chip off the old block party&quot;,   &quot;a man on a mission impossible&quot;,   &quot;a man on a mission statement&quot;,   &quot;a quick bite to eat my words&quot;, &quot;chocolate bar of soap&quot;]</p>&#10;</div>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong>phrases = [&quot;a&quot;,&quot;b&quot;,&quot;a&quot;]</p>&#10;&#10;<p><strong>输出：</strong>[&quot;a&quot;]</p>&#10;</div>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>phrases = [&quot;ab ba&quot;,&quot;ba ab&quot;,&quot;ab ba&quot;]</span></p>&#10;&#10;<p><span><b>输出：</b>[&quot;ab ba ab&quot;,&quot;ba ab ba&quot;]</span></p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= phrases.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= phrases[i].length &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>两条不同短语可拼接，当且仅当前者末词等于后者首词，重叠词只保留一次。短语数量不大，预处理首尾词后枚举有序对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，命中则拼接并放入集合去重，最后按字典序输出。</p>
</blockquote>
<p>我们先遍历列表 <code v-pre>phrases</code>，将每个短语的首尾单词存储数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>s</mi>
</math></span> 中，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 分别表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个短语的首尾单词。</p>
<p>接下来，我们枚举所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo>&#x2208;</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2260;</mo>
  <mi>j</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>p</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，那么我们就可以将第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个短语和第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个短语进行拼接，得到的新短语为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>p</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mo stretchy="false">(</mo>
  <mi>p</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>:</mo>
  <mo stretchy="false">]</mo>
</math></span>，将新短语加入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中。</p>
<p>最后，我们将哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 转化为数组并排序，即可得到答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别表示数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 的长度和每个短语的平均长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func beforeAndAfterPuzzles(phrases []string) []string {</span></span>
<span class="line"><span>	n := len(phrases)</span></span>
<span class="line"><span>	ps := make([][2]string, n)</span></span>
<span class="line"><span>	for i, p := range phrases {</span></span>
<span class="line"><span>		ws := strings.Split(p, " ")</span></span>
<span class="line"><span>		ps[i] = [2]string{ws[0], ws[len(ws)-1]}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := map[string]bool{}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if i != j &#x26;&#x26; ps[i][1] == ps[j][0] {</span></span>
<span class="line"><span>				s[phrases[i]+phrases[j][len(ps[j][0]):]] = true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]string, 0, len(s))</span></span>
<span class="line"><span>	for k := range s {</span></span>
<span class="line"><span>		ans = append(ans, k)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Strings(ans)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/before-and-after-puzzle" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1181.Before%20and%20After%20Puzzle/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1189" tabindex="-1">1189. “气球” 的最大数量 <a class="header-anchor" href="#q-1189" aria-label="Permalink to &quot;1189. “气球” 的最大数量 {#q-1189}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：哈希表、字符串、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>text</code>，你需要使用 <code>text</code> 中的字母来拼凑尽可能多的单词 <strong>&quot;balloon&quot;（气球）</strong>。</p>&#10;&#10;<p>字符串 <code>text</code> 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 <strong>&quot;balloon&quot;</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1189.Maximum%20Number%20of%20Balloons/images/1536_ex1_upd.jpeg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text = &quot;nlaebolko&quot;&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1100-1199/1189.Maximum%20Number%20of%20Balloons/images/1536_ex2_upd.jpeg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text = &quot;loonbalxballpoon&quot;&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>text = &quot;leetcode&quot;&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= text.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>text</code> 全部由小写英文字母组成</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>注意：</strong>本题与 <a href="https://leetcode.cn/problems/rearrange-characters-to-make-target-string/" target="_blank" rel="noopener noreferrer">2287. 重排字符形成目标字符串</a> 相同。</p></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><code v-pre>balloon</code> 各字母需求为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>,</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>o</mi>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mi>n</mi>
</math></span>。统计 <code v-pre>text</code> 频次后把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>o</mi>
</math></span> 折半，再在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>,</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mi>o</mi>
  <mo>,</mo>
  <mi>n</mi>
</math></span> 上取最小，即最多能拼出的单词数。不必反复从串中删除。</p>
</blockquote>
<p>我们统计字符串 <code v-pre>text</code> 中每个字母出现的次数，然后将其中字母 <code v-pre>'o'</code> 和 <code v-pre>'l'</code> 的出现次数分别除以 2，这是因为单词 <code v-pre>balloon</code> 中字母 <code v-pre>'o'</code> 和 <code v-pre>'l'</code> 都出现了 2 次。</p>
<p>接着，我们遍历单词 <code v-pre>balon</code> 中的每个字母，统计每个字母在字符串 <code v-pre>text</code> 中出现的次数的最小值，这个最小值就是单词 <code v-pre>balloon</code> 在字符串 <code v-pre>text</code> 中出现的最大次数。</p>
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
</math></span> 为字符串 <code v-pre>text</code> 的长度；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxNumberOfBalloons(text string) int {</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for _, c := range text {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cnt['l'-'a'] >>= 1</span></span>
<span class="line"><span>	cnt['o'-'a'] >>= 1</span></span>
<span class="line"><span>	ans := 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	for _, c := range "balon" {</span></span>
<span class="line"><span>		if x := cnt[c-'a']; ans > x {</span></span>
<span class="line"><span>			ans = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-number-of-balloons" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1189.Maximum%20Number%20of%20Balloons/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const u=s(o,[["render",p]]);export{d as __pageData,u as default};
