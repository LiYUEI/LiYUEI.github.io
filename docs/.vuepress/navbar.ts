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
        prefix: "/",
        children: [
            {
                text: "计算机基础",
                icon: "pen-to-square",
                link: "01.计算机基础/",
                children: [
                    // {text: "苹果1", icon: "pen-to-square", link: "1"},
                    // {text: "苹果2", icon: "pen-to-square", link: "2"},
                ],
            },
            {text: "编程语言", icon: "pen-to-square", link: "02.编程语言/"},
            {text: "工具使用", icon: "pen-to-square", link: "03.工具使用/"},
            {text: "代码库研究", icon: "pen-to-square", link: "04.代码库研究/"},
            {text: "Web技术", icon: "pen-to-square", link: "05.Web技术/"},
            {text: "性能优化与高性能计算", icon: "pen-to-square", link: "06.性能优化与高性能计算/"},
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