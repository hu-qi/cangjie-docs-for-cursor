
# 异常类

## class SocketException
    
    __
    
    public class SocketException <: IOException {
        public init()
        public init(message: String)
    }
    
功能：提供套接字相关的异常处理。

父类型：

  * [IOException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-ioexception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class SocketTimeoutException
    
    __
    
    public class SocketTimeoutException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：提供套接字操作超时相关的异常处理。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。