  
# 异常

## class RegexException
    
    __
    
    public class RegexException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：提供正则的异常处理。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [RegexException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/regex/regex_package_api/regex_package_exceptions.html#class-regexexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [RegexException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/regex/regex_package_api/regex_package_exceptions.html#class-regexexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。