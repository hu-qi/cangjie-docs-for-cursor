
# 接口

## interface IOStream
    
    __
    
    public interface IOStream <: InputStream & OutputStream {}
    
功能：输入输出流接口。

父类型：

  * InputStream
  * OutputStream

## interface InputStream
    
    __
    
    public interface InputStream {
        func read(buffer: Array\<Byte\>): Int64
    }
    
功能：输入流接口。

### func read\(Array\<Byte\>\)
    
    __
    
    func read(buffer: Array\<Byte\>): Int64
    
功能：从输入流中读取数据放到 `buffer` 中。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放从输入流中读取的数据。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 读取的数据的字节数。

## interface OutputStream
    
    __
    
    public interface OutputStream {
        func write(buffer: Array\<Byte\>): Unit
        func flush(): Unit
    }
    
功能：输出流接口。

### func flush\(\)
    
    __
    
    func flush(): Unit
    
功能：清空缓存区。该函数提供默认实现，默认实现为空。

### func write\(Array\<Byte\>\)
    
    __
    
    func write(buffer: Array\<Byte\>): Unit
    
功能：将 `buffer` 中的数据写入到输出流中。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放待写入输出流的数据。

## interface Seekable
    
    __
    
    public interface Seekable {
        prop length: Int64
        prop position: Int64
        prop remainLength: Int64
        func seek(sp: SeekPosition): Int64
    }
    
功能：移动光标接口。

### prop length
    
    __
    
    prop length: Int64
    
功能：返回当前流中的总数据量。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop position
    
    __
    
    prop position: Int64
    
功能：返回当前光标位置。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop remainLength
    
    __
    
    prop remainLength: Int64
    
功能：返回当前流中未读的数据量。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### func seek\(SeekPosition\)
    
    __
    
    func seek(sp: SeekPosition): Int64
    
功能：移动光标到指定的位置。

参数：

  * sp: [SeekPosition](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_enums.html#enum-seekposition) \- 指定光标移动后的位置。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 返回流中数据的起点到移动后位置的偏移量（以字节为单位）。