import{_ as s,c as a,o as i,a3 as e}from"./chunks/framework.B0izzCxm.js";const g=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"guide/devOps/CICD/jenkins.md","filePath":"guide/devOps/CICD/jenkins.md","lastUpdated":1722913783000}'),n={name:"guide/devOps/CICD/jenkins.md"},l=e(`<h1 id="jenkins" tabindex="-1">Jenkins <a class="header-anchor" href="#jenkins" aria-label="Permalink to &quot;Jenkins&quot;">​</a></h1><ul><li><a href="https://www.jenkins.io/download/" target="_blank" rel="noreferrer">下载Jenkins</a></li><li><a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noreferrer">下载java包</a></li></ul><h2 id="windows下安装jenkins" tabindex="-1">Windows下安装jenkins <a class="header-anchor" href="#windows下安装jenkins" aria-label="Permalink to &quot;Windows下安装jenkins&quot;">​</a></h2><h3 id="配置java环境" tabindex="-1">配置Java环境 <a class="header-anchor" href="#配置java环境" aria-label="Permalink to &quot;配置Java环境&quot;">​</a></h3><ol><li>下载java包，选择JDK17 Windows版<code>x64 Compressed Archive</code>zip包解压，放在D盘</li><li>新建系统变量为<code>JAVA_HOME</code>，变量值输入前面解压的文件地址。安装jenkins会用到路径</li><li>新建系统变量为<code>CLASSPATH</code>，变量值输入<code>.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar</code></li><li>编辑系统变量<code>Path</code>，变量值输入一行<code>%JAVA_HOME%\\bin</code>一行<code>%JAVA_HOME%\\jre\\bin</code></li></ol><h3 id="验证是否安装成功" tabindex="-1">验证是否安装成功 <a class="header-anchor" href="#验证是否安装成功" aria-label="Permalink to &quot;验证是否安装成功&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -version</span></span></code></pre></div><h3 id="安装jenkins" tabindex="-1">安装jenkins <a class="header-anchor" href="#安装jenkins" aria-label="Permalink to &quot;安装jenkins&quot;">​</a></h3><ol><li>双击安装文件<code>.msi</code>进行安装</li><li>安装在D盘</li><li>配置端口号<code>9090</code></li><li>选择本地安装<code>Run service as LocalSystem (not recommended)</code></li></ol><h3 id="登录解锁-jekins" tabindex="-1">登录解锁 Jekins <a class="header-anchor" href="#登录解锁-jekins" aria-label="Permalink to &quot;登录解锁 Jekins&quot;">​</a></h3><ol><li>访问地址<code>localhost:9090</code></li><li>打开路径<code>C:\\ProgramData\\Jenkins\\.jenkins\\secrets\\initialAdminPassword</code>，复制密码进行登录</li></ol><h2 id="启动关闭" tabindex="-1">启动关闭 <a class="header-anchor" href="#启动关闭" aria-label="Permalink to &quot;启动关闭&quot;">​</a></h2><ul><li>用管理员身份启动cmd，否则会报系统错误5</li><li>进入jenkins安装根目录</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切到D:\\Jenkins</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jenkins</span></span></code></pre></div>`,14),t=[l];function o(d,h,r,c,k,p){return i(),a("div",null,t)}const _=s(n,[["render",o]]);export{g as __pageData,_ as default};
