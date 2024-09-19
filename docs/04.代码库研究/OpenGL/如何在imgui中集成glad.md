---
title: 如何在imgui中集成glad
date: 2024-09-04
order: 1
category:
  - 代码库,原创
tag:
  - OpenGL,imgui,glad,glfw
---

# 如何在imgui中集成glad

本人之前学习了[learnopengl](https://github.com/JoeyDeVries/LearnOpenGL)，该仓库使用了glad+glfw来作为OpenGL
例子的环境。后续又接触到了[imgui](https://github.com/ocornut/imgui)，该图形库支持使用
glfw win32 android sdl2/3等窗口环境，还支持OpenGL、vulkan、dx9/11/12等API，进行即时gui界面渲染，
imgui用于一些图形引擎的测试十分方便。所有，计划使用imgui构建自己的图形测试界面，实时调参。

## 关于glad, glfw 和 imgui

首先，稍微介绍一下glad，glfw和glew。

### **glad**

glad 是一个用于加载 OpenGL 函数指针的库，类似于 GLEW，但它更现代化和灵活。Glad 的主要特点包括：

- 多语言支持：Glad 支持多种编程语言，包括 C、C++、D、Rust 等。
- 在线生成器：Glad 提供了一个在线服务，用户可以根据需要选择 OpenGL 版本和扩展，然后生成相应的加载器代码。
- 轻量级：Glad 生成的代码非常小巧，仅包含必要的函数指针和定义。
- 易于集成：Glad 生成的代码可以直接包含在项目中，无需额外的库文件。

使用 Glad 的步骤通常如下：

1. 访问 [Glad 在线生成器](https://glad.dav1d.de/)。
2. 选择配置：选择语言（如 C/C++），指定 OpenGL 版本和所需的扩展。
3. 生成代码：点击生成按钮，下载生成的代码文件。
4. 集成到项目中：将生成的头文件和源文件添加到项目中，并在代码中包含`glad.h`。

![](/assets/images/glad.png)

### **glfw**

GLFW 是一个用于创建窗口、上下文和处理输入的开源跨平台库，主要用于 OpenGL、OpenGL ES 和 Vulkan 开发。以下是 GLFW 的一些主要特点：

- **跨平台支持**：GLFW 支持 Windows、macOS 和 Linux（包括 Wayland 和 X11）。
- **简单的API**：提供了一个简单的 API 来创建窗口和上下文，并处理输入和事件。
- **多窗口和多监视器支持**：可以轻松管理多个窗口和监视器。
- **高DPI支持**：支持高分辨率显示器。
- **输入处理**：支持键盘、鼠标、游戏手柄等输入设备，并提供回调函数来处理输入事件。

可从[GLFW 官方网站](https://www.glfw.org/download)下载或者从
[GitHub仓库](https://github.com/glfw/glfw)源码编译获取glfw库。

### **imgui**

参见[Dear ImGui](https://github.com/ocornut/imgui)仓库的介绍。

## 集成imgui(glfw + opengl3)

TODO

## 动态库集成修改

TODO

