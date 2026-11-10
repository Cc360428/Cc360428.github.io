import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 贪心（2）","description":"贪心分类，第 649–984 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 贪心（2）","description":"贪心分类，第 649–984 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"贪心分类，第 649–984 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 贪心（1）","link":"/principles/algorithms/leetcode-go/greedy-01"},"next":{"text":"LeetCode Go · 贪心（3）","link":"/principles/algorithms/leetcode-go/greedy-03"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 贪心（1）","link":"/principles/algorithms/leetcode-go/greedy-01"},"next":{"text":"LeetCode Go · 贪心（3）","link":"/principles/algorithms/leetcode-go/greedy-03"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/greedy-02.md","filePath":"principles/algorithms/leetcode-go/greedy-02.md"}'),p={name:"principles/algorithms/leetcode-go/greedy-02.md"};function m(o,n,l,i,c,h){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-贪心-2" tabindex="-1">LeetCode Go · 贪心（2） <a class="header-anchor" href="#leetcode-go-·-贪心-2" aria-label="Permalink to &quot;LeetCode Go · 贪心（2）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-649" tabindex="-1">649. Dota2 参议院 <a class="header-anchor" href="#q-649" aria-label="Permalink to &quot;649. Dota2 参议院 {#q-649}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、队列、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Dota2 的世界里有两个阵营：<code>Radiant</code>（天辉）和 <code>Dire</code>（夜魇）</p>&#10;&#10;<p>Dota2 参议院由来自两派的参议员组成。现在参议院希望对一个 Dota2 游戏里的改变作出决定。他们以一个基于轮为过程的投票进行。在每一轮中，每一位参议员都可以行使两项权利中的 <strong>一 </strong>项：</p>&#10;&#10;<ul>&#10;	<li><strong>剥夺一名参议员的权利</strong>：一名参议员可以使另一名参议员在本轮及所有后续轮次中失去所有权利。</li>&#10;	<li><strong>宣布胜利</strong>：如果参议员发现有权利投票的参议员都是 <strong>同一个阵营的</strong> ，他可以宣布胜利并决定在游戏中的有关变化。</li>&#10;</ul>&#10;&#10;<p>给你一个字符串 <code>senate</code> 代表每个参议员的阵营。字母 <code>'R'</code> 和 <code>'D'</code>分别代表了 <code>Radiant</code>（天辉）和 <code>Dire</code>（夜魇）。然后，如果有 <code>n</code> 个参议员，给定字符串的大小将是 <code>n</code>。</p>&#10;&#10;<p>以轮为基础的过程从给定顺序的第一个参议员开始到最后一个参议员结束。这一过程将持续到投票结束。所有失去权利的参议员将在过程中被跳过。</p>&#10;&#10;<p>假设每一位参议员都足够聪明，会为自己的政党做出最好的策略，你需要预测哪一方最终会宣布胜利并在 Dota2 游戏中决定改变。输出应该是 <code>&quot;Radiant&quot;</code> 或 <code>&quot;Dire&quot;</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>senate = &quot;RD&quot;&#10;<strong>输出：</strong>&quot;Radiant&quot;&#10;<strong>解释：&#10;</strong><code>第 1 轮时，第一个参议员来自 Radiant 阵营，他可以使用第一项权利让第二个参议员失去所有权利。&#10;这一轮中，第二个参议员将会被跳过，因为他的权利被禁止了。&#10;第 2 轮时，第一个参议员可以宣布胜利，因为他是唯一一个有投票权的人</code>。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>senate = &quot;RDD&quot;&#10;<strong>输出：</strong>&quot;Dire&quot;&#10;<strong>解释：</strong>&#10;第 1 轮时，第一个<code>来自 Radiant 阵营的</code>参议员可以使用第一项权利禁止第二个参议员的权利。&#10;<code>这一轮中，</code>第二个<code>来自 Dire 阵营的</code>参议员会将被跳过，因为他的权利被禁止了。&#10;<code>这一轮中，</code>第三个<code>来自 Dire 阵营的</code>参议员可以使用他的第一项权利禁止第一个参议员的权利。&#10;因此在第二轮只剩下第三个参议员拥有投票的权利,于是他可以宣布胜利&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == senate.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>senate[i]</code> 为 <code>'R'</code> 或 <code>'D'</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：队列 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>参议员按顺序行使「禁止下一名对方」的权利，直到一方清空。直接在字符串里反复删人，最坏接近平方。</p>
<p>两队下标分别入队。队首较小者先手，把对方弹出，自己下标加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 回到队尾表示下一轮。一队空即胜。</p>
</blockquote>
<p>我们创建两个队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mi>r</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mi>d</mi>
</math></span>，分别记录天辉和夜魇阵营的参议员的下标。然后我们开始进行模拟，每一轮各从队首取出一位参议员，然后根据他的阵营进行不同的操作：</p>
<ul>
<li>如果天辉阵营的参议员编号小于夜魇阵营的参议员编号，那么该天辉阵营的参议员就可以将夜魇阵营的参议员票权永久取消，我们将天辉阵营的参议员的下标加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 后重新放回队尾，表示该参议员会参与下一轮的投票。</li>
<li>如果夜魇阵营的参议员编号小于天辉阵营的参议员编号，那么该夜魇阵营的参议员就可以将天辉阵营的参议员票权永久取消，我们将夜魇阵营的参议员的下标加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 后重新放回队尾，表示该参议员会参与下一轮的投票。</li>
</ul>
<p>最后当队列中只剩一种阵营的参议员时，该阵营的参议员获胜。</p>
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
</math></span> 为参议员的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func predictPartyVictory(senate string) string {</span></span>
<span class="line"><span>	n := len(senate)</span></span>
<span class="line"><span>	qr := []int{}</span></span>
<span class="line"><span>	qd := []int{}</span></span>
<span class="line"><span>	for i, c := range senate {</span></span>
<span class="line"><span>		if c == 'R' {</span></span>
<span class="line"><span>			qr = append(qr, i)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			qd = append(qd, i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for len(qr) > 0 &#x26;&#x26; len(qd) > 0 {</span></span>
<span class="line"><span>		r, d := qr[0], qd[0]</span></span>
<span class="line"><span>		qr, qd = qr[1:], qd[1:]</span></span>
<span class="line"><span>		if r &#x3C; d {</span></span>
<span class="line"><span>			qr = append(qr, r+n)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			qd = append(qd, d+n)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(qr) > 0 {</span></span>
<span class="line"><span>		return "Radiant"</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return "Dire"</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/dota2-senate" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0649.Dota2%20Senate/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-659" tabindex="-1">659. 分割数组为连续子序列 <a class="header-anchor" href="#q-659" aria-label="Permalink to &quot;659. 分割数组为连续子序列 {#q-659}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个按 <strong>非递减顺序</strong> 排列的整数数组 <code>nums</code> 。</p>&#10;&#10;<p>请你判断是否能在将 <code>nums</code> 分割成 <strong>一个或多个子序列</strong> 的同时满足下述 <strong>两个</strong> 条件：</p>&#10;&#10;<div>&#10;<div>&#10;<ul>&#10;	<li>每个子序列都是一个 <strong>连续递增序列</strong>（即，每个整数 <strong>恰好</strong> 比前一个整数大 <strong>1</strong> ）。</li>&#10;	<li>所有子序列的长度 <strong>至少</strong> 为 <code>3</code><strong> </strong>。</li>&#10;</ul>&#10;&#10;<p>如果可以分割 <code>nums</code> 并满足上述条件，则返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>&#10;</div>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,3,4,5]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>nums 可以分割成以下子序列：&#10;[<em><strong>1</strong></em>,<em><strong>2</strong></em>,<em><strong>3</strong></em>,3,4,5] --> 1, 2, 3&#10;[1,2,3,<em><strong>3</strong></em>,<em><strong>4</strong></em>,<em><strong>5</strong></em>] --> 3, 4, 5&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,3,4,4,5,5]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>nums 可以分割成以下子序列：&#10;[<em><strong>1</strong></em>,<em><strong>2</strong></em>,<em><strong>3</strong></em>,3,<em><strong>4</strong></em>,4,<em><strong>5</strong></em>,5] --> 1, 2, 3, 4, 5&#10;[1,2,3,<em><strong>3</strong></em>,4,<em><strong>4</strong></em>,5,<em><strong>5</strong></em>] --> 3, 4, 5&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3,4,4,5]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>无法将 nums 分割成长度至少为 3 的连续递增子序列。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><b>提示：</b></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>&#10;	<li><code>nums</code> 按非递减顺序排列</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要把数组拆成若干长度至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 的连续递增子序列。贪心「总是开新序列」可能让短序列无法延长。</p>
<p>哈希表把结尾为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 的各序列长度放进小根堆。当前值优先接到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的最短序列上，否则新开长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的序列。最后堆顶都不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 则可行。</p>
</blockquote>
<p>由于题目中的子序列是由连续整数组成的，因此，只要知道子序列的最后一个数以及子序列的长度，就能够确定子序列。</p>
<p>我们可以使用哈希表存储每个子序列的最后一个数，使用优先队列存储当前数作为子序列的末尾时，子序列的长度。我们要优先选择长度较短的子序列，因此使用小根堆。</p>
<p>遍历数组 <code v-pre>nums</code>，对于当前遍历到的数 <code v-pre>num</code>，如果 <code v-pre>num</code> 不能加入到任何子序列中，那么我们就创建一个新的子序列，长度为 1；否则，我们就将 <code v-pre>num</code> 加入到某个子序列中，具体的子序列是哪个呢？我们可以从 <code v-pre>num - 1</code> 对应的子序列中取出一个长度最短的子序列，将 <code v-pre>num</code> 加入到该子序列中，然后将该子序列的最后一个数更新为 <code v-pre>num</code>，同时将该子序列的长度加 1。</p>
<p>如果我们遍历完数组 <code v-pre>nums</code>，优先队列中所有的子序列的长度都不小于 3，那么我们就可以将数组 <code v-pre>nums</code> 分割成若干个子序列，否则，我们就无法将数组 <code v-pre>nums</code> 分割成若干个子序列。</p>
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
</math></span> 是数组 <code v-pre>nums</code> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isPossible(nums []int) bool {</span></span>
<span class="line"><span>	d := map[int]*hp{}</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		if d[v] == nil {</span></span>
<span class="line"><span>			d[v] = new(hp)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if h := d[v-1]; h != nil {</span></span>
<span class="line"><span>			heap.Push(d[v], heap.Pop(h).(int)+1)</span></span>
<span class="line"><span>			if h.Len() == 0 {</span></span>
<span class="line"><span>				delete(d, v-1)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			heap.Push(d[v], 1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, q := range d {</span></span>
<span class="line"><span>		if q.IntSlice[0] &#x3C; 3 {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *hp) Push(v any) { h.IntSlice = append(h.IntSlice, v.(int)) }</span></span>
<span class="line"><span>func (h *hp) Pop() any {</span></span>
<span class="line"><span>	a := h.IntSlice</span></span>
<span class="line"><span>	v := a[len(a)-1]</span></span>
<span class="line"><span>	h.IntSlice = a[:len(a)-1]</span></span>
<span class="line"><span>	return v</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/split-array-into-consecutive-subsequences" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0659.Split%20Array%20into%20Consecutive%20Subsequences/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-670" tabindex="-1">670. 最大交换 <a class="header-anchor" href="#q-670" aria-label="Permalink to &quot;670. 最大交换 {#q-670}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个非负整数，你<strong>至多</strong>可以交换一次数字中的任意两位。返回你能得到的最大值。</p>&#10;&#10;<p><strong>示例 1 :</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> 2736&#10;<strong>输出:</strong> 7236&#10;<strong>解释:</strong> 交换数字2和数字7。&#10;</pre>&#10;&#10;<p><strong>示例 2 :</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> 9973&#10;<strong>输出:</strong> 9973&#10;<strong>解释:</strong> 不需要交换。&#10;</pre>&#10;&#10;<p><strong>注意:</strong></p>&#10;&#10;<ol>&#10;	<li>给定数字的范围是 [0, 10<sup>8</sup>]</li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>至多交换两位使整数最大。枚举所有交换是平方级，位数很少也能更好。</p>
<p>从右往左记下每位右侧最大值下标；再从左往右找第一处 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 并交换。高位尽早换成更大数字。</p>
</blockquote>
<p>我们先将数字转为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，然后从右往左遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，用数组或哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录每个数字右侧的最大数字的位置（可以是数字本身的位置）。</p>
<p>接着从左到右遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>，则进行交换，并退出遍历的过程。</p>
<p>最后将字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 转为数字，即为答案。</p>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
</math></span> 的取值范围。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumSwap(num int) int {</span></span>
<span class="line"><span>	s := []byte(strconv.Itoa(num))</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	d := make([]int, n)</span></span>
<span class="line"><span>	for i := range d {</span></span>
<span class="line"><span>		d[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := n - 2; i >= 0; i-- {</span></span>
<span class="line"><span>		if s[i] &#x3C;= s[d[i+1]] {</span></span>
<span class="line"><span>			d[i] = d[i+1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j := range d {</span></span>
<span class="line"><span>		if s[i] &#x3C; s[j] {</span></span>
<span class="line"><span>			s[i], s[j] = s[j], s[i]</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, _ := strconv.Atoi(string(s))</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-swap" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0670.Maximum%20Swap/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-680" tabindex="-1">680. 验证回文串 II <a class="header-anchor" href="#q-680" aria-label="Permalink to &quot;680. 验证回文串 II {#q-680}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、双指针、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code>，<strong>最多</strong> 可以从中删除一个字符。</p>&#10;&#10;<p>请你判断 <code>s</code> 是否能成为回文字符串：如果能，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;aba&quot;&#10;<strong>输出：</strong>true&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abca&quot;&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>你可以删除字符 'c' 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abc&quot;&#10;<strong>输出：</strong>false</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最多删一个字符使串成为回文。枚举删除位置再检查是平方级， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。</p>
<p>两端指针相遇前若失配，只需再验证「删左」或「删右」两段是否回文。至多一次分歧，整体仍线性。</p>
</blockquote>
<p>我们用两个指针分别指向字符串的左右两端，每次判断两个指针指向的字符是否相同，如果不相同，则判断删除左指针对应的字符后字符串是否是回文字符串，或者判断删除右指针对应的字符后字符串是否是回文字符串。如果两个指针指向的字符相同，则将左右指针都往中间移动一位，直到两个指针相遇为止。</p>
<p>如果遍历结束，都没有遇到指针指向的字符不相同的情况，那么字符串本身就是一个回文字符串，返回 <code v-pre>true</code> 即可。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func validPalindrome(s string) bool {</span></span>
<span class="line"><span>	check := func(i, j int) bool {</span></span>
<span class="line"><span>		for ; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>			if s[i] != s[j] {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j := 0, len(s)-1; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>		if s[i] != s[j] {</span></span>
<span class="line"><span>			return check(i+1, j) || check(i, j-1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/valid-palindrome-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0600-0699/0680.Valid%20Palindrome%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-738" tabindex="-1">738. 单调递增的数字 <a class="header-anchor" href="#q-738" aria-label="Permalink to &quot;738. 单调递增的数字 {#q-738}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>当且仅当每个相邻位数上的数字 <code>x</code> 和 <code>y</code> 满足 <code>x &lt;= y</code> 时，我们称这个整数是<strong>单调递增</strong>的。</p>&#10;&#10;<p>给定一个整数 <code>n</code> ，返回 <em>小于或等于 <code>n</code> 的最大数字，且数字呈 <strong>单调递增</strong></em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> n = 10&#10;<strong>输出:</strong> 9&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> n = 1234&#10;<strong>输出:</strong> 1234&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> n = 332&#10;<strong>输出:</strong> 299&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= n &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的最大各位非降数。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 向下逐个检查位数过多；需要直接改数字本身。</p>
<p>从高位找到第一处下降后，若只把后面改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，前面可能仍大于原数。应把下降处左侧连续偏大的位都减一，直到重新非降，再把右侧全部置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，得到的是不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的最大非降数。</p>
<p>先扫到第一处 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，再回退减一，最后把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 之后写成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>。位数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>从数字 <code v-pre>n</code> 的高位开始，找到第一个不满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>n</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>&#x2264;</mo>
  <msub>
    <mi>n</mi>
    <mi>i</mi>
  </msub>
</math></span> 的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。</p>
<p>然后，从后往前，只要发现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>n</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>&gt;</mo>
  <msub>
    <mi>n</mi>
    <mi>i</mi>
  </msub>
</math></span>，就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>n</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
</math></span> 减 1。</p>
<p>最后将位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 之后的所有数字都置为 9 即可。</p>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func monotoneIncreasingDigits(n int) int {</span></span>
<span class="line"><span>	s := []byte(strconv.Itoa(n))</span></span>
<span class="line"><span>	i := 1</span></span>
<span class="line"><span>	for ; i &#x3C; len(s) &#x26;&#x26; s[i-1] &#x3C;= s[i]; i++ {</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if i &#x3C; len(s) {</span></span>
<span class="line"><span>		for ; i > 0 &#x26;&#x26; s[i-1] > s[i]; i-- {</span></span>
<span class="line"><span>			s[i-1]--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>		for ; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>			s[i] = '9'</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans, _ := strconv.Atoi(string(s))</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/monotone-increasing-digits" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0738.Monotone%20Increasing%20Digits/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-757" tabindex="-1">757. 设置交集大小至少为2 <a class="header-anchor" href="#q-757" aria-label="Permalink to &quot;757. 设置交集大小至少为2 {#q-757}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二维整数数组 <code>intervals</code> ，其中 <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 表示从 <code>start<sub>i</sub></code> 到 <code>end<sub>i</sub></code> 的所有整数，包括 <code>start<sub>i</sub></code> 和 <code>end<sub>i</sub></code> 。</p>&#10;&#10;<p><strong>包含集合</strong> 是一个名为 <code>nums</code> 的数组，并满足 <code>intervals</code> 中的每个区间都 <strong>至少</strong> 有 <strong>两个</strong> 整数在 <code>nums</code> 中。</p>&#10;&#10;<ul>&#10;	<li>例如，如果 <code>intervals = [[1,3], [3,7], [8,9]]</code> ，那么 <code>[1,2,4,7,8,9]</code> 和 <code>[2,3,4,8,9]</code> 都符合 <strong>包含集合</strong> 的定义。</li>&#10;</ul>&#10;&#10;<p>返回包含集合可能的最小大小。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>intervals = [[1,3],[3,7],[8,9]]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>nums = [2, 3, 4, 8, 9].&#10;可以证明不存在元素数量为 4 的包含集合。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>intervals = [[1,3],[1,4],[2,5],[3,5]]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>nums = [2, 3, 4].&#10;可以证明不存在元素数量为 2 的包含集合。 &#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>intervals = [[1,2],[2,3],[2,4],[4,5]]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>nums = [1, 2, 3, 4, 5].&#10;可以证明不存在元素数量为 4 的包含集合。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= intervals.length &lt;= 3000</code></li>&#10;	<li><code>intervals[i].length == 2</code></li>&#10;	<li><code>0 &lt;= start<sub>i</sub> &lt; end<sub>i</sub> &lt;= 10<sup>8</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>选尽量少的点，使每个区间至少盖住两个。区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3000</mn>
</math></span> 个，枚举子集不可行。应让点尽量靠右，以便被后续区间复用。</p>
<p>按右端升序、同右端按左端降序排序后，先处理更「紧」的区间。维护已放置的最后两点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&lt;</mo>
  <mi>e</mi>
</math></span>。</p>
<p>区间已含两点则跳过；只含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
</math></span> 则在右端补 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>；两点都不含则放 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>。这样每步补点最少且最靠右。</p>
</blockquote>
<p>我们希望在数轴上选出尽可能少的整数点，使得每个区间都至少包含两个点。一个经典而有效的策略是按照区间的右端点进行排序，并尽量让已选取的点位于区间的右侧，以便这些点能覆盖更多后续区间。</p>
<p>首先将所有区间按照如下规则排序：</p>
<ol>
<li>按右端点从小到大；</li>
<li>若右端点相同，按左端点从大到小。</li>
</ol>
<p>这样排序的原因是：右端点越小的区间“可操作空间”越少，应优先满足；当右端点相同时，左端点更大的区间更窄，更应优先被处理。</p>
<p>随后，我们使用两个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
</math></span> 分别记录当前所有已处理区间所共同拥有的 <strong>倒数第二个点</strong> 和 <strong>最后一个点</strong>。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mi>e</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，表示还没有放置任何点。</p>
<p>接下来依次处理排序后的区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">]</mo>
</math></span>，根据它与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">{</mo>
  <mi>s</mi>
  <mo>,</mo>
  <mi>e</mi>
  <mo fence="false" stretchy="false">}</mo>
</math></span> 的关系分三种情况讨论：</p>
<ol>
<li>
<p><strong>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x2264;</mo>
  <mi>s</mi>
</math></span></strong>：
当前区间已包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
</math></span> 两个点，无需额外放点。</p>
</li>
<li>
<p><strong>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&lt;</mo>
  <mi>a</mi>
  <mo>&#x2264;</mo>
  <mi>e</mi>
</math></span></strong>：
当前区间只包含一个点（即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>e</mi>
</math></span>），还需要补一个点。为了让新点对后续区间最有帮助，我们选择在区间最右侧的点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>。此时更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">ans</mtext>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，并将新的两点设为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">{</mo>
  <mi>e</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo fence="false" stretchy="false">}</mo>
</math></span>。</p>
</li>
<li>
<p><strong>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&gt;</mo>
  <mi>e</mi>
</math></span></strong>：
当前区间完全不包含已有的两个点，需要补两个点。最优选择是在区间最右侧放置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">{</mo>
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>b</mi>
  <mo fence="false" stretchy="false">}</mo>
</math></span>。此时更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">ans</mtext>
  <mo>+</mo>
  <mn>2</mn>
</math></span>，并将新的两点设为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">{</mo>
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>b</mi>
  <mo fence="false" stretchy="false">}</mo>
</math></span>。</p>
</li>
</ol>
<p>最终返回总共放置的点数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
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
</math></span> 为区间的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func intersectionSizeTwo(intervals [][]int) int {</span></span>
<span class="line"><span>	sort.Slice(intervals, func(i, j int) bool {</span></span>
<span class="line"><span>		a, b := intervals[i], intervals[j]</span></span>
<span class="line"><span>		if a[1] == b[1] {</span></span>
<span class="line"><span>			return a[0] > b[0]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return a[1] &#x3C; b[1]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	s, e := -1, -1</span></span>
<span class="line"><span>	for _, v := range intervals {</span></span>
<span class="line"><span>		a, b := v[0], v[1]</span></span>
<span class="line"><span>		if a &#x3C;= s {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if a > e {</span></span>
<span class="line"><span>			ans += 2</span></span>
<span class="line"><span>			s, e = b-1, b</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans += 1</span></span>
<span class="line"><span>			s, e = e, b</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/set-intersection-size-at-least-two" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0757.Set%20Intersection%20Size%20At%20Least%20Two/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-763" tabindex="-1">763. 划分字母区间 <a class="header-anchor" href="#q-763" aria-label="Permalink to &quot;763. 划分字母区间 {#q-763}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、哈希表、双指针、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。例如，字符串 <code>&quot;ababcc&quot;</code> 能够被分为 <code>[&quot;abab&quot;, &quot;cc&quot;]</code>，但类似 <code>[&quot;aba&quot;, &quot;bcc&quot;]</code> 或 <code>[&quot;ab&quot;, &quot;ab&quot;, &quot;cc&quot;]</code> 的划分是非法的。</p>&#10;&#10;<p>注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 <code>s</code> 。</p>&#10;&#10;<p>返回一个表示每个字符串片段的长度的列表。</p>&#10;&#10;<p> </p>&#10;<strong>示例 1：</strong>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;ababcbacadefegdehijhklij&quot;&#10;<strong>输出：</strong>[9,7,8]&#10;<strong>解释：</strong>&#10;划分结果为 &quot;ababcbaca&quot;、&quot;defegde&quot;、&quot;hijhklij&quot; 。&#10;每个字母最多出现在一个片段中。&#10;像 &quot;ababcbacadefegde&quot;, &quot;hijhklij&quot; 这样的划分是错误的，因为划分的片段数较少。 </pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;eccbbbbdec&quot;&#10;<strong>输出：</strong>[10]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 500</code></li>&#10;	<li><code>s</code> 仅由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要把串切成尽量多的段，使每段字母不在其他段出现。长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>500</mn>
</math></span>，关键是每个字母的最后出现位置决定它必须被圈进哪一段。</p>
<p>从左扫描并维护当前段必须覆盖到的最右下标：每见到一个字母就用它的末次位置扩大右端。走到该右端才能安全切开。</p>
<p>先建 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
</math></span>，再一遍贪心切段，记下长度。时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们先用数组或哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
</math></span> 记录字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字母最后一次出现的位置。</p>
<p>接下来我们使用贪心的方法，将字符串划分为尽可能多的片段。</p>
<p>从左到右遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，遍历的同时维护当前片段的开始下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 和结束下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，初始均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>对于每个访问到的字母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，获取到最后一次出现的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span>。由于当前片段的结束下标一定不会小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
</math></span>，因此令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">mx</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">[</mo>
  <mi>c</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>当访问到下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 时，意味着当前片段访问结束，当前片段的下标范围是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，我们将其添加到结果数组中。然后令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>=</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>, 继续寻找下一个片段。</p>
<p>重复上述过程，直至字符串遍历结束，即可得到所有片段的长度。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 为字符集的大小。本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func partitionLabels(s string) (ans []int) {</span></span>
<span class="line"><span>	last := [26]int{}</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		last[c-'a'] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var mx, j int</span></span>
<span class="line"><span>	for i, c := range s {</span></span>
<span class="line"><span>		mx = max(mx, last[c-'a'])</span></span>
<span class="line"><span>		if mx == i {</span></span>
<span class="line"><span>			ans = append(ans, i-j+1)</span></span>
<span class="line"><span>			j = i + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/partition-labels" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0763.Partition%20Labels/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-767" tabindex="-1">767. 重构字符串 <a class="header-anchor" href="#q-767" aria-label="Permalink to &quot;767. 重构字符串 {#q-767}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、哈希表、字符串、计数、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个字符串 <code>s</code> ，检查是否能重新排布其中的字母，使得任意两个相邻字符不相同。</p>&#10;&#10;<p>返回<em> <code>s</code> 的任意可能的重新排列。若不可行，返回空字符串 <code>&quot;&quot;</code></em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> s = &quot;aab&quot;&#10;<strong>输出:</strong> &quot;aba&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> s = &quot;aaab&quot;&#10;<strong>输出:</strong> &quot;&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 500</code></li>&#10;	<li><code>s</code> 只包含小写字母</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>重排使相邻字符不同。若某字符超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mi>n</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span> 次则不可能。长度有限，先判断再隔位填充。</p>
<p>出现最多的字符先放在偶数下标，放满后从下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 继续。这样最高频字符被尽量隔开。</p>
<p>按频次从大到小写入答案数组，越界则改到奇数位。</p>
</blockquote>
<p>利用哈希表 cnt 统计字符串 s 中每个字符出现的次数。</p>
<p>若最大的出现次数 mx 大于 <code v-pre>(n + 1) / 2</code>，说明一定会存在两个相同字符相邻，直接返回 ''。</p>
<p>否则，按字符出现频率从大到小遍历，依次间隔 1 个位置填充字符。若位置大于等于 n，则重置为 1 继续填充。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func reorganizeString(s string) string {</span></span>
<span class="line"><span>	cnt := make([]int, 26)</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		t := c - 'a'</span></span>
<span class="line"><span>		cnt[t]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mx := slices.Max(cnt)</span></span>
<span class="line"><span>	n := len(s)</span></span>
<span class="line"><span>	if mx > (n+1)/2 {</span></span>
<span class="line"><span>		return ""</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	m := [][]int{}</span></span>
<span class="line"><span>	for i, v := range cnt {</span></span>
<span class="line"><span>		if v > 0 {</span></span>
<span class="line"><span>			m = append(m, []int{v, i})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(m, func(i, j int) bool {</span></span>
<span class="line"><span>		return m[i][0] > m[j][0]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	ans := make([]byte, n)</span></span>
<span class="line"><span>	k := 0</span></span>
<span class="line"><span>	for _, e := range m {</span></span>
<span class="line"><span>		v, i := e[0], e[1]</span></span>
<span class="line"><span>		for v > 0 {</span></span>
<span class="line"><span>			ans[k] = byte('a' + i)</span></span>
<span class="line"><span>			k += 2</span></span>
<span class="line"><span>			if k >= n {</span></span>
<span class="line"><span>				k = 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			v--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：贪心 + 哈希表 + 优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>隔位填充依赖「最多隔一个」这一特解。写成与「间隔 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>」相同的堆+冷却队列，可复用到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>2</mn>
</math></span>。</p>
<p>每次取当前剩余最多的字符，用过后进入长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的队列，出队后再回堆。拼不出全长则失败。</p>
</blockquote>
<p>先用哈希表 <code v-pre>cnt</code> 统计每个字母出现的次数，然后构建一个大根堆 <code v-pre>pq</code>，其中每个元素是一个 <code v-pre>(v, c)</code> 的元组，其中 <code v-pre>c</code> 是字母，<code v-pre>v</code> 是字母出现的次数。</p>
<p>重排字符串时，我们每次从堆顶弹出一个元素 <code v-pre>(v, c)</code>，将 <code v-pre>c</code> 添加到结果字符串中，并将 <code v-pre>(v-1, c)</code> 放入队列 <code v-pre>q</code> 中。当队列 <code v-pre>q</code> 的长度达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> （本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为 2）及以上时，弹出队首元素，若此时 <code v-pre>v</code> 大于 0，则将队首元素放入堆中。循环，直至堆为空。</p>
<p>最后判断结果字符串的长度，若与 <code v-pre>s</code> 长度相等，则返回结果字符串，否则返回空串。</p>
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
</math></span> 是字符串 <code v-pre>s</code> 的长度。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0358.Rearrange%20String%20k%20Distance%20Apart/README.md" target="_blank" rel="noopener noreferrer">358. K 距离间隔重排字符串</a></li>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1000-1099/1054.Distant%20Barcodes/README.md" target="_blank" rel="noopener noreferrer">1054. 距离相等的条形码</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func reorganizeString(s string) string {</span></span>
<span class="line"><span>	return rearrangeString(s, 2)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func rearrangeString(s string, k int) string {</span></span>
<span class="line"><span>	cnt := map[byte]int{}</span></span>
<span class="line"><span>	for i := range s {</span></span>
<span class="line"><span>		cnt[s[i]]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	pq := hp{}</span></span>
<span class="line"><span>	for c, v := range cnt {</span></span>
<span class="line"><span>		heap.Push(&#x26;pq, pair{v, c})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	q := []pair{}</span></span>
<span class="line"><span>	for len(pq) > 0 {</span></span>
<span class="line"><span>		p := heap.Pop(&#x26;pq).(pair)</span></span>
<span class="line"><span>		v, c := p.v, p.c</span></span>
<span class="line"><span>		ans = append(ans, c)</span></span>
<span class="line"><span>		q = append(q, pair{v - 1, c})</span></span>
<span class="line"><span>		if len(q) >= k {</span></span>
<span class="line"><span>			p = q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			if p.v > 0 {</span></span>
<span class="line"><span>				heap.Push(&#x26;pq, p)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(ans) == len(s) {</span></span>
<span class="line"><span>		return string(ans)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ""</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct {</span></span>
<span class="line"><span>	v int</span></span>
<span class="line"><span>	c byte</span></span>
<span class="line"><span>}</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/reorganize-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0767.Reorganize%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-768" tabindex="-1">768. 最多能完成排序的块 II <a class="header-anchor" href="#q-768" aria-label="Permalink to &quot;768. 最多能完成排序的块 II {#q-768}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、数组、排序、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>arr</code> 。</p>&#10;&#10;<p>将 <code>arr</code> 分割成若干 <strong>块</strong> ，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。</p>&#10;&#10;<p>返回能将数组分成的最多块数？</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [5,4,3,2,1]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>&#10;将数组分成2块或者更多块，都无法得到所需的结果。 &#10;例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [2,1,3,4,4]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>&#10;可以把它分成两块，例如 [2, 1], [3, 4, 4]。 &#10;然而，分成 [2, 1], [3], [4], [4] 可以得到最多的块数。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 2000</code></li>&#10;	<li><code>0 &lt;= arr[i] &lt;= 10<sup>8</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：单调栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数组可有重复，求最多切成多少块，使各块分别排序后整体有序。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2000</mn>
</math></span>，枚举切点需快速判断「左侧都 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
</math></span> 右侧」。</p>
<p>从左到右，已形成的块的最大值应单调不降。新值若小于栈顶，说明它必须并入前面某几块，弹出直到栈顶不大于它，再把原先的块最大值压回。</p>
<p>栈里留下的每个最大值对应一块，栈长即答案。</p>
</blockquote>
<p>根据题目，我们可以发现，从左到右，每个分块都有一个最大值，并且这些分块的最大值呈单调递增（非严格递增）。我们可以用一个栈来存储这些分块的最大值。最后得到的栈的大小，也就是题目所求的最多能完成排序的块。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxChunksToSorted(arr []int) int {</span></span>
<span class="line"><span>	var stk []int</span></span>
<span class="line"><span>	for _, v := range arr {</span></span>
<span class="line"><span>		if len(stk) == 0 || stk[len(stk)-1] &#x3C;= v {</span></span>
<span class="line"><span>			stk = append(stk, v)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			mx := stk[len(stk)-1]</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			for len(stk) > 0 &#x26;&#x26; stk[len(stk)-1] > v {</span></span>
<span class="line"><span>				stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			stk = append(stk, mx)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(stk)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/max-chunks-to-make-sorted-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0768.Max%20Chunks%20To%20Make%20Sorted%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-769" tabindex="-1">769. 最多能完成排序的块 <a class="header-anchor" href="#q-769" aria-label="Permalink to &quot;769. 最多能完成排序的块 {#q-769}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、数组、排序、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个长度为 <code>n</code> 的整数数组 <code>arr</code> ，它表示在 <code>[0, n - 1]</code> 范围内的整数的排列。</p>&#10;&#10;<p>我们将 <code>arr</code> 分割成若干 <strong>块</strong> (即分区)，并对每个块单独排序。将它们连接起来后，使得连接的结果和按升序排序后的原数组相同。</p>&#10;&#10;<p>返回数组能分成的最多块数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> arr = [4,3,2,1,0]&#10;<strong>输出:</strong> 1&#10;<strong>解释:</strong>&#10;将数组分成2块或者更多块，都无法得到所需的结果。&#10;例如，分成 [4, 3], [2, 1, 0] 的结果是 [3, 4, 0, 1, 2]，这不是有序的数组。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> arr = [1,0,2,3,4]&#10;<strong>输出:</strong> 4&#10;<strong>解释:</strong>&#10;我们可以把它分成两块，例如 [1, 0], [2, 3, 4]。&#10;然而，分成 [1, 0], [2], [3], [4] 可以得到最多的块数。&#10;对每个块单独排序后，结果为 [0, 1], [2], [3], [4]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == arr.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10</code></li>&#10;	<li><code>0 &lt;= arr[i] &lt; n</code></li>&#10;	<li><code>arr</code> 中每个元素都 <strong>不同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 一次遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>数组是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.</mn>
  <mo>.</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的排列，切块分别排序后应还原。能在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 切开，当且仅当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个数恰好是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.</mn>
  <mo>.</mo>
  <mi>i</mi>
</math></span>。</p>
<p>这等价于前缀最大值等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>。一遍维护 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span>，相等则多一块。</p>
</blockquote>
<p>由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的一个排列，若已遍历过的数中的最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span> 与当前遍历到的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 相等，说明可以进行一次分割，累加答案。</p>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxChunksToSorted(arr []int) int {</span></span>
<span class="line"><span>	ans, mx := 0, 0</span></span>
<span class="line"><span>	for i, v := range arr {</span></span>
<span class="line"><span>		mx = max(mx, v)</span></span>
<span class="line"><span>		if i == mx {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：单调栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用到了「值等于下标」这一排列性质，有重复时失效。块最大值单调栈与 768 相同，不依赖值域。</p>
<p>新值小于栈顶则合并前面的块，最后栈长为块数。</p>
</blockquote>
<p>方法一的解法有一定的局限性，若数组中存在重复元素，就无法得到正确的答案。</p>
<p>根据题目，我们可以发现，从左到右，每个分块都有一个最大值，并且这些分块的最大值呈单调递增。我们可以用一个栈来存储这些分块的最大值。最后得到的栈的大小，也就是题目所求的最多能完成排序的块。</p>
<p>以上这种解法，不仅可以解决本题，也可以解决 <a href="https://github.com/doocs/leetcode/blob/main/solution/0700-0799/0768.Max%20Chunks%20To%20Make%20Sorted%20II/README.md" target="_blank" rel="noopener noreferrer">768. 最多能完成排序的块 II</a> 这道困难题。大家可以自行尝试。</p>
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
  <mtext mathvariant="italic">arr</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxChunksToSorted(arr []int) int {</span></span>
<span class="line"><span>	stk := []int{}</span></span>
<span class="line"><span>	for _, v := range arr {</span></span>
<span class="line"><span>		if len(stk) == 0 || v >= stk[len(stk)-1] {</span></span>
<span class="line"><span>			stk = append(stk, v)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			mx := stk[len(stk)-1]</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			for len(stk) > 0 &#x26;&#x26; stk[len(stk)-1] > v {</span></span>
<span class="line"><span>				stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			stk = append(stk, mx)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(stk)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/max-chunks-to-make-sorted" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0769.Max%20Chunks%20To%20Make%20Sorted/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-781" tabindex="-1">781. 森林中的兔子 <a class="header-anchor" href="#q-781" aria-label="Permalink to &quot;781. 森林中的兔子 {#q-781}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>森林中有未知数量的兔子。提问其中若干只兔子<strong> &quot;还有多少只其它兔子与你（指被提问的兔子）颜色相同?&quot;</strong> ，将答案收集到一个整数数组 <code>answers</code> 中，其中 <code>answers[i]</code> 是第 <code>i</code> 只兔子的回答。</p>&#10;&#10;<p>给你数组 <code>answers</code> ，返回森林中兔子的最少数量。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>answers = [1,1,2]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>&#10;两只回答了 &quot;1&quot; 的兔子可能有相同的颜色，设为红色。 &#10;之后回答了 &quot;2&quot; 的兔子不会是红色，否则他们的回答会相互矛盾。&#10;设回答了 &quot;2&quot; 的兔子为蓝色。 &#10;此外，森林中还应有另外 2 只蓝色兔子的回答没有包含在数组中。 &#10;因此森林中兔子的最少数量是 5 只：3 只回答的和 2 只没有回答的。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>answers = [10,10,10]&#10;<strong>输出：</strong>11&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= answers.length &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= answers[i] &lt; 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>回答 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 表示该颜色共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 只。不同回答不能同色；相同回答可以分到若干组，每组最多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 只。</p>
<p>要人数最少，同答 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 只兔子应尽量填满大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的组，组数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mi>v</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span>。</p>
<p>计数后对每种 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 累加组数乘组大小。</p>
</blockquote>
<p>根据题目描述，回答相同的兔子，可能属于同一种颜色，而回答不同的兔子，不可能属于同一种颜色。</p>
<p>因此，我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录每种回答出现的次数。对于每种回答 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 及其出现次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，我们按照每种颜色有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 只兔子的原则，计算出兔子的最少数量，并将其加入答案。</p>
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
  <mtext mathvariant="italic">answers</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numRabbits(answers []int) (ans int) {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range answers {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for x, v := range cnt {</span></span>
<span class="line"><span>		group := x + 1</span></span>
<span class="line"><span>		ans += (v + group - 1) / group * group</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/rabbits-in-forest" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0700-0799/0781.Rabbits%20in%20Forest/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-807" tabindex="-1">807. 保持城市天际线 <a class="header-anchor" href="#q-807" aria-label="Permalink to &quot;807. 保持城市天际线 {#q-807}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一座由 <code>n x n</code> 个街区组成的城市，每个街区都包含一座立方体建筑。给你一个下标从 <strong>0</strong> 开始的 <code>n x n</code> 整数矩阵 <code>grid</code> ，其中 <code>grid[r][c]</code> 表示坐落于 <code>r</code> 行 <code>c</code> 列的建筑物的 <strong>高度</strong> 。</p>&#10;&#10;<p>城市的 <strong>天际线</strong> 是从远处观察城市时，所有建筑物形成的外部轮廓。从东、南、西、北四个主要方向观测到的 <strong>天际线</strong> 可能不同。</p>&#10;&#10;<p>我们被允许为 <strong>任意数量的建筑物 </strong>的高度增加<strong> 任意增量（不同建筑物的增量可能不同）</strong> 。 高度为 <code>0</code> 的建筑物的高度也可以增加。然而，增加的建筑物高度 <strong>不能影响</strong> 从任何主要方向观察城市得到的 <strong>天际线</strong> 。</p>&#10;&#10;<p>在 <strong>不改变</strong> 从任何主要方向观测到的城市 <strong>天际线</strong> 的前提下，返回建筑物可以增加的 <strong>最大高度增量总和</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0800-0899/0807.Max%20Increase%20to%20Keep%20City%20Skyline/images/807-ex1.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]&#10;<strong>输出：</strong>35&#10;<strong>解释：</strong>建筑物的高度如上图中心所示。&#10;用红色绘制从不同方向观看得到的天际线。&#10;在不影响天际线的情况下，增加建筑物的高度：&#10;gridNew = [ [8, 4, 8, 7],&#10;            [7, 4, 7, 7],&#10;            [9, 4, 8, 7],&#10;            [3, 3, 3, 3] ]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,0,0],[0,0,0],[0,0,0]]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>增加任何建筑物的高度都会导致天际线的变化。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == grid.length</code></li>&#10;	<li><code>n == grid[r].length</code></li>&#10;	<li><code>2 &lt;= n &lt;= 50</code></li>&#10;	<li><code>0 &lt;= grid[r][c] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>天际线由每行、每列的最大值决定，升高某格不能超过其所在行、列的天际线。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span>，先扫出各行列最大值再逐格计算即可。</p>
<p>格子 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 最多升到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">rowMax</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mtext mathvariant="italic">colMax</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>，与原高度之差即为该格贡献。对所有格子求和得到总增高。</p>
</blockquote>
<p>根据题目描述，我们可以将每个单元格 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的值增加至第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 行的最大值和第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 列的最大值中的较小值，这样可以保证不影响天际线，即每个单元格增加的高度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">rowMax</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mtext mathvariant="italic">colMax</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">grid</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>因此，我们可以先遍历一次矩阵，分别计算出每行和每列的最大值，记录在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">rowMax</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">colMax</mtext>
</math></span> 中，然后再遍历一次矩阵，计算出答案即可。</p>
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
</math></span> 为矩阵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">grid</mtext>
</math></span> 的边长。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxIncreaseKeepingSkyline(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	rowMax := make([]int, len(grid))</span></span>
<span class="line"><span>	colMax := make([]int, len(grid[0]))</span></span>
<span class="line"><span>	for i, row := range grid {</span></span>
<span class="line"><span>		for j, x := range row {</span></span>
<span class="line"><span>			rowMax[i] = max(rowMax[i], x)</span></span>
<span class="line"><span>			colMax[j] = max(colMax[j], x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, row := range grid {</span></span>
<span class="line"><span>		for j, x := range row {</span></span>
<span class="line"><span>			ans += min(rowMax[i], colMax[j]) - x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/max-increase-to-keep-city-skyline" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0807.Max%20Increase%20to%20Keep%20City%20Skyline/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-826" tabindex="-1">826. 安排工作以达到最大收益 <a class="header-anchor" href="#q-826" aria-label="Permalink to &quot;826. 安排工作以达到最大收益 {#q-826}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有 <code>n</code> 个工作和 <code>m</code> 个工人。给定三个数组： <code>difficulty</code>, <code>profit</code> 和 <code>worker</code> ，其中:</p>&#10;&#10;<ul>&#10;	<li><code>difficulty[i]</code> 表示第 <code>i</code> 个工作的难度，<code>profit[i]</code> 表示第 <code>i</code> 个工作的收益。</li>&#10;	<li><code>worker[i]</code> 是第 <code>i</code> 个工人的能力，即该工人只能完成难度小于等于 <code>worker[i]</code> 的工作。</li>&#10;</ul>&#10;&#10;<p>每个工人 <strong>最多</strong> 只能安排 <strong>一个</strong> 工作，但是一个工作可以 <strong>完成多次</strong> 。</p>&#10;&#10;<ul>&#10;	<li>举个例子，如果 3 个工人都尝试完成一份报酬为 <code>$1</code> 的同样工作，那么总收益为 <code>$3</code> 。如果一个工人不能完成任何工作，他的收益为 <code>$0</code> 。</li>&#10;</ul>&#10;&#10;<p>返回 <em>在把工人分配到工作岗位后，我们所能获得的最大利润 </em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]&#10;<strong>输出: </strong>100 &#10;<strong>解释: </strong>工人被分配的工作难度是 [4,4,6,6] ，分别获得 [20,20,30,30] 的收益。</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]&#10;<strong>输出:</strong> 0</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == difficulty.length</code></li>&#10;	<li><code>n == profit.length</code></li>&#10;	<li><code>m == worker.length</code></li>&#10;	<li><code>1 &lt;= n, m &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= difficulty[i], profit[i], worker[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个工人只能做难度不超过其能力的工作，并取其中利润最大者。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，对每个工人扫描全部工作偏慢。</p>
<p>将工人与工作分别按能力、难度排序后双指针推进：能力单调不减，可维护当前可达的最大利润。每个工人 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 取该最大值。</p>
</blockquote>
<p>我们可以将工作按照能力升序排列，然后将工作按照难度升序排列。</p>
<p>然后我们遍历工人，对于每个工人，我们找出他能完成的工作中收益最大的那个，然后将这个收益加到答案中。</p>
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
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
</math></span> 分别是数组 <code v-pre>profit</code> 和 <code v-pre>worker</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxProfitAssignment(difficulty []int, profit []int, worker []int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(worker)</span></span>
<span class="line"><span>	n := len(profit)</span></span>
<span class="line"><span>	jobs := make([][2]int, n)</span></span>
<span class="line"><span>	for i, p := range profit {</span></span>
<span class="line"><span>		jobs[i] = [2]int{difficulty[i], p}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(jobs, func(i, j int) bool { return jobs[i][0] &#x3C; jobs[j][0] })</span></span>
<span class="line"><span>	mx, i := 0, 0</span></span>
<span class="line"><span>	for _, w := range worker {</span></span>
<span class="line"><span>		for ; i &#x3C; n &#x26;&#x26; jobs[i][0] &#x3C;= w; i++ {</span></span>
<span class="line"><span>			mx = max(mx, jobs[i][1])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += mx</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：动态规划 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>双指针需要排序。难度上限为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，也可用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
</math></span> 记录难度恰为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 的最大利润，再前缀取最大值，得到「能力不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时的最佳利润」。</p>
<p>每个工人直接查表，省去对工人排序，适合难度范围不大的情形。</p>
</blockquote>
<p>我们不妨记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">difficulty</mtext>
  <mo stretchy="false">)</mo>
</math></span>，定义一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示难度小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的工作中收益的最大值，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。</p>
<p>然后我们遍历工作，对于每个工作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mo>,</mo>
  <mi>p</mi>
  <mo stretchy="false">)</mo>
</math></span>，我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mi>d</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>p</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>接下来，我们从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 遍历，对于每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后，我们遍历工人，对于每个工人 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">[</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>w</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">]</mo>
</math></span> 加到答案中。</p>
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
</math></span> 是数组 <code v-pre>profit</code> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是数组 <code v-pre>difficulty</code> 中的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxProfitAssignment(difficulty []int, profit []int, worker []int) (ans int) {</span></span>
<span class="line"><span>	m := slices.Max(difficulty)</span></span>
<span class="line"><span>	f := make([]int, m+1)</span></span>
<span class="line"><span>	for i, d := range difficulty {</span></span>
<span class="line"><span>		f[d] = max(f[d], profit[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		f[i] = max(f[i], f[i-1])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, w := range worker {</span></span>
<span class="line"><span>		ans += f[min(w, m)]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-profit-assigning-work" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0826.Most%20Profit%20Assigning%20Work/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-846" tabindex="-1">846. 一手顺子 <a class="header-anchor" href="#q-846" aria-label="Permalink to &quot;846. 一手顺子 {#q-846}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 <code>groupSize</code> ，并且由 <code>groupSize</code> 张连续的牌组成。</p>&#10;&#10;<p>给你一个整数数组 <code>hand</code> 其中 <code>hand[i]</code> 是写在第 <code>i</code> 张牌上的<strong>数值</strong>。如果她可能重新排列这些牌，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>hand = [1,2,3,6,2,3,4,7,8], groupSize = 3&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>Alice 手中的牌可以被重新排列为 <code>[1,2,3]，[2,3,4]，[6,7,8]</code>。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>hand = [1,2,3,4,5], groupSize = 4&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>Alice 手中的牌无法被重新排列成几个大小为 4 的组。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= hand.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= hand[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= groupSize &lt;= hand.length</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>注意：</strong>此题目与 1296 重复：<a href="https://leetcode.cn/problems/divide-array-in-sets-of-k-consecutive-numbers/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/divide-array-in-sets-of-k-consecutive-numbers/</a></p></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把手牌分成若干长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 的连续组。张数不能整除则失败。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，应从最小牌开始贪心取组。</p>
<p>计数后按牌面排序，每张仍剩余的牌作为一组起点，连续 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 张各减一，缺牌则失败。</p>
</blockquote>
<p>我们首先判断数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">hand</mtext>
</math></span> 的长度是否能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 整除，如果不能整除，说明无法将数组划分成若干个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 的子数组，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。</p>
<p>接下来，我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">hand</mtext>
</math></span> 中每个数字出现的次数，然后对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">hand</mtext>
</math></span> 进行排序。</p>
<p>然后，我们遍历排序后的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">hand</mtext>
</math></span>，对于每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 不为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，我们枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">groupSize</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，说明无法将数组划分成若干个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 的子数组，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。否则，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mo stretchy="false">]</mo>
</math></span> 减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>遍历结束后，说明可以将数组划分成若干个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 的子数组，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
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
  <mtext mathvariant="italic">hand</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isNStraightHand(hand []int, groupSize int) bool {</span></span>
<span class="line"><span>	if len(hand)%groupSize != 0 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(hand)</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, x := range hand {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range hand {</span></span>
<span class="line"><span>		if cnt[x] > 0 {</span></span>
<span class="line"><span>			for y := x; y &#x3C; x+groupSize; y++ {</span></span>
<span class="line"><span>				if cnt[y] == 0 {</span></span>
<span class="line"><span>					return false</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				cnt[y]--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：有序集合 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排序整副手牌会扫到计数已为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的牌。用有序映射直接取当前最小键作为下一组起点，缺键或减完后删除即可。</p>
<p>逻辑与方法一相同，只是用有序集合保证每次取出的都是剩余牌中的最小值。</p>
</blockquote>
<p>与方法一类似，我们首先判断数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">hand</mtext>
</math></span> 的长度是否能被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 整除，如果不能整除，说明无法将数组划分成若干个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 的子数组，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。</p>
<p>接下来，我们用一个有序集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">sd</mtext>
</math></span> 统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">hand</mtext>
</math></span> 中每个数字出现的次数。</p>
<p>然后，我们循环取出有序集合中的最小值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，然后枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">groupSize</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的每个数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，如果这些数字在有序集合中出现的次数都不为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则我们将这些数字的出现次数减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，如果出现次数减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 后为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则将该数字从有序集合中删除，否则说明无法将数组划分成若干个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 的子数组，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>false</mtext>
</math></span>。如果可以将数组划分成若干个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">groupSize</mtext>
</math></span> 的子数组，则遍历结束后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>true</mtext>
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
  <mtext mathvariant="italic">hand</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isNStraightHand(hand []int, groupSize int) bool {</span></span>
<span class="line"><span>	if len(hand)%groupSize != 0 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	tm := treemap.NewWithIntComparator()</span></span>
<span class="line"><span>	for _, x := range hand {</span></span>
<span class="line"><span>		if v, ok := tm.Get(x); ok {</span></span>
<span class="line"><span>			tm.Put(x, v.(int)+1)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			tm.Put(x, 1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for !tm.Empty() {</span></span>
<span class="line"><span>		x, _ := tm.Min()</span></span>
<span class="line"><span>		for y := x.(int); y &#x3C; x.(int)+groupSize; y++ {</span></span>
<span class="line"><span>			if v, ok := tm.Get(y); ok {</span></span>
<span class="line"><span>				if v.(int) == 1 {</span></span>
<span class="line"><span>					tm.Remove(y)</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					tm.Put(y, v.(int)-1)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/hand-of-straights" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0846.Hand%20of%20Straights/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-857" tabindex="-1">857. 雇佣 K 名工人的最低成本 <a class="header-anchor" href="#q-857" aria-label="Permalink to &quot;857. 雇佣 K 名工人的最低成本 {#q-857}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有 <code>n</code> 名工人。 给定两个数组 <code>quality</code> 和 <code>wage</code> ，其中，<code>quality[i]</code> 表示第 <code>i</code> 名工人的工作质量，其最低期望工资为 <code>wage[i]</code> 。</p>&#10;&#10;<p>现在我们想雇佣 <code>k</code> 名工人组成一个 <strong>工资组</strong><em>。</em>在雇佣 一组 <code>k</code> 名工人时，我们必须按照下述规则向他们支付工资：</p>&#10;&#10;<ol>&#10;	<li>对工资组中的每名工人，应当按其工作质量与同组其他工人的工作质量的比例来支付工资。</li>&#10;	<li>工资组中的每名工人至少应当得到他们的最低期望工资。</li>&#10;</ol>&#10;&#10;<p>给定整数 <code>k</code> ，返回 <em>组成满足上述条件的付费群体所需的最小金额 </em>。与实际答案误差相差在 <code>10<sup>-5</sup></code> 以内的答案将被接受。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入： </strong>quality = [10,20,5], wage = [70,50,30], k = 2&#10;<strong>输出： </strong>105.00000&#10;<strong>解释：</strong> 我们向 0 号工人支付 70，向 2 号工人支付 35。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入： </strong>quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3&#10;<strong>输出： </strong>30.66667&#10;<strong>解释： </strong>我们向 0 号工人支付 4，向 2 号和 3 号分别支付 13.33333。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == quality.length == wage.length</code></li>&#10;	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= quality[i], wage[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>工资须按同一比率发放且每人不少于期望，选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 人使总工资最小。比率由团中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">wage</mtext>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mtext mathvariant="italic">quality</mtext>
</math></span> 的最大值决定。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，枚举子集不可行。</p>
<p>按比率升序加入工人，当前比率已能覆盖团内所有人；用大根堆丢掉质量最大者，保持团大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。每次恰好 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 人时用「当前比率 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#xD7;</mo>
</math></span> 质量之和」更新答案。</p>
</blockquote>
<p>我们假设选取了某一个工资组，总工作质量为 <code v-pre>tot</code>，总支付金额为 <code v-pre>c</code>。每个工人的工作质量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>q</mi>
    <mi>i</mi>
  </msub>
</math></span>，工资为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>w</mi>
    <mi>i</mi>
  </msub>
</math></span>。那么，对于此工资组的每个工人，均满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>&#xD7;</mo>
  <mfrac>
    <msub>
      <mi>q</mi>
      <mi>i</mi>
    </msub>
    <mrow>
      <mi>t</mi>
      <mi>o</mi>
      <mi>t</mi>
    </mrow>
  </mfrac>
  <mo>&#x2265;</mo>
  <msub>
    <mi>w</mi>
    <mi>i</mi>
  </msub>
</math></span>。即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mo>&#x2265;</mo>
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>&#xD7;</mo>
  <mfrac>
    <msub>
      <mi>w</mi>
      <mi>i</mi>
    </msub>
    <msub>
      <mi>q</mi>
      <mi>i</mi>
    </msub>
  </mfrac>
</math></span>。</p>
<p>在总工作质量 <code v-pre>tot</code> 固定的情况下，支付的金额取决于权重 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <msub>
      <mi>w</mi>
      <mi>i</mi>
    </msub>
    <msub>
      <mi>q</mi>
      <mi>i</mi>
    </msub>
  </mfrac>
</math></span> 的最大值。</p>
<p>我们可以从小到大枚举权重 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <msub>
      <mi>w</mi>
      <mi>i</mi>
    </msub>
    <msub>
      <mi>q</mi>
      <mi>i</mi>
    </msub>
  </mfrac>
</math></span> 作为工资组的最大值，此时工资组其他人员只需要在权重小于等于这个值的集合中，选取工作质量最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 名工人来组成工资组即可。因此，可以用优先队列（最大堆）维护工作质量最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 名工人。</p>
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
</math></span> 是工人数。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1300-1399/1383.Maximum%20Performance%20of%20a%20Team/README.md" target="_blank" rel="noopener noreferrer">1383. 最大的团队表现值</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mincostToHireWorkers(quality []int, wage []int, k int) float64 {</span></span>
<span class="line"><span>	t := []pair{}</span></span>
<span class="line"><span>	for i, q := range quality {</span></span>
<span class="line"><span>		t = append(t, pair{float64(wage[i]) / float64(q), q})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(t, func(i, j int) bool { return t[i].x &#x3C; t[j].x })</span></span>
<span class="line"><span>	tot := 0</span></span>
<span class="line"><span>	var ans float64 = 1e18</span></span>
<span class="line"><span>	pq := hp{}</span></span>
<span class="line"><span>	for _, e := range t {</span></span>
<span class="line"><span>		tot += e.q</span></span>
<span class="line"><span>		heap.Push(&#x26;pq, e.q)</span></span>
<span class="line"><span>		if pq.Len() == k {</span></span>
<span class="line"><span>			ans = min(ans, float64(tot)*e.x)</span></span>
<span class="line"><span>			tot -= heap.Pop(&#x26;pq).(int)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct {</span></span>
<span class="line"><span>	x float64</span></span>
<span class="line"><span>	q int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *hp) Push(v any) { h.IntSlice = append(h.IntSlice, v.(int)) }</span></span>
<span class="line"><span>func (h *hp) Pop() any {</span></span>
<span class="line"><span>	a := h.IntSlice</span></span>
<span class="line"><span>	v := a[len(a)-1]</span></span>
<span class="line"><span>	h.IntSlice = a[:len(a)-1]</span></span>
<span class="line"><span>	return v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (h *hp) Less(i, j int) bool { return h.IntSlice[i] > h.IntSlice[j] }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-cost-to-hire-k-workers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0857.Minimum%20Cost%20to%20Hire%20K%20Workers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-860" tabindex="-1">860. 柠檬水找零 <a class="header-anchor" href="#q-860" aria-label="Permalink to &quot;860. 柠檬水找零 {#q-860}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>在柠檬水摊上，每一杯柠檬水的售价为 <code>5</code> 美元。顾客排队购买你的产品，（按账单 <code>bills</code> 支付的顺序）一次购买一杯。</p>&#10;&#10;<p>每位顾客只买一杯柠檬水，然后向你付 <code>5</code> 美元、<code>10</code> 美元或 <code>20</code> 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 <code>5</code> 美元。</p>&#10;&#10;<p>注意，一开始你手头没有任何零钱。</p>&#10;&#10;<p>给你一个整数数组 <code>bills</code> ，其中 <code>bills[i]</code> 是第 <code>i</code> 位顾客付的账。如果你能给每位顾客正确找零，返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>bills = [5,5,5,10,20]&#10;<strong>输出：</strong>true&#10;<strong>解释：&#10;</strong>前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。&#10;第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。&#10;第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。&#10;由于所有客户都得到了正确的找零，所以我们输出 true。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>bills = [5,5,10,10,20]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>&#10;前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。&#10;对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。&#10;对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。&#10;由于不是每位顾客都得到了正确的找零，所以答案是 false。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= bills.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>bills[i]</code> 不是 <code>5</code> 就是 <code>10</code> 或是 <code>20</code> </li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>20</mn>
</math></span>，找零必须用手头已有的钞票。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，应贪心：收 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>20</mn>
</math></span> 时优先配一张 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 加一张 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>，否则三张 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>。</p>
<p>维护 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的张数，任一步 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 变为负数即失败。无需保存整段交易历史。</p>
</blockquote>
<p>我们从前往后遍历账单数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>l</mi>
  <mi>s</mi>
</math></span>，对于当前遍历到的账单：</p>
<ul>
<li>如果是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 美元，那么直接收下即可；</li>
<li>如果是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 美元，那么需要找零 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 美元；</li>
<li>如果是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>20</mn>
</math></span> 美元，那么需要找零 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 美元，此时有两种找零方式：找零 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 张 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 美元 + <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 张 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 美元；找零 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 张 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 美元。我们优先用第一种找零方式，如果没有足够的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 美元，那么用第二种方式；</li>
<li>如果发现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span> 美元的数量不够，直接返回 <code v-pre>false</code>。</li>
</ul>
<p>遍历结束，说明我们没有遇到无法找零的情况，返回 <code v-pre>true</code> 即可。</p>
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
</math></span> 为账单数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>l</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func lemonadeChange(bills []int) bool {</span></span>
<span class="line"><span>	five, ten := 0, 0</span></span>
<span class="line"><span>	for _, v := range bills {</span></span>
<span class="line"><span>		if v == 5 {</span></span>
<span class="line"><span>			five++</span></span>
<span class="line"><span>		} else if v == 10 {</span></span>
<span class="line"><span>			ten++</span></span>
<span class="line"><span>			five--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			if ten > 0 {</span></span>
<span class="line"><span>				ten--</span></span>
<span class="line"><span>				five--</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				five -= 3</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if five &#x3C; 0 {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/lemonade-change" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0860.Lemonade%20Change/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-861" tabindex="-1">861. 翻转矩阵后的得分 <a class="header-anchor" href="#q-861" aria-label="Permalink to &quot;861. 翻转矩阵后的得分 {#q-861}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、位运算、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个大小为 <code>m x n</code> 的二元矩阵 <code>grid</code> ，矩阵中每个元素的值为 <code>0</code> 或 <code>1</code> 。</p>&#10;&#10;<p>一次 <strong>移动</strong> 是指选择任一行或列，并转换该行或列中的每一个值：将所有 <code>0</code> 都更改为 <code>1</code>，将所有 <code>1</code> 都更改为 <code>0</code>。</p>&#10;&#10;<p>在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的 <strong>得分</strong> 就是这些数字的总和。</p>&#10;&#10;<p>在执行任意次 <strong>移动</strong> 后（含 0 次），返回可能的最高分数。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0800-0899/0861.Score%20After%20Flipping%20Matrix/images/lc-toogle1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]&#10;<strong>输出：</strong>39&#10;<strong>解释：</strong>0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[0]]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 20</code></li>&#10;	<li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>行列翻转任意次，最大化按二进制解读的矩阵得分。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>20</mn>
</math></span>，穷举行翻转可行但无必要：最高位必须尽量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，否则该行贡献减半。</p>
<p>先翻转使每行首列为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。此后每列只比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的个数，取较多的一侧乘上该列权值。列翻转互不影响。</p>
</blockquote>
<p>我们注意到，对于任意一个翻转方案，翻转的次序不影响最后的结果。因此我们可以先考虑所有的行翻转，再考虑所有的列翻转。</p>
<p>每一行的数字要尽可能大，因此，我们遍历每一行，若行首元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则将该行进行翻转。</p>
<p>接下来，对于每一列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，我们统计该列中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的数量，令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 为其中的最大值，则该列的贡献为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
      <mo>&#x2212;</mo>
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span>。对所有列的贡献进行累加，即可得到答案。</p>
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
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别为矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func matrixScore(grid [][]int) int {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		if grid[i][0] == 0 {</span></span>
<span class="line"><span>			for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>				grid[i][j] ^= 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for j := 0; j &#x3C; n; j++ {</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for i := 0; i &#x3C; m; i++ {</span></span>
<span class="line"><span>			cnt += grid[i][j]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt &#x3C; m-cnt {</span></span>
<span class="line"><span>			cnt = m - cnt</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += cnt * (1 &#x3C;&#x3C; (n - j - 1))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/score-after-flipping-matrix" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0861.Score%20After%20Flipping%20Matrix/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-870" tabindex="-1">870. 优势洗牌 <a class="header-anchor" href="#q-870" aria-label="Permalink to &quot;870. 优势洗牌 {#q-870}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个长度相等的数组 <code>nums1</code> 和 <code>nums2</code>，<code>nums1</code> 相对于 <code>nums2</code> 的<em>优势</em>可以用满足 <code>nums1[i] > nums2[i]</code> 的索引 <code>i</code> 的数目来描述。</p>&#10;&#10;<p>返回 <code>nums1</code> 的 <strong>任意 </strong>排列，使其相对于 <code>nums2</code> 的优势最大化。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums1 = [2,7,11,15], nums2 = [1,10,4,11]&#10;<strong>输出：</strong>[2,11,7,15]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums1 = [12,24,8,32], nums2 = [13,25,32,11]&#10;<strong>输出：</strong>[24,32,8,12]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums1.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>nums2.length == nums1.length</code></li>&#10;	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>重排 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 使严格大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 对应位的个数最多。田忌赛马： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，应对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 从大到小，能赢就用最小能赢的，否则用全局最小去填。</p>
<p>将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 排序、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 按下标排序后双指针：当前最小值打得过则打最弱对手，否则送给当前最强对手。</p>
</blockquote>
<p>类似田忌赛马。将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span> 按照升序排列。然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 中的每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>，若在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中找不到比 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 小的，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span> 与当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>.</mo>
  <mo>.</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 中的最大元素匹配。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func advantageCount(nums1 []int, nums2 []int) []int {</span></span>
<span class="line"><span>	n := len(nums1)</span></span>
<span class="line"><span>	t := make([][]int, n)</span></span>
<span class="line"><span>	for i, v := range nums2 {</span></span>
<span class="line"><span>		t[i] = []int{v, i}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(t, func(i, j int) bool {</span></span>
<span class="line"><span>		return t[i][0] &#x3C; t[j][0]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	sort.Ints(nums1)</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	i, j := 0, n-1</span></span>
<span class="line"><span>	for _, v := range nums1 {</span></span>
<span class="line"><span>		if v &#x3C;= t[i][0] {</span></span>
<span class="line"><span>			ans[t[j][1]] = v</span></span>
<span class="line"><span>			j--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans[t[i][1]] = v</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/advantage-shuffle" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0870.Advantage%20Shuffle/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-881" tabindex="-1">881. 救生艇 <a class="header-anchor" href="#q-881" aria-label="Permalink to &quot;881. 救生艇 {#q-881}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、排序、Tim 排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定数组 <code>people</code> 。<code>people[i]</code>表示第 <code>i</code><sup> </sup>个人的体重 ，<strong>船的数量不限</strong>，每艘船可以承载的最大重量为 <code>limit</code>。</p>&#10;&#10;<p>每艘船最多可同时载两人，但条件是这些人的重量之和最多为 <code>limit</code>。</p>&#10;&#10;<p>返回 <em>承载所有人所需的最小船数</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>people = [1,2], limit = 3&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>1 艘船载 (1, 2)&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>people = [3,2,2,1], limit = 3&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>3 艘船分别载 (1, 2), (2) 和 (3)&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>people = [3,5,3,4], limit = 5&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>4 艘船分别载 (3), (3), (4), (5)</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= people.length &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= people[i] &lt;= limit &lt;= 3 * 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每艘船最多两人且体重和不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">limit</mtext>
</math></span>，求最少船数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>5</mn>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，应让最重者尽量与最轻者同船。</p>
<p>排序后双指针：两端能同船则两人一起走，否则最重者独自走。每步消耗一艘船，直到指针交错。</p>
</blockquote>
<p>排序后，使用双指针分别指向数组首尾，每次取两个指针指向的元素之和与 <code v-pre>limit</code> 比较，如果小于等于 <code v-pre>limit</code>，则两个指针同时向中间移动一位，否则只移动右指针。累加答案即可。</p>
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
</math></span> 为数组 <code v-pre>people</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numRescueBoats(people []int, limit int) int {</span></span>
<span class="line"><span>	sort.Ints(people)</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i, j := 0, len(people)-1; i &#x3C;= j; j-- {</span></span>
<span class="line"><span>		if people[i]+people[j] &#x3C;= limit {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/boats-to-save-people" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0800-0899/0881.Boats%20to%20Save%20People/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-910" tabindex="-1">910. 最小差值 II <a class="header-anchor" href="#q-910" aria-label="Permalink to &quot;910. 最小差值 II {#q-910}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、数学、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code>，和一个整数 <code>k</code> 。</p>&#10;&#10;<p>对于每个下标 <code>i</code>（<code>0 &lt;= i &lt; nums.length</code>），将 <code>nums[i]</code> 变成<strong> </strong> <code>nums[i] + k</code> 或 <code>nums[i] - k</code> 。</p>&#10;&#10;<p><code>nums</code> 的 <strong>分数</strong> 是 <code>nums</code> 中最大元素和最小元素的差值。</p>&#10;&#10;<p>在更改每个下标对应的值之后，返回 <code>nums</code> 的最小 <strong>分数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1], k = 0&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>分数 = max(nums) - min(nums) = 1 - 1 = 0 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [0,10], k = 2&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>将数组变为 [2, 8] 。分数 = max(nums) - min(nums) = 8 - 2 = 6 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,3,6], k = 3&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>将数组变为 [4, 6, 3] 。分数 = max(nums) - min(nums) = 6 - 3 = 3 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个数只能 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mi>k</mi>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span>，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>n</mi>
  </msup>
</math></span> 种分配不可行。排序后，较小的应倾向 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mi>k</mi>
</math></span>，较大的倾向 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mi>k</mi>
</math></span>，最优划分是某个前缀加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>、后缀减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
<p>枚举分界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，新的最小值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，最大值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
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
  <mo>,</mo>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，取所有极差与原极差的最小值。</p>
</blockquote>
<p>根据题目要求，我们需要求数组中的元素最大值与最小值差值的最小值。每个元素可以加上或者减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，因此我们可以将数组中的元素分为两部分，一部分加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，一部分减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。那么，我们应该将数组中的较大值减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，较小值加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，这样才能保证最大值与最小值的差值最小。</p>
<p>因此，我们可以先将数组排序，然后枚举数组中的每个元素，将其分为两部分，一部分加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，一部分减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，并计算最大值与最小值的差值。最后，取所有差值中的最小值即可。</p>
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
</math></span> 为数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func smallestRangeII(nums []int, k int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	ans := nums[n-1] - nums[0]</span></span>
<span class="line"><span>	for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		mi := min(nums[0]+k, nums[i]-k)</span></span>
<span class="line"><span>		mx := max(nums[i-1]+k, nums[n-1]-k)</span></span>
<span class="line"><span>		ans = min(ans, mx-mi)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/smallest-range-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0910.Smallest%20Range%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-921" tabindex="-1">921. 使括号有效的最少添加 <a class="header-anchor" href="#q-921" aria-label="Permalink to &quot;921. 使括号有效的最少添加 {#q-921}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、字符串、括号序列</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>只有满足下面几点之一，括号字符串才是有效的：</p>&#10;&#10;<ul>&#10;	<li>它是一个空字符串，或者</li>&#10;	<li>它可以被写成 <code>AB</code> （<code>A</code> 与 <code>B</code> 连接）, 其中 <code>A</code> 和 <code>B</code> 都是有效字符串，或者</li>&#10;	<li>它可以被写作 <code>(A)</code>，其中 <code>A</code> 是有效字符串。</li>&#10;</ul>&#10;&#10;<p>给定一个括号字符串 <code>s</code> ，在每一次操作中，你都可以在字符串的任何位置插入一个括号</p>&#10;&#10;<ul>&#10;	<li>例如，如果 <code>s = &quot;()))&quot;</code> ，你可以插入一个开始括号为 <code>&quot;(()))&quot;</code> 或结束括号为 <code>&quot;())))&quot;</code> 。</li>&#10;</ul>&#10;&#10;<p>返回 <em>为使结果字符串 <code>s</code> 有效而必须添加的最少括号数</em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;())&quot;&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;(((&quot;&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 1000</code></li>&#10;	<li><code>s</code> 只包含 <code>'('</code> 和 <code>')'</code> 字符。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>添加最少括号使序列合法。栈匹配后剩余的左右括号都必须各补一个配对。左括号入栈，右括号优先与栈顶左括号抵消，否则入栈；结束时栈长即为答案。</p>
</blockquote>
<p>这个问题属于经典的括号匹配问题，可以使用“贪心 + 栈”来解决。</p>
<p>遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>：</p>
<ul>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 为左括号，直接将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 入栈；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 为右括号，此时如果栈不为空，且栈顶元素为左括号，则将栈顶元素出栈，表示匹配成功；否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 入栈。</li>
</ul>
<p>遍历结束后，栈中剩余的元素个数即为需要添加的括号数。</p>
<p>时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minAddToMakeValid(s string) int {</span></span>
<span class="line"><span>	stk := []rune{}</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		if c == ')' &#x26;&#x26; len(stk) > 0 &#x26;&#x26; stk[len(stk)-1] == '(' {</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			stk = append(stk, c)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(stk)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：贪心 + 计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>栈中实际只需记录未匹配的左括号个数，不必存字符。用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 计待匹配左括号，无法匹配的右括号计入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，最后再把剩余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 加上，空间降为常数。</p>
</blockquote>
<p>方法一借助了栈来实现括号匹配，也可以直接通过计数来实现。</p>
<p>定义变量 <code v-pre>cnt</code> 表示当前待匹配的左括号个数，变量 <code v-pre>ans</code> 记录答案。初始时两个变量的值均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>同样遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>：</p>
<ul>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 为左括号，将 <code v-pre>cnt</code> 的值增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 为右括号，此时如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>，说明当前有左括号可以匹配，将 <code v-pre>cnt</code> 的值减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；否则说明当前右括号无法匹配，将 <code v-pre>ans</code> 的值增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</li>
</ul>
<p>遍历结束后，将 <code v-pre>cnt</code> 的值加到 <code v-pre>ans</code> 中，即为答案。</p>
<p>时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minAddToMakeValid(s string) int {</span></span>
<span class="line"><span>	ans, cnt := 0, 0</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		if c == '(' {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		} else if cnt > 0 {</span></span>
<span class="line"><span>			cnt--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans += cnt</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0921.Minimum%20Add%20to%20Make%20Parentheses%20Valid/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-936" tabindex="-1">936. 戳印序列 <a class="header-anchor" href="#q-936" aria-label="Permalink to &quot;936. 戳印序列 {#q-936}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、队列、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你想要用<strong>小写字母</strong>组成一个目标字符串 <code>target</code>。 </p>&#10;&#10;<p>开始的时候，序列由 <code>target.length</code> 个 <code>'?'</code> 记号组成。而你有一个小写字母印章 <code>stamp</code>。</p>&#10;&#10;<p>在每个回合，你可以将印章放在序列上，并将序列中的每个字母替换为印章上的相应字母。你最多可以进行 <code>10 * target.length</code>  个回合。</p>&#10;&#10;<p>举个例子，如果初始序列为 &quot;?????&quot;，而你的印章 <code>stamp</code> 是 <code>&quot;abc&quot;</code>，那么在第一回合，你可以得到 &quot;abc??&quot;、&quot;?abc?&quot;、&quot;??abc&quot;。（请注意，印章必须完全包含在序列的边界内才能盖下去。）</p>&#10;&#10;<p>如果可以印出序列，那么返回一个数组，该数组由每个回合中被印下的最左边字母的索引组成。如果不能印出序列，就返回一个空数组。</p>&#10;&#10;<p>例如，如果序列是 &quot;ababc&quot;，印章是 <code>&quot;abc&quot;</code>，那么我们就可以返回与操作 &quot;?????&quot; -> &quot;abc??&quot; -> &quot;ababc&quot; 相对应的答案 <code>[0, 2]</code>；</p>&#10;&#10;<p>另外，如果可以印出序列，那么需要保证可以在 <code>10 * target.length</code> 个回合内完成。任何超过此数字的答案将不被接受。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>stamp = &quot;abc&quot;, target = &quot;ababc&quot;&#10;<strong>输出：</strong>[0,2]&#10;（[1,0,2] 以及其他一些可能的结果也将作为答案被接受）&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>stamp = &quot;abca&quot;, target = &quot;aabcaca&quot;&#10;<strong>输出：</strong>[3,0,1]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li><code>1 &lt;= stamp.length &lt;= target.length &lt;= 1000</code></li>&#10;	<li><code>stamp</code> 和 <code>target</code> 只包含小写字母。</li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：逆向思维 + 拓扑排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>正向盖章会被后续覆盖，难以判断何时可以盖。反过来从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 抹成问号：一个窗口当且仅当未覆盖位置都与印章一致时可以“揭掉”。</p>
<p>窗口入度为尚未匹配的位置数，位置指向包含它的未匹配窗口。入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的窗口入队，揭掉后把它覆盖的格子通知邻接窗口。全部格子被覆盖则将操作序列反转即为正向盖章顺序。</p>
</blockquote>
<p>如果我们正向地对序列进行操作，那么处理起来会比较麻烦，因为后续的操作会把前面的操作覆盖掉。我们不妨考虑逆向地对序列进行操作，即从目标字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 开始，考虑将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>?</mo>
  <mo>?</mo>
  <mo>?</mo>
  <mo>?</mo>
  <mo>?</mo>
</math></span> 的过程。</p>
<p>我们不妨记字母印章的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，目标字符串的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>。如果我们拿着字母印章在目标字符串上操作，那么一共有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个开始位置可以放置字母印章。我们可以枚举这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个开始位置，利用类似拓扑排序的方法，逆向地进行操作。</p>
<p>首先，我们明确，每个开始位置都对应着一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 的窗口。</p>
<p>接下来，我们定义以下数据结构或变量，其中：</p>
<ul>
<li>入度数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个窗口中有多少位置的字符与字母印章中的字符不同，初始时， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>m</mi>
</math></span>。若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，说明第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个窗口中的字符都与字母印章中的字符相同，那么我们就可以在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个窗口中放置字母印章。</li>
<li>邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示目标字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个位置上，所有与字母印章存在不同字符的窗口的集合。</li>
<li>队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，用于存储所有入度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的窗口的编号。</li>
<li>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span>，用于标记目标字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的每个位置是否已经被覆盖。</li>
<li>数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，用于存储答案。</li>
</ul>
<p>接下来，我们进行拓扑排序。在拓扑排序的每一步中，我们取出队首的窗口编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 放入答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中。然后，我们枚举字母印章中的每个位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，如果第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个窗口中的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个位置未被覆盖，那么我们就将其覆盖，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>g</mi>
</math></span> 数组中所有与第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个窗口中的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个位置相同的窗口的入度减少 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。如果某个窗口的入度变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么我们就将其放入队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 中等待下一次处理。</p>
<p>在拓扑排序结束后，如果目标字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的每个位置都被覆盖，那么答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中存储的就是我们要求的答案。否则，目标字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 无法被覆盖，我们就返回一个空数组。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别是目标字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 和字母印章的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func movesToStamp(stamp string, target string) (ans []int) {</span></span>
<span class="line"><span>	m, n := len(stamp), len(target)</span></span>
<span class="line"><span>	indeg := make([]int, n-m+1)</span></span>
<span class="line"><span>	for i := range indeg {</span></span>
<span class="line"><span>		indeg[i] = m</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	q := []int{}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n-m+1; i++ {</span></span>
<span class="line"><span>		for j := range stamp {</span></span>
<span class="line"><span>			if target[i+j] == stamp[j] {</span></span>
<span class="line"><span>				indeg[i]--</span></span>
<span class="line"><span>				if indeg[i] == 0 {</span></span>
<span class="line"><span>					q = append(q, i)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				g[i+j] = append(g[i+j], i)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		i := q[0]</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		ans = append(ans, i)</span></span>
<span class="line"><span>		for j := range stamp {</span></span>
<span class="line"><span>			if !vis[i+j] {</span></span>
<span class="line"><span>				vis[i+j] = true</span></span>
<span class="line"><span>				for _, k := range g[i+j] {</span></span>
<span class="line"><span>					indeg[k]--</span></span>
<span class="line"><span>					if indeg[k] == 0 {</span></span>
<span class="line"><span>						q = append(q, k)</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, v := range vis {</span></span>
<span class="line"><span>		if !v {</span></span>
<span class="line"><span>			return []int{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j := 0, len(ans)-1; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>		ans[i], ans[j] = ans[j], ans[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/stamping-the-sequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0936.Stamping%20The%20Sequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-942" tabindex="-1">942. 增减字符串匹配 <a class="header-anchor" href="#q-942" aria-label="Permalink to &quot;942. 增减字符串匹配 {#q-942}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>由范围 <code>[0,n]</code> 内所有整数组成的 <code>n + 1</code> 个整数的排列序列可以表示为长度为 <code>n</code> 的字符串 <code>s</code> ，其中:</p>&#10;&#10;<ul>&#10;	<li>如果 <code>perm[i] &lt; perm[i + 1]</code> ，那么 <code>s[i] == 'I'</code> </li>&#10;	<li>如果 <code>perm[i] > perm[i + 1]</code> ，那么 <code>s[i] == 'D'</code> </li>&#10;</ul>&#10;&#10;<p>给定一个字符串 <code>s</code> ，重构排列 <code>perm</code> 并返回它。如果有多个有效排列perm，则返回其中 <strong>任何一个</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;IDID&quot;&#10;<strong>输出：</strong>[0,4,1,3,2]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;III&quot;&#10;<strong>输出：</strong>[0,1,2,3]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;DDI&quot;&#10;<strong>输出：</strong>[3,2,0,1]</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code><span><span>s</span></span></code> 只包含字符 <code>&quot;I&quot;</code> 或 <code>&quot;D&quot;</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0.</mn>
  <mo>.</mo>
  <mi>n</mi>
</math></span> 各一次构造排列，使 <code v-pre>'I'</code>/<code v-pre>'D'</code> 对应相邻升降。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能回溯。遇 <code v-pre>'I'</code> 放当前最小剩余，遇 <code v-pre>'D'</code> 放当前最大剩余，最后补上剩下的那个数，贪心即可满足所有相邻关系。</p>
</blockquote>
<p>我们可以使用两个指针 <code v-pre>low</code> 和 <code v-pre>high</code> 分别表示当前的最小值和最大值，然后遍历字符串 <code v-pre>s</code>，如果当前字符是 <code v-pre>I</code>，那么我们就将 <code v-pre>low</code> 加入到结果数组中，并且 <code v-pre>low</code> 自增 1；如果当前字符是 <code v-pre>D</code>，那么我们就将 <code v-pre>high</code> 加入到结果数组中，并且 <code v-pre>high</code> 自减 1。</p>
<p>最后，我们将 <code v-pre>low</code> 加入到结果数组中，返回结果数组即可。</p>
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
</math></span> 为字符串 <code v-pre>s</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func diStringMatch(s string) (ans []int) {</span></span>
<span class="line"><span>	low, high := 0, len(s)</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		if c == 'I' {</span></span>
<span class="line"><span>			ans = append(ans, low)</span></span>
<span class="line"><span>			low++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans = append(ans, high)</span></span>
<span class="line"><span>			high--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans = append(ans, low)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/di-string-match" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0942.DI%20String%20Match/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-945" tabindex="-1">945. 使数组唯一的最小增量 <a class="header-anchor" href="#q-945" aria-label="Permalink to &quot;945. 使数组唯一的最小增量 {#q-945}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、计数、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 。每次 move 操作将会选择任意一个满足 <code>0 &lt;= i &lt; nums.length</code> 的下标 <code>i</code>，并将 <code>nums[i]</code> 递增 <code>1</code>。</p>&#10;&#10;<p>返回使 <code>nums</code> 中的每个值都变成唯一的所需要的最少操作次数。</p>&#10;&#10;<p>生成的测试用例保证答案在 32 位整数范围内。</p>&#10;&#10;<div>&#10;<div>&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,2]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>经过一次 <em>move</em> 操作，数组将变为 [1, 2, 3]。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,2,1,2,1,7]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>经过 6 次 <em>move</em> 操作，数组将变为 [3, 4, 1, 2, 5, 7]。&#10;可以看出 5 次或 5 次以下的 <em>move</em> 操作是不能让数组的每个值唯一的。</pre>&#10;</div>&#10;</div>&#10;&#10;<p> </p>&#10;<strong>提示：</strong>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次只能把某个数加一，使最终互不相同，求最少次数。排序后应让每个数不小于“当前已占用的下一个空位” <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>。令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo stretchy="false">&#x2190;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>y</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，增量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 累加即为代价。</p>
</blockquote>
<p>我们首先对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 进行排序，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">y</mtext>
</math></span> 记录当前的最大值，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">y</mtext>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>然后遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>y</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，并将操作次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 累加到结果中。</p>
<p>遍历完成后，返回结果即可。</p>
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
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minIncrementForUnique(nums []int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	y := -1</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		y = max(y+1, x)</span></span>
<span class="line"><span>		ans += y - x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：计数 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>排序需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。值域加上长度后上界为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，可用计数：从低到高，多余的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 全部挪到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，线性扫完值域。</p>
</blockquote>
<p>根据题目描述，结果数组的最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">len</mtext>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">)</mo>
</math></span>，我们可以使用一个计数数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 来记录每个元素出现的次数。</p>
<p>然后从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 遍历，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果它出现的次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，那么我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 个元素增加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，并将操作次数累加到结果中。</p>
<p>遍历完成后，返回结果即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 是数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度加上数组的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minIncrementForUnique(nums []int) (ans int) {</span></span>
<span class="line"><span>	m := slices.Max(nums) + len(nums)</span></span>
<span class="line"><span>	cnt := make([]int, m)</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; m-1; i++ {</span></span>
<span class="line"><span>		if diff := cnt[i] - 1; diff > 0 {</span></span>
<span class="line"><span>			cnt[i+1] += diff</span></span>
<span class="line"><span>			ans += diff</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-increment-to-make-array-unique" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0945.Minimum%20Increment%20to%20Make%20Array%20Unique/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-948" tabindex="-1">948. 令牌放置 <a class="header-anchor" href="#q-948" aria-label="Permalink to &quot;948. 令牌放置 {#q-948}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你的初始 <strong>能量</strong> 为 <code>power</code>，初始 <strong>分数</strong> 为 <code>0</code>，只有一包令牌以整数数组 <code>tokens</code> 给出。其中 <code>tokens[i]</code> 是第 <code>i</code> 个令牌的值（下标从 0 开始）。</p>&#10;&#10;<p>你的目标是通过有策略地使用这些令牌以 <strong>最大化</strong> 总 <strong>分数</strong>。在一次行动中，你可以用两种方式中的一种来使用一个 <strong>未被使用的</strong> 令牌（但不是对同一个令牌使用两种方式）：</p>&#10;&#10;<ul>&#10;	<li><strong>朝上</strong>：如果你当前 <strong>至少</strong> 有 <code>tokens[i]</code> 点 <strong>能量</strong> ，可以使用令牌 <code>i</code> ，失去 <code>tokens[i]</code> 点 <strong>能量</strong> ，并得到 <code>1</code> <strong>分</strong> 。</li>&#10;	<li><strong>朝下</strong>：如果你当前至少有 <code>1</code> <strong>分 </strong>，可以使用令牌 <code>i</code> ，获得 <code>tokens[i]</code> 点 <strong>能量</strong> ，并失去 <code>1</code> <strong>分</strong> 。</li>&#10;</ul>&#10;&#10;<p>在使用 <strong>任意</strong> 数量的令牌后，返回我们可以得到的最大 <strong>分数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tokens = [100], power = 50&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>因为你的初始分数为 <code>0</code>，无法使令牌朝下。你也不能使令牌朝上因为你的能量（<code>50</code>）比 <code>tokens[0]</code> 少（<code>100</code>）。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tokens = [200,100], power = 150&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>使令牌 1 正面朝上，能量变为 50，分数变为 1 。&#10;不必使用令牌 0，因为你无法使用它来提高分数。可得到的最大分数是 <code>1</code>。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tokens = [100,200,300,400], power = 200&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>按下面顺序使用令牌可以得到 2 分：&#10;1. 令牌 0 (<code>100</code>)正面朝上，能量变为 <code>100</code> ，分数变为 <code>1</code>&#10;2. 令牌 3 (<code>400</code>)正面朝下，能量变为 <code>500</code> ，分数变为 <code>0</code>&#10;3. 令牌 1 (<code>200</code>)正面朝上，能量变为 <code>300</code> ，分数变为 <code>1</code>&#10;4. 令牌 2 (<code>300</code>)正面朝上，能量变为 <code>0</code> ，分数变为 <code>2</code>&#10;&#10;可得的最大分数是 2。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= tokens.length &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= tokens[i], power &lt; 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>小令牌换分、大令牌换能量，求过程中分数最大值。应花最少能量换分、在必要时用分换回最多能量。排序后左指针买最便宜的，能量不够且仍有分时右指针卖掉最贵的，并持续记录分数峰值。</p>
</blockquote>
<p>令牌的使用方法有两种，一种是消耗能量得到分数，一种是消耗分数得到能量。显然，我们应该消耗尽可能少的能量来得到尽可能多的分数。</p>
<p>因此，我们可以将令牌按照消耗能量的多少进行排序，然后使用双指针，一个指针从左向右遍历，一个指针从右向左遍历，每次遍历都尽可能地消耗能量得到分数，然后更新最大分数。如果当前能量不足以消耗当前令牌，那么我们就尝试使用分数来消耗当前令牌，如果分数不足以消耗当前令牌，那么我们就停止遍历。</p>
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
</math></span> 是令牌的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func bagOfTokensScore(tokens []int, power int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(tokens)</span></span>
<span class="line"><span>	i, j := 0, len(tokens)-1</span></span>
<span class="line"><span>	score := 0</span></span>
<span class="line"><span>	for i &#x3C;= j {</span></span>
<span class="line"><span>		if power >= tokens[i] {</span></span>
<span class="line"><span>			power -= tokens[i]</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>			score++</span></span>
<span class="line"><span>			ans = max(ans, score)</span></span>
<span class="line"><span>		} else if score > 0 {</span></span>
<span class="line"><span>			power += tokens[j]</span></span>
<span class="line"><span>			j--</span></span>
<span class="line"><span>			score--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/bag-of-tokens" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0948.Bag%20of%20Tokens/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-954" tabindex="-1">954. 二倍数对数组 <a class="header-anchor" href="#q-954" aria-label="Permalink to &quot;954. 二倍数对数组 {#q-954}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个长度为偶数的整数数组 <code>arr</code>，只有对 <code>arr</code> 进行重组后可以满足 “对于每个 <code>0 &lt;= i &lt; len(arr) / 2</code>，都有 <code>arr[2 * i + 1] = 2 * arr[2 * i]</code>” 时，返回 <code>true</code>；否则，返回 <code>false</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [3,1,3,6]&#10;<strong>输出：</strong>false&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [2,1,2,6]&#10;<strong>输出：</strong>false&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>arr = [4,-2,2,-4]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= arr.length &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li><code>arr.length</code> 是偶数</li>&#10;	<li><code>-10<sup>5</sup> &lt;= arr[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把数组重排成每项都是前一项的两倍。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 只能与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 配对，奇数个则失败。其余应按绝对值从小到大匹配：较小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 必须能在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>x</mi>
</math></span> 上找到足够次数，否则大数可能已被更小的数占用。计数表记录剩余次数。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func canReorderDoubled(arr []int) bool {</span></span>
<span class="line"><span>	freq := make(map[int]int)</span></span>
<span class="line"><span>	for _, v := range arr {</span></span>
<span class="line"><span>		freq[v]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if freq[0]%2 != 0 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var keys []int</span></span>
<span class="line"><span>	for k := range freq {</span></span>
<span class="line"><span>		keys = append(keys, k)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(keys, func(i, j int) bool {</span></span>
<span class="line"><span>		return abs(keys[i]) &#x3C; abs(keys[j])</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	for _, k := range keys {</span></span>
<span class="line"><span>		if freq[k*2] &#x3C; freq[k] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		freq[k*2] -= freq[k]</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/array-of-doubled-pairs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0954.Array%20of%20Doubled%20Pairs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-955" tabindex="-1">955. 删列造序 II <a class="header-anchor" href="#q-955" aria-label="Permalink to &quot;955. 删列造序 II {#q-955}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定由 <code>n</code> 个字符串组成的数组 <code>strs</code>，其中每个字符串长度相等。</p>&#10;&#10;<p>选取一个删除索引序列，对于 <code>strs</code> 中的每个字符串，删除对应每个索引处的字符。</p>&#10;&#10;<p>比如，有 <code>strs = [&quot;abcdef&quot;, &quot;uvwxyz&quot;]</code>，删除索引序列 <code>{0, 2, 3}</code>，删除后 <code>strs</code> 为<code>[&quot;bef&quot;, &quot;vyz&quot;]</code>。</p>&#10;&#10;<p>假设，我们选择了一组删除索引 <code>answer</code>，那么在执行删除操作之后，最终得到的数组的元素是按 <strong>字典序</strong>（<code>strs[0] &lt;= strs[1] &lt;= strs[2] ... &lt;= strs[n - 1]</code>）排列的，然后请你返回 <code>answer.length</code> 的最小可能值。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;ca&quot;,&quot;bb&quot;,&quot;ac&quot;]&#10;<strong>输出：</strong>1&#10;<strong>解释： </strong>&#10;删除第一列后，strs = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]。&#10;现在 strs 中元素是按字典排列的 (即，strs[0] &lt;= strs[1] &lt;= strs[2])。&#10;我们至少需要进行 1 次删除，因为最初 strs 不是按字典序排列的，所以答案是 1。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;xc&quot;,&quot;yb&quot;,&quot;za&quot;]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>&#10;strs 的列已经是按字典序排列了，所以我们不需要删除任何东西。&#10;注意 strs 的行不需要按字典序排列。&#10;也就是说，strs[0][0] &lt;= strs[0][1] &lt;= ... 不一定成立。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;我们必须删掉每一列。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == strs.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>1 &lt;= strs[i].length &lt;= 100</code></li>&#10;	<li><code>strs[i]</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>删除最少列使整行从上到下按字典序非降。字典序由左到右第一处不同决定，已分出大小的相邻对不再受后面列影响。从左扫描：若某对尚未确定且当前列逆序，则该列必须删；否则用本列严格升序把对标记为已确定。</p>
</blockquote>
<p>字符串按字典序比较时，从左到右比较，第一个不相等的字符决定了两个字符串的大小关系。因此我们可以从左到右遍历每一列，判断当前列是否需要删除。</p>
<p>我们维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 的布尔数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">st</mtext>
</math></span>，表示相邻的字符串对是否已经确定了大小关系。如果已经确定了大小关系，那么后续在这两个字符串之间的任何字符比较都不会改变它们的大小关系。</p>
<p>对于每一列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，我们遍历所有相邻的字符串对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">strs</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mtext mathvariant="italic">strs</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">st</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为假且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">strs</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mtext mathvariant="italic">strs</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，说明当前列必须删除，我们将答案加一并跳过该列的处理；</li>
<li>否则，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">st</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 为假且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">strs</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mtext mathvariant="italic">strs</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>，说明当前列确定了这两个字符串的大小关系，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">st</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 设为真。</li>
</ul>
<p>遍历完所有列后，答案即为需要删除的列数。</p>
<p>这个贪心策略是最优的，因为字典序由从左到右第一个不同列决定。若当前列不删除且导致某对字符串顺序错误，则无论后续列如何，都无法修正这一错误，因此必须删除当前列。若当前列不删除且不导致任何字符串对顺序错误，则保留当前列不会影响最终的字典序关系。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别为字符串数组的长度和每个字符串的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minDeletionSize(strs []string) int {</span></span>
<span class="line"><span>	n := len(strs)</span></span>
<span class="line"><span>	m := len(strs[0])</span></span>
<span class="line"><span>	st := make([]bool, n-1)</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for j := 0; j &#x3C; m; j++ {</span></span>
<span class="line"><span>		mustDel := false</span></span>
<span class="line"><span>		for i := 0; i &#x3C; n-1; i++ {</span></span>
<span class="line"><span>			if !st[i] &#x26;&#x26; strs[i][j] > strs[i+1][j] {</span></span>
<span class="line"><span>				mustDel = true</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if mustDel {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			for i := 0; i &#x3C; n-1; i++ {</span></span>
<span class="line"><span>				if !st[i] &#x26;&#x26; strs[i][j] &#x3C; strs[i+1][j] {</span></span>
<span class="line"><span>					st[i] = true</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/delete-columns-to-make-sorted-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0955.Delete%20Columns%20to%20Make%20Sorted%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-969" tabindex="-1">969. 煎饼排序 <a class="header-anchor" href="#q-969" aria-label="Permalink to &quot;969. 煎饼排序 {#q-969}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>arr</code> ，请使用 <strong>煎饼翻转</strong><em> </em>完成对数组的排序。</p>&#10;&#10;<p>一次煎饼翻转的执行过程如下：</p>&#10;&#10;<ul>&#10;	<li>选择一个整数 <code>k</code> ，<code>1 &lt;= k &lt;= arr.length</code></li>&#10;	<li>反转子数组 <code>arr[0...k-1]</code>（<strong>下标从 0 开始</strong>）</li>&#10;</ul>&#10;&#10;<p>例如，<code>arr = [3,2,1,4]</code> ，选择 <code>k = 3</code> 进行一次煎饼翻转，反转子数组 <code>[3,2,1]</code> ，得到 <code>arr = [<strong>1</strong>,<strong>2</strong>,<strong>3</strong>,4]</code> 。</p>&#10;&#10;<p>以数组形式返回能使 <code>arr</code> 有序的煎饼翻转操作所对应的 <code>k</code> 值序列。任何将数组排序且翻转次数在 <code>10 * arr.length</code> 范围内的有效答案都将被判断为正确。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[3,2,4,1]&#10;<strong>输出：</strong>[4,2,4,3]&#10;<strong>解释：</strong>&#10;我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。&#10;初始状态 arr = [3, 2, 4, 1]&#10;第一次翻转后（k = 4）：arr = [<strong>1</strong>, <strong>4</strong>, <strong>2</strong>, <strong>3</strong>]&#10;第二次翻转后（k = 2）：arr = [<strong>4</strong>, <strong>1</strong>, 2, 3]&#10;第三次翻转后（k = 4）：arr = [<strong>3</strong>, <strong>2</strong>, <strong>1</strong>, <strong>4</strong>]&#10;第四次翻转后（k = 3）：arr = [<strong>1</strong>, <strong>2</strong>, <strong>3</strong>, 4]，此时已完成排序。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[1,2,3]&#10;<strong>输出：</strong>[]&#10;<strong>解释：&#10;</strong>输入已经排序，因此不需要翻转任何内容。&#10;请注意，其他可能的答案，如 [3，3] ，也将被判断为正确。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= arr.length</code></li>&#10;	<li><code>arr</code> 中的所有整数互不相同（即，<code>arr</code> 是从 <code>1</code> 到 <code>arr.length</code> 整数的一个排列）</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>烙饼排序每次反转前缀。数组是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1.</mn>
  <mo>.</mo>
  <mi>n</mi>
</math></span> 的排列，可从大到小就位：先把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 翻到最前，再翻到最终位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。记录两次翻转的前缀长度。已就位的后缀不必再动。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func pancakeSort(arr []int) []int {</span></span>
<span class="line"><span>	var ans []int</span></span>
<span class="line"><span>	n := len(arr)</span></span>
<span class="line"><span>	reverse := func(j int) {</span></span>
<span class="line"><span>		for i := 0; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>			arr[i], arr[j] = arr[j], arr[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := n - 1; i > 0; i-- {</span></span>
<span class="line"><span>		j := i</span></span>
<span class="line"><span>		for ; j > 0 &#x26;&#x26; arr[j] != i+1; j-- {</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if j &#x3C; i {</span></span>
<span class="line"><span>			if j > 0 {</span></span>
<span class="line"><span>				ans = append(ans, j+1)</span></span>
<span class="line"><span>				reverse(j)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans = append(ans, i+1)</span></span>
<span class="line"><span>			reverse(i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/pancake-sorting" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0969.Pancake%20Sorting/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-976" tabindex="-1">976. 三角形的最大周长 <a class="header-anchor" href="#q-976" aria-label="Permalink to &quot;976. 三角形的最大周长 {#q-976}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、数学、多边形、排序、快速排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定由一些正数（代表长度）组成的数组 <code>nums</code> ，返回 <em>由其中三个长度组成的、<strong>面积不为零</strong>的三角形的最大周长</em> 。如果不能形成任何面积不为零的三角形，返回 <code>0</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,1,2]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>你可以用三个边长组成一个三角形:1 2 2。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,1,10]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>&#10;你不能用边长 1,1,2 来组成三角形。&#10;不能用边长 1,1,10 来构成三角形。&#10;不能用边长 1、2 和 10 来构成三角形。&#10;因为我们不能用任何三条边长来构成一个非零面积的三角形，所以我们返回 0。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>三边 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x2264;</mo>
  <mi>b</mi>
  <mo>&#x2264;</mo>
  <mi>c</mi>
</math></span> 能围成三角形当且仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&gt;</mo>
  <mi>c</mi>
</math></span>，周长尽量大。枚举所有三元组为立方级。排序后从大到小枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，取紧邻的两条边；一旦满足不等式即为最大周长，否则该 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 不可能。</p>
</blockquote>
<p>我们不妨假设三角形的三条边长分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x2264;</mo>
  <mi>b</mi>
  <mo>&#x2264;</mo>
  <mi>c</mi>
</math></span>，则三角形的面积不为零等价于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&gt;</mo>
  <mi>c</mi>
</math></span>。</p>
<p>我们可以枚举最大的边长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，然后从剩下的边长中选取两个最大的边长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&gt;</mo>
  <mi>c</mi>
</math></span>，则可以构成一个面积不为零的三角形，且该三角形的周长最大；否则继续枚举下一个最大的边长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func largestPerimeter(nums []int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	for i := len(nums) - 1; i >= 2; i-- {</span></span>
<span class="line"><span>		if c := nums[i-1] + nums[i-2]; c > nums[i] {</span></span>
<span class="line"><span>			return c + nums[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-perimeter-triangle" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0976.Largest%20Perimeter%20Triangle/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-984" tabindex="-1">984. 不含 AAA 或 BBB 的字符串 <a class="header-anchor" href="#q-984" aria-label="Permalink to &quot;984. 不含 AAA 或 BBB 的字符串 {#q-984}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个整数 <code>a</code> 和 <code>b</code> ，返回 <strong>任意</strong> 字符串 <code>s</code> ，要求满足：</p>&#10;&#10;<ul>&#10;	<li><code>s</code> 的长度为 <code>a + b</code>，且正好包含 <code>a</code> 个 <code>'a'</code> 字母与 <code>b</code> 个 <code>'b'</code> 字母；</li>&#10;	<li>子串 <code>'aaa'</code> 没有出现在 <code>s</code> 中；</li>&#10;	<li>子串 <code>'bbb'</code> 没有出现在 <code>s</code> 中。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>a = 1, b = 2&#10;<strong>输出：</strong>&quot;abb&quot;&#10;<strong>解释：</strong>&quot;abb&quot;, &quot;bab&quot; 和 &quot;bba&quot; 都是正确答案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>a = 4, b = 1&#10;<strong>输出：</strong>&quot;aabaa&quot;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= a, b &lt;= 100</code></li>&#10;	<li>对于给定的 <code>a</code> 和 <code>b</code>，保证存在满足要求的 <code>s</code> </li>&#10;</ul>&#10;<span><span><span>​​​</span></span></span></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 构造 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 个 <code v-pre>'a'</code> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 个 <code v-pre>'b'</code> 构造不含 <code v-pre>aaa</code>/<code v-pre>bbb</code> 的串。较多的字母应优先成对输出并夹一个较少的，以免局部堆积。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&gt;</mo>
  <mi>b</mi>
</math></span> 时放 <code v-pre>aab</code>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>&gt;</mo>
  <mi>a</mi>
</math></span> 时放 <code v-pre>bba</code>，相等放 <code v-pre>ab</code>，最后把剩余单字母接上。</p>
</blockquote>
<p>循环构造字符串，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 都大于 <code v-pre>0</code> 时：</p>
<ol>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&gt;</mo>
  <mi>b</mi>
</math></span>，添加字符串 &quot;aab&quot;</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>&gt;</mo>
  <mi>a</mi>
</math></span>，添加字符串 &quot;bba&quot;</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mi>b</mi>
</math></span>，添加字符串 &quot;ab&quot;</li>
</ol>
<p>循环结束，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 有剩余，则添加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 个字符串 &quot;a&quot;；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 有剩余，则添加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 个字符串 &quot;b&quot;。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func strWithout3a3b(a int, b int) string {</span></span>
<span class="line"><span>	var ans strings.Builder</span></span>
<span class="line"><span>	for a > 0 &#x26;&#x26; b > 0 {</span></span>
<span class="line"><span>		if a > b {</span></span>
<span class="line"><span>			ans.WriteString("aab")</span></span>
<span class="line"><span>			a -= 2</span></span>
<span class="line"><span>			b -= 1</span></span>
<span class="line"><span>		} else if a &#x3C; b {</span></span>
<span class="line"><span>			ans.WriteString("bba")</span></span>
<span class="line"><span>			a -= 1</span></span>
<span class="line"><span>			b -= 2</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans.WriteString("ab")</span></span>
<span class="line"><span>			a--</span></span>
<span class="line"><span>			b--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if a > 0 {</span></span>
<span class="line"><span>		ans.WriteString(strings.Repeat("a", a))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if b > 0 {</span></span>
<span class="line"><span>		ans.WriteString(strings.Repeat("b", b))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans.String()</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/string-without-aaa-or-bbb" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0984.String%20Without%20AAA%20or%20BBB/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const g=s(p,[["render",m]]);export{d as __pageData,g as default};
