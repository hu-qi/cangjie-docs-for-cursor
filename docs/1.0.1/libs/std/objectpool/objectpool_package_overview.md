
# std.objectpool

## 功能介绍

objectpool 包提供了对象缓存和复用的功能。

在面向对象语言中，对象的申请和释放普遍实现复杂，耗时较长，很可能成为应用程序的性能瓶颈。仓颉对象的申请和释放也面临同样的问题。对象池通过缓存、复用对象，减少对象的申请和释放，有效提高程序性能。

本包 `ObjectPool` 类实现了将指定类型的对象进行缓存和复用，调用 `put` 方法可将使用完毕的对象放入对象池缓存，调用 `get` 方法可从对象池缓存中取出待使用的对象。

此外，为了减少竞争，进一步提升对象存取的效率，`ObjectPool` 在实现中根据当前所在仓颉线程的 `id` 在不同数组中进行对象存取。

> **注意：**
> 
> 1、由于 `ObjectPool` 在实现中根据仓颉线程 `id` 进行存取，将导致存和取分布在不同仓颉线程的情况下，存入的对象难以被取到。因此应该在存和取均匀分布在各个仓颉线程的场景下使用该对象池。
> 
> 2、暂不支持自动缩减容量。

## API列表

### 类

类名| 功能  
---|---  
[ObjectPool \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/objectpool/objectpool_package_api/objectpool_package_classes.html#class-objectpoolt-where-t--object-deprecated)| 此类提供了一个并发安全的对象缓存类型，该类型可以储存已经分配内存但未使用的对象。