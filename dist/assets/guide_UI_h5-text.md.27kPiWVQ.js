import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.B0izzCxm.js";const b=JSON.parse('{"title":"h5-text","description":"","frontmatter":{},"headers":[],"relativePath":"guide/UI/h5-text.md","filePath":"guide/UI/h5-text.md","lastUpdated":null}'),p={name:"guide/UI/h5-text.md"},l=e(`<h1 id="h5-text" tabindex="-1">h5-text <a class="header-anchor" href="#h5-text" aria-label="Permalink to &quot;h5-text&quot;">​</a></h1><h2 id="粗体" tabindex="-1">粗体 <a class="header-anchor" href="#粗体" aria-label="Permalink to &quot;粗体&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>font-weight: bold;  // 定义粗体字符</span></span>
<span class="line"><span>font-weight: normal;  // 默认值。定义标准的字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义由粗到细的字符，取值100到900：</span></span>
<span class="line"><span>font-weight: 400;  // 等同于normal</span></span>
<span class="line"><span>font-weight: 700;  // 等同于bold</span></span></code></pre></div><h2 id="缩进" tabindex="-1">缩进 <a class="header-anchor" href="#缩进" aria-label="Permalink to &quot;缩进&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>word-spacing: 10px;  // 设置英文单词之间的距离10</span></span>
<span class="line"><span>letter-spacing: 10px;  // 设置文本之间（每个字之间）的距离10px</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text-indent: 10px;  // 设置文本首行缩进(负数，隐藏)</span></span></code></pre></div><h2 id="下划线" tabindex="-1">下划线 <a class="header-anchor" href="#下划线" aria-label="Permalink to &quot;下划线&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>text-decoration: none;  // 取消有下划线的文本</span></span>
<span class="line"><span>text-decoration: overline;  // 设置文本头部上划线</span></span>
<span class="line"><span>text-decoration: underline;  // 设置文本底部下划线</span></span>
<span class="line"><span>text-decoration: line-thourgh;  // 设置文本中间出现一条删除线</span></span></code></pre></div><h2 id="换行" tabindex="-1">换行 <a class="header-anchor" href="#换行" aria-label="Permalink to &quot;换行&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>word-break: break-all;  // 只对英文起作用，以字母作为换行依据</span></span>
<span class="line"><span>word-break: keep-all;   // 只能在半角空格或连字符处换行</span></span>
<span class="line"><span>word-break: normal;    // 使用浏览器默认的换行规则</span></span>
<span class="line"><span></span></span>
<span class="line"><span>word-wrap: break-word;  // 只对英文起作用，以单词作为换行依据</span></span>
<span class="line"><span>white-space: pre-wrap;  // 只对中文起作用，强制换行，注意要写换行符</span></span>
<span class="line"><span>white-space: nowrap;  // 强制不换行，都起作用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;br&gt; // 强制换行，都起作用，可在任意位置</span></span></code></pre></div><h2 id="不换行" tabindex="-1">不换行 <a class="header-anchor" href="#不换行" aria-label="Permalink to &quot;不换行&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>white-space: nowrap;</span></span></code></pre></div><h2 id="文字渐变" tabindex="-1">文字渐变 <a class="header-anchor" href="#文字渐变" aria-label="Permalink to &quot;文字渐变&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>color: transparent;</span></span>
<span class="line"><span>background-image: linear-gradient(180deg, #85d6ff, #0d9aff 100%); // 垂直方向渐变</span></span>
<span class="line"><span>background-clip: text;</span></span></code></pre></div><h2 id="马赛克" tabindex="-1">马赛克 <a class="header-anchor" href="#马赛克" aria-label="Permalink to &quot;马赛克&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>color: transparent;</span></span>
<span class="line"><span>text-shadow: 0 0 10px rgba(0,0,0,0.5);</span></span></code></pre></div><h2 id="文字固定宽度-宽度内平均分布" tabindex="-1">文字固定宽度，宽度内平均分布 <a class="header-anchor" href="#文字固定宽度-宽度内平均分布" aria-label="Permalink to &quot;文字固定宽度，宽度内平均分布&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>width: 200px;</span></span>
<span class="line"><span>text-align: justify;</span></span>
<span class="line"><span>text-align-last: justify;</span></span>
<span class="line"><span>display: inline-block;</span></span></code></pre></div><h2 id="多余文字显示省略号" tabindex="-1">多余文字显示省略号 <a class="header-anchor" href="#多余文字显示省略号" aria-label="Permalink to &quot;多余文字显示省略号&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 一行文字:</span></span>
<span class="line"><span>overflow: hidden;</span></span>
<span class="line"><span>text-overflow:ellipsis;</span></span>
<span class="line"><span>white-space: nowrap;</span></span>
<span class="line"><span>width: 250px;</span></span>
<span class="line"><span>border: 1px solid red;</span></span>
<span class="line"><span>font-size: 30px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多行文字:</span></span>
<span class="line"><span>display: -webkit-box;</span></span>
<span class="line"><span>-webkit-box-orient: vertical;</span></span>
<span class="line"><span>-webkit-line-clamp: 3;</span></span>
<span class="line"><span>overflow: hidden;</span></span>
<span class="line"><span>width: 250px;</span></span>
<span class="line"><span>border: 1px solid red;</span></span>
<span class="line"><span>font-size: 30px;</span></span></code></pre></div><h2 id="对齐方式" tabindex="-1">对齐方式 <a class="header-anchor" href="#对齐方式" aria-label="Permalink to &quot;对齐方式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 块元素</span></span>
<span class="line"><span>text-align: left;</span></span>
<span class="line"><span>text-align: center;</span></span>
<span class="line"><span>text-align: right;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 行内块元素</span></span>
<span class="line"><span>vertical-align: top;</span></span>
<span class="line"><span>vertical-align: middle;</span></span>
<span class="line"><span>vertical-align: text-bottom;</span></span></code></pre></div>`,21),t=[l];function i(c,o,d,r,h,g){return n(),s("div",null,t)}const v=a(p,[["render",i]]);export{b as __pageData,v as default};
