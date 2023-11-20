import{_ as s,o as n,c as a,R as l}from"./chunks/framework.uaFRvtsY.js";const B=JSON.parse('{"title":"Python语言基础","description":"","frontmatter":{"title":"Python语言基础"},"headers":[],"relativePath":"words/python-basic.md","filePath":"words/python-basic.md"}'),p={name:"words/python-basic.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">时间</p><p>2017-10-18 19:18:47</p></div><p>Python是我目前见过的语言中最简洁优雅的，以至于我有一种相见恨晚的感觉。下面是一些笔记（代码）。😃</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">#!/usr/bin/env python3</span></span>
<span class="line"><span style="color:#6A737D;"># -*- coding: utf-8 -*-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">__author__</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;Chiang&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> math</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> time</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> functools</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> logging</span></span>
<span class="line"><span style="color:#E1E4E8;">logging.basicConfig(</span><span style="color:#FFAB70;">level</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">logging.</span><span style="color:#79B8FF;">INFO</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello world!&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;sherlock&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1+3=&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#输入输出测试</span></span>
<span class="line"><span style="color:#6A737D;">#name=input(&quot;please tell me your name:&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">#print(&quot;hello,&quot;+name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#注意条件语句的写法</span></span>
<span class="line"><span style="color:#E1E4E8;">age</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">20</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> age</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#值的交换</span></span>
<span class="line"><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">temp</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">a</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">b</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">temp</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(a,b)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#常量</span></span>
<span class="line"><span style="color:#79B8FF;">PI</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3.141592654</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">ord</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#E1E4E8;">))</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;str&#39;</span><span style="color:#E1E4E8;">))</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;我爱你！&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#浮点数的表示</span></span>
<span class="line"><span style="color:#6A737D;">#%运算符就是用来格式化字符串的</span></span>
<span class="line"><span style="color:#E1E4E8;">s1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">72</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">s2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">85</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (s2 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> s1)</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> s2 </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">%.1f%%</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> r)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#Python内置的一种数据类型是列表：list。list是一种有序的集合，可以随时添加和删除其中的元素。</span></span>
<span class="line"><span style="color:#E1E4E8;">fruits</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;apple&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;orange&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;lemon&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(fruits[</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(fruits)] )</span></span>
<span class="line"><span style="color:#6A737D;">#正向从0开始，负向从1开始</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(fruits[</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(fruits[</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">fruits.append(</span><span style="color:#9ECBFF;">&#39;apple&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#追加</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fruits appended:&#39;</span><span style="color:#E1E4E8;">,fruits)</span></span>
<span class="line"><span style="color:#6A737D;">#插入</span></span>
<span class="line"><span style="color:#E1E4E8;">fruits.insert(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;juice&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inserted fruits:&#39;</span><span style="color:#E1E4E8;">,fruits)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#删除</span></span>
<span class="line"><span style="color:#E1E4E8;">fruits.pop(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popped fruits:&#39;</span><span style="color:#E1E4E8;">,fruits)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#循环</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> fruit </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> fruits:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&gt;&gt;&quot;</span><span style="color:#E1E4E8;">,fruit)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;Apple&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Google&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Microsoft&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;Java&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Python&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Ruby&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;PHP&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;Adam&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Bart&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Lisa&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(L[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],L[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],L[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">][</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">final</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(final)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#条件语句</span></span>
<span class="line"><span style="color:#79B8FF;">BMI</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">55</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.78</span><span style="color:#F97583;">*</span><span style="color:#79B8FF;">1.78</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BMI</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exacly fat&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BMI</span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fat&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BMI</span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;heavy&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BMI</span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">18.5</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;middle&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;slin&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#高斯求和</span></span>
<span class="line"><span style="color:#79B8FF;">sum</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#range(n) 0-&gt; n 但不包括n</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">101</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">sum</span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;">num</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">sum</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#Python内置了字典：dict的支持，dict全称dictionary，在其他语言中也称为map，</span></span>
<span class="line"><span style="color:#6A737D;">#使用键-值（key-value）存储，具有极快的查找速度。</span></span>
<span class="line"><span style="color:#E1E4E8;">score </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&#39;Michael&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">95</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Tracy&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">85</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(score[</span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#要避免key不存在的错误，有两种办法，一是通过in判断key否存在：</span></span>
<span class="line"><span style="color:#6A737D;">#二是通过dict提供的get方法，如果key不存在，可以返回None，或者自己指定的value：</span></span>
<span class="line"><span style="color:#E1E4E8;">rs</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> score</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#False</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(rs)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;"># none</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(score.get(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">)) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#要删除一个key，用pop(key)方法，对应的value也会从dict中删除：</span></span>
<span class="line"><span style="color:#E1E4E8;">score.pop(</span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(score)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。</span></span>
<span class="line"><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">])</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(s)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#通过remove(key)方法可以删除元素：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">s1</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">s2</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">])</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#求交集</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(s1 </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> s2)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#函数</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">abs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">float</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;12.3455&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">m</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">9</span></span>
<span class="line"><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> [m,n]:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">的十六进制的字符串是&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">x,</span><span style="color:#79B8FF;">hex</span><span style="color:#E1E4E8;">(x))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#在Python中，定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myabs</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#数据类型检查可以用内置函数isinstance()实现：</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">isinstance</span><span style="color:#E1E4E8;">(x,(</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">float</span><span style="color:#E1E4E8;">)):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TypeError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; bad operand type &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> x</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(myabs(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#6A737D;">#print(myabs(&#39;a&#39;))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">move</span><span style="color:#E1E4E8;">( x , y , step , angle ):</span></span>
<span class="line"><span style="color:#E1E4E8;">  newX</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">step</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">math.cos(angle)</span></span>
<span class="line"><span style="color:#E1E4E8;">  newY</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">step</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">math.sin(angle)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> newX,newY</span></span>
<span class="line"><span style="color:#6A737D;">#Python的函数返回多值其实就是返回一个tuple</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(move(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,math.pi</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">power</span><span style="color:#E1E4E8;">(x,n</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  s</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> n</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    n</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    s</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">x</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> s</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">quadratic</span><span style="color:#E1E4E8;">(a,b,c):</span></span>
<span class="line"><span style="color:#E1E4E8;">  flag</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">power(b)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">c</span></span>
<span class="line"><span style="color:#E1E4E8;">  rs1</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  rs2</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> flag </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;无解&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> flag</span><span style="color:#F97583;">==</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    rs1</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">math.sqrt(power(b)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">c))</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span></span>
<span class="line"><span style="color:#E1E4E8;">    rs2</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">math.sqrt(power(b)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">c))</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">  rs1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    rs1</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">math.sqrt(power(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">c))</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span></span>
<span class="line"><span style="color:#E1E4E8;">    rs2</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">math.sqrt(power(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">c))</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">a</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> rs1,rs2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(quadratic(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">))</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(power(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#a2 + b2 + c2 + ……</span></span>
<span class="line"><span style="color:#6A737D;">#可变参数就是传入的参数个数是可变的</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">nums):</span></span>
<span class="line"><span style="color:#E1E4E8;">  s</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> nums:</span></span>
<span class="line"><span style="color:#E1E4E8;">    s</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">power(num)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> s</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(calc(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#对于任意函数,都可以通过类似func(*args, **kw)的形式调用它，无论它的参数是如何定义的</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">person</span><span style="color:#E1E4E8;">(name,age,</span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">kw):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name:&#39;</span><span style="color:#E1E4E8;">,name,</span><span style="color:#9ECBFF;">&#39;age:&#39;</span><span style="color:#E1E4E8;">,age,</span><span style="color:#9ECBFF;">&#39;other:&#39;</span><span style="color:#E1E4E8;">,kw)</span></span>
<span class="line"><span style="color:#E1E4E8;">person(</span><span style="color:#9ECBFF;">&#39;sherlock&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;32&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">person(</span><span style="color:#9ECBFF;">&#39;sherlock&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;32&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">address</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;Baker Street 221B&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loop</span><span style="color:#E1E4E8;">(max,n</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">max</span><span style="color:#F97583;">==</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> n</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> loop(</span><span style="color:#79B8FF;">max</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">max</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">n)</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(loop(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#切片（Slice）操作符，能大大简化这种操作</span></span>
<span class="line"><span style="color:#E1E4E8;">arr</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(arr[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#6A737D;">#起始位置是0可省略</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(arr[:</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#6A737D;">#step步长</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(arr[::</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">json</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#key</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> key </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> json:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#val</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> json.values():</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(val)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#item</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k,v </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> json.items():</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(k,v)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#带下标的循环</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i, value </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">enumerate</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;C&#39;</span><span style="color:#E1E4E8;">]):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(i, value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#2个变量循环</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> x,y </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> [(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">),(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)]:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(x,y)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#如何判断一个对象是可迭代对象呢？方法是通过collections模块的Iterable类型判断</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> collections </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Iterable</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">isinstance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abc&#39;</span><span style="color:#E1E4E8;">, Iterable))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#列表生成式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">( [x</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">)] )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">( [x</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> x</span><span style="color:#F97583;">%</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">==</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> ] )</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Lm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;World&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Apple&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Ln </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [s.lower() </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> Lm </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">isinstance</span><span style="color:#E1E4E8;">(s,</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">))]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(Ln)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(max):</span></span>
<span class="line"><span style="color:#E1E4E8;">  n,a,b</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> n</span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(b)</span></span>
<span class="line"><span style="color:#E1E4E8;">    (a,b)</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(b,a</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">b)</span></span>
<span class="line"><span style="color:#E1E4E8;">    n</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;done&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">fib(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#要理解generator的工作原理，它是在for循环的过程中不断计算出下一个元素，并在适当的条件结束for循环。对于函数改成的generator来说，遇到return语句或者执行到函数体最后一行语句，就是结束generator的指令，for循环随之结束。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#函数本身也可以赋值给变量，即：变量可以指向函数。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式。</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(x,y,f):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> f(x)</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">f(y)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(add(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">abs</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#map</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">( </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">])) )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#reduce</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> functools </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">reduce</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(x,y):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">  x</span><span style="color:#F97583;">*</span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">y</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">reduce</span><span style="color:#E1E4E8;">(fn,[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">]))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(name):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> name.capitalize()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">L1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;adam&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;LISA&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;barT&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">L2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;">(normalize, L1))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(L2)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#filter</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isodd</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">  x</span><span style="color:#F97583;">%</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">==</span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">filter</span><span style="color:#E1E4E8;">(isodd,[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#去掉空字符串</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">not_empty</span><span style="color:#E1E4E8;">(s):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> s.strip()</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">filter</span><span style="color:#E1E4E8;">(not_empty,[</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">])))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#回文数</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is_palindrome</span><span style="color:#E1E4E8;">(n):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(n)[::]</span><span style="color:#F97583;">==</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(n)[::</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">output </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">filter</span><span style="color:#E1E4E8;">(is_palindrome, </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">(output))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#倒序</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123&#39;</span><span style="color:#E1E4E8;">[::</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#排序</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">sorted</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;bob&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;about&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Zoo&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Credit&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">.lower,</span><span style="color:#FFAB70;">reverse</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">scoreList</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[(</span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">), (</span><span style="color:#9ECBFF;">&#39;Adam&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">92</span><span style="color:#E1E4E8;">), (</span><span style="color:#9ECBFF;">&#39;Bart&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">66</span><span style="color:#E1E4E8;">), (</span><span style="color:#9ECBFF;">&#39;Lisa&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">88</span><span style="color:#E1E4E8;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> scoreList:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(k[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">by_name</span><span style="color:#E1E4E8;">(t):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> t[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">by_score</span><span style="color:#E1E4E8;">(t):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> t[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">La</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">sorted</span><span style="color:#E1E4E8;">(scoreList,</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">by_name)</span></span>
<span class="line"><span style="color:#E1E4E8;">Lb</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">sorted</span><span style="color:#E1E4E8;">(scoreList,</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">by_score,</span><span style="color:#FFAB70;">reverse</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;"> (La)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;"> (Lb)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#返回函数</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lazy_sum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">args):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sum</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        ax </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> args:</span></span>
<span class="line"><span style="color:#E1E4E8;">            ax </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ax </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ax</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sum</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">f</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">lazy_sum(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(f())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#python装饰器，decorator就是一个返回函数的高阶函数</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(func):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wrapper</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">kw):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;call </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">():&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> func.</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> func(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">kw)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> wrapper</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#获取当前时间</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@log</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentTime</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">  time.strftime(</span><span style="color:#9ECBFF;">&#39;%Y-%m-</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;"> %H:%M:%S&#39;</span><span style="color:#E1E4E8;">,time.localtime(time.time()))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(time.time())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(getCurrentTime())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#偏函数设定参数的默认值，可以降低函数调用的难度</span></span>
<span class="line"><span style="color:#6A737D;">#int()函数还提供额外的base参数，默认值为10。如果传入base参数，就可以做N进制的转换</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int2</span><span style="color:#E1E4E8;">(x,base</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(x,base)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(int2(</span><span style="color:#9ECBFF;">&#39;10000&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当函数的参数个数太多，需要简化时，使用functools.partial可以创建一个新的函数，</span></span>
<span class="line"><span style="color:#6A737D;">#这个新函数可以固定住原函数的部分参数，从而在调用时更简单。</span></span>
<span class="line"><span style="color:#E1E4E8;">int16</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> functools.partial(</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">base</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(int16(</span><span style="color:#9ECBFF;">&#39;16&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#作用域</span></span>
<span class="line"><span style="color:#6A737D;">#正常的函数和变量名是公开的（public），可以被直接引用，比如：abc，x123，PI等；</span></span>
<span class="line"><span style="color:#6A737D;">#类似__xxx__这样的变量是特殊变量，可以被直接引用</span></span>
<span class="line"><span style="color:#6A737D;">#类似_xxx和__xxx这样的函数或变量就是非公开的（private），不应该被直接引用，比如_abc，__abc等；</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#外部不需要引用的函数全部定义成private，只有外部需要引用的函数才定义为public。</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_private_1</span><span style="color:#E1E4E8;">(name):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Hello, </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_private_2</span><span style="color:#E1E4E8;">(name):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Hi, </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">greeting</span><span style="color:#E1E4E8;">(name):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(name) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> _private_1(name)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> _private_2(name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(greeting(</span><span style="color:#9ECBFF;">&#39;sherlock !&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#安装第三方模块: 包管理工具pip</span></span>
<span class="line"><span style="color:#6A737D;">#如果你正在使用Windows，请参考安装Python一节的内容，确保安装时勾选了pip和Add python.exe to Path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># &gt;&gt;&gt;pip install Pillow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#更换py源</span></span>
<span class="line"><span style="color:#6A737D;"># C:\\Users\\Money\\AppData\\Local\\pip 新建一个pip.ini</span></span>
<span class="line"><span style="color:#6A737D;"># -------------豆瓣-------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># [global]</span></span>
<span class="line"><span style="color:#6A737D;"># timeout = 6000</span></span>
<span class="line"><span style="color:#6A737D;"># index-url = http://pypi.douban.com/simple</span></span>
<span class="line"><span style="color:#6A737D;"># trusted-host = http://pypi.douban.com</span></span>
<span class="line"><span style="color:#6A737D;"># -------------豆瓣-------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -------------阿里云-------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># [global]</span></span>
<span class="line"><span style="color:#6A737D;"># timeout = 6000</span></span>
<span class="line"><span style="color:#6A737D;"># index-url = http://mirrors.aliyun.com/pypi/simple/ </span></span>
<span class="line"><span style="color:#6A737D;"># trusted-host=mirrors.aliyun.com</span></span>
<span class="line"><span style="color:#6A737D;"># -------------阿里云-------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># pypi.tuna.tsinghua.edu.cn </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -i 指定来源</span></span>
<span class="line"><span style="color:#6A737D;"># pip install web.py -i http://pypi.douban.com/simple</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 常用的第三方库：mysql-connector-python   numpy(科学计算)  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#面向对象：</span></span>
<span class="line"><span style="color:#6A737D;">#类名通常是大写开头的单词，紧接着是(object)，表示该类是从哪个类继承下来的</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Student</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#特殊方法“init”前后有两个下划线！！！</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__init__</span><span style="color:#E1E4E8;">(self,name,score):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># self.___name   私有变量，只能访问不能修改</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">name    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># self.___score</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__score</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">score</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get_name</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">set_name</span><span style="color:#E1E4E8;">(self,name):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">print_info</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#注意百分号后面的括号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">: </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__name , </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__score) )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get_level</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__score</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;A&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__score</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;B&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__score</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;C&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#sublime text3:代码区直接全选就会看到有的地方是四个点有个地方是一个横线，改一致了就好了</span></span>
<span class="line"><span style="color:#E1E4E8;">sherlock</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">Student(</span><span style="color:#9ECBFF;">&#39;sherlock holmes&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">sherlock.print_info()</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(sherlock.get_level())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在定义class的时候，定义一个特殊的__slots__变量，来限制该class实例能添加的属性</span></span>
<span class="line"><span style="color:#6A737D;"># </span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#  __slots__ = (&#39;name&#39;, &#39;age&#39;) # 用tuple定义允许绑定的属性名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#  __slots__定义的属性仅对当前类实例起作用，对继承的子类是不起作用的</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__init__</span><span style="color:#E1E4E8;">(self,name):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">name</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#默认self必须写上</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.__name,</span><span style="color:#9ECBFF;">&#39;i can run&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">cat</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">Animal(</span><span style="color:#9ECBFF;">&#39;cat&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">cat.run()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dog</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">eat</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;i want to eat bones&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Cat</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jump</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;i can jump&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">dog</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">Dog(</span><span style="color:#9ECBFF;">&#39;dog&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">dog.run()</span></span>
<span class="line"><span style="color:#E1E4E8;">dog.eat()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">cat</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">Cat(</span><span style="color:#9ECBFF;">&#39;cat&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">cat.jump()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取对象信息:判断对象类型</span></span>
<span class="line"><span style="color:#6A737D;"># 使用type()函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">abs</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># type(123)==type(456)      int  True</span></span>
<span class="line"><span style="color:#6A737D;"># type(&#39;abc&#39;)==type(&#39;123&#39;)  str  True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 判断一个对象是否是函数,可以使用types模块中定义的常量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用isinstance()</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance(&#39;a&#39;, str)     True</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance(123, int)     True</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance(b&#39;a&#39;, bytes)  True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 并且还可以判断一个变量是否是某些类型中的一种，比如下面的代码就可以判断是否是list或者tuple</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance([1, 2, 3], (list, tuple))  True</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance((1, 2, 3), (list, tuple))  True</span></span>
<span class="line"><span style="color:#6A737D;"># hasattr(obj,&#39;name&#39;,404)  可以传入一个default参数，如果属性不存在，就返回默认值</span></span>
<span class="line"><span style="color:#6A737D;"># getattr(obj,&#39;name&#39;)</span></span>
<span class="line"><span style="color:#6A737D;"># setattr(obj,&#39;name&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 千万不要把实例属性和类属性使用相同的名字，因为相同名称的实例属性将屏蔽掉类属性</span></span>
<span class="line"><span style="color:#6A737D;"># example </span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">readImage</span><span style="color:#E1E4E8;">(fp):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hasattr</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&#39;read&#39;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> readData(fp)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># @property，我们在对实例属性操作的时候，就知道该属性很可能不是直接暴露的</span></span>
<span class="line"><span style="color:#6A737D;"># 而是通过getter和setter方法来实现的</span></span>
<span class="line"><span style="color:#6A737D;"># birth是可读写属性，age就是一个只读属性</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Student object (birth: </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">)&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._birth</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">__repr__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">property</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">birth</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._birth</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@birth.setter</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">birth</span><span style="color:#E1E4E8;">(self, value):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._birth </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">property</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">age</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2017</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._birth</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#如果一个类想被用于for ... in循环，类似list或tuple那样，就必须实现一个__iter__()方法，该方法返回一个迭代对象，</span></span>
<span class="line"><span style="color:#6A737D;">#然后，Python的for循环就会不断调用该迭代对象的__next__()方法拿到循环的下一个值，直到遇到StopIteration错误时退出循环。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fib</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__init__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.a, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 初始化两个计数器a，b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__iter__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 实例本身就是迭代对象，故返回自己</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__next__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.a, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.b) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.b, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.b) </span><span style="color:#6A737D;"># 计算下一个值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.a </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100000</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 退出循环的条件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">StopIteration</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.a </span><span style="color:#6A737D;"># 返回下一个值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> Fib():</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(n)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Chain</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__init__</span><span style="color:#E1E4E8;">(self, path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__getattr__</span><span style="color:#E1E4E8;">(self, path):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Chain(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._path, path))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">__repr__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#枚举</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> enum </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Enum, unique</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#类似常量</span></span>
<span class="line"><span style="color:#E1E4E8;">Month </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Enum(</span><span style="color:#9ECBFF;">&#39;Month&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#9ECBFF;">&#39;Jan&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Feb&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Mar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Apr&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;May&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Jun&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Jul&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Aug&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Sep&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Oct&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Nov&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Dec&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># @unique装饰器可以帮助我们检查保证没有重复值</span></span>
<span class="line"><span style="color:#B392F0;">@unique</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Week</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Enum</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">  Sun </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  Mon </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  Tue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">  Wed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">  Thu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">  Fri </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">  Sat </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">#!/usr/bin/env python3</span></span>
<span class="line"><span style="color:#6A737D;"># -*- coding: utf-8 -*-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">__author__</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;Chiang&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> math</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> time</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> functools</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> logging</span></span>
<span class="line"><span style="color:#24292E;">logging.basicConfig(</span><span style="color:#E36209;">level</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">logging.</span><span style="color:#005CC5;">INFO</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello world!&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;sherlock&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1+3=&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#输入输出测试</span></span>
<span class="line"><span style="color:#6A737D;">#name=input(&quot;please tell me your name:&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">#print(&quot;hello,&quot;+name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#注意条件语句的写法</span></span>
<span class="line"><span style="color:#24292E;">age</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">20</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> age</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#值的交换</span></span>
<span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">b</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">temp</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">a</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">b</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">b</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">temp</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(a,b)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#常量</span></span>
<span class="line"><span style="color:#005CC5;">PI</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3.141592654</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">ord</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">))</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;str&#39;</span><span style="color:#24292E;">))</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;我爱你！&quot;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#浮点数的表示</span></span>
<span class="line"><span style="color:#6A737D;">#%运算符就是用来格式化字符串的</span></span>
<span class="line"><span style="color:#24292E;">s1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">72</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">s2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">85</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (s2 </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> s1)</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> s2 </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">%.1f%%</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> r)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#Python内置的一种数据类型是列表：list。list是一种有序的集合，可以随时添加和删除其中的元素。</span></span>
<span class="line"><span style="color:#24292E;">fruits</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;apple&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;orange&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;lemon&#39;</span><span style="color:#24292E;">]</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(fruits[</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(fruits)] )</span></span>
<span class="line"><span style="color:#6A737D;">#正向从0开始，负向从1开始</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(fruits[</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(fruits[</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">fruits.append(</span><span style="color:#032F62;">&#39;apple&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#追加</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fruits appended:&#39;</span><span style="color:#24292E;">,fruits)</span></span>
<span class="line"><span style="color:#6A737D;">#插入</span></span>
<span class="line"><span style="color:#24292E;">fruits.insert(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;juice&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;inserted fruits:&#39;</span><span style="color:#24292E;">,fruits)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#删除</span></span>
<span class="line"><span style="color:#24292E;">fruits.pop(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popped fruits:&#39;</span><span style="color:#24292E;">,fruits)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#循环</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> fruit </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> fruits:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&gt;&gt;&quot;</span><span style="color:#24292E;">,fruit)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;Apple&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Google&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Microsoft&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;Java&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Python&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Ruby&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;PHP&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;Adam&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Bart&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Lisa&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(L[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">][</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],L[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">][</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],L[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">][</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">final</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(final)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#条件语句</span></span>
<span class="line"><span style="color:#005CC5;">BMI</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">55</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1.78</span><span style="color:#D73A49;">*</span><span style="color:#005CC5;">1.78</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BMI</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;exacly fat&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BMI</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">28</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fat&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BMI</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;heavy&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BMI</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">18.5</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;middle&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;slin&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#高斯求和</span></span>
<span class="line"><span style="color:#005CC5;">sum</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#range(n) 0-&gt; n 但不包括n</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">101</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">sum</span><span style="color:#D73A49;">+=</span><span style="color:#24292E;">num</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">sum</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#Python内置了字典：dict的支持，dict全称dictionary，在其他语言中也称为map，</span></span>
<span class="line"><span style="color:#6A737D;">#使用键-值（key-value）存储，具有极快的查找速度。</span></span>
<span class="line"><span style="color:#24292E;">score </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&#39;Michael&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">95</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Tracy&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">85</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(score[</span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#要避免key不存在的错误，有两种办法，一是通过in判断key否存在：</span></span>
<span class="line"><span style="color:#6A737D;">#二是通过dict提供的get方法，如果key不存在，可以返回None，或者自己指定的value：</span></span>
<span class="line"><span style="color:#24292E;">rs</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> score</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#False</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(rs)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;"># none</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(score.get(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">)) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#要删除一个key，用pop(key)方法，对应的value也会从dict中删除：</span></span>
<span class="line"><span style="color:#24292E;">score.pop(</span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(score)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。</span></span>
<span class="line"><span style="color:#24292E;">s</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">set</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">])</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(s)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#通过remove(key)方法可以删除元素：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">s1</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">set</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">s2</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">set</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">])</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6A737D;">#求交集</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(s1 </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> s2)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#函数</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">max</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">min</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">float</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;12.3455&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">m</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">9</span></span>
<span class="line"><span style="color:#24292E;">n</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> [m,n]:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">的十六进制的字符串是&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;">x,</span><span style="color:#005CC5;">hex</span><span style="color:#24292E;">(x))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#在Python中，定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myabs</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">#数据类型检查可以用内置函数isinstance()实现：</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">isinstance</span><span style="color:#24292E;">(x,(</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">float</span><span style="color:#24292E;">)):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TypeError</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39; bad operand type &#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> x</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(myabs(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#6A737D;">#print(myabs(&#39;a&#39;))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">move</span><span style="color:#24292E;">( x , y , step , angle ):</span></span>
<span class="line"><span style="color:#24292E;">  newX</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">step</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">math.cos(angle)</span></span>
<span class="line"><span style="color:#24292E;">  newY</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">step</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">math.sin(angle)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> newX,newY</span></span>
<span class="line"><span style="color:#6A737D;">#Python的函数返回多值其实就是返回一个tuple</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(move(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,math.pi</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">power</span><span style="color:#24292E;">(x,n</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  s</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> n</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    n</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">    s</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">x</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> s</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">quadratic</span><span style="color:#24292E;">(a,b,c):</span></span>
<span class="line"><span style="color:#24292E;">  flag</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">power(b)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">c</span></span>
<span class="line"><span style="color:#24292E;">  rs1</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  rs2</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> flag </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;无解&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> flag</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    rs1</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">math.sqrt(power(b)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">c))</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span></span>
<span class="line"><span style="color:#24292E;">    rs2</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">math.sqrt(power(b)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">c))</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">  rs1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    rs1</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">math.sqrt(power(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">c))</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span></span>
<span class="line"><span style="color:#24292E;">    rs2</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">math.sqrt(power(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">c))</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">a</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> rs1,rs2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(quadratic(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">))</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(power(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#a2 + b2 + c2 + ……</span></span>
<span class="line"><span style="color:#6A737D;">#可变参数就是传入的参数个数是可变的</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">calc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">nums):</span></span>
<span class="line"><span style="color:#24292E;">  s</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> nums:</span></span>
<span class="line"><span style="color:#24292E;">    s</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">power(num)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> s</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(calc(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">))</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#对于任意函数,都可以通过类似func(*args, **kw)的形式调用它，无论它的参数是如何定义的</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">person</span><span style="color:#24292E;">(name,age,</span><span style="color:#D73A49;">**</span><span style="color:#24292E;">kw):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;name:&#39;</span><span style="color:#24292E;">,name,</span><span style="color:#032F62;">&#39;age:&#39;</span><span style="color:#24292E;">,age,</span><span style="color:#032F62;">&#39;other:&#39;</span><span style="color:#24292E;">,kw)</span></span>
<span class="line"><span style="color:#24292E;">person(</span><span style="color:#032F62;">&#39;sherlock&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;32&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">person(</span><span style="color:#032F62;">&#39;sherlock&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;32&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">address</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;Baker Street 221B&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loop</span><span style="color:#24292E;">(max,n</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">max</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> n</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> loop(</span><span style="color:#005CC5;">max</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">max</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">n)</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(loop(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#切片（Slice）操作符，能大大简化这种操作</span></span>
<span class="line"><span style="color:#24292E;">arr</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(arr[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#6A737D;">#起始位置是0可省略</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(arr[:</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#6A737D;">#step步长</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(arr[::</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">json</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#key</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> json:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(key)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#val</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> val </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> json.values():</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(val)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#item</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k,v </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> json.items():</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(k,v)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#带下标的循环</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i, value </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">enumerate</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">]):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(i, value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#2个变量循环</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> x,y </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> [(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">),(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">),(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)]:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(x,y)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#如何判断一个对象是可迭代对象呢？方法是通过collections模块的Iterable类型判断</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> collections </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Iterable</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">isinstance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abc&#39;</span><span style="color:#24292E;">, Iterable))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#列表生成式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">list</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">( [x</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">x </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">)] )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">( [x</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">x </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> x</span><span style="color:#D73A49;">%</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> ] )</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Lm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;Hello&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;World&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Apple&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">None</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Ln </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [s.lower() </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> Lm </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">isinstance</span><span style="color:#24292E;">(s,</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">))]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(Ln)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fib</span><span style="color:#24292E;">(max):</span></span>
<span class="line"><span style="color:#24292E;">  n,a,b</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> n</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">max</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(b)</span></span>
<span class="line"><span style="color:#24292E;">    (a,b)</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(b,a</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">b)</span></span>
<span class="line"><span style="color:#24292E;">    n</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;done&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">fib(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#要理解generator的工作原理，它是在for循环的过程中不断计算出下一个元素，并在适当的条件结束for循环。对于函数改成的generator来说，遇到return语句或者执行到函数体最后一行语句，就是结束generator的指令，for循环随之结束。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#函数本身也可以赋值给变量，即：变量可以指向函数。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式。</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(x,y,f):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> f(x)</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">f(y)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(add(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#map</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">list</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">map</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">])) )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#reduce</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> functools </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#E36209;">reduce</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(x,y):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">  x</span><span style="color:#D73A49;">*</span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">y</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#E36209;">reduce</span><span style="color:#24292E;">(fn,[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">]))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(name):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> name.capitalize()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">L1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;adam&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;LISA&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;barT&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">L2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">map</span><span style="color:#24292E;">(normalize, L1))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(L2)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#filter</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isodd</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">  x</span><span style="color:#D73A49;">%</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">list</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">(isodd,[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#去掉空字符串</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">not_empty</span><span style="color:#24292E;">(s):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> s.strip()</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">list</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">(not_empty,[</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">])))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#回文数</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">is_palindrome</span><span style="color:#24292E;">(n):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(n)[::]</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(n)[::</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">output </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">(is_palindrome, </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">list</span><span style="color:#24292E;">(output))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#倒序</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123&#39;</span><span style="color:#24292E;">[::</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#排序</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">sorted</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;bob&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;about&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Zoo&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Credit&#39;</span><span style="color:#24292E;">], </span><span style="color:#E36209;">key</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">.lower,</span><span style="color:#E36209;">reverse</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">scoreList</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[(</span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">), (</span><span style="color:#032F62;">&#39;Adam&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">92</span><span style="color:#24292E;">), (</span><span style="color:#032F62;">&#39;Bart&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">66</span><span style="color:#24292E;">), (</span><span style="color:#032F62;">&#39;Lisa&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">88</span><span style="color:#24292E;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> scoreList:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(k[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">by_name</span><span style="color:#24292E;">(t):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> t[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">by_score</span><span style="color:#24292E;">(t):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> t[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">La</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">sorted</span><span style="color:#24292E;">(scoreList,</span><span style="color:#E36209;">key</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">by_name)</span></span>
<span class="line"><span style="color:#24292E;">Lb</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">sorted</span><span style="color:#24292E;">(scoreList,</span><span style="color:#E36209;">key</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">by_score,</span><span style="color:#E36209;">reverse</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;"> (La)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;"> (Lb)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#返回函数</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lazy_sum</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">args):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sum</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        ax </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> args:</span></span>
<span class="line"><span style="color:#24292E;">            ax </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ax </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> n</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ax</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sum</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">f</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">lazy_sum(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(f())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#python装饰器，decorator就是一个返回函数的高阶函数</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(func):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wrapper</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">args, </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">kw):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;call </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">():&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> func.</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> func(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">args, </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">kw)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> wrapper</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#获取当前时间</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@log</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentTime</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">  time.strftime(</span><span style="color:#032F62;">&#39;%Y-%m-</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;"> %H:%M:%S&#39;</span><span style="color:#24292E;">,time.localtime(time.time()))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(time.time())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(getCurrentTime())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#偏函数设定参数的默认值，可以降低函数调用的难度</span></span>
<span class="line"><span style="color:#6A737D;">#int()函数还提供额外的base参数，默认值为10。如果传入base参数，就可以做N进制的转换</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int2</span><span style="color:#24292E;">(x,base</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(x,base)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(int2(</span><span style="color:#032F62;">&#39;10000&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当函数的参数个数太多，需要简化时，使用functools.partial可以创建一个新的函数，</span></span>
<span class="line"><span style="color:#6A737D;">#这个新函数可以固定住原函数的部分参数，从而在调用时更简单。</span></span>
<span class="line"><span style="color:#24292E;">int16</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> functools.partial(</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">, </span><span style="color:#E36209;">base</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">16</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(int16(</span><span style="color:#032F62;">&#39;16&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#作用域</span></span>
<span class="line"><span style="color:#6A737D;">#正常的函数和变量名是公开的（public），可以被直接引用，比如：abc，x123，PI等；</span></span>
<span class="line"><span style="color:#6A737D;">#类似__xxx__这样的变量是特殊变量，可以被直接引用</span></span>
<span class="line"><span style="color:#6A737D;">#类似_xxx和__xxx这样的函数或变量就是非公开的（private），不应该被直接引用，比如_abc，__abc等；</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#外部不需要引用的函数全部定义成private，只有外部需要引用的函数才定义为public。</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_private_1</span><span style="color:#24292E;">(name):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Hello, </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_private_2</span><span style="color:#24292E;">(name):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Hi, </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">greeting</span><span style="color:#24292E;">(name):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(name) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> _private_1(name)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> _private_2(name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(greeting(</span><span style="color:#032F62;">&#39;sherlock !&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#安装第三方模块: 包管理工具pip</span></span>
<span class="line"><span style="color:#6A737D;">#如果你正在使用Windows，请参考安装Python一节的内容，确保安装时勾选了pip和Add python.exe to Path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># &gt;&gt;&gt;pip install Pillow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#更换py源</span></span>
<span class="line"><span style="color:#6A737D;"># C:\\Users\\Money\\AppData\\Local\\pip 新建一个pip.ini</span></span>
<span class="line"><span style="color:#6A737D;"># -------------豆瓣-------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># [global]</span></span>
<span class="line"><span style="color:#6A737D;"># timeout = 6000</span></span>
<span class="line"><span style="color:#6A737D;"># index-url = http://pypi.douban.com/simple</span></span>
<span class="line"><span style="color:#6A737D;"># trusted-host = http://pypi.douban.com</span></span>
<span class="line"><span style="color:#6A737D;"># -------------豆瓣-------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -------------阿里云-------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># [global]</span></span>
<span class="line"><span style="color:#6A737D;"># timeout = 6000</span></span>
<span class="line"><span style="color:#6A737D;"># index-url = http://mirrors.aliyun.com/pypi/simple/ </span></span>
<span class="line"><span style="color:#6A737D;"># trusted-host=mirrors.aliyun.com</span></span>
<span class="line"><span style="color:#6A737D;"># -------------阿里云-------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># pypi.tuna.tsinghua.edu.cn </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -i 指定来源</span></span>
<span class="line"><span style="color:#6A737D;"># pip install web.py -i http://pypi.douban.com/simple</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 常用的第三方库：mysql-connector-python   numpy(科学计算)  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#面向对象：</span></span>
<span class="line"><span style="color:#6A737D;">#类名通常是大写开头的单词，紧接着是(object)，表示该类是从哪个类继承下来的</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Student</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#特殊方法“init”前后有两个下划线！！！</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self,name,score):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># self.___name   私有变量，只能访问不能修改</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">name    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># self.___score</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__score</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">score</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get_name</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">set_name</span><span style="color:#24292E;">(self,name):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">print_info</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#注意百分号后面的括号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">: </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__name , </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__score) )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get_level</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__score</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;A&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__score</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">80</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;B&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__score</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;C&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#sublime text3:代码区直接全选就会看到有的地方是四个点有个地方是一个横线，改一致了就好了</span></span>
<span class="line"><span style="color:#24292E;">sherlock</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">Student(</span><span style="color:#032F62;">&#39;sherlock holmes&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">sherlock.print_info()</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(sherlock.get_level())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在定义class的时候，定义一个特殊的__slots__变量，来限制该class实例能添加的属性</span></span>
<span class="line"><span style="color:#6A737D;"># </span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">#  __slots__ = (&#39;name&#39;, &#39;age&#39;) # 用tuple定义允许绑定的属性名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">#  __slots__定义的属性仅对当前类实例起作用，对继承的子类是不起作用的</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self,name):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">name</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">#默认self必须写上</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.__name,</span><span style="color:#032F62;">&#39;i can run&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cat</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">Animal(</span><span style="color:#032F62;">&#39;cat&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">cat.run()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">eat</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;i want to eat bones&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Cat</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jump</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;i can jump&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">dog</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">Dog(</span><span style="color:#032F62;">&#39;dog&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">dog.run()</span></span>
<span class="line"><span style="color:#24292E;">dog.eat()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cat</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">Cat(</span><span style="color:#032F62;">&#39;cat&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">cat.jump()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取对象信息:判断对象类型</span></span>
<span class="line"><span style="color:#6A737D;"># 使用type()函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">type</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">type</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># type(123)==type(456)      int  True</span></span>
<span class="line"><span style="color:#6A737D;"># type(&#39;abc&#39;)==type(&#39;123&#39;)  str  True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 判断一个对象是否是函数,可以使用types模块中定义的常量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用isinstance()</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance(&#39;a&#39;, str)     True</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance(123, int)     True</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance(b&#39;a&#39;, bytes)  True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 并且还可以判断一个变量是否是某些类型中的一种，比如下面的代码就可以判断是否是list或者tuple</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance([1, 2, 3], (list, tuple))  True</span></span>
<span class="line"><span style="color:#6A737D;"># isinstance((1, 2, 3), (list, tuple))  True</span></span>
<span class="line"><span style="color:#6A737D;"># hasattr(obj,&#39;name&#39;,404)  可以传入一个default参数，如果属性不存在，就返回默认值</span></span>
<span class="line"><span style="color:#6A737D;"># getattr(obj,&#39;name&#39;)</span></span>
<span class="line"><span style="color:#6A737D;"># setattr(obj,&#39;name&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 千万不要把实例属性和类属性使用相同的名字，因为相同名称的实例属性将屏蔽掉类属性</span></span>
<span class="line"><span style="color:#6A737D;"># example </span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">readImage</span><span style="color:#24292E;">(fp):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hasattr</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&#39;read&#39;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> readData(fp)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># @property，我们在对实例属性操作的时候，就知道该属性很可能不是直接暴露的</span></span>
<span class="line"><span style="color:#6A737D;"># 而是通过getter和setter方法来实现的</span></span>
<span class="line"><span style="color:#6A737D;"># birth是可读写属性，age就是一个只读属性</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Student object (birth: </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">)&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._birth</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">__repr__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">property</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">birth</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._birth</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@birth.setter</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">birth</span><span style="color:#24292E;">(self, value):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._birth </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">property</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">age</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2017</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._birth</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#如果一个类想被用于for ... in循环，类似list或tuple那样，就必须实现一个__iter__()方法，该方法返回一个迭代对象，</span></span>
<span class="line"><span style="color:#6A737D;">#然后，Python的for循环就会不断调用该迭代对象的__next__()方法拿到循环的下一个值，直到遇到StopIteration错误时退出循环。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fib</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.a, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 初始化两个计数器a，b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__iter__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 实例本身就是迭代对象，故返回自己</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__next__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.a, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.b) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.b, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.b) </span><span style="color:#6A737D;"># 计算下一个值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.a </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100000</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 退出循环的条件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">StopIteration</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.a </span><span style="color:#6A737D;"># 返回下一个值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> Fib():</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(n)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Chain</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self, path</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__getattr__</span><span style="color:#24292E;">(self, path):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Chain(</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._path, path))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">__repr__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#枚举</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> enum </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Enum, unique</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#类似常量</span></span>
<span class="line"><span style="color:#24292E;">Month </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Enum(</span><span style="color:#032F62;">&#39;Month&#39;</span><span style="color:#24292E;">, (</span><span style="color:#032F62;">&#39;Jan&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Feb&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Mar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Apr&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;May&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Jun&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Jul&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Aug&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Sep&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Oct&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Nov&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Dec&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># @unique装饰器可以帮助我们检查保证没有重复值</span></span>
<span class="line"><span style="color:#6F42C1;">@unique</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Week</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Enum</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  Sun </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  Mon </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  Tue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">  Wed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">  Thu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">  Fri </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">  Sat </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span></span></code></pre></div>`,3),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const D=s(p,[["render",c]]);export{B as __pageData,D as default};
