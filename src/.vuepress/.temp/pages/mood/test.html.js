export const data = JSON.parse("{\"key\":\"v-42e46cb0\",\"path\":\"/mood/test.html\",\"title\":\"测试\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"测试\"},\"headers\":[{\"level\":2,\"title\":\"test\",\"slug\":\"test\",\"link\":\"#test\",\"children\":[]}],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"mood/test.md\",\"excerpt\":\"<h2> test</h2>\\n\"}")

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
