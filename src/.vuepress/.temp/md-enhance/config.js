import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-shared@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Playground from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/zhypdoc/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
