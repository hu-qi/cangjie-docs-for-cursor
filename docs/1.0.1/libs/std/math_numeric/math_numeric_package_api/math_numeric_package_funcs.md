
# 函数

## func abs\(BigInt\)
    
    __
    
    public func abs(i: BigInt): BigInt
    
功能：求一个 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的绝对值。

参数：

  * i: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算绝对值的 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint)。

返回值：

  * [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 返回入参 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的绝对值。

示例：
    
    __
    
    import std.math.numeric.*
    
    main() {
        let n: BigInt = BigInt(-23)
        let abs = abs(n)
        println(abs)
    }
    
运行结果：
    
    __
    
    23

## func abs\(Decimal\)
    
    __
    
    public func abs(d: Decimal): Decimal
    
功能：求一个 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 的绝对值。

参数：

  * d: [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 需要计算绝对值的 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal)。

返回值：

  * [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 返回入参 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 的绝对值。

示例：
    
    __
    
    import std.math.numeric.*
    
    main() {
        let d: Decimal = Decimal.parse("-1.23")
        let abs = abs(d)
        println(abs)
    }
    
运行结果：
    
    __
    
    1.23

## func countOne\(BigInt\) \(deprecated\)
    
    __
    
    public func countOne(i: BigInt): Int64
    
功能：计算并返回入参 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的二进制补码中 1 的个数。

> **注意：**
> 
> 未来版本即将废弃，使用 countOnes\(BigInt\) 替代。

参数：

  * i: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算二进制补码中 1 的个数的 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint)。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 返回入参 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的二进制补码中 1 的个数。

## func countOnes\(BigInt\)
    
    __
    
    public func countOnes(i: BigInt): Int64
    
功能：计算并返回入参 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的二进制补码中 1 的个数。

参数：

  * i: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算二进制补码中 1 的个数的 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 结构体。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 返回入参 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的二进制补码中 1 的个数。

示例：
    
    __
    
    import std.math.numeric.*
    
    main() {
        let i: BigInt = BigInt(255)
        let countOnes = countOnes(i)
        println(countOnes)
    }
    
运行结果：
    
    __
    
    8

## func gcd\(BigInt, BigInt\)
    
    __
    
    public func gcd(i1: BigInt, i2: BigInt): BigInt
    
功能：求两个 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的最大公约数。总是返回非负数（相当于绝对值的最大公约数）。

参数：

  * i1: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算最大公约数的第一个入参。
  * i2: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算最大公约数的第二个入参。

返回值：

  * [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 返回 `i1` 和 `i2` 的最大公约数，总是返回非负数。

示例：
    
    __
    
    import std.math.numeric.*
    
    main() {
        let i1: BigInt = BigInt(-36)
        let i2: BigInt = BigInt(48)
        let gcd = gcd(i1, i2)
        println(gcd)
    }
    
运行结果：
    
    __
    
    12

## func lcm\(BigInt, BigInt\)
    
    __
    
    public func lcm(i1: BigInt, i2: BigInt): BigInt
    
功能：求两个 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的最小公倍数。除了入参有 0 时返回 0 外，总是返回正数（相当于绝对值的最小公倍数）。

参数：

  * i1: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算最小公倍数的第一个入参。
  * i2: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算最小公倍数的第二个入参。

返回值：

  * [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 返回 `i1` 和 `i2` 的最小公倍数，当入参有 0 时返回 0，其余情况返回正数。

示例：
    
    __
    
    import std.math.numeric.*
    
    main() {
        let i1: BigInt = BigInt(-36)
        let i2: BigInt = BigInt(48)
        let lcm = lcm(i1, i2)
        println(lcm)
    }
    
运行结果：
    
    __
    
    144

## func round\(Decimal, RoundingMode\)
    
    __
    
    public func round(d: Decimal, roundingMode!: RoundingMode = RoundingMode.HalfEven): Decimal
    
功能：计算 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 的舍入值，根据舍入方式向邻近的整数舍入。

参数：

  * d: [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 需要计算舍入值的 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal)。
  * roundingMode\!: [RoundingMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math/math_package_api/math_package_enums.html#enum-roundingmode) \- 舍入规则。

返回值：

  * [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 舍入操作生成的新的 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 对象。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当舍入操作结果标度值溢出时，抛出此异常。

## func sqrt\(BigInt\)
    
    __
    
    public func sqrt(i: BigInt): BigInt
    
功能：求 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的算术平方根，向下取整。

参数：

  * i: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要计算算术平方根的 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint)，入参需要非负。

返回值：

  * [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 返回入参 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) 的算术平方根，向下取整。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果入参为负数，则抛此异常。

示例：
    
    __
    
    import std.math.numeric.*
    
    main() {
        let n: BigInt = BigInt(23)
        let sqrt = sqrt(n)
        println(sqrt)
    }
    
运行结果：
    
    __
    
    4

## func sqrt\(Decimal\)
    
    __
    
    public func sqrt(d: Decimal): Decimal
    
功能：求 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 的算术平方根。结果为无限小数场景时，默认采用 IEEE 754-2019 decimal128 对结果进行舍入。

参数：

  * d: [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 需要计算算术平方根的 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal)，入参需要非负。

返回值：

  * [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 返回入参 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 的算术平方根。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果入参为负数，则抛此异常。
  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当计算平方根操作结果标度值溢出时，抛出此异常。

示例：
    
    __
    
    import std.math.numeric.*
    
    main() {
        let n: Decimal = Decimal.parse("36")
        let sqrt = sqrt(n)
        println(sqrt)
    }
    
运行结果：
    
    __
    
    6

## func trailingZeros\(BigInt\)
    
    __
    
    public func trailingZeros(x: BigInt): Int64
    
功能：求 `BigInt` 的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint) \- 需要求后置 0 的 [BigInt](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-bigint)。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 后置 0 的位数。

示例：
    
    __
    
    import std.math.numeric.{BigInt, trailingZeros}
    
    main() {
        let x: BigInt = BigInt(0xC000_0000)
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }
    
运行结果：
    
    __
    
    30