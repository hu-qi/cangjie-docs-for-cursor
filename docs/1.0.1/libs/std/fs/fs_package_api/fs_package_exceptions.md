  
# 异常类

## class FSException
    
    __
    
    public class FSException <: IOException {
        public init()
        public init(message: String)
    }
    
功能：文件流异常类，继承了 IO 流异常类。

父类型：

  * [IOException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-ioexception)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个文件异常实例，无异常提示信息。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：构造一个文件异常实例，有异常提示信息。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 错误信息。