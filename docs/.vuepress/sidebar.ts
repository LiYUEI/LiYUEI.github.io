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
      text: "Web",
      icon: "book",
      prefix: "05.Web技术/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "性能优化与高性能计算",
      icon: "book",
      prefix: "06.性能优化与高性能计算/",
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
      text: "杂项",
      icon: "/assets/icon/light-bulb.png",
      prefix: "杂项/",
      collapsible: true,
      children: "structure",
    },
  ],
});
