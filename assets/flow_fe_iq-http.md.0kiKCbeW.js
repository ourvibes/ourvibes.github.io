import{_ as i,c as l,o as e,a2 as s}from"./chunks/framework.C27ctXOu.js";const h=JSON.parse('{"title":"Q&A - http","description":"","frontmatter":{"title":"Q&A - http"},"headers":[],"relativePath":"flow/fe/iq-http.md","filePath":"flow/fe/iq-http.md"}'),o={name:"flow/fe/iq-http.md"},a=s(`<details class="details custom-block"><summary>URI、URL、URN分别是什么？</summary><p>URL代表资源的路径地址，而URI代表资源的名称。</p><ul><li><p>URI(Universal Resource Identifier): <code>统一资源标志符</code>;</p></li><li><p>URL(Universal Resource Locator): <code>统一资源定位符</code>; URL类似于住址，它告诉你一种寻找目标的方式(在这个例子中，是通过街道地址找到一个人)。要知道，上述定义同时也是一个URI。</p></li><li><p>URN(Universal Resource Name): 统一资源名称; 我们可以把一个人的名字看作是URN; 因此可以用URN来唯一标识一个实体。</p></li></ul><p>URL是URI的一个子集，告诉我们访问网络位置的方式。URN是URI的子集，包括名字(给定的命名空间内)，但是不包括访问方式。URN 和 URL 都是URI的子集。</p></details><details class="details custom-block"><summary>什么是跨域？</summary><p>跨域本质是浏览器基于同源策略的一种安全手段。</p><ul><li><code>协议</code>相同（protocol）</li><li><code>主机</code>相同（host）</li><li><code>端口</code>相同（port）</li></ul></details><details class="details custom-block"><summary>常见的HTTP请求方法</summary><ul><li>GET: 向服务器获取数据</li><li>POST：将实体提交到指定的资源，通常会造成服务器资源的修改。</li><li>PUT：上传文件，修改数据</li><li>DELETE：删除服务器上的对象</li><li>HEAD：获取报文首部，与GET相比，不返回报文主体部分</li><li>OPTIONS：询问支持的请求方法，用来跨域请求</li><li>TRACE：追踪 请求—响应 的传输路径</li><li>CONNECT：要求在与代理服务器通信时建立隧道，使用隧道进行TCP通信</li></ul></details><details class="details custom-block"><summary>什么是 XSS 攻击？如何预防?</summary><p>XSS攻击，全称为<code>跨站脚本攻击</code>（Cross-Site Scripting），是一种常见的Web安全漏洞。攻击者通过在页面中插入恶意脚本，利用用户浏览器对页面的信任，获取用户的敏感信息或进行其他恶意操作。</p><p>XSS攻击通常分为:</p><ul><li><code>存储型</code>XSS攻击是指将用户提交的恶意脚本存储在服务器端，当受害者访问该页面时，恶意脚本会被执行；</li><li><code>反射型</code>XSS攻击则是将恶意脚本作为参数传递给服务器端，服务器端将恶意脚本反射到页面中，当受害者访问该页面时，恶意脚本被执行；</li><li><code>DOM型</code>XSS攻击则是恶意脚本修改了页面中的 DOM 结构，从而达到攻击的目的。</li></ul><p>为了预防XSS攻击，可以采取以下几种方法：</p><ul><li>输入合法性验证：在服务端对用户输入的数据进行合法性验证，如检查输入是否符合指定格式，排除恶意字符等。</li><li>转义特殊字符：在网页中用户输入的内容需要使用转义字符，例如将“&lt;”转义成“&lt;”，将“&gt;”转义成“&gt;”，避免浏览器将这些字符误解为标签等。</li><li>设置HTTP头部：设置HTTP头部，包括Content-Security-Policy、X-Content-Type-Options、X-XSS-Protection等，来使浏览器拦截来自第三方资源的恶意脚本。</li><li>使用脚本过滤器：使用脚本过滤器，如Google的Closure Library和jQuery库等，能够对来自用户的数据进行过滤和检查。</li><li>限制Cookie：限制Cookie只能在HTTPS连接下使用，并使用HttpOnly标识确保Cookie不能通过JavaScript代码访问。</li></ul></details><details class="details custom-block"><summary>什么是CSRF攻击？如何预防？</summary><p>CSRF攻击，也被称为<code>跨站请求伪造</code>（Cross-Site <code>Request</code> Forgery）攻击，是一种常见的网络安全威胁。这种攻击利用用户在目标网站上<code>已经认证的身份</code>，在用户不知情的情况下，构造恶意请求并冒充用户身份向目标网站发起请求。由于请求包含了用户的认证信息，如Cookie等，服务器会误认为这些请求是用户自己发起的，从而执行攻击者的恶意操作。这些操作可能包括更改用户的密码、发出支付请求、删除重要数据等。</p><p>为了预防CSRF攻击，可以采取以下几种常见的防范措施：</p><ul><li>随机令牌：在每次向目标网站发送请求时，都要携带一个随机生成的令牌（Token）。目标网站在处理请求时会校验该令牌的有效性，如果无效则拒绝请求。这样，攻击者无法伪造有效的令牌，从而避免CSRF攻击。</li><li>限制GET请求：GET接口容易被用来进行CSRF攻击，因为攻击者可以通过构造一个包含恶意请求的URL，并诱导用户点击或访问该URL来发起攻击。因此，应尽量避免使用GET请求执行敏感操作，而是使用POST请求。</li><li>Cookie策略：一些浏览器（如IE6、7、8和Safari）默认会拦截第三方本地Cookie的发送。利用这一特性，可以减少CSRF攻击的风险。</li><li>添加验证码：对于敏感操作，可以添加验证码机制。这样，即使攻击者构造了恶意请求，用户也需要输入正确的验证码才能完成操作，增加了攻击的难度。</li><li>使用安全的HTTP方法：尽量使用安全的HTTP方法，如POST、PUT等，来执行敏感操作，而不是使用GET方法。</li></ul></details><details class="details custom-block"><summary>说说 WebSocket 和 HTTP 的区别</summary><ul><li><p>协议类型与通信方式：</p><ul><li>WebSocket实现了浏览器与服务器之间的<code>全双工通信</code>，这意味着双方都可以主动向对方发送和接收信息。而 HTTP 则是一种<code>单向</code>的通信协议，通常是由客户端（如浏览器）发起请求，服务器响应请求。</li></ul></li><li><p>连接建立与维护：</p><ul><li>WebSocket在建立连接时，需要通过握手过程在浏览器和服务器之间建立持久性的连接。这种连接一旦建立，就可以持续进行数据传输，直到<code>显式关闭</code>。而 HTTP 则是<code>短连接</code>，每次请求-响应完成后，连接就会断开。虽然可以通过一些技术（如Ajax轮询或长轮询）实现类似持久连接的效果，但本质上HTTP 仍然是短连接。</li></ul></li><li><p>协议状态与无状态性：</p><ul><li>WebSocket 是有<code>状态</code>的协议，服务器可以主动向客户端推送数据，因为连接是持久的，服务器知道下一次的通信对象是谁。相比之下，HTTP 是<code>无状态</code>的协议，每次通信完成后，服务器并不知道下一次的客户端是谁，因为连接已经断开。</li></ul></li><li><p>协议开头：</p><ul><li>WebSocket 的协议开头通常以<code>“ws”或“wss”</code>（加密）表示，而 HTTP 的协议开头则是<code>“http”或“https”</code>（加密）。</li></ul></li><li><p>应用场景：</p><ul><li>由于WebSocket的全双工通信和持久连接特性，它适用于需要<code>实时通信、频繁数据交换或服务器主动推送数据</code>的场景，如在线聊天、实时股票行情等。而 HTTP 则更适用于简单的请求-响应模式，如网页浏览、文件下载等。</li></ul></li></ul></details><details class="details custom-block"><summary>session ?</summary><p>HTTP Session 是 Web 应用程序中用于<code>跟踪用户会话状态</code>的一种机制。在用户与 Web 应用程序进行交互的过程中，HTTP Session 允许<code>服务器存储</code>和检索关于特定用户的信息，以便在多个请求之间保持状态。</p><p>HTTP 本身是一种无状态的协议，意味着每个请求都是独立的，服务器不会记住之前的请求或用户。然而，在 Web 应用程序中，经常需要跟踪用户的身份、偏好、购物车内容等信息，以便提供个性化的体验。这时，就需要使用 HTTP Session 来实现<code>会话状态的跟踪</code>。</p><p>HTTP Session 的工作原理如下：</p><ul><li>会话创建：当用户首次访问 Web 应用程序时，服务器会创建一个新的 HTTP Session 对象，并为其分配一个唯一的会话标识符（session ID）。这个会话标识符通常通过 Cookie 机制发送给客户端，保存在用户的浏览器中。</li><li>会话维护：在后续的请求中，客户端会将会话标识符包含在请求头中发送给服务器。服务器通过解析请求头中的会话标识符，可以找到对应的 HTTP Session 对象，从而获取和更新用户的会话状态。</li><li>会话数据存储：HTTP Session 对象可以存储各种类型的数据，如用户身份、购物车内容、访问历史等。这些数据可以在多个请求之间共享和更新。</li><li>会话销毁：当用户关闭浏览器或会话超时时，服务器会销毁相应的 HTTP Session 对象，释放相关资源。</li></ul><p>HTTP Session 依赖于 <code>Cookie</code> 机制来实现会话标识符的传递。因此，如果客户端禁用了 Cookie，或者使用的是不支持 Cookie 的 HTTP 客户端（如某些命令行工具），那么 HTTP Session 将无法正常工作。此外，由于 HTTP Session 数据存储在服务器端，因此在大规模并发场景下可能会对服务器性能产生一定影响。</p><p>在实际开发中，为了减轻服务器压力并提高性能，可以采用一些优化措施，如将会话数据存储在分布式缓存中、使用 <code>Token</code> 认证机制替代传统的 Session 机制等。</p></details><details class="details custom-block"><summary>https 的握手过程</summary><ul><li><p>客户端发起请求：客户端（如浏览器）将HTTPS的URL输入到地址栏中并发送请求时，会将自己支持的加密算法、SSL/TLS版本以及其他相关信息一并发送到服务器。</p></li><li><p>服务器应答：服务器收到客户端请求后，会向客户端发送一个数字证书，其中包含了服务器的公钥、证书的有效期、证书的颁发机构等信息。服务器的公钥用于后续的加密通信。</p></li><li><p>客户端验证证书：客户端会对服务器发送的证书进行验证，包括查看证书是否过期、是否被撤销，以及验证证书颁发机构的可信度等。</p></li><li><p>客户端生成密钥：如果证书验证通过，客户端会生成一个随机数作为对称加密的密钥，并用服务器的公钥进行加密，然后发送给服务器。</p></li><li><p>服务器解密密钥：服务器使用自己的私钥对接收到的加密的密钥进行解密，得到客户端生成的对称加密密钥。</p></li><li><p>交换“Finished”信息：客户端和服务器使用之前协商好的算法和密钥，各自生成一串随机数据，并使用对方的公钥进行加密，然后交换这串数据。这样可以确保双方都正确地生成了密钥，并且密钥没有被篡改。如果任何一方在解密过程中发现数据不一致，那么就会断开连接。</p></li><li><p>加密通信：客户端和服务器都拥有了相同的对称加密密钥，他们会使用该密钥对后续的通信进行加密和解密，保证了数据的安全性。</p></li><li><p>握手结束：客户端和服务器完成了密钥的交换和加密通信的建立，握手过程结束，之后的通信都是在该加密通道上进行。</p></li></ul></details><details class="details custom-block"><summary>HTTP2中，多路复用的原理是什么？</summary><p>HTTP/2 中的多路复用（Multiplexing）原理主要基于以下几个核心概念：</p><ul><li><p>二进制分帧层：HTTP/2 协议将 HTTP 消息分解为更小的帧（frames），并在一个单一的连接上交错发送这些帧。这种设计使得同一连接上的多个请求和响应可以并行处理，而不需要等待前一个请求或响应完成。</p></li><li><p>流（Streams）：在 HTTP/2 中，每个请求或响应都被视为一个独立的流，每个流都有一个唯一的<code>标识符</code>。服务器可以并发地处理多个流，而不需要按照请求到达的顺序来处理。</p></li><li><p>优先级（Priorities）：HTTP/2 允许客户端为每个流设置<code>优先级</code>。当服务器面临资源限制（如带宽或 CPU）时，它可以使用这些优先级来决定首先处理哪些流。这种机制有助于优化用户体验，确保重要的请求（如页面的主要内容）能够优先得到处理。</p></li><li><p>流量控制（Flow Control）：HTTP/2 提供了<code>流量控制</code>机制，允许接收端控制发送端发送数据的速率。这有助于防止发送端发送过多数据导致接收端处理不过来，从而避免了网络拥塞和性能下降。</p></li></ul><p>通过这些机制，HTTP/2 实现了多路复用，即在一个<code>单一的 TCP 连接上并行处理多个请求和响应</code>。这极大地提高了网络资源的利用率和应用的性能。与 HTTP/1.1 相比，HTTP/2 不再需要为每个请求建立新的 TCP 连接，从而<code>减少了连接建立和关闭的开销</code>，提高了整体性能。</p></details><details class="details custom-block"><summary>为什么推荐将静态资源放到cdn上？</summary><p>将静态资源放到CDN（Content Delivery Network，<code>内容分发网络</code>）上有多个优势，理由如下：</p><ul><li><p>提高访问速度和用户体验：CDN 通过在全球范围内的<code>多个节点上缓存静态资源</code>，使用户可以从<code>最近的节点获取</code>内容，显著减少了数据传输的距离和时间。这种就近获取的方式能够显著<code>提高网站的加载速度</code>，从而提升用户的访问体验。</p></li><li><p>减轻源服务器负载：通过将静态资源缓存在 CDN 节点上，可以大大<code>减轻源服务器的负载</code>压力。CDN 节点能够处理大量的用户请求，分担源服务器的工作量，从而提高网站的可扩展性和稳定性。</p></li><li><p>提供高可用性和容错性：CDN 在全球范围内部署了多个节点，当某个节点出现故障或网络中断时，用户仍然可以从其他可用的节点获取内容。这种冗余设计保证了网站的高可用性和<code>容错性</code>，降低了因单一节点故障导致的服务中断风险。</p></li><li><p>节省带宽成本：通过使用 CDN 缓存，网站可以将静态资源缓存在边缘节点上，并通过从边缘节点向用户提供资源来减少主服务器的带宽使用量。这有助于降低带宽成本，对于大型网站来说尤其具有经济意义。</p></li><li><p>优化全球访问体验：CDN 通常针对不同地区和运营商进行优化，确保用户无论身处何地都能获得良好的访问体验。这有助于提升网站在全球范围内的用户满意度和竞争力。</p></li></ul><p>综上所述，将静态资源放到 CDN 上能够显著提高网站的<code>访问速度</code>、<code>稳定性</code>、<code>可用性</code>和<code>经济性</code>，是提升网站性能和用户体验的有效手段。因此，对于需要处理大量静态资源的网站来说，使用CDN是一个值得推荐的策略。</p></details><details class="details custom-block"><summary>什么是DNS劫持？</summary><p>DNS劫持，也称为<code>域名重定向</code>，是 Internet 攻击的一种方式。攻击者通过<code>攻击域名解析服务器</code>或<code>伪造域名解析服务器</code>，将目标网站的域名解析为错误的IP地址，使用户无法访问目标网站，或故意或恶意要求用户访问指定的IP地址（网站）。</p><p>DNS劫持主要有四种基本类型：</p><ol><li>本地DNS劫持：攻击者在用户计算机上安装木马恶意软件，并更改本地DNS设置，将用户重定向到恶意站点。</li><li>路由器DNS劫持：由于路由器密码泄露或固件错误，攻击者可以接管路由器并重置DNS地址，这将影响所有连接到路由器的用户。</li><li>中间人（MITM）DNS攻击：攻击者拦截用户与DNS服务器之间的通信，并向恶意站点提供不同的目标IP地址。</li><li>流氓DNS服务器：攻击者通过入侵DNS服务器并更改DNS记录，将DNS请求重定向到恶意站点，从而实现DNS劫持。</li></ol><p>为了防止 DNS 劫持，建议:</p><ul><li>使用可信赖的 DNS 服务器</li><li>实施 DNSSEC</li><li>更新 DNS 软件</li><li>使用 DNS 防火墙</li><li>增强网络安全</li></ul></details><details class="details custom-block"><summary>HTTPS 为什么是安全的？</summary><ul><li><p>数据加密：HTTPS 使用<code>TLS（Transport Layer Security）</code>协议对传输的数据进行加密。这意味着通过 HTTPS 传输的数据在发送和接收过程中会被加密，使得攻击者很难在传输过程中截获、窃听或篡改数据。相比之下，HTTP 传输的数据是明文的，容易被拦截和解读。</p></li><li><p>身份认证：HTTPS 使用<code>SSL证书</code>来<code>验证服务器的身份</code>。当浏览器与服务器建立HTTPS连接时，服务器会向浏览器发送一个证书，证书包含了服务器的<code>公钥</code>。浏览器会验证证书的合法性，以确保用户连接的是合法的服务器，而不是恶意伪装的网站。这种身份认证机制有助于防止中间人攻击和其他类型的欺诈行为。</p></li><li><p>数据完整性：HTTPS不仅加密了数据，还提供了<code>数据完整性</code>的保证。这意味着数据在传输过程中<code>不会被篡改</code>，因为篡改后的数据在解密时会无法通过完整性验证。这种机制确保了用户接收到的数据是完整且未经篡改的。</p></li><li><p>信任与SEO：由于 HTTPS 提供了更高的安全性，使用 HTTPS 的网站会得到<code>用户和搜索引擎的更高信任</code>。这有助于提升网站的声誉和<code>排名</code>，从而吸引更多的访问者和业务机会。</p></li></ul></details><details class="details custom-block"><summary>HTTP 报文结构是怎样的 ？</summary><p>HTTP报文结构主要由<code>请求报文</code>和<code>响应报文</code>构成，这两者分别由<code>客户端</code>和<code>服务器</code>在<code>HTTP通信过程中产生</code>。</p><p>请求报文的结构主要包括<code>请求行</code>、<code>请求头部</code>和<code>请求主体</code>。请求行包含了<code>请求方法</code>、<code>目标URL</code>和<code>协议版本</code>，这三部分以空格分隔并以回车换行符结束。请求方法如GET、POST等，用于指示请求的具体操作类型。目标URL则指示了请求的<code>目标资源位置</code>。请求头部包含了<code>关于请求的附加信息</code>，如请求的附加参数、客户端信息等。请求主体则包含了<code>应被发送的数据</code>，但并非所有请求报文都包含请求主体。</p><p>响应报文的结构则主要包括<code>状态行</code>、<code>响应头部</code>和<code>响应主体</code>。状态行包含了<code>协议版本</code>、<code>状态码</code>和<code>状态码的原因短语</code>，用于描述请求的处理结果。响应头部与请求头部类似，包含了关于响应的附加信息。响应主体则包含了<code>响应的具体内容</code>，如HTML文档、图片等。</p></details><details class="details custom-block"><summary>POST请求的 Content-Type 常见的有哪几种？</summary><ul><li>application/x-www-form-urlencoded：用于普通的 HTML 表单提交，在请求正文中将表单字段编码为键值对。</li><li>multipart/form-data：用于上传文件或二进制数据的表单提交，请求正文以多部分形式进行编码。</li><li>application/json：用于发送 JSON 格式的数据，请求正文中的数据将以 JSON 形式进行传输。</li><li>text/plain：纯文本格式，适用于发送纯文本数据。</li><li>application/xml：用于发送 XML 数据。</li><li>text/html：用于发送 HTML 数据。</li><li>application/octet-stream：用于发送二进制数据，如文件下载时使用。</li><li>application/graphql：用于发送 GraphQL 查询或请求。</li><li>application/x-www-form-urlencoded;charset=UTF-8：类似于 application/x-www-form-urlencoded，但指定了字符编码为 UTF-8。</li><li>其他自定义的 Content-Type 类型。</li></ul></details><details class="details custom-block"><summary>跨域时怎么处理 cookie？</summary><ul><li><p>设置 <code>withCredentials</code> 属性：在发送跨域请求的客户端代码中，将 withCredentials 属性设置为 true。</p></li><li><p>服务端处理 <code>CORS（跨域资源共享）</code>请求</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://example.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Credentials&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></details><details class="details custom-block"><summary>Blob，ArrayBuffer，Base64</summary><p>Blob: Blob是一种表示<code>二进制数据的对象</code>，可以存储大量的数据。它常用于<code>处理文件、图像、音频和视频等媒体数据</code>。Blob对象可以通过new Blob()构造函数创建，也可以从其他数据源（例如，通过XMLHttpRequest下载的数据）生成。Blob提供了一些方法和属性，用于读取和操作二进制数据。</p><ul><li>文件上传和下载：Blob对象可以用于将文件数据存储为二进制形式，并进行上传或下载操作。</li><li>图片处理：可以将图像数据存储为Blob对象，并进行处理、显示或上传。</li><li>多媒体处理：可用于处理音频和视频等多媒体数据。</li><li>生成临时URL：可以使用Blob对象创建临时URL，用于在浏览器中显示或分享文件。</li></ul><p>ArrayBuffer：ArrayBuffer是一种用于表示通用的<code>二进制数据缓冲区的对象</code>。它在内存中分配一块连续的、固定大小的原始二进制数据，并提供了一些方法和属性来读取和操作这些数据。ArrayBuffer不直接访问二进制数据，而是通过TypedArray视图或DataView对象来读写数据。</p><ul><li>图像处理：可以使用ArrayBuffer来处理图像数据，例如图像解码、图像滤镜等操作。</li><li>网络请求：可用于处理二进制数据的网络请求，例如WebSocket通信或二进制协议的数据传输。</li><li>数据加密：ArrayBuffer可以用于加密算法的处理和操作。</li><li>Web Workers：ArrayBuffer可用于在Web Worker中进行多线程数据处理。</li></ul><p>Base64： Base64是一种将<code>二进制数据转换为可打印字符的编码方式</code>。它通过将二进制数据按照一定规则进行编码，生成由A-Z、a-z、0-9和一些特殊字符组成的字符串。Base64编码后的数据可以用于在文本协议中传输二进制数据，例如在网络请求中传递图片数据或在HTML中嵌入图片。</p><ul><li>图片嵌入：Base64编码可以将图片数据转换为字符串，可用于将图片嵌入到HTML、CSS或JavaScript中，减少网络请求。</li><li>图片传输：在文本协议中，如JSON或XML，可以使用Base64编码将图片数据传输到服务器或其他系统。</li><li>数据URL：可以将Base64编码的数据作为数据URL嵌入到HTML中，用于显示图像或其他媒体内容。</li><li>数据存储：某些浏览器API或本地存储机制支持Base64编码的数据存储。</li></ul><p>区别：</p><ul><li>Blob和ArrayBuffer都是用于表示和处理二进制数据的对象，但Blob通常用于处理大量数据和文件，而ArrayBuffer用于处理更小粒度的数据。</li><li>Blob对象提供了一些方法和属性，用于操作和读取二进制数据，而ArrayBuffer本身并不直接提供数据访问方法，需要通过TypedArray视图或DataView对象来读写数据。</li><li>Base64是一种编码方式，用于将二进制数据转换为可打印字符，以便在文本协议中传输。Base64编码后的数据可以作为字符串进行处理，而Blob和ArrayBuffer是二进制数据的对象表示。</li></ul></details><details class="details custom-block"><summary>TCP 和 UDP 的区别是什么？</summary><p>TCP（Transmission Control Protocol，<code>传输控制协议</code>）和UDP（User Datagram Protocol，<code>用户数据报协议</code>）都是应用于<code>传输层的网络协议</code>，它们各自有着不同的特点和适用场景。</p><ul><li><p>适用场景：</p><ul><li>TCP 适用于对可靠性要求较高的应用场景，如<code>文件传输</code>、<code>邮件</code>传输等</li><li>UDP 适用于实时性要求较高的应用场景，如<code>语音</code>、<code>视频</code>、<code>游戏</code>等</li></ul></li><li><p>连接方式：</p><ul><li>TCP 是面向连接的协议，需要在通信前建立连接</li><li>UDP 是无连接的协议，可以直接发送数据包</li></ul></li><li><p>可靠性</p><ul><li>TCP 保证传输数据的可靠性，能够保证所有数据到达目的地且顺序正确</li><li>UDP 不保证传输数据的可靠性，可能会出现数据丢失或乱序等问题</li></ul></li><li><p>开销：</p><ul><li>TCP 在传输过程中要维护连接状态、进行流量控制、拥塞控制等操作，因此开销较大</li><li>UDP 没有这些机制，传输开销较小</li></ul></li><li><p>速度：</p><ul><li>TCP 需要保证数据的可靠性，因此传输速度可能会受到一定的影响</li><li>UDP 没有这个限制，传输速度快</li></ul></li></ul></details><details class="details custom-block"><summary>websocket 的连接原理</summary><p>WebSocket的连接原理主要基于HTTP协议的升级机制，通过一次握手实现持久化的全双工通信。以下是详细的连接原理：</p><ul><li><p>握手阶段*：</p><ul><li>客户端发起连接请求：客户端通过HTTP请求方式向服务器发送连接请求。这个请求中包含了WebSocket协议版本号、握手密匙等信息，以及一个关键字段<code>Upgrade</code>，其值为&quot;websocket&quot;，表明客户端希望将连接协议从HTTP升级为WebSocket。</li><li>服务器响应：服务器接收到请求后，会进行验证。如果验证成功，服务器会返回一个状态码为101的HTTP响应，表示握手成功，并同意将协议升级为WebSocket。响应头中也会包含<code>Upgrade</code>和<code>Connection</code>字段，告知客户端协议已成功升级。</li></ul></li><li><p>连接建立：</p><ul><li>一旦握手成功，客户端和服务器之间的WebSocket连接便建立成功。这个连接是持久化的，与传统的HTTP请求-响应模式不同，它不需要每次通信都重新建立连接和断开连接。</li></ul></li><li><p>双向通信：</p><ul><li>一旦连接建立，客户端和服务器都可以通过WebSocket发送和接收数据。这种双向通信的特性使得实时数据的传输成为可能。客户端和服务器都可以主动向对方发送信息，无需等待对方的请求。</li></ul></li><li><p>保持连接：</p><ul><li>WebSocket连接是持久化的，这意味着连接在建立后会保持打开状态，直到显式关闭。这种持久性连接减少了网络开销和延迟，使得实时通信更加高效。</li></ul></li></ul><p>在WebSocket连接中，服务器可以主动向客户端推送数据，这解决了传统HTTP协议中服务器被动性的问题。同时，WebSocket使用单一的TCP连接进行全双工通信，避免了传统HTTP协议需要建立多个连接的缺陷。</p><p>此外，WebSocket还提供了诸如<code>心跳检测</code>、<code>断线重连</code>等机制，以确保连接的稳定性和可靠性。这些机制使得 WebSocket 成为实现实时通信、在线游戏、聊天应用等场景的理想选择。</p></details><details class="details custom-block"><summary>cookie 怎么设置只在 https 时携带？</summary><p>设置 cookie 的 <code>secure</code> 属性，secure 选项用来设置 cookie 只在确保安全的请求中才会发送。当请求是HTTPS或者其他安全协议时，包含 secure 选项的 cookie 才能被发送至服务器。默认情况下，cookie不会带secure选项(即为空)。所以默认情况下，不管是HTTPS协议还是HTTP协议的请求，cookie 都会被发送至服务端。</p></details><details class="details custom-block"><summary>HTTP1.0，HTTP1.1，HTTP2.0之间有什么区别 ？</summary><ul><li><p>连接方式：</p><ul><li>HTTP1.0使用<code>短连接</code>，即每次请求/响应后都会关闭连接。这意味着每次请求都需要进行TCP握手，可能导致大量延迟。</li><li>HTTP1.1则默认使用<code>持久连接</code>，允许在同一个连接上发送多个请求和响应，减少了连接建立和断开的开销。</li><li>HTTP2.0进一步<code>支持多路复用</code>，可以在一个TCP连接上并发多个请求或响应，从而提高了客户端的响应速度。</li></ul></li><li><p>数据格式：</p><ul><li>HTTP1.0的数据是<code>文本格式</code>，虽然方便阅读，但不利于传输和解析。</li><li>HTTP2.0则采用了<code>二进制格式</code>，有效地减少了数据传输量，提高了数据传输的可靠性，并且不易出错。</li></ul></li><li><p>头部压缩：</p><ul><li>HTTP1.0的<code>请求头部信息是明文</code>，可能导致大量的冗余数据。</li><li>HTTP2.0则对请求头部进行了压缩，减少了数据传输量，并使用 <code>HPACK</code> 去除了冗余的头部字段。</li></ul></li><li><p>缓存处理：</p><ul><li>HTTP1.0的缓存处理相对简单，主要使用 header 里的<code>If-Modified-Since</code>和<code>Expires</code>来做为缓存判断的标准。</li><li>HTTP1.1则引入了更多的缓存控制策略，如<code>Entity tag</code>、<code>If-Unmodified-Since</code>、<code>If-Match</code>、<code>If-None-Match</code>等，提供了更多可供选择的缓存头来控制缓存策略。</li></ul></li><li><p>请求管道化**：</p><ul><li>HTTP1.1支持<code>请求管道化</code>，即在一个持久连接上可以同时发送多个请求，而HTTP1.0不支持这一特性。</li></ul></li><li><p>服务器推送：</p><ul><li>在HTTP1.0中，客户端需要明确请求服务器才能获取资源。而 HTTP2.0 允许服务器主动向客户端推送资源，提高了资源获取的效率和用户体验。</li></ul></li></ul></details><details class="details custom-block"><summary>你知道哪些应用层协议？</summary><ul><li>超文本传输 Http、Https</li><li>文本传输：FTP</li><li>电子邮件：SMTP、POP3、IMAP</li><li>动态主机配置：DHCP</li><li>域名系统：DNS</li></ul></details><details class="details custom-block"><summary>从存储位置看，浏览器缓存分为哪几种？</summary><ul><li><p>本地磁盘缓存：这是最常见的浏览器缓存形式。当您访问一个网页时，浏览器会将已访问的网页、图像和其他文件缓存到本地磁盘上。这样做的目的是为了在以后的访问中加快加载速度，减少从服务器重新获取数据的时间。</p></li><li><p>浏览器内置缓存：除了本地磁盘缓存外，浏览器还提供了内置缓存机制，如HTTP缓存。HTTP缓存是基于HTTP协议的浏览器文件级缓存机制，它通过设置Cache-Control、Expires等响应头来实现。当浏览器再次请求相同的资源时，如果缓存中的资源仍然有效，浏览器会直接从本地缓存中读取资源，而不是从服务器重新获取。</p></li><li><p>应用程序缓存：对于某些应用程序，它们可能会在本地存储临时文件或缓存数据。这些缓存数据的存储位置可能因应用程序而异，但通常也是为了加快数据访问速度和提高用户体验。</p></li><li><p>Service Worker缓存：Service Worker 是一种特殊的JS脚本，它可以<code>拦截网络请求并返回缓存的响应</code>。Service Worker 并不直接存储数据，但它能够管理缓存资源的获取和更新，从而实现离线访问和更快的加载速度等功能。</p></li><li><p>Web Storage缓存：这包括<code>localStorage</code>和<code>sessionStorage</code>两种形式。它们提供了在浏览器端存储数据的能力，通常用于存储ajax返回的数据，以加快页面渲染速度。虽然这些数据不是传统意义上的“缓存”，但它们确实起到了缓存的作用，减少了从服务器获取数据的需要。</p></li></ul></details><details class="details custom-block"><summary>Cache-Control 有哪些常见配置值？</summary><p>Cache-Control的常见配置值主要有以下几种：</p><ul><li><p>public：响应可以<code>被任何缓存区缓存</code>，包括浏览器和CDN等。即使响应中包含了HTTP认证或响应状态码（如404）表明响应不应该被缓存，使用public指令后该响应也可能会被缓存。</p></li><li><p>private：响应只能被<code>单个用户缓存</code>，比如在一个特定的浏览器中。它不能被共享或被中间代理服务器缓存。</p></li><li><p>no-cache：<code>每次请求都需要向服务器进行验证</code>，确认返回的响应是否已被更改。这并不意味着响应不会被缓存，而是每次都需要<code>验证其有效性</code>。</p></li><li><p>no-store：响应在任何情况下都<code>不会被缓存</code>，也<code>不会写入到客户端的磁盘中</code>。这是基于安全考虑的，某些敏感的响应会使用这个配置。</p></li><li><p>max-age：这个值指定了<code>缓存的最大有效时间</code>，单位是秒。从服务器返回的时间开始计算，如果在这个时间范围内，缓存的数据将被使用，而不会重新从服务器请求。</p></li></ul></details><details class="details custom-block"><summary>说说对TCP/IP协议的了解？</summary><p>TCP/IP（Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议）是指能够在多个不同网络间实现信息传输的协议簇。指一个由 FTP、SMTP、TCP、UDP、IP等协议构成的协议簇。</p><p>TCP/IP通讯协议采用了4层的层级结构，每一层都呼叫它的下一层所提供的网络来完成自己的需求。这4层分别为:</p><ul><li><p><code>应用层</code>: 应用程序间沟通的层，如简单电子邮件传输(SMTP)、文件传输协议(FTP)、网络远程访问协议(Telnet)等。</p></li><li><p><code>传输层</code>: 在此层中，它提供了节点间的数据传送，应用程序之间的通信服务，主要功能是数据格式化、数据确认和丢失重传等。如传输控制协议(TCP)、用户数据报协议(UDP)等，TCP和UDP给数据包加入传输数据并把它传输到下一层中，这一层负责传送数据，并且确定数据已被送达并接收。</p></li><li><p><code>网络层</code>: 负责提供基本的数据封包传送功能，让每一块数据包都能够到达目的主机(但不检查是否被正确接收)，如网际协议(IP)。</p></li><li><p><code>数据链路层</code>: 接收IP数据报并进行传输，从网络上接收物理帧，抽取IP数据报转交给下一层，对实际的网络媒体的管理，定义如何使用实际网络(如Ethernet、Serial Line等)来传送数据。</p></li></ul></details><details class="details custom-block"><summary>HTTP 中如何处理表单数据的提交？</summary><ul><li>application/x-www-form-urlencoded</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 其中的数据会被编码成以&amp;分隔的键值对</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字符以URL编码方式编码。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;a%3D1%26b%3D2&quot;</span></span></code></pre></div><ul><li>multipart/form-data</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 请求头中的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Content-Type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 字段会包含</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boundary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ，且</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boundary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的值有浏览器默认指定。例:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Content-Type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multipart/form-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;boundary</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">----WebkitFormBoundaryRRJKeWfHPGrS4LKe。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 数据会分为多个部分，每两个部分之间通过分隔符来分隔，每部分表述均有</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HTTP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 头部描述子包体，如Content-Type，在最后的分隔符会加上--表示结束。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Disposition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dataA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/plain</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dataA</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">----WebkitFormBoundaryRRJKeWfHPGrS4LKe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Disposition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> form-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dataB&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Content-Type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/plain</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dataB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">----WebkitFormBoundaryRRJKeWfHPGrS4LKe--</span></span></code></pre></div></details><details class="details custom-block"><summary>为什么说HTTP是无状态的协议？</summary><p>因为它的<code>每个请求都是完全独立的</code>，每个请求包含了<code>处理这个请求所需的完整的数据</code>。</p><p>无状态协议是指协议对务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它<code>必须重传</code>，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。 Http协议不像建立了socket连接的两个终端，双方是可以互相通信的，http的客户端只能通过请求服务器来获取相关内容或文件信息。</p><p>http协议这种特性有优点也有缺点，优点在于<code>解放了服务器</code>，每一次请求“点到为止”不会造成不必要连接占用，缺点在于<code>每次请求会传输大量重复的内容信息</code>。</p><p>在同一个连接允许传输多个HTTP请求的情况下，如果第一个请求出错了，后面的请求一般也能够继续处理（当然，如果导致协议解析失败、消息分片错误之类的自然是要除外的）可以看出，这种协议的结构是要比有状态的协议更简单的。</p></details><details class="details custom-block"><summary>对于定长和不定长的数据，HTTP 是怎么传输的？</summary><p>定长包体:</p><ul><li>对于定长包体而言，发送端在传输的时候一般会带上<code>Content-Length</code>，来指明包体的长度。</li></ul><p>不定长包体:</p><ul><li>介绍另外一个 http 头部字段：<code>Transfer-Encoding: chunked</code>。</li></ul><p>表示分块传输数据，设置这个字段后会自动产生两个效果:</p><ul><li>Content-Length 字段会被忽略</li><li>基于长连接持续推送动态内容</li></ul></details><details class="details custom-block"><summary>Cookie 属性</summary><ul><li><p>名称（Name）：这是cookie的标识符，用于在客户端和服务器之间传递数据。</p></li><li><p>值（Value）：与cookie关联的值，可以是任何字符串。</p></li><li><p>域（Domain）：指定可以访问cookie的域名。如果未设置，则默认为创建cookie的网页的域名。</p></li><li><p>路径（Path）：定义了cookies只发给指定的路径请求。如果Path属性没有被设置，则使用应用软件的缺省路径。</p></li><li><p>过期时间（Expires）：指定cookie的过期时间，即cookie将被自动删除的时间点。这个属性可以用来给cookies设置一个期限，在期限内只要打开网页就可以调用被保存的cookies。如果一个cookies没有设定有效期，则其生命周期从打开浏览器开始，到关闭浏览器结束，每次运行后生命周期将结束，下次运行将重新开始。</p></li><li><p>安全标志（Secure）：如果设置了该标志，表示该cookie只能通过加密协议（如HTTPS）传输。这指定了cookies能否被用户读取，对于包含私人信息的cookies尤其重要。</p></li><li><p>标志（HttpOnly）：这是一个重要的安全属性。当设置了HttpOnly属性时，通过JavaScript的document.cookie无法在客户端获取到cookie信息，从而有效防止XSS攻击。</p></li></ul><p>Cookie的优点和缺点如下：</p><ul><li><p>优点：</p><ul><li><p>会话管理：Cookie的主要优点之一是能够轻松<code>管理用户的会话状态</code>。通过为每个用户分配一个唯一的会话ID并将其存储在Cookie中，服务器可以识别并跟踪用户的活动，从而为用户提供连续和个性化的体验。</p></li><li><p>跨请求数据传递：Cookie允许<code>在不同页面之间传递数据</code>，这对于维护用户状态、记住用户偏好或跟踪用户行为非常有用。</p></li><li><p>无需服务器端存储：由于Cookie存储在客户端，因此不需要在服务器上为每个用户存储大量数据。这有助于<code>减轻服务器的负担</code>，并减少与数据库交互的需求。</p></li><li><p>易于实现：Cookie的<code>创建、读取和修改相对简单</code>，大多数Web编程语言和框架都提供了内置的支持。</p></li></ul></li><li><p>缺点：</p><ul><li><p>安全问题：尽管可以通过设置 Secure 和 HttpOnly 标志来提高安全性，但 Cookie 仍然存在一些安全风险。例如，如果 Cookie <code>未加密</code>或<code>未正确设置安全属性</code>，它们可能会被恶意用户截获或篡改，从而导致用户<code>数据的泄露</code>或<code>会话劫持</code>等安全问题。</p></li><li><p><code>隐私问题</code>：Cookie可以记录用户的访问行为、偏好和其他个人信息，这引发了隐私方面的担忧。如果用户对Cookie的使用感到不安，他们可能会选择禁用Cookie，从而影响网站的正常功能。</p></li><li><p><code>大小限制</code>：Cookie的大小通常受到浏览器和服务器的限制。这意味着不能将所有用户数据都存储在Cookie中，对于需要存储大量数据的应用来说，这可能是一个限制。</p></li><li><p>用户清除：<code>用户可以随时清除浏览器中的Cookie</code>，这可能导致网站失去用户的会话状态和其他重要数据。虽然可以通过其他机制（如服务器端会话存储）来恢复这些状态，但这可能会增加实现的复杂性。</p></li><li><p>跨域问题：出于安全考虑，浏览器通常限制不同域名之间的 Cookie 共享。这可能导致在涉及多个域名的应用中实现Cookie共享变得复杂。</p></li></ul></li></ul></details><details class="details custom-block"><summary>get 和 post 请求有什么区别？</summary><ul><li><p>请求的目的：</p><ul><li>GET请求主要用于<code>请求数据</code>。它通常用于获取HTML页面、CSS文件、JavaScript文件和图片等静态资源，或者通过URL传递参数来搜索或获取特定信息。</li><li>POST请求则主要用于<code>提交数据</code>。它常用于提交表单数据，如注册表单和登录表单，上传文件，以及执行如更新或删除数据等操作。</li></ul></li><li><p>请求的参数传递方式：</p><ul><li>GET请求的参数一般<code>附加在URL的末尾</code>，作为查询字符串的一部分。这意味着参数是可见的，且长度受限于URL的长度限制。</li><li>POST请求的参数包含在<code>请求的主体中</code>。这样，数据量大或者敏感信息可以通过POST请求更安全地传输，因为数据不会直接暴露在URL中。</li></ul></li><li><p>安全性：</p><ul><li>由于 GET 请求的参数直接<code>附加在 URL 上</code>，因此它们可能会被缓存、保存在浏览器历史记录中，或者通过引用链接被其他人看到。这可能导致敏感信息泄露，所以GET请求通常不适合用于传输敏感数据。</li><li>POST 请求由于将数据放在<code>请求体</code>中，相对更安全，尤其适用于需要传输敏感或大量数据的场景。</li></ul></li><li><p>数据长度限制：</p><ul><li>GET请求由于参数在 URL 中，受到 URL 长度的限制，通常不适合传输大量数据。</li><li>POST 请求则没有数据长度的限制，可以传输大量数据。</li></ul></li><li><p>幂等性：</p><ul><li>GET 请求是<code>幂等</code>的，意味着多次执行相同的GET请求，结果应该是相同的（除了可能的缓存影响）。</li><li>POST 请求<code>不是幂等</code>的，每次执行都可能产生不同的结果，例如提交表单数据。</li></ul></li><li><p>后退/刷新按钮的影响：</p><ul><li>GET 请求的结果可以<code>被浏览器缓存</code>，因此用户点击后退或刷新按钮时，可能会重新发送相同的GET请求。</li><li>POST 请求通常<code>不会被缓存</code>，因此用户点击后退或刷新按钮时，浏览器通常会警告用户将要重新提交表单数据。</li></ul></li></ul></details><details class="details custom-block"><summary>get 请求是否限制了传参长度？</summary><p>HTTP 协议未规定 GET 和 POST 的长度限制, GET 的最大长度显示是因为<code>浏览器</code>和 <code>web服务器</code>限制了 URI的长度。</p></details><details class="details custom-block"><summary>协商缓存中，有了 Last-Modified，为什么还会出现 ETag？</summary><p>在HTTP协议中，协商缓存机制用于在<code>缓存过期后，判断客户端的缓存内容是否仍然有效</code>，从而决定<code>是否需要从服务器重新获取资源</code>。Last-Modified和ETag是协商缓存中两种常用的验证方式，它们各自有其特点和适用场景，因此即使有了Last-Modified，ETag的出现仍然有其必要性。</p><p>Last-Modified表示<code>资源最后修改的时间戳</code>，它通常用于判断资源是否自上次请求以来有所变动。然而，Last-Modified存在一些局限性。首先，它只能<code>精确到秒级</code>，如果资源在秒内发生变动，Last-Modified将无法准确判断。其次，如果<code>资源内容发生了改变但修改时间并未更新</code>（例如，手动修改文件内容但未改变文件的元数据），Last-Modified也<code>无法正确识别资源的变动</code>。</p><p>ETag（Entity Tag）则是另一种验证资源是否变动的机制。它是一个字符串，通常根据资源的内容生成，用于唯一标识资源。每当资源内容发生变化时，ETag也会相应改变。因此，通过<code>比较客户端缓存的ETag与服务器上的ETag</code>，可以准确判断资源是否变动，而无需依赖于修改时间。</p><p>由于Last-Modified和ETag在验证资源变动时各有优势，因此在实际应用中，通常会同时使用这两种机制来增强协商缓存的可靠性。当客户端发起请求时，会同时携带Last-Modified和If-None-Match（包含客户端缓存的ETag）头部信息。服务器收到请求后，会首先检查Last-Modified，如果资源自上次请求以来未发生变动，则直接返回<code>304 Not Modified</code>状态码，告知客户端可以使用缓存内容。如果Last-Modified表明资源可能发生了变动，服务器会进一步比较ETag，以确保资源确实未变动。</p><p>通过这种方式，Last-Modified和ETag共同构成了HTTP协议中强大的协商缓存机制，能够准确判断客户端缓存内容的有效性，从而提高网络性能和用户体验。</p></details><details class="details custom-block"><summary>Nginx 支持哪些负载均衡调度算法？</summary><p>Nginx是一款自由的、开源的、高性能的<code>HTTP服务器</code>和<code>反向代理服务器</code>；同时也是一个<code>IMAP、POP3、SMTP</code>代理服务器；Nginx可以作为一个HTTP服务器进行网站的发布处理，另外Nginx可以作为反向代理进行负载均衡的实现。</p><p>负载均衡（Load Balancing）是一种计算机技术，用于在<code>多个计算机（或计算机集群）、网络连接、CPU、磁盘驱动器或其他资源中分配负载</code>，以达到最优化资源使用、最大化吞吐率、最小化响应时间，并同时避免过载的目的。简单来说，负载均衡就是将<code>工作任务（或访问请求）进行平衡和分摊</code>，使其由多个<code>操作单元</code>（如服务器或组件）共同执行，从而协同完成这些工作任务。在Web应用中，负载均衡技术特别重要，因为它能够将大量的访问请求<code>分散到多个Web服务器</code>上，确保每个服务器都能以最佳状态处理请求，从而为用户提供更流畅、更稳定的访问体验。</p><ul><li><p>轮询调度算法（Round Robin）：这是最简单的负载均衡算法，它按照请求的顺序依次将请求分发给后端服务器。每个请求都会被分发给下一个服务器，直到所有服务器都被轮询到。</p></li><li><p>加权轮询调度算法（Weighted Round Robin）：这是在轮询算法的基础上引入权重因素，用于实现更灵活的负载均衡。weight值越大，分配到的访问几率越高。这种方式适用于后端服务器性能不均的情况。</p></li><li><p>IP哈希调度算法（IP_HASH）：每个请求按访问IP的hash结果分配，这样来自同一IP的固定访问一个后端服务器。这种算法可以确保来自同一用户的请求总是被路由到同一台服务器上，有助于解决session共享问题。</p></li><li><p>最少连接调度算法（Least Connections）：将请求传递到活动连接数最少的服务器。这种方式可以确保每台服务器的负载相对均衡，避免某些服务器过载而其他服务器空闲的情况。</p></li></ul></details><details class="details custom-block"><summary>为什么部分请求中，参数需要使用 encodeURIComponent 进行转码？</summary><p>在Web开发中，<code>encodeURIComponent</code>函数被用于对URI的组件进行编码，以便它们可以安全地包含在URL中，而不会导致<code>解析错误或安全问题</code>。以下是一些原因，解释了为什么在某些情况下我们需要对请求中的参数使用<code>encodeURIComponent</code>进行转码：</p><ol><li><p><strong>特殊字符</strong>：URL中有些字符具有特殊含义，例如问号（<code>?</code>）用于开始查询字符串，等号（<code>=</code>）用于分隔键和值，而<code>&amp;</code>用于分隔不同的参数对。如果参数值中包含这些字符，它们可能会破坏URL的结构，导致解析错误。使用<code>encodeURIComponent</code>可以确保这些字符被正确编码，从而避免此类问题。</p></li><li><p><strong>非打印字符</strong>：某些字符在URL中可能无法直接表示，或者在某些情况下可能被视为不安全或具有潜在风险。例如，空格在URL中通常会被编码为<code>%20</code>，而其他非打印字符（如制表符、换行符等）也应该被适当编码。</p></li><li><p><strong>避免安全漏洞</strong>：在某些情况下，如果参数值未经适当编码，可能会导致安全漏洞，如跨站脚本攻击（XSS）。攻击者可能会尝试在参数值中插入恶意脚本或利用URL解析的漏洞。通过编码参数值，我们可以降低这种风险。</p></li><li><p><strong>保持一致性</strong>：对参数值进行编码可以确保在不同浏览器和服务器之间的一致性。不同的浏览器或服务器可能对URL中某些字符的处理方式略有不同，因此通过编码参数值，我们可以减少这种不一致性带来的潜在问题。</p></li></ol><p>使用<code>encodeURIComponent</code>时，请注意它只编码URI的组件，而不是整个URI。如果你需要编码整个URI，包括协议、主机名和路径等部分，你应该使用<code>encodeURI</code>函数。但是，对于查询字符串中的参数值，通常使用<code>encodeURIComponent</code>更为合适。</p></details><details class="details custom-block"><summary>强缓存和协商缓存分别是什么 ？</summary><p>强缓存和协商缓存是Web开发中常用的两种缓存机制，它们的主要目的是提高页面加载速度和服务性能，<code>减少网络传输</code>。</p><p>强缓存是指浏览器在发送请求前，先检查<code>本地缓存中是否存在可用的资源副本</code>。如果存在，并且该<code>资源没有过期</code>，服务器将返回一个特定的响应头，告诉浏览器直接使用本地缓存，而不需要向服务器发送请求。常见的强缓存响应头有<code>Expires</code>和<code>Cache-Control</code>。Expires字段指定了缓存过期的具体时间，而Cache-Control字段则提供了更多关于缓存行为的详细设置，如“public”表示响应可以被任何缓存存储，“private”表示响应只能被浏览器缓存，以及“max-age=xxx”表示缓存的有效时间。</p><p>协商缓存则发生在浏览器对某个资源的请求<code>没有命中强缓存时</code>。这时，浏览器会发送一个请求到服务器，验证协商缓存是否命中。如果协商缓存命中，服务器将返回一个<code>304 Not Modified</code>的响应，告诉浏览器资源未修改，可以继续使用缓存中的版本。协商缓存通常通过<code>Last-Modified</code>和<code>ETag</code>这两个响应头来实现。Last-Modified表示资源最后修改的时间戳，而 ETag 则是<code>根据资源内容生成的唯一标识符</code>。在请求中，浏览器会携带这两个值到服务器进行验证。</p><p>简单来说，强缓存和协商缓存的主要区别在于：<code>强缓存不发送请求到服务器</code>，直接使用本地缓存；而<code>协商缓存会发送请求到服务器</code>，通过比较本地缓存和服务器上的资源是否一致来决定是否使用本地缓存。这两种机制共同协作，为Web应用提供了高效、可靠的缓存解决方案。</p></details><details class="details custom-block"><summary>HTTP状态码</summary><p>HTTP状态码主要分为以下五类：</p><ol><li><strong>1xx（信息性状态码）</strong>：表示请求已经接收，继续处理。常见的1xx状态码包括100 Continue（继续）和101 Switching Protocols（切换协议）。</li><li><strong>2xx（成功状态码）</strong>：表示请求已经被成功接收、理解、并处理。常见的2xx状态码有200 OK（成功）和201 Created（已创建）。</li><li><strong>3xx（重定向状态码）</strong>：表示请求需要进一步操作，以完成请求。常见的3xx状态码有301 Moved Permanently（永久重定向）。</li><li><strong>4xx（客户端错误状态码）</strong>：表示客户端的请求有问题。例如，400表示请求无效，401表示未授权，403表示禁止访问等。</li><li><strong>5xx（服务器错误状态码）</strong>：表示服务器处理请求时出现了错误。</li></ol><ul><li><code>200</code> OK 正常返回信息</li><li>201 Created 请求成功并且服务器创建了新的资源</li><li>202 Accepted 服务器已接受请求，但尚未处理</li><li>301 Moved Permanently 请求的网页已永久移动到新位置</li><li>302 Found 临时性重定向</li><li>303 See Other 临时性重定向，且总是使用 GET 请求新的 URI</li><li><code>304</code> Not Modified 自从上次请求后，请求的网页未修改过</li><li><code>400</code> Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求</li><li><code>401</code> Unauthorized 请求未授权</li><li><code>403</code> Forbidden 禁止访问</li><li><code>404</code> Not Found 找不到如何与 URI 相匹配的资源</li><li><code>500</code> Internal Server Error 最常见的服务器端错误</li><li><code>503</code> Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）</li></ul></details><details class="details custom-block"><summary>HTTP Request Header和Response Header里面分别都有哪些比较重要的字段 ?</summary><p>HTTP Request Header和Response Header中都有一些非常重要的字段，这些字段为客户端和服务器之间的通信提供了必要的信息和指示。</p><ul><li><p>HTTP Request：</p><ol><li><p><strong>Host</strong>：指定目标服务器的域名或IP地址，这对于支持多个虚拟主机的Web服务器至关重要。</p></li><li><p><strong>User-Agent</strong>：发送请求的用户代理的标识，通常表示浏览器的类型和版本信息，服务器可以据此为不同的客户端提供定制化的响应。</p></li><li><p><strong>Accept</strong>：客户端可以接受的内容类型，如text/html、application/json等，它告诉服务器客户端期望接收哪种格式的响应。</p></li><li><p><strong>Content-Type</strong>：请求体的媒体类型，当客户端需要发送数据给服务器时（如POST请求），这个字段会指明数据的格式。</p></li><li><p><strong>Authorization</strong>：提供身份验证凭据，用于访问受保护的资源，如API接口。</p></li><li><p><strong>Cookie</strong>：包含在上一次响应中设置的服务器的Cookie，用于跟踪用户会话或实现其他功能。</p></li><li><p><strong>Referer</strong>：指定当前请求的来源页面URL，有助于分析用户行为和防止跨站请求伪造（CSRF）。</p></li></ol></li><li><p>HTTP Response：</p><ol><li><p><strong>Content-Type</strong>：指定响应体的媒体类型，告诉客户端返回的数据格式。</p></li><li><p><strong>Content-Length</strong>：指定响应体的长度（以字节为单位），有助于客户端正确地处理数据。</p></li><li><p><strong>Cache-Control</strong>：指定缓存策略，如缓存的有效期、是否可以缓存等，它控制浏览器和其他缓存系统如何缓存和重用响应。</p></li><li><p><strong>Set-Cookie</strong>：在客户端设置Cookie，用于存储会话信息或进行用户跟踪。</p></li><li><p><strong>Date</strong>：响应的日期和时间，有助于客户端了解响应的新鲜度。</p></li><li><p><strong>Expires</strong>：响应过期的日期和时间，与Cache-Control一起使用，控制缓存的有效期。</p></li><li><p><strong>Server</strong>：服务器软件的名称和版本，有助于客户端了解服务器的配置和调试问题。</p></li></ol></li></ul></details><details class="details custom-block"><summary>HTTP的长连接和短连接分别是什么 ？keep-alive 是干什么的 ?</summary><p>HTTP的长连接和短连接是两种不同类型的<code>网络连接方式</code>，它们在HTTP协议的不同版本中得到了支持和应用。</p><ul><li>HTTP短连接：</li></ul><ul><li>HTTP短连接主要存在于<code>HTTP/1.0</code>版本中。在这种连接模式下，<code>每次客户端向服务器发送一次请求后，服务器响应完毕就会断开连接</code>。这种方式的特点是每个请求都需要<code>单独建立连接</code>，并且在请求完成后连接会被关闭。短连接的好处是<code>应用级接口使用方便，对开发要求不高，容错性强</code>，但其缺点是传<code>输速度慢，数据包大</code>，且在实时交互时服务器压力大，安全性也较差。对于Web网站这样的场景，由于有成千上万的客户端连接，使用短连接可以节省服务器资源。</li></ul><ul><li>HTTP长连接： <ul><li>HTTP长连接从<code>HTTP/1.1</code>版本开始得到支持。在这种连接模式下，客户端与服务器建立连接后，连接并不会在服务端响应结果后立马关闭，而是保持连接特性。这种连接方式的优点在于能够<code>降低服务器和客户端之间的通信频率</code>，<code>减少了不必要的连接和通信开销</code>，<code>实时性较高</code>，适用于需要实时推送数据或事件的场景，如即时聊天、实时通知等。然而，由于需要维持大量的连接，对服务器资源压力较大。</li><li>在使用长连接时，通常会在请求头中加上<code>Connection: keep-Alive</code>字段来标识这是一个长连接请求。通过这种方式，服务器和客户端可以在一段时间内保持连接不断开，通过周期性地发送请求来检查是否有新的数据或事件。</li></ul></li></ul></details><details class="details custom-block"><summary>TCP 链接为什么会采用三次握手 ？</summary><p>首先，三次握手能够<code>确保双方的通信能力正常</code>。在进行数据传输之前，客户端发起连接请求，服务器回应确认，再由客户端发送确认，这样可以确保双方的发送和接收能力都正常。如果只进行两次握手，客户端虽然能够确认自己的发送能力和服务器的接收能力正常，但无法确认服务器的发送能力和客户端的接收能力是否正常。因此，需要第三次握手来确保双方的通信能力都达到要求。</p><p>其次，三次握手能够<code>避免旧连接的延迟影响</code>。在网络中，请求可能会由于网络拥塞或其他原因而延迟。如果只有两次握手，客户端可能会认为连接已建立，但服务器并不知情。当客户端再次发送数据时，服务器可能会拒绝或丢弃这些数据，因为它并没有建立有效的连接。通过引入第三次握手，可以避免旧连接的影响，确保客户端和服务器都知道连接已成功建立。</p><p>此外，三次握手还能<code>防止重复连接的建立</code>。在网络延迟的情况下，如果只有两次握手，客户端可能认为连接未建立，因此发送新的连接请求。如果服务器接收到了两个连接请求，并回应确认，就会建立两个相互独立的连接。这可能导致资源浪费和数据混乱。而三次握手则能有效避免这种情况的发生。</p></details><details class="details custom-block"><summary>三次握手 + 四次挥手</summary><ul><li>SYN -&gt; SYN + ACK -&gt; ACK <ul><li>男：你很漂亮，咱们交往吧！</li><li>女：哈哈，我也喜欢你呢！</li><li>男：咱们就在一起吧！ 确认两个方向上的数据传输通道是否正常。</li></ul></li></ul><p>所谓的四次挥手即TCP连接的释放(解除)。连接的释放必须是一方主动释放，另一方被动释放。客户端要经历时长为2SML的TIME-WAIT阶段；这也是为什么客户端比服务器端晚进入CLOSED阶段的原因：</p><ul><li>男：我不爱你了，分手吧！</li><li>女：好的，我收拾完东西就走！</li><li>女：我收拾完了，再见！</li><li>男：再见！ 释放连接时，被动方服务器，突然收到主动方客户端释放连接的请求时并不能立即释放连接，因为还有必要的数据需要处理，所以服务器先返回 ACK 确认收到报文，经过CLOSE-WAIT阶段准备好释放连接之后，才能返回FIN释放连接报文。</li></ul></details>`,39),d=[a];function c(t,p,n,r,k,u){return e(),l("div",null,d)}const m=i(o,[["render",c]]);export{h as __pageData,m as default};