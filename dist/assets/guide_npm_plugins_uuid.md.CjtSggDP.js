import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.B0izzCxm.js";const g=JSON.parse('{"title":"生成随机字符串","description":"","frontmatter":{},"headers":[],"relativePath":"guide/npm/plugins/uuid.md","filePath":"guide/npm/plugins/uuid.md","lastUpdated":1721289175000}'),n={name:"guide/npm/plugins/uuid.md"},e=t(`<h1 id="生成随机字符串" tabindex="-1">生成随机字符串 <a class="header-anchor" href="#生成随机字符串" aria-label="Permalink to &quot;生成随机字符串&quot;">​</a></h1><ul><li><a href="https://www.npmjs.com/package/uuid" target="_blank" rel="noreferrer">npm</a></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uuid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { v4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uuidv4, validate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uuidValidate } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;uuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uuidv4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成 ⇨ &#39;9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uuidValidate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 校验 ⇨ true</span></span></code></pre></div>`,4),l=[e];function p(h,d,k,r,u,o){return a(),i("div",null,l)}const E=s(n,[["render",p]]);export{g as __pageData,E as default};
