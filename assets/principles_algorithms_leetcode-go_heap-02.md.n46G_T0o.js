import{_ as s,a,c as t,b as e}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 堆与优先队列（2）","description":"堆与优先队列分类，第 2402–4065 题，共 17 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 堆与优先队列（2）","description":"堆与优先队列分类，第 2402–4065 题，共 17 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"堆与优先队列分类，第 2402–4065 题，共 17 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 堆与优先队列（1）","link":"/principles/algorithms/leetcode-go/heap-01"},"next":false},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 堆与优先队列（1）","link":"/principles/algorithms/leetcode-go/heap-01"},"next":false},"headers":[],"relativePath":"principles/algorithms/leetcode-go/heap-02.md","filePath":"principles/algorithms/leetcode-go/heap-02.md"}'),p={name:"principles/algorithms/leetcode-go/heap-02.md"};function m(l,n,o,i,c,h){return a(),t("div",null,[...n[0]||(n[0]=[e("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-堆与优先队列-2" tabindex="-1">LeetCode Go · 堆与优先队列（2） <a class="header-anchor" href="#leetcode-go-·-堆与优先队列-2" aria-label="Permalink to &quot;LeetCode Go · 堆与优先队列（2）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 17 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-2402" tabindex="-1">2402. 会议室 III <a class="header-anchor" href="#q-2402" aria-label="Permalink to &quot;2402. 会议室 III {#q-2402}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数 <code>n</code> ，共有编号从 <code>0</code> 到 <code>n - 1</code> 的 <code>n</code> 个会议室。</p>&#10;&#10;<p>给你一个二维整数数组 <code>meetings</code> ，其中 <code>meetings[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 表示一场会议将会在 <strong>半闭</strong> 时间区间 <code>[start<sub>i</sub>, end<sub>i</sub>)</code> 举办。所有 <code>start<sub>i</sub></code> 的值 <strong>互不相同</strong> 。</p>&#10;&#10;<p>会议将会按以下方式分配给会议室：</p>&#10;&#10;<ol>&#10;	<li>每场会议都会在未占用且编号 <strong>最小</strong> 的会议室举办。</li>&#10;	<li>如果没有可用的会议室，会议将会延期，直到存在空闲的会议室。延期会议的持续时间和原会议持续时间 <strong>相同</strong> 。</li>&#10;	<li>当会议室处于未占用状态时，将会优先提供给原 <strong>开始</strong> 时间更早的会议。</li>&#10;</ol>&#10;&#10;<p>返回举办最多次会议的房间 <strong>编号</strong> 。如果存在多个房间满足此条件，则返回编号 <strong>最小</strong> 的房间。</p>&#10;&#10;<p><strong>半闭区间 </strong><code>[a, b)</code> 是 <code>a</code> 和 <code>b</code> 之间的区间，<strong>包括</strong> <code>a</code> 但<strong> 不包括</strong> <code>b</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>&#10;- 在时间 0 ，两个会议室都未占用，第一场会议在会议室 0 举办。&#10;- 在时间 1 ，只有会议室 1 未占用，第二场会议在会议室 1 举办。&#10;- 在时间 2 ，两个会议室都被占用，第三场会议延期举办。&#10;- 在时间 3 ，两个会议室都被占用，第四场会议延期举办。&#10;- 在时间 5 ，会议室 1 的会议结束。第三场会议在会议室 1 举办，时间周期为 [5,10) 。&#10;- 在时间 10 ，两个会议室的会议都结束。第四场会议在会议室 0 举办，时间周期为 [10,11) 。&#10;会议室 0 和会议室 1 都举办了 2 场会议，所以返回 0 。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>&#10;- 在时间 1 ，所有三个会议室都未占用，第一场会议在会议室 0 举办。&#10;- 在时间 2 ，会议室 1 和 2 未占用，第二场会议在会议室 1 举办。&#10;- 在时间 3 ，只有会议室 2 未占用，第三场会议在会议室 2 举办。&#10;- 在时间 4 ，所有三个会议室都被占用，第四场会议延期举办。 &#10;- 在时间 5 ，会议室 2 的会议结束。第四场会议在会议室 2 举办，时间周期为 [5,10) 。&#10;- 在时间 6 ，所有三个会议室都被占用，第五场会议延期举办。 &#10;- 在时间 10 ，会议室 1 和 2 的会议结束。第五场会议在会议室 1 举办，时间周期为 [10,12) 。 &#10;会议室 1 和会议室 2 都举办了 2 场会议，所以返回 1 。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= 100</code></li>&#10;	<li><code>1 &lt;= meetings.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>meetings[i].length == 2</code></li>&#10;	<li><code>0 &lt;= start<sub>i</sub> &lt; end<sub>i</sub> &lt;= 5 * 10<sup>5</sup></code></li>&#10;	<li><code>start<sub>i</sub></code> 的所有值 <strong>互不相同</strong></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，若每次为会议线性扫描全部会议室找最早空闲者，时间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，在上限附近偏紧。会议开始时间互不相同，必须按时间顺序分配。</p>
<p>空闲会议室只需按编号取最小者，占用中的会议室则按结束时间出队。用两个堆分别维护这两类：会议按开始时间排序后，先把已结束的房间归还空闲堆；有空闲则取编号最小者，否则取出最早结束的那间并顺延时长。顺延后的结束时刻等于上一场结束时刻加上会议时长，连续占用可以超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>2</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>31</mn>
    </mrow>
  </msup>
</math></span>，因此该时刻用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>64</mn>
</math></span> 位整数。</p>
</blockquote>
<p>我们定义两个优先队列，分别表示空闲会议室、使用中的会议室。其中：空闲会议室 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">idle</mtext>
</math></span> 依据<strong>下标</strong>排序；而使用中的会议室 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">busy</mtext>
</math></span> 依据<strong>结束时间、下标</strong>排序。</p>
<p>先对会议按照开始时间排序，然后遍历会议，对于每个会议：</p>
<ul>
<li>若有使用中的会议室小于当前等于会议的开始时间，将其加入到空闲会议室队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">idle</mtext>
</math></span> 中；</li>
<li>若当前有空闲会议室，那么在空闲队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">idle</mtext>
</math></span> 中取出权重最小的会议室，将其加入使用中的队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">busy</mtext>
</math></span> 中；</li>
<li>若当前没有空闲会议室，那么在使用队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">busy</mtext>
</math></span> 中找出最早结束时间且下标最小的会议室，重新加入使用中的队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">busy</mtext>
</math></span> 中。</li>
</ul>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>m</mi>
  <mo>+</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 分别为会议室数量和会议数量。</p>
<p>相似题目：</p>
<ul>
<li><a href="https://github.com/doocs/leetcode/blob/main/solution/1800-1899/1882.Process%20Tasks%20Using%20Servers/README.md" target="_blank" rel="noopener noreferrer">1882. 使用服务器处理任务</a></li>
</ul>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mostBooked(n int, meetings [][]int) int {</span></span>
<span class="line"><span>	sort.Slice(meetings, func(i, j int) bool { return meetings[i][0] &#x3C; meetings[j][0] })</span></span>
<span class="line"><span>	idle := hp{make([]int, n)}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		idle.IntSlice[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	busy := hp2{}</span></span>
<span class="line"><span>	cnt := make([]int, n)</span></span>
<span class="line"><span>	for _, v := range meetings {</span></span>
<span class="line"><span>		s, e := v[0], v[1]</span></span>
<span class="line"><span>		for len(busy) > 0 &#x26;&#x26; busy[0].end &#x3C;= s {</span></span>
<span class="line"><span>			heap.Push(&#x26;idle, heap.Pop(&#x26;busy).(pair).i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		var i int</span></span>
<span class="line"><span>		if idle.Len() > 0 {</span></span>
<span class="line"><span>			i = heap.Pop(&#x26;idle).(int)</span></span>
<span class="line"><span>			heap.Push(&#x26;busy, pair{e, i})</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			x := heap.Pop(&#x26;busy).(pair)</span></span>
<span class="line"><span>			i = x.i</span></span>
<span class="line"><span>			heap.Push(&#x26;busy, pair{x.end + e - s, i})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		cnt[i]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for i, v := range cnt {</span></span>
<span class="line"><span>		if cnt[ans] &#x3C; v {</span></span>
<span class="line"><span>			ans = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>type pair struct{ end, i int }</span></span>
<span class="line"><span>type hp2 []pair</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp2) Len() int { return len(h) }</span></span>
<span class="line"><span>func (h hp2) Less(i, j int) bool {</span></span>
<span class="line"><span>	a, b := h[i], h[j]</span></span>
<span class="line"><span>	return a.end &#x3C; b.end || a.end == b.end &#x26;&#x26; a.i &#x3C; b.i</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (h hp2) Swap(i, j int) { h[i], h[j] = h[j], h[i] }</span></span>
<span class="line"><span>func (h *hp2) Push(v any)   { *h = append(*h, v.(pair)) }</span></span>
<span class="line"><span>func (h *hp2) Pop() any     { a := *h; v := a[len(a)-1]; *h = a[:len(a)-1]; return v }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/meeting-rooms-iii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2402.Meeting%20Rooms%20III/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2456" tabindex="-1">2456. 最流行的视频创作者 <a class="header-anchor" href="#q-2456" aria-label="Permalink to &quot;2456. 最流行的视频创作者 {#q-2456}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个字符串数组 <code>creators</code> 和 <code>ids</code> ，和一个整数数组 <code>views</code> ，所有数组的长度都是 <code>n</code> 。平台上第 <code>i</code> 个视频者是 <code>creator[i]</code> ，视频分配的 id 是 <code>ids[i]</code> ，且播放量为 <code>views[i]</code> 。</p>&#10;&#10;<p>视频创作者的 <strong>流行度</strong> 是该创作者的 <strong>所有</strong> 视频的播放量的 <strong>总和</strong> 。请找出流行度 <strong>最高</strong> 创作者以及该创作者播放量 <strong>最大</strong> 的视频的 id 。</p>&#10;&#10;<ul>&#10;	<li>如果存在多个创作者流行度都最高，则需要找出所有符合条件的创作者。</li>&#10;	<li>如果某个创作者存在多个播放量最高的视频，则只需要找出字典序最小的 <code>id</code> 。</li>&#10;</ul>&#10;&#10;<p>返回一个二维字符串数组<em> </em><code>answer</code><em> </em>，其中<em> </em><code>answer[i] = [creator<sub>i</sub>, id<sub>i</sub>]</code><em> </em>表示<em> </em><code>creator<sub>i</sub></code> 的流行度 <strong>最高</strong> 且其最流行的视频 id 是<em> </em><code>id<sub>i</sub></code><em> </em>，可以按任何顺序返回该结果<em>。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>creators = [&quot;alice&quot;,&quot;bob&quot;,&quot;alice&quot;,&quot;chris&quot;], ids = [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;], views = [5,10,5,4]&#10;<strong>输出：</strong>[[&quot;alice&quot;,&quot;one&quot;],[&quot;bob&quot;,&quot;two&quot;]]&#10;<strong>解释：</strong>&#10;alice 的流行度是 5 + 5 = 10 。&#10;bob 的流行度是 10 。&#10;chris 的流行度是 4 。&#10;alice 和 bob 是流行度最高的创作者。&#10;bob 播放量最高的视频 id 为 &quot;two&quot; 。&#10;alice 播放量最高的视频 id 是 &quot;one&quot; 和 &quot;three&quot; 。由于 &quot;one&quot; 的字典序比 &quot;three&quot; 更小，所以结果中返回的 id 是 &quot;one&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>creators = [&quot;alice&quot;,&quot;alice&quot;,&quot;alice&quot;], ids = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], views = [1,2,2]&#10;<strong>输出：</strong>[[&quot;alice&quot;,&quot;b&quot;]]&#10;<strong>解释：</strong>&#10;id 为 &quot;b&quot; 和 &quot;c&quot; 的视频都满足播放量最高的条件。&#10;由于 &quot;b&quot; 的字典序比 &quot;c&quot; 更小，所以结果中返回的 id 是 &quot;b&quot; 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == creators.length == ids.length == views.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= creators[i].length, ids[i].length &lt;= 5</code></li>&#10;	<li><code>creators[i]</code> 和 <code>ids[i]</code> 仅由小写英文字母组成</li>&#10;	<li><code>0 &lt;= views[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，按创作者聚合总播放量，并记录其播放最高、字典序最小的视频。哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 累加播放， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 保存当前最优视频下标；再取总播放的最大值，筛出并列的创作者。</p>
</blockquote>
<p>我们遍历三个数组，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计每个创作者的播放量总和，用哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 记录每个创作者播放量最大的视频的下标。</p>
<p>然后，我们遍历哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，找出最大的播放量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span>；接着再次遍历哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span>，找出播放量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>x</mi>
</math></span> 的创作者，将其加入答案数组中。</p>
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
</math></span> 为视频数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mostPopularCreator(creators []string, ids []string, views []int) (ans [][]string) {</span></span>
<span class="line"><span>	cnt := map[string]int{}</span></span>
<span class="line"><span>	d := map[string]int{}</span></span>
<span class="line"><span>	for k, c := range creators {</span></span>
<span class="line"><span>		i, v := ids[k], views[k]</span></span>
<span class="line"><span>		cnt[c] += v</span></span>
<span class="line"><span>		if j, ok := d[c]; !ok || views[j] &#x3C; v || (views[j] == v &#x26;&#x26; ids[j] > i) {</span></span>
<span class="line"><span>			d[c] = k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mx := 0</span></span>
<span class="line"><span>	for _, x := range cnt {</span></span>
<span class="line"><span>		if mx &#x3C; x {</span></span>
<span class="line"><span>			mx = x</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for c, x := range cnt {</span></span>
<span class="line"><span>		if x == mx {</span></span>
<span class="line"><span>			ans = append(ans, []string{c, ids[d[c]]})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-popular-video-creator" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2400-2499/2456.Most%20Popular%20Video%20Creator/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2500" tabindex="-1">2500. 删除每行中的最大值 <a class="header-anchor" href="#q-2500" aria-label="Permalink to &quot;2500. 删除每行中的最大值 {#q-2500}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、矩阵、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m x n</code> 大小的矩阵 <code>grid</code> ，由若干正整数组成。</p>&#10;&#10;<p>执行下述操作，直到 <code>grid</code> 变为空矩阵：</p>&#10;&#10;<ul>&#10;	<li>从每一行删除值最大的元素。如果存在多个这样的值，删除其中任何一个。</li>&#10;	<li>将删除元素中的最大值与答案相加。</li>&#10;</ul>&#10;&#10;<p><strong>注意</strong> 每执行一次操作，矩阵中列的数据就会减 1 。</p>&#10;&#10;<p>返回执行上述操作后的答案。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2500.Delete%20Greatest%20Value%20in%20Each%20Row/images/q1ex1.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[1,2,4],[3,3,1]]&#10;<strong>输出：</strong>8&#10;<strong>解释：</strong>上图展示在每一步中需要移除的值。&#10;- 在第一步操作中，从第一行删除 4 ，从第二行删除 3（注意，有两个单元格中的值为 3 ，我们可以删除任一）。在答案上加 4 。&#10;- 在第二步操作中，从第一行删除 2 ，从第二行删除 3 。在答案上加 3 。&#10;- 在第三步操作中，从第一行删除 1 ，从第二行删除 1 。在答案上加 1 。&#10;最终，答案 = 4 + 3 + 1 = 8 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2500.Delete%20Greatest%20Value%20in%20Each%20Row/images/q1ex2.jpg" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>grid = [[10]]&#10;<strong>输出：</strong>10&#10;<strong>解释：</strong>上图展示在每一步中需要移除的值。&#10;- 在第一步操作中，从第一行删除 10 。在答案上加 10 。&#10;最终，答案 = 10 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[i].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 50</code></li>&#10;	<li><code>1 &lt;= grid[i][j] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次操作要从每一行删去当前最大值，再把这些被删值中的最大者累加到答案。若按题意逐轮扫描，则每轮在各行找最大值需 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 轮，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>50</mn>
</math></span> 时尚可接受，但同一行被删去的序列其实就是该行降序排列的结果。</p>
<p>因此先将每一行升序排序，第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 次操作对应各行的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个元素（从右往左），答案即为按列取最大值之和。排序后用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">zip</mtext>
</math></span> 按列聚合即可，无需再模拟删除。</p>
</blockquote>
<p>由于每一次操作都是从每一行中删除最大值，然后取最大值加到答案中，因此我们可以先对每一行进行排序。</p>
<p>接下来遍历每一列，取每一列的最大值，然后将其加到答案中即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
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
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func deleteGreatestValue(grid [][]int) (ans int) {</span></span>
<span class="line"><span>	for _, row := range grid {</span></span>
<span class="line"><span>		sort.Ints(row)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for j := range grid[0] {</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for i := range grid {</span></span>
<span class="line"><span>			if t &#x3C; grid[i][j] {</span></span>
<span class="line"><span>				t = grid[i][j]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += t</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/delete-greatest-value-in-each-row" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2500.Delete%20Greatest%20Value%20in%20Each%20Row/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2512" tabindex="-1">2512. 奖励最顶尖的 K 名学生 <a class="header-anchor" href="#q-2512" aria-label="Permalink to &quot;2512. 奖励最顶尖的 K 名学生 {#q-2512}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、字符串、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个字符串数组 <code>positive_feedback</code> 和 <code>negative_feedback</code> ，分别包含表示正面的和负面的词汇。<strong>不会</strong> 有单词同时是正面的和负面的。</p>&#10;&#10;<p>一开始，每位学生分数为 <code>0</code> 。每个正面的单词会给学生的分数 <strong>加 </strong><code>3</code> 分，每个负面的词会给学生的分数 <strong>减 </strong> <code>1</code> 分。</p>&#10;&#10;<p>给你 <code>n</code> 个学生的评语，用一个下标从 <strong>0</strong> 开始的字符串数组 <code>report</code> 和一个下标从 <strong>0</strong> 开始的整数数组 <code>student_id</code> 表示，其中 <code>student_id[i]</code> 表示这名学生的 ID ，这名学生的评语是 <code>report[i]</code> 。每名学生的 ID <strong>互不相同</strong>。</p>&#10;&#10;<p>给你一个整数 <code>k</code> ，请你返回按照得分 <strong>从高到低</strong> 最顶尖的<em> </em><code>k</code> 名学生。如果有多名学生分数相同，ID 越小排名越前。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>positive_feedback = [&quot;smart&quot;,&quot;brilliant&quot;,&quot;studious&quot;], negative_feedback = [&quot;not&quot;], report = [&quot;this student is studious&quot;,&quot;the student is smart&quot;], student_id = [1,2], k = 2&#10;<b>输出：</b>[1,2]&#10;<b>解释：</b>&#10;两名学生都有 1 个正面词汇，都得到 3 分，学生 1 的 ID 更小所以排名更前。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>positive_feedback = [&quot;smart&quot;,&quot;brilliant&quot;,&quot;studious&quot;], negative_feedback = [&quot;not&quot;], report = [&quot;this student is not studious&quot;,&quot;the student is smart&quot;], student_id = [1,2], k = 2&#10;<b>输出：</b>[2,1]&#10;<b>解释：</b>&#10;- ID 为 1 的学生有 1 个正面词汇和 1 个负面词汇，所以得分为 3-1=2 分。&#10;- ID 为 2 的学生有 1 个正面词汇，得分为 3 分。&#10;学生 2 分数更高，所以返回 [2,1] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= positive_feedback.length, negative_feedback.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= positive_feedback[i].length, negative_feedback[j].length &lt;= 100</code></li>&#10;	<li><code>positive_feedback[i]</code> 和 <code>negative_feedback[j]</code> 都只包含小写英文字母。</li>&#10;	<li><code>positive_feedback</code> 和 <code>negative_feedback</code> 中不会有相同单词。</li>&#10;	<li><code>n == report.length == student_id.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>report[i]</code> 只包含小写英文字母和空格 <code>' '</code> 。</li>&#10;	<li><code>report[i]</code> 中连续单词之间有单个空格隔开。</li>&#10;	<li><code>1 &lt;= report[i].length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= student_id[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>student_id[i]</code> 的值 <strong>互不相同</strong> 。</li>&#10;	<li><code>1 &lt;= k &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每名学生的得分由报告中正面词 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mn>3</mn>
</math></span>、负面词 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 累加得到，再按得分降序、编号升序取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 名。若每次在词表中线性查找，词表与报告长度乘积在约束下偏大。</p>
<p>把正、负词放入集合后， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 判断每个单词。将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">score</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">id</mtext>
  <mo stretchy="false">)</mo>
</math></span> 收集起来按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">score</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">id</mtext>
  <mo stretchy="false">)</mo>
</math></span> 排序，截取前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个编号即可。</p>
</blockquote>
<p>我们可以将正面的单词存入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>s</mi>
</math></span> 中，将负面的单词存入哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>s</mi>
</math></span> 中。</p>
<p>然后遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>t</mi>
</math></span>，对于每个学生，我们将其得分存入数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 中，数组中的每个元素为一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>t</mi>
  <mo>,</mo>
  <mi>s</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 表示学生的得分，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 表示学生的 ID。</p>
<p>最后我们对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 按照得分从高到低排序，如果得分相同则按照 ID 从小到大排序，然后取出前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个学生的 ID 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>n</mi>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>n</mi>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>+</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为学生数量， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>p</mi>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>n</mi>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 分别为正面和负面单词的数量， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span> 为单词的平均长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func topStudents(positive_feedback []string, negative_feedback []string, report []string, student_id []int, k int) (ans []int) {</span></span>
<span class="line"><span>	ps := map[string]bool{}</span></span>
<span class="line"><span>	ns := map[string]bool{}</span></span>
<span class="line"><span>	for _, s := range positive_feedback {</span></span>
<span class="line"><span>		ps[s] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, s := range negative_feedback {</span></span>
<span class="line"><span>		ns[s] = true</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	arr := [][2]int{}</span></span>
<span class="line"><span>	for i, sid := range student_id {</span></span>
<span class="line"><span>		t := 0</span></span>
<span class="line"><span>		for _, w := range strings.Split(report[i], " ") {</span></span>
<span class="line"><span>			if ps[w] {</span></span>
<span class="line"><span>				t += 3</span></span>
<span class="line"><span>			} else if ns[w] {</span></span>
<span class="line"><span>				t -= 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		arr = append(arr, [2]int{t, sid})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(arr, func(i, j int) bool { return arr[i][0] > arr[j][0] || (arr[i][0] == arr[j][0] &#x26;&#x26; arr[i][1] &#x3C; arr[j][1]) })</span></span>
<span class="line"><span>	for _, v := range arr[:k] {</span></span>
<span class="line"><span>		ans = append(ans, v[1])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/reward-top-k-students" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2512.Reward%20Top%20K%20Students/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2532" tabindex="-1">2532. 过桥的时间 <a class="header-anchor" href="#q-2532" aria-label="Permalink to &quot;2532. 过桥的时间 {#q-2532}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>共有 <code>k</code> 位工人计划将 <code>n</code> 个箱子从右侧的（旧）仓库移动到左侧的（新）仓库。给你两个整数 <code>n</code> 和 <code>k</code>，以及一个二维整数数组 <code>time</code> ，数组的大小为 <code>k x 4</code> ，其中 <code>time[i] = [right<sub>i</sub>, pick<sub>i</sub>, left<sub>i</sub>, put<sub>i</sub>]</code> 。</p>&#10;&#10;<p>一条河将两座仓库分隔，只能通过一座桥通行。旧仓库位于河的右岸，新仓库在河的左岸。开始时，所有 <code>k</code> 位工人都在桥的左侧等待。为了移动这些箱子，第 <code>i</code> 位工人（下标从 <strong>0</strong> 开始）可以：</p>&#10;&#10;<ul>&#10;	<li>从左岸（新仓库）跨过桥到右岸（旧仓库），用时 <code>right<sub>i</sub></code> 分钟。</li>&#10;	<li>从旧仓库选择一个箱子，并返回到桥边，用时 <code>pick<sub>i</sub></code> 分钟。不同工人可以同时搬起所选的箱子。</li>&#10;	<li>从右岸（旧仓库）跨过桥到左岸（新仓库），用时 <code>left<sub>i</sub></code> 分钟。</li>&#10;	<li>将箱子放入新仓库，并返回到桥边，用时 <code>put<sub>i</sub></code> 分钟。不同工人可以同时放下所选的箱子。</li>&#10;</ul>&#10;&#10;<p>如果满足下面任一条件，则认为工人 <code>i</code> 的 <strong>效率低于</strong> 工人 <code>j</code> ：</p>&#10;&#10;<ul>&#10;	<li><code>left<sub>i</sub> + right<sub>i</sub> > left<sub>j</sub> + right<sub>j</sub></code></li>&#10;	<li><code>left<sub>i</sub> + right<sub>i</sub> == left<sub>j</sub> + right<sub>j</sub></code> 且 <code>i > j</code></li>&#10;</ul>&#10;&#10;<p>工人通过桥时需要遵循以下规则：</p>&#10;&#10;<ul>&#10;	<li>同时只能有一名工人过桥。</li>&#10;	<li>当桥梁未被使用时，优先让右侧 <strong>效率最低</strong> 的工人（已经拿起盒子的工人）过桥。如果不是，优先让左侧 <strong>效率最低</strong> 的工人通过。</li>&#10;	<li>如果左侧已经派出足够的工人来拾取所有剩余的箱子，则 <strong>不会</strong> 再从左侧派出工人。</li>&#10;</ul>&#10;&#10;<p><span>请你返回最后一个箱子 </span><strong><span>到达桥左侧</span></strong><span> 的时间。</span></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>n = 1, k = 3, time = [[1,1,2,1],[1,1,3,1],[1,1,4,1]]</span></p>&#10;&#10;<p><span><b>输出：</b>6</span></p>&#10;&#10;<p><b>解释：</b></p>&#10;&#10;<pre>&#10;从 0 到 1 分钟：工人 2 通过桥到达右侧。&#10;从 1 到 2 分钟：工人 2 从右侧仓库拿起箱子。&#10;从 2 到 6 分钟：工人 2 通过桥到达左侧。&#10;从 6 到 7 分钟：工人 2 向左侧仓库放下箱子。&#10;整个过程在 7 分钟后结束。我们返回 6 因为该问题要求的是最后一名工人到达桥梁左侧的时间。&#10;</pre>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>n = 3, k = 2, time =</span> [[1,5,1,8],[10,10,10,10]]</p>&#10;&#10;<p><b>输出：</b>37</p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<pre>&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2500-2599/2532.Time%20to%20Cross%20a%20Bridge/images/378539249-c6ce3c73-40e7-4670-a8b5-7ddb9abede11.png" loading="lazy">&#10;</pre>&#10;&#10;<p>最后一个盒子在37秒时到达左侧。请注意，我们并 <strong>没有</strong> 放下最后一个箱子，因为那样会花费更多时间，而且它们已经和工人们一起在左边。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n, k &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>time.length == k</code></li>&#10;	<li><code>time[i].length == 4</code></li>&#10;	<li><code>1 &lt;= left<sub>i</sub>, pick<sub>i</sub>, right<sub>i</sub>, put<sub>i</sub> &lt;= 1000</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（大小根堆） + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>桥同时只能过一人，右岸等待优先，同岸则过桥时间之和更大者优先。箱子数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，工人状态随时间在两岸等待与装卸之间切换，直接按秒推进在时间范围 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span> 下不可行。</p>
<p>按过桥时间和将工人排序，下标越大越慢，等待队列用大根堆取最慢者。装卸完成时间用小根堆，到期后回到对应等待堆。当前两岸都无人可过时，把时钟跳到下一完成时刻。右岸有人则让其先回左岸；否则派左岸的人带下一箱过去。最后一箱送回左岸的时刻即为答案。</p>
</blockquote>
<p>我们先将工人按照效率从高到底排序，这样，下标越大的工人，效率越低。</p>
<p>接下来，我们用四个优先队列模拟工人的状态：</p>
<ul>
<li><code v-pre>wait_in_left</code>：大根堆，存储当前在左岸等待的工人的下标；</li>
<li><code v-pre>wait_in_right</code>：大根堆，存储当前在右岸等待的工人的下标；</li>
<li><code v-pre>work_in_left</code>：小根堆，存储当前在左岸工作的工人放好箱子的时间以及工人的下标；</li>
<li><code v-pre>work_in_right</code>：小根堆，存储当前在右岸工作的工人拿好箱子的时间以及工人的下标。</li>
</ul>
<p>初始时，所有工人都在左岸，因此 <code v-pre>wait_in_left</code> 中存储所有工人的下标。用变量 <code v-pre>cur</code> 记录当前时间。</p>
<p>然后，我们模拟整个过程。我们先判断当前时刻，<code v-pre>work_in_left</code> 是否有工人已经放好箱子，如果有，我们将工人放入 <code v-pre>wait_in_left</code> 中，然后将工人从 <code v-pre>work_in_left</code> 中移除。同理，我们再判断 <code v-pre>work_in_right</code> 是否有工人已经放好箱子，如果有，我们将工人放入 <code v-pre>wait_in_right</code> 中，然后将工人从 <code v-pre>work_in_right</code> 中移除。</p>
<p>接着，我们判断当前时刻是否有工人在左岸等待，记为 <code v-pre>left_to_go</code>，同时，我们判断当前时刻是否有工人在右岸等待，记为 <code v-pre>right_to_go</code>。如果不存在等待过岸的工人，我们直接将 <code v-pre>cur</code> 更新为下一个工人放好箱子的时间，然后继续模拟过程。</p>
<p>如果 <code v-pre>right_to_go</code> 为 <code v-pre>true</code>，我们从 <code v-pre>wait_in_right</code> 中取出一个工人，更新 <code v-pre>cur</code> 为当前时间加上该工人从右岸过左岸的时间，如果此时所有工人都已经过了右岸，我们直接将 <code v-pre>cur</code> 作为答案返回；否则，我们将该工人放入 <code v-pre>work_in_left</code> 中。</p>
<p>如果 <code v-pre>left_to_go</code> 为 <code v-pre>true</code>，我们从 <code v-pre>wait_in_left</code> 中取出一个工人，更新 <code v-pre>cur</code> 为当前时间加上该工人从左岸过右岸的时间，然后将该工人放入 <code v-pre>work_in_right</code> 中，并且将箱子数量减一。</p>
<p>循环上述过程，直到箱子数量为零，此时 <code v-pre>cur</code> 即为答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 分别为工人数量和箱子数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findCrossingTime(n int, k int, time [][]int) int {</span></span>
<span class="line"><span>	sort.SliceStable(time, func(i, j int) bool { return time[i][0]+time[i][2] &#x3C; time[j][0]+time[j][2] })</span></span>
<span class="line"><span>	waitInLeft := hp{}</span></span>
<span class="line"><span>	waitInRight := hp{}</span></span>
<span class="line"><span>	workInLeft := hp2{}</span></span>
<span class="line"><span>	workInRight := hp2{}</span></span>
<span class="line"><span>	for i := range time {</span></span>
<span class="line"><span>		heap.Push(&#x26;waitInLeft, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	cur := 0</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		for len(workInLeft) > 0 {</span></span>
<span class="line"><span>			if workInLeft[0].t > cur {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			heap.Push(&#x26;waitInLeft, heap.Pop(&#x26;workInLeft).(pair).i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for len(workInRight) > 0 {</span></span>
<span class="line"><span>			if workInRight[0].t > cur {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			heap.Push(&#x26;waitInRight, heap.Pop(&#x26;workInRight).(pair).i)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		leftToGo := n > 0 &#x26;&#x26; waitInLeft.Len() > 0</span></span>
<span class="line"><span>		rightToGo := waitInRight.Len() > 0</span></span>
<span class="line"><span>		if !leftToGo &#x26;&#x26; !rightToGo {</span></span>
<span class="line"><span>			nxt := 1 &#x3C;&#x3C; 30</span></span>
<span class="line"><span>			if len(workInLeft) > 0 {</span></span>
<span class="line"><span>				nxt = min(nxt, workInLeft[0].t)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if len(workInRight) > 0 {</span></span>
<span class="line"><span>				nxt = min(nxt, workInRight[0].t)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			cur = nxt</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if rightToGo {</span></span>
<span class="line"><span>			i := heap.Pop(&#x26;waitInRight).(int)</span></span>
<span class="line"><span>			cur += time[i][2]</span></span>
<span class="line"><span>			if n == 0 &#x26;&#x26; waitInRight.Len() == 0 &#x26;&#x26; len(workInRight) == 0 {</span></span>
<span class="line"><span>				return cur</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			heap.Push(&#x26;workInLeft, pair{cur + time[i][3], i})</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			i := heap.Pop(&#x26;waitInLeft).(int)</span></span>
<span class="line"><span>			cur += time[i][0]</span></span>
<span class="line"><span>			n--</span></span>
<span class="line"><span>			heap.Push(&#x26;workInRight, pair{cur + time[i][1], i})</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>type pair struct{ t, i int }</span></span>
<span class="line"><span>type hp2 []pair</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp2) Len() int           { return len(h) }</span></span>
<span class="line"><span>func (h hp2) Less(i, j int) bool { return h[i].t &#x3C; h[j].t }</span></span>
<span class="line"><span>func (h hp2) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }</span></span>
<span class="line"><span>func (h *hp2) Push(v any)        { *h = append(*h, v.(pair)) }</span></span>
<span class="line"><span>func (h *hp2) Pop() any          { a := *h; v := a[len(a)-1]; *h = a[:len(a)-1]; return v }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/time-to-cross-a-bridge" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2532.Time%20to%20Cross%20a%20Bridge/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2558" tabindex="-1">2558. 从数量最多的堆取走礼物 <a class="header-anchor" href="#q-2558" aria-label="Permalink to &quot;2558. 从数量最多的堆取走礼物 {#q-2558}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>gifts</code> ，表示各堆礼物的数量。每一秒，你需要执行以下操作：</p>&#10;&#10;<ul>&#10;	<li>选择礼物数量最多的那一堆。</li>&#10;	<li>如果不止一堆都符合礼物数量最多，从中选择任一堆即可。</li>&#10;	<li>将堆中的礼物数量减少到堆中原来礼物数量的平方根，向下取整。</li>&#10;</ul>&#10;&#10;<p>返回在 <code>k</code> 秒后剩下的礼物数量<em>。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>gifts = [25,64,9,4,100], k = 4&#10;<strong>输出：</strong>29&#10;<strong>解释：</strong> &#10;按下述方式取走礼物：&#10;- 在第一秒，选中最后一堆，剩下 10 个礼物。&#10;- 接着第二秒选中第二堆礼物，剩下 8 个礼物。&#10;- 然后选中第一堆礼物，剩下 5 个礼物。&#10;- 最后，再次选中最后一堆礼物，剩下 3 个礼物。&#10;最后剩下的礼物数量分别是 [5,8,9,4,3] ，所以，剩下礼物的总数量是 29 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>gifts = [1,1,1,1], k = 4&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>&#10;在本例中，不管选中哪一堆礼物，都必须剩下 1 个礼物。 &#10;也就是说，你无法获取任一堆中的礼物。 &#10;所以，剩下礼物的总数量是 4 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= gifts.length &lt;= 10<sup>3</sup></code></li>&#10;	<li><code>1 &lt;= gifts[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= 10<sup>3</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次把当前最多的一堆礼物改成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <msqrt>
    <mstyle scriptlevel="0">
      <mspace width="0.167em"></mspace>
    </mstyle>
    <mo>&#x22C5;</mo>
    <mstyle scriptlevel="0">
      <mspace width="0.167em"></mspace>
    </mstyle>
  </msqrt>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>，共 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次，求剩余总和。每次扫描找最大堆， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>3</mn>
  </msup>
</math></span> 尚可，但堆能直接给出当前最大。</p>
<p>大根堆弹出堆顶、压回其平方根（向下取整），重复 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次后再求和。Python 用相反数模拟。</p>
</blockquote>
<p>我们将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>g</mi>
  <mi>i</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 转存到大根堆中，然后循环 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次，每次取出堆顶元素，将堆顶元素开根号的结果再放入堆中。</p>
<p>最后累加堆中所有元素之和作为答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>k</mi>
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
  <mi>g</mi>
  <mi>i</mi>
  <mi>f</mi>
  <mi>t</mi>
  <mi>s</mi>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func pickGifts(gifts []int, k int) (ans int64) {</span></span>
<span class="line"><span>	h := &#x26;hp{gifts}</span></span>
<span class="line"><span>	heap.Init(h)</span></span>
<span class="line"><span>	for ; k > 0; k-- {</span></span>
<span class="line"><span>		gifts[0] = int(math.Sqrt(float64(gifts[0])))</span></span>
<span class="line"><span>		heap.Fix(h, 0)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for _, x := range gifts {</span></span>
<span class="line"><span>		ans += int64(x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp) Less(i, j int) bool { return h.IntSlice[i] > h.IntSlice[j] }</span></span>
<span class="line"><span>func (hp) Pop() (_ any)         { return }</span></span>
<span class="line"><span>func (hp) Push(any)             {}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/take-gifts-from-the-richest-pile" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2558.Take%20Gifts%20From%20the%20Richest%20Pile/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2593" tabindex="-1">2593. 标记所有元素后数组的分数 <a class="header-anchor" href="#q-2593" aria-label="Permalink to &quot;2593. 标记所有元素后数组的分数 {#q-2593}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个数组 <code>nums</code> ，它包含若干正整数。</p>&#10;&#10;<p>一开始分数 <code>score = 0</code> ，请你按照下面算法求出最后分数：</p>&#10;&#10;<ul>&#10;	<li>从数组中选择最小且没有被标记的整数。如果有相等元素，选择下标最小的一个。</li>&#10;	<li>将选中的整数加到 <code>score</code> 中。</li>&#10;	<li>标记 <strong>被选中元素</strong>，如果有相邻元素，则同时标记 <strong>与它相邻的两个元素</strong> 。</li>&#10;	<li>重复此过程直到数组中所有元素都被标记。</li>&#10;</ul>&#10;&#10;<p>请你返回执行上述算法后最后的分数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [2,1,3,4,5,2]&#10;<b>输出：</b>7&#10;<b>解释：</b>我们按照如下步骤标记元素：&#10;- 1 是最小未标记元素，所以标记它和相邻两个元素：[<u><em><strong>2</strong></em></u>,<u><em><strong>1</strong></em></u>,<u><em><strong>3</strong></em></u>,4,5,2] 。&#10;- 2 是最小未标记元素，所以标记它和左边相邻元素：[<u><em><strong>2</strong></em></u>,<u><em><strong>1</strong></em></u>,<u><em><strong>3</strong></em></u>,4,<u><em><strong>5</strong></em></u>,<u><em><strong>2</strong></em></u>] 。&#10;- 4 是仅剩唯一未标记的元素，所以我们标记它：[<u><em><strong>2</strong></em></u>,<u><em><strong>1</strong></em></u>,<u><em><strong>3</strong></em></u>,<u><em><strong>4</strong></em></u>,<u><em><strong>5</strong></em></u>,<u><em><strong>2</strong></em></u>] 。&#10;总得分为 1 + 2 + 4 = 7 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [2,3,5,1,3,2]&#10;<b>输出：</b>5&#10;<b>解释：</b>我们按照如下步骤标记元素：&#10;- 1 是最小未标记元素，所以标记它和相邻两个元素：[2,3,<u><em><strong>5</strong></em></u>,<u><em><strong>1</strong></em></u>,<u><em><strong>3</strong></em></u>,2] 。&#10;- 2 是最小未标记元素，由于有两个 2 ，我们选择最左边的一个 2 ，也就是下标为 0 处的 2 ，以及它右边相邻的元素：[<u><em><strong>2</strong></em></u>,<u><em><strong>3</strong></em></u>,<u><em><strong>5</strong></em></u>,<u><em><strong>1</strong></em></u>,<u><em><strong>3</strong></em></u>,2] 。&#10;- 2 是仅剩唯一未标记的元素，所以我们标记它：[<u><em><strong>2</strong></em></u>,<u><em><strong>3</strong></em></u>,<u><em><strong>5</strong></em></u>,<u><em><strong>1</strong></em></u>,<u><em><strong>3</strong></em></u>,<u><em><strong>2</strong></em></u>] 。&#10;总得分为 1 + 2 + 2 = 5 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>反复选出未标记的最小元素（并列取最左）加入分数，并标记它与左右邻居，直至全部标记。每次线性找最小是平方级。</p>
<p>小根堆按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x503C;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x4E0B;</mi>
  <mi mathvariant="normal">&#x6807;</mi>
  <mo stretchy="false">)</mo>
</math></span> 弹出全局最小未标记者。标记其邻域后，堆顶若已标记则继续弹出。每个元素至多入堆一次。</p>
</blockquote>
<p>我们用一个优先队列维护数组中未被标记的元素，队列中每一项为一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 分别表示数组中的元素值和下标，用一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span> 记录数组中的元素是否被标记。</p>
<p>每次从队列中取出最小的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 加入答案，然后标记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的元素，以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的左右相邻元素，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 位置的元素。接下来判断堆顶元素是否被标记，如果被标记则弹出堆顶元素，直到堆顶元素未被标记，或者堆为空。</p>
<p>最后返回答案即可。</p>
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
</math></span> 为数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findScore(nums []int) (ans int64) {</span></span>
<span class="line"><span>	h := hp{}</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		heap.Push(&#x26;h, pair{x, i})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	vis := make([]bool, n)</span></span>
<span class="line"><span>	for len(h) > 0 {</span></span>
<span class="line"><span>		p := heap.Pop(&#x26;h).(pair)</span></span>
<span class="line"><span>		x, i := p.x, p.i</span></span>
<span class="line"><span>		ans += int64(x)</span></span>
<span class="line"><span>		vis[i] = true</span></span>
<span class="line"><span>		for _, j := range []int{i - 1, i + 1} {</span></span>
<span class="line"><span>			if j >= 0 &#x26;&#x26; j &#x3C; n {</span></span>
<span class="line"><span>				vis[j] = true</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for len(h) > 0 &#x26;&#x26; vis[h[0].i] {</span></span>
<span class="line"><span>			heap.Pop(&#x26;h)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct{ x, i int }</span></span>
<span class="line"><span>type hp []pair</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp) Len() int           { return len(h) }</span></span>
<span class="line"><span>func (h hp) Less(i, j int) bool { return h[i].x &#x3C; h[j].x || (h[i].x == h[j].x &#x26;&#x26; h[i].i &#x3C; h[j].i) }</span></span>
<span class="line"><span>func (h hp) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }</span></span>
<span class="line"><span>func (h *hp) Push(v any)        { *h = append(*h, v.(pair)) }</span></span>
<span class="line"><span>func (h *hp) Pop() any          { a := *h; v := a[len(a)-1]; *h = a[:len(a)-1]; return v }</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一用堆动态取最小。操作顺序其实就是按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x503C;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x4E0B;</mi>
  <mi mathvariant="normal">&#x6807;</mi>
  <mo stretchy="false">)</mo>
</math></span> 的静态序，事先排序后依次检查：未被邻域波及则计入并标记左右。避免堆的弹出循环。</p>
</blockquote>
<p>我们可以创建一个下标数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
</math></span>，然后我们对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
</math></span> 按照数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 中的元素值进行排序，如果元素值相同，则按照下标值进行排序。</p>
<p>接下来创建一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>+</mo>
  <mn>2</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>f</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mi>e</mi>
</math></span>，表示数组中的元素是否被标记。</p>
<p>我们遍历下标数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
</math></span>，对于数组中的每一个下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mi>i</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>a</mi>
  <mi>l</mi>
  <mi>s</mi>
  <mi>e</mi>
</math></span>，则表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的元素未被标记，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 加入答案，然后标记 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的元素，以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 位置的左右相邻元素，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 位置的元素。继续遍历下标数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>d</mi>
  <mi>x</mi>
</math></span>，直到遍历结束。</p>
<p>最后返回答案即可。</p>
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
</math></span> 为数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findScore(nums []int) (ans int64) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	idx := make([]int, n)</span></span>
<span class="line"><span>	for i := range idx {</span></span>
<span class="line"><span>		idx[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(idx, func(i, j int) bool {</span></span>
<span class="line"><span>		i, j = idx[i], idx[j]</span></span>
<span class="line"><span>		return nums[i] &#x3C; nums[j] || (nums[i] == nums[j] &#x26;&#x26; i &#x3C; j)</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	vis := make([]bool, n+2)</span></span>
<span class="line"><span>	for _, i := range idx {</span></span>
<span class="line"><span>		if !vis[i+1] {</span></span>
<span class="line"><span>			ans += int64(nums[i])</span></span>
<span class="line"><span>			vis[i], vis[i+2] = true, true</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-score-of-an-array-after-marking-all-elements" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2500-2599/2593.Find%20Score%20of%20an%20Array%20After%20Marking%20All%20Elements/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2679" tabindex="-1">2679. 矩阵中的和 <a class="header-anchor" href="#q-2679" aria-label="Permalink to &quot;2679. 矩阵中的和 {#q-2679}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、矩阵、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>nums</code> 。一开始你的分数为 <code>0</code> 。你需要执行以下操作直到矩阵变为空：</p>&#10;&#10;<ol>&#10;	<li>矩阵中每一行选取最大的一个数，并删除它。如果一行中有多个最大的数，选择任意一个并删除。</li>&#10;	<li>在步骤 1 删除的所有数字中找到最大的一个数字，将它添加到你的 <strong>分数</strong> 中。</li>&#10;</ol>&#10;&#10;<p>请你返回最后的 <strong>分数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]&#10;<b>输出：</b>15&#10;<b>解释：</b>第一步操作中，我们删除 7 ，6 ，6 和 3 ，将分数增加 7 。下一步操作中，删除 2 ，4 ，5 和 2 ，将分数增加 5 。最后删除 1 ，2 ，3 和 1 ，将分数增加 3 。所以总得分为 7 + 5 + 3 = 15 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [[1]]&#10;<b>输出：</b>1&#10;<b>解释：</b>我们删除 1 并将分数增加 1 ，所以返回 1 。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 300</code></li>&#10;	<li><code>1 &lt;= nums[i].length &lt;= 500</code></li>&#10;	<li><code>0 &lt;= nums[i][j] &lt;= 10<sup>3</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每轮从每行删一个当前最大并累加这些最大中的最大者。若每轮都找行最大， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>n</mi>
  <mi>k</mi>
</math></span> 偏高。各行排序后，同一列位置对应「第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 大」的对齐，列最大值之和即总得分。</p>
</blockquote>
<p>我们可以先遍历矩阵的每一行，将每一行排序。</p>
<p>接下来，遍历矩阵的每一列，找到每一列的最大值，将这些最大值相加即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo>&#xD7;</mo>
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
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是矩阵的行数和列数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func matrixSum(nums [][]int) (ans int) {</span></span>
<span class="line"><span>	for _, row := range nums {</span></span>
<span class="line"><span>		sort.Ints(row)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(nums[0]); i++ {</span></span>
<span class="line"><span>		mx := 0</span></span>
<span class="line"><span>		for _, row := range nums {</span></span>
<span class="line"><span>			mx = max(mx, row[i])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += mx</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/sum-in-a-matrix" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2600-2699/2679.Sum%20in%20a%20Matrix/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2974" tabindex="-1">2974. 最小数字游戏 <a class="header-anchor" href="#q-2974" aria-label="Permalink to &quot;2974. 最小数字游戏 {#q-2974}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一个下标从 <strong>0</strong> 开始、长度为 <strong>偶数</strong> 的整数数组 <code>nums</code> ，同时还有一个空数组 <code>arr</code> 。Alice 和 Bob 决定玩一个游戏，游戏中每一轮 Alice 和 Bob 都会各自执行一次操作。游戏规则如下：</p>&#10;&#10;<ul>&#10;	<li>每一轮，Alice 先从 <code>nums</code> 中移除一个<strong> 最小</strong> 元素，然后 Bob 执行同样的操作。</li>&#10;	<li>接着，Bob 会将移除的元素添加到数组 <code>arr</code> 中，然后 Alice 也执行同样的操作。</li>&#10;	<li>游戏持续进行，直到 <code>nums</code> 变为空。</li>&#10;</ul>&#10;&#10;<p>返回结果数组 <code>arr</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [5,4,2,3]&#10;<strong>输出：</strong>[3,2,5,4]&#10;<strong>解释：</strong>第一轮，Alice 先移除 2 ，然后 Bob 移除 3 。然后 Bob 先将 3 添加到 arr 中，接着 Alice 再将 2 添加到 arr 中。于是 arr = [3,2] 。&#10;第二轮开始时，nums = [5,4] 。Alice 先移除 4 ，然后 Bob 移除 5 。接着他们都将元素添加到 arr 中，arr 变为 [3,2,5,4] 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,5]&#10;<strong>输出：</strong>[5,2]&#10;<strong>解释：</strong>第一轮，Alice 先移除 2 ，然后 Bob 移除 5 。然后 Bob 先将 5 添加到 arr 中，接着 Alice 再将 2 添加到 arr 中。于是 arr = [5,2] 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;	<li><code>nums.length % 2 == 0</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：模拟 + 优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每轮取出两个当前最小数，却按「先放较大、再放较小」写入答案。等价于反复弹出堆顶两个元素并交换顺序追加。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span> 且为偶数，堆模拟与题面过程一致。</p>
</blockquote>
<p>我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的元素依次放入一个小根堆中，每次从小根堆中取出两个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，然后依次将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 放入答案数组中，直到小根堆为空。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberGame(nums []int) (ans []int) {</span></span>
<span class="line"><span>	pq := &#x26;hp{nums}</span></span>
<span class="line"><span>	heap.Init(pq)</span></span>
<span class="line"><span>	for pq.Len() > 0 {</span></span>
<span class="line"><span>		a := heap.Pop(pq).(int)</span></span>
<span class="line"><span>		b := heap.Pop(pq).(int)</span></span>
<span class="line"><span>		ans = append(ans, b)</span></span>
<span class="line"><span>		ans = append(ans, a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *hp) Less(i, j int) bool { return h.IntSlice[i] &#x3C; h.IntSlice[j] }</span></span>
<span class="line"><span>func (h *hp) Pop() interface{} {</span></span>
<span class="line"><span>	old := h.IntSlice</span></span>
<span class="line"><span>	n := len(old)</span></span>
<span class="line"><span>	x := old[n-1]</span></span>
<span class="line"><span>	h.IntSlice = old[0 : n-1]</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (h *hp) Push(x interface{}) {</span></span>
<span class="line"><span>	h.IntSlice = append(h.IntSlice, x.(int))</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：排序 + 交换 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一维护堆，但全局最小值序列在排序后即确定：相邻的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mn>2</mn>
      <mi>i</mi>
    </mrow>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mrow data-mjx-texclass="ORD">
      <mn>2</mn>
      <mi>i</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo stretchy="false">)</mo>
</math></span> 正是每轮弹出的一对。交换这两位后写入，无需动态结构。时间仍由排序主导。</p>
</blockquote>
<p>我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 排序，然后遍历数组，每次交换相邻的两个元素，直到遍历结束，返回交换后的数组。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func numberGame(nums []int) []int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(nums); i += 2 {</span></span>
<span class="line"><span>		nums[i], nums[i+1] = nums[i+1], nums[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nums</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-number-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2900-2999/2974.Minimum%20Number%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3066" tabindex="-1">3066. 超过阈值的最少操作数 II <a class="header-anchor" href="#q-3066" aria-label="Permalink to &quot;3066. 超过阈值的最少操作数 II {#q-3066}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个整数 <code>k</code> 。</p>&#10;&#10;<p>你可以对 <code>nums</code> 执行一些操作，在一次操作中，你可以：</p>&#10;&#10;<ul>&#10;	<li>选择 <code>nums</code> 中 <strong>最小</strong> 的两个整数 <code>x</code> 和 <code>y</code> 。</li>&#10;	<li>将 <code>x</code> 和 <code>y</code> 从 <code>nums</code> 中删除。</li>&#10;	<li>将 <code>min(x, y) * 2 + max(x, y)</code> 添加到数组中的任意位置。</li>&#10;</ul>&#10;&#10;<p><b>注意，</b>只有当 <code>nums</code> <strong>至少</strong> 包含两个元素时，你才可以执行以上操作。</p>&#10;&#10;<p>你需要使数组中的所有元素都 <strong>大于或等于</strong> <code>k</code> ，请你返回需要的 <strong>最少</strong> 操作次数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><b>输入：</b>nums = [2,11,10,1,3], k = 10</p>&#10;&#10;<p><b>输出：</b>2</p>&#10;&#10;<p><b>解释：</b></p>&#10;&#10;<ol>&#10;	<li>第一次操作中，我们删除元素 1 和 2 ，然后添加 <code>1 * 2 + 2</code> 到 <code>nums</code> 中，<code>nums</code> 变为 <code>[4, 11, 10, 3]</code> 。</li>&#10;	<li>第二次操作中，我们删除元素 3 和 4 ，然后添加 <code>3 * 2 + 4</code> 到 <code>nums</code> 中，<code>nums</code> 变为 <code>[10, 11, 10]</code> 。</li>&#10;</ol>&#10;&#10;<p>此时，数组中的所有元素都大于等于 10 ，所以我们停止操作。</p>&#10;&#10;<p>可以证明使数组中所有元素都大于等于 10 需要的最少操作次数为 2 。</p>&#10;&#10;<p> </p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><b>输入：</b>nums = [1,1,2,4,9], k = 20</p>&#10;&#10;<p><b>输出：</b>4</p>&#10;&#10;<p><b>解释：</b></p>&#10;&#10;<ol>&#10;	<li>第一次操作后，<code>nums</code> 变为 <code>[2, 4, 9, 3]</code>。</li>&#10;	<li>第二次操作后，<code>nums</code> 变为 <code>[7, 4, 9]</code>。</li>&#10;	<li>第三次操作后，<code>nums</code> 变为 <code>[15, 9]</code>。</li>&#10;	<li>第四次操作后，<code>nums</code> 变为 <code>[33]</code>。</li>&#10;</ol>&#10;&#10;<p>此时，<code>nums</code> 中的所有元素都大于等于 20 ，所以我们停止操作。</p>&#10;&#10;<p>可以证明使数组中所有元素都大于等于 20 需要的最少操作次数为 4 。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= nums.length &lt;= 2 * 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>&#10;	<li>输入保证答案一定存在，也就是说，在进行某些次数的操作后，数组中所有元素都大于等于 <code>k</code> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次取最小的两个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x2264;</mo>
  <mi>y</mi>
</math></span>，放入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span>，直到最小值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>k</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能每次线性找最小。</p>
<p>操作总是消耗当前最小的两个，用小根堆即可按定义模拟。</p>
<p>堆化后循环弹出两个、压入 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
</math></span>，直到堆顶达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。</p>
</blockquote>
<p>我们可以使用优先队列（小根堆）来模拟这个过程。</p>
<p>具体地，我们先将数组中的元素加入优先队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 中。然后我们不断地从优先队列中取出两个最小的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>&#xD7;</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 放回优先队列中。每次操作后，我们将操作次数加一。当队列中的元素个数小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 或者队列中的最小元素大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时，我们停止操作。</p>
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
</math></span> 为数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minOperations(nums []int, k int) (ans int) {</span></span>
<span class="line"><span>	pq := &#x26;hp{nums}</span></span>
<span class="line"><span>	heap.Init(pq)</span></span>
<span class="line"><span>	for ; pq.Len() > 1 &#x26;&#x26; pq.IntSlice[0] &#x3C; k; ans++ {</span></span>
<span class="line"><span>		x, y := heap.Pop(pq).(int), heap.Pop(pq).(int)</span></span>
<span class="line"><span>		heap.Push(pq, x*2+y)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *hp) Less(i, j int) bool { return h.IntSlice[i] &#x3C; h.IntSlice[j] }</span></span>
<span class="line"><span>func (h *hp) Pop() interface{} {</span></span>
<span class="line"><span>	old := h.IntSlice</span></span>
<span class="line"><span>	n := len(old)</span></span>
<span class="line"><span>	x := old[n-1]</span></span>
<span class="line"><span>	h.IntSlice = old[0 : n-1]</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func (h *hp) Push(x interface{}) {</span></span>
<span class="line"><span>	h.IntSlice = append(h.IntSlice, x.(int))</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-exceed-threshold-value-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3066.Minimum%20Operations%20to%20Exceed%20Threshold%20Value%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3080" tabindex="-1">3080. 执行操作标记数组中的元素 <a class="header-anchor" href="#q-3080" aria-label="Permalink to &quot;3080. 执行操作标记数组中的元素 {#q-3080}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 下标从 <strong>0</strong> 开始的正整数数组 <code>nums</code> 。</p>&#10;&#10;<p>同时给你一个长度为 <code>m</code> 的二维操作数组 <code>queries</code> ，其中 <code>queries[i] = [index<sub>i</sub>, k<sub>i</sub>]</code> 。</p>&#10;&#10;<p>一开始，数组中的所有元素都 <strong>未标记</strong> 。</p>&#10;&#10;<p>你需要依次对数组执行 <code>m</code> 次操作，第 <code>i</code> 次操作中，你需要执行：</p>&#10;&#10;<ul>&#10;	<li>如果下标 <code>index<sub>i</sub></code> 对应的元素还没标记，那么标记这个元素。</li>&#10;	<li>然后标记 <code>k<sub>i</sub></code> 个数组中还没有标记的 <strong>最小</strong> 元素。如果有元素的值相等，那么优先标记它们中下标较小的。如果少于 <code>k<sub>i</sub></code> 个未标记元素存在，那么将它们全部标记。</li>&#10;</ul>&#10;&#10;<p>请你返回一个长度为 <code>m</code> 的数组 <code>answer</code> ，其中<em> </em><code>answer[i]</code>是第 <code>i</code> 次操作后数组中还没标记元素的 <strong>和</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [1,2,2,1,2,3,1], queries = [[1,2],[3,3],[4,2]]</span></p>&#10;&#10;<p><strong>输出：</strong><span>[8,3,0]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>我们依次对数组做以下操作：</p>&#10;&#10;<ul>&#10;	<li>标记下标为 <code>1</code> 的元素，同时标记 <code>2</code> 个未标记的最小元素。标记完后数组为 <code>nums = [<em><strong>1</strong></em>,<em><strong>2</strong></em>,2,<em><strong>1</strong></em>,2,3,1]</code> 。未标记元素的和为 <code>2 + 2 + 3 + 1 = 8</code> 。</li>&#10;	<li>标记下标为 <code>3</code> 的元素，由于它已经被标记过了，所以我们忽略这次标记，同时标记最靠前的 <code>3</code> 个未标记的最小元素。标记完后数组为 <code>nums = [<em><strong>1</strong></em>,<em><strong>2</strong></em>,<em><strong>2</strong></em>,<em><strong>1</strong></em>,<em><strong>2</strong></em>,3,<em><strong>1</strong></em>]</code> 。未标记元素的和为 <code>3</code> 。</li>&#10;	<li>标记下标为 <code>4</code> 的元素，由于它已经被标记过了，所以我们忽略这次标记，同时标记最靠前的 <code>2</code> 个未标记的最小元素。标记完后数组为 <code>nums = [<em><strong>1</strong></em>,<em><strong>2</strong></em>,<em><strong>2</strong></em>,<em><strong>1</strong></em>,<em><strong>2</strong></em>,<em><strong>3</strong></em>,<em><strong>1</strong></em>]</code> 。未标记元素的和为 <code>0</code> 。</li>&#10;</ul>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums = [1,4,2,3], queries = [[0,1]]</span></p>&#10;&#10;<p><strong>输出：</strong><span>[7]</span></p>&#10;&#10;<p><strong>解释：</strong>我们执行一次操作，将下标为 <code>0</code> 处的元素标记，并且标记最靠前的 <code>1</code> 个未标记的最小元素。标记完后数组为 <code>nums = [<em><strong>1</strong></em>,4,<em><strong>2</strong></em>,3]</code> 。未标记元素的和为 <code>4 + 3 = 7</code> 。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums.length</code></li>&#10;	<li><code>m == queries.length</code></li>&#10;	<li><code>1 &lt;= m &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>queries[i].length == 2</code></li>&#10;	<li><code>0 &lt;= index<sub>i</sub>, k<sub>i</sub> &lt;= n - 1</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次先标记指定下标，再标记当前未标记中最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个（同值取更小下标）。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能每次重新选最小。</p>
<p>未标记最小值的顺序是固定的，可预先按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">value</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">index</mtext>
  <mo stretchy="false">)</mo>
</math></span> 排序，用指针只向前走。</p>
<p>维护总和与标记数组，查询时先处理指定下标，再从排序数组上继续弹出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个未标记值。</p>
</blockquote>
<p>我们先计算出数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
</math></span> 的总和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，定义一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>k</mi>
</math></span> 用来标记数组中的元素是否被标记过，初始化所有元素都未被标记。</p>
<p>然后我们创建一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span>，数组中的每个元素是一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示数组中的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个元素的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。我们对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 按照元素的值进行排序，如果元素的值相等，我们按照下标从小到大的顺序进行排序。</p>
<p>接下来我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mi>u</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span>，对于每个查询 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span>，我们首先判断下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>x</mi>
</math></span> 对应的元素是否被标记过，如果没有被标记过，我们将其标记，并且将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 减去下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mi>n</mi>
  <mi>d</mi>
  <mi>e</mi>
  <mi>x</mi>
</math></span> 对应的元素的值。然后我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span>，对于每个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，如果元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 没有被标记过，我们将其标记，并且将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 减去元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 对应的值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 或者数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mi>r</mi>
  <mi>r</mi>
</math></span> 遍历完。然后我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 加入答案数组中。</p>
<p>遍历完所有的查询后，我们就得到了答案数组。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func unmarkedSumArray(nums []int, queries [][]int) []int64 {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	var s int64</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s += int64(x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	mark := make([]bool, n)</span></span>
<span class="line"><span>	arr := make([][2]int, 0, n)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		arr = append(arr, [2]int{x, i})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(arr, func(i, j int) bool {</span></span>
<span class="line"><span>		if arr[i][0] == arr[j][0] {</span></span>
<span class="line"><span>			return arr[i][1] &#x3C; arr[j][1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return arr[i][0] &#x3C; arr[j][0]</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	ans := make([]int64, len(queries))</span></span>
<span class="line"><span>	j := 0</span></span>
<span class="line"><span>	for i, q := range queries {</span></span>
<span class="line"><span>		index, k := q[0], q[1]</span></span>
<span class="line"><span>		if !mark[index] {</span></span>
<span class="line"><span>			mark[index] = true</span></span>
<span class="line"><span>			s -= int64(nums[index])</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for ; k > 0 &#x26;&#x26; j &#x3C; n; j++ {</span></span>
<span class="line"><span>			if !mark[arr[j][1]] {</span></span>
<span class="line"><span>				mark[arr[j][1]] = true</span></span>
<span class="line"><span>				s -= int64(arr[j][0])</span></span>
<span class="line"><span>				k--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans[i] = s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/mark-elements-on-array-by-performing-queries" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3080.Mark%20Elements%20on%20Array%20by%20Performing%20Queries/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3092" tabindex="-1">3092. 最高频率的 ID <a class="header-anchor" href="#q-3092" aria-label="Permalink to &quot;3092. 最高频率的 ID {#q-3092}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、有序集合、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你需要在一个集合里动态记录 ID 的出现频率。给你两个长度都为 <code>n</code> 的整数数组 <code>nums</code> 和 <code>freq</code> ，<code>nums</code> 中每一个元素表示一个 ID ，对应的 <code>freq</code> 中的元素表示这个 ID 在集合中此次操作后需要增加或者减少的数目。</p>&#10;&#10;<ul>&#10;	<li><strong>增加 ID 的数目：</strong>如果 <code>freq[i]</code> 是正数，那么 <code>freq[i]</code> 个 ID 为 <code>nums[i]</code> 的元素在第 <code>i</code> 步操作后会添加到集合中。</li>&#10;	<li><strong>减少 ID 的数目：</strong>如果 <code>freq[i]</code> 是负数，那么 <code>-freq[i]</code> 个 ID 为 <code>nums[i]</code> 的元素在第 <code>i</code> 步操作后会从集合中删除。</li>&#10;</ul>&#10;&#10;<p>请你返回一个长度为 <code>n</code> 的数组 <code>ans</code> ，其中 <code>ans[i]</code> 表示第 <code>i</code> 步操作后出现频率最高的 ID <strong>数目</strong> ，如果在某次操作后集合为空，那么 <code>ans[i]</code> 为 0 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>nums = [2,3,2,1], freq = [3,2,-3,1]</span></p>&#10;&#10;<p><span><b>输出：</b>[3,3,2,2]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>第 0 步操作后，有 3 个 ID 为 2 的元素，所以 <code>ans[0] = 3</code> 。<br>&#10;第 1 步操作后，有 3 个 ID 为 2 的元素和 2 个 ID 为 3 的元素，所以 <code>ans[1] = 3</code> 。<br>&#10;第 2 步操作后，有 2 个 ID 为 3 的元素，所以 <code>ans[2] = 2</code> 。<br>&#10;第 3 步操作后，有 2 个 ID 为 3 的元素和 1 个 ID 为 1 的元素，所以 <code>ans[3] = 2</code> 。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>nums = [5,5,3], freq = [2,-2,1]</span></p>&#10;&#10;<p><span><b>输出：</b>[2,0,1]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>第 0 步操作后，有 2 个 ID 为 5 的元素，所以 <code>ans[0] = 2</code> 。<br>&#10;第 1 步操作后，集合中没有任何元素，所以 <code>ans[1] = 0</code> 。<br>&#10;第 2 步操作后，有 1 个 ID 为 3 的元素，所以 <code>ans[2] = 1</code> 。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length == freq.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>-10<sup>5</sup> &lt;= freq[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>freq[i] != 0</code></li>&#10;	<li>输入保证任何操作后，集合中的元素出现次数不会为负数。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 + 优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>动态维护每个 ID 的次数，每次操作后输出当前最大次数。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能每次扫描。</p>
<p>次数可增可减，堆无法直接改旧值。把过期次数记入懒删除表，堆顶若已过期则弹出。</p>
<p>哈希表存真实次数，另一表记某次次数被作废的个数；每次把新次数压入大根堆并清理堆顶。</p>
</blockquote>
<p>我们用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 来记录每个 ID 的出现次数，用一个哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>z</mi>
  <mi>y</mi>
</math></span> 来记录每个次数需要被删除的个数。用一个优先队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 来维护出现次数的最大值。</p>
<p>每一次操作 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>f</mi>
  <mo stretchy="false">)</mo>
</math></span>，我们需要更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的出现次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span>，这意味着 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>z</mi>
  <mi>y</mi>
</math></span> 中的值需要增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，表示该次数需要删除的个数增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。然后我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值，将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span>。然后我们更新后的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值加入优先队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 中。然后我们检查优先队列 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>q</mi>
</math></span> 的堆顶元素，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>z</mi>
  <mi>y</mi>
</math></span> 中对应的次数需要删除的个数大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，我们就将堆顶元素弹出。最后，我们判断优先队列是否为空，如果不为空，堆顶元素就是出现次数的最大值，我们将其加入答案数组中。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func mostFrequentIDs(nums []int, freq []int) []int64 {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	lazy := map[int]int{}</span></span>
<span class="line"><span>	ans := make([]int64, n)</span></span>
<span class="line"><span>	pq := hp{}</span></span>
<span class="line"><span>	heap.Init(&#x26;pq)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		f := freq[i]</span></span>
<span class="line"><span>		lazy[cnt[x]]++</span></span>
<span class="line"><span>		cnt[x] += f</span></span>
<span class="line"><span>		heap.Push(&#x26;pq, cnt[x])</span></span>
<span class="line"><span>		for pq.Len() > 0 &#x26;&#x26; lazy[pq.IntSlice[0]] > 0 {</span></span>
<span class="line"><span>			lazy[pq.IntSlice[0]]--</span></span>
<span class="line"><span>			heap.Pop(&#x26;pq)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if pq.Len() > 0 {</span></span>
<span class="line"><span>			ans[i] = int64(pq.IntSlice[0])</span></span>
<span class="line"><span>		}</span></span>
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
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/most-frequent-ids" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3000-3099/3092.Most%20Frequent%20IDs/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3264" tabindex="-1">3264. K 次乘运算后的最终数组 I <a class="header-anchor" href="#q-3264" aria-label="Permalink to &quot;3264. K 次乘运算后的最终数组 I {#q-3264}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、数学、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> ，一个整数 <code>k</code>  和一个整数 <code>multiplier</code> 。</p>&#10;&#10;<p>你需要对 <code>nums</code> 执行 <code>k</code> 次操作，每次操作中：</p>&#10;&#10;<ul>&#10;	<li>找到 <code>nums</code> 中的 <strong>最小</strong> 值 <code>x</code> ，如果存在多个最小值，选择最 <strong>前面</strong> 的一个。</li>&#10;	<li>将 <code>x</code> 替换为 <code>x * multiplier</code> 。</li>&#10;</ul>&#10;&#10;<p>请你返回执行完 <code>k</code> 次乘运算之后，最终的 <code>nums</code> 数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>nums = [2,1,3,5,6], k = 5, multiplier = 2</span></p>&#10;&#10;<p><span><b>输出：</b>[8,4,6,5,6]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<table>&#10;	<tbody>&#10;		<tr>&#10;			<th>操作</th>&#10;			<th>结果</th>&#10;		</tr>&#10;		<tr>&#10;			<td>1 次操作后</td>&#10;			<td>[2, 2, 3, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>2 次操作后</td>&#10;			<td>[4, 2, 3, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>3 次操作后</td>&#10;			<td>[4, 4, 3, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>4 次操作后</td>&#10;			<td>[4, 4, 6, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>5 次操作后</td>&#10;			<td>[8, 4, 6, 5, 6]</td>&#10;		</tr>&#10;	</tbody>&#10;</table>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b></span>nums = [1,2], k = 3, multiplier = 4</p>&#10;&#10;<p><span><b>输出：</b></span>[16,8]</p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<table>&#10;	<tbody>&#10;		<tr>&#10;			<th>操作</th>&#10;			<th>结果</th>&#10;		</tr>&#10;		<tr>&#10;			<td>1 次操作后</td>&#10;			<td>[4, 2]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>2 次操作后</td>&#10;			<td>[4, 8]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>3 次操作后</td>&#10;			<td>[16, 8]</td>&#10;		</tr>&#10;	</tbody>&#10;</table>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;	<li><code>1 &lt;= k &lt;= 10</code></li>&#10;	<li><code>1 &lt;= multiplier &lt;= 5</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（小根堆）+ 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次把最小值乘上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">multiplier</mtext>
</math></span>（并列取更小下标）。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
</math></span> 都很小，模拟 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次即可。找最小值若每次线性扫，常数仍可接受，堆更贴题意。</p>
<p>堆中存 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi mathvariant="normal">&#x503C;</mi>
  <mo>,</mo>
  <mi mathvariant="normal">&#x4E0B;</mi>
  <mi mathvariant="normal">&#x6807;</mi>
  <mo stretchy="false">)</mo>
</math></span>，弹出最小者原地乘回再压入。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 轮后数组即为最终状态。</p>
</blockquote>
<p>我们可以用一个小根堆来维护数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的元素，每次从小根堆中取出最小值，将其乘以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">multiplier</mtext>
</math></span> 后再放回小根堆中。在实现过程中，我们往小根堆插入的是元素的下标，然后自定义比较函数，使得小根堆按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中元素的大小作为第一关键字，下标作为第二关键字进行排序。</p>
<p>最后，我们返回数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
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
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func getFinalState(nums []int, k int, multiplier int) []int {</span></span>
<span class="line"><span>	h := &#x26;hp{nums: nums}</span></span>
<span class="line"><span>	for i := range nums {</span></span>
<span class="line"><span>		heap.Push(h, i)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for k > 0 {</span></span>
<span class="line"><span>		i := heap.Pop(h).(int)</span></span>
<span class="line"><span>		nums[i] *= multiplier</span></span>
<span class="line"><span>		heap.Push(h, i)</span></span>
<span class="line"><span>		k--</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return nums</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct {</span></span>
<span class="line"><span>	sort.IntSlice</span></span>
<span class="line"><span>	nums []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *hp) Less(i, j int) bool {</span></span>
<span class="line"><span>	if h.nums[h.IntSlice[i]] == h.nums[h.IntSlice[j]] {</span></span>
<span class="line"><span>		return h.IntSlice[i] &#x3C; h.IntSlice[j]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return h.nums[h.IntSlice[i]] &#x3C; h.nums[h.IntSlice[j]]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *hp) Pop() any {</span></span>
<span class="line"><span>	old := h.IntSlice</span></span>
<span class="line"><span>	n := len(old)</span></span>
<span class="line"><span>	x := old[n-1]</span></span>
<span class="line"><span>	h.IntSlice = old[:n-1]</span></span>
<span class="line"><span>	return x</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *hp) Push(x any) {</span></span>
<span class="line"><span>	h.IntSlice = append(h.IntSlice, x.(int))</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/final-array-state-after-k-multiplication-operations-i" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3200-3299/3264.Final%20Array%20State%20After%20K%20Multiplication%20Operations%20I/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3266" tabindex="-1">3266. K 次乘运算后的最终数组 II <a class="header-anchor" href="#q-3266" aria-label="Permalink to &quot;3266. K 次乘运算后的最终数组 II {#q-3266}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> ，一个整数 <code>k</code>  和一个整数 <code>multiplier</code> 。</p>&#10;&#10;<p>你需要对 <code>nums</code> 执行 <code>k</code> 次操作，每次操作中：</p>&#10;&#10;<ul>&#10;	<li>找到 <code>nums</code> 中的 <strong>最小</strong> 值 <code>x</code> ，如果存在多个最小值，选择最 <strong>前面</strong> 的一个。</li>&#10;	<li>将 <code>x</code> 替换为 <code>x * multiplier</code> 。</li>&#10;</ul>&#10;&#10;<p><code>k</code> 次操作以后，你需要将 <code>nums</code> 中每一个数值对 <code>10<sup>9</sup> + 7</code> 取余。</p>&#10;&#10;<p>请你返回执行完 <code>k</code> 次乘运算以及取余运算之后，最终的 <code>nums</code> 数组。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>nums = [2,1,3,5,6], k = 5, multiplier = 2</span></p>&#10;&#10;<p><span><b>输出：</b>[8,4,6,5,6]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<table>&#10;	<tbody>&#10;		<tr>&#10;			<th>操作</th>&#10;			<th>结果</th>&#10;		</tr>&#10;		<tr>&#10;			<td>1 次操作后</td>&#10;			<td>[2, 2, 3, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>2 次操作后</td>&#10;			<td>[4, 2, 3, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>3 次操作后</td>&#10;			<td>[4, 4, 3, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>4 次操作后</td>&#10;			<td>[4, 4, 6, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>5 次操作后</td>&#10;			<td>[8, 4, 6, 5, 6]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>取余操作后</td>&#10;			<td>[8, 4, 6, 5, 6]</td>&#10;		</tr>&#10;	</tbody>&#10;</table>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>nums = [100000,2000], k = 2, multiplier = 1000000</span></p>&#10;&#10;<p><span><b>输出：</b>[999999307,999999993]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<table>&#10;	<tbody>&#10;		<tr>&#10;			<th>操作</th>&#10;			<th>结果</th>&#10;		</tr>&#10;		<tr>&#10;			<td>1 次操作后</td>&#10;			<td>[100000, 2000000000]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>2 次操作后</td>&#10;			<td>[100000000000, 2000000000]</td>&#10;		</tr>&#10;		<tr>&#10;			<td>取余操作后</td>&#10;			<td>[999999307, 999999993]</td>&#10;		</tr>&#10;	</tbody>&#10;</table>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= multiplier &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（小根堆）+ 模拟 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>规则与 I 相同，但 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，不能逐次模拟。注意到一旦所有值都不小于原数组最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，之后每次都是「当前最小变为新的最大」，每 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次恰好每人一轮。</p>
<p>先用堆把仍小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 的元素乘到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>m</mi>
</math></span> 或用尽 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。剩余次数按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>n</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mi mathvariant="normal">%</mi>
  <mi>n</mi>
</math></span> 分配，快速幂写入并取模。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">multiplier</mtext>
  <mo>=</mo>
  <mn>1</mn>
</math></span> 时直接返回。</p>
</blockquote>
<p>我们记数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，最大值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。</p>
<p>我们首先通过利用优先队列（小根堆），模拟操作，直到完成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次操作或者堆中所有元素都大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。</p>
<p>此时，数组所有元素值都小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">multiplier</mtext>
</math></span>，由于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mi>m</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
  <mo>&#x2264;</mo>
  <mtext mathvariant="italic">multiplier</mtext>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>6</mn>
  </msup>
</math></span>，所以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">multiplier</mtext>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>15</mn>
    </mrow>
  </msup>
</math></span>，是在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>64</mn>
</math></span> 位整数范围内的。</p>
<p>接下来，我们的每一次操作，都会将数组中的最小元素变成最大元素，因此在每 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 次连续操作后，数组中的每个元素都恰好执行了一次乘法操作。</p>
<p>因此，我们在模拟过后，剩余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次操作，那么数组中最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo lspace="thickmathspace" rspace="thickmathspace">mod</mo>
  <mi>n</mi>
</math></span> 个元素将会执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>k</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>n</mi>
  <mo fence="false" stretchy="false">&#x230B;</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 次乘法操作，其余的元素将会执行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>k</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>n</mi>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 次乘法操作。</p>
<p>最后，我们将数组中的每个元素乘上对应的乘法次数，再取模 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
  <mo>+</mo>
  <mn>7</mn>
</math></span> 即可，可以通过快速幂来计算。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>M</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>k</mi>
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
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的最大值。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func getFinalState(nums []int, k int, multiplier int) []int {</span></span>
<span class="line"><span>	if multiplier == 1 {</span></span>
<span class="line"><span>		return nums</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	pq := make(hp, n)</span></span>
<span class="line"><span>	for i, x := range nums {</span></span>
<span class="line"><span>		pq[i] = pair{x, i}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	heap.Init(&#x26;pq)</span></span>
<span class="line"><span>	m := slices.Max(nums)</span></span>
<span class="line"><span>	for ; k > 0 &#x26;&#x26; pq[0].x &#x3C; m; k-- {</span></span>
<span class="line"><span>		x := pq[0]</span></span>
<span class="line"><span>		heap.Pop(&#x26;pq)</span></span>
<span class="line"><span>		x.x *= multiplier</span></span>
<span class="line"><span>		heap.Push(&#x26;pq, x)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const mod int = 1e9 + 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := range nums {</span></span>
<span class="line"><span>		p := heap.Pop(&#x26;pq).(pair)</span></span>
<span class="line"><span>		x, j := p.x, p.i</span></span>
<span class="line"><span>		power := k / n</span></span>
<span class="line"><span>		if i &#x3C; k%n {</span></span>
<span class="line"><span>			power++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		nums[j] = (x % mod) * qpow(multiplier, power, mod) % mod</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nums</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func qpow(a, n, mod int) int {</span></span>
<span class="line"><span>	ans := 1 % mod</span></span>
<span class="line"><span>	a = a % mod</span></span>
<span class="line"><span>	for n > 0 {</span></span>
<span class="line"><span>		if n&#x26;1 == 1 {</span></span>
<span class="line"><span>			ans = (ans * a) % mod</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		a = (a * a) % mod</span></span>
<span class="line"><span>		n >>= 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int(ans)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type pair struct{ x, i int }</span></span>
<span class="line"><span>type hp []pair</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp) Len() int           { return len(h) }</span></span>
<span class="line"><span>func (h hp) Less(i, j int) bool { return h[i].x &#x3C; h[j].x || h[i].x == h[j].x &#x26;&#x26; h[i].i &#x3C; h[j].i }</span></span>
<span class="line"><span>func (h hp) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }</span></span>
<span class="line"><span>func (h *hp) Push(x any)        { *h = append(*h, x.(pair)) }</span></span>
<span class="line"><span>func (h *hp) Pop() (x any)      { a := *h; x = a[len(a)-1]; *h = a[:len(a)-1]; return x }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/final-array-state-after-k-multiplication-operations-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3200-3299/3266.Final%20Array%20State%20After%20K%20Multiplication%20Operations%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3275" tabindex="-1">3275. 第 K 近障碍物查询 <a class="header-anchor" href="#q-3275" aria-label="Permalink to &quot;3275. 第 K 近障碍物查询 {#q-3275}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>有一个无限大的二维平面。</p>&#10;&#10;<p>给你一个正整数 <code>k</code> ，同时给你一个二维数组 <code>queries</code> ，包含一系列查询：</p>&#10;&#10;<ul>&#10;	<li><code>queries[i] = [x, y]</code> ：在平面上坐标 <code>(x, y)</code> 处建一个障碍物，数据保证之前的查询 <strong>不会</strong> 在这个坐标处建立任何障碍物。</li>&#10;</ul>&#10;&#10;<p>每次查询后，你需要找到离原点第 <code>k</code> <strong>近</strong> 障碍物到原点的 <strong>距离</strong> 。</p>&#10;&#10;<p>请你返回一个整数数组 <code>results</code> ，其中 <code>results[i]</code> 表示建立第 <code>i</code> 个障碍物以后，离原地第 <code>k</code> 近障碍物距离原点的距离。如果少于 <code>k</code> 个障碍物，<code>results[i] == -1</code> 。</p>&#10;&#10;<p><strong>注意</strong>，一开始 <strong>没有</strong> 任何障碍物。</p>&#10;&#10;<p>坐标在 <code>(x, y)</code> 处的点距离原点的距离定义为 <code>|x| + |y|</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>queries = [[1,2],[3,4],[2,3],[-3,0]], k = 2</span></p>&#10;&#10;<p><span><b>输出：</b>[-1,7,5,3]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<p>最初，不存在障碍物。</p>&#10;&#10;<ul>&#10;	<li><code>queries[0]</code> 之后，少于 2 个障碍物。</li>&#10;	<li><code>queries[1]</code> 之后， 两个障碍物距离原点的距离分别为 3 和 7 。</li>&#10;	<li><code>queries[2]</code> 之后，障碍物距离原点的距离分别为 3 ，5 和 7 。</li>&#10;	<li><code>queries[3]</code> 之后，障碍物距离原点的距离分别为 3，3，5 和 7 。</li>&#10;</ul>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><span><b>输入：</b>queries = [[5,5],[4,4],[3,3]], k = 1</span></p>&#10;&#10;<p><span><b>输出：</b>[10,8,6]</span></p>&#10;&#10;<p><b>解释：</b></p>&#10;&#10;<ul>&#10;	<li><code>queries[0]</code> 之后，只有一个障碍物，距离原点距离为 10 。</li>&#10;	<li><code>queries[1]</code> 之后，障碍物距离原点距离分别为 8 和 10 。</li>&#10;	<li><code>queries[2]</code> 之后，障碍物距离原点的距离分别为 6， 8 和10 。</li>&#10;</ul>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= queries.length &lt;= 2 * 10<sup>5</sup></code></li>&#10;	<li>所有 <code>queries[i]</code> 互不相同。</li>&#10;	<li><code>-10<sup>9</sup> &lt;= queries[i][0], queries[i][1] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>障碍逐个出现，每次问当前第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 近的曼哈顿距离。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>q</mi>
  <mo>&#x2264;</mo>
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，若每次排序则过慢。只需维持最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个距离，其中最大者即第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 近。</p>
<p>大根堆存这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个距离的相反数（或负距离）。不足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个时答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，超过则弹出堆顶。在线 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span> 每次。</p>
</blockquote>
<p>我们可以使用一个优先队列（大根堆）来维护离原点最近的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个障碍物。</p>
<p>遍历 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">queries</mtext>
</math></span>，每次计算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 的绝对值之和，然后将其加入优先队列。如果优先队列的大小超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，则弹出堆顶元素。如果当前优先队列的大小等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，则将堆顶元素加入答案数组，否则将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 加入答案数组。</p>
<p>遍历结束后，返回答案数组即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">queries</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func resultsArray(queries [][]int, k int) (ans []int) {</span></span>
<span class="line"><span>	pq := &#x26;hp{}</span></span>
<span class="line"><span>	for _, q := range queries {</span></span>
<span class="line"><span>		x := abs(q[0]) + abs(q[1])</span></span>
<span class="line"><span>		pq.push(x)</span></span>
<span class="line"><span>		if pq.Len() > k {</span></span>
<span class="line"><span>			pq.pop()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if pq.Len() == k {</span></span>
<span class="line"><span>			ans = append(ans, pq.IntSlice[0])</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans = append(ans, -1)</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/k-th-nearest-obstacle-queries" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3200-3299/3275.K-th%20Nearest%20Obstacle%20Queries/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-3478" tabindex="-1">3478. 选出和最大的 K 个元素 <a class="header-anchor" href="#q-3478" aria-label="Permalink to &quot;3478. 选出和最大的 K 个元素 {#q-3478}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个整数数组，<code>nums1</code> 和 <code>nums2</code>，长度均为 <code>n</code>，以及一个正整数 <code>k</code> 。</p>&#10;&#10;<p>对从 <code>0</code> 到 <code>n - 1</code> 每个下标 <code>i</code> ，执行下述操作：</p>&#10;&#10;<ul>&#10;	<li>找出所有满足 <code>nums1[j]</code> 小于 <code>nums1[i]</code> 的下标 <code>j</code> 。</li>&#10;	<li>从这些下标对应的 <code>nums2[j]</code> 中选出 <strong>至多</strong> <code>k</code> 个，并 <strong>最大化</strong> 这些值的总和作为结果。</li>&#10;</ul>&#10;&#10;<p>返回一个长度为 <code>n</code> 的数组 <code>answer</code> ，其中 <code>answer[i]</code> 表示对应下标 <code>i</code> 的结果。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums1 = [4,2,1,5,3], nums2 = [10,20,30,40,50], k = 2</span></p>&#10;&#10;<p><strong>输出：</strong><span>[80,30,0,80,50]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<ul>&#10;	<li>对于 <code>i = 0</code> ：满足 <code>nums1[j] &lt; nums1[0]</code> 的下标为 <code>[1, 2, 4]</code> ，选出其中值最大的两个，结果为 <code>50 + 30 = 80</code> 。</li>&#10;	<li>对于 <code>i = 1</code> ：满足 <code>nums1[j] &lt; nums1[1]</code> 的下标为 <code>[2]</code> ，只能选择这个值，结果为 <code>30</code> 。</li>&#10;	<li>对于 <code>i = 2</code> ：不存在满足 <code>nums1[j] &lt; nums1[2]</code> 的下标，结果为 <code>0</code> 。</li>&#10;	<li>对于 <code>i = 3</code> ：满足 <code>nums1[j] &lt; nums1[3]</code> 的下标为 <code>[0, 1, 2, 4]</code> ，选出其中值最大的两个，结果为 <code>50 + 30 = 80</code> 。</li>&#10;	<li>对于 <code>i = 4</code> ：满足 <code>nums1[j] &lt; nums1[4]</code> 的下标为 <code>[1, 2]</code> ，选出其中值最大的两个，结果为 <code>30 + 20 = 50</code> 。</li>&#10;</ul>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong><span>nums1 = [2,2,2,2], nums2 = [3,1,2,3], k = 1</span></p>&#10;&#10;<p><strong>输出：</strong><span>[0,0,0,0]</span></p>&#10;&#10;<p><strong>解释：</strong>由于 <code>nums1</code> 中的所有元素相等，不存在满足条件 <code>nums1[j] &lt; nums1[i]</code>，所有位置的结果都是 0 。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums1.length == nums2.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>&#10;	<li><code>1 &lt;= k &lt;= n</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对每个下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mtext mathvariant="italic">nums1</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的下标中选至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
</math></span> 求最大和。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能对每个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 单独筛选。</p>
<p>按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 排序后，可用的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 只增不减，适合用大小为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的小根堆维护当前最大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 元之和。</p>
<p>指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 把所有严格更小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 对应的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
</math></span> 入堆，堆溢出则减去堆顶。当前堆和写入该 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 的答案。</p>
</blockquote>
<p>我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
</math></span> 转换成一个数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span>，其中每个元素是一个二元组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，表示 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums1</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。然后对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 进行升序排序。</p>
<p>我们使用一个小根堆 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 来维护数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
</math></span> 中的元素，初始时 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 为空。用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 来记录 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 中的元素之和。另外，我们用一个指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 来维护当前需要添加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 中的元素在数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span> 中的位置。</p>
<p>我们遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
</math></span>，对于第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
</math></span> 个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，我们将所有满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>h</mi>
</math></span> 并且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mi>x</mi>
</math></span> 的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums2</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">arr</mtext>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">]</mo>
</math></span> 添加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 中，并将这些元素的和加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 的大小超过了 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pq</mtext>
</math></span> 中的最小元素弹出，并将其从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span> 中减去。然后，我们更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">ans</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">s</mtext>
</math></span>。</p>
<p>遍历结束后，返回答案数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func findMaxSum(nums1 []int, nums2 []int, k int) []int64 {</span></span>
<span class="line"><span>	n := len(nums1)</span></span>
<span class="line"><span>	arr := make([][2]int, n)</span></span>
<span class="line"><span>	for i, x := range nums1 {</span></span>
<span class="line"><span>		arr[i] = [2]int{x, i}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := make([]int64, n)</span></span>
<span class="line"><span>	sort.Slice(arr, func(i, j int) bool { return arr[i][0] &#x3C; arr[j][0] })</span></span>
<span class="line"><span>	pq := hp{}</span></span>
<span class="line"><span>	var s int64</span></span>
<span class="line"><span>	j := 0</span></span>
<span class="line"><span>	for h, e := range arr {</span></span>
<span class="line"><span>		x, i := e[0], e[1]</span></span>
<span class="line"><span>		for j &#x3C; h &#x26;&#x26; arr[j][0] &#x3C; x {</span></span>
<span class="line"><span>			y := nums2[arr[j][1]]</span></span>
<span class="line"><span>			heap.Push(&#x26;pq, y)</span></span>
<span class="line"><span>			s += int64(y)</span></span>
<span class="line"><span>			if pq.Len() > k {</span></span>
<span class="line"><span>				s -= int64(heap.Pop(&#x26;pq).(int))</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans[i] = s</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/choose-k-elements-with-maximum-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/3400-3499/3478.Choose%20K%20Elements%20With%20Maximum%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-4065" tabindex="-1">4065. 移除不同值重排数组 <a class="header-anchor" href="#q-4065" aria-label="Permalink to &quot;4065. 移除不同值重排数组 {#q-4065}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：数组、哈希表、计数、有序集合、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code>。</p>&#10;&#10;<p>初始时，你有一个 <strong>空</strong> 数组 <code>ans</code>。重复执行以下操作，直到 <code>nums</code> 变为 <strong>空 </strong>：</p>&#10;&#10;<ul>&#10;	<li>找出当前 <code>nums</code> 中<strong> 所有不同 </strong>的值。</li>&#10;	<li>将当前 <code>nums</code> 中每个 <strong>不同</strong> 的值各移除<strong>一个</strong>，并按<strong> 升序 </strong>将这些值依次添加到 <code>ans</code> 中。</li>&#10;</ul>&#10;&#10;<p>返回数组 <code>ans</code>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [3,1,3,2,1,3]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>[1,2,3,1,3,3]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<table>&#10;	<thead>&#10;		<tr>&#10;			<th>操作</th>&#10;			<th>添加到 <code>ans</code> 的值</th>&#10;			<th>操作后的 <code>nums</code></th>&#10;			<th>操作后的 <code>ans</code></th>&#10;		</tr>&#10;	</thead>&#10;	<tbody>&#10;		<tr>&#10;			<td>1</td>&#10;			<td>1, 2, 3</td>&#10;			<td><code>[3, 1, 3]</code></td>&#10;			<td><code>[1, 2, 3]</code></td>&#10;		</tr>&#10;		<tr>&#10;			<td>2</td>&#10;			<td>1, 3</td>&#10;			<td><code>[3]</code></td>&#10;			<td><code>[1, 2, 3, 1, 3]</code></td>&#10;		</tr>&#10;		<tr>&#10;			<td>3</td>&#10;			<td>3</td>&#10;			<td><code>[]</code></td>&#10;			<td><code>[1, 2, 3, 1, 3, 3]</code></td>&#10;		</tr>&#10;	</tbody>&#10;</table>&#10;&#10;<p>此时 <code>nums</code> 已为空，因此答案为 <code>[1, 2, 3, 1, 3, 3]</code>。</p>&#10;</div>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<div>&#10;<p><strong>输入：</strong> <span>nums = [7,7,4,4,4]</span></p>&#10;&#10;<p><strong>输出：</strong> <span>[4,7,4,7,4]</span></p>&#10;&#10;<p><strong>解释：</strong></p>&#10;&#10;<table>&#10;	<thead>&#10;		<tr>&#10;			<th>操作</th>&#10;			<th>添加到 <code>ans</code> 的值</th>&#10;			<th>操作后的 <code>nums</code></th>&#10;			<th>操作后的 <code>ans</code></th>&#10;		</tr>&#10;	</thead>&#10;	<tbody>&#10;		<tr>&#10;			<td>1</td>&#10;			<td>4, 7</td>&#10;			<td><code>[7, 4, 4]</code></td>&#10;			<td><code>[4, 7]</code></td>&#10;		</tr>&#10;		<tr>&#10;			<td>2</td>&#10;			<td>4, 7</td>&#10;			<td><code>[4]</code></td>&#10;			<td><code>[4, 7, 4, 7]</code></td>&#10;		</tr>&#10;		<tr>&#10;			<td>3</td>&#10;			<td>4</td>&#10;			<td><code>[]</code></td>&#10;			<td><code>[4, 7, 4, 7, 4]</code></td>&#10;		</tr>&#10;	</tbody>&#10;</table>&#10;&#10;<p>此时 <code>nums</code> 已为空，因此答案为 <code>[4, 7, 4, 7, 4]</code>。</p>&#10;</div>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 和每个元素都不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>，按题意一轮轮取出剩余的不同值是来得及的。每一轮都要收集当前还在的值并按升序各删一个，若直接在原数组里查找再删除，下标会不断挪动。</p>
<p>一个值被取走的次数就是它的出现次数，每一轮内部的先后只由数值大小决定，与原来的下标无关。</p>
<p>因此先按值计数。值域是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>m</mi>
  <mo stretchy="false">]</mo>
</math></span>，从小到大扫描，次数仍为正就写入答案并减一。外层重复到答案长度等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span>，每一遍扫描对应一轮操作。</p>
</blockquote>
<p>设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">nums</mtext>
  <mo stretchy="false">)</mo>
</math></span>， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span> 为值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的出现次数。第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 轮（从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 计）按升序取走所有当时仍有剩余的值，也就是最初出现次数大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 的那些值。</p>
<p>用长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 的数组记下次数。答案还不满 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 个元素时，把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 扫到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span> 就把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 追加进答案，并把次数减一。一轮扫描对应一次操作，追加的顺序就是升序。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func rearrangeArray(nums []int) []int {</span></span>
<span class="line"><span>	mx := slices.Max(nums)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cnt := make([]int, mx+1)</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		cnt[x]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ans := make([]int, 0, len(nums))</span></span>
<span class="line"><span>	for len(ans) &#x3C; len(nums) {</span></span>
<span class="line"><span>		for x := 1; x &#x3C;= mx; x++ {</span></span>
<span class="line"><span>			if cnt[x] > 0 {</span></span>
<span class="line"><span>				ans = append(ans, x)</span></span>
<span class="line"><span>				cnt[x]--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/rearrange-array-by-removing-distinct-values" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/4000-4099/4065.Rearrange%20Array%20by%20Removing%20Distinct%20Values/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const u=s(p,[["render",m]]);export{d as __pageData,u as default};
