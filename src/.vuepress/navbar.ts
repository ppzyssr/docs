import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    link: "/studynotes/README",
    activeMatch: "^/studynotes/",
  },
  {
    text: "随笔",
    link: "/mood/README",
    activeMatch: "^/mood/",
  },
  {
    text: "关于",
    link: "/intro",
    activeMatch: "/intro",
  },
]);
