import{_ as e,c as o,o as l,a3 as r}from"./chunks/framework.B0izzCxm.js";const f=JSON.parse('{"title":"vue3 新特性","description":"","frontmatter":{},"headers":[],"relativePath":"guide/frame-vue/vue3/index.md","filePath":"guide/frame-vue/vue3/index.md","lastUpdated":1719562339000}'),a={name:"guide/frame-vue/vue3/index.md"},i=r('<h1 id="vue3-新特性" tabindex="-1">vue3 新特性 <a class="header-anchor" href="#vue3-新特性" aria-label="Permalink to &quot;vue3 新特性&quot;">​</a></h1><h2 id="相关技术栈" tabindex="-1">相关技术栈 <a class="header-anchor" href="#相关技术栈" aria-label="Permalink to &quot;相关技术栈&quot;">​</a></h2><ul><li><a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">Vue3</a></li><li><a href="https://www.pnpm.cn/" target="_blank" rel="noreferrer">包管理工具pnpm</a></li><li><a href="https://pnpm.io/zh/workspaces" target="_blank" rel="noreferrer">工作空间pnpm monorepo</a></li><li><a href="https://vitejs.cn/vite3-cn/" target="_blank" rel="noreferrer">打包构建工具vite</a></li><li><a href="https://pinia.vuejs.org/zh/" target="_blank" rel="noreferrer">集中状态管理pinia</a></li><li><a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">路由vue-router@4</a></li><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">脚本语言typescript</a></li><li><a href="https://taro-docs.jd.com/docs/vue3" target="_blank" rel="noreferrer">跨端跨框架taro</a></li><li><a href="https://www.vueusejs.com/" target="_blank" rel="noreferrer">工具VueUse</a></li><li><a href="https://inhiblab-core.gitee.io/docs/hooks/" target="_blank" rel="noreferrer">工具vueHook Plus</a></li><li><a href="https://icon-sets.iconify.design/" target="_blank" rel="noreferrer">图标Iconify</a></li><li><a href="https://www.tailwindcss.cn/" target="_blank" rel="noreferrer">工具集Tailwind Css</a></li><li><a href="https://cn.vitest.dev/" target="_blank" rel="noreferrer">vitest测试</a></li><li><a href="https://element-plus.org/zh-CN/" target="_blank" rel="noreferrer">UI Element Plus</a></li><li><a href="https://nutui.jd.com/taro/vue/4x/#/zh-CN/" target="_blank" rel="noreferrer">UI 小程序组件库 NutUI</a></li></ul><h2 id="全局-api-移动到应用对象" tabindex="-1">全局 API 移动到应用对象 <a class="header-anchor" href="#全局-api-移动到应用对象" aria-label="Permalink to &quot;全局 API 移动到应用对象&quot;">​</a></h2><ul><li><code>app.component</code>全局组件</li><li><code>app.config</code>全局配置项，不建议频繁使用</li><li><code>app.directive</code>全局指令</li><li><code>app.mount</code>挂载应用</li><li><code>app.unmount</code>卸载应用</li><li><code>app.use</code>全局安装插件</li></ul><h2 id="vue3-非兼容性改变" tabindex="-1">vue3 非兼容性改变 <a class="header-anchor" href="#vue3-非兼容性改变" aria-label="Permalink to &quot;vue3 非兼容性改变&quot;">​</a></h2><ul><li><p><a href="https://v3-migration.vuejs.org/zh/breaking-changes/" target="_blank" rel="noreferrer">官方文档</a></p></li><li><p>过度类名<code>v-enter</code>修改为<code>v-enter-from</code>，过度类名<code>v-leave</code>修改为<code>v-leave-from</code></p></li><li><p><code>KeyCode</code>作为<code>v-on</code>修饰符的支持 (vue3 不允许<code>@keyup.13</code>)</p></li><li><p><code>v-model</code>指令在组件上的使用已经被重新设计，替换掉了 v-bind.sync (vue3 不允许<code>:sum.sync=&quot;sum&quot;</code>)</p></li><li><p><code>v-if</code>和<code>v-for</code>在同一个元素身上使用时的优先级发生了变化 (vue3 允许<code>v-if</code>和<code>v-for</code>出现在同一个标签，<code>v-if</code>优先级更高)</p></li><li><p>移除了<code>$on、$off、$once</code>实例方法</p></li><li><p>移除了过滤器<code>filter</code></p></li><li><p>移除了<code>$children</code>实例<code>propert</code></p></li></ul><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><ul><li>生命周期、生命周期函数、生命周期钩子</li></ul><h3 id="创建" tabindex="-1">创建 <a class="header-anchor" href="#创建" aria-label="Permalink to &quot;创建&quot;">​</a></h3><ul><li><p>v2-创建前<code>beforeCreate()</code></p></li><li><p>v2-创建完毕<code>created()</code></p></li><li><p>v3-从无到有创建组件<code>setup()</code></p></li></ul><h3 id="挂载" tabindex="-1">挂载 <a class="header-anchor" href="#挂载" aria-label="Permalink to &quot;挂载&quot;">​</a></h3><ul><li><p>渲染页面数据，子组件先挂载完父组件再挂载</p></li><li><p>v2-挂载前<code>beforeMount()</code></p></li><li><p>v2-挂载完毕<code>mounted()</code></p></li><li><p>v3-挂载前<code>onBeforeMount(() =&gt; {})</code></p></li><li><p>v3-挂载完毕<code>onMounted(() =&gt; {})</code></p></li></ul><h3 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-label="Permalink to &quot;更新&quot;">​</a></h3><ul><li><p>更新页面数据</p></li><li><p>v2-更新前<code>beforeUpdate()</code></p></li><li><p>v2-更新完毕<code>updated()</code></p></li><li><p>v3-更新前<code>onBeforeUpdate(() =&gt; {})</code></p></li><li><p>v3-更新完毕<code>onUpdated(() =&gt; {})</code></p></li></ul><h3 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h3><ul><li><p>路由切换或使用<code>v-if</code>渲染</p></li><li><p>v2-销毁前<code>beforeDestroy()</code></p></li><li><p>v2-销毁完毕<code>destroyed()</code></p></li><li><p>v3-卸载前<code>onBeforeUnmount(() =&gt; {})</code></p></li><li><p>v3-卸载完毕<code>onUnmounted(() =&gt; {})</code></p></li></ul><h2 id="源码学习" tabindex="-1">源码学习 <a class="header-anchor" href="#源码学习" aria-label="Permalink to &quot;源码学习&quot;">​</a></h2><ul><li>patchVnode更新节点</li></ul><ol><li>vnode和oldvnode都指向同一个对象</li><li>针对简单的文本节点，直接替换vnode.text</li><li>oldvnode 有子节点，vnode没有子节点，delete</li><li>oldvnode 没有子节点，vnode有子节点，创建一个新节点</li><li>vnode和oldvnode都有子节点，updateChildren</li></ol><ul><li>vue3的diff算法：非全量（有静态标记tag）、全量（最长递增子序列）</li></ul>',21),t=[i];function d(n,c,p,u,h,s){return l(),o("div",null,t)}const b=e(a,[["render",d]]);export{f as __pageData,b as default};
