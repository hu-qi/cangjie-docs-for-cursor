  
# std.io

## 功能介绍

io 包提供程序与外部设备进行数据交换的能力。

I/O 操作是指程序与外部设备进行数据交换的操作。仓颉提供了流式 I/O 操作的通用接口和一些特殊实现。输入输出流类似一个数据通道，承载一段有序数据，程序从输入流读取数据（来自文件、网络等），往输出流（通往文件、网络等）写入数据。

## API 列表

### 函数

函数名| 功能  
---|---  
[copy\(InputStream, OutputStream\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_funcs.html#func-copyinputstream-outputstream)| 将一个输入流中未被读取的数据拷贝到另一个输出流中。  
[readString\<T\>\(T\) where T \<: InputStream & Seekable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_funcs.html#func-readstringtt-where-t--inputstream--seekable)| 读取入参中的所有剩余内容，并返回一个字符串。  
[readStringUnchecked\<T\>\(T\) where T \<: InputStream & Seekable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_funcs.html#func-readstringuncheckedtt-where-t--inputstream--seekable)| 读取入参中的所有剩余内容，并返回一个字符串。该函数不会检查字符串的合法性。  
[func readToEnd\<T\>\(T\) where T \<: InputStream & Seekable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_funcs.html#func-readtoendtt-where-t--inputstream--seekable)| 获取入参中未被读取的数据。  
  
### 接口

接口名| 功能  
---|---  
[InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream)| 输入流接口。  
[IOStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-iostream)| 输入输出流接口。  
[OutputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-iostream)| 输出流接口。  
[Seekable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-seekable)| 移动光标接口。  
  
### 类

类名| 功能  
---|---  
[BufferedInputStream\<T\> where T \<: InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_classes.html#class-bufferedinputstreamt-where-t--inputstream)| 提供带缓冲区的输入流。  
[BufferedOutputStream\<T\> where T \<: OutputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_classes.html#class-bufferedoutputstreamt-where-t--outputstream)| 提供带缓冲区的输出流。  
[ByteBuffer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_classes.html#class-bytebuffer)| 输入流接口。  
[ChainedInputStream\<T\> where T \<: InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_classes.html#class-chainedinputstreamt-where-t--inputstream)| 提供顺序从 InputStream 数组中读取数据的能力。  
[MultiOutputStream\<T\> where T \<: OutputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_classes.html#class-multioutputstreamt-where-t--outputstream)| 提供将数据同时写入到 OutputStream 数组中每个输出流中的能力。  
[StringReader\<T\> where T \<: InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_classes.html#class-stringreadert-where-t--inputstream)| 提供从 InputStream 输入流中读出数据并转换成字符或字符串的能力。  
[StringWriter\<T\> where T \<: OutputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_classes.html#class-stringwritert-where-t--outputstream)| 提供将 String 以及一些 ToString 类型转换成指定编码格式和字节序配置的字符串并写入到输出流的能力。  
  
### 枚举

枚举名| 功能  
---|---  
[SeekPosition](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_enums.html#enum-seekposition)| 输入流接口。  
  
### 异常类

异常类名| 功能  
---|---  
[ContentFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-contentformatexception)| 提供字符格式相关的异常处理。  
[IOException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_exceptions.html#class-ioexception)| 提供 IO 流相关的异常处理。