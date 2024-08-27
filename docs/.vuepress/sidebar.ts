import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "计算机基础",
      icon: "book",
      prefix: "01.计算机基础/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "编程语言",
      icon: "book",
      prefix: "02.编程语言/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Web",
      icon: "book",
      prefix: "05.Web技术/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "工具使用",
      icon: "book",
      prefix: "03.工具使用/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "代码库研究",
      icon: "book",
      prefix: "04.代码库研究/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "笔记",
      icon: "book",
      prefix: "code_articles/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "随笔",
      icon: "/assets/icon/light-bulb.png",
      prefix: "10.随笔短记/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      collapsible: true,
      children: "structure",
    },
  ],
});
