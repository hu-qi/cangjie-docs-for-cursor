
# 异常

## class ProcessException
    
    __
    
    public class ProcessException <: IOException {
        public init(message: String)
    }
    
功能：`process` 包的异常类。

父类型：

  * [IOException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-ioexception)

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：创建 [ProcessException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/process/process_package_api/process_package_exceptions.html#class-processexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。