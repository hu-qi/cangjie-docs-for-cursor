
# 异常

## class ContentFormatException
    
    __
    
    public class ContentFormatException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：提供字符格式相关的异常处理。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [ContentFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-contentformatexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [ContentFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-contentformatexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class IOException
    
    __
    
    public open class IOException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：提供 IO 流相关的异常处理。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [IOException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-ioexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [IOException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-ioexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

### func getClassName\(\)
    
    __
    
    protected open func getClassName(): String
    
功能：获得类名。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 类名。