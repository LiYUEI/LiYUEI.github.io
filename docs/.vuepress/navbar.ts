import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "技术栈",
        icon: "book",
        link: "/code_articles/",
    },
    {
        text: "分类",
        icon: "pen-to-square",
        prefix: "/code_articles/",
        children: [
            // {
            //     text: "苹果",
            //     icon: "pen-to-square",
            //     prefix: "apple/",
            //     children: [
            //         {text: "苹果1", icon: "pen-to-square", link: "1"},
            //         {text: "苹果2", icon: "pen-to-square", link: "2"},
            //     ],
            // },
            // {
            //     text: "香蕉",
            //     icon: "pen-to-square",
            //     prefix: "banana/",
            //     children: [
            //         {
            //             text: "香蕉 1",
            //             icon: "pen-to-square",
            //             link: "1",
            //         },
            //         {
            //             text: "香蕉 2",
            //             icon: "pen-to-square",
            //             link: "2",
            //         },
            //     ],
            // },
            // {text: "樱桃", icon: "pen-to-square", link: "cherry"},
            // {text: "火龙果", icon: "pen-to-square", link: "dragonfruit"},
            // "tomato",
            // "strawberry",
        ],
    },
    {
        text: "笔记",
        icon: "book",
        link: "/article/",
    },
    {
        text: "随笔",
        icon: "/assets/icon/light-bulb.png",
        link: "/10.随笔短记/",
    },
]);