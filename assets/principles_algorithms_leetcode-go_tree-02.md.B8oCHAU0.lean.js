import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const h=JSON.parse('{"title":"LeetCode Go · 树与二叉树（2）","description":"树与二叉树分类，第 230–538 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 树与二叉树（2）","description":"树与二叉树分类，第 230–538 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"树与二叉树分类，第 230–538 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 树与二叉树（1）","link":"/principles/algorithms/leetcode-go/tree-01"},"next":{"text":"LeetCode Go · 树与二叉树（3）","link":"/principles/algorithms/leetcode-go/tree-03"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 树与二叉树（1）","link":"/principles/algorithms/leetcode-go/tree-01"},"next":{"text":"LeetCode Go · 树与二叉树（3）","link":"/principles/algorithms/leetcode-go/tree-03"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/tree-02.md","filePath":"principles/algorithms/leetcode-go/tree-02.md"}'),p={name:"principles/algorithms/leetcode-go/tree-02.md"};function l(o,n,i,m,c,r){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-树与二叉树-2" tabindex="-1">LeetCode Go · 树与二叉树（2） <a class="header-anchor" href="#leetcode-go-·-树与二叉树-2" aria-label="Permalink to &quot;LeetCode Go · 树与二叉树（2）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-230" tabindex="-1">230. 二叉搜索树中第 K 小的元素 <a class="header-anchor" href="#q-230" aria-label="Permalink to &quot;230. 二叉搜索树中第 K 小的元素 {#q-230}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉搜索树的根节点 <code>root</code> ，和一个整数 <code>k</code> ，请你设计一个算法查找其中第 <code>k</code><strong> </strong>小的元素（<code>k</code> 从 1 开始计数）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0230.Kth%20Smallest%20Element%20in%20a%20BST/images/kthtree1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [3,1,4,null,2], k = 1&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0230.Kth%20Smallest%20Element%20in%20a%20BST/images/kthtree2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [5,3,6,2,4,null,null,1], k = 3&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中的节点数为 <code>n</code> 。</li>&#10;	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 <code>k</code> 小的值，你将如何优化算法？</p></div>
</details>
<details class="details custom-block"><summary>方法一：中序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>BST 的中序遍历即为升序。只需走到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个被访问的结点，不必列出整棵树。</p>
<p>用栈模拟一路向左，弹出时将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 减一，减到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 即答案。</p>
</blockquote>
<p>由于二叉搜索树的性质，中序遍历一定能得到升序序列，因此可以采用中序遍历找出第 k 小的元素。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func kthSmallest(root *TreeNode, k int) int {</span></span>
<span class="line"><span>	stk := []*TreeNode{}</span></span>
<span class="line"><span>	for root != nil || len(stk) > 0 {</span></span>
<span class="line"><span>		if root != nil {</span></span>
<span class="line"><span>			stk = append(stk, root)</span></span>
<span class="line"><span>			root = root.Left</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			root = stk[len(stk)-1]</span></span>
<span class="line"><span>			stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>			k--</span></span>
<span class="line"><span>			if k == 0 {</span></span>
<span class="line"><span>				return root.Val</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			root = root.Right</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 0</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：预处理结点数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>单次中序已够，但若反复查询而树不变，每次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 仍重复走左链。预处理每棵子树的结点数后，可比较左子树规模与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 决定向左或向右。</p>
<p>一次查询变为沿根下行，适合静态树上的多次询问。</p>
</blockquote>
<p>预处理每个结点作为根节点的子树的节点数。</p>
<p>这种算法可以用来优化频繁查找第 k 个树、而二叉搜索树本身不被修改的情况。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>type BST struct {</span></span>
<span class="line"><span>	cnt  map[*TreeNode]int</span></span>
<span class="line"><span>	root *TreeNode</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func newBST(root *TreeNode) *BST {</span></span>
<span class="line"><span>	var count func(*TreeNode) int</span></span>
<span class="line"><span>	cnt := map[*TreeNode]int{}</span></span>
<span class="line"><span>	count = func(root *TreeNode) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		n := 1 + count(root.Left) + count(root.Right)</span></span>
<span class="line"><span>		cnt[root] = n</span></span>
<span class="line"><span>		return n</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	count(root)</span></span>
<span class="line"><span>	return &#x26;BST{cnt, root}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (bst *BST) kthSmallest(k int) int {</span></span>
<span class="line"><span>	node := bst.root</span></span>
<span class="line"><span>	for node != nil {</span></span>
<span class="line"><span>		v := 0</span></span>
<span class="line"><span>		if node.Left != nil {</span></span>
<span class="line"><span>			v = bst.cnt[node.Left]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v == k-1 {</span></span>
<span class="line"><span>			return node.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v &#x3C; k-1 {</span></span>
<span class="line"><span>			k -= (v + 1)</span></span>
<span class="line"><span>			node = node.Right</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			node = node.Left</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func kthSmallest(root *TreeNode, k int) int {</span></span>
<span class="line"><span>	bst := newBST(root)</span></span>
<span class="line"><span>	return bst.kthSmallest(k)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/kth-smallest-element-in-a-bst" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0230.Kth%20Smallest%20Element%20in%20a%20BST/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-235" tabindex="-1">235. 二叉搜索树的最近公共祖先 <a class="header-anchor" href="#q-235" aria-label="Permalink to &quot;235. 二叉搜索树的最近公共祖先 {#q-235}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、二叉树、最近公共祖先</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。</p>&#10;&#10;<p><a href="https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin" target="_blank" rel="noopener noreferrer">百度百科</a>中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（<strong>一个节点也可以是它自己的祖先</strong>）。”</p>&#10;&#10;<p>例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0235.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Search%20Tree/images/binarysearchtree_improved.png" loading="lazy"></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre><strong>输入:</strong> root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8&#10;<strong>输出:</strong> 6 &#10;<strong>解释: </strong>节点 <code>2 </code>和节点 <code>8 </code>的最近公共祖先是 <code>6。</code>&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre><strong>输入:</strong> root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4&#10;<strong>输出:</strong> 2&#10;<strong>解释: </strong>节点 <code>2</code> 和节点 <code>4</code> 的最近公共祖先是 <code>2</code>, 因为根据定义最近公共祖先节点可以为节点本身。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>说明:</strong></p>&#10;&#10;<ul>&#10;	<li>所有节点的值都是唯一的。</li>&#10;	<li>p、q 为不同节点且均存在于给定的二叉搜索树中。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：迭代 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>BST 上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>,</mo>
  <mi>q</mi>
</math></span> 的 LCA 必落在二者值之间的分岔点。从根下行：二者都小于当前结点则走左，都大于则走右，否则当前即为分岔。</p>
<p>迭代即可，无需递归栈。</p>
</blockquote>
<p>我们从根节点开始遍历，如果当前节点的值小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的值，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 应该在当前节点的右子树，因此将当前节点移动到右子节点；如果当前节点的值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的值，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 应该在当前节点的左子树，因此将当前节点移动到左子节点；否则说明当前节点就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的最近公共祖先，返回当前节点即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是二叉搜索树的节点个数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val   int</span></span>
<span class="line"><span> *     Left  *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		if root.Val &#x3C; min(p.Val, q.Val) {</span></span>
<span class="line"><span>			root = root.Right</span></span>
<span class="line"><span>		} else if root.Val > max(p.Val, q.Val) {</span></span>
<span class="line"><span>			root = root.Left</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			return root</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同一分岔规则也可写成递归：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>,</mo>
  <mi>q</mi>
</math></span> 都在左（或右）则递归该侧，否则返回当前根。逻辑与迭代相同，实现更短。</p>
</blockquote>
<p>我们也可以使用递归的方法来解决这个问题。</p>
<p>我们首先判断当前节点的值是否小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的值，如果是，则递归遍历右子树；如果当前节点的值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的值，如果是，则递归遍历左子树；否则说明当前节点就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">p</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">q</mtext>
</math></span> 的最近公共祖先，返回当前节点即可。</p>
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
</math></span> 是二叉搜索树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val   int</span></span>
<span class="line"><span> *     Left  *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	if root.Val &#x3C; p.Val &#x26;&#x26; root.Val &#x3C; q.Val {</span></span>
<span class="line"><span>		return lowestCommonAncestor(root.Right, p, q)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if root.Val > p.Val &#x26;&#x26; root.Val > q.Val {</span></span>
<span class="line"><span>		return lowestCommonAncestor(root.Left, p, q)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return root</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0235.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Search%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-236" tabindex="-1">236. 二叉树的最近公共祖先 <a class="header-anchor" href="#q-236" aria-label="Permalink to &quot;236. 二叉树的最近公共祖先 {#q-236}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树、最近公共祖先</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p>&#10;&#10;<p><a href="https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin" target="_blank" rel="noopener noreferrer">百度百科</a>中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（<strong>一个节点也可以是它自己的祖先</strong>）。”</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/images/binarytree.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>节点 <code>5 </code>和节点 <code>1 </code>的最近公共祖先是节点 <code>3 。</code>&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/images/binarytree.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>节点 <code>5 </code>和节点 <code>4 </code>的最近公共祖先是节点 <code>5 。</code>因为根据定义最近公共祖先节点可以为节点本身。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,2], p = 1, q = 2&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点数目在范围 <code>[2, 10<sup>5</sup>]</code> 内。</li>&#10;	<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code></li>&#10;	<li>所有 <code>Node.val</code> <code>互不相同</code> 。</li>&#10;	<li><code>p != q</code></li>&#10;	<li><code>p</code> 和 <code>q</code> 均存在于给定的二叉树中。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>普通二叉树没有有序性，不能按值决定方向。LCA 是同时覆盖 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 的最深结点。</p>
<p>后序递归：子树中找到目标则上送该结点；左右都非空则当前根为 LCA，否则上送非空一侧。</p>
</blockquote>
<p>我们递归遍历二叉树：</p>
<p>如果当前节点为空或者等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，则返回当前节点；</p>
<p>否则，我们递归遍历左右子树，将返回的结果分别记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span> 都不为空，则说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span> 分别在左右子树中，因此当前节点即为最近公共祖先；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span> 中只有一个不为空，返回不为空的那个。</p>
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
<span class="line"><span>func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	if root == nil || root == p || root == q {</span></span>
<span class="line"><span>		return root</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	left := lowestCommonAncestor(root.Left, p, q)</span></span>
<span class="line"><span>	right := lowestCommonAncestor(root.Right, p, q)</span></span>
<span class="line"><span>	if left != nil &#x26;&#x26; right != nil {</span></span>
<span class="line"><span>		return root</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if left != nil {</span></span>
<span class="line"><span>		return left</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return right</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-250" tabindex="-1">250. 统计同值子树 🔒 <a class="header-anchor" href="#q-250" aria-label="Permalink to &quot;250. 统计同值子树 🔒 {#q-250}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉树，统计该二叉树数值相同的 <span>子树</span> 个数。</p>&#10;&#10;<p>同值子树是指该子树的所有节点都拥有相同的数值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0250.Count%20Univalue%20Subtrees/images/unival_e1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [5,1,5,5,5,null,5]&#10;<b>输出：</b>4&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>root = []&#10;<b>输出：</b>0&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>root = [5,5,5,5,5,null,5]&#10;<b>输出：</b>6&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的编号在 <code>[0, 1000]</code> 范围内</li>&#10;	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一棵子树是单值，当且仅当左右子树都是单值且根值与孩子相同。自底向上一次遍历即可计数。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
</math></span> 返回该子树是否单值：左右皆真且两侧值（空则视作根值）等于根时，答案加一并返回真。</p>
</blockquote>
<p>我们设计一个递归函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，该函数返回以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的子树中所有节点的值是否相同。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 的递归过程如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，则返回 <code v-pre>true</code>；</li>
<li>否则，我们递归地计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左右子树，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 为 <code v-pre>false</code> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 为 <code v-pre>false</code>，则返回 <code v-pre>false</code>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左子树不为空且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左子树的值不等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的值，或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的右子树不为空且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的右子树的值不等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的值，则返回 <code v-pre>false</code>；否则，我们将答案加一，并返回 <code v-pre>true</code>。</li>
</ul>
<p>递归结束后，返回答案即可。</p>
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
</math></span> 是二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func countUnivalSubtrees(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	var dfs func(*TreeNode) bool</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) bool {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l, r := dfs(root.Left), dfs(root.Right)</span></span>
<span class="line"><span>		if !l || !r {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root.Left != nil &#x26;&#x26; root.Left.Val != root.Val {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root.Right != nil &#x26;&#x26; root.Right.Val != root.Val {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-univalue-subtrees" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0250.Count%20Univalue%20Subtrees/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-255" tabindex="-1">255. 验证二叉搜索树的前序遍历序列 🔒 <a class="header-anchor" href="#q-255" aria-label="Permalink to &quot;255. 验证二叉搜索树的前序遍历序列 🔒 {#q-255}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、二叉搜索树、递归、数组、二叉树、单调栈</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 <b>无重复元素</b> 的整数数组 <code>preorder</code> ， <em>如果它是以二叉搜索树的<strong>先序遍历</strong>排列</em><em> </em>，返回 <code>true</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0255.Verify%20Preorder%20Sequence%20in%20Binary%20Search%20Tree/images/preorder-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>preorder = [5,2,1,3,6]&#10;<strong>输出: </strong>true</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>preorder = [5,2,6,1,3]&#10;<strong>输出: </strong>false</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= preorder.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= preorder[i] &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>preorder</code> 中 <strong>无重复元素</strong></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>您能否使用恒定的空间复杂度来完成此题？</p></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>重建整棵 BST 再验证偏重。先序先访问根、再左、后右，栈中递减的是尚未转向右子树的结点。</p>
<p>当前值小于已弹出的下界则违反 BST；否则弹出所有小于它的栈顶作为新下界，再压入当前值。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func verifyPreorder(preorder []int) bool {</span></span>
<span class="line"><span>	var stk []int</span></span>
<span class="line"><span>	last := math.MinInt32</span></span>
<span class="line"><span>	for _, x := range preorder {</span></span>
<span class="line"><span>		if x &#x3C; last {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for len(stk) > 0 &#x26;&#x26; stk[len(stk)-1] &#x3C; x {</span></span>
<span class="line"><span>			last = stk[len(stk)-1]</span></span>
<span class="line"><span>			stk = stk[0 : len(stk)-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stk = append(stk, x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/verify-preorder-sequence-in-binary-search-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0255.Verify%20Preorder%20Sequence%20in%20Binary%20Search%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-257" tabindex="-1">257. 二叉树的所有路径 <a class="header-anchor" href="#q-257" aria-label="Permalink to &quot;257. 二叉树的所有路径 {#q-257}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、字符串、回溯、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二叉树的根节点 <code>root</code>。</p>&#10;&#10;<p>按 <strong>任意顺序</strong> ，返回所有 <strong>从根节点到叶子节点</strong> 的路径。</p>&#10;&#10;<p><strong>叶子节点</strong> 是指没有子节点的节点。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0257.Binary%20Tree%20Paths/images/paths-tree.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,3,null,5]&#10;<strong>输出：</strong>[&quot;1->2->5&quot;,&quot;1->3&quot;]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1]&#10;<strong>输出：</strong>[&quot;1&quot;]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目在范围 <code>[1, 100]</code> 内</li>&#10;	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>根到叶的路径需在遍历时记下沿途结点。DFS 下行时把当前值加入路径，到达叶子则拼接进答案，返回时弹出以回溯。</p>
</blockquote>
<p>我们可以使用深度优先搜索的方法遍历整棵二叉树，每一次我们将当前的节点添加到路径中。如果当前的节点是叶子节点，则我们将整个路径加入到答案中。否则我们继续递归遍历节点的孩子节点。最后当我们递归结束返回到当前节点时，我们需要将当前节点从路径中删除。</p>
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
</math></span> 是二叉树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func binaryTreePaths(root *TreeNode) (ans []string) {</span></span>
<span class="line"><span>	t := []string{}</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t = append(t, strconv.Itoa(root.Val))</span></span>
<span class="line"><span>		if root.Left == nil &#x26;&#x26; root.Right == nil {</span></span>
<span class="line"><span>			ans = append(ans, strings.Join(t, "->"))</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			dfs(root.Left)</span></span>
<span class="line"><span>			dfs(root.Right)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t = t[:len(t)-1]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/binary-tree-paths" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0257.Binary%20Tree%20Paths/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-270" tabindex="-1">270. 最接近的二叉搜索树值 🔒 <a class="header-anchor" href="#q-270" aria-label="Permalink to &quot;270. 最接近的二叉搜索树值 🔒 {#q-270}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、二分查找、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre>给你二叉搜索树的根节点 <code>root</code> 和一个目标值 <code>target</code> ，请在该二叉搜索树中找到最接近目标值 <code>target</code> 的数值。如果有多个答案，返回最小的那个。&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0270.Closest%20Binary%20Search%20Tree%20Value/images/closest1-1-tree.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [4,2,5,1,3], target = 3.714286&#10;<strong>输出：</strong>4&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1], target = 4.428571&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目在范围 <code>[1, 10<sup>4</sup>]</code> 内</li>&#10;	<li><code>0 &lt;= Node.val &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>不必遍历整棵 BST：与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 比较后只走一侧。沿路更新与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 更近（并列取较小）的答案。</p>
<p>递归沿左或右下行即可。</p>
</blockquote>
<p>我们定义一个递归函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从当前节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>o</mi>
  <mi>d</mi>
  <mi>e</mi>
</math></span> 开始，寻找最接近目标值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的节点。我们可以通过比较当前节点的值与目标值的差的绝对值，来更新答案，如果目标值小于当前节点的值，我们就递归地搜索左子树，否则我们递归地搜索右子树。</p>
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
</math></span> 是二叉搜索树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func closestValue(root *TreeNode, target float64) int {</span></span>
<span class="line"><span>	ans := root.Val</span></span>
<span class="line"><span>	diff := math.MaxFloat64</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(node *TreeNode) {</span></span>
<span class="line"><span>		if node == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		nxt := math.Abs(float64(node.Val) - target)</span></span>
<span class="line"><span>		if nxt &#x3C; diff || (nxt == diff &#x26;&#x26; node.Val &#x3C; ans) {</span></span>
<span class="line"><span>			diff = nxt</span></span>
<span class="line"><span>			ans = node.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if target &#x3C; float64(node.Val) {</span></span>
<span class="line"><span>			dfs(node.Left)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			dfs(node.Right)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：迭代 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>同一路径可用迭代实现，去掉递归栈，空间降为常数。</p>
</blockquote>
<p>我们可以将递归函数改写为迭代的形式，使用一个循环来模拟递归的过程。我们从根节点开始，判断当前节点的值与目标值的差的绝对值是否小于当前的最小差，如果是，我们就更新答案。然后根据目标值与当前节点的值的大小关系，决定向左子树还是右子树移动。当我们遍历到空节点时，循环结束。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是二叉搜索树的节点数。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func closestValue(root *TreeNode, target float64) int {</span></span>
<span class="line"><span>	ans := root.Val</span></span>
<span class="line"><span>	diff := math.MaxFloat64</span></span>
<span class="line"><span>	for root != nil {</span></span>
<span class="line"><span>		nxt := math.Abs(float64(root.Val) - target)</span></span>
<span class="line"><span>		if nxt &#x3C; diff || (nxt == diff &#x26;&#x26; root.Val &#x3C; ans) {</span></span>
<span class="line"><span>			diff = nxt</span></span>
<span class="line"><span>			ans = root.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if float64(root.Val) > target {</span></span>
<span class="line"><span>			root = root.Left</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			root = root.Right</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/closest-binary-search-tree-value" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0270.Closest%20Binary%20Search%20Tree%20Value/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-272" tabindex="-1">272. 最接近的二叉搜索树值 II 🔒 <a class="header-anchor" href="#q-272" aria-label="Permalink to &quot;272. 最接近的二叉搜索树值 II 🔒 {#q-272}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、深度优先搜索、二叉搜索树、双指针、二叉树、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定二叉搜索树的根 <code>root</code> 、一个目标值 <code>target</code> 和一个整数 <code>k</code> ，返回BST中最接近目标的 <code>k</code> 个值。你可以按 <strong>任意顺序</strong> 返回答案。</p>&#10;&#10;<p>题目 <strong>保证</strong> 该二叉搜索树中只会存在一种 k 个值集合最接近 <code>target</code></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0272.Closest%20Binary%20Search%20Tree%20Value%20II/images/closest1-1-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [4,2,5,1,3]，目标值 = 3.714286，且 <em>k</em> = 2&#10;<strong>输出:</strong> [4,3]</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1], target = 0.000000, k = 1&#10;<strong>输出:</strong> [1]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>二叉树的节点总数为 <code>n</code></li>&#10;	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>0 &lt;= Node.val &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>假设该二叉搜索树是平衡的，请问您是否能在小于 <code>O(n)</code>（ <code>n = total nodes</code> ）的时间复杂度内解决该问题呢？</p></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>BST 中序为有序序列，与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 最近的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个数在该序列上构成一段窗口。维护长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的队列，中序填入。</p>
<p>窗口已满且当前值不再更近时，右侧只会更远，可以剪枝返回。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func closestKValues(root *TreeNode, target float64, k int) []int {</span></span>
<span class="line"><span>	var ans []int</span></span>
<span class="line"><span>	var dfs func(root *TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>		if len(ans) &#x3C; k {</span></span>
<span class="line"><span>			ans = append(ans, root.Val)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			if math.Abs(float64(root.Val)-target) >= math.Abs(float64(ans[0])-target) {</span></span>
<span class="line"><span>				return</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans = ans[1:]</span></span>
<span class="line"><span>			ans = append(ans, root.Val)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/closest-binary-search-tree-value-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0272.Closest%20Binary%20Search%20Tree%20Value%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-285" tabindex="-1">285. 二叉搜索树中的中序后继 🔒 <a class="header-anchor" href="#q-285" aria-label="Permalink to &quot;285. 二叉搜索树中的中序后继 🔒 {#q-285}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵二叉搜索树和其中的一个节点 <code>p</code> ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 <code>null</code> 。</p>&#10;&#10;<p>节点 <code>p</code> 的后继是值比 <code>p.val</code> 大的节点中键值最小的节点。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0285.Inorder%20Successor%20in%20BST/images/285_example_1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [2,1,3], p = 1&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>这里 1 的中序后继是 2。请注意 p 和返回值都应是 TreeNode 类型。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0285.Inorder%20Successor%20in%20BST/images/285_example_2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [5,3,6,2,4,null,null,1], p = 6&#10;<strong>输出：</strong>null&#10;<strong>解释：</strong>因为给出的节点没有中序后继，所以答案就返回 <code>null 了。</code>&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目在范围 <code>[1, 10<sup>4</sup>]</code> 内。</li>&#10;	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;	<li>树中各节点的值均保证唯一。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分搜索 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>中序后继是值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的最小结点。BST 上可像二分一样走：当前值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 则它是候选并转向左，否则转向右。</p>
<p>走完整条路径后记下的候选即为后继，高度时间内完成。</p>
</blockquote>
<p>二叉搜索树的中序遍历是一个升序序列，因此可以使用二分搜索的方法。</p>
<p>二叉搜索树节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的中序后继节点满足：</p>
<ol>
<li>中序后继的节点值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的节点值</li>
<li>中序后继是所有大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的节点中值最小的节点</li>
</ol>
<p>因此，对于当前节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&gt;</mo>
  <mi>p</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 可能是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的中序后继节点，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>，然后搜索左子树，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&#x2264;</mo>
  <mi>p</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 不能是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
</math></span> 的中序后继节点，搜索右子树，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 为二叉搜索树的高度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func inorderSuccessor(root *TreeNode, p *TreeNode) (ans *TreeNode) {</span></span>
<span class="line"><span>	for root != nil {</span></span>
<span class="line"><span>		if root.Val > p.Val {</span></span>
<span class="line"><span>			ans = root</span></span>
<span class="line"><span>			root = root.Left</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			root = root.Right</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/inorder-successor-in-bst" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0285.Inorder%20Successor%20in%20BST/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-298" tabindex="-1">298. 二叉树最长连续序列 🔒 <a class="header-anchor" href="#q-298" aria-label="Permalink to &quot;298. 二叉树最长连续序列 🔒 {#q-298}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵指定的二叉树的根节点 <code>root</code> ，请你计算其中 <strong>最长连续序列路径</strong> 的长度。</p>&#10;&#10;<p><strong>最长连续序列路径</strong> 是依次递增 1 的路径。该路径，可以是从某个初始节点到树中任意节点，通过「父 - 子」关系连接而产生的任意路径。且必须从父节点到子节点，反过来是不可以的。</p>&#10; &#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0298.Binary%20Tree%20Longest%20Consecutive%20Sequence/images/consec1-1-tree.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,3,2,4,null,null,null,5]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>当中，最长连续序列是 <code>3-4-5 ，所以</code>返回结果为 <code>3 。</code>&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0298.Binary%20Tree%20Longest%20Consecutive%20Sequence/images/consec1-2-tree.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [2,null,3,2,null,1]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>当中，最长连续序列是 <code>2-3 。注意，不是</code> <code>3-2-1，所以</code>返回 <code>2 。</code>&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目在范围 <code>[1, 3 * 10<sup>4</sup>]</code> 内</li>&#10;	<li><code>-3 * 10<sup>4</sup> &lt;= Node.val &lt;= 3 * 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>连续路径是父到子相差 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 的下行链。后序得到左右连续长度，仅当孩子值恰好比根大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 时才能接上，否则从本结点重新计 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
</math></span> 返回以当前结点开头的最长连续长度，并全局更新答案。</p>
</blockquote>
<p>我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为连续序列的第一个节点的最长连续序列路径长度。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行过程如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，那么返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则，我们递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左右子节点，分别得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左子节点和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 连续，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 的值加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，否则置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的右子节点和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 连续，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 的值加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，否则置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>然后我们更新答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>l</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
</math></span>，并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>最后，我们调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，返回答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
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
</math></span> 是二叉树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func longestConsecutive(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	var dfs func(*TreeNode) int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l := dfs(root.Left) + 1</span></span>
<span class="line"><span>		r := dfs(root.Right) + 1</span></span>
<span class="line"><span>		if root.Left != nil &#x26;&#x26; root.Left.Val-root.Val != 1 {</span></span>
<span class="line"><span>			l = 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root.Right != nil &#x26;&#x26; root.Right.Val-root.Val != 1 {</span></span>
<span class="line"><span>			r = 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := max(l, r)</span></span>
<span class="line"><span>		ans = max(ans, t)</span></span>
<span class="line"><span>		return t</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/binary-tree-longest-consecutive-sequence" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0200-0299/0298.Binary%20Tree%20Longest%20Consecutive%20Sequence/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-314" tabindex="-1">314. 二叉树的垂直遍历 🔒 <a class="header-anchor" href="#q-314" aria-label="Permalink to &quot;314. 二叉树的垂直遍历 🔒 {#q-314}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、哈希表、二叉树、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二叉树的根结点，返回其结点按 <strong>垂直方向</strong>（从上到下，逐列）遍历的结果。</p>&#10;&#10;<p>如果两个结点在同一行和列，那么顺序则为 <strong>从左到右</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0314.Binary%20Tree%20Vertical%20Order%20Traversal/images/1727276130-UOKFsu-image.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [3,9,20,null,null,15,7]&#10;<strong>输出：</strong>[[9],[3,15],[20],[7]]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0314.Binary%20Tree%20Vertical%20Order%20Traversal/images/1727276212-bzuKab-image.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [3,9,8,4,0,1,7]&#10;<strong>输出：</strong>[[4],[9],[3,0,1],[8],[7]]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0314.Binary%20Tree%20Vertical%20Order%20Traversal/images/1727276242-EGdtNz-image.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,3,4,10,9,11,null,5,null,null,null,null,null,null,null,6]&#10;<strong>输出：</strong>[[4],[2,5],[1,10,9,6],[3],[11]]</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中结点的数目在范围 <code>[0, 100]</code> 内</li>&#10;	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>竖直遍历按列从左到右、列内从上到下输出。DFS 访问顺序并非层序，同一列可能先深后浅。</p>
<p>为此在递归中记录深度与横向偏移，按列分桶后再按深度排序。列键排序保证从左到右。</p>
</blockquote>
<p>DFS 遍历二叉树，记录每个节点的值、深度，以及横向的偏移量。然后对所有节点按照横向偏移量从小到大排序，再按照深度从小到大排序，最后按照横向偏移量分组。</p>
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
</math></span> 为二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func verticalOrder(root *TreeNode) [][]int {</span></span>
<span class="line"><span>	d := map[int][][]int{}</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, depth, offset int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		d[offset] = append(d[offset], []int{depth, root.Val})</span></span>
<span class="line"><span>		dfs(root.Left, depth+1, offset-1)</span></span>
<span class="line"><span>		dfs(root.Right, depth+1, offset+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, 0, 0)</span></span>
<span class="line"><span>	idx := []int{}</span></span>
<span class="line"><span>	for i := range d {</span></span>
<span class="line"><span>		idx = append(idx, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(idx)</span></span>
<span class="line"><span>	ans := [][]int{}</span></span>
<span class="line"><span>	for _, i := range idx {</span></span>
<span class="line"><span>		v := d[i]</span></span>
<span class="line"><span>		sort.SliceStable(v, func(i, j int) bool { return v[i][0] &#x3C; v[j][0] })</span></span>
<span class="line"><span>		t := []int{}</span></span>
<span class="line"><span>		for _, x := range v {</span></span>
<span class="line"><span>			t = append(t, x[1])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, t)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一同一列还需按深度再排序。BFS 按层推进，先入队者深度更小，列内自然有序，只需按列键排序输出。左右孩子分别带偏移 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mn>1</mn>
</math></span> 入队。</p>
</blockquote>
<p>本题较好的做法应该是 BFS，从上往下逐层进行遍历。</p>
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
</math></span> 是二叉树的结点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func verticalOrder(root *TreeNode) [][]int {</span></span>
<span class="line"><span>	ans := [][]int{}</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	d := map[int][]int{}</span></span>
<span class="line"><span>	q := []pair{pair{root, 0}}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		for n := len(q); n > 0; n-- {</span></span>
<span class="line"><span>			p := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			root = p.node</span></span>
<span class="line"><span>			offset := p.offset</span></span>
<span class="line"><span>			d[offset] = append(d[offset], root.Val)</span></span>
<span class="line"><span>			if root.Left != nil {</span></span>
<span class="line"><span>				q = append(q, pair{root.Left, offset - 1})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if root.Right != nil {</span></span>
<span class="line"><span>				q = append(q, pair{root.Right, offset + 1})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	idx := []int{}</span></span>
<span class="line"><span>	for i := range d {</span></span>
<span class="line"><span>		idx = append(idx, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(idx)</span></span>
<span class="line"><span>	for _, i := range idx {</span></span>
<span class="line"><span>		ans = append(ans, d[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct {</span></span>
<span class="line"><span>	node   *TreeNode</span></span>
<span class="line"><span>	offset int</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/binary-tree-vertical-order-traversal" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0314.Binary%20Tree%20Vertical%20Order%20Traversal/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-331" tabindex="-1">331. 验证二叉树的前序序列化 <a class="header-anchor" href="#q-331" aria-label="Permalink to &quot;331. 验证二叉树的前序序列化 {#q-331}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、字符串、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>序列化二叉树的一种方法是使用 <strong>前序遍历 </strong>。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 <code>#</code>。</p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0331.Verify%20Preorder%20Serialization%20of%20a%20Binary%20Tree/images/pre-tree.jpg" loading="lazy"></p>&#10;&#10;<p>例如，上面的二叉树可以被序列化为字符串 <code>&quot;9,3,4,#,#,1,#,#,2,#,6,#,#&quot;</code>，其中 <code>#</code> 代表一个空节点。</p>&#10;&#10;<p>给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。</p>&#10;&#10;<p><strong>保证</strong> 每个以逗号分隔的字符或为一个整数或为一个表示 <code>null</code> 指针的 <code>'#'</code> 。</p>&#10;&#10;<p>你可以认为输入格式总是有效的</p>&#10;&#10;<ul>&#10;	<li>例如它永远不会包含两个连续的逗号，比如 <code>&quot;1,,3&quot;</code> 。</li>&#10;</ul>&#10;&#10;<p><strong>注意：</strong>不允许重建树。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>preorder = <code>&quot;9,3,4,#,#,1,#,#,2,#,6,#,#&quot;</code>&#10;<strong>输出: </strong><code>true</code></pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>preorder = <code>&quot;1,#&quot;</code>&#10;<strong>输出: </strong><code>false</code>&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>preorder = <code>&quot;9,#,#,1&quot;</code>&#10;<strong>输出: </strong><code>false</code>&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= preorder.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>preorder</code> 由以逗号 <code>“，”</code> 分隔的 <code>[0,100]</code> 范围内的整数和 <code>“#”</code> 组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断逗号分隔的先序序列是否对应一棵二叉树。结点有两个孩子，空孩子为 <code v-pre>#</code>。计数槽位可做，也可用栈归约。</p>
<p>遇到 <code v-pre>值 # #</code> 说明一棵叶子子树已完成，将其收成一个 <code v-pre>#</code>。反复归约后若只剩一个 <code v-pre>#</code>，则整棵树合法。非空结点后必须能配上两棵子树，否则栈无法收干净。</p>
</blockquote>
<p>我们将字符串 <code v-pre>preorder</code> 按逗号分割成数组，然后遍历数组，如果遇到了连续两个 <code v-pre>'#'</code>，并且第三个元素不是 <code v-pre>'#'</code>，那么就将这三个元素替换成一个 <code v-pre>'#'</code>，这个过程一直持续到数组遍历结束。</p>
<p>最后，判断数组长度是否为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，且数组唯一的元素是否为 <code v-pre>'#'</code> 即可。</p>
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
</math></span> 为字符串 <code v-pre>preorder</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func isValidSerialization(preorder string) bool {</span></span>
<span class="line"><span>	stk := []string{}</span></span>
<span class="line"><span>	for _, s := range strings.Split(preorder, ",") {</span></span>
<span class="line"><span>		stk = append(stk, s)</span></span>
<span class="line"><span>		for len(stk) >= 3 &#x26;&#x26; stk[len(stk)-1] == "#" &#x26;&#x26; stk[len(stk)-2] == "#" &#x26;&#x26; stk[len(stk)-3] != "#" {</span></span>
<span class="line"><span>			stk = stk[:len(stk)-3]</span></span>
<span class="line"><span>			stk = append(stk, "#")</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(stk) == 1 &#x26;&#x26; stk[0] == "#"</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0331.Verify%20Preorder%20Serialization%20of%20a%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-333" tabindex="-1">333. 最大二叉搜索子树 🔒 <a class="header-anchor" href="#q-333" aria-label="Permalink to &quot;333. 最大二叉搜索子树 🔒 {#q-333}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、动态规划、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉树，找到其中最大的二叉搜索树（BST）子树，并返回该<span>子树</span>的大小。其中，最大指的是子树节点数最多的。</p>&#10;&#10;<p><strong>二叉搜索树（BST）</strong>中的所有节点都具备以下属性：</p>&#10;&#10;<ul>&#10;	<li>&#10;	<p>左子树的值小于其父（根）节点的值。</p>&#10;	</li>&#10;	<li>&#10;	<p>右子树的值大于其父（根）节点的值。</p>&#10;	</li>&#10;</ul>&#10;&#10;<p><strong>注意：</strong>子树必须包含其所有后代。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0333.Largest%20BST%20Subtree/images/tmp.jpg" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [10,5,15,1,8,null,7]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>本例中最大的 BST 子树是高亮显示的子树。返回值是子树的大小，即 3 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树上节点数目的范围是 <code>[0, 10<sup>4</sup>]</code></li>&#10;	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶:</strong>  你能想出 O(n) 时间复杂度的解法吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求最大二叉搜索子树的结点数。对每个结点单独验证 BST 会重复遍历。子树是否为 BST 取决于左右极值与自身大小关系。</p>
<p>后序返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x6700;</mi>
  <mi mathvariant="normal">&#x5C0F;</mi>
  <mi mathvariant="normal">&#x503C;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x6700;</mi>
  <mi mathvariant="normal">&#x5927;</mi>
  <mi mathvariant="normal">&#x503C;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x89C4;</mi>
  <mi mathvariant="normal">&#x6A21;</mi>
  <mo stretchy="false">)</mo>
</math></span>。若左最大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&lt;</mo>
</math></span> 根 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&lt;</mo>
</math></span> 右最小，则合并规模并更新答案；否则返回哨兵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mo>&#x2212;</mo>
  <mi mathvariant="normal">&#x221E;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x221E;</mi>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 使祖先无法再并入。空树返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x221E;</mi>
  <mo>,</mo>
  <mo>&#x2212;</mo>
  <mi mathvariant="normal">&#x221E;</mi>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span> 以便叶子成立。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func largestBSTSubtree(root *TreeNode) int {</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	var dfs func(root *TreeNode) []int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) []int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return []int{math.MaxInt32, math.MinInt32, 0}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		left := dfs(root.Left)</span></span>
<span class="line"><span>		right := dfs(root.Right)</span></span>
<span class="line"><span>		if left[1] &#x3C; root.Val &#x26;&#x26; root.Val &#x3C; right[0] {</span></span>
<span class="line"><span>			ans = max(ans, left[2]+right[2]+1)</span></span>
<span class="line"><span>			return []int{min(root.Val, left[0]), max(root.Val, right[1]), left[2] + right[2] + 1}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return []int{math.MinInt32, math.MaxInt32, 0}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/largest-bst-subtree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0333.Largest%20BST%20Subtree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-337" tabindex="-1">337. 打家劫舍 III <a class="header-anchor" href="#q-337" aria-label="Permalink to &quot;337. 打家劫舍 III {#q-337}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、动态规划、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 <code>root</code> 。</p>&#10;&#10;<p>除了 <code>root</code> 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 <strong>两个直接相连的房子在同一天晚上被打劫</strong> ，房屋将自动报警。</p>&#10;&#10;<p>给定二叉树的 <code>root</code> 。返回 <em><strong>在不触动警报的情况下</strong> ，小偷能够盗取的最高金额</em> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0337.House%20Robber%20III/images/rob1-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>root = [3,2,3,null,3,null,1]&#10;<strong>输出:</strong> 7 &#10;<strong>解释:</strong> 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0337.House%20Robber%20III/images/rob2-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>root = [3,4,5,1,3,null,1]&#10;<strong>输出:</strong> 9&#10;<strong>解释:</strong> 小偷一晚能够盗取的最高金额 4 + 5 = 9&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<p></p>&#10;&#10;<ul>&#10;	<li>树的节点数在 <code>[1, 10<sup>4</sup>]</code> 范围内</li>&#10;	<li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：树形 DP · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>树上相邻结点不能同时偷。若对每个结点分别计算「偷/不偷」再重复遍历子树，同一子树会被多次展开。</p>
<p>后序返回二元组：偷根、不偷根。偷根则左右只能取不偷；不偷根则左右各自取较大者。根处再取二者最大。每个结点只访问一次。</p>
</blockquote>
<p>我们定义一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示偷取以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的二叉树的最大金额。该函数返回一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 表示偷取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点时能得到的最大金额，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 表示不偷取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点时能得到的最大金额。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 的计算过程如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，那么显然有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>否则，我们首先计算出左右子节点的结果，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，这样就得到了两对值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>l</mi>
    <mi>a</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>l</mi>
    <mi>b</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>r</mi>
    <mi>a</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>r</mi>
    <mi>b</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。对于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 的结果，我们可以分为两种情况：</p>
<ul>
<li>如果偷取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点，那么不能偷取其左右子节点，结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>+</mo>
  <msub>
    <mi>l</mi>
    <mi>b</mi>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>r</mi>
    <mi>b</mi>
  </msub>
</math></span>；</li>
<li>如果不偷取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点，那么可以偷取其左右子节点，结果为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>l</mi>
    <mi>a</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>l</mi>
    <mi>b</mi>
  </msub>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>r</mi>
    <mi>a</mi>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>r</mi>
    <mi>b</mi>
  </msub>
  <mo stretchy="false">)</mo>
</math></span>。</li>
</ul>
<p>在主函数中，我们可以直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 的较大值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
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
</math></span> 是二叉树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func rob(root *TreeNode) int {</span></span>
<span class="line"><span>	var dfs func(*TreeNode) (int, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) (int, int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0, 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		la, lb := dfs(root.Left)</span></span>
<span class="line"><span>		ra, rb := dfs(root.Right)</span></span>
<span class="line"><span>		return root.Val + lb + rb, max(la, lb) + max(ra, rb)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b := dfs(root)</span></span>
<span class="line"><span>	return max(a, b)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/house-robber-iii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0337.House%20Robber%20III/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-366" tabindex="-1">366. 寻找二叉树的叶子节点 🔒 <a class="header-anchor" href="#q-366" aria-label="Permalink to &quot;366. 寻找二叉树的叶子节点 🔒 {#q-366}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵二叉树的 <code>root</code> 节点，请按照以下方式收集树的节点：</p>&#10;&#10;<ul>&#10;	<li>收集所有的叶子节点。</li>&#10;	<li>移除所有的叶子节点。</li>&#10;	<li>重复以上步骤，直到树为空。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0300-0399/0366.Find%20Leaves%20of%20Binary%20Tree/images/remleaves-tree.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,3,4,5]&#10;<strong>输出：</strong>[[4,5,3],[2],[1]]&#10;<strong>解释：</strong>&#10;[[3,5,4],[2],[1]] 和 [[3,4,5],[2],[1]] 也被视作正确答案，因为每一层返回元素的顺序不影响结果。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1]&#10;<strong>输出：</strong>[[1]]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数量在<code>[1, 100]</code>范围内。</li>&#10;	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>反复摘掉当前叶子，按摘取轮次分组。模拟删除需多次遍历。结点被摘的轮次等于它到叶子的高度。</p>
<p>后序求高度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x5DE6;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x53F3;</mi>
  <mo stretchy="false">)</mo>
</math></span>，把结点放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>h</mi>
  <mo stretchy="false">]</mo>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。同一高度在同一轮被摘。</p>
</blockquote>
<p>我们可以使用深度优先搜索的方法，递归遍历二叉树，将每个节点的高度作为索引，将节点的值添加到对应索引的数组中。</p>
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
</math></span> 为二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func findLeaves(root *TreeNode) (ans [][]int) {</span></span>
<span class="line"><span>	var dfs func(*TreeNode) int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l, r := dfs(root.Left), dfs(root.Right)</span></span>
<span class="line"><span>		h := max(l, r)</span></span>
<span class="line"><span>		if len(ans) == h {</span></span>
<span class="line"><span>			ans = append(ans, []int{})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans[h] = append(ans[h], root.Val)</span></span>
<span class="line"><span>		return h + 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-leaves-of-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0300-0399/0366.Find%20Leaves%20of%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-404" tabindex="-1">404. 左叶子之和 <a class="header-anchor" href="#q-404" aria-label="Permalink to &quot;404. 左叶子之和 {#q-404}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定二叉树的根节点 <code>root</code> ，返回所有左叶子之和。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0404.Sum%20of%20Left%20Leaves/images/leftsum-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [3,9,20,null,null,15,7] &#10;<strong>输出:</strong> 24 &#10;<strong>解释:</strong> 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1]&#10;<strong>输出:</strong> 0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>节点数在 <code>[1, 1000]</code> 范围内</li>&#10;	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>需要把「左孩子且为叶子」与普通左子树分开。若对每个节点都再扫一遍子树，会重复访问。</p>
<p>一次递归即可：右子树一律下探；左孩子若无子女则累加其值，否则继续递归。空树返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。判定叶子用左右指针同为空，避免额外遍历。</p>
</blockquote>
<p>我们首先判断 <code v-pre>root</code> 是否为空，如果为空则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则，我们递归调用 <code v-pre>sumOfLeftLeaves</code> 函数计算 <code v-pre>root</code> 的右子树中所有左叶子之和，并将结果赋给答案变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。然后我们判断 <code v-pre>root</code> 的左子节点是否存在，如果存在，我们判断其是否为叶子节点，如果是叶子节点，则将其值加到答案变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中，否则我们递归调用 <code v-pre>sumOfLeftLeaves</code> 函数计算 <code v-pre>root</code> 的左子树中所有左叶子之和，并将结果加到答案变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中。</p>
<p>最后返回答案即可。</p>
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
</math></span> 为二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func sumOfLeftLeaves(root *TreeNode) int {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := sumOfLeftLeaves(root.Right)</span></span>
<span class="line"><span>	if root.Left != nil {</span></span>
<span class="line"><span>		if root.Left.Left == root.Left.Right {</span></span>
<span class="line"><span>			ans += root.Left.Val</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans += sumOfLeftLeaves(root.Left)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一的判定规则不变，只是把递归改成显式栈：弹出节点后，左叶子直接累加，否则将左孩子入栈；右孩子存在则入栈。</p>
<p>渐近复杂度相同，实现上去掉递归深度限制。</p>
</blockquote>
<p>我们也可以将方法一的递归改为迭代，使用栈来模拟递归的过程。</p>
<p>与方法一类似，我们首先判断 <code v-pre>root</code> 是否为空，如果为空则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则，我们初始化答案变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，然后初始化栈 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>k</mi>
</math></span>，将 <code v-pre>root</code> 加入栈中。</p>
<p>当栈不为空时，我们弹出栈顶元素 <code v-pre>root</code>，如果 <code v-pre>root</code> 的左子节点存在，我们判断其是否为叶子节点，如果是叶子节点，则将其值加到答案变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中，否则我们将其左子节点加入栈中。然后我们判断 <code v-pre>root</code> 的右子节点是否存在，如果存在，我们将其加入栈中。</p>
<p>最后返回答案即可。</p>
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
</math></span> 为二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func sumOfLeftLeaves(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	stk := []*TreeNode{root}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		root = stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		if root.Left != nil {</span></span>
<span class="line"><span>			if root.Left.Left == root.Left.Right {</span></span>
<span class="line"><span>				ans += root.Left.Val</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				stk = append(stk, root.Left)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root.Right != nil {</span></span>
<span class="line"><span>			stk = append(stk, root.Right)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-of-left-leaves" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0404.Sum%20of%20Left%20Leaves/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-426" tabindex="-1">426. 将二叉搜索树转化为排序的双向链表 🔒 <a class="header-anchor" href="#q-426" aria-label="Permalink to &quot;426. 将二叉搜索树转化为排序的双向链表 🔒 {#q-426}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、深度优先搜索、二叉搜索树、链表、二叉树、双向链表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>将一个 <strong>二叉搜索树</strong> 就地转化为一个 <strong>已排序的双向循环链表</strong> 。</p>&#10;&#10;<p>对于双向循环列表，你可以将左右孩子指针作为双向循环链表的前驱和后继指针，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。</p>&#10;&#10;<p>特别地，我们希望可以 <strong>原地</strong> 完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中最小元素的指针。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [4,2,5,1,3] &#10;&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0426.Convert%20Binary%20Search%20Tree%20to%20Sorted%20Doubly%20Linked%20List/images/bstdllreturndll.png" loading="lazy">&#10;<strong>输出：</strong>[1,2,3,4,5]&#10;&#10;<strong>解释：</strong>下图显示了转化后的二叉搜索树，实线表示后继关系，虚线表示前驱关系。&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0426.Convert%20Binary%20Search%20Tree%20to%20Sorted%20Doubly%20Linked%20List/images/bstdllreturnbst.png" loading="lazy">&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [2,1,3]&#10;<strong>输出：</strong>[1,2,3]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数量在范围 <code>[0, 2000]</code> 中</li>&#10;	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>&#10;	<li>树中的所有值都是 <strong>独一无二</strong> 的</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>BST 的中序遍历即为升序。若先收集节点再连边，需要额外数组。题目要求原地，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">left</mtext>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mtext mathvariant="italic">right</mtext>
</math></span> 充当前驱后继。</p>
<p>中序遍历时把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">prev</mtext>
</math></span> 与当前节点互指，并记下第一个节点为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">head</mtext>
</math></span>；遍历结束后再把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">head</mtext>
</math></span> 与最后一个节点连成环。</p>
<p>先左后根再右，保证链接顺序与有序序列一致；哑元或空 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">prev</mtext>
</math></span> 用来识别链表头。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *Node</span></span>
<span class="line"><span> *     Right *Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func treeToDoublyList(root *Node) *Node {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return root</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var prev, head *Node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var dfs func(root *Node)</span></span>
<span class="line"><span>	dfs = func(root *Node) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>		if prev != nil {</span></span>
<span class="line"><span>			prev.Right = root</span></span>
<span class="line"><span>			root.Left = prev</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			head = root</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		prev = root</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	prev.Right = head</span></span>
<span class="line"><span>	head.Left = prev</span></span>
<span class="line"><span>	return head</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/convert-binary-search-tree-to-sorted-doubly-linked-list" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0426.Convert%20Binary%20Search%20Tree%20to%20Sorted%20Doubly%20Linked%20List/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-427" tabindex="-1">427. 建立四叉树 <a class="header-anchor" href="#q-427" aria-label="Permalink to &quot;427. 建立四叉树 {#q-427}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、数组、分治、矩阵</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>n * n</code> 矩阵 <code>grid</code> ，矩阵由若干 <code>0</code> 和 <code>1</code> 组成。请你用四叉树表示该矩阵 <code>grid</code> 。</p>&#10;&#10;<p>你需要返回能表示矩阵 <code>grid</code> 的 四叉树 的根结点。</p>&#10;&#10;<p>四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：</p>&#10;&#10;<ul>&#10;	<li><code>val</code>：储存叶子结点所代表的区域的值。1 对应 <strong>True</strong>，0 对应 <strong>False</strong>。注意，当 <code>isLeaf</code> 为 <strong>False </strong>时，你可以把 <strong>True</strong> 或者 <strong>False</strong> 赋值给节点，两种值都会被判题机制 <strong>接受</strong> 。</li>&#10;	<li><code>isLeaf</code>: 当这个节点是一个叶子结点时为 <strong>True</strong>，如果它有 4 个子节点则为 <strong>False</strong> 。</li>&#10;</ul>&#10;&#10;<pre>&#10;class Node {&#10;    public boolean val;&#10;    public boolean isLeaf;&#10;    public Node topLeft;&#10;    public Node topRight;&#10;    public Node bottomLeft;&#10;    public Node bottomRight;&#10;}</pre>&#10;&#10;<p>我们可以按以下步骤为二维区域构建四叉树：</p>&#10;&#10;<ol>&#10;	<li>如果当前网格的值相同（即，全为 <code>0</code> 或者全为 <code>1</code>），将 <code>isLeaf</code> 设为 True ，将 <code>val</code> 设为网格相应的值，并将四个子节点都设为 Null 然后停止。</li>&#10;	<li>如果当前网格的值不同，将 <code>isLeaf</code> 设为 False， 将 <code>val</code> 设为任意值，然后如下图所示，将当前网格划分为四个子网格。</li>&#10;	<li>使用适当的子网格递归每个子节点。</li>&#10;</ol>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/1776133572-twFsfh-image.png" loading="lazy"></p>&#10;&#10;<p>如果你想了解更多关于四叉树的内容，可以参考 <a href="https://baike.baidu.com/item/%E5%9B%9B%E5%8F%89%E6%A0%91" target="_blank" rel="noopener noreferrer">百科</a> 。</p>&#10;&#10;<p><strong>四叉树格式：</strong></p>&#10;&#10;<p>你不需要阅读本节来解决这个问题。只有当你想了解输出格式时才会这样做。输出为使用层序遍历后四叉树的序列化形式，其中 <code>null</code> 表示路径终止符，其下面不存在节点。</p>&#10;&#10;<p>它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 <code>[isLeaf, val]</code> 。</p>&#10;&#10;<p>如果 <code>isLeaf</code> 或者 <code>val</code> 的值为 True ，则表示它在列表 <code>[isLeaf, val]</code> 中的值为 <strong>1</strong> ；如果 <code>isLeaf</code> 或者 <code>val</code> 的值为 False ，则表示值为 <strong>0 </strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/1776133596-OszyMu-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[0,1],[1,0]]&#10;<strong>输出：</strong>[[0,1],[1,0],[1,1],[1,1],[1,0]]&#10;<strong>解释：</strong>此示例的解释如下：&#10;请注意，在下面四叉树的图示中，0 表示 false，1 表示 True 。&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/1776133618-WezRDK-image.png" loading="lazy">&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/1776133642-jZsQoA-image.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]&#10;<strong>输出：</strong>[[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]&#10;<strong>解释：</strong>网格中的所有值都不相同。我们将网格划分为四个子网格。&#10;topLeft，bottomLeft 和 bottomRight 均具有相同的值。&#10;topRight 具有不同的值，因此我们将其再分为 4 个子网格，这样每个子网格都具有相同的值。&#10;解释如下图所示：&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/1776133665-uHAjij-image.png" loading="lazy">&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ol>&#10;	<li><code>n == grid.length == grid[i].length</code></li>&#10;	<li><code>n == 2<sup>x</sup></code> 其中 <code>0 &lt;= x &lt;= 6</code></li>&#10;</ol></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>四叉树要求一块区域全同则为叶子，否则四等分。若对每个可能的子矩形都重新扫描，存在重复，但 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>64</mn>
</math></span> 且每次四分，总扫描量可接受。</p>
<p>DFS 扫描当前矩形是否同时出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>：若只有一种值则建叶子，否则递归四块并挂到四个孩子。</p>
<p>叶节点的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">val</mtext>
</math></span> 取该块颜色；先判定全同再决定是否分裂，避免对纯色块继续切分。</p>
</blockquote>
<p>DFS 递归遍历 grid，先判断 grid 是否为叶子节点，是则返回叶子节点相关信息；否则递归 grid 4 个子节点。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a QuadTree node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val bool</span></span>
<span class="line"><span> *     IsLeaf bool</span></span>
<span class="line"><span> *     TopLeft *Node</span></span>
<span class="line"><span> *     TopRight *Node</span></span>
<span class="line"><span> *     BottomLeft *Node</span></span>
<span class="line"><span> *     BottomRight *Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func construct(grid [][]int) *Node {</span></span>
<span class="line"><span>	var dfs func(a, b, c, d int) *Node</span></span>
<span class="line"><span>	dfs = func(a, b, c, d int) *Node {</span></span>
<span class="line"><span>		zero, one := 0, 0</span></span>
<span class="line"><span>		for i := a; i &#x3C;= c; i++ {</span></span>
<span class="line"><span>			for j := b; j &#x3C;= d; j++ {</span></span>
<span class="line"><span>				if grid[i][j] == 0 {</span></span>
<span class="line"><span>					zero = 1</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					one = 1</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		isLeaf := zero+one == 1</span></span>
<span class="line"><span>		val := isLeaf &#x26;&#x26; one == 1</span></span>
<span class="line"><span>		node := &#x26;Node{Val: val, IsLeaf: isLeaf}</span></span>
<span class="line"><span>		if isLeaf {</span></span>
<span class="line"><span>			return node</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		node.TopLeft = dfs(a, b, (a+c)/2, (b+d)/2)</span></span>
<span class="line"><span>		node.TopRight = dfs(a, (b+d)/2+1, (a+c)/2, d)</span></span>
<span class="line"><span>		node.BottomLeft = dfs((a+c)/2+1, b, c, (b+d)/2)</span></span>
<span class="line"><span>		node.BottomRight = dfs((a+c)/2+1, (b+d)/2+1, c, d)</span></span>
<span class="line"><span>		return node</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, 0, len(grid)-1, len(grid[0])-1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/construct-quad-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0427.Construct%20Quad%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-428" tabindex="-1">428. 序列化和反序列化 N 叉树 🔒 <a class="header-anchor" href="#q-428" aria-label="Permalink to &quot;428. 序列化和反序列化 N 叉树 🔒 {#q-428}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>序列化是指将一个数据结构转化为位序列的过程，因此可以将其存储在文件中或内存缓冲区中，以便稍后在相同或不同的计算机环境中恢复结构。</p>&#10;&#10;<p>设计一个序列化和反序列化 N 叉树的算法。一个 N 叉树是指每个节点都有不超过 N 个孩子节点的有根树。序列化 / 反序列化算法的算法实现没有限制。你只需要保证 N 叉树可以被序列化为一个字符串并且该字符串可以被反序列化成原树结构即可。</p>&#10;&#10;<p>例如，你需要序列化下面的 <code>3-叉</code> 树。</p>&#10;&#10;<p> </p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0428.Serialize%20and%20Deserialize%20N-ary%20Tree/images/1727093143-BPVnoI-image.png" loading="lazy"></p>&#10;&#10;<p> </p>&#10;&#10;<p>为 <code>[1 [3[5 6] 2 4]]</code>。你不需要以这种形式完成，你可以自己创造和实现不同的方法。</p>&#10;&#10;<p>或者，您可以遵循 LeetCode 的层序遍历序列化格式，其中每组孩子节点由空值分隔。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0428.Serialize%20and%20Deserialize%20N-ary%20Tree/images/1727093169-WGFOps-image.png" loading="lazy"></p>&#10;&#10;<p>例如，上面的树可以序列化为 <code>[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</code></p>&#10;&#10;<p>你不一定要遵循以上建议的格式，有很多不同的格式，所以请发挥创造力，想出不同的方法来完成本题。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;<strong>输出:</strong> [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1,null,3,2,4,null,5,6]&#10;<strong>输出:</strong> [1,null,3,2,4,null,5,6]&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = []&#10;<strong>输出:</strong> []&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点数目的范围是 <code>[0, 10<sup>4</sup>]</code>.</li>&#10;	<li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>&#10;	<li>N 叉树的高度小于等于 <code>1000</code></li>&#10;	<li>不要使用类成员 / 全局变量 / 静态变量来存储状态。你的序列化和反序列化算法应是无状态的。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：层序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>N 叉树孩子个数不定，前序若只写值无法知道一棵子树在何处结束。需要在每个节点的孩子列表后加入结束标记。</p>
<p>层序遍历：写出根值，弹出节点时依次写出孩子并入队，再写 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">#</mi>
</math></span>。反序列化按同一顺序：队列中的节点不断领取后续值作为孩子，直到遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">#</mi>
</math></span>。</p>
<p>结束符与出队顺序一一对应，保证多叉列表可以还原，且空树写成空串。</p>
</blockquote>
<p>我们可以采用层序遍历对 N 叉树进行序列化。从根节点开始，将其值加入结果，再将根节点入队。每次弹出一个节点时，依次将其所有孩子的值加入结果并入队，然后加入特殊字符 <code v-pre>#</code> 表示该节点的孩子列表结束。最后用逗号拼接成字符串返回。</p>
<p>反序列化时，将序列化字符串按分隔符切分。先根据第一个值创建根节点并入队，然后对队列中的每个节点，不断取出后续元素作为孩子，直到遇到 <code v-pre>#</code>。</p>
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
</math></span> 是 N 叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Codec struct {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() *Codec {</span></span>
<span class="line"><span>	return &#x26;Codec{}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Codec) serialize(root *Node) string {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return ""</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := []string{strconv.Itoa(root.Val)}</span></span>
<span class="line"><span>	q := []*Node{root}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		node := q[0]</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		for _, child := range node.Children {</span></span>
<span class="line"><span>			ans = append(ans, strconv.Itoa(child.Val))</span></span>
<span class="line"><span>			q = append(q, child)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, "#")</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return strings.Join(ans, ",")</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *Codec) deserialize(data string) *Node {</span></span>
<span class="line"><span>	if data == "" {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	vals := strings.Split(data, ",")</span></span>
<span class="line"><span>	v, _ := strconv.Atoi(vals[0])</span></span>
<span class="line"><span>	root := &#x26;Node{Val: v}</span></span>
<span class="line"><span>	q := []*Node{root}</span></span>
<span class="line"><span>	i := 1</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		node := q[0]</span></span>
<span class="line"><span>		q = q[1:]</span></span>
<span class="line"><span>		for i &#x3C; len(vals) &#x26;&#x26; vals[i] != "#" {</span></span>
<span class="line"><span>			v, _ = strconv.Atoi(vals[i])</span></span>
<span class="line"><span>			child := &#x26;Node{Val: v}</span></span>
<span class="line"><span>			node.Children = append(node.Children, child)</span></span>
<span class="line"><span>			q = append(q, child)</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		i++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return root</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your Codec object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor();</span></span>
<span class="line"><span> * data := obj.serialize(root);</span></span>
<span class="line"><span> * ans := obj.deserialize(data);</span></span>
<span class="line"><span> */</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/serialize-and-deserialize-n-ary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0428.Serialize%20and%20Deserialize%20N-ary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-429" tabindex="-1">429. N 叉树的层序遍历 <a class="header-anchor" href="#q-429" aria-label="Permalink to &quot;429. N 叉树的层序遍历 {#q-429}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、广度优先搜索</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 N 叉树，返回其节点值的<em>层序遍历</em>。（即从左到右，逐层遍历）。</p>&#10;&#10;<p>树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0429.N-ary%20Tree%20Level%20Order%20Traversal/images/narytreeexample.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,3,2,4,null,5,6]&#10;<strong>输出：</strong>[[1],[3,2,4],[5,6]]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0429.N-ary%20Tree%20Level%20Order%20Traversal/images/sample_4_964.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;<strong>输出：</strong>[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树的高度不会超过 <code>1000</code></li>&#10;	<li>树的节点总数在 <code>[0, 10<sup>4</sup>]</code> 之间</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>层序结果按层分组。深度优先若不分层，会把不同层的值混在一起。</p>
<p>队列记录当前层：每次先记下队长，弹出这些节点写入本层列表，并把它们的孩子入队。空根返回空列表。</p>
<p>用队长界定一层，保证同一层从左到右，且孩子在下一轮才被处理。</p>
</blockquote>
<p>我们首先判断根节点是否为空，若为空则直接返回空列表。</p>
<p>否则，我们创建一个队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，初始时将根节点加入队列。</p>
<p>当队列不为空时，我们循环以下操作：</p>
<ol>
<li>创建一个空列表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，用于存放当前层的节点值。</li>
<li>对于队列中的每个节点，将其值加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 中，并将其子节点加入队列。</li>
<li>将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 加入结果列表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span>。</li>
</ol>
<p>最后返回结果列表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
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
</math></span> 为 N 叉树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func levelOrder(root *Node) (ans [][]int) {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q := []*Node{root}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		var t []int</span></span>
<span class="line"><span>		for n := len(q); n > 0; n-- {</span></span>
<span class="line"><span>			root = q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			t = append(t, root.Val)</span></span>
<span class="line"><span>			for _, child := range root.Children {</span></span>
<span class="line"><span>				q = append(q, child)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, t)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一依赖队列。若按深度递归，把节点值追加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，层数不足时先扩一层，同样能得到层序。</p>
<p>少一个队列，递归栈承担层信息；同一层仍按孩子从左到右的访问顺序写入。</p>
</blockquote>
<p>我们可以使用深度优先搜索的方法，遍历整棵树。</p>
<p>我们定义一个辅助函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 表示当前节点，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 表示当前层数。</p>
<p>在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
</math></span> 函数中，我们首先判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 是否为空，若为空则直接返回。</p>
<p>否则，我们判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 的长度是否小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，若是则说明当前层还没有加入到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中，我们需要先加入一个空列表。然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的值加入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 中。</p>
<p>接着，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的所有子节点，对于每个子节点，我们调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>c</mi>
  <mi>h</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>在主函数中，我们调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span>，并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
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
</math></span> 为 N 叉树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func levelOrder(root *Node) (ans [][]int) {</span></span>
<span class="line"><span>	var dfs func(root *Node, i int)</span></span>
<span class="line"><span>	dfs = func(root *Node, i int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if len(ans) &#x3C;= i {</span></span>
<span class="line"><span>			ans = append(ans, []int{})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans[i] = append(ans[i], root.Val)</span></span>
<span class="line"><span>		for _, child := range root.Children {</span></span>
<span class="line"><span>			dfs(child, i+1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, 0)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/n-ary-tree-level-order-traversal" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0429.N-ary%20Tree%20Level%20Order%20Traversal/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-437" tabindex="-1">437. 路径总和 III <a class="header-anchor" href="#q-437" aria-label="Permalink to &quot;437. 路径总和 III {#q-437}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉树的根节点 <code>root</code> ，和一个整数 <code>targetSum</code> ，求该二叉树里节点值之和等于 <code>targetSum</code> 的 <strong>路径</strong> 的数目。</p>&#10;&#10;<p><strong>路径</strong> 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0437.Path%20Sum%20III/images/pathsum3-1-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>和等于 8 的路径有 3 条，如图所示。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22&#10;<strong>输出：</strong>3&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>二叉树的节点个数的范围是 <code>[0,1000]</code></li>&#10;	<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code> </li>&#10;	<li><code>-1000 &lt;= targetSum &lt;= 1000</code> </li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 前缀和 + 递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>路径必须向下，枚举每个祖先再向下扫描是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>。路径和等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">targetSum</mtext>
</math></span> 可改写成「当前前缀和减去某个祖先前缀和」。</p>
<p>先序累加前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，用哈希表统计根到当前结点的前缀出现次数， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">targetSum</mtext>
  <mo stretchy="false">]</mo>
</math></span> 即以此为终点的合法路径数。回溯时撤销 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，避免把另一条分支算进来。</p>
<p>初始 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，对应从根出发整段刚好等于目标。先查询再插入，路径不含「当前结点用两次」。</p>
</blockquote>
<p>我们可以运用前缀和的思想，对二叉树进行递归遍历，同时用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 统计从根节点到当前节点的路径上各个前缀和出现的次数。</p>
<p>我们设计一个递归函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(node, s)</mtext>
</math></span>，表示当前遍历到的节点为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">node</mtext>
</math></span>，从根节点到当前节点的路径上的前缀和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。函数的返回值是统计以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">node</mtext>
</math></span> 节点及其子树节点作为路径终点且路径和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">targetSum</mtext>
</math></span> 的路径数目。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(root, 0)</mtext>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(node, s)</mtext>
</math></span> 的递归过程如下：</p>
<ul>
<li>如果当前节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">node</mtext>
</math></span> 为空，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</li>
<li>计算从根节点到当前节点的路径上的前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。</li>
<li>用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">targetSum</mtext>
  <mo stretchy="false">]</mo>
</math></span> 表示以当前节点为路径终点且路径和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">targetSum</mtext>
</math></span> 的路径数目，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">targetSum</mtext>
  <mo stretchy="false">]</mo>
</math></span> 即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 中前缀和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">targetSum</mtext>
</math></span> 的个数。</li>
<li>将前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的计数值加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</li>
<li>递归地遍历当前节点的左右子节点，即调用函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(node.left, s)</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs(node.right, s)</mtext>
</math></span>，并将它们的返回值相加。</li>
<li>在返回值计算完成以后，需要将当前节点的前缀和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 的计数值减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，即执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>s</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</li>
<li>最后返回答案。</li>
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
</math></span> 是二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func pathSum(root *TreeNode, targetSum int) int {</span></span>
<span class="line"><span>	cnt := map[int]int{0: 1}</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int) int</span></span>
<span class="line"><span>	dfs = func(node *TreeNode, s int) int {</span></span>
<span class="line"><span>		if node == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s += node.Val</span></span>
<span class="line"><span>		ans := cnt[s-targetSum]</span></span>
<span class="line"><span>		cnt[s]++</span></span>
<span class="line"><span>		ans += dfs(node.Left, s) + dfs(node.Right, s)</span></span>
<span class="line"><span>		cnt[s]--</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(root, 0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/path-sum-iii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0437.Path%20Sum%20III/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-450" tabindex="-1">450. 删除二叉搜索树中的节点 <a class="header-anchor" href="#q-450" aria-label="Permalink to &quot;450. 删除二叉搜索树中的节点 {#q-450}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、二叉搜索树、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉搜索树的根节点 <strong>root </strong>和一个值 <strong>key</strong>，删除二叉搜索树中的 <strong>key </strong>对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。</p>&#10;&#10;<p>一般来说，删除节点可分为两个步骤：</p>&#10;&#10;<ol>&#10;	<li>首先找到需要删除的节点；</li>&#10;	<li>如果找到了，删除它。</li>&#10;</ol>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0450.Delete%20Node%20in%20a%20BST/images/del_node_1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [5,3,6,2,4,null,7], key = 3&#10;<strong>输出：</strong>[5,4,6,2,null,null,7]&#10;<strong>解释：</strong>给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。&#10;一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。&#10;另一个正确答案是 [5,2,6,null,4,null,7]。&#10;&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0450.Delete%20Node%20in%20a%20BST/images/del_node_supp.jpg" loading="lazy">&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [5,3,6,2,4,null,7], key = 0&#10;<strong>输出:</strong> [5,3,6,2,4,null,7]&#10;<strong>解释:</strong> 二叉树不包含值为 0 的节点&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [], key = 0&#10;<strong>输出:</strong> []</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>节点数的范围 <code>[0, 10<sup>4</sup>]</code>.</li>&#10;	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;	<li>节点值唯一</li>&#10;	<li><code>root</code> 是合法的二叉搜索树</li>&#10;	<li><code>-10<sup>5</sup> &lt;= key &lt;= 10<sup>5</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong> 要求算法时间复杂度为 O(h)，h 为树的高度。</p></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>BST 删除要保持中序有序。找到目标后，若只有一侧孩子则提升该孩子；两侧都在时，需选一个后继或前驱顶替。</p>
<p>按大小关系递归进入左或右。命中后：无左返右、无右返左；否则把整棵左子树挂到右子树最左结点的左侧，再返回右子树。</p>
<p>右子树的最左结点是中序后继，其左孩子为空，挂上原左子树后中序仍然有序，且只需一次下行。</p>
</blockquote>
<p>二叉搜索树有以下性质：</p>
<ol>
<li>若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；</li>
<li>若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；</li>
<li>任意节点的左、右子树也分别为二叉搜索树。</li>
</ol>
<p>我们可以递归判断当前节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mi>e</mi>
  <mi>y</mi>
</math></span> 的大小关系：</p>
<ol>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&gt;</mo>
  <mi>k</mi>
  <mi>e</mi>
  <mi>y</mi>
</math></span>，则递归左子树；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&lt;</mo>
  <mi>k</mi>
  <mi>e</mi>
  <mi>y</mi>
</math></span>，则递归右子树；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>=</mo>
  <mi>k</mi>
  <mi>e</mi>
  <mi>y</mi>
</math></span>，则进一步判断：
<ol>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 没有左子树，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span> 顶替 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的位置；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 没有右子树，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span> 顶替 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的位置；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 同时存在左右子树，则将左子树转移至右子树的最左节点的左子树上，然后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>r</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span> 顶替 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的位置。</li>
</ol>
</li>
</ol>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>H</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>H</mi>
</math></span> 是树的高度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func deleteNode(root *TreeNode, key int) *TreeNode {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if root.Val > key {</span></span>
<span class="line"><span>		root.Left = deleteNode(root.Left, key)</span></span>
<span class="line"><span>		return root</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if root.Val &#x3C; key {</span></span>
<span class="line"><span>		root.Right = deleteNode(root.Right, key)</span></span>
<span class="line"><span>		return root</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if root.Left == nil {</span></span>
<span class="line"><span>		return root.Right</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if root.Right == nil {</span></span>
<span class="line"><span>		return root.Left</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	node := root.Right</span></span>
<span class="line"><span>	for node.Left != nil {</span></span>
<span class="line"><span>		node = node.Left</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	node.Left = root.Left</span></span>
<span class="line"><span>	root = root.Right</span></span>
<span class="line"><span>	return root</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/delete-node-in-a-bst" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0400-0499/0450.Delete%20Node%20in%20a%20BST/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-501" tabindex="-1">501. 二叉搜索树中的众数 <a class="header-anchor" href="#q-501" aria-label="Permalink to &quot;501. 二叉搜索树中的众数 {#q-501}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个含重复值的二叉搜索树（BST）的根节点 <code>root</code> ，找出并返回 BST 中的所有 <a href="https://baike.baidu.com/item/%E4%BC%97%E6%95%B0/44796" target="_blank" rel="noopener noreferrer">众数</a>（即，出现频率最高的元素）。</p>&#10;&#10;<p>如果树中有不止一个众数，可以按 <strong>任意顺序</strong> 返回。</p>&#10;&#10;<p>假定 BST 满足如下定义：</p>&#10;&#10;<ul>&#10;	<li>结点左子树中所含节点的值 <strong>小于等于</strong> 当前节点的值</li>&#10;	<li>结点右子树中所含节点的值 <strong>大于等于</strong> 当前节点的值</li>&#10;	<li>左子树和右子树都是二叉搜索树</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0501.Find%20Mode%20in%20Binary%20Search%20Tree/images/mode-tree.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,2,2]&#10;<strong>输出：</strong>[2]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [0]&#10;<strong>输出：</strong>[0]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目在范围 <code>[1, 10<sup>4</sup>]</code> 内</li>&#10;	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）</p></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>众数即出现次数最多的值。若先遍历整棵树再哈希计数，时间和空间均为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 时可以接受，但没有用到二叉搜索树的有序性。</p>
<p>中序遍历得到的是非降序列，相同值必然相邻。因此只需在中序过程中维护前驱、当前连续次数与历史最大次数：次数更大则重置答案，次数持平则追加。一遍中序即可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span> 额外空间内收集全部众数。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func findMode(root *TreeNode) []int {</span></span>
<span class="line"><span>	mx, cnt := 0, 0</span></span>
<span class="line"><span>	var prev *TreeNode</span></span>
<span class="line"><span>	var ans []int</span></span>
<span class="line"><span>	var dfs func(root *TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>		if prev != nil &#x26;&#x26; prev.Val == root.Val {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			cnt = 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt > mx {</span></span>
<span class="line"><span>			ans = []int{root.Val}</span></span>
<span class="line"><span>			mx = cnt</span></span>
<span class="line"><span>		} else if cnt == mx {</span></span>
<span class="line"><span>			ans = append(ans, root.Val)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		prev = root</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈中序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>众数是出现次数最多的值。先遍历整棵树再哈希计数，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 时时间够用，但没有用到二叉搜索树的有序性。</p>
<p>中序会先走进左孩子。一条长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span> 的链按结点个数递归，调用栈会溢出。</p>
<p>中序得到的是非降序列，相同值必然相邻。因此只需要前一个值、当前连续次数和历史最大次数，不必等子树返回。</p>
<p>用显式栈做中序遍历。进入结点时压入退出标记和左孩子；退出时按连续次数更新答案，再压入右孩子。次数更大就重置答案，次数持平就追加。</p>
</blockquote>
<p>二叉搜索树的中序遍历是非降序列，相同的值必然相邻。我们用显式栈完成这次中序遍历，并维护前一个值、当前连续次数和历史最大次数。进入结点时压入退出标记和左孩子；退出时，若当前值与前一个值相同则连续次数加一，否则置为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。连续次数超过历史最大次数时重置答案，相等时把当前值追加进答案，然后压入右孩子。</p>
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
</math></span> 是二叉搜索树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func findMode(root *TreeNode) []int {</span></span>
<span class="line"><span>	mx, cnt, prev := 0, 0, 0</span></span>
<span class="line"><span>	has := false</span></span>
<span class="line"><span>	var ans []int</span></span>
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
<span class="line"><span>		if has &#x26;&#x26; prev == node.Val {</span></span>
<span class="line"><span>			cnt++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			cnt = 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if cnt > mx {</span></span>
<span class="line"><span>			ans = []int{node.Val}</span></span>
<span class="line"><span>			mx = cnt</span></span>
<span class="line"><span>		} else if cnt == mx {</span></span>
<span class="line"><span>			ans = append(ans, node.Val)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		prev = node.Val</span></span>
<span class="line"><span>		has = true</span></span>
<span class="line"><span>		stk = append(stk, frame{node.Right, 0})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-mode-in-binary-search-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0501.Find%20Mode%20in%20Binary%20Search%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-508" tabindex="-1">508. 出现次数最多的子树元素和 <a class="header-anchor" href="#q-508" aria-label="Permalink to &quot;508. 出现次数最多的子树元素和 {#q-508}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、哈希表、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二叉树的根结点 <code>root</code> ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。</p>&#10;&#10;<p>一个结点的 <strong>「子树元素和」</strong> 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0508.Most%20Frequent%20Subtree%20Sum/images/freq1-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [5,2,-3]&#10;<strong>输出:</strong> [2,-3,4]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0508.Most%20Frequent%20Subtree%20Sum/images/freq2-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [5,2,-5]&#10;<b>输出:</b> [2]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>节点数在 <code>[1, 10<sup>4</sup>]</code> 范围内</li>&#10;	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子树和 = 左子树和 + 右子树和 + 根值，必须先得到两棵子树的和。若对每个节点再扫一遍子树，会重复累加。</p>
<p>后序 DFS 在回溯时算出当前子树和，并用哈希表统计每个和出现的次数。全部节点处理完后，取出现次数最大的那些和。一次遍历同时完成求和与计数。</p>
</blockquote>
<p>我们可以使用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录每个子树元素和出现的次数，然后使用深度优先搜索遍历整棵树，统计每个子树的元素和，并更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>。</p>
<p>最后，我们遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>，找到所有出现次数最多的子树元素和。</p>
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
</math></span> 为二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func findFrequentTreeSum(root *TreeNode) (ans []int) {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	var mx int</span></span>
<span class="line"><span>	var dfs func(*TreeNode) int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s := root.Val + dfs(root.Left) + dfs(root.Right)</span></span>
<span class="line"><span>		cnt[s]++</span></span>
<span class="line"><span>		mx = max(mx, cnt[s])</span></span>
<span class="line"><span>		return s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	for k, v := range cnt {</span></span>
<span class="line"><span>		if v == mx {</span></span>
<span class="line"><span>			ans = append(ans, k)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：哈希表 + 显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子树和等于左子树和、右子树和与根值之和，必须先得到两棵子树的和。若对每个结点再扫一遍子树，会重复累加。后序递归在回溯时计算当前和，在较短的树上是对的。</p>
<p>结点个数可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。左链使这次后序按结点个数递归，调用栈会溢出。</p>
<p>每个结点的和只由左右子树的和决定，所以必须先处理孩子，再处理父亲。出现次数可以边走边记在哈希表里。</p>
<p>因此用显式栈做后序遍历。进入结点时压入退出标记和左右孩子；退出时用左右子树和算出当前和，写入哈希表。全部结点处理完后，取出出现次数最大的那些和。</p>
</blockquote>
<p>我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 记录每个子树元素和出现的次数，并用显式栈对二叉树做后序遍历。进入结点时压入退出标记，再压入右孩子和左孩子；退出时，左右子树的和已经记下，当前子树和为二者与结点值之和，并更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>。</p>
<p>最后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span>，找到所有出现次数最多的子树元素和。</p>
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
</math></span> 为二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func findFrequentTreeSum(root *TreeNode) (ans []int) {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	sub := map[*TreeNode]int{}</span></span>
<span class="line"><span>	mx := 0</span></span>
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
<span class="line"><span>			stk = append(stk, frame{node, 1})</span></span>
<span class="line"><span>			if node.Right != nil {</span></span>
<span class="line"><span>				stk = append(stk, frame{node.Right, 0})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if node.Left != nil {</span></span>
<span class="line"><span>				stk = append(stk, frame{node.Left, 0})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l, r := 0, 0</span></span>
<span class="line"><span>		if node.Left != nil {</span></span>
<span class="line"><span>			l = sub[node.Left]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if node.Right != nil {</span></span>
<span class="line"><span>			r = sub[node.Right]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s := node.Val + l + r</span></span>
<span class="line"><span>		cnt[s]++</span></span>
<span class="line"><span>		mx = max(mx, cnt[s])</span></span>
<span class="line"><span>		sub[node] = s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for k, v := range cnt {</span></span>
<span class="line"><span>		if v == mx {</span></span>
<span class="line"><span>			ans = append(ans, k)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-frequent-subtree-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0508.Most%20Frequent%20Subtree%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-510" tabindex="-1">510. 二叉搜索树中的中序后继 II 🔒 <a class="header-anchor" href="#q-510" aria-label="Permalink to &quot;510. 二叉搜索树中的中序后继 II 🔒 {#q-510}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、二叉搜索树、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵二叉搜索树和其中的一个节点 <code>node</code> ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 <code>null</code> 。</p>&#10;&#10;<p>一个节点 <code>node</code> 的中序后继是键值比 <code>node.val</code> 大所有的节点中键值最小的那个。</p>&#10;&#10;<p>你可以直接访问结点，但无法直接访问树。每个节点都会有其父节点的引用。节点 <code>Node</code> 定义如下：</p>&#10;&#10;<pre>&#10;class Node {&#10;    public int val;&#10;    public Node left;&#10;    public Node right;&#10;    public Node parent;&#10;}</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0510.Inorder%20Successor%20in%20BST%20II/images/285_example_1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tree = [2,1,3], node = 1&#10;<strong>输出：</strong>2&#10;<strong>解析：</strong>1 的中序后继结点是 2 。注意节点和返回值都是 Node 类型的。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0510.Inorder%20Successor%20in%20BST%20II/images/285_example_2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tree = [5,3,6,2,4,null,null,1], node = 6&#10;<strong>输出：</strong>null&#10;<strong>解析：</strong>该结点没有中序后继，因此返回<code> null 。</code>&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目在范围 <code>[1, 10<sup>4</sup>]</code> 内。</li>&#10;	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;	<li>树中各结点的值均保证唯一。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>你能否在不访问任何结点的值的情况下解决问题?</p></div>
</details>
<details class="details custom-block"><summary>方法一：分情况讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>普通 BST 中序后继可中序遍历或从根下行，但本题只有父指针、没有整棵树入口，不能从根重走。</p>
<p>后继只有两类：存在右子树时，是右子树最左节点；否则沿父指针上爬，直到当前节点是其父的左孩子，父节点即为后继。两种情况都沿一条链走，无需额外存储。</p>
</blockquote>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">node</mtext>
</math></span> 有右子树，那么 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">node</mtext>
</math></span> 的中序后继节点是右子树中最左边的节点。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">node</mtext>
</math></span> 没有右子树，那么如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">node</mtext>
</math></span> 是其父节点的右子树，我们就一直向上搜索，直到节点的父节点为空，或者节点是其父节点的左子树，此时父节点就是中序后继节点。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 是二叉树的高度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *Node</span></span>
<span class="line"><span> *     Right *Node</span></span>
<span class="line"><span> *     Parent *Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func inorderSuccessor(node *Node) *Node {</span></span>
<span class="line"><span>	if node.Right != nil {</span></span>
<span class="line"><span>		node = node.Right</span></span>
<span class="line"><span>		for node.Left != nil {</span></span>
<span class="line"><span>			node = node.Left</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return node</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for node.Parent != nil &#x26;&#x26; node == node.Parent.Right {</span></span>
<span class="line"><span>		node = node.Parent</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return node.Parent</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/inorder-successor-in-bst-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0510.Inorder%20Successor%20in%20BST%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-513" tabindex="-1">513. 找树左下角的值 <a class="header-anchor" href="#q-513" aria-label="Permalink to &quot;513. 找树左下角的值 {#q-513}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉树的 <strong>根节点</strong> <code>root</code>。</p>&#10;&#10;<p>请找出该二叉树的 <strong>最底层 最左边 </strong>节点的值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0513.Find%20Bottom%20Left%20Tree%20Value/images/tree1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [2,1,3]&#10;<strong>输出：</strong>1&#10;<strong>解释</strong><strong>：</strong>最后一行是 [1, 3]，因此最左边的值是 1。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0513.Find%20Bottom%20Left%20Tree%20Value/images/tree2.jpg" loading="lazy"><strong> </strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[1,2,3,4,null,5,6,null,null,7]&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>最后一层只有节点 7。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>二叉树的节点个数的范围是 <code>[1, 10<sup>4</sup>]</code></li>&#10;	<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code> </li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最底层最左侧的值，等于层序遍历最后一层的第一个节点。逐层 BFS 时，队列头部就是当前层最左节点。</p>
<p>每层开始时记下队首值，并展开左右孩子。循环结束时记下的便是最后一层最左值。层序保证深度最大的一层最后被处理。</p>
</blockquote>
<p>BFS 找最后一层第一个节点。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func findBottomLeftValue(root *TreeNode) int {</span></span>
<span class="line"><span>	q := []*TreeNode{root}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		ans = q[0].Val</span></span>
<span class="line"><span>		for i := len(q); i > 0; i-- {</span></span>
<span class="line"><span>			node := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			if node.Left != nil {</span></span>
<span class="line"><span>				q = append(q, node.Left)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if node.Right != nil {</span></span>
<span class="line"><span>				q = append(q, node.Right)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>BFS 需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>w</mi>
  <mo stretchy="false">)</mo>
</math></span> 队列。若改为 DFS，只需沿树高记录「首次达到的更大深度」。</p>
<p>先左后右的先序会先碰到每一层最左节点；仅当深度刷新最大值时更新答案。额外空间降为递归栈，结果与层序一致。</p>
</blockquote>
<p>DFS 先序遍历，找深度最大的，且第一次被遍历到的节点。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func findBottomLeftValue(root *TreeNode) int {</span></span>
<span class="line"><span>	ans, mx := 0, 0</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, curr int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left, curr+1)</span></span>
<span class="line"><span>		dfs(root.Right, curr+1)</span></span>
<span class="line"><span>		if mx &#x3C; curr {</span></span>
<span class="line"><span>			mx = curr</span></span>
<span class="line"><span>			ans = root.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, 1)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-bottom-left-tree-value" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0513.Find%20Bottom%20Left%20Tree%20Value/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-515" tabindex="-1">515. 在每个树行中找最大值 <a class="header-anchor" href="#q-515" aria-label="Permalink to &quot;515. 在每个树行中找最大值 {#q-515}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵二叉树的根节点 <code>root</code> ，请找出该二叉树中每一层的最大值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0515.Find%20Largest%20Value%20in%20Each%20Tree%20Row/images/largest_e1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>root = [1,3,2,5,3,null,9]&#10;<strong>输出: </strong>[1,3,9]&#10;</pre>&#10;&#10;<p><strong>示例2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>root = [1,2,3]&#10;<strong>输出: </strong>[1,3]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>二叉树的节点个数的范围是 <code>[0,10<sup>4</sup>]</code></li>&#10;	<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每一层的最大值可在层序遍历时当场求出。将根入队，按层弹出，维护本层最大值并加入孩子。</p>
<p>一层处理完就得到一个答案。空树直接返回空列表。时间与节点数成正比。</p>
</blockquote>
<p>我们定义一个队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
</math></span>，将根节点放入队列中。每次从队列中取出当前层的所有节点，找出最大值，然后将下一层的所有节点放入队列中，直到队列为空。</p>
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
</math></span> 是二叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func largestValues(root *TreeNode) (ans []int) {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q := []*TreeNode{root}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		x := q[0].Val</span></span>
<span class="line"><span>		for i := len(q); i > 0; i-- {</span></span>
<span class="line"><span>			node := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			x = max(x, node.Val)</span></span>
<span class="line"><span>			if node.Left != nil {</span></span>
<span class="line"><span>				q = append(q, node.Left)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if node.Right != nil {</span></span>
<span class="line"><span>				q = append(q, node.Right)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = append(ans, x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>BFS 按层很自然，但需要队列。DFS 只要带着深度往下走：深度等于答案长度时追加，否则与已有值取最大。</p>
<p>先序保证每一层第一次到达时创建槽位。额外空间是递归深度，结果与层序相同。</p>
</blockquote>
<p>DFS 先序遍历，找每个深度最大的节点值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func largestValues(root *TreeNode) []int {</span></span>
<span class="line"><span>	var ans []int</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, curr int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if curr == len(ans) {</span></span>
<span class="line"><span>			ans = append(ans, root.Val)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans[curr] = max(ans[curr], root.Val)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left, curr+1)</span></span>
<span class="line"><span>		dfs(root.Right, curr+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, 0)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-largest-value-in-each-tree-row" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0515.Find%20Largest%20Value%20in%20Each%20Tree%20Row/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-530" tabindex="-1">530. 二叉搜索树的最小绝对差 <a class="header-anchor" href="#q-530" aria-label="Permalink to &quot;530. 二叉搜索树的最小绝对差 {#q-530}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉搜索树、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二叉搜索树的根节点 <code>root</code> ，返回 <strong>树中任意两不同节点值之间的最小差值</strong> 。</p>&#10;&#10;<p>差值是一个正数，其数值等于两值之差的绝对值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0530.Minimum%20Absolute%20Difference%20in%20BST/images/bst1.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [4,2,6,1,3]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0530.Minimum%20Absolute%20Difference%20in%20BST/images/bst2.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [1,0,48,null,null,12,49]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目范围是 <code>[2, 10<sup>4</sup>]</code></li>&#10;	<li><code>0 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>注意：</strong>本题与 783 <a href="https://leetcode.cn/problems/minimum-distance-between-bst-nodes/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/minimum-distance-between-bst-nodes/</a> 相同</p></div>
</details>
<details class="details custom-block"><summary>方法一：中序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>任意两点差的最小值，在无序树上要比较所有点对。BST 的中序是递增序列，最小差只可能出现在相邻两项之间。</p>
<p>中序遍历时维护前驱，用当前值减前驱更新答案。前驱初值取负无穷，避免第一个节点参与减法。一次中序即可。</p>
</blockquote>
<p>题目需要我们求任意两个节点值之间的最小差值，而二叉搜索树的中序遍历是一个递增序列，因此我们只需要求中序遍历中相邻两个节点值之间的最小差值即可。</p>
<p>我们可以使用递归的方法来实现中序遍历，过程中用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pre</mtext>
</math></span> 来保存前一个节点的值，这样我们就可以在遍历的过程中求出相邻两个节点值之间的最小差值。</p>
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
</math></span> 为二叉搜索树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func getMinimumDifference(root *TreeNode) int {</span></span>
<span class="line"><span>	const inf int = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	ans, pre := inf, -inf</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>		ans = min(ans, root.Val-pre)</span></span>
<span class="line"><span>		pre = root.Val</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈中序遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>任意两点差的最小值，在无序树上要比较所有点对。二叉搜索树的中序是递增序列，最小差只可能出现在相邻两项之间。先递归中序、用当前值减去前驱，在较短的树上是对的。</p>
<p>结点个数可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。左链使这次中序按结点个数递归，调用栈会溢出。</p>
<p>每个结点只需要前一个值，不需要子树的返回值，只要先走完左子树、再看自己、再走右子树。</p>
<p>因此用显式栈做中序遍历。进入结点时压入退出标记和左孩子；退出时用当前值减去前驱更新答案，再压入右孩子。前驱初值取负无穷，第一个结点不会成为答案。</p>
</blockquote>
<p>题目要求任意两个结点值的最小差。二叉搜索树的中序遍历是递增序列，所以最小差只会出现在中序相邻的两个值之间。</p>
<p>我们用显式栈完成这次中序遍历，并用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pre</mtext>
</math></span> 保存前一个结点的值，初值为负无穷。进入结点时压入退出标记和左孩子；退出时用当前值减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pre</mtext>
</math></span> 更新答案，然后把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pre</mtext>
</math></span> 改成当前值，再压入右孩子。</p>
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
</math></span> 为二叉搜索树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func getMinimumDifference(root *TreeNode) int {</span></span>
<span class="line"><span>	const inf int = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	ans, pre := inf, -inf</span></span>
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
<span class="line"><span>		ans = min(ans, node.Val-pre)</span></span>
<span class="line"><span>		pre = node.Val</span></span>
<span class="line"><span>		stk = append(stk, frame{node.Right, 0})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-absolute-difference-in-bst" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0530.Minimum%20Absolute%20Difference%20in%20BST/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-536" tabindex="-1">536. 从字符串生成二叉树 🔒 <a class="header-anchor" href="#q-536" aria-label="Permalink to &quot;536. 从字符串生成二叉树 🔒 {#q-536}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、深度优先搜索、字符串、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你需要用一个包括括号和整数的字符串构建一棵二叉树。</p>&#10;&#10;<p>输入的字符串代表一棵二叉树。它包括整数和随后的 0 、1 或 2 对括号。整数代表根的值，一对括号内表示同样结构的子树。</p>&#10;&#10;<p>若存在子结点，则从<strong>左子结点</strong>开始构建。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0536.Construct%20Binary%20Tree%20from%20String/images/butree.jpg" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong> s = &quot;4(2(3)(1))(6(5))&quot;&#10;<strong>输出：</strong> [4,2,6,3,1,5]&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong> s = &quot;4(2(3)(1))(6(5)(7))&quot;&#10;<strong>输出：</strong> [4,2,6,3,1,5,7]&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong> s = &quot;-4(2(3)(1))(6(5)(7))&quot;&#10;<strong>输出： </strong>[-4,2,6,3,1,5,7]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>0 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>&#10;	<li>输入字符串中只包含 <code>'('</code>, <code>')'</code>, <code>'-'</code> 和 <code>'0'</code> ~ <code>'9'</code> </li>&#10;	<li>树中所有数字的值 <strong>最多</strong> 不超过 <code>2<sup>30</sup></code>。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>串由「整数值 + 可选的左子树括号 + 可选的右子树括号」递归构成。线性扫描要同时切出数值和配对的括号段。</p>
<p>找不到 <code v-pre>'('</code> 则整段是叶子。否则数值在首个括号之前；再用计数匹配括号，第一次配平的是左子树，其后配平的是右子树，分别递归。括号深度保证切分与嵌套结构一致。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func str2tree(s string) *TreeNode {</span></span>
<span class="line"><span>	var dfs func(s string) *TreeNode</span></span>
<span class="line"><span>	dfs = func(s string) *TreeNode {</span></span>
<span class="line"><span>		if s == "" {</span></span>
<span class="line"><span>			return nil</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		p := strings.IndexAny(s, "(")</span></span>
<span class="line"><span>		if p == -1 {</span></span>
<span class="line"><span>			v, _ := strconv.Atoi(s)</span></span>
<span class="line"><span>			return &#x26;TreeNode{Val: v}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		v, _ := strconv.Atoi(s[:p])</span></span>
<span class="line"><span>		root := &#x26;TreeNode{Val: v}</span></span>
<span class="line"><span>		start := p</span></span>
<span class="line"><span>		cnt := 0</span></span>
<span class="line"><span>		for i := p; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>			if s[i] == '(' {</span></span>
<span class="line"><span>				cnt++</span></span>
<span class="line"><span>			} else if s[i] == ')' {</span></span>
<span class="line"><span>				cnt--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if cnt == 0 {</span></span>
<span class="line"><span>				if p == start {</span></span>
<span class="line"><span>					root.Left = dfs(s[start+1 : i])</span></span>
<span class="line"><span>					start = i + 1</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					root.Right = dfs(s[start+1 : i])</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return root</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(s)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/construct-binary-tree-from-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0536.Construct%20Binary%20Tree%20from%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-538" tabindex="-1">538. 把二叉搜索树转换为累加树 <a class="header-anchor" href="#q-538" aria-label="Permalink to &quot;538. 把二叉搜索树转换为累加树 {#q-538}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>3 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出二叉<strong> 搜索 </strong>树的根节点 <code>root</code>，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），将其转换为一个更大的树，使得原始二叉搜索树中的每个节点值都变为原本值加上原本二叉搜索树中所有比该节点值大的节点值的总和。</p>&#10;&#10;<p>提醒一下，二叉搜索树满足下列约束条件：</p>&#10;&#10;<ul>&#10;	<li>节点的左子树仅包含键<strong> 小于 </strong>节点键的节点。</li>&#10;	<li>节点的右子树仅包含键<strong> 大于</strong> 节点键的节点。</li>&#10;	<li>左右子树也必须是二叉搜索树。</li>&#10;</ul>&#10;&#10;<p><strong>注意：</strong>本题和 1038: <a href="https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/</a> 相同</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0538.Convert%20BST%20to%20Greater%20Tree/images/tree.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]&#10;<strong>输出：</strong>[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [0,null,1]&#10;<strong>输出：</strong>[1,null,1]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,0,2]&#10;<strong>输出：</strong>[3,3,2]&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [3,2,4,1]&#10;<strong>输出：</strong>[7,9,4,10]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中的节点数介于 <code>0</code> 和 <code>10<sup>4</sup></code><sup> </sup>之间。</li>&#10;	<li>每个节点的值介于 <code>-10<sup>4</sup></code> 和 <code>10<sup>4</sup></code> 之间。</li>&#10;	<li>树中的所有值 <strong>互不相同</strong> 。</li>&#10;	<li>给定的树为二叉搜索树。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把每个节点改成「不小于它的所有值之和」。BST 中这些值正好是反中序（右-根-左）已经走过的节点。</p>
<p>反中序累加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，再写回当前节点。右子树先于左子树处理，保证用到的都是更大的键。一次遍历完成。</p>
</blockquote>
<p>按照“右根左”的顺序，递归遍历二叉搜索树，累加遍历到的所有节点值到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中，然后每次赋值给对应的 <code v-pre>node</code> 节点。</p>
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
</math></span> 是二叉搜索树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func convertBST(root *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>		s += root.Val</span></span>
<span class="line"><span>		root.Val = s</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return root</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：Morris 遍历 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>递归反中序需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span> 栈。Morris 用右子树的最左空指针暂存后继，把递归栈省掉。</p>
<p>向右走时穿线，回到节点时累加并写回，再拆线向左。访问顺序仍是右-根-左，语义与方法一相同，额外空间为常数。</p>
</blockquote>
<p>Morris 遍历无需使用栈，时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。核心思想是：</p>
<p>定义 s 表示二叉搜索树节点值累加和。遍历二叉树节点：</p>
<ol>
<li>若当前节点 root 的右子树为空，<strong>将当前节点值添加至 s</strong> 中，更新当前节点值为 s，并将当前节点更新为 <code v-pre>root.left</code>。</li>
<li>若当前节点 root 的右子树不为空，找到右子树的最左节点 next（也即是 root 节点在中序遍历下的后继节点）：
<ul>
<li>若后继节点 next 的左子树为空，将后继节点的左子树指向当前节点 root，并将当前节点更新为 <code v-pre>root.right</code>。</li>
<li>若后继节点 next 的左子树不为空，<strong>将当前节点值添加 s</strong> 中，更新当前节点值为 s，然后将后继节点左子树指向空（即解除 next 与 root 的指向关系），并将当前节点更新为 <code v-pre>root.left</code>。</li>
</ul>
</li>
<li>循环以上步骤，直至二叉树节点为空，遍历结束。</li>
<li>最后返回二叉搜索树根节点即可。</li>
</ol>
<blockquote>
<p>Morris 反序中序遍历跟 Morris 中序遍历思路一致，只是将中序遍历的“左根右”变为“右根左”。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func convertBST(root *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	node := root</span></span>
<span class="line"><span>	for root != nil {</span></span>
<span class="line"><span>		if root.Right == nil {</span></span>
<span class="line"><span>			s += root.Val</span></span>
<span class="line"><span>			root.Val = s</span></span>
<span class="line"><span>			root = root.Left</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			next := root.Right</span></span>
<span class="line"><span>			for next.Left != nil &#x26;&#x26; next.Left != root {</span></span>
<span class="line"><span>				next = next.Left</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if next.Left == nil {</span></span>
<span class="line"><span>				next.Left = root</span></span>
<span class="line"><span>				root = root.Right</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				s += root.Val</span></span>
<span class="line"><span>				root.Val = s</span></span>
<span class="line"><span>				next.Left = nil</span></span>
<span class="line"><span>				root = root.Left</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return node</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把每个结点改成不小于它的所有值之和。二叉搜索树里这些值正好是反中序（右、根、左）已经走过的结点。先递归走右子树再写回，在较短的树上是对的。</p>
<p>结点个数可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。右链使这次遍历按结点个数递归，调用栈会溢出。</p>
<p>累加和只依赖已经访问过的更大的键，每个结点不需要子树的返回值，只要先处理右孩子、再改自己、再处理左孩子。</p>
<p>因此用显式栈做反中序。进入结点时压入退出标记和右孩子；退出时把当前值累加进 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 并写回，再压入左孩子。</p>
</blockquote>
<p>我们用显式栈按“右、根、左”的顺序遍历二叉搜索树。进入结点时压入退出标记和右孩子；退出时把结点值累加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，再把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 写回该结点，然后压入左孩子。</p>
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
</math></span> 是二叉搜索树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func convertBST(root *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	s := 0</span></span>
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
<span class="line"><span>			stk = append(stk, frame{node, 1}, frame{node.Right, 0})</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s += node.Val</span></span>
<span class="line"><span>		node.Val = s</span></span>
<span class="line"><span>		stk = append(stk, frame{node.Left, 0})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return root</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/convert-bst-to-greater-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/0500-0599/0538.Convert%20BST%20to%20Greater%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const g=s(p,[["render",l]]);export{h as __pageData,g as default};
