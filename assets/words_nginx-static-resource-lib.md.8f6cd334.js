import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.52d8a8a6.js";const d=JSON.parse('{"title":"一个基于Nginx的静态资源库","description":"","frontmatter":{"title":"一个基于Nginx的静态资源库"},"headers":[],"relativePath":"words/nginx-static-resource-lib.md","filePath":"words/nginx-static-resource-lib.md"}'),p={name:"words/nginx-static-resource-lib.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2018-04-14 17:58:36</p></div><p><a href="https://baike.baidu.com/item/nginx/3817705" target="_blank" rel="noreferrer">Nginx</a>是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。在学习Nginx的过程中，开发了一个简单的静态资源库<a href="https://github.com/ourvibes/BirdNest" target="_blank" rel="noreferrer">BirdNest</a>。😃</p><p>核心代码</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// birdnest.js</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">doc</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">frag</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> doc.</span><span style="color:#B392F0;">createDocumentFragment</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$container</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> doc.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hero&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$footer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> doc.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;footer&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">LOG</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> console.info.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(console)</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">IS_DEV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">DEV_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../app/json/db-test.json&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PROD_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../app/json/db.json&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">IS_DEV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">DEV_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PROD_URL</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">WORKER_PATH</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../app/js/work.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CHUNK_COUNT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">OPEN_GPU_TURBO</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Symbol.</span><span style="color:#B392F0;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;addStyleWillChange&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CLOSE_GPU_TURBO</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Symbol.</span><span style="color:#B392F0;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;removeStyleWillChange&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CONFIG</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  year: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  author: </span><span style="color:#9ECBFF;">&quot; Chiang &quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  copyrightSign: </span><span style="color:#9ECBFF;">&quot;Copyright © &quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  rights: </span><span style="color:#9ECBFF;">&quot; All rights reserved &quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  email: </span><span style="color:#9ECBFF;">&quot;. jiangqizhi@aliyun.com&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initFooter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">copyrightSign</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">year</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">author</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">rights</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">email</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CONFIG</span></span>
<span class="line"><span style="color:#E1E4E8;">  $footer.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">copyrightSign</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">year</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">author</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">copyright</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">email</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createEle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">tagName</span><span style="color:#E1E4E8;"> , </span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> doc.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(tagName)</span></span>
<span class="line"><span style="color:#E1E4E8;">  Reflect.</span><span style="color:#B392F0;">ownKeys</span><span style="color:#E1E4E8;">(props).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">k</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dom[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> props[k]</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> dom</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">fns</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fns.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">b</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args)))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  frag.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">createEle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    className: </span><span style="color:#9ECBFF;">&quot;row animated fadeInUp&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    innerHTML: </span><span style="color:#9ECBFF;">\`&lt;div class=&quot;col-offset-2&quot;&gt;Something is wrong here...&lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  }))</span></span>
<span class="line"><span style="color:#E1E4E8;">  $container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(frag)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initFooter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">frame</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createEle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    className: </span><span style="color:#9ECBFF;">&quot;row animated fadeInUp&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    innerHTML: _.innerHTML</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> frag.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(_)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pack</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">compose</span><span style="color:#E1E4E8;">(append, create)</span></span>
<span class="line"><span style="color:#E1E4E8;">  list.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(pack)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(frag)</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">requestAnimationFrame</span><span style="color:#E1E4E8;">(insert)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gpuTurbo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">action</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">eventMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    OPEN_GPU_TURBO: </span><span style="color:#9ECBFF;">&#39;contents, opacity, transform, scroll-position&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    CLOSE_GPU_TURBO: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  $container.style.willChange </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> eventMap[action]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> fn </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, delay)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [] }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> list.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (len </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">gpuTurbo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">OPEN_GPU_TURBO</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (len </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CHUNK_COUNT</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">frame</span><span style="color:#E1E4E8;">(list)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">gpuTurbo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CLOSE_GPU_TURBO</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initFooter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slices</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> list.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> len, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Promise</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">defer</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">frame</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">slices</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">))),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">defer</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">frame</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">slices</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">)), </span><span style="color:#79B8FF;">FPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">defer</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">frame</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">slices</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">)), </span><span style="color:#79B8FF;">FPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">defer</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">frame</span><span style="color:#E1E4E8;">(list), </span><span style="color:#79B8FF;">FPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">900</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      ])</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">gpuTurbo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CLOSE_GPU_TURBO</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">initFooter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">io</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IntersectionObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">observers</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  observers.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">ele</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (ele.intersectionRatio </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> ele.intersectionRatio </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      ele.target.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;logo-content animated fadeInUp&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      ele.target.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;logo-content&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  io.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(doc.</span><span style="color:#B392F0;">getElementsByClassName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;logo-content&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">observer</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">worker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">WORKER_PATH</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">($)</span></span>
<span class="line"><span style="color:#E1E4E8;">  worker.</span><span style="color:#B392F0;">onmessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(e.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">terminate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  worker.</span><span style="color:#B392F0;">onerror</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    worker.</span><span style="color:#B392F0;">terminate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">args</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arguments</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">!!</span><span style="color:#E1E4E8;">timer</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clearTimeout</span><span style="color:#E1E4E8;">(timer)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timer</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">      fn.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(self, args)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, delay)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">fetch) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Sorry. Your browser does not support fetch.&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ( (resp.status </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> resp.status </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> resp.status </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">304</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> resp.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">onload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">requestAnimationFrame</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(loader, </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// birdnest.js</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">doc</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">frag</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> doc.</span><span style="color:#6F42C1;">createDocumentFragment</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$container</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> doc.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hero&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$footer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> doc.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;footer&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">LOG</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> console.info.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(console)</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">IS_DEV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">DEV_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../app/json/db-test.json&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PROD_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../app/json/db.json&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">IS_DEV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">DEV_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PROD_URL</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">WORKER_PATH</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../app/js/work.js&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CHUNK_COUNT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OPEN_GPU_TURBO</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Symbol.</span><span style="color:#6F42C1;">for</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;addStyleWillChange&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CLOSE_GPU_TURBO</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Symbol.</span><span style="color:#6F42C1;">for</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;removeStyleWillChange&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CONFIG</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  year: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFullYear</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  author: </span><span style="color:#032F62;">&quot; Chiang &quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  copyrightSign: </span><span style="color:#032F62;">&quot;Copyright © &quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  rights: </span><span style="color:#032F62;">&quot; All rights reserved &quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  email: </span><span style="color:#032F62;">&quot;. jiangqizhi@aliyun.com&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initFooter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">copyrightSign</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">year</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">author</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">rights</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">email</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CONFIG</span></span>
<span class="line"><span style="color:#24292E;">  $footer.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">copyrightSign</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">year</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">author</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">copyright</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">email</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createEle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">tagName</span><span style="color:#24292E;"> , </span><span style="color:#E36209;">props</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> doc.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(tagName)</span></span>
<span class="line"><span style="color:#24292E;">  Reflect.</span><span style="color:#6F42C1;">ownKeys</span><span style="color:#24292E;">(props).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">k</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    dom[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> props[k]</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dom</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">compose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">fns</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fns.</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">b</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args)))</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  frag.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">createEle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    className: </span><span style="color:#032F62;">&quot;row animated fadeInUp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    innerHTML: </span><span style="color:#032F62;">\`&lt;div class=&quot;col-offset-2&quot;&gt;Something is wrong here...&lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">  }))</span></span>
<span class="line"><span style="color:#24292E;">  $container.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(frag)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">initFooter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">frame</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">_</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createEle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    className: </span><span style="color:#032F62;">&quot;row animated fadeInUp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    innerHTML: _.innerHTML</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">append</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">_</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> frag.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(_)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pack</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">compose</span><span style="color:#24292E;">(append, create)</span></span>
<span class="line"><span style="color:#24292E;">  list.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(pack)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $container.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(frag)</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">requestAnimationFrame</span><span style="color:#24292E;">(insert)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gpuTurbo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">action</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">eventMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    OPEN_GPU_TURBO: </span><span style="color:#032F62;">&#39;contents, opacity, transform, scroll-position&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    CLOSE_GPU_TURBO: </span><span style="color:#032F62;">&#39;auto&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  $container.style.willChange </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> eventMap[action]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> fn </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }, delay)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [] }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> list.</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">gpuTurbo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">OPEN_GPU_TURBO</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (len </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CHUNK_COUNT</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">frame</span><span style="color:#24292E;">(list)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">gpuTurbo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CLOSE_GPU_TURBO</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initFooter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slices</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">p</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> list.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> len, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Promise</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">defer</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">frame</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">slices</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">))),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">defer</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">frame</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">slices</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">)), </span><span style="color:#005CC5;">FPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">defer</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">frame</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">slices</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.3</span><span style="color:#24292E;">)), </span><span style="color:#005CC5;">FPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">defer</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">frame</span><span style="color:#24292E;">(list), </span><span style="color:#005CC5;">FPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">900</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      ])</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">gpuTurbo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CLOSE_GPU_TURBO</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">initFooter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">io</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IntersectionObserver</span><span style="color:#24292E;">((</span><span style="color:#E36209;">observers</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  observers.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">ele</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (ele.intersectionRatio </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> ele.intersectionRatio </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      ele.target.className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;logo-content animated fadeInUp&quot;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      ele.target.className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;logo-content&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  io.</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(doc.</span><span style="color:#6F42C1;">getElementsByClassName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;logo-content&#39;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">observer</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">$</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">worker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Worker</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">WORKER_PATH</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  worker.</span><span style="color:#6F42C1;">postMessage</span><span style="color:#24292E;">($)</span></span>
<span class="line"><span style="color:#24292E;">  worker.</span><span style="color:#6F42C1;">onmessage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(e.data)</span></span>
<span class="line"><span style="color:#24292E;">    worker.</span><span style="color:#6F42C1;">terminate</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  worker.</span><span style="color:#6F42C1;">onerror</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    worker.</span><span style="color:#6F42C1;">terminate</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">args</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arguments</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">!!</span><span style="color:#24292E;">timer</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timer)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      timer</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">      fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(self, args)</span></span>
<span class="line"><span style="color:#24292E;">    }, delay)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loader</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">fetch) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Sorry. Your browser does not support fetch.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resp</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ( (resp.status </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> resp.status </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> resp.status </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">304</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> resp.</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">onload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">requestAnimationFrame</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(loader, </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// work.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { name, url } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> to</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (name </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> url) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;div class=&quot;col-2 col-offset-2&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;span class=&quot;icon-leaf&quot;&gt;&lt;/span&gt; </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;span&gt;\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;div class=&quot;col-4 col-offset-2&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;a href=&quot;\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;\${</span><span style="color:#E1E4E8;">url</span><span style="color:#9ECBFF;">}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">ip</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [] } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">item._key) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        item._key </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item.key.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item.url </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> item.url.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;{ip}&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        item.url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item.url.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">{ip}</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, ip)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">item.innerHTML) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        item.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">(y)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (x._key </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> y._key) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (x._key </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> y._key) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">handleData</span><span style="color:#E1E4E8;">(e.data))</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// work.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;message&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">to</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { name, url } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> to</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (name </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> url) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;div class=&quot;col-2 col-offset-2&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;span class=&quot;icon-leaf&quot;&gt;&lt;/span&gt; </span></span>
<span class="line"><span style="color:#032F62;">                &lt;span&gt;\${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#032F62;">              &lt;/div&gt;</span></span>
<span class="line"><span style="color:#032F62;">              &lt;div class=&quot;col-4 col-offset-2&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;a href=&quot;\${</span><span style="color:#24292E;">url</span><span style="color:#032F62;">}&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;\${</span><span style="color:#24292E;">url</span><span style="color:#032F62;">}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#032F62;">              &lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">ip</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [] } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">format</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">item._key) {</span></span>
<span class="line"><span style="color:#24292E;">        item._key </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.key.</span><span style="color:#6F42C1;">toLowerCase</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item.url </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> item.url.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;{ip}&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        item.url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.url.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/{ip}/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, ip)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">item.innerHTML) {</span></span>
<span class="line"><span style="color:#24292E;">        item.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    list.</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">((</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">(x)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">(y)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (x._key </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> y._key) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (x._key </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> y._key) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> data</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">postMessage</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">handleData</span><span style="color:#24292E;">(e.data))</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>下面是我在学习Nginx的时候，对nginx.conf的配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># cpu核心数</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_processes  auto;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 更改worker进程的最大打开文件数限制</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_rlimit_nofile 204800;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">events {</span></span>
<span class="line"><span style="color:#e1e4e8;">  worker_connections  102400;</span></span>
<span class="line"><span style="color:#e1e4e8;">  multi_accept on; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">     </span></span>
<span class="line"><span style="color:#e1e4e8;">  # 解析type</span></span>
<span class="line"><span style="color:#e1e4e8;">  include       mime.types;</span></span>
<span class="line"><span style="color:#e1e4e8;">  default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  charset uft-8;</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  #请求数量控制，每秒20个</span></span>
<span class="line"><span style="color:#e1e4e8;">  limit_req_zone $binary_remote_addr zone=one:10m rate=20r/s;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  #并发限制30个</span></span>
<span class="line"><span style="color:#e1e4e8;">  limit_conn_zone $binary_remote_addr zone=addr:10m;</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  server_names_hash_bucket_size 128;</span></span>
<span class="line"><span style="color:#e1e4e8;">  client_header_buffer_size 2k;</span></span>
<span class="line"><span style="color:#e1e4e8;">  large_client_header_buffers 4 4k;</span></span>
<span class="line"><span style="color:#e1e4e8;">  client_max_body_size 8m;</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  server_tokens off; </span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  access_log off; </span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  sendfile on; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  # 数据包里发送所有头文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  tcp_nopush on; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  # 不缓存数据，一段一段的发送</span></span>
<span class="line"><span style="color:#e1e4e8;">  tcp_nodelay on; </span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">  keepalive_timeout 60;</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  fastcgi_connect_timeout 300;</span></span>
<span class="line"><span style="color:#e1e4e8;">  fastcgi_send_timeout 300;</span></span>
<span class="line"><span style="color:#e1e4e8;">  fastcgi_read_timeout 300;</span></span>
<span class="line"><span style="color:#e1e4e8;">  fastcgi_buffer_size 64k;</span></span>
<span class="line"><span style="color:#e1e4e8;">  fastcgi_buffers 4 64k;</span></span>
<span class="line"><span style="color:#e1e4e8;">  fastcgi_busy_buffers_size 128k;</span></span>
<span class="line"><span style="color:#e1e4e8;">  fastcgi_temp_file_write_size 128k;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  open_file_cache max=204800 inactive=20s;</span></span>
<span class="line"><span style="color:#e1e4e8;">  open_file_cache_min_uses 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">  open_file_cache_valid 30s;</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  gzip on;</span></span>
<span class="line"><span style="color:#e1e4e8;">  gzip_min_length  1k;</span></span>
<span class="line"><span style="color:#e1e4e8;">  gzip_buffers     4 16k;</span></span>
<span class="line"><span style="color:#e1e4e8;">  gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">  gzip_types    text/plain application/x-javascript text/css application/xml;</span></span>
<span class="line"><span style="color:#e1e4e8;">  gzip_vary on;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  server {</span></span>
<span class="line"><span style="color:#e1e4e8;">    listen       80;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    server_name  localhost;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    limit_req  zone=one burst=5;</span></span>
<span class="line"><span style="color:#e1e4e8;">    limit_conn addr 30;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">      root    html;</span></span>
<span class="line"><span style="color:#e1e4e8;">      expires 6h;</span></span>
<span class="line"><span style="color:#e1e4e8;">      index   index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location ~ .*\\.(app|ico|gif|bmp|jpg|jpeg|png|mp3|mid|wma|mp4|swf|flv|rar|zip|txt|doc|ppt|xls|pdf|json|svg|ttf|eot|otf|woff)$ {</span></span>
<span class="line"><span style="color:#e1e4e8;">      root    static; </span></span>
<span class="line"><span style="color:#e1e4e8;">      expires 7d;</span></span>
<span class="line"><span style="color:#e1e4e8;">      # 解决跨域问题</span></span>
<span class="line"><span style="color:#e1e4e8;">      proxy_set_header   Cookie $http_cookie;  </span></span>
<span class="line"><span style="color:#e1e4e8;">      add_header Access-Control-Allow-Origin *;  </span></span>
<span class="line"><span style="color:#e1e4e8;">      add_header Access-Control-Allow-Headers Content-Type;</span></span>
<span class="line"><span style="color:#e1e4e8;">      add_header Access-Control-Allow-Methods GET,POST,OPTIONS;  </span></span>
<span class="line"><span style="color:#e1e4e8;">      add_header Access-Control-Allow-Credentials true;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location ~ .*\\.(css|js)$ {</span></span>
<span class="line"><span style="color:#e1e4e8;">      root    static;</span></span>
<span class="line"><span style="color:#e1e4e8;">      expires 30m;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location = /50x.html {</span></span>
<span class="line"><span style="color:#e1e4e8;">      root   html;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># cpu核心数</span></span>
<span class="line"><span style="color:#24292e;">worker_processes  auto;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 更改worker进程的最大打开文件数限制</span></span>
<span class="line"><span style="color:#24292e;">worker_rlimit_nofile 204800;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">  worker_connections  102400;</span></span>
<span class="line"><span style="color:#24292e;">  multi_accept on; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">     </span></span>
<span class="line"><span style="color:#24292e;">  # 解析type</span></span>
<span class="line"><span style="color:#24292e;">  include       mime.types;</span></span>
<span class="line"><span style="color:#24292e;">  default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  charset uft-8;</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  #请求数量控制，每秒20个</span></span>
<span class="line"><span style="color:#24292e;">  limit_req_zone $binary_remote_addr zone=one:10m rate=20r/s;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  #并发限制30个</span></span>
<span class="line"><span style="color:#24292e;">  limit_conn_zone $binary_remote_addr zone=addr:10m;</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  server_names_hash_bucket_size 128;</span></span>
<span class="line"><span style="color:#24292e;">  client_header_buffer_size 2k;</span></span>
<span class="line"><span style="color:#24292e;">  large_client_header_buffers 4 4k;</span></span>
<span class="line"><span style="color:#24292e;">  client_max_body_size 8m;</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  server_tokens off; </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  access_log off; </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  sendfile on; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  # 数据包里发送所有头文件</span></span>
<span class="line"><span style="color:#24292e;">  tcp_nopush on; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  # 不缓存数据，一段一段的发送</span></span>
<span class="line"><span style="color:#24292e;">  tcp_nodelay on; </span></span>
<span class="line"><span style="color:#24292e;">   </span></span>
<span class="line"><span style="color:#24292e;">  keepalive_timeout 60;</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  fastcgi_connect_timeout 300;</span></span>
<span class="line"><span style="color:#24292e;">  fastcgi_send_timeout 300;</span></span>
<span class="line"><span style="color:#24292e;">  fastcgi_read_timeout 300;</span></span>
<span class="line"><span style="color:#24292e;">  fastcgi_buffer_size 64k;</span></span>
<span class="line"><span style="color:#24292e;">  fastcgi_buffers 4 64k;</span></span>
<span class="line"><span style="color:#24292e;">  fastcgi_busy_buffers_size 128k;</span></span>
<span class="line"><span style="color:#24292e;">  fastcgi_temp_file_write_size 128k;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  open_file_cache max=204800 inactive=20s;</span></span>
<span class="line"><span style="color:#24292e;">  open_file_cache_min_uses 1;</span></span>
<span class="line"><span style="color:#24292e;">  open_file_cache_valid 30s;</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  gzip on;</span></span>
<span class="line"><span style="color:#24292e;">  gzip_min_length  1k;</span></span>
<span class="line"><span style="color:#24292e;">  gzip_buffers     4 16k;</span></span>
<span class="line"><span style="color:#24292e;">  gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#24292e;">  gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#24292e;">  gzip_types    text/plain application/x-javascript text/css application/xml;</span></span>
<span class="line"><span style="color:#24292e;">  gzip_vary on;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  server {</span></span>
<span class="line"><span style="color:#24292e;">    listen       80;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    server_name  localhost;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    limit_req  zone=one burst=5;</span></span>
<span class="line"><span style="color:#24292e;">    limit_conn addr 30;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location / {</span></span>
<span class="line"><span style="color:#24292e;">      root    html;</span></span>
<span class="line"><span style="color:#24292e;">      expires 6h;</span></span>
<span class="line"><span style="color:#24292e;">      index   index.html;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location ~ .*\\.(app|ico|gif|bmp|jpg|jpeg|png|mp3|mid|wma|mp4|swf|flv|rar|zip|txt|doc|ppt|xls|pdf|json|svg|ttf|eot|otf|woff)$ {</span></span>
<span class="line"><span style="color:#24292e;">      root    static; </span></span>
<span class="line"><span style="color:#24292e;">      expires 7d;</span></span>
<span class="line"><span style="color:#24292e;">      # 解决跨域问题</span></span>
<span class="line"><span style="color:#24292e;">      proxy_set_header   Cookie $http_cookie;  </span></span>
<span class="line"><span style="color:#24292e;">      add_header Access-Control-Allow-Origin *;  </span></span>
<span class="line"><span style="color:#24292e;">      add_header Access-Control-Allow-Headers Content-Type;</span></span>
<span class="line"><span style="color:#24292e;">      add_header Access-Control-Allow-Methods GET,POST,OPTIONS;  </span></span>
<span class="line"><span style="color:#24292e;">      add_header Access-Control-Allow-Credentials true;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location ~ .*\\.(css|js)$ {</span></span>
<span class="line"><span style="color:#24292e;">      root    static;</span></span>
<span class="line"><span style="color:#24292e;">      expires 30m;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location = /50x.html {</span></span>
<span class="line"><span style="color:#24292e;">      root   html;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>Nginx的一些常见命令：</p><p><code>1、启动：start nginx</code></p><p><code>2、停止：nginx.exe -s stop 或 nginx.exe -s quit（注：stop是快速停止nginx，可能并不保存相关信息；quit是完整有序的停止nginx，并保存相关信息。）</code></p><p><code>3、重新载入Nginx：nginx.exe -s reload 当配置信息修改，需要重新载入这些配置时使用此命令。</code></p><p><code>4、重新打开日志文件：nginx.exe -s reopen</code></p><p><code>5、查看Nginx版本：nginx -v</code></p><p><code>6、查看进程：tasklist /fi &quot;imagename eq nginx.exe&quot;</code></p><p><code>7、强制杀掉进程：taskkill /pid 11992 -t -f</code></p>`,15),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
