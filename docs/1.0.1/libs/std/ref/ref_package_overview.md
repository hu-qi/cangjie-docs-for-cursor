
# std.ref

## 功能介绍

ref 包提供了弱引用相关的能力。弱引用是一个相对“强引用”的概念，对于强引用，如果引用不为空并且运行时分析可达性成立，则 GC 不会回收它，但是对于弱引用，在一些情况下即使可达性成立，GC 依然可能会回收该引用。

弱引用常用于缓存、对象池、线程池、事件监听器等场景。例如，我们可以使用弱引用来缓存一些大型的对象以达到复用的目的，与强引用不同的是，当内存不足时，这些被弱引用指向的对象也可以被 GC 自动回收，从而减少内存压力，而被强引用指向的对象则无法被 GC 自动回收，可能会造成 OOM 。

本包提供 WeakRef 类，支持将任意 Object 实例封装成弱引用实例，如果原 Object 实例没有除弱引用外的其他引用，将可能在某一时刻被 GC 回收。

同时，本包支持两种回收策略，激进回收策略（ GC 会尽快回收弱引用指向的对象）和延迟回收策略（ GC 会尽量晚回收弱引用指向的对象，例如仅在内存不足时回收）。

## API列表

### 类

类名| 功能  
---|---  
[WeakRef](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ref/ref_package_api/ref_package_classes.html#class-weakreft-where-t--object)| 此类提供弱引用相关的功能，如果一个对象的引用被标记为弱引用，那么即使引用不为空并且该对象的可达性成立， GC 也可以按照指定的回收策略回收它。  
[WeakRefBase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ref/ref_package_api/ref_package_classes.html#class-weakrefbase)| 此类不包含任何公开成员和公开函数，也不允许被继承、扩展， 仅作为 `WeakRef` 的基类。  
  
### 枚举

枚举名| 功能  
---|---  
[CleanupPolicy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ref/ref_package_api/ref_package_enums.html#enum-cleanuppolicy)| 该枚举表示不同的清理策略，分别为 `EAGER` 和 `DEFERRED`。