import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

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
});
