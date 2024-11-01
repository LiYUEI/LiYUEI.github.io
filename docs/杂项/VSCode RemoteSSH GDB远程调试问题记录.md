---
title: VSCode RemoteSSH GDB远程调试问题记录
icon: laptop-code
date: 2024-10-20
category:
  - 工具使用
tag:
  - VSCode
---

关于RemoteSSH配置和CMake使用略去。

本人近日于研究epoll，在远程Unbuntu主机上使用CMake构建一个服务端和一个客户端可执行文件。
如下所示。

![](/assets/self/project_1.png)

## 问题一

在launch.json文件中配置了关于启动测试（launch）的配置后，启动左侧调试窗口一直运行中，但是未进入
主函数中的断点，如下所示。



经过几次排查发现错误。



## 问题二

在launch.json文件中配置了关于附加调试（Attach）的配置后，启动调试发现报错，提示权限有问题，
但是又没有弹出如输入密码的窗口，直接在控制台中输出错误结束。问题如下。



经过查找后得到解决方案，如下。


相关链接。

[Troubleshoot-attaching-to-processes-using-GDB](https://github.com/Microsoft/MIEngine/wiki/Troubleshoot-attaching-to-processes-using-GDB)

[vscode-cpptools/issues/4988](https://github.com/microsoft/vscode-cpptools/issues/4988)

[vscode-remote-release/issues/2053](https://github.com/microsoft/vscode-remote-release/issues/2053)