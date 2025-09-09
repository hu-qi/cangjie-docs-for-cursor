
# 类

## class Console \(deprecated\)
    
    __
    
    public class Console
    
功能：此类提供标准输入、标准输出和标准错误流的获取接口。

> **注意：**
> 
> 未来版本即将废弃，使用 [env](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/env/env_package_overview.html#%E5%87%BD%E6%95%B0) 包中相应函数替代。

### static prop stdErr
    
    __
    
    public static prop stdErr: ConsoleWriter
    
功能：该成员属性为 [ConsoleWriter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#class-consolewriter-deprecated) 类型，它提供标准错误的获取功能。

类型：[ConsoleWriter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#class-consolewriter-deprecated)

### static prop stdIn
    
    __
    
    public static prop stdIn: ConsoleReader
    
功能：该成员属性为 [ConsoleReader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#class-consolereader-deprecated) 类型，它提供标准输入的获取功能。

类型：[ConsoleReader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#class-consolereader-deprecated)

### static prop stdOut
    
    __
    
    public static prop stdOut: ConsoleWriter
    
功能：该成员属性为 [ConsoleWriter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#class-consolewriter-deprecated) 类型，它提供标准输出的获取功能。

类型：[ConsoleWriter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#class-consolewriter-deprecated)

## class ConsoleReader \(deprecated\)
    
    __
    
    public class ConsoleReader <: InputStream
    
功能：提供从控制台读出数据并转换成字符或字符串的功能。

该类型无法构造实例，只能通过 [Console.stdIn](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#static-prop-stdin) 获取实例。 读操作是同步的，内部设有缓存区来保存控制台输入的内容，当到达控制台输入流的结尾时，控制台读取函数将返回`None`。

[ConsoleReader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#class-consolereader-deprecated) 只有一个实例，所有方法共享同一个缓存区，相关`read`方法返回`None`的情形有：

  * 将标准输入重定向到文件时，读取到文件结尾EOF。
  * Linux 环境，按下 `Ctrl+D`。
  * Windows 环境，按下 `Ctrl+Z` 后加回车。

> **注意：**
> 
> 未来版本即将废弃，使用 [ConsoleReader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/env/env_package_api/env_package_classes.html#class-consolereader) 替代。

父类型：

  * [InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream)

### func read\(\)
    
    __
    
    public func read(): ?Rune
    
功能：从标准输入中读取下一个字符。

返回值：

  * ?[Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) \- 读取到字符，返回 ?[Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) ，否则返回 `None`。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception)：当输入不符合`UTF-8`编码的字符串时，抛此异常。

### func read\(Array\<Byte\>\)
    
    __
    
    public func read(arr: Array\<Byte\>): Int64
    
功能：从标准输入中读取并放入 `arr` 中。

> **注意：**
> 
> 该函数存在风险，可能读取出来的结果恰好把 `UTF-8 code point` 从中截断，如果发生截断，将导致该 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 转换成字符串的结果不正确或抛出异常。

参数：

  * arr: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 目标 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 返回读取到的字节长度。

### func readToEnd\(\)
    
    __
    
    public func readToEnd(): ?String
    
功能：从标准输入中读取所有字符。

直到读取到文件结束符 `EOF`，或者在 Linux 上键入 `Ctrl+D` 或在 Windows 上键入 `Ctrl+Z` \+ 回车结束。读取到字符，返回 ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)，否则返回 `None`。读取失败时会返回 `None`，该接口不会抛出异常，即使输入不符合 `UTF-8` 编码的字符串，也会构造出一个 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 并返回，其行为等同于 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string).[fromUtf8Uncheck](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#static-func-fromutf8uncheckedarrayuint8)\([Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>\)。

返回值：

  * ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 将读取到的所有数据以 ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 的形式返回。

### func readUntil\(\(Rune\) -> Bool\)
    
    __
    
    public func readUntil(predicate: (Rune) -> Bool): ?String
    
功能：从标准输入中读取数据直到读取到的字符满足`predicate`条件结束。

满足 predicate: \(Rune\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 条件的字符包含在结果中，读取失败时会返回`None`。

参数：

  * predicate: \(Rune\) ->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 终止读取的条件。

返回值：

  * ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 将读取到的数据以 ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 的形式返回。

### func readUntil\(Rune\)
    
    __
    
    public func readUntil(ch: Rune): ?String
    
功能：从标准输入中读取数据直到读取到字符 `ch` 结束。

`ch`包含在结果中，如果读取到文件结束符 EOF，将返回读取到的所有信息，读取失败时会返回 `None`。

参数：

  * ch: [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) \- 终止字符。

返回值：

  * ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 将读取到的数据以 ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 的形式返回。

### func readln\(\)
    
    __
    
    public func readln(): ?String
    
功能：从标准输入中读取一行字符串。

读取到字符，返回 ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)，结果不包含末尾换行符。该接口不会抛出异常，即使输入不符合`UTF-8`编码的字符串，也会构造出一个 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 并返回，其行为等同于 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string).fromUtf8Uncheck\([Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>\)。

返回值：

  * ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 读取到的行数据，读取失败返回 `None`。

## class ConsoleWriter \(deprecated\)
    
    __
    
    public class ConsoleWriter <: OutputStream
    
功能：此类提供保证线程安全的标准输出功能。

每次 write 调用写到控制台的结果是完整的，不同的 write 函数调用的结果不会混合到一起。 该类型无法构造实例，只能通过 [Console.stdOut](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#static-prop-stdout) 获取标准输出实例或者 [Console.stdErr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/console/console_package_api/console_package_class.html#static-prop-stderr) 获取标准错误的实例。

> **注意：**
> 
> 未来版本即将废弃，使用 [ConsoleWriter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/env/env_package_api/env_package_classes.html#class-consolewriter) 替代。

父类型：

  * [OutputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-outputstream)

### func flush\(\)
    
    __
    
    public func flush(): Unit
    
功能：刷新输出流。

### func write\(Array\<Byte\>\)
    
    __
    
    public func write(buffer: Array\<Byte\>): Unit
    
功能：指定的将字节数组 buffer 写入标准输出或标准错误流中。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 要被写入的字节数组。

### func write\(Bool\)
    
    __
    
    public func write(v: Bool): Unit
    
功能：将指定的布尔值的文本表示形式写入标准输出或标准错误流中。

参数：

  * v: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 要写入的值。

### func write\(Float16\)
    
    __
    
    public func write(v: Float16): Unit
    
功能：将指定的 16 位浮点数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 要写入的值。

### func write\(Float32\)
    
    __
    
    public func write(v: Float32): Unit
    
功能：将指定的 32 位浮点数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 要写入的值。

### func write\(Float64\)
    
    __
    
    public func write(v: Float64): Unit
    
功能：将指定的 64 位浮点数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 要写入的值。

### func write\(Int16\)
    
    __
    
    public func write(v: Int16): Unit
    
功能：将指定的 16 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 要写入的值。

### func write\(Int32\)
    
    __
    
    public func write(v: Int32): Unit
    
功能：将指定的 32 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 要写入的值。

### func write\(Int64\)
    
    __
    
    public func write(v: Int64): Unit
    
功能：将指定的 64 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要写入的值。

### func write\(Int8\)
    
    __
    
    public func write(v: Int8): Unit
    
功能：将指定的 8 位有符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 要写入的值。

### func write\(Rune\)
    
    __
    
    public func write(v: Rune): Unit
    
功能：将指定的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 的 Unicode 字符值写入标准输出或标准错误流中。

参数：

  * v: [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) \- 要写入的值。

### func write\(String\)
    
    __
    
    public func write(v: String): Unit
    
功能：将指定的字符串值写入标准输出或标准错误流中。

参数：

  * v: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 要写入的值。

### func write\(UInt16\)
    
    __
    
    public func write(v: UInt16): Unit
    
功能：将指定的 16 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 要写入的值。

### func write\(UInt32\)
    
    __
    
    public func write(v: UInt32): Unit
    
功能：将指定的 32 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 要写入的值。

### func write\(UInt64\)
    
    __
    
    public func write(v: UInt64): Unit
    
功能：将指定的 64 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 要写入的值。

### func write\(UInt8\)
    
    __
    
    public func write(v: UInt8): Unit
    
功能：将指定的 8 位无符号整数值的文本表示写入标准输出或标准错误流中。

参数：

  * v: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 要写入的值。

### func write\<T\>\(T\) where T <: ToString
    
    __
    
    public func write\<T\>(v: T): Unit where T <: ToString
    
功能：将实现了 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口的数据类型写入标准输出或标准错误流中。

参数：

  * v: T - 要被写入的 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 类型的实例。

### func writeln\(Array\<Byte\>\)
    
    __
    
    public func writeln(buffer: Array\<Byte\>): Unit
    
功能：指定的将字节数组 buffer （后跟换行符）写入标准输出或标准错误流中。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 要写入的值。

### func writeln\(Bool\)
    
    __
    
    public func writeln(v: Bool): Unit
    
功能：将指定的布尔值的文本表示形式（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 要写入的值。

### func writeln\(Float16\)
    
    __
    
    public func writeln(v: Float16): Unit
    
功能：将指定的 16 位浮点数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 要写入的值。

### func writeln\(Float32\)
    
    __
    
    public func writeln(v: Float32): Unit
    
功能：将指定的 32 位浮点数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 要写入的值。

### func writeln\(Float64\)
    
    __
    
    public func writeln(v: Float64): Unit
    
功能：将指定的 64 位浮点数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 要写入的值。

### func writeln\(Int16\)
    
    __
    
    public func writeln(v: Int16): Unit
    
功能：将指定的 16 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 要写入的值。

### func writeln\(Int32\)
    
    __
    
    public func writeln(v: Int32): Unit
    
功能：将指定的 32 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 要写入的值。

### func writeln\(Int64\)
    
    __
    
    public func writeln(v: Int64): Unit
    
功能：将指定的 64 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要写入的值。

### func writeln\(Int8\)
    
    __
    
    public func writeln(v: Int8): Unit
    
功能：将指定的 8 位有符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 要写入的值。

### func writeln\(Rune\)
    
    __
    
    public func writeln(v: Rune): Unit
    
功能：将指定的 Unicode 字符值（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: Rune - 要写入的值。

### func writeln\(String\)
    
    __
    
    public func writeln(v: String): Unit
    
功能：将指定的字符串值（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 要写入的值。

### func writeln\(UInt16\)
    
    __
    
    public func writeln(v: UInt16): Unit
    
功能：将指定的 16 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 要写入的值。

### func writeln\(UInt32\)
    
    __
    
    public func writeln(v: UInt32): Unit
    
功能：将指定的 32 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。 参数：

  * v: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 要写入的值。

### func writeln\(UInt64\)
    
    __
    
    public func writeln(v: UInt64): Unit
    
功能：将指定的 64 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 要写入的值。

### func writeln\(UInt8\)
    
    __
    
    public func writeln(v: UInt8): Unit
    
功能：将指定的 8 位无符号整数值的文本表示（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 要写入的值。

### func writeln\<T\>\(T\) where T <: ToString
    
    __
    
    public func writeln\<T\>(v: T): Unit where T <: ToString
    
功能：将实现了 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口的数据类型转换成的字符串（后跟换行符）写入标准输出或标准错误流中。

参数：

  * v: T - 要写入的值。