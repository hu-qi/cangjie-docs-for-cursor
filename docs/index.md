---
layout: home

hero:
  name: "仓颉编程语言"
  text: "面向全场景应用开发的通用编程语言"
  tagline: "兼顾开发效率和运行性能，提供良好的编程体验"
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

## 🌟 语言亮点

### 现代化语法

```cangjie
// 模式匹配
match value {
| Some(x) => println("值是: ${x}")
| None => println("没有值")
}

// 尾随 lambda
numbers.filter { x => x > 0 }
       .map { x => x * 2 }
       .forEach { println(it) }
```

### 类型系统

```cangjie
// 泛型和约束
func sort<T>(array: Array<T>): Array<T> where T: Comparable {
    // 排序实现
}

// Option 类型
let result: Option<String> = findUser("张三")
```

### 并发编程

```cangjie
// 协程支持
func fetchData(): Future<String> {
    return async {
        let response = await httpGet("https://api.example.com")
        return response.body
    }
}
```

## 📚 文档导航

### 🎓 学习路径

#### [初识仓颉](/1.0.1/user_manual/source_zh_cn/first_understanding/basic)
了解仓颉语言特性和设计理念

#### [安装指南](/1.0.1/user_manual/source_zh_cn/first_understanding/install_Community)
快速搭建仓颉开发环境

#### [Hello World](/1.0.1/user_manual/source_zh_cn/first_understanding/hello_world)
编写第一个仓颉程序

### 🔍 核心概念

#### [基本编程概念](/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/)
- [标识符](/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/identifier) - 命名规则和约定
- [程序结构](/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/program_structure) - 变量、作用域、const变量
- [表达式](/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/expression) - if、while、for-in、match表达式
- [函数](/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/function) - 函数定义和调用

#### [基本数据类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/)
- [基本操作符](/1.0.1/user_manual/source_zh_cn/basic_data_type/basic_operators) - 算术、关系、逻辑操作符
- [整数类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/integer) - Int8、Int16、Int32、Int64等
- [浮点类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/float) - Float32、Float64
- [布尔类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/bool) - true/false值
- [字符类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/characters) - Rune字符处理
- [字符串类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/strings) - 字符串操作和插值
- [元组类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/tuple) - 多值组合
- [数组类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/array) - Array和VArray
- [区间类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/range) - 范围表示
- [Unit类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/unit) - 空值类型
- [Nothing类型](/1.0.1/user_manual/source_zh_cn/basic_data_type/nothing) - 永不返回

### 🔧 函数进阶

#### [函数定义](/1.0.1/user_manual/source_zh_cn/function/define_functions)
参数列表、返回值类型、函数体

#### [函数调用](/1.0.1/user_manual/source_zh_cn/function/call_functions)
函数调用语法和参数传递

#### [函数类型](/1.0.1/user_manual/source_zh_cn/function/first_class_citizen)
函数作为一等公民的特性

#### [高级特性](/1.0.1/user_manual/source_zh_cn/function/)
- [嵌套函数](/1.0.1/user_manual/source_zh_cn/function/nested_functions) - 函数内定义函数
- [Lambda表达式](/1.0.1/user_manual/source_zh_cn/function/lambda) - 匿名函数
- [闭包](/1.0.1/user_manual/source_zh_cn/function/closure) - 捕获外部变量
- [语法糖](/1.0.1/user_manual/source_zh_cn/function/function_call_desugar) - 尾随lambda、flow、pipeline
- [函数重载](/1.0.1/user_manual/source_zh_cn/function/function_overloading) - 多个同名函数
- [操作符重载](/1.0.1/user_manual/source_zh_cn/function/operator_overloading) - 自定义操作符
- [const函数](/1.0.1/user_manual/source_zh_cn/function/const_func_and_eval) - 编译时求值

### 🏗️ 结构体和枚举

#### [Struct类型](/1.0.1/user_manual/source_zh_cn/struct/)
- [定义Struct](/1.0.1/user_manual/source_zh_cn/struct/define_struct) - 成员变量、构造函数、成员函数
- [创建实例](/1.0.1/user_manual/source_zh_cn/struct/create_instance) - 实例化和初始化
- [Mut函数](/1.0.1/user_manual/source_zh_cn/struct/mut) - 可变方法定义

#### [枚举和模式匹配](/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/)
- [枚举类型](/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/enum) - 枚举定义和使用
- [Option类型](/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/option_type) - 可选值处理

### 📋 版本信息

#### [发布说明](/1.0.1/release_notes)
查看 v1.0.1 版本的新特性、改进和修复

### 📦 标准库 API

#### [核心库](/1.0.1/libs/std/core/core_package_overview)
- 基础数据类型和异常处理
- 核心类型系统和操作

#### [数学库](/1.0.1/libs/std/math/math_package_overview)
- 数学函数和常量
- 数值计算和算法

#### [集合库](/1.0.1/libs/std/collection/collection_package_overview)
- 数组、列表、集合和映射
- 迭代器和集合操作

#### [并发库](/1.0.1/libs/std/collection_concurrent/collection_concurrent_package_overview)
- 线程安全的数据结构
- 并发集合和队列

#### [网络库](/1.0.1/libs/std/net/net_package_overview)
- Socket 编程和网络通信
- TCP/UDP 和 Unix Socket

#### [正则表达式](/1.0.1/libs/std/regex/regex_package_overview)
- 模式匹配和文本处理

#### [单元测试](/1.0.1/libs/std/unittest/unittest_package_overview)
- 测试框架和断言

#### [同步原语](/1.0.1/libs/std/sync/sync_package_overview)
- 锁、信号量和同步原语

#### [I/O 库](/1.0.1/libs/std/io/io_package_overview)
- 文件和流操作
- 字符串读写器

#### [数值数学库](/1.0.1/libs/std/math_numeric/math_numeric_package_overview)
- 高精度数值计算
- 复数和矩阵操作

#### [数据库 SQL](/1.0.1/libs/std/database_sql/database_sql_package_overview)
- SQL 数据库连接和操作
- 事务管理

#### [反射库](/1.0.1/libs/std/reflect/reflect_package_overview)
- 运行时类型检查
- 动态加载和调用

#### [文件系统库](/1.0.1/libs/std/fs/fs_package_overview)
- 文件和目录操作
- 路径处理

#### [随机数库](/1.0.1/libs/std/random/random_package_overview)
- 随机数生成器

#### [控制台库](/1.0.1/libs/std/console/console_package_overview)
- 命令行输入输出

#### [POSIX 库](/1.0.1/libs/std/posix/posix_package_overview)
- 系统调用和操作系统接口
- 进程和环境管理

### 🛠️ 开发工具

#### [IDE 插件](/1.0.1/tools/source_zh_cn/IDE/ide_plug-in_overview_community)
- VS Code 和 IntelliJ 支持
- 语法高亮和代码提示

#### [编译选项](/1.0.1/user_manual/source_zh_cn/Appendix/compile_options)
- 详细的编译器参数说明

#### [宏系统](/1.0.1/user_manual/source_zh_cn/Macro/macro_introduction)
- 内置编译标志和宏编程

#### [完整文档](/1.0.1/)
浏览所有可用的文档内容

## 🔗 相关链接

### 官方资源
- [仓颉官网](https://cangjie-lang.cn/) - 官方主页
- [GitHub](https://gitcode.com/Cangjie) - 开源项目
- [社区论坛](https://gitcode.com/Cangjie/CangjieMoBileUsersForm/issues) - 技术讨论

### 开发工具
- IDE 插件 - VS Code、IntelliJ 支持
- cjpm - 包管理工具  
- cjdb - 调试器
- cjfmt - 代码格式化

### 学习资源
- 官方教程
- 示例项目
- 最佳实践

---

<div style="text-align: center; margin-top: 2rem; padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <p style="margin: 0; color: var(--vp-c-text-2);">
    📝 本文档基于仓颉编程语言官方文档自动转换生成<br>
    🔄 定期同步更新 | 🛠️ 使用 VitePress 构建
  </p>
</div>