import{_ as n,a,c as e,ac as l}from"./chunks/framework.BSuaGltH.js";const h=JSON.parse('{"title":"Consul 安装与开发模式","description":"Consul 1.4.2 开发模式旧笔记，供历史环境查阅。","frontmatter":{"title":"Consul 安装与开发模式","description":"安装 Consul 并以开发模式启动服务发现代理。","sources":[{"repository":"jekyall_blog","file":"_posts/Language/golang/Micro service framework/Consul.md","date":"Thu Dec 26 2019 14:22:12 GMT+0800 (中国标准时间)"}],"showdocs":{"topics":[{"id":"consul","title":"Consul","link":"/topics/consul/"}],"kind":"知识专题","scope":"historical","audience":"general","group":"数据库与存储","summary":"Consul 1.4.2 开发模式旧笔记，供历史环境查阅。","status":"archive","related":[{"title":"Consul 完整健康发现客户端","link":"/middleware/service-discovery/consul/plus/practice/application","kind":"完整实践","scope":"general","audience":"general"},{"title":"Consul：对象、生命周期与一致性模型","link":"/middleware/service-discovery/consul/model","kind":"知识专题","scope":"general","audience":"general"},{"title":"Consul：排障、恢复与场景自检","link":"/middleware/service-discovery/consul/operations","kind":"问题排查","scope":"general","audience":"general"}],"prev":false,"next":false},"layout":"ReadingPage","sidebar":false,"aside":false,"prev":false,"next":false,"search":false},"headers":[],"relativePath":"middleware/service-discovery/consul/plus/subjects/consul.md","filePath":"middleware/service-discovery/consul/plus/subjects/consul.md"}'),p={name:"middleware/service-discovery/consul/plus/subjects/consul.md"};function i(c,s,o,t,r,u){return a(),e("div",null,[...s[0]||(s[0]=[l(`<h1 id="consul-安装与开发模式" tabindex="-1">Consul 安装与开发模式 <a class="header-anchor" href="#consul-安装与开发模式" aria-label="Permalink to &quot;Consul 安装与开发模式&quot;">​</a></h1><p><span id="constl"></span></p><p>#　 Consul</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//1.下载压缩包</span></span>
<span class="line"><span>wget https://releases.hashicorp.com/consul/1.4.2/consul_1.4.2_linux_amd64.zip</span></span>
<span class="line"><span>//2.解压</span></span>
<span class="line"><span>unzip consul_1.4.2_linux_amd64.zip</span></span>
<span class="line"><span>//3.检查安装</span></span>
<span class="line"><span>./consul -v</span></span>
<span class="line"><span>Consul v1.4.2</span></span>
<span class="line"><span>Protocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol &gt;2 when speaking to compatible agents)</span></span></code></pre></div><blockquote><p>把 consul 复制到 src 同等 bin 目录下即可</p></blockquote><h2 id="开发启动" tabindex="-1">开发启动 <a class="header-anchor" href="#开发启动" aria-label="Permalink to &quot;开发启动&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>consul agent -dev -client 0.0.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nohup consul agent -dev -server -client  0.0.0.0  -bootstrap-expect 1 -data-dir /opt/tools/consul/ -node=demo-node &amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>consul1 -d -p 8500:8500 -p 8300:8300 -p 8301:8301 -p 8302:8302 -p 8600:8600 consul:latest agent -server -bootstrap-expect 2 -ui -bind=0.0.0.0 -client=0.0.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8500 http 端口，用于 http 接口和 web ui</span></span>
<span class="line"><span>8300 server rpc 端口，同一数据中心 consul server 之间通过该端口通信</span></span>
<span class="line"><span>8301 serf lan 端口，同一数据中心 consul client 通过该端口通信</span></span>
<span class="line"><span>8302 serf wan 端口，不同数据中心 consul server 通过该端口通信</span></span>
<span class="line"><span>8600 dns 端口，用于服务发现</span></span>
<span class="line"><span>-bbostrap-expect 2: 集群至少两台服务器，才能选举集群leader</span></span>
<span class="line"><span>-ui：运行 web 控制台</span></span>
<span class="line"><span>-bind： 监听网口，0.0.0.0 表示所有网口，如果不指定默认未127.0.0.1，则无法和容器通信</span></span>
<span class="line"><span>-client ： 限制某些网口可以访问</span></span></code></pre></div>`,8)])])}const v=n(p,[["render",i]]);export{h as __pageData,v as default};
