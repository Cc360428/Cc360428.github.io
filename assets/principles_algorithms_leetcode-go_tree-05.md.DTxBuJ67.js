import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 树与二叉树（5）","description":"树与二叉树分类，第 1214–1612 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 树与二叉树（5）","description":"树与二叉树分类，第 1214–1612 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"树与二叉树分类，第 1214–1612 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 树与二叉树（4）","link":"/principles/algorithms/leetcode-go/tree-04"},"next":{"text":"LeetCode Go · 树与二叉树（6）","link":"/principles/algorithms/leetcode-go/tree-06"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 树与二叉树（4）","link":"/principles/algorithms/leetcode-go/tree-04"},"next":{"text":"LeetCode Go · 树与二叉树（6）","link":"/principles/algorithms/leetcode-go/tree-06"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/tree-05.md","filePath":"principles/algorithms/leetcode-go/tree-05.md"}'),p={name:"principles/algorithms/leetcode-go/tree-05.md"};function l(o,n,m,i,c,r){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-树与二叉树-5" tabindex="-1">LeetCode Go · 树与二叉树（5） <a class="header-anchor" href="#leetcode-go-·-树与二叉树-5" aria-label="Permalink to &quot;LeetCode Go · 树与二叉树（5）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-1214" tabindex="-1">1214. 查找两棵二叉搜索树之和 🔒 <a class="header-anchor" href="#q-1214" aria-label="Permalink to &quot;1214. 查找两棵二叉搜索树之和 🔒 {#q-1214}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、深度优先搜索、二叉搜索树、双指针、二分查找、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给出两棵二叉搜索树的根节点 <code>root1</code> 和 <code>root2</code> ，请你从两棵树中各找出一个节点，使得这两个节点的值之和等于目标值 <code>Target</code>。</p>&#10;&#10;<p>如果可以找到返回 <code>True</code>，否则返回 <code>False</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1214.Two%20Sum%20BSTs/images/ex1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root1 = [2,1,4], root2 = [1,0,3], target = 5&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>2 加 3 和为 5 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1214.Two%20Sum%20BSTs/images/ex2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root1 = [0,-10,10], root2 = [5,1,7,0,2], target = 18&#10;<strong>输出：</strong>false</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>每棵树上节点数在 <code>[1, 5000]</code> 范围内。</li>&#10;	<li><code>-10<sup>9</sup> &lt;= Node.val, target &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：中序遍历 + 双指针 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在一棵 BST 中查找 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
</math></span> 需 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 次检索，节点数达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5000</mn>
</math></span> 可以接受，但要处理两棵树的配对。中序遍历得到两个有序数组后，问题化为有序数组的两数之和。</p>
<p>两指针分居 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 左端与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 右端：和偏小则左指针右移，和偏大则右指针左移。BST 的中序保证有序，双指针保证线性配对。</p>
</blockquote>
<p>我们分别对两棵树进行中序遍历，得到两个有序数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，然后使用双指针的方法判断是否存在两个数的和为目标值。双指针判断方法如下：</p>
<p>初始化两个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，分别指向数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 的左边界和数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的右边界；</p>
<p>每次比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 与目标值的大小。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，则返回 <code v-pre>true</code>；否则，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&lt;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 右移一位；否则，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&gt;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 左移一位。</p>
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
</math></span> 分别为两棵树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func twoSumBSTs(root1 *TreeNode, root2 *TreeNode, target int) bool {</span></span>
<span class="line"><span>	nums := [2][]int{}</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, i int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left, i)</span></span>
<span class="line"><span>		nums[i] = append(nums[i], root.Val)</span></span>
<span class="line"><span>		dfs(root.Right, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root1, 0)</span></span>
<span class="line"><span>	dfs(root2, 1)</span></span>
<span class="line"><span>	i, j := 0, len(nums[1])-1</span></span>
<span class="line"><span>	for i &#x3C; len(nums[0]) &#x26;&#x26; j >= 0 {</span></span>
<span class="line"><span>		x := nums[0][i] + nums[1][j]</span></span>
<span class="line"><span>		if x == target {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if x &#x3C; target {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			j--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return false</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/two-sum-bsts" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1214.Two%20Sum%20BSTs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1257" tabindex="-1">1257. 最小公共区域 🔒 <a class="header-anchor" href="#q-1257" aria-label="Permalink to &quot;1257. 最小公共区域 🔒 {#q-1257}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、数组、哈希表、字符串、最近公共祖先</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一些区域列表 <code>regions</code> ，每个列表的第一个区域都 <strong>直接</strong> 包含这个列表内所有其他区域。</p>&#10;&#10;<p>如果一个区域 <code>x</code> 直接包含区域 <code>y</code>，并且区域 <code>y</code> 直接包含区域 <code>z</code>，那么说区域 <code>x</code> <strong>间接</strong> 包含区域 <code>z</code>。请注意，区域 <code>x</code> 也 <strong>间接</strong> 包含所有在 <code>y</code> 中 <strong>间接</strong> 包含的区域。</p>&#10;&#10;<p>很自然地，如果区域 <code>x</code> 包含区域 <code>y</code> ，那么区域 <code>x</code>  比区域 <code>y</code> 大。同时根据定义，区域 <code>x</code> 包含自身。</p>&#10;&#10;<p>给定两个区域 <code>region1</code> 和 <code>region2</code> ，找到同时包含这两个区域的 <strong>最小 </strong>区域。</p>&#10;&#10;<p>数据同样保证最小区域一定存在。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：&#10;</strong>regions = [[&quot;Earth&quot;,&quot;North America&quot;,&quot;South America&quot;],&#10;[&quot;North America&quot;,&quot;United States&quot;,&quot;Canada&quot;],&#10;[&quot;United States&quot;,&quot;New York&quot;,&quot;Boston&quot;],&#10;[&quot;Canada&quot;,&quot;Ontario&quot;,&quot;Quebec&quot;],&#10;[&quot;South America&quot;,&quot;Brazil&quot;]],&#10;region1 = &quot;Quebec&quot;,&#10;region2 = &quot;New York&quot;&#10;<strong>输出：</strong>&quot;North America&quot;&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>regions = [[&quot;Earth&quot;, &quot;North America&quot;, &quot;South America&quot;],[&quot;North America&quot;, &quot;United States&quot;, &quot;Canada&quot;],[&quot;United States&quot;, &quot;New York&quot;, &quot;Boston&quot;],[&quot;Canada&quot;, &quot;Ontario&quot;, &quot;Quebec&quot;],[&quot;South America&quot;, &quot;Brazil&quot;]], region1 = &quot;Canada&quot;, region2 = &quot;South America&quot;&#10;<b>输出：</b>&quot;Earth&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= regions.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>2 &lt;= regions[i].length &lt;= 20</code></li>&#10;	<li><code>1 &lt;= regions[i][j].length, region1.length, region2.length &lt;= 20</code></li>&#10;	<li><code>region1 != region2</code></li>&#10;	<li><code>regions[i][j]</code>，<code>region1</code> 和 <code>region2</code> 由英语字母组成。</li>&#10;	<li>输入保证存在一个区域直接或间接包含所有其他区域。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>区域形成树，求两区域的最近公共祖先。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，反复向上跳可以接受。子到父的映射由每条区域列表的首元素给出。</p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>g</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mn>1</mn>
</math></span> 走到根，路径放入集合；再从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>g</mi>
  <mi>i</mi>
  <mi>o</mi>
  <mi>n</mi>
  <mn>2</mn>
</math></span> 向上，第一个落在集合中的节点即为所求。哈希表存父指针，集合判定首次相交。</p>
</blockquote>
<p>我们可以用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">g</mtext>
</math></span> 来存储每个区域的父区域，然后从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">region1</mtext>
</math></span> 开始，不断向上找到所有的父区域，直到根区域，将这些区域放入集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中。然后从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">region2</mtext>
</math></span> 开始，不断向上找到第一个在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中的区域，即为最小公共区域。</p>
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
</math></span> 为区域列表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">regions</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findSmallestRegion(regions [][]string, region1 string, region2 string) string {</span></span>
<span class="line"><span>	g := make(map[string]string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for _, r := range regions {</span></span>
<span class="line"><span>		x := r[0]</span></span>
<span class="line"><span>		for _, y := range r[1:] {</span></span>
<span class="line"><span>			g[y] = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	s := make(map[string]bool)</span></span>
<span class="line"><span>	for x := region1; x != ""; x = g[x] {</span></span>
<span class="line"><span>		s[x] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	x := region2</span></span>
<span class="line"><span>	for g[x] != "" &#x26;&#x26; !s[x] {</span></span>
<span class="line"><span>		x = g[x]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/smallest-common-region" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1257.Smallest%20Common%20Region/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1273" tabindex="-1">1273. 删除树节点 🔒 <a class="header-anchor" href="#q-1273" aria-label="Permalink to &quot;1273. 删除树节点 🔒 {#q-1273}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、数组、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵以节点 0 为根节点的树，定义如下：</p>&#10;&#10;<ul>&#10;	<li>节点的总数为 <code>nodes</code> 个；</li>&#10;	<li>第 <code>i</code> 个节点的值为 <code>value[i]</code> ；</li>&#10;	<li>第 <code>i</code> 个节点的父节点是 <code>parent[i]</code> 。</li>&#10;</ul>&#10;&#10;<p>请你删除节点值之和为 0 的每一棵子树。</p>&#10;&#10;<p>在完成所有删除之后，返回树中剩余节点的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1273.Delete%20Tree%20Nodes/images/1421_sample_1.png" loading="lazy"></p>&#10;&#10;<pre><strong>输入：</strong>nodes = 7, parent = [-1,0,0,1,2,2,2], value = [1,-2,4,0,-2,-1,-1]&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nodes = 7, parent = [-1,0,0,1,2,2,2], value = [1,-2,4,0,-2,-1,-2]&#10;<strong>输出：</strong>6&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nodes = 5, parent = [-1,0,1,0,0], value = [-672,441,18,728,378]&#10;<strong>输出：</strong>5&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nodes = 5, parent = [-1,0,0,1,1], value = [-686,-842,616,-739,-746]&#10;<strong>输出：</strong>5&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nodes &lt;= 10^4</code></li>&#10;	<li><code>parent.length == nodes</code></li>&#10;	<li><code>0 &lt;= parent[i] &lt;= nodes - 1</code></li>&#10;	<li><code>parent[0] == -1</code> 表示节点 <code>0</code> 是树的根。</li>&#10;	<li><code>value.length == nodes</code></li>&#10;	<li><code>-10^5 &lt;= value[i] &lt;= 10^5</code></li>&#10;	<li>题目输入数据 <strong>保证</strong> 是一棵 <strong>有效的树</strong> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子树权和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则整棵子树删除。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，自底向上一次 DFS 即可：先汇总子女的权与残存节点数，若本子树权和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则残存数置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。返回根的残存数。后序保证删子再决定父亲。</p>
</blockquote>
<p>我们先将树转换成图 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的所有子节点。</p>
<p>然后我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示以节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 为根的子树的节点数目和权值之和。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>。</p>
<p>在这个函数中，我们递归地计算出以每个子节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 为根的子树的节点数目和权值之和，然后将这些值进行累加，如果累加后的值为零，那么我们就将这个子树的节点数目置为零。最后我们返回以节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 为根的子树的节点数目和权值之和。</p>
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
</math></span> 是树的节点数目。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func deleteTreeNodes(nodes int, parent []int, value []int) int {</span></span>
<span class="line"><span>	g := make([][]int, nodes)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; nodes; i++ {</span></span>
<span class="line"><span>		g[parent[i]] = append(g[parent[i]], i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	type pair struct{ s, n int }</span></span>
<span class="line"><span>	var dfs func(int) pair</span></span>
<span class="line"><span>	dfs = func(i int) pair {</span></span>
<span class="line"><span>		s, m := value[i], 1</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			t := dfs(j)</span></span>
<span class="line"><span>			s += t.s</span></span>
<span class="line"><span>			m += t.n</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if s == 0 {</span></span>
<span class="line"><span>			m = 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return pair{s, m}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0).n</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>子树权和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则整棵子树删除。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，自底向上汇总一次即可：先汇总子女的权与残存节点数，若本子树权和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则残存数置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。从根递归进入孩子，链上的调用深度就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，会超出递归栈。</p>
<p>显式栈按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x8282;</mi>
  <mi mathvariant="normal">&#x70B9;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x72B6;</mi>
  <mi mathvariant="normal">&#x6001;</mi>
  <mo stretchy="false">)</mo>
</math></span> 做后序。进入时先压出栈标记再压孩子，离开时把子女的权和残存数累加到自己；和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则残存数置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。答案是根的残存数。</p>
</blockquote>
<p>我们先将树转换成图 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的所有子节点。</p>
<p>然后用显式栈做后序遍历。离开节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时，把每个子节点的权值和残存节点数累加进来。如果累加后的权值为零，就把这个子树的残存节点数置为零。答案是根节点的残存节点数。</p>
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
</math></span> 是树的节点数目。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func deleteTreeNodes(nodes int, parent []int, value []int) int {</span></span>
<span class="line"><span>	g := make([][]int, nodes)</span></span>
<span class="line"><span>	for i := 1; i &#x3C; nodes; i++ {</span></span>
<span class="line"><span>		g[parent[i]] = append(g[parent[i]], i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sum := make([]int, nodes)</span></span>
<span class="line"><span>	cnt := make([]int, nodes)</span></span>
<span class="line"><span>	stk := [][2]int{{0, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		i, state := cur[0], cur[1]</span></span>
<span class="line"><span>		if state == 0 {</span></span>
<span class="line"><span>			stk = append(stk, [2]int{i, 1})</span></span>
<span class="line"><span>			for _, j := range g[i] {</span></span>
<span class="line"><span>				stk = append(stk, [2]int{j, 0})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			s, m := value[i], 1</span></span>
<span class="line"><span>			for _, j := range g[i] {</span></span>
<span class="line"><span>				s += sum[j]</span></span>
<span class="line"><span>				m += cnt[j]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if s == 0 {</span></span>
<span class="line"><span>				m = 0</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			sum[i] = s</span></span>
<span class="line"><span>			cnt[i] = m</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return cnt[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/delete-tree-nodes" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1273.Delete%20Tree%20Nodes/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1302" tabindex="-1">1302. 层数最深叶子节点的和 <a class="header-anchor" href="#q-1302" aria-label="Permalink to &quot;1302. 层数最深叶子节点的和 {#q-1302}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵二叉树的根节点 <code>root</code> ，请你返回 <strong>层数最深的叶子节点的和</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1302.Deepest%20Leaves%20Sum/images/1483_ex1.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,3,4,5,null,6,7,null,null,null,null,8]&#10;<strong>输出：</strong>15&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]&#10;<strong>输出：</strong>19&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点数目在范围 <code>[1, 10<sup>4</sup>]</code> 之间。</li>&#10;	<li><code>1 &lt;= Node.val &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>最深一层叶子的和，可以先求树高再扫一遍累加，但两次遍历并无必要。层序遍历按深度推进，每一层的节点值和都可以在出队时当场求出。</p>
<p>队列为空时所记录的那一层，恰为最深一层。为此用队列存放当前层，逐层覆盖 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span>，遍历结束时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
</math></span> 即为最深叶子之和。</p>
</blockquote>
<p>我们可以使用广度优先搜索，逐层遍历二叉树，并在遍历到每一层时计算该层的节点值之和。遍历完成后，返回最后一层的节点值之和。</p>
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
</math></span> 是树中节点的数目。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func deepestLeavesSum(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	q := []*TreeNode{root}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		ans = 0</span></span>
<span class="line"><span>		for k := len(q); k > 0; k-- {</span></span>
<span class="line"><span>			node := q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			ans += node.Val</span></span>
<span class="line"><span>			if node.Left != nil {</span></span>
<span class="line"><span>				q = append(q, node.Left)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if node.Right != nil {</span></span>
<span class="line"><span>				q = append(q, node.Right)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>广度优先需要与最宽一层成正比的额外空间。若改为递归，只需在下降时携带深度：等于当前最大深度则累加，超过则重置和与最大深度。一次遍历即可同时维护最深叶子之和。</p>
</blockquote>
<p>我们可以使用深度优先搜索，递归遍历二叉树，并在遍历的过程中记录当前节点的深度，以及最大深度和最深叶子节点的和。遍历到当前节点时，如果当前节点的深度等于最大深度，则将当前节点的值加到最深叶子节点的和中；如果当前节点的深度大于最大深度，则将最大深度更新为当前节点的深度，并将最深叶子节点的和更新为当前节点的值。</p>
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
</math></span> 是树中节点的数目。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func deepestLeavesSum(root *TreeNode) int {</span></span>
<span class="line"><span>	ans, mx := 0, 0</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, i int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if i == mx {</span></span>
<span class="line"><span>			ans += root.Val</span></span>
<span class="line"><span>		} else if i > mx {</span></span>
<span class="line"><span>			mx = i</span></span>
<span class="line"><span>			ans = root.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left, i+1)</span></span>
<span class="line"><span>		dfs(root.Right, i+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, 1)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/deepest-leaves-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1302.Deepest%20Leaves%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1305" tabindex="-1">1305. 两棵二叉搜索树中的所有元素 <a class="header-anchor" href="#q-1305" aria-label="Permalink to &quot;1305. 两棵二叉搜索树中的所有元素 {#q-1305}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、二叉树、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你 <code>root1</code> 和 <code>root2</code> 这两棵二叉搜索树。请你返回一个列表，其中包含 <strong>两棵树 </strong>中的所有整数并按 <strong>升序</strong> 排序。.</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1305.All%20Elements%20in%20Two%20Binary%20Search%20Trees/images/q2-e1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root1 = [2,1,4], root2 = [1,0,3]&#10;<strong>输出：</strong>[0,1,1,2,3,4]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1305.All%20Elements%20in%20Two%20Binary%20Search%20Trees/images/q2-e5-.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root1 = [1,null,8], root2 = [8,1]&#10;<strong>输出：</strong>[1,1,8,8]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>每棵树的节点数在 <code>[0, 5000]</code> 范围内</li>&#10;	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS + 归并 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>两棵 BST 的全部节点值需要排成非递减序列。收集后整体排序为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，没有用到有序性。中序遍历一棵 BST 已得到有序序列，因此分别中序得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">a</mtext>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">b</mtext>
</math></span>，再按归并两路有序数组的方式合并，线性即可完成。</p>
</blockquote>
<p>由于两棵树都是二叉搜索树，所以我们可以通过中序遍历得到两棵树的节点值序列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">a</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">b</mtext>
</math></span>，然后使用双指针归并两个有序数组，得到最终的答案。</p>
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
</math></span> 分别是两棵树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func getAllElements(root1 *TreeNode, root2 *TreeNode) (ans []int) {</span></span>
<span class="line"><span>	var dfs func(*TreeNode, *[]int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, nums *[]int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left, nums)</span></span>
<span class="line"><span>		*nums = append(*nums, root.Val)</span></span>
<span class="line"><span>		dfs(root.Right, nums)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b := []int{}, []int{}</span></span>
<span class="line"><span>	dfs(root1, &#x26;a)</span></span>
<span class="line"><span>	dfs(root2, &#x26;b)</span></span>
<span class="line"><span>	i, j := 0, 0</span></span>
<span class="line"><span>	m, n := len(a), len(b)</span></span>
<span class="line"><span>	for i &#x3C; m &#x26;&#x26; j &#x3C; n {</span></span>
<span class="line"><span>		if a[i] &#x3C; b[j] {</span></span>
<span class="line"><span>			ans = append(ans, a[i])</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans = append(ans, b[j])</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for ; i &#x3C; m; i++ {</span></span>
<span class="line"><span>		ans = append(ans, a[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for ; j &#x3C; n; j++ {</span></span>
<span class="line"><span>		ans = append(ans, b[j])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/all-elements-in-two-binary-search-trees" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1305.All%20Elements%20in%20Two%20Binary%20Search%20Trees/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1315" tabindex="-1">1315. 祖父节点值为偶数的节点和 <a class="header-anchor" href="#q-1315" aria-label="Permalink to &quot;1315. 祖父节点值为偶数的节点和 {#q-1315}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：</p>&#10;&#10;<ul>&#10;	<li>该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）</li>&#10;</ul>&#10;&#10;<p>如果不存在祖父节点值为偶数的节点，那么返回 <code>0</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1315.Sum%20of%20Nodes%20with%20Even-Valued%20Grandparent/images/1473_ex1.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]&#10;<strong>输出：</strong>18&#10;<strong>解释：</strong>图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数目在 <code>1</code> 到 <code>10^4</code> 之间。</li>&#10;	<li>每个节点的值在 <code>1</code> 到 <code>100</code> 之间。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>累加「祖父为偶数」的节点值。自底向上再回头找祖父，需要额外存父指针。自顶向下传递父节点的值：当前节点的父值为偶数时，其两个孩子恰为祖父为偶数的节点，直接加到答案里，再把自身值传给子树。根没有祖父，传入奇数占位即可。</p>
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
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根节点，并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的父节点的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的子树中，满足条件的节点的值之和。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行过程如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</li>
<li>否则，我们递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左子树和右子树的答案，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
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
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
</math></span>，累加到答案中。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 为偶数，此时我们判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左孩子和右孩子是否存在，如果存在，我们将它们的值累加到答案中。</li>
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
</math></span> 为节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func sumEvenGrandparent(root *TreeNode) int {</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int) int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, x int) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans := dfs(root.Left, root.Val) + dfs(root.Right, root.Val)</span></span>
<span class="line"><span>		if x%2 == 0 {</span></span>
<span class="line"><span>			if root.Left != nil {</span></span>
<span class="line"><span>				ans += root.Left.Val</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if root.Right != nil {</span></span>
<span class="line"><span>				ans += root.Right.Val</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return ans</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(root, 1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-of-nodes-with-even-valued-grandparent" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1315.Sum%20of%20Nodes%20with%20Even-Valued%20Grandparent/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1325" tabindex="-1">1325. 删除给定值的叶子节点 <a class="header-anchor" href="#q-1325" aria-label="Permalink to &quot;1325. 删除给定值的叶子节点 {#q-1325}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵以 <code>root</code> 为根的二叉树和一个整数 <code>target</code> ，请你删除所有值为 <code>target</code> 的 <strong>叶子节点</strong> 。</p>&#10;&#10;<p>注意，一旦删除值为 <code>target</code> 的叶子节点，它的父节点就可能变成叶子节点；如果新叶子节点的值恰好也是 <code>target</code> ，那么这个节点也应该被删除。</p>&#10;&#10;<p>也就是说，你需要重复此过程直到不能继续删除。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1325.Delete%20Leaves%20With%20a%20Given%20Value/images/sample_1_1684.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,3,2,null,2,4], target = 2&#10;<strong>输出：</strong>[1,null,3,null,4]&#10;<strong>解释：&#10;</strong>上面左边的图中，绿色节点为叶子节点，且它们的值与 target 相同（同为 2 ），它们会被删除，得到中间的图。&#10;有一个新的节点变成了叶子节点且它的值与 target 相同，所以将再次进行删除，从而得到最右边的图。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1325.Delete%20Leaves%20With%20a%20Given%20Value/images/sample_2_1684.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,3,3,3,2], target = 3&#10;<strong>输出：</strong>[1,3,null,null,2]&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1325.Delete%20Leaves%20With%20a%20Given%20Value/images/sample_3_1684.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,null,2,null,2], target = 2&#10;<strong>输出：</strong>[1]&#10;<strong>解释：</strong>每一步都删除一个绿色的叶子节点（值为 2）。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点数量的范围是 <code>[1, 3000]</code>。</li>&#10;	<li><code>1 &lt;= Node.val, target &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>删除值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 的叶子，删除后新产生的同类叶子也要删。先序直接判断会漏掉「删子树后自身才成为叶子」的节点。因此后序处理：先递归左右子树，再判断当前节点是否变为目标叶子；若是则返回空，否则保留。一次后序即可把连锁删除做完。</p>
</blockquote>
<p>我们先判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点是否为空，若为空，则返回空。</p>
<p>否则，递归地处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左右子树，即调用 <code v-pre>root.left = removeLeafNodes(root.left, target)</code> 和 <code v-pre>root.right = removeLeafNodes(root.right, target)</code>。</p>
<p>然后判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点是否为叶子节点，即判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>l</mi>
  <mi>e</mi>
  <mi>f</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 是否为空，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 是否等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>。若是，则返回空，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
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
<span class="line"><span>func removeLeafNodes(root *TreeNode, target int) *TreeNode {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	root.Left = removeLeafNodes(root.Left, target)</span></span>
<span class="line"><span>	root.Right = removeLeafNodes(root.Right, target)</span></span>
<span class="line"><span>	if root.Left == nil &#x26;&#x26; root.Right == nil &#x26;&#x26; root.Val == target {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return root</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/delete-leaves-with-a-given-value" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1325.Delete%20Leaves%20With%20a%20Given%20Value/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1339" tabindex="-1">1339. 分裂二叉树的最大乘积 <a class="header-anchor" href="#q-1339" aria-label="Permalink to &quot;1339. 分裂二叉树的最大乘积 {#q-1339}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵二叉树，它的根为 <code>root</code> 。请你删除 1 条边，使二叉树分裂成两棵子树，且它们子树和的乘积尽可能大。</p>&#10;&#10;<p>由于答案可能会很大，请你将结果对 10^9 + 7 取模后再返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1339.Maximum%20Product%20of%20Splitted%20Binary%20Tree/images/sample_1_1699.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,2,3,4,5,6]&#10;<strong>输出：</strong>110&#10;<strong>解释：</strong>删除红色的边，得到 2 棵子树，和分别为 11 和 10 。它们的乘积是 110 （11*10）&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1339.Maximum%20Product%20of%20Splitted%20Binary%20Tree/images/sample_2_1699.png" loading="lazy"></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,null,2,3,4,null,null,5,6]&#10;<strong>输出：</strong>90&#10;<strong>解释：</strong>移除红色的边，得到 2 棵子树，和分别是 15 和 6 。它们的乘积为 90 （15*6）&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [2,3,9,10,7,8,6,5,4,11,1]&#10;<strong>输出：</strong>1025&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,1]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>每棵树最多有 <code>50000</code> 个节点，且至少有 <code>2</code> 个节点。</li>&#10;	<li>每个节点的值在 <code>[1, 10000]</code> 之间。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：两次 DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>删一条边把树分成两棵，最大化子树和之积。枚举边时若每次重算两棵和，会到平方级。整树和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 固定后，一条边对应的乘积就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 是一侧子树和。先 DFS 求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，再 DFS 枚举每个子树和并更新乘积。</p>
</blockquote>
<p>我们可以用两次 DFS 来解决这个问题。</p>
<p>第一次，我们用一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>sum</mtext>
  <mo stretchy="false">(</mo>
  <mtext>root</mtext>
  <mo stretchy="false">)</mo>
</math></span> 函数递归求出整棵树所有节点的和，记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>。</p>
<p>第二次，我们用一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mtext>root</mtext>
  <mo stretchy="false">)</mo>
</math></span> 函数递归遍历每个节点，求出以当前节点为根的子树的节点和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，那么当前节点与其父节点分裂后两棵子树的节点和分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>t</mi>
</math></span>，它们的乘积为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，我们遍历所有节点，求出乘积的最大值，即为答案。</p>
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
<span class="line"><span>func maxProduct(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	const mod = 1e9 + 7</span></span>
<span class="line"><span>	var sum func(*TreeNode) int</span></span>
<span class="line"><span>	sum = func(root *TreeNode) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return root.Val + sum(root.Left) + sum(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s := sum(root)</span></span>
<span class="line"><span>	var dfs func(*TreeNode) int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		t := root.Val + dfs(root.Left) + dfs(root.Right)</span></span>
<span class="line"><span>		if t &#x3C; s {</span></span>
<span class="line"><span>			ans = max(ans, t*(s-t))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return t</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	ans %= mod</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-product-of-splitted-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1339.Maximum%20Product%20of%20Splitted%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1367" tabindex="-1">1367. 二叉树中的链表 <a class="header-anchor" href="#q-1367" aria-label="Permalink to &quot;1367. 二叉树中的链表 {#q-1367}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、链表、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵以 <code>root</code> 为根的二叉树和一个 <code>head</code> 为第一个节点的链表。</p>&#10;&#10;<p>如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 <code>head</code> 为首的链表中每个节点的值，那么请你返回 <code>True</code> ，否则返回 <code>False</code> 。</p>&#10;&#10;<p>一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1367.Linked%20List%20in%20Binary%20Tree/images/sample_1_1720.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>树中蓝色的节点构成了与链表对应的子路径。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1367.Linked%20List%20in%20Binary%20Tree/images/sample_2_1720.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]&#10;<strong>输出：</strong>true&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>二叉树中不存在一一对应链表的路径。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>二叉树和链表中的每个节点的值都满足 <code>1 &lt;= node.val &lt;= 100</code> 。</li>&#10;	<li>链表包含的节点数目在 <code>1</code> 到 <code>100</code> 之间。</li>&#10;	<li>二叉树包含的节点数目在 <code>1</code> 到 <code>2500</code> 之间。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>判断链表是否沿某条向下路径连续出现。链表与树规模不大，可在每个树节点尝试一次匹配。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">head</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">root</mtext>
  <mo stretchy="false">)</mo>
</math></span> 要求从当前格起一路相等；主函数则对每个起点调用它，并递归左右子树换起点。链表空则匹配成功，树空或值不等则失败。</p>
</blockquote>
<p>我们设计一个递归函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示链表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
</math></span> 是否是以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为起点的路径上的节点值一一对应的子路径。函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 的逻辑如下：</p>
<ul>
<li>如果链表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
</math></span> 为空，说明链表已经遍历完了，返回 <code v-pre>true</code>；</li>
<li>如果二叉树 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，说明二叉树已经遍历完了，但链表还没遍历完，返回 <code v-pre>false</code>；</li>
<li>如果二叉树 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的值与链表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
</math></span> 的值不相等，返回 <code v-pre>false</code>；</li>
<li>否则，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
  <mo>.</mo>
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mo>,</mo>
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
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
  <mo>.</mo>
  <mi>n</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mo>,</mo>
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
</math></span>。</li>
</ul>
<p>我们在主函数中，对二叉树的每个节点调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，只要有一个返回 <code v-pre>true</code>，就说明链表是二叉树的子路径，返回 <code v-pre>true</code>；如果所有节点都返回 <code v-pre>false</code>，说明链表不是二叉树的子路径，返回 <code v-pre>false</code>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>n</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
  <mi>&#xFF0C;</mi>
  <mi mathvariant="normal">&#x7A7A;</mi>
  <mi mathvariant="normal">&#x95F4;</mi>
  <mi mathvariant="normal">&#x590D;</mi>
  <mi mathvariant="normal">&#x6742;</mi>
  <mi mathvariant="normal">&#x5EA6;</mi>
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是二叉树的节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for singly-linked list.</span></span>
<span class="line"><span> * type ListNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Next *ListNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func isSubPath(head *ListNode, root *TreeNode) bool {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(head, root) || isSubPath(head, root.Left) || isSubPath(head, root.Right)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func dfs(head *ListNode, root *TreeNode) bool {</span></span>
<span class="line"><span>	if head == nil {</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if root == nil || head.Val != root.Val {</span></span>
<span class="line"><span>		return false</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(head.Next, root.Left) || dfs(head.Next, root.Right)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/linked-list-in-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1367.Linked%20List%20in%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1372" tabindex="-1">1372. 二叉树中的最长交错路径 <a class="header-anchor" href="#q-1372" aria-label="Permalink to &quot;1372. 二叉树中的最长交错路径 {#q-1372}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、动态规划、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵以 <code>root</code> 为根的二叉树，二叉树中的交错路径定义如下：</p>&#10;&#10;<ul>&#10;	<li>选择二叉树中 <strong>任意</strong> 节点和一个方向（左或者右）。</li>&#10;	<li>如果前进方向为右，那么移动到当前节点的的右子节点，否则移动到它的左子节点。</li>&#10;	<li>改变前进方向：左变右或者右变左。</li>&#10;	<li>重复第二步和第三步，直到你在树中无法继续移动。</li>&#10;</ul>&#10;&#10;<p>交错路径的长度定义为：<strong>访问过的节点数目 - 1</strong>（单个节点的路径长度为 0 ）。</p>&#10;&#10;<p>请你返回给定树中最长 <strong>交错路径</strong> 的长度。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1372.Longest%20ZigZag%20Path%20in%20a%20Binary%20Tree/images/sample_1_1702.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>蓝色节点为树中最长交错路径（右 -> 左 -> 右）。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1372.Longest%20ZigZag%20Path%20in%20a%20Binary%20Tree/images/sample_2_1702.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,1,1,null,1,null,null,1,1,null,1]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>蓝色节点为树中最长交错路径（左 -> 右 -> 左 -> 右）。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [1]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>每棵树最多有 <code>50000</code> 个节点。</li>&#10;	<li>每个节点的值在 <code>[1, 100]</code> 之间。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>之字形路径须左右交替下降。从每个节点、每种方向重新搜索会重复子树。DFS 时携带「若下一步向左/向右，当前已有的交错长度」： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 表示到达本节点时最后一步向左的长度， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 同理向右。进入左孩子时新的向左长度是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>，向右长度清零；右孩子对称。全程维护最大值。</p>
</blockquote>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是树中节点的个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func longestZigZag(root *TreeNode) int {</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	var dfs func(root *TreeNode, l, r int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, l, r int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, max(l, r))</span></span>
<span class="line"><span>		dfs(root.Left, r+1, 0)</span></span>
<span class="line"><span>		dfs(root.Right, 0, l+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, 0, 0)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>交错路径必须左右交替下降。从每个结点带着到达时最后一步向左的长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>、向右的长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 向下递归，左孩子接上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 并把向右长度清零，右孩子对称，可以在较短的树上求出最长交错路径。</p>
<p>结点个数可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>。一条链会按结点个数递归，调用栈会溢出。</p>
<p>每个结点的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 只由父结点的另一步决定，答案又只取全程最大值，不需要等子树返回。</p>
<p>因此用显式栈保存结点以及到达它的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>。弹出后更新答案，再把右孩子、左孩子连同新的长度压入栈。左孩子后压入，因而先被处理。</p>
</blockquote>
<p>我们用显式栈遍历二叉树。栈中每个元素保存当前结点，以及到达该结点时最后一步向左、向右的交错长度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span>。</p>
<p>弹出一个结点后，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mo stretchy="false">)</mo>
</math></span> 更新答案。若存在左孩子，则它的向左长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>、向右长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；右孩子的向右长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span>、向左长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。根结点的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 都是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 是树中节点的个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func longestZigZag(root *TreeNode) int {</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	type frame struct {</span></span>
<span class="line"><span>		node *TreeNode</span></span>
<span class="line"><span>		l, r int</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	stk := []frame{{root, 0, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		if cur.node == nil {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, max(cur.l, cur.r))</span></span>
<span class="line"><span>		stk = append(stk, frame{cur.node.Right, 0, cur.l + 1}, frame{cur.node.Left, cur.r + 1, 0})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1372.Longest%20ZigZag%20Path%20in%20a%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1373" tabindex="-1">1373. 二叉搜索子树的最大键值和 <a class="header-anchor" href="#q-1373" aria-label="Permalink to &quot;1373. 二叉搜索子树的最大键值和 {#q-1373}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉搜索树、动态规划、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵以 <code>root</code> 为根的 <strong>二叉树</strong> ，请你返回 <strong>任意</strong> 二叉搜索子树的最大键值和。</p>&#10;&#10;<p>二叉搜索树的定义如下：</p>&#10;&#10;<ul>&#10;	<li>任意节点的左子树中的键值都 <strong>小于</strong> 此节点的键值。</li>&#10;	<li>任意节点的右子树中的键值都 <strong>大于</strong> 此节点的键值。</li>&#10;	<li>任意节点的左子树和右子树都是二叉搜索树。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1373.Maximum%20Sum%20BST%20in%20Binary%20Tree/images/sample_1_1709.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]&#10;<strong>输出：</strong>20&#10;<strong>解释：</strong>键值为 3 的子树是和最大的二叉搜索树。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1373.Maximum%20Sum%20BST%20in%20Binary%20Tree/images/sample_2_1709.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [4,3,null,1,2]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>键值为 2 的单节点子树是和最大的二叉搜索树。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [-4,-2,-5]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>所有节点键值都为负数，和最大的二叉搜索树为空。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [2,1,3]&#10;<strong>输出：</strong>6&#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [5,4,8,3,null,6,3]&#10;<strong>输出：</strong>7&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>每棵树有 <code>1</code> 到 <code>40000</code> 个节点。</li>&#10;	<li>每个节点的键值在 <code>[-4 * 10^4 , 4 * 10^4]</code> 之间。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求任意子树中，本身为 BST 的那些子树的最大节点和。自顶向下验证 BST 会对同一子树重复判断。后序返回四元组：是否为 BST、最小、最大、子树和。左右都是 BST 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>l</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>m</mi>
      <mi>x</mi>
    </mrow>
  </msub>
  <mo>&lt;</mo>
  <mtext mathvariant="italic">root</mtext>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&lt;</mo>
  <msub>
    <mi>r</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>m</mi>
      <mi>i</mi>
    </mrow>
  </msub>
</math></span> 时，当前树合法，用其和更新答案。空树视为合法，最小为正无穷、最大为负无穷。</p>
</blockquote>
<p>判断一棵树是否是二叉搜索树，需要满足以下四个条件：</p>
<ul>
<li>左子树是二叉搜索树；</li>
<li>右子树是二叉搜索树；</li>
<li>左子树的最大值小于根节点的值；</li>
<li>右子树的最小值大于根节点的值。</li>
</ul>
<p>因此，我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，函数的返回值是一个四元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中：</p>
<ul>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的树是否是二叉搜索树。如果是二叉搜索树，则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>；否则 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>；</li>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的树的最小值；</li>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的树的最大值；</li>
<li>数字 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 表示以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的树的所有节点的和。</li>
</ul>
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
</math></span> 的执行逻辑如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空节点，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo>+</mo>
  <mi mathvariant="normal">&#x221E;</mi>
  <mo>,</mo>
  <mo>&#x2212;</mo>
  <mi mathvariant="normal">&#x221E;</mi>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span>，表示空树是二叉搜索树，最小值和最大值分别为正无穷和负无穷，节点和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则，递归计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左子树和右子树，分别得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>l</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>，然后判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点是否满足二叉搜索树的条件。</p>
<p>如果满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>b</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>m</mi>
  <mi>x</mi>
  <mo>&lt;</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo>&lt;</mo>
  <mi>r</mi>
  <mi>m</mi>
  <mi>i</mi>
</math></span>，则以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的树是二叉搜索树，节点和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mi>l</mi>
  <mi>s</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mi>s</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>。我们更新答案 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，并返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
  <mo>,</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>m</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mo stretchy="false">)</mo>
  <mo>,</mo>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>否则，以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为根的树不是二叉搜索树，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mn>0</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>我们在主函数中调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，执行完毕后，答案即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
<span class="line"><span>func maxSumBST(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	const inf = 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>	var dfs func(root *TreeNode) [4]int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) [4]int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return [4]int{1, inf, -inf, 0}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l, r := dfs(root.Left), dfs(root.Right)</span></span>
<span class="line"><span>		if l[0] == 1 &#x26;&#x26; r[0] == 1 &#x26;&#x26; l[2] &#x3C; root.Val &#x26;&#x26; root.Val &#x3C; r[1] {</span></span>
<span class="line"><span>			s := l[3] + r[3] + root.Val</span></span>
<span class="line"><span>			ans = max(ans, s)</span></span>
<span class="line"><span>			return [4]int{1, min(l[1], root.Val), max(r[2], root.Val), s}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return [4]int{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-sum-bst-in-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1373.Maximum%20Sum%20BST%20in%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1376" tabindex="-1">1376. 通知所有员工所需的时间 <a class="header-anchor" href="#q-1376" aria-label="Permalink to &quot;1376. 通知所有员工所需的时间 {#q-1376}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>公司里有 <code>n</code> 名员工，每个员工的 ID 都是独一无二的，编号从 <code>0</code> 到 <code>n - 1</code>。公司的总负责人通过 <code>headID</code> 进行标识。</p>&#10;&#10;<p>在 <code>manager</code> 数组中，每个员工都有一个直属负责人，其中 <code>manager[i]</code> 是第 <code>i</code> 名员工的直属负责人。对于总负责人，<code>manager[headID] = -1</code>。题目保证从属关系可以用树结构显示。</p>&#10;&#10;<p>公司总负责人想要向公司所有员工通告一条紧急消息。他将会首先通知他的直属下属们，然后由这些下属通知他们的下属，直到所有的员工都得知这条紧急消息。</p>&#10;&#10;<p>第 <code>i</code> 名员工需要 <code>informTime[i]</code> 分钟来通知它的所有直属下属（也就是说在 <code>informTime[i]</code> 分钟后，他的所有直属下属都可以开始传播这一消息）。</p>&#10;&#10;<p>返回通知所有员工这一紧急消息所需要的 <strong>分钟数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1, headID = 0, manager = [-1], informTime = [0]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>公司总负责人是该公司的唯一一名员工。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1376.Time%20Needed%20to%20Inform%20All%20Employees/images/graph.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>id = 2 的员工是公司的总负责人，也是其他所有员工的直属负责人，他需要 1 分钟来通知所有员工。&#10;上图显示了公司员工的树结构。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10^5</code></li>&#10;	<li><code>0 &lt;= headID &lt; n</code></li>&#10;	<li><code>manager.length == n</code></li>&#10;	<li><code>0 &lt;= manager[i] &lt; n</code></li>&#10;	<li><code>manager[headID] == -1</code></li>&#10;	<li><code>informTime.length == n</code></li>&#10;	<li><code>0 &lt;= informTime[i] &lt;= 1000</code></li>&#10;	<li>如果员工 <code>i</code> 没有下属，<code>informTime[i] == 0</code> 。</li>&#10;	<li>题目 <strong>保证</strong> 所有员工都可以收到通知。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>树形汇报关系下，从负责人把消息传到全员的时间，边权为该员工的通知耗时。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能对每个叶子单独累加路径。建出下属邻接表后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 通知完其整棵下属树的时间，等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">informTime</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加上各直接下属 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的最大者。答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">headID</mtext>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>我们先根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 数组构建邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示员工 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的所有直接下属。</p>
<p>接下来，我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从员工 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 开始，将消息通知给他的所有下属（包括直接下属、间接下属）所需要的时间，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>d</mi>
  <mi>I</mi>
  <mi>D</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>在函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 中，我们需要遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的所有直接下属 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>，对于每个下属，员工 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 需要将消息通知给他，这需要花费 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>f</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>m</mi>
  <mi>T</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的时间，而他的所有下属需要将消息通知给他们的下属，这需要花费 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的时间，取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>f</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>m</mi>
  <mi>T</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的最大值作为函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span> 的返回值即可。</p>
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
</math></span> 为员工数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numOfMinutes(n int, headID int, manager []int, informTime []int) int {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for i, x := range manager {</span></span>
<span class="line"><span>		if x != -1 {</span></span>
<span class="line"><span>			g[x] = append(g[x], i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(int) int</span></span>
<span class="line"><span>	dfs = func(i int) (ans int) {</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			ans = max(ans, dfs(j)+informTime[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(headID)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>公司的汇报关系是一棵以负责人为根的树，一条边的耗时是该员工的通知时间。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，从负责人递归统计每棵下属树的耗时，链上的调用深度就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，会超出递归栈。</p>
<p>员工 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 通知完整棵下属树的时间，等于他自己的通知耗时加上直接下属中最慢的那一棵。叶子没有下属，时间是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。这个值只依赖子节点已经算完的结果。</p>
<p>显式栈从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">headID</mtext>
</math></span> 出发，按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x5458;</mi>
  <mi mathvariant="normal">&#x5DE5;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x72B6;</mi>
  <mi mathvariant="normal">&#x6001;</mi>
  <mo stretchy="false">)</mo>
</math></span> 做后序。进入时先压出栈标记再压下属，离开时取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">informTime</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">time</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 的最大值。负责人的时间就是答案。</p>
</blockquote>
<p>我们先根据 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>a</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>r</mi>
</math></span> 数组构建邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 表示员工 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的所有直接下属。</p>
<p>员工 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 通知完整棵下属树所需的时间，等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">informTime</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加上各直接下属对应时间的最大值；没有下属时这个时间是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。用显式栈从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">headID</mtext>
</math></span> 做后序，离开节点时写入该时间。答案就是负责人的时间。</p>
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
</math></span> 为员工数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numOfMinutes(n int, headID int, manager []int, informTime []int) int {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for i, x := range manager {</span></span>
<span class="line"><span>		if x != -1 {</span></span>
<span class="line"><span>			g[x] = append(g[x], i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	time := make([]int, n)</span></span>
<span class="line"><span>	stk := [][2]int{{headID, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		i, state := cur[0], cur[1]</span></span>
<span class="line"><span>		if state == 0 {</span></span>
<span class="line"><span>			stk = append(stk, [2]int{i, 1})</span></span>
<span class="line"><span>			for _, j := range g[i] {</span></span>
<span class="line"><span>				stk = append(stk, [2]int{j, 0})</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans := 0</span></span>
<span class="line"><span>			for _, j := range g[i] {</span></span>
<span class="line"><span>				ans = max(ans, time[j]+informTime[i])</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			time[i] = ans</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return time[headID]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/time-needed-to-inform-all-employees" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1376.Time%20Needed%20to%20Inform%20All%20Employees/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1379" tabindex="-1">1379. 找出克隆二叉树中的相同节点 <a class="header-anchor" href="#q-1379" aria-label="Permalink to &quot;1379. 找出克隆二叉树中的相同节点 {#q-1379}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两棵二叉树，原始树 <code>original</code> 和克隆树 <code>cloned</code>，以及一个位于原始树 <code>original</code> 中的目标节点 <code>target</code>。</p>&#10;&#10;<p>其中，克隆树 <code>cloned</code> 是原始树 <code>original</code> 的一个<strong> 副本 </strong>。</p>&#10;&#10;<p>请找出在树 <code>cloned</code> 中，与 <code>target</code> <strong>相同 </strong>的节点，并返回对该节点的引用（在 C/C++ 等有指针的语言中返回 节点指针，其他语言返回节点本身）。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>注意：</strong>你 <strong>不能</strong> 对两棵二叉树，以及 <code>target</code> 节点进行更改。<strong>只能</strong> 返回对克隆树 <code>cloned</code> 中已有的节点的引用。</p>&#10;&#10;<ul>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<ul>&#10;</ul>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1379.Find%20a%20Corresponding%20Node%20of%20a%20Binary%20Tree%20in%20a%20Clone%20of%20That%20Tree/images/e1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> tree = [7,4,3,null,null,6,19], target = 3&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong> 上图画出了树 original 和 cloned。target 节点在树 original 中，用绿色标记。答案是树 cloned 中的黄颜色的节点（其他示例类似）。</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1379.Find%20a%20Corresponding%20Node%20of%20a%20Binary%20Tree%20in%20a%20Clone%20of%20That%20Tree/images/e2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> tree = [7], target =  7&#10;<strong>输出:</strong> 7&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1379.Find%20a%20Corresponding%20Node%20of%20a%20Binary%20Tree%20in%20a%20Clone%20of%20That%20Tree/images/e3.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4&#10;<strong>输出:</strong> 4&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点的数量范围为 <code>[1, 10<sup>4</sup>]</code> 。</li>&#10;	<li>同一棵树中，没有值相同的节点。</li>&#10;	<li><code>target</code> 节点是树 <code>original</code> 中的一个节点，并且不会是 <code>null</code> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>如果树中允许出现值相同的节点，将如何解答？</p></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1379.Find%20a%20Corresponding%20Node%20of%20a%20Binary%20Tree%20in%20a%20Clone%20of%20That%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：将 Python 同步 DFS 改写为 Go。对原树和克隆树同时走相同的左右路径；原树当前指针等于 target 时，直接返回克隆树同位置的已有节点。使用指针身份而不是值比较，因此进阶中的重复值也正确；不创建答案节点、不修改任何输入节点。</p>
<p><strong>变量与复杂度</strong>：N 为节点总数，H 为树高；original、cloned 为同步访问位置。时间 O(N)，递归栈 O(H)，最坏退化链为 O(N)。Go 的可增长 goroutine 栈可处理题目 10⁴ 节点的链。</p>
<p><strong>平台接口</strong>：getTargetCopy(original, cloned, target *TreeNode) *TreeNode；TreeNode 由平台提供，字段 Val int、Left/Right *TreeNode，仅测试文件定义此类型。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1379.Find%20a%20Corresponding%20Node%20of%20a%20Binary%20Tree%20in%20a%20Clone%20of%20That%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1379.Find%20a%20Corresponding%20Node%20of%20a%20Binary%20Tree%20in%20a%20Clone%20of%20That%20Tree/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func getTargetCopy(original, cloned, target *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	if original == nil {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if original == target {</span></span>
<span class="line"><span>		return cloned</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if found := getTargetCopy(original.Left, cloned.Left, target); found != nil {</span></span>
<span class="line"><span>		return found</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return getTargetCopy(original.Right, cloned.Right, target)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1379.Find%20a%20Corresponding%20Node%20of%20a%20Binary%20Tree%20in%20a%20Clone%20of%20That%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1382" tabindex="-1">1382. 将二叉搜索树变平衡 <a class="header-anchor" href="#q-1382" aria-label="Permalink to &quot;1382. 将二叉搜索树变平衡 {#q-1382}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、树、深度优先搜索、二叉搜索树、分治、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵二叉搜索树，请你返回一棵 <strong>平衡后</strong> 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。如果有多种构造方法，请你返回任意一种。</p>&#10;&#10;<p>如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 <code>1</code> ，我们就称这棵二叉搜索树是 <strong>平衡的</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1382.Balance%20a%20Binary%20Search%20Tree/images/balance1-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,2,null,3,null,4,null,null]&#10;<strong>输出：</strong>[2,1,3,null,null,null,4]&#10;<strong>解释：</strong>这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1300-1399/1382.Balance%20a%20Binary%20Search%20Tree/images/balanced2-tree.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [2,1,3]&#10;<strong>输出:</strong> [2,1,3]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树节点的数目在 <code>[1, 10<sup>4</sup>]</code> 范围内。</li>&#10;	<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：中序遍历 + 构造平衡二叉树 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>把 BST 改造成平衡树，中序序列不变。中序得到有序数组后，每次取中点为根、左右区间递归建树，高度即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
</math></span>，仍是一棵 BST。</p>
</blockquote>
<p>由于原树是一棵二叉搜索树，因此我们可以将其中序遍历的结果保存在一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中，然后我们设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>u</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span>，它用来构造 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中下标范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 内的平衡二叉搜索树，那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>u</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>u</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行逻辑如下：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&gt;</mo>
  <mi>j</mi>
</math></span>，那么平衡二叉搜索树为空，返回空节点；</li>
<li>否则，我们取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 作为根节点，然后递归构建左子树和右子树，返回根节点。</li>
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
<span class="line"><span>func balanceBST(root *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	ans := []int{}</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>		ans = append(ans, root.Val)</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var build func(i, j int) *TreeNode</span></span>
<span class="line"><span>	build = func(i, j int) *TreeNode {</span></span>
<span class="line"><span>		if i > j {</span></span>
<span class="line"><span>			return nil</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		mid := (i + j) >> 1</span></span>
<span class="line"><span>		left := build(i, mid-1)</span></span>
<span class="line"><span>		right := build(mid+1, j)</span></span>
<span class="line"><span>		return &#x26;TreeNode{Val: ans[mid], Left: left, Right: right}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return build(0, len(ans)-1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/balance-a-binary-search-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1300-1399/1382.Balance%20a%20Binary%20Search%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1430" tabindex="-1">1430. 判断给定的序列是否是二叉树从根到叶的路径 🔒 <a class="header-anchor" href="#q-1430" aria-label="Permalink to &quot;1430. 判断给定的序列是否是二叉树从根到叶的路径 🔒 {#q-1430}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个二叉树，我们称从根节点到任意叶节点的任意路径中的节点值所构成的序列为该二叉树的一个 “<strong>有效序列</strong>” 。检查一个给定的序列是否是给定二叉树的一个 “<strong>有效序列</strong>” 。</p>&#10;&#10;<p>我们以整数数组 <code>arr</code> 的形式给出这个序列。从根节点到任意叶节点的任意路径中的节点值所构成的序列都是这个二叉树的 “<strong>有效序列</strong>” 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1430.Check%20If%20a%20String%20Is%20a%20Valid%20Sequence%20from%20Root%20to%20Leaves%20Path%20in%20a%20Binary%20Tree/images/leetcode_testcase_1.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]&#10;<strong>输出：</strong>true&#10;<strong>解释：&#10;</strong>路径 0 -> 1 -> 0 -> 1 是一个“有效序列”（图中的绿色节点）。&#10;其他的“有效序列”是：&#10;0 -> 1 -> 1 -> 0 &#10;0 -> 0 -> 0&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1430.Check%20If%20a%20String%20Is%20a%20Valid%20Sequence%20from%20Root%20to%20Leaves%20Path%20in%20a%20Binary%20Tree/images/leetcode_testcase_2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]&#10;<strong>输出：</strong>false &#10;<strong>解释：</strong>路径 0 -> 0 -> 1 不存在，所以这不是一个“序列”。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1430.Check%20If%20a%20String%20Is%20a%20Valid%20Sequence%20from%20Root%20to%20Leaves%20Path%20in%20a%20Binary%20Tree/images/leetcode_testcase_3.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>路径 0 -> 1 -> 1 是一个序列，但不是一个“有效序列”（译者注：因为序列的终点不是叶节点）。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= arr.length &lt;= 5000</code></li>&#10;	<li><code>0 &lt;= arr[i] &lt;= 9</code></li>&#10;	<li>每个节点的值的取值范围是 <code>[0 - 9]</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 是否恰好对应一条根到叶路径。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5000</mn>
</math></span>，从根沿左右孩子各试一次即可，失败分支立即返回。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">root</mtext>
  <mo>,</mo>
  <mi>u</mi>
  <mo stretchy="false">)</mo>
</math></span> 要求当前值等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>u</mi>
  <mo stretchy="false">]</mo>
</math></span>。走到数组末位时必须同时是叶子，否则继续左右子树。空节点或值不匹配则失败。</p>
</blockquote>
<p>根据题目，我们设计一个递归函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>u</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从当前节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 开始，且当前已经遍历到数组的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 个元素，是否存在一条从根节点到叶子节点的路径，且路径上的元素与数组中的元素一一对应。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>。</p>
<p>在递归函数中，如果当前节点为空，或者当前节点的值与数组中的值不相等，那么直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mi>e</mi>
</math></span>。如果当前节点是叶子节点，且当前节点的值与数组中的值相等，那么返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 是否等于数组的长度减 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。否则，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>,</mo>
  <mi>u</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>,</mo>
  <mi>u</mi>
  <mo>+</mo>
  <mn>1</mn>
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
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
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
<span class="line"><span>func isValidSequence(root *TreeNode, arr []int) bool {</span></span>
<span class="line"><span>	var dfs func(root *TreeNode, u int) bool</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, u int) bool {</span></span>
<span class="line"><span>		if root == nil || root.Val != arr[u] {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if u == len(arr)-1 {</span></span>
<span class="line"><span>			return root.Left == nil &#x26;&#x26; root.Right == nil</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return dfs(root.Left, u+1) || dfs(root.Right, u+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(root, 0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1430.Check%20If%20a%20String%20Is%20a%20Valid%20Sequence%20from%20Root%20to%20Leaves%20Path%20in%20a%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1443" tabindex="-1">1443. 收集树上所有苹果的最少时间 <a class="header-anchor" href="#q-1443" aria-label="Permalink to &quot;1443. 收集树上所有苹果的最少时间 {#q-1443}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、哈希表、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵有 <code>n</code> 个节点的无向树，节点编号为 <code>0</code> 到 <code>n-1</code> ，它们中有一些节点有苹果。通过树上的一条边，需要花费 1 秒钟。你从 <strong>节点 0 </strong>出发，请你返回最少需要多少秒，可以收集到所有苹果，并回到节点 0 。</p>&#10;&#10;<p>无向树的边由 <code>edges</code> 给出，其中 <code>edges[i] = [from<sub>i</sub>, to<sub>i</sub>]</code> ，表示有一条边连接 <code>from</code> 和 <code>to<sub>i</sub></code> 。除此以外，还有一个布尔数组 <code>hasApple</code> ，其中 <code>hasApple[i] = true</code> 代表节点 <code>i</code> 有一个苹果，否则，节点 <code>i</code> 没有苹果。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1443.Minimum%20Time%20to%20Collect%20All%20Apples%20in%20a%20Tree/images/min_time_collect_apple_1.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]&#10;<strong>输出：</strong>8 &#10;<strong>解释：</strong>上图展示了给定的树，其中红色节点表示有苹果。一个能收集到所有苹果的最优方案由绿色箭头表示。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1443.Minimum%20Time%20to%20Collect%20All%20Apples%20in%20a%20Tree/images/min_time_collect_apple_2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]&#10;<strong>输出：</strong>6&#10;<strong>解释：</strong>上图展示了给定的树，其中红色节点表示有苹果。一个能收集到所有苹果的最优方案由绿色箭头表示。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10^5</code></li>&#10;	<li><code>edges.length == n - 1</code></li>&#10;	<li><code>edges[i].length == 2</code></li>&#10;	<li><code>0 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt;= n - 1</code></li>&#10;	<li><code>hasApple.length == n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>必须从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 出发收集全部苹果并返回，每条边走两次（去和回）。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，只能一遍 DFS。</p>
<p>子树内若既无苹果、子孙也不需继续走，则不必进入。对孩子递归得到的边权（进入该孩子记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>）求和，仅当本节点有苹果或子树代价非零时，才把进入边的代价加上返回。根的进入代价为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minTime(n int, edges [][]int, hasApple []bool) int {</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		u, v := e[0], e[1]</span></span>
<span class="line"><span>		g[u] = append(g[u], v)</span></span>
<span class="line"><span>		g[v] = append(g[v], u)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var dfs func(int, int) int</span></span>
<span class="line"><span>	dfs = func(u, cost int) int {</span></span>
<span class="line"><span>		if vis[u] {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[u] = true</span></span>
<span class="line"><span>		nxt := 0</span></span>
<span class="line"><span>		for _, v := range g[u] {</span></span>
<span class="line"><span>			nxt += dfs(v, 2)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !hasApple[u] &#x26;&#x26; nxt == 0 {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return cost + nxt</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(0, 0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>必须从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 出发收集全部苹果并返回，每条用到的边走两次。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，从根递归统计每棵子树的往返代价，链上的调用深度就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，会超出递归栈。</p>
<p>一棵子树如果自己没有苹果、子孙也不需要再走，就不必进入。孩子都处理完以后，把各孩子的往返代价相加；当前点有苹果或这个和不为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时，再加上进入当前点的代价，根是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，其余点是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>。</p>
<p>显式栈按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x8282;</mi>
  <mi mathvariant="normal">&#x70B9;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x7236;</mi>
  <mi mathvariant="normal">&#x8282;</mi>
  <mi mathvariant="normal">&#x70B9;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x72B6;</mi>
  <mi mathvariant="normal">&#x6001;</mi>
  <mo stretchy="false">)</mo>
</math></span> 做后序。进入时先压出栈标记再压孩子，离开时按上面的规则写入往返代价。根的代价就是答案。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minTime(n int, edges [][]int, hasApple []bool) int {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		u, v := e[0], e[1]</span></span>
<span class="line"><span>		g[u] = append(g[u], v)</span></span>
<span class="line"><span>		g[v] = append(g[v], u)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cost := make([]int, n)</span></span>
<span class="line"><span>	stk := [][3]int{{0, -1, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		u, fa, state := cur[0], cur[1], cur[2]</span></span>
<span class="line"><span>		if state == 0 {</span></span>
<span class="line"><span>			stk = append(stk, [3]int{u, fa, 1})</span></span>
<span class="line"><span>			for _, v := range g[u] {</span></span>
<span class="line"><span>				if v != fa {</span></span>
<span class="line"><span>					stk = append(stk, [3]int{v, u, 0})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			nxt := 0</span></span>
<span class="line"><span>			for _, v := range g[u] {</span></span>
<span class="line"><span>				if v != fa {</span></span>
<span class="line"><span>					nxt += cost[v]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if hasApple[u] || nxt > 0 {</span></span>
<span class="line"><span>				if u == 0 {</span></span>
<span class="line"><span>					cost[u] = nxt</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					cost[u] = nxt + 2</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return cost[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-time-to-collect-all-apples-in-a-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1443.Minimum%20Time%20to%20Collect%20All%20Apples%20in%20a%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1448" tabindex="-1">1448. 统计二叉树中好节点的数目 <a class="header-anchor" href="#q-1448" aria-label="Permalink to &quot;1448. 统计二叉树中好节点的数目 {#q-1448}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵根为 <code>root</code> 的二叉树，请你返回二叉树中好节点的数目。</p>&#10;&#10;<p>「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1448.Count%20Good%20Nodes%20in%20Binary%20Tree/images/test_sample_1.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [3,1,4,3,null,1,5]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>图中蓝色节点为好节点。&#10;根节点 (3) 永远是个好节点。&#10;节点 4 -> (3,4) 是路径中的最大值。&#10;节点 5 -> (3,4,5) 是路径中的最大值。&#10;节点 3 -> (3,1,3) 是路径中的最大值。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1448.Count%20Good%20Nodes%20in%20Binary%20Tree/images/test_sample_2.png" loading="lazy"></strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [3,3,null,4,2]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>节点 2 -> (3, 3, 2) 不是好节点，因为 &quot;3&quot; 比它大。</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [1]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>根节点是好节点。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>二叉树中节点数目范围是 <code>[1, 10^5]</code> 。</li>&#10;	<li>每个节点权值的范围是 <code>[-10^4, 10^4]</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>好节点要求根到该点路径上没有更大的值。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，在 DFS 中下传路径最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，当前值不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 则计数并更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。</p>
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
  <mo>,</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从当前节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 开始搜索好节点，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 表示从根节点到当前节点的路径（不包括当前节点）上的最大值。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行逻辑如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，说明搜索结束，直接返回；</p>
<p>否则，我们判断 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 的大小关系。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>，说明 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 是好节点，答案加一，并且我们需要更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>.</mo>
  <mi>v</mi>
  <mi>a</mi>
  <mi>l</mi>
</math></span>。</p>
<p>接下来，我们递归调用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>,</mo>
  <mi>m</mi>
  <mi>x</mi>
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
  <mo>,</mo>
  <mi>m</mi>
  <mi>x</mi>
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
  <mo>&#x2212;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span> 表示负无穷，因为题目中说明了每个节点权值的范围是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mo>&#x2212;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
  <mo>,</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
  <mo stretchy="false">]</mo>
</math></span>，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span> 肯定是一个比所有节点权值都小的值，这样就能保证 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mo>&#x2212;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
  <mo stretchy="false">)</mo>
</math></span> 一定会把根节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 算作好节点。</p>
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
<span class="line"><span>func goodNodes(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, mx int) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if mx &#x3C;= root.Val {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			mx = root.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left, mx)</span></span>
<span class="line"><span>		dfs(root.Right, mx)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, -10001)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>好节点要求从根到该点的路径上没有更大的值。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可以到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，下传路径最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，当前值不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 就计数并更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>，一次遍历就能数完。</p>
<p>搜索先进入左孩子。一条左链的长度可以到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，递归会在计数完成前溢出。每个结点只和自己路径上的最大值比较，左右孩子互不影响。</p>
<p>待访问的结点可以连同到达它之前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 放进显式栈。弹出后若当前值不小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 就计数，并把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 更新为当前值，再把右孩子和左孩子连同这个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 压栈。左孩子后压入，因此先被处理。</p>
<p>初始 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 小于结点值的下界 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，根一定被算作好节点。每个结点入栈一次。</p>
</blockquote>
<p>我们用显式栈从根开始统计好节点。栈中每个元素是一个结点，以及从根到它的父结点路径上的最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。弹出结点后，若结点为空则跳过；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">val</mtext>
</math></span>，答案加一，并把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 更新为当前结点的值。随后先压入右孩子，再压入左孩子，二者都带上更新后的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>。初始 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 小于题目给出的最小结点值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，因此根一定被计入。</p>
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
<span class="line"><span>func goodNodes(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	stk := []struct {</span></span>
<span class="line"><span>		node *TreeNode</span></span>
<span class="line"><span>		mx   int</span></span>
<span class="line"><span>	}{{root, -10001}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		node, mx := cur.node, cur.mx</span></span>
<span class="line"><span>		if node == nil {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if mx &#x3C;= node.Val {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			mx = node.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		stk = append(stk, struct {</span></span>
<span class="line"><span>			node *TreeNode</span></span>
<span class="line"><span>			mx   int</span></span>
<span class="line"><span>		}{node.Right, mx}, struct {</span></span>
<span class="line"><span>			node *TreeNode</span></span>
<span class="line"><span>			mx   int</span></span>
<span class="line"><span>		}{node.Left, mx})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/count-good-nodes-in-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1448.Count%20Good%20Nodes%20in%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1457" tabindex="-1">1457. 二叉树中的伪回文路径 <a class="header-anchor" href="#q-1457" aria-label="Permalink to &quot;1457. 二叉树中的伪回文路径 {#q-1457}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「<strong>伪回文</strong>」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。</p>&#10;&#10;<p>请你返回从根到叶子节点的所有路径中 <strong>伪回文 </strong>路径的数目。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1457.Pseudo-Palindromic%20Paths%20in%20a%20Binary%20Tree/images/palindromic_paths_1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [2,3,1,3,1,null,1]&#10;<strong>输出：</strong>2 &#10;<strong>解释：</strong>上图为给定的二叉树。总共有 3 条从根到叶子的路径：红色路径 [2,3,3] ，绿色路径 [2,1,1] 和路径 [2,3,1] 。&#10;     在这些路径中，只有红色和绿色的路径是伪回文路径，因为红色路径 [2,3,3] 存在回文排列 [3,2,3] ，绿色路径 [2,1,1] 存在回文排列 [1,2,1] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1457.Pseudo-Palindromic%20Paths%20in%20a%20Binary%20Tree/images/palindromic_paths_2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [2,1,1,1,3,null,null,null,null,null,1]&#10;<strong>输出：</strong>1 &#10;<strong>解释：</strong>上图为给定二叉树。总共有 3 条从根到叶子的路径：绿色路径 [2,1,1] ，路径 [2,1,3,1] 和路径 [2,1] 。&#10;     这些路径中只有绿色路径是伪回文路径，因为 [2,1,1] 存在回文排列 [1,2,1] 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [9]&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>给定二叉树的节点数目在范围 <code>[1, 10<sup>5</sup>]</code> 内</li>&#10;	<li><code>1 &lt;= Node.val &lt;= 9</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS + 位运算 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>路径可重排成回文，当且仅当奇数次字符至多一个。节点值在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>～ <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 位掩码的异或记录奇偶。</p>
<p>走到叶子时若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 至多一位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>（即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi mathvariant="normal">&amp;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>）则计一条。DFS 下传掩码，左右子树方案相加。</p>
</blockquote>
<p>一条路径是伪回文路径，当且仅当该路径经过的节点值的出现次数为奇数的数字为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 个或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 个。</p>
<p>由于二叉树节点值的范围为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，因此对于每一条从根到叶子的路径，我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的二进制数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 表示当前路径经过的节点值的出现状态，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，表示当前路径上节点值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的出现次数为奇数，否则表示其出现次数为偶数。那么，如果一条路径是伪回文路径，需要满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi mathvariant="normal">&amp;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&amp;</mi>
</math></span> 表示按位与运算。</p>
<p>基于以上分析，我们可以使用深度优先搜索的方法计算路径数。我们定义一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示从当前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 节点开始，且当前节点的状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 的所有伪回文路径的个数。那么答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>f</mi>
  <mi>s</mi>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 的执行逻辑如下：</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</p>
<p>否则，令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mi>r</mi>
      <mi>o</mi>
      <mi>o</mi>
      <mi>t</mi>
      <mo>.</mo>
      <mi>v</mi>
      <mi>a</mi>
      <mi>l</mi>
    </mrow>
  </msup>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2295;</mo>
</math></span> 表示按位异或运算。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 是叶子节点，那么如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi mathvariant="normal">&amp;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，否则返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 不是叶子节点，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mo>,</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
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
  <mo>,</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
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
<span class="line"><span>func pseudoPalindromicPaths(root *TreeNode) int {</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int) int</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, mask int) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		mask ^= 1 &#x3C;&#x3C; root.Val</span></span>
<span class="line"><span>		if root.Left == nil &#x26;&#x26; root.Right == nil {</span></span>
<span class="line"><span>			if mask&#x26;(mask-1) == 0 {</span></span>
<span class="line"><span>				return 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return dfs(root.Left, mask) + dfs(root.Right, mask)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(root, 0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈 + 位运算 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>一条从根到叶子的路径能重排成回文，当且仅当奇数次出现的数字至多一个。结点值只在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可以到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，用一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 位掩码的异或记下每个数字出现次数的奇偶。</p>
<p>走到叶子时检查掩码，再把左右子树的方案数相加，递归就能数完。搜索先进入左孩子，一条左链的长度可以到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，调用栈会在叶子判定之前溢出。掩码只依赖从根到当前结点的路径，左右孩子互不影响。</p>
<p>因此把结点和到达它之前的掩码放进显式栈。弹出后把当前值异或进掩码；叶子上若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi mathvariant="normal">&amp;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 就计一条，否则先压右孩子再压左孩子，都带上更新后的掩码。</p>
<p>每个结点入栈一次，叶子上的计数之和就是伪回文路径的条数。</p>
</blockquote>
<p>一条路径是伪回文路径，当且仅当该路径经过的节点值的出现次数为奇数的数字为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 个或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 个。</p>
<p>由于二叉树节点值的范围为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，因此对于每一条从根到叶子的路径，我们可以用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 的二进制数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 表示当前路径经过的节点值的出现状态，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
</math></span> 的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，表示当前路径上节点值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的出现次数为奇数，否则表示其出现次数为偶数。那么，如果一条路径是伪回文路径，需要满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi mathvariant="normal">&amp;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&amp;</mi>
</math></span> 表示按位与运算。</p>
<p>我们用显式栈从根出发。栈中每个元素是结点和到达该结点之前的掩码。弹出后令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>=</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2295;</mo>
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mtext mathvariant="italic">val</mtext>
    </mrow>
  </msup>
</math></span>。若当前结点是叶子，且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mi mathvariant="normal">&amp;</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，答案加一。否则先把右孩子、再把左孩子连同更新后的掩码压栈，空孩子不入栈。左孩子后压入，因此先被处理。</p>
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
<span class="line"><span>func pseudoPalindromicPaths(root *TreeNode) (ans int) {</span></span>
<span class="line"><span>	stk := []struct {</span></span>
<span class="line"><span>		node *TreeNode</span></span>
<span class="line"><span>		mask int</span></span>
<span class="line"><span>	}{{root, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		node, mask := cur.node, cur.mask</span></span>
<span class="line"><span>		if node == nil {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		mask ^= 1 &#x3C;&#x3C; node.Val</span></span>
<span class="line"><span>		if node.Left == nil &#x26;&#x26; node.Right == nil {</span></span>
<span class="line"><span>			if mask&#x26;(mask-1) == 0 {</span></span>
<span class="line"><span>				ans++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			stk = append(stk, struct {</span></span>
<span class="line"><span>				node *TreeNode</span></span>
<span class="line"><span>				mask int</span></span>
<span class="line"><span>			}{node.Right, mask}, struct {</span></span>
<span class="line"><span>				node *TreeNode</span></span>
<span class="line"><span>				mask int</span></span>
<span class="line"><span>			}{node.Left, mask})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/pseudo-palindromic-paths-in-a-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1457.Pseudo-Palindromic%20Paths%20in%20a%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1469" tabindex="-1">1469. 寻找所有的独生节点 🔒 <a class="header-anchor" href="#q-1469" aria-label="Permalink to &quot;1469. 寻找所有的独生节点 🔒 {#q-1469}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>二叉树中，如果一个节点是其父节点的唯一子节点，则称这样的节点为 “<strong>独生节点</strong>” 。二叉树的根节点不会是独生节点，因为它没有父节点。</p>&#10;&#10;<p>给定一棵二叉树的根节点 <code>root</code> ，返回树中<strong> 所有的独生节点的值所构成的数组</strong> 。数组的顺序<strong> 不限 </strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1469.Find%20All%20The%20Lonely%20Nodes/images/e1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,3,null,4]&#10;<strong>输出：</strong>[4]&#10;<strong>解释：</strong>浅蓝色的节点是唯一的独生节点。&#10;节点 1 是根节点，不是独生的。&#10;节点 2 和 3 有共同的父节点，所以它们都不是独生的。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1469.Find%20All%20The%20Lonely%20Nodes/images/e2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [7,1,4,6,null,5,3,null,null,null,null,null,2]&#10;<strong>输出：</strong>[6,2]&#10;<strong>输出：</strong>浅蓝色的节点是独生节点。&#10;请谨记，顺序是不限的。 [2,6] 也是一种可接受的答案。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1469.Find%20All%20The%20Lonely%20Nodes/images/tree.png" loading="lazy"> </strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [11,99,88,77,null,null,66,55,null,null,44,33,null,null,22]&#10;<strong>输出：</strong>[77,55,33,66,44,22]&#10;<strong>解释：</strong>节点 99 和 88 有共同的父节点，节点 11 是根节点。&#10;其他所有节点都是独生节点。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>tree</code> 中节点个数的取值范围是 <code>[1, 1000]</code>。</li>&#10;	<li><code>1 &lt;= Node.val &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>独生节点是唯一孩子。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>1000</mn>
</math></span>，DFS 时若仅有左或仅有右，把该孩子的值记下，再继续遍历。叶子与空节点直接返回。</p>
</blockquote>
<p>我们可以使用深度优先搜索遍历整棵树，设计一个函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
</math></span>，它的作用是遍历树中的每个节点，如果当前节点是独生节点，那么将其值加入答案数组中。函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">dfs</mtext>
</math></span> 的执行过程如下：</p>
<ol>
<li>如果当前节点为空，或者当前节点是叶子节点，即当前节点的左右子节点都为空，那么直接返回。</li>
<li>如果当前节点的左子节点为空，那么将当前节点的右子节点是独生节点，将其值加入答案数组中。</li>
<li>如果当前节点的右子节点为空，那么将当前节点的左子节点是独生节点，将其值加入答案数组中。</li>
<li>递归遍历当前节点的左子节点和右子节点。</li>
</ol>
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
</math></span> 是二叉树中节点的个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span> func getLonelyNodes(root *TreeNode) (ans []int) {</span></span>
<span class="line"><span>	var dfs func(*TreeNode)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode) {</span></span>
<span class="line"><span>		if root == nil || (root.Left == root.Right) {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root.Left == nil {</span></span>
<span class="line"><span>			ans = append(ans, root.Right.Val)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root.Right == nil {</span></span>
<span class="line"><span>			ans = append(ans, root.Left.Val)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left)</span></span>
<span class="line"><span>		dfs(root.Right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-all-the-lonely-nodes" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1469.Find%20All%20The%20Lonely%20Nodes/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1485" tabindex="-1">1485. 克隆含随机指针的二叉树 🔒 <a class="header-anchor" href="#q-1485" aria-label="Permalink to &quot;1485. 克隆含随机指针的二叉树 🔒 {#q-1485}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、哈希表、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二叉树，树中每个节点都含有一个附加的随机指针，该指针可以指向树中的任何节点或者指向空（<code>null</code>）。</p>&#10;&#10;<p>请返回该树的 <strong><a href="https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D/22785317?fr=aladdin" target="_blank" rel="noopener noreferrer">深拷贝</a></strong> 。</p>&#10;&#10;<p>该树的输入/输出形式与普通二叉树相同，每个节点都用 <code>[val, random_index]</code> 表示：</p>&#10;&#10;<ul>&#10;	<li><code>val</code>：表示 <code>Node.val</code> 的整数</li>&#10;	<li><code>random_index</code>：随机指针指向的节点（在输入的树数组中）的下标；如果未指向任何节点，则为 <code>null</code> 。</li>&#10;</ul>&#10;&#10;<p>该树以 <code>Node</code> 类的形式给出，而你需要以 <code>NodeCopy</code> 类的形式返回克隆得到的树。<code>NodeCopy</code> 类和<code>Node</code> 类定义一致。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1485.Clone%20Binary%20Tree%20With%20Random%20Pointer/images/clone_1.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [[1,null],null,[4,3],[7,0]]&#10;<strong>输出：</strong>[[1,null],null,[4,3],[7,0]]&#10;<strong>解释：</strong>初始二叉树为 [1,null,4,7] 。&#10;节点 1 的随机指针指向 null，所以表示为 [1, null] 。&#10;节点 4 的随机指针指向 7，所以表示为 [4, 3] 其中 3 是树数组中节点 7 对应的下标。&#10;节点 7 的随机指针指向 1，所以表示为 [7, 0] 其中 0 是树数组中节点 1 对应的下标。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1485.Clone%20Binary%20Tree%20With%20Random%20Pointer/images/clone_2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [[1,4],null,[1,0],null,[1,5],[1,5]]&#10;<strong>输出：</strong>[[1,4],null,[1,0],null,[1,5],[1,5]]&#10;<strong>解释：</strong>节点的随机指针可以指向它自身。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1485.Clone%20Binary%20Tree%20With%20Random%20Pointer/images/e2.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[7,0]]&#10;<strong>输出：</strong>[[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[7,0]]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>tree</code> 中节点数目范围是 <code>[0, 1000]</code></li>&#10;	<li>每个节点的值的范围是 <code>[1, 10^6]</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>除左右孩子外还有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">random</mtext>
</math></span>，可能指向任意已访问或未访问节点，朴素递归会在环上死循环或重复复制。</p>
<p>用哈希表记下原节点到副本的映射：先建副本并写入表，再递归左、右、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">random</mtext>
</math></span>。已复制的节点直接返回映射，保证同一原节点只生成一份。</p>
</blockquote>
<p>我们用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">seen</mtext>
</math></span> 记录原树中每个节点与其拷贝节点的对应关系，然后进行深度优先搜索。</p>
<p>定义函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span>，返回节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的拷贝。过程如下：</p>
<ul>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 为空，返回空；</li>
<li>若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 已在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">seen</mtext>
</math></span> 中，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">seen</mtext>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
</math></span>；</li>
<li>否则创建拷贝节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">copy</mtext>
</math></span>，令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">seen</mtext>
  <mo stretchy="false">[</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">copy</mtext>
</math></span>，再分别递归处理 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
</math></span> 的左子节点、右子节点和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">random</mtext>
</math></span> 指针；</li>
<li>最后返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">copy</mtext>
</math></span>。</li>
</ul>
<p>主函数返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>dfs</mtext>
  <mo stretchy="false">(</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>o</mi>
  <mi>t</mi>
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
</math></span> 是节点数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *Node</span></span>
<span class="line"><span> *     Right *Node</span></span>
<span class="line"><span> *     Random *Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func copyRandomBinaryTree(root *Node) *NodeCopy {</span></span>
<span class="line"><span>	seen := make(map[*Node]*NodeCopy)</span></span>
<span class="line"><span>	var dfs func(root *Node) *NodeCopy</span></span>
<span class="line"><span>	dfs = func(root *Node) *NodeCopy {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return nil</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v, ok := seen[root]; ok {</span></span>
<span class="line"><span>			return v</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		copy := &#x26;NodeCopy{Val: root.Val}</span></span>
<span class="line"><span>		seen[root] = copy</span></span>
<span class="line"><span>		copy.Left = dfs(root.Left)</span></span>
<span class="line"><span>		copy.Right = dfs(root.Right)</span></span>
<span class="line"><span>		copy.Random = dfs(root.Random)</span></span>
<span class="line"><span>		return copy</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(root)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/clone-binary-tree-with-random-pointer" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1485.Clone%20Binary%20Tree%20With%20Random%20Pointer/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1490" tabindex="-1">1490. 克隆 N 叉树 🔒 <a class="header-anchor" href="#q-1490" aria-label="Permalink to &quot;1490. 克隆 N 叉树 🔒 {#q-1490}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵 N 叉树的根节点 <code>root</code> ，返回该树的<a href="https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D/22785317?fr=aladdin" target="_blank" rel="noopener noreferrer"><strong>深拷贝</strong></a>（克隆）。</p>&#10;&#10;<p>N 叉树的每个节点都包含一个值（ <code>int</code> ）和子节点的列表（ <code>List[Node]</code> ）。</p>&#10;&#10;<pre>&#10;class Node {&#10;    public int val;&#10;    public List&lt;Node> children;&#10;}&#10;</pre>&#10;&#10;<p><em>N 叉树的输入序列用层序遍历表示，每组子节点用 null 分隔（见示例）。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1490.Clone%20N-ary%20Tree/images/narytreeexample.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,3,2,4,null,5,6]&#10;<strong>输出：</strong>[1,null,3,2,4,null,5,6]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1400-1499/1490.Clone%20N-ary%20Tree/images/sample_4_964.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;<strong>输出：</strong>[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>给定的 N 叉树的深度小于或等于 <code>1000</code>。</li>&#10;	<li>节点的总个数在 <code>[0, 10<sup>4</sup>]</code> 之间</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong>你的解决方案可以适用于<a href="https://leetcode.cn/problems/clone-graph/" target="_blank" rel="noopener noreferrer">克隆图</a>问题吗？</p></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>N 叉树无随机指针，深拷贝即复制结点值并递归复制全部孩子。结点至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，一次遍历即可。空结点返回空。</p>
</blockquote>
<p>我们可以用递归的方法来实现 N 叉树的深拷贝。</p>
<p>对于当前节点，如果为空，则返回空；否则，创建一个新节点，其值为当前节点的值，然后对当前节点的每个子节点递归调用该函数，将返回值作为新节点的子节点。最后返回新节点即可。</p>
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
</math></span> 为 N 叉树的节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func cloneTree(root *Node) *Node {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	children := []*Node{}</span></span>
<span class="line"><span>	for _, child := range root.Children {</span></span>
<span class="line"><span>		children = append(children, cloneTree(child))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &#x26;Node{root.Val, children}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/clone-n-ary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1400-1499/1490.Clone%20N-ary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1506" tabindex="-1">1506. 找到 N 叉树的根节点 🔒 <a class="header-anchor" href="#q-1506" aria-label="Permalink to &quot;1506. 找到 N 叉树的根节点 🔒 {#q-1506}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：位运算、树、深度优先搜索、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵 <a href="https://leetcode.cn/explore/learn/card/n-ary-tree/" target="_blank" rel="noopener noreferrer">N 叉树</a> 的所有节点在一个数组  <code>Node[] tree</code> 中，树中每个节点都有 <strong>唯一的值</strong> 。</p>&#10;&#10;<p>找到并返回 N 叉树的 <strong>根节点 </strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>自定义测试：</strong></p>&#10;&#10;<p><em>N 叉树的输入序列为其层序遍历序列，每组子节点用 null 分隔（见示例）。</em></p>&#10;&#10;<p><em><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1506.Find%20Root%20of%20N-Ary%20Tree/images/sample_4_964.png" loading="lazy"></em></p>&#10;&#10;<p>上图中的 N 叉树的序列化描述为 <code>[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</code> 。</p>&#10;&#10;<p><strong>测试将以下列方式进行：</strong></p>&#10;&#10;<ul>&#10;	<li>输入数据的形式为树的序列化描述。</li>&#10;	<li>驱动程序代码将根据序列化的输入数据构造树，并以任意顺序将每个 <code>Node</code> 对象放入一个数组中。</li>&#10;	<li>驱动程序代码将把数组传递给 <code>findRoot</code> ，你所编写的函数应该在数组中查找并返回根 <code>Node</code> 对象。</li>&#10;	<li>驱动程序代码将接受返回的 <code>Node</code> 对象并对其进行序列化。如果序列化的结果和输入数据 <strong>相同</strong> ，则测试 <strong>通过</strong> 。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1506.Find%20Root%20of%20N-Ary%20Tree/images/narytreeexample.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tree = [1,null,3,2,4,null,5,6]&#10;<strong>输出：</strong>[1,null,3,2,4,null,5,6]&#10;<strong>解释：</strong>来自输入数据的树如上所示。&#10;驱动程序代码创建树，并以任意顺序向 findRoot 提供 Node 对象。&#10;例如，传递的数组可以是 [Node(5),Node(4),Node(3),Node(6),Node(2),Node(1)] 或 [Node(2),Node(6),Node(1),Node(3),Node(5),Node(4)] 。&#10;findRoot 函数应该返回根 Node(1) ，驱动程序代码将序列化它并与输入数据进行比较。&#10;输入数据和序列化的 Node(1) 相同，因此测试通过。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1506.Find%20Root%20of%20N-Ary%20Tree/images/sample_4_964.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tree = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;<strong>输出：</strong>[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>节点的总个数在 <code>[1, 5*10^4]</code> 之间。</li>&#10;	<li>每个节点都有唯一的值。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>进阶：</strong></p>&#10;&#10;<ul>&#10;	<li>你可以使用 O(1) 额外内存空间且 O(n) 时间复杂度的算法来找到该树的根节点吗？</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：位运算 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>给定一棵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>N</mi>
</math></span> 叉树的全部节点，求根。根在列表中只出现一次，其余节点还会作为某个父亲的孩子再出现一次。用哈希表记录所有孩子后，列表中未出现在孩子集合里的节点即为根，但需要额外线性空间。</p>
<p>每个非根值出现偶数次、根值出现奇数次，异或恰好消去成对出现的值。遍历每个节点及其孩子，将全部值异或到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，再在列表中找回值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的节点即可，额外空间为常数。</p>
</blockquote>
<p>对于一棵 N 叉树的节点，如果该节点是根节点，那么该节点只会出现一次在数组 <code v-pre>tree</code> 中；而如果该节点不是根节点，那么该节点会出现两次，一次在数组 <code v-pre>tree</code> 中，一次在该节点的父节点的 <code v-pre>children</code> 数组中。</p>
<p>因此，我们可以遍历数组 <code v-pre>tree</code>，计算每个节点的值以及其所有子节点的值的异或和，记录在变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 中。遍历结束后，我们得到的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 就是根节点的值。</p>
<p>接下来，我们再遍历数组 <code v-pre>tree</code>，找到值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的节点，即为根节点，返回即可。</p>
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
</math></span> 为数组 <code v-pre>tree</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findRoot(tree []*Node) *Node {</span></span>
<span class="line"><span>	x := 0</span></span>
<span class="line"><span>	for _, node := range tree {</span></span>
<span class="line"><span>		x ^= node.Val</span></span>
<span class="line"><span>		for _, child := range node.Children {</span></span>
<span class="line"><span>			x ^= child.Val</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; ; i++ {</span></span>
<span class="line"><span>		if tree[i].Val == x {</span></span>
<span class="line"><span>			return tree[i]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-root-of-n-ary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1506.Find%20Root%20of%20N-Ary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1516" tabindex="-1">1516. 移动 N 叉树的子树 🔒 <a class="header-anchor" href="#q-1516" aria-label="Permalink to &quot;1516. 移动 N 叉树的子树 🔒 {#q-1516}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵没有重复值的 <span>N 叉树</span> 的根节点 <code>root</code> ，以及其中的两个节点 <code>p</code> 和 <code>q</code>。</p>&#10;&#10;<p>移动节点 <code>p</code> 及其子树，使节点 <code>p</code> 成为节点 <code>q</code> 的直接子节点。如果 <code>p</code> 已经是 <code>q</code> 的直接子节点，则请勿改动任何节点。节点 <code>p</code> <strong>必须</strong>是节点 <code>q</code> 的子节点列表的最后一项。</p>&#10;&#10;<p>返回改动后的<em>树的根节点</em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p>节点 <code>p</code> 和 <code>q</code> 可能是下列三种情况之一：</p>&#10;&#10;<ol>&#10;	<li>节点 <code>q</code> 在节点 <code>p</code> 的子树中。</li>&#10;	<li>节点 <code>p</code> 在节点 <code>q</code> 的子树中。</li>&#10;	<li>节点 <code>p</code> 不在节点 <code>q</code> 的子树中，且节点 <code>q</code> 也不在节点 <code>p</code> 的子树中。</li>&#10;</ol>&#10;&#10;<p>在第 2 种和第 3 种情况中，你只需要移动 <code>p</code> （及其子树），使 <code>p</code> 成为 <code>q</code> 的子节点。但是在第 1 种情况中，树的节点可能会断连，因此你还需要重新连接这些节点。<strong>请在解题前仔细阅读示例。</strong></p>&#10;&#10;<p> </p>&#10;&#10;<p><em>N 叉树的输入序列以层序遍历的形式给出，每组子节点用 null 分隔（见示例）。</em></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/images/sample_4_964.png" loading="lazy"></p>&#10;&#10;<p>例如，上面的树会被序列化为 [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/images/move_e1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1,null,2,3,null,4,5,null,6,null,7,8], p = 4, q = 1&#10;<strong>输出:</strong> [1,null,2,3,4,null,5,null,6,null,7,8]&#10;<strong>解释:</strong> 该示例属于第二种情况，节点 p 在节点 q 的子树中。我们可以移动节点 p 及其子树，使 p 成为节点 q 的直接子节点。&#10;注意，节点 4 是节点 1 的最后一个子节点。</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/images/move_e2.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1,null,2,3,null,4,5,null,6,null,7,8], p = 7, q = 4&#10;<strong>输出:</strong> [1,null,2,3,null,4,5,null,6,null,7,8]&#10;<strong>解释:</strong> 节点 7 已经是节点 4 的直接子节点，因此我们不改动任何节点。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/images/move_e3.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1,null,2,3,null,4,5,null,6,null,7,8], p = 3, q = 8&#10;<strong>输出:</strong> [1,null,2,null,4,5,null,7,8,null,null,null,3,null,6]&#10;<strong>解释:</strong> 该示例属于第三种情况，节点 p 不在节点 q 的子树中，反之亦然。我们可以移动节点 3 及其子树，使之成为节点 8 的子节点。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/images/untitled-diagramdrawio.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,2,3,null,4], p = 1, q = 4&#10;<b>输出：</b>[4,null,1,null,2,3]&#10;<strong>解释：</strong>该示例属于第一种情况，因为节点 q 在节点 p 的子树中。断开节点 4 与其父节点，并将节点 1 及其子树移动，使其成为节点 4 的子节点。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>节点的总数在 <code>[2, 1000]</code> 间。</li>&#10;	<li>每个节点都有 <strong>唯一 </strong>的值。</li>&#10;	<li><code>p != null</code></li>&#10;	<li><code>q != null</code></li>&#10;	<li><code>p</code> 和 <code>q</code> 是两个不同的节点（即 <code>p != q</code> ）。</li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>根据题意整理</strong>：本地 Doocs 实现围栏为空，按题意及其祖先关系提示实现。给 root 加一个只用于操作的虚拟父节点，遍历建立 parent 映射。若 p 已经是 q 的直接孩子，原样返回，不改变孩子顺序。否则沿 q 的父链判断其是否在 p 子树内：若不在，摘下 p 后追加到 q；若在，先从原父节点摘下 q，用 q 替换 p 在原父节点中的位置，再把 p 追加到 q 的孩子末尾。这一步既避免环，也保留所有其他孩子的相对顺序；虚拟父节点统一处理 p 为根时返回 q。</p>
<p><strong>变量与复杂度</strong>：N 为节点数，parent 为父指针映射，dummy 为虚拟父节点，descendant 表示 q 是否属于 p 子树。遍历、父链检查及孩子切片移动总时间 O(N)，辅助空间 O(N)，满足 N≤1000。</p>
<p><strong>平台接口</strong>：moveSubTree(root, p, q *Node) *Node；平台 Node 含 Val int、Children []*Node，类型仅在 testCode 定义。题意要求就地调整已有节点，返回节点身份与原树一致；不以节点值代替指针定位。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func moveSubTree(root, p, q *Node) *Node {</span></span>
<span class="line"><span>	dummy := &#x26;Node{Children: []*Node{root}}</span></span>
<span class="line"><span>	parent := map[*Node]*Node{root: dummy}</span></span>
<span class="line"><span>	stack := []*Node{root}</span></span>
<span class="line"><span>	for len(stack) > 0 {</span></span>
<span class="line"><span>		node := stack[len(stack)-1]</span></span>
<span class="line"><span>		stack = stack[:len(stack)-1]</span></span>
<span class="line"><span>		for _, child := range node.Children {</span></span>
<span class="line"><span>			parent[child] = node</span></span>
<span class="line"><span>			stack = append(stack, child)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if parent[p] == q {</span></span>
<span class="line"><span>		return root</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	descendant := false</span></span>
<span class="line"><span>	for node := q; node != dummy; node = parent[node] {</span></span>
<span class="line"><span>		if node == p {</span></span>
<span class="line"><span>			descendant = true</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	remove := func(par, child *Node) {</span></span>
<span class="line"><span>		for i, c := range par.Children {</span></span>
<span class="line"><span>			if c == child {</span></span>
<span class="line"><span>				copy(par.Children[i:], par.Children[i+1:])</span></span>
<span class="line"><span>				par.Children[len(par.Children)-1] = nil</span></span>
<span class="line"><span>				par.Children = par.Children[:len(par.Children)-1]</span></span>
<span class="line"><span>				return</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if descendant {</span></span>
<span class="line"><span>		remove(parent[q], q)</span></span>
<span class="line"><span>		for i, child := range parent[p].Children {</span></span>
<span class="line"><span>			if child == p {</span></span>
<span class="line"><span>				parent[p].Children[i] = q</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		remove(parent[p], p)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q.Children = append(q.Children, p)</span></span>
<span class="line"><span>	return dummy.Children[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/move-sub-tree-of-n-ary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1516.Move%20Sub-Tree%20of%20N-Ary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1519" tabindex="-1">1519. 子树中标签相同的节点数 <a class="header-anchor" href="#q-1519" aria-label="Permalink to &quot;1519. 子树中标签相同的节点数 {#q-1519}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、广度优先搜索、哈希表、计数、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一棵树（即，一个连通的无环无向图），这棵树由编号从 <code>0</code>  到 <code>n - 1</code> 的 n 个节点组成，且恰好有 <code>n - 1</code> 条 <code>edges</code> 。树的根节点为节点 <code>0</code> ，树上的每一个节点都有一个标签，也就是字符串 <code>labels</code> 中的一个小写字符（编号为 <code>i</code> 的 节点的标签就是 <code>labels[i]</code> ）</p>&#10;&#10;<p>边数组 <code>edges</code> 以 <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> 的形式给出，该格式表示节点 <code>a<sub>i</sub></code> 和 <code>b<sub>i</sub></code> 之间存在一条边。</p>&#10;&#10;<p>返回一个大小为 <em><code>n</code></em> 的数组，其中 <code>ans[i]</code> 表示第 <code>i</code> 个节点的子树中与节点 <code>i</code> 标签相同的节点数。</p>&#10;&#10;<p>树 <code>T</code> 中的子树是由 <code>T</code> 中的某个节点及其所有后代节点组成的树。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1519.Number%20of%20Nodes%20in%20the%20Sub-Tree%20With%20the%20Same%20Label/images/q3e1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = &quot;abaedcd&quot;&#10;<strong>输出：</strong>[2,1,1,1,1,1,1]&#10;<strong>解释：</strong>节点 0 的标签为 'a' ，以 'a' 为根节点的子树中，节点 2 的标签也是 'a' ，因此答案为 2 。注意树中的每个节点都是这棵子树的一部分。&#10;节点 1 的标签为 'b' ，节点 1 的子树包含节点 1、4 和 5，但是节点 4、5 的标签与节点 1 不同，故而答案为 1（即，该节点本身）。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1519.Number%20of%20Nodes%20in%20the%20Sub-Tree%20With%20the%20Same%20Label/images/q3e2.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 4, edges = [[0,1],[1,2],[0,3]], labels = &quot;bbbb&quot;&#10;<strong>输出：</strong>[4,2,1,1]&#10;<strong>解释：</strong>节点 2 的子树中只有节点 2 ，所以答案为 1 。&#10;节点 3 的子树中只有节点 3 ，所以答案为 1 。&#10;节点 1 的子树中包含节点 1 和 2 ，标签都是 'b' ，因此答案为 2 。&#10;节点 0 的子树中包含节点 0、1、2 和 3，标签都是 'b'，因此答案为 4 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1519.Number%20of%20Nodes%20in%20the%20Sub-Tree%20With%20the%20Same%20Label/images/q3e3.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = &quot;aabab&quot;&#10;<strong>输出：</strong>[3,2,1,1,1]&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 10^5</code></li>&#10;	<li><code>edges.length == n - 1</code></li>&#10;	<li><code>edges[i].length == 2</code></li>&#10;	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; n</code></li>&#10;	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>&#10;	<li><code>labels.length == n</code></li>&#10;	<li><code>labels</code> 仅由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个节点统计其树中与自身标签相同的节点数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，若对每个节点单独再遍历子树，总时间平方级。标签只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 种，适合在一次深度优先中维护全局计数。</p>
<p>进入节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 前记下标签 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的当前出现次数，离开时再读一次，两者之差便是该子树内该标签的出现次数。先减后加的写法把「进入快照」存在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 里，回溯后加上最新计数即可，额外空间仅为字母表大小。</p>
</blockquote>
<p>我们先将边数组转换为邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>。</p>
<p>接下来我们从根节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 开始遍历其子树，过程中维护一个计数器 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，用于统计当前各个字母出现的次数。</p>
<p>在访问某个节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时，我们先将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>，然后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，表示当前节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的标签出现了一次。接下来递归访问其子节点，最后将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>。也即是说，我们将每个点离开时的计数器值减去每个点进来时的计数器值，就得到了以该点为根的子树中各个字母出现的次数。</p>
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
</math></span> 为节点数；而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
</math></span> 为字符集大小，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>C</mi>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countSubTrees(n int, edges [][]int, labels string) []int {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	var dfs func(int, int)</span></span>
<span class="line"><span>	dfs = func(i, fa int) {</span></span>
<span class="line"><span>		k := labels[i] - 'a'</span></span>
<span class="line"><span>		ans[i] -= cnt[k]</span></span>
<span class="line"><span>		cnt[k]++</span></span>
<span class="line"><span>		for _, j := range g[i] {</span></span>
<span class="line"><span>			if j != fa {</span></span>
<span class="line"><span>				dfs(j, i)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans[i] += cnt[k]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(0, -1)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个节点统计其子树中与自身标签相同的节点数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，对每个节点再单独遍历子树是平方时间。一条链上第一次递归总是走向唯一的孩子，深度就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，会超出默认递归上限。</p>
<p>标签只有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 种。进入节点时该标签计数的增量，到离开时正好覆盖整棵子树。</p>
<p>因此用显式栈做后序。进入时先把当前计数从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 中减去，计数加一，再压入离开标记和子节点。离开时把最新计数加回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，差值就是子树内该标签的出现次数。</p>
</blockquote>
<p>我们先将边数组转换为邻接表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
</math></span>。</p>
<p>用显式栈从根节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 遍历，并维护计数器 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>。进入节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 时，先将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span>，再把该标签的计数加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，然后压入离开标记和子节点，这样子节点会先处理完。离开时把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mi>a</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 加回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。两次计数之差就是以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 为根的子树中该标签的出现次数。</p>
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
</math></span> 为节点数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func countSubTrees(n int, edges [][]int, labels string) []int {</span></span>
<span class="line"><span>	g := make([][]int, n)</span></span>
<span class="line"><span>	for _, e := range edges {</span></span>
<span class="line"><span>		a, b := e[0], e[1]</span></span>
<span class="line"><span>		g[a] = append(g[a], b)</span></span>
<span class="line"><span>		g[b] = append(g[b], a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int, n)</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	stk := [][3]int{{0, -1, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		cur := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		i, fa, state := cur[0], cur[1], cur[2]</span></span>
<span class="line"><span>		k := labels[i] - 'a'</span></span>
<span class="line"><span>		if state == 0 {</span></span>
<span class="line"><span>			ans[i] -= cnt[k]</span></span>
<span class="line"><span>			cnt[k]++</span></span>
<span class="line"><span>			stk = append(stk, [3]int{i, fa, 1})</span></span>
<span class="line"><span>			for _, j := range g[i] {</span></span>
<span class="line"><span>				if j != fa {</span></span>
<span class="line"><span>					stk = append(stk, [3]int{j, i, 0})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans[i] += cnt[k]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-nodes-in-the-sub-tree-with-the-same-label" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1519.Number%20of%20Nodes%20in%20the%20Sub-Tree%20With%20the%20Same%20Label/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1522" tabindex="-1">1522. N 叉树的直径 🔒 <a class="header-anchor" href="#q-1522" aria-label="Permalink to &quot;1522. N 叉树的直径 🔒 {#q-1522}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>4 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵 <code>N 叉树</code> 的根节点 <code>root</code> ，计算这棵树的直径长度。</p>&#10;&#10;<p>N 叉树的直径指的是树中任意两个节点间路径中<strong> 最长 </strong>路径的长度。这条路径可能经过根节点，也可能不经过根节点。</p>&#10;&#10;<p><em>（N 叉树的输入序列以层序遍历的形式给出，每组子节点用 null 分隔）</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1522.Diameter%20of%20N-Ary%20Tree/images/sample_2_1897.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,3,2,4,null,5,6]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>直径如图中红线所示。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1522.Diameter%20of%20N-Ary%20Tree/images/sample_1_1897.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,null,2,null,3,4,null,5,null,6]&#10;<strong>输出：</strong>4&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1522.Diameter%20of%20N-Ary%20Tree/images/sample_3_1897.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]&#10;<strong>输出:</strong> 7&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>N 叉树的深度小于或等于 <code>1000</code> 。</li>&#10;	<li>节点的总个数在 <code>[0, 10^4]</code> 间。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：DFS（后序求直径） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>N</mi>
</math></span> 叉树直径，即最远两点的距离。树的规模可达数千，两次任意遍历若实现不当会重复走边。直径必经过某节点的两条最深子树路径。</p>
<p>后序 DFS 对每个节点收集子节点高度，用最大的两个高度之和更新全局直径，并返回该节点高度。一次遍历同时得到所有候选，无需建额外图。</p>
</blockquote>
<p>后序遍历每个节点，记录两棵最深子树的高度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span> 更新直径。子树高度为最深孩子高度加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
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
</math></span> 为节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func diameter(root *Node) int {</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	var dfs func(root *Node) int</span></span>
<span class="line"><span>	dfs = func(root *Node) int {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		m1, m2 := 0, 0</span></span>
<span class="line"><span>		for _, child := range root.Children {</span></span>
<span class="line"><span>			t := dfs(child)</span></span>
<span class="line"><span>			if t > m1 {</span></span>
<span class="line"><span>				m2, m1 = m1, t</span></span>
<span class="line"><span>			} else if t > m2 {</span></span>
<span class="line"><span>				m2 = t</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, m1+m2)</span></span>
<span class="line"><span>		return 1 + m1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：建图 + 两次 DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一把直径计算耦合在树形递归里，若输入只保证邻接关系、或希望复用一般图的直径算法，则不够直接。先把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>N</mi>
</math></span> 叉树展开为无向图，任选一点找最远点，再从该点找最远点，第二次距离即为直径。两次 DFS 与树形 DP 渐近相同，只是换了一种实现。</p>
</blockquote>
<p>把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>N</mi>
</math></span> 叉树建成无向图，从任意节点 DFS 找到最远点，再从该点 DFS 一次，两次搜索得到的最远距离即为树的直径。</p>
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
</math></span> 为节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func diameter(root *Node) int {</span></span>
<span class="line"><span>	g := make(map[*Node][]*Node)</span></span>
<span class="line"><span>	vis := make(map[*Node]bool)</span></span>
<span class="line"><span>	next := root</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	var build func(root *Node)</span></span>
<span class="line"><span>	build = func(root *Node) {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for _, child := range root.Children {</span></span>
<span class="line"><span>			g[root] = append(g[root], child)</span></span>
<span class="line"><span>			g[child] = append(g[child], root)</span></span>
<span class="line"><span>			build(child)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	build(root)</span></span>
<span class="line"><span>	var dfs func(u *Node, t int)</span></span>
<span class="line"><span>	dfs = func(u *Node, t int) {</span></span>
<span class="line"><span>		if vis[u] {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis[u] = true</span></span>
<span class="line"><span>		if t > ans {</span></span>
<span class="line"><span>			ans = t</span></span>
<span class="line"><span>			next = u</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if vs, ok := g[u]; ok {</span></span>
<span class="line"><span>			for _, v := range vs {</span></span>
<span class="line"><span>				dfs(v, t+1)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(next, 0)</span></span>
<span class="line"><span>	vis = make(map[*Node]bool)</span></span>
<span class="line"><span>	dfs(next, 0)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法三：显式栈（后序求直径） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>求 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>N</mi>
</math></span> 叉树直径，即任意两点间的最长路径长度。深度可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>，沿一条单孩子链做后序递归时，调用深度等于节点数，链长达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span> 就会超出 Python 的递归上限。每个节点只依赖孩子已经算完的高度：用最大的两个孩子高度之和更新直径，自身高度是最深孩子高度加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。因此用栈保存节点和状态。状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 先压入结束标记再压入孩子，孩子先完成；状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 读取孩子高度，更新直径，并记下当前节点的高度。</p>
</blockquote>
<p>从根开始做后序遍历。栈里存放节点和状态。状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 时，把同一节点以状态 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 压回，再把非空孩子压入。状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 时，孩子高度都已写入表中，取出最大的两个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span>，用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>m</mi>
    <mn>2</mn>
  </msub>
</math></span> 更新直径，并把当前高度记为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>m</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。根为空时直径为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span> 为节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func diameter(root *Node) int {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	type frame struct {</span></span>
<span class="line"><span>		node  *Node</span></span>
<span class="line"><span>		state int</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	height := map[*Node]int{}</span></span>
<span class="line"><span>	stk := []frame{{root, 0}}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		f := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		if f.state == 0 {</span></span>
<span class="line"><span>			stk = append(stk, frame{f.node, 1})</span></span>
<span class="line"><span>			children := f.node.Children</span></span>
<span class="line"><span>			for i := len(children) - 1; i >= 0; i-- {</span></span>
<span class="line"><span>				if children[i] != nil {</span></span>
<span class="line"><span>					stk = append(stk, frame{children[i], 0})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			m1, m2 := 0, 0</span></span>
<span class="line"><span>			for _, child := range f.node.Children {</span></span>
<span class="line"><span>				t := height[child]</span></span>
<span class="line"><span>				if t > m1 {</span></span>
<span class="line"><span>					m2, m1 = m1, t</span></span>
<span class="line"><span>				} else if t > m2 {</span></span>
<span class="line"><span>					m2 = t</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans = max(ans, m1+m2)</span></span>
<span class="line"><span>			height[f.node] = m1 + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法四：建图 + 两次显式栈 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一已经在树上用孩子高度求出直径。若希望沿用一般树的两次最远点搜索，需要先把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>N</mi>
</math></span> 叉树展开成无向图。建图和两次搜索若沿链递归，深度同样达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1000</mn>
</math></span>。建图用栈按父子边连成无向边，搜索时在压栈时标记，避免从无向边走回父亲。第一次从根走到最远点，第二次从该点再走到最远点，第二次的距离就是直径。</p>
</blockquote>
<p>先用栈遍历整棵树，把每条父子边写成两条无向边。然后做两次显式栈搜索：从起点出发，弹出节点时用当前距离更新最远点，并把尚未访问的邻居连同距离加一压入栈。第一次起点是根，第二次起点是第一次得到的最远点。第二次的最远距离即为直径。</p>
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
</math></span> 为节点个数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a Node.</span></span>
<span class="line"><span> * type Node struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Children []*Node</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func diameter(root *Node) int {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	g := map[*Node][]*Node{}</span></span>
<span class="line"><span>	seen := map[*Node]bool{root: true}</span></span>
<span class="line"><span>	stk := []*Node{root}</span></span>
<span class="line"><span>	for len(stk) > 0 {</span></span>
<span class="line"><span>		u := stk[len(stk)-1]</span></span>
<span class="line"><span>		stk = stk[:len(stk)-1]</span></span>
<span class="line"><span>		for _, child := range u.Children {</span></span>
<span class="line"><span>			if child == nil || seen[child] {</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			seen[child] = true</span></span>
<span class="line"><span>			g[u] = append(g[u], child)</span></span>
<span class="line"><span>			g[child] = append(g[child], u)</span></span>
<span class="line"><span>			stk = append(stk, child)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	farthest := func(start *Node) (int, *Node) {</span></span>
<span class="line"><span>		type frame struct {</span></span>
<span class="line"><span>			node *Node</span></span>
<span class="line"><span>			dist int</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		vis := map[*Node]bool{start: true}</span></span>
<span class="line"><span>		walk := []frame{{start, 0}}</span></span>
<span class="line"><span>		best, node := 0, start</span></span>
<span class="line"><span>		for len(walk) > 0 {</span></span>
<span class="line"><span>			f := walk[len(walk)-1]</span></span>
<span class="line"><span>			walk = walk[:len(walk)-1]</span></span>
<span class="line"><span>			if f.dist > best {</span></span>
<span class="line"><span>				best, node = f.dist, f.node</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			for _, v := range g[f.node] {</span></span>
<span class="line"><span>				if !vis[v] {</span></span>
<span class="line"><span>					vis[v] = true</span></span>
<span class="line"><span>					walk = append(walk, frame{v, f.dist + 1})</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return best, node</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	_, nxt := farthest(root)</span></span>
<span class="line"><span>	ans, _ := farthest(nxt)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/diameter-of-n-ary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1522.Diameter%20of%20N-Ary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1530" tabindex="-1">1530. 好叶子节点对的数量 <a class="header-anchor" href="#q-1530" aria-label="Permalink to &quot;1530. 好叶子节点对的数量 {#q-1530}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、二叉树、树形 DP</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你二叉树的根节点 <code>root</code> 和一个整数 <code>distance</code> 。</p>&#10;&#10;<p>如果二叉树中两个 <strong>叶</strong> 节点之间的 <strong>最短路径长度</strong> 小于或者等于 <code>distance</code> ，那它们就可以构成一组 <strong>好叶子节点对</strong> 。</p>&#10;&#10;<p>返回树中 <strong>好叶子节点对的数量</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p> </p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1530.Number%20of%20Good%20Leaf%20Nodes%20Pairs/images/e1.jpg" loading="lazy"></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,2,3,null,4], distance = 3&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>树的叶节点是 3 和 4 ，它们之间的最短路径的长度是 3 。这是唯一的好叶子节点对。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1530.Number%20of%20Good%20Leaf%20Nodes%20Pairs/images/e2.jpg" loading="lazy"></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,2,3,4,5,6,7], distance = 3&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>好叶子节点对为 [4,5] 和 [6,7] ，最短路径长度都是 2 。但是叶子节点对 [4,6] 不满足要求，因为它们之间的最短路径长度为 4 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>唯一的好叶子节点对是 [2,5] 。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [100], distance = 1&#10;<strong>输出：</strong>0&#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<pre><strong>输入：</strong>root = [1,1,1], distance = 2&#10;<strong>输出：</strong>1&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>tree</code> 的节点数在 <code>[1, 2^10]</code> 范围内。</li>&#10;	<li>每个节点的值都在 <code>[1, 100]</code> 之间。</li>&#10;	<li><code>1 &lt;= distance &lt;= 10</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：递归 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>统计叶到叶距离不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>c</mi>
  <mi>e</mi>
</math></span> 的对数。若对每对叶子求 LCA，叶子数平方再乘树高，在最坏链状树上偏大。一对好叶子要么同在一侧子树，要么分属左右子树。</p>
<p>答案拆成左子树内部、右子树内部、以及跨越根的三部分。跨越部分只需左右两侧「到当前根距离为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>」的叶子计数，对距离之和不超过限制的桶做乘积。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>c</mi>
  <mi>e</mi>
  <mo>&#x2264;</mo>
  <mn>10</mn>
</math></span>，桶很小，递归统计即可。</p>
</blockquote>
<p>题目求一个二叉树好叶子节点的对数，答案可以拆分为三部分之和：左子树好叶子节点的对数、右子树好叶子节点的对数，以及左子树叶子节点与右子树叶子节点组成的好叶子节点的对数。</p>
<p>递归求解即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <msup>
    <mi>d</mi>
    <mn>2</mn>
  </msup>
  <mo>&#xD7;</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是二叉树的节点数，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 分别是二叉树的高度和距离限制。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>h</mi>
  <mo stretchy="false">)</mo>
</math></span>，为递归栈空间。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Definition for a binary tree node.</span></span>
<span class="line"><span> * type TreeNode struct {</span></span>
<span class="line"><span> *     Val int</span></span>
<span class="line"><span> *     Left *TreeNode</span></span>
<span class="line"><span> *     Right *TreeNode</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>func countPairs(root *TreeNode, distance int) int {</span></span>
<span class="line"><span>	if root == nil {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := countPairs(root.Left, distance) + countPairs(root.Right, distance)</span></span>
<span class="line"><span>	cnt1 := make([]int, distance)</span></span>
<span class="line"><span>	cnt2 := make([]int, distance)</span></span>
<span class="line"><span>	dfs(root.Left, cnt1, 1)</span></span>
<span class="line"><span>	dfs(root.Right, cnt2, 1)</span></span>
<span class="line"><span>	for i, v1 := range cnt1 {</span></span>
<span class="line"><span>		for j, v2 := range cnt2 {</span></span>
<span class="line"><span>			if i+j &#x3C;= distance {</span></span>
<span class="line"><span>				ans += v1 * v2</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func dfs(root *TreeNode, cnt []int, i int) {</span></span>
<span class="line"><span>	if root == nil || i >= len(cnt) {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if root.Left == nil &#x26;&#x26; root.Right == nil {</span></span>
<span class="line"><span>		cnt[i]++</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root.Left, cnt, i+1)</span></span>
<span class="line"><span>	dfs(root.Right, cnt, i+1)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/number-of-good-leaf-nodes-pairs" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1530.Number%20of%20Good%20Leaf%20Nodes%20Pairs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1597" tabindex="-1">1597. 根据中缀表达式构造二叉表达式树 🔒 <a class="header-anchor" href="#q-1597" aria-label="Permalink to &quot;1597. 根据中缀表达式构造二叉表达式树 🔒 {#q-1597}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、树、字符串、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><strong>二叉表达式树</strong> 是一种表达算术表达式的二叉树。二叉表达式树中的每一个节点都有零个或两个子节点。 叶节点（有 0 个子节点的节点）表示操作数，非叶节点（有 2 个子节点的节点）表示运算符： <code>'+'</code> （加）、 <code>'-'</code> （减）、 <code>'*'</code> （乘）和 <code>'/'</code> （除）。</p>&#10;&#10;<p>对于每一个运算符为 <code>o</code> 的非叶节点，对应的<strong> <a href="http://baike.baidu.com/item/%E4%B8%AD%E7%BC%80%E8%A1%A8%E8%BE%BE%E5%BC%8F/2725244?fr=aladdin" target="_blank" rel="noopener noreferrer">中缀表达式</a></strong> 为 <code>(A o B)</code>，其中 <code>A</code> 是左子树所表达的表达式， <code>B</code> 是右子树所表达的表达式。</p>&#10;&#10;<p>给定一个<strong> 中缀表达式 </strong>字符串 <code>s</code>，其中包含操作数、上面提到的运算符，以及括号 <code>'('</code> 与 <code>')'</code> 。</p>&#10;&#10;<p>返回一个有效的<strong> 二叉表达式树</strong>，其 <a href="http://baike.baidu.com/item/%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86/757281?fr=aladdin" target="_blank" rel="noopener noreferrer"><strong>中序遍历</strong></a><sup> </sup>序列对应表达式 <code>s</code> 消除括号后的序列（详情参见下面的示例）<em>。</em></p>&#10;&#10;<p><strong>注意，表达式的一般解析顺序适用于 </strong><code>s</code>，即优先解析括号内的表达式，然后解析乘除法，最后解析加减法。</p>&#10;&#10;<p>同时，操作数在 <code>s</code> 和树的中序遍历中 <strong>出现顺序相同</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/images/ex1-4.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>s = &quot;3*4-2*5&quot;&#10;<strong>输出：</strong>[-,*,*,3,4,2,5]&#10;<strong>解释：</strong>上面是唯一一种有效的二叉表达式树，其中序遍历生成 s 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/images/ex1-2.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>s = &quot;2-3/(5*2)+1&quot;&#10;<strong>输出：</strong>[+,-,1,2,/,null,null,null,null,3,*,null,null,5,2]&#10;<strong>解释：</strong>上面的树的中序遍历为 2-3/5*2+1 ，与 s 消除括号后相同。该树还会生成正确的结果，其操作数的顺序与 s 中出现的顺序相同。&#10;下面的树也是一个有效的二叉表达式树，具有与 s 相同的中序遍历，但它不是一个有效的答案，因为它的求值结果不同。&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/images/ex1-1.png" loading="lazy">&#10;下面的树也是无效的。尽管它的计算结果相等并与上述树等效，但其中序遍历不会产生 s ，并且其操作数与 s 中的顺序也不相同。&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/images/ex1-3.png" loading="lazy">&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>s = &quot;1+2+3+4+5&quot;&#10;<strong>输出：</strong>[+,+,5,+,4,null,null,+,3,null,null,1,2]&#10;<strong>解释：</strong>二叉树 [+,+,5,+,+,null,null,1,2,3,4] 也是诸多有效的二叉表达式树之一。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 100</code></li>&#10;	<li><code>s</code> 中包含数字和字符 <code>'('</code>、 <code>')'</code>、<code>'+'</code>、 <code>'-'</code>、 <code>'*'</code>、 <code>'/'</code> 。</li>&#10;	<li><code>s</code> 中的操作数 <strong>恰好</strong> 是一位数字。</li>&#10;	<li>题目数据保证 <code>s</code> 是一个有效的表达式。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p>根据题意整理：源文只有双栈思考，没有非空实现。用节点栈保存操作数、运算符栈保存尚未归约的符号；遇到新运算符时先归约优先级更高或相同的栈顶，从而保证左结合。括号限定归约范围。归约时先弹右孩子、再弹左孩子。n 为字符串长度，时间 O(n)，辅助空间 O(n)。平台 Node 约定为 struct { Val byte; Left, Right *Node }，测试提供该类型；入口 expTree。</p>
<p>出处：<a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题与题解</a>，固定提交 91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011；题意、参考及本 Go 改写采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 题意与参考：Doocs LeetCode，CC BY-SA 4.0。</span></span>
<span class="line"><span>// https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/README.md</span></span>
<span class="line"><span>// Go 实现与测试沿用 CC BY-SA 4.0；来源性质见配套说明。</span></span>
<span class="line"><span>func expTree(s string) *Node {</span></span>
<span class="line"><span>	nodes := []*Node{}</span></span>
<span class="line"><span>	ops := []byte{}</span></span>
<span class="line"><span>	priority := func(c byte) int {</span></span>
<span class="line"><span>		if c == '+' || c == '-' {</span></span>
<span class="line"><span>			return 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if c == '*' || c == '/' {</span></span>
<span class="line"><span>			return 2</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	reduce := func() {</span></span>
<span class="line"><span>		n := len(nodes)</span></span>
<span class="line"><span>		r, l := nodes[n-1], nodes[n-2]</span></span>
<span class="line"><span>		op := ops[len(ops)-1]</span></span>
<span class="line"><span>		ops = ops[:len(ops)-1]</span></span>
<span class="line"><span>		nodes = append(nodes[:n-2], &#x26;Node{Val: op, Left: l, Right: r})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(s); i++ {</span></span>
<span class="line"><span>		c := s[i]</span></span>
<span class="line"><span>		switch {</span></span>
<span class="line"><span>		case c >= '0' &#x26;&#x26; c &#x3C;= '9':</span></span>
<span class="line"><span>			nodes = append(nodes, &#x26;Node{Val: c})</span></span>
<span class="line"><span>		case c == '(':</span></span>
<span class="line"><span>			ops = append(ops, c)</span></span>
<span class="line"><span>		case c == ')':</span></span>
<span class="line"><span>			for ops[len(ops)-1] != '(' {</span></span>
<span class="line"><span>				reduce()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ops = ops[:len(ops)-1]</span></span>
<span class="line"><span>		default:</span></span>
<span class="line"><span>			for len(ops) > 0 &#x26;&#x26; ops[len(ops)-1] != '(' &#x26;&#x26; priority(ops[len(ops)-1]) >= priority(c) {</span></span>
<span class="line"><span>				reduce()</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ops = append(ops, c)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for len(ops) > 0 {</span></span>
<span class="line"><span>		reduce()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nodes[0]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/build-binary-expression-tree-from-infix-expression" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1500-1599/1597.Build%20Binary%20Expression%20Tree%20From%20Infix%20Expression/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1602" tabindex="-1">1602. 找到二叉树中最近的右侧节点 🔒 <a class="header-anchor" href="#q-1602" aria-label="Permalink to &quot;1602. 找到二叉树中最近的右侧节点 🔒 {#q-1602}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一棵二叉树的根节点 <code>root</code> 和树中的一个节点 <code>u</code> ，返回与 <code>u</code> <strong>所在层</strong>中<strong>距离最近</strong>的<strong>右侧</strong>节点，当 <code>u</code> 是所在层中最右侧的节点，返回 <code>null</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1602.Find%20Nearest%20Right%20Node%20in%20Binary%20Tree/images/p3.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,2,3,null,4,5,6], u = 4&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>节点 4 所在层中，最近的右侧节点是节点 5。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1602.Find%20Nearest%20Right%20Node%20in%20Binary%20Tree/images/p2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [3,null,4,2], u = 2&#10;<strong>输出：</strong>null&#10;<strong>解释：</strong>2 的右侧没有节点。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1], u = 1&#10;<strong>输出：</strong>null&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [3,4,2,null,null,null,1], u = 4&#10;<strong>输出：</strong>2&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点个数的范围是 <code>[1, 10<sup>5</sup>]</code> 。</li>&#10;	<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>&#10;	<li>树中所有节点的值是<strong>唯一</strong>的。</li>&#10;	<li><code>u</code> 是以 <code>root</code> 为根的二叉树的一个节点。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>所求是与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 同层且紧邻其右侧的结点。若先求出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 的深度再扫描整层，需要两次遍历或额外存储各层结点。</p>
<p>层序遍历本身按从左到右给出同一层的相邻关系：当队列中弹出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 时，若本层尚未结束，队首即为右邻。</p>
<p>为此用 BFS，按层弹出；发现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 后根据本层剩余结点数决定返回队首或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">null</mtext>
</math></span>。</p>
</blockquote>
<p>我们可以使用广度优先搜索，从根节点开始搜索，当搜索到节点 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 时，返回队列中的下一个节点。</p>
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
<span class="line"><span>func findNearestRightNode(root *TreeNode, u *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	q := []*TreeNode{root}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		for i := len(q); i > 0; i-- {</span></span>
<span class="line"><span>			root = q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			if root == u {</span></span>
<span class="line"><span>				if i > 1 {</span></span>
<span class="line"><span>					return q[0]</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				return nil</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if root.Left != nil {</span></span>
<span class="line"><span>				q = append(q, root.Left)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if root.Right != nil {</span></span>
<span class="line"><span>				q = append(q, root.Right)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一依赖队列保存整层，空间随宽度增长。先序 DFS 按「左子再右子」访问同层结点，顺序与从左到右一致。</p>
<p>因此首次遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 时记下深度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>，之后第一个同深度结点即为右邻，可用递归实现且不必显式分层。</p>
</blockquote>
<p>DFS 先序遍历二叉树，首次搜索到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>u</mi>
</math></span> 时，标记目前层数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>，下次遇到同一层的节点时，即为目标节点。</p>
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
<span class="line"><span>func findNearestRightNode(root *TreeNode, u *TreeNode) *TreeNode {</span></span>
<span class="line"><span>	d := 0</span></span>
<span class="line"><span>	var ans *TreeNode</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int)</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, i int) {</span></span>
<span class="line"><span>		if root == nil || ans != nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if d == i {</span></span>
<span class="line"><span>			ans = root</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if root == u {</span></span>
<span class="line"><span>			d = i</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		dfs(root.Left, i+1)</span></span>
<span class="line"><span>		dfs(root.Right, i+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	dfs(root, 1)</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-nearest-right-node-in-binary-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1602.Find%20Nearest%20Right%20Node%20in%20Binary%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1609" tabindex="-1">1609. 奇偶树 <a class="header-anchor" href="#q-1609" aria-label="Permalink to &quot;1609. 奇偶树 {#q-1609}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、广度优先搜索、二叉树</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>如果一棵二叉树满足下述几个条件，则可以称为 <strong>奇偶树</strong> ：</p>&#10;&#10;<ul>&#10;	<li>二叉树根节点所在层下标为 <code>0</code> ，根的子节点所在层下标为 <code>1</code> ，根的孙节点所在层下标为 <code>2</code> ，依此类推。</li>&#10;	<li><strong>偶数下标</strong> 层上的所有节点的值都是 <strong>奇</strong> 整数，从左到右按顺序 <strong>严格递增</strong></li>&#10;	<li><strong>奇数下标</strong> 层上的所有节点的值都是 <strong>偶</strong> 整数，从左到右按顺序 <strong>严格递减</strong></li>&#10;</ul>&#10;&#10;<p>给你二叉树的根节点，如果二叉树为 <strong>奇偶树 </strong>，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1609.Even%20Odd%20Tree/images/sample_1_1966.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1,10,4,3,null,7,9,12,8,6,null,null,2]&#10;<strong>输出：</strong>true&#10;<strong>解释：</strong>每一层的节点值分别是：&#10;0 层：[1]&#10;1 层：[10,4]&#10;2 层：[3,7,9]&#10;3 层：[12,8,6,2]&#10;由于 0 层和 2 层上的节点值都是奇数且严格递增，而 1 层和 3 层上的节点值都是偶数且严格递减，因此这是一棵奇偶树。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1609.Even%20Odd%20Tree/images/sample_2_1966.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [5,4,2,3,3,7]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>每一层的节点值分别是：&#10;0 层：[5]&#10;1 层：[4,2]&#10;2 层：[3,3,7]&#10;2 层上的节点值不满足严格递增的条件，所以这不是一棵奇偶树。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1609.Even%20Odd%20Tree/images/sample_1_333_1966.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [5,9,1,3,5,7]&#10;<strong>输出：</strong>false&#10;<strong>解释：</strong>1 层上的节点值应为偶数。&#10;</pre>&#10;&#10;<p><strong>示例 4：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [1]&#10;<strong>输出：</strong>true&#10;</pre>&#10;&#10;<p><strong>示例 5：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>root = [11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]&#10;<strong>输出：</strong>true&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>树中节点数在范围 <code>[1, 10<sup>5</sup>]</code> 内</li>&#10;	<li><code>1 &lt;= Node.val &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：BFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>偶数层须为严格递增的奇数，奇数层须为严格递减的偶数，判断依赖「同一层从左到右的相邻值」。层序遍历恰好按层提供这一顺序。</p>
<p>结点可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，一次 BFS 即可，不必按层物化数组。</p>
<p>用队列分层，层内维护前驱 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">prev</mtext>
</math></span> 与奇偶标志 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">even</mtext>
</math></span>，不满足奇偶或单调性则立即返回。</p>
</blockquote>
<p>BFS 逐层遍历，每层按照奇偶性判断，每层的节点值都是偶数或奇数，且严格递增或递减。</p>
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
<span class="line"><span>func isEvenOddTree(root *TreeNode) bool {</span></span>
<span class="line"><span>	even := true</span></span>
<span class="line"><span>	q := []*TreeNode{root}</span></span>
<span class="line"><span>	for len(q) > 0 {</span></span>
<span class="line"><span>		var prev int = 1e7</span></span>
<span class="line"><span>		if even {</span></span>
<span class="line"><span>			prev = 0</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for n := len(q); n > 0; n-- {</span></span>
<span class="line"><span>			root = q[0]</span></span>
<span class="line"><span>			q = q[1:]</span></span>
<span class="line"><span>			if even &#x26;&#x26; (root.Val%2 == 0 || prev >= root.Val) {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if !even &#x26;&#x26; (root.Val%2 == 1 || prev &#x3C;= root.Val) {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			prev = root.Val</span></span>
<span class="line"><span>			if root.Left != nil {</span></span>
<span class="line"><span>				q = append(q, root.Left)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if root.Right != nil {</span></span>
<span class="line"><span>				q = append(q, root.Right)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		even = !even</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：DFS · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用队列保存一层。先序 DFS 同样按从左到右访问同层结点，只需记住每层最近一次见到的值。</p>
<p>哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 以深度为键记录前驱，递归时同步检查奇偶与单调，空间转为递归栈而非显式队列。</p>
</blockquote>
<p>DFS 先序遍历二叉树，同样根据节点所在层的奇偶性判断是否满足条件，遍历过程中用哈希表记录每一层最近访问到的节点值。</p>
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
<span class="line"><span>func isEvenOddTree(root *TreeNode) bool {</span></span>
<span class="line"><span>	d := map[int]int{}</span></span>
<span class="line"><span>	var dfs func(*TreeNode, int) bool</span></span>
<span class="line"><span>	dfs = func(root *TreeNode, i int) bool {</span></span>
<span class="line"><span>		if root == nil {</span></span>
<span class="line"><span>			return true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		even := i%2 == 0</span></span>
<span class="line"><span>		prev, ok := d[i]</span></span>
<span class="line"><span>		if !ok {</span></span>
<span class="line"><span>			if even {</span></span>
<span class="line"><span>				prev = 0</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				prev = 10000000</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if even &#x26;&#x26; (root.Val%2 == 0 || prev >= root.Val) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if !even &#x26;&#x26; (root.Val%2 == 1 || prev &#x3C;= root.Val) {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		d[i] = root.Val</span></span>
<span class="line"><span>		return dfs(root.Left, i+1) &#x26;&#x26; dfs(root.Right, i+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return dfs(root, 0)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/even-odd-tree" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1609.Even%20Odd%20Tree/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1612" tabindex="-1">1612. 检查两棵二叉表达式树是否等价 🔒 <a class="header-anchor" href="#q-1612" aria-label="Permalink to &quot;1612. 检查两棵二叉表达式树是否等价 🔒 {#q-1612}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：树、深度优先搜索、哈希表、二叉树、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p><strong><a href="https://en.wikipedia.org/wiki/Binary_expression_tree" target="_blank" rel="noopener noreferrer">二叉表达式树</a></strong>是一种表达算术表达式的二叉树。二叉表达式树中的每一个节点都有零个或两个子节点。 叶节点（有 0 个子节点的节点）表示操作数，非叶节点（有 2 个子节点的节点）表示运算符。在本题中，我们只考虑 <code>'+'</code> 运算符（即加法）。</p>&#10;&#10;<p>给定两棵二叉表达式树的根节点 <code>root1</code> 和 <code>root2</code> 。<em>如果两棵二叉表达式树等价</em>，返回 <code>true</code> ，否则返回 <code>false</code> 。</p>&#10;&#10;<p>当两棵二叉搜索树中的变量取任意值，<strong>分别求得的值都相等</strong>时，我们称这两棵二叉表达式树是等价的。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b> root1 = [x], root2 = [x]&#10;<b>输出：</b> true&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1612.Check%20If%20Two%20Expression%20Trees%20are%20Equivalent/images/tree1.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>root1 = [+,a,+,null,null,b,c], root2 = [+,+,a,b,c]&#10;<b>输出：</b>true&#10;<code><span><b>解释：</b></span>a + (b + c) == (b + c) + a</code></pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1600-1699/1612.Check%20If%20Two%20Expression%20Trees%20are%20Equivalent/images/tree2.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<b>输入：</b> root1 = [+,a,+,null,null,b,c], root2 = [+,+,a,b,d]&#10;<b>输出：</b> false&#10;<b>解释：</b> <code>a + (b + c) != (b + d) + a</code>&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>两棵树中的节点个数相等，且节点个数为范围 <code>[1, 4999]</code> 内的奇数。</li>&#10;	<li><code>Node.val</code> 是 <code>'+'</code> 或小写英文字母。</li>&#10;	<li>给定的树<strong>保证</strong>是有效的二叉表达式树。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><b>进阶：</b>当你的答案需同时支持 <code>'-'</code> 运算符（减法）时，你该如何修改你的答案</p></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1612.Check%20If%20Two%20Expression%20Trees%20are%20Equivalent/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p>基于 Doocs 参考改写。题目只允许加法，因此树的形状和加法次序不影响结果；分别累加和扣减 26 个变量的出现次数，全部为零即等价。n 为两棵树的总节点数，h 为最大树高，时间 O(n)，递归栈 O(h)，计数数组 O(1)。平台 Node 为 struct { Val byte; Left, Right *Node }；叶子为小写字母，内部节点为加号。</p>
<p>出处：<a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1612.Check%20If%20Two%20Expression%20Trees%20are%20Equivalent/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题与题解</a>，固定提交 91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011；题意、参考及本 Go 改写采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 题意与参考：Doocs LeetCode，CC BY-SA 4.0。</span></span>
<span class="line"><span>// https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1612.Check%20If%20Two%20Expression%20Trees%20are%20Equivalent/README.md</span></span>
<span class="line"><span>// Go 实现与测试沿用 CC BY-SA 4.0；来源性质见配套说明。</span></span>
<span class="line"><span>func checkEquivalence(root1, root2 *Node) bool {</span></span>
<span class="line"><span>	var count [26]int</span></span>
<span class="line"><span>	var visit func(*Node, int)</span></span>
<span class="line"><span>	visit = func(n *Node, delta int) {</span></span>
<span class="line"><span>		if n == nil {</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if n.Val == '+' {</span></span>
<span class="line"><span>			visit(n.Left, delta)</span></span>
<span class="line"><span>			visit(n.Right, delta)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			count[n.Val-'a'] += delta</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	visit(root1, 1)</span></span>
<span class="line"><span>	visit(root2, -1)</span></span>
<span class="line"><span>	for _, v := range count {</span></span>
<span class="line"><span>		if v != 0 {</span></span>
<span class="line"><span>			return false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/check-if-two-expression-trees-are-equivalent" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1600-1699/1612.Check%20If%20Two%20Expression%20Trees%20are%20Equivalent/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const g=s(p,[["render",l]]);export{d as __pageData,g as default};
