<template><div><h1 id="gitee部署静态网站" tabindex="-1"><a class="header-anchor" href="#gitee部署静态网站" aria-hidden="true">#</a> Gitee部署静态网站</h1>
<p><strong>基本环境</strong></p>
<ul>
<li>Git (同步仓库代码)</li>
<li>Node (打包环境)</li>
<li>Gitee (代码仓库)</li>
</ul>
<h2 id="_1-初始化gitee" tabindex="-1"><a class="header-anchor" href="#_1-初始化gitee" aria-hidden="true">#</a> 1.初始化Gitee</h2>
<h3 id="_1-1新建仓库" tabindex="-1"><a class="header-anchor" href="#_1-1新建仓库" aria-hidden="true">#</a> 1.1新建仓库</h3>
<figure><img src="@source/studynotes/assets/Gitee部署静态网站/image-20231207103220684.png" alt="image-20231207103220684" tabindex="0" loading="lazy"><figcaption>image-20231207103220684</figcaption></figure>
<p>创建成功，如图</p>
<figure><img src="@source/studynotes/assets/Gitee部署静态网站/image-20231207103338761.png" alt="image-20231207103338761" tabindex="0" loading="lazy"><figcaption>image-20231207103338761</figcaption></figure>
<h2 id="_1-2推送到gitee" tabindex="-1"><a class="header-anchor" href="#_1-2推送到gitee" aria-hidden="true">#</a> 1.2推送到Gitee</h2>
<p>进入项目目录，打包项目</p>
<p>执行命令</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>git add <span class="token constant">README</span><span class="token punctuation">.</span>md
git commit <span class="token operator">-</span>m <span class="token string">"first commit"</span>
git remote add origin https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>zhypdocs<span class="token operator">/</span>zhypdocs<span class="token punctuation">.</span>git
git push <span class="token operator">-</span>u origin <span class="token string">"master"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/studynotes/assets/Gitee部署静态网站/image-20231207105844130.png" alt="image-20231207105844130" tabindex="0" loading="lazy"><figcaption>image-20231207105844130</figcaption></figure>
<p>点击服务菜单</p>
<figure><img src="@source/studynotes/assets/Gitee部署静态网站/image-20231207105937987.png" alt="image-20231207105937987" tabindex="0" loading="lazy"><figcaption>image-20231207105937987</figcaption></figure>
</div></template>


