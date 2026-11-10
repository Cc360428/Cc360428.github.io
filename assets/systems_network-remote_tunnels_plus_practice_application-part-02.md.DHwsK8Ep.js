import{_ as i,a,c as n,ac as l}from"./chunks/framework.BSuaGltH.js";const c=JSON.parse('{"title":"隧道与穿透：配置受限隧道与访问路径 · WireGuard 两端配置至完整项目说明与依赖声明","description":"配置受限隧道与访问路径：说明配置前提、操作对象、检查依据与失败处理。","frontmatter":{"title":"隧道与穿透：配置受限隧道与访问路径 · WireGuard 两端配置至完整项目说明与依赖声明","description":"配置受限隧道与访问路径：说明配置前提、操作对象、检查依据与失败处理。","splitFrom":"systems/network-remote/tunnels/plus/practice/application.md","showdocs":{"topics":[{"id":"tunnels","title":"VPN / 隧道 / FRP","link":"/topics/tunnels/"}],"kind":"应用实践","scope":"general","audience":"general","group":"容器与运维","seriesTitle":"隧道与穿透：配置受限隧道与访问路径","summary":"配置受限隧道与访问路径：说明配置前提、操作对象、检查依据与失败处理。","status":"active","related":[{"title":"隧道与穿透：变更、排障与恢复自检","link":"/systems/network-remote/tunnels/operations","kind":"知识专题","scope":"general","audience":"general"},{"title":"隧道与穿透：对象、配置与机制","link":"/systems/network-remote/tunnels/traffic-path","kind":"知识专题","scope":"general","audience":"general"},{"title":"隧道与穿透：配置受限隧道与访问路径","link":"/systems/network-remote/tunnels/plus/practice/application","kind":"应用实践","scope":"general","audience":"general"},{"title":"隧道与穿透：配置受限隧道与访问路径 · 前置、依赖与输入至产品配置与操作契约","link":"/systems/network-remote/tunnels/plus/practice/application-part-01","kind":"应用实践","scope":"general","audience":"general"}],"prev":{"text":"隧道与穿透：配置受限隧道与访问路径 · 前置、依赖与输入至产品配置与操作契约","link":"/systems/network-remote/tunnels/plus/practice/application-part-01"},"next":{"text":"隧道与穿透：变更、排障与恢复自检","link":"/systems/network-remote/tunnels/operations"}},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":{"text":"隧道与穿透：配置受限隧道与访问路径 · 前置、依赖与输入至产品配置与操作契约","link":"/systems/network-remote/tunnels/plus/practice/application-part-01"},"next":{"text":"隧道与穿透：变更、排障与恢复自检","link":"/systems/network-remote/tunnels/operations"}},"headers":[],"relativePath":"systems/network-remote/tunnels/plus/practice/application-part-02.md","filePath":"systems/network-remote/tunnels/plus/practice/application-part-02.md"}'),e={name:"systems/network-remote/tunnels/plus/practice/application-part-02.md"};function t(p,s,h,k,r,d){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="隧道与穿透-配置受限隧道与访问路径-·-wireguard-两端配置至完整项目说明与依赖声明" tabindex="-1">隧道与穿透：配置受限隧道与访问路径 · WireGuard 两端配置至完整项目说明与依赖声明 <a class="header-anchor" href="#隧道与穿透-配置受限隧道与访问路径-·-wireguard-两端配置至完整项目说明与依赖声明" aria-label="Permalink to &quot;隧道与穿透：配置受限隧道与访问路径 · WireGuard 两端配置至完整项目说明与依赖声明&quot;">​</a></h1><p><a href="/systems/network-remote/tunnels/plus/practice/application">返回分篇目录</a></p><p>本篇以隧道两端配置为例；前置是监听端、控制通道、目标服务与回程。<a href="/systems/network-remote/tunnels/plus/practice/application#product-config">源码与输入</a>与下文配置共用同一份文件，示例未执行。</p><h2 id="wireguard-project" tabindex="-1">WireGuard 两端配置 <a class="header-anchor" href="#wireguard-project" aria-label="Permalink to &quot;WireGuard 两端配置 {#wireguard-project}&quot;">​</a></h2><p>隧道 WireGuard 两端配置将 A/B 主机的隧道地址与各自密钥对应起来，<code>AllowedIPs</code> 仅允许对方的 <code>/32</code> 主机前缀，既用于选对端，也约束接收的内层源地址。这里交付完整两端文件，示例未执行；合法密钥、可达外层端点和路由不冲突是读者前置。配置仅供 Linux <code>wg-quick</code>，不能把 <code>Address</code> 当作裸 <code>wg</code> 参数。</p><div class="language-ini vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Linux wg-quick teaching configuration. Replace all key placeholders privately.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Interface]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10.77.0.1/32</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ListenPort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 51820</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PrivateKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = REPLACE_WITH_A_PRIVATE_KEY</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Peer]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PublicKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = REPLACE_WITH_B_PUBLIC_KEY</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AllowedIPs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10.77.0.2/32</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Linux wg-quick teaching configuration. Replace documentation endpoint and keys.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Interface]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10.77.0.2/32</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PrivateKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = REPLACE_WITH_B_PRIVATE_KEY</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Peer]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PublicKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = REPLACE_WITH_A_PUBLIC_KEY</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AllowedIPs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10.77.0.1/32</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 192.0.2.10:51820</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PersistentKeepalive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 25</span></span></code></pre></div><p>前置、密钥交换、自跑、正常/失败预期和接口撤销步骤见<a href="/systems/network-remote/tunnels/plus/practice/application-part-02#runbook">完整项目说明</a>引用的同源 README。只互访两个主机地址，不代表全网流量进入VPN；不能用握手记录代替内层路由和服务权限证据。</p><h2 id="runbook" tabindex="-1">完整项目说明与依赖声明 <a class="header-anchor" href="#runbook" aria-label="Permalink to &quot;完整项目说明与依赖声明 {#runbook}&quot;">​</a></h2><p>以下同源文件完整列出读者前置、自跑命令、正常/失败预期和清理；正文只供阅读，示例未执行。</p><div class="language-text vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Python &gt;=3.11; standard library only; no third-party dependencies.</span></span></code></pre></div><details class="details custom-block"><summary>完整 README（与项目文件一致）</summary><div class="language-markdown vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># tunnels 离线证据推演</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">示例未执行。前半的 lab.py 只核对监听地址、目标地址及回程声明；后半分别列出 FRP、SSH 本地转发和 WireGuard 的独立例子。先画清入口、转发终点与双方主机，不把离线接受判定当成隧道已建立。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 文件与前置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">离线部分只需 Python 3.11 以上和标准库，无网络服务或管理员权限。从 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">case.json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">case.json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 对照 listener/approved_listener、destination/approved_destination 和 return_route，再阅读 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">lab.py</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">lab.py</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 的拒绝顺序。实际产品的版本、端口、双端地址与密钥前置分别列在对应配置节，不是 Python 依赖；macOS 未做原生运行验收。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 读者自跑</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">先复制全部文件到自己的隔离练习目录并进入该目录。以下仅是读者步骤，本轮未执行。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Windows PowerShell：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`powershell</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python .\\lab.py .\\case.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Linux Bash（macOS若已有Python3也使用此形式）：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./lab.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./case.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">预期标准输出如下，进程退出0；明确拒绝是正常决策而不是输入错误。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loopback: BOUNDARY_PLAN_ACCEPTED</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wildcard: DENY_LISTENER_SCOPE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">missing-return: CHECK_RETURN_ROUTE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 失败路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">把case.json复制为broken.json，再人工删除第一条记录的name字段。使用同一命令把参数换成broken.json，预期标准错误invalid input、退出2，不发布部分判定。破损JSON、非法字段类型、未知字段、空列表或不存在的文件同样退出2。不打印异常原文，防止输入内容意外进入日志。程序严格匹配固定教学字段，不接受任意扩展。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 恢复与清理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">从原仓库重新复制case.json恢复，或撤销练习副本编辑。程序没有写文件、创建用户或启动连接，无需服务清理；只删除自己复制的目录和broken.json，不删除仓库原文件。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 解释边界</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">程序精确比较批准的监听及目标IP，不实现端口转发、VPN或CIDR策略。return_route只是输入声明，不能证明系统路由真实存在。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输入由读者提供，不具有独立真实性。需要真实运行验证时，另行取得授权并采集环境证据，不能用本程序作产品验收工具。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 完整FRP两端配置（未执行）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">frps.toml与frpc.toml按v0.61.1固定字段编写。读者需已有该版本二进制、获批两台隔离主机及客户端本机既有SSH服务。192.0.2.10必须替换为服务端实际地址；只允许客户端到服务端7000的必要网络路径，禁止将示例文档地址部署为公网地址。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">两端auth.token必须替换成同一份独立随机秘密，不能使用仓库里的明显占位值。服务端secrets/frps.crt及frps.key由读者自供，证书SAN须含frps.example.invalid（实际部署也可统一改成获批域名）；客户端secrets/root.crt是对应已核验CA。不得关闭trustedCaFile或名称校验以通过连接。私钥与token文件只允许相应进程身份读取。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proxyBindAddr限制映射入口在服务端回环6000，allowPorts只允许6000，管理面板不启用。frpc的localIP属于客户端，因此连接的是客户端127.0.0.1:22。7000是控制/工作连接入口，6000是被映射入口。客户端到代理的TLS不替代被映射SSH服务的主机验证与用户授权。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">读者获得部署授权后，在各自包含配置及secrets的隔离目录分别运行：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./frps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./frps.toml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./frpc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./frpc.toml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">预期客户端注册lab-ssh，服务端仅回环6000可作为SSH入口；服务端以外主机不能直接连接6000。令牌不同预期注册拒绝，证书不可信或名称不匹配预期TLS拒绝，客户端SSH未监听则注册可能成功但业务连接失败。此处均为预期，本轮未执行。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## SSH本地转发的完整命令（未执行）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">前置：独立核验并预置192.0.2.10主机公钥、提供有效student账户私钥，服务端允许到其自身127.0.0.1:6000的转发。这里直接连接FRP主机，不使用限制目的地为2222的SSH课程跳板配置。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -T</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> StrictHostKeyChecking=yes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IdentitiesOnly=yes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ExitOnForwardFailure=yes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ForwardAgent=no</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /srv/tunnel-lab/client_ed25519</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:16000:127.0.0.1:6000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> student@192.0.2.10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">本机16000只监听回环，转发目标127.0.0.1:6000属于SSH服务端。ExitOnForwardFailure能报告初始转发建立失败，但不保证之后FRP或目标服务始终可用。经此入口再连接SSH仍须核验最终被映射主机的身份。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">恢复时撤销本次映射或还原已批准端口范围，保留原管理入口；清理只结束本次前台frpc/frps/转发会话，删除分发的实验秘密并核查相应授权已撤销。不终止同名其他进程。本项目未创建这些进程。WireGuard的独立两端模型见下节，不能与FRP端口映射混为同一机制。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## WireGuard 两端配置与单主机前缀（未执行）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">另一个独立配置例是a-server.conf和b-client.conf，面向Linux已有WireGuard支持、wireguard-tools 1.0.x的wg-quick与iproute2。此处不安装工具，不创建接口、不生成密钥、不执行配置；Windows原生客户端的界面和路由管理不属于这个Linux自跑步骤。两端只互访隧道主机地址，不转发LAN、不改默认路由、不配置DNS或NAT，因此不需要为这个模型打开IP转发。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A是可由B访问的UDP端点，B可在允许出站的NAT后。192.0.2.10是文档地址，读者未来必须换成自己的A端可达地址；10.77.0.1/32和10.77.0.2/32是隧道地址示例，先确认与双方真实路由不冲突。A的UDP51820需按来源范围允许B访问；内层主机访问另受主机防火墙限制。接口名取配置文件名a-server与b-client，必须与已有接口不冲突。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PrivateKey占位值不是合法密钥，两份原样配置不能启动。只在读者各自专用、不可被其他用户读取的空练习目录中分别生成本端秘密：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">umask</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 077</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> genkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private.key</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pubkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private.key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public.key</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">双方通过可信渠道交换public.key；A配置只填A私钥/B公钥，B配置只填B私钥/A公钥。不能交换私钥或把填好后的配置提交仓库。限制私钥和含密钥配置文件的读取权限；不要把真实私钥打印到工单或Shell历史中。B的PersistentKeepalive=25仅演示需维持NAT映射时的选择，不保证穿透所有过滤策略。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Address是wg-quick扩展项，不应把带Address的文件直接当作wg setconf输入。wg-quick会按AllowedIPs创建相应路由；本例双方均只允许另一个隧道地址的/32，未设置0.0.0.0/0，也没有PostUp/PostDown脚本。A未固定B的外层Endpoint，B先向A发出已认证流量后，A才有可用的动态对端端点；不能把配置文件中没写B外层地址解释为任意对端都获准。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以下仅供将来另行获准的Linux隔离环境，分别在正确主机、填好各自配置后使用，本轮未执行：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 仅A，未来读者自行执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wg-quick</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./a-server.conf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 仅B，未来读者自行执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wg-quick</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./b-client.conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">设计预期：双方能发送发往对方隧道/32的流量；在主机防火墙允许ICMP时，B到10.77.0.1的ping可作一项内层观测。握手不证明端口服务或整个LAN可达。公钥填错应无法完成预期握手；AllowedIPs错可出现握手有记录但内层业务失败；UDP端点不可达需核对外层地址、路径及过滤，而不是直接开放全网。Keepalive不负责为业务服务做健康检查。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">恢复保留原管理通道和双方路由快照，只回退本例对应文件；密钥泄露须换新秘密和公钥绑定，不回退到泄露秘密。若读者未来实际建立过接口，分别用对应文件的wg-quick down ./a-server.conf或wg-quick down ./b-client.conf撤销该实验接口与其管理的路由，核对后再删除自己的配置/密钥副本；不删除其他接口或共享网络规则。仅编辑过文件则没有任何接口需要清理。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">核对日期2026-10-17，限定上述共同字段，不称为最新部署推荐。依据：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">官方密钥与keepalive入门</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">https://www.wireguard.com/quickstart/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)、[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">wg字段手册</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">https://git.zx2c4.com/wireguard-tools/plain/src/man/wg.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)、[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">wg-quick路径、Address与路由手册</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">https://git.zx2c4.com/wireguard-tools/plain/src/man/wg-quick.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)。未用官方公用演示服务器，也未进行握手或路由验证。</span></span></code></pre></div></details>`,12)])])}const o=i(e,[["render",t]]);export{c as __pageData,o as default};
