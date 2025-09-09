
# 结构体

## struct MemoryInfo \(deprecated\)
    
    __
    
    public struct MemoryInfo
    
功能：提供获取一些堆内存统计数据的接口。

> **注意：**
> 
> 未来版本即将废弃，使用全局函数[getAllocatedHeapSize](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getallocatedheapsize)，[getUsedHeapSize](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getusedheapsize)，[getMaxHeapSize](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getmaxheapsize)替代相关静态属性成员。

### static prop allocatedHeapSize
    
    __
    
    public static prop allocatedHeapSize: Int64
    
功能：获取仓颉堆已被使用的大小，单位为 byte。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### static prop heapPhysicalMemory
    
    __
    
    public static prop heapPhysicalMemory: Int64
    
功能：在 Linux 平台下获取仓颉堆实际占用的物理内存大小, 单位为 byte。在 Windows 及 macOs 平台下获取仓颉进程实际占用的物理内存大小, 单位为 byte。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### static prop maxHeapSize
    
    __
    
    public static prop maxHeapSize: Int64
    
功能：获取仓颉堆可以使用的最大值，单位为 byte。

实例：
    
    __
    
    import std.runtime.*
    main() {
      println(MemoryInfo.maxHeapSize)
    }
    
运行结果（以实际环境为准）：
    
    __
    
    268435456

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

## struct ProcessorInfo \(deprecated\)
    
    __
    
    public struct ProcessorInfo
    
功能：提供获取一些处理器信息的接口。

> **注意：**
> 
> 未来版本即将废弃，使用[getProcessorCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getprocessorcount)替代相关静态属性成员。

### static prop processorCount
    
    __
    
    public static prop processorCount: Int64
    
功能：获取处理器数量。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

## struct ThreadInfo \(deprecated\)
    
    __
    
    public struct ThreadInfo
    
功能：提供获取一些仓颉线程统计数据的接口。

> **注意：**
> 
> 未来版本即将废弃，使用[getBlockingThreadCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getblockingthreadcount)，[getNativeThreadCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getnativethreadcount)， [getThreadCount](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-getthreadcount) 替代相关静态属性成员。

### static prop blockingThreadCount
    
    __
    
    public static prop blockingThreadCount: Int64
    
功能：获取阻塞的仓颉线程数。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### static prop nativeThreadCount
    
    __
    
    public static prop nativeThreadCount: Int64
    
功能：获取物理线程数。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### static prop threadCount
    
    __
    
    public static prop threadCount: Int64
    
功能：获取仓颉当前的线程数量。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)