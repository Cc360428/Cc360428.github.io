import{_ as s,a as e,c as a,b as t}from"./chunks/framework.BSuaGltH.js";const g=JSON.parse('{"title":"LeetCode Go · 并发（1）","description":"并发分类，第 1114–1279 题，共 9 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 并发（1）","description":"并发分类，第 1114–1279 题，共 9 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"并发分类，第 1114–1279 题，共 9 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 动态规划（1）","link":"/principles/algorithms/leetcode-go/dp-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":false,"next":false},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":false,"next":false},"headers":[],"relativePath":"principles/algorithms/leetcode-go/concurrency-01.md","filePath":"principles/algorithms/leetcode-go/concurrency-01.md"}'),o={name:"principles/algorithms/leetcode-go/concurrency-01.md"};function p(l,n,r,c,i,d){return e(),a("div",null,[...n[0]||(n[0]=[t("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-并发-1" tabindex="-1">LeetCode Go · 并发（1） <a class="header-anchor" href="#leetcode-go-·-并发-1" aria-label="Permalink to &quot;LeetCode Go · 并发（1）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 9 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-1114" tabindex="-1">1114. 按序打印 <a class="header-anchor" href="#q-1114" aria-label="Permalink to &quot;1114. 按序打印 {#q-1114}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个类：</p>&#10;&#10;<pre>&#10;public class Foo {&#10;  public void first() { print(&quot;first&quot;); }&#10;  public void second() { print(&quot;second&quot;); }&#10;  public void third() { print(&quot;third&quot;); }&#10;}</pre>&#10;&#10;<p>三个不同的线程 A、B、C 将会共用一个 <code>Foo</code> 实例。</p>&#10;&#10;<ul>&#10;	<li>线程 A 将会调用 <code>first()</code> 方法</li>&#10;	<li>线程 B 将会调用 <code>second()</code> 方法</li>&#10;	<li>线程 C 将会调用 <code>third()</code> 方法</li>&#10;</ul>&#10;&#10;<p>请设计修改程序，以确保 <code>second()</code> 方法在 <code>first()</code> 方法之后被执行，<code>third()</code> 方法在 <code>second()</code> 方法之后被执行。</p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>尽管输入中的数字似乎暗示了顺序，但是我们并不保证线程在操作系统中的调度顺序。</li>&#10;	<li>你看到的输入格式主要是为了确保测试的全面性。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3]&#10;<strong>输出：</strong>&quot;firstsecondthird&quot;&#10;<strong>解释：</strong>&#10;有三个线程会被异步启动。输入 [1,2,3] 表示线程 A 将会调用 first() 方法，线程 B 将会调用 second() 方法，线程 C 将会调用 third() 方法。正确的输出是 &quot;firstsecondthird&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,3,2]&#10;<strong>输出：</strong>&quot;firstsecondthird&quot;&#10;<strong>解释：</strong>&#10;输入 [1,3,2] 表示线程 A 将会调用 first() 方法，线程 B 将会调用 third() 方法，线程 C 将会调用 second() 方法。正确的输出是 &quot;firstsecondthird&quot;。</pre>&#10;&#10;<p> </p>&#10;&#10;<ul>&#10;</ul>&#10;<strong>提示：</strong>&#10;&#10;<ul>&#10;	<li><code>nums</code> 是 <code>[1, 2, 3]</code> 的一组排列</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1114.Print%20in%20Order/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：按 Python 两个完成许可的依赖链实现。First 输出后关闭 firstDone；Second 等待该通道关闭，输出后关闭 secondDone；Third 等待 secondDone。关闭与接收建立先行发生关系，不依赖 goroutine 的启动顺序。</p>
<p><strong>变量与复杂度</strong>：两个通道分别代表前两步完成，三个方法各执行一次；时间、空间均 O(1)。</p>
<p><strong>平台接口</strong>：Constructor() Foo；共享对象的 First、Second、Third 方法均接收 func() 打印回调，各由一条线程调用一次。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1114.Print%20in%20Order/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1114.Print%20in%20Order/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Foo struct{ firstDone, secondDone chan struct{} }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() Foo                   { return Foo{make(chan struct{}), make(chan struct{})} }</span></span>
<span class="line"><span>func (f *Foo) First(printFirst func())   { printFirst(); close(f.firstDone) }</span></span>
<span class="line"><span>func (f *Foo) Second(printSecond func()) { &#x3C;-f.firstDone; printSecond(); close(f.secondDone) }</span></span>
<span class="line"><span>func (f *Foo) Third(printThird func())   { &#x3C;-f.secondDone; printThird() }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/print-in-order" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1114.Print%20in%20Order/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1115" tabindex="-1">1115. 交替打印 FooBar <a class="header-anchor" href="#q-1115" aria-label="Permalink to &quot;1115. 交替打印 FooBar {#q-1115}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个类：</p>&#10;&#10;<pre>&#10;class FooBar {&#10;  public void foo() {&#10;    for (int i = 0; i &lt; n; i++) {&#10;      print(&quot;foo&quot;);&#10;    }&#10;  }&#10;&#10;  public void bar() {&#10;    for (int i = 0; i &lt; n; i++) {&#10;      print(&quot;bar&quot;);&#10;    }&#10;  }&#10;}&#10;</pre>&#10;&#10;<p>两个不同的线程将会共用一个 <code>FooBar</code> 实例：</p>&#10;&#10;<ul>&#10;	<li>线程 A 将会调用 <code>foo()</code> 方法，而</li>&#10;	<li>线程 B 将会调用 <code>bar()</code> 方法</li>&#10;</ul>&#10;&#10;<p>请设计修改程序，以确保 <code>&quot;foobar&quot;</code> 被输出 <code>n</code> 次。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1&#10;<strong>输出：</strong>&quot;foobar&quot;&#10;<strong>解释：</strong>这里有两个线程被异步启动。其中一个调用 foo() 方法, 另一个调用 bar() 方法，&quot;foobar&quot; 将被输出一次。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2&#10;<strong>输出：</strong>&quot;foobarfoobar&quot;&#10;<strong>解释：</strong>&quot;foobar&quot; 将被输出两次。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1115.Print%20FooBar%20Alternately/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：将 Python 的两个信号量改写为容量为 1 的许可通道。foo 初始持有许可，输出后交给 bar，bar 输出后交还 foo；每条线程循环 n 次。最后一次交还许可仍可写入缓冲区，不会因对方退出而阻塞。</p>
<p><strong>变量与复杂度</strong>：n 为重复次数，fooTurn、barTurn 表示下一步许可。总时间 O(n)，辅助空间 O(1)。</p>
<p><strong>平台接口</strong>：Constructor(n int) FooBar，Foo(printFoo func())、Bar(printBar func()) 分别由两个 goroutine 各调用一次。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1115.Print%20FooBar%20Alternately/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1115.Print%20FooBar%20Alternately/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type FooBar struct {</span></span>
<span class="line"><span>	n                int</span></span>
<span class="line"><span>	fooTurn, barTurn chan struct{}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int) FooBar {</span></span>
<span class="line"><span>	f := FooBar{n, make(chan struct{}, 1), make(chan struct{}, 1)}</span></span>
<span class="line"><span>	f.fooTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	return f</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FooBar) Foo(printFoo func()) {</span></span>
<span class="line"><span>	for i := 0; i &#x3C; f.n; i++ {</span></span>
<span class="line"><span>		&#x3C;-f.fooTurn</span></span>
<span class="line"><span>		printFoo()</span></span>
<span class="line"><span>		f.barTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FooBar) Bar(printBar func()) {</span></span>
<span class="line"><span>	for i := 0; i &#x3C; f.n; i++ {</span></span>
<span class="line"><span>		&#x3C;-f.barTurn</span></span>
<span class="line"><span>		printBar()</span></span>
<span class="line"><span>		f.fooTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/print-foobar-alternately" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1115.Print%20FooBar%20Alternately/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1116" tabindex="-1">1116. 打印零与奇偶数 <a class="header-anchor" href="#q-1116" aria-label="Permalink to &quot;1116. 打印零与奇偶数 {#q-1116}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>现有函数 <code>printNumber</code> 可以用一个整数参数调用，并输出该整数到控制台。</p>&#10;&#10;<ul>&#10;	<li>例如，调用 <code>printNumber(7)</code> 将会输出 <code>7</code> 到控制台。</li>&#10;</ul>&#10;&#10;<p>给你类 <code>ZeroEvenOdd</code> 的一个实例，该类中有三个函数：<code>zero</code>、<code>even</code> 和 <code>odd</code> 。<code>ZeroEvenOdd</code> 的相同实例将会传递给三个不同线程：</p>&#10;&#10;<ul>&#10;	<li><strong>线程 A：</strong>调用 <code>zero()</code> ，只输出 <code>0</code></li>&#10;	<li><strong>线程 B：</strong>调用 <code>even()</code> ，只输出偶数</li>&#10;	<li><strong>线程 C：</strong>调用 <code>odd()</code> ，只输出奇数</li>&#10;</ul>&#10;&#10;<p>修改给出的类，以输出序列 <code>&quot;010203040506...&quot;</code> ，其中序列的长度必须为 <code>2n</code> 。</p>&#10;&#10;<p>实现 <code>ZeroEvenOdd</code> 类：</p>&#10;&#10;<ul>&#10;	<li><code>ZeroEvenOdd(int n)</code> 用数字 <code>n</code> 初始化对象，表示需要输出的数。</li>&#10;	<li><code>void zero(printNumber)</code> 调用 <code>printNumber</code> 以输出一个 0 。</li>&#10;	<li><code>void even(printNumber)</code> 调用<code>printNumber</code> 以输出偶数。</li>&#10;	<li><code>void odd(printNumber)</code> 调用 <code>printNumber</code> 以输出奇数。</li>&#10;</ul>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 2&#10;<strong>输出：</strong>&quot;0102&quot;&#10;<strong>解释：</strong>三条线程异步执行，其中一个调用 zero()，另一个线程调用 even()，最后一个线程调用odd()。正确的输出为 &quot;0102&quot;。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 5&#10;<strong>输出：</strong>&quot;0102030405&quot;&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1116.Print%20Zero%20Even%20Odd/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：把 Python 三个信号量改写为容量 1 的通道。Zero 每次输出零后，按下一个整数的奇偶选择 oddTurn 或 evenTurn；对应线程输出数字再交回 zeroTurn。只由 Zero 决定次序，奇数与偶数线程不竞争同一许可。</p>
<p><strong>变量与复杂度</strong>：n 为最大输出整数，三条许可通道控制相应步骤。共输出 2n 次，时间 O(n)，空间 O(1)。</p>
<p><strong>平台接口</strong>：Constructor(n int) ZeroEvenOdd；Zero、Even、Odd 均接受 func(int)，由三条 goroutine 各调用一次。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1116.Print%20Zero%20Even%20Odd/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1116.Print%20Zero%20Even%20Odd/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type ZeroEvenOdd struct {</span></span>
<span class="line"><span>	n                           int</span></span>
<span class="line"><span>	zeroTurn, evenTurn, oddTurn chan struct{}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int) ZeroEvenOdd {</span></span>
<span class="line"><span>	z := ZeroEvenOdd{n, make(chan struct{}, 1), make(chan struct{}, 1), make(chan struct{}, 1)}</span></span>
<span class="line"><span>	z.zeroTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	return z</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (z *ZeroEvenOdd) Zero(printNumber func(int)) {</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= z.n; i++ {</span></span>
<span class="line"><span>		&#x3C;-z.zeroTurn</span></span>
<span class="line"><span>		printNumber(0)</span></span>
<span class="line"><span>		if i%2 == 0 {</span></span>
<span class="line"><span>			z.evenTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			z.oddTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (z *ZeroEvenOdd) Even(printNumber func(int)) {</span></span>
<span class="line"><span>	for i := 2; i &#x3C;= z.n; i += 2 {</span></span>
<span class="line"><span>		&#x3C;-z.evenTurn</span></span>
<span class="line"><span>		printNumber(i)</span></span>
<span class="line"><span>		z.zeroTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (z *ZeroEvenOdd) Odd(printNumber func(int)) {</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= z.n; i += 2 {</span></span>
<span class="line"><span>		&#x3C;-z.oddTurn</span></span>
<span class="line"><span>		printNumber(i)</span></span>
<span class="line"><span>		z.zeroTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/print-zero-even-odd" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1116.Print%20Zero%20Even%20Odd/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1117" tabindex="-1">1117. H2O 生成 <a class="header-anchor" href="#q-1117" aria-label="Permalink to &quot;1117. H2O 生成 {#q-1117}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>现在有两种线程，氧 <code>oxygen</code> 和氢 <code>hydrogen</code>，你的目标是组织这两种线程来产生水分子。</p>&#10;&#10;<p>存在一个屏障（barrier）使得每个线程必须等候直到一个完整水分子能够被产生出来。</p>&#10;&#10;<p>氢和氧线程会被分别给予 <code>releaseHydrogen</code> 和 <code>releaseOxygen</code> 方法来允许它们突破屏障。</p>&#10;&#10;<p>这些线程应该三三成组突破屏障并能立即组合产生一个水分子。</p>&#10;&#10;<p>你必须保证产生一个水分子所需线程的结合必须发生在下一个水分子产生之前。</p>&#10;&#10;<p>换句话说:</p>&#10;&#10;<ul>&#10;	<li>如果一个氧线程到达屏障时没有氢线程到达，它必须等候直到两个氢线程到达。</li>&#10;	<li>如果一个氢线程到达屏障时没有其它线程到达，它必须等候直到一个氧线程和另一个氢线程到达。</li>&#10;</ul>&#10;&#10;<p>书写满足这些限制条件的氢、氧线程同步代码。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>water = &quot;HOH&quot;&#10;<strong>输出: </strong>&quot;HHO&quot;&#10;<strong>解释:</strong> &quot;HOH&quot; 和 &quot;OHH&quot; 依然都是有效解。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入: </strong>water = &quot;OOHHHH&quot;&#10;<strong>输出: </strong>&quot;HHOHHO&quot;&#10;<strong>解释:</strong> &quot;HOHHHO&quot;, &quot;OHHHHO&quot;, &quot;HHOHOH&quot;, &quot;HOHHOH&quot;, &quot;OHHHOH&quot;, &quot;HHOOHH&quot;, &quot;HOHOHH&quot; 和 &quot;OHHOHH&quot; 依然都是有效解。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>3 * n == water.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 20</code></li>&#10;	<li><code>water[i] == 'O' or 'H'</code></li>&#10;	<li>输入字符串 <code>water</code> 中的 <span><span>'H'</span></span> 总数将会是 <code>2 * n</code> 。</li>&#10;	<li>输入字符串 <code>water</code> 中的 <span><span>'O'</span></span> 总数将会是 <code>n</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1117.Building%20H2O/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：沿用参考解每轮两个氢、一个氧的分组规则，使用互斥锁与条件变量显式实现可复用屏障，避免读取信号量内部计数或无锁累加。线程先占本轮对应元素名额；未凑齐 2H+1O 时等待。凑齐后在锁内逐个执行回调，三个回调都完成才重置名额，下一轮才能加入，因此未凑齐的分子不会提前释放，两个分子的输出也不会交错。</p>
<p><strong>变量与复杂度</strong>：h、o 为本轮到达数量，released 为已执行回调数；n 为分子数。有效回调与计数更新共 O(n)，对象空间 O(1)；Broadcast 会唤醒等待者，调度/唤醒开销随竞争线程数变化，不计入固定操作数。</p>
<p><strong>平台接口</strong>：Constructor() *H2O 返回指针，避免复制已关联条件变量的锁。Hydrogen(releaseHydrogen func()) 与 Oxygen(releaseOxygen func()) 每个原子线程调用一次。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1117.Building%20H2O/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1117.Building%20H2O/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import "sync"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type H2O struct {</span></span>
<span class="line"><span>	mu             sync.Mutex</span></span>
<span class="line"><span>	changed        *sync.Cond</span></span>
<span class="line"><span>	h, o, released int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() *H2O                        { w := &#x26;H2O{}; w.changed = sync.NewCond(&#x26;w.mu); return w }</span></span>
<span class="line"><span>func (w *H2O) Hydrogen(releaseHydrogen func()) { w.arrive(true, releaseHydrogen) }</span></span>
<span class="line"><span>func (w *H2O) Oxygen(releaseOxygen func())     { w.arrive(false, releaseOxygen) }</span></span>
<span class="line"><span>func (w *H2O) arrive(hydrogen bool, release func()) {</span></span>
<span class="line"><span>	w.mu.Lock()</span></span>
<span class="line"><span>	defer w.mu.Unlock()</span></span>
<span class="line"><span>	for (hydrogen &#x26;&#x26; w.h == 2) || (!hydrogen &#x26;&#x26; w.o == 1) {</span></span>
<span class="line"><span>		w.changed.Wait()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if hydrogen {</span></span>
<span class="line"><span>		w.h++</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		w.o++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if w.h == 2 &#x26;&#x26; w.o == 1 {</span></span>
<span class="line"><span>		w.changed.Broadcast()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for w.h &#x3C; 2 || w.o &#x3C; 1 {</span></span>
<span class="line"><span>		w.changed.Wait()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	release()</span></span>
<span class="line"><span>	w.released++</span></span>
<span class="line"><span>	if w.released == 3 {</span></span>
<span class="line"><span>		w.h, w.o, w.released = 0, 0, 0</span></span>
<span class="line"><span>		w.changed.Broadcast()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/building-h2o" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1117.Building%20H2O/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1188" tabindex="-1">1188. 设计有限阻塞队列 🔒 <a class="header-anchor" href="#q-1188" aria-label="Permalink to &quot;1188. 设计有限阻塞队列 🔒 {#q-1188}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>实现一个拥有如下方法的线程安全有限阻塞队列：</p>&#10;&#10;<ul>&#10;	<li><code>BoundedBlockingQueue(int capacity)</code> 构造方法初始化队列，其中<code>capacity</code>代表队列长度上限。</li>&#10;	<li><code>void enqueue(int element)</code> 在队首增加一个<code>element</code>. 如果队列满，调用线程被阻塞直到队列非满。</li>&#10;	<li><code>int dequeue()</code> 返回队尾元素并从队列中将其删除. 如果队列为空，调用线程被阻塞直到队列非空。</li>&#10;	<li><code>int size()</code> 返回当前队列元素个数。</li>&#10;</ul>&#10;&#10;<p>你的实现将会被多线程同时访问进行测试。每一个线程要么是一个只调用<code>enqueue</code>方法的生产者线程，要么是一个只调用<code>dequeue</code>方法的消费者线程。<code>size</code>方法将会在每一个测试用例之后进行调用。</p>&#10;&#10;<p>请不要使用内置的有限阻塞队列实现，否则面试将不会通过。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong>&#10;1&#10;1&#10;[&quot;BoundedBlockingQueue&quot;,&quot;enqueue&quot;,&quot;dequeue&quot;,&quot;dequeue&quot;,&quot;enqueue&quot;,&quot;enqueue&quot;,&quot;enqueue&quot;,&quot;enqueue&quot;,&quot;dequeue&quot;]&#10;[[2],[1],[],[],[0],[2],[3],[4],[]]&#10;&#10;<strong>输出:</strong>&#10;[1,0,2,2]&#10;&#10;<strong>解释:&#10;</strong>生产者线程数目 = 1&#10;消费者线程数目 = 1&#10;&#10;BoundedBlockingQueue queue = new BoundedBlockingQueue(2);   // 使用capacity = 2初始化队列。&#10;&#10;queue.enqueue(1);   // 生产者线程将 1 插入队列。&#10;queue.dequeue();    // 消费者线程调用 dequeue 并返回 1 。&#10;queue.dequeue();    // 由于队列为空，消费者线程被阻塞。&#10;queue.enqueue(0);   // 生产者线程将 0 插入队列。消费者线程被解除阻塞同时将 0 弹出队列并返回。&#10;queue.enqueue(2);   // 生产者线程将 2 插入队列。&#10;queue.enqueue(3);   // 生产者线程将 3 插入队列。&#10;queue.enqueue(4);   // 生产者线程由于队列长度已达到上限 2 而被阻塞。&#10;queue.dequeue();    // 消费者线程将 2 从队列弹出并返回。生产者线程解除阻塞同时将4插入队列。&#10;queue.size();       // 队列中还有 2 个元素。size()方法在每组测试用例最后调用。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong>&#10;3&#10;4&#10;[&quot;BoundedBlockingQueue&quot;,&quot;enqueue&quot;,&quot;enqueue&quot;,&quot;enqueue&quot;,&quot;dequeue&quot;,&quot;dequeue&quot;,&quot;dequeue&quot;,&quot;enqueue&quot;]&#10;[[3],[1],[0],[2],[],[],[],[3]]&#10;&#10;<strong>输出:</strong>&#10;[1,0,2,1]&#10;&#10;<strong>解释:&#10;</strong>生产者线程数目 = 3&#10;消费者线程数目 = 4&#10;&#10;BoundedBlockingQueue queue = new BoundedBlockingQueue(3);   // 使用capacity = 3初始化队列。&#10;&#10;queue.enqueue(1);   // 生产者线程 P1 将 1 插入队列。&#10;queue.enqueue(0);   // 生产者线程 P2 将 0 插入队列。&#10;queue.enqueue(2);   // 生产者线程 P3 将2插入队列。&#10;queue.dequeue();    // 消费者线程 C1 调用 dequeue。&#10;queue.dequeue();    // 消费者线程 C2 调用 dequeue。&#10;queue.dequeue();    // 消费者线程 C3 调用 dequeue。&#10;queue.enqueue(3);   // 其中一个生产者线程将3插入队列。&#10;queue.size();       // 队列中还有 1 个元素。&#10;&#10;由于生产者/消费者线程的数目可能大于 1 ，我们并不知道线程如何被操作系统调度，即使输入看上去隐含了顺序。因此任意一种输出[1,0,2]或[1,2,0]或[0,1,2]或[0,2,1]或[2,0,1]或[2,1,0]都可被接受。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= Number of Prdoucers &lt;= 8</code></li>&#10;	<li><code>1 &lt;= Number of Consumers &lt;= 8</code></li>&#10;	<li><code>1 &lt;= size &lt;= 30</code></li>&#10;	<li><code>0 &lt;= element &lt;= 20</code></li>&#10;	<li> <code>enqueue</code>的调用次数 <strong>大于等于</strong>  <code>dequeue</code> 的调用次数。</li>&#10;	<li> <code>enque</code>, <code>deque</code> 和 <code>size</code> 最多被调用 <code>40</code> 次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1188.Design%20Bounded%20Blocking%20Queue/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：沿用空位/元素许可控制有界 FIFO 的参考思路，但 Go 中底层队列也必须互斥，不能照抄参考代码的无锁容器操作。使用固定容量环形切片、互斥锁、notEmpty/notFull 条件变量；入队遇满、出队遇空时循环等待，改变数量后唤醒另一方。Size 也加锁读取。未使用内置阻塞队列，元素存储不是 channel。</p>
<p><strong>变量与复杂度</strong>：capacity 为容量，head 为最旧元素下标，count 为当前数量，尾部位置为 (head+count)%capacity。单次入队、出队、Size 的有效操作 O(1)，空间 O(capacity)，等待时间取决于生产者/消费者。</p>
<p><strong>平台接口</strong>：Constructor(capacity int) *BoundedBlockingQueue；Enqueue(element int)、Dequeue() int、Size() int。返回指针以稳定条件变量所用锁地址。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1188.Design%20Bounded%20Blocking%20Queue/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1188.Design%20Bounded%20Blocking%20Queue/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import "sync"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type BoundedBlockingQueue struct {</span></span>
<span class="line"><span>	mu                sync.Mutex</span></span>
<span class="line"><span>	notEmpty, notFull *sync.Cond</span></span>
<span class="line"><span>	data              []int</span></span>
<span class="line"><span>	head, count       int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(capacity int) *BoundedBlockingQueue {</span></span>
<span class="line"><span>	q := &#x26;BoundedBlockingQueue{data: make([]int, capacity)}</span></span>
<span class="line"><span>	q.notEmpty = sync.NewCond(&#x26;q.mu)</span></span>
<span class="line"><span>	q.notFull = sync.NewCond(&#x26;q.mu)</span></span>
<span class="line"><span>	return q</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (q *BoundedBlockingQueue) Enqueue(element int) {</span></span>
<span class="line"><span>	q.mu.Lock()</span></span>
<span class="line"><span>	defer q.mu.Unlock()</span></span>
<span class="line"><span>	for q.count == len(q.data) {</span></span>
<span class="line"><span>		q.notFull.Wait()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	q.data[(q.head+q.count)%len(q.data)] = element</span></span>
<span class="line"><span>	q.count++</span></span>
<span class="line"><span>	q.notEmpty.Signal()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (q *BoundedBlockingQueue) Dequeue() int {</span></span>
<span class="line"><span>	q.mu.Lock()</span></span>
<span class="line"><span>	defer q.mu.Unlock()</span></span>
<span class="line"><span>	for q.count == 0 {</span></span>
<span class="line"><span>		q.notEmpty.Wait()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	value := q.data[q.head]</span></span>
<span class="line"><span>	q.head = (q.head + 1) % len(q.data)</span></span>
<span class="line"><span>	q.count--</span></span>
<span class="line"><span>	q.notFull.Signal()</span></span>
<span class="line"><span>	return value</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (q *BoundedBlockingQueue) Size() int { q.mu.Lock(); defer q.mu.Unlock(); return q.count }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/design-bounded-blocking-queue" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1188.Design%20Bounded%20Blocking%20Queue/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1195" tabindex="-1">1195. 多线程 Fizz Buzz <a class="header-anchor" href="#q-1195" aria-label="Permalink to &quot;1195. 多线程 Fizz Buzz {#q-1195}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>编写一个可以从 1 到 n 输出代表这个数字的字符串的程序，但是：</p>&#10;&#10;<ul>&#10;	<li>如果这个数字可以被 3 整除，输出 &quot;fizz&quot;。</li>&#10;	<li>如果这个数字可以被 5 整除，输出 &quot;buzz&quot;。</li>&#10;	<li>如果这个数字可以同时被 3 和 5 整除，输出 &quot;fizzbuzz&quot;。</li>&#10;</ul>&#10;&#10;<p>例如，当 <code>n = 15</code>，输出： <code>1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz</code>。</p>&#10;&#10;<p>假设有这么一个类：</p>&#10;&#10;<pre>&#10;class FizzBuzz {&#10;  public FizzBuzz(int n) { ... }               // constructor&#10;  public void fizz(printFizz) { ... }          // only output &quot;fizz&quot;&#10;  public void buzz(printBuzz) { ... }          // only output &quot;buzz&quot;&#10;  public void fizzbuzz(printFizzBuzz) { ... }  // only output &quot;fizzbuzz&quot;&#10;  public void number(printNumber) { ... }      // only output the numbers&#10;}</pre>&#10;&#10;<p>请你实现一个有四个线程的多线程版  <code>FizzBuzz</code>， 同一个 <code>FizzBuzz</code> 实例会被如下四个线程使用：</p>&#10;&#10;<ol>&#10;	<li>线程A将调用 <code>fizz()</code> 来判断是否能被 3 整除，如果可以，则输出 <code>fizz</code>。</li>&#10;	<li>线程B将调用 <code>buzz()</code> 来判断是否能被 5 整除，如果可以，则输出 <code>buzz</code>。</li>&#10;	<li>线程C将调用 <code>fizzbuzz()</code> 来判断是否同时能被 3 和 5 整除，如果可以，则输出 <code>fizzbuzz</code>。</li>&#10;	<li>线程D将调用 <code>number()</code> 来实现输出既不能被 3 整除也不能被 5 整除的数字。</li>&#10;</ol>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li>本题已经提供了打印字符串的相关方法，如 <code>printFizz()</code> 等，具体方法名请参考答题模板中的注释部分。</li>&#10;</ul>&#10;&#10;<p> </p></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1195.Fizz%20Buzz%20Multithreaded/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：采用源 Java 的四信号量方案，Go 用容量 1 的通道表示许可。Number 顺序处理 1..n，遇到 3/5/15 的倍数时交给对应线程；对应回调完成后交还 numberTurn。其他数字由 Number 自己输出并交还许可。每条线程预先知道自己的工作次数，因此无需忙等或额外终止消息。</p>
<p><strong>变量与复杂度</strong>：n 为终点，numberTurn 是主许可，fizzTurn、buzzTurn、bothTurn 对应特殊输出。总时间 O(n)，空间 O(1)。</p>
<p><strong>平台接口</strong>：Constructor(n int) FizzBuzz；Fizz、Buzz、Fizzbuzz 接收 func()，Number 接收 func(int)，四条 goroutine 各调用一个方法一次。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1195.Fizz%20Buzz%20Multithreaded/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1195.Fizz%20Buzz%20Multithreaded/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type FizzBuzz struct {</span></span>
<span class="line"><span>	n                                        int</span></span>
<span class="line"><span>	numberTurn, fizzTurn, buzzTurn, bothTurn chan struct{}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int) FizzBuzz {</span></span>
<span class="line"><span>	f := FizzBuzz{n, make(chan struct{}, 1), make(chan struct{}, 1), make(chan struct{}, 1), make(chan struct{}, 1)}</span></span>
<span class="line"><span>	f.numberTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	return f</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FizzBuzz) Fizz(printFizz func()) {</span></span>
<span class="line"><span>	for i := 3; i &#x3C;= f.n; i += 3 {</span></span>
<span class="line"><span>		if i%5 != 0 {</span></span>
<span class="line"><span>			&#x3C;-f.fizzTurn</span></span>
<span class="line"><span>			printFizz()</span></span>
<span class="line"><span>			f.numberTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FizzBuzz) Buzz(printBuzz func()) {</span></span>
<span class="line"><span>	for i := 5; i &#x3C;= f.n; i += 5 {</span></span>
<span class="line"><span>		if i%3 != 0 {</span></span>
<span class="line"><span>			&#x3C;-f.buzzTurn</span></span>
<span class="line"><span>			printBuzz()</span></span>
<span class="line"><span>			f.numberTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FizzBuzz) Fizzbuzz(printFizzBuzz func()) {</span></span>
<span class="line"><span>	for i := 15; i &#x3C;= f.n; i += 15 {</span></span>
<span class="line"><span>		&#x3C;-f.bothTurn</span></span>
<span class="line"><span>		printFizzBuzz()</span></span>
<span class="line"><span>		f.numberTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (f *FizzBuzz) Number(printNumber func(int)) {</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= f.n; i++ {</span></span>
<span class="line"><span>		&#x3C;-f.numberTurn</span></span>
<span class="line"><span>		switch {</span></span>
<span class="line"><span>		case i%15 == 0:</span></span>
<span class="line"><span>			f.bothTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		case i%3 == 0:</span></span>
<span class="line"><span>			f.fizzTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		case i%5 == 0:</span></span>
<span class="line"><span>			f.buzzTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		default:</span></span>
<span class="line"><span>			printNumber(i)</span></span>
<span class="line"><span>			f.numberTurn &#x3C;- struct{}{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/fizz-buzz-multithreaded" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1100-1199/1195.Fizz%20Buzz%20Multithreaded/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1226" tabindex="-1">1226. 哲学家进餐 <a class="header-anchor" href="#q-1226" aria-label="Permalink to &quot;1226. 哲学家进餐 {#q-1226}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>5 个沉默寡言的哲学家围坐在圆桌前，每人面前一盘意面。叉子放在哲学家之间的桌面上。（5 个哲学家，5 根叉子）</p>&#10;&#10;<p>所有的哲学家都只会在思考和进餐两种行为间交替。哲学家只有同时拿到左边和右边的叉子才能吃到面，而同一根叉子在同一时间只能被一个哲学家使用。每个哲学家吃完面后都需要把叉子放回桌面以供其他哲学家吃面。只要条件允许，哲学家可以拿起左边或者右边的叉子，但在没有同时拿到左右叉子时不能进食。</p>&#10;&#10;<p>假设面的数量没有限制，哲学家也能随便吃，不需要考虑吃不吃得下。</p>&#10;&#10;<p>设计一个进餐规则（并行算法）使得每个哲学家都不会挨饿；也就是说，在没有人知道别人什么时候想吃东西或思考的情况下，每个哲学家都可以在吃饭和思考之间一直交替下去。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1226.The%20Dining%20Philosophers/images/an_illustration_of_the_dining_philosophers_problem.png" loading="lazy"></p>&#10;&#10;<p><em>问题描述和图片来自维基百科 <a href="https://en.wikipedia.org/wiki/Dining_philosophers_problem" target="_blank" rel="noopener noreferrer">wikipedia.org</a></em></p>&#10;&#10;<p> </p>&#10;&#10;<p>哲学家从 <strong>0</strong> 到 <strong>4</strong> 按 <strong>顺时针</strong> 编号。请实现函数 <code>void wantsToEat(philosopher, pickLeftFork, pickRightFork, eat, putLeftFork, putRightFork)</code>：</p>&#10;&#10;<ul>&#10;	<li><code>philosopher</code> 哲学家的编号。</li>&#10;	<li><code>pickLeftFork</code> 和 <code>pickRightFork</code> 表示拿起左边或右边的叉子。</li>&#10;	<li><code>eat</code> 表示吃面。</li>&#10;	<li><code>putLeftFork</code> 和 <code>putRightFork</code> 表示放下左边或右边的叉子。</li>&#10;	<li>由于哲学家不是在吃面就是在想着啥时候吃面，所以思考这个方法没有对应的回调。</li>&#10;</ul>&#10;&#10;<p>给你 5 个线程，每个都代表一个哲学家，请你使用类的同一个对象来模拟这个过程。在最后一次调用结束之前，可能会为同一个哲学家多次调用该函数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>n = 1&#10;<strong>输出：</strong>[[3,2,1],[3,1,1],[3,0,3],[3,1,2],[3,2,2],[4,2,1],[4,1,1],[2,2,1],[2,1,1],[1,2,1],[2,0,3],[2,1,2],[2,2,2],[4,0,3],[4,1,2],[4,2,2],[1,1,1],[1,0,3],[1,1,2],[1,2,2],[0,1,1],[0,2,1],[0,0,3],[0,1,2],[0,2,2]]&#10;<strong>解释:</strong>&#10;n 表示每个哲学家需要进餐的次数。&#10;输出数组描述了叉子的控制和进餐的调用，它的格式如下：&#10;output[i] = [a, b, c] (3个整数)&#10;- a 哲学家编号。&#10;- b 指定叉子：{1 : 左边, 2 : 右边}.&#10;- c 指定行为：{1 : 拿起, 2 : 放下, 3 : 吃面}。&#10;如 [4,2,1] 表示 4 号哲学家拿起了右边的叉子。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 60</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1226.The%20Dining%20Philosophers/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：保留 C++ 参考的核心规则：就餐期间独占本人的两把叉，拿叉、吃饭、放叉回调都在占有期内。Go 用互斥锁下的叉子占用表和条件变量原子取得两把叉，不发生各拿一把的循环等待；额外以递增票号按到达顺序准入，防止后来的请求持续抢先。已准入者执行回调时不占管理锁，因此不相邻的哲学家仍可同时进餐。有限回调与正常调度假设下，每个票号最终会获准。</p>
<p><strong>变量与复杂度</strong>：busy[5] 为叉子占用状态，next 为下个票号，serving 为当前可准入票号；哲学家 p 使用叉子 p 和 (p+1)%5。每次就餐的有效操作 O(1)，对象空间 O(1)，不计条件等待和广播唤醒开销。票号顺序可能产生队首等待，但题目最多 5 位哲学家、每位 60 次，避免忙等。</p>
<p><strong>平台接口</strong>：Constructor() *DiningPhilosophers；WantsToEat(philosopher int, pickLeftFork, pickRightFork, eat, putLeftFork, putRightFork func())。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1226.The%20Dining%20Philosophers/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1226.The%20Dining%20Philosophers/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import "sync"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type DiningPhilosophers struct {</span></span>
<span class="line"><span>	mu            sync.Mutex</span></span>
<span class="line"><span>	changed       *sync.Cond</span></span>
<span class="line"><span>	busy          [5]bool</span></span>
<span class="line"><span>	next, serving uint64</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() *DiningPhilosophers {</span></span>
<span class="line"><span>	d := &#x26;DiningPhilosophers{}</span></span>
<span class="line"><span>	d.changed = sync.NewCond(&#x26;d.mu)</span></span>
<span class="line"><span>	return d</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (d *DiningPhilosophers) WantsToEat(philosopher int, pickLeftFork, pickRightFork, eat, putLeftFork, putRightFork func()) {</span></span>
<span class="line"><span>	left, right := philosopher, (philosopher+1)%5</span></span>
<span class="line"><span>	d.mu.Lock()</span></span>
<span class="line"><span>	ticket := d.next</span></span>
<span class="line"><span>	d.next++</span></span>
<span class="line"><span>	for ticket != d.serving || d.busy[left] || d.busy[right] {</span></span>
<span class="line"><span>		d.changed.Wait()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	d.busy[left], d.busy[right] = true, true</span></span>
<span class="line"><span>	d.serving++</span></span>
<span class="line"><span>	d.changed.Broadcast()</span></span>
<span class="line"><span>	d.mu.Unlock()</span></span>
<span class="line"><span>	pickLeftFork()</span></span>
<span class="line"><span>	pickRightFork()</span></span>
<span class="line"><span>	eat()</span></span>
<span class="line"><span>	putLeftFork()</span></span>
<span class="line"><span>	putRightFork()</span></span>
<span class="line"><span>	d.mu.Lock()</span></span>
<span class="line"><span>	d.busy[left], d.busy[right] = false, false</span></span>
<span class="line"><span>	d.changed.Broadcast()</span></span>
<span class="line"><span>	d.mu.Unlock()</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/the-dining-philosophers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1226.The%20Dining%20Philosophers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1242" tabindex="-1">1242. 多线程网络爬虫 🔒 <a class="header-anchor" href="#q-1242" aria-label="Permalink to &quot;1242. 多线程网络爬虫 🔒 {#q-1242}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：深度优先搜索、广度优先搜索、多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个初始地址 <code>startUrl</code> 和一个 HTML 解析器接口 <code>HtmlParser</code>，请你实现一个 <strong>多线程的网页爬虫</strong>，用于获取与 <code>startUrl</code> 有 <strong>相同域名 </strong>的所有链接。 </p>&#10;&#10;<p>以 <strong>任意 </strong>顺序返回爬虫获取的路径。</p>&#10;&#10;<p>爬虫应该遵循：</p>&#10;&#10;<ul>&#10;	<li>从 <code>startUrl</code> 开始</li>&#10;	<li>调用 <code>HtmlParser.getUrls(url)</code> 从指定网页路径获得的所有路径。</li>&#10;	<li>不要抓取相同的链接两次。</li>&#10;	<li>仅浏览与 <code>startUrl</code> <strong>相同域名 </strong>的链接。</li>&#10;</ul>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/images/16e463265c7086cb?w=975&amp;h=266&amp;f=png&amp;s=24624" loading="lazy"><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/images/urlhostname.png" loading="lazy"></p>&#10;&#10;<p>如上图所示，域名是 <code>example.org</code> 。简单起见，你可以假设所有链接都采用 <strong>http 协议</strong>，并且没有指定 <strong>端口号</strong>。举个例子，链接 <code>http://leetcode.com/problems</code> 和链接 <code>http://leetcode.com/contest</code> 属于同一个 <strong>域名</strong>， 而 <code>http://example.org/test</code> 与 <code>http://example.com/abc</code> 并不属于同一个 <strong>域名</strong>。</p>&#10;&#10;<p><code>HtmlParser</code> 的接口定义如下：</p>&#10;&#10;<pre>&#10;interface HtmlParser {&#10;  // Return a list of all urls from a webpage of given <em>url</em>.&#10;  // This is a blocking call, that means it will do HTTP request and return when this request is finished.&#10;  public List&lt;String> getUrls(String url);&#10;}</pre>&#10;&#10;<p>注意一点，<code>getUrls(String url)</code> 模拟执行一个HTTP的请求。 你可以将它当做一个阻塞式的方法，直到请求结束。 <code>getUrls(String url)</code> 保证会在 <strong>15ms </strong>内返回所有的路径。 单线程的方案会超过时间限制，你能用多线程方案做的更好吗？</p>&#10;&#10;<p>对于问题所需的功能，下面提供了两个例子。为了方便自定义测试，你可以声明三个变量 <code>urls</code>，<code>edges</code> 和 <code>startUrl</code>。但要注意你只能在代码中访问 <code>startUrl</code>，并不能直接访问 <code>urls</code> 和 <code>edges</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>拓展问题：</strong></p>&#10;&#10;<ol>&#10;	<li>假设我们要要抓取 10000 个节点和 10 亿个路径。并且在每个节点部署相同的的软件。软件可以发现所有的节点。我们必须尽可能减少机器之间的通讯，并确保每个节点负载均衡。你将如何设计这个网页爬虫？</li>&#10;	<li>如果有一个节点发生故障不工作该怎么办？</li>&#10;	<li>如何确认爬虫任务已经完成？</li>&#10;</ol>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/images/sample_2_1497.png" loading="lazy"><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/images/16e46559da0c446a?w=875&amp;h=418&amp;f=png&amp;s=43518" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：&#10;</strong>urls = [&#10;  &quot;http://news.yahoo.com&quot;,&#10;  &quot;http://news.yahoo.com/news&quot;,&#10;  &quot;http://news.yahoo.com/news/topics/&quot;,&#10;  &quot;http://news.google.com&quot;,&#10;  &quot;http://news.yahoo.com/us&quot;&#10;]&#10;edges = [[2,0],[2,1],[3,2],[3,1],[0,4]]&#10;startUrl = &quot;http://news.yahoo.com/news/topics/&quot;&#10;<strong>输出：</strong>[&#10;  &quot;http://news.yahoo.com&quot;,&#10;  &quot;http://news.yahoo.com/news&quot;,&#10;  &quot;http://news.yahoo.com/news/topics/&quot;,&#10;  &quot;http://news.yahoo.com/us&quot;&#10;]&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/images/16e4657b399a5fd2?w=654&amp;h=431&amp;f=png&amp;s=33838" loading="lazy"><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/images/sample_3_1497.png" loading="lazy"></strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>&#10;urls = [&#10;  &quot;http://news.yahoo.com&quot;,&#10;  &quot;http://news.yahoo.com/news&quot;,&#10;  &quot;http://news.yahoo.com/news/topics/&quot;,&#10;  &quot;http://news.google.com&quot;&#10;]&#10;edges = [[0,2],[2,1],[3,2],[3,1],[3,0]]&#10;startUrl = &quot;http://news.google.com&quot;&#10;<strong>输出：</strong>[&quot;http://news.google.com&quot;]&#10;<strong>解释：</strong>startUrl 链接与其他页面不共享一个域名。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= urls.length &lt;= 1000</code></li>&#10;	<li><code>1 &lt;= urls[i].length &lt;= 300</code></li>&#10;	<li><code>startUrl</code> 是 <code>urls</code> 中的一个。</li>&#10;	<li>域名的长度必须为 1 到 63 个字符（包括点 <code>.</code> 在内），只能包含从 “a” 到 “z” 的 ASCII 字母和 “0” 到 “9” 的数字，以及中划线 “-”。</li>&#10;	<li>域名开头和结尾不能是中划线 “-”。</li>&#10;	<li>参考资料：<a href="https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_hostnames" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_hostnames</a></li>&#10;	<li>你可以假设路径都是不重复的。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>根据题意整理</strong>：本地 Doocs 实现围栏为空。按其思考中的并发抓取、同主机过滤和去重原则实现：8 个工作 goroutine 只调用平台解析器；调度 goroutine 独占 seen、待处理队列和正在抓取数，避免集合数据竞争。通过 select 同时分发任务、接收结果，不让工作线程因向满任务队列回填而死锁。完整比较 URL 的 Hostname，不能用字符串前缀判断域名。队列为空且运行数为零才结束，并等待工作 goroutine 退出。</p>
<p><strong>变量与复杂度</strong>：V 为可达同域网页数，E 为这些页面返回的链接总数，L 为链接最大长度，P=8 为并发上限。调度和解析时间 O((V+E)L)，网络模拟等待由最多 P 个任务分摊；总辅助空间 O((V+E)L)，包括去重集合、队列和在途返回值。每页只解析一次。</p>
<p><strong>平台接口</strong>：crawl(startUrl string, htmlParser HtmlParser) []string；平台提供 HtmlParser 及 GetUrls(url string) []string。解析器须允许从多个 goroutine 调用；其内部可以串行处理，只要每次调用正常返回，调度器就不会依赖回调同时执行。测试另有串行解析器用例。源码本身不发网络请求，测试提供线程安全的本地 mock；返回顺序不限。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	"net/url"</span></span>
<span class="line"><span>	"sync"</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func crawl(startUrl string, htmlParser HtmlParser) []string {</span></span>
<span class="line"><span>	start, _ := url.Parse(startUrl)</span></span>
<span class="line"><span>	jobs := make(chan string)</span></span>
<span class="line"><span>	results := make(chan []string, 8)</span></span>
<span class="line"><span>	var workers sync.WaitGroup</span></span>
<span class="line"><span>	for i := 0; i &#x3C; 8; i++ {</span></span>
<span class="line"><span>		workers.Add(1)</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			defer workers.Done()</span></span>
<span class="line"><span>			for page := range jobs {</span></span>
<span class="line"><span>				results &#x3C;- htmlParser.GetUrls(page)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	seen := map[string]bool{startUrl: true}</span></span>
<span class="line"><span>	pending := []string{startUrl}</span></span>
<span class="line"><span>	answer := []string{startUrl}</span></span>
<span class="line"><span>	active := 0</span></span>
<span class="line"><span>	for len(pending) > 0 || active > 0 {</span></span>
<span class="line"><span>		var output chan string</span></span>
<span class="line"><span>		next := ""</span></span>
<span class="line"><span>		if len(pending) > 0 {</span></span>
<span class="line"><span>			output = jobs</span></span>
<span class="line"><span>			next = pending[0]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		select {</span></span>
<span class="line"><span>		case output &#x3C;- next:</span></span>
<span class="line"><span>			pending = pending[1:]</span></span>
<span class="line"><span>			active++</span></span>
<span class="line"><span>		case links := &#x3C;-results:</span></span>
<span class="line"><span>			active--</span></span>
<span class="line"><span>			for _, link := range links {</span></span>
<span class="line"><span>				parsed, err := url.Parse(link)</span></span>
<span class="line"><span>				if err != nil || parsed.Hostname() != start.Hostname() || seen[link] {</span></span>
<span class="line"><span>					continue</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				seen[link] = true</span></span>
<span class="line"><span>				pending = append(pending, link)</span></span>
<span class="line"><span>				answer = append(answer, link)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	close(jobs)</span></span>
<span class="line"><span>	workers.Wait()</span></span>
<span class="line"><span>	return answer</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/web-crawler-multithreaded" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1242.Web%20Crawler%20Multithreaded/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-1279" tabindex="-1">1279. 红绿灯路口 🔒 <a class="header-anchor" href="#q-1279" aria-label="Permalink to &quot;1279. 红绿灯路口 🔒 {#q-1279}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：多线程</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>这是两条路的交叉路口。第一条路是 A 路，车辆可沿 1 号方向由北向南行驶，也可沿 2 号方向由南向北行驶。第二条路是 B 路，车辆可沿 3 号方向由西向东行驶，也可沿 4 号方向由东向西行驶。</p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/1200-1299/1279.Traffic%20Light%20Controlled%20Intersection/images/exp.png" loading="lazy"></p>&#10;&#10;<p>每条路在路口前都有一个红绿灯。红绿灯可以亮起红灯或绿灯。</p>&#10;&#10;<ol>&#10;	<li><strong>绿灯</strong>表示两个方向的车辆都可通过路口。</li>&#10;	<li><strong>红灯</strong>表示两个方向的车辆都不可以通过路口，必须等待绿灯亮起。</li>&#10;</ol>&#10;&#10;<p>两条路上的红绿灯不可以同时为绿灯。这意味着，当 A 路上的绿灯亮起时，B 路上的红灯会亮起；当 B 路上的绿灯亮起时，A 路上的红灯会亮起.</p>&#10;&#10;<p>开始时，A 路上的<strong>绿灯</strong>亮起，B 路上的<strong>红灯</strong>亮起。当一条路上的绿灯亮起时，所有车辆都可以从任意两个方向通过路口，直到另一条路上的绿灯亮起。不同路上的车辆不可以同时通过路口。</p>&#10;&#10;<p>给这个路口设计一个没有死锁的红绿灯控制系统。</p>&#10;&#10;<p>实现函数 <code>void carArrived(carId, roadId, direction, turnGreen, crossCar)</code> :</p>&#10;&#10;<ul>&#10;	<li><code>carId</code> 为到达车辆的编号。</li>&#10;	<li><code>roadId</code> 为车辆所在道路的编号。</li>&#10;	<li><code>direction</code> 为车辆的行进方向。</li>&#10;	<li><code>turnGreen</code> 是一个函数，调用此函数会使当前道路上的绿灯亮起。</li>&#10;	<li><code>crossCar</code> 是一个函数，调用此函数会允许车辆通过路口。</li>&#10;</ul>&#10;&#10;<p>当你的答案避免了车辆在路口出现死锁，此答案会被认定为正确的。当路口已经亮起绿灯时仍打开绿灯，此答案会被认定为错误的。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> cars = [1,3,5,2,4], directions = [2,1,2,4,3], arrivalTimes = [10,20,30,40,50]&#10;<strong>输出:</strong> [&#10;&quot;Car 1 Has Passed Road A In Direction 2&quot;,    // A 路上的红绿灯为绿色，1 号车可通过路口。&#10;&quot;Car 3 Has Passed Road A In Direction 1&quot;,    // 红绿灯仍为绿色，3 号车通过路口。&#10;&quot;Car 5 Has Passed Road A In Direction 2&quot;,    // 红绿灯仍为绿色，5 号车通过路口。&#10;&quot;Traffic Light On Road B Is Green&quot;,          // 2 号车在 B 路请求绿灯。&#10;&quot;Car 2 Has Passed Road B In Direction 4&quot;,    // B 路上的绿灯现已亮起，2 号车通过路口。&#10;&quot;Car 4 Has Passed Road B In Direction 3&quot;     // 红绿灯仍为绿色，4 号车通过路口。&#10;]&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> cars = [1,2,3,4,5], directions = [2,4,3,3,1], arrivalTimes = [10,20,30,40,40]&#10;<strong>输出:</strong> [&#10;&quot;Car 1 Has Passed Road A In Direction 2&quot;,    // A 路上的红绿灯为绿色，1 号车可通过路口。&#10;&quot;Traffic Light On Road B Is Green&quot;,          // 2 号车在 B 路请求绿灯。&#10;&quot;Car 2 Has Passed Road B In Direction 4&quot;,    // B 路上的绿灯现已亮起，2 号车通过路口。&#10;&quot;Car 3 Has Passed Road B In Direction 3&quot;,    // B 路上的绿灯现已亮起，3 号车通过路口。&#10;&quot;Traffic Light On Road A Is Green&quot;,          // 5 号车在 A 路请求绿灯。&#10;&quot;Car 5 Has Passed Road A In Direction 1&quot;,    // A 路上的绿灯现已亮起，5 号车通过路口。&#10;&quot;Traffic Light On Road B Is Green&quot;,          // 4 号车在 B 路请求绿灯。4 号车在路口等灯，直到 5 号车通过路口，B 路的绿灯亮起。&#10;&quot;Car 4 Has Passed Road B In Direction 3&quot;     // B 路上的绿灯现已亮起，4 号车通过路口。&#10;]&#10;<strong>解释:</strong> 这是一个无死锁的方案。注意，在 A 路上的绿灯亮起、5 号车通过前让 4 号车通过，也是一个<strong>正确</strong>且<strong>可</strong><strong>被接受</strong>的方案。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= cars.length &lt;= 20</code></li>&#10;	<li><code>cars.length = directions.length</code></li>&#10;	<li><code>cars.length = arrivalTimes.length</code></li>&#10;	<li><code>cars</code> 中的所有值都是唯一的。</li>&#10;	<li><code>1 &lt;= directions[i] &lt;= 4</code></li>&#10;	<li><code>arrivalTimes</code> 是非递减的。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：Go 解法（本站整理） · Go 实现</summary>
<p><a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1279.Traffic%20Light%20Controlled%20Intersection/README.md" target="_blank" rel="noopener noreferrer">Doocs 参考题解</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></p>
<div v-pre>
<p><strong>基于 Doocs 参考改写</strong>：按 Python 的互斥临界区方案，用一把锁覆盖判断绿灯、必要时切换、车辆通过的全过程。初始 road=1。只有目标道路与当前道路不同时才调用 turnGreen，避免重复切换已亮的绿灯；整个回调期间保持互斥，不允许异路车辆同时通过。</p>
<p><strong>变量与复杂度</strong>：road 为当前绿灯道路；每车有效操作 O(1)，对象空间 O(1)，不计等待和回调耗时。</p>
<p><strong>平台接口</strong>：Constructor() TrafficLight；CarArrived(carId, roadId, direction int, turnGreen, crossCar func())。roadId 为 1/2，direction 为题目给定的 1..4；carId 和 direction 由闭包用于记录实际车辆，无需参与同步决策。并发对象应只构造一次，由所有 goroutine 共享，开始使用后不能复制。回调按题意假定会正常返回且不重入对象；复杂度不包含等待其他线程和回调自身的耗时。</p>
<p><strong>出处与许可</strong>：基于 <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1279.Traffic%20Light%20Controlled%20Intersection/README.md" target="_blank" rel="noopener noreferrer">Doocs 原题及参考资料</a>，固定提交 <code v-pre>91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011</code>；Go 代码及本说明按 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>// 依据 Doocs/leetcode 题目与参考资料进行 Go 改写/整理。</span></span>
<span class="line"><span>// 来源：https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1279.Traffic%20Light%20Controlled%20Intersection/README.md</span></span>
<span class="line"><span>// 许可：CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import "sync"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type TrafficLight struct {</span></span>
<span class="line"><span>	mu   sync.Mutex</span></span>
<span class="line"><span>	road int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor() TrafficLight { return TrafficLight{road: 1} }</span></span>
<span class="line"><span>func (l *TrafficLight) CarArrived(carId, roadId, direction int, turnGreen, crossCar func()) {</span></span>
<span class="line"><span>	l.mu.Lock()</span></span>
<span class="line"><span>	defer l.mu.Unlock()</span></span>
<span class="line"><span>	if l.road != roadId {</span></span>
<span class="line"><span>		turnGreen()</span></span>
<span class="line"><span>		l.road = roadId</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	crossCar()</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/traffic-light-controlled-intersection" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/1200-1299/1279.Traffic%20Light%20Controlled%20Intersection/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const b=s(o,[["render",p]]);export{g as __pageData,b as default};
