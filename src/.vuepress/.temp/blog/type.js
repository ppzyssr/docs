export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4b8dc536","v-4ef77674","v-482413f8"]}},"star":{"/":{"path":"/star/","keys":["v-4b8dc536"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-4b8dc536","v-4ef77674"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

