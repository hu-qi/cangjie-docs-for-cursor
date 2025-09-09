
# 接口

## interface ToBytes
    
    __
    
    public interface ToBytes {
        func toBytes(): Array\<UInt8\>
    }
    
功能：提供对应类型的序列化功能。

### func toBytes\(\)
    
    __
    
    func toBytes(): Array\<UInt8\>
    
功能：提供对应类型的序列化功能。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 序列化后的字节序列。

## interface ToTokens
    
    __
    
    public interface ToTokens {
        func toTokens(): Tokens
    }
    
功能：实现对应类型的实例到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型转换的接口，作为支持 `quote` 插值操作必须实现的接口。

### func toTokens\(\)
    
    __
    
    func toTokens(): Tokens
    
功能：实现对应类型的实例到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Array <: ToTokens
    
    __
    
    extend \<T\> Array\<T\> <: ToTokens
    
功能：实现 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换，仅支持数值类型、[Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型、[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型、[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend ArrayList <: ToTokens
    
    __
    
    extend \<T\> ArrayList\<T\> <: ToTokens
    
功能：实现 [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换，目前支持的类型有 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)、[Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node)、[Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor)、[Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument)、[FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)、[MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase)、[Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier)、[Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation)、[ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist)、[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)、[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 等。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Bool <: ToTokens
    
    __
    
    extend Bool <: ToTokens
    
功能：实现 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Float16 <: ToTokens
    
    __
    
    extend Float16 <: ToTokens
    
功能：实现 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Float32 <: ToTokens
    
    __
    
    extend Float32 <: ToTokens
    
功能：实现 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Float64 <: ToTokens
    
    __
    
    extend Float64 <: ToTokens
    
功能：实现 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Int16 <: ToTokens
    
    __
    
    extend Int16 <: ToTokens
    
功能：实现 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Int32 <: ToTokens
    
    __
    
    extend Int32 <: ToTokens
    
功能：实现 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Int64 <: ToTokens
    
    __
    
    extend Int64 <: ToTokens
    
功能：实现 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Int8 <: ToTokens
    
    __
    
    extend Int8 <: ToTokens
    
功能：实现 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Rune <: ToTokens
    
    __
    
    extend Rune <: ToTokens
    
功能：实现 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend String <: ToTokens
    
    __
    
    extend String <: ToTokens
    
功能：实现 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Token <: ToTokens
    
    __
    
    extend Token <: ToTokens
    
功能：实现 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend Tokens <: ToTokens
    
    __
    
    extend Tokens <: ToTokens
    
功能：实现 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend UInt16 <: ToTokens
    
    __
    
    extend UInt16 <: ToTokens
    
功能：实现 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend UInt32 <: ToTokens
    
    __
    
    extend UInt32 <: ToTokens
    
功能：实现 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend UInt64 <: ToTokens
    
    __
    
    extend UInt64 <: ToTokens
    
功能：实现 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### extend UInt8 <: ToTokens
    
    __
    
    extend UInt8 <: ToTokens
    
功能：实现 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

父类型：

  * ToTokens

#### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：实现 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型到 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的转换。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转换后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。