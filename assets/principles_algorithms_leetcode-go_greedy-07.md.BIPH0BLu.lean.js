import{_ as a,a as t,c as s,b as m}from"./chunks/framework.BSuaGltH.js";const d=JSON.parse('{"title":"LeetCode Go · 贪心（7）","description":"贪心分类，第 2132–2357 题，共 30 题，含题目、可折叠解法与 Go 实现。","frontmatter":{"title":"LeetCode Go · 贪心（7）","description":"贪心分类，第 2132–2357 题，共 30 题，含题目、可折叠解法与 Go 实现。","showdocs":{"topics":[{"id":"leetcode","title":"LeetCode","link":"/topics/leetcode/"}],"kind":"实践案例","scope":"general","audience":"general","group":"原理与设计","summary":"贪心分类，第 2132–2357 题，共 30 题，含题目、可折叠解法与 Go 实现。","status":"active","related":[{"title":"LeetCode Go · 并查集（1）","link":"/principles/algorithms/leetcode-go/union-find-01","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（2）","link":"/principles/algorithms/leetcode-go/union-find-02","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（3）","link":"/principles/algorithms/leetcode-go/union-find-03","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并查集（4）","link":"/principles/algorithms/leetcode-go/union-find-04","kind":"实践案例","scope":"general","audience":"general"},{"title":"LeetCode Go · 并发（1）","link":"/principles/algorithms/leetcode-go/concurrency-01","kind":"实践案例","scope":"general","audience":"general"}],"prev":{"text":"LeetCode Go · 贪心（6）","link":"/principles/algorithms/leetcode-go/greedy-06"},"next":{"text":"LeetCode Go · 贪心（8）","link":"/principles/algorithms/leetcode-go/greedy-08"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"LeetCode Go · 贪心（6）","link":"/principles/algorithms/leetcode-go/greedy-06"},"next":{"text":"LeetCode Go · 贪心（8）","link":"/principles/algorithms/leetcode-go/greedy-08"}},"headers":[],"relativePath":"principles/algorithms/leetcode-go/greedy-07.md","filePath":"principles/algorithms/leetcode-go/greedy-07.md"}'),e={name:"principles/algorithms/leetcode-go/greedy-07.md"};function o(p,n,l,i,c,h){return t(),s("div",null,[...n[0]||(n[0]=[m("div",{innerHTML:`<div class="leetcode-reading"><h1 id="leetcode-go-·-贪心-7" tabindex="-1">LeetCode Go · 贪心（7） <a class="header-anchor" href="#leetcode-go-·-贪心-7" aria-label="Permalink to &quot;LeetCode Go · 贪心（7）&quot;">&ZeroWidthSpace;</a></h1>
<p><a href="/principles/algorithms/leetcode-go/index">返回题库与筛选</a> · <a href="/principles/algorithms/leetcode-go/coverage">收录范围与使用说明</a></p>
<details class="leetcode-attribution"><summary>来源与许可</summary><p>题目版权归 LeetCode；题解来自 <a href="https://github.com/doocs/leetcode" target="_blank" rel="noopener noreferrer">Doocs/leetcode</a>，按 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 共享。补充 Go 代码来自<a href="https://github.com/EndlessCheng/codeforces-go/tree/e0fea933e2d713fd302622d2bb82a60f959a198e" target="_blank" rel="noopener noreferrer">灵茶山艾府</a>、<a href="https://github.com/halfrost/LeetCode-Go/tree/1dde49c8ab37a08f21a4fb249d7bd90af4a9c58e" target="_blank" rel="noopener noreferrer">halfrost</a>，保留 MIT 许可及逐题署名。本站提取 Go、调整分类及折叠排版；标注“本站整理”的 Go 解法依据题意与参考思路补写，按 CC BY-SA 4.0 共享。收录日期：2026-10-31；主题源版本：<a href="https://github.com/doocs/leetcode/tree/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011" target="_blank" rel="noopener noreferrer">91ef8c241a5e</a>。</p></details>
<p class="leetcode-reading-hint">本卷 30 题 · 点击题目展开，先独立思考，再查看解法。</p><details class="leetcode-question" name="leetcode-questions" open>
<summary class="leetcode-question-heading"><h2 id="q-2132" tabindex="-1">2132. 用邮票贴满网格图 <a class="header-anchor" href="#q-2132" aria-label="Permalink to &quot;2132. 用邮票贴满网格图 {#q-2132}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、矩阵、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个 <code>m x n</code> 的二进制矩阵 <code>grid</code> ，每个格子要么为 <code>0</code> （空）要么为 <code>1</code> （被占据）。</p>&#10;&#10;<p>给你邮票的尺寸为 <code>stampHeight x stampWidth</code> 。我们想将邮票贴进二进制矩阵中，且满足以下 <strong>限制</strong> 和 <strong>要求</strong> ：</p>&#10;&#10;<ol>&#10;	<li>覆盖所有 <strong>空</strong> 格子。</li>&#10;	<li>不覆盖任何 <strong>被占据 </strong>的格子。</li>&#10;	<li>我们可以放入任意数目的邮票。</li>&#10;	<li>邮票可以相互有 <strong>重叠</strong> 部分。</li>&#10;	<li>邮票不允许 <strong>旋转</strong> 。</li>&#10;	<li>邮票必须完全在矩阵 <strong>内</strong> 。</li>&#10;</ol>&#10;&#10;<p>如果在满足上述要求的前提下，可以放入邮票，请返回 <code>true</code> ，否则返回<i> </i><code>false</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2132.Stamping%20the%20Grid/images/ex1.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], stampHeight = 4, stampWidth = 3&#10;<b>输出：</b>true&#10;<b>解释：</b>我们放入两个有重叠部分的邮票（图中标号为 1 和 2），它们能覆盖所有与空格子。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2132.Stamping%20the%20Grid/images/ex2.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>grid = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], stampHeight = 2, stampWidth = 2 &#10;<b>输出：</b>false &#10;<b>解释：</b>没办法放入邮票覆盖所有的空格子，且邮票不超出网格图以外。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>m == grid.length</code></li>&#10;	<li><code>n == grid[r].length</code></li>&#10;	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= m * n &lt;= 2 * 10<sup>5</sup></code></li>&#10;	<li><code>grid[r][c]</code> 要么是 <code>0</code> ，要么是 <code>1</code> 。</li>&#10;	<li><code>1 &lt;= stampHeight, stampWidth &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二维前缀和 + 二维差分 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每张邮票必须完全落在空格子上，且每个空格至少被盖一次。若枚举每个合法左上角再把矩形逐格标记，最坏 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>m</mi>
  <mi>n</mi>
  <mo>&#x22C5;</mo>
  <mi>h</mi>
  <mi>w</mi>
  <mo stretchy="false">)</mo>
</math></span>，在网格与邮票都较大时不可行。</p>
<p>二维前缀和可 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 判断一块 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>h</mi>
  <mo>&#xD7;</mo>
  <mi>w</mi>
</math></span> 是否全空；所有成功盖印再用二维差分记录覆盖次数，最后还原差分，检查每个空格的覆盖是否为正。</p>
<p>先建占据前缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，对每个可放位置在差分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>+</mo>
  <mn>1</mn>
</math></span>，再还原 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 并拒绝仍为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 的空格。</p>
</blockquote>
<p>根据题目描述，每一个空格子都必须被邮票覆盖，而且不能覆盖任何被占据的格子。因此，我们可以遍历二维矩阵，对于每个格子，如果以该格子为左上角的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>H</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>&#xD7;</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>W</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 的区域内的所有格子都是空格子（即没有被占据），那么我们就可以在该格子处放置一个邮票。</p>
<p>为了快速判断一个区域内的所有格子是否都是空格子，我们可以使用二维前缀和。我们用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>,</mo>
      <mi>j</mi>
    </mrow>
  </msub>
</math></span> 表示二维矩阵中从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 的子矩阵中被占据的格子的数量。即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>,</mo>
      <mi>j</mi>
    </mrow>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo>,</mo>
      <mi>j</mi>
    </mrow>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>,</mo>
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo>,</mo>
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>+</mo>
  <mi>g</mi>
  <mi>r</mi>
  <mi>i</mi>
  <msub>
    <mi>d</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo>,</mo>
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
</math></span>。</p>
<p>那么以 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 为左上角，且高度和宽度分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>H</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>W</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 的子矩阵的右下角坐标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>H</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>j</mi>
  <mo>+</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>W</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mi>t</mi>
  <mi>h</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>，我们可以通过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>x</mi>
      <mo>,</mo>
      <mi>y</mi>
    </mrow>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>x</mi>
      <mo>,</mo>
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
  <mo>&#x2212;</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo>,</mo>
      <mi>y</mi>
    </mrow>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>s</mi>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
      <mo>,</mo>
      <mi>j</mi>
      <mo>&#x2212;</mo>
      <mn>1</mn>
    </mrow>
  </msub>
</math></span> 来计算出该子矩阵中被占据的格子的数量。如果该子矩阵中被占据的格子的数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么我们就可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>i</mi>
  <mo>,</mo>
  <mi>j</mi>
  <mo stretchy="false">)</mo>
</math></span> 处放置一个邮票，放置邮票后，这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>H</mi>
  <mi>e</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>h</mi>
  <mi>t</mi>
  <mo>&#xD7;</mo>
  <mi>s</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mi>m</mi>
  <mi>p</mi>
  <mi>W</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mi>t</mi>
  <mi>h</mi>
</math></span> 的区域内的所有格子都会变成被占据的格子，我们可以用二维差分数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 来记录这一变化。即：</p>
<span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
    <mtr>
      <mtd>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>i</mi>
            <mo>,</mo>
            <mi>j</mi>
          </mrow>
        </msub>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">&#x2190;</mo>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>i</mi>
            <mo>,</mo>
            <mi>j</mi>
          </mrow>
        </msub>
        <mo>+</mo>
        <mn>1</mn>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>i</mi>
            <mo>,</mo>
            <mi>y</mi>
            <mo>+</mo>
            <mn>1</mn>
          </mrow>
        </msub>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">&#x2190;</mo>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>i</mi>
            <mo>,</mo>
            <mi>y</mi>
            <mo>+</mo>
            <mn>1</mn>
          </mrow>
        </msub>
        <mo>&#x2212;</mo>
        <mn>1</mn>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>x</mi>
            <mo>+</mo>
            <mn>1</mn>
            <mo>,</mo>
            <mi>j</mi>
          </mrow>
        </msub>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">&#x2190;</mo>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>x</mi>
            <mo>+</mo>
            <mn>1</mn>
            <mo>,</mo>
            <mi>j</mi>
          </mrow>
        </msub>
        <mo>&#x2212;</mo>
        <mn>1</mn>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>x</mi>
            <mo>+</mo>
            <mn>1</mn>
            <mo>,</mo>
            <mi>y</mi>
            <mo>+</mo>
            <mn>1</mn>
          </mrow>
        </msub>
      </mtd>
      <mtd>
        <mi></mi>
        <mo stretchy="false">&#x2190;</mo>
        <msub>
          <mi>d</mi>
          <mrow data-mjx-texclass="ORD">
            <mi>x</mi>
            <mo>+</mo>
            <mn>1</mn>
            <mo>,</mo>
            <mi>y</mi>
            <mo>+</mo>
            <mn>1</mn>
          </mrow>
        </msub>
        <mo>+</mo>
        <mn>1</mn>
      </mtd>
    </mtr>
  </mtable>
</math></span><p>最后，我们对二维差分数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span> 进行前缀和运算，可以得出每个格子被邮票覆盖的次数。如果某个格子没有被占据，且被邮票覆盖的次数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，那么我们就无法将邮票放置在该格子处，因此我们需要返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">false</mtext>
</math></span>。如果所有“没被占据的格子”都成功被邮票覆盖，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="monospace">true</mtext>
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
  <mi>m</mi>
  <mo>&#xD7;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 分别是二维矩阵的高度和宽度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func possibleToStamp(grid [][]int, stampHeight int, stampWidth int) bool {</span></span>
<span class="line"><span>	m, n := len(grid), len(grid[0])</span></span>
<span class="line"><span>	s := make([][]int, m+1)</span></span>
<span class="line"><span>	for i := range s {</span></span>
<span class="line"><span>		s[i] = make([]int, n+1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + grid[i-1][j-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	d := make([][]int, m+2)</span></span>
<span class="line"><span>	for i := range d {</span></span>
<span class="line"><span>		d[i] = make([]int, n+2)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 1; i+stampHeight-1 &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 1; j+stampWidth-1 &#x3C;= n; j++ {</span></span>
<span class="line"><span>			x, y := i+stampHeight-1, j+stampWidth-1</span></span>
<span class="line"><span>			if s[x][y]-s[x][j-1]-s[i-1][y]+s[i-1][j-1] == 0 {</span></span>
<span class="line"><span>				d[i][j]++</span></span>
<span class="line"><span>				d[i][y+1]--</span></span>
<span class="line"><span>				d[x+1][j]--</span></span>
<span class="line"><span>				d[x+1][y+1]++</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 1; i &#x3C;= m; i++ {</span></span>
<span class="line"><span>		for j := 1; j &#x3C;= n; j++ {</span></span>
<span class="line"><span>			d[i][j] += d[i-1][j] + d[i][j-1] - d[i-1][j-1]</span></span>
<span class="line"><span>			if grid[i-1][j-1] == 0 &#x26;&#x26; d[i][j] == 0 {</span></span>
<span class="line"><span>				return false</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return true</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/stamping-the-grid" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2132.Stamping%20the%20Grid/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2136" tabindex="-1">2136. 全部开花的最早一天 <a class="header-anchor" href="#q-2136" aria-label="Permalink to &quot;2136. 全部开花的最早一天 {#q-2136}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有 <code>n</code> 枚花的种子。每枚种子必须先种下，才能开始生长、开花。播种需要时间，种子的生长也是如此。给你两个下标从 <strong>0</strong> 开始的整数数组 <code>plantTime</code> 和 <code>growTime</code> ，每个数组的长度都是 <code>n</code> ：</p>&#10;&#10;<ul>&#10;	<li><code>plantTime[i]</code> 是 <strong>播种</strong> 第 <code>i</code> 枚种子所需的 <strong>完整天数</strong> 。每天，你只能为播种某一枚种子而劳作。<strong>无须</strong> 连续几天都在种同一枚种子，但是种子播种必须在你工作的天数达到 <code>plantTime[i]</code> 之后才算完成。</li>&#10;	<li><code>growTime[i]</code> 是第 <code>i</code> 枚种子完全种下后生长所需的 <strong>完整天数 </strong>。在它生长的最后一天 <strong>之后</strong> ，将会开花并且永远 <strong>绽放</strong> 。</li>&#10;</ul>&#10;&#10;<p>从第 <code>0</code> 开始，你可以按 <strong>任意</strong> 顺序播种种子。</p>&#10;&#10;<p>返回所有种子都开花的 <strong>最早</strong> 一天是第几天。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2136.Earliest%20Possible%20Day%20of%20Full%20Bloom/images/1.png" loading="lazy">&#10;<pre><strong>输入：</strong>plantTime = [1,4,3], growTime = [2,3,1]&#10;<strong>输出：</strong>9&#10;<strong>解释：</strong>灰色的花盆表示播种的日子，彩色的花盆表示生长的日子，花朵表示开花的日子。&#10;一种最优方案是：&#10;第 0 天，播种第 0 枚种子，种子生长 2 整天。并在第 3 天开花。&#10;第 1、2、3、4 天，播种第 1 枚种子。种子生长 3 整天，并在第 8 天开花。&#10;第 5、6、7 天，播种第 2 枚种子。种子生长 1 整天，并在第 9 天开花。&#10;因此，在第 9 天，所有种子都开花。 &#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2136.Earliest%20Possible%20Day%20of%20Full%20Bloom/images/2.png" loading="lazy">&#10;<pre><strong>输入：</strong>plantTime = [1,2,3,2], growTime = [2,1,2,1]&#10;<strong>输出：</strong>9&#10;<strong>解释：</strong>灰色的花盆表示播种的日子，彩色的花盆表示生长的日子，花朵表示开花的日子。 &#10;一种最优方案是：&#10;第 1 天，播种第 0 枚种子，种子生长 2 整天。并在第 4 天开花。&#10;第 0、3 天，播种第 1 枚种子。种子生长 1 整天，并在第 5 天开花。&#10;第 2、4、5 天，播种第 2 枚种子。种子生长 2 整天，并在第 8 天开花。&#10;第 6、7 天，播种第 3 枚种子。种子生长 1 整天，并在第 9 天开花。&#10;因此，在第 9 天，所有种子都开花。 &#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>plantTime = [1], growTime = [1]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>第 0 天，播种第 0 枚种子。种子需要生长 1 整天，然后在第 2 天开花。&#10;因此，在第 2 天，所有种子都开花。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == plantTime.length == growTime.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= plantTime[i], growTime[i] &lt;= 10<sup>4</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每天只能播种一枚种子，播种时间之和与顺序无关，开花日取决于「该种子播完时刻加上生长时间」的最大值。若先种生长短的，长生长者会更晚结束。</p>
<p>应尽早开始生长时间长的种子，按其 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">growTime</mtext>
</math></span> 降序播种。前缀播种天数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">plantTime</mtext>
</math></span>，该种子开花日为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">growTime</mtext>
</math></span>，全程取最大。</p>
<p>按生长时间排序后一次扫描即可。</p>
</blockquote>
<p>根据题目描述，我们知道，每一天只能为一枚种子进行播种，因此不管什么播种顺序，所有种子的播种时间之和总是等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
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
  <mi>p</mi>
  <mi>l</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mi>T</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>e</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。那么，为了让尽快让所有种子开花，我们应该尽快播种生长时间最长的种子。因此，我们可以对所有种子按照生长时间从大到小进行排序，然后依次进行播种。</p>
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
</math></span> 是种子的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func earliestFullBloom(plantTime []int, growTime []int) (ans int) {</span></span>
<span class="line"><span>	n := len(plantTime)</span></span>
<span class="line"><span>	idx := make([]int, n)</span></span>
<span class="line"><span>	for i := range idx {</span></span>
<span class="line"><span>		idx[i] = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Slice(idx, func(i, j int) bool { return growTime[idx[j]] &#x3C; growTime[idx[i]] })</span></span>
<span class="line"><span>	t := 0</span></span>
<span class="line"><span>	for _, i := range idx {</span></span>
<span class="line"><span>		t += plantTime[i]</span></span>
<span class="line"><span>		ans = max(ans, t+growTime[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/earliest-possible-day-of-full-bloom" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2136.Earliest%20Possible%20Day%20of%20Full%20Bloom/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2139" tabindex="-1">2139. 得到目标值的最少行动次数 <a class="header-anchor" href="#q-2139" aria-label="Permalink to &quot;2139. 得到目标值的最少行动次数 {#q-2139}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你正在玩一个整数游戏。从整数 <code>1</code> 开始，期望得到整数 <code>target</code> 。</p>&#10;&#10;<p>在一次行动中，你可以做下述两种操作之一：</p>&#10;&#10;<ul>&#10;	<li><strong>递增</strong>，将当前整数的值加 1（即， <code>x = x + 1</code>）。</li>&#10;	<li><strong>加倍</strong>，使当前整数的值翻倍（即，<code>x = 2 * x</code>）。</li>&#10;</ul>&#10;&#10;<p>在整个游戏过程中，你可以使用 <strong>递增</strong> 操作 <strong>任意</strong> 次数。但是只能使用 <strong>加倍</strong> 操作 <strong>至多</strong> <code>maxDoubles</code> 次。</p>&#10;&#10;<p>给你两个整数 <code>target</code> 和 <code>maxDoubles</code> ，返回从 1 开始得到<em> </em><code>target</code><em> </em>需要的最少行动次数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>target = 5, maxDoubles = 0&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>一直递增 1 直到得到 target 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>target = 19, maxDoubles = 2&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>最初，x = 1 。&#10;递增 3 次，x = 4 。&#10;加倍 1 次，x = 8 。&#10;递增 1 次，x = 9 。&#10;加倍 1 次，x = 18 。&#10;递增 1 次，x = 19 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>target = 10, maxDoubles = 4&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>&#10;最初，x = 1 。 &#10;递增 1 次，x = 2 。 &#10;加倍 1 次，x = 4 。 &#10;递增 1 次，x = 5 。 &#10;加倍 1 次，x = 10 。 &#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= target &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= maxDoubles &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：倒推 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span>，加倍次数至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxDoubles</mtext>
</math></span>。正向搜索加与乘的交错顺序分支很多。倒着看：偶数且仍有加倍次数时应优先折半，否则只能减一，因为加倍对应倒推时的除二，应尽量用在较大的偶数上。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 很大而加倍次数很少，倒推步数约为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mtext mathvariant="italic">target</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">maxDoubles</mtext>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。无加倍次数时答案就是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>递归处理：偶数且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">maxDoubles</mtext>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span> 则除二并消耗一次加倍，否则减一。</p>
</blockquote>
<p>我们不妨从最终的状态开始倒推，假设最终的状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span>，那么我们可以得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的前一个状态为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 或者 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，这取决于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 的奇偶性以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>D</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span> 的值。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>=</mo>
  <mn>1</mn>
</math></span>，那么不需要任何操作，直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 即可。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>D</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span>，那么我们只能使用递增操作，因此我们需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次操作。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 是偶数且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>D</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span>，那么我们可以使用加倍操作，因此我们需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 次操作，然后递归求解 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>D</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
</math></span> 是奇数，那么我们只能使用递增操作，因此我们需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 次操作，然后递归求解 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>D</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>D</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>t</mi>
  <mi>a</mi>
  <mi>r</mi>
  <mi>g</mi>
  <mi>e</mi>
  <mi>t</mi>
  <mo>,</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mi>D</mi>
  <mi>o</mi>
  <mi>u</mi>
  <mi>b</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>我们也可以将上述过程改为迭代的方式，这样可以避免递归的空间开销。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minMoves(target int, maxDoubles int) int {</span></span>
<span class="line"><span>	if target == 1 {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if maxDoubles == 0 {</span></span>
<span class="line"><span>		return target - 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if target%2 == 0 &#x26;&#x26; maxDoubles > 0 {</span></span>
<span class="line"><span>		return 1 + minMoves(target>>1, maxDoubles-1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return 1 + minMoves(target-1, maxDoubles)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一的递归深度与倒推步数相同，可改成迭代以去掉栈空间。</p>
<p>当仍有加倍次数且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
  <mo>&gt;</mo>
  <mn>1</mn>
</math></span> 时，奇数先减一，偶数则右移并消耗加倍；加倍用尽后把剩余的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 一次加上。</p>
<p>逻辑与方法一相同，只是写成循环。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minMoves(target int, maxDoubles int) (ans int) {</span></span>
<span class="line"><span>	for maxDoubles > 0 &#x26;&#x26; target > 1 {</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		if target&#x26;1 == 1 {</span></span>
<span class="line"><span>			target--</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			maxDoubles--</span></span>
<span class="line"><span>			target >>= 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans += target - 1</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-moves-to-reach-target-score" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2139.Minimum%20Moves%20to%20Reach%20Target%20Score/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2141" tabindex="-1">2141. 同时运行 N 台电脑的最长时间 <a class="header-anchor" href="#q-2141" aria-label="Permalink to &quot;2141. 同时运行 N 台电脑的最长时间 {#q-2141}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、二分查找、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有 <code>n</code> 台电脑。给你整数 <code>n</code> 和一个下标从 <strong>0</strong> 开始的整数数组 <code>batteries</code> ，其中第 <code>i</code> 个电池可以让一台电脑 <strong>运行 </strong><code>batteries[i]</code> 分钟。你想使用这些电池让 <strong>全部</strong> <code>n</code> 台电脑 <b>同时</b> 运行。</p>&#10;&#10;<p>一开始，你可以给每台电脑连接 <strong>至多一个电池</strong> 。然后在任意整数时刻，你都可以将一台电脑与它的电池断开连接，并连接另一个电池，你可以进行这个操作 <strong>任意次</strong> 。新连接的电池可以是一个全新的电池，也可以是别的电脑用过的电池。断开连接和连接新的电池不会花费任何时间。</p>&#10;&#10;<p>注意，你不能给电池充电。</p>&#10;&#10;<p>请你返回你可以让 <code>n</code> 台电脑同时运行的 <strong>最长</strong> 分钟数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2141.Maximum%20Running%20Time%20of%20N%20Computers/images/example1-fit.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>n = 2, batteries = [3,3,3]&#10;<b>输出：</b>4&#10;<b>解释：</b>&#10;一开始，将第一台电脑与电池 0 连接，第二台电脑与电池 1 连接。&#10;2 分钟后，将第二台电脑与电池 1 断开连接，并连接电池 2 。注意，电池 0 还可以供电 1 分钟。&#10;在第 3 分钟结尾，你需要将第一台电脑与电池 0 断开连接，然后连接电池 1 。&#10;在第 4 分钟结尾，电池 1 也被耗尽，第一台电脑无法继续运行。&#10;我们最多能同时让两台电脑同时运行 4 分钟，所以我们返回 4 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2100-2199/2141.Maximum%20Running%20Time%20of%20N%20Computers/images/example2.png" loading="lazy"></p>&#10;&#10;<pre><b>输入：</b>n = 2, batteries = [1,1,1,1]&#10;<b>输出：</b>2&#10;<b>解释：</b>&#10;一开始，将第一台电脑与电池 0 连接，第二台电脑与电池 2 连接。&#10;一分钟后，电池 0 和电池 2 同时耗尽，所以你需要将它们断开连接，并将电池 1 和第一台电脑连接，电池 3 和第二台电脑连接。&#10;1 分钟后，电池 1 和电池 3 也耗尽了，所以两台电脑都无法继续运行。&#10;我们最多能让两台电脑同时运行 2 分钟，所以我们返回 2 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= n &lt;= batteries.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= batteries[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>若能同时运行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 分钟，则也能运行更短时间，具有单调性。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的上界为电量总和，枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 不可行。</p>
<p>一块电池对时长 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 的有效贡献至多为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>（同一时刻只能供一台），因此当且仅当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munder>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mi>i</mi>
  </munder>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>b</mi>
    <mi>i</mi>
  </msub>
  <mo>,</mo>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
  <mo>&#x2265;</mo>
  <mi>n</mi>
  <mo>&#x22C5;</mo>
  <mi>t</mi>
</math></span> 时可行。在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <msub>
    <mi>b</mi>
    <mi>i</mi>
  </msub>
  <mo stretchy="false">]</mo>
</math></span> 上二分 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>。</p>
<p>每次用线性扫描验证中间值，取最大可行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>。</p>
</blockquote>
<p>我们注意到，如果我们可以让 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 台电脑同时运行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span> 分钟，那么我们也可以让 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 台电脑同时运行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>t</mi>
    <mo data-mjx-alternate="1">&#x2032;</mo>
  </msup>
  <mo>&#x2264;</mo>
  <mi>t</mi>
</math></span> 分钟，这存在着单调性。因此，我们可以使用二分查找的方法找到最大的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
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
  <mi>b</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>i</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>。每次二分查找的过程中，我们使用一个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 表示当前的中间值，即 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>=</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mi>r</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&gt;&gt;</mo>
  <mn>1</mn>
</math></span>。我们判断是否存在一种方案，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 台电脑同时运行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 分钟。如果存在，那么我们就将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，否则我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
</math></span> 更新为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。最后，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span> 即为答案。</p>
<p>问题转化为如何判断是否存在一种方案，使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 台电脑同时运行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 分钟。如果一个电池可以运行的分钟数大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，由于电脑同时运行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 分钟，而一个电池同一时间只能供电一台电脑，因此我们只能使用这个电池 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 分钟。如果一个电池可以运行的分钟数小于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，我们可以使用这个电池的全部电量。因此，我们统计所有电池可以供电的分钟数之和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2265;</mo>
  <mi>n</mi>
  <mo>&#xD7;</mo>
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span>，那么我们就可以使得 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 台电脑同时运行 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
  <mi>i</mi>
  <mi>d</mi>
</math></span> 分钟。</p>
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
  <mi>M</mi>
</math></span> 为所有电池的电量之和，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maxRunTime(n int, batteries []int) int64 {</span></span>
<span class="line"><span>	l, r := 0, 0</span></span>
<span class="line"><span>	for _, x := range batteries {</span></span>
<span class="line"><span>		r += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for l &#x3C; r {</span></span>
<span class="line"><span>		mid := (l + r + 1) >> 1</span></span>
<span class="line"><span>		s := 0</span></span>
<span class="line"><span>		for _, x := range batteries {</span></span>
<span class="line"><span>			s += min(x, mid)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if s >= n*mid {</span></span>
<span class="line"><span>			l = mid</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			r = mid - 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(l)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-running-time-of-n-computers" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2141.Maximum%20Running%20Time%20of%20N%20Computers/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2144" tabindex="-1">2144. 打折购买糖果的最小开销 <a class="header-anchor" href="#q-2144" aria-label="Permalink to &quot;2144. 打折购买糖果的最小开销 {#q-2144}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>一家商店正在打折销售糖果。每购买 <strong>两个</strong> 糖果，商店会 <strong>免费</strong> 送一个糖果。</p>&#10;&#10;<p>免费送的糖果唯一的限制是：它的价格需要小于等于购买的两个糖果价格的 <strong>较小值</strong> 。</p>&#10;&#10;<ul>&#10;	<li>比方说，总共有 <code>4</code> 个糖果，价格分别为 <code>1</code> ，<code>2</code> ，<code>3</code> 和 <code>4</code> ，一位顾客买了价格为 <code>2</code> 和 <code>3</code> 的糖果，那么他可以免费获得价格为 <code>1</code> 的糖果，但不能获得价格为 <code>4</code> 的糖果。</li>&#10;</ul>&#10;&#10;<p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>cost</code> ，其中 <code>cost[i]</code> 表示第 <code>i</code> 个糖果的价格，请你返回获得 <strong>所有</strong> 糖果的 <strong>最小</strong> 总开销。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>cost = [1,2,3]&#10;<b>输出：</b>5&#10;<b>解释：</b>我们购买价格为 2 和 3 的糖果，然后免费获得价格为 1 的糖果。&#10;总开销为 2 + 3 = 5 。这是开销最小的 <strong>唯一</strong> 方案。&#10;注意，我们不能购买价格为 1 和 3 的糖果，并免费获得价格为 2 的糖果。&#10;这是因为免费糖果的价格必须小于等于购买的 2 个糖果价格的较小值。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>cost = [6,5,7,9,2,2]&#10;<b>输出：</b>23&#10;<b>解释：</b>最小总开销购买糖果方案为：&#10;- 购买价格为 9 和 7 的糖果&#10;- 免费获得价格为 6 的糖果&#10;- 购买价格为 5 和 2 的糖果&#10;- 免费获得价格为 2 的最后一个糖果&#10;因此，最小总开销为 9 + 7 + 5 + 2 = 23 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><b>输入：</b>cost = [5,5]&#10;<b>输出：</b>10&#10;<b>解释：</b>由于只有 2 个糖果，我们需要将它们都购买，而且没有免费糖果。&#10;所以总最小开销为 5 + 5 = 10 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= cost.length &lt;= 100</code></li>&#10;	<li><code>1 &lt;= cost[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每买两颗可免费获得一颗不超过二者较便宜者的糖。为让免费糖尽可能贵，应优先把贵的糖放进付费位置。枚举分组是多余的。</p>
<p>按价格降序排列后，每三颗中的第三颗免费，总开销为全部价格减去这些位置。</p>
<p>排序后用切片 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
  <mo stretchy="false">[</mo>
  <mn>2</mn>
  <mo>::</mo>
  <mn>3</mn>
  <mo stretchy="false">]</mo>
</math></span> 求和并从总和中减去。</p>
</blockquote>
<p>我们可以先将糖果按照价格从高到低排序，然后每三个糖果中取两个糖果，这样可以保证免费获得的糖果价格最高，从而使得总开销最小。</p>
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
</math></span> 是糖果数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumCost(cost []int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(cost)</span></span>
<span class="line"><span>	for i := len(cost) - 1; i >= 0; i -= 3 {</span></span>
<span class="line"><span>		ans += cost[i]</span></span>
<span class="line"><span>		if i > 0 {</span></span>
<span class="line"><span>			ans += cost[i-1]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-cost-of-buying-candies-with-discount" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2144.Minimum%20Cost%20of%20Buying%20Candies%20With%20Discount/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2160" tabindex="-1">2160. 拆分数位后四位数字的最小和 <a class="header-anchor" href="#q-2160" aria-label="Permalink to &quot;2160. 拆分数位后四位数字的最小和 {#q-2160}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数学、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个四位 <strong>正</strong> 整数 <code>num</code> 。请你使用 <code>num</code> 中的 <strong>数位</strong> ，将 <code>num</code> 拆成两个新的整数 <code>new1</code> 和 <code>new2</code> 。<code>new1</code> 和 <code>new2</code> 中可以有 <strong>前导 0</strong> ，且 <code>num</code> 中 <strong>所有</strong> 数位都必须使用。</p>&#10;&#10;<ul>&#10;	<li>比方说，给你 <code>num = 2932</code> ，你拥有的数位包括：两个 <code>2</code> ，一个 <code>9</code> 和一个 <code>3</code> 。一些可能的 <code>[new1, new2]</code> 数对为 <code>[22, 93]</code>，<code>[23, 92]</code>，<code>[223, 9]</code> 和 <code>[2, 329]</code> 。</li>&#10;</ul>&#10;&#10;<p>请你返回可以得到的 <code>new1</code> 和 <code>new2</code> 的 <strong>最小</strong> 和。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>num = 2932&#10;<b>输出：</b>52&#10;<b>解释：</b>可行的 [new1, new2] 数对为 [29, 23] ，[223, 9] 等等。&#10;最小和为数对 [29, 23] 的和：29 + 23 = 52 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>num = 4009&#10;<b>输出：</b>13&#10;<b>解释：</b>可行的 [new1, new2] 数对为 [0, 49] ，[490, 0] 等等。&#10;最小和为数对 [4, 9] 的和：4 + 9 = 13 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1000 &lt;= num &lt;= 9999</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>四位数字拆成两个整数，要求和最小。前导零允许。枚举所有拆分方式数量很少，但更直接的是让两个数都尽量小，即较小的两个数字做十位。</p>
<p>取出四位排序后，十位取最小的两个，个位取剩下两个。</p>
<p>和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mi>c</mi>
  <mo>+</mo>
  <mi>d</mi>
</math></span>。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumSum(num int) int {</span></span>
<span class="line"><span>	var nums []int</span></span>
<span class="line"><span>	for num > 0 {</span></span>
<span class="line"><span>		nums = append(nums, num%10)</span></span>
<span class="line"><span>		num /= 10</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	return 10*(nums[0]+nums[1]) + nums[2] + nums[3]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-sum-of-four-digit-number-after-splitting-digits" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2160.Minimum%20Sum%20of%20Four%20Digit%20Number%20After%20Splitting%20Digits/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2170" tabindex="-1">2170. 使数组变成交替数组的最少操作数 <a class="header-anchor" href="#q-2170" aria-label="Permalink to &quot;2170. 使数组变成交替数组的最少操作数 {#q-2170}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，该数组由 <code>n</code> 个正整数组成。</p>&#10;&#10;<p>如果满足下述条件，则数组 <code>nums</code> 是一个 <strong>交替数组</strong> ：</p>&#10;&#10;<ul>&#10;	<li><code>nums[i - 2] == nums[i]</code> ，其中 <code>2 &lt;= i &lt;= n - 1</code> 。</li>&#10;	<li><code>nums[i - 1] != nums[i]</code> ，其中 <code>1 &lt;= i &lt;= n - 1</code> 。</li>&#10;</ul>&#10;&#10;<p>在一步 <strong>操作</strong> 中，你可以选择下标 <code>i</code> 并将 <code>nums[i]</code> <strong>更改</strong> 为 <strong>任一</strong> 正整数。</p>&#10;&#10;<p>返回使数组变成交替数组的 <strong>最少操作数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,1,3,2,4,3]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;使数组变成交替数组的方法之一是将该数组转换为 [3,1,3,<em><strong>1</strong></em>,<em><strong>3</strong></em>,<em><strong>1</strong></em>] 。&#10;在这种情况下，操作数为 3 。&#10;可以证明，操作数少于 3 的情况下，无法使数组变成交替数组。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,2,2,2]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;使数组变成交替数组的方法之一是将该数组转换为 [1,2,<em><strong>1</strong></em>,2,<em><strong>1</strong></em>].&#10;在这种情况下，操作数为 2 。&#10;注意，数组不能转换成 [<em><strong>2</strong></em>,2,2,2,2] 。因为在这种情况下，nums[0] == nums[1]，不满足交替数组的条件。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：维护奇偶位置的计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>交替数组要求奇偶下标各自恒等且两值不同。一次操作改一个位置，最少修改等于「该奇偶位上不选目标值的个数」。需为偶数位、奇数位各选一个出现最多的值，且二者不能相同。</p>
<p>分别统计偶、奇下标的最高频与次高频。若二者众数不同，保留它们；若相同，则在「偶位众数 + 奇位次众数」与相反组合中取保留更多的那种。</p>
<p>函数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
</math></span> 扫一遍计数并维护前两名，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 减去所选频次之和。</p>
</blockquote>
<p>根据题目描述，我们可以知道，如果数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 是一个交替数组，那么数组中的奇数位置和偶数位置的元素一定是不同的，且奇数位置的元素相同，偶数位置的元素也相同。</p>
<p>要使得数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 变成交替数组的操作数最少，我们可以通过统计奇数位置和偶数位置的元素的出现次数，找到偶数位置出现次数最多的两个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>0</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
</math></span>，以及对应的出现次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>3</mn>
  </msub>
</math></span>；再找到奇数位置出现次数最多的两个元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mn>0</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mn>2</mn>
  </msub>
</math></span>，以及对应的出现次数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mn>1</mn>
  </msub>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mn>3</mn>
  </msub>
</math></span>。</p>
<p>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>0</mn>
  </msub>
  <mo>&#x2260;</mo>
  <msub>
    <mi>b</mi>
    <mn>0</mn>
  </msub>
</math></span>，那么我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中偶数位置的元素全部变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>0</mn>
  </msub>
</math></span>，奇数位置的元素全部变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mn>0</mn>
  </msub>
</math></span>，这样操作数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
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
  <mo stretchy="false">)</mo>
</math></span>；如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>0</mn>
  </msub>
  <mo>=</mo>
  <msub>
    <mi>b</mi>
    <mn>0</mn>
  </msub>
</math></span>，那么我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中偶数位置的元素全部变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>0</mn>
  </msub>
</math></span>，奇数位置的元素全部变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mn>2</mn>
  </msub>
</math></span>，或者将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中偶数位置的元素全部变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>a</mi>
    <mn>2</mn>
  </msub>
</math></span>，奇数位置的元素全部变成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>b</mi>
    <mn>0</mn>
  </msub>
</math></span>，这样操作数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <msub>
    <mi>a</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>b</mi>
    <mn>3</mn>
  </msub>
  <mo>,</mo>
  <msub>
    <mi>a</mi>
    <mn>3</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>b</mi>
    <mn>1</mn>
  </msub>
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
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumOperations(nums []int) int {</span></span>
<span class="line"><span>	f := func(i int) [4]int {</span></span>
<span class="line"><span>		cnt := make(map[int]int)</span></span>
<span class="line"><span>		for ; i &#x3C; len(nums); i += 2 {</span></span>
<span class="line"><span>			cnt[nums[i]]++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		k1, k2 := 0, 0</span></span>
<span class="line"><span>		for k, v := range cnt {</span></span>
<span class="line"><span>			if cnt[k1] &#x3C; v {</span></span>
<span class="line"><span>				k2, k1 = k1, k</span></span>
<span class="line"><span>			} else if cnt[k2] &#x3C; v {</span></span>
<span class="line"><span>				k2 = k</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return [4]int{k1, cnt[k1], k2, cnt[k2]}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	a := f(0)</span></span>
<span class="line"><span>	b := f(1)</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	if a[0] != b[0] {</span></span>
<span class="line"><span>		return n - (a[1] + b[1])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return n - max(a[1]+b[3], a[3]+b[1])</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-make-the-array-alternating" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2170.Minimum%20Operations%20to%20Make%20the%20Array%20Alternating/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2171" tabindex="-1">2171. 拿出最少数目的魔法豆 <a class="header-anchor" href="#q-2171" aria-label="Permalink to &quot;2171. 拿出最少数目的魔法豆 {#q-2171}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、枚举、前缀和、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个 <strong>正整数 </strong>数组 <code>beans</code> ，其中每个整数表示一个袋子里装的魔法豆的数目。</p>&#10;&#10;<p>请你从每个袋子中 <strong>拿出</strong> 一些豆子（也可以<strong> 不拿出</strong>），使得剩下的 <strong>非空</strong> 袋子中（即 <strong>至少还有一颗</strong> 魔法豆的袋子）魔法豆的数目 <strong>相等</strong>。一旦把魔法豆从袋子中取出，你不能再将它放到任何袋子中。</p>&#10;&#10;<p>请返回你需要拿出魔法豆的 <strong>最少数目</strong>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>beans = [4,1,6,5]&#10;<b>输出：</b>4&#10;<b>解释：</b>&#10;- 我们从有 1 个魔法豆的袋子中拿出 1 颗魔法豆。&#10;  剩下袋子中魔法豆的数目为：[4,<u><strong>0</strong></u>,6,5]&#10;- 然后我们从有 6 个魔法豆的袋子中拿出 2 个魔法豆。&#10;  剩下袋子中魔法豆的数目为：[4,0,<u><strong>4</strong></u>,5]&#10;- 然后我们从有 5 个魔法豆的袋子中拿出 1 个魔法豆。&#10;  剩下袋子中魔法豆的数目为：[4,0,4,<u><strong>4</strong></u>]&#10;总共拿出了 1 + 2 + 1 = 4 个魔法豆，剩下非空袋子中魔法豆的数目相等。&#10;没有比取出 4 个魔法豆更少的方案。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>beans = [2,10,3,2]&#10;<b>输出：</b>7&#10;<strong>解释：</strong>&#10;- 我们从有 2 个魔法豆的其中一个袋子中拿出 2 个魔法豆。&#10;  剩下袋子中魔法豆的数目为：[<u><strong>0</strong></u>,10,3,2]&#10;- 然后我们从另一个有 2 个魔法豆的袋子中拿出 2 个魔法豆。&#10;  剩下袋子中魔法豆的数目为：[0,10,3,<u><strong>0</strong></u>]&#10;- 然后我们从有 3 个魔法豆的袋子中拿出 3 个魔法豆。&#10;  剩下袋子中魔法豆的数目为：[0,10,<u><strong>0</strong></u>,0]&#10;总共拿出了 2 + 2 + 3 = 7 个魔法豆，剩下非空袋子中魔法豆的数目相等。&#10;没有比取出 7 个魔法豆更少的方案。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= beans.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= beans[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每个非空袋最终豆子数必须相同，可把某袋倒空或减少。等价于选定最终值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，把小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的袋清空、把大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 的袋减到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 只可能取某个原袋的豆子数，否则还可增大 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 而不增加清空代价。</p>
<p>排序后枚举 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">beans</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，留下 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mstyle scriptlevel="0">
    <mspace width="0.167em"></mspace>
  </mstyle>
  <mi>x</mi>
</math></span> 颗，拿出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
  <mi>x</mi>
</math></span> 颗。</p>
<p>取该值的最小值。</p>
</blockquote>
<p>我们可以将所有袋子中的魔法豆按照从小到大的顺序排列，然后枚举每个袋子的魔法豆数目 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 作为最终袋子中魔法豆数目，那么一共剩余的魔法豆数目为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，因此需要拿出的魔法豆数目为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2212;</mo>
  <mi>b</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>n</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>i</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 为所有袋子中魔法豆的总数。我们求出所有方案中需要拿出的魔法豆数目的最小值即可。</p>
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
</math></span> 为袋子的数目。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumRemoval(beans []int) int64 {</span></span>
<span class="line"><span>	sort.Ints(beans)</span></span>
<span class="line"><span>	s := 0</span></span>
<span class="line"><span>	for _, x := range beans {</span></span>
<span class="line"><span>		s += x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := s</span></span>
<span class="line"><span>	n := len(beans)</span></span>
<span class="line"><span>	for i, x := range beans {</span></span>
<span class="line"><span>		ans = min(ans, s-x*(n-i))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/removing-minimum-number-of-magic-beans" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2171.Removing%20Minimum%20Number%20of%20Magic%20Beans/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2182" tabindex="-1">2182. 构造限制重复的字符串 <a class="header-anchor" href="#q-2182" aria-label="Permalink to &quot;2182. 构造限制重复的字符串 {#q-2182}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、哈希表、字符串、计数、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个字符串 <code>s</code> 和一个整数 <code>repeatLimit</code> ，用 <code>s</code> 中的字符构造一个新字符串 <code>repeatLimitedString</code> ，使任何字母 <strong>连续</strong> 出现的次数都不超过 <code>repeatLimit</code> 次。你不必使用 <code>s</code> 中的全部字符。</p>&#10;&#10;<p>返回 <strong>字典序最大的</strong><em> </em><code>repeatLimitedString</code> 。</p>&#10;&#10;<p>如果在字符串 <code>a</code> 和 <code>b</code> 不同的第一个位置，字符串 <code>a</code> 中的字母在字母表中出现时间比字符串 <code>b</code> 对应的字母晚，则认为字符串 <code>a</code> 比字符串 <code>b</code> <strong>字典序更大</strong> 。如果字符串中前 <code>min(a.length, b.length)</code> 个字符都相同，那么较长的字符串字典序更大。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;cczazcc&quot;, repeatLimit = 3&#10;<strong>输出：</strong>&quot;zzcccac&quot;&#10;<strong>解释：</strong>使用 s 中的所有字符来构造 repeatLimitedString &quot;zzcccac&quot;。&#10;字母 'a' 连续出现至多 1 次。&#10;字母 'c' 连续出现至多 3 次。&#10;字母 'z' 连续出现至多 2 次。&#10;因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。&#10;该字符串是字典序最大的 repeatLimitedString ，所以返回 &quot;zzcccac&quot; 。&#10;注意，尽管 &quot;zzcccca&quot; 字典序更大，但字母 'c' 连续出现超过 3 次，所以它不是一个有效的 repeatLimitedString 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>s = &quot;aababab&quot;, repeatLimit = 2&#10;<strong>输出：</strong>&quot;bbabaa&quot;&#10;<strong>解释：</strong>&#10;使用 s 中的一些字符来构造 repeatLimitedString &quot;bbabaa&quot;。 &#10;字母 'a' 连续出现至多 2 次。 &#10;字母 'b' 连续出现至多 2 次。 &#10;因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。 &#10;该字符串是字典序最大的 repeatLimitedString ，所以返回 &quot;bbabaa&quot; 。 &#10;注意，尽管 &quot;bbabaaa&quot; 字典序更大，但字母 'a' 连续出现超过 2 次，所以它不是一个有效的 repeatLimitedString 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= repeatLimit &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>要用完尽可能多、字典序尽可能大的字符，且同一字符不能连续超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">repeatLimit</mtext>
</math></span> 次。应优先放当前剩余最多的最大字母，放满限额后再插入一个次大字母隔开。</p>
<p>计数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 个字母，从 <code v-pre>z</code> 向 <code v-pre>a</code> 扫描；指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 指向严格更小且仍有剩余的字母。每次先放 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 至多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">repeatLimit</mtext>
</math></span> 个，若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 仍剩则夹一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span>。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 单调左移，总代价与串长及字母表成线性。</p>
</blockquote>
<p>我们先用一个长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>26</mn>
</math></span> 的数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字符出现的次数，然后从大到小枚举字母表的第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个字母，每次取出最多 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>r</mi>
  <mi>e</mi>
  <mi>p</mi>
  <mi>e</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>L</mi>
  <mi>i</mi>
  <mi>m</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mo stretchy="false">)</mo>
</math></span> 个字母 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，如果取完后 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 还大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，则继续取字母表中第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 个字母，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 是最大的满足 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
  <mo>&lt;</mo>
  <mi>i</mi>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo>&gt;</mo>
  <mn>0</mn>
</math></span> 的下标，直到取完所有字母。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
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
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 是字符集，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func repeatLimitedString(s string, repeatLimit int) string {</span></span>
<span class="line"><span>	cnt := [26]int{}</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var ans []byte</span></span>
<span class="line"><span>	for i, j := 25, 24; i >= 0; i-- {</span></span>
<span class="line"><span>		j = min(j, i-1)</span></span>
<span class="line"><span>		for {</span></span>
<span class="line"><span>			for k := min(cnt[i], repeatLimit); k > 0; k-- {</span></span>
<span class="line"><span>				ans = append(ans, byte(i+'a'))</span></span>
<span class="line"><span>				cnt[i]--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if cnt[i] == 0 {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			for j >= 0 &#x26;&#x26; cnt[j] == 0 {</span></span>
<span class="line"><span>				j--</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			if j &#x3C; 0 {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			ans = append(ans, byte(j+'a'))</span></span>
<span class="line"><span>			cnt[j]--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return string(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/construct-string-with-repeat-limit" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2182.Construct%20String%20With%20Repeat%20Limit/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2195" tabindex="-1">2195. 向数组中追加 K 个整数 <a class="header-anchor" href="#q-2195" aria-label="Permalink to &quot;2195. 向数组中追加 K 个整数 {#q-2195}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、数学、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> 。请你向 <code>nums</code> 中追加 <code>k</code> 个 <strong>未</strong> 出现在 <code>nums</code> 中的、<strong>互不相同</strong> 的 <strong>正</strong> 整数，并使结果数组的元素和 <strong>最小</strong> 。</p>&#10;&#10;<p>返回追加到 <code>nums</code> 中的 <code>k</code> 个整数之和。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,4,25,10,25], k = 2&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>在该解法中，向数组中追加的两个互不相同且未出现的正整数是 2 和 3 。&#10;nums 最终元素和为 1 + 4 + 25 + 10 + 25 + 2 + 3 = 70 ，这是所有情况中的最小值。&#10;所以追加到数组中的两个整数之和是 2 + 3 = 5 ，所以返回 5 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [5,6], k = 6&#10;<strong>输出：</strong>25&#10;<strong>解释：</strong>在该解法中，向数组中追加的两个互不相同且未出现的正整数是 1 、2 、3 、4 、7 和 8 。&#10;nums 最终元素和为 5 + 6 + 1 + 2 + 3 + 4 + 7 + 8 = 36 ，这是所有情况中的最小值。&#10;所以追加到数组中的两个整数之和是 1 + 2 + 3 + 4 + 7 + 8 = 25 ，所以返回 25 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i], k &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 贪心 + 数学 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>在正整数中选出 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个未出现在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 里的数，使其和最小。应取最小的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 个缺失正整数。若从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 起逐个判断是否在集合中，当 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中的空洞都很大时循环次数过多。</p>
<p>排序并加上哨兵 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span> 后，相邻值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span> 之间有一段连续缺失。取其中前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>k</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 个数，其和为等差数列，一次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span> 加入答案。</p>
<p>从左到右消耗 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 即可。</p>
</blockquote>
<p>我们不妨向数组中加入两个哨兵节点，分别为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>。</p>
<p>然后我们对数组进行排序，那么对于数组中的任意两个相邻的元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 中的整数都是未出现在数组中的，我们可以将这些整数加入到数组中。</p>
<p>因此，我们从小到大遍历数组中的相邻元素对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math></span>，对于每个相邻元素对，我们计算区间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 中的整数个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>，那么这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span> 个整数的和为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>m</mi>
      <mo>&#xD7;</mo>
      <mo stretchy="false">(</mo>
      <mi>a</mi>
      <mo>+</mo>
      <mn>1</mn>
      <mo>+</mo>
      <mi>a</mi>
      <mo>+</mo>
      <mi>m</mi>
      <mo stretchy="false">)</mo>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math></span>，我们将这个和累加到答案中，并将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 减到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，我们就可以停止遍历了，返回答案。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimalKSum(nums []int, k int) (ans int64) {</span></span>
<span class="line"><span>	nums = append(nums, []int{0, 2e9}...)</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	for i, b := range nums[1:] {</span></span>
<span class="line"><span>		a := nums[i]</span></span>
<span class="line"><span>		m := max(0, min(k, b-a-1))</span></span>
<span class="line"><span>		ans += int64(a+1+a+m) * int64(m) / 2</span></span>
<span class="line"><span>		k -= m</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/append-k-integers-with-minimal-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2100-2199/2195.Append%20K%20Integers%20With%20Minimal%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2202" tabindex="-1">2202. K 次操作后最大化顶端元素 <a class="header-anchor" href="#q-2202" aria-label="Permalink to &quot;2202. K 次操作后最大化顶端元素 {#q-2202}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，它表示一个 <strong>堆</strong> ，其中 <code>nums[0]</code> 是堆顶的元素。</p>&#10;&#10;<p>每一次操作中，你可以执行以下操作 <strong>之一</strong> ：</p>&#10;&#10;<ul>&#10;	<li>如果堆非空，那么 <strong>删除</strong> 堆顶端的元素。</li>&#10;	<li>如果存在 1 个或者多个被删除的元素，你可以从它们中选择任何一个，<b>添加</b> 回堆顶，这个元素成为新的堆顶元素。</li>&#10;</ul>&#10;&#10;<p>同时给你一个整数 <code>k</code> ，它表示你总共需要执行操作的次数。</p>&#10;&#10;<p>请你返回 <strong>恰好</strong> 执行 <code>k</code> 次操作以后，堆顶元素的 <strong>最大值</strong> 。如果执行完 <code>k</code> 次操作以后，堆一定为空，请你返回 <code>-1</code> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [5,2,2,4,0,6], k = 4&#10;<b>输出：</b>5&#10;<strong>解释：</strong>&#10;4 次操作后，堆顶元素为 5 的方法之一为：&#10;- 第 1 次操作：删除堆顶元素 5 ，堆变为 [2,2,4,0,6] 。&#10;- 第 2 次操作：删除堆顶元素 2 ，堆变为 [2,4,0,6] 。&#10;- 第 3 次操作：删除堆顶元素 2 ，堆变为 [4,0,6] 。&#10;- 第 4 次操作：将 5 添加回堆顶，堆变为 [5,4,0,6] 。&#10;注意，这不是最后堆顶元素为 5 的唯一方式。但可以证明，4 次操作以后 5 是能得到的最大堆顶元素。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [2], k = 1&#10;<b>输出：</b>-1&#10;<b>解释：</b>&#10;第 1 次操作中，我们唯一的选择是将堆顶元素弹出堆。&#10;由于 1 次操作后无法得到一个非空的堆，所以我们返回 -1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i], k &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次操作只能弹出栈顶或把先前弹出的某一元素放回顶部， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 可达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，按步模拟不可行。需要把「恰好 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次操作后的栈顶」收成几种可比较的情况。</p>
<p><span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <mn>0</mn>
</math></span> 时栈顶即为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>。若数组只有一个元素，奇数次操作会把唯一元素弹出且无法放回，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>；偶数次则仍是该元素。</p>
<p>长度至少为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 时，前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次弹出腾出的数都可以在第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次放回成为栈顶，故候选为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mn>0.</mn>
  <mo>.</mo>
  <mi>k</mi>
  <mo>&#x2212;</mo>
  <mn>2</mn>
  <mo stretchy="false">]</mo>
</math></span> 的最大值；若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>&lt;</mo>
  <mi>n</mi>
</math></span>，也可以第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次继续弹出，使 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>k</mi>
  <mo stretchy="false">]</mo>
</math></span> 暴露为栈顶。二者取较大值即可。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumTop(nums []int, k int) int {</span></span>
<span class="line"><span>	if k == 0 {</span></span>
<span class="line"><span>		return nums[0]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	if n == 1 {</span></span>
<span class="line"><span>		if k%2 == 1 {</span></span>
<span class="line"><span>			return -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return nums[0]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := -1</span></span>
<span class="line"><span>	for i := 0; i &#x3C; min(k-1, n); i++ {</span></span>
<span class="line"><span>		ans = max(ans, nums[i])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if k &#x3C; n {</span></span>
<span class="line"><span>		ans = max(ans, nums[k])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximize-the-topmost-element-after-k-moves" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2202.Maximize%20the%20Topmost%20Element%20After%20K%20Moves/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2207" tabindex="-1">2207. 字符串中最多数目的子序列 <a class="header-anchor" href="#q-2207" aria-label="Permalink to &quot;2207. 字符串中最多数目的子序列 {#q-2207}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、字符串、前缀和</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>text</code> 和另一个下标从 <strong>0</strong> 开始且长度为 <code>2</code> 的字符串 <code>pattern</code> ，两者都只包含小写英文字母。</p>&#10;&#10;<p>你可以在 <code>text</code> 中任意位置插入 <strong>一个</strong> 字符，这个插入的字符必须是 <code>pattern[0]</code> <b>或者</b> <code>pattern[1]</code> 。注意，这个字符可以插入在 <code>text</code> 开头或者结尾的位置。</p>&#10;&#10;<p>请你返回插入一个字符后，<code>text</code> 中最多包含多少个等于 <code>pattern</code> 的 <strong>子序列</strong> 。</p>&#10;&#10;<p><strong>子序列</strong> 指的是将一个字符串删除若干个字符后（也可以不删除），剩余字符保持原本顺序得到的字符串。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>text = &quot;abdcdbc&quot;, pattern = &quot;ac&quot;&#10;<b>输出：</b>4&#10;<strong>解释：</strong>&#10;如果我们在 text[1] 和 text[2] 之间添加 pattern[0] = 'a' ，那么我们得到 &quot;ab<em><strong>a</strong></em>dcdbc&quot; 。那么 &quot;ac&quot; 作为子序列出现 4 次。&#10;其他得到 4 个 &quot;ac&quot; 子序列的方案还有 &quot;<em><strong>a</strong></em>abdcdbc&quot; 和 &quot;abd<em><strong>a</strong></em>cdbc&quot; 。&#10;但是，&quot;abdc<em><strong>a</strong></em>dbc&quot; ，&quot;abd<em><strong>c</strong></em>cdbc&quot; 和 &quot;abdcdbc<em><strong>c</strong></em>&quot; 这些字符串虽然是可行的插入方案，但是只出现了 3 次 &quot;ac&quot; 子序列，所以不是最优解。&#10;可以证明插入一个字符后，无法得到超过 4 个 &quot;ac&quot; 子序列。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>text = &quot;aabb&quot;, pattern = &quot;ab&quot;&#10;<b>输出：</b>6&#10;<strong>解释：</strong>&#10;可以得到 6 个 &quot;ab&quot; 子序列的部分方案为 &quot;<em><strong>a</strong></em>aabb&quot; ，&quot;aa<em><strong>a</strong></em>bb&quot; 和 &quot;aab<em><strong>b</strong></em>b&quot; 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= text.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>pattern.length == 2</code></li>&#10;	<li><code>text</code> 和 <code>pattern</code> 都只包含小写英文字母。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：遍历 + 计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
</math></span> 任意位置插入一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
</math></span> 中的字符，使作为子序列出现的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
</math></span> 尽量多。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>t</mi>
  <mi>e</mi>
  <mi>x</mi>
  <mi>t</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能对每个插入位置重新统计子序列个数。</p>
<p>不插入时，从左扫描即可： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 记下已出现的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，每遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 就累加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>。插入一次后，新增的子序列只可能来自「多一个前缀字符」或「多一个后缀字符」：插在最前则新增量为现有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 的个数，插在最后则新增量为现有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 的个数。</p>
<p>因此一遍扫描同时得到不插入的答案以及 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span>，最后再把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
</math></span> 加上即可。注意两个字符相同时，判断顺序要先结算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>t</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>n</mi>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 再增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，以免把当前位置与自身配对。</p>
</blockquote>
<p>我们可以使用两个变量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 分别记录当前字符串中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 出现的次数。</p>
<p>然后遍历字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">text</mtext>
</math></span>，对于当前遍历到的字符 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 加一，此时之前出现过的所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span> 都可以和当前的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 组成一个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
</math></span> 子序列，因此答案加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，我们将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 加一。</li>
</ul>
<p>遍历结束后，由于我们可以插入一个字符，因此，如果我们在字符串开头加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>，那么可以得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
</math></span> 子序列；如果我们在字符串结尾加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
  <mo stretchy="false">[</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，那么可以得到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">pattern</mtext>
</math></span> 子序列。因此，我们将答案加上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
</math></span> 中的较大值即可。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">text</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumSubsequenceCount(text string, pattern string) (ans int64) {</span></span>
<span class="line"><span>	x, y := 0, 0</span></span>
<span class="line"><span>	for _, c := range text {</span></span>
<span class="line"><span>		if byte(c) == pattern[1] {</span></span>
<span class="line"><span>			y++</span></span>
<span class="line"><span>			ans += int64(x)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if byte(c) == pattern[0] {</span></span>
<span class="line"><span>			x++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans += int64(max(x, y))</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximize-number-of-subsequences-in-a-string" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2207.Maximize%20Number%20of%20Subsequences%20in%20a%20String/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2208" tabindex="-1">2208. 将数组和减半的最少操作次数 <a class="header-anchor" href="#q-2208" aria-label="Permalink to &quot;2208. 将数组和减半的最少操作次数 {#q-2208}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个正整数数组 <code>nums</code> 。每一次操作中，你可以从 <code>nums</code> 中选择 <strong>任意</strong> 一个数并将它减小到 <strong>恰好</strong> 一半。（注意，在后续操作中你可以对减半过的数继续执行操作）</p>&#10;&#10;<p>请你返回将 <code>nums</code> 数组和 <strong>至少</strong> 减少一半的 <strong>最少</strong> 操作数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [5,19,8,1]&#10;<b>输出：</b>3&#10;<b>解释：</b>初始 nums 的和为 5 + 19 + 8 + 1 = 33 。&#10;以下是将数组和减少至少一半的一种方法：&#10;选择数字 19 并减小为 9.5 。&#10;选择数字 9.5 并减小为 4.75 。&#10;选择数字 8 并减小为 4 。&#10;最终数组为 [5, 4.75, 4, 1] ，和为 5 + 4.75 + 4 + 1 = 14.75 。&#10;nums 的和减小了 33 - 14.75 = 18.25 ，减小的部分超过了初始数组和的一半，18.25 >= 33/2 = 16.5 。&#10;我们需要 3 个操作实现题目要求，所以返回 3 。&#10;可以证明，无法通过少于 3 个操作使数组和减少至少一半。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>nums = [3,8,20]&#10;<b>输出：</b>3&#10;<strong>解释：</strong>初始 nums 的和为 3 + 8 + 20 = 31 。&#10;以下是将数组和减少至少一半的一种方法：&#10;选择数字 20 并减小为 10 。&#10;选择数字 10 并减小为 5 。&#10;选择数字 3 并减小为 1.5 。&#10;最终数组为 [1.5, 8, 5] ，和为 1.5 + 8 + 5 = 14.5 。&#10;nums 的和减小了 31 - 14.5 = 16.5 ，减小的部分超过了初始数组和的一半， 16.5 >= 31/2 = 15.5 。&#10;我们需要 3 个操作实现题目要求，所以返回 3 。&#10;可以证明，无法通过少于 3 个操作使数组和减少至少一半。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>7</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 优先队列（大根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次把一个数减半，要使总和降到不超过原来的一半，操作次数尽量少。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能搜索操作序列。减半对总和的贡献等于被选中的那个数的一半，因此每一步都应选当前最大的数。</p>
<p>用大根堆维护全部数值，预先记下需要削减的总量 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>=</mo>
  <mrow data-mjx-texclass="ORD">
    <mi data-mjx-auto-op="false">sum</mi>
  </mrow>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>。反复取出堆顶 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span>，再把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
</math></span> 放回堆中，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span>。操作次数即为答案。</p>
</blockquote>
<p>根据题目描述，每一次操作，都会将数组中的一个数减半。要使得数组和至少减少一半的操作次数最少，那么每一次操作都应该选择当前数组中的最大值进行减半。</p>
<p>因此，我们先算出数组要减少的总和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，然后用一个优先队列（大根堆）维护数组中的所有数，每次从优先队列中取出最大值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
</math></span>，将其减半，然后将减半后的数重新放入优先队列中，同时更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span>，直到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo>&#x2264;</mo>
  <mn>0</mn>
</math></span> 为止。那么此时的操作次数就是答案。</p>
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
</math></span> 是数组的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func halveArray(nums []int) (ans int) {</span></span>
<span class="line"><span>	var s float64</span></span>
<span class="line"><span>	pq := &#x26;hp{}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		s += float64(x)</span></span>
<span class="line"><span>		heap.Push(pq, float64(x))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	s /= 2</span></span>
<span class="line"><span>	for s > 0 {</span></span>
<span class="line"><span>		t := heap.Pop(pq).(float64) / 2</span></span>
<span class="line"><span>		s -= t</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		heap.Push(pq, t)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.Float64Slice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h hp) Less(i, j int) bool { return h.Float64Slice[i] > h.Float64Slice[j] }</span></span>
<span class="line"><span>func (h *hp) Push(v any)        { h.Float64Slice = append(h.Float64Slice, v.(float64)) }</span></span>
<span class="line"><span>func (h *hp) Pop() any {</span></span>
<span class="line"><span>	a := h.Float64Slice</span></span>
<span class="line"><span>	v := a[len(a)-1]</span></span>
<span class="line"><span>	h.Float64Slice = a[:len(a)-1]</span></span>
<span class="line"><span>	return v</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-operations-to-halve-array-sum" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2208.Minimum%20Operations%20to%20Halve%20Array%20Sum/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2214" tabindex="-1">2214. 通关游戏所需的最低生命值 🔒 <a class="header-anchor" href="#q-2214" aria-label="Permalink to &quot;2214. 通关游戏所需的最低生命值 🔒 {#q-2214}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你正在玩一个有 <code>n</code> 个关卡的游戏，从 <code>0</code> 到 <code>n - 1</code>。给你一个 <strong>下标从 0 开始 </strong>的整数数组 <code>damage</code>，其中 <code>damage[i]</code> 是你完成第 <code>i</code> 个关卡所损失的生命值。</p>&#10;&#10;<p>你也会得到一个整数 <code>armor</code>。你最多只能在 <strong>任何 </strong>关卡使用 <strong>一次 </strong>护甲技能，这将保护你免受 <strong>最多</strong> <code>armor</code> 伤害。</p>&#10;&#10;<p>你必须按顺序完成关卡，并且你的生命值必须一直 <strong>大于</strong> <code>0</code> 才能通关。</p>&#10;&#10;<p>返回<em>你开始通关所需的最低生命值。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> damage = [2,7,4,3], armor = 4&#10;<strong>输出:</strong> 13&#10;<strong>解释:</strong> 从 13 生命值开始通关游戏的最佳方法是:&#10;第 1 回合，受到 2 点伤害。你还有 13 - 2 = 11 生命值。&#10;第 2 回合，受到 7 点伤害。你还有 11 - 7 = 4 生命值。&#10;第 3 回合，使用你的护甲保护你免受 4 点伤害。你有 4 - 0 = 4 生命值。&#10;第 4 回合，受到 3 点伤害。你还有 4 - 3 = 1 生命值。&#10;注意，13 是你开始时通关游戏所需的最低生命值。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> damage = [2,5,3,4], armor = 7&#10;<strong>输出:</strong> 10&#10;<strong>解释:</strong> 从 10 生命值开始通关游戏的最佳方法是:&#10;第 1 回合，受到 2 点伤害。你还有 10 - 2 = 8 生命值。&#10;第 2 回合，使用护甲保护自己免受 5 点伤害。你还有 8 - 0 = 8 生命值。&#10;第 3 回合，受到 3 点伤害。你还有 8 - 3 = 5 生命值。&#10;第 4 回合，受到 4 点伤害。你还有 5 - 4 = 1 生命值。&#10;注意，10 是你开始通关所需的最低生命值。&#10;</pre>&#10;&#10;<p><strong>示例 3:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> damage = [3,3,3], armor = 0&#10;<strong>输出:</strong> 10&#10;<strong>解释:</strong> 从 10 生命值开始通关游戏的最佳方法是:&#10;第 1 回合，受到 2 点伤害。你还有 10 - 3 = 7 生命值。&#10;第 2 回合，受到 3 点伤害。你还有 7 - 3 = 4 生命值。&#10;第 3 回合， 受到 3 点伤害。你还有 4 - 3 = 1 生命值。&#10;注意你没有使用护甲技能。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == damage.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= damage[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= armor &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>按顺序承受全部伤害，生命必须在每一回合后仍为正；护甲只能用在一回合，把该回合伤害变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>d</mi>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">armor</mtext>
  <mo stretchy="false">)</mo>
</math></span>。若枚举护甲用在哪一回合，需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span> 次前缀比较， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 可以接受，但结论可以一次求出。</p>
<p>不使用护甲时，所需生命为全部伤害之和再加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。护甲能减免的量不超过自身耐久，也不超过该回合伤害，因此减免上限是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">damage</mtext>
  <mo stretchy="false">)</mo>
  <mo>,</mo>
  <mtext mathvariant="italic">armor</mtext>
  <mo stretchy="false">)</mo>
</math></span>。把它用在伤害最大的那一回合，即可少准备这么多生命。</p>
</blockquote>
<p>我们可以贪心地选择在伤害值最大的回合中使用一次护甲技能，假设伤害值最大为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">mx</mtext>
</math></span>，那么我们可以免受 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">mx</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">armor</mtext>
  <mo stretchy="false">)</mo>
</math></span> 的伤害，因此我们需要的最小生命值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP">&#x2211;</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">damage</mtext>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">mx</mtext>
  <mo>,</mo>
  <mtext mathvariant="italic">armor</mtext>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">damage</mtext>
</math></span> 的长度。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumHealth(damage []int, armor int) int64 {</span></span>
<span class="line"><span>	var s int64</span></span>
<span class="line"><span>	var mx int</span></span>
<span class="line"><span>	for _, v := range damage {</span></span>
<span class="line"><span>		s += int64(v)</span></span>
<span class="line"><span>		mx = max(mx, v)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return s - int64(min(mx, armor)) + 1</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-health-to-beat-game" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2214.Minimum%20Health%20to%20Beat%20Game/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2216" tabindex="-1">2216. 美化数组的最少删除数 <a class="header-anchor" href="#q-2216" aria-label="Permalink to &quot;2216. 美化数组的最少删除数 {#q-2216}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：栈、贪心、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，如果满足下述条件，则认为数组 <code>nums</code> 是一个 <strong>美丽数组</strong> ：</p>&#10;&#10;<ul>&#10;	<li><code>nums.length</code> 为偶数</li>&#10;	<li>对所有满足 <code>i % 2 == 0</code> 的下标 <code>i</code> ，<code>nums[i] != nums[i + 1]</code> 均成立</li>&#10;</ul>&#10;&#10;<p>注意，空数组同样认为是美丽数组。</p>&#10;&#10;<p>你可以从 <code>nums</code> 中删除任意数量的元素。当你删除一个元素时，被删除元素右侧的所有元素将会向左移动一个单位以填补空缺，而左侧的元素将会保持 <strong>不变</strong> 。</p>&#10;&#10;<p>返回使 <code>nums</code> 变为美丽数组所需删除的 <strong>最少</strong> 元素数目<em>。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,1,2,3,5]&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>可以删除 <code>nums[0]</code> 或 <code>nums[1]</code> ，这样得到的 <code>nums</code> = [1,2,3,5] 是一个美丽数组。可以证明，要想使 nums 变为美丽数组，至少需要删除 1 个元素。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>nums = [1,1,2,2,3,3]&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>可以删除 <code>nums[0]</code> 和 <code>nums[5]</code> ，这样得到的 nums = [1,2,2,3] 是一个美丽数组。可以证明，要想使 nums 变为美丽数组，至少需要删除 2 个元素。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>美丽数组要求长度为偶数，且每个偶数下标与其后一位不相等。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能搜索删哪些位置。从左到右配对时，一旦 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，这一对无法保留，必须删掉其中一个。</p>
<p>贪心删掉当前这个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span>，让后面的元素前移再试，等价于指针只前进一位并计一次删除；若二者不同则这一对合法，指针跳过两位。扫完后若剩余长度仍为奇数，再删一个尾元素即可。</p>
</blockquote>
<p>根据题目描述，我们知道，一个美丽数组有偶数个元素，且如果我们把这个数组中每相邻两个元素划分为一组，那么每一组中的两个元素都不相等。这意味着，组内的元素不能重复，但组与组之间的元素可以重复。</p>
<p>因此，我们考虑从左到右遍历数组，只要遇到相邻两个元素相等，我们就将其中的一个元素删除，即删除数加一；否则，我们可以保留这两个元素。</p>
<p>最后，我们判断删除后的数组长度是否为偶数，如果不是，则说明我们需要再删除一个元素，使得最终的数组长度为偶数。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 是数组的长度。我们只需要遍历数组一次。空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minDeletion(nums []int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n-1; i++ {</span></span>
<span class="line"><span>		if nums[i] == nums[i+1] {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans += (n - ans) % 2</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一按相邻两项决定是否删除，指针一次走一或两步。也可以先把与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 相同的连续段压掉：段内多出的元素都必须删，只留下一个作为偶数位，再与段后第一个不同值配成一对。</p>
<p>内层循环跳过相等元素并累计删除，然后指针再跨过配对的后一项。收尾同样按剩余奇偶补删一次。时间仍是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>，只是按相等段推进。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minDeletion(nums []int) (ans int) {</span></span>
<span class="line"><span>	n := len(nums)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; n; {</span></span>
<span class="line"><span>		j := i + 1</span></span>
<span class="line"><span>		for ; j &#x3C; n &#x26;&#x26; nums[j] == nums[i]; j++ {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		i = j + 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans += (n - ans) % 2</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-deletions-to-make-array-beautiful" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2216.Minimum%20Deletions%20to%20Make%20Array%20Beautiful/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2224" tabindex="-1">2224. 转化时间需要的最少操作数 <a class="header-anchor" href="#q-2224" aria-label="Permalink to &quot;2224. 转化时间需要的最少操作数 {#q-2224}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、字符串</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个字符串 <code>current</code> 和 <code>correct</code> ，表示两个 <strong>24 小时制时间</strong> 。</p>&#10;&#10;<p><strong>24 小时制时间</strong> 按 <code>&quot;HH:MM&quot;</code> 进行格式化，其中 <code>HH</code> 在 <code>00</code> 和 <code>23</code> 之间，而 <code>MM</code> 在 <code>00</code> 和 <code>59</code> 之间。最早的 24 小时制时间为 <code>00:00</code> ，最晚的是 <code>23:59</code> 。</p>&#10;&#10;<p>在一步操作中，你可以将 <code>current</code> 这个时间增加 <code>1</code>、<code>5</code>、<code>15</code> 或 <code>60</code> 分钟。你可以执行这一操作 <strong>任意</strong> 次数。</p>&#10;&#10;<p>返回将 <code>current</code><em> </em>转化为<em> </em><code>correct</code> 需要的 <strong>最少操作数</strong> 。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>current = &quot;02:30&quot;, correct = &quot;04:35&quot;&#10;<strong>输出：</strong>3&#10;<strong>解释：&#10;</strong>可以按下述 3 步操作将 current 转换为 correct ：&#10;- 为 current 加 60 分钟，current 变为 &quot;03:30&quot; 。&#10;- 为 current 加 60 分钟，current 变为 &quot;04:30&quot; 。 &#10;- 为 current 加 5 分钟，current 变为 &quot;04:35&quot; 。&#10;可以证明，无法用少于 3 步操作将 current 转化为 correct 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>current = &quot;11:00&quot;, correct = &quot;11:01&quot;&#10;<strong>输出：</strong>1&#10;<strong>解释：</strong>只需要为 current 加一分钟，所以最小操作数是 1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>current</code> 和 <code>correct</code> 都符合 <code>&quot;HH:MM&quot;</code> 格式</li>&#10;	<li><code>current &lt;= correct</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次可把当前时间增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span> 分钟，从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>u</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 加到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>r</mi>
  <mi>e</mi>
  <mi>c</mi>
  <mi>t</mi>
</math></span>，次数尽量少。时间差至多不到一天，完全背包式搜索可以，但四种面额能凑出任意正整数，且大面额总是不亏。</p>
<p>先把两个时刻换成从零点起的分钟数，得到正差值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
</math></span>。再按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>60</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>15</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>5</mn>
</math></span>、 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 依次取尽可能多的步，余数交给更小面额。这与用最少硬币找零在面额整除链上的贪心相同。</p>
</blockquote>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func convertTime(current string, correct string) int {</span></span>
<span class="line"><span>	parse := func(s string) int {</span></span>
<span class="line"><span>		h := int(s[0]-'0')*10 + int(s[1]-'0')</span></span>
<span class="line"><span>		m := int(s[3]-'0')*10 + int(s[4]-'0')</span></span>
<span class="line"><span>		return h*60 + m</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a, b := parse(current), parse(correct)</span></span>
<span class="line"><span>	ans, d := 0, b-a</span></span>
<span class="line"><span>	for _, i := range []int{60, 15, 5, 1} {</span></span>
<span class="line"><span>		ans += d / i</span></span>
<span class="line"><span>		d %= i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-number-of-operations-to-convert-time" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2224.Minimum%20Number%20of%20Operations%20to%20Convert%20Time/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2233" tabindex="-1">2233. K 次增加后的最大乘积 <a class="header-anchor" href="#q-2233" aria-label="Permalink to &quot;2233. K 次增加后的最大乘积 {#q-2233}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个非负整数数组 <code>nums</code> 和一个整数 <code>k</code> 。每次操作，你可以选择 <code>nums</code> 中 <strong>任一</strong> 元素并将它 <strong>增加</strong> <code>1</code> 。</p>&#10;&#10;<p>请你返回 <strong>至多</strong> <code>k</code> 次操作后，能得到的<em> </em><code>nums</code>的 <strong>最大乘积</strong> 。由于答案可能很大，请你将答案对 <code>10<sup>9</sup> + 7</code> 取余后返回。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [0,4], k = 5&#10;<b>输出：</b>20&#10;<b>解释：</b>将第一个数增加 5 次。&#10;得到 nums = [5, 4] ，乘积为 5 * 4 = 20 。&#10;可以证明 20 是能得到的最大乘积，所以我们返回 20 。&#10;存在其他增加 nums 的方法，也能得到最大乘积。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums = [6,3,3,2], k = 2&#10;<b>输出：</b>216&#10;<b>解释：</b>将第二个数增加 1 次，将第四个数增加 1 次。&#10;得到 nums = [6, 4, 3, 3] ，乘积为 6 * 4 * 3 * 3 = 216 。&#10;可以证明 216 是能得到的最大乘积，所以我们返回 216 。&#10;存在其他增加 nums 的方法，也能得到最大乘积。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length, k &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 优先队列（小根堆） · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次把某个元素加一，做 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次后乘积最大。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>,</mo>
  <mi>k</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能搜索加在哪些位置。对乘积而言，把增量给当前最小的数收益最大：在正数上， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
    <mi>x</mi>
  </mfrac>
</math></span> 随 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 递减。</p>
<p>用小根堆维护数组，每次取出堆顶加一后放回，重复 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次，最后把堆中所有数乘起来取模。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 会被优先加一，从而避免整段乘积为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>根据题目描述，要使得乘积最大，我们需要尽量增大较小的数，因此我们可以使用小根堆来维护数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>。每次从小根堆中取出最小的数，将其增加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，然后重新放回小根堆中。重复这个过程 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 次后，我们将当前小根堆中的所有数相乘，即可得到答案。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
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
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumProduct(nums []int, k int) int {</span></span>
<span class="line"><span>	h := hp{nums}</span></span>
<span class="line"><span>	for heap.Init(&#x26;h); k > 0; k-- {</span></span>
<span class="line"><span>		h.IntSlice[0]++</span></span>
<span class="line"><span>		heap.Fix(&#x26;h, 0)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 1</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		ans = (ans * x) % (1e9 + 7)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type hp struct{ sort.IntSlice }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (hp) Push(any)     {}</span></span>
<span class="line"><span>func (hp) Pop() (_ any) { return }</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-product-after-k-increments" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2233.Maximum%20Product%20After%20K%20Increments/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2234" tabindex="-1">2234. 花园的最大总美丽值 <a class="header-anchor" href="#q-2234" aria-label="Permalink to &quot;2234. 花园的最大总美丽值 {#q-2234}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、双指针、二分查找、枚举、前缀和、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>Alice 是 <code>n</code> 个花园的园丁，她想通过种花，最大化她所有花园的总美丽值。</p>&#10;&#10;<p>给你一个下标从 <strong>0</strong> 开始大小为 <code>n</code> 的整数数组 <code>flowers</code> ，其中 <code>flowers[i]</code> 是第 <code>i</code> 个花园里已经种的花的数目。已经种了的花 <strong>不能</strong> 移走。同时给你 <code>newFlowers</code> ，表示 Alice 额外可以种花的 <strong>最大数目</strong> 。同时给你的还有整数 <code>target</code> ，<code>full</code> 和 <code>partial</code> 。</p>&#10;&#10;<p>如果一个花园有 <strong>至少</strong> <code>target</code> 朵花，那么这个花园称为 <strong>完善的</strong> ，花园的 <strong>总美丽值</strong> 为以下分数之 <strong>和</strong> ：</p>&#10;&#10;<ul>&#10;	<li><b>完善</b> 花园数目乘以 <code>full</code>.</li>&#10;	<li>剩余 <strong>不完善</strong> 花园里，花的 <strong>最少数目</strong> 乘以 <code>partial</code> 。如果没有不完善花园，那么这一部分的值为 <code>0</code> 。</li>&#10;</ul>&#10;&#10;<p>请你返回 Alice 种最多 <code>newFlowers</code> 朵花以后，能得到的<strong> 最大</strong> 总美丽值。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>flowers = [1,3,1,1], newFlowers = 7, target = 6, full = 12, partial = 1&#10;<b>输出：</b>14&#10;<b>解释：</b>Alice 可以按以下方案种花&#10;- 在第 0 个花园种 2 朵花&#10;- 在第 1 个花园种 3 朵花&#10;- 在第 2 个花园种 1 朵花&#10;- 在第 3 个花园种 1 朵花&#10;花园里花的数目为 [3,6,2,2] 。总共种了 2 + 3 + 1 + 1 = 7 朵花。&#10;只有 1 个花园是完善的。&#10;不完善花园里花的最少数目是 2 。&#10;所以总美丽值为 1 * 12 + 2 * 1 = 12 + 2 = 14 。&#10;没有其他方案可以让花园总美丽值超过 14 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>flowers = [2,4,5,3], newFlowers = 10, target = 5, full = 2, partial = 6&#10;<b>输出：</b>30&#10;<b>解释：</b>Alice 可以按以下方案种花&#10;- 在第 0 个花园种 3 朵花&#10;- 在第 1 个花园种 0 朵花&#10;- 在第 2 个花园种 0 朵花&#10;- 在第 3 个花园种 2 朵花&#10;花园里花的数目为 [5,4,5,5] 。总共种了 3 + 0 + 0 + 2 = 5 朵花。&#10;有 3 个花园是完善的。&#10;不完善花园里花的最少数目为 4 。&#10;所以总美丽值为 3 * 2 + 4 * 6 = 6 + 24 = 30 。&#10;没有其他方案可以让花园总美丽值超过 30 。&#10;注意，Alice可以让所有花园都变成完善的，但这样她的总美丽值反而更小。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= flowers.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= flowers[i], target &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= newFlowers &lt;= 10<sup>10</sup></code></li>&#10;	<li><code>1 &lt;= full, partial &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：枚举 + 二分查找 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每种花园要么补到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span> 成为完善花园，要么把不完善花园的最小值尽量抬高。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，新花数量达 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>10</mn>
    </mrow>
  </msup>
</math></span>，不能模拟每一朵。完善花园的个数确定后，剩余花朵应全部用于垫高一段最小前缀。</p>
<p>先排序并做前缀和。从已有的完善花园数起，枚举最终完善个数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，扣掉补齐最贵的那几座所需的花。剩余花在未完善前缀上二分：把前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
</math></span> 座都抬到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
</math></span> 的代价为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>w</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x22C5;</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，再把多出的花均分，但不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#x22C5;</mo>
  <mtext mathvariant="italic">full</mtext>
  <mo>+</mo>
  <mi>y</mi>
  <mo>&#x22C5;</mo>
  <mtext mathvariant="italic">partial</mtext>
</math></span> 取最大。</p>
</blockquote>
<p>我们注意到，如果一个花园中种的花的数目已经大于等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
</math></span>，那么这个花园就已经是完善的花园，不能再改变。而不完善的花园中，可以通过种更多的花来使得这个花园变成完善的花园。</p>
<p>我们不妨枚举有多少个花园最终成为完善的花园，假设初始时有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 个完善的花园，那么我们可以在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mi>x</mi>
  <mo>,</mo>
  <mi>n</mi>
  <mo stretchy="false">]</mo>
</math></span> 范围内枚举。我们应该选择哪些不完善花园变成完善花园呢？实际上，我们应该选择那么花的数目较多的花园，这样才能使得最终剩下的可额外种植的花更多，将这些花用于提升不完善花园的最小值。因此，我们对数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">flowers</mtext>
</math></span> 进行排序。</p>
<p>接下来，我们枚举完善花园的数目 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，那么当前要变成完善花园的是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
</math></span>，需要种植的花的数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo stretchy="false">(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mtext mathvariant="italic">target</mtext>
  <mo>&#x2212;</mo>
  <mtext mathvariant="italic">flowers</mtext>
  <mo stretchy="false">[</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">)</mo>
</math></span>。</p>
<p>我们更新剩余可种植的花 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">newFlowers</mtext>
</math></span>，如果小于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，说明已经不能将更多的花园变成完善花园了，直接退出枚举。</p>
<p>否则，我们在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 范围内，二分查找可以把不完善花园变成完善花园的最大下标。记下标为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
</math></span>，那么所需要种植的花的数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cost</mtext>
  <mo>=</mo>
  <mtext mathvariant="italic">flowers</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
  <mo>&#xD7;</mo>
  <mo stretchy="false">(</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>&#x2212;</mo>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">flowers</mtext>
</math></span> 数组中前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个数之和。如果此时还能提升最小值的大小，我们算出能提升的幅度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mrow>
      <mtext mathvariant="italic">newFlowers</mtext>
      <mo>&#x2212;</mo>
      <mtext mathvariant="italic">cost</mtext>
    </mrow>
    <mrow>
      <mi>l</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </mfrac>
</math></span>，并且保证最终的最小值不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">target</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>。即最小值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mtext mathvariant="italic">flowers</mtext>
  <mo stretchy="false">[</mo>
  <mi>l</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mfrac>
    <mrow>
      <mtext mathvariant="italic">newFlowers</mtext>
      <mo>&#x2212;</mo>
      <mtext mathvariant="italic">cost</mtext>
    </mrow>
    <mrow>
      <mi>l</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </mfrac>
  <mo>,</mo>
  <mtext mathvariant="italic">target</mtext>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。那么此时花园的美丽值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">full</mtext>
  <mo>+</mo>
  <mi>y</mi>
  <mo>&#xD7;</mo>
  <mtext mathvariant="italic">partial</mtext>
</math></span>。答案为所有美丽值的最大值。</p>
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
  <mtext mathvariant="italic">flowers</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumBeauty(flowers []int, newFlowers int64, target int, full int, partial int) int64 {</span></span>
<span class="line"><span>	sort.Ints(flowers)</span></span>
<span class="line"><span>	n := len(flowers)</span></span>
<span class="line"><span>	s := make([]int, n+1)</span></span>
<span class="line"><span>	for i, x := range flowers {</span></span>
<span class="line"><span>		s[i+1] = s[i] + x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	i := n - sort.SearchInts(flowers, target)</span></span>
<span class="line"><span>	for x := i; x &#x3C;= n; x++ {</span></span>
<span class="line"><span>		if x > 0 {</span></span>
<span class="line"><span>			newFlowers -= int64(max(target-flowers[n-x], 0))</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if newFlowers &#x3C; 0 {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l, r := 0, n-x-1</span></span>
<span class="line"><span>		for l &#x3C; r {</span></span>
<span class="line"><span>			mid := (l + r + 1) >> 1</span></span>
<span class="line"><span>			if int64(flowers[mid]*(mid+1)-s[mid+1]) &#x3C;= newFlowers {</span></span>
<span class="line"><span>				l = mid</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				r = mid - 1</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		y := 0</span></span>
<span class="line"><span>		if r != -1 {</span></span>
<span class="line"><span>			cost := flowers[l]*(l+1) - s[l+1]</span></span>
<span class="line"><span>			y = min(flowers[l]+int((newFlowers-int64(cost))/int64(l+1)), target-1)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans = max(ans, x*full+y*partial)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return int64(ans)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-total-beauty-of-the-gardens" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2234.Maximum%20Total%20Beauty%20of%20the%20Gardens/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2244" tabindex="-1">2244. 完成所有任务需要的最少轮数 <a class="header-anchor" href="#q-2244" aria-label="Permalink to &quot;2244. 完成所有任务需要的最少轮数 {#q-2244}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、计数</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>tasks</code> ，其中 <code>tasks[i]</code> 表示任务的难度级别。在每一轮中，你可以完成 2 个或者 3 个 <strong>相同难度级别</strong> 的任务。</p>&#10;&#10;<p>返回完成所有任务需要的 <strong>最少</strong> 轮数，如果无法完成所有任务，返回<em> </em><code>-1</code><em> </em>。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>tasks = [2,2,3,3,2,4,4,4,4,4]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>要想完成所有任务，一个可能的计划是：&#10;- 第一轮，完成难度级别为 2 的 3 个任务。 &#10;- 第二轮，完成难度级别为 3 的 2 个任务。 &#10;- 第三轮，完成难度级别为 4 的 3 个任务。 &#10;- 第四轮，完成难度级别为 4 的 2 个任务。 &#10;可以证明，无法在少于 4 轮的情况下完成所有任务，所以答案为 4 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>tasks = [2,3,3]&#10;<strong>输出：</strong>-1&#10;<strong>解释：</strong>难度级别为 2 的任务只有 1 个，但每一轮执行中，只能选择完成 2 个或者 3 个相同难度级别的任务。因此，无法完成所有任务，答案为 -1 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= tasks.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= tasks[i] &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每轮只能完成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 或 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个相同难度的任务，求最少轮数。不同难度互不影响，先按难度计数。某个难度出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 次则无法完成。</p>
<p>出现 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo>&#x2265;</mo>
  <mn>2</mn>
</math></span> 次时，应尽量每轮做 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 个： <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mi>v</mi>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>3</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span> 轮，若有余数再加一轮（余 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 时把一组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>3</mn>
</math></span> 拆成两个 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span>）。对各难度求和。</p>
</blockquote>
<p>我们用哈希表统计每个难度级别的任务数量，然后遍历哈希表，对于每个难度级别的任务数量，如果数量为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，则无法完成所有任务，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>；否则，计算完成该难度级别的任务需要的轮数，累加到答案中。</p>
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
</math></span> 为数组 <code v-pre>tasks</code> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumRounds(tasks []int) int {</span></span>
<span class="line"><span>	cnt := map[int]int{}</span></span>
<span class="line"><span>	for _, t := range tasks {</span></span>
<span class="line"><span>		cnt[t]++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for _, v := range cnt {</span></span>
<span class="line"><span>		if v == 1 {</span></span>
<span class="line"><span>			return -1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		ans += v / 3</span></span>
<span class="line"><span>		if v%3 != 0 {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-rounds-to-complete-all-tasks" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2244.Minimum%20Rounds%20to%20Complete%20All%20Tasks/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2259" tabindex="-1">2259. 移除指定数字得到的最大结果 <a class="header-anchor" href="#q-2259" aria-label="Permalink to &quot;2259. 移除指定数字得到的最大结果 {#q-2259}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、字符串、枚举</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个表示某个正整数的字符串 <code>number</code> 和一个字符 <code>digit</code> 。</p>&#10;&#10;<p>从 <code>number</code> 中 <strong>恰好</strong> 移除 <strong>一个</strong> 等于 <code>digit</code> 的字符后，找出并返回按 <strong>十进制</strong> 表示 <strong>最大</strong> 的结果字符串。生成的测试用例满足 <code>digit</code> 在 <code>number</code> 中出现至少一次。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>number = &quot;123&quot;, digit = '3'&#10;<strong>输出：</strong>&quot;12&quot;&#10;<strong>解释：</strong>&quot;123&quot; 中只有一个 '3' ，在移除 '3' 之后，结果为 &quot;12&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>number = &quot;1231&quot;, digit = '1'&#10;<strong>输出：</strong>&quot;231&quot;&#10;<strong>解释：</strong>可以移除第一个 '1' 得到 &quot;231&quot; 或者移除第二个 '1' 得到 &quot;123&quot; 。&#10;由于 231 > 123 ，返回 &quot;231&quot; 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>number = &quot;551&quot;, digit = '5'&#10;<strong>输出：</strong>&quot;51&quot;&#10;<strong>解释：</strong>可以从 &quot;551&quot; 中移除第一个或者第二个 '5' 。&#10;两种方案的结果都是 &quot;51&quot; 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>2 &lt;= number.length &lt;= 100</code></li>&#10;	<li><code>number</code> 由数字 <code>'1'</code> 到 <code>'9'</code> 组成</li>&#10;	<li><code>digit</code> 是 <code>'1'</code> 到 <code>'9'</code> 中的一个数字</li>&#10;	<li><code>digit</code> 在 <code>number</code> 中出现至少一次</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：暴力枚举 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>必须删去恰好一个给定数字，使剩下的十进制串最大。长度不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>100</mn>
</math></span>，每种删除位置拼出新串再取最大即可。</p>
<p>枚举所有等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">digit</mtext>
</math></span> 的下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span>，比较 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mo>:</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>:</mo>
  <mo stretchy="false">]</mo>
</math></span>。字符串比较与数值比较一致。</p>
</blockquote>
<p>我们可以枚举字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
</math></span> 的所有位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">digit</mtext>
</math></span>，那么我们取 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
</math></span> 的前缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>:</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 和后缀 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>:</mo>
  <mo stretchy="false">]</mo>
</math></span> 拼接起来，即为移除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 后的结果。我们取所有可能的结果中最大的即可。</p>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func removeDigit(number string, digit byte) string {</span></span>
<span class="line"><span>	ans := "0"</span></span>
<span class="line"><span>	for i, d := range number {</span></span>
<span class="line"><span>		if d == rune(digit) {</span></span>
<span class="line"><span>			t := number[:i] + number[i+1:]</span></span>
<span class="line"><span>			if strings.Compare(ans, t) &#x3C; 0 {</span></span>
<span class="line"><span>				ans = t</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一要生成并比较多段字符串。从左到右看，若某次出现的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">digit</mtext>
</math></span> 小于它的下一位，删掉它会立刻让高位变大，这就是最优。若不存在这样的下降，则删最后一次出现，以免高位变小。</p>
<p>一遍记下最后位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>a</mi>
  <mi>s</mi>
  <mi>t</mi>
</math></span>，遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mo>&lt;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>b</mi>
  <mi>e</mi>
  <mi>r</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span> 即可提前结束。时间降为线性。</p>
</blockquote>
<p>我们可以枚举字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
</math></span> 的所有位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
</math></span>，如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <mtext mathvariant="italic">digit</mtext>
</math></span>，记录 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">digit</mtext>
</math></span> 最后一次出现的位置 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">last</mtext>
</math></span>，并且如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">i</mtext>
  <mo>+</mo>
  <mn>1</mn>
  <mo>&lt;</mo>
  <mtext mathvariant="italic">n</mtext>
</math></span> 且 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，那么我们可以直接返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>:</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo>:</mo>
  <mo stretchy="false">]</mo>
</math></span>，即为移除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 后的结果。这是因为如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&lt;</mo>
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">]</mo>
</math></span>，那么移除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 后，结果一定会更大。</p>
<p>遍历结束，我们返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo>:</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo stretchy="false">]</mo>
  <mo>+</mo>
  <mtext mathvariant="italic">number</mtext>
  <mo stretchy="false">[</mo>
  <mtext mathvariant="italic">last</mtext>
  <mo>+</mo>
  <mn>1</mn>
  <mo>:</mo>
  <mo stretchy="false">]</mo>
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
</math></span> 为字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">number</mtext>
</math></span> 的长度。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func removeDigit(number string, digit byte) string {</span></span>
<span class="line"><span>	last := -1</span></span>
<span class="line"><span>	n := len(number)</span></span>
<span class="line"><span>	for i := range number {</span></span>
<span class="line"><span>		if number[i] == digit {</span></span>
<span class="line"><span>			last = i</span></span>
<span class="line"><span>			if i+1 &#x3C; n &#x26;&#x26; number[i] &#x3C; number[i+1] {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return number[:last] + number[last+1:]</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/remove-digit-from-number-to-maximize-result" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2259.Remove%20Digit%20From%20Number%20to%20Maximize%20Result/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2268" tabindex="-1">2268. 最少按键次数 🔒 <a class="header-anchor" href="#q-2268" aria-label="Permalink to &quot;2268. 最少按键次数 🔒 {#q-2268}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、哈希表、字符串、计数、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>你有一个 9 键键盘，按键按 1 到 9 编号，每个按键对应着几个英文小写字母。你可以决定每个按键对应哪些英文字母，但要满足如下条件：</p>&#10;&#10;<ul>&#10;	<li>26 个英文小写字母必须全部映射到这 9 个按键上。</li>&#10;	<li>每个英文字母只能映射到 <strong>恰好</strong> 一个按键上。</li>&#10;	<li>每个按键 <strong>最多</strong> 对应 3 个英文字母。</li>&#10;</ul>&#10;&#10;<p>如果想打出按键上的第一个字母，只需要按一次。如果想打出按键上的第二个字母，则需要按两次，依次类推。</p>&#10;&#10;<p>给你一个字符串 <code>s</code> ，返回基于你设计的键盘打出 <code>s</code> 需要的<strong> 最少</strong> 按键次数。</p>&#10;&#10;<p><b>注意：</b>字母映射到每个按键上，映射的顺序无法进行更改。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1 ：</strong></p>&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2268.Minimum%20Number%20of%20Keypresses/images/image-20220505184346-1.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>s = &quot;apple&quot;&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>上图所示为设置键盘的最佳方法之一。&#10;按按键 1 一次输入 'a' 。&#10;按按键 6 一次输入 'p' 。&#10;按按键 6 一次输入 'p' 。&#10;按按键 5 一次输入 'l' 。&#10;按按键 3 一次输入 'e' 。&#10;总共按按键 5 次，所以返回 5 。</pre>&#10;&#10;<p><strong>示例 2 ：</strong></p>&#10;<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2268.Minimum%20Number%20of%20Keypresses/images/image-20220505203823-1.png" loading="lazy">&#10;<pre>&#10;<strong>输入：</strong>s = &quot;abcdefghijkl&quot;&#10;<strong>输出：</strong>15&#10;<strong>解释：</strong>上图所示为设置键盘的最佳方法之一。&#10;字母 'a' 到 'i' 每个只需要按一次按键。&#10;按按键 1 两次输入 'j' 。&#10;按按键 2 两次输入 'k' 。&#10;按按键 3 两次输入 'l' 。&#10;总共按按键 15 次，所以返回 15 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>s</code> 由小写英文字母组成</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：计数 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>九个按键，每个最多映射三个字母，按键次数等于该字母在映射中的位置。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>s</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，应让出现次数多的字母占用靠前的键位。</p>
<p>统计频率后从大到小排列：前 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 个字母各按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 次，接下来 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 个按 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
</math></span> 次，以此类推。第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 个频率乘当前层数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，每放满 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 个就把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 加一。</p>
</blockquote>
<p>我们首先统计字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中每个字符出现的次数，记录在数组或者哈希表 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 中。</p>
<p>题目要求按键次数最少，那么出现最多的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 个字符应该对应按键 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到按键 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，出现次数第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>10</mn>
</math></span> 到第 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>18</mn>
</math></span> 多的字符再次对应按键 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到按键 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span>，以此类推。</p>
<p>因此，我们可以将 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">cnt</mtext>
</math></span> 中的值按照从大到小的顺序排序，然后按照 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span> 到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 的顺序依次分配给按键，每次分配完 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>9</mn>
</math></span> 个字符后，按键次数加 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo>+</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>&#xD7;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
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
  <mi>s</mi>
</math></span> 的长度，而 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 是字符串 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 中出现的字符集合，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi mathvariant="normal">&#x3A3;</mi>
</math></span> 是小写字母集合，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi mathvariant="normal">&#x3A3;</mi>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mo>=</mo>
  <mn>26</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumKeypresses(s string) (ans int) {</span></span>
<span class="line"><span>	cnt := make([]int, 26)</span></span>
<span class="line"><span>	for _, c := range s {</span></span>
<span class="line"><span>		cnt[c-'a']++</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(cnt)</span></span>
<span class="line"><span>	k := 1</span></span>
<span class="line"><span>	for i := 1; i &#x3C;= 26; i++ {</span></span>
<span class="line"><span>		ans += k * cnt[26-i]</span></span>
<span class="line"><span>		if i%9 == 0 {</span></span>
<span class="line"><span>			k++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-number-of-keypresses" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2268.Minimum%20Number%20of%20Keypresses/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2271" tabindex="-1">2271. 毯子覆盖的最多白色砖块数 <a class="header-anchor" href="#q-2271" aria-label="Permalink to &quot;2271. 毯子覆盖的最多白色砖块数 {#q-2271}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、二分查找、前缀和、排序、滑动窗口</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个二维整数数组 <code>tiles</code> ，其中 <code>tiles[i] = [l<sub>i</sub>, r<sub>i</sub>]</code> ，表示所有在 <code>l<sub>i</sub> &lt;= j &lt;= r<sub>i</sub></code> 之间的每个瓷砖位置 <code>j</code> 都被涂成了白色。</p>&#10;&#10;<p>同时给你一个整数 <code>carpetLen</code> ，表示可以放在 <strong>任何位置</strong> 的一块毯子的长度。</p>&#10;&#10;<p>请你返回使用这块毯子，<strong>最多</strong> 可以盖住多少块白色瓷砖。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2271.Maximum%20White%20Tiles%20Covered%20by%20a%20Carpet/images/example1drawio3.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<b>输入：</b>tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10&#10;<b>输出：</b>9&#10;<b>解释：</b>将毯子从瓷砖 10 开始放置。&#10;总共覆盖 9 块瓷砖，所以返回 9 。&#10;注意可能有其他方案也可以覆盖 9 块瓷砖。&#10;可以看出，瓷砖无法覆盖超过 9 块瓷砖。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2200-2299/2271.Maximum%20White%20Tiles%20Covered%20by%20a%20Carpet/images/example2drawio.png" loading="lazy"></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>tiles = [[10,11],[1,1]], carpetLen = 2&#10;<b>输出：</b>2&#10;<b>解释：</b>将毯子从瓷砖 10 开始放置。&#10;总共覆盖 2 块瓷砖，所以我们返回 2 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= tiles.length &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>tiles[i].length == 2</code></li>&#10;	<li><code>1 &lt;= l<sub>i</sub> &lt;= r<sub>i</sub> &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>1 &lt;= carpetLen &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>tiles</code> 互相 <strong>不会重叠</strong> 。</li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 + 滑动窗口 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>地毯长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">carpetLen</mtext>
</math></span>，砖块是若干互不相交的区间。地毯左端若停在某段中间，覆盖不会优于把它对齐到某一段的左端。因此只需枚举「地毯左端贴在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>t</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 的左端」。</p>
<p>砖块先按左端排序。指针 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 维护右端仍被整段盖住的最远砖块，并用 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>s</mi>
</math></span> 记下这些整段的白砖数。若下一段被部分盖住，再补上 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>l</mi>
  <mi>i</mi>
  <mo>+</mo>
  <mtext mathvariant="italic">carpetLen</mtext>
  <mo>&#x2212;</mo>
  <mi>t</mi>
  <mi>i</mi>
  <mi>l</mi>
  <mi>e</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>j</mi>
  <mo stretchy="false">]</mo>
  <mo stretchy="false">[</mo>
  <mn>0</mn>
  <mo stretchy="false">]</mo>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 只前进，总时间 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</blockquote>
<p>直觉上，毯子的左端点一定与某块瓷砖的左端点重合，这样才能使得毯子覆盖的瓷砖最多。</p>
<p>我们可以来简单证明一下。</p>
<p>如果毯子落在某块瓷砖的中间某个位置，将毯子右移一个，毯子覆盖的瓷砖数量可能减少，也可能不变，但不可能增加；将毯子左移一个，毯子覆盖的瓷砖数量可能不变，也可能增加，但不可能减少。</p>
<p>也就是说，将毯子左移至某块瓷砖的左端点，一定可以使得毯子覆盖的瓷砖数量最多。</p>
<p>因此，我们可以将所有瓷砖按照左端点从小到大排序，然后枚举每块瓷砖的左端点，计算出以该左端点为起点的毯子覆盖的瓷砖数量，取最大值即可。</p>
<p>为了计算以某块瓷砖的左端点为起点的毯子覆盖的瓷砖数量，我们可以使用滑动窗口的思想，维护一个右端点不断右移的窗口，窗口内的瓷砖数量即为毯子覆盖的瓷砖数量。</p>
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
</math></span> 为瓷砖的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumWhiteTiles(tiles [][]int, carpetLen int) int {</span></span>
<span class="line"><span>	sort.Slice(tiles, func(i, j int) bool { return tiles[i][0] &#x3C; tiles[j][0] })</span></span>
<span class="line"><span>	n := len(tiles)</span></span>
<span class="line"><span>	s, ans := 0, 0</span></span>
<span class="line"><span>	for i, j := 0, 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>		for j &#x3C; n &#x26;&#x26; tiles[j][1]-tiles[i][0]+1 &#x3C;= carpetLen {</span></span>
<span class="line"><span>			s += tiles[j][1] - tiles[j][0] + 1</span></span>
<span class="line"><span>			j++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if j &#x3C; n &#x26;&#x26; tiles[i][0]+carpetLen > tiles[j][0] {</span></span>
<span class="line"><span>			ans = max(ans, s+tiles[i][0]+carpetLen-tiles[j][0])</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			ans = max(ans, s)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		s -= (tiles[i][1] - tiles[i][0] + 1)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-white-tiles-covered-by-a-carpet" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2271.Maximum%20White%20Tiles%20Covered%20by%20a%20Carpet/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2279" tabindex="-1">2279. 装满石头的背包的最大数量 <a class="header-anchor" href="#q-2279" aria-label="Permalink to &quot;2279. 装满石头的背包的最大数量 {#q-2279}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>现有编号从 <code>0</code> 到 <code>n - 1</code> 的 <code>n</code> 个背包。给你两个下标从 <strong>0</strong> 开始的整数数组 <code>capacity</code> 和 <code>rocks</code> 。第 <code>i</code> 个背包最大可以装 <code>capacity[i]</code> 块石头，当前已经装了 <code>rocks[i]</code> 块石头。另给你一个整数 <code>additionalRocks</code> ，表示<span>你可以放置的额外石头数量，石头可以往 </span><strong><span>任意</span></strong><span> 背包中放置。</span></p>&#10;&#10;<p>请你将额外的石头放入一些背包中，并返回放置后装满石头的背包的 <strong>最大 </strong>数量<em>。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;1 块石头放入背包 0 ，1 块石头放入背包 1 。&#10;每个背包中的石头总数是 [2,3,4,4] 。&#10;背包 0 、背包 1 和 背包 2 都装满石头。&#10;总计 3 个背包装满石头，所以返回 3 。&#10;可以证明不存在超过 3 个背包装满石头的情况。&#10;注意，可能存在其他放置石头的方案同样能够得到 3 这个结果。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;8 块石头放入背包 0 ，2 块石头放入背包 2 。&#10;每个背包中的石头总数是 [10,2,2] 。&#10;背包 0 、背包 1 和背包 2 都装满石头。&#10;总计 3 个背包装满石头，所以返回 3 。&#10;可以证明不存在超过 3 个背包装满石头的情况。&#10;注意，不必用完所有的额外石头。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == capacity.length == rocks.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>&#10;	<li><code>1 &lt;= capacity[i] &lt;= 10<sup>9</sup></code></li>&#10;	<li><code>0 &lt;= rocks[i] &lt;= capacity[i]</code></li>&#10;	<li><code>1 &lt;= additionalRocks &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：排序 + 贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>额外石头要尽量装满更多背包。每个背包的缺口独立， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>5</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>4</mn>
  </msup>
</math></span>，应优先填缺口小的。</p>
<p>把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>a</mi>
  <mi>p</mi>
  <mi>a</mi>
  <mi>c</mi>
  <mi>i</mi>
  <mi>t</mi>
  <mi>y</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
  <mo>&#x2212;</mo>
  <mi>r</mi>
  <mi>o</mi>
  <mi>c</mi>
  <mi>k</mi>
  <mi>s</mi>
  <mo stretchy="false">[</mo>
  <mi>i</mi>
  <mo stretchy="false">]</mo>
</math></span> 排序后从小到大扣除 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">additionalRocks</mtext>
</math></span>，一旦不够就返回已装满的个数。</p>
</blockquote>
<p>我们首先将每个背包的剩余容量计算出来，然后对剩余容量进行排序，接着我们从小到大遍历剩余容量，将额外的石头放入背包中，直到额外的石头用完或者背包的剩余容量用完为止，返回此时的背包数量即可。</p>
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
</math></span> 为背包的数量。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func maximumBags(capacity []int, rocks []int, additionalRocks int) int {</span></span>
<span class="line"><span>	for i, x := range rocks {</span></span>
<span class="line"><span>		capacity[i] -= x</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	sort.Ints(capacity)</span></span>
<span class="line"><span>	for i, x := range capacity {</span></span>
<span class="line"><span>		additionalRocks -= x</span></span>
<span class="line"><span>		if additionalRocks &#x3C; 0 {</span></span>
<span class="line"><span>			return i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return len(capacity)</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/maximum-bags-with-full-capacity-of-rocks" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2279.Maximum%20Bags%20With%20Full%20Capacity%20of%20Rocks/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2294" tabindex="-1">2294. 划分数组使最大差为 K <a class="header-anchor" href="#q-2294" aria-label="Permalink to &quot;2294. 划分数组使最大差为 K {#q-2294}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> 。你可以将 <code>nums</code> 划分成一个或多个 <strong>子序列</strong> ，使 <code>nums</code> 中的每个元素都 <strong>恰好</strong> 出现在一个子序列中。</p>&#10;&#10;<p>在满足每个子序列中最大值和最小值之间的差值最多为 <code>k</code> 的前提下，返回需要划分的 <strong>最少</strong> 子序列数目。</p>&#10;&#10;<p><strong>子序列</strong> 本质是一个序列，可以通过删除另一个序列中的某些元素（或者不删除）但不改变剩下元素的顺序得到。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [3,6,1,2,5], k = 2&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;可以将 nums 划分为两个子序列 [3,1,2] 和 [6,5] 。&#10;第一个子序列中最大值和最小值的差值是 3 - 1 = 2 。&#10;第二个子序列中最大值和最小值的差值是 6 - 5 = 1 。&#10;由于创建了两个子序列，返回 2 。可以证明需要划分的最少子序列数目就是 2 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,2,3], k = 1&#10;<strong>输出：</strong>2&#10;<strong>解释：</strong>&#10;可以将 nums 划分为两个子序列 [1,2] 和 [3] 。&#10;第一个子序列中最大值和最小值的差值是 2 - 1 = 1 。&#10;第二个子序列中最大值和最小值的差值是 3 - 3 = 0 。&#10;由于创建了两个子序列，返回 2 。注意，另一种最优解法是将 nums 划分成子序列 [1] 和 [2,3] 。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [2,2,4,5], k = 0&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;可以将 nums 划分为三个子序列 [2,2]、[4] 和 [5] 。&#10;第一个子序列中最大值和最小值的差值是 2 - 2 = 0 。&#10;第二个子序列中最大值和最小值的差值是 4 - 4 = 0 。&#10;第三个子序列中最大值和最小值的差值是 5 - 5 = 0 。&#10;由于创建了三个子序列，返回 3 。可以证明需要划分的最少子序列数目就是 3 。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>划分的是子序列而非子数组，同一段只需 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo data-mjx-texclass="OP" movablelimits="true">max</mo>
  <mo>&#x2212;</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo>&#x2264;</mo>
  <mi>k</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，应先排序：相邻值最容易放在同一段。一段从当前最小值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 开始，遇到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
  <mo>&#x2212;</mo>
  <mi>a</mi>
  <mo>&gt;</mo>
  <mi>k</mi>
</math></span> 就必须新开一段并把 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 换成 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>。</p>
<p>排序后一遍扫描，初始段数为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>。段数最少，因为每段都尽量向右延伸。</p>
</blockquote>
<p>题目要求划分子序列，而不是子数组，因此子序列中的元素可以不连续。我们可以将数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 排序，假设当前子序列的第一个元素为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>，则子序列中的最大值和最小值的差值不会超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。因此我们可以遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，如果当前元素 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 的差值大于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，则更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span> 为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>，并将子序列数目加 1。遍历结束后，即可得到最少子序列数目，注意初始时子序列数目为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func partitionArray(nums []int, k int) int {</span></span>
<span class="line"><span>	sort.Ints(nums)</span></span>
<span class="line"><span>	ans, a := 1, nums[0]</span></span>
<span class="line"><span>	for _, b := range nums {</span></span>
<span class="line"><span>		if b-a > k {</span></span>
<span class="line"><span>			a = b</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/partition-array-such-that-maximum-difference-is-k" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2200-2299/2294.Partition%20Array%20Such%20That%20Maximum%20Difference%20Is%20K/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2323" tabindex="-1">2323. 完成所有工作的最短时间 II 🔒 <a class="header-anchor" href="#q-2323" aria-label="Permalink to &quot;2323. 完成所有工作的最短时间 II 🔒 {#q-2323}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个 <b>下标从 0 开始 </b>的整数数组 <code>jobs</code> 和 <strong>相等 </strong>长度的 <code>workers</code> ，其中 <code>jobs[i]</code>是完成第 <code>i</code> 个工作所需的时间，<code>workers[j]</code> 是第 <code>j</code> 个工人每天可以工作的时间。</p>&#10;&#10;<p>每项工作都应该 <strong>正好</strong> 分配给一个工人，这样每个工人就 <strong>只能 </strong>完成一项工作。</p>&#10;&#10;<p>返回<em>分配后完成所有作业所需的最少天数。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> jobs = [5,2,4], workers = [1,7,5]&#10;<strong>输出:</strong> 2&#10;<strong>解释:</strong>&#10;- 把第 2 个工人分配到第 0 个工作。他们花了 1 天时间完成这项工作。&#10;- 把第 0 个工人分配到第 1 个工作。他们花了 2 天时间完成这项工作。&#10;- 把第 1 个工人分配到第 2 个工作。他们花了 1 天时间完成这项工作。&#10;所有工作完成需要 2 天，因此返回 2。&#10;可以证明 2 天是最少需要的天数。&#10;</pre>&#10;&#10;<p><strong>示例 2:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> jobs = [3,18,15,9], workers = [6,5,1,3]&#10;<strong>输出:</strong> 3&#10;<strong>解释:</strong>&#10;- 把第 2 个工人分配到第 0 个工作。他花了 3 天时间完成这项工作。&#10;- 把第 0 个工人分配到第 1 个工作。他花了 3 天时间完成这项工作。&#10;- 把第 1 个工人分配到第 2 个工作。他花了 3 天时间完成这项工作。&#10;- 把第 3 个工人分配到第 3 个工作。他花了 3 天时间完成这项工作。&#10;完成所有工作需要 3 天，因此返回 3。&#10;可以证明，3 天是最少需要的天数。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == jobs.length == workers.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= jobs[i], workers[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每人恰好一份工作，完成时间为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x2308;</mo>
  <mi>j</mi>
  <mi>o</mi>
  <mi>b</mi>
  <msub>
    <mi>s</mi>
    <mi>i</mi>
  </msub>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mi>w</mi>
  <mi>o</mi>
  <mi>r</mi>
  <mi>k</mi>
  <mi>e</mi>
  <mi>r</mi>
  <msub>
    <mi>s</mi>
    <mi>j</mi>
  </msub>
  <mo fence="false" stretchy="false">&#x2309;</mo>
</math></span> 的最大值。人数与工作数相同，关键在匹配方式。</p>
<p>较大工作配较慢工人会抬高最大值。将两边同时排序后按下标配对，相当于让更强工人承担更重工作，再取向上取整后的最大值。</p>
</blockquote>
<p>为了使得完成所有工作所需的最少天数尽可能小，我们可以尽量让工作时间较长的工人去完成工作时间较长的工作。</p>
<p>因此，我们可以先对 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">jobs</mtext>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">workers</mtext>
</math></span> 进行排序，然后依次将工作分配给对应下标的工人，求最大的工作时间和工人时间的比值即可。</p>
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
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为工作数。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumTime(jobs []int, workers []int) (ans int) {</span></span>
<span class="line"><span>	sort.Ints(jobs)</span></span>
<span class="line"><span>	sort.Ints(workers)</span></span>
<span class="line"><span>	for i, a := range jobs {</span></span>
<span class="line"><span>		b := workers[i]</span></span>
<span class="line"><span>		ans = max(ans, (a+b-1)/b)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/find-minimum-time-to-finish-all-jobs-ii" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2323.Find%20Minimum%20Time%20to%20Finish%20All%20Jobs%20II/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2333" tabindex="-1">2333. 最小差值平方和 <a class="header-anchor" href="#q-2333" aria-label="Permalink to &quot;2333. 最小差值平方和 {#q-2333}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、二分查找、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你两个下标从 <strong>0</strong> 开始的整数数组 <code>nums1</code> 和 <code>nums2</code> ，长度为 <code>n</code> 。</p>&#10;&#10;<p>数组 <code>nums1</code> 和 <code>nums2</code> 的 <strong>差值平方和</strong> 定义为所有满足 <code>0 &lt;= i &lt; n</code> 的 <code>(nums1[i] - nums2[i])<sup>2</sup></code> 之和。</p>&#10;&#10;<p>同时给你两个正整数 <code>k1</code> 和 <code>k2</code> 。你可以将 <code>nums1</code> 中的任意元素 <code>+1</code> 或者 <code>-1</code> 至多 <code>k1</code> 次。类似的，你可以将 <code>nums2</code> 中的任意元素 <code>+1</code> 或者 <code>-1</code> 至多 <code>k2</code> 次。</p>&#10;&#10;<p>请你返回修改数组<em> </em><code>nums1</code><em> </em>至多<em> </em><code>k1</code> 次且修改数组<em> </em><code>nums2</code> 至多 <code>k2</code><em> </em>次后的最小 <strong>差值平方和</strong> 。</p>&#10;&#10;<p><strong>注意：</strong>你可以将数组中的元素变成 <strong>负</strong> 整数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><b>输入：</b>nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0&#10;<b>输出：</b>579&#10;<b>解释：</b>nums1 和 nums2 中的元素不能修改，因为 k1 = 0 和 k2 = 0 。&#10;差值平方和为：(1 - 2)<sup>2 </sup>+ (2 - 10)<sup>2 </sup>+ (3 - 20)<sup>2 </sup>+ (4 - 19)<sup>2</sup> = 579 。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><b>输入：</b>nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1&#10;<b>输出：</b>43&#10;<b>解释：</b>一种得到最小差值平方和的方式为：&#10;- 将 nums1[0] 增加一次。&#10;- 将 nums2[2] 增加一次。&#10;最小差值平方和为：&#10;(2 - 5)<sup>2 </sup>+ (4 - 8)<sup>2 </sup>+ (10 - 7)<sup>2 </sup>+ (12 - 9)<sup>2</sup> = 43 。&#10;注意，也有其他方式可以得到最小差值平方和，但没有得到比 43 更小答案的方案。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == nums1.length == nums2.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>0 &lt;= k1, k2 &lt;= 10<sup>9</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 计数 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>对任一位置做一次 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#xB1;</mo>
  <mn>1</mn>
</math></span>，无论改的是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>1</mn>
</math></span> 还是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mn>2</mn>
</math></span>，都只是把该位置的绝对差值减一，因此 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>k</mi>
    <mn>1</mn>
  </msub>
</math></span> 与 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>k</mi>
    <mn>2</mn>
  </msub>
</math></span> 可以合成总预算 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，预算最高到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>2</mn>
  <mo>&#xD7;</mo>
  <msup>
    <mn>10</mn>
    <mn>9</mn>
  </msup>
</math></span>，按次模拟或用堆维护当前最大值都会超时。</p>
<p>平方严格凸，同一次操作减在更大的差值上，平方和下降更多，所以应当总是削当前最大的差值。差值本身不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，相等的差值可以整层下移。</p>
<p>统计每个差值的出现次数后从大到小扫描：预算够覆盖整层，就把这一层全部并入下一层；否则用完剩余预算并停止。所有差值之和不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 时，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
</blockquote>
<p>我们令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
  <mo>=</mo>
  <msub>
    <mi>k</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>k</mi>
    <mn>2</mn>
  </msub>
</math></span>，并计算每个位置的差值 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>d</mi>
    <mi>i</mi>
  </msub>
  <mo>=</mo>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <msub>
    <mn>1</mn>
    <mi>i</mi>
  </msub>
  <mo>&#x2212;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <msub>
    <mn>2</mn>
    <mi>i</mi>
  </msub>
  <mo data-mjx-texclass="ORD" stretchy="false">|</mo>
</math></span>。若这些差值之和不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，则可以把它们全部降为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>否则用数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
</math></span> 记录每个差值出现的次数，记最大差值为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>m</mi>
</math></span>。从 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo>=</mo>
  <mi>m</mi>
</math></span> 起向下枚举：这一层有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>v</mi>
  <mo stretchy="false">]</mo>
</math></span> 个数，实际能减一的个数是 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">take</mtext>
  <mo>=</mo>
  <mo data-mjx-texclass="OP" movablelimits="true">min</mo>
  <mo stretchy="false">(</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>v</mi>
  <mo stretchy="false">]</mo>
  <mo>,</mo>
  <mi>k</mi>
  <mo stretchy="false">)</mo>
</math></span>。把这 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">take</mtext>
</math></span> 个数挪到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>v</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span>，并令 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">take</mtext>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span> 用尽后即可停止。</p>
<p>答案等于 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <munder>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mi>v</mi>
  </munder>
  <msup>
    <mi>v</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x22C5;</mo>
  <mi>c</mi>
  <mi>n</mi>
  <mi>t</mi>
  <mo stretchy="false">[</mo>
  <mi>v</mi>
  <mo stretchy="false">]</mo>
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
</math></span> 是数组长度， <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
</math></span> 是差值的最大值，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>M</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minSumSquareDiff(nums1 []int, nums2 []int, k1 int, k2 int) int64 {</span></span>
<span class="line"><span>	k := k1 + k2</span></span>
<span class="line"><span>	var s int64</span></span>
<span class="line"><span>	mx := 0</span></span>
<span class="line"><span>	cnt := make([]int, 100001)</span></span>
<span class="line"><span>	for i, a := range nums1 {</span></span>
<span class="line"><span>		v := abs(a - nums2[i])</span></span>
<span class="line"><span>		cnt[v]++</span></span>
<span class="line"><span>		s += int64(v)</span></span>
<span class="line"><span>		mx = max(mx, v)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if s &#x3C;= int64(k) {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for v := mx; v > 0 &#x26;&#x26; k > 0; v-- {</span></span>
<span class="line"><span>		if cnt[v] == 0 {</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		take := min(cnt[v], k)</span></span>
<span class="line"><span>		k -= take</span></span>
<span class="line"><span>		cnt[v] -= take</span></span>
<span class="line"><span>		cnt[v-1] += take</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var ans int64</span></span>
<span class="line"><span>	for v := 0; v &#x3C;= mx; v++ {</span></span>
<span class="line"><span>		ans += int64(v) * int64(v) * int64(cnt[v])</span></span>
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
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-sum-of-squared-difference" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2333.Minimum%20Sum%20of%20Squared%20Difference/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2335" tabindex="-1">2335. 装满杯子需要的最短总时长 <a class="header-anchor" href="#q-2335" aria-label="Permalink to &quot;2335. 装满杯子需要的最短总时长 {#q-2335}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>2 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、排序、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>现有一台饮水机，可以制备冷水、温水和热水。每秒钟，可以装满 <code>2</code> 杯 <strong>不同</strong> 类型的水或者 <code>1</code> 杯任意类型的水。</p>&#10;&#10;<p>给你一个下标从 <strong>0</strong> 开始、长度为 <code>3</code> 的整数数组 <code>amount</code> ，其中 <code>amount[0]</code>、<code>amount[1]</code> 和 <code>amount[2]</code> 分别表示需要装满冷水、温水和热水的杯子数量。返回装满所有杯子所需的 <strong>最少</strong> 秒数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre><strong>输入：</strong>amount = [1,4,2]&#10;<strong>输出：</strong>4&#10;<strong>解释：</strong>下面给出一种方案：&#10;第 1 秒：装满一杯冷水和一杯温水。&#10;第 2 秒：装满一杯温水和一杯热水。&#10;第 3 秒：装满一杯温水和一杯热水。&#10;第 4 秒：装满一杯温水。&#10;可以证明最少需要 4 秒才能装满所有杯子。&#10;</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre><strong>输入：</strong>amount = [5,4,4]&#10;<strong>输出：</strong>7&#10;<strong>解释：</strong>下面给出一种方案：&#10;第 1 秒：装满一杯冷水和一杯热水。&#10;第 2 秒：装满一杯冷水和一杯温水。&#10;第 3 秒：装满一杯冷水和一杯温水。&#10;第 4 秒：装满一杯温水和一杯热水。&#10;第 5 秒：装满一杯冷水和一杯热水。&#10;第 6 秒：装满一杯冷水和一杯温水。&#10;第 7 秒：装满一杯热水。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre><strong>输入：</strong>amount = [5,0,0]&#10;<strong>输出：</strong>5&#10;<strong>解释：</strong>每秒装满一杯冷水。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>amount.length == 3</code></li>&#10;	<li><code>0 &lt;= amount[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：贪心 + 排序 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每秒可给两种不同杯子各接 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1</mn>
</math></span>，或只接一种。总量不超过 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>300</mn>
</math></span>，反复取当前最多的两杯减一即可。</p>
<p>每次排序后减少最大的两个（第二大已为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span> 则只减一个），直到全为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。贪心保证每秒尽量消化两份需求。</p>
</blockquote>
<p>我们可以每次贪心地选择其中较大的两个数进行减一操作（最多减为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>），直至所有数变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>。</p>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>S</mi>
  <mo stretchy="false">)</mo>
</math></span>，空间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
</math></span>。其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>S</mi>
</math></span> 为数组 <code v-pre>amount</code> 中所有数的和，本题中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>S</mi>
  <mo>&#x2264;</mo>
  <mn>300</mn>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func fillCups(amount []int) int {</span></span>
<span class="line"><span>	ans := 0</span></span>
<span class="line"><span>	for amount[0]+amount[1]+amount[2] > 0 {</span></span>
<span class="line"><span>		sort.Ints(amount)</span></span>
<span class="line"><span>		ans++</span></span>
<span class="line"><span>		amount[2]--</span></span>
<span class="line"><span>		if amount[1] > 0 {</span></span>
<span class="line"><span>			amount[1]--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<details class="details custom-block"><summary>方法二：贪心 + 分类讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>方法一按秒模拟。将三数排序为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>&#x2264;</mo>
  <mi>b</mi>
  <mo>&#x2264;</mo>
  <mi>c</mi>
</math></span> 后可闭式求解：若 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&#x2264;</mo>
  <mi>c</mi>
</math></span>，较短的两杯可在 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 秒内穿插接完；否则总能两两配对，答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">&#x230A;</mo>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>+</mo>
  <mi>c</mi>
  <mo>+</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mrow data-mjx-texclass="ORD">
    <mo>/</mo>
  </mrow>
  <mn>2</mn>
  <mo fence="false" stretchy="false">&#x230B;</mo>
</math></span>。</p>
</blockquote>
<p>我们可以将数组 <code v-pre>amount</code> 排序，设 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>b</mi>
</math></span>, <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 分别为数组 <code v-pre>amount</code> 中的三个数，有以下两种情况：</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&#x2264;</mo>
  <mi>c</mi>
</math></span>，此时我们只需要 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span> 次操作即可将所有数变为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，因此答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>
</math></span>。</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo>&gt;</mo>
  <mi>c</mi>
</math></span>，每一次操作我们都可以将其中两个数减一，最终匹配完，或者剩下最后一个数（取决于总和是偶数还是奇数），因此答案为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">&#x230A;</mo>
    <mfrac>
      <mrow>
        <mi>a</mi>
        <mo>+</mo>
        <mi>b</mi>
        <mo>+</mo>
        <mi>c</mi>
        <mo>+</mo>
        <mn>1</mn>
      </mrow>
      <mn>2</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">&#x230B;</mo>
  </mrow>
</math></span>。</li>
</ul>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func fillCups(amount []int) int {</span></span>
<span class="line"><span>	sort.Ints(amount)</span></span>
<span class="line"><span>	if amount[0]+amount[1] &#x3C;= amount[2] {</span></span>
<span class="line"><span>		return amount[2]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return (amount[0] + amount[1] + amount[2] + 1) / 2</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-amount-of-time-to-fill-cups" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2335.Minimum%20Amount%20of%20Time%20to%20Fill%20Cups/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2340" tabindex="-1">2340. 生成有效数组的最少交换次数 🔒 <a class="header-anchor" href="#q-2340" aria-label="Permalink to &quot;2340. 生成有效数组的最少交换次数 🔒 {#q-2340}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="中等">中等</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给定一个<strong> 下标从 0 开始</strong> 的整数数组 <code>nums</code>。</p>&#10;&#10;<p><code>nums</code> 上的 <strong>相邻 </strong>元素可以进行 <strong>交换</strong>。</p>&#10;&#10;<p>一个 <strong>有效 </strong>的数组必须满足以下条件:</p>&#10;&#10;<ul>&#10;	<li>最大的元素 (如果有多个，则为最大元素中的任何一个) 位于数组中最右边的位置。</li>&#10;	<li>最小的元素 (如果有多个，则为最小的任何一个元素) 位于数组的最左侧。</li>&#10;</ul>&#10;&#10;<p>返回<em>使 </em><code>nums</code><em> </em><em>成为有效数组所需的最少交换次数。</em></p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1:</strong></p>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [3,4,5,5,3,1]&#10;<strong>输出:</strong> 6&#10;<strong>解释:</strong> 进行以下交换:&#10;- 交换 1:交换第 3 和第 4 个元素，然后 nums 是 [3,4,5,<u><strong>3</strong></u>,<u><strong>5</strong></u>,1].&#10;- 交换 2:交换第 4 和第 5 个元素，然后 nums 是 [3,4,5,3,<u><strong>1</strong></u>,<u><strong>5</strong></u>].&#10;- 交换 3:交换第 3 和第 4 个元素，然后 nums 是  [3,4,5,<u><strong>1</strong></u>,<u><strong>3</strong></u>,5].&#10;- 交换 4:交换第 2 和第 3 个元素，然后 nums 是  [3,4,<u><strong>1</strong></u>,<u><strong>5</strong></u>,3,5].&#10;- 交换 5:交换第 1 和第 2 个元素，然后 nums 是  [3,<u><strong>1</strong></u>,<u><strong>4</strong></u>,5,3,5].&#10;- 交换 6:交换第 0 和第 1 个元素，然后 nums 是  [<u><strong>1</strong></u>,<u><strong>3</strong></u>,4,5,3,5].&#10;可以证明，6 次交换是组成一个有效数组所需的最少交换次数。&#10;</pre>&#10;&#10;<strong>示例 2:</strong>&#10;&#10;<pre>&#10;<strong>输入:</strong> nums = [9]&#10;<strong>输出:</strong> 0&#10;<strong>解释:</strong> 该数组已经有效，因此返回 0。</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示:</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：维护最值下标 + 分类讨论 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>只需把全局最小换到最左、全局最大换到最右，且最小取最左出现、最大取最右出现。一次遍历记下这两个下标。</p>
<p>两下标不相交时次数相加；最小值在最大值右侧时，两次移动共用一次交换，答案减一。</p>
</blockquote>
<p>我们可以用下标 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 分别记录数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 第一个最小值和最后一个最大值的下标，遍历数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span>，更新 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
</math></span> 和 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>j</mi>
</math></span> 的值。</p>
<p>接下来，我们需要考虑交换的次数。</p>
<ul>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>=</mo>
  <mi>j</mi>
</math></span>，说明数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 已经是有效数组，不需要交换，返回 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&lt;</mo>
  <mi>j</mi>
</math></span>，说明数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中最小值在最大值的左边，需要交换 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>j</mi>
</math></span> 次，其中 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
</math></span> 为数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 的长度；</li>
<li>如果 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>&gt;</mo>
  <mi>j</mi>
</math></span>，说明数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中最小值在最大值的右边，需要交换 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>i</mi>
  <mo>+</mo>
  <mi>n</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>j</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
</math></span> 次。</li>
</ul>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumSwaps(nums []int) int {</span></span>
<span class="line"><span>	var i, j int</span></span>
<span class="line"><span>	for k, v := range nums {</span></span>
<span class="line"><span>		if v &#x3C; nums[i] || (v == nums[i] &#x26;&#x26; k &#x3C; i) {</span></span>
<span class="line"><span>			i = k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if v > nums[j] || (v == nums[j] &#x26;&#x26; k > j) {</span></span>
<span class="line"><span>			j = k</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if i == j {</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if i &#x3C; j {</span></span>
<span class="line"><span>		return i + len(nums) - 1 - j</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return i + len(nums) - 2 - j</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/minimum-adjacent-swaps-to-make-a-valid-array" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2340.Minimum%20Adjacent%20Swaps%20to%20Make%20a%20Valid%20Array/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2350" tabindex="-1">2350. 不可能得到的最短骰子序列 <a class="header-anchor" href="#q-2350" aria-label="Permalink to &quot;2350. 不可能得到的最短骰子序列 {#q-2350}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="困难">困难</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个长度为 <code>n</code> 的整数数组 <code>rolls</code> 和一个整数 <code>k</code> 。你扔一个 <code>k</code> 面的骰子 <code>n</code> 次，骰子的每个面分别是 <code>1</code> 到 <code>k</code> ，其中第 <code>i</code> 次扔得到的数字是 <code>rolls[i]</code> 。</p>&#10;&#10;<p>请你返回 <strong>无法</strong> 从 <code>rolls</code> 中得到的 <strong>最短</strong> 骰子子序列的长度。</p>&#10;&#10;<p>扔一个 <code>k</code> 面的骰子 <code>len</code> 次得到的是一个长度为 <code>len</code> 的 <strong>骰子子序列</strong> 。</p>&#10;&#10;<p><strong>注意</strong> ，子序列只需要保持在原数组中的顺序，不需要连续。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>rolls = [4,2,1,2,3,3,2,4,1], k = 4&#10;<b>输出：</b>3&#10;<b>解释：</b>所有长度为 1 的骰子子序列 [1] ，[2] ，[3] ，[4] 都可以从原数组中得到。&#10;所有长度为 2 的骰子子序列 [1, 1] ，[1, 2] ，... ，[4, 4] 都可以从原数组中得到。&#10;子序列 [1, 4, 2] 无法从原数组中得到，所以我们返回 3 。&#10;还有别的子序列也无法从原数组中得到。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>rolls = [1,1,2,2], k = 2&#10;<b>输出：</b>2&#10;<b>解释：</b>所有长度为 1 的子序列 [1] ，[2] 都可以从原数组中得到。&#10;子序列 [2, 1] 无法从原数组中得到，所以我们返回 2 。&#10;还有别的子序列也无法从原数组中得到，但 [2, 1] 是最短的子序列。&#10;</pre>&#10;&#10;<p><strong>示例 3：</strong></p>&#10;&#10;<pre>&#10;<b>输入：</b>rolls = [1,1,3,2,2,2,3,3], k = 4&#10;<b>输出：</b>1&#10;<b>解释：</b>子序列 [4] 无法从原数组中得到，所以我们返回 1 。&#10;还有别的子序列也无法从原数组中得到，但 [4] 是最短的子序列。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>n == rolls.length</code></li>&#10;	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>&#10;	<li><code>1 &lt;= rolls[i] &lt;= k &lt;= 10<sup>5</sup></code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：脑筋急转弯 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>长度为 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 的序列可被 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>r</mi>
  <mi>o</mi>
  <mi>l</mi>
  <mi>l</mi>
  <mi>s</mi>
</math></span> 作为子序列取出，当且仅当能依次找到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>L</mi>
</math></span> 组完整的 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>1.</mn>
  <mo>.</mo>
  <mi>k</mi>
</math></span>。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <msup>
    <mn>10</mn>
    <mn>5</mn>
  </msup>
</math></span>，不能枚举序列。</p>
<p>从左到右收集尚未出现的点数；当集合大小达到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>k</mi>
</math></span>，说明又完成一轮「任意下一面」，答案加一并清空集合。最终答案是完成轮数加一，即第一段凑不齐的长度。</p>
</blockquote>
<p>时间复杂度 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi>
  <mo stretchy="false">(</mo>
  <mi>n</mi>
  <mo stretchy="false">)</mo>
</math></span>。</p>
</div>
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func shortestSequence(rolls []int, k int) int {</span></span>
<span class="line"><span>	s := map[int]bool{}</span></span>
<span class="line"><span>	ans := 1</span></span>
<span class="line"><span>	for _, v := range rolls {</span></span>
<span class="line"><span>		s[v] = true</span></span>
<span class="line"><span>		if len(s) == k {</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>			s = map[int]bool{}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/shortest-impossible-sequence-of-rolls" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2350.Shortest%20Impossible%20Sequence%20of%20Rolls/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details>
<details class="leetcode-question" name="leetcode-questions">
<summary class="leetcode-question-heading"><h2 id="q-2357" tabindex="-1">2357. 使数组中所有元素都等于零 <a class="header-anchor" href="#q-2357" aria-label="Permalink to &quot;2357. 使数组中所有元素都等于零 {#q-2357}&quot;">&ZeroWidthSpace;</a></h2><span class="leetcode-question-meta"><span class="leetcode-difficulty" data-level="简单">简单</span><span>1 种解法</span></span></summary>
<div class="leetcode-question-body">
<p class="leetcode-question-tags">标签：贪心、数组、哈希表、排序、模拟、堆（优先队列）</p>

<details open class="leetcode-statement details custom-block"><summary>题目、示例与约束</summary>
<div v-pre><p>给你一个非负整数数组 <code>nums</code> 。在一步操作中，你必须：</p>&#10;&#10;<ul>&#10;	<li>选出一个正整数 <code>x</code> ，<code>x</code> 需要小于或等于 <code>nums</code> 中 <strong>最小</strong> 的 <strong>非零</strong> 元素。</li>&#10;	<li><code>nums</code> 中的每个正整数都减去 <code>x</code>。</li>&#10;</ul>&#10;&#10;<p>返回使 <code>nums</code> 中所有元素都等于<em> </em><code>0</code> 需要的 <strong>最少</strong> 操作数。</p>&#10;&#10;<p> </p>&#10;&#10;<p><strong>示例 1：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [1,5,0,3,5]&#10;<strong>输出：</strong>3&#10;<strong>解释：</strong>&#10;第一步操作：选出 x = 1 ，之后 nums = [0,4,0,2,4] 。&#10;第二步操作：选出 x = 2 ，之后 nums = [0,2,0,0,2] 。&#10;第三步操作：选出 x = 2 ，之后 nums = [0,0,0,0,0] 。</pre>&#10;&#10;<p><strong>示例 2：</strong></p>&#10;&#10;<pre>&#10;<strong>输入：</strong>nums = [0]&#10;<strong>输出：</strong>0&#10;<strong>解释：</strong>nums 中的每个元素都已经是 0 ，所以不需要执行任何操作。&#10;</pre>&#10;&#10;<p> </p>&#10;&#10;<p><strong>提示：</strong></p>&#10;&#10;<ul>&#10;	<li><code>1 &lt;= nums.length &lt;= 100</code></li>&#10;	<li><code>0 &lt;= nums[i] &lt;= 100</code></li>&#10;</ul></div>
</details>
<details class="details custom-block"><summary>方法一：哈希表或数组 · Go 实现</summary>
<div v-pre>
<blockquote>
<p><strong>思考</strong></p>
<p>每次选一个正数 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span> 并从所有 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>&#x2265;</mo>
  <mi>x</mi>
</math></span> 的元素中减去 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
</math></span>，等价于消去一种正值。 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>n</mi>
  <mo>&#x2264;</mo>
  <mn>100</mn>
</math></span>，统计不同正数即可。</p>
<p>零不被操作改变，也不产生新的正值种类。答案等于集合 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mo fence="false" stretchy="false">{</mo>
  <mi>x</mi>
  <mo>&#x2208;</mo>
  <mi>n</mi>
  <mi>u</mi>
  <mi>m</mi>
  <mi>s</mi>
  <mo>:</mo>
  <mi>x</mi>
  <mo>&gt;</mo>
  <mn>0</mn>
  <mo fence="false" stretchy="false">}</mo>
</math></span> 的大小。</p>
</blockquote>
<p>我们观察到，每一次操作，都可以把数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中相同且非零的元素减少到 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mn>0</mn>
</math></span>，因此，我们只需要统计数组 <span class="leetcode-math"><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext mathvariant="italic">nums</mtext>
</math></span> 中有多少个不同的非零元素，即为最少操作数。统计不同的非零元素，可以使用哈希表或数组来实现。</p>
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
<div class="language-go vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line"><span>func minimumOperations(nums []int) (ans int) {</span></span>
<span class="line"><span>	s := [101]bool{true}</span></span>
<span class="line"><span>	for _, x := range nums {</span></span>
<span class="line"><span>		if !s[x] {</span></span>
<span class="line"><span>			s[x] = true</span></span>
<span class="line"><span>			ans++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre>
</div></details>
<div class="leetcode-question-sources"><p><a href="https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts" target="_blank" rel="noopener noreferrer">力扣原题</a> · <a href="https://github.com/doocs/leetcode/blob/91ef8c241a5eaabf96f9ca8d45cfb1a338bcb011/solution/2300-2399/2357.Make%20Array%20Zero%20by%20Subtracting%20Equal%20Amounts/README.md" target="_blank" rel="noopener noreferrer">Doocs 题解来源</a></p></div></div>
</details></div>`},null,-1)])])}const w=a(e,[["render",o]]);export{d as __pageData,w as default};
