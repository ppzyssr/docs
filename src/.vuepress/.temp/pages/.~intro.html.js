export const data = JSON.parse("{\"key\":\"v-1675f576\",\"path\":\"/.~intro.html\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{\"article\":false,\"timeline\":false,\"cover\":\"/assets/images/cover1.jpg\",\"index\":false},\"headers\":[],\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\".~intro.md\",\"excerpt\":\"<h1> 关于我</h1>\\n<p>​\\t\\t哈哈哈,这个人什么都没有留下。。。</p>\\n\"}")

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
