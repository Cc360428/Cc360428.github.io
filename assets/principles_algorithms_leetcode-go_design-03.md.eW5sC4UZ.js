import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const h=JSON.parse('{"title":"LeetCode Go · 数据结构设计（3）","description":"数据结构设计分类，第 911–1656 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 数据结构设计（3）","description":"数据结构设计分类，第 911–1656 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"数据结构设计分类，第 911–1656 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 数据结构设计（2）","link":"/principles/algorithms/leetcode-go/design-02"},"next":{"text":"LeetCode Go · 数据结构设计（4）","link":"/principles/algorithms/leetcode-go/design-04"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 数据结构设计（2）","link":"/principles/algorithms/leetcode-go/design-02"},"next":{"text":"LeetCode Go · 数据结构设计（4）","link":"/principles/algorithms/leetcode-go/design-04"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/design-03.md","filePath":"principles/algorithms/leetcode-go/design-03.md"}'),p={name:"principles/algorithms/leetcode-go/design-03.md"};function o(l,n,i,c,m,r){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-数据结构设计-3" tabindex="-1">LeetCode Go · 数据结构设计（3） <a class="header-anchor" href="#leetcode-go-·-数据结构设计-3" aria-label="Permalink to &quot;LeetCode Go · 数据结构设计（3）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-911" tabindex="-1">911. 在线选举 <a class="header-anchor" href="#q-911" aria-label="Permalink to &quot;911. 在线选举 {#q-911}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、数组、哈希表、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数数组 <code>persons</code> 和 <code>times</code> 。在选举中，第 <code>i</code> 张票是在时刻为 <code>times[i]</code> 时投给候选人 <code>persons[i]</code> 的。</p>&#10;&#10;<p>对于发生在时刻 <code>t</code> 的每个查询，需要找出在 <code>t</code> 时刻在选举中领先的候选人的编号。</p>&#10;&#10;<p>在 <code>t</code> 时刻投出的选票也将被计入我们的查询之中。在平局的情况下，最近获得投票的候选人将会获胜。</p>&#10;&#10;<p>实现 <code>TopVotedCandidate</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>TopVotedCandidate(int[] persons, int[] times)</code> 使用 <code>persons</code> 和 <code>times</code> 数组初始化对象。</li>&#10;	<li><code>int q(int t)</code> 根据前面描述的规则，返回在时刻 <code>t</code> 在选举中领先的候选人的编号。</li>&#10;</ul>&#10; &#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;TopVotedCandidate&quot;, &quot;q&quot;, &quot;q&quot;, &quot;q&quot;, &quot;q&quot;, &quot;q&quot;, &quot;q&quot;]&#10;[[[0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]], [3], [12], [25], [15], [24], [8]]&#10;<strong>输出：</strong>&#10;[null, 0, 1, 1, 0, 0, 1]&#10;&#10;<strong>解释：</strong>&#10;TopVotedCandidate topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);&#10;topVotedCandidate.q(3); // 返回 0 ，在时刻 3 ，票数分布为 [0] ，编号为 0 的候选人领先。&#10;topVotedCandidate.q(12); // 返回 1 ，在时刻 12 ，票数分布为 [0,1,1] ，编号为 1 的候选人领先。&#10;topVotedCandidate.q(25); // 返回 1 ，在时刻 25 ，票数分布为 [0,1,1,0,0,1] ，编号为 1 的候选人领先。（在平局的情况下，1 是最近获得投票的候选人）。&#10;topVotedCandidate.q(15); // 返回 0&#10;topVotedCandidate.q(24); // 返回 0&#10;topVotedCandidate.q(8); // 返回 1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= persons.length &lt;= 5000</code></li>&#10;	<li><code>times.length == persons.length</code></li>&#10;	<li><code>0 &lt;= persons[i] &lt; persons.length</code></li>&#10;	<li><code>0 &lt;= times[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>times</code> 是一个严格递增的有序数组</li>&#10;	<li><code>times[0] &lt;= t &lt;= 10<sup>9</sup></code></li>&#10;	<li>每个测试用例最多调用 <code>10<sup>4</sup></code> 次 <code>q</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>查询时刻 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的领先者，票数随投票变化。每次从前往后扫到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 为线性，查询次数较多时偏慢。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 严格递增，可预处理每个投票时刻的胜者：平票时取最近投票人。</p>
<p>查询时二分找到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mi>t</mi>
</math></span> 的最后一次投票，直接返回该时刻记录的胜者。</p>
</blockquote>
<p>我们可以在初始化时，记录每个时刻的胜者，然后在查询时，使用二分查找找到小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的最大时刻，返回该时刻的胜者。</p>
<p>初始化时，我们使用一个计数器 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录每个候选人的票数，用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span> 记录当前领先的候选人。然后遍历每个时刻，更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
</math></span>，并记录每个时刻的胜者。</p>
<p>查询时，我们使用二分查找找到小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的最大时刻，返回该时刻的胜者。</p>
<p>时间复杂度方面，初始化时，我们需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间，查询时，我们需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间。空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type TopVotedCandidate struct {</span></span>
<span class="line"><span>	times []int</span></span>
<span class="line"><span>	wins  []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(persons []int, times []int) TopVotedCandidate {</span></span>
<span class="line"><span>	n := len(persons)</span></span>
<span class="line"><span>	wins := make([]int, n)</span></span>
<span class="line"><span>	cnt := make([]int, n)</span></span>
<span class="line"><span>	cur := 0</span></span>
<span class="line"><span>	for i, p := range persons {</span></span>
<span class="line"><span>		cnt[p]++</span></span>
<span class="line"><span>		if cnt[cur] &#x3C;= cnt[p] {</span></span>
<span class="line"><span>			cur = p</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		wins[i] = cur</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return TopVotedCandidate{times, wins}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *TopVotedCandidate) Q(t int) int {</span></span>
<span class="line"><span>	i := sort.SearchInts(this.times, t+1) - 1</span></span>
<span class="line"><span>	return this.wins[i]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your TopVotedCandidate object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(persons, times);</span></span>
<span class="line"><span> * param_1 := obj.Q(t);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/online-election" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0911.Online%20Election/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-919" tabindex="-1">919. 完全二叉树插入器 <a class="header-anchor" href="#q-919" aria-label="Permalink to &quot;919. 完全二叉树插入器 {#q-919}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、广度优先搜索、设计、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><strong>完全二叉树</strong> 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。</p>&#10;&#10;<p>设计一种算法，将一个新节点插入到一棵完全二叉树中，并在插入后保持其完整。</p>&#10;&#10;<p>实现 <code>CBTInserter</code> 类:</p>&#10;&#10;<ul>&#10;	<li><code>CBTInserter(TreeNode root)</code> 使用头节点为 <code>root</code> 的给定树初始化该数据结构；</li>&#10;	<li><code>CBTInserter.insert(int v)</code>  向树中插入一个值为 <code>Node.val == val</code>的新节点 <code>TreeNode</code>。使树保持完全二叉树的状态，<strong>并返回插入节点</strong> <code>TreeNode</code> <strong>的父节点的值</strong>；</li>&#10;	<li><code>CBTInserter.get_root()</code> 将返回树的头节点。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<ol>&#10;</ol>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0919.Complete%20Binary%20Tree%20Inserter/images/lc-treeinsert.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入</strong>&#10;[&quot;CBTInserter&quot;, &quot;insert&quot;, &quot;insert&quot;, &quot;get_root&quot;]&#10;[[[1, 2]], [3], [4], []]&#10;<strong>输出</strong>&#10;[null, 1, 2, [1, 2, 3, 4]]&#10;&#10;<strong>解释</strong>&#10;CBTInserter cBTInserter = new CBTInserter([1, 2]);&#10;cBTInserter.insert(3);  // 返回 1&#10;cBTInserter.insert(4);  // 返回 2&#10;cBTInserter.get_root(); // 返回 [1, 2, 3, 4]</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点数量范围为 <code>[1, 1000]</code> </li>&#10;	<li><code>0 &lt;= Node.val &lt;= 5000</code></li>&#10;	<li><code>root</code> 是完全二叉树</li>&#10;	<li><code>0 &lt;= val &lt;= 5000</code> </li>&#10;	<li>每个测试用例最多调用 <code>insert</code> 和 <code>get_root</code> 操作 <code>10<sup>4</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>完全二叉树插入总是填最左空位。每次从根层序寻找空位，插入次数较多时会重复遍历已满的节点。层序把节点存进数组后，下标满足堆性质：新节点的父节点在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mi>z</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，插入与取根均为常数时间。</p>
</blockquote>
<p>我们可以使用一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>e</mi>
</math></span> 来存储完全二叉树的所有节点。在初始化时，我们使用一个队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 来层序遍历给定的树，并将所有节点存储到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>e</mi>
</math></span> 中。</p>
<p>在插入节点时，我们可以通过数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>e</mi>
</math></span> 来找到新节点的父节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span>。然后我们创建一个新节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
</math></span>，将其插入到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>e</mi>
</math></span> 中，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
</math></span> 作为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的左子节点或右子节点。最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的值。</p>
<p>在获取根节点时，我们直接返回数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>e</mi>
</math></span> 的第一个元素。</p>
<p>时间复杂度方面，初始化时需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间，插入节点和获取根节点的时间复杂度均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为树中节点的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>type CBTInserter struct {</span></span>
<span class="line"><span>	tree []*TreeNode</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(root *TreeNode) CBTInserter {</span></span>
<span class="line"><span>	q := []*TreeNode{root}</span></span>
<span class="line"><span>	tree := []*TreeNode{}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		for i := len(q); i > 0; i-- {</span></span>
<span class="line"><span>			node := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			tree = append(tree, node)</span></span>
<span class="line"><span>			if node.Left != nil {</span></span>
<span class="line"><span>				q = append(q, node.Left)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if node.Right != nil {</span></span>
<span class="line"><span>				q = append(q, node.Right)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return CBTInserter{tree}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CBTInserter) Insert(val int) int {</span></span>
<span class="line"><span>	p := this.tree[(len(this.tree)-1)/2]</span></span>
<span class="line"><span>	node := &#x26;TreeNode{val, nil, nil}</span></span>
<span class="line"><span>	this.tree = append(this.tree, node)</span></span>
<span class="line"><span>	if p.Left == nil {</span></span>
<span class="line"><span>		p.Left = node</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		p.Right = node</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return p.Val</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CBTInserter) Get_root() *TreeNode {</span></span>
<span class="line"><span>	return this.tree[0]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your CBTInserter object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(root);</span></span>
<span class="line"><span> * param_1 := obj.Insert(val);</span></span>
<span class="line"><span> * param_2 := obj.Get_root();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/complete-binary-tree-inserter" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0919.Complete%20Binary%20Tree%20Inserter/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-933" tabindex="-1">933. 最近的请求次数 <a class="header-anchor" href="#q-933" aria-label="Permalink to &quot;933. 最近的请求次数 {#q-933}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、队列、数据流</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>写一个 <code>RecentCounter</code> 类来计算特定时间范围内最近的请求。</p>&#10;&#10;<p>请你实现 <code>RecentCounter</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>RecentCounter()</code> 初始化计数器，请求数为 0 。</li>&#10;	<li><code>int ping(int t)</code> 在时间 <code>t</code> 添加一个新请求，其中 <code>t</code> 表示以毫秒为单位的某个时间，然后返回在包含范围 <code>[t - 3000, t]</code> 内发生的请求数量，即新请求加上所有早于或等于 <code>3000</code> 毫秒前的请求。</li>&#10;</ul>&#10;&#10;<p><strong>保证</strong> 每次对 <code>ping</code> 的调用都使用比之前更大的 <code>t</code> 值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;RecentCounter&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;]&#10;[[], [1], [100], [3001], [3002]]&#10;<strong>输出：</strong>&#10;[null, 1, 2, 3, 3]&#10;&#10;<strong>解释：</strong>&#10;RecentCounter recentCounter = new RecentCounter();&#10;recentCounter.ping(1);     // requests = [<strong>1</strong>]，范围是 [-2999,1]，返回 1&#10;recentCounter.ping(100);   // requests = [<strong>1</strong>, <strong>100</strong>]，范围是 [-2900,100]，返回 2&#10;recentCounter.ping(3001);  // requests = [<strong>1</strong>, <strong>100</strong>, <strong>3001</strong>]，范围是 [1,3001]，返回 3&#10;recentCounter.ping(3002);  // requests = [1, <strong>100</strong>, <strong>3001</strong>, <strong>3002</strong>]，范围是 [2,3002]，返回 3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= t &lt;= 10<sup>9</sup></code></li>&#10;	<li>保证每次对 <code>ping</code> 调用所使用的 <code>t</code> 值都 <strong>严格递增</strong></li>&#10;	<li>至多调用 <code>ping</code> 方法 <code>10<sup>4</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：队列 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 严格递增，过期请求（小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>3000</mn>
</math></span>）以后也不会再回来。用队列存请求时间，队头过期则弹出，队的大小即窗口内次数。</p>
</blockquote>
<p>由题得知，<code v-pre>t</code> 是<strong>严格递增</strong>的，当一个元素不满足 <code v-pre>[t - 3000, t]</code> 条件时，在后续的请求当中，它也不可能满足。</p>
<p>对此，需要将其从记录容器中移除，减少无意义的比较。</p>
<p>可以使用队列。每次将 <code v-pre>t</code> 进入队尾，同时从队头开始，依次移除小于 <code v-pre>t - 3000</code> 的元素。然后返回队列的大小（<code v-pre>q.size()</code>）即可。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type RecentCounter struct {</span></span>
<span class="line"><span>	q []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() RecentCounter {</span></span>
<span class="line"><span>	return RecentCounter{[]int{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *RecentCounter) Ping(t int) int {</span></span>
<span class="line"><span>	this.q = append(this.q, t)</span></span>
<span class="line"><span>	for this.q[0] &#x3C; t-3000 {</span></span>
<span class="line"><span>		this.q = this.q[1:]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(this.q)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your RecentCounter object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * param_1 := obj.Ping(t);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>队列均摊线性，若希望按历史数组查询，因 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 有序，二分定位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>3000</mn>
</math></span> 的左端，答案为后缀长度。空间仍线性，单次查询多一次对数。</p>
</blockquote>
<p><code v-pre>t</code> 严格单调递增，非常适合用二分查找来定位 <code v-pre>[t-3000, t]</code> 的左右边界。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type RecentCounter struct {</span></span>
<span class="line"><span>	s []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() RecentCounter {</span></span>
<span class="line"><span>	return RecentCounter{[]int{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *RecentCounter) Ping(t int) int {</span></span>
<span class="line"><span>	this.s = append(this.s, t)</span></span>
<span class="line"><span>	search := func(x int) int {</span></span>
<span class="line"><span>		left, right := 0, len(this.s)</span></span>
<span class="line"><span>		for left &#x3C; right {</span></span>
<span class="line"><span>			mid := (left + right) >> 1</span></span>
<span class="line"><span>			if this.s[mid] >= x {</span></span>
<span class="line"><span>				right = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				left = mid + 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return left</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(this.s) - search(t-3000)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your RecentCounter object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * param_1 := obj.Ping(t);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-recent-calls" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0933.Number%20of%20Recent%20Calls/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-981" tabindex="-1">981. 基于时间的键值存储 <a class="header-anchor" href="#q-981" aria-label="Permalink to &quot;981. 基于时间的键值存储 {#q-981}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、哈希表、字符串、二分查找</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>设计一个基于时间的键值数据结构，该结构可以在不同时间戳存储对应同一个键的多个值，并针对特定时间戳检索键对应的值。</p>&#10;&#10;<p>实现 <code>TimeMap</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>TimeMap()</code> 初始化数据结构对象</li>&#10;	<li><code>void set(String key, String value, int timestamp)</code> 存储给定时间戳 <code>timestamp</code> 时的键 <code>key</code> 和值 <code>value</code>。</li>&#10;	<li><code>String get(String key, int timestamp)</code> 返回一个值，该值在之前调用了 <code>set</code>，其中 <code>timestamp_prev &lt;= timestamp</code> 。如果有多个这样的值，它将返回与最大  <code>timestamp_prev</code> 关联的值。如果没有值，则返回空字符串（<code>&quot;&quot;</code>）。</li>&#10;</ul>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;TimeMap&quot;, &quot;set&quot;, &quot;get&quot;, &quot;get&quot;, &quot;set&quot;, &quot;get&quot;, &quot;get&quot;]&#10;[[], [&quot;foo&quot;, &quot;bar&quot;, 1], [&quot;foo&quot;, 1], [&quot;foo&quot;, 3], [&quot;foo&quot;, &quot;bar2&quot;, 4], [&quot;foo&quot;, 4], [&quot;foo&quot;, 5]]&#10;<strong>输出：</strong>&#10;[null, null, &quot;bar&quot;, &quot;bar&quot;, null, &quot;bar2&quot;, &quot;bar2&quot;]&#10;&#10;<strong>解释：</strong>&#10;TimeMap timeMap = new TimeMap();&#10;timeMap.set(&quot;foo&quot;, &quot;bar&quot;, 1);  // 存储键 &quot;foo&quot; 和值 &quot;bar&quot; ，时间戳 timestamp = 1   &#10;timeMap.get(&quot;foo&quot;, 1);         // 返回 &quot;bar&quot;&#10;timeMap.get(&quot;foo&quot;, 3);         // 返回 &quot;bar&quot;, 因为在时间戳 3 和时间戳 2 处没有对应 &quot;foo&quot; 的值，所以唯一的值位于时间戳 1 处（即 &quot;bar&quot;） 。&#10;timeMap.set(&quot;foo&quot;, &quot;bar2&quot;, 4); // 存储键 &quot;foo&quot; 和值 &quot;bar2&quot; ，时间戳 timestamp = 4  &#10;timeMap.get(&quot;foo&quot;, 4);         // 返回 &quot;bar2&quot;&#10;timeMap.get(&quot;foo&quot;, 5);         // 返回 &quot;bar2&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= key.length, value.length &lt;= 100</code></li>&#10;	<li><code>key</code> 和 <code>value</code> 由小写英文字母和数字组成</li>&#10;	<li><code>1 &lt;= timestamp &lt;= 10<sup>7</sup></code></li>&#10;	<li><code>set</code> 操作中的时间戳 <code>timestamp</code> 都是严格递增的</li>&#10;	<li>最多调用 <code>set</code> 和 <code>get</code> 操作 <code>2 * 10<sup>5</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 有序集合（或二分查找） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><code v-pre>set</code> 的时间戳严格递增，同一 key 的历史天然有序。<code v-pre>get</code> 要不超过给定时间戳的最近一次值，线性扫描在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 次调用下偏慢。按 key 存 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>t</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mo>,</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mo stretchy="false">)</mo>
</math></span> 列表，查询时二分上界即可。</p>
</blockquote>
<p>我们可以用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">kvt</mtext>
</math></span> 记录键值对，其中键为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">key</mtext>
</math></span>，值为一个有序集合，集合中的每个元素为一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">timestamp</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">value</mtext>
  <mo stretchy="false">)</mo>
</math></span>，表示键 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">key</mtext>
</math></span> 在时间戳 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">timestamp</mtext>
</math></span> 时对应的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span>。</p>
<p>当我们需要查询键 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">key</mtext>
</math></span> 在时间戳 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">timestamp</mtext>
</math></span> 时对应的值时，我们可以通过有序集合的方法找到最大的时间戳 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mtext mathvariant="italic">timestamp</mtext>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mtext mathvariant="italic">timestamp</mtext>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">timestamp</mtext>
</math></span>，然后返回对应的值即可。</p>
<p>时间复杂度方面，对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">set</mtext>
</math></span> 操作，由于哈希表的插入操作的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，因此时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">get</mtext>
</math></span> 操作，由于哈希表的查找操作的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，而有序集合的查找操作的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，因此时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">set</mtext>
</math></span> 操作的次数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type TimeMap struct {</span></span>
<span class="line"><span>	ktv map[string][]pair</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() TimeMap {</span></span>
<span class="line"><span>	return TimeMap{map[string][]pair{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *TimeMap) Set(key string, value string, timestamp int) {</span></span>
<span class="line"><span>	this.ktv[key] = append(this.ktv[key], pair{timestamp, value})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *TimeMap) Get(key string, timestamp int) string {</span></span>
<span class="line"><span>	pairs := this.ktv[key]</span></span>
<span class="line"><span>	i := sort.Search(len(pairs), func(i int) bool { return pairs[i].t > timestamp })</span></span>
<span class="line"><span>	if i > 0 {</span></span>
<span class="line"><span>		return pairs[i-1].v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ""</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct {</span></span>
<span class="line"><span>	t int</span></span>
<span class="line"><span>	v string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your TimeMap object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * obj.Set(key,value,timestamp);</span></span>
<span class="line"><span> * param_2 := obj.Get(key,timestamp);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/time-based-key-value-store" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0900-0999/0981.Time%20Based%20Key-Value%20Store/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1032" tabindex="-1">1032. 字符流 <a class="header-anchor" href="#q-1032" aria-label="Permalink to &quot;1032. 字符流 {#q-1032}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、字典树、数组、字符串、数据流、AC 自动机</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>设计一个算法：接收一个字符流，并检查这些字符的后缀是否是字符串数组 <code>words</code> 中的一个字符串。</p>&#10;&#10;<p>例如，<code>words = [&quot;abc&quot;, &quot;xyz&quot;]</code> 且字符流中逐个依次加入 4 个字符 <code>'a'</code>、<code>'x'</code>、<code>'y'</code> 和 <code>'z'</code> ，你所设计的算法应当可以检测到 <code>&quot;axyz&quot;</code> 的后缀 <code>&quot;xyz&quot;</code> 与 <code>words</code> 中的字符串 <code>&quot;xyz&quot;</code> 匹配。</p>&#10;&#10;<p>按下述要求实现 <code>StreamChecker</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>StreamChecker(String[] words)</code> ：构造函数，用字符串数组 <code>words</code> 初始化数据结构。</li>&#10;	<li><code>boolean query(char letter)</code>：从字符流中接收一个新字符，如果字符流中的任一非空后缀能匹配 <code>words</code> 中的某一字符串，返回 <code>true</code> ；否则，返回 <code>false</code>。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;StreamChecker&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;]&#10;[[[&quot;cd&quot;, &quot;f&quot;, &quot;kl&quot;]], [&quot;a&quot;], [&quot;b&quot;], [&quot;c&quot;], [&quot;d&quot;], [&quot;e&quot;], [&quot;f&quot;], [&quot;g&quot;], [&quot;h&quot;], [&quot;i&quot;], [&quot;j&quot;], [&quot;k&quot;], [&quot;l&quot;]]&#10;<strong>输出：</strong>&#10;[null, false, false, false, true, false, true, false, false, false, false, false, true]&#10;&#10;<strong>解释：</strong>&#10;StreamChecker streamChecker = new StreamChecker([&quot;cd&quot;, &quot;f&quot;, &quot;kl&quot;]);&#10;streamChecker.query(&quot;a&quot;); // 返回 False&#10;streamChecker.query(&quot;b&quot;); // 返回 False&#10;streamChecker.query(&quot;c&quot;); // 返回n False&#10;streamChecker.query(&quot;d&quot;); // 返回 True ，因为 'cd' 在 words 中&#10;streamChecker.query(&quot;e&quot;); // 返回 False&#10;streamChecker.query(&quot;f&quot;); // 返回 True ，因为 'f' 在 words 中&#10;streamChecker.query(&quot;g&quot;); // 返回 False&#10;streamChecker.query(&quot;h&quot;); // 返回 False&#10;streamChecker.query(&quot;i&quot;); // 返回 False&#10;streamChecker.query(&quot;j&quot;); // 返回 False&#10;streamChecker.query(&quot;k&quot;); // 返回 False&#10;streamChecker.query(&quot;l&quot;); // 返回 True ，因为 'kl' 在 words 中&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= words.length &lt;= 2000</code></li>&#10;	<li><code>1 &lt;= words[i].length &lt;= 200</code></li>&#10;	<li><code>words[i]</code> 由小写英文字母组成</li>&#10;	<li><code>letter</code> 是一个小写英文字母</li>&#10;	<li>最多调用查询 <code>4 * 10<sup>4</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀树 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次查询都对历史字符流做一次多模式匹配， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mo>&#x2264;</mo>
  <mn>4</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 且模式总长可观，朴素扫描会重复读同一后缀。询问的是「当前流是否以某个单词结尾」，因此应按后缀匹配。</p>
<p>把每个单词反转后插入前缀树，查询时从流的末尾往前走树。单词最长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>200</mn>
</math></span>，故只需回看有限界长。</p>
<p>构造时建反向前缀树，查询把新字母追加到缓冲并在树上走至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>201</mn>
</math></span> 步，遇到结束标记即成功。</p>
</blockquote>
<p>我们可以根据初始化时的字符串数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 构建前缀树，前缀树的每个节点包含两个属性：</p>
<ul>
<li><code v-pre>children</code>：指向 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 个字母的指针数组，用于存储当前节点的子节点。</li>
<li><code v-pre>is_end</code>：标记当前节点是否为某个字符串的结尾。</li>
</ul>
<p>在构造函数中，我们遍历字符串数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span>，对于每个字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，我们将其反转后，逐个字符插入到前缀树中，插入结束后，将当前节点的 <code v-pre>is_end</code> 标记为 <code v-pre>true</code>。</p>
<p>在 <code v-pre>query</code> 函数中，我们将当前字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 加入到字符流中，然后从后往前遍历字符流，对于每个字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>，我们在前缀树中查找是否存在以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 为结尾的字符串，如果存在，返回 <code v-pre>true</code>，否则返回 <code v-pre>false</code>。注意到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中的字符串长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>200</mn>
</math></span>，因此查询时最多只需要遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>200</mn>
</math></span> 个字符。</p>
<p>时间复杂度方面，构造函数的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>，而 <code v-pre>query</code> 函数的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>M</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 为字符串数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中所有字符串的长度之和，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为字符串数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>d</mi>
  <mi>s</mi>
</math></span> 中字符串的最大长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>L</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type Trie struct {</span></span>
<span class="line"><span>	children [26]*Trie</span></span>
<span class="line"><span>	isEnd    bool</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newTrie() Trie {</span></span>
<span class="line"><span>	return Trie{}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Trie) Insert(word string) {</span></span>
<span class="line"><span>	node := this</span></span>
<span class="line"><span>	for i := len(word) - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		idx := word[i] - 'a'</span></span>
<span class="line"><span>		if node.children[idx] == nil {</span></span>
<span class="line"><span>			node.children[idx] = &#x26;Trie{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		node = node.children[idx]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	node.isEnd = true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Trie) Search(word []byte) bool {</span></span>
<span class="line"><span>	node := this</span></span>
<span class="line"><span>	for i := len(word) - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		idx := word[i] - 'a'</span></span>
<span class="line"><span>		if node.children[idx] == nil {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		node = node.children[idx]</span></span>
<span class="line"><span>		if node.isEnd {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type StreamChecker struct {</span></span>
<span class="line"><span>	trie Trie</span></span>
<span class="line"><span>	s    []byte</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(words []string) StreamChecker {</span></span>
<span class="line"><span>	trie := newTrie()</span></span>
<span class="line"><span>	for _, w := range words {</span></span>
<span class="line"><span>		trie.Insert(w)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return StreamChecker{trie, []byte{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *StreamChecker) Query(letter byte) bool {</span></span>
<span class="line"><span>	this.s = append(this.s, letter)</span></span>
<span class="line"><span>	return this.trie.Search(this.s)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your StreamChecker object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(words);</span></span>
<span class="line"><span> * param_1 := obj.Query(letter);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/stream-of-characters" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1000-1099/1032.Stream%20of%20Characters/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1146" tabindex="-1">1146. 快照数组 <a class="header-anchor" href="#q-1146" aria-label="Permalink to &quot;1146. 快照数组 {#q-1146}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、数组、哈希表、二分查找、可持久化数据结构</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>实现支持下列接口的「快照数组」- SnapshotArray：</p>&#10;&#10;<ul>&#10;	<li><code>SnapshotArray(int length)</code> - 初始化一个与指定长度相等的 类数组 的数据结构。<strong>初始时，每个元素都等于</strong><strong> 0</strong>。</li>&#10;	<li><code>void set(index, val)</code> - 会将指定索引 <code>index</code> 处的元素设置为 <code>val</code>。</li>&#10;	<li><code>int snap()</code> - 获取该数组的快照，并返回快照的编号 <code>snap_id</code>（快照号是调用 <code>snap()</code> 的总次数减去 <code>1</code>）。</li>&#10;	<li><code>int get(index, snap_id)</code> - 根据指定的 <code>snap_id</code> 选择快照，并返回该快照指定索引 <code>index</code> 的值。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre><strong>输入：</strong>[&quot;SnapshotArray&quot;,&quot;set&quot;,&quot;snap&quot;,&quot;set&quot;,&quot;get&quot;]&#10;     [[3],[0,5],[],[0,6],[0,0]]&#10;<strong>输出：</strong>[null,null,0,null,5]&#10;<strong>解释：&#10;</strong>SnapshotArray snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组&#10;snapshotArr.set(0,5);  // 令 array[0] = 5&#10;snapshotArr.snap();  // 获取快照，返回 snap_id = 0&#10;snapshotArr.set(0,6);&#10;snapshotArr.get(0,0);  // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= length &lt;= 50000</code></li>&#10;	<li>题目最多进行<code>50000</code> 次<code>set</code>，<code>snap</code>，和 <code>get</code>的调用 。</li>&#10;	<li><code>0 &lt;= index &lt; length</code></li>&#10;	<li><code>0 &lt;= snap_id &lt; </code>我们调用 <code>snap()</code> 的总次数</li>&#10;	<li><code>0 &lt;= val &lt;= 10^9</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次 <code v-pre>snap</code> 若复制整个数组，空间与快照次数、长度之积成正比。每个下标只记录「快照编号 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo accent="false" stretchy="false">&#x2192;</mo>
</math></span> 值」的变更历史，<code v-pre>set</code> 追加当前快照号与新值。<code v-pre>get</code> 在该下标的有序历史上二分到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2264;</mo>
  <mi>s</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>p</mi>
  <mi mathvariant="normal">_</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 的最后一次修改；若无修改则默认为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们维护一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">length</mtext>
</math></span> 的数组，数组中的每个元素是一个列表，用来存储每次设置的值以及对应的快照 ID。</p>
<p>调用 <code v-pre>set</code> 方法时，将值和快照 ID 添加到对应索引的列表中。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>调用 <code v-pre>snap</code> 方法时，我们先将快照 ID 加一，然后返回快照 ID 减一。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>调用 <code v-pre>get</code> 方法时，我们使用二分查找找到对应位置的第一个快照 ID 大于 <code v-pre>snap_id</code> 的值，然后返回前一个的值。如果找不到，则返回 0。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type SnapshotArray struct {</span></span>
<span class="line"><span>	arr [][][2]int</span></span>
<span class="line"><span>	i   int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(length int) SnapshotArray {</span></span>
<span class="line"><span>	return SnapshotArray{make([][][2]int, length), 0}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *SnapshotArray) Set(index int, val int) {</span></span>
<span class="line"><span>	this.arr[index] = append(this.arr[index], [2]int{this.i, val})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *SnapshotArray) Snap() int {</span></span>
<span class="line"><span>	this.i++</span></span>
<span class="line"><span>	return this.i - 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *SnapshotArray) Get(index int, snap_id int) int {</span></span>
<span class="line"><span>	i := sort.Search(len(this.arr[index]), func(i int) bool { return this.arr[index][i][0] > snap_id }) - 1</span></span>
<span class="line"><span>	if i &#x3C; 0 {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return this.arr[index][i][1]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your SnapshotArray object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(length);</span></span>
<span class="line"><span> * obj.Set(index,val);</span></span>
<span class="line"><span> * param_2 := obj.Snap();</span></span>
<span class="line"><span> * param_3 := obj.Get(index,snap_id);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/snapshot-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1146.Snapshot%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1157" tabindex="-1">1157. 子数组中占绝大多数的元素 <a class="header-anchor" href="#q-1157" aria-label="Permalink to &quot;1157. 子数组中占绝大多数的元素 {#q-1157}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、树状数组、线段树、数组、二分查找、摩尔投票算法</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>设计一个数据结构，有效地找到给定子数组的 <strong>多数元素</strong> 。</p>&#10;&#10;<p>子数组的 <strong>多数元素</strong> 是在子数组中出现 <code>threshold</code> 次数或次数以上的元素。</p>&#10;&#10;<p>实现 <code>MajorityChecker</code> 类:</p>&#10;&#10;<ul>&#10;	<li><code>MajorityChecker(int[] arr)</code> 会用给定的数组 <code>arr</code> 对 <code>MajorityChecker</code> 初始化。</li>&#10;	<li><code>int query(int left, int right, int threshold)</code> 返回子数组中的元素  <code>arr[left...right]</code> 至少出现 <code>threshold</code> 次数，如果不存在这样的元素则返回 <code>-1</code>。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong>&#10;[&quot;MajorityChecker&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;]&#10;[[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]&#10;<strong>输出：</strong>&#10;[null, 1, -1, 2]&#10;&#10;<b>解释：</b>&#10;MajorityChecker majorityChecker = new MajorityChecker([1,1,2,2,1,1]);&#10;majorityChecker.query(0,5,4); // 返回 1&#10;majorityChecker.query(0,3,3); // 返回 -1&#10;majorityChecker.query(2,3,2); // 返回 2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= arr[i] &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= left &lt;= right &lt; arr.length</code></li>&#10;	<li><code>threshold &lt;= right - left + 1</code></li>&#10;	<li><code>2 * threshold > right - left + 1</code></li>&#10;	<li>调用 <code>query</code> 的次数最多为 <code>10<sup>4</sup></code> </li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：线段树 + 摩尔投票 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子数组众数查询次数多，不宜每次扫描。摩尔投票可在线段树上合并：区间候选众数及其抵消后的计数可按左右子区间合并。查询得到候选 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 后，用各值的下标列表二分统计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span> 内出现次数，与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>h</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mi>d</mi>
</math></span> 比较即可确认或否定。</p>
</blockquote>
<p>我们注意到，题目需要我们找出特定区间内可能的众数，考虑使用线段树来维护每个区间内的候选众数以及其出现的次数。</p>
<p>我们定义线段树的每个节点为 <code v-pre>Node</code>，每个节点包含如下属性：</p>
<ul>
<li><code v-pre>l</code>：节点的左端点，下标从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 开始。</li>
<li><code v-pre>r</code>：节点的右端点，下标从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 开始。</li>
<li><code v-pre>x</code>：节点的候选众数。</li>
<li><code v-pre>cnt</code>：节点的候选众数出现的次数。</li>
</ul>
<p>线段树主要有以下几个操作：</p>
<ul>
<li><code v-pre>build(u, l, r)</code>：建立线段树。</li>
<li><code v-pre>pushup(u)</code>：用子节点的信息更新父节点的信息。</li>
<li><code v-pre>query(u, l, r)</code>：查询区间和。</li>
</ul>
<p>在主函数的初始化方法中，我们先创建一个线段树，并且用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录每个元素在数组中的所有下标。</p>
<p>在 <code v-pre>query(left, right, threshold)</code> 方法中，我们直接调用线段树的 <code v-pre>query</code> 方法，得到候选众数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。然后使用二分查找，找到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 在数组中第一个大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，以及第一个大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>&#x2212;</mo>
  <mi>l</mi>
  <mo>&#x2265;</mo>
  <mi>t</mi>
  <mi>h</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>h</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mi>d</mi>
</math></span>，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度方面，初始化方法的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，查询方法的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type node struct {</span></span>
<span class="line"><span>	l, r, x, cnt int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type segmentTree struct {</span></span>
<span class="line"><span>	nums []int</span></span>
<span class="line"><span>	tr   []*node</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct{ x, cnt int }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newSegmentTree(nums []int) *segmentTree {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	tr := make([]*node, n&#x3C;&#x3C;2)</span></span>
<span class="line"><span>	for i := range tr {</span></span>
<span class="line"><span>		tr[i] = &#x26;node{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	t := &#x26;segmentTree{nums, tr}</span></span>
<span class="line"><span>	t.build(1, 1, n)</span></span>
<span class="line"><span>	return t</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) build(u, l, r int) {</span></span>
<span class="line"><span>	t.tr[u].l, t.tr[u].r = l, r</span></span>
<span class="line"><span>	if l == r {</span></span>
<span class="line"><span>		t.tr[u].x = t.nums[l-1]</span></span>
<span class="line"><span>		t.tr[u].cnt = 1</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mid := (l + r) >> 1</span></span>
<span class="line"><span>	t.build(u&#x3C;&#x3C;1, l, mid)</span></span>
<span class="line"><span>	t.build(u&#x3C;&#x3C;1|1, mid+1, r)</span></span>
<span class="line"><span>	t.pushup(u)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) query(u, l, r int) pair {</span></span>
<span class="line"><span>	if t.tr[u].l >= l &#x26;&#x26; t.tr[u].r &#x3C;= r {</span></span>
<span class="line"><span>		return pair{t.tr[u].x, t.tr[u].cnt}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mid := (t.tr[u].l + t.tr[u].r) >> 1</span></span>
<span class="line"><span>	if r &#x3C;= mid {</span></span>
<span class="line"><span>		return t.query(u&#x3C;&#x3C;1, l, r)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if l > mid {</span></span>
<span class="line"><span>		return t.query(u&#x3C;&#x3C;1|1, l, r)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	left, right := t.query(u&#x3C;&#x3C;1, l, r), t.query(u&#x3C;&#x3C;1|1, l, r)</span></span>
<span class="line"><span>	if left.x == right.x {</span></span>
<span class="line"><span>		left.cnt += right.cnt</span></span>
<span class="line"><span>	} else if left.cnt >= right.cnt {</span></span>
<span class="line"><span>		left.cnt -= right.cnt</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		right.cnt -= left.cnt</span></span>
<span class="line"><span>		left = right</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return left</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) pushup(u int) {</span></span>
<span class="line"><span>	if t.tr[u&#x3C;&#x3C;1].x == t.tr[u&#x3C;&#x3C;1|1].x {</span></span>
<span class="line"><span>		t.tr[u].x = t.tr[u&#x3C;&#x3C;1].x</span></span>
<span class="line"><span>		t.tr[u].cnt = t.tr[u&#x3C;&#x3C;1].cnt + t.tr[u&#x3C;&#x3C;1|1].cnt</span></span>
<span class="line"><span>	} else if t.tr[u&#x3C;&#x3C;1].cnt >= t.tr[u&#x3C;&#x3C;1|1].cnt {</span></span>
<span class="line"><span>		t.tr[u].x = t.tr[u&#x3C;&#x3C;1].x</span></span>
<span class="line"><span>		t.tr[u].cnt = t.tr[u&#x3C;&#x3C;1].cnt - t.tr[u&#x3C;&#x3C;1|1].cnt</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		t.tr[u].x = t.tr[u&#x3C;&#x3C;1|1].x</span></span>
<span class="line"><span>		t.tr[u].cnt = t.tr[u&#x3C;&#x3C;1|1].cnt - t.tr[u&#x3C;&#x3C;1].cnt</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type MajorityChecker struct {</span></span>
<span class="line"><span>	tree *segmentTree</span></span>
<span class="line"><span>	d    map[int][]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(arr []int) MajorityChecker {</span></span>
<span class="line"><span>	tree := newSegmentTree(arr)</span></span>
<span class="line"><span>	d := map[int][]int{}</span></span>
<span class="line"><span>	for i, x := range arr {</span></span>
<span class="line"><span>		d[x] = append(d[x], i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return MajorityChecker{tree, d}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *MajorityChecker) Query(left int, right int, threshold int) int {</span></span>
<span class="line"><span>	x := this.tree.query(1, left+1, right+1).x</span></span>
<span class="line"><span>	l := sort.SearchInts(this.d[x], left)</span></span>
<span class="line"><span>	r := sort.SearchInts(this.d[x], right+1)</span></span>
<span class="line"><span>	if r-l >= threshold {</span></span>
<span class="line"><span>		return x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your MajorityChecker object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(arr);</span></span>
<span class="line"><span> * param_1 := obj.Query(left,right,threshold);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/online-majority-element-in-subarray" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1157.Online%20Majority%20Element%20In%20Subarray/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1166" tabindex="-1">1166. 设计文件系统 🔒 <a class="header-anchor" href="#q-1166" aria-label="Permalink to &quot;1166. 设计文件系统 🔒 {#q-1166}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、字典树、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你需要设计一个文件系统，你可以创建新的路径并将它们与不同的值关联。</p>&#10;&#10;<p>路径的格式是一个或多个连接在一起的字符串，形式为： <code>/</code> ，后面跟着一个或多个小写英文字母。例如， <code>&quot; /leetcode&quot;</code> 和 <code>&quot;/leetcode/problems&quot;</code> 是有效路径，而空字符串 <code>&quot;&quot;</code> 和 <code>&quot;/&quot;</code> 不是。</p>&#10;&#10;<p>实现 <code>FileSystem</code> 类:</p>&#10;&#10;<ul>&#10;	<li><code>bool createPath(string path, int value)</code> 创建一个新的 <code>path</code> ，并在可能的情况下关联一个 <code>value</code> ，然后返回 <code>true</code> 。如果路径<strong>已经存在</strong>或其父路径<strong>不存在</strong>，则返回 <code>false</code> 。</li>&#10;	<li> <code>int get(string path)</code> 返回与 <code>path</code> 关联的值，如果路径不存在则返回 <code>-1</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong> &#10;[&quot;FileSystem&quot;,&quot;create&quot;,&quot;get&quot;]&#10;[[],[&quot;/a&quot;,1],[&quot;/a&quot;]]&#10;<strong>输出：</strong> &#10;[null,true,1]&#10;<strong>解释：</strong> &#10;FileSystem fileSystem = new FileSystem();&#10;&#10;fileSystem.create(&quot;/a&quot;, 1); // 返回 true&#10;fileSystem.get(&quot;/a&quot;); // 返回 1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong> &#10;[&quot;FileSystem&quot;,&quot;createPath&quot;,&quot;createPath&quot;,&quot;get&quot;,&quot;createPath&quot;,&quot;get&quot;]&#10;[[],[&quot;/leet&quot;,1],[&quot;/leet/code&quot;,2],[&quot;/leet/code&quot;],[&quot;/c/d&quot;,1],[&quot;/c&quot;]]&#10;<strong>输出：</strong> &#10;[null,true,true,2,false,-1]&#10;<strong>解释：</strong>&#10;FileSystem fileSystem = new FileSystem();&#10;&#10;fileSystem.createPath(&quot;/leet&quot;, 1); // 返回 true&#10;fileSystem.createPath(&quot;/leet/code&quot;, 2); // 返回 true&#10;fileSystem.get(&quot;/leet/code&quot;); // 返回 2&#10;fileSystem.createPath(&quot;/c/d&quot;, 1); // 返回 false 因为父路径 &quot;/c&quot; 不存在。&#10;fileSystem.get(&quot;/c&quot;); // 返回 -1 因为该路径不存在。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>对两个函数的调用次数加起来小于等于 <code>10<sup>4</sup></code> </li>&#10;	<li><code>2 &lt;= path.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= value &lt;= 10<sup>9</sup></code> </li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：前缀树 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>路径按 <code v-pre>/</code> 分段，创建时父路径必须已存在且本路径尚未创建，查询则沿段下行。前缀树以路径段为边：插入时除最后一段外均须已有孩子，最后一段不能已存在；查找任一段缺失即返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。哈希孩子使每段查找为期望常数。</p>
</blockquote>
<p>我们可以使用前缀树来存储路径，每个节点存储一个值，表示该节点对应的路径的值。</p>
<p>定义前缀树的节点结构如下：</p>
<ul>
<li><code v-pre>children</code>：子节点，使用哈希表存储，键为子节点的路径，值为子节点的引用；</li>
<li><code v-pre>v</code>：当前节点对应的路径的值。</li>
</ul>
<p>定义前缀树的方法如下：</p>
<ul>
<li><code v-pre>insert(w, v)</code>：插入路径 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span>，并将其对应的值设为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
</math></span>。如果路径 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 已经存在或其父路径不存在，则返回 <code v-pre>false</code>，否则返回 <code v-pre>true</code>。时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 为路径 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 的长度；</li>
<li><code v-pre>search(w)</code>：返回路径 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 对应的值。如果路径 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>w</mi>
</math></span> 不存在，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ul>
<p>总时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <munder>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>w</mi>
      <mo>&#x2208;</mo>
      <mi>W</mi>
    </mrow>
  </munder>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，总空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <munder>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>w</mi>
      <mo>&#x2208;</mo>
      <mi>W</mi>
    </mrow>
  </munder>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>w</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>W</mi>
</math></span> 为所有插入的路径的集合。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type trie struct {</span></span>
<span class="line"><span>	children map[string]*trie</span></span>
<span class="line"><span>	v        int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newTrie(v int) *trie {</span></span>
<span class="line"><span>	return &#x26;trie{map[string]*trie{}, v}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *trie) insert(w string, v int) bool {</span></span>
<span class="line"><span>	node := t</span></span>
<span class="line"><span>	ps := strings.Split(w, "/")</span></span>
<span class="line"><span>	for _, p := range ps[1 : len(ps)-1] {</span></span>
<span class="line"><span>		if _, ok := node.children[p]; !ok {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		node = node.children[p]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if _, ok := node.children[ps[len(ps)-1]]; ok {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	node.children[ps[len(ps)-1]] = newTrie(v)</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *trie) search(w string) int {</span></span>
<span class="line"><span>	node := t</span></span>
<span class="line"><span>	ps := strings.Split(w, "/")</span></span>
<span class="line"><span>	for _, p := range ps[1:] {</span></span>
<span class="line"><span>		if _, ok := node.children[p]; !ok {</span></span>
<span class="line"><span>			return -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		node = node.children[p]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return node.v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type FileSystem struct {</span></span>
<span class="line"><span>	trie *trie</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() FileSystem {</span></span>
<span class="line"><span>	return FileSystem{trie: newTrie(-1)}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *FileSystem) CreatePath(path string, value int) bool {</span></span>
<span class="line"><span>	return this.trie.insert(path, value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *FileSystem) Get(path string) int {</span></span>
<span class="line"><span>	return this.trie.search(path)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your FileSystem object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * param_1 := obj.CreatePath(path,value);</span></span>
<span class="line"><span> * param_2 := obj.Get(path);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-file-system" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1166.Design%20File%20System/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1172" tabindex="-1">1172. 餐盘栈 <a class="header-anchor" href="#q-1172" aria-label="Permalink to &quot;1172. 餐盘栈 {#q-1172}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、设计、哈希表、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们把无限数量 ∞ 的栈排成一行，按从左到右的次序从 0 开始编号。每个栈的的最大容量 <code>capacity</code> 都相同。</p>&#10;&#10;<p>实现一个叫「餐盘」的类 <code>DinnerPlates</code>：</p>&#10;&#10;<ul>&#10;	<li><code>DinnerPlates(int capacity)</code> - 给出栈的最大容量 <code>capacity</code>。</li>&#10;	<li><code>void push(int val)</code> - 将给出的正整数 <code>val</code> 推入 <strong>从左往右第一个 </strong>没有满的栈。</li>&#10;	<li><code>int pop()</code> - 返回 <strong>从右往左第一个 </strong>非空栈顶部的值，并将其从栈中删除；如果所有的栈都是空的，请返回 <code>-1</code>。</li>&#10;	<li><code>int popAtStack(int index)</code> - 返回编号 <code>index</code> 的栈顶部的值，并将其从栈中删除；如果编号 <code>index</code> 的栈是空的，请返回 <code>-1</code>。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre><strong>输入： </strong>&#10;[&quot;DinnerPlates&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;popAtStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;popAtStack&quot;,&quot;popAtStack&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;]&#10;[[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]]&#10;<strong>输出：</strong>&#10;[null,null,null,null,null,null,2,null,null,20,21,5,4,3,1,-1]&#10;&#10;<strong>解释：</strong>&#10;DinnerPlates D = DinnerPlates(2);  // 初始化，栈最大容量 capacity = 2&#10;D.push(1);&#10;D.push(2);&#10;D.push(3);&#10;D.push(4);&#10;D.push(5);         // 栈的现状为：    2  4&#10;                                    1  3  5&#10;                                    ﹈ ﹈ ﹈&#10;D.popAtStack(0);   // 返回 2。栈的现状为：      4&#10;                                          1  3  5&#10;                                          ﹈ ﹈ ﹈&#10;D.push(20);        // 栈的现状为：  20  4&#10;                                   1  3  5&#10;                                   ﹈ ﹈ ﹈&#10;D.push(21);        // 栈的现状为：  20  4 21&#10;                                   1  3  5&#10;                                   ﹈ ﹈ ﹈&#10;D.popAtStack(0);   // 返回 20。栈的现状为：       4 21&#10;                                            1  3  5&#10;                                            ﹈ ﹈ ﹈&#10;D.popAtStack(2);   // 返回 21。栈的现状为：       4&#10;                                            1  3  5&#10;                                            ﹈ ﹈ ﹈ &#10;D.pop()            // 返回 5。栈的现状为：        4&#10;                                            1  3 &#10;                                            ﹈ ﹈  &#10;D.pop()            // 返回 4。栈的现状为：    1  3 &#10;                                           ﹈ ﹈   &#10;D.pop()            // 返回 3。栈的现状为：    1 &#10;                                           ﹈   &#10;D.pop()            // 返回 1。现在没有栈。&#10;D.pop()            // 返回 -1。仍然没有栈。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= capacity &lt;= 20000</code></li>&#10;	<li><code>1 &lt;= val &lt;= 20000</code></li>&#10;	<li><code>0 &lt;= index &lt;= 100000</code></li>&#10;	<li>最多会对 <code>push</code>，<code>pop</code>，和 <code>popAtStack</code> 进行 <code>200000</code> 次调用。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：栈数组 + 有序集合 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><code v-pre>push</code> 必须落在最左侧未满栈，<code v-pre>pop</code> 落在最右侧非空栈，另可指定栈弹出。若每次从左扫描未满栈，操作次数大时偏慢。用栈数组存盘子，有序集合存未满下标，则最左未满为集合最小元；弹出后若成为未满则加回，最右空栈则收缩数组，保证 <code v-pre>pop</code> 对应最后一个非空栈。</p>
</blockquote>
<p>我们定义以下数据结构或变量：</p>
<ul>
<li><code v-pre>capacity</code>：每个栈的容量；</li>
<li><code v-pre>stacks</code>：栈数组，用于存储所有的栈，其中每个栈的最大容量都是 <code v-pre>capacity</code>；</li>
<li><code v-pre>not_full</code>：有序集合，用于存储所有未满的栈在栈数组中的下标。</li>
</ul>
<p>对于 <code v-pre>push(val)</code> 操作：</p>
<ul>
<li>我们首先判断 <code v-pre>not_full</code> 是否为空，如果为空，则说明没有未满的栈，需要新建一个栈，然后将 <code v-pre>val</code> 压入该栈中，此时判断容量 <code v-pre>capacity</code> 是否大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，如果大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则将该栈的下标加入 <code v-pre>not_full</code> 中。</li>
<li>如果 <code v-pre>not_full</code> 不为空，则说明有未满的栈，我们取出 <code v-pre>not_full</code> 中最小的下标 <code v-pre>index</code>，将 <code v-pre>val</code> 压入 <code v-pre>stacks[index]</code> 中，此时如果 <code v-pre>stacks[index]</code> 的容量等于 <code v-pre>capacity</code>，则将 <code v-pre>index</code> 从 <code v-pre>not_full</code> 中删除。</li>
</ul>
<p>对于 <code v-pre>popAtStack(index)</code> 操作：</p>
<ul>
<li>我们首先判断 <code v-pre>index</code> 是否在 <code v-pre>stacks</code> 的下标范围内，如果不在，则直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。如果 <code v-pre>stacks[index]</code> 为空，同样直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</li>
<li>如果 <code v-pre>stacks[index]</code> 不为空，则弹出 <code v-pre>stacks[index]</code> 的栈顶元素 <code v-pre>val</code>。如果 <code v-pre>index</code> 等于 <code v-pre>stacks</code> 的长度减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则说明 <code v-pre>stacks[index]</code> 是最后一个栈，如果为空，我们循环将最后一个栈的下标从 <code v-pre>not_full</code> 中移出，并且在栈数组 <code v-pre>stacks</code> 中移除最后一个栈，直到最后一个栈不为空、或者栈数组 <code v-pre>stacks</code> 为空为止。否则，如果 <code v-pre>stacks[index]</code> 不是最后一个栈，我们将 <code v-pre>index</code> 加入 <code v-pre>not_full</code> 中。</li>
<li>最后返回 <code v-pre>val</code>。</li>
</ul>
<p>对于 <code v-pre>pop()</code> 操作：</p>
<ul>
<li>我们直接调用 <code v-pre>popAtStack(stacks.length - 1)</code> 即可。</li>
</ul>
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
</math></span> 为操作次数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type DinnerPlates struct {</span></span>
<span class="line"><span>	capacity int</span></span>
<span class="line"><span>	stacks   [][]int</span></span>
<span class="line"><span>	notFull  *redblacktree.Tree</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(capacity int) DinnerPlates {</span></span>
<span class="line"><span>	return DinnerPlates{capacity: capacity, notFull: redblacktree.NewWithIntComparator()}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *DinnerPlates) Push(val int) {</span></span>
<span class="line"><span>	if this.notFull.Size() == 0 {</span></span>
<span class="line"><span>		this.stacks = append(this.stacks, []int{val})</span></span>
<span class="line"><span>		if this.capacity > 1 {</span></span>
<span class="line"><span>			this.notFull.Put(len(this.stacks)-1, nil)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		index, _ := this.notFull.Left().Key.(int)</span></span>
<span class="line"><span>		this.stacks[index] = append(this.stacks[index], val)</span></span>
<span class="line"><span>		if len(this.stacks[index]) == this.capacity {</span></span>
<span class="line"><span>			this.notFull.Remove(index)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *DinnerPlates) Pop() int {</span></span>
<span class="line"><span>	return this.PopAtStack(len(this.stacks) - 1)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *DinnerPlates) PopAtStack(index int) int {</span></span>
<span class="line"><span>	if index &#x3C; 0 || index >= len(this.stacks) || len(this.stacks[index]) == 0 {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	val := this.stacks[index][len(this.stacks[index])-1]</span></span>
<span class="line"><span>	this.stacks[index] = this.stacks[index][:len(this.stacks[index])-1]</span></span>
<span class="line"><span>	if index == len(this.stacks)-1 &#x26;&#x26; len(this.stacks[index]) == 0 {</span></span>
<span class="line"><span>		for len(this.stacks) > 0 &#x26;&#x26; len(this.stacks[len(this.stacks)-1]) == 0 {</span></span>
<span class="line"><span>			this.notFull.Remove(len(this.stacks) - 1)</span></span>
<span class="line"><span>			this.stacks = this.stacks[:len(this.stacks)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		this.notFull.Put(index, nil)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return val</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your DinnerPlates object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(capacity);</span></span>
<span class="line"><span> * obj.Push(val);</span></span>
<span class="line"><span> * param_2 := obj.Pop();</span></span>
<span class="line"><span> * param_3 := obj.PopAtStack(index);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/dinner-plate-stacks" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1172.Dinner%20Plate%20Stacks/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1206" tabindex="-1">1206. 设计跳表 <a class="header-anchor" href="#q-1206" aria-label="Permalink to &quot;1206. 设计跳表 {#q-1206}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、链表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>不使用任何库函数，设计一个 <strong>跳表</strong> 。</p>&#10;&#10;<p><strong>跳表</strong> 是在 <code>O(log(n))</code> 时间内完成增加、删除、搜索操作的数据结构。跳表相比于树堆与红黑树，其功能与性能相当，并且跳表的代码长度相较下更短，其设计思想与链表相似。</p>&#10;&#10;<p>例如，一个跳表包含 <code>[30, 40, 50, 60, 70, 90]</code> ，然后增加 <code>80</code>、<code>45</code> 到跳表中，以下图的方式操作：</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1206.Design%20Skiplist/images/1702370216-mKQcTt-1506_skiplist.gif" loading="lazy"></p>&#10;&#10;<p>跳表中有很多层，每一层是一个短的链表。在第一层的作用下，增加、删除和搜索操作的时间复杂度不超过 <code>O(n)</code>。跳表的每一个操作的平均时间复杂度是 <code>O(log(n))</code>，空间复杂度是 <code>O(n)</code>。</p>&#10;&#10;<p>了解更多 : <a href="https://oi-wiki.org/ds/skiplist/" target="_blank" rel="noopener noreferrer">https://oi-wiki.org/ds/skiplist/</a></p>&#10;&#10;<p>在本题中，你的设计应该要包含这些函数：</p>&#10;&#10;<ul>&#10;	<li><code>bool search(int target)</code> : 返回target是否存在于跳表中。</li>&#10;	<li><code>void add(int num)</code>: 插入一个元素到跳表。</li>&#10;	<li><code>bool erase(int num)</code>: 在跳表中删除一个值，如果 <code>num</code> 不存在，直接返回false. 如果存在多个 <code>num</code> ，删除其中任意一个即可。</li>&#10;</ul>&#10;&#10;<p>注意，跳表中可能存在多个相同的值，你的代码需要处理这种情况。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<b>输入</b>&#10;[&quot;Skiplist&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;search&quot;, &quot;add&quot;, &quot;search&quot;, &quot;erase&quot;, &quot;erase&quot;, &quot;search&quot;]&#10;[[], [1], [2], [3], [0], [4], [1], [0], [1], [1]]&#10;<strong>输出</strong>&#10;[null, null, null, null, false, null, true, false, true, false]&#10;&#10;<strong>解释</strong>&#10;Skiplist skiplist = new Skiplist();&#10;skiplist.add(1);&#10;skiplist.add(2);&#10;skiplist.add(3);&#10;skiplist.search(0);   // 返回 false&#10;skiplist.add(4);&#10;skiplist.search(1);   // 返回 true&#10;skiplist.erase(0);    // 返回 false，0 不在跳表中&#10;skiplist.erase(1);    // 返回 true&#10;skiplist.search(1);   // 返回 false，1 已被擦除&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= num, target &lt;= 2 * 10<sup>4</sup></code></li>&#10;	<li>调用<code>search</code>, <code>add</code>,  <code>erase</code>操作次数不大于 <code>5 * 10<sup>4</sup></code> </li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数据结构 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次操作可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，有序数组插入删除为线性，平衡树虽可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 但实现偏重。跳表用多层前向指针模拟平衡树的分层索引：底层存全部键，上层稀疏抽样。</p>
<p>查找、插入、删除都从最高层向下降到不超过目标的最近节点，再进入下一层，期望跳跃次数为对数。新节点层数以概率 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 向上生长，使高层保持稀疏。</p>
<p>实现上用带头节点的多层链表， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi mathvariant="normal">_</mi>
  <mi>c</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span> 在一层内滑到最接近目标的位置； <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi mathvariant="normal">_</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mi>e</mi>
  <mi>l</mi>
</math></span> 决定新节点高度。期望每步 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间与节点数及层高成正比。</p>
</blockquote>
<p>跳表的核心思想是使用多个“层级”来存储数据，每一层都相当于一个索引。数据从底层的链表开始逐渐上升到更高层级的链表，最终形成一个多层链表结构。每一层的节点只包含部分数据，这样就可以通过跳跃来减少查找的时间。</p>
<p>在这个问题中，我们使用一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Node</mtext>
</math></span> 类来表示跳表的节点，每个节点包含一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">val</mtext>
</math></span> 域和一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">next</mtext>
</math></span> 数组，数组的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">level</mtext>
</math></span>，表示当前节点在每一层的下一个节点。我们使用一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Skiplist</mtext>
</math></span> 类来实现跳表的操作。</p>
<p>跳表包含一个头节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">head</mtext>
</math></span> 和当前的最大层数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">level</mtext>
</math></span>。头节点的值设为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，用于标识链表的起始位置。我们使用一个动态数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">next</mtext>
</math></span> 来存储指向后继节点的指针。</p>
<p>对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">search</mtext>
</math></span> 操作，我们从跳表的最高层开始，逐层向下遍历，直到找到目标节点或者确定目标节点不存在。每层都通过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">find_closest</mtext>
</math></span> 方法跳跃到最接近目标的节点。</p>
<p>对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">add</mtext>
</math></span> 操作，我们首先随机决定新节点的层数。然后，从最高层开始，逐层找到每层中最接近新值的节点，并在相应位置插入新节点。如果插入的层数大于当前跳表的最大层数，我们需要更新跳表的层数。</p>
<p>对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">erase</mtext>
</math></span> 操作，类似于查找操作，遍历跳表的每一层，找到需要删除的节点并删除它。删除节点时需要更新每一层的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">next</mtext>
</math></span> 指针。如果跳表的最高层没有节点，则需要减少跳表的层数。</p>
<p>另外，我们定义了一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">random_level</mtext>
</math></span> 方法来随机决定新节点的层数。该方法会生成一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">max_level</mtext>
  <mo stretchy="false">]</mo>
</math></span> 之间的随机数，直到生成的随机数大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 为止。还有一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">find_closest</mtext>
</math></span> 方法用于查找每一层中最接近目标值的节点。</p>
<p>上述操作的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为跳表的节点数。空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func init() { rand.Seed(time.Now().UnixNano()) }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const (</span></span>
<span class="line"><span>	maxLevel = 16</span></span>
<span class="line"><span>	p        = 0.5</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type node struct {</span></span>
<span class="line"><span>	val  int</span></span>
<span class="line"><span>	next []*node</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newNode(val, level int) *node {</span></span>
<span class="line"><span>	return &#x26;node{</span></span>
<span class="line"><span>		val:  val,</span></span>
<span class="line"><span>		next: make([]*node, level),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Skiplist struct {</span></span>
<span class="line"><span>	head  *node</span></span>
<span class="line"><span>	level int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() Skiplist {</span></span>
<span class="line"><span>	return Skiplist{</span></span>
<span class="line"><span>		head:  newNode(-1, maxLevel),</span></span>
<span class="line"><span>		level: 1,</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Skiplist) Search(target int) bool {</span></span>
<span class="line"><span>	p := this.head</span></span>
<span class="line"><span>	for i := this.level - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		p = findClosest(p, i, target)</span></span>
<span class="line"><span>		if p.next[i] != nil &#x26;&#x26; p.next[i].val == target {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Skiplist) Add(num int) {</span></span>
<span class="line"><span>	level := randomLevel()</span></span>
<span class="line"><span>	if level > this.level {</span></span>
<span class="line"><span>		this.level = level</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	node := newNode(num, level)</span></span>
<span class="line"><span>	p := this.head</span></span>
<span class="line"><span>	for i := this.level - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		p = findClosest(p, i, num)</span></span>
<span class="line"><span>		if i &#x3C; level {</span></span>
<span class="line"><span>			node.next[i] = p.next[i]</span></span>
<span class="line"><span>			p.next[i] = node</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Skiplist) Erase(num int) bool {</span></span>
<span class="line"><span>	ok := false</span></span>
<span class="line"><span>	p := this.head</span></span>
<span class="line"><span>	for i := this.level - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		p = findClosest(p, i, num)</span></span>
<span class="line"><span>		if p.next[i] != nil &#x26;&#x26; p.next[i].val == num {</span></span>
<span class="line"><span>			p.next[i] = p.next[i].next[i]</span></span>
<span class="line"><span>			ok = true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for this.level > 1 &#x26;&#x26; this.head.next[this.level-1] == nil {</span></span>
<span class="line"><span>		this.level--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ok</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findClosest(p *node, level, target int) *node {</span></span>
<span class="line"><span>	for p.next[level] != nil &#x26;&#x26; p.next[level].val &#x3C; target {</span></span>
<span class="line"><span>		p = p.next[level]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return p</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func randomLevel() int {</span></span>
<span class="line"><span>	level := 1</span></span>
<span class="line"><span>	for level &#x3C; maxLevel &#x26;&#x26; rand.Float64() &#x3C; p {</span></span>
<span class="line"><span>		level++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return level</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your Skiplist object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * param_1 := obj.Search(target);</span></span>
<span class="line"><span> * obj.Add(num);</span></span>
<span class="line"><span> * param_3 := obj.Erase(num);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-skiplist" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1206.Design%20Skiplist/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1244" tabindex="-1">1244. 力扣排行榜 🔒 <a class="header-anchor" href="#q-1244" aria-label="Permalink to &quot;1244. 力扣排行榜 🔒 {#q-1244}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、哈希表、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>新一轮的「力扣杯」编程大赛即将启动，为了动态显示参赛者的得分数据，需要设计一个排行榜 Leaderboard。</p>&#10;&#10;<p>请你帮忙来设计这个 <code>Leaderboard</code> 类，使得它有如下 3 个函数：</p>&#10;&#10;<ol>&#10;	<li><code>addScore(playerId, score)</code>：&#10;&#10;    <ul>&#10;    	<li>假如参赛者已经在排行榜上，就给他的当前得分增加 <code>score</code> 点分值并更新排行。</li>&#10;    	<li>假如该参赛者不在排行榜上，就把他添加到榜单上，并且将分数设置为 <code>score</code>。</li>&#10;    </ul>&#10;    </li>&#10;    <li><code>top(K)</code>：返回前 <code>K</code> 名参赛者的 <strong>得分总和</strong>。</li>&#10;    <li><code>reset(playerId)</code>：将指定参赛者的成绩清零（换句话说，将其从排行榜中删除）。题目保证在调用此函数前，该参赛者已有成绩，并且在榜单上。</li>&#10;&#10;</ol>&#10;&#10;<p>请注意，在初始状态下，排行榜是空的。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入： </strong>&#10;[&quot;Leaderboard&quot;,&quot;addScore&quot;,&quot;addScore&quot;,&quot;addScore&quot;,&quot;addScore&quot;,&quot;addScore&quot;,&quot;top&quot;,&quot;reset&quot;,&quot;reset&quot;,&quot;addScore&quot;,&quot;top&quot;]&#10;[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]&#10;<strong>输出：</strong>&#10;[null,null,null,null,null,null,73,null,null,null,141]&#10;&#10;<strong>解释： </strong>&#10;Leaderboard leaderboard = new Leaderboard ();&#10;leaderboard.addScore(1,73);   // leaderboard = [[1,73]];&#10;leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];&#10;leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];&#10;leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];&#10;leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];&#10;leaderboard.top(1);           // returns 73;&#10;leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];&#10;leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];&#10;leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];&#10;leaderboard.top(3);           // returns 141 = 51 + 51 + 39;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= playerId, K &lt;= 10000</code></li>&#10;	<li>题目保证 <code>K</code> 小于或等于当前参赛者的数量</li>&#10;	<li><code>1 &lt;= score &lt;= 100</code></li>&#10;	<li>最多进行 <code>1000</code> 次函数调用</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 实现（灵茶山艾府） · Go 实现</summary>
<p><a href="https://github.com/EndlessCheng/codeforces-go/blob/e0fea933e2d713fd302622d2bb82a60f959a198e/leetcode/biweekly/12/a/a.go" target="_blank" rel="noopener noreferrer">灵茶山艾府 · 源码</a> · <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer">MIT 许可</a></p>
<div v-pre>
<blockquote>
<p>本站根据 Go 源码整理，非作者原文。</p>
</blockquote>
<p><strong>思路</strong>：用包级映射保存玩家的累计分数。AddScore 直接累加，Reset 把分数置零并保留该玩家的键。Top 复制映射中的全部分数，升序排序，再累加最后 k 项。Constructor 会重新初始化这个共享映射。</p>
<p><strong>复杂度</strong>：设 P 为映射中保存的玩家数（包括重置为零的玩家）。Constructor 为 O(1)，AddScore、Reset 平均为 O(1)，Top 时间为 O(P log(P+1)+k)。持久状态占 O(P) 空间，每次 Top 另需 O(P) 辅助空间。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>import "sort"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// github.com/EndlessCheng/codeforces-go</span></span>
<span class="line"><span>type Leaderboard struct{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var s map[int]int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() (_ Leaderboard) {</span></span>
<span class="line"><span>	s = map[int]int{}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (Leaderboard) AddScore(playerId, score int) {</span></span>
<span class="line"><span>	s[playerId] += score</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (Leaderboard) Top(k int) (ans int) {</span></span>
<span class="line"><span>	a := make([]int, 0, len(s))</span></span>
<span class="line"><span>	for _, v := range s {</span></span>
<span class="line"><span>		a = append(a, v)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(a)</span></span>
<span class="line"><span>	for _, v := range a[len(a)-k:] {</span></span>
<span class="line"><span>		ans += v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (Leaderboard) Reset(playerId int) {</span></span>
<span class="line"><span>	s[playerId] = 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your Leaderboard object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * obj.AddScore(playerId,score);</span></span>
<span class="line"><span> * param_2 := obj.Top(K);</span></span>
<span class="line"><span> * obj.Reset(playerId);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-a-leaderboard" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1244.Design%20A%20Leaderboard/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1261" tabindex="-1">1261. 在受污染的二叉树中查找元素 <a class="header-anchor" href="#q-1261" aria-label="Permalink to &quot;1261. 在受污染的二叉树中查找元素 {#q-1261}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、设计、哈希表、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出一个满足下述规则的二叉树：</p>&#10;&#10;<ol>&#10;	<li><code>root.val == 0</code></li>&#10;	<li>对于任意 <code>treeNode</code>：&#10;	<ol>&#10;		<li>如果 <code>treeNode.val</code> 为 <code>x</code> 且 <code>treeNode.left != null</code>，那么 <code>treeNode.left.val == 2 * x + 1</code></li>&#10;		<li>如果 <code>treeNode.val</code> 为 <code>x</code> 且 <code>treeNode.right != null</code>，那么 <code>treeNode.right.val == 2 * x + 2</code></li>&#10;	</ol>&#10;	</li>&#10;</ol>&#10;&#10;<p>现在这个二叉树受到「污染」，所有的 <code>treeNode.val</code> 都变成了 <code>-1</code>。</p>&#10;&#10;<p>请你先还原二叉树，然后实现 <code>FindElements</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>FindElements(TreeNode* root)</code> 用受污染的二叉树初始化对象，你需要先把它还原。</li>&#10;	<li><code>bool find(int target)</code> 判断目标值 <code>target</code> 是否存在于还原后的二叉树中并返回结果。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1261.Find%20Elements%20in%20a%20Contaminated%20Binary%20Tree/images/untitled-diagram-4-1.jpg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;]&#10;[[[-1,null,-1]],[1],[2]]&#10;<strong>输出：</strong>&#10;[null,false,true]&#10;<strong>解释：</strong>&#10;FindElements findElements = new FindElements([-1,null,-1]); &#10;findElements.find(1); // return False &#10;findElements.find(2); // return True </pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1261.Find%20Elements%20in%20a%20Contaminated%20Binary%20Tree/images/untitled-diagram-4.jpg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]&#10;[[[-1,-1,-1,-1,-1]],[1],[3],[5]]&#10;<strong>输出：</strong>&#10;[null,true,true,false]&#10;<strong>解释：</strong>&#10;FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);&#10;findElements.find(1); // return True&#10;findElements.find(3); // return True&#10;findElements.find(5); // return False</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1261.Find%20Elements%20in%20a%20Contaminated%20Binary%20Tree/images/untitled-diagram-4-1-1.jpg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]&#10;[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]&#10;<strong>输出：</strong>&#10;[null,true,false,false,true]&#10;<strong>解释：</strong>&#10;FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);&#10;findElements.find(2); // return True&#10;findElements.find(3); // return False&#10;findElements.find(4); // return False&#10;findElements.find(5); // return True&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>TreeNode.val == -1</code></li>&#10;	<li>二叉树的高度不超过 <code>20</code></li>&#10;	<li>节点的总数在 <code>[1, 10<sup>4</sup>]</code> 之间</li>&#10;	<li>调用 <code>find()</code> 的总次数在 <code>[1, 10<sup>4</sup>]</code> 之间</li>&#10;	<li><code>0 &lt;= target &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS + 哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>被污染后值全是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，但父子仍满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>2</mn>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>2</mn>
  <mi>x</mi>
  <mo>+</mo>
  <mn>2</mn>
</math></span>，根为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。查找可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 次，不宜每次从根重算路径。</p>
<p>构造时 DFS 恢复每个节点的值并放入哈希集合； <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
</math></span> 只查询集合。一次遍历换来常数查找。</p>
</blockquote>
<p>我们先通过 DFS 遍历二叉树，将节点值恢复为原来的值，并将所有节点值存入哈希表中。然后在查找时，只需要判断哈希表中是否存在目标值即可。</p>
<p>时间复杂度方面，初始化时需要遍历二叉树，时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，查找时只需要判断哈希表中是否存在目标值，时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为二叉树节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>type FindElements struct {</span></span>
<span class="line"><span>	s map[int]bool</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(root *TreeNode) FindElements {</span></span>
<span class="line"><span>	root.Val = 0</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		s[root.Val] = true</span></span>
<span class="line"><span>		if root.Left != nil {</span></span>
<span class="line"><span>			root.Left.Val = root.Val*2 + 1</span></span>
<span class="line"><span>			dfs(root.Left)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root.Right != nil {</span></span>
<span class="line"><span>			root.Right.Val = root.Val*2 + 2</span></span>
<span class="line"><span>			dfs(root.Right)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return FindElements{s}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *FindElements) Find(target int) bool {</span></span>
<span class="line"><span>	return this.s[target]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your FindElements object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(root);</span></span>
<span class="line"><span> * param_1 := obj.Find(target);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-elements-in-a-contaminated-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1261.Find%20Elements%20in%20a%20Contaminated%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1286" tabindex="-1">1286. 字母组合迭代器 <a class="header-anchor" href="#q-1286" aria-label="Permalink to &quot;1286. 字母组合迭代器 {#q-1286}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、字符串、回溯、迭代器</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>请你设计一个迭代器类 <code>CombinationIterator</code> ，包括以下内容：</p>&#10;&#10;<ul>&#10;	<li><code>CombinationIterator(string characters, int combinationLength)</code> 一个构造函数，输入参数包括：用一个 <strong>有序且字符唯一 </strong>的字符串 <code>characters</code>（该字符串只包含小写英文字母）和一个数字 <code>combinationLength</code> 。</li>&#10;	<li>函数 <em><code>next()</code> </em>，按 <strong>字典序 </strong>返回长度为 <code>combinationLength</code> 的下一个字母组合。</li>&#10;	<li>函数 <em><code>hasNext()</code> </em>，只有存在长度为 <code>combinationLength</code> 的下一个字母组合时，才返回 <code>true</code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong>&#10;[&quot;CombinationIterator&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;]&#10;[[&quot;abc&quot;, 2], [], [], [], [], [], []]&#10;<strong>输出：</strong>&#10;[null, &quot;ab&quot;, true, &quot;ac&quot;, true, &quot;bc&quot;, false]&#10;<strong>解释：&#10;</strong>CombinationIterator iterator = new CombinationIterator(&quot;abc&quot;, 2); // 创建迭代器 iterator&#10;iterator.next(); // 返回 &quot;ab&quot;&#10;iterator.hasNext(); // 返回 true&#10;iterator.next(); // 返回 &quot;ac&quot;&#10;iterator.hasNext(); // 返回 true&#10;iterator.next(); // 返回 &quot;bc&quot;&#10;iterator.hasNext(); // 返回 false&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= combinationLength &lt;= characters.length &lt;= 15</code></li>&#10;	<li> <code>characters</code> 中每个字符都 <strong>不同</strong></li>&#10;	<li>每组测试数据最多对 <code>next</code> 和 <code>hasNext</code> 调用 <code>10<sup>4</sup></code>次</li>&#10;	<li>题目保证每次调用函数 <code>next</code> 时都存在下一个字母组合。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS 回溯 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>字符互异且长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span>，组合数有限。预生成全部长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 的组合后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
</math></span>/<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>N</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
</math></span> 只做下标移动。DFS 按从左到右选或不选，保证字典序。</p>
</blockquote>
<p>我们通过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>D</mi>
  <mi>F</mi>
  <mi>S</mi>
</math></span> 枚举，预处理生成所有长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 的字符串，存放到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>s</mi>
</math></span> 数组中。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type CombinationIterator struct {</span></span>
<span class="line"><span>	cs  []string</span></span>
<span class="line"><span>	idx int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(characters string, combinationLength int) CombinationIterator {</span></span>
<span class="line"><span>	t := []byte{}</span></span>
<span class="line"><span>	n := len(characters)</span></span>
<span class="line"><span>	cs := []string{}</span></span>
<span class="line"><span>	var dfs func(int)</span></span>
<span class="line"><span>	dfs = func(i int) {</span></span>
<span class="line"><span>		if len(t) == combinationLength {</span></span>
<span class="line"><span>			cs = append(cs, string(t))</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if i == n {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t = append(t, characters[i])</span></span>
<span class="line"><span>		dfs(i + 1)</span></span>
<span class="line"><span>		t = t[:len(t)-1]</span></span>
<span class="line"><span>		dfs(i + 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(0)</span></span>
<span class="line"><span>	return CombinationIterator{cs, 0}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CombinationIterator) Next() string {</span></span>
<span class="line"><span>	ans := this.cs[this.idx]</span></span>
<span class="line"><span>	this.idx++</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CombinationIterator) HasNext() bool {</span></span>
<span class="line"><span>	return this.idx &#x3C; len(this.cs)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your CombinationIterator object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(characters, combinationLength);</span></span>
<span class="line"><span> * param_1 := obj.Next();</span></span>
<span class="line"><span> * param_2 := obj.HasNext();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：二进制编码 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一占用与组合数成正比的数组。用长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 的二进制掩码表示子集，从满掩码向下扫，只输出恰有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的掩码，按位还原字符。按需生成，不必存下全部串。</p>
</blockquote>
<p>我们看个例子，对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>b</mi>
  <mi>c</mi>
  <mi>d</mi>
</math></span>，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 为 2，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>s</mi>
</math></span> 就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>b</mi>
  <mo>,</mo>
  <mi>a</mi>
  <mi>c</mi>
  <mo>,</mo>
  <mi>a</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mi>c</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mi>c</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>.</mo>
</math></span>。</p>
<p>对应的二进制数为：</p>
<div class="language- vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>1100</span></span>
<span class="line"><span>1010</span></span>
<span class="line"><span>1001</span></span>
<span class="line"><span>0110</span></span>
<span class="line"><span>0101</span></span>
<span class="line"><span>0011</span></span>
<span class="line"><span>...</span></span></code></pre>
</div><p>观察到上述规律后，我们依次按照二进制编码从大到小的规律，将所有字符串依次求出。</p>
<p>所谓的长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>i</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mi>L</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>g</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span>，只需要满足二进制编码中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的个数满足要求即可。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type CombinationIterator struct {</span></span>
<span class="line"><span>	curr int</span></span>
<span class="line"><span>	size int</span></span>
<span class="line"><span>	cs   []byte</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(characters string, combinationLength int) CombinationIterator {</span></span>
<span class="line"><span>	n := len(characters)</span></span>
<span class="line"><span>	curr := (1 &#x3C;&#x3C; n) - 1</span></span>
<span class="line"><span>	size := combinationLength</span></span>
<span class="line"><span>	cs := make([]byte, n)</span></span>
<span class="line"><span>	for i := range characters {</span></span>
<span class="line"><span>		cs[n-i-1] = characters[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return CombinationIterator{curr, size, cs}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CombinationIterator) Next() string {</span></span>
<span class="line"><span>	for this.curr >= 0 &#x26;&#x26; bits.OnesCount(uint(this.curr)) != this.size {</span></span>
<span class="line"><span>		this.curr--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []byte{}</span></span>
<span class="line"><span>	for i := range this.cs {</span></span>
<span class="line"><span>		if (this.curr >> i &#x26; 1) == 1 {</span></span>
<span class="line"><span>			ans = append(ans, this.cs[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, j := 0, len(ans)-1; i &#x3C; j; i, j = i+1, j-1 {</span></span>
<span class="line"><span>		ans[i], ans[j] = ans[j], ans[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.curr--</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CombinationIterator) HasNext() bool {</span></span>
<span class="line"><span>	for this.curr >= 0 &#x26;&#x26; bits.OnesCount(uint(this.curr)) != this.size {</span></span>
<span class="line"><span>		this.curr--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return this.curr >= 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your CombinationIterator object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(characters, combinationLength);</span></span>
<span class="line"><span> * param_1 := obj.Next();</span></span>
<span class="line"><span> * param_2 := obj.HasNext();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/iterator-for-combination" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1286.Iterator%20for%20Combination/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1348" tabindex="-1">1348. 推文计数 <a class="header-anchor" href="#q-1348" aria-label="Permalink to &quot;1348. 推文计数 {#q-1348}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、哈希表、字符串、二分查找、有序集合、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一家社交媒体公司正试图通过分析特定时间段内出现的推文数量来监控其网站上的活动。这些时间段可以根据特定的频率（ <strong>每分钟 </strong>、<strong>每小时 </strong>或 <strong>每一天</strong> ）划分为更小的 <strong>时间段</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p>例如，周期 <code>[10,10000]</code> （以 <strong>秒</strong> 为单位）将被划分为以下频率的 <strong>时间块</strong> :</p>&#10;&#10;<ul>&#10;	<li>每 <strong>分钟</strong> (60秒 块)： <code>[10,69]</code>, <code>[70,129]</code>, <code>[130,189]</code>, <code>...</code>, <code>[9970,10000]</code></li>&#10;	<li>每 <strong>小时</strong> (3600秒 块)：<code>[10,3609]</code>, <code>[3610,7209]</code>, <code>[7210,10000]</code></li>&#10;	<li>每 <strong>天</strong> (86400秒 块)： <code>[10,10000]</code></li>&#10;</ul>&#10;&#10;<p>注意，最后一个块可能比指定频率的块大小更短，并且总是以时间段的结束时间结束(在上面的示例中为 <code>10000</code> )。</p>&#10;&#10;<p>设计和实现一个API来帮助公司进行分析。</p>&#10;&#10;<p>实现 <code>TweetCounts</code> 类:</p>&#10;&#10;<ul>&#10;	<li><code>TweetCounts()</code> 初始化 <code>TweetCounts</code> 对象。</li>&#10;	<li>存储记录时间的 <code>tweetName</code> (以秒为单位)。</li>&#10;	<li><code>List&lt;integer> getTweetCountsPerFrequency(String freq, String tweetName, int startTime, int endTime)</code> 返回一个整数列表，表示给定时间 <code>[startTime, endTime]</code> （单位秒）和频率频率中，每个 <strong>时间块</strong> 中带有 <code>tweetName</code> 的 <code>tweet</code> 的数量。&#10;	<ul>&#10;		<li><code>freq</code> 是 <code>“minute”</code> 、 <code>“hour”</code> 或 <code>“day”</code> 中的一个，分别表示 <strong>每分钟</strong> 、 <strong>每小时</strong> 或 <strong>每一天</strong> 的频率。</li>&#10;	</ul>&#10;	</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;TweetCounts&quot;,&quot;recordTweet&quot;,&quot;recordTweet&quot;,&quot;recordTweet&quot;,&quot;getTweetCountsPerFrequency&quot;,&quot;getTweetCountsPerFrequency&quot;,&quot;recordTweet&quot;,&quot;getTweetCountsPerFrequency&quot;]&#10;[[],[&quot;tweet3&quot;,0],[&quot;tweet3&quot;,60],[&quot;tweet3&quot;,10],[&quot;minute&quot;,&quot;tweet3&quot;,0,59],[&quot;minute&quot;,&quot;tweet3&quot;,0,60],[&quot;tweet3&quot;,120],[&quot;hour&quot;,&quot;tweet3&quot;,0,210]]&#10;&#10;<strong>输出：</strong>&#10;[null,null,null,null,[2],[2,1],null,[4]]&#10;&#10;<strong>解释：</strong>&#10;TweetCounts tweetCounts = new TweetCounts();&#10;tweetCounts.recordTweet(&quot;tweet3&quot;, 0);&#10;tweetCounts.recordTweet(&quot;tweet3&quot;, 60);&#10;tweetCounts.recordTweet(&quot;tweet3&quot;, 10);                             // &quot;tweet3&quot; 发布推文的时间分别是 0, 10 和 60 。&#10;tweetCounts.getTweetCountsPerFrequency(&quot;minute&quot;, &quot;tweet3&quot;, 0, 59); // 返回 [2]。统计频率是每分钟（60 秒），因此只有一个有效时间间隔 [0,60> - > 2 条推文。&#10;tweetCounts.getTweetCountsPerFrequency(&quot;minute&quot;, &quot;tweet3&quot;, 0, 60); // 返回 [2,1]。统计频率是每分钟（60 秒），因此有两个有效时间间隔 <strong>1)</strong> [0,60> - > 2 条推文，和 <strong>2)</strong> [60,61> - > 1 条推文。 &#10;tweetCounts.recordTweet(&quot;tweet3&quot;, 120);                            // &quot;tweet3&quot; 发布推文的时间分别是 0, 10, 60 和 120 。&#10;tweetCounts.getTweetCountsPerFrequency(&quot;hour&quot;, &quot;tweet3&quot;, 0, 210);  // 返回 [4]。统计频率是每小时（3600 秒），因此只有一个有效时间间隔 [0,211> - > 4 条推文。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= time, startTime, endTime &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= endTime - startTime &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>recordTweet</code> 和 <code>getTweetCountsPerFrequency</code>，最多有 <code>10<sup>4</sup></code> 次操作。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1348.Tweet%20Counts%20Per%20Frequency/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：沿用 Python「用户哈希表 + 有序时间表 + 分桶二分」方法。标准库没有 SortedList，因此用排序切片保存每个名字的全部时间，RecordTweet 二分定位并移动尾部插入，保留重复时间。查询按频率切成左闭右开区间，使用两次二分得到每个区间的记录数，最后一桶截到 endTime+1。</p>
<p><strong>变量与复杂度</strong>：T 为该名字已有记录数，B=⌊(endTime−startTime)/频率⌋+1 为桶数，总记录数为 N。插入 O(T)（切片移动，不误称 O(log T)），查询 O(B log(T+1))，存储 O(N)，查询结果空间 O(B)。总操作≤10⁴，插入最坏累计约 5·10⁷ 个整数移动；查询时间跨度≤10⁴，分钟桶数≤167，满足约束。</p>
<p><strong>平台接口</strong>：Constructor() TweetCounts，RecordTweet(tweetName string, time int)，GetTweetCountsPerFrequency(freq, tweetName string, startTime, endTime int) []int。该题为顺序设计题，不要求并发调用。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1348.Tweet%20Counts%20Per%20Frequency/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1348.Tweet%20Counts%20Per%20Frequency/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import "sort"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type TweetCounts struct{ times map[string][]int }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() TweetCounts { return TweetCounts{times: map[string][]int{}} }</span></span>
<span class="line"><span>func (t *TweetCounts) RecordTweet(tweetName string, time int) {</span></span>
<span class="line"><span>	a := t.times[tweetName]</span></span>
<span class="line"><span>	i := sort.SearchInts(a, time)</span></span>
<span class="line"><span>	a = append(a, 0)</span></span>
<span class="line"><span>	copy(a[i+1:], a[i:])</span></span>
<span class="line"><span>	a[i] = time</span></span>
<span class="line"><span>	t.times[tweetName] = a</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (t *TweetCounts) GetTweetCountsPerFrequency(freq, tweetName string, startTime, endTime int) []int {</span></span>
<span class="line"><span>	width := 60</span></span>
<span class="line"><span>	switch freq {</span></span>
<span class="line"><span>	case "hour":</span></span>
<span class="line"><span>		width = 3600</span></span>
<span class="line"><span>	case "day":</span></span>
<span class="line"><span>		width = 86400</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a := t.times[tweetName]</span></span>
<span class="line"><span>	answer := make([]int, (endTime-startTime)/width+1)</span></span>
<span class="line"><span>	for i := range answer {</span></span>
<span class="line"><span>		lo := startTime + i*width</span></span>
<span class="line"><span>		hi := lo + width</span></span>
<span class="line"><span>		if hi > endTime+1 {</span></span>
<span class="line"><span>			hi = endTime + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		answer[i] = sort.SearchInts(a, hi) - sort.SearchInts(a, lo)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return answer</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/tweet-counts-per-frequency" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1348.Tweet%20Counts%20Per%20Frequency/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1352" tabindex="-1">1352. 最后 K 个数的乘积 <a class="header-anchor" href="#q-1352" aria-label="Permalink to &quot;1352. 最后 K 个数的乘积 {#q-1352}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、数组、数学、数据流、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>设计一个算法，该算法接受一个整数流并检索该流中最后 <code>k</code> 个整数的乘积。</p>&#10;&#10;<p>实现 <code>ProductOfNumbers</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>ProductOfNumbers()</code> 用一个空的流初始化对象。</li>&#10;	<li><code>void add(int num)</code> 将数字 <code>num</code> 添加到当前数字列表的最后面。</li>&#10;	<li><code>int getProduct(int k)</code> 返回当前数字列表中，最后 <code>k</code> 个数字的乘积。你可以假设当前列表中始终 <strong>至少</strong> 包含 <code>k</code> 个数字。</li>&#10;</ul>&#10;&#10;<p>题目数据保证：任何时候，任一连续数字序列的乘积都在 32 位整数范围内，不会溢出。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;ProductOfNumbers&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;getProduct&quot;,&quot;getProduct&quot;,&quot;getProduct&quot;,&quot;add&quot;,&quot;getProduct&quot;]&#10;[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]&#10;&#10;<strong>输出：</strong>&#10;[null,null,null,null,null,null,20,40,0,null,32]&#10;&#10;<strong>解释：</strong>&#10;ProductOfNumbers productOfNumbers = new ProductOfNumbers();&#10;productOfNumbers.add(3);        // [3]&#10;productOfNumbers.add(0);        // [3,0]&#10;productOfNumbers.add(2);        // [3,0,2]&#10;productOfNumbers.add(5);        // [3,0,2,5]&#10;productOfNumbers.add(4);        // [3,0,2,5,4]&#10;productOfNumbers.getProduct(2); // 返回 20 。最后 2 个数字的乘积是 5 * 4 = 20&#10;productOfNumbers.getProduct(3); // 返回 40 。最后 3 个数字的乘积是 2 * 5 * 4 = 40&#10;productOfNumbers.getProduct(4); // 返回  0 。最后 4 个数字的乘积是 0 * 2 * 5 * 4 = 0&#10;productOfNumbers.add(8);        // [3,0,2,5,4,8]&#10;productOfNumbers.getProduct(2); // 返回 32 。最后 2 个数字的乘积是 4 * 8 = 32 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= num &lt;= 100</code></li>&#10;	<li><code>1 &lt;= k &lt;= 4 * 10<sup>4</sup></code></li>&#10;	<li><code>add</code> 和 <code>getProduct</code> 最多被调用 <code>4 * 10<sup>4</sup></code> 次。</li>&#10;	<li>在任何时间点流的乘积都在 32 位整数范围内。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>您能否 <strong>同时</strong> 将 <code>GetProduct</code> 和 <code>Add</code> 的实现改为 <code>O(1)</code> 时间复杂度，而不是 <code>O(k)</code> 时间复杂度？</p></div>
</details>
<details class="details custom-block"><summary>方法一：前缀积 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>动态追加数字并查询末尾 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个的积。每次重乘是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，调用可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。前缀积使区间积变成两次取值相除。遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时其后任何含该 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的积都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，因此把前缀重置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，查询时若长度不足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 则说明窗口里有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们初始化一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数字的乘积。</p>
<p>当调用 <code v-pre>add(num)</code> 时，我们判断 <code v-pre>num</code> 是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，若是，则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 置为 <code v-pre>[1]</code>，否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的最后一个元素乘以 <code v-pre>num</code>，并将结果添加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的末尾。</p>
<p>当调用 <code v-pre>getProduct(k)</code> 时，此时判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的长度是否小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，若是，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的最后一个元素除以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的倒数第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 个元素。即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为调用 <code v-pre>add</code> 的次数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type ProductOfNumbers struct {</span></span>
<span class="line"><span>	s []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() ProductOfNumbers {</span></span>
<span class="line"><span>	return ProductOfNumbers{[]int{1}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ProductOfNumbers) Add(num int) {</span></span>
<span class="line"><span>	if num == 0 {</span></span>
<span class="line"><span>		this.s = []int{1}</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.s = append(this.s, this.s[len(this.s)-1]*num)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ProductOfNumbers) GetProduct(k int) int {</span></span>
<span class="line"><span>	n := len(this.s)</span></span>
<span class="line"><span>	if n &#x3C;= k {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return this.s[len(this.s)-1] / this.s[len(this.s)-k-1]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your ProductOfNumbers object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * obj.Add(num);</span></span>
<span class="line"><span> * param_2 := obj.GetProduct(k);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/product-of-the-last-k-numbers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1352.Product%20of%20the%20Last%20K%20Numbers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1357" tabindex="-1">1357. 每隔 n 个顾客打折 <a class="header-anchor" href="#q-1357" aria-label="Permalink to &quot;1357. 每隔 n 个顾客打折 {#q-1357}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>超市里正在举行打折活动，每隔 <code>n</code> 个顾客会得到 <code>discount</code> 的折扣。</p>&#10;&#10;<p>超市里有一些商品，第 <code>i</code> 种商品为 <code>products[i]</code> 且每件单品的价格为 <code>prices[i]</code> 。</p>&#10;&#10;<p>结账系统会统计顾客的数目，每隔 <code>n</code> 个顾客结账时，该顾客的账单都会打折，折扣为 <code>discount</code> （也就是如果原本账单为 <code>x</code> ，那么实际金额会变成 <code>x - (discount * x) / 100</code> ），然后系统会重新开始计数。</p>&#10;&#10;<p>顾客会购买一些商品， <code>product[i]</code> 是顾客购买的第 <code>i</code> 种商品， <code>amount[i]</code> 是对应的购买该种商品的数目。</p>&#10;&#10;<p>请你实现 <code>Cashier</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>Cashier(int n, int discount, int[] products, int[] prices)</code> 初始化实例对象，参数分别为打折频率 <code>n</code> ，折扣大小 <code>discount</code> ，超市里的商品列表 <code>products</code> 和它们的价格 <code>prices</code> 。</li>&#10;	<li><code>double getBill(int[] product, int[] amount)</code> 返回账单的实际金额（如果有打折，请返回打折后的结果）。返回结果与标准答案误差在 <code>10^-5</code> 以内都视为正确结果。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入</strong>&#10;[&quot;Cashier&quot;,&quot;getBill&quot;,&quot;getBill&quot;,&quot;getBill&quot;,&quot;getBill&quot;,&quot;getBill&quot;,&quot;getBill&quot;,&quot;getBill&quot;]&#10;[[3,50,[1,2,3,4,5,6,7],[100,200,300,400,300,200,100]],[[1,2],[1,2]],[[3,7],[10,10]],[[1,2,3,4,5,6,7],[1,1,1,1,1,1,1]],[[4],[10]],[[7,3],[10,10]],[[7,5,3,1,6,4,2],[10,10,10,9,9,9,7]],[[2,3,5],[5,3,2]]]&#10;<strong>输出</strong>&#10;[null,500.0,4000.0,800.0,4000.0,4000.0,7350.0,2500.0]&#10;<strong>解释</strong>&#10;Cashier cashier = new Cashier(3,50,[1,2,3,4,5,6,7],[100,200,300,400,300,200,100]);&#10;cashier.getBill([1,2],[1,2]);                        // 返回 500.0, 账单金额为 = 1 * 100 + 2 * 200 = 500.&#10;cashier.getBill([3,7],[10,10]);                      // 返回 4000.0&#10;cashier.getBill([1,2,3,4,5,6,7],[1,1,1,1,1,1,1]);    // 返回 800.0 ，账单原本为 1600.0 ，但由于该顾客是第三位顾客，他将得到 50% 的折扣，所以实际金额为 1600 - 1600 * (50 / 100) = 800 。&#10;cashier.getBill([4],[10]);                           // 返回 4000.0&#10;cashier.getBill([7,3],[10,10]);                      // 返回 4000.0&#10;cashier.getBill([7,5,3,1,6,4,2],[10,10,10,9,9,9,7]); // 返回 7350.0 ，账单原本为 14700.0 ，但由于系统计数再次达到三，该顾客将得到 50% 的折扣，实际金额为 7350.0 。&#10;cashier.getBill([2,3,5],[5,3,2]);                    // 返回 2500.0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10^4</code></li>&#10;	<li><code>0 &lt;= discount &lt;= 100</code></li>&#10;	<li><code>1 &lt;= products.length &lt;= 200</code></li>&#10;	<li><code>1 &lt;= products[i] &lt;= 200</code></li>&#10;	<li><code>products</code> 列表中 <strong>不会</strong> 有重复的元素。</li>&#10;	<li><code>prices.length == products.length</code></li>&#10;	<li><code>1 &lt;= prices[i] &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= product.length &lt;= products.length</code></li>&#10;	<li><code>product[i]</code> 在 <code>products</code> 出现过。</li>&#10;	<li><code>amount.length == product.length</code></li>&#10;	<li><code>1 &lt;= amount[i] &lt;= 1000</code></li>&#10;	<li>最多有 <code>1000</code> 次对 <code>getBill</code> 函数的调用。</li>&#10;	<li>返回结果与标准答案误差在 <code>10^-5</code> 以内都视为正确结果。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mn>2</mn>
  <mi>n</mi>
  <mo>,</mo>
  <mo>&#x2026;</mo>
</math></span> 位顾客整单打折，其余原价。商品编号到单价是静态映射，用哈希表在初始化时一次建好。计数器对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 取模，模为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时对账单乘折扣，否则原样返回。</p>
</blockquote>
<p>我们使用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 存储每件商品的编号和单价，在初始化时将 <code v-pre>products</code> 和 <code v-pre>prices</code> 一一对应存入哈希表。</p>
<p>同时维护一个顾客计数器 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，初始值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>对于 <code v-pre>getBill</code> 操作：</p>
<ol>
<li>将计数器加一并取模： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
</math></span>，表示当前是第几位顾客结账；</li>
<li>遍历本次购买的商品编号和数量，计算账单总额 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <munder>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mi>j</mi>
  </munder>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">product</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">amount</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span>；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，说明当前顾客是第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 位顾客，应对整单打折，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mstyle displaystyle="true" scriptlevel="0">
    <mfrac>
      <mrow>
        <mtext mathvariant="italic">discount</mtext>
        <mo>&#xD7;</mo>
        <mi>x</mi>
      </mrow>
      <mn>100</mn>
    </mfrac>
  </mstyle>
</math></span>；否则直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。</li>
</ol>
<p>初始化的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为商品种类数。每次 <code v-pre>getBill</code> 的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 为本次购买商品的种类数。空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type Cashier struct {</span></span>
<span class="line"><span>	i        int</span></span>
<span class="line"><span>	n        int</span></span>
<span class="line"><span>	discount int</span></span>
<span class="line"><span>	d        map[int]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int, discount int, products []int, prices []int) Cashier {</span></span>
<span class="line"><span>	d := make(map[int]int)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(products); i++ {</span></span>
<span class="line"><span>		d[products[i]] = prices[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return Cashier{i: 0, n: n, discount: discount, d: d}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Cashier) GetBill(product []int, amount []int) float64 {</span></span>
<span class="line"><span>	this.i = (this.i + 1) % this.n</span></span>
<span class="line"><span>	x := 0</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(product); i++ {</span></span>
<span class="line"><span>		x += this.d[product[i]] * amount[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if this.i == 0 {</span></span>
<span class="line"><span>		return float64(x) - float64(this.discount)*float64(x)/100.0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return float64(x)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your Cashier object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(n, discount, products, prices);</span></span>
<span class="line"><span> * param_1 := obj.GetBill(product,amount);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/apply-discount-every-n-orders" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1357.Apply%20Discount%20Every%20n%20Orders/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1381" tabindex="-1">1381. 设计一个支持增量操作的栈 <a class="header-anchor" href="#q-1381" aria-label="Permalink to &quot;1381. 设计一个支持增量操作的栈 {#q-1381}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、设计、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>请你设计一个支持对其元素进行增量操作的栈。</p>&#10;&#10;<p>实现自定义栈类 <code>CustomStack</code> ：</p>&#10;&#10;<ul>&#10;	<li><code>CustomStack(int maxSize)</code>：用 <code>maxSize</code> 初始化对象，<code>maxSize</code> 是栈中最多能容纳的元素数量。</li>&#10;	<li><code>void push(int x)</code>：如果栈还未增长到 <code>maxSize</code> ，就将 <code>x</code> 添加到栈顶。</li>&#10;	<li><code>int pop()</code>：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 <strong>-1</strong> 。</li>&#10;	<li><code>void inc(int k, int val)</code>：栈底的 <code>k</code> 个元素的值都增加 <code>val</code> 。如果栈中元素总数小于 <code>k</code> ，则栈中的所有元素都增加 <code>val</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;CustomStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;pop&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;increment&quot;,&quot;increment&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;,&quot;pop&quot;]&#10;[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]&#10;<strong>输出：</strong>&#10;[null,null,null,2,null,null,null,null,null,103,202,201,-1]&#10;<strong>解释：</strong>&#10;CustomStack stk = new CustomStack(3); // 栈是空的 []&#10;stk.push(1);                          // 栈变为 [1]&#10;stk.push(2);                          // 栈变为 [1, 2]&#10;stk.pop();                            // 返回 2 --> 返回栈顶值 2，栈变为 [1]&#10;stk.push(2);                          // 栈变为 [1, 2]&#10;stk.push(3);                          // 栈变为 [1, 2, 3]&#10;stk.push(4);                          // 栈仍然是 [1, 2, 3]，不能添加其他元素使栈大小变为 4&#10;stk.increment(5, 100);                // 栈变为 [101, 102, 103]&#10;stk.increment(2, 100);                // 栈变为 [201, 202, 103]&#10;stk.pop();                            // 返回 103 --> 返回栈顶值 103，栈变为 [201, 202]&#10;stk.pop();                            // 返回 202 --> 返回栈顶值 202，栈变为 [201]&#10;stk.pop();                            // 返回 201 --> 返回栈顶值 201，栈变为 []&#10;stk.pop();                            // 返回 -1 --> 栈为空，返回 -1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= maxSize, x, k &lt;= 1000</code></li>&#10;	<li><code>0 &lt;= val &lt;= 100</code></li>&#10;	<li>每种方法 <code>increment</code>，<code>push</code> 以及 <code>pop</code> 分别最多调用 <code>1000</code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">increment</mtext>
</math></span> 要把栈底 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个元素都加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">val</mtext>
</math></span>。若每次扫描栈内，三种操作各 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>3</mn>
  </msup>
</math></span> 次尚可，但可以做到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>：差分数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">add</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 及以下应加的增量。增量记在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">size</mtext>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 位；弹出时把该位增量传给下一层并清零，使懒标记随出栈下沉。</p>
</blockquote>
<p>我们可以用一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
</math></span> 来模拟栈，用一个整数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 表示下一个入栈的元素位置。另外，我们还需要一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>d</mi>
  <mi>d</mi>
</math></span> 来记录每个位置上的增量累加值。</p>
<p>调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>u</mi>
  <mi>s</mi>
  <mi>h</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>S</mi>
  <mi>i</mi>
  <mi>z</mi>
  <mi>e</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 中，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 加一。</p>
<p>调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>o</mi>
  <mi>p</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span>，说明栈为空，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。否则我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 减一，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>a</mi>
  <mi>d</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，然后我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>d</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>d</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>d</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 清零。最后返回答案。</p>
<p>调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>c</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>d</mi>
  <mi>d</mi>
  <mo stretchy="false">[</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是栈的最大容量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type CustomStack struct {</span></span>
<span class="line"><span>	stk []int</span></span>
<span class="line"><span>	add []int</span></span>
<span class="line"><span>	i   int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(maxSize int) CustomStack {</span></span>
<span class="line"><span>	return CustomStack{make([]int, maxSize), make([]int, maxSize), 0}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CustomStack) Push(x int) {</span></span>
<span class="line"><span>	if this.i &#x3C; len(this.stk) {</span></span>
<span class="line"><span>		this.stk[this.i] = x</span></span>
<span class="line"><span>		this.i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CustomStack) Pop() int {</span></span>
<span class="line"><span>	if this.i &#x3C;= 0 {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.i--</span></span>
<span class="line"><span>	ans := this.stk[this.i] + this.add[this.i]</span></span>
<span class="line"><span>	if this.i > 0 {</span></span>
<span class="line"><span>		this.add[this.i-1] += this.add[this.i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.add[this.i] = 0</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *CustomStack) Increment(k int, val int) {</span></span>
<span class="line"><span>	if this.i > 0 {</span></span>
<span class="line"><span>		this.add[min(k, this.i)-1] += val</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your CustomStack object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(maxSize);</span></span>
<span class="line"><span> * obj.Push(x);</span></span>
<span class="line"><span> * param_2 := obj.Pop();</span></span>
<span class="line"><span> * obj.Increment(k,val);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-a-stack-with-increment-operation" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1381.Design%20a%20Stack%20With%20Increment%20Operation/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1396" tabindex="-1">1396. 设计地铁系统 <a class="header-anchor" href="#q-1396" aria-label="Permalink to &quot;1396. 设计地铁系统 {#q-1396}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、哈希表、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>地铁系统跟踪不同车站之间的乘客出行时间，并使用这一数据来计算从一站到另一站的平均时间。</p>&#10;&#10;<p>实现 <code>UndergroundSystem</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>void checkIn(int id, string stationName, int t)</code>&#10;&#10;    <ul>&#10;    	<li>通行卡 ID 等于 <code>id</code> 的乘客，在时间 <code>t</code> ，从 <code>stationName</code> 站进入</li>&#10;    	<li>乘客一次只能从一个站进入</li>&#10;    </ul>&#10;    </li>&#10;    <li><code>void checkOut(int id, string stationName, int t)</code>&#10;    <ul>&#10;    	<li>通行卡 ID 等于 <code>id</code> 的乘客，在时间 <code>t</code> ，从 <code>stationName</code> 站离开</li>&#10;    </ul>&#10;    </li>&#10;    <li><code>double getAverageTime(string startStation, string endStation)</code>&#10;    <ul>&#10;    	<li>返回从 <code>startStation</code> 站到 <code>endStation</code> 站的平均时间</li>&#10;    	<li>平均时间会根据截至目前所有从 <code>startStation</code> 站 <strong>直接</strong> 到达 <code>endStation</code> 站的行程进行计算，也就是从 <code>startStation</code> 站进入并从 <code>endStation</code> 离开的行程</li>&#10;    	<li>从 <code>startStation</code> 到 <code>endStation</code> 的行程时间与从 <code>endStation</code> 到 <code>startStation</code> 的行程时间可能不同</li>&#10;    	<li>在调用 <code>getAverageTime</code> 之前，至少有一名乘客从 <code>startStation</code> 站到达 <code>endStation</code> 站</li>&#10;    </ul>&#10;    </li>&#10;&#10;</ul>&#10;&#10;<p>你可以假设对 <code>checkIn</code> 和 <code>checkOut</code> 方法的所有调用都是符合逻辑的。如果一名乘客在时间 <code>t<sub>1</sub></code> 进站、时间 <code>t<sub>2</sub></code> 出站，那么 <code>t<sub>1</sub> &lt; t<sub>2</sub></code> 。所有时间都按时间顺序发生。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入</strong>&#10;[&quot;UndergroundSystem&quot;,&quot;checkIn&quot;,&quot;checkIn&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;checkOut&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;,&quot;getAverageTime&quot;,&quot;checkIn&quot;,&quot;getAverageTime&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;]&#10;[[],[45,&quot;Leyton&quot;,3],[32,&quot;Paradise&quot;,8],[27,&quot;Leyton&quot;,10],[45,&quot;Waterloo&quot;,15],[27,&quot;Waterloo&quot;,20],[32,&quot;Cambridge&quot;,22],[&quot;Paradise&quot;,&quot;Cambridge&quot;],[&quot;Leyton&quot;,&quot;Waterloo&quot;],[10,&quot;Leyton&quot;,24],[&quot;Leyton&quot;,&quot;Waterloo&quot;],[10,&quot;Waterloo&quot;,38],[&quot;Leyton&quot;,&quot;Waterloo&quot;]]&#10;&#10;<strong>输出</strong>&#10;[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]&#10;&#10;<strong>解释</strong>&#10;UndergroundSystem undergroundSystem = new UndergroundSystem();&#10;undergroundSystem.checkIn(45, &quot;Leyton&quot;, 3);&#10;undergroundSystem.checkIn(32, &quot;Paradise&quot;, 8);&#10;undergroundSystem.checkIn(27, &quot;Leyton&quot;, 10);&#10;undergroundSystem.checkOut(45, &quot;Waterloo&quot;, 15);  // 乘客 45 &quot;Leyton&quot; -> &quot;Waterloo&quot; ，用时 15-3 = 12&#10;undergroundSystem.checkOut(27, &quot;Waterloo&quot;, 20);  // 乘客 27 &quot;Leyton&quot; -> &quot;Waterloo&quot; ，用时 20-10 = 10&#10;undergroundSystem.checkOut(32, &quot;Cambridge&quot;, 22); // 乘客 32 &quot;Paradise&quot; -> &quot;Cambridge&quot; ，用时 22-8 = 14&#10;undergroundSystem.getAverageTime(&quot;Paradise&quot;, &quot;Cambridge&quot;); // 返回 14.00000 。只有一个 &quot;Paradise&quot; -> &quot;Cambridge&quot; 的行程，(14) / 1 = 14&#10;undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Waterloo&quot;);    // 返回 11.00000 。有两个 &quot;Leyton&quot; -> &quot;Waterloo&quot; 的行程，(10 + 12) / 2 = 11&#10;undergroundSystem.checkIn(10, &quot;Leyton&quot;, 24);&#10;undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Waterloo&quot;);    // 返回 11.00000&#10;undergroundSystem.checkOut(10, &quot;Waterloo&quot;, 38);  // 乘客 10 &quot;Leyton&quot; -> &quot;Waterloo&quot; ，用时 38-24 = 14&#10;undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Waterloo&quot;);    // 返回 12.00000 。有三个 &quot;Leyton&quot; -> &quot;Waterloo&quot; 的行程，(10 + 12 + 14) / 3 = 12&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入</strong>&#10;[&quot;UndergroundSystem&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;]&#10;[[],[10,&quot;Leyton&quot;,3],[10,&quot;Paradise&quot;,8],[&quot;Leyton&quot;,&quot;Paradise&quot;],[5,&quot;Leyton&quot;,10],[5,&quot;Paradise&quot;,16],[&quot;Leyton&quot;,&quot;Paradise&quot;],[2,&quot;Leyton&quot;,21],[2,&quot;Paradise&quot;,30],[&quot;Leyton&quot;,&quot;Paradise&quot;]]&#10;&#10;<strong>输出</strong>&#10;[null,null,null,5.00000,null,null,5.50000,null,null,6.66667]&#10;&#10;<strong>解释</strong>&#10;UndergroundSystem undergroundSystem = new UndergroundSystem();&#10;undergroundSystem.checkIn(10, &quot;Leyton&quot;, 3);&#10;undergroundSystem.checkOut(10, &quot;Paradise&quot;, 8); // 乘客 10 &quot;Leyton&quot; -> &quot;Paradise&quot; ，用时 8-3 = 5&#10;undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Paradise&quot;); // 返回 5.00000 ，(5) / 1 = 5&#10;undergroundSystem.checkIn(5, &quot;Leyton&quot;, 10);&#10;undergroundSystem.checkOut(5, &quot;Paradise&quot;, 16); // 乘客 5 &quot;Leyton&quot; -> &quot;Paradise&quot; ，用时 16-10 = 6&#10;undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Paradise&quot;); // 返回 5.50000 ，(5 + 6) / 2 = 5.5&#10;undergroundSystem.checkIn(2, &quot;Leyton&quot;, 21);&#10;undergroundSystem.checkOut(2, &quot;Paradise&quot;, 30); // 乘客 2 &quot;Leyton&quot; -> &quot;Paradise&quot; ，用时 30-21 = 9&#10;undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Paradise&quot;); // 返回 6.66667 ，(5 + 6 + 9) / 3 = 6.66667&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= id, t &lt;= 10<sup>6</sup></code></li>&#10;	<li><code>1 &lt;= stationName.length, startStation.length, endStation.length &lt;= 10</code></li>&#10;	<li>所有字符串由大小写英文字母与数字组成</li>&#10;	<li>总共最多调用 <code>checkIn</code>、<code>checkOut</code> 和 <code>getAverageTime</code> 方法 <code>2 * 10<sup>4</sup></code> 次</li>&#10;	<li>与标准答案误差在 <code>10<sup>-5</sup></code> 以内的结果都被视为正确结果</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>进站、出站、查询两站平均耗时，均需 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">id</mtext>
</math></span> 映射到进站时刻与站名；出站时把耗时累加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">start</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">end</mtext>
  <mo stretchy="false">)</mo>
</math></span> 对应的（总时间，次数）。查询即相除。</p>
</blockquote>
<p>我们用两个哈希表来存储数据，其中：</p>
<ul>
<li><code v-pre>ts</code>：存储乘客的 id 和乘客的进站时间和进站站点。其中键为乘客的 id，值为元组 <code v-pre>(t, stationName)</code>。</li>
<li><code v-pre>d</code>：存储乘客的进站站点和出站站点，以及乘客的行程时间和行程次数。其中键为元组 <code v-pre>(startStation, endStation)</code>，值为元组 <code v-pre>(totalTime, count)</code>。</li>
</ul>
<p>当乘客进站时，我们将乘客的 id 和进站时间和进站站点存入 <code v-pre>ts</code> 中，即 <code v-pre>ts[id] = (t, stationName)</code>。</p>
<p>当乘客出站时，我们从 <code v-pre>ts</code> 中取出乘客的进站时间和进站站点 <code v-pre>(t0, station)</code>，然后计算乘客的行程时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <msub>
    <mi>t</mi>
    <mn>0</mn>
  </msub>
</math></span>，并将乘客的行程时间和行程次数存入 <code v-pre>d</code> 中。</p>
<p>当我们要求某个乘客的平均行程时间时，我们从 <code v-pre>d</code> 中取出乘客的行程时间和行程次数 <code v-pre>(totalTime, count)</code>，然后计算平均行程时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>T</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>c</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为乘客的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type UndergroundSystem struct {</span></span>
<span class="line"><span>	ts map[int]pair</span></span>
<span class="line"><span>	d  map[station][2]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() UndergroundSystem {</span></span>
<span class="line"><span>	return UndergroundSystem{</span></span>
<span class="line"><span>		ts: make(map[int]pair),</span></span>
<span class="line"><span>		d:  make(map[station][2]int),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *UndergroundSystem) CheckIn(id int, stationName string, t int) {</span></span>
<span class="line"><span>	this.ts[id] = pair{t, stationName}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *UndergroundSystem) CheckOut(id int, stationName string, t int) {</span></span>
<span class="line"><span>	p := this.ts[id]</span></span>
<span class="line"><span>	s := station{p.a, stationName}</span></span>
<span class="line"><span>	if _, ok := this.d[s]; !ok {</span></span>
<span class="line"><span>		this.d[s] = [2]int{t - p.t, 1}</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		this.d[s] = [2]int{this.d[s][0] + t - p.t, this.d[s][1] + 1}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *UndergroundSystem) GetAverageTime(startStation string, endStation string) float64 {</span></span>
<span class="line"><span>	s := station{startStation, endStation}</span></span>
<span class="line"><span>	return float64(this.d[s][0]) / float64(this.d[s][1])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type station struct {</span></span>
<span class="line"><span>	a string</span></span>
<span class="line"><span>	b string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct {</span></span>
<span class="line"><span>	t int</span></span>
<span class="line"><span>	a string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your UndergroundSystem object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * obj.CheckIn(id,stationName,t);</span></span>
<span class="line"><span> * obj.CheckOut(id,stationName,t);</span></span>
<span class="line"><span> * param_3 := obj.GetAverageTime(startStation,endStation);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-underground-system" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1396.Design%20Underground%20System/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1429" tabindex="-1">1429. 第一个唯一数字 🔒 <a class="header-anchor" href="#q-1429" aria-label="Permalink to &quot;1429. 第一个唯一数字 🔒 {#q-1429}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、队列、数组、哈希表、数据流</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一系列整数，插入一个队列中，找出队列中第一个唯一整数。</p>&#10;&#10;<p>实现 <code>FirstUnique</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>FirstUnique(int[] nums)</code> 用数组里的数字初始化队列。</li>&#10;	<li><code>int showFirstUnique()</code> 返回队列中的<strong> 第一个唯一 </strong>整数的值。如果没有唯一整数，返回 -1。（译者注：此方法不移除队列中的任何元素）</li>&#10;	<li><code>void add(int value)</code> 将 value 插入队列中。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;FirstUnique&quot;,&quot;showFirstUnique&quot;,&quot;add&quot;,&quot;showFirstUnique&quot;,&quot;add&quot;,&quot;showFirstUnique&quot;,&quot;add&quot;,&quot;showFirstUnique&quot;]&#10;[[[2,3,5]],[],[5],[],[2],[],[3],[]]&#10;<strong>输出：</strong>&#10;[null,2,null,2,null,3,null,-1]&#10;<strong>解释：</strong>&#10;FirstUnique firstUnique = new FirstUnique([2,3,5]);&#10;firstUnique.showFirstUnique(); // 返回 2&#10;firstUnique.add(5);            // 此时队列为 [2,3,5,5]&#10;firstUnique.showFirstUnique(); // 返回 2&#10;firstUnique.add(2);            // 此时队列为 [2,3,5,5,2]&#10;firstUnique.showFirstUnique(); // 返回 3&#10;firstUnique.add(3);            // 此时队列为 [2,3,5,5,2,3]&#10;firstUnique.showFirstUnique(); // 返回 -1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;FirstUnique&quot;,&quot;showFirstUnique&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;showFirstUnique&quot;]&#10;[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]&#10;<strong>输出：</strong>&#10;[null,-1,null,null,null,null,null,17]&#10;<strong>解释：</strong>&#10;FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);&#10;firstUnique.showFirstUnique(); // 返回 -1&#10;firstUnique.add(7);            // 此时队列为 [7,7,7,7,7,7,7]&#10;firstUnique.add(3);            // 此时队列为 [7,7,7,7,7,7,7,3]&#10;firstUnique.add(3);            // 此时队列为 [7,7,7,7,7,7,7,3,3]&#10;firstUnique.add(7);            // 此时队列为 [7,7,7,7,7,7,7,3,3,7]&#10;firstUnique.add(17);           // 此时队列为 [7,7,7,7,7,7,7,3,3,7,17]&#10;firstUnique.showFirstUnique(); // 返回 17&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;FirstUnique&quot;,&quot;showFirstUnique&quot;,&quot;add&quot;,&quot;showFirstUnique&quot;]&#10;[[[809]],[],[809],[]]&#10;<strong>输出：</strong>&#10;[null,809,null,-1]&#10;<strong>解释：</strong>&#10;FirstUnique firstUnique = new FirstUnique([809]);&#10;firstUnique.showFirstUnique(); // 返回 809&#10;firstUnique.add(809);          // 此时队列为 [809,809]&#10;firstUnique.showFirstUnique(); // 返回 -1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10^5</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10^8</code></li>&#10;	<li><code>1 &lt;= value &lt;= 10^8</code></li>&#10;	<li>最多调用 <code>5000</code> 次 <code>showFirstUnique</code> 和 <code>add</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 双端队列 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>需要在多次 <code v-pre>add</code> 后仍能 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 回答「最早出现且只出现一次的数」。仅用计数器无法保留出现顺序，仅用队列则删除中间重复元素不便。</p>
<p>计数器记录频次，<code v-pre>OrderedDict</code> 按首次成为唯一的顺序保存当前频次为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的键。<code v-pre>add</code> 时若频次变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 则插入，变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 则删除；<code v-pre>showFirstUnique</code> 取字典的第一个键。</p>
</blockquote>
<p>我们可以使用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计每个数字出现的次数，使用双端队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 按顺序维护出现的数字。</p>
<p>调用 <code v-pre>showFirstUnique</code> 方法时，判断队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 的队头元素是否在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中出现的次数是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，如果是，则返回队头元素，否则将队头元素弹出，直到队列为空或者队头元素在哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中出现的次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，如果队列为空，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>调用 <code v-pre>add</code> 方法时，将数字加入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 中，并将数字加入队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 中。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type FirstUnique struct {</span></span>
<span class="line"><span>	cnt map[int]int</span></span>
<span class="line"><span>	q   []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(nums []int) FirstUnique {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, v := range nums {</span></span>
<span class="line"><span>		cnt[v]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return FirstUnique{cnt, nums}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *FirstUnique) ShowFirstUnique() int {</span></span>
<span class="line"><span>	for len(this.q) > 0 &#x26;&#x26; this.cnt[this.q[0]] != 1 {</span></span>
<span class="line"><span>		this.q = this.q[1:]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(this.q) > 0 {</span></span>
<span class="line"><span>		return this.q[0]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return -1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *FirstUnique) Add(value int) {</span></span>
<span class="line"><span>	this.cnt[value]++</span></span>
<span class="line"><span>	this.q = append(this.q, value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your FirstUnique object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(nums);</span></span>
<span class="line"><span> * param_1 := obj.ShowFirstUnique();</span></span>
<span class="line"><span> * obj.Add(value);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/first-unique-number" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1429.First%20Unique%20Number/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1472" tabindex="-1">1472. 设计浏览器历史记录 <a class="header-anchor" href="#q-1472" aria-label="Permalink to &quot;1472. 设计浏览器历史记录 {#q-1472}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、设计、数组、链表、数据流、双向链表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一个只支持单个标签页的 <strong>浏览器</strong> ，最开始你浏览的网页是 <code>homepage</code> ，你可以访问其他的网站 <code>url</code> ，也可以在浏览历史中后退 <code>steps</code> 步或前进 <code>steps</code> 步。</p>&#10;&#10;<p>请你实现 <code>BrowserHistory</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>BrowserHistory(string homepage)</code> ，用 <code>homepage</code> 初始化浏览器类。</li>&#10;	<li><code>void visit(string url)</code> 从当前页跳转访问 <code>url</code> 对应的页面  。执行此操作会把浏览历史前进的记录全部删除。</li>&#10;	<li><code>string back(int steps)</code> 在浏览历史中后退 <code>steps</code> 步。如果你只能在浏览历史中后退至多 <code>x</code> 步且 <code>steps > x</code> ，那么你只后退 <code>x</code> 步。请返回后退 <strong>至多</strong> <code>steps</code> 步以后的 <code>url</code> 。</li>&#10;	<li><code>string forward(int steps)</code> 在浏览历史中前进 <code>steps</code> 步。如果你只能在浏览历史中前进至多 <code>x</code> 步且 <code>steps > x</code> ，那么你只前进 <code>x</code> 步。请返回前进 <strong>至多</strong> <code>steps</code>步以后的 <code>url</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre><strong>输入：</strong>&#10;[&quot;BrowserHistory&quot;,&quot;visit&quot;,&quot;visit&quot;,&quot;visit&quot;,&quot;back&quot;,&quot;back&quot;,&quot;forward&quot;,&quot;visit&quot;,&quot;forward&quot;,&quot;back&quot;,&quot;back&quot;]&#10;[[&quot;leetcode.com&quot;],[&quot;google.com&quot;],[&quot;facebook.com&quot;],[&quot;youtube.com&quot;],[1],[1],[1],[&quot;linkedin.com&quot;],[2],[2],[7]]&#10;<strong>输出：</strong>&#10;[null,null,null,null,&quot;facebook.com&quot;,&quot;google.com&quot;,&quot;facebook.com&quot;,null,&quot;linkedin.com&quot;,&quot;google.com&quot;,&quot;leetcode.com&quot;]&#10;&#10;<strong>解释：</strong>&#10;BrowserHistory browserHistory = new BrowserHistory(&quot;leetcode.com&quot;);&#10;browserHistory.visit(&quot;google.com&quot;);       // 你原本在浏览 &quot;leetcode.com&quot; 。访问 &quot;google.com&quot;&#10;browserHistory.visit(&quot;facebook.com&quot;);     // 你原本在浏览 &quot;google.com&quot; 。访问 &quot;facebook.com&quot;&#10;browserHistory.visit(&quot;youtube.com&quot;);      // 你原本在浏览 &quot;facebook.com&quot; 。访问 &quot;youtube.com&quot;&#10;browserHistory.back(1);                   // 你原本在浏览 &quot;youtube.com&quot; ，后退到 &quot;facebook.com&quot; 并返回 &quot;facebook.com&quot;&#10;browserHistory.back(1);                   // 你原本在浏览 &quot;facebook.com&quot; ，后退到 &quot;google.com&quot; 并返回 &quot;google.com&quot;&#10;browserHistory.forward(1);                // 你原本在浏览 &quot;google.com&quot; ，前进到 &quot;facebook.com&quot; 并返回 &quot;facebook.com&quot;&#10;browserHistory.visit(&quot;linkedin.com&quot;);     // 你原本在浏览 &quot;facebook.com&quot; 。 访问 &quot;linkedin.com&quot;&#10;browserHistory.forward(2);                // 你原本在浏览 &quot;linkedin.com&quot; ，你无法前进任何步数。&#10;browserHistory.back(2);                   // 你原本在浏览 &quot;linkedin.com&quot; ，后退两步依次先到 &quot;facebook.com&quot; ，然后到 &quot;google.com&quot; ，并返回 &quot;google.com&quot;&#10;browserHistory.back(7);                   // 你原本在浏览 &quot;google.com&quot;， 你只能后退一步到 &quot;leetcode.com&quot; ，并返回 &quot;leetcode.com&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= homepage.length &lt;= 20</code></li>&#10;	<li><code>1 &lt;= url.length &lt;= 20</code></li>&#10;	<li><code>1 &lt;= steps &lt;= 100</code></li>&#10;	<li><code>homepage</code> 和 <code>url</code> 都只包含 '.' 或者小写英文字母。</li>&#10;	<li>最多调用 <code>5000</code> 次 <code>visit</code>， <code>back</code> 和 <code>forward</code> 函数。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：双栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><code v-pre>visit</code> 会丢掉前进历史，<code v-pre>back</code>/<code v-pre>forward</code> 在一条时间线上移动。用栈 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 保存到当前页的路径， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span> 保存前进页。访问新页时压入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
  <mn>1</mn>
</math></span> 并清空 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span>；后退把页弹到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
  <mn>2</mn>
</math></span>，前进则反向弹回。</p>
</blockquote>
<p>我们可以使用两个栈 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk2</mtext>
</math></span> 分别存储浏览后退页面和前进页面。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span> 包含 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">homepage</mtext>
</math></span>，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk2</mtext>
</math></span> 为空。</p>
<p>调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>visit</mtext>
  <mo stretchy="false">(</mo>
  <mi>u</mi>
  <mi>r</mi>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">url</mtext>
</math></span> 加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span>，并清空 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk2</mtext>
</math></span>。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>back</mtext>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span> 的栈顶元素弹出并加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk2</mtext>
</math></span>，重复这一操作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>s</mi>
</math></span> 次，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span> 的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>s</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span> 的栈顶元素。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">steps</mtext>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>forward</mtext>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span> 时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk2</mtext>
</math></span> 的栈顶元素弹出并加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span>，重复这一操作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>s</mi>
</math></span> 次，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk2</mtext>
</math></span> 为空或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>s</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">stk1</mtext>
</math></span> 的栈顶元素。时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">steps</mtext>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是浏览历史记录的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type BrowserHistory struct {</span></span>
<span class="line"><span>	stk1 []string</span></span>
<span class="line"><span>	stk2 []string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(homepage string) BrowserHistory {</span></span>
<span class="line"><span>	t := BrowserHistory{[]string{}, []string{}}</span></span>
<span class="line"><span>	t.Visit(homepage)</span></span>
<span class="line"><span>	return t</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BrowserHistory) Visit(url string) {</span></span>
<span class="line"><span>	this.stk1 = append(this.stk1, url)</span></span>
<span class="line"><span>	this.stk2 = []string{}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BrowserHistory) Back(steps int) string {</span></span>
<span class="line"><span>	for i := 0; i &#x3C; steps &#x26;&#x26; len(this.stk1) > 1; i++ {</span></span>
<span class="line"><span>		this.stk2 = append(this.stk2, this.stk1[len(this.stk1)-1])</span></span>
<span class="line"><span>		this.stk1 = this.stk1[:len(this.stk1)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return this.stk1[len(this.stk1)-1]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BrowserHistory) Forward(steps int) string {</span></span>
<span class="line"><span>	for i := 0; i &#x3C; steps &#x26;&#x26; len(this.stk2) > 0; i++ {</span></span>
<span class="line"><span>		this.stk1 = append(this.stk1, this.stk2[len(this.stk2)-1])</span></span>
<span class="line"><span>		this.stk2 = this.stk2[:len(this.stk2)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return this.stk1[len(this.stk1)-1]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your BrowserHistory object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(homepage);</span></span>
<span class="line"><span> * obj.Visit(url);</span></span>
<span class="line"><span> * param_2 := obj.Back(steps);</span></span>
<span class="line"><span> * param_3 := obj.Forward(steps);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-browser-history" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1472.Design%20Browser%20History/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1476" tabindex="-1">1476. 子矩形查询 <a class="header-anchor" href="#q-1476" aria-label="Permalink to &quot;1476. 子矩形查询 {#q-1476}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、数组、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>请你实现一个类 <code>SubrectangleQueries</code> ，它的构造函数的参数是一个 <code>rows x cols</code> 的矩形（这里用整数矩阵表示），并支持以下两种操作：</p>&#10;&#10;<p>1.<code> updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)</code></p>&#10;&#10;<ul>&#10;	<li>用 <code>newValue</code> 更新以 <code>(row1,col1)</code> 为左上角且以 <code>(row2,col2)</code> 为右下角的子矩形。</li>&#10;</ul>&#10;&#10;<p>2.<code> getValue(int row, int col)</code></p>&#10;&#10;<ul>&#10;	<li>返回矩形中坐标 <code>(row,col)</code> 的当前值。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>&#10;[&quot;SubrectangleQueries&quot;,&quot;getValue&quot;,&quot;updateSubrectangle&quot;,&quot;getValue&quot;,&quot;getValue&quot;,&quot;updateSubrectangle&quot;,&quot;getValue&quot;,&quot;getValue&quot;]&#10;[[[[1,2,1],[4,3,4],[3,2,1],[1,1,1]]],[0,2],[0,0,3,2,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]&#10;<strong>输出：</strong>&#10;[null,1,null,5,5,null,10,5]&#10;<strong>解释：</strong>&#10;SubrectangleQueries subrectangleQueries = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]]);  &#10;// 初始的 (4x3) 矩形如下：&#10;// 1 2 1&#10;// 4 3 4&#10;// 3 2 1&#10;// 1 1 1&#10;subrectangleQueries.getValue(0, 2); // 返回 1&#10;subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);&#10;// 此次更新后矩形变为：&#10;// 5 5 5&#10;// 5 5 5&#10;// 5 5 5&#10;// 5 5 5 &#10;subrectangleQueries.getValue(0, 2); // 返回 5&#10;subrectangleQueries.getValue(3, 1); // 返回 5&#10;subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10);&#10;// 此次更新后矩形变为：&#10;// 5   5   5&#10;// 5   5   5&#10;// 5   5   5&#10;// 10  10  10 &#10;subrectangleQueries.getValue(3, 1); // 返回 10&#10;subrectangleQueries.getValue(0, 2); // 返回 5&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>&#10;[&quot;SubrectangleQueries&quot;,&quot;getValue&quot;,&quot;updateSubrectangle&quot;,&quot;getValue&quot;,&quot;getValue&quot;,&quot;updateSubrectangle&quot;,&quot;getValue&quot;]&#10;[[[[1,1,1],[2,2,2],[3,3,3]]],[0,0],[0,0,2,2,100],[0,0],[2,2],[1,1,2,2,20],[2,2]]&#10;<strong>输出：</strong>&#10;[null,1,null,100,100,null,20]&#10;<strong>解释：</strong>&#10;SubrectangleQueries subrectangleQueries = new SubrectangleQueries([[1,1,1],[2,2,2],[3,3,3]]);&#10;subrectangleQueries.getValue(0, 0); // 返回 1&#10;subrectangleQueries.updateSubrectangle(0, 0, 2, 2, 100);&#10;subrectangleQueries.getValue(0, 0); // 返回 100&#10;subrectangleQueries.getValue(2, 2); // 返回 100&#10;subrectangleQueries.updateSubrectangle(1, 1, 2, 2, 20);&#10;subrectangleQueries.getValue(2, 2); // 返回 20&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>最多有 <code>500</code> 次<code>updateSubrectangle</code> 和 <code>getValue</code> 操作。</li>&#10;	<li><code>1 &lt;= rows, cols &lt;= 100</code></li>&#10;	<li><code>rows == rectangle.length</code></li>&#10;	<li><code>cols == rectangle[i].length</code></li>&#10;	<li><code>0 &lt;= row1 &lt;= row2 &lt; rows</code></li>&#10;	<li><code>0 &lt;= col1 &lt;= col2 &lt; cols</code></li>&#10;	<li><code>1 &lt;= newValue, rectangle[i][j] &lt;= 10^9</code></li>&#10;	<li><code>0 &lt;= row &lt; rows</code></li>&#10;	<li><code>0 &lt;= col &lt; cols</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>更新至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>500</mn>
</math></span> 次，矩阵至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
  <mo>&#xD7;</mo>
  <mn>100</mn>
</math></span>。每次更新若改写子矩形，总写入可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>500</mn>
  <mo>&#x22C5;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。改为只记录更新矩形，查询时从后往前找最先覆盖该格的更新，没有则返回原值。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type SubrectangleQueries struct {</span></span>
<span class="line"><span>	g   [][]int</span></span>
<span class="line"><span>	ops [][]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(rectangle [][]int) SubrectangleQueries {</span></span>
<span class="line"><span>	return SubrectangleQueries{rectangle, [][]int{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *SubrectangleQueries) UpdateSubrectangle(row1 int, col1 int, row2 int, col2 int, newValue int) {</span></span>
<span class="line"><span>	this.ops = append(this.ops, []int{row1, col1, row2, col2, newValue})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *SubrectangleQueries) GetValue(row int, col int) int {</span></span>
<span class="line"><span>	for i := len(this.ops) - 1; i >= 0; i-- {</span></span>
<span class="line"><span>		op := this.ops[i]</span></span>
<span class="line"><span>		if op[0] &#x3C;= row &#x26;&#x26; row &#x3C;= op[2] &#x26;&#x26; op[1] &#x3C;= col &#x26;&#x26; col &#x3C;= op[3] {</span></span>
<span class="line"><span>			return op[4]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return this.g[row][col]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your SubrectangleQueries object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(rectangle);</span></span>
<span class="line"><span> * obj.UpdateSubrectangle(row1,col1,row2,col2,newValue);</span></span>
<span class="line"><span> * param_2 := obj.GetValue(row,col);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/subrectangle-queries" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1476.Subrectangle%20Queries/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1483" tabindex="-1">1483. 树节点的第 K 个祖先 <a class="header-anchor" href="#q-1483" aria-label="Permalink to &quot;1483. 树节点的第 K 个祖先 {#q-1483}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、树、深度优先搜索、广度优先搜索、设计、二分查找、动态规划</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵树，树上有 <code>n</code> 个节点，按从 <code>0</code> 到 <code>n-1</code> 编号。树以父节点数组的形式给出，其中 <code>parent[i]</code> 是节点 <code>i</code> 的父节点。树的根节点是编号为 <code>0</code> 的节点。</p>&#10;&#10;<p>树节点的第 <em><code>k</code> </em>个祖先节点是从该节点到根节点路径上的第 <code>k</code> 个节点。</p>&#10;&#10;<p>实现 <code>TreeAncestor</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>TreeAncestor（int n， int[] parent）</code> 对树和父数组中的节点数初始化对象。</li>&#10;	<li><code>getKthAncestor</code><code>(int node, int k)</code> 返回节点 <code>node</code> 的第 <code>k</code> 个祖先节点。如果不存在这样的祖先节点，返回 <code>-1</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1483.Kth%20Ancestor%20of%20a%20Tree%20Node/images/1528_ex1.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;TreeAncestor&quot;,&quot;getKthAncestor&quot;,&quot;getKthAncestor&quot;,&quot;getKthAncestor&quot;]&#10;[[7,[-1,0,0,1,1,2,2]],[3,1],[5,2],[6,3]]&#10;&#10;<strong>输出：</strong>&#10;[null,1,0,-1]&#10;&#10;<strong>解释：</strong>&#10;TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);&#10;&#10;treeAncestor.getKthAncestor(3, 1);  // 返回 1 ，它是 3 的父节点&#10;treeAncestor.getKthAncestor(5, 2);  // 返回 0 ，它是 5 的祖父节点&#10;treeAncestor.getKthAncestor(6, 3);  // 返回 -1 因为不存在满足要求的祖先节点&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= k &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>parent[0] == -1</code> 表示编号为 <code>0</code> 的节点是根节点。</li>&#10;	<li>对于所有的 <code>0 &lt; i &lt; n</code> ，<code>0 &lt;= parent[i] &lt; n</code> 总成立</li>&#10;	<li><code>0 &lt;= node &lt; n</code></li>&#10;	<li>至多查询 <code>5 * 10<sup>4</sup></code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：动态规划 + 倍增 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 与查询次数均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，沿父指针走 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 步单次可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。预处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 向上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
</math></span> 步的祖先， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>查询时按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的二进制位跳跃，每位 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>题目要我们寻找节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个祖先节点，如果暴力求解，需要从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
</math></span> 开始向上遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次，时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，显然会超时。</p>
<p>我们可以使用动态规划，结合倍增的思想来处理。</p>
<p>我们定义 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
</math></span> 个祖先节点，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 向上走 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
</math></span> 步的节点。那么我们可以得到状态转移方程：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>p</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span><p>即：要想找到节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
</math></span> 个祖先节点，我们可以先找到节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span> 个祖先节点，然后再找到该节点的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span> 个祖先节点即可。所以，我们要找到每个节点的距离为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mi>j</mi>
  </msup>
</math></span> 的祖先节点，直到达到树的最大高度。</p>
<p>之后对于每次查询，我们可以把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 拆成二进制的表示形式，然后根据二进制中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的位置，累计向上查询，最终得到节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个祖先节点。</p>
<p>时间复杂度方面，初始化为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，查询为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 为树的节点数。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/2800-2899/2836.Maximize%20Value%20of%20Function%20in%20a%20Ball%20Passing%20Game/README.md" target="_blank" rel="noopener noreferrer">2836. 在传球游戏中最大化函数值</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type TreeAncestor struct {</span></span>
<span class="line"><span>	p [][18]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int, parent []int) TreeAncestor {</span></span>
<span class="line"><span>	p := make([][18]int, n)</span></span>
<span class="line"><span>	for i, fa := range parent {</span></span>
<span class="line"><span>		p[i][0] = fa</span></span>
<span class="line"><span>		for j := 1; j &#x3C; 18; j++ {</span></span>
<span class="line"><span>			p[i][j] = -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := 1; j &#x3C; 18; j++ {</span></span>
<span class="line"><span>		for i := range p {</span></span>
<span class="line"><span>			if p[i][j-1] == -1 {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			p[i][j] = p[p[i][j-1]][j-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return TreeAncestor{p}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *TreeAncestor) GetKthAncestor(node int, k int) int {</span></span>
<span class="line"><span>	for i := 17; i >= 0; i-- {</span></span>
<span class="line"><span>		if k>>i&#x26;1 == 1 {</span></span>
<span class="line"><span>			node = this.p[node][i]</span></span>
<span class="line"><span>			if node == -1 {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return node</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your TreeAncestor object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(n, parent);</span></span>
<span class="line"><span> * param_1 := obj.GetKthAncestor(node,k);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/kth-ancestor-of-a-tree-node" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1483.Kth%20Ancestor%20of%20a%20Tree%20Node/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1500" tabindex="-1">1500. 设计文件分享系统 🔒 <a class="header-anchor" href="#q-1500" aria-label="Permalink to &quot;1500. 设计文件分享系统 🔒 {#q-1500}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、哈希表、数据流、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>我们需要使用一套文件分享系统来分享一个非常大的文件，该文件由 <code>m</code> 个从 <code>1</code> 到 <code>m</code> 编号的 <strong>文件块</strong> 组成。</p>&#10;&#10;<p>当用户加入系统时，系统应为其注册 <strong>一个独有 </strong>的 ID。这个独有的 ID 应当被相应的用户使用 <strong>一次</strong>，但是当用户离开系统时，其 ID 应可以被（后续新注册的用户）<strong>再次使用</strong>。</p>&#10;&#10;<p>用户可以请求文件中的某个指定的文件块，系统应当返回拥有这个文件块的所有用户的 ID。如果用户收到 ID 的非空列表，就表示成功接收到请求的文件块。</p>&#10;&#10;<p><br>&#10;实现 <code>FileSharing</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>FileSharing(int m)</code> 初始化该对象，文件有 <code>m</code> 个文件块。</li>&#10;	<li><code>int join(int[] ownedChunks)</code>：一个新用户加入系统，并拥有文件的一些文件块。系统应当为该用户注册一个 ID，该 ID 应是未被其他用户占用的<strong>最小正整数</strong>。返回注册的 ID。</li>&#10;	<li><code>void leave(int userID)</code>：ID 为 <code>userID</code> 的用户将离开系统，你不能再从该用户提取文件块了。</li>&#10;	<li><code>int[] request(int userID, int chunkID)</code>：ID 为 <code>userID</code> 的用户请求编号为 <code>chunkID</code> 的文件块。返回拥有这个文件块的所有用户的 ID 所构成的列表或数组，按升序排列。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong>&#10;[&quot;FileSharing&quot;,&quot;join&quot;,&quot;join&quot;,&quot;join&quot;,&quot;request&quot;,&quot;request&quot;,&quot;leave&quot;,&quot;request&quot;,&quot;leave&quot;,&quot;join&quot;]&#10;[[4],[[1,2]],[[2,3]],[[4]],[1,3],[2,2],[1],[2,1],[2],[[]]]&#10;<strong>输出:</strong>&#10;[null,1,2,3,[2],[1,2],null,[],null,1]&#10;<strong>解释:</strong>&#10;FileSharing fileSharing = new FileSharing(4); // 我们用该系统分享由 4 个文件块组成的文件。&#10;&#10;fileSharing.join([1, 2]);    // 一个拥有文件块 [1,2] 的用户加入系统，为其注册 id = 1 并返回 1。&#10;&#10;fileSharing.join([2, 3]);    // 一个拥有文件块 [2,3] 的用户加入系统，为其注册 id = 2 并返回 2。&#10;&#10;fileSharing.join([4]);       // 一个拥有文件块 [4] 的用户加入系统，为其注册 id = 3 并返回 3。&#10;&#10;fileSharing.request(1, 3);   // id = 1 的用户请求第 3 个文件块，只有 id = 2 的用户拥有文件块，返回 [2] 。注意，现在用户 1 现拥有文件块 [1,2,3]。&#10;&#10;fileSharing.request(2, 2);   // id = 2 的用户请求第 2 个文件块，id 为 [1,2] 的用户拥有该文件块，所以我们返回 [1,2] 。&#10;&#10;fileSharing.leave(1);        // id = 1 的用户离开系统，其所拥有的所有文件块不再对其他用户可用。&#10;&#10;fileSharing.request(2, 1);   // id = 2 的用户请求第 1 个文件块，系统中没有用户拥有该文件块，所以我们返回空列表 [] 。&#10;&#10;fileSharing.leave(2);        // id = 2 的用户离开系统。&#10;&#10;fileSharing.join([]);        // 一个不拥有任何文件块的用户加入系统，为其注册 id = 1 并返回 1 。注意，id 1 和 2 空闲，可以重新使用。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= m &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= ownedChunks.length &lt;= min(100, m)</code></li>&#10;	<li><code>1 &lt;= ownedChunks[i] &lt;= m</code></li>&#10;	<li><code>ownedChunks</code> 的值是互不相同的。</li>&#10;	<li><code>1 &lt;= chunkID &lt;= m</code></li>&#10;	<li>当你<strong>正确地注册</strong>用户 ID 时，题目保证 <code>userID</code> 是系统中的一个已注册用户。</li>&#10;	<li><code>join</code>、 <code>leave</code> 和 <code>request</code> 最多被调用 <code>10<sup>4</sup></code> 次。</li>&#10;	<li>每次对 <code>leave</code> 的调用都有对应的对 <code>join</code> 的调用。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong></p>&#10;&#10;<ul>&#10;	<li>当系统以用户的 IP 地址而不是独有 ID 来识别用户，且用户断开连接后以相同 IP 重新连接系统时，会发生什么？</li>&#10;	<li>当用户频繁加入并退出系统，且该用户不请求任何文件块时，你的解决方案仍然保持高效吗？</li>&#10;	<li>当所有用户同时加入系统，请求所有文件并离开时，你的解决方案仍然保持高效吗？</li>&#10;	<li>如果系统用于分享 <code>n</code> 个文件，其中第  <code>i</code> 个文件由 <code>m[i]</code> 组成，你需要如何修改？</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1500.Design%20a%20File%20Sharing%20System/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：沿用参考 Python 的递增新编号、小根堆复用离开编号，以及用户持有文件块集合。为避免每次请求扫描所有在线用户，另维护「块→持有者」的反向集合。Join 优先取堆顶最小空闲编号并建立双向关联；Leave 删除全部关联后回收编号；Request 先复制并排序当前持有者列表，仅当列表非空时将文件块加入请求者集合，返回的列表不包含此次新增持有关系。</p>
<p><strong>变量与复杂度</strong>：U 为已分配过的编号数量，C 为当前用户持有块数，K 为被请求块的现有持有者数，A 为全部用户-块关联数。Join/Leave 为 O(C+log(U+1))，Request 为 O(K log(K+1))，对象空间 O(U+A)，返回列表 O(K)。小根堆使用标准库 container/heap，无第三方依赖。</p>
<p><strong>平台接口</strong>：Constructor(m int) FileSharing，Join(ownedChunks []int) int，Leave(userID int)，Request(userID, chunkID int) []int。沿用题目对合法块号和已注册用户的保证，m 仅表示合法编号上界；空答案返回空切片。该题不要求并发。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1500.Design%20a%20File%20Sharing%20System/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1500.Design%20a%20File%20Sharing%20System/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	"container/heap"</span></span>
<span class="line"><span>	"sort"</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type freeIDs []int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h freeIDs) Len() int            { return len(h) }</span></span>
<span class="line"><span>func (h freeIDs) Less(i, j int) bool  { return h[i] &#x3C; h[j] }</span></span>
<span class="line"><span>func (h freeIDs) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }</span></span>
<span class="line"><span>func (h *freeIDs) Push(v interface{}) { *h = append(*h, v.(int)) }</span></span>
<span class="line"><span>func (h *freeIDs) Pop() interface{}   { a := *h; v := a[len(a)-1]; *h = a[:len(a)-1]; return v }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type FileSharing struct {</span></span>
<span class="line"><span>	next   int</span></span>
<span class="line"><span>	free   freeIDs</span></span>
<span class="line"><span>	users  map[int]map[int]bool</span></span>
<span class="line"><span>	owners map[int]map[int]bool</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(m int) FileSharing {</span></span>
<span class="line"><span>	return FileSharing{next: 1, users: map[int]map[int]bool{}, owners: map[int]map[int]bool{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FileSharing) add(user, chunk int) {</span></span>
<span class="line"><span>	f.users[user][chunk] = true</span></span>
<span class="line"><span>	if f.owners[chunk] == nil {</span></span>
<span class="line"><span>		f.owners[chunk] = map[int]bool{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f.owners[chunk][user] = true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FileSharing) Join(ownedChunks []int) int {</span></span>
<span class="line"><span>	id := f.next</span></span>
<span class="line"><span>	if len(f.free) > 0 {</span></span>
<span class="line"><span>		id = heap.Pop(&#x26;f.free).(int)</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		f.next++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	f.users[id] = map[int]bool{}</span></span>
<span class="line"><span>	for _, chunk := range ownedChunks {</span></span>
<span class="line"><span>		f.add(id, chunk)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return id</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FileSharing) Leave(userID int) {</span></span>
<span class="line"><span>	for chunk := range f.users[userID] {</span></span>
<span class="line"><span>		delete(f.owners[chunk], userID)</span></span>
<span class="line"><span>		if len(f.owners[chunk]) == 0 {</span></span>
<span class="line"><span>			delete(f.owners, chunk)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	delete(f.users, userID)</span></span>
<span class="line"><span>	heap.Push(&#x26;f.free, userID)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FileSharing) Request(userID, chunkID int) []int {</span></span>
<span class="line"><span>	answer := make([]int, 0, len(f.owners[chunkID]))</span></span>
<span class="line"><span>	for user := range f.owners[chunkID] {</span></span>
<span class="line"><span>		answer = append(answer, user)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(answer)</span></span>
<span class="line"><span>	if len(answer) > 0 {</span></span>
<span class="line"><span>		f.add(userID, chunkID)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return answer</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-a-file-sharing-system" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1500.Design%20a%20File%20Sharing%20System/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1570" tabindex="-1">1570. 两个稀疏向量的点积 🔒 <a class="header-anchor" href="#q-1570" aria-label="Permalink to &quot;1570. 两个稀疏向量的点积 🔒 {#q-1570}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、数组、哈希表、双指针、线性代数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定两个稀疏向量，计算它们的点积（数量积）。</p>&#10;&#10;<p>实现类 <code>SparseVector</code>：</p>&#10;&#10;<ul>&#10;	<li><code>SparseVector(nums)</code> 以向量 <code>nums</code> 初始化对象。</li>&#10;	<li><code>dotProduct(vec)</code> 计算此向量与 <code>vec</code> 的点积。</li>&#10;</ul>&#10;&#10;<p><strong>稀疏向量</strong> 是指绝大多数分量为 0 的向量。你需要 <strong>高效</strong> 地存储这个向量，并计算两个稀疏向量的点积。</p>&#10;&#10;<p><strong>进阶：</strong>当其中只有一个向量是稀疏向量时，你该如何解决此问题？</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>v1 = SparseVector(nums1) , v2 = SparseVector(nums2)&#10;v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>v1 = SparseVector(nums1) , v2 = SparseVector(nums2)&#10;v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]&#10;<strong>输出：</strong>6&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums1.length == nums2.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10^5</code></li>&#10;	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>稀疏向量点积只需对两向量同时非零的下标累加。存下全部 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个分量再相乘，会在大量零上浪费时间，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。</p>
<p>构造时只把非零项写入「下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo accent="false" stretchy="false">&#x2192;</mo>
</math></span> 值」的哈希表。点积时遍历更短的那张表，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 探测另一侧。非零项远少于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 时明显更快。</p>
</blockquote>
<p>我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 来存储非零元素，其中键为下标，值为对应的值。我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 不为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span> 加入到哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 中。</p>
<p>在计算点积时，我们遍历非零元素较少的哈希表，并判断另一个哈希表中是否存在对应的键，如果存在就将对应的值相乘并累加到答案中。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type SparseVector struct {</span></span>
<span class="line"><span>	d map[int]int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(nums []int) SparseVector {</span></span>
<span class="line"><span>	d := map[int]int{}</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		if x != 0 {</span></span>
<span class="line"><span>			d[i] = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return SparseVector{d}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Return the dotProduct of two sparse vectors</span></span>
<span class="line"><span>func (this *SparseVector) dotProduct(vec SparseVector) (ans int) {</span></span>
<span class="line"><span>	a, b := this.d, vec.d</span></span>
<span class="line"><span>	if len(a) > len(b) {</span></span>
<span class="line"><span>		a, b = b, a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i, x := range a {</span></span>
<span class="line"><span>		if y, has := b[i]; has {</span></span>
<span class="line"><span>			ans += x * y</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your SparseVector object will be instantiated and called as such:</span></span>
<span class="line"><span> * v1 := Constructor(nums1);</span></span>
<span class="line"><span> * v2 := Constructor(nums2);</span></span>
<span class="line"><span> * ans := v1.dotProduct(v2);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/dot-product-of-two-sparse-vectors" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1570.Dot%20Product%20of%20Two%20Sparse%20Vectors/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1586" tabindex="-1">1586. 二叉搜索树迭代器 II 🔒 <a class="header-anchor" href="#q-1586" aria-label="Permalink to &quot;1586. 二叉搜索树迭代器 II 🔒 {#q-1586}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、设计、二叉搜索树、二叉树、迭代器</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>实现二叉搜索树（BST）的<a href="https://baike.baidu.com/item/%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86/757281?fr=aladdin" target="_blank" rel="noopener noreferrer">中序遍历</a>迭代器 <code>BSTIterator</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>BSTIterator(TreeNode root)</code> 初始化 <code>BSTIterator</code> 类的实例。二叉搜索树的根节点 <code>root</code> 作为构造函数的参数传入。内部指针使用一个不存在于树中且小于树中任意值的数值来初始化。</li>&#10;	<li><code>boolean hasNext()</code> 如果当前指针在中序遍历序列中，存在右侧数值，返回 <code>true</code> ，否则返回 <code>false</code> 。</li>&#10;	<li><code>int next()</code> 将指针在中序遍历序列中向右移动，然后返回移动后指针所指数值。</li>&#10;	<li><code>boolean hasPrev()</code> 如果当前指针在中序遍历序列中，存在左侧数值，返回 <code>true</code> ，否则返回 <code>false</code> 。</li>&#10;	<li><code>int prev()</code> 将指针在中序遍历序列中向左移动，然后返回移动后指针所指数值。</li>&#10;</ul>&#10;&#10;<p>注意，虽然我们使用树中不存在的最小值来初始化内部指针，第一次调用 <code>next()</code> 需要返回二叉搜索树中最小的元素。</p>&#10;&#10;<p>你可以假设 <code>next()</code> 和 <code>prev()</code> 的调用总是有效的。即，当 <code>next()</code>/<code>prev()</code> 被调用的时候，在中序遍历序列中一定存在下一个/上一个元素。</p>&#10;&#10;<p><strong>进阶：</strong>你可以不提前遍历树中的值来解决问题吗？</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1586.Binary%20Search%20Tree%20Iterator%20II/images/untitled-diagram-1.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入</strong>&#10;[&quot;BSTIterator&quot;, &quot;next&quot;, &quot;next&quot;, &quot;prev&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;hasPrev&quot;, &quot;prev&quot;, &quot;prev&quot;]&#10;[[[7, 3, 15, null, null, 9, 20]], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null]]&#10;<strong>输出</strong>&#10;[null, 3, 7, 3, 7, true, 9, 15, 20, false, true, 15, 9]&#10;&#10;<strong>解释</strong>&#10;// 划线的元素表示指针当前的位置。&#10;BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]); // 当前状态为 &lt;u> &lt;/u> [3, 7, 9, 15, 20]&#10;bSTIterator.next(); // 状态变为 [&lt;u>3&lt;/u>, 7, 9, 15, 20], 返回 3&#10;bSTIterator.next(); // 状态变为 [3, &lt;u>7&lt;/u>, 9, 15, 20], 返回 7&#10;bSTIterator.prev(); // 状态变为 [&lt;u>3&lt;/u>, 7, 9, 15, 20], 返回 3&#10;bSTIterator.next(); // 状态变为 [3, &lt;u>7&lt;/u>, 9, 15, 20], 返回 7&#10;bSTIterator.hasNext(); // 返回 true&#10;bSTIterator.next(); // 状态变为 [3, 7, &lt;u>9&lt;/u>, 15, 20], 返回 9&#10;bSTIterator.next(); // 状态变为 [3, 7, 9, &lt;u>15&lt;/u>, 20], 返回 15&#10;bSTIterator.next(); // 状态变为 [3, 7, 9, 15, &lt;u>20&lt;/u>], 返回 20&#10;bSTIterator.hasNext(); // 返回 false&#10;bSTIterator.hasPrev(); // 返回 true&#10;bSTIterator.prev(); // 状态变为 [3, 7, 9, &lt;u>15&lt;/u>, 20], 返回 15&#10;bSTIterator.prev(); // 状态变为 [3, 7, &lt;u>9&lt;/u>, 15, 20], 返回 9&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点个数的范围是 <code>[1, 10<sup>5</sup>]</code> 。</li>&#10;	<li><code>0 &lt;= Node.val &lt;= 10<sup>6</sup></code></li>&#10;	<li>最多调用 10<sup>5</sup> 次 <code>hasNext</code>、 <code>next</code>、 <code>hasPrev</code> 和 <code>prev</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：中序遍历 + 数组 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>迭代器要同时支持 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
</math></span>，调用达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 次。只保存当前指针的栈式中序可以前进，回退却要重新找前驱。</p>
<p>中序遍历把 BST 展成有序数组，用下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 表示当前位置。前进、后退都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#xB1;</mo>
  <mn>1</mn>
</math></span>，判空即比较边界。初始化线性，之后每次操作常数时间。</p>
</blockquote>
<p>我们可以使用中序遍历将二叉搜索树的所有节点的值存储到数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中，然后使用数组实现迭代器。我们定义一个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，表示指向数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的一个元素。每次调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的值加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>；每次调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的值减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度方面，初始化迭代器需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是二叉搜索树的节点数。每次调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 都需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的时间。空间复杂度方面，我们需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的空间存储二叉搜索树的所有节点的值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>type BSTIterator struct {</span></span>
<span class="line"><span>	nums []int</span></span>
<span class="line"><span>	i, n int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(root *TreeNode) BSTIterator {</span></span>
<span class="line"><span>	nums := []int{}</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>		nums = append(nums, root.Val)</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return BSTIterator{nums, -1, len(nums)}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) HasNext() bool {</span></span>
<span class="line"><span>	return this.i &#x3C; this.n-1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) Next() int {</span></span>
<span class="line"><span>	this.i++</span></span>
<span class="line"><span>	return this.nums[this.i]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) HasPrev() bool {</span></span>
<span class="line"><span>	return this.i > 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) Prev() int {</span></span>
<span class="line"><span>	this.i--</span></span>
<span class="line"><span>	return this.nums[this.i]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your BSTIterator object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(root);</span></span>
<span class="line"><span> * param_1 := obj.HasNext();</span></span>
<span class="line"><span> * param_2 := obj.Next();</span></span>
<span class="line"><span> * param_3 := obj.HasPrev();</span></span>
<span class="line"><span> * param_4 := obj.Prev();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈中序遍历 + 数组 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>迭代器要同时支持 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
</math></span>，调用达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 次。只保存当前指针的栈式中序可以前进，回退却要重新找前驱。先把整棵树展成有序数组，再用下标移动，在较短的树上是对的。</p>
<p>结点个数可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。左链使这次中序按结点个数递归，调用栈会溢出。</p>
<p>二叉搜索树的中序次序就是结点值的非降序。每个结点先走完左子树，再记下自己，再走右子树，不需要返回值。</p>
<p>因此用显式栈做中序遍历，把结点值写入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>。指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 初值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
</math></span> 分别把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 加一或减一后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，是否还能移动则比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 与数组边界。</p>
</blockquote>
<p>我们用显式栈做中序遍历，把二叉搜索树的所有结点值写入数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，再用这个数组实现迭代器。进入结点时压入退出标记和左孩子；退出时把结点值加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span>，再压入右孩子。指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 初始为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。每次调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 时，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>；每次调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 时，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>时间复杂度方面，初始化迭代器需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是二叉搜索树的节点数。每次调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>v</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">)</mo>
</math></span> 都需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 的时间。空间复杂度方面，我们需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 的空间存储二叉搜索树的所有节点的值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>type BSTIterator struct {</span></span>
<span class="line"><span>	nums []int</span></span>
<span class="line"><span>	i, n int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(root *TreeNode) BSTIterator {</span></span>
<span class="line"><span>	nums := []int{}</span></span>
<span class="line"><span>	type frame struct {</span></span>
<span class="line"><span>		node  *TreeNode</span></span>
<span class="line"><span>		state int</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	stk := []frame{{root, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		node, state := cur.node, cur.state</span></span>
<span class="line"><span>		if node == nil {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if state == 0 {</span></span>
<span class="line"><span>			stk = append(stk, frame{node, 1}, frame{node.Left, 0})</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		nums = append(nums, node.Val)</span></span>
<span class="line"><span>		stk = append(stk, frame{node.Right, 0})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return BSTIterator{nums, -1, len(nums)}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) HasNext() bool {</span></span>
<span class="line"><span>	return this.i &#x3C; this.n-1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) Next() int {</span></span>
<span class="line"><span>	this.i++</span></span>
<span class="line"><span>	return this.nums[this.i]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) HasPrev() bool {</span></span>
<span class="line"><span>	return this.i > 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *BSTIterator) Prev() int {</span></span>
<span class="line"><span>	this.i--</span></span>
<span class="line"><span>	return this.nums[this.i]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your BSTIterator object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(root);</span></span>
<span class="line"><span> * param_1 := obj.HasNext();</span></span>
<span class="line"><span> * param_2 := obj.Next();</span></span>
<span class="line"><span> * param_3 := obj.HasPrev();</span></span>
<span class="line"><span> * param_4 := obj.Prev();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/binary-search-tree-iterator-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1586.Binary%20Search%20Tree%20Iterator%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1600" tabindex="-1">1600. 王位继承顺序 <a class="header-anchor" href="#q-1600" aria-label="Permalink to &quot;1600. 王位继承顺序 {#q-1600}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、设计、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一个王国里住着国王、他的孩子们、他的孙子们等等。每一个时间点，这个家庭里有人出生也有人死亡。</p>&#10;&#10;<p>这个王国有一个明确规定的王位继承顺序，第一继承人总是国王自己。我们定义递归函数 <code>Successor(x, curOrder)</code> ，给定一个人 <code>x</code> 和当前的继承顺序，该函数返回 <code>x</code> 的下一继承人。</p>&#10;&#10;<pre>&#10;Successor(x, curOrder):&#10;    如果 x 没有孩子或者所有 x 的孩子都在 curOrder 中：&#10;        如果 x 是国王，那么返回 null&#10;        否则，返回 Successor(x 的父亲, curOrder)&#10;    否则，返回 x 不在 curOrder 中最年长的孩子&#10;</pre>&#10;&#10;<p>比方说，假设王国由国王，他的孩子 Alice 和 Bob （Alice 比 Bob 年长）和 Alice 的孩子 Jack 组成。</p>&#10;&#10;<ol>&#10;	<li>一开始， <code>curOrder</code> 为 <code>[&quot;king&quot;]</code>.</li>&#10;	<li>调用 <code>Successor(king, curOrder)</code> ，返回 Alice ，所以我们将 Alice 放入 <code>curOrder</code> 中，得到 <code>[&quot;king&quot;, &quot;Alice&quot;]</code> 。</li>&#10;	<li>调用 <code>Successor(Alice, curOrder)</code> ，返回 Jack ，所以我们将 Jack 放入 <code>curOrder</code> 中，得到 <code>[&quot;king&quot;, &quot;Alice&quot;, &quot;Jack&quot;]</code> 。</li>&#10;	<li>调用 <code>Successor(Jack, curOrder)</code> ，返回 Bob ，所以我们将 Bob 放入 <code>curOrder</code> 中，得到 <code>[&quot;king&quot;, &quot;Alice&quot;, &quot;Jack&quot;, &quot;Bob&quot;]</code> 。</li>&#10;	<li>调用 <code>Successor(Bob, curOrder)</code> ，返回 <code>null</code> 。最终得到继承顺序为 <code>[&quot;king&quot;, &quot;Alice&quot;, &quot;Jack&quot;, &quot;Bob&quot;]</code> 。</li>&#10;</ol>&#10;&#10;<p>通过以上的函数，我们总是能得到一个唯一的继承顺序。</p>&#10;&#10;<p>请你实现 <code>ThroneInheritance</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>ThroneInheritance(string kingName)</code> 初始化一个 <code>ThroneInheritance</code> 类的对象。国王的名字作为构造函数的参数传入。</li>&#10;	<li><code>void birth(string parentName, string childName)</code> 表示 <code>parentName</code> 新拥有了一个名为 <code>childName</code> 的孩子。</li>&#10;	<li><code>void death(string name)</code> 表示名为 <code>name</code> 的人死亡。一个人的死亡不会影响 <code>Successor</code> 函数，也不会影响当前的继承顺序。你可以只将这个人标记为死亡状态。</li>&#10;	<li><code>string[] getInheritanceOrder()</code> 返回 <strong>除去</strong> 死亡人员的当前继承顺序列表。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;ThroneInheritance&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;getInheritanceOrder&quot;, &quot;death&quot;, &quot;getInheritanceOrder&quot;]&#10;[[&quot;king&quot;], [&quot;king&quot;, &quot;andy&quot;], [&quot;king&quot;, &quot;bob&quot;], [&quot;king&quot;, &quot;catherine&quot;], [&quot;andy&quot;, &quot;matthew&quot;], [&quot;bob&quot;, &quot;alex&quot;], [&quot;bob&quot;, &quot;asha&quot;], [null], [&quot;bob&quot;], [null]]&#10;<strong>输出：</strong>&#10;[null, null, null, null, null, null, null, [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;bob&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;], null, [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;]]&#10;&#10;<strong>解释：</strong>&#10;ThroneInheritance t= new ThroneInheritance(&quot;king&quot;); // 继承顺序：<strong>king</strong>&#10;t.birth(&quot;king&quot;, &quot;andy&quot;); // 继承顺序：king > <strong>andy</strong>&#10;t.birth(&quot;king&quot;, &quot;bob&quot;); // 继承顺序：king > andy > <strong>bob</strong>&#10;t.birth(&quot;king&quot;, &quot;catherine&quot;); // 继承顺序：king > andy > bob > <strong>catherine</strong>&#10;t.birth(&quot;andy&quot;, &quot;matthew&quot;); // 继承顺序：king > andy > <strong>matthew</strong> > bob > catherine&#10;t.birth(&quot;bob&quot;, &quot;alex&quot;); // 继承顺序：king > andy > matthew > bob > <strong>alex</strong> > catherine&#10;t.birth(&quot;bob&quot;, &quot;asha&quot;); // 继承顺序：king > andy > matthew > bob > alex > <strong>asha</strong> > catherine&#10;t.getInheritanceOrder(); // 返回 [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;bob&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;]&#10;t.death(&quot;bob&quot;); // 继承顺序：king > andy > matthew > <strong>bob（已经去世）</strong>> alex > asha > catherine&#10;t.getInheritanceOrder(); // 返回 [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= kingName.length, parentName.length, childName.length, name.length &lt;= 15</code></li>&#10;	<li><code>kingName</code>，<code>parentName</code>， <code>childName</code> 和 <code>name</code> 仅包含小写英文字母。</li>&#10;	<li>所有的参数 <code>childName</code> 和 <code>kingName</code> <strong>互不相同</strong>。</li>&#10;	<li>所有 <code>death</code> 函数中的死亡名字 <code>name</code> 要么是国王，要么是已经出生了的人员名字。</li>&#10;	<li>每次调用 <code>birth(parentName, childName)</code> 时，测试用例都保证 <code>parentName</code> 对应的人员是活着的。</li>&#10;	<li>最多调用 <code>10<sup>5</sup></code> 次<code>birth</code> 和 <code>death</code> 。</li>&#10;	<li>最多调用 <code>10</code> 次 <code>getInheritanceOrder</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：多叉树的前序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>题目给出的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Successor</mtext>
</math></span> 按「当前人最年长且尚未列入顺序的孩子，否则回溯到父亲」递推，若每次查询都按定义从国王一路模拟，单次查询需要反复扫描子女列表，在出生次数达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>、家族规模随之增大时，查询会落到平方级扫描。</p>
<p>注意到该递推恰好对应多叉树的前序遍历：先输出本人，再按出生先后递归各子树。死亡并不改变树形，只是从最终顺序中剔除，因此只需维护子女邻接表与死亡集合。</p>
<p>为此用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 按插入顺序记录子女，用集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dead</mtext>
</math></span> 标记死亡；出生、死亡均为摊还常数，查询时从国王做一次 DFS，活着的结点按前序写入答案。</p>
</blockquote>
<p>根据题目描述，我们可以发现，王位继承顺序实际上是一个多叉树的前序遍历。我们可以使用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 存储每个人的孩子，使用一个集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
</math></span> 存储已经去世的人。</p>
<ul>
<li>调用 <code v-pre>birth(parentName, childName)</code> 时，我们将 <code v-pre>childName</code> 添加到 <code v-pre>parentName</code> 的孩子列表中。</li>
<li>调用 <code v-pre>death(name)</code> 时，我们将 <code v-pre>name</code> 添加到 <code v-pre>dead</code> 集合中。</li>
<li>调用 <code v-pre>getInheritanceOrder()</code> 时，我们从国王开始进行深度优先搜索，如果当前节点 <code v-pre>x</code> 没有去世，我们将 <code v-pre>x</code> 添加到答案列表中，然后递归地遍历 <code v-pre>x</code> 的所有孩子。</li>
</ul>
<p>时间复杂度方面，<code v-pre>birth</code> 和 <code v-pre>death</code> 的时间复杂度均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，<code v-pre>getInheritanceOrder</code> 的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是节点数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type ThroneInheritance struct {</span></span>
<span class="line"><span>	king string</span></span>
<span class="line"><span>	dead map[string]bool</span></span>
<span class="line"><span>	g map[string][]string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(kingName string) ThroneInheritance {</span></span>
<span class="line"><span>	return ThroneInheritance{kingName, map[string]bool{}, map[string][]string{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ThroneInheritance) Birth(parentName string, childName string)  {</span></span>
<span class="line"><span>	this.g[parentName] = append(this.g[parentName], childName)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ThroneInheritance) Death(name string)  {</span></span>
<span class="line"><span>	this.dead[name] = true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ThroneInheritance) GetInheritanceOrder() (ans []string) {</span></span>
<span class="line"><span>	var dfs func(string)</span></span>
<span class="line"><span>	dfs = func(x string) {</span></span>
<span class="line"><span>		if !this.dead[x] {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for _, y := range this.g[x] {</span></span>
<span class="line"><span>			dfs(y)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(this.king)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your ThroneInheritance object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(kingName);</span></span>
<span class="line"><span> * obj.Birth(parentName,childName);</span></span>
<span class="line"><span> * obj.Death(name);</span></span>
<span class="line"><span> * param_3 := obj.GetInheritanceOrder();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈前序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>题目给出的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">Successor</mtext>
</math></span> 按「当前人最年长且尚未列入顺序的孩子，否则回溯到父亲」递推。若每次查询都按定义从国王一路模拟，单次查询会反复扫描子女列表；出生次数达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 时，这样会落到平方级。该递推恰好是多叉树的前序：先写下本人，再按出生先后走各子树。死亡不改变树形，只是从最终顺序里去掉这个名字。沿一条出生链递归时，调用深度等于家族人数，链长达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 就会超出 Python 的递归上限。因此查询用栈做前序：弹出一个人，若仍在世就写入答案，再把子女按出生顺序的逆序压栈，这样先出生的孩子先被弹出。</p>
</blockquote>
<p>王位继承顺序是多叉树的前序遍历。用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span> 按出生顺序存储每个人的孩子，用集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
</math></span> 存储已经去世的人。</p>
<ul>
<li>调用 <code v-pre>birth(parentName, childName)</code> 时，将 <code v-pre>childName</code> 追加到 <code v-pre>parentName</code> 的孩子列表末尾。</li>
<li>调用 <code v-pre>death(name)</code> 时，将 <code v-pre>name</code> 加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
</math></span>。</li>
<li>调用 <code v-pre>getInheritanceOrder()</code> 时，栈里最初只有国王。弹出 <code v-pre>x</code> 后，若 <code v-pre>x</code> 不在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
</math></span> 中就写入答案，再把 <code v-pre>x</code> 的孩子从最后一个到第一个压入栈，从而保持出生顺序。</li>
</ul>
<p>时间复杂度方面，<code v-pre>birth</code> 和 <code v-pre>death</code> 的时间复杂度均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，<code v-pre>getInheritanceOrder</code> 的时间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是节点数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type ThroneInheritance struct {</span></span>
<span class="line"><span>	king string</span></span>
<span class="line"><span>	dead map[string]bool</span></span>
<span class="line"><span>	g    map[string][]string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(kingName string) ThroneInheritance {</span></span>
<span class="line"><span>	return ThroneInheritance{kingName, map[string]bool{}, map[string][]string{}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ThroneInheritance) Birth(parentName string, childName string) {</span></span>
<span class="line"><span>	this.g[parentName] = append(this.g[parentName], childName)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ThroneInheritance) Death(name string) {</span></span>
<span class="line"><span>	this.dead[name] = true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ThroneInheritance) GetInheritanceOrder() (ans []string) {</span></span>
<span class="line"><span>	stk := []string{this.king}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		x := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		if !this.dead[x] {</span></span>
<span class="line"><span>			ans = append(ans, x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		children := this.g[x]</span></span>
<span class="line"><span>		for i := len(children) - 1; i >= 0; i-- {</span></span>
<span class="line"><span>			stk = append(stk, children[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your ThroneInheritance object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(kingName);</span></span>
<span class="line"><span> * obj.Birth(parentName,childName);</span></span>
<span class="line"><span> * obj.Death(name);</span></span>
<span class="line"><span> * param_3 := obj.GetInheritanceOrder();</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/throne-inheritance" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1600.Throne%20Inheritance/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1603" tabindex="-1">1603. 设计停车系统 <a class="header-anchor" href="#q-1603" aria-label="Permalink to &quot;1603. 设计停车系统 {#q-1603}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、计数、模拟</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>请你给一个停车场设计一个停车系统。停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。</p>&#10;&#10;<p>请你实现 <code>ParkingSystem</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>ParkingSystem(int big, int medium, int small)</code> 初始化 <code>ParkingSystem</code> 类，三个参数分别对应每种停车位的数目。</li>&#10;	<li><code>bool addCar(int carType)</code> 检查是否有 <code>carType</code> 对应的停车位。 <code>carType</code> 有三种类型：大，中，小，分别用数字 <code>1</code>， <code>2</code> 和 <code>3</code> 表示。<strong>一辆车只能停在</strong> <strong> </strong><code>carType</code> 对应尺寸的停车位中。如果没有空车位，请返回 <code>false</code> ，否则将该车停入车位并返回 <code>true</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;ParkingSystem&quot;, &quot;addCar&quot;, &quot;addCar&quot;, &quot;addCar&quot;, &quot;addCar&quot;]&#10;[[1, 1, 0], [1], [2], [3], [1]]&#10;<strong>输出：</strong>&#10;[null, true, true, false, false]&#10;&#10;<strong>解释：</strong>&#10;ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);&#10;parkingSystem.addCar(1); // 返回 true ，因为有 1 个空的大车位&#10;parkingSystem.addCar(2); // 返回 true ，因为有 1 个空的中车位&#10;parkingSystem.addCar(3); // 返回 false ，因为没有空的小车位&#10;parkingSystem.addCar(1); // 返回 false ，因为没有空的大车位，唯一一个大车位已经被占据了&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= big, medium, small &lt;= 1000</code></li>&#10;	<li><code>carType</code> 取值为 <code>1</code>， <code>2</code> 或 <code>3</code></li>&#10;	<li>最多会调用 <code>addCar</code> 函数 <code>1000</code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>车型只有大、中、小三类，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">addCar</mtext>
</math></span> 至多调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 次，用三个计数器记录剩余车位即可在常数时间内判定。</p>
<p>每次到来一辆车，只需查看对应车型是否还有空位：若无则拒绝，否则减一并接受。</p>
<p>用长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 按下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>,</mo>
  <mn>2</mn>
  <mo>,</mo>
  <mn>3</mn>
</math></span> 存放三类余量，避免分支上的重复逻辑。</p>
</blockquote>
<p>我们用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>4</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 来表示停车场中每种车位的数量，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mn>3</mn>
  <mo stretchy="false">]</mo>
</math></span> 分别表示大车位、中车位、小车位的数量。</p>
<p>在初始化时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mn>3</mn>
  <mo stretchy="false">]</mo>
</math></span> 分别初始化为大车位、中车位、小车位的数量。</p>
<p>每次停车时，我们检查停车场中是否有对应车位，如果没有则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">false</mtext>
</math></span>，否则将对应车位的数量减一，并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">true</mtext>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type ParkingSystem struct {</span></span>
<span class="line"><span>	cnt []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(big int, medium int, small int) ParkingSystem {</span></span>
<span class="line"><span>	return ParkingSystem{[]int{0, big, medium, small}}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ParkingSystem) AddCar(carType int) bool {</span></span>
<span class="line"><span>	if this.cnt[carType] == 0 {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.cnt[carType]--</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your ParkingSystem object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(big, medium, small);</span></span>
<span class="line"><span> * param_1 := obj.AddCar(carType);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-parking-system" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1603.Design%20Parking%20System/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1622" tabindex="-1">1622. 奇妙序列 <a class="header-anchor" href="#q-1622" aria-label="Permalink to &quot;1622. 奇妙序列 {#q-1622}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、线段树、数学、数论、费马小定理</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>请你实现三个 API <code>append</code>，<code>addAll</code> 和 <code>multAll</code> 来实现奇妙序列。</p>&#10;&#10;<p>请实现 <code>Fancy</code> 类 ：</p>&#10;&#10;<ul>&#10;	<li><code>Fancy()</code> 初始化一个空序列对象。</li>&#10;	<li><code>void append(val)</code> 将整数 <code>val</code> 添加在序列末尾。</li>&#10;	<li><code>void addAll(inc)</code> 将所有序列中的现有数值都增加 <code>inc</code> 。</li>&#10;	<li><code>void multAll(m)</code> 将序列中的所有现有数值都乘以整数 <code>m</code> 。</li>&#10;	<li><code>int getIndex(idx)</code> 得到下标为 <code>idx</code> 处的数值（下标从 0 开始），并将结果对 <code>10<sup>9</sup> + 7</code> 取余。如果下标大于等于序列的长度，请返回 <code>-1</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;[&quot;Fancy&quot;, &quot;append&quot;, &quot;addAll&quot;, &quot;append&quot;, &quot;multAll&quot;, &quot;getIndex&quot;, &quot;addAll&quot;, &quot;append&quot;, &quot;multAll&quot;, &quot;getIndex&quot;, &quot;getIndex&quot;, &quot;getIndex&quot;]&#10;[[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]]&#10;<strong>输出：</strong>&#10;[null, null, null, null, null, 10, null, null, null, 26, 34, 20]&#10;&#10;<strong>解释：</strong>&#10;Fancy fancy = new Fancy();&#10;fancy.append(2);   // 奇妙序列：[2]&#10;fancy.addAll(3);   // 奇妙序列：[2+3] -> [5]&#10;fancy.append(7);   // 奇妙序列：[5, 7]&#10;fancy.multAll(2);  // 奇妙序列：[5*2, 7*2] -> [10, 14]&#10;fancy.getIndex(0); // 返回 10&#10;fancy.addAll(3);   // 奇妙序列：[10+3, 14+3] -> [13, 17]&#10;fancy.append(10);  // 奇妙序列：[13, 17, 10]&#10;fancy.multAll(2);  // 奇妙序列：[13*2, 17*2, 10*2] -> [26, 34, 20]&#10;fancy.getIndex(0); // 返回 26&#10;fancy.getIndex(1); // 返回 34&#10;fancy.getIndex(2); // 返回 20&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= val, inc, m &lt;= 100</code></li>&#10;	<li><code>0 &lt;= idx &lt;= 10<sup>5</sup></code></li>&#10;	<li>总共最多会有 <code>10<sup>5</sup></code> 次对 <code>append</code>，<code>addAll</code>，<code>multAll</code> 和 <code>getIndex</code> 的调用。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：线段树 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>题目要在序列末尾不断加入新数，还要对当前所有数一起做加法或乘法，再查某一个位置。操作最多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span> 次，每次把整个序列扫一遍会超时。</p>
<p>加法和乘法都作用在「已经加入的那一段」上，查询又只问一个点，可以用线段树来做区间修改。每个结点记下这段的和，以及还没传给子结点的乘法和加法；真正往下走时再传下去。</p>
<p>序列最长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
  <mo stretchy="false">]</mo>
</math></span> 动态开点即可。<code v-pre>append</code> 改一个点，<code v-pre>addAll</code> 和 <code v-pre>multAll</code> 改当前前缀，<code v-pre>getIndex</code> 查一个点，答案对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 取模。</p>
</blockquote>
<p>根据题目描述，<code v-pre>append</code> 在序列末尾加入一个数，<code v-pre>addAll</code> 给当前所有数加上同一个值，<code v-pre>multAll</code> 给当前所有数乘上同一个值，<code v-pre>getIndex</code> 查询某个位置的数。这就是区间加、区间乘和单点查询，可以用线段树维护。</p>
<p>我们给每个结点记录以下信息：</p>
<ul>
<li><code v-pre>v</code>：这个区间里所有数的和；</li>
<li><code v-pre>mul</code>：还没下传给子结点的乘法，初始为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；</li>
<li><code v-pre>add</code>：还没下传给子结点的加法，初始为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</li>
</ul>
<p>这两个标记的含义是：区间里每个数都要先乘上 <code v-pre>mul</code>，再加上 <code v-pre>add</code>。如果同一段上先后做了两次修改，不必真的改到叶子，可以把标记合并成一次。设第一次是「乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
</math></span> 再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
</math></span>」，第二次是「乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span> 再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
</math></span>」，那么：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x22C5;</mo>
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>&#x22C5;</mo>
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo>=</mo>
  <mi>x</mi>
  <mo>&#x22C5;</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>m</mi>
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
    <mi>m</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
  <mo stretchy="false">)</mo>
</math></span><p>也就是新的乘法是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span>，新的加法是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
</math></span>。</p>
<p>因此，给一段乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 时，结点的 <code v-pre>v</code>、<code v-pre>mul</code>、<code v-pre>add</code> 都乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>；给一段加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>c</mi>
</math></span> 时，<code v-pre>v</code> 加上「区间长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#xD7;</mo>
  <mi>i</mi>
  <mi>n</mi>
  <mi>c</mi>
</math></span>」，<code v-pre>add</code> 加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>c</mi>
</math></span>。下传给左右儿子时，按同样的规则先乘后加。代码里把加和乘写成同一次操作：只加相当于「乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>c</mi>
</math></span>」，只乘相当于「乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>」。</p>
<p>下标从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 开始，序列长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，我们按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
  <mo stretchy="false">]</mo>
</math></span> 动态开点（用到某个结点时再创建）。<code v-pre>append</code> 时先让 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 加一，再在位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 上加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>；<code v-pre>addAll</code> 和 <code v-pre>multAll</code> 修改区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span>；<code v-pre>getIndex</code> 查询位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。所有运算对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>m</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 为操作次数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为序列长度的上界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>const mod int64 = 1e9 + 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type node struct {</span></span>
<span class="line"><span>	left, right *node</span></span>
<span class="line"><span>	l, r, mid   int</span></span>
<span class="line"><span>	v, add, mul int64</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newNode(l, r int) *node {</span></span>
<span class="line"><span>	return &#x26;node{l: l, r: r, mid: (l + r) >> 1, mul: 1}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type segmentTree struct{ root *node }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newSegmentTree() *segmentTree {</span></span>
<span class="line"><span>	return &#x26;segmentTree{root: newNode(1, 100001)}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) modify(l, r int, mul, add int64, o *node) {</span></span>
<span class="line"><span>	if l > r {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if o.l >= l &#x26;&#x26; o.r &#x3C;= r {</span></span>
<span class="line"><span>		t.apply(o, mul, add)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	t.pushdown(o)</span></span>
<span class="line"><span>	if l &#x3C;= o.mid {</span></span>
<span class="line"><span>		t.modify(l, r, mul, add, o.left)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if r > o.mid {</span></span>
<span class="line"><span>		t.modify(l, r, mul, add, o.right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	t.pushup(o)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) query(l, r int, o *node) int64 {</span></span>
<span class="line"><span>	if l > r {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if o.l >= l &#x26;&#x26; o.r &#x3C;= r {</span></span>
<span class="line"><span>		return o.v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	t.pushdown(o)</span></span>
<span class="line"><span>	var v int64</span></span>
<span class="line"><span>	if l &#x3C;= o.mid {</span></span>
<span class="line"><span>		v = (v + t.query(l, r, o.left)) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if r > o.mid {</span></span>
<span class="line"><span>		v = (v + t.query(l, r, o.right)) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) apply(o *node, mul, add int64) {</span></span>
<span class="line"><span>	o.v = (o.v*mul + int64(o.r-o.l+1)*add) % mod</span></span>
<span class="line"><span>	o.add = (o.add*mul + add) % mod</span></span>
<span class="line"><span>	o.mul = o.mul * mul % mod</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) pushup(o *node) {</span></span>
<span class="line"><span>	o.v = (o.left.v + o.right.v) % mod</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t *segmentTree) pushdown(o *node) {</span></span>
<span class="line"><span>	if o.left == nil {</span></span>
<span class="line"><span>		o.left = newNode(o.l, o.mid)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if o.right == nil {</span></span>
<span class="line"><span>		o.right = newNode(o.mid+1, o.r)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if o.add != 0 || o.mul != 1 {</span></span>
<span class="line"><span>		t.apply(o.left, o.mul, o.add)</span></span>
<span class="line"><span>		t.apply(o.right, o.mul, o.add)</span></span>
<span class="line"><span>		o.add, o.mul = 0, 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Fancy struct {</span></span>
<span class="line"><span>	n    int</span></span>
<span class="line"><span>	tree *segmentTree</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() Fancy {</span></span>
<span class="line"><span>	return Fancy{tree: newSegmentTree()}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) Append(val int) {</span></span>
<span class="line"><span>	f.n++</span></span>
<span class="line"><span>	f.tree.modify(f.n, f.n, 1, int64(val), f.tree.root)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) AddAll(inc int) {</span></span>
<span class="line"><span>	f.tree.modify(1, f.n, 1, int64(inc), f.tree.root)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) MultAll(m int) {</span></span>
<span class="line"><span>	f.tree.modify(1, f.n, int64(m), 0, f.tree.root)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) GetIndex(idx int) int {</span></span>
<span class="line"><span>	if idx >= f.n {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int(f.tree.query(idx+1, idx+1, f.tree.root))</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：数学 + 乘法逆元 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一每次修改还要在线段树上走一层，复杂度是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。再看操作会发现：<code v-pre>addAll</code> 和 <code v-pre>multAll</code> 永远作用在「当前已经有的全部数」上，新 <code v-pre>append</code> 进来的数并不会被之前的加、乘改到。</p>
<p>也就是说，已经在序列里的数，之后经历的加和乘完全一样。我们不必给每个下标单独记一棵树上的标记，只要用两个全局变量记下「这些数接下来都要乘多少、再加多少」。数组里存的是还没做这些运算之前的值，查询时再乘上、加上即可。模数是质数，除法用费马小定理换成乘逆元。</p>
</blockquote>
<p>观察题目操作可以发现：每一次 <code v-pre>addAll</code> 和 <code v-pre>multAll</code> 都会作用到当时已经存在的所有数上，而之后新加入的数不受之前操作的影响。因此，对当前序列里的每个数，尚未作用到它身上的加、乘可以用两个全局变量来描述：先乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，再加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>。</p>
<p>我们在数组 <code v-pre>nums</code> 里存放的不是当前真实值，而是「还没乘 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>、加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 之前」的值，使得任意时刻都有：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>&#x771F;&#x5B9E;&#x503C;</mtext>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mo stretchy="false">(</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
  <mo stretchy="false">)</mo>
</math></span><p>各操作对应如下：</p>
<ul>
<li><code v-pre>append(val)</code>：这个新数还没有经历当前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，所以要存一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#xD7;</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>=</mo>
  <mtext mathvariant="italic">val</mtext>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">val</mtext>
  <mo>&#x2212;</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <msup>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span>；</li>
<li><code v-pre>addAll(inc)</code>：所有真实值都加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>c</mi>
</math></span>，只需把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>c</mi>
</math></span>；</li>
<li><code v-pre>multAll(m)</code>：所有真实值都乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，于是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 都乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>；</li>
<li><code v-pre>getIndex(idx)</code>：下标越界返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>b</mi>
</math></span>。</li>
</ul>
<p>其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 在模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 下的乘法逆元。模数是质数，由费马小定理有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>&#x2261;</mo>
  <msup>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>M</mi>
      <mi>O</mi>
      <mi>D</mi>
      <mo>&#x2212;</mo>
      <mn>2</mn>
    </mrow>
  </msup>
  <mspace width="0.444em"></mspace>
  <mo stretchy="false">(</mo>
  <mi>mod</mi>
  <mspace width="0.333em"></mspace>
  <mi>M</mi>
  <mi>O</mi>
  <mi>D</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>除 <code v-pre>append</code> 中求逆元需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mi>O</mi>
  <mi>D</mi>
  <mo stretchy="false">)</mo>
</math></span> 外，其余操作的时间复杂度均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>const mod int = 1e9 + 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func qpow(x, n int) int {</span></span>
<span class="line"><span>	res := 1</span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		if n&#x26;1 == 1 {</span></span>
<span class="line"><span>			res = res * x % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		x = x * x % mod</span></span>
<span class="line"><span>		n >>= 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return res</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Fancy struct {</span></span>
<span class="line"><span>	nums []int</span></span>
<span class="line"><span>	a, b int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() Fancy {</span></span>
<span class="line"><span>	return Fancy{a: 1}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) Append(val int) {</span></span>
<span class="line"><span>	x := (val - f.b + mod) % mod * qpow(f.a, mod-2) % mod</span></span>
<span class="line"><span>	f.nums = append(f.nums, x)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) AddAll(inc int) {</span></span>
<span class="line"><span>	f.b = (f.b + inc) % mod</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) MultAll(m int) {</span></span>
<span class="line"><span>	f.a = f.a * m % mod</span></span>
<span class="line"><span>	f.b = f.b * m % mod</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (f *Fancy) GetIndex(idx int) int {</span></span>
<span class="line"><span>	if idx >= len(f.nums) {</span></span>
<span class="line"><span>		return -1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return (f.a*f.nums[idx] + f.b) % mod</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/fancy-sequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1622.Fancy%20Sequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1628" tabindex="-1">1628. 设计带解析函数的表达式树 🔒 <a class="header-anchor" href="#q-1628" aria-label="Permalink to &quot;1628. 设计带解析函数的表达式树 🔒 {#q-1628}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、设计、数组、数学、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个算术表达式的后缀表示法的标记（token） <code>postfix</code> ，构造并返回该表达式对应的二叉表达式树。</p>&#10;&#10;<p><b>后缀</b>表示法是一种将操作数写在运算符之前的表示法。例如，表达式 <code>4*(5-(2+7))</code> 的后缀表示法表示为数组 <code>postfix = [&quot;4&quot;,&quot;5&quot;,&quot;7&quot;,&quot;2&quot;,&quot;+&quot;,&quot;-&quot;,&quot;*&quot;]</code> 。</p>&#10;&#10;<p>抽象类 <code>Node</code> 需要用于实现二叉表达式树。我们将通过 <code>evaluate</code> 函数来测试返回的树是否能够解析树中的值。你不可以移除 <code>Node</code> 类，但你可以按需修改此类，也可以定义其他类来实现它。</p>&#10;&#10;<p><a href="https://en.wikipedia.org/wiki/Binary_expression_tree" target="_blank" rel="noopener noreferrer"><strong>二叉表达式树</strong></a>是一种表达算术表达式的二叉树。二叉表达式树中的每一个节点都有零个或两个子节点。 叶节点（有 0 个子节点的节点）表示操作数，非叶节点（有 2 个子节点的节点）表示运算符： <code>'+'</code> （加）、 <code>'-'</code> （减）、 <code>'*'</code> （乘）和 <code>'/'</code> （除）。</p>&#10;&#10;<p>我们保证任何子树对应值的绝对值不超过 <code>10<sup>9</sup></code> ，且所有操作都是有效的（即没有除以零的操作）</p>&#10;&#10;<p><b>进阶：</b> 你可以将表达式树设计得更模块化吗？例如，你的设计能够不修改现有的 <code>evaluate</code> 的实现就能支持更多的操作符吗？</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1628.Design%20an%20Expression%20Tree%20With%20Evaluate%20Function/images/untitled-diagram.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b> s = [&quot;3&quot;,&quot;4&quot;,&quot;+&quot;,&quot;2&quot;,&quot;*&quot;,&quot;7&quot;,&quot;/&quot;]&#10;<b>输出：</b> 2&#10;<b>解释：</b> 此表达式可解析为上述二叉树，其对应表达式为 (<code>(3+4)*2)/7) = 14/7 = 2.</code>&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1628.Design%20an%20Expression%20Tree%20With%20Evaluate%20Function/images/untitled-diagram2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> s = [&quot;4&quot;,&quot;5&quot;,&quot;7&quot;,&quot;2&quot;,&quot;+&quot;,&quot;-&quot;,&quot;*&quot;]&#10;<strong>输出:</strong> -16&#10;<strong>解释:</strong> 此表达式可解析为上述二叉树，其对应表达式为 4*(5-<code>(2+7)) = 4*(-4) = -16.</code>&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt; 100</code></li>&#10;	<li><code>s.length</code> 是奇数。</li>&#10;	<li><code>s</code> 包含数字和字符 <code>'+'</code> 、 <code>'-'</code> 、 <code>'*'</code> 以及 <code>'/'</code> 。</li>&#10;	<li>如果 <code>s[i]</code> 是数，则对应的整数不超过 <code>10<sup>5</sup></code> 。</li>&#10;	<li><code>s</code> 保证是一个有效的表达式。</li>&#10;	<li>结果值和所有过程值的绝对值均不超过 <code>10<sup>9</sup></code> 。</li>&#10;	<li>保证表达式不包含除以零的操作。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1628.Design%20an%20Expression%20Tree%20With%20Evaluate%20Function/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p>基于 Doocs 后缀表达式建树参考改写。扫描 token：数字入栈，运算符先取右子树再取左子树并合成新节点。Evaluate 后序计算，Go 整数除法向零截断，避免 Python // 在负数上向下取整的差异。n 为 token 数，建树与求值各 O(n)，存储及最坏递归栈 O(n)。用 Node interface { Evaluate() int } 表达平台抽象节点，TreeBuilder 的 Constructor 和 BuildTree 为 Go 类接口。</p>
<p>出处：<a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1628.Design%20an%20Expression%20Tree%20With%20Evaluate%20Function/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题与题解</a>，固定提交 91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011；题意、参考及本 Go 改写采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 题意与参考：Doocs LeetCode，CC BY-SA 4.0。</span></span>
<span class="line"><span>// https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1628.Design%20an%20Expression%20Tree%20With%20Evaluate%20Function/README.md</span></span>
<span class="line"><span>// Go 实现与测试沿用 CC BY-SA 4.0；来源性质见配套说明。</span></span>
<span class="line"><span>import "strconv"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Node interface{ Evaluate() int }</span></span>
<span class="line"><span>type expressionNode struct {</span></span>
<span class="line"><span>	token       string</span></span>
<span class="line"><span>	left, right Node</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (n *expressionNode) Evaluate() int {</span></span>
<span class="line"><span>	if n.left == nil {</span></span>
<span class="line"><span>		v, _ := strconv.Atoi(n.token)</span></span>
<span class="line"><span>		return v</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b := n.left.Evaluate(), n.right.Evaluate()</span></span>
<span class="line"><span>	switch n.token {</span></span>
<span class="line"><span>	case "+":</span></span>
<span class="line"><span>		return a + b</span></span>
<span class="line"><span>	case "-":</span></span>
<span class="line"><span>		return a - b</span></span>
<span class="line"><span>	case "*":</span></span>
<span class="line"><span>		return a * b</span></span>
<span class="line"><span>	default:</span></span>
<span class="line"><span>		return a / b</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type TreeBuilder struct{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() TreeBuilder { return TreeBuilder{} }</span></span>
<span class="line"><span>func (t *TreeBuilder) BuildTree(postfix []string) Node {</span></span>
<span class="line"><span>	stack := []Node{}</span></span>
<span class="line"><span>	for _, s := range postfix {</span></span>
<span class="line"><span>		n := &#x26;expressionNode{token: s}</span></span>
<span class="line"><span>		if s == "+" || s == "-" || s == "*" || s == "/" {</span></span>
<span class="line"><span>			k := len(stack)</span></span>
<span class="line"><span>			n.left, n.right = stack[k-2], stack[k-1]</span></span>
<span class="line"><span>			stack = stack[:k-2]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stack = append(stack, n)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return stack[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-an-expression-tree-with-evaluate-function" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1628.Design%20an%20Expression%20Tree%20With%20Evaluate%20Function/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1656" tabindex="-1">1656. 设计有序流 <a class="header-anchor" href="#q-1656" aria-label="Permalink to &quot;1656. 设计有序流 {#q-1656}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：设计、数组、哈希表、数据流</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有 <code>n</code> 个 <code>(id, value)</code> 对，其中 <code>id</code> 是 <code>1</code> 到 <code>n</code> 之间的一个整数，<code>value</code> 是一个字符串。不存在 <code>id</code> 相同的两个 <code>(id, value)</code> 对。</p>&#10;&#10;<p>设计一个流，以 <strong>任意</strong> 顺序获取 <code>n</code> 个 <code>(id, value)</code> 对，并在多次调用时 <strong>按 <code>id</code> 递增的顺序</strong> 返回一些值。</p>&#10;&#10;<p>实现 <code>OrderedStream</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>OrderedStream(int n)</code> 构造一个能接收 <code>n</code> 个值的流，并将当前指针 <code>ptr</code> 设为 <code>1</code> 。</li>&#10;	<li><code>String[] insert(int id, String value)</code> 向流中存储新的 <code>(id, value)</code> 对。存储后：&#10;	<ul>&#10;		<li>如果流存储有 <code>id = ptr</code> 的 <code>(id, value)</code> 对，则找出从 <code>id = ptr</code> 开始的 <strong>最长 id 连续递增序列</strong> ，并 <strong>按顺序</strong> 返回与这些 id 关联的值的列表。然后，将 <code>ptr</code> 更新为最后那个  <code>id + 1</code> 。</li>&#10;		<li>&#10;		<p>否则，返回一个空列表。</p>&#10;		</li>&#10;	</ul>&#10;	</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1656.Design%20an%20Ordered%20Stream/images/q1.gif" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入</strong>&#10;[&quot;OrderedStream&quot;, &quot;insert&quot;, &quot;insert&quot;, &quot;insert&quot;, &quot;insert&quot;, &quot;insert&quot;]&#10;[[5], [3, &quot;ccccc&quot;], [1, &quot;aaaaa&quot;], [2, &quot;bbbbb&quot;], [5, &quot;eeeee&quot;], [4, &quot;ddddd&quot;]]&#10;<strong>输出</strong>&#10;[null, [], [&quot;aaaaa&quot;], [&quot;bbbbb&quot;, &quot;ccccc&quot;], [], [&quot;ddddd&quot;, &quot;eeeee&quot;]]&#10;&#10;<strong>解释</strong>&#10;OrderedStream os= new OrderedStream(5);&#10;os.insert(3, &quot;ccccc&quot;); // 插入 (3, &quot;ccccc&quot;)，返回 []&#10;os.insert(1, &quot;aaaaa&quot;); // 插入 (1, &quot;aaaaa&quot;)，返回 [&quot;aaaaa&quot;]&#10;os.insert(2, &quot;bbbbb&quot;); // 插入 (2, &quot;bbbbb&quot;)，返回 [&quot;bbbbb&quot;, &quot;ccccc&quot;]&#10;os.insert(5, &quot;eeeee&quot;); // 插入 (5, &quot;eeeee&quot;)，返回 []&#10;os.insert(4, &quot;ddddd&quot;); // 插入 (4, &quot;ddddd&quot;)，返回 [&quot;ddddd&quot;, &quot;eeeee&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= id &lt;= n</code></li>&#10;	<li><code>value.length == 5</code></li>&#10;	<li><code>value</code> 仅由小写字母组成</li>&#10;	<li>每次调用 <code>insert</code> 都会使用一个唯一的 <code>id</code></li>&#10;	<li>恰好调用 <code>n</code> 次 <code>insert</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：数组模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>插入带编号的值，只有从当前指针起连续已填的一段才能输出。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次插入各用不同编号，数组下标即编号。</p>
<p>写入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">data</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">idKey</mtext>
  <mo stretchy="false">]</mo>
</math></span> 后，只要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ptr</mtext>
</math></span> 处非空就弹出并右移指针，返回这段列表。</p>
</blockquote>
<p>我们可以使用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">data</mtext>
</math></span> 来模拟这个流，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">data</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">id</mtext>
  <mo>=</mo>
  <mi>i</mi>
</math></span> 的值。同时，我们使用一个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ptr</mtext>
</math></span> 来表示当前的位置。初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ptr</mtext>
  <mo>=</mo>
  <mn>1</mn>
</math></span>。</p>
<p>在插入一个新的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">idKey</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">value</mtext>
  <mo stretchy="false">)</mo>
</math></span> 对时，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">data</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">idKey</mtext>
  <mo stretchy="false">]</mo>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">value</mtext>
</math></span>。然后，我们从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ptr</mtext>
</math></span> 开始，依次将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">data</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">ptr</mtext>
  <mo stretchy="false">]</mo>
</math></span> 加入答案中，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">data</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">ptr</mtext>
  <mo stretchy="false">]</mo>
</math></span> 为空。</p>
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
</math></span> 为数据流的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>type OrderedStream struct {</span></span>
<span class="line"><span>	ptr  int</span></span>
<span class="line"><span>	data []string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int) OrderedStream {</span></span>
<span class="line"><span>	return OrderedStream{</span></span>
<span class="line"><span>		ptr:  1,</span></span>
<span class="line"><span>		data: make([]string, n+1),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *OrderedStream) Insert(idKey int, value string) []string {</span></span>
<span class="line"><span>	this.data[idKey] = value</span></span>
<span class="line"><span>	var ans []string</span></span>
<span class="line"><span>	for this.ptr &#x3C; len(this.data) &#x26;&#x26; this.data[this.ptr] != "" {</span></span>
<span class="line"><span>		ans = append(ans, this.data[this.ptr])</span></span>
<span class="line"><span>		this.ptr++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your OrderedStream object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(n);</span></span>
<span class="line"><span> * param_1 := obj.Insert(idKey,value);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-an-ordered-stream" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1656.Design%20an%20Ordered%20Stream/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const u=s(p,[["render",o]]);export{h as __pageData,u as default};
