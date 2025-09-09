---
layout: home

hero:
  name: "仓颉编程语言"
  text: "面向全场景应用开发的通用编程语言"
  tagline: "兼顾开发效率和运行性能，提供良好的编程体验"
  image:
    src: /logo.svg
    alt: 仓颉
  actions:
    - theme: brand
      text: 🚀 快速开始
      link: /1.0.1/user_manual/source_zh_cn/first_understanding/basic
    - theme: alt
      text: 📖 浏览文档
      link: /1.0.1/
    - theme: alt
      text: 📋 发布说明
      link: /1.0.1/release_notes

features:
  - icon: 🚀
    title: 多后端支持
    details: 支持 CJNative 和 CJVM 两种后端，原生二进制和虚拟机运行，灵活适配不同应用场景
  - icon: ✨
    title: 语法简明高效
    details: 提供插值字符串、主构造函数、Flow 表达式、match 模式匹配等现代化语法特性
  - icon: 🔧
    title: 多范式编程
    details: 融合函数式、命令式和面向对象编程范式，支持高阶函数、泛型、接口继承等特性
  - icon: 🛡️
    title: 类型安全
    details: 静态强类型系统配合强大的类型推断，编译时发现错误，提升代码质量
  - icon: 🔒
    title: 内存安全
    details: 自动内存管理、数组边界检查、溢出检查，运行时保障内存安全
  - icon: ⚡
    title: 高效并发
    details: 原生协程支持，用户态轻量化线程，简化并发编程复杂度
  - icon: 🌐
    title: 生态兼容
    details: 支持与 C 语言互操作，便捷的 FFI 机制，快速集成现有生态
  - icon: 📦
    title: 丰富标准库
    details: 涵盖数据结构、算法、网络、文件、加密等常用功能，开箱即用
  - icon: 🎨
    title: 元编程能力
    details: 基于词法宏的元编程，支持 DSL 构建和语法扩展
---

## 🎯 快速体验

### 安装工具链

```bash
# 下载并安装仓颉 SDK
wget https://cangjie-lang.cn/download/cangjie-1.0.1-linux.tar.gz
tar -xzf cangjie-1.0.1-linux.tar.gz
export PATH=$PATH:/path/to/cangjie/bin
```

### 第一个程序

创建 `hello.cj` 文件：

```cangjie
main() {
    println("Hello, 仓颉!")
    
    // 变量和类型推断
    let message = "仓颉编程语言"
    let numbers = [1, 2, 3, 4, 5]
    
    // 函数式编程
    let sum = numbers.fold(0, {a, b => a + b})
    println("数字之和: ${sum}")
}
```

### 编译运行

```bash
# 编译
cjc hello.cj

# 运行
./hello

# 输出:
# Hello, 仓颉!
# 数字之和: 15
```

## 文档导航

### 📚 [用户手册](/1.0.1/user_manual/source_zh_cn/first_understanding/basic)
从基础概念到高级特性的完整学习路径
- **初识仓颉**：语言特点、工具链安装、Hello World
- **基本概念**：标识符、程序结构、表达式、函数
- **数据类型**：整数、浮点、字符串、数组、集合等
- **面向对象**：类、接口、继承、泛型
- **并发编程**：线程、同步、异步编程
- **错误处理**：异常、Option类型处理

### 🔧 [工具指南](/1.0.1/tools/source_zh_cn/tools/user_manual_cjnative)
编译器、包管理、调试等工具的使用说明
- **编译工具**：cjc 编译选项和使用方法
- **包管理**：cjpm 包管理工具
- **调试工具**：cjdb 调试器使用
- **性能分析**：cjprof 性能分析工具
- **代码检查**：cjlint 静态检查工具
- **覆盖率统计**：cjcov 覆盖率工具
- **IDE插件**：集成开发环境支持

### 📖 [标准库 API](/1.0.1/libs/std/core/core_package_overview)
完整的标准库文档和示例
- **核心库**：std.core - 基础数据类型和操作
- **集合库**：std.collection - 数组、列表、映射等
- **I/O库**：std.io - 输入输出操作
- **网络库**：std.net - 网络编程支持
- **文件系统**：std.fs - 文件和目录操作
- **数学库**：std.math - 数学计算功能
- **时间库**：std.time - 日期时间处理
- **正则表达式**：std.regex - 模式匹配
- **加密库**：std.crypto - 加密解密功能
- **测试框架**：std.unittest - 单元测试支持

### 📋 [发布说明](/1.0.1/release_notes)
最新版本的特性更新和修复内容

---

<div style="text-align: center; margin-top: 2rem; color: var(--vp-c-text-2);">
  <small>本文档基于仓颉编程语言官方文档转换生成</small>
</div>