export const data = JSON.parse("{\"key\":\"v-2be07832\",\"path\":\"/posts/test.html\",\"title\":\"test\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":\"posts/test.md\",\"excerpt\":\"<h1> test</h1>\\n\"}")

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
