
# 异常类

## class IllegalSynchronizationStateException
    
    __
    
    public class IllegalSynchronizationStateException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：此类为非法同步状态异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建一个 [IllegalSynchronizationStateException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/sync/sync_package_api/sync_package_exceptions.html#class-illegalsynchronizationstateexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：创建一个 [IllegalSynchronizationStateException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/sync/sync_package_api/sync_package_exceptions.html#class-illegalsynchronizationstateexception) 实例，其信息由参数 `message` 指定。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 预定义消息。