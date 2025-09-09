  
# 函数

## func dumpHeapData\(Path\)
    
    __
    
    public func dumpHeapData(path: Path): Unit
    
功能：生成堆内存快照信息，写入指定路径的文件。

参数：

  * path: [Path](./libs/std/fs/fs_package_api/fs_package_structs.md) \- 生成堆内存快照文件的文件路径。

异常：

  * MemoryInfoException - 生成堆内存快照失败时，抛出此异常。

## func GC\(Bool\) \(deprecated\)
    
    __
    
    public func GC(heavy!: Bool = false): Unit
    
功能：执行 [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool-deprecated)。

> **注意：**
> 
> 未来版本即将废弃，使用[gc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 替代。

参数：

  * heavy\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool-deprecated) 执行程度，如果为 true，执行会慢，内存收集的多一些，默认值为 false。

## func gc\(Bool\)
    
    __
    
    public func gc(heavy!: Bool = false): Unit
    
功能：执行 [gc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool)。

参数：

  * heavy\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- [gc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 执行程度，如果为 true，执行会慢，内存收集的多一些，默认值为 false。

## func getAllocatedHeapSize\(\)
    
    __
    
    public func getAllocatedHeapSize(): Int64
    
功能：获取仓颉堆已被使用的大小，单位为 byte。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 仓颉堆已被使用的大小，单位为 byte。

## func getBlockingThreadCount\(\)
    
    __
    
    public func getBlockingThreadCount(): Int64
    
功能：获取阻塞的仓颉线程数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 阻塞的仓颉线程数。

## func getGCCount\(\)
    
    __
    
    public func getGCCount(): Int64
    
功能：获取触发 GC 的次数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 触发 GC 的次数。

## func getGCFreedSize\(\)
    
    __
    
    public func getGCFreedSize(): Int64
    
功能：获取触发 GC 后，成功回收的内存，单位为 byte。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 触发 GC 后，成功回收的内存，单位为 byte。

## func getGCTime\(\)
    
    __
    
    public func getGCTime(): Int64
    
功能：获取触发的 GC 总耗时，单位为 us。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 触发的 GC 总耗时，单位为 us。

## func getMaxHeapSize\(\)
    
    __
    
    public func getMaxHeapSize(): Int64
    
功能：获取仓颉堆可以使用的最大值，单位为 byte。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 仓颉堆可以使用的最大值，单位为 byte。

## func getNativeThreadCount\(\)
    
    __
    
    public func getNativeThreadCount(): Int64
    
功能：获取物理线程数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 物理线程数。

## func getProcessorCount\(\)
    
    __
    
    public func getProcessorCount(): Int64
    
功能：获取处理器数量。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 处理器数量。

## func getThreadCount\(\)
    
    __
    
    public func getThreadCount(): Int64
    
功能：获取仓颉当前的线程数量。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 仓颉当前的线程数量。

## func getUsedHeapSize\(\)
    
    __
    
    public func getUsedHeapSize(): Int64
    
功能：在 Linux 平台下获取仓颉堆实际占用的物理内存大小, 单位为 byte。在 Windows 及 macOs 平台下获取仓颉进程实际占用的物理内存大小, 单位为 byte。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 仓颉堆或仓颉进程实际占用的物理内存大小，单位为 byte。

## func SetGCThreshold\(UInt64\) \(deprecated\)
    
    __
    
    public func SetGCThreshold(value: UInt64): Unit
    
功能：修改用户期望触发 [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool-deprecated) 的内存阈值，当仓颉堆大小超过该值时，触发 [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool-deprecated)，单位为 KB。

> **注意：**
> 
> 未来版本即将废弃，使用[setGCThreshold\(UInt64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-setgcthresholduint64) 替代。

参数：

  * value: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 用户期望触发 [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool-deprecated) 的内存阈值。

示例： 设置用户期望的 [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool-deprecated) 的内存阈值为 2MB。
    
    __
    
    import std.runtime.*
    main() {
      SetGCThreshold(2048)
    }
    
## func setGCThreshold\(UInt64\)
    
    __
    
    public func setGCThreshold(value: UInt64): Unit
    
功能：修改用户期望触发 [gc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 的内存阈值，当仓颉堆大小超过该值时，触发 [gc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool)，单位为 KB。

参数：

  * value: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 用户期望触发 [gc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 的内存阈值。

示例： 设置用户期望的 [gc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 的内存阈值为 2MB。
    
    __
    
    import std.runtime.*
    main() {
      setGCThreshold(2048)
    }
    
## func startCPUProfiling\(\)
    
    __
    
    public func startCPUProfiling(): Unit
    
功能：启动 CPU profiler 跟踪。

异常：

  * ProfilingInfoException - [startCPUProfiling](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)与[stopCPUProfiling\(Path\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-stopcpuprofilingpath)两个函数必须一一对应。若调用了[startCPUProfiling](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)后，没有调用[stopCPUProfiling\(Path\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-stopcpuprofilingpath)，而是又调用了[startCPUProfiling](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)则抛出异常。

## func stopCPUProfiling\(Path\)
    
    __
    
    public func stopCPUProfiling(path: Path): Unit
    
功能：停止CPU profiler 跟踪，并将记录写入指定路径的文件。

参数：

  * path: [Path](./libs/std/fs/fs_package_api/fs_package_structs.md) \- 生成记录文件的文件路径。

异常：

  * ProfilingInfoException - [startCPUProfiling](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)与[stopCPUProfiling\(Path\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-stopcpuprofilingpath)两个函数必须一一对应。若没有调用了[startCPUProfiling](./libs/std/runtime/runtime_package_api/runtime_package_funcs.md)，直接调用[stopCPUProfiling\(Path\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-stopcpuprofilingpath)则抛出异常。