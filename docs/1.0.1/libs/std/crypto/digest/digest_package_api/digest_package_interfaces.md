
# 接口

## interface Digest
    
    __
    
    public interface Digest {
        prop size: Int64
        prop blockSize: Int64
        prop algorithm: String
        func write(buffer: Array\<Byte\>): Unit
        func finish(to!: Array\<Byte\>): Unit
        func finish(): Array\<Byte\>
        func reset(): Unit
    }
    
功能：摘要算法接口，继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

### prop algorithm
    
    __
    
    prop algorithm: String
    
功能：获取摘要算法的算法名称。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop blockSize
    
    __
    
    prop blockSize: Int64
    
功能：返回 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 块长度，单位字节。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop size
    
    __
    
    prop size: Int64
    
功能：返回生成的摘要信息长度，单位字节。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### func finish\(\)
    
    __
    
    func finish(): Array\<Byte\>
    
功能：返回生成的 digest 值。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 返回生成摘要值。

### func finish\(Array\<Byte\>\)
    
    __
    
    func finish(to!: Array\<Byte\>): Unit
    
功能：获取生成的信息摘要值，注意调用 finish 后不可以再进行摘要计算，如重新计算需要 reset 重置上下文。

参数：

  * to\!: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 目标数组。

### func reset\(\)
    
    __
    
    func reset(): Unit
    
功能：重置 digest 对象到初始状态。

### func write\(Array\<Byte\>\)
    
    __
    
    func write(buffer: Array\<Byte\>): Unit
    
功能：使用给定的 buffer 更新 digest 对象。