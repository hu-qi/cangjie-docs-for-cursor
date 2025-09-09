  
# Cangjie Release Notes

## 0\. 版本介绍

本版本为`Cangjie`语言LTS 1.0.0版本的更新版本（LTS版本定义及维护周期详见[仓颉社区版本生命周期管理规范](https://gitcode.com/org/Cangjie/discussions/129)），版本号为`Cangjie 1.0.1`，主要解决部分发现的Bug，以及对某些功能进行优化。版本包含了仓颉应用开发必须的能力，包括编译器，运行时，标准库，和工具链。欢迎各位开发者使用，如有任何问题，欢迎在[Cangjie社区提出issue](https://gitcode.com/org/Cangjie/issues)，我们会第一时间处理。以下介绍本版本相比LTS 1.0.0版本的更新。

## 1\. 语言特性

修复部分问题，无特新更新。

## 2\. 编译器

1）废弃 --static-libs & \--dy-libs 编译选项，stdx 链接方式由用户链接选项控制，编译器仅提供 std 库链接方式控制选项。  
2）新增无效导入的告警（unused import warning）。  
3）支持输出profile文件的编译选项，记录编译耗时和内存，用于分析编译性能。

## 3\. 运行时

修复部分问题。

## 4\. 标准库

1）reflect反射库在部分场景进行了性能优化。  
2）ast库支持 @！注解解析。

## 5\. 工具链

### 1 IDE插件

修复部分问题，无特性新增。

### 2 cjpm

修复部分问题，无特性新增。

### 3 cjdb

hashmap变量显示规格优化

### 4 cjfmt

cjpm.toml文件在\[profile.build\]下面新增标志位performance\_analysis，用于分析编译性能，记录编译过程中的时间和内存消耗。

### 5 cjlint

无变化。

### 6 cjcov

无变化。

### 7 cjprof

无变化。

### 8 cjtrace-recover

无变化。

## 6\. 修复问题

  * 【[issue-1987](https://gitcode.com/Cangjie/UsersForum/issues/1987)】两个joy.router.get格式化行为不一致。
  * 【[issue-2073](https://gitcode.com/Cangjie/UsersForum/issues/2073)】`None is T`上发生ICE。
  * 【[issue-2151](https://gitcode.com/Cangjie/UsersForum/issues/2151)】项目中 init 函数参数列表，缺省值使用插值字符串，导致ICE。
  * 【[issue-2157](https://gitcode.com/Cangjie/UsersForum/issues/2157)】项目cjpm test --no-run编译崩溃。
  * 【[issue-2082](https://gitcode.com/Cangjie/UsersForum/issues/2082)】项目编译崩溃，报错Internal Compiler Error: Interrupt signal \(11\) received。
  * 【[issue-2136](https://gitcode.com/Cangjie/UsersForum/issues/2136)】FuncDecl的toTokens\(\) 异常IndexOutOfBoundsException。
  * 【[issue-2156](https://gitcode.com/Cangjie/UsersForum/issues/2156)】MacroExpandDecl属性macroInputs macroInputDecl两个属性不一致。
  * 【[issue-2216](https://gitcode.com/Cangjie/UsersForum/issues/2216)】宏parseDecl分析match继承的\(\)->Unit类型调用时报异常。
  * 【[issue-2132](https://gitcode.com/Cangjie/UsersForum/issues/2132)】编译官方示例 generic-btree.cj 导致编译器崩溃。
  * 【非社区问题】sdk路径含有空格时，执行cjpm test 或在IDE上执行UtTest run cangjie 用例时报无效路径。
  * 【[issue-2180](https://gitcode.com/Cangjie/UsersForum/issues/2180)、[issue-2083](https://gitcode.com/Cangjie/UsersForum/issues/2083)、[issue-2070](https://gitcode.com/Cangjie/UsersForum/issues/2070)】使用过的变量错误的抛unused variable警告。
  * 【非社区问题】sdk路径配置为空或者路径值错误，打开cangjie工程，output的报错不准确，报错信息内容不能指导用户解决问题。
  * 【[issue-1917](https://gitcode.com/Cangjie/UsersForum/issues/1917)】使用测试工程，语言服务能力失效（悬浮、跳转等功能）。
  * 【非社区问题】windows环境IDE上cjdb 命令 list\[0\] 表达式失败。
  * 【非社区问题】mac 环境 lambda表达式内的局部展示重复变量。

## 7\. 遗留问题

### macOS M1平台编译时间波动

【问题现象】泛型类型别名`(type List<T> = MetaList<T>)`叠加嵌套调用`minXX(List(maxXX(List(x,y,z))))`，cjpm build会报ICE。  
【规避措施】将嵌套调用解开，即可规避。如下示例`(var x = maxXX(List(x,y,z)); minXX(List(x)))`。

## 8\. 文档变更说明

### 开发指南

  * 新增“部署和运行”章节；“仓颉-C互操作”章节新增使用说明。
  * cjc 编译选项新增 --export-for-test 编译选项的描述。
  * 删除废弃编译选项 --static-libs 和 --dy-libs 的文档内容。

### 标准库API

  * std.time：新增示例教程“获取当前时间以及时间差”。
  * std.posix：新增常量 AT\_FDCWD、AT\_SYMLINK\_FOLLOW、SIGSYS。

### 工具指南

  * cjprof、cjtrace、cjfmt 新增 -v 选项，可查看命令行工具对应版本信息。
  * cjpm：新增配置项 performance\_analysis 功能说明。新增约束（源码目录不建议带空格；Windows 平台，源码目录不建议带“.”；Windows平台暂不支持在中文路径下使用 cjpm）。
  * 语言服务：新增默认日志开关说明。
  * cjpm: profile.build.combined 实验特性规格变更说明（构建脚本依赖的源码模块中，若配置了 `profile.build.combined`，不会生效；编译产物目标平台为 `macOS` 时，暂不支持 `profile.build.combined` 选项）。
  * cjfmt: 补充多行注释的格式化行为规则。