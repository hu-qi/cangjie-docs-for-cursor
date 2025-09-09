  
# 异常类

## class OvershiftException
    
    __
    
    public class OvershiftException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：移位运算中，当移位位数超过操作数位数时抛出的异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：创建带有异常信息 message 的 [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class UndershiftException
    
    __
    
    public class UndershiftException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：移位运算中，当移位位数小于 0 时抛出的异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [UndershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-undershiftexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：创建带有异常信息 message 的 [UndershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-undershiftexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。