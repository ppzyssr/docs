export const categoryMap = {"category":{"/":{"path":"/category/","map":{"笔记":{"path":"/category/%E7%AC%94%E8%AE%B0/","keys":["v-4b8dc536","v-4ef77674"]}}}},"tag":{"/":{"path":"/tag/","map":{"Taro":{"path":"/tag/taro/","keys":["v-4b8dc536"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


