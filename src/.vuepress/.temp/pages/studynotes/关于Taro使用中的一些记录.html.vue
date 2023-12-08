<template><div><h1 id="关于taro使用中的一些记录" tabindex="-1"><a class="header-anchor" href="#关于taro使用中的一些记录" aria-hidden="true">#</a> 关于Taro使用中的一些记录</h1>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>环境信息：
    <span class="token property">"react"</span><span class="token operator">:</span> <span class="token string">"^18.0.0"</span><span class="token punctuation">,</span>
    <span class="token property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^18.0.0"</span><span class="token punctuation">,</span>
    <span class="token property">"taro-ui"</span><span class="token operator">:</span> <span class="token string">"^3.1.1"</span><span class="token punctuation">,</span>
    <span class="token property">"@tarojs/taro"</span><span class="token operator">:</span> <span class="token string">"3.6.18"</span><span class="token punctuation">,</span>
    NodeJs：V18.<span class="token number">17.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-关于dev环境-app-js入口文件依赖拉取路径错误" tabindex="-1"><a class="header-anchor" href="#_1-关于dev环境-app-js入口文件依赖拉取路径错误" aria-hidden="true">#</a> 1.关于dev环境，app.js入口文件依赖拉取路径错误</h2>
<p>通过命令</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm run dev<span class="token operator">:</span>weapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动生成临时文件，微信开发者工具运行时,提示报错，未获取到相关的Js文件</p>
<figure><img src="@source/studynotes/assets/2/image-20231208095508404.png" alt="image-20231208095508404" tabindex="0" loading="lazy"><figcaption>image-20231208095508404</figcaption></figure>
<p>查看app入口文件,编译生成的相关文件被放在prebundle这个文件夹下,生成的入口文件中路径缺少了前缀,拉取不到依赖包</p>
<figure><img src="@source/studynotes/assets/2/image-20231208095747767.png" alt="image-20231208095747767" tabindex="0" loading="lazy"><figcaption>image-20231208095747767</figcaption></figure>
<p>根据Taro官方文档</p>
<figure><img src="@source/studynotes/assets/2/image-20231208104748763.png" alt="image-20231208104748763" tabindex="0" loading="lazy"><figcaption>image-20231208104748763</figcaption></figure>
<p>在开发环境下,会默认开启预编译模式，加快编译速度,所以会生成一个prebundle目录将依赖加入进去</p>
<p>但是在关闭预编译模式下,微信开发者工具依然报错找不到Js文件.但是在目录文件下确实存在这个文件</p>
<figure><img src="@source/studynotes/assets/2/image-20231208105419962.png" alt="image-20231208105419962" tabindex="0" loading="lazy"><figcaption>image-20231208105419962</figcaption></figure>
<p>解决方法就是重启开发工具,再次运行成功，(猜测是自动更新项目时候，相关代码未生产，appJs已经开始运行，所以没找到相关文件,具体原因也没找到)</p>
<figure><img src="@source/studynotes/assets/2/image-20231208105620360.png" alt="image-20231208105620360" tabindex="0" loading="lazy"><figcaption>image-20231208105620360</figcaption></figure>
<p>关于预编译模式下入口文件prebundle前缀丢失的问题。</p>
<p>查找了相关资料，有说把webpack5改成webpack4的，
<img src="@source/studynotes/assets/2/image-20231208110138283.png" alt="image-20231208110138283" loading="lazy"></p>
<p>以及不同平台编译结果不同的问题</p>
<figure><img src="@source/studynotes/assets/2/image-20231208111036892.png" alt="image-20231208111036892" tabindex="0" loading="lazy"><figcaption>image-20231208111036892</figcaption></figure>
<p>暂未发现什么配置问题</p>
<p>选择直接关闭预编译选项</p>
<figure><img src="@source/studynotes/assets/2/image-20231208111409158.png" alt="image-20231208111409158" tabindex="0" loading="lazy"><figcaption>image-20231208111409158</figcaption></figure>
</div></template>


