import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.LNmJnetQ.js";const _=JSON.parse('{"title":"一个项目的部署","description":"","frontmatter":{"title":"一个项目的部署"},"headers":[],"relativePath":"flow/deploy-project.md","filePath":"flow/deploy-project.md"}'),l={name:"flow/deploy-project.md"},e=p(`<p>前段时间部署了一个较为复杂的分布式集群管理平台的项目和一堆组件和引擎服务，学会了一些Xshell的基础命令，对<a href="https://www.ubuntu.com/download/server" target="_blank" rel="noreferrer">Ubuntu Server</a>和<a href="https://mirror.tuna.tsinghua.edu.cn/centos" target="_blank" rel="noreferrer">Centos</a>有了基础了的认识。</p><p><strong>关键字：</strong></p><ul><li>防火墙</li><li>桥接和NAT模式</li><li>权限</li><li>宿主机和虚拟机互ping !important</li><li>虚拟机访问外网</li><li>yum</li><li>glibc</li></ul><p>系统版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>uname -a</span></span>
<span class="line"><span>cat  /proc/version</span></span></code></pre></div><p>防火墙:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//临时关闭</span></span>
<span class="line"><span>systemctl stop firewalld</span></span>
<span class="line"><span>//禁止开机自启动  </span></span>
<span class="line"><span>systemctl disable firewalld</span></span>
<span class="line"><span>//查看防火墙状态</span></span>
<span class="line"><span>firewall-cmd --state</span></span></code></pre></div><p>网卡配置项的修改:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>TYPE=Ethernet</span></span>
<span class="line"><span>PROXY_METHOD=none</span></span>
<span class="line"><span>BROWSER_ONLY=no    </span></span>
<span class="line"><span>BOOTPROTO=static   // 默认是dhcp</span></span>
<span class="line"><span>PEERROUTES=yes</span></span>
<span class="line"><span>IPV4_FAILURE_FATAL=no</span></span>
<span class="line"><span>IPV6INIT=yes</span></span>
<span class="line"><span>IPV6_AUTOCONF=yes</span></span>
<span class="line"><span>IPV6_DEFROUTE=yes</span></span>
<span class="line"><span>IPV6_FAILURE_FATAL=no</span></span>
<span class="line"><span>IPV6_ADDR_GEN_MODE=stable-privacy</span></span>
<span class="line"><span>NAME=ens33</span></span>
<span class="line"><span>UUID=ffc22089-1dd0-4081-b598-2547860756d4</span></span>
<span class="line"><span>DEVICE=ens33</span></span>
<span class="line"><span>ONBOOT=yes    // 开机自启动</span></span>
<span class="line"><span>PEERDNS=yes </span></span>
<span class="line"><span>PEERROUTES=yes </span></span>
<span class="line"><span>IPV6_PEERDNS=yes </span></span>
<span class="line"><span>IPV6_PEERROUTES=yes </span></span>
<span class="line"><span>IPADDR0=192.168.214.200   </span></span>
<span class="line"><span>PREFIXO0=24   </span></span>
<span class="line"><span>GATEWAY0=192.168.214.2</span></span>
<span class="line"><span>DNS1=223.5.5.5     // 阿里云DNS</span></span>
<span class="line"><span>DNS2=223.6.6.6</span></span></code></pre></div><p>配置好之后，需要</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>service network restart</span></span></code></pre></div><p>jdk的配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/etc/profile   //目录</span></span>
<span class="line"><span>#set java environment</span></span>
<span class="line"><span>JAVA_HOME=/java/jdk1.8.0_112</span></span>
<span class="line"><span>JRE_HOME=/java/jdk1.8.0_112/jre</span></span>
<span class="line"><span>CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib</span></span>
<span class="line"><span>PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin</span></span>
<span class="line"><span>export JAVA_HOME JRE_HOME CLASS_PATH PATH</span></span>
<span class="line"><span>source /etc/profile  //保存生效</span></span></code></pre></div><p><strong>yum:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yum install -y unzip zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自动选择y，全自动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yum -y install 包名（支持*）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 手动选择y or n</span></span>
<span class="line"><span>yum install 包名（支持*）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yum remove 包名（不支持*）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 安装rpm包</span></span>
<span class="line"><span>rpm -ivh 包名（支持*）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 卸载rpm包</span></span>
<span class="line"><span>rpm -e 包名（不支持*）</span></span></code></pre></div><p>glibc升级</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// glibc清华镜像：https://mirrors.ustc.edu.cn/gnu/glibc/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改 LD_LIBRARY_PATH 环境变量</span></span>
<span class="line"><span>export LD_LIBRARY_PATH=/lib64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示版本</span></span>
<span class="line"><span>ll /lib64/libc.so.6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 新建build文件夹，已备编译使用</span></span>
<span class="line"><span>mkdir build  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd build</span></span>
<span class="line"><span></span></span>
<span class="line"><span>../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 配置</span></span>
<span class="line"><span>bin --disable-sanity-checks</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//编译安装</span></span>
<span class="line"><span>make &amp;&amp; make install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看glibc版本，查看是否升级成功</span></span>
<span class="line"><span>getconf -a |grep glibc -i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 恢复</span></span>
<span class="line"><span>export LD_LIBRARY_PATH=.:/lib64</span></span></code></pre></div>`,17),i=[e];function c(t,o,r,d,u,h){return a(),n("div",null,i)}const b=s(l,[["render",c]]);export{_ as __pageData,b as default};
