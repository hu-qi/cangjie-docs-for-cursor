
# 异常

## class ConcurrentModificationException
    
    __
    
    public class ConcurrentModificationException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：并发修改异常类。当函数检测到不同步的并发修改，抛出异常。

由于 collection 包提供的容器类都不支持并发修改，因此在执行某些操作时，会抛出 [ConcurrentModificationException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_exception.html#class-concurrentmodificationexception)。

典型的抛出异常场景有：

  * 使用 for-in 遍历一个容器过程中对容器进行修改时\([HashMapIterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapiteratork-v-where-k--hashable--equatablek)的[remove](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-removestring-deprecated)\(\) 方法除外\)。
  * 在使用声明周期较短的类型，如 [MapEntryView](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapentryviewk-v) 时，如果其所在的容器内容被修改，也会抛出异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个不带异常信息的实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造异常实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。