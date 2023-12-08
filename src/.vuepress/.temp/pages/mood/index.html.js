export const data = JSON.parse("{\"key\":\"v-14f724bf\",\"path\":\"/mood/\",\"title\":\"随笔\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"随笔\",\"index\":false,\"article\":false,\"timeline\":false,\"cover\":\"/assets/images/cover2.jpg\"},\"headers\":[],\"readingTime\":{\"minutes\":0.16,\"words\":47},\"filePathRelative\":\"mood/README.md\",\"excerpt\":\"<p>​\\t\\t关于人生,每个人都有不同的活法。</p>\\n<p>​\\t\\t放下助人情节,尊重他人命运。</p>\\n<blockquote>\\n<p><em>人生如逆旅，我亦是行人。</em></p>\\n</blockquote>\\n\"}")

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
