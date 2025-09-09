
# 接口

## interface FloatingPoint\<T\>
    
    __
    
    public interface FloatingPoint\<T\> <: Number\<T\> {
        static func getE(): T
        static func getInf(): T
        static func getPI(): T
        static func getMinDenormal(): T
        static func getMinNormal(): T
        static func getNaN(): T
        func isInf(): Bool
        func isNaN(): Bool
        func isNormal(): Bool
    }
    
功能：本接口提供了浮点数相关的方法。

父类型：

  * Number\<T\>

### static func getE\(\)
    
    __
    
    static func getE(): T
    
功能：获取 T 类型的自然常数。

返回值：

  * T - 类型 T 的自然常数。

### static func getInf\(\)
    
    __
    
    static func getInf(): T
    
功能：获取浮点数的无穷数。

返回值：

  * T - 类型 T 的无穷数。

### static func getPI\(\)
    
    __
    
    static func getPI(): T
    
功能：获取 T 类型的圆周率常数。

返回值：

  * T - 类型 T 的圆周率常数。

### static func getMinDenormal\(\)
    
    __
    
    static func getMinDenormal(): T
    
功能：获取单精度浮点数的最小次正规数。

返回值：

  * T - 类型 T 的最小次正规数。

### static func getMinNormal\(\)
    
    __
    
    static func getMinNormal(): T
    
功能：获取单精度浮点数的最小正规数。

返回值：

  * T - 类型 T 的最小正规数。

### static func getNaN\(\)
    
    __
    
    static func getNaN(): T
    
功能：获取浮点数的非数。

返回值：

  * T - 类型 T 的非数。

### func isInf\(\)
    
    __
    
    func isInf(): Bool
    
功能：判断浮点数是否为无穷数值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果浮点数的值正无穷大或负无穷大，则返回 `true`；否则，返回 `false`。

### func isNaN\(\)
    
    __
    
    func isNaN(): Bool
    
功能：判断浮点数是否为非数值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果浮点数的值为非数值，则返回 `true`；否则，返回 `false`。

### func isNormal\(\)
    
    __
    
    func isNormal(): Bool
    
功能：判断浮点数是否为常规数值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果是正常的浮点数，返回 `true`；否则，返回 `false`。

### extend Float16 <: FloatingPoint\<Float16\>
    
    __
    
    extend Float16 <: FloatingPoint\<Float16\>
    
功能：为 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型扩展 FloatingPoint\<Float16\> 接口。

父类型：

  * FloatingPoint<[Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16)>

#### static func getE\(\)
    
    __
    
    public static func getE(): Float16
    
功能：获取半精度浮点数类型的自然常数。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的自然常数。

#### static func getInf\(\)
    
    __
    
    public static func getInf(): Float16
    
功能：获取半精度浮点数类型的无穷数值。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的无穷数值。

#### static func getPI\(\)
    
    __
    
    public static func getPI(): Float16
    
功能：获取半精度浮点数类型的圆周率常数。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的圆周率常数。

#### static func getMinDenormal\(\)
    
    __
    
    public static func getMinDenormal(): Float16
    
功能：获取半精度浮点数类型的最小次正规数。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的最小次正规数。

#### static func getMinNormal\(\)
    
    __
    
    public static func getMinNormal(): Float16
    
功能：获取半精度浮点数类型的最小正规数。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的最小正规数。

#### static func getNaN\(\)
    
    __
    
    public static func getNaN(): Float16
    
功能：获取半精度浮点数类型的非数。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的非数。

### extend Float32 <: FloatingPoint\<Float32\>
    
    __
    
    extend Float32 <: FloatingPoint\<Float32\>
    
功能：为 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型扩展 FloatingPoint\<Float32\> 接口。

父类型：

  * FloatingPoint<[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)>

#### static func getE\(\)
    
    __
    
    public static func getE(): Float32
    
功能：获取单精度浮点数类型的自然常数。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的自然常数。

#### static func getInf\(\)
    
    __
    
    public static func getInf(): Float32
    
功能：获取单精度浮点数类型的无穷数值。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的无穷数值。

#### static func getPI\(\)
    
    __
    
    public static func getPI(): Float32
    
功能：获取单精度浮点数类型的圆周率常数。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的圆周率常数。

#### static func getMinDenormal\(\)
    
    __
    
    public static func getMinDenormal(): Float32
    
功能：获取单精度浮点数类型的最小次正规数。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的最小次正规数。

#### static func getMinNormal\(\)
    
    __
    
    public static func getMinNormal(): Float32
    
功能：获取单精度浮点数类型的最小正规数。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的最小正规数。

#### static func getNaN\(\)
    
    __
    
    public static func getNaN(): Float32
    
功能：获取单精度浮点数类型的非数。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的非数。

### extend Float64 <: FloatingPoint\<Float64\>
    
    __
    
    extend Float64 <: FloatingPoint\<Float64\>
    
功能：为 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型扩展 FloatingPoint\<Float64\> 接口。

父类型：

  * FloatingPoint<[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64)>

#### static func getE\(\)
    
    __
    
    public static func getE(): Float64
    
功能：获取双精度浮点数类型的自然常数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的自然常数。

#### static func getInf\(\)
    
    __
    
    public static func getInf(): Float64
    
功能：获取双精度浮点数类型的无穷数值。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的无穷数值。

#### static func getPI\(\)
    
    __
    
    public static func getPI(): Float64
    
功能：获取双精度浮点数类型的圆周率常数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的圆周率常数。

#### static func getMinDenormal\(\)
    
    __
    
    public static func getMinDenormal(): Float64
    
功能：获取双精度浮点数类型的最小次正规数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的最小次正规数。

#### static func getMinNormal\(\)
    
    __
    
    public static func getMinNormal(): Float64
    
功能：获取双精度浮点数类型的最小正规数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的最小正规数。

#### static func getNaN\(\)
    
    __
    
    public static func getNaN(): Float64
    
功能：获取双精度浮点数类型的非数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的非数。

## interface Integer\<T\>
    
    __
    
    public interface Integer\<T\> <: Number\<T\> {
        static func isSigned(): Bool
        operator func %(rhs: T): T
        operator func &(rhs: T): T
        operator func |(rhs: T): T
        operator func ^(rhs: T): T
        operator func !(): T
        operator func >>(n: Int64): T
        operator func <<(n: Int64): T
    }
    
功能：本接口提供了整数类型相关的方法。

父类型：

  * Number\<T\>

### static func isSigned\(\)
    
    __
    
    static func isSigned(): Bool
    
功能：判断类型是否是有符号的。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果类型是有符号的，返回 `true`；否则返回 `false`。

### operator func %\(T\)
    
    __
    
    operator func %(rhs: T): T
    
功能：算术运算符，计算余数。

参数：

  * rhs: T - 运算符右边的数，表示除数。

返回值：

  * T - 计算所得余数。

### operator func &\(T\)
    
    __
    
    operator func &(rhs: T): T
    
功能：位运算符，按位与。

参数：

  * rhs: T - 运算符右边的数。

返回值：

  * T - 计算所得结果。

### operator func |\(T\)
    
    __
    
    operator func |(rhs: T): T
    
功能：位运算符，按位或。

参数：

  * rhs: T - 运算符右边的数。

返回值：

  * T - 计算所得结果。

### operator func ^\(T\)
    
    __
    
    operator func ^(rhs: T): T
    
功能：位运算符，按位异或。

参数：

  * rhs: T - 运算符右边的数。

返回值：

  * T - 计算所得结果。

### operator func \!\(\)
    
    __
    
    operator func !(): T
    
功能：位运算符，按位取反。

返回值：

  * T - 计算所得结果。

### operator func >>\(Int64\)
    
    __
    
    operator func >>(n: Int64): T
    
功能：位运算符，按位右移。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 运算符右边的数，表示右移的位数。

返回值：

  * T - 计算所得结果。

### operator func <<\(Int64\)
    
    __
    
    operator func <<(n: Int64): T
    
功能：位运算符，按位左移。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 运算符右边的数，表示左移的位数。

返回值：

  * T - 计算所得结果。

### extend Int16 <: Integer\<Int16\>
    
    __
    
    extend Int16 <: Integer\<Int16\>
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `true`。

### extend Int32 <: Integer\<Int32\>
    
    __
    
    extend Int32 <: Integer\<Int32\>
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `true`。

### extend Int64 <: Integer\<Int64\>
    
    __
    
    extend Int64 <: Integer\<Int64\>
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `true`。

### extend Int8 <: Integer\<Int8\>
    
    __
    
    extend Int8 <: Integer\<Int8\>
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `true`。

### extend IntNative <: Integer\<IntNative\>
    
    __
    
    extend IntNative <: Integer\<IntNative\>
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `true`。

### extend UInt16 <: Integer\<UInt16\>
    
    __
    
    extend UInt16 <: Integer\<UInt16\>
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `false`。

### extend UInt32 <: Integer\<UInt32\>
    
    __
    
    extend UInt32 <: Integer\<UInt32\>
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `false`。

### extend UInt64 <: Integer\<UInt64\>
    
    __
    
    extend UInt64 <: Integer\<UInt64\>
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `false`。

### extend UInt8 <: Integer\<UInt8\>
    
    __
    
    extend UInt8 <: Integer\<UInt8\>
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `false`。

### extend UIntNative <: Integer\<UIntNative\>
    
    __
    
    extend UIntNative <: Integer\<UIntNative\>
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型扩展 Integer\<T\> 接口。

父类型：

  * Integer<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>

#### static func isSigned\(\)
    
    __
    
    public static func isSigned(): Bool
    
功能：判断 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型是否是有符号类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 总是返回 `false`。

## interface MathExtension\<T\> \(deprecated\)
    
    __
    
    public interface MathExtension\<T\> {
        static func GetPI(): T
        static func GetE(): T
    }
    
功能：本接口提供了统一的方法获取一些数学常数。

> **注意：**
> 
> 未来版本即将废弃，使用 FloatingPoint\<T\> 替代。

### static func GetPI\(\)
    
    __
    
    static func GetPI(): T
    
功能：获取 T 类型的圆周率常数。

返回值：

  * T - 类型 T 的圆周率常数。

### static func GetE\(\)
    
    __
    
    static func GetE(): T
    
功能：获取 T 类型的自然常数。

返回值：

  * T - 类型 T 的自然常数。

### extend Float16 <: MathExtension\<Float16\>
    
    __
    
    extend Float16 <: MathExtension\<Float16\>
    
功能：拓展半精度浮点数以支持一些数学常数。

父类型：

  * MathExtension \(deprecated\)<[Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16)>

#### static func GetPI\(\)
    
    __
    
    public static func GetPI(): Float16
    
功能：获取半精度浮点数的圆周率常数。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 类型的圆周率常数

#### static func GetE\(\)
    
    __
    
    public static func GetE(): Float16
    
功能：获取半精度浮点数的自然常数。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 类型的自然常数

### extend Float32 <: MathExtension\<Float32\>
    
    __
    
    extend Float32 <: MathExtension\<Float32\>
    
功能：拓展单精度浮点数以支持一些数学常数。

父类型：

  * MathExtension \(deprecated\)<[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)>

#### static func GetPI\(\)
    
    __
    
    public static func GetPI(): Float32
    
功能：获取单精度浮点数的圆周率常数。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 类型的圆周率常数

#### static func GetE\(\)
    
    __
    
    public static func GetE(): Float32
    
功能：获取单精度浮点数的自然常数。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 类型的自然常数

### extend Float64 <: MathExtension\<Float64\>
    
    __
    
    extend Float64 <: MathExtension\<Float64\>
    
功能：拓展双精度浮点数以支持一些数学常数。

父类型：

  * MathExtension \(deprecated\)<[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64)>

#### static func GetPI\(\)
    
    __
    
    public static func GetPI(): Float64
    
功能：获取双精度浮点数的圆周率常数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 类型的圆周率常数

#### static func GetE\(\)
    
    __
    
    public static func GetE(): Float64
    
功能：获取双精度浮点数的自然常数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 类型的自然常数

## interface MaxMinValue\<T\>
    
    __
    
    public interface MaxMinValue\<T\> {
        static func getMax(): T
        static func getMin(): T
    }
    
功能：提供获取最大值和最小值的方法。

### static func getMax\(\)
    
    __
    
    static func getMax(): T
    
功能：获取最大值。

返回值：

  * T - 最大值。

### static func getMax\(\)
    
    __
    
    static func getMin(): T
    
功能：获取最小值。

返回值：

  * T - 最小值。

### extend Float16 <: MaxMinValue\<Float16\>
    
    __
    
    extend Float16 <: MaxMinValue\<Float16\>
    
功能：为 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): Float16
    
功能：获取 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型的最大值。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): Float16
    
功能：获取 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型的最小值。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 半精度浮点数类型的最小值。

### extend Float32 <: MaxMinValue\<Float32\>
    
    __
    
    extend Float32 <: MaxMinValue\<Float32\>
    
功能：为 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): Float32
    
功能：获取 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型的最大值。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): Float32
    
功能：获取 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型的最小值。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 单精度浮点数类型的最小值。

### extend Float64 <: MaxMinValue\<Float64\>
    
    __
    
    extend Float64 <: MaxMinValue\<Float64\>
    
功能：为 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): Float64
    
功能：获取 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的最大值。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): Float64
    
功能：获取 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的最小值。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 双精度浮点数类型的最小值。

### extend Int16 <: MaxMinValue\<Int16\>
    
    __
    
    extend Int16 <: MaxMinValue\<Int16\>
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): Int16
    
功能：获取 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的最大值。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): Int16
    
功能：获取 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的最小值。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的最小值。

### extend Int32 <: MaxMinValue\<Int32\>
    
    __
    
    extend Int32 <: MaxMinValue\<Int32\>
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): Int32
    
功能：获取 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的最大值。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): Int32
    
功能：获取 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的最小值。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的最小值。

### extend Int64 <: MaxMinValue\<Int64\>
    
    __
    
    extend Int64 <: MaxMinValue\<Int64\>
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): Int64
    
功能：获取 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的最大值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): Int64
    
功能：获取 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的最小值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的最小值。

### extend Int8 <: MaxMinValue\<Int8\>
    
    __
    
    extend Int8 <: MaxMinValue\<Int8\>
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): Int8
    
功能：获取 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的最大值。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): Int8
    
功能：获取 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的最小值。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的最小值。

### extend IntNative <: MaxMinValue\<IntNative\>
    
    __
    
    extend IntNative <: MaxMinValue\<IntNative\>
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): IntNative
    
功能：获取 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型的最大值。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): IntNative
    
功能：获取 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型的最小值。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型的最小值。

### extend UInt16 <: MaxMinValue\<UInt16\>
    
    __
    
    extend UInt16 <: MaxMinValue\<UInt16\>
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): UInt16
    
功能：获取 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的最大值。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): UInt16
    
功能：获取 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的最小值。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的最小值。

### extend UInt32 <: MaxMinValue\<UInt32\>
    
    __
    
    extend UInt32 <: MaxMinValue\<UInt32\>
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): UInt32
    
功能：获取 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的最大值。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): UInt32
    
功能：获取 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的最小值。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的最小值。

### extend UInt64 <: MaxMinValue\<UInt64\>
    
    __
    
    extend UInt64 <: MaxMinValue\<UInt64\>
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): UInt64
    
功能：获取 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的最大值。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): UInt64
    
功能：获取 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的最小值。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的最小值。

### extend UInt8 <: MaxMinValue\<UInt8\>
    
    __
    
    extend UInt8 <: MaxMinValue\<UInt8\>
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): UInt8
    
功能：获取 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的最大值。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): UInt8
    
功能：获取 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的最小值。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的最小值。

### extend UIntNative <: MaxMinValue\<UIntNative\>
    
    __
    
    extend UIntNative <: MaxMinValue\<UIntNative\>
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>

#### static func getMax\(\)
    
    __
    
    public static func getMax(): UIntNative
    
功能：获取 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型的最大值。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型的最大值。

#### static func getMin\(\)
    
    __
    
    public static func getMin(): UIntNative
    
功能：获取 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型的最小值。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型的最小值。

## interface Number\<T\>
    
    __
    
    public interface Number\<T\> {
        operator func +(rhs: T): T
        operator func -(rhs: T): T
        operator func *(rhs: T): T
        operator func /(rhs: T): T
        operator func -(): T
    }
    
功能：提供数值类型相关的方法。

### operator func +\(T\)
    
    __
    
    operator func +(rhs: T): T
    
功能：算术运算符，计算加法。

参数：

  * rhs: T - 运算符右边的数，表示另一个加数。

返回值：

  * T - 计算所得和。

### operator func -\(T\)
    
    __
    
    operator func -(rhs: T): T
    
功能：算术运算符，计算减法。

参数：

  * rhs: T - 运算符右边的数，表示减数。

返回值：

  * T - 计算所得差。

### operator func \*\(T\)
    
    __
    
    operator func *(rhs: T): T
    
功能：算术运算符，计算乘法。

参数：

  * rhs: T - 运算符右边的数，表示另一个乘数。

返回值：

  * T - 计算所得积。

### operator func /\(T\)
    
    __
    
    operator func /(rhs: T): T
    
功能：算术运算符，计算除法。

参数：

  * rhs: T - 运算符右边的数，表示除数。

返回值：

  * T - 计算所得商。

### operator func -\(\)
    
    __
    
    operator func -(): T
    
功能：算术运算符，计算取负的值。

返回值：

  * T - 取负的值。

### extend Float16 <: Number\<Float16\>
    
    __
    
    extend Float16 <: Number\<Float16\> {}
    
功能：为 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16)>

### extend Float32 <: Number\<Float32\>
    
    __
    
    extend Float32 <: Number\<Float32\> {}
    
功能：为 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)>

### extend Float64 <: Number\<Float64\>
    
    __
    
    extend Float64 <: Number\<Float64\> {}
    
功能：为 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64)>

### extend Int16 <: Number\<Int16\>
    
    __
    
    extend Int16 <: Number\<Int16\> {}
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

### extend Int32 <: Number\<Int32\>
    
    __
    
    extend Int32 <: Number\<Int32\> {}
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

### extend Int64 <: Number\<Int64\>
    
    __
    
    extend Int64 <: Number\<Int64\> {}
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>

### extend Int8 <: Number\<Int8\>
    
    __
    
    extend Int8 <: Number\<Int8\> {}
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

### extend IntNative <: Number\<IntNative\>
    
    __
    
    extend IntNative <: Number\<IntNative\> {}
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

### extend UInt16 <: Number\<UInt16\>
    
    __
    
    extend UInt16 <: Number\<UInt16\> {}
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

### extend UInt32 <: Number\<UInt32\>
    
    __
    
    extend UInt32 <: Number\<UInt32\> {}
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

### extend UInt64 <: Number\<UInt64\>
    
    __
    
    extend UInt64 <: Number\<UInt64\> {}
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

### extend UInt8 <: Number\<UInt8\>
    
    __
    
    extend UInt8 <: Number\<UInt8\> {}
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

### extend UIntNative <: Number\<UIntNative\>
    
    __
    
    extend UIntNative <: Number\<UIntNative\> {}
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 类型扩展 Number\<T\> 接口。

父类型：

  * Number<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>