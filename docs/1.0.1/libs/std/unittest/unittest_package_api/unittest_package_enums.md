
# 枚举

## enum ExplicitGcType
    
    __
    
    public enum ExplicitGcType <: ToString {
        Disabled |
        Heavy |
        Light
    }
    
功能：用于指定 `@Configure` 宏的 `explicitGC` 配置参数。表示 [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 执行的三种不同方式。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### Disabled
    
    __
    
    Disabled
    
功能：[GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 不会被框架显式调用。

### Heavy
    
    __
    
    Heavy
    
功能：[std.runtime.GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool)\(heavy: true\) 将在性能测试执行期间由框架显式调用。

### Light
    
    __
    
    Light
    
功能：[std.runtime.GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool)\(heavy: false\) 将在 Benchmark 函数执行期间由框架显式调用。这是默认设置。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：[GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 执行的三种不同方式字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool) 执行的三种不同方式字符串。

## enum TimeUnit
    
    __
    
    public enum TimeUnit {
        | Micros
        | Millis
        | Nanos
        | Seconds
    }
    
功能：可以在 [TimeNow](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_structs.html#struct-timenow) 构造函数中使用的时间单位。

### Micros
    
    __
    
    Micros
    
功能：单位为微秒。

### Millis
    
    __
    
    Millis
    
功能：单位为毫秒。

### Nanos
    
    __
    
    Nanos
    
功能：单位为纳秒。

### Seconds
    
    __
    
    Seconds
    
功能：单位为秒。

## enum PerfCounter
    
    __
    
    public enum PerfCounter <: ToString {
        | HW_CPU_CYCLES
        | HW_INSTRUCTIONS
        | HW_CACHE_REFERENCES
        | HW_CACHE_MISSES
        | HW_BRANCH_INSTRUCTIONS
        | HW_BRANCH_MISSES
        | HW_BUS_CYCLES
        | HW_STALLED_CYCLES_FRONTEND
        | HW_STALLED_CYCLES_BACKEND
        | HW_REF_CPU_CYCLES
        | SW_CPU_CLOCK
        | SW_TASK_CLOCK
        | SW_PAGE_FAULTS
        | SW_CONTEXT_SWITCHES
        | SW_CPU_MIGRATIONS
        | SW_PAGE_FAULTS_MIN
        | SW_PAGE_FAULTS_MAJ
        | SW_EMULATION_FAULTS
    }
    
功能：枚举 [Perf](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_structs.html#struct-perf) 构造器支持的 CPU 计数器。

有关特定 CPU 计数器的详细信息，请参阅 Linux 内核中 [perf\_event\_open](https://man7.org/linux/man-pages/man2/perf_event_open.2.html) 系统调用的文档。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### HW\_CPU\_CYCLES
    
    __
    
    HW_CPU_CYCLES
    
功能：原始 CPU 周期数。

### HW\_INSTRUCTIONS
    
    __
    
    HW_INSTRUCTIONS
    
功能：退役的 CPU 指令数量。

### HW\_CACHE\_REFERENCES
    
    __
    
    HW_CACHE_REFERENCES
    
功能：缓存访问量。

### HW\_CACHE\_MISSES
    
    __
    
    HW_CACHE_MISSES
    
功能：缓存未命中数量。

### HW\_BRANCH\_INSTRUCTIONS
    
    __
    
    HW_BRANCH_INSTRUCTIONS
    
功能：退役的分支 CPU 指令数量。

### HW\_BRANCH\_MISSES
    
    __
    
    HW_BRANCH_MISSES
    
功能：分支预测失败的数量。

### HW\_BUS\_CYCLES
    
    __
    
    HW_BUS_CYCLES
    
功能：总线周期数。

### HW\_STALLED\_CYCLES\_FRONTEND
    
    __
    
    HW_STALLED_CYCLES_FRONTEND
    
功能：CPU 周期被浪费在 CPU 管道前端阶段的等待上的数量。

### HW\_STALLED\_CYCLES\_BACKEND
    
    __
    
    HW_STALLED_CYCLES_BACKEND
    
功能：CPU 周期被浪费在 CPU 管道后端阶段的等待上的数量。

### HW\_REF\_CPU\_CYCLES
    
    __
    
    HW_REF_CPU_CYCLES
    
功能：与频率无关的 CPU 周期数。

### SW\_CPU\_CLOCK
    
    __
    
    SW_CPU_CLOCK
    
功能：每个 CPU 时钟时间量。

### SW\_TASK\_CLOCK
    
    __
    
    SW_TASK_CLOCK
    
功能：每个任务的 CPU 时钟时间量。

### SW\_PAGE\_FAULTS
    
    __
    
    SW_PAGE_FAULTS
    
功能：页错误数量。

### SW\_CONTEXT\_SWITCHES
    
    __
    
    SW_CONTEXT_SWITCHES
    
功能：操作系统上下文切换的数量。

### SW\_CPU\_MIGRATIONS
    
    __
    
    SW_CPU_MIGRATIONS
    
功能：CPU 之间的任务迁移量。

### SW\_PAGE\_FAULTS\_MIN
    
    __
    
    SW_PAGE_FAULTS_MIN
    
功能：次要页错误数量。

### SW\_PAGE\_FAULTS\_MAJ
    
    __
    
    SW_PAGE_FAULTS_MAJ
    
功能：主要页错误数量。

### SW\_EMULATION\_FAULTS
    
    __
    
    SW_EMULATION_FAULTS
    
功能：需要内核模拟的不受支持的指令数量。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能： 将计数器转换为字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 处理器计数器的字符串表示。