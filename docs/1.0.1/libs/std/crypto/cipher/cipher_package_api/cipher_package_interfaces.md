
# 接口

## interface BlockCipher
    
    __
    
    public interface BlockCipher {
        prop blockSize: Int64
        prop algorithm: String
        func encrypt(input: Array\<Byte\>): Array\<Byte\>
        func decrypt(input: Array\<Byte\>): Array\<Byte\>
        func encrypt(input: Array\<Byte\>, to!: Array\<Byte\>): Int64
        func decrypt(input: Array\<Byte\>, to!: Array\<Byte\>): Int64
    }
    
功能：分组加解密算法接口，继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

### prop algorithm
    
    __
    
    prop algorithm: String
    
功能：获取分组加解密算法的算法名称。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop blockSize
    
    __
    
    prop blockSize: Int64
    
功能：分组块长度，单位字节。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### func encrypt\(Array\<Byte\>\)
    
    __
    
    func encrypt(input: Array\<Byte\>): Array\<Byte\>
    
功能：提供加密函数。

参数：

  * input: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 待加密的数据。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 加密后的结果。

### func decrypt\(Array\<Byte\>\)
    
    __
    
    func decrypt(input: Array\<Byte\>): Array\<Byte\>
    
功能：提供解密函数。

参数：

  * input: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 待解密的数据。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 解密后的结果。

### func encrypt\(Array\<Byte\>, Array\<Byte\>\)
    
    __
    
    func encrypt(input: Array\<Byte\>, to!: Array\<Byte\>): Int64
    
功能：提供加密函数。

参数：

  * input: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 待加密的数据。
  * to\!: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 输出数组。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 输出长度。

### func decrypt\(Array\<Byte\>, Array\<Byte\>\)
    
    __
    
    func decrypt(input: Array\<Byte\>,  to!: Array\<Byte\>): Int64
    
功能：提供解密函数。

参数：

  * input: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 待解密的数据。
  * to\!: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 输出数组。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 输出长度。