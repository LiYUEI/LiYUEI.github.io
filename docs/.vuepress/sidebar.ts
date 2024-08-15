import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "book",
      prefix: "code_articles/",
      link: "code_articles/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "随笔",
      icon: "/assets/icon/light-bulb.png",
      prefix: "jottings/",
      link: "jottings/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      children: "structure",
    },
  ],
});
