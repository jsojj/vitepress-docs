import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.B0izzCxm.js";const u=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"guide/http/server/nginx.md","filePath":"guide/http/server/nginx.md","lastUpdated":1722414140000}'),l={name:"guide/http/server/nginx.md"},e=p(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><ul><li><a href="https://nginx.org/en/" target="_blank" rel="noreferrer">官网</a></li><li><a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">下载地址</a>，稳定版<code>Stable version</code>，windows版<code>nginx/Windows-版本号</code></li></ul><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><ul><li>方法一：双击nginx.exe</li><li>方法二：打开<code>cmd</code>命令窗口，切换到nginx解压目录下（不能有中文），输入命令<code>start nginx</code> ，回车即可</li><li>检查是否安装成功：访问网址<code>http://localhost:80</code></li></ul><h2 id="关闭" tabindex="-1">关闭 <a class="header-anchor" href="#关闭" aria-label="Permalink to &quot;关闭&quot;">​</a></h2><ul><li>前提必须要在Nginx的安装包目录下，否则无法找到Nginx。</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 快速停止nginx，可能会导致数据没有完全保存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 完整有序的停止nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span></code></pre></div><h2 id="windows下配置nginx" tabindex="-1">Windows下配置nginx <a class="header-anchor" href="#windows下配置nginx" aria-label="Permalink to &quot;Windows下配置nginx&quot;">​</a></h2><ol><li>先解压下载的nginx压缩包。</li><li>然后将前端项目打包后的文件放到<code>\\nginx-1.26.1\\html</code>下。</li><li>最后打开<code>\\nginx-1.26.1\\conf\\nginx.conf</code>文件，对<code>server</code>进行修改配置。</li></ol><h3 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h3><ul><li>服务端如果使用nodejs运行服务，由于端口不能同时多个服务占用，而服务器中可能又是多个网站，那么可以使用 Nginx 做反向代理。</li><li><code>proxy_pass指令</code>用来设置被代理服务器的地址。可以是主机名称、IP地址加端口号等形式。</li><li><code>proxy_set_header</code>允许重新定义或添加字段传递给代理服务器的请求头。可以包含文本、变量和它们的组合。</li></ul><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#user  root;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  server {</span></span>
<span class="line"><span>    # 页面访问端口，nginx服务监听8080端口，默认80端口</span></span>
<span class="line"><span>    listen       8080;</span></span>
<span class="line"><span>    # 页面访问域名localhost，也可以是192.168.117.37</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 配置后端服务接口跨域：</span></span>
<span class="line"><span>    # 如果请求地址中包含cs的话，就转接到http://xx.xxx.xx.xxxx:8080</span></span>
<span class="line"><span>    location /cs/ {</span></span>
<span class="line"><span>      proxy_pass http://xx.xxx.xx.xxxx:8080;</span></span>
<span class="line"><span>      proxy_set_header Host $proxy_host;</span></span>
<span class="line"><span>      # proxy_set_header Connection close;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # 默认所有服务转接的接口地址和端口号</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      proxy_pass http://xx.xxx.xx.xxxx:8080;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # error_page  404              /404.html;</span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>      root   html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="部署前端项目" tabindex="-1">部署前端项目 <a class="header-anchor" href="#部署前端项目" aria-label="Permalink to &quot;部署前端项目&quot;">​</a></h3><h4 id="单网站单服务器配置" tabindex="-1">单网站单服务器配置 <a class="header-anchor" href="#单网站单服务器配置" aria-label="Permalink to &quot;单网站单服务器配置&quot;">​</a></h4><ul><li>部署后的前端项目地址：<code>http://localhost:8080</code>或<code>http://192.168.117.37:8080</code></li></ul><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#user  root;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  server {</span></span>
<span class="line"><span>    # 页面访问端口：nginx服务监听8080端口，默认80端口</span></span>
<span class="line"><span>    listen       8080;</span></span>
<span class="line"><span>    # 页面访问域名：localhost，也可以是192.168.117.37</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 路由</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      # 访问根目录root：默认是\\nginx-x.xx.x\\html，这里是打包的dist目录下的html</span></span>
<span class="line"><span>      root   html/dist;</span></span>
<span class="line"><span>      # 入口文件：可以接收index、index.html、index.htm文件</span></span>
<span class="line"><span>      index  index.html index.htm;</span></span>
<span class="line"><span>      # 项目上线，需要配置\`try_files\`，否则刷新会出现 404</span></span>
<span class="line"><span>      try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # error_page  404              /404.html;</span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>      root   html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="多网站单服务器配置" tabindex="-1">多网站单服务器配置 <a class="header-anchor" href="#多网站单服务器配置" aria-label="Permalink to &quot;多网站单服务器配置&quot;">​</a></h4><ul><li>部署多个域名地址</li></ul><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#user  root;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  server {</span></span>
<span class="line"><span>    # 页面访问端口：默认80端口</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    # 页面访问域名</span></span>
<span class="line"><span>    server_name  www.baidu.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 路由</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      # 网站的静态资源目录，css，js，image文件等</span></span>
<span class="line"><span>      root   /root/www/baidu;</span></span>
<span class="line"><span>      # 网站首页</span></span>
<span class="line"><span>      index  index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  server {</span></span>
<span class="line"><span>    # 页面访问端口：默认80端口</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    # 页面访问域名</span></span>
<span class="line"><span>    server_name  www.google.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 路由</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      # 网站的静态资源目录，css，js，image文件等</span></span>
<span class="line"><span>      root   /root/www/google;</span></span>
<span class="line"><span>      # 网站首页</span></span>
<span class="line"><span>      index  index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,19),i=[e];function t(c,o,r,h,d,x){return a(),n("div",null,i)}const k=s(l,[["render",t]]);export{u as __pageData,k as default};
