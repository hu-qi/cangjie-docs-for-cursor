
# std.process

## 功能介绍

process 包主要提供 Process 进程操作接口，主要包括进程创建，标准流获取，进程等待，进程信息查询等。

本包提供多平台统一操控能力，目前支持 Linux 平台，macOS 平台，Windows 平台与 HarmonyOS 平台。

## API 列表

### 函数

函数名| 功能  
---|---  
[execute](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_funcs.html#func-executestring-arraystring-path-mapstring-string-processredirect-processredirectprocessredirect-duration)| 根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态。  
[executeWithOutput](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_funcs.html#func-executewithoutputstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect)| 根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态、标准输出和标准错误。  
[findProcess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_funcs.html#func-findprocessint64)| 根据输入进程 id 绑定一个进程实例。  
[launch](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_funcs.html#func-launchstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect)| 根据输入参数创建并运行一个子进程，并返回一个子进程实例。  
  
### 类

类名| 功能  
---|---  
[CurrentProcess \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#class-currentprocess-deprecated)| 此类为当前进程类，继承 `Process` 类，提供对当前进程操作相关功能。  
[Process](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#class-process)| 此类为进程类，提供进程操作相关功能。  
[SubProcess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#class-subprocess)| 此类为子进程类，继承 `Process` 类，提供对子进程操作相关功能。  
  
### 枚举

枚举名| 功能  
---|---  
[ProcessRedirect](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_enums.html#enum-processredirect)| 用于在创建进程时设置子进程标准流的重定向模式。  
  
### 异常类

异常类名| 功能  
---|---  
[ProcessException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_exceptions.html#class-processexception)| `process` 包的异常类。  
  
### 兼容性说明

#### class Process

成员| 支持平台  
---|---  
[current \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#static-prop-current-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[pid](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-pid)| `Linux` `Windows` `macOS` `HarmonyOS`  
[name](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-name)| `Linux` `Windows` `macOS` `HarmonyOS`  
[command](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-command)| `Linux` `Windows` `macOS` `HarmonyOS`  
[arguments \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-arguments-deprecated)| `Linux` `macOS` `HarmonyOS`  
[commandLine \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-commandLine-deprecated)| `Linux` `macOS` `HarmonyOS`  
[environment \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-environment-deprecated)| `Linux` `HarmonyOS`  
[workingDirectory \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-workingDirectory-deprecated)| `Linux` `macOS` `HarmonyOS`  
[of\(Int64\) \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#static-func-ofint64-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[start\(String, Array\<String\>, Path, Map\<String, String\>, ProcessRedirect, ProcessRedirect, ProcessRedirect\) \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#static-func-startstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[run\(String, Array\<String\>, Path, Map\<String, String\>, ProcessRedirect, ProcessRedirect, ProcessRedirect, Duration\) \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#static-func-runstring-arraystring-path-mapstring-string-processredirect-processredirectprocessredirect-duration-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[runOutput\(String, Array\<String\>, Path, Map\<String, String\>, ProcessRedirect, ProcessRedirect, ProcessRedirect\) \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#static-func-runoutputstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[terminate\(Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-terminatebool)| `Linux` `Windows` `macOS` `HarmonyOS`  
  
#### class CurrentProcss \(deprecated\)

> **注意：**
> 
> 未来版本即将废弃，可在 std.env 中找到代替功能。

成员| 支持平台  
---|---  
[arguments](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-arguments)| `Linux` `Windows` `macOS` `HarmonyOS`  
[homeDirectory](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-homeDirectory)| `Linux` `Windows` `macOS`  
[tempDirectory](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-tempDirectory)| `Linux` `Windows` `macOS`  
[stdIn](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdIn)| `Linux` `Windows` `macOS` `HarmonyOS`  
[stdOut](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdOut)| `Linux` `Windows` `macOS` `HarmonyOS`  
[stdErr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdErr)| `Linux` `Windows` `macOS` `HarmonyOS`  
[atExit\(\(\) -> Unit\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-atexit---unit)| `Linux` `Windows` `macOS` `HarmonyOS`  
[exit\(Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-exitint64)| `Linux` `Windows` `macOS` `HarmonyOS`  
[getEnv\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-getenvstring)| `Linux` `Windows` `macOS` `HarmonyOS`  
[removeEnv\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-removeenvstring)| `Linux` `Windows` `macOS` `HarmonyOS`  
[setEnv\(String, String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-setenvstring-string)| `Linux` `Windows` `macOS` `HarmonyOS`  
  
#### class SubProcess

成员| 支持平台  
---|---  
[stdIn \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdIn-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[stdInPipe](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdinpipe)| `Linux` `Windows` `macOS` `HarmonyOS`  
[stdOut \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdOut-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[stdOutPipe](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdoutpipe)| `Linux` `Windows` `macOS` `HarmonyOS`  
[stdErr \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stdErr-deprecated)| `Linux` `Windows` `macOS` `HarmonyOS`  
[stdErrPipe](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#prop-stderrpipe)| `Linux` `Windows` `macOS` `HarmonyOS`  
[wait\(Duration\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-waitduration)| `Linux` `Windows` `macOS` `HarmonyOS`  
[waitOutput\(\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_classes.html#func-waitoutput)| `Linux` `Windows` `macOS` `HarmonyOS`