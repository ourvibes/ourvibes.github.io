import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.52d8a8a6.js";const u=JSON.parse('{"title":"Vue双向绑定原理解析","description":"","frontmatter":{"title":"Vue双向绑定原理解析"},"headers":[],"relativePath":"words/vue-data-bind.md","filePath":"words/vue-data-bind.md"}'),p={name:"words/vue-data-bind.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2017-10-23 19:48:00</p></div><p>Vue双向绑定原理解析。😃</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">//双向绑定的原理</span></span>
<span class="line"><span style="color:#E1E4E8;">let doc = document</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">let log = console.info.bind(console)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function node2Fragment(node, vm) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  let temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> doc.</span><span style="color:#B392F0;">createDocumentFragment</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  let child</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">while</span><span style="color:#E1E4E8;"> (child </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.firstChild) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  	</span><span style="color:#B392F0;">complie</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  	temp.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  return temp</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function complie(node, vm) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  let  reg </span><span style="color:#F97583;">=</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\{\\{</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">)</span><span style="color:#85E89D;font-weight:bold;">\\}\\}</span><span style="color:#9ECBFF;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">  let type </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.nodeType</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">switch</span><span style="color:#E1E4E8;">(type) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    case  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        let attr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node.attributes;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">for</span><span style="color:#E1E4E8;"> ( let i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> attr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">attr</span><span style="color:#E1E4E8;">[</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">].nodeName == </span><span style="color:#9ECBFF;">&#39;v-model&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> attr[i].nodeValue</span></span>
<span class="line"><span style="color:#E1E4E8;">	          node.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		      vm[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.target.value</span></span>
<span class="line"><span style="color:#E1E4E8;">	        })</span></span>
<span class="line"><span style="color:#E1E4E8;">	          node.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm[name]</span></span>
<span class="line"><span style="color:#E1E4E8;">	          node.</span><span style="color:#B392F0;">removeAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;v-model&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        break</span></span>
<span class="line"><span style="color:#E1E4E8;">    case  </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (reg.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(node.nodeValue)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            let name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> RegExp.$1</span></span>
<span class="line"><span style="color:#E1E4E8;">            name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            node.nodeValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm[name]</span></span>
<span class="line"><span style="color:#E1E4E8;">            new </span><span style="color:#B392F0;">Watcher</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        break</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function observe(obj, vm) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(obj).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">defineReactive</span><span style="color:#E1E4E8;">(vm, key, obj[key])</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function defineReactive(obj, key, val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  let dep </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dep</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, key, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Dep.target) dep.</span><span style="color:#B392F0;">addSub</span><span style="color:#E1E4E8;">(Dep.target)</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (val </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> newVal) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">       val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVal</span></span>
<span class="line"><span style="color:#E1E4E8;">       dep.</span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function Watcher(vm, node, name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Dep.target </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.vm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  Dep.target </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Watcher.prototype = {</span></span>
<span class="line"><span style="color:#E1E4E8;">  update: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.node.nodeValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  get: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.vm[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function Dep() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.subs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Dep.prototype = {</span></span>
<span class="line"><span style="color:#E1E4E8;">  addSub: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sub</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(sub)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  notify: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sub</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sub.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function Vue(options) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.data</span></span>
<span class="line"><span style="color:#E1E4E8;">  let data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(data, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  let id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.el</span></span>
<span class="line"><span style="color:#E1E4E8;">  let dom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">node2Fragment</span><span style="color:#E1E4E8;">(doc.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(id), </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  doc.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(id).</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(dom)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   {{text}}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  var vm=new Vue({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el:</span><span style="color:#9ECBFF;">&#39;app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">       data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">          text:</span><span style="color:#9ECBFF;">&#39;hello world!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">       }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">//双向绑定的原理</span></span>
<span class="line"><span style="color:#24292E;">let doc = document</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">let log = console.info.bind(console)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function node2Fragment(node, vm) {</span></span>
<span class="line"><span style="color:#24292E;">  let temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> doc.</span><span style="color:#6F42C1;">createDocumentFragment</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  let child</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">while</span><span style="color:#24292E;"> (child </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.firstChild) {</span></span>
<span class="line"><span style="color:#24292E;">  	</span><span style="color:#6F42C1;">complie</span><span style="color:#24292E;">(</span><span style="color:#E36209;">child</span><span style="color:#24292E;">, </span><span style="color:#E36209;">vm</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  	temp.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#E36209;">child</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  return temp</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function complie(node, vm) {</span></span>
<span class="line"><span style="color:#24292E;">  let  reg </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\{\\{</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">)</span><span style="color:#22863A;font-weight:bold;">\\}\\}</span><span style="color:#032F62;">/</span></span>
<span class="line"><span style="color:#24292E;">  let type </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.nodeType</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">switch</span><span style="color:#24292E;">(type) {</span></span>
<span class="line"><span style="color:#24292E;">    case  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        let attr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node.attributes;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">for</span><span style="color:#24292E;"> ( let i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> attr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">attr</span><span style="color:#24292E;">[</span><span style="color:#E36209;">i</span><span style="color:#24292E;">].nodeName == </span><span style="color:#032F62;">&#39;v-model&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> attr[i].nodeValue</span></span>
<span class="line"><span style="color:#24292E;">	          node.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;input&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		      vm[name] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.target.value</span></span>
<span class="line"><span style="color:#24292E;">	        })</span></span>
<span class="line"><span style="color:#24292E;">	          node.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm[name]</span></span>
<span class="line"><span style="color:#24292E;">	          node.</span><span style="color:#6F42C1;">removeAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;v-model&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        break</span></span>
<span class="line"><span style="color:#24292E;">    case  </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (reg.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(node.nodeValue)) {</span></span>
<span class="line"><span style="color:#24292E;">            let name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> RegExp.$1</span></span>
<span class="line"><span style="color:#24292E;">            name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name.</span><span style="color:#6F42C1;">trim</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            node.nodeValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm[name]</span></span>
<span class="line"><span style="color:#24292E;">            new </span><span style="color:#6F42C1;">Watcher</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;">, </span><span style="color:#E36209;">node</span><span style="color:#24292E;">, </span><span style="color:#E36209;">name</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        break</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function observe(obj, vm) {</span></span>
<span class="line"><span style="color:#24292E;">  Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(obj).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">defineReactive</span><span style="color:#24292E;">(vm, key, obj[key])</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function defineReactive(obj, key, val) {</span></span>
<span class="line"><span style="color:#24292E;">  let dep </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dep</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj, key, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Dep.target) dep.</span><span style="color:#6F42C1;">addSub</span><span style="color:#24292E;">(Dep.target)</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (val </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> newVal) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">       val </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newVal</span></span>
<span class="line"><span style="color:#24292E;">       dep.</span><span style="color:#6F42C1;">notify</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function Watcher(vm, node, name) {</span></span>
<span class="line"><span style="color:#24292E;">  Dep.target </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.vm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  Dep.target </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Watcher.prototype = {</span></span>
<span class="line"><span style="color:#24292E;">  update: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.node.nodeValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  get: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.vm[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function Dep() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.subs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Dep.prototype = {</span></span>
<span class="line"><span style="color:#24292E;">  addSub: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">sub</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.subs.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(sub)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  notify: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.subs.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">sub</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      sub.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function Vue(options) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.data</span></span>
<span class="line"><span style="color:#24292E;">  let data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(data, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  let id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.el</span></span>
<span class="line"><span style="color:#24292E;">  let dom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">node2Fragment</span><span style="color:#24292E;">(doc.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(id), </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  doc.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(id).</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(dom)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">   {{text}}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  var vm=new Vue({</span></span>
<span class="line"><span style="color:#24292E;">    el:</span><span style="color:#032F62;">&#39;app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">       data:{</span></span>
<span class="line"><span style="color:#24292E;">          text:</span><span style="color:#032F62;">&#39;hello world!&#39;</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,3),e=[o];function t(c,E,r,y,i,F){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
