import{_ as s,o as n,c as a,R as l}from"./chunks/framework.uaFRvtsY.js";const d=JSON.parse('{"title":"Vue项目开发实践","description":"","frontmatter":{"title":"Vue项目开发实践"},"headers":[],"relativePath":"words/vue-dev.md","filePath":"words/vue-dev.md"}'),p={name:"words/vue-dev.md"},e=l(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2018-11-19 20:21:27</p></div><p>Vue+ElementUI项目开发实践。😃</p><ul><li><a href="https://www.npmjs.com/package/axios" target="_blank" rel="noreferrer">Axios</a></li><li><a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">VueRouter</a></li><li>KeepAlive</li><li><a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">Lodash</a></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">axios的封装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Qs </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;qs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">_ENV_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">DEV_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/api&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PROD_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;http://127.0.0.1:8090&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.baseURL </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ( _ENV_ </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">DEV_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PROD_URL</span><span style="color:#E1E4E8;"> )</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.timeout </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">600000</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.headers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&#39;X-Requested-With&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;XMLHttpRequest&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vueSingleton</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> unique</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">( unique </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> ){</span></span>
<span class="line"><span style="color:#E1E4E8;">        unique </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Construct</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> unique</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Construct</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">()  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      getInstance : getInstance</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})();</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> err.response) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (err.response.status) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;错误请求&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">401</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;未授权&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">403</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;拒绝访问&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;请求错误,未找到该资源&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">405</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;请求方法未允许&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">408</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;请求超时&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;服务器端出错&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">501</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;网络未实现&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;网络错误&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;服务不可用&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;网络超时&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">505</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http版本不支持该请求&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`连接错误\${</span><span style="color:#E1E4E8;">err</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">response</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      err.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;连接到服务器失败&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    vueSingleton.</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">$message</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,message: err.message, duration: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(err.response)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">Http</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">Http.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url,</span></span>
<span class="line"><span style="color:#E1E4E8;">        params: params</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        resolve </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">( </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        reject </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">Http.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: Qs.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(params),</span></span>
<span class="line"><span style="color:#E1E4E8;">        headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        resolve </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">( </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        reject </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">Http.</span><span style="color:#B392F0;">jsonPost</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: Qs.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(params),</span></span>
<span class="line"><span style="color:#E1E4E8;">        headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json;charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        resolve </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">( </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        reject </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">Http.</span><span style="color:#B392F0;">formDataPost</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: params,</span></span>
<span class="line"><span style="color:#E1E4E8;">      headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;multipart/form-data&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolve </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">( </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      reject </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Http</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">axios的封装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&#39;use strict&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Qs </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;qs&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">_ENV_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> process.env.</span><span style="color:#005CC5;">NODE_ENV</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">DEV_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/api&quot;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PROD_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;http://127.0.0.1:8090&quot;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.baseURL </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ( _ENV_ </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">DEV_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PROD_URL</span><span style="color:#24292E;"> )</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.timeout </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">600000</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.headers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&#39;X-Requested-With&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;XMLHttpRequest&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vueSingleton</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> unique</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">( unique </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> ){</span></span>
<span class="line"><span style="color:#24292E;">        unique </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Construct</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> unique</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Construct</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">()  </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      getInstance : getInstance</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})();</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> err.response) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (err.response.status) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;错误请求&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">401</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;未授权&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">403</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;拒绝访问&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;请求错误,未找到该资源&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">405</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;请求方法未允许&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">408</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;请求超时&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;服务器端出错&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">501</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;网络未实现&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;网络错误&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;服务不可用&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;网络超时&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">505</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http版本不支持该请求&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`连接错误\${</span><span style="color:#24292E;">err</span><span style="color:#032F62;">.</span><span style="color:#24292E;">response</span><span style="color:#032F62;">.</span><span style="color:#24292E;">status</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      err.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;连接到服务器失败&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    vueSingleton.</span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">$message</span><span style="color:#24292E;">({ type: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,message: err.message, duration: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(err.response)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">Http</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">Http.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">,</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">,</span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url,</span></span>
<span class="line"><span style="color:#24292E;">        params: params</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        resolve </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res.data)</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">( </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        reject </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">} </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">Http.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">,</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">,</span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url,</span></span>
<span class="line"><span style="color:#24292E;">        data: Qs.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(params),</span></span>
<span class="line"><span style="color:#24292E;">        headers: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        resolve </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res.data)</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">( </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        reject </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">Http.</span><span style="color:#6F42C1;">jsonPost</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">,</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">,</span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        url,</span></span>
<span class="line"><span style="color:#24292E;">        data: Qs.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(params),</span></span>
<span class="line"><span style="color:#24292E;">        headers: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/json;charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        resolve </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res.data)</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">( </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        reject </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">Http.</span><span style="color:#6F42C1;">formDataPost</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">,</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">,</span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      url,</span></span>
<span class="line"><span style="color:#24292E;">      data: params,</span></span>
<span class="line"><span style="color:#24292E;">      headers: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;multipart/form-data&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      resolve </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res.data)</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">( </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      reject </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Http</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">路由</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    path:</span><span style="color:#9ECBFF;">&quot;/dictDetail&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    query:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      dictCode:row.code</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">path </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> query </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:</span><span style="color:#9ECBFF;">&quot;dictDetail&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    params:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      dictCode:row.code</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">name </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> params  </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">beforeRouteEnter</span><span style="color:#E1E4E8;"> (to, from, next){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm.$route.query.code</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">路由的异步加载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    routes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      redirect: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        requireAuth: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: Main,</span></span>
<span class="line"><span style="color:#E1E4E8;">      children : [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          requireAuth: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;@/components/pages/home/home&#39;</span><span style="color:#E1E4E8;">],resolve)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">路由</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    path:</span><span style="color:#032F62;">&quot;/dictDetail&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    query:{</span></span>
<span class="line"><span style="color:#24292E;">      dictCode:row.code</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">path </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> query </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name:</span><span style="color:#032F62;">&quot;dictDetail&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    params:{</span></span>
<span class="line"><span style="color:#24292E;">      dictCode:row.code</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">name </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> params  </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">beforeRouteEnter</span><span style="color:#24292E;"> (to, from, next){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    vm.code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm.$route.query.code</span></span>
<span class="line"><span style="color:#24292E;">    vm.</span><span style="color:#6F42C1;">query</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">路由的异步加载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    routes: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      redirect: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        requireAuth: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;main&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      component: Main,</span></span>
<span class="line"><span style="color:#24292E;">      children : [{</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        meta: {</span></span>
<span class="line"><span style="color:#24292E;">          requireAuth: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: </span><span style="color:#E36209;">resolve</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;@/components/pages/home/home&#39;</span><span style="color:#24292E;">],resolve)</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">函数防抖等</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> _ </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">clickUp</span><span style="color:#E1E4E8;">:_.</span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">( index </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    params.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row.id</span></span>
<span class="line"><span style="color:#E1E4E8;">    dao.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(params).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">_scroll_check</span><span style="color:#E1E4E8;">(e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> window.event  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ( ( e.wheelDelta </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> e.wheelDelta </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> ) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> ( e.detail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> e.detail</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> ) ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      　 </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  　}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">table1Scroll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> _this </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> table1Dom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#table1&quot;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> _query </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _.</span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(_this.</span><span style="color:#B392F0;">_scroll_check</span><span style="color:#E1E4E8;">(e)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          _this.pageConfig1.pageIndex </span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">          _this.</span><span style="color:#B392F0;">getTable1Info</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  table1Dom.onmousewheel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _query</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;">) {  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearTimeout</span><span style="color:#E1E4E8;">(timer)</span></span>
<span class="line"><span style="color:#E1E4E8;">      timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">          fn.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, delay)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">函数防抖等</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> _ </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lodash&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">clickUp</span><span style="color:#24292E;">:_.</span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">row</span><span style="color:#24292E;">,</span><span style="color:#E36209;">index</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">( index </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    params.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> row.id</span></span>
<span class="line"><span style="color:#24292E;">    dao.</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(params).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resp</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">},</span><span style="color:#005CC5;">500</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">_scroll_check</span><span style="color:#24292E;">(e) {</span></span>
<span class="line"><span style="color:#24292E;">    e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> window.event  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ( ( e.wheelDelta </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> e.wheelDelta </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> ) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> ( e.detail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> e.detail</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> ) ) {</span></span>
<span class="line"><span style="color:#24292E;">      　 </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  　}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">table1Scroll</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> _this </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> table1Dom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#table1&quot;</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> _query </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _.</span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(_this.</span><span style="color:#6F42C1;">_scroll_check</span><span style="color:#24292E;">(e)) {</span></span>
<span class="line"><span style="color:#24292E;">          _this.pageConfig1.pageIndex </span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">          _this.</span><span style="color:#6F42C1;">getTable1Info</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span><span style="color:#005CC5;">300</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  table1Dom.onmousewheel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _query</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;">) {  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timer)</span></span>
<span class="line"><span style="color:#24292E;">      timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">          fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }, delay)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">组件封装</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;page&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;el-pagination v-if=&quot; pageConfig.total &gt; 0 &quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      prev-text=&quot;上一页&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      next-text=&quot;下一页&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      @size-change=&quot;handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      @current-change=&quot;handleCurrentChange&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      :current-page.sync=&quot;pageConfig.currentPage&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      :page-sizes=[5,10,15]</span></span>
<span class="line"><span style="color:#e1e4e8;">      :page-size=&quot;pageConfig.pageSize&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      :layout=&quot;pageConfig.layout&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      :total=&quot;pageConfig.total&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/el-pagination&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">传递一个pageConfig对象</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">组件封装</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;page&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;el-pagination v-if=&quot; pageConfig.total &gt; 0 &quot;</span></span>
<span class="line"><span style="color:#24292e;">      prev-text=&quot;上一页&quot;</span></span>
<span class="line"><span style="color:#24292e;">      next-text=&quot;下一页&quot;</span></span>
<span class="line"><span style="color:#24292e;">      @size-change=&quot;handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#24292e;">      @current-change=&quot;handleCurrentChange&quot;</span></span>
<span class="line"><span style="color:#24292e;">      :current-page.sync=&quot;pageConfig.currentPage&quot;</span></span>
<span class="line"><span style="color:#24292e;">      :page-sizes=[5,10,15]</span></span>
<span class="line"><span style="color:#24292e;">      :page-size=&quot;pageConfig.pageSize&quot;</span></span>
<span class="line"><span style="color:#24292e;">      :layout=&quot;pageConfig.layout&quot;</span></span>
<span class="line"><span style="color:#24292e;">      :total=&quot;pageConfig.total&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/el-pagination&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">传递一个pageConfig对象</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">打包优化</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;//cdn.bootcss.com/vue/2.5.2/vue.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;//cdn.bootcss.com/vuex/3.0.1/vuex.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;//cdn.bootcss.com/axios/0.18.0/axios.min.js&quot;&gt;&lt;/script&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">build -&gt; webpack.base.conf.js </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">externals : {</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;vue&#39;: &#39;Vue&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;vue-router&#39;: &#39;VueRouter&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;vuex&#39;: &#39;Vuex&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;axios&#39;: &#39;axios&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">打包优化</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;//cdn.bootcss.com/vue/2.5.2/vue.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;//cdn.bootcss.com/vuex/3.0.1/vuex.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;//cdn.bootcss.com/axios/0.18.0/axios.min.js&quot;&gt;&lt;/script&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">build -&gt; webpack.base.conf.js </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">externals : {</span></span>
<span class="line"><span style="color:#24292e;">  &#39;vue&#39;: &#39;Vue&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  &#39;vue-router&#39;: &#39;VueRouter&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  &#39;vuex&#39;: &#39;Vuex&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  &#39;axios&#39;: &#39;axios&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>开发实践踩坑指南，elementUI组件篇</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1.水平拖动效果</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;resizer-wrap&quot; @mousedown.stop.prevent=&quot;resizeEvent&quot; v-show=&quot;isResizer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">resizeEvent() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let doc = document,</span></span>
<span class="line"><span style="color:#e1e4e8;">      resize = doc.getElementsByClassName(&quot;resizer-wrap&quot;)[0],</span></span>
<span class="line"><span style="color:#e1e4e8;">      left = doc.getElementsByClassName(&quot;content-left&quot;)[0],</span></span>
<span class="line"><span style="color:#e1e4e8;">      right = doc.getElementsByClassName(&quot;content-right&quot;)[0],</span></span>
<span class="line"><span style="color:#e1e4e8;">      box = doc.getElementsByClassName(&quot;pager-content&quot;)[0],</span></span>
<span class="line"><span style="color:#e1e4e8;">      startX = event.clientX</span></span>
<span class="line"><span style="color:#e1e4e8;">      resize.left = resize.offsetLeft</span></span>
<span class="line"><span style="color:#e1e4e8;">      doc.onmousemove = (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let endX = e.clientX</span></span>
<span class="line"><span style="color:#e1e4e8;">        let moveLen = resize.left + (endX - startX)</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(moveLen &lt; 0 ) return</span></span>
<span class="line"><span style="color:#e1e4e8;">        if( moveLen &lt; 320 ) moveLen = 320</span></span>
<span class="line"><span style="color:#e1e4e8;">        if( moveLen &gt; 500 ) moveLen = 500</span></span>
<span class="line"><span style="color:#e1e4e8;">        left.style.width = moveLen + &quot;px&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        right.style.width = ( box.clientWidth - moveLen - 1 ) + &quot;px&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      doc.onmouseup = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        doc.onmousemove = null</span></span>
<span class="line"><span style="color:#e1e4e8;">        doc.onmouseup = null</span></span>
<span class="line"><span style="color:#e1e4e8;">        ( resize.releaseCapture ) &amp;&amp; ( resize.releaseCapture() )</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      resize.setCapture &amp;&amp; resize.setCapture()</span></span>
<span class="line"><span style="color:#e1e4e8;">      return false</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2.elementUI组件之[table]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;el-table</span></span>
<span class="line"><span style="color:#e1e4e8;">    :data=&quot;leftTableData&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    :row-key=&quot;getRowKeys&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    :row-class-name=&quot;tableRowClassName&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    :row-style=&quot;selectedHighLight&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    @cell-click=&quot;cellClick&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    @selection-change = &quot;tableChange&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    @row-dblclick = &quot;leftTableRowDbClick&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    v-loading = &quot;leftTableLoading&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ref=&quot;multipleTable&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#e1e4e8;">          align=&quot;center&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">          type=&quot;selection&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">          min-width=&quot;5%&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/el-table-column&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#e1e4e8;">          align=&quot;left&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">          type=&quot;index&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">          :index=&quot;indexMethod&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          show-overflow-tooltip  </span></span>
<span class="line"><span style="color:#e1e4e8;">          label=&quot;序号&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">          width=&quot;80&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#e1e4e8;">           align=&quot;left&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">           prop=&quot;code&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">           :formatter=&quot;handleEmpty&quot;  </span></span>
<span class="line"><span style="color:#e1e4e8;">           show-overflow-tooltip  </span></span>
<span class="line"><span style="color:#e1e4e8;">           label=&quot;代码&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">           min-width=&quot;20%&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#e1e4e8;">            align=&quot;center&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">            label=&quot;操作&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">            min-width=&quot;30%&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">              &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                  &lt;span  title=&quot;删除&quot; @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;删除&lt;/span&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">              &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/el-table&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">leftTableRowDbClick(row) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.tableRowSelectedArr.indexOf(row.code) &gt; -1 ? null : this.tableRowSelectedArr.push(o.code)</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">tableRowClassName ({row, rowIndex}) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    row.index = row.id</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">selectedHighlight({row, rowIndex}) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if( this.tableRowSelectedArr.indexOf(row.code) &gt; -1 ) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return { &quot;background-color&quot;: &quot;rgba(64,158,255,.2)&quot; }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">handleEmpty(row, column, cellValue, index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return handleEmpty(cellValue)</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">indexMethod(index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return index + 1 + (this.leftTableData.data.pageIndex-1)*this.leftTableData.data.pageSize</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">tableChange(selection) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.tableSelectItem = []</span></span>
<span class="line"><span style="color:#e1e4e8;">    let len = selection.length</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(let i= 0 ; i&lt;len ; i++)  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let o = selection[i]</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.tableSelectItem.push(o)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.tableSelectItem.length &gt; 0 ? this.delBtnDisabled= false : this.delBtnDisabled = true</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">getRowKeys(row){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return row.id</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">expandChange(row, expandedRows) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.expandLoading = true</span></span>
<span class="line"><span style="color:#e1e4e8;">    let params = {}</span></span>
<span class="line"><span style="color:#e1e4e8;">    dao.getList(params).then((resp)=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">      if( resp.status ) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          this.$set(this.expandTableListData,row.id,resp.data.result)</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.$set(this.expandTableListData,row.id,[])</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.expandLoading = false</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cellClick(row, column, cell, event){</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(  column.property == &#39;desc&#39;  ) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    row.isDescEditor = true</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">toggleSelection(rows) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (rows) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rows.forEach(row =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$refs.multipleTable.toggleRowSelection(row)</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.$refs.multipleTable.clearSelection()</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3.elementUI组件之[tags]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;tags-pools&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-tag</span></span>
<span class="line"><span style="color:#e1e4e8;">    :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    v-for=&quot;(tag,index) in dynamicTags&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    closable</span></span>
<span class="line"><span style="color:#e1e4e8;">    :type =&quot; dynamicTagIndex == index ? &#39;&#39; : &#39;info&#39; &quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    @click.native=&quot;handleTagClick(tag,index)&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    @close=&quot;handleTagClose(tag)&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">         {{tag.code}}</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/el-tag&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">handleTagClose(tag) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.tableRowSelectedArr.splice(this.tableRowSelectedArr.indexOf(tag.code),1)</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.handleRemoveTab(tag.code)</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.dynamicTags.length &lt;= 0 ? this.dynamicTagIndex = -1 : null</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">handleRemoveTab(targetName) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let tabs = this.dynamicTabs</span></span>
<span class="line"><span style="color:#e1e4e8;">  let activeName = this.dynamicTabVal</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (activeName === targetName) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      tabs.map((tab, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if ( tab.code === targetName ) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          let nextTab = tabs[index + 1] || tabs[index - 1]</span></span>
<span class="line"><span style="color:#e1e4e8;">            if ( nextTab ) {</span></span>
<span class="line"><span style="color:#e1e4e8;">              activeName = nextTab.code</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.dynamicTabVal = activeName</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.dynamicTabs = tabs.filter(tab =&gt; tab.code !== targetName)</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1.水平拖动效果</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;resizer-wrap&quot; @mousedown.stop.prevent=&quot;resizeEvent&quot; v-show=&quot;isResizer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">resizeEvent() {</span></span>
<span class="line"><span style="color:#24292e;">      let doc = document,</span></span>
<span class="line"><span style="color:#24292e;">      resize = doc.getElementsByClassName(&quot;resizer-wrap&quot;)[0],</span></span>
<span class="line"><span style="color:#24292e;">      left = doc.getElementsByClassName(&quot;content-left&quot;)[0],</span></span>
<span class="line"><span style="color:#24292e;">      right = doc.getElementsByClassName(&quot;content-right&quot;)[0],</span></span>
<span class="line"><span style="color:#24292e;">      box = doc.getElementsByClassName(&quot;pager-content&quot;)[0],</span></span>
<span class="line"><span style="color:#24292e;">      startX = event.clientX</span></span>
<span class="line"><span style="color:#24292e;">      resize.left = resize.offsetLeft</span></span>
<span class="line"><span style="color:#24292e;">      doc.onmousemove = (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        let endX = e.clientX</span></span>
<span class="line"><span style="color:#24292e;">        let moveLen = resize.left + (endX - startX)</span></span>
<span class="line"><span style="color:#24292e;">        if(moveLen &lt; 0 ) return</span></span>
<span class="line"><span style="color:#24292e;">        if( moveLen &lt; 320 ) moveLen = 320</span></span>
<span class="line"><span style="color:#24292e;">        if( moveLen &gt; 500 ) moveLen = 500</span></span>
<span class="line"><span style="color:#24292e;">        left.style.width = moveLen + &quot;px&quot;</span></span>
<span class="line"><span style="color:#24292e;">        right.style.width = ( box.clientWidth - moveLen - 1 ) + &quot;px&quot;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      doc.onmouseup = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        doc.onmousemove = null</span></span>
<span class="line"><span style="color:#24292e;">        doc.onmouseup = null</span></span>
<span class="line"><span style="color:#24292e;">        ( resize.releaseCapture ) &amp;&amp; ( resize.releaseCapture() )</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      resize.setCapture &amp;&amp; resize.setCapture()</span></span>
<span class="line"><span style="color:#24292e;">      return false</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2.elementUI组件之[table]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;el-table</span></span>
<span class="line"><span style="color:#24292e;">    :data=&quot;leftTableData&quot;</span></span>
<span class="line"><span style="color:#24292e;">    :row-key=&quot;getRowKeys&quot;</span></span>
<span class="line"><span style="color:#24292e;">    :row-class-name=&quot;tableRowClassName&quot;</span></span>
<span class="line"><span style="color:#24292e;">    :row-style=&quot;selectedHighLight&quot;</span></span>
<span class="line"><span style="color:#24292e;">    @cell-click=&quot;cellClick&quot;</span></span>
<span class="line"><span style="color:#24292e;">    @selection-change = &quot;tableChange&quot;</span></span>
<span class="line"><span style="color:#24292e;">    @row-dblclick = &quot;leftTableRowDbClick&quot;</span></span>
<span class="line"><span style="color:#24292e;">    v-loading = &quot;leftTableLoading&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ref=&quot;multipleTable&quot;</span></span>
<span class="line"><span style="color:#24292e;">    style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#24292e;">          align=&quot;center&quot; </span></span>
<span class="line"><span style="color:#24292e;">          type=&quot;selection&quot; </span></span>
<span class="line"><span style="color:#24292e;">          min-width=&quot;5%&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/el-table-column&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#24292e;">          align=&quot;left&quot; </span></span>
<span class="line"><span style="color:#24292e;">          type=&quot;index&quot; </span></span>
<span class="line"><span style="color:#24292e;">          :index=&quot;indexMethod&quot;</span></span>
<span class="line"><span style="color:#24292e;">          show-overflow-tooltip  </span></span>
<span class="line"><span style="color:#24292e;">          label=&quot;序号&quot; </span></span>
<span class="line"><span style="color:#24292e;">          width=&quot;80&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#24292e;">           align=&quot;left&quot; </span></span>
<span class="line"><span style="color:#24292e;">           prop=&quot;code&quot; </span></span>
<span class="line"><span style="color:#24292e;">           :formatter=&quot;handleEmpty&quot;  </span></span>
<span class="line"><span style="color:#24292e;">           show-overflow-tooltip  </span></span>
<span class="line"><span style="color:#24292e;">           label=&quot;代码&quot; </span></span>
<span class="line"><span style="color:#24292e;">           min-width=&quot;20%&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        &lt;el-table-column </span></span>
<span class="line"><span style="color:#24292e;">            align=&quot;center&quot; </span></span>
<span class="line"><span style="color:#24292e;">            label=&quot;操作&quot; </span></span>
<span class="line"><span style="color:#24292e;">            min-width=&quot;30%&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                  &lt;span  title=&quot;删除&quot; @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;删除&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/el-table&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">leftTableRowDbClick(row) {</span></span>
<span class="line"><span style="color:#24292e;">    this.tableRowSelectedArr.indexOf(row.code) &gt; -1 ? null : this.tableRowSelectedArr.push(o.code)</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">tableRowClassName ({row, rowIndex}) {</span></span>
<span class="line"><span style="color:#24292e;">    row.index = row.id</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">selectedHighlight({row, rowIndex}) {</span></span>
<span class="line"><span style="color:#24292e;">    if( this.tableRowSelectedArr.indexOf(row.code) &gt; -1 ) {</span></span>
<span class="line"><span style="color:#24292e;">      return { &quot;background-color&quot;: &quot;rgba(64,158,255,.2)&quot; }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">handleEmpty(row, column, cellValue, index) {</span></span>
<span class="line"><span style="color:#24292e;">    return handleEmpty(cellValue)</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">indexMethod(index) {</span></span>
<span class="line"><span style="color:#24292e;">    return index + 1 + (this.leftTableData.data.pageIndex-1)*this.leftTableData.data.pageSize</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">tableChange(selection) {</span></span>
<span class="line"><span style="color:#24292e;">    this.tableSelectItem = []</span></span>
<span class="line"><span style="color:#24292e;">    let len = selection.length</span></span>
<span class="line"><span style="color:#24292e;">    for(let i= 0 ; i&lt;len ; i++)  {</span></span>
<span class="line"><span style="color:#24292e;">      let o = selection[i]</span></span>
<span class="line"><span style="color:#24292e;">      this.tableSelectItem.push(o)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    this.tableSelectItem.length &gt; 0 ? this.delBtnDisabled= false : this.delBtnDisabled = true</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">getRowKeys(row){</span></span>
<span class="line"><span style="color:#24292e;">  return row.id</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">expandChange(row, expandedRows) {</span></span>
<span class="line"><span style="color:#24292e;">    this.expandLoading = true</span></span>
<span class="line"><span style="color:#24292e;">    let params = {}</span></span>
<span class="line"><span style="color:#24292e;">    dao.getList(params).then((resp)=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">      if( resp.status ) {</span></span>
<span class="line"><span style="color:#24292e;">          this.$set(this.expandTableListData,row.id,resp.data.result)</span></span>
<span class="line"><span style="color:#24292e;">      } else {</span></span>
<span class="line"><span style="color:#24292e;">        this.$set(this.expandTableListData,row.id,[])</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      this.expandLoading = false</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cellClick(row, column, cell, event){</span></span>
<span class="line"><span style="color:#24292e;">  if(  column.property == &#39;desc&#39;  ) {</span></span>
<span class="line"><span style="color:#24292e;">    row.isDescEditor = true</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">toggleSelection(rows) {</span></span>
<span class="line"><span style="color:#24292e;">  if (rows) {</span></span>
<span class="line"><span style="color:#24292e;">    rows.forEach(row =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      this.$refs.multipleTable.toggleRowSelection(row)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    this.$refs.multipleTable.clearSelection()</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3.elementUI组件之[tags]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;tags-pools&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-tag</span></span>
<span class="line"><span style="color:#24292e;">    :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#24292e;">    v-for=&quot;(tag,index) in dynamicTags&quot;</span></span>
<span class="line"><span style="color:#24292e;">    closable</span></span>
<span class="line"><span style="color:#24292e;">    :type =&quot; dynamicTagIndex == index ? &#39;&#39; : &#39;info&#39; &quot;</span></span>
<span class="line"><span style="color:#24292e;">    @click.native=&quot;handleTagClick(tag,index)&quot;</span></span>
<span class="line"><span style="color:#24292e;">    @close=&quot;handleTagClose(tag)&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">         {{tag.code}}</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/el-tag&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">handleTagClose(tag) {</span></span>
<span class="line"><span style="color:#24292e;">  this.tableRowSelectedArr.splice(this.tableRowSelectedArr.indexOf(tag.code),1)</span></span>
<span class="line"><span style="color:#24292e;">  this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)</span></span>
<span class="line"><span style="color:#24292e;">  this.handleRemoveTab(tag.code)</span></span>
<span class="line"><span style="color:#24292e;">  this.dynamicTags.length &lt;= 0 ? this.dynamicTagIndex = -1 : null</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">handleRemoveTab(targetName) {</span></span>
<span class="line"><span style="color:#24292e;">  let tabs = this.dynamicTabs</span></span>
<span class="line"><span style="color:#24292e;">  let activeName = this.dynamicTabVal</span></span>
<span class="line"><span style="color:#24292e;">  if (activeName === targetName) {</span></span>
<span class="line"><span style="color:#24292e;">      tabs.map((tab, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        if ( tab.code === targetName ) {</span></span>
<span class="line"><span style="color:#24292e;">          let nextTab = tabs[index + 1] || tabs[index - 1]</span></span>
<span class="line"><span style="color:#24292e;">            if ( nextTab ) {</span></span>
<span class="line"><span style="color:#24292e;">              activeName = nextTab.code</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  this.dynamicTabVal = activeName</span></span>
<span class="line"><span style="color:#24292e;">  this.dynamicTabs = tabs.filter(tab =&gt; tab.code !== targetName)</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">keep-alive</span><span style="color:#E1E4E8;">&gt;是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">被包含在 &lt;</span><span style="color:#79B8FF;">keep-alive</span><span style="color:#E1E4E8;">&gt; 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">activated  &amp;&amp;  deactivated</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">created-&gt; mounted-&gt; activated</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">back：deactivated</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">当再次进入（前进或者后退）时，只触发activated</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">事件挂载的方法等，只执行一次的放在 mounted 中</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">组件每次进去执行的方法放在 activated 中</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  path : </span><span style="color:#9ECBFF;">&#39;/resourceOverview&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name : </span><span style="color:#9ECBFF;">&#39;resourceOverview&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    requireAuth: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    keepAlive: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  component : </span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;@/components/pages/resource/resource_overview&#39;</span><span style="color:#E1E4E8;">],resolve)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">keep-alive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$route.meta.keepAlive&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;fadeInRight animated&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">keep-alive</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;!$route.meta.keepAlive&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;fadeInRight animated&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">beforeRouteEnter(to, from, next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;">( from.name </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;one&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> from.name </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;">  to.name </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;two&quot;</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    to.meta.keepAlive </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">    to.meta.keepAlive </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">keep-alive</span><span style="color:#24292E;">&gt;是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">被包含在 &lt;</span><span style="color:#005CC5;">keep-alive</span><span style="color:#24292E;">&gt; 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">activated  &amp;&amp;  deactivated</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">created-&gt; mounted-&gt; activated</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">back：deactivated</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">当再次进入（前进或者后退）时，只触发activated</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">事件挂载的方法等，只执行一次的放在 mounted 中</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">组件每次进去执行的方法放在 activated 中</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  path : </span><span style="color:#032F62;">&#39;/resourceOverview&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name : </span><span style="color:#032F62;">&#39;resourceOverview&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  meta: {</span></span>
<span class="line"><span style="color:#24292E;">    requireAuth: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    keepAlive: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  component : </span><span style="color:#E36209;">resolve</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;@/components/pages/resource/resource_overview&#39;</span><span style="color:#24292E;">],resolve)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">keep-alive</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$route.meta.keepAlive&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;fadeInRight animated&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#005CC5;">keep-alive</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;!$route.meta.keepAlive&quot;</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;fadeInRight animated&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">beforeRouteEnter(to, from, next) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;">( from.name </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;one&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> from.name </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">  to.name </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;two&quot;</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#24292E;">    to.meta.keepAlive </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  } else {</span></span>
<span class="line"><span style="color:#24292E;">    to.meta.keepAlive </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nginx 项目部署</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">worker_processes  2;</span></span>
<span class="line"><span style="color:#E1E4E8;">error_log /usr/local/webserver/nginx/logs/nginx_error.log crit; </span></span>
<span class="line"><span style="color:#E1E4E8;">pid /usr/local/webserver/nginx/nginx.pid;</span></span>
<span class="line"><span style="color:#E1E4E8;">worker_rlimit_nofile 65535;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">events {</span></span>
<span class="line"><span style="color:#E1E4E8;">  use epoll;</span></span>
<span class="line"><span style="color:#E1E4E8;">  worker_connections 65535;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">http {</span></span>
<span class="line"><span style="color:#E1E4E8;">    include       mime.types;</span></span>
<span class="line"><span style="color:#E1E4E8;">    default_type  application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    server_names_hash_bucket_size 128;</span></span>
<span class="line"><span style="color:#E1E4E8;">    client_header_buffer_size 32k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    large_client_header_buffers 4 32k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    client_max_body_size 8m;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">    sendfile on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    tcp_nopush on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    keepalive_timeout 60;</span></span>
<span class="line"><span style="color:#E1E4E8;">    tcp_nodelay on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fastcgi_connect_timeout 300;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fastcgi_send_timeout 300;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fastcgi_read_timeout 300;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fastcgi_buffer_size 64k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fastcgi_buffers 4 64k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fastcgi_busy_buffers_size 128k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    fastcgi_temp_file_write_size 128k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip on; </span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip_buffers 4 16k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip_types text/plain application/x-javascript text/css application/xml application/json;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip_vary on;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    server {</span></span>
<span class="line"><span style="color:#E1E4E8;">      listen       8025;</span></span>
<span class="line"><span style="color:#E1E4E8;">      server_name  localhost;</span></span>
<span class="line"><span style="color:#E1E4E8;">      index index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">      root /usr/local/webserver/nginx/dist;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">    location ^~ /api/ {</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy_pass http://172.16.16.16:8089/datamgr/;</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy_redirect default;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">nginx 项目部署</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">worker_processes  2;</span></span>
<span class="line"><span style="color:#24292E;">error_log /usr/local/webserver/nginx/logs/nginx_error.log crit; </span></span>
<span class="line"><span style="color:#24292E;">pid /usr/local/webserver/nginx/nginx.pid;</span></span>
<span class="line"><span style="color:#24292E;">worker_rlimit_nofile 65535;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">events {</span></span>
<span class="line"><span style="color:#24292E;">  use epoll;</span></span>
<span class="line"><span style="color:#24292E;">  worker_connections 65535;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">http {</span></span>
<span class="line"><span style="color:#24292E;">    include       mime.types;</span></span>
<span class="line"><span style="color:#24292E;">    default_type  application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    server_names_hash_bucket_size 128;</span></span>
<span class="line"><span style="color:#24292E;">    client_header_buffer_size 32k;</span></span>
<span class="line"><span style="color:#24292E;">    large_client_header_buffers 4 32k;</span></span>
<span class="line"><span style="color:#24292E;">    client_max_body_size 8m;</span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;">    sendfile on;</span></span>
<span class="line"><span style="color:#24292E;">    tcp_nopush on;</span></span>
<span class="line"><span style="color:#24292E;">    keepalive_timeout 60;</span></span>
<span class="line"><span style="color:#24292E;">    tcp_nodelay on;</span></span>
<span class="line"><span style="color:#24292E;">    fastcgi_connect_timeout 300;</span></span>
<span class="line"><span style="color:#24292E;">    fastcgi_send_timeout 300;</span></span>
<span class="line"><span style="color:#24292E;">    fastcgi_read_timeout 300;</span></span>
<span class="line"><span style="color:#24292E;">    fastcgi_buffer_size 64k;</span></span>
<span class="line"><span style="color:#24292E;">    fastcgi_buffers 4 64k;</span></span>
<span class="line"><span style="color:#24292E;">    fastcgi_busy_buffers_size 128k;</span></span>
<span class="line"><span style="color:#24292E;">    fastcgi_temp_file_write_size 128k;</span></span>
<span class="line"><span style="color:#24292E;">    gzip on; </span></span>
<span class="line"><span style="color:#24292E;">    gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#24292E;">    gzip_buffers 4 16k;</span></span>
<span class="line"><span style="color:#24292E;">    gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#24292E;">    gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#24292E;">    gzip_types text/plain application/x-javascript text/css application/xml application/json;</span></span>
<span class="line"><span style="color:#24292E;">    gzip_vary on;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    server {</span></span>
<span class="line"><span style="color:#24292E;">      listen       8025;</span></span>
<span class="line"><span style="color:#24292E;">      server_name  localhost;</span></span>
<span class="line"><span style="color:#24292E;">      index index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">      root /usr/local/webserver/nginx/dist;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">    location ^~ /api/ {</span></span>
<span class="line"><span style="color:#24292E;">      proxy_pass http://172.16.16.16:8089/datamgr/;</span></span>
<span class="line"><span style="color:#24292E;">      proxy_redirect default;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,12),o=[e];function t(c,r,E,y,i,u){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
