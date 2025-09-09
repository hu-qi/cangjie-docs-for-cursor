
# 异常

## class ArgumentParseException
    
    __
    
    public class ArgumentParseException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：参数解析异常类。当参数解析出错（如：不识别的选项、缺少值的选项）时，抛出此异常。

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