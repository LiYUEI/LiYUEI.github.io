import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "book",
      prefix: "code_articles/",
      children: "structure",
    },
    {
      text: "随笔",
      icon: "/assets/icon/light-bulb.png",
      prefix: "jottings/",
      children: "structure",
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      children: "structure",
    },
  ],
});
