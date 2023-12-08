export const data = JSON.parse("{\"key\":\"v-3e65f804\",\"path\":\"/studynotes/\",\"title\":\"笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"笔记\",\"index\":false,\"article\":false,\"timeline\":false,\"cover\":\"/assets/images/cover1.jpg\"},\"headers\":[],\"readingTime\":{\"minutes\":0.52,\"words\":155},\"filePathRelative\":\"studynotes/README.md\",\"excerpt\":\"<p>​\\t\\t人不要妄自菲薄，也不要妄自尊大。在任何一条道路上，我们都是在踩着前人的脚印，向着未知探索。不见得超越不了前人，当然也必然是不一定能追赶上前人的步伐。在大环境下,我们只需保持一颗求学的心，总会收获属于自己的果实。</p>\\n<p>​\\t\\t一路上会有人退出，也会有人加入。但至少大家都曾经为了自己热爱的事情所付出过。</p>\\n<blockquote>\\n<p><em>路漫漫其修远兮,\\t吾将上下而求索。</em></p>\\n</blockquote>\\n\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
