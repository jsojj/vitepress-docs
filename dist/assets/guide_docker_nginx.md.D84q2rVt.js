import{_ as a,c as n,o as s,a3 as e}from"./chunks/framework.B0izzCxm.js";const u=JSON.parse('{"title":"前端项目部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/docker/nginx.md","filePath":"guide/docker/nginx.md","lastUpdated":1718272483000}'),l={name:"guide/docker/nginx.md"},p=e(`<h1 id="前端项目部署" tabindex="-1">前端项目部署 <a class="header-anchor" href="#前端项目部署" aria-label="Permalink to &quot;前端项目部署&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>直接安装启动。</li><li>利用docker安装nginx的镜像，启动nginx容器。</li><li><a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">下载</a></li></ul><h2 id="前端项目部署和访问流程" tabindex="-1">前端项目部署和访问流程 <a class="header-anchor" href="#前端项目部署和访问流程" aria-label="Permalink to &quot;前端项目部署和访问流程&quot;">​</a></h2><ul><li>一般前端项目的通用部署流程：前端分环境打包（dist目录文件）-》将dist上传到oss存储-》创建一个可以访问前端项目的域名-》将前端域名以及oss地址配置到nginx代理转发配置中-》配置域名的解析规则，将域名映射到nginx服务地址</li><li>一般前端项目的通用访问流程：在浏览器中访问前端项目对应的域名-》域名被解析为nginx服务的地址-》nginx根据server配置匹配当前域和端口名命中的server-》根据当前server中location的配置匹配到命中的路由规则-》根据当前路由的配置进行响应</li></ul><h2 id="多泳道" tabindex="-1">多泳道 <a class="header-anchor" href="#多泳道" aria-label="Permalink to &quot;多泳道&quot;">​</a></h2><ul><li>多泳道发布（Multi-lane Release）是一种软件发布策略，旨在：通过将应用程序的不同版本同时部署在多个独立环境（泳道）中来实现更安全、更稳定的发布过程。</li><li>典型的泳道包括<code>开发（development）、测试（testing）、预生产（staging）、生产（production）</code>。</li><li>nginx处理逻辑：匹配到<code>http://localhost:80</code> -》将/对应的路由规则匹配到的路由拦截-》将请求代理到<code>http://192.168.1.8:5500/xxx/</code> -》拿到请求结果后，直接将请求结果返回</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    # 处理 http://127.0.0.1:80  | http://localhost:80 请求</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        # 代理到 http://192.168.1.8:5500/xxx/</span></span>
<span class="line"><span>        proxy_pass proxy_pass http://192.168.1.8:5500/$lane$uri;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>    error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,8),t=[p];function i(o,r,c,d,h,_){return s(),n("div",null,t)}const x=a(l,[["render",i]]);export{u as __pageData,x as default};
