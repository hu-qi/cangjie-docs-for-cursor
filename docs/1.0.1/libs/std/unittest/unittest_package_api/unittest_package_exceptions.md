
# 异常类

## class AssertException
    
    __
    
    public class AssertException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：[@Expect](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#expect-%E5%AE%8F) / [@Assert](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#assert-%E5%AE%8F) 检查失败时所抛出的异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init(message: String)
    
功能：构造函数。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：构造函数。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 指定的异常信息。

## class AssertIntermediateException
    
    __
    
    public class AssertIntermediateException <: Exception {
        public let expression: String
        public let originalException: Exception
    }
    
功能：[@PowerAssert](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#powerassert-%E5%AE%8F) 检查失败时所抛出的异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### let expression
    
    __
    
    public let expression: String
    
功能：检查的表达式。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)。

### let originalException
    
    __
    
    public let originalException: Exception
    
功能：原始的类型信息。

类型：[Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)。

### func getOriginalStackTrace
    
    __
    
    public func getOriginalStackTrace(): String
    
功能：获取原始的栈信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 栈信息。

## class UnittestCliOptionsFormatException
    
    __
    
    public class UnittestCliOptionsFormatException <: UnittestException
    
功能：控制台选项格式错误抛出的异常。

父类型：

  * UnittestException

## class UnittestException
    
    __
    
    public open class UnittestException <: Exception
    
功能：框架通用异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)