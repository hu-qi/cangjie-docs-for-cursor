
# 异常类

## class ArithmeticException
    
    __
    
    public open class ArithmeticException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：算术异常类，发生算术异常时使用。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

### func getClassName\(\)
    
    __
    
    protected open override func getClassName(): String
    
功能：获得类名。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 类名字符串。

## class Error
    
    __
    
    public open class Error <: ToString
    
功能：[Error](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-error) 是所有错误类的基类。该类不可被继承，不可初始化，但是可以被捕获到。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### prop message
    
    __
    
    public open prop message: String
    
功能：获取错误信息。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### func getClassName\(\)
    
    __
    
    protected open func getClassName(): String
    
功能：获得类名。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 类名。

### func getStackTrace\(\)
    
    __
    
    public func getStackTrace(): Array\<StackTraceElement\>
    
功能：获取堆栈信息，每一条堆栈信息用一个 [StackTraceElement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-stacktraceelement) 实例表示，最终返回一个 [StackTraceElement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-stacktraceelement) 的数组。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[StackTraceElement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-stacktraceelement)> \- 堆栈信息数组。

### func getStackTraceMessage\(\)
    
    __
    
    public open func getStackTraceMessage(): String
    
功能：获取堆栈信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 堆栈信息。

### func printStackTrace\(\)
    
    __
    
    public open func printStackTrace(): Unit
    
功能：向控制台打印堆栈信息。

### func toString\(\)
    
    __
    
    public open func toString(): String
    
功能：获取当前 [Error](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-error) 实例的字符串值，包括类名和错误信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 错误信息字符串。

## class Exception
    
    __
    
    public open class Exception <: ToString {
        public init()
        public init(message: String)
    }
    
功能：[Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) 是所有异常类的父类。

支持构造一个异常类，设置、获取异常信息，转换为字符串，获取、打印堆栈，设置异常名（用于字符串表示）。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### prop message
    
    __
    
    public open prop message: String
    
功能：获取异常信息。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

### func getClassName\(\)
    
    __
    
    protected open func getClassName(): String
    
功能：获得类名。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 类名。

### func getStackTrace\(\)
    
    __
    
    public func getStackTrace(): Array\<StackTraceElement\>
    
功能：获取堆栈信息，每一条堆栈信息用一个 [StackTraceElement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-stacktraceelement) 实例表示，最终返回一个 [StackTraceElement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-stacktraceelement) 的数组。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[StackTraceElement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-stacktraceelement)> \- 堆栈信息数组。

### func printStackTrace\(\)
    
    __
    
    public func printStackTrace(): Unit
    
功能：向控制台打印堆栈信息。

### func toString\(\)
    
    __
    
    public open func toString(): String
    
功能：获取当前 [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) 实例的字符串值，包括类名和异常信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常字符串。

## class IllegalArgumentException
    
    __
    
    public open class IllegalArgumentException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示参数非法的异常类。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

### func getClassName\(\)
    
    __
    
    protected override open func getClassName(): String
    
功能：获得类名。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 类名。

## class IllegalFormatException
    
    __
    
    public open class IllegalFormatException <: IllegalArgumentException {
        public init()
        public init(message: String)
    }
    
功能：表示变量的格式无效或不标准时的异常类。

父类型：

  * IllegalArgumentException

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IllegalFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalformatexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [IllegalFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalformatexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class IllegalMemoryException
    
    __
    
    public class IllegalMemoryException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示内存操作错误的异常类。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IllegalMemoryException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalmemoryexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据指定异常信息构造 [IllegalMemoryException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalmemoryexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class IllegalStateException
    
    __
    
    public class IllegalStateException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示状态非法的异常类。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IllegalStateException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalstateexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [IllegalStateException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalstateexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class IncompatiblePackageException
    
    __
    
    public class IncompatiblePackageException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示包不兼容的异常类。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IncompatiblePackageException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-incompatiblepackageexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [IncompatiblePackageException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-incompatiblepackageexception)实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class IndexOutOfBoundsException
    
    __
    
    public class IndexOutOfBoundsException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示索引越界的异常类。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class InternalError
    
    __
    
    public class InternalError <: Error
    
功能：表示内部错误的错误类，该类不可初始化，但是可以被捕获到。

父类型：

  * Error

## class NegativeArraySizeException
    
    __
    
    public class NegativeArraySizeException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示数组大小为负数的异常类。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [NegativeArraySizeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-negativearraysizeexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [NegativeArraySizeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-negativearraysizeexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class NoneValueException
    
    __
    
    public class NoneValueException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 实例的值为 `None` 的异常类，通常在 `getOrThrow` 函数中被抛出。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [NoneValueException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-nonevalueexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [NoneValueException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-nonevalueexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class OutOfMemoryError
    
    __
    
    public class OutOfMemoryError <: Error
    
功能：表示内存不足错误的错误类，该类不可被继承，不可初始化，但是可以被捕获到。

父类型：

  * Error

## class OverflowException
    
    __
    
    public class OverflowException <: ArithmeticException {
        public init()
        public init(message: String)
    }
    
功能：表示算术运算溢出的异常类。

父类型：

  * ArithmeticException

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据指定异常信息构造 [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class SpawnException
    
    __
    
    public class SpawnException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：线程异常类，表示线程处理过程中发生异常。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [SpawnException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-spawnexception) 实例，默认错误信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [SpawnException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-spawnexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class StackOverflowError
    
    __
    
    public class StackOverflowError <: Error
    
功能：表示堆栈溢出错误的错误类，该类不可被继承，不可初始化，但是可以被捕获到。

父类型：

  * Error

### func printStackTrace\(\)
    
    __
    
    public override func printStackTrace(): Unit
    
功能：向控制台打印堆栈信息。

## class TimeoutException
    
    __
    
    public class TimeoutException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：当阻塞操作超时时引发异常。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-timeoutexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据指定异常信息构造 [TimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-timeoutexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。

## class UnsupportedException
    
    __
    
    public class UnsupportedException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：表示功能未支持的异常类。

父类型：

  * Exception

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [UnsupportedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-unsupportedexception) 实例，默认异常信息为空。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据指定异常信息构造 [UnsupportedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-unsupportedexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常提示信息。