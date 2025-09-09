
# 类

## class WeakRef\<T\> where T <: Object
    
    __
    
    public class WeakRef\<T\> <: WeakRefBase where T <: Object {
        public init(value: T, cleanupPolicy: CleanupPolicy)
    }
    
功能：此类提供弱引用相关的功能，如果一个对象的引用被标记为弱引用，那么即使引用不为空并且该对象的可达性成立， GC 也可以按照指定的回收策略回收它。

### prop cleanupPolicy
    
    __
    
    public prop cleanupPolicy: CleanupPolicy
    
功能：获取该弱引用的清理策略。

类型：[CleanupPolicy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ref/ref_package_api/ref_package_enums.html#enum-cleanuppolicy)

### prop value
    
    __
    
    public prop value: Option\<T\>
    
功能：读取弱引用指向的对象。如果弱引用为空或弱引用中的对象已被清理则返回 `None`。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>

### init\(T, CleanupPolicy\)
    
    __
    
    public init(value: T, cleanupPolicy: CleanupPolicy)
    
功能：为 `value` 对象创建弱引用，并指定清理策略。

参数：

  * value: T - 弱引用指向的对象。
  * cleanupPolicy: [CleanupPolicy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ref/ref_package_api/ref_package_enums.html#enum-cleanuppolicy) \- `value` 对象的清理策略。

### func clear\(\)
    
    __
    
    public func clear(): Unit
    
功能：强制清理弱引用指向的对象，后续对 `value` 的访问将返回 `None`。

## class WeakRefBase
    
    __
    
    sealed abstract class WeakRefBase
    
此类不包含任何公开成员和公开函数，也不允许被继承、扩展， 仅作为 [WeakRef](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ref/ref_package_api/ref_package_classes#class-weakreft-where-t--object) 的基类。