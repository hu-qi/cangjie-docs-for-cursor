
# 类

## class Random
    
    __
    
    public class Random {
        public init()
        public init(seed: UInt64)
    }
    
功能：提供生成伪随机数的相关功能。

示例:
    
    __
    
    import std.random.*
    main() {
        /* 创建 Random 对象并设置种子来获取随机对象 */
        let m: Random = Random(3)
        let b: Bool = m.nextBool()
        let c: Int8 = m.nextInt8()
        print("b=${b is Bool},")/* 对象也可以是 Bool 类型 */
        println("c=${c is Int8}")
        return 0
    }
    
运行结果：
    
    __
    
    b=true,c=true

### prop seed
    
    __
    
    public prop seed: UInt64
    
功能：获取随机数种子。

类型：[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)

### init\(\)
    
    __
    
    public init()
    
功能：默认无参构造函数创建新的 [Random](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/random/random_package_api/random_package_classes.html#class-random) 对象。

### init\(UInt64\)
    
    __
    
    public init(seed: UInt64)
    
功能：使用随机数种子创建新的 [Random](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/random/random_package_api/random_package_classes.html#class-random) 对象。

参数：

  * seed: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 随机数种子，如果设置相同随机种子，生成的伪随机数列表相同。

### func next\(UInt64\) \(deprecated\)
    
    __
    
    public func next(bits: UInt64): UInt64
    
功能：生成一个用户指定位长的随机整数。

> **注意：**
> 
> 未来版本即将废弃，使用 nextBits 替代。

参数：

  * bits: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 要生成的伪随机数的位数，取值范围 \(0, 64\]。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 用户指定位长的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `bits` 等于 0 ，或大于 64，超过所能截取的 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 长度，则抛出异常。

### func nextBits\(UInt64\)
    
    __
    
    public func nextBits(bits: UInt64): UInt64
    
功能：生成一个指定位长的随机整数。

参数：

  * bits: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 要生成的伪随机数的位数，取值范围 \(0, 64\]。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 生成的用户指定位长的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `bits` 等于 0，或大于 64，超过所能截取的 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 长度，则抛出异常。

### func nextBool\(\)
    
    __
    
    public func nextBool(): Bool
    
功能：获取一个布尔类型的伪随机值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 一个 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Bool = m.nextBool()
        println("n=${n is Bool}")
        return 0
    }
    
运行结果：
    
    __
    
    n=true

### func nextFloat16\(\)
    
    __
    
    public func nextFloat16(): Float16
    
功能：获取一个 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型的伪随机数，其范围为 \[0.0, 1.0\)。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 一个 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Float16 = m.nextFloat16()
        if (n is Float16) {
            println("n is Float16")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Float16

### func nextFloat32\(\)
    
    __
    
    public func nextFloat32(): Float32
    
功能：获取一个 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型的伪随机数，其范围为 \[0.0, 1.0\)。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 一个 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Float32 = m.nextFloat32()
        if (n is Float32) {
            println("n is Float32")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Float32

### func nextFloat64\(\)
    
    __
    
    public func nextFloat64(): Float64
    
功能：获取一个 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的伪随机数，其范围为 \[0.0, 1.0\)。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 一个 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Float64 = m.nextFloat64()
        if (n is Float64) {
            println("n is Float64")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Float64

### func nextGaussianFloat16\(Float16, Float16\)
    
    __
    
    public func nextGaussianFloat16(mean!: Float16 = 0.0, sigma!: Float16 = 1.0): Float16
    
功能：获取一个 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型的符合指定均值与标准差的高斯分布的随机数。

默认获取一个 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型且符合均值为 0.0 标准差为 1.0 的高斯分布的随机数。其中均值是期望值，可解释为位置参数，决定了分布的位置，标准差可解释为尺度参数，决定了分布的幅度。

参数：

  * mean\!: [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 均值，默认值 0.0。
  * sigma\!: [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 标准差，默认值 1.0。

返回值：

  * [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 一个 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型的随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Float16 = m.nextGaussianFloat16(mean: 0.0, sigma: 1.0)
        if (n is Float16) {
            println("n is Float16")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Float16

### func nextGaussianFloat32\(Float32, Float32\)
    
    __
    
    public func nextGaussianFloat32(mean!: Float32 = 0.0, sigma!: Float32 = 1.0): Float32
    
功能：获取一个 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型的符合指定均值与标准差的高斯分布的随机数。

默认获取一个 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型且符合均值为 0.0 标准差为 1.0 的高斯分布的随机数。其中均值是期望值，可解释为位置参数，决定了分布的位置，标准差可解释为尺度参数，决定了分布的幅度。

参数：

  * mean\!: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 均值，默认值 0.0。
  * sigma\!: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 标准差，默认值 1.0。

返回值：

  * [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 一个 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型的随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Float32 = m.nextGaussianFloat32(mean: 0.0, sigma: 1.0)
        if (n is Float32) {
            println("n is Float32")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Float32

### func nextGaussianFloat64\(Float64, Float64\)
    
    __
    
    public func nextGaussianFloat64(mean!: Float64 = 0.0, sigma!: Float64 = 1.0): Float64
    
功能：获取一个 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的符合指定均值与标准差的高斯分布的随机数。

默认获取一个 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型且符合均值为 0.0 标准差为 1.0 的高斯分布的随机数。其中均值是期望值，可解释为位置参数，决定了分布的位置，标准差可解释为尺度参数，决定了分布的幅度。

参数：

  * mean\!: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 均值，默认值 0.0。
  * sigma\!: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 标准差，默认值 1.0。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 一个 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Float64 = m.nextGaussianFloat64(mean: 0.0, sigma: 1.0)
        if (n is Float64) {
            println("n is Float64")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Float64

### func nextInt16\(\)
    
    __
    
    public func nextInt16(): Int16
    
功能：获取一个 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的伪随机数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 一个 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int16 = m.nextInt16()
        if (n is Int16) {
            println("n is Int16")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int16

### func nextInt16\(Int16\)
    
    __
    
    public func nextInt16(upper: Int16): Int16
    
功能：获取一个范围在 \[0, `upper`\) 的 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的伪随机数。

参数：

  * upper: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 表示生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).Max\]。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 一个 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 小于等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int16 = m.nextInt16(5)
        if (n is Int16) {
            println("n is Int16")
        }
        try {
            let p: Int16 = m.nextInt16(-1)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 小于等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int16
    参数异常：upper 小于等于 0

### func nextInt32\(\)
    
    __
    
    public func nextInt32(): Int32
    
功能：获取一个 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的伪随机数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 一个 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int32 = m.nextInt32()
        if (n is Int32) {
            println("n is Int32")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int32

### func nextInt32\(Int32\)
    
    __
    
    public func nextInt32(upper: Int32): Int32
    
功能：获取一个范围在 \[0, `upper`\) 的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的伪随机数。

参数：

  * upper: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 表示生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).Max\]。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 一个 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 小于等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int32 = m.nextInt32(5)
        if (n is Int32) {
            println("n is Int32")
        }
        try {
            let p: Int32 = m.nextInt32(-1)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 小于等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int32
    参数异常：upper 小于等于 0

### func nextInt64\(\)
    
    __
    
    public func nextInt64(): Int64
    
功能：获取一个 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的伪随机数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 一个 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int64 = m.nextInt64()
        if (n is Int64) {
            println("n is Int64")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int64

### func nextInt64\(Int64\)
    
    __
    
    public func nextInt64(upper: Int64): Int64
    
功能：获取一个范围在 \[0, `upper`\) 的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的伪随机数。

参数：

  * upper: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).Max\]。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 一个 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 小于等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int64 = m.nextInt64(5)
        if (n is Int64) {
            println("n is Int64")
        }
        try {
            let p: Int64 = m.nextInt64(-1)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 小于等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int64
    参数异常：upper 小于等于 0

### func nextInt8\(\)
    
    __
    
    public func nextInt8(): Int8
    
功能：获取一个 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的伪随机数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 一个 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int8 = m.nextInt8()
        if (n is Int8) {
            println("n is Int8")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int8

### func nextInt8\(Int8\): Int8
    
    __
    
    public func nextInt8(upper: Int8): Int8
    
功能：获取一个范围在 \[0, `upper`\) 的 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的伪随机数。

参数：

  * upper: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).Max\]。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 一个 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 小于等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: Int8 = m.nextInt8(5)
        if (n is Int8) {
            println("n is Int8")
        }
        try {
            let p: Int8 = m.nextInt8(-1)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 小于等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is Int8
    参数异常：upper 小于等于 0

### func nextUInt16\(\)
    
    __
    
    public func nextUInt16(): UInt16
    
功能：获取一个 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的伪随机数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 一个 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt16 = m.nextUInt16()
        if (n is UInt16) {
            println("n is UInt16")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt16

### func nextUInt16\(UInt16\)
    
    __
    
    public func nextUInt16(upper: UInt16): UInt16
    
功能：获取一个范围在 \[0, `upper`\) 的 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的伪随机数。

参数：

  * upper: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).Max\]。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 一个 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt16 = m.nextUInt16(5)
        if (n is UInt16) {
            println("n is UInt16")
        }
        try {
            let p: UInt16 = m.nextUInt16(0)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt16
    参数异常：upper 等于 0

### func nextUInt32\(\)
    
    __
    
    public func nextUInt32(): UInt32
    
功能：获取一个 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的伪随机数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 一个 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt32 = m.nextUInt32()
        if (n is UInt32) {
            println("n is UInt32")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt32

### func nextUInt32\(UInt32\)
    
    __
    
    public func nextUInt32(upper: UInt32): UInt32
    
功能：获取一个范围在 \[0, `upper`\) 的 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的伪随机数。

参数：

  * upper: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).Max\]。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 一个 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt32 = m.nextUInt32(5)
        if (n is UInt32) {
            println("n is UInt32")
        }
        try {
            let p: UInt32 = m.nextUInt32(0)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt32
    参数异常：upper 等于 0

### func nextUInt64\(\)
    
    __
    
    public func nextUInt64(): UInt64
    
功能：获取一个 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的伪随机数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 一个 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt64 = m.nextUInt64()
        if (n is UInt64) {
            println("n is UInt64")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt64

### func nextUInt64\(UInt64\)
    
    __
    
    public func nextUInt64(upper: UInt64): UInt64
    
功能：获取一个范围在 \[0, `upper`\) 的 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的伪随机数。

参数：

  * upper: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).Max\]。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 一个 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt64 = m.nextUInt64(5)
        if (n is UInt64) {
            println("n is UInt64")
        }
        try {
            let p: UInt64 = m.nextUInt64(0)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt64
    参数异常：upper 等于 0

### func nextUInt8\(\)
    
    __
    
    public func nextUInt8(): UInt8
    
功能：获取一个 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的伪随机数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 一个 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的伪随机数。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt8 = m.nextUInt8()
        if (n is UInt8) {
            println("n is UInt8")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt8

### func nextUInt8\(UInt8\)
    
    __
    
    public func nextUInt8(upper: UInt8): UInt8
    
功能：获取一个范围在 \[0, `upper`\) 的 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的伪随机数。

参数：

  * upper: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 生成的伪随机数范围上界（不包括 `upper`），取值范围 \(0, [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).Max\]。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 一个 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型的伪随机数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 `upper` 等于 0，抛出异常。

示例：
    
    __
    
    import std.random.*
    
    main() {
        let m: Random = Random()
        let n: UInt8 = m.nextUInt8(5)
        if (n is UInt8) {
            println("n is UInt8")
        }
        try {
            let p: UInt8 = m.nextUInt8(0)
            println(p)
        } catch (e: IllegalArgumentException) {
            println("参数异常：upper 等于 0")
        }
        return 0
    }
    
运行结果：
    
    __
    
    n is UInt8
    参数异常：upper 等于 0

### func nextUInt8s\(Array\<UInt8\>\) \(deprecated\)
    
    __
    
    public func nextUInt8s(array: Array\<UInt8\>): Array\<UInt8\>
    
功能：生成随机数替换入参数组中的每个元素。

> **注意：**
> 
> 未来版本即将废弃，使用 nextBytes 替代。

参数：

  * array: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 被替换的数组。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 返回替换后的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)。

### func nextBytes\(Array\<Byte\>\)
    
    __
    
    public func nextBytes(bytes: Array\<Byte\>): Unit
    
功能：生成随机数替换入参数组中的每个元素。

参数：

  * bytes: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 被替换的数组。

### func nextBytes\(Int32\)
    
    __
    
    public func nextBytes(length: Int32): Array\<Byte\>
    
功能：生成指定长度的随机数数组。

参数：

  * length: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 生成的随机数数组长度，`length` 大于 0。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 生成的随机数数组。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数 `length` 小于等于 0 时，抛出异常。