import{_ as s,o as n,c as a,S as l}from"./chunks/framework.3ac0968e.js";const i=JSON.parse('{"title":"Vue项目开发实践","description":"","frontmatter":{"title":"Vue项目开发实践"},"headers":[],"relativePath":"words/vue-dev.md","filePath":"words/vue-dev.md"}'),p={name:"words/vue-dev.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2018-11-19 20:21:27</p></div><p>Vue+ElementUI项目开发实践。😃</p><ul><li><a href="https://www.npmjs.com/package/axios" target="_blank" rel="noreferrer">Axios</a></li><li><a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">VueRouter</a></li><li>KeepAlive</li><li><a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">Lodash</a></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">axios的封装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> axios </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Qs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> _ENV_ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> DEV_URL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/api</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> PROD_URL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://127.0.0.1:8090</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">baseURL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ( _ENV_ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> DEV_URL </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> PROD_URL )</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">timeout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600000</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaults</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">X-Requested-With</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">XMLHttpRequest</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vueSingleton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">unique</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getInstance</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">unique</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">unique</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Construct</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">unique</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Construct</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#F07178;">()  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      getInstance </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getInstance</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interceptors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">config</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interceptors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">错误请求</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">401</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">未授权</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">403</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">拒绝访问</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">404</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请求错误,未找到该资源</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">405</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请求方法未允许</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">408</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请求超时</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">服务器端出错</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">501</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">网络未实现</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">502</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">网络错误</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">503</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">服务不可用</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">504</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">网络超时</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">505</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http版本不支持该请求</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">连接错误</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">连接到服务器失败</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vueSingleton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$message</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;">  Http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">axios</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">reject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">axios</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Qs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">application/x-www-form-urlencoded</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">reject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">jsonPost</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">axios</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Qs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">application/json;charset=utf-8</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">reject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">formDataPost</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">axios</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multipart/form-data</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">reject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> Http</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">路由</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dictDetail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">dictCode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">path </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> query </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dictDetail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">dictCode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> params  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">beforeRouteEnter</span><span style="color:#A6ACCD;"> (to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> next)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">vm</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">query</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">路由的异步加载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Router</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">requireAuth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Main</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">children </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">requireAuth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/pages/home/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">resolve)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">函数防抖等</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">clickUp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">debounce</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">row</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dao</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resp</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getList</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">_scroll_check</span><span style="color:#A6ACCD;">(e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> ( ( </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wheelDelta</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wheelDelta</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> ) ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      　 </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;">  </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  　</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">table1Scroll</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_this</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">table1Dom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#table1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_query</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">debounce</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">_this</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_scroll_check</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">_this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pageConfig1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pageIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">_this</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTable1Info</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">300</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">table1Dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onmousewheel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_query</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">delay</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">组件封装</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;page&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-pagination v-if=&quot; pageConfig.total &gt; 0 &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      prev-text=&quot;上一页&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      next-text=&quot;下一页&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      @size-change=&quot;handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      @current-change=&quot;handleCurrentChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :current-page.sync=&quot;pageConfig.currentPage&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :page-sizes=[5,10,15]</span></span>
<span class="line"><span style="color:#A6ACCD;">      :page-size=&quot;pageConfig.pageSize&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :layout=&quot;pageConfig.layout&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :total=&quot;pageConfig.total&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-pagination&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">传递一个pageConfig对象</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">打包优化</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script src=&quot;//cdn.bootcss.com/vue/2.5.2/vue.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script src=&quot;//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script src=&quot;//cdn.bootcss.com/vuex/3.0.1/vuex.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script src=&quot;//cdn.bootcss.com/axios/0.18.0/axios.min.js&quot;&gt;&lt;/script&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">build -&gt; webpack.base.conf.js </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">externals : {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;vue&#39;: &#39;Vue&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;vue-router&#39;: &#39;VueRouter&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;vuex&#39;: &#39;Vuex&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;axios&#39;: &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><strong>开发实践踩坑指南，elementUI组件篇</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1.水平拖动效果</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;resizer-wrap&quot; @mousedown.stop.prevent=&quot;resizeEvent&quot; v-show=&quot;isResizer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">resizeEvent() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let doc = document,</span></span>
<span class="line"><span style="color:#A6ACCD;">      resize = doc.getElementsByClassName(&quot;resizer-wrap&quot;)[0],</span></span>
<span class="line"><span style="color:#A6ACCD;">      left = doc.getElementsByClassName(&quot;content-left&quot;)[0],</span></span>
<span class="line"><span style="color:#A6ACCD;">      right = doc.getElementsByClassName(&quot;content-right&quot;)[0],</span></span>
<span class="line"><span style="color:#A6ACCD;">      box = doc.getElementsByClassName(&quot;pager-content&quot;)[0],</span></span>
<span class="line"><span style="color:#A6ACCD;">      startX = event.clientX</span></span>
<span class="line"><span style="color:#A6ACCD;">      resize.left = resize.offsetLeft</span></span>
<span class="line"><span style="color:#A6ACCD;">      doc.onmousemove = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let endX = e.clientX</span></span>
<span class="line"><span style="color:#A6ACCD;">        let moveLen = resize.left + (endX - startX)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(moveLen &lt; 0 ) return</span></span>
<span class="line"><span style="color:#A6ACCD;">        if( moveLen &lt; 320 ) moveLen = 320</span></span>
<span class="line"><span style="color:#A6ACCD;">        if( moveLen &gt; 500 ) moveLen = 500</span></span>
<span class="line"><span style="color:#A6ACCD;">        left.style.width = moveLen + &quot;px&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        right.style.width = ( box.clientWidth - moveLen - 1 ) + &quot;px&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      doc.onmouseup = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        doc.onmousemove = null</span></span>
<span class="line"><span style="color:#A6ACCD;">        doc.onmouseup = null</span></span>
<span class="line"><span style="color:#A6ACCD;">        ( resize.releaseCapture ) &amp;&amp; ( resize.releaseCapture() )</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      resize.setCapture &amp;&amp; resize.setCapture()</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.elementUI组件之[table]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;el-table</span></span>
<span class="line"><span style="color:#A6ACCD;">    :data=&quot;leftTableData&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :row-key=&quot;getRowKeys&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :row-class-name=&quot;tableRowClassName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :row-style=&quot;selectedHighLight&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @cell-click=&quot;cellClick&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @selection-change = &quot;tableChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @row-dblclick = &quot;leftTableRowDbClick&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-loading = &quot;leftTableLoading&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ref=&quot;multipleTable&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#A6ACCD;">          align=&quot;center&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">          type=&quot;selection&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">          min-width=&quot;5%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/el-table-column&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#A6ACCD;">          align=&quot;left&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">          type=&quot;index&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">          :index=&quot;indexMethod&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          show-overflow-tooltip  </span></span>
<span class="line"><span style="color:#A6ACCD;">          label=&quot;序号&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">          width=&quot;80&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#A6ACCD;">           align=&quot;left&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">           prop=&quot;code&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">           :formatter=&quot;handleEmpty&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">           show-overflow-tooltip  </span></span>
<span class="line"><span style="color:#A6ACCD;">           label=&quot;代码&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">           min-width=&quot;20%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#A6ACCD;">            align=&quot;center&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">            label=&quot;操作&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">            min-width=&quot;30%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &lt;span  title=&quot;删除&quot; @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;删除&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/el-table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">leftTableRowDbClick(row) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.tableRowSelectedArr.indexOf(row.code) &gt; -1 ? null : this.tableRowSelectedArr.push(o.code)</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tableRowClassName ({row, rowIndex}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    row.index = row.id</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">selectedHighlight({row, rowIndex}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if( this.tableRowSelectedArr.indexOf(row.code) &gt; -1 ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return { &quot;background-color&quot;: &quot;rgba(64,158,255,.2)&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handleEmpty(row, column, cellValue, index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return handleEmpty(cellValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">indexMethod(index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return index + 1 + (this.leftTableData.data.pageIndex-1)*this.leftTableData.data.pageSize</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tableChange(selection) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.tableSelectItem = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    let len = selection.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i= 0 ; i&lt;len ; i++)  {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let o = selection[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.tableSelectItem.push(o)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.tableSelectItem.length &gt; 0 ? this.delBtnDisabled= false : this.delBtnDisabled = true</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">getRowKeys(row){</span></span>
<span class="line"><span style="color:#A6ACCD;">  return row.id</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">expandChange(row, expandedRows) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.expandLoading = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    let params = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    dao.getList(params).then((resp)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      if( resp.status ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.$set(this.expandTableListData,row.id,resp.data.result)</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.$set(this.expandTableListData,row.id,[])</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.expandLoading = false</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cellClick(row, column, cell, event){</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(  column.property == &#39;desc&#39;  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    row.isDescEditor = true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">toggleSelection(rows) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (rows) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rows.forEach(row =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$refs.multipleTable.toggleRowSelection(row)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.$refs.multipleTable.clearSelection()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3.elementUI组件之[tags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;tags-pools&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;el-tag</span></span>
<span class="line"><span style="color:#A6ACCD;">    :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-for=&quot;(tag,index) in dynamicTags&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    closable</span></span>
<span class="line"><span style="color:#A6ACCD;">    :type =&quot; dynamicTagIndex == index ? &#39;&#39; : &#39;info&#39; &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @click.native=&quot;handleTagClick(tag,index)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @close=&quot;handleTagClose(tag)&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         {{tag.code}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/el-tag&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handleTagClose(tag) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.tableRowSelectedArr.splice(this.tableRowSelectedArr.indexOf(tag.code),1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.handleRemoveTab(tag.code)</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.dynamicTags.length &lt;= 0 ? this.dynamicTagIndex = -1 : null</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handleRemoveTab(targetName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let tabs = this.dynamicTabs</span></span>
<span class="line"><span style="color:#A6ACCD;">  let activeName = this.dynamicTabVal</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (activeName === targetName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tabs.map((tab, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if ( tab.code === targetName ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let nextTab = tabs[index + 1] || tabs[index - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">            if ( nextTab ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              activeName = nextTab.code</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.dynamicTabVal = activeName</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.dynamicTabs = tabs.filter(tab =&gt; tab.code !== targetName)</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">keep-alive</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">被包含在 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">keep-alive</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">activated  &amp;&amp;  deactivated</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">created-&gt; mounted-&gt; activated</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">back：deactivated</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">当再次进入（前进或者后退）时，只触发activated</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">事件挂载的方法等，只执行一次的放在 mounted 中</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">组件每次进去执行的方法放在 activated 中</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  path : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/resourceOverview</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  name : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resourceOverview</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  meta: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">requireAuth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">keepAlive</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  component : </span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/pages/resource/resource_overview</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">resolve)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$route.meta.keepAlive</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fadeInRight animated</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!$route.meta.keepAlive</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fadeInRight animated</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">beforeRouteEnter(to, from, next) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">if</span><span style="color:#A6ACCD;">( from</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> from</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;">  to</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">two</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    to.meta.keepAlive </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    to.meta.keepAlive </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx 项目部署</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  2;</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log /usr/local/webserver/nginx/logs/nginx_error.log crit; </span></span>
<span class="line"><span style="color:#A6ACCD;">pid /usr/local/webserver/nginx/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_rlimit_nofile 65535;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">  use epoll;</span></span>
<span class="line"><span style="color:#A6ACCD;">  worker_connections 65535;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    server_names_hash_bucket_size 128;</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_header_buffer_size 32k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    large_client_header_buffers 4 32k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_max_body_size 8m;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nopush on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout 60;</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nodelay on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_connect_timeout 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_send_timeout 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_read_timeout 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_buffer_size 64k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_buffers 4 64k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_busy_buffers_size 128k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_temp_file_write_size 128k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip on; </span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_buffers 4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_types text/plain application/x-javascript text/css application/xml application/json;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">      listen       8025;</span></span>
<span class="line"><span style="color:#A6ACCD;">      server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">      index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">      root /usr/local/webserver/nginx/dist;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    location ^~ /api/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_pass http://172.16.16.16:8089/datamgr/;</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_redirect default;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,12),e=[o];function t(c,r,y,D,F,C){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};
