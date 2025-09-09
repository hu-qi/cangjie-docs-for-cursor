
# 异常类

## class InvalidDataException
    
    __
    
    public class InvalidDataException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：[InvalidDataException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-invaliddataexception) 表示加载时区时的异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个 [InvalidDataException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-invaliddataexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据参数 `message` 指定的异常信息，构造一个 [InvalidDataException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-invaliddataexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 预定义消息。

## class TimeParseException
    
    __
    
    public class TimeParseException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：[TimeParseException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-timeparseexception) 表示解析时间字符串时的异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个 [TimeParseException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-timeparseexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据参数 `message` 指定的异常信息，构造一个 [TimeParseException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-timeparseexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 预定义消息。