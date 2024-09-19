import {defineUserConfig} from "vuepress";
// import {getDirname, path} from "vuepress/utils";
import theme from "./theme.js";

// const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",

    title: "Mr.Li",
    description: "Mr.Li博客",
    theme,

    // 自定义logo
    head: [["link", {rel: "icon", href: "/logo3.png",}]],

    // 和 PWA 一起启用
    // shouldPrefetch: false,

    // alias: {
    //     "@theme-hope/modules/blog/components/BlogHero": path.resolve(
    //         __dirname,
    //         "./components/BlogHero.vue",
    //     ),
    // },
});
