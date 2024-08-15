---
title: GitHub Action 入门
icon: laptop-code
date: 2024-08-14
category:
  - 工具使用
tag:
  - GitHub
---

## 关于GitHub Actions

持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。
GitHub 把这些操作就称为 actions。

很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，
允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，
整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。

GitHub 做了一个[官方市场](https://github.com/marketplace?type=actions)，
可以搜索到他人提交的 actions。还有一个[awesome actions](https://github.com/sdras/awesome-actions)
的仓库，也可以找到不少action。

## 基本概念

GitHub Actions 有一些自己的术语。

(1) **workflow**(工作流程)：持续集成一次运行的过程，就是一个workflow。

(2) **job**(任务)：一个workflow由一个或多个jobs构成，含义是一次持续集成的运行，可以完成多个任务。

(3) **step**(步骤)：每个job由多个step构成，一步步完成。

(4) **action**(动作)：每个step可以依次执行一个或多个命令(action)。

具体需要用的术语和使用到的actions可参考官方文档和actions库获取。

## 构建实例

```yaml
name: 部署文档

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true

      - name: 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: 安装依赖
        run: |
          corepack enable
          npm ci

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          > docs/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 部署文档
          branch: blogs_web
          folder: docs/.vuepress/dist
```

以上是本人博客仓库更新的workflows实例。

1. 首先定义workflows的`name`为`部署文档`
2. 通过`on`添加触发条件，设置`branches` main执行`push`操作时触发
3. 构建一个`jobs`执行线性的`steps`流程

所使用到的actions如下所示：
- actions/checkout@v4 : 拉取代码
- actions/setup-node@v4 : 设置node环境
- run: 通过npm的指令进行build
- JamesIves/github-pages-deploy-action@v4 : 推送构建文件到指定分支

每次推送完成后可在对应GitHub仓库的Actions中查看执行结果。

## 参考资料

[GitHub Actions 文档](https://docs.github.com/zh/actions)

[GitHub Actions 入门教程](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

