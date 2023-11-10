import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.52d8a8a6.js";const q=JSON.parse('{"title":"GraphQL入门","description":"","frontmatter":{"title":"GraphQL入门"},"headers":[],"relativePath":"words/graphql.md","filePath":"words/graphql.md"}'),p={name:"words/graphql.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2020-04-28 21:39:45</p></div><p><a href="https://graphql.cn/" target="_blank" rel="noreferrer">GraphQL</a>一种用于 API 的查询语言。示例<a href="https://github.com/ourvibes/GraphQL_Guide" target="_blank" rel="noreferrer">代码仓库</a>。</p><ul><li>使用express和GraphQL</li><li>参数类型和传递</li><li>GraphQL Client</li><li>使用Mulations修改数据</li><li>认证与中间件</li><li>与数据库交互</li><li>Constructing Types</li></ul><p>示例主要使用了express和<a href="https://graphql.org/graphql-js/express-graphql/" target="_blank" rel="noreferrer">express-graphql</a>，<a href="https://www.npmjs.com/package/mysql" target="_blank" rel="noreferrer">mysql</a>。</p><p>下面的代码中演示了参数类型与参数的传递，mulations，中间件，和mysql的交互。<a href="https://graphql.org/graphql-js/constructing-types/" target="_blank" rel="noreferrer">constructing-types</a>就是把type拆开来写，便于代码的维护，代码示例省略。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">buildSchema</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;graphql&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">graphqlHttp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express-graphql&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mysql&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">connection</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createConnection</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&#39;root&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  password: </span><span style="color:#9ECBFF;">&#39;root&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;my_db&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// String</span></span>
<span class="line"><span style="color:#6A737D;">// Int [Int]</span></span>
<span class="line"><span style="color:#6A737D;">// Float</span></span>
<span class="line"><span style="color:#6A737D;">// Boolean</span></span>
<span class="line"><span style="color:#6A737D;">// ID</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">schema</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">buildSchema</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">  type Student {</span></span>
<span class="line"><span style="color:#9ECBFF;">    name: String</span></span>
<span class="line"><span style="color:#9ECBFF;">    age: Int</span></span>
<span class="line"><span style="color:#9ECBFF;">    address: String</span></span>
<span class="line"><span style="color:#9ECBFF;">    sno: String</span></span>
<span class="line"><span style="color:#9ECBFF;">    classNo: Int</span></span>
<span class="line"><span style="color:#9ECBFF;">    guote(q : String): String</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">  input StudentInput {</span></span>
<span class="line"><span style="color:#9ECBFF;">    name: String</span></span>
<span class="line"><span style="color:#9ECBFF;">    age: Int</span></span>
<span class="line"><span style="color:#9ECBFF;">    address: String</span></span>
<span class="line"><span style="color:#9ECBFF;">    sno: String</span></span>
<span class="line"><span style="color:#9ECBFF;">    classNo: Int</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">  type Mutation {</span></span>
<span class="line"><span style="color:#9ECBFF;">    createStudent(input: StudentInput): Student</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">  type Query {</span></span>
<span class="line"><span style="color:#9ECBFF;">    hello: String</span></span>
<span class="line"><span style="color:#9ECBFF;">    getStudent(sno: String!): Student</span></span>
<span class="line"><span style="color:#9ECBFF;">    queryStudent: [Student]</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dbData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  student: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Leslie&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sno: </span><span style="color:#9ECBFF;">&#39;201310119000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;hubei&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      classNo: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">guote</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">q</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">classNo</span><span style="color:#9ECBFF;">} class quote: \${</span><span style="color:#E1E4E8;">q</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Leo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sno: </span><span style="color:#9ECBFF;">&#39;201310119001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;hongkong&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      classNo: </span><span style="color:#79B8FF;">11</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rootValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">hello</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hello world!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getStudent</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">sno</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> dbData.student.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">it</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> it.sno </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> sno)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">queryStudent</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> dbData.student</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">createStudent</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// sql</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   connection.query(&#39;insert into Student set ?&#39;, input, (err) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//       return</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     resolve(input)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#E1E4E8;">    dbData.student.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(input)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> input</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">middleWare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">rep</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// rep.headers.cooke.indexOf(&#39;auth&#39;) === -1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rep.url.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/graphql&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      error: </span><span style="color:#9ECBFF;">&#39;403!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(middleWare)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/graphql&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">graphqlHttp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  schema,</span></span>
<span class="line"><span style="color:#E1E4E8;">  rootValue,</span></span>
<span class="line"><span style="color:#E1E4E8;">  graphiql: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(express.</span><span style="color:#B392F0;">static</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;public&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">express</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;express&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">buildSchema</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;graphql&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">graphqlHttp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;express-graphql&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mysql</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mysql&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">connection</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mysql.</span><span style="color:#6F42C1;">createConnection</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  host: </span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  user: </span><span style="color:#032F62;">&#39;root&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  password: </span><span style="color:#032F62;">&#39;root&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  database: </span><span style="color:#032F62;">&#39;my_db&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// String</span></span>
<span class="line"><span style="color:#6A737D;">// Int [Int]</span></span>
<span class="line"><span style="color:#6A737D;">// Float</span></span>
<span class="line"><span style="color:#6A737D;">// Boolean</span></span>
<span class="line"><span style="color:#6A737D;">// ID</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">schema</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">buildSchema</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">  type Student {</span></span>
<span class="line"><span style="color:#032F62;">    name: String</span></span>
<span class="line"><span style="color:#032F62;">    age: Int</span></span>
<span class="line"><span style="color:#032F62;">    address: String</span></span>
<span class="line"><span style="color:#032F62;">    sno: String</span></span>
<span class="line"><span style="color:#032F62;">    classNo: Int</span></span>
<span class="line"><span style="color:#032F62;">    guote(q : String): String</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">  input StudentInput {</span></span>
<span class="line"><span style="color:#032F62;">    name: String</span></span>
<span class="line"><span style="color:#032F62;">    age: Int</span></span>
<span class="line"><span style="color:#032F62;">    address: String</span></span>
<span class="line"><span style="color:#032F62;">    sno: String</span></span>
<span class="line"><span style="color:#032F62;">    classNo: Int</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">  type Mutation {</span></span>
<span class="line"><span style="color:#032F62;">    createStudent(input: StudentInput): Student</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">  type Query {</span></span>
<span class="line"><span style="color:#032F62;">    hello: String</span></span>
<span class="line"><span style="color:#032F62;">    getStudent(sno: String!): Student</span></span>
<span class="line"><span style="color:#032F62;">    queryStudent: [Student]</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">\`</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dbData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  student: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Leslie&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      sno: </span><span style="color:#032F62;">&#39;201310119000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;hubei&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      classNo: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">guote</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">q</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">classNo</span><span style="color:#032F62;">} class quote: \${</span><span style="color:#24292E;">q</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Leo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      sno: </span><span style="color:#032F62;">&#39;201310119001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;hongkong&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      classNo: </span><span style="color:#005CC5;">11</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rootValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">hello</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hello world!&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getStudent</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">sno</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dbData.student.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">it</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> it.sno </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> sno)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">queryStudent</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dbData.student</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">createStudent</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">input</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// sql</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   connection.query(&#39;insert into Student set ?&#39;, input, (err) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//       return</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     resolve(input)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#24292E;">    dbData.student.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(input)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> input</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">middleWare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">rep</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// rep.headers.cooke.indexOf(&#39;auth&#39;) === -1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rep.url.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/graphql&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      error: </span><span style="color:#032F62;">&#39;403!&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }))</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(middleWare)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/graphql&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">graphqlHttp</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  schema,</span></span>
<span class="line"><span style="color:#24292E;">  rootValue,</span></span>
<span class="line"><span style="color:#24292E;">  graphiql: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(express.</span><span style="color:#6F42C1;">static</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;public&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">)</span></span></code></pre></div><p>如果想要频繁的改动重启项目，可使用nodemon【cnpm install -g nodemon】启动项目。 项目启动后，浏览器地址栏输入：<code>http://localhost:3000/graphql</code>会出现一个graphiQL的调试界面。 左侧的输入为：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">query {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">hello</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">getStudent(sno</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;201310119000&quot;</span><span style="color:#FDAEB7;font-style:italic;">)</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">age</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">adress</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">sno</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">classNo</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">guote(q</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;好好学习，天天向上！&quot;</span><span style="color:#FDAEB7;font-style:italic;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">queryStudent</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">age</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">adress</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">sno</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">classNo</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">query {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">hello</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">getStudent(sno</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;201310119000&quot;</span><span style="color:#B31D28;font-style:italic;">)</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">age</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">adress</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">sno</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">classNo</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">guote(q</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;好好学习，天天向上！&quot;</span><span style="color:#B31D28;font-style:italic;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">queryStudent</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">age</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">adress</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">sno</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">classNo</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>右侧的输出为：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;hello world!&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;getStudent&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Leslie&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;adress&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;hubei&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;sno&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;201310119000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;classNo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;guote&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;11 class quote: 好好学习，天天向上！&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;queryStudent&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Leslie&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;adress&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;hubei&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;sno&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;201310119000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;classNo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">11</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Leo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;adress&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;hongkong&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;sno&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;201310119001&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;classNo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">11</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;hello&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;hello world!&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;getStudent&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Leslie&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;adress&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;hubei&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;sno&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;201310119000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;classNo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;guote&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;11 class quote: 好好学习，天天向上！&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;queryStudent&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Leslie&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;adress&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;hubei&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;sno&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;201310119000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;classNo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">11</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Leo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;adress&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;hongkong&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;sno&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;201310119001&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;classNo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">11</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>验证mutation，左侧输入：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">mutation {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">createStudent(input</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;jack&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">sno:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;201310119002&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">address:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">classNo:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span><span style="color:#FDAEB7;font-style:italic;">)</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">address</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">sno</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">classNo</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mutation {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">createStudent(input</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;jack&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">sno:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;201310119002&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">address:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;shanghai&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">classNo:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#B31D28;font-style:italic;">)</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">address</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">sno</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">classNo</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>右侧输出：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;createStudent&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;jack&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;address&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;sno&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;201310119002&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;classNo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;createStudent&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;jack&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;address&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;sno&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;201310119002&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;classNo&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>增加一个graphql clients：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;GraphQL_Client&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">getJSON</span><span style="color:#9ECBFF;">()&quot;</span><span style="color:#E1E4E8;">&gt;Get JSON&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getJSON</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">query</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">        query GetStudent($sno: String!) {</span></span>
<span class="line"><span style="color:#9ECBFF;">          getStudent(sno: $sno) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            name</span></span>
<span class="line"><span style="color:#9ECBFF;">            address</span></span>
<span class="line"><span style="color:#9ECBFF;">            age</span></span>
<span class="line"><span style="color:#9ECBFF;">            classNo</span></span>
<span class="line"><span style="color:#9ECBFF;">          } </span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">variables</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        sno: </span><span style="color:#9ECBFF;">&quot;201310119000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/graphql&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;Accept&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        body: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          query,</span></span>
<span class="line"><span style="color:#E1E4E8;">          variables</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> resp.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">json</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(json)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;GraphQL_Client&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">getJSON</span><span style="color:#032F62;">()&quot;</span><span style="color:#24292E;">&gt;Get JSON&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getJSON</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">query</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">        query GetStudent($sno: String!) {</span></span>
<span class="line"><span style="color:#032F62;">          getStudent(sno: $sno) {</span></span>
<span class="line"><span style="color:#032F62;">            name</span></span>
<span class="line"><span style="color:#032F62;">            address</span></span>
<span class="line"><span style="color:#032F62;">            age</span></span>
<span class="line"><span style="color:#032F62;">            classNo</span></span>
<span class="line"><span style="color:#032F62;">          } </span></span>
<span class="line"><span style="color:#032F62;">        }</span></span>
<span class="line"><span style="color:#032F62;">      \`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">variables</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        sno: </span><span style="color:#032F62;">&quot;201310119000&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/graphql&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        headers: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;Accept&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        body: </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          query,</span></span>
<span class="line"><span style="color:#24292E;">          variables</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">resp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> resp.</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">json</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(json)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>点击按钮，输出的数据为：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;getStudent&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;Leslie&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;address&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;hubei&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;classNo&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">11</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;getStudent&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;Leslie&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;address&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;hubei&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;classNo&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">11</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,18),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{q as __pageData,C as default};
