import{_ as i,a,c as n,ac as l}from"./chunks/framework.BSuaGltH.js";const o=JSON.parse('{"title":"全局 AGENTS.md","description":"Codex 全局指令配置位置与最小修改原则模板","frontmatter":{"title":"全局 AGENTS.md","description":"Codex 全局编码指令配置方式与推荐内容","sources":[{"repository":"TeamDocs","file":"docs/engineering/codex/Global-AGENTS.md"}],"showdocs":{"topics":[{"id":"ai","title":"AI 与 Codex","link":"/topics/ai/"},{"id":"engineering","title":"编辑器与 IDE","link":"/topics/engineering/"}],"kind":"AI与Codex上手与对象","scope":"general","audience":"general","group":"工程与工具","summary":"Codex 全局指令配置位置与最小修改原则模板","status":"active","related":[{"title":"AI辅助开发的任务、上下文与验收","link":"/tools/ai/assisted-development-workflow","kind":"AI与Codex上手与对象","scope":"general","audience":"general"},{"title":"AI与Codex：完整实践与解答","link":"/tools/ai/practice/application","kind":"AI与Codex完整实践与解答","scope":"general","audience":"general"},{"title":"编辑器与IDE：完整实践与解答","link":"/tools/developer-tools/engineering/practice/application","kind":"编辑器与IDE完整实践与解答","scope":"general","audience":"general"},{"title":"Jira Software 使用技巧与 JQL 搜索指南","link":"/tools/developer-tools/engineering/guide/jira-software","kind":"编辑器与IDE上手与对象","scope":"general","audience":"general"},{"title":"Jira Software 使用技巧与 JQL 搜索指南 · 1. Jira 能解决什么问题至5. JQL 语句结构","link":"/tools/developer-tools/engineering/guide/jira-software-part-01","kind":"编辑器与IDE上手与对象","scope":"general","audience":"general"}],"prev":{"text":"AI辅助开发的任务、上下文与验收","link":"/tools/ai/assisted-development-workflow"},"next":false},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"AI辅助开发的任务、上下文与验收","link":"/tools/ai/assisted-development-workflow"},"next":false},"headers":[],"relativePath":"tools/ai/guide/global-agents.md","filePath":"tools/ai/guide/global-agents.md"}'),e={name:"tools/ai/guide/global-agents.md"};function p(t,s,h,k,d,E){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="全局-agents-md" tabindex="-1">全局 AGENTS.md <a class="header-anchor" href="#全局-agents-md" aria-label="Permalink to &quot;全局 AGENTS.md&quot;">​</a></h1><p>全局 AGENTS.md 用于给 Codex 提供默认编码规则。除非项目目录中的 <code>AGENTS.md</code> 另有说明，否则这些规则适用于所有 Codex 编码任务。</p><h2 id="方式一-通过-codex-客户端配置" tabindex="-1">方式一：通过 Codex 客户端配置 <a class="header-anchor" href="#方式一-通过-codex-客户端配置" aria-label="Permalink to &quot;方式一：通过 Codex 客户端配置&quot;">​</a></h2><p>打开 Codex 客户端设置，在 <code>个性化</code> 页面找到 <code>自定义指令</code>，粘贴下面的全局编码指令后点击保存。</p><p>（内部环境截图已移除。）</p><h2 id="方式二-不使用-codex-客户端配置" tabindex="-1">方式二：不使用 Codex 客户端配置 <a class="header-anchor" href="#方式二-不使用-codex-客户端配置" aria-label="Permalink to &quot;方式二：不使用 Codex 客户端配置&quot;">​</a></h2><p>如果不使用 Codex 客户端，可以直接在用户目录下创建全局 <code>AGENTS.md</code> 文件。</p><table tabindex="0"><thead><tr><th>系统</th><th>文件路径</th></tr></thead><tbody><tr><td>macOS / Linux</td><td><code>~/.codex/AGENTS.md</code></td></tr><tr><td>Windows PowerShell</td><td><code>$env:USERPROFILE\\.codex\\AGENTS.md</code></td></tr></tbody></table><p>macOS / Linux：</p><div class="language-bash vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.codex</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.codex/AGENTS.md</span></span></code></pre></div><p>Windows PowerShell：</p><div class="language-powershell vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">New-Item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ItemType Directory </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Force </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">env:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USERPROFILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\.codex&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">notepad </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">env:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USERPROFILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\.codex\\AGENTS.md&quot;</span></span></code></pre></div><p>将下面内容写入文件后保存即可。</p><h2 id="推荐内容" tabindex="-1">推荐内容 <a class="header-anchor" href="#推荐内容" aria-label="Permalink to &quot;推荐内容&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 全局编码指令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">除非项目目录中的 AGENTS.md 另有说明，否则这些规则适用于所有 Codex 编码任务。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 核心原则</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用最小、最清晰、最可验证的改动解决当前任务。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">优先：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 简单直接。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 精准修改。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遵循现有代码风格。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 明确假设。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 结果可验证。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">避免：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 默默猜测。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 大范围重写。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加未要求的功能。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为未来可能性过早设计。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 顺手优化无关代码。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 声称未经验证的正确性。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 编码前思考</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 明确假设，不确定时询问而非猜测。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 存在歧义时，列出多种解释，不默默选一种。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果任务有明显更简单的做法，直接指出。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 发现矛盾或不一致时停下来，要求澄清。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修改前先理解相关代码路径，不要直接猜实现。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 简洁优先</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用最少的代码解决问题。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不为一次性需求创建抽象层。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不为“万一以后需要”增加灵活性和可配置性。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果当前任务涉及的代码可以从 200 行简化为 50 行，并且风险可控，优先简化；否则只提出建议，不主动大改。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 检查标准：资深工程师会觉得这过于复杂吗？如果是，简化。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 精准修改</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 只修改与当前任务直接相关的代码。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不顺手改进相邻代码、注释或格式。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不重构本来能正常工作的部分。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配现有代码风格，即使你更偏好另一种写法。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 因你的修改而变成死代码的导入和变量，删除掉。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 发现预先存在的死代码时，提出来但不要删。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每一行改动都应该能对应到用户的需求。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 目标驱动执行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 定义清晰的成功标准再开始。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> “修复 bug” 转化为“写一个重现 bug 的测试，然后让它通过”。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> “添加验证”转化为“为无效输入写测试，然后让它们通过”。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> “重构 X”转化为“确保重构前后所有测试都能通过”。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 多步骤任务先给简短计划，每一步带验证方式。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 验证要求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 优先运行现有测试。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复 bug 或新增行为时，尽量添加聚焦测试。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如果不能运行测试，明确说明原因。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不要声称已经验证，除非确实运行过验证。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 最终回复中说明验证方式。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 最终回复格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">完成任务后，简洁说明：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 改了什么。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为什么这样改。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 如何验证。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 还有什么风险或假设。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">回复要直接、实用，不要过度解释。</span></span></code></pre></div>`,15)])])}const g=i(e,[["render",p]]);export{o as __pageData,g as default};
