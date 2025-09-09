
# 异常类

## class ExpectationFailedException
    
    __
    
    public open class ExpectationFailedException <: PrettyException {}
    
功能：在测试执行期间违反了 mock 配置期间设置的一个或多个期望。

父类型：

  * PrettyException

## class MockFrameworkException
    
    __
    
    public class MockFrameworkException <: PrettyException {}
    
功能：框架异常信息，用户使用 API 不满足框架要求时，抛出该异常。

父类型：

  * PrettyException

## class MockFrameworkInternalError
    
    __
    
    public class MockFrameworkInternalError <: PrettyException {}
    
功能：框架异常信息，用户不应期望该异常被抛出。

父类型：

  * PrettyException

## class PrettyException
    
    __
    
    public abstract class PrettyException <: Exception & PrettyPrintable {}
    
功能：支持 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable) 的异常类型，可以较好得打印异常信息。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)
  * [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable)

### func pprint
    
    __
    
    public func pprint(to: PrettyPrinter): PrettyPrinter
    
功能：支持较好得颜色打印、缩进格式打印异常信息。

参数：

  * to: [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 增加颜色和缩进的打印器。

返回值：

  * [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 增加颜色和缩进的打印器。

## class UnhandledCallException
    
    __
    
    public class UnhandledCallException <: PrettyException {}
    
功能：提供的[桩](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)均未处理该调用。

父类型：

  * PrettyException

## class UnnecessaryStubbingException
    
    __
    
    public class UnnecessaryStubbingException <: PrettyException {}
    
功能：指示被测试的代码从未触发[桩](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)。

父类型：

  * PrettyException

## class UnstubbedInvocationException
    
    __
    
    public class UnstubbedInvocationException <: PrettyException {}
    
功能：未提供与此调用匹配的[桩](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)。

父类型：

  * PrettyException

## class VerificationFailedException
    
    __
    
    public class VerificationFailedException <: PrettyException {}
    
功能：验证失败时，框架所抛出的异常。

父类型：

  * PrettyException