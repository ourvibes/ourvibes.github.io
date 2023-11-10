import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.52d8a8a6.js";const b=JSON.parse('{"title":"一个项目的部署","description":"","frontmatter":{"title":"一个项目的部署"},"headers":[],"relativePath":"words/deploy-project.md","filePath":"words/deploy-project.md"}'),l={name:"words/deploy-project.md"},p=e(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2018-03-20 10:05:10</p></div><p>前段时间部署了一个较为复杂的分布式集群管理平台的项目和一堆组件和引擎服务，学会了一些Xshell的基础命令，对<a href="https://www.ubuntu.com/download/server" target="_blank" rel="noreferrer">Ubuntu Server</a>和<a href="https://mirror.tuna.tsinghua.edu.cn/centos" target="_blank" rel="noreferrer">Centos</a>有了基础了的认识。</p><p><strong>关键字：</strong></p><ul><li>防火墙</li><li>桥接和NAT模式</li><li>权限</li><li>宿主机和虚拟机互ping !important</li><li>虚拟机访问外网</li><li>yum</li><li>glibc</li></ul><p>系统版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">uname -a</span></span>
<span class="line"><span style="color:#e1e4e8;">cat  /proc/version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">uname -a</span></span>
<span class="line"><span style="color:#24292e;">cat  /proc/version</span></span></code></pre></div><p>防火墙:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//临时关闭</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#e1e4e8;">//禁止开机自启动  </span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#e1e4e8;">//查看防火墙状态</span></span>
<span class="line"><span style="color:#e1e4e8;">firewall-cmd --state</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//临时关闭</span></span>
<span class="line"><span style="color:#24292e;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#24292e;">//禁止开机自启动  </span></span>
<span class="line"><span style="color:#24292e;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#24292e;">//查看防火墙状态</span></span>
<span class="line"><span style="color:#24292e;">firewall-cmd --state</span></span></code></pre></div><p>网卡配置项的修改:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">TYPE=Ethernet</span></span>
<span class="line"><span style="color:#e1e4e8;">PROXY_METHOD=none</span></span>
<span class="line"><span style="color:#e1e4e8;">BROWSER_ONLY=no    </span></span>
<span class="line"><span style="color:#e1e4e8;">BOOTPROTO=static   // 默认是dhcp</span></span>
<span class="line"><span style="color:#e1e4e8;">PEERROUTES=yes</span></span>
<span class="line"><span style="color:#e1e4e8;">IPV4_FAILURE_FATAL=no</span></span>
<span class="line"><span style="color:#e1e4e8;">IPV6INIT=yes</span></span>
<span class="line"><span style="color:#e1e4e8;">IPV6_AUTOCONF=yes</span></span>
<span class="line"><span style="color:#e1e4e8;">IPV6_DEFROUTE=yes</span></span>
<span class="line"><span style="color:#e1e4e8;">IPV6_FAILURE_FATAL=no</span></span>
<span class="line"><span style="color:#e1e4e8;">IPV6_ADDR_GEN_MODE=stable-privacy</span></span>
<span class="line"><span style="color:#e1e4e8;">NAME=ens33</span></span>
<span class="line"><span style="color:#e1e4e8;">UUID=ffc22089-1dd0-4081-b598-2547860756d4</span></span>
<span class="line"><span style="color:#e1e4e8;">DEVICE=ens33</span></span>
<span class="line"><span style="color:#e1e4e8;">ONBOOT=yes    // 开机自启动</span></span>
<span class="line"><span style="color:#e1e4e8;">PEERDNS=yes </span></span>
<span class="line"><span style="color:#e1e4e8;">PEERROUTES=yes </span></span>
<span class="line"><span style="color:#e1e4e8;">IPV6_PEERDNS=yes </span></span>
<span class="line"><span style="color:#e1e4e8;">IPV6_PEERROUTES=yes </span></span>
<span class="line"><span style="color:#e1e4e8;">IPADDR0=192.168.214.200   </span></span>
<span class="line"><span style="color:#e1e4e8;">PREFIXO0=24   </span></span>
<span class="line"><span style="color:#e1e4e8;">GATEWAY0=192.168.214.2</span></span>
<span class="line"><span style="color:#e1e4e8;">DNS1=223.5.5.5     // 阿里云DNS</span></span>
<span class="line"><span style="color:#e1e4e8;">DNS2=223.6.6.6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">TYPE=Ethernet</span></span>
<span class="line"><span style="color:#24292e;">PROXY_METHOD=none</span></span>
<span class="line"><span style="color:#24292e;">BROWSER_ONLY=no    </span></span>
<span class="line"><span style="color:#24292e;">BOOTPROTO=static   // 默认是dhcp</span></span>
<span class="line"><span style="color:#24292e;">PEERROUTES=yes</span></span>
<span class="line"><span style="color:#24292e;">IPV4_FAILURE_FATAL=no</span></span>
<span class="line"><span style="color:#24292e;">IPV6INIT=yes</span></span>
<span class="line"><span style="color:#24292e;">IPV6_AUTOCONF=yes</span></span>
<span class="line"><span style="color:#24292e;">IPV6_DEFROUTE=yes</span></span>
<span class="line"><span style="color:#24292e;">IPV6_FAILURE_FATAL=no</span></span>
<span class="line"><span style="color:#24292e;">IPV6_ADDR_GEN_MODE=stable-privacy</span></span>
<span class="line"><span style="color:#24292e;">NAME=ens33</span></span>
<span class="line"><span style="color:#24292e;">UUID=ffc22089-1dd0-4081-b598-2547860756d4</span></span>
<span class="line"><span style="color:#24292e;">DEVICE=ens33</span></span>
<span class="line"><span style="color:#24292e;">ONBOOT=yes    // 开机自启动</span></span>
<span class="line"><span style="color:#24292e;">PEERDNS=yes </span></span>
<span class="line"><span style="color:#24292e;">PEERROUTES=yes </span></span>
<span class="line"><span style="color:#24292e;">IPV6_PEERDNS=yes </span></span>
<span class="line"><span style="color:#24292e;">IPV6_PEERROUTES=yes </span></span>
<span class="line"><span style="color:#24292e;">IPADDR0=192.168.214.200   </span></span>
<span class="line"><span style="color:#24292e;">PREFIXO0=24   </span></span>
<span class="line"><span style="color:#24292e;">GATEWAY0=192.168.214.2</span></span>
<span class="line"><span style="color:#24292e;">DNS1=223.5.5.5     // 阿里云DNS</span></span>
<span class="line"><span style="color:#24292e;">DNS2=223.6.6.6</span></span></code></pre></div><p>配置好之后，需要</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">service network restart</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">service network restart</span></span></code></pre></div><p>jdk的配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/etc/profile   //目录</span></span>
<span class="line"><span style="color:#e1e4e8;">#set java environment</span></span>
<span class="line"><span style="color:#e1e4e8;">JAVA_HOME=/java/jdk1.8.0_112</span></span>
<span class="line"><span style="color:#e1e4e8;">JRE_HOME=/java/jdk1.8.0_112/jre</span></span>
<span class="line"><span style="color:#e1e4e8;">CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib</span></span>
<span class="line"><span style="color:#e1e4e8;">PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin</span></span>
<span class="line"><span style="color:#e1e4e8;">export JAVA_HOME JRE_HOME CLASS_PATH PATH</span></span>
<span class="line"><span style="color:#e1e4e8;">source /etc/profile  //保存生效</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/etc/profile   //目录</span></span>
<span class="line"><span style="color:#24292e;">#set java environment</span></span>
<span class="line"><span style="color:#24292e;">JAVA_HOME=/java/jdk1.8.0_112</span></span>
<span class="line"><span style="color:#24292e;">JRE_HOME=/java/jdk1.8.0_112/jre</span></span>
<span class="line"><span style="color:#24292e;">CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib</span></span>
<span class="line"><span style="color:#24292e;">PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin</span></span>
<span class="line"><span style="color:#24292e;">export JAVA_HOME JRE_HOME CLASS_PATH PATH</span></span>
<span class="line"><span style="color:#24292e;">source /etc/profile  //保存生效</span></span></code></pre></div><p><strong>yum:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yum install -y unzip zip</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 自动选择y，全自动</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">yum -y install 包名（支持*）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 手动选择y or n</span></span>
<span class="line"><span style="color:#e1e4e8;">yum install 包名（支持*）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">yum remove 包名（不支持*）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 安装rpm包</span></span>
<span class="line"><span style="color:#e1e4e8;">rpm -ivh 包名（支持*）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 卸载rpm包</span></span>
<span class="line"><span style="color:#e1e4e8;">rpm -e 包名（不支持*）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yum install -y unzip zip</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 自动选择y，全自动</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">yum -y install 包名（支持*）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 手动选择y or n</span></span>
<span class="line"><span style="color:#24292e;">yum install 包名（支持*）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">yum remove 包名（不支持*）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 安装rpm包</span></span>
<span class="line"><span style="color:#24292e;">rpm -ivh 包名（支持*）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 卸载rpm包</span></span>
<span class="line"><span style="color:#24292e;">rpm -e 包名（不支持*）</span></span></code></pre></div><p>glibc升级</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// glibc清华镜像：https://mirrors.ustc.edu.cn/gnu/glibc/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 修改 LD_LIBRARY_PATH 环境变量</span></span>
<span class="line"><span style="color:#e1e4e8;">export LD_LIBRARY_PATH=/lib64</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 显示版本</span></span>
<span class="line"><span style="color:#e1e4e8;">ll /lib64/libc.so.6</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 新建build文件夹，已备编译使用</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir build  </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cd build</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">bin --disable-sanity-checks</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//编译安装</span></span>
<span class="line"><span style="color:#e1e4e8;">make &amp;&amp; make install</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 查看glibc版本，查看是否升级成功</span></span>
<span class="line"><span style="color:#e1e4e8;">getconf -a |grep glibc -i</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 恢复</span></span>
<span class="line"><span style="color:#e1e4e8;">export LD_LIBRARY_PATH=.:/lib64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// glibc清华镜像：https://mirrors.ustc.edu.cn/gnu/glibc/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 修改 LD_LIBRARY_PATH 环境变量</span></span>
<span class="line"><span style="color:#24292e;">export LD_LIBRARY_PATH=/lib64</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 显示版本</span></span>
<span class="line"><span style="color:#24292e;">ll /lib64/libc.so.6</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 新建build文件夹，已备编译使用</span></span>
<span class="line"><span style="color:#24292e;">mkdir build  </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cd build</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 配置</span></span>
<span class="line"><span style="color:#24292e;">bin --disable-sanity-checks</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//编译安装</span></span>
<span class="line"><span style="color:#24292e;">make &amp;&amp; make install</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 查看glibc版本，查看是否升级成功</span></span>
<span class="line"><span style="color:#24292e;">getconf -a |grep glibc -i</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 恢复</span></span>
<span class="line"><span style="color:#24292e;">export LD_LIBRARY_PATH=.:/lib64</span></span></code></pre></div>`,18),o=[p];function c(t,i,r,y,d,_){return n(),a("div",null,o)}const E=s(l,[["render",c]]);export{b as __pageData,E as default};
