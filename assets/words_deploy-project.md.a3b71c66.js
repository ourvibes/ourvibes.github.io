import{_ as s,o as n,c as a,S as l}from"./chunks/framework.3ac0968e.js";const d=JSON.parse('{"title":"一个项目的部署","description":"","frontmatter":{"title":"一个项目的部署"},"headers":[],"relativePath":"words/deploy-project.md","filePath":"words/deploy-project.md"}'),p={name:"words/deploy-project.md"},e=l(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2018-03-20 10:05:10</p></div><p>前段时间部署了一个较为复杂的分布式集群管理平台的项目和一堆组件和引擎服务，学会了一些Xshell的基础命令，对<a href="https://www.ubuntu.com/download/server" target="_blank" rel="noreferrer">Ubuntu Server</a>和<a href="https://mirror.tuna.tsinghua.edu.cn/centos" target="_blank" rel="noreferrer">Centos</a>有了基础了的认识。</p><p><strong>关键字：</strong></p><ul><li>防火墙</li><li>桥接和NAT模式</li><li>权限</li><li>宿主机和虚拟机互ping !important</li><li>虚拟机访问外网</li><li>yum</li><li>glibc</li></ul><p>系统版本</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uname -a</span></span>
<span class="line"><span style="color:#A6ACCD;">cat  /proc/version</span></span></code></pre></div><p>防火墙:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//临时关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#A6ACCD;">//禁止开机自启动  </span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#A6ACCD;">//查看防火墙状态</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --state</span></span></code></pre></div><p>网卡配置项的修改:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">TYPE=Ethernet</span></span>
<span class="line"><span style="color:#A6ACCD;">PROXY_METHOD=none</span></span>
<span class="line"><span style="color:#A6ACCD;">BROWSER_ONLY=no    </span></span>
<span class="line"><span style="color:#A6ACCD;">BOOTPROTO=static   // 默认是dhcp</span></span>
<span class="line"><span style="color:#A6ACCD;">PEERROUTES=yes</span></span>
<span class="line"><span style="color:#A6ACCD;">IPV4_FAILURE_FATAL=no</span></span>
<span class="line"><span style="color:#A6ACCD;">IPV6INIT=yes</span></span>
<span class="line"><span style="color:#A6ACCD;">IPV6_AUTOCONF=yes</span></span>
<span class="line"><span style="color:#A6ACCD;">IPV6_DEFROUTE=yes</span></span>
<span class="line"><span style="color:#A6ACCD;">IPV6_FAILURE_FATAL=no</span></span>
<span class="line"><span style="color:#A6ACCD;">IPV6_ADDR_GEN_MODE=stable-privacy</span></span>
<span class="line"><span style="color:#A6ACCD;">NAME=ens33</span></span>
<span class="line"><span style="color:#A6ACCD;">UUID=ffc22089-1dd0-4081-b598-2547860756d4</span></span>
<span class="line"><span style="color:#A6ACCD;">DEVICE=ens33</span></span>
<span class="line"><span style="color:#A6ACCD;">ONBOOT=yes    // 开机自启动</span></span>
<span class="line"><span style="color:#A6ACCD;">PEERDNS=yes </span></span>
<span class="line"><span style="color:#A6ACCD;">PEERROUTES=yes </span></span>
<span class="line"><span style="color:#A6ACCD;">IPV6_PEERDNS=yes </span></span>
<span class="line"><span style="color:#A6ACCD;">IPV6_PEERROUTES=yes </span></span>
<span class="line"><span style="color:#A6ACCD;">IPADDR0=192.168.214.200   </span></span>
<span class="line"><span style="color:#A6ACCD;">PREFIXO0=24   </span></span>
<span class="line"><span style="color:#A6ACCD;">GATEWAY0=192.168.214.2</span></span>
<span class="line"><span style="color:#A6ACCD;">DNS1=223.5.5.5     // 阿里云DNS</span></span>
<span class="line"><span style="color:#A6ACCD;">DNS2=223.6.6.6</span></span></code></pre></div><p>配置好之后，需要</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">service network restart</span></span></code></pre></div><p>jdk的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/etc/profile   //目录</span></span>
<span class="line"><span style="color:#A6ACCD;">#set java environment</span></span>
<span class="line"><span style="color:#A6ACCD;">JAVA_HOME=/java/jdk1.8.0_112</span></span>
<span class="line"><span style="color:#A6ACCD;">JRE_HOME=/java/jdk1.8.0_112/jre</span></span>
<span class="line"><span style="color:#A6ACCD;">CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin</span></span>
<span class="line"><span style="color:#A6ACCD;">export JAVA_HOME JRE_HOME CLASS_PATH PATH</span></span>
<span class="line"><span style="color:#A6ACCD;">source /etc/profile  //保存生效</span></span></code></pre></div><p><strong>yum:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yum install -y unzip zip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 自动选择y，全自动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yum -y install 包名（支持*）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 手动选择y or n</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install 包名（支持*）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yum remove 包名（不支持*）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 安装rpm包</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -ivh 包名（支持*）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 卸载rpm包</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e 包名（不支持*）</span></span></code></pre></div><p>glibc升级</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// glibc清华镜像：https://mirrors.ustc.edu.cn/gnu/glibc/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改 LD_LIBRARY_PATH 环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">export LD_LIBRARY_PATH=/lib64</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 显示版本</span></span>
<span class="line"><span style="color:#A6ACCD;">ll /lib64/libc.so.6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 新建build文件夹，已备编译使用</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir build  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cd build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">bin --disable-sanity-checks</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//编译安装</span></span>
<span class="line"><span style="color:#A6ACCD;">make &amp;&amp; make install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看glibc版本，查看是否升级成功</span></span>
<span class="line"><span style="color:#A6ACCD;">getconf -a |grep glibc -i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 恢复</span></span>
<span class="line"><span style="color:#A6ACCD;">export LD_LIBRARY_PATH=.:/lib64</span></span></code></pre></div>`,18),o=[e];function c(t,i,A,r,C,y){return n(),a("div",null,o)}const _=s(p,[["render",c]]);export{d as __pageData,_ as default};
