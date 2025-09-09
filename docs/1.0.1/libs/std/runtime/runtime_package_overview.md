  
# std.runtime

## 功能介绍

runtime 包的作用是与程序的运行时环境进行交互，提供了一系列函数和变量，用于控制、管理和监视程序的执行。

CangJie 语言使用自动垃圾回收机制来管理内存，runtime 包提供了手动触发垃圾回收、设置垃圾回收的阈值、获取内存统计信息等功能，用于对垃圾回收进行调控和监测。

## API 列表

### 函数

函数名| 功能  
---|---  
[dumpHeapData\(Path\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-dumpheapdatapath)| 生成堆内存快照信息，写入指定路径的文件。  
[GC\(Bool\) \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool-deprecated)| 执行 GC。  
[gc\(Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool)| 执行 GC。  
[getAllocatedHeapSize](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getallocatedheapsize)| 获取仓颉堆已被使用的大小，单位为 byte。  
[getBlockingThreadCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getblockingthreadcount)| 获取阻塞的仓颉线程数。  
[getGCCount](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)| 获取触发 GC 的次数。  
[getGCFreedSize](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)| 获取触发 GC 后，成功回收的内存，单位为 byte。  
[getGCTime](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)| 获取触发的 GC 总耗时，单位为 us。  
[getMaxHeapSize](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getmaxheapsize)| 获取仓颉堆可以使用的最大值，单位为 byte。  
[getNativeThreadCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getnativethreadcount)| 获取物理线程数。  
[getProcessorCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getprocessorcount)| 获取处理器数量。  
[getThreadCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getthreadcount)| 获取仓颉当前的线程数量。  
[getUsedHeapSize](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getusedheapsize)| 在 Linux 平台下获取仓颉堆实际占用的物理内存大小, 单位为 byte。在 Windows 及 macOs 平台下获取仓颉进程实际占用的物理内存大小, 单位为 byte。  
[SetGCThreshold\(UInt64\) \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-setgcthresholduint64-deprecated)| 修改用户期望触发 GC 的内存阈值，当仓颉堆大小超过该值时，触发 GC，单位为 KB。  
[setGCThreshold\(UInt64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-setgcthresholduint64)| 修改用户期望触发 GC 的内存阈值，当仓颉堆大小超过该值时，触发 GC，单位为 KB。  
[startCPUProfiling](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-startcpuprofiling)| 启动 CPU profiler 跟踪。  
[stopCPUProfiling\(Path\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-stopcpuprofilingpath)| 停止CPU profiler 跟踪，并将记录写入指定路径的文件。  
  
### 结构体

结构体名| 功能  
---|---  
[MemoryInfo \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_structs.html#struct-memoryinfo-deprecated)| 提供获取一些堆内存统计数据的接口。  
[ProcessorInfo \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_structs.html#struct-processorinfo-deprecated)| 提供获取一些处理器信息的接口。  
[ThreadInfo \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_structs.html#struct-threadinfo-deprecated)| 提供获取一些仓颉线程统计数据的接口。