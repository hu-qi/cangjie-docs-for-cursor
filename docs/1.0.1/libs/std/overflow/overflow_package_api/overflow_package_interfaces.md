
# 接口

## interface CarryingOp\<T\>
    
    __
    
    public interface CarryingOp\<T\> {
      func carryingAdd(y: T): (Bool, T)
      func carryingSub(y: T): (Bool, T)
      func carryingMul(y: T): (Bool, T)
      func carryingDiv(y: T): (Bool, T)
      func carryingMod(y: T): (Bool, T)
      func carryingInc(): (Bool, T)
      func carryingDec(): (Bool, T)
      func carryingNeg(): (Bool, T)
      func carryingShl(y: UInt64): (Bool, T)
      func carryingShr(y: UInt64): (Bool, T)
    }
    
功能：提供返回整数运算是否发生了截断以及运算结果的接口。

### func carryingAdd\(T\)
    
    __
    
    func carryingAdd(y: T): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示加法运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

参数：

  * y: T - 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 加法运算是否发生截断以及运算的结果。

### func carryingDec\(\)
    
    __
    
    func carryingDec(): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示自减运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 自减运算是否发生截断以及运算的结果。

### func carryingDiv\(T\)
    
    __
    
    func carryingDiv(y: T): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示除法运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

参数：

  * y: T - 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 除法运算是否发生截断以及运算的结果。

### func carryingInc\(\)
    
    __
    
    func carryingInc(): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示自增运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 自增运算是否发生截断以及运算的结果。

### func carryingMod\(T\)
    
    __
    
    func carryingMod(y: T): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示取余运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

参数：

  * y: T - 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 取余运算是否发生截断以及运算的结果。

### func carryingMul\(T\)
    
    __
    
    func carryingMul(y: T): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示乘法运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

参数：

  * y: T - 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 乘法运算是否发生截断以及运算的结果。

### func carryingNeg\(\)
    
    __
    
    func carryingNeg(): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示负号运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 负号运算是否发生截断以及运算的结果。

### func carryingShl\(UInt64\)
    
    __
    
    func carryingShl(y: UInt64): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示左移运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 左移运算是否发生截断以及运算的结果。

### func carryingShr\(UInt64\)
    
    __
    
    func carryingShr(y: UInt64): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示右移运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 右移运算是否发生截断以及运算的结果。

### func carryingSub\(T\)
    
    __
    
    func carryingSub(y: T): (Bool, T)
    
功能：返回一个元组，元组的第一个元素表示减法运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

参数：

  * y: T - 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), T\) - 减法运算是否发生截断以及运算的结果。

### extend Int16 <: CarryingOp\<Int16\>
    
    __
    
    extend Int16 <: CarryingOp\<Int16\>
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 实现 [CarryingOp](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-carryingopt) 接口。

父类型：

  * [CarryingOp](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-carryingopt)<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

#### func carryingAdd\(Int16\)
    
    __
    
    public func carryingAdd(y: Int16): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(Int16\)
    
    __
    
    public func carryingDiv(y: Int16): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(Int16\)
    
    __
    
    public func carryingMod(y: Int16): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(Int16\)
    
    __
    
    public func carryingMul(y: Int16): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(Int16\)
    
    __
    
    public func carryingSub(y: Int16): (Bool, Int16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend Int32 <: CarryingOp\<Int32\>
    
    __
    
    extend Int32 <: CarryingOp\<Int32\>
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

#### func carryingAdd\(Int32\)
    
    __
    
    public func carryingAdd(y: Int32): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(Int32\)
    
    __
    
    public func carryingDiv(y: Int32): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(Int32\)
    
    __
    
    public func carryingMod(y: Int32): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(Int32\)
    
    __
    
    public func carryingMul(y: Int32): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(Int32\)
    
    __
    
    public func carryingSub(y: Int32): (Bool, Int32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend Int64 <: CarryingOp\<Int64\> & CarryingPow
    
    __
    
    extend Int64 <: CarryingOp\<Int64\> & CarryingPow
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 实现 CarryingOp 接口和 CarryingPow 接口。

父类型：

  * CarryingOp<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>
  * CarryingPow

#### func carryingAdd\(Int64\)
    
    __
    
    public func carryingAdd(y: Int64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(Int64\)
    
    __
    
    public func carryingDiv(y: Int64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(Int64\)
    
    __
    
    public func carryingMod(y: Int64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(Int64\)
    
    __
    
    public func carryingMul(y: Int64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingPow\(UInt64\)
    
    __
    
    public func carryingPow(y: UInt64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的幂运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(Int64\)
    
    __
    
    public func carryingSub(y: Int64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend Int8 <: CarryingOp\<Int8\>
    
    __
    
    extend Int8 <: CarryingOp\<Int8\>
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

#### func carryingAdd\(Int8\)
    
    __
    
    public func carryingAdd(y: Int8): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(Int8\)
    
    __
    
    public func carryingDiv(y: Int8): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(Int8\)
    
    __
    
    public func carryingMod(y: Int8): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(Int8\)
    
    __
    
    public func carryingMul(y: Int8): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(Int8\)
    
    __
    
    public func carryingSub(y: Int8):(Bool, Int8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend IntNative <: CarryingOp\<IntNative\>
    
    __
    
    extend IntNative <: CarryingOp\<IntNative\>
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

#### func carryingAdd\(IntNative\)
    
    __
    
    public func carryingAdd(y: IntNative): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(IntNative\)
    
    __
    
    public func carryingDiv(y: IntNative): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(IntNative\)
    
    __
    
    public func carryingMod(y: IntNative): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(IntNative\)
    
    __
    
    public func carryingMul(y: IntNative): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(IntNative\)
    
    __
    
    public func carryingSub(y: IntNative): (Bool, IntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend UInt16 <: CarryingOp\<UInt16\>
    
    __
    
    extend UInt16 <: CarryingOp\<UInt16\>
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

#### func carryingAdd\(UInt16\)
    
    __
    
    public func carryingAdd(y: UInt16): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(UInt16\)
    
    __
    
    public func carryingDiv(y: UInt16): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(UInt16\)
    
    __
    
    public func carryingMod(y: UInt16): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(UInt16\)
    
    __
    
    public func carryingMul(y: UInt16): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(UInt16\)
    
    __
    
    public func carryingSub(y: UInt16): (Bool, UInt16)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend UInt32 <: CarryingOp\<UInt32\>
    
    __
    
    extend UInt32 <: CarryingOp\<UInt32\>
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

#### func carryingAdd\(UInt32\)
    
    __
    
    public func carryingAdd(y: UInt32): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(UInt32\)
    
    __
    
    public func carryingDiv(y: UInt32): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(UInt32\)
    
    __
    
    public func carryingMod(y: UInt32): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(UInt32\)
    
    __
    
    public func carryingMul(y: UInt32): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(UInt32\)
    
    __
    
    public func carryingSub(y: UInt32): (Bool, UInt32)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend UInt64 <: CarryingOp\<UInt64\>
    
    __
    
    extend UInt64 <: CarryingOp\<UInt64\>
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

#### func carryingAdd\(UInt64\)
    
    __
    
    public func carryingAdd(y: UInt64): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(UInt64\)
    
    __
    
    public func carryingDiv(y: UInt64): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(UInt64\)
    
    __
    
    public func carryingMod(y: UInt64): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(UInt64\)
    
    __
    
    public func carryingMul(y: UInt64): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(UInt64\)
    
    __
    
    public func carryingSub(y: UInt64): (Bool, UInt64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend UInt8 <: CarryingOp\<UInt8\>
    
    __
    
    extend UInt8 <: CarryingOp\<UInt8\>
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

#### func carryingAdd\(UInt8\)
    
    __
    
    public func carryingAdd(y: UInt8): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(UInt8\)
    
    __
    
    public func carryingDiv(y: UInt8): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(UInt8\)
    
    __
    
    public func carryingMod(y: UInt8): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(UInt8\)
    
    __
    
    public func carryingMul(y: UInt8): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(UInt8\)
    
    __
    
    public func carryingSub(y: UInt8): (Bool, UInt8)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

### extend UIntNative <: CarryingOp\<UIntNative\>
    
    __
    
    extend UIntNative <: CarryingOp\<UIntNative\>
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 实现 CarryingOp 接口。

父类型：

  * CarryingOp<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>

#### func carryingAdd\(UIntNative\)
    
    __
    
    public func carryingAdd(y: UIntNative): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的加法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDec\(\)
    
    __
    
    public func carryingDec(): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自减运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingDiv\(UIntNative\)
    
    __
    
    public func carryingDiv(y: UIntNative): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的除法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingInc\(\)
    
    __
    
    public func carryingInc(): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的自增运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMod\(UIntNative\)
    
    __
    
    public func carryingMod(y: UIntNative): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的取余运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingMul\(UIntNative\)
    
    __
    
    public func carryingMul(y: UIntNative): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的乘法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingNeg\(\)
    
    __
    
    public func carryingNeg(): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的负号运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShl\(UInt64\)
    
    __
    
    public func carryingShl(y: UInt64): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的左移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingShr\(UInt64\)
    
    __
    
    public func carryingShr(y: UInt64): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的右移运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

#### func carryingSub\(UIntNative\)
    
    __
    
    public func carryingSub(y: UIntNative): (Bool, UIntNative)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的减法运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

## interface CarryingPow
    
    __
    
    public interface CarryingPow {
      func carryingPow(y: UInt64): (Bool, Int64)
    }
    
功能：提供使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的幂运算接口。

### func carryingPow\(UInt64\)
    
    __
    
    func carryingPow(y: UInt64): (Bool, Int64)
    
功能：使用 [wrapping](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces.html#interface-wrappingopt) 策略的幂运算。

当运算出现溢出时，返回 `true` 和运算结果，否则返回 `false` 和运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * \([Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 返回一个元组，元组的第一个元素表示运算是否发生了截断，发生截断时为 `true`，元组的第二个元素是运算的结果。

## interface CheckedOp\<T\>
    
    __
    
    public interface CheckedOp\<T\> {
        func checkedAdd(y: T): ?T
        func checkedDec(): ?T
        func checkedDiv(y: T): ?T
        func checkedInc(): ?T
        func checkedMod(y: T): ?T
        func checkedMul(y: T): ?T
        func checkedNeg(): ?T
        func checkedShl(y: UInt64): ?T
        func checkedShr(y: UInt64): ?T
        func checkedSub(y: T): ?T
    }
    
功能：当整数运算出现溢出，返回 `None`。

### func checkedAdd\(T\)
    
    __
    
    func checkedAdd(y: T): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

参数：

  * y: T - 加数。

返回值：

  * ?T - 加法运算结果。

### func checkedDec\(\)
    
    __
    
    func checkedDec(): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

返回值：

  * ?T - 自减运算结果。

### func checkedDiv\(T\)
    
    __
    
    func checkedDiv(y: T): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * ?T - 除法运算结果。

### func checkedInc\(\)
    
    __
    
    func checkedInc(): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

返回值：

  * ?T - 自增运算结果。

### func checkedMod\(T\)
    
    __
    
    func checkedMod(y: T): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * ?T - 取余运算结果。

### func checkedMul\(T\)
    
    __
    
    func checkedMul(y: T): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

参数：

  * y: T - 乘数。

返回值：

  * ?T - 乘法运算结果。

### func checkedNeg\(\)
    
    __
    
    func checkedNeg(): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

返回值：

  * ?T - 负号运算结果。

### func checkedShl\(UInt64\)
    
    __
    
    func checkedShl(y: UInt64): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 `?T.None`，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?T - 左移运算结果。

### func checkedShr\(UInt64\)
    
    __
    
    func checkedShr(y: UInt64): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 `?T.None`，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?T - 右移运算结果。

### func checkedSub\(T\)
    
    __
    
    func checkedSub(y: T): ?T
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 `?T.None`，否则返回运算结果。

参数：

  * y: T - 减数。

返回值：

  * ?T - 减法运算结果。

### extend Int16 <: CheckedOp\<Int16\>
    
    __
    
    extend Int16 <: CheckedOp\<Int16\>
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

#### func checkedAdd\(Int16\)
    
    __
    
    public func checkedAdd(y: Int16): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加数。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自减运算结果。

#### func checkedDiv\(Int16\)
    
    __
    
    public func checkedDiv(y: Int16): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自增运算结果。

#### func checkedMod\(Int16\)
    
    __
    
    public func checkedMod(y: Int16): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 取余运算结果。

#### func checkedMul\(Int16\)
    
    __
    
    public func checkedMul(y: Int16): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘数。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 右移运算结果。

#### func checkedSub\(Int16\)
    
    __
    
    public func checkedSub(y: Int16): ?Int16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16).None，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减数。

返回值：

  * ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减法运算结果。

### extend Int32 <: CheckedOp\<Int32\>
    
    __
    
    extend Int32 <: CheckedOp\<Int32\>
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

#### func checkedAdd\(Int32\)
    
    __
    
    public func checkedAdd(y: Int32): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加数。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自减运算结果。

#### func checkedDiv\(Int32\)
    
    __
    
    public func checkedDiv(y: Int32): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自增运算结果。

#### func checkedMod\(Int32\)
    
    __
    
    public func checkedMod(y: Int32): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 取余运算结果。

#### func checkedMul\(Int32\)
    
    __
    
    public func checkedMul(y: Int32): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘数。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 右移运算结果。

#### func checkedSub\(Int32\)
    
    __
    
    public func checkedSub(y: Int32): ?Int32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32).None，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减数。

返回值：

  * ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减法运算结果。

### extend Int64 <: CheckedOp\<Int64\> & CheckedPow
    
    __
    
    extend Int64 <: CheckedOp\<Int64\> & CheckedPow
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 实现 CheckedOp 和 CheckedPow 接口。

父类型：

  * CheckedOp<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>
  * CheckedPow

#### func checkedAdd\(Int64\)
    
    __
    
    public func checkedAdd(y: Int64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自减运算结果。

#### func checkedDiv\(Int64\)
    
    __
    
    public func checkedDiv(y: Int64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自增运算结果。

#### func checkedMod\(Int64\)
    
    __
    
    public func checkedMod(y: Int64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 取余运算结果。

#### func checkedMul\(Int64\)
    
    __
    
    public func checkedMul(y: Int64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 负号运算结果。

#### func checkedPow\(UInt64\)
    
    __
    
    public func checkedPow(y: UInt64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的幂运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 右移运算结果。

#### func checkedSub\(Int64\)
    
    __
    
    public func checkedSub(y: Int64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减法运算结果。

### extend Int8 <: CheckedOp\<Int8\>
    
    __
    
    extend Int8 <: CheckedOp\<Int8\>
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

#### func checkedAdd\(Int8\)
    
    __
    
    public func checkedAdd(y: Int8): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加数。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自减运算结果。

#### func checkedDiv\(Int8\)
    
    __
    
    public func checkedDiv(y: Int8): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自增运算结果。

#### func checkedMod\(Int8\)
    
    __
    
    public func checkedMod(y: Int8): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 取余运算结果。

#### func checkedMul\(Int8\)
    
    __
    
    public func checkedMul(y: Int8): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘数。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 右移运算结果。

#### func checkedSub\(Int8\)
    
    __
    
    public func checkedSub(y: Int8): ?Int8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8).None，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减数。

返回值：

  * ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减法运算结果。

### extend IntNative <: CheckedOp\<IntNative\>
    
    __
    
    extend IntNative <: CheckedOp\<IntNative\>
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

#### func checkedAdd\(IntNative\)
    
    __
    
    public func checkedAdd(y: IntNative): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加数。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自减运算结果。

#### func checkedDiv\(IntNative\)
    
    __
    
    public func checkedDiv(y: IntNative): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自增运算结果。

#### func checkedMod\(IntNative\)
    
    __
    
    public func checkedMod(y: IntNative): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 取余运算结果。

#### func checkedMul\(IntNative\)
    
    __
    
    public func checkedMul(y: IntNative): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘数。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 右移运算结果。

#### func checkedSub\(IntNative\)
    
    __
    
    public func checkedSub(y: IntNative): ?IntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative).None，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减数。

返回值：

  * ?[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减法运算结果。

### extend UInt16 <: CheckedOp\<UInt16\>
    
    __
    
    extend UInt16 <: CheckedOp\<UInt16\>
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

#### func checkedAdd\(UInt16\)
    
    __
    
    public func checkedAdd(y: UInt16): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加数。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自减运算结果。

#### func checkedDiv\(UInt16\)
    
    __
    
    public func checkedDiv(y: UInt16): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自增运算结果。

#### func checkedMod\(UInt16\)
    
    __
    
    public func checkedMod(y: UInt16): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 取余运算结果。

#### func checkedMul\(UInt16\)
    
    __
    
    public func checkedMul(y: UInt16): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘数。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 右移运算结果。

#### func checkedSub\(UInt16\)
    
    __
    
    public func checkedSub(y: UInt16): ?UInt16
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16).None，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减数。

返回值：

  * ?[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减法运算结果。

### extend UInt32 <: CheckedOp\<UInt32\>
    
    __
    
    extend UInt32 <: CheckedOp\<UInt32\>
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

#### func checkedAdd\(UInt32\)
    
    __
    
    public func checkedAdd(y: UInt32): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加数。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自减运算结果。

#### func checkedDiv\(UInt32\)
    
    __
    
    public func checkedDiv(y: UInt32): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自增运算结果。

#### func checkedMod\(UInt32\)
    
    __
    
    public func checkedMod(y: UInt32): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 取余运算结果。

#### func checkedMul\(UInt32\)
    
    __
    
    public func checkedMul(y: UInt32): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘数。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 右移运算结果。

#### func checkedSub\(UInt32\)
    
    __
    
    public func checkedSub(y: UInt32): ?UInt32
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32).None，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减数。

返回值：

  * ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减法运算结果。

### extend UInt64 <: CheckedOp\<UInt64\>
    
    __
    
    extend UInt64 <: CheckedOp\<UInt64\>
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

#### func checkedAdd\(UInt64\)
    
    __
    
    public func checkedAdd(y: UInt64): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加数。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自减运算结果。

#### func checkedDiv\(UInt64\)
    
    __
    
    public func checkedDiv(y: UInt64): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自增运算结果。

#### func checkedMod\(UInt64\)
    
    __
    
    public func checkedMod(y: UInt64): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 取余运算结果。

#### func checkedMul\(UInt64\)
    
    __
    
    public func checkedMul(y: UInt64): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘数。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 右移运算结果。

#### func checkedSub\(UInt64\)
    
    __
    
    public func checkedSub(y: UInt64): ?UInt64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减数。

返回值：

  * ?[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减法运算结果。

### extend UInt8 <: CheckedOp\<UInt8\>
    
    __
    
    extend UInt8 <: CheckedOp\<UInt8\>
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

#### func checkedAdd\(UInt8\)
    
    __
    
    public func checkedAdd(y: UInt8): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加数。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自减运算结果。

#### func checkedDiv\(UInt8\)
    
    __
    
    public func checkedDiv(y: UInt8): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自增运算结果。

#### func checkedMod\(UInt8\)
    
    __
    
    public func checkedMod(y: UInt8): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 取余运算结果。

#### func checkedMul\(UInt8\)
    
    __
    
    public func checkedMul(y: UInt8): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘数。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 右移运算结果。

#### func checkedSub\(UInt8\)
    
    __
    
    public func checkedSub(y: UInt8): ?UInt8
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8).None，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减数。

返回值：

  * ?[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减法运算结果。

### extend UIntNative <: CheckedOp\<UIntNative\>
    
    __
    
    extend UIntNative <: CheckedOp\<UIntNative\>
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 实现 CheckedOp 接口。

父类型：

  * CheckedOp<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>

#### func checkedAdd\(UIntNative\)
    
    __
    
    public func checkedAdd(y: UIntNative): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的加法运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加数。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加法运算结果。

#### func checkedDec\(\)
    
    __
    
    public func checkedDec(): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自减运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自减运算结果。

#### func checkedDiv\(UIntNative\)
    
    __
    
    public func checkedDiv(y: UIntNative): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的除法运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除法运算结果。

#### func checkedInc\(\)
    
    __
    
    public func checkedInc(): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的自增运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自增运算结果。

#### func checkedMod\(UIntNative\)
    
    __
    
    public func checkedMod(y: UIntNative): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的取余运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 取余运算结果。

#### func checkedMul\(UIntNative\)
    
    __
    
    public func checkedMul(y: UIntNative): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的乘法运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘数。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘法运算结果。

#### func checkedNeg\(\)
    
    __
    
    public func checkedNeg(): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的负号运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 负号运算结果。

#### func checkedShl\(UInt64\)
    
    __
    
    public func checkedShl(y: UInt64): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的左移运算。

当移位位数大于等于操作数位数时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 左移运算结果。

#### func checkedShr\(UInt64\)
    
    __
    
    public func checkedShr(y: UInt64): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的右移运算。

当移位位数大于等于操作数位数时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 右移运算结果。

#### func checkedSub\(UIntNative\)
    
    __
    
    public func checkedSub(y: UIntNative): ?UIntNative
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的减法运算。

当运算出现溢出时，返回 ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative).None，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减数。

返回值：

  * ?[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减法运算结果。

## interface CheckedPow
    
    __
    
    public interface CheckedPow {
        func checkedPow(y: UInt64): ?Int64
    }
    
功能：提供返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的幂运算接口。

### func checkedPow\(UInt64\)
    
    __
    
    func checkedPow(y: UInt64): ?Int64
    
功能：使用返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 策略的幂运算。

当运算出现溢出时，返回 ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).None，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。

## interface SaturatingOp\<T\>
    
    __
    
    public interface SaturatingOp\<T\> {
        func saturatingAdd(y: T): T
        func saturatingDec(): T
        func saturatingDiv(y: T): T
        func saturatingInc(): T
        func saturatingMod(y: T): T
        func saturatingMul(y: T): T
        func saturatingNeg(): T
        func saturatingShl(y: UInt64): T
        func saturatingShr(y: UInt64): T
        func saturatingSub(y: T): T
    }
    
功能：当整数运算出现溢出，饱和处理。

### func saturatingAdd\(T\)
    
    __
    
    func saturatingAdd(y: T): T
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: T - 加数。

返回值：

  * T - 加法运算结果。

### func saturatingDec\(\)
    
    __
    
    func saturatingDec(): T
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * T - 自减运算结果。

### func saturatingDiv\(T\)
    
    __
    
    func saturatingDiv(y: T): T
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * T - 除法运算结果。

### func saturatingInc\(\)
    
    __
    
    func saturatingInc(): T
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * T - 自增运算结果。

### func saturatingMod\(T\)
    
    __
    
    func saturatingMod(y: T): T
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * T - 取余运算结果。

### func saturatingMul\(T\)
    
    __
    
    func saturatingMul(y: T): T
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: T - 乘数。

返回值：

  * T - 乘法运算结果。

### func saturatingNeg\(\)
    
    __
    
    func saturatingNeg(): T
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * T - 负号运算结果。

### func saturatingShl\(UInt64\)
    
    __
    
    func saturatingShl(y: UInt64): T
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * T - 左移运算结果。

### func saturatingShr\(UInt64\)
    
    __
    
    func saturatingShr(y: UInt64): T
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * T - 右移运算结果。

### func saturatingSub\(T\)
    
    __
    
    func saturatingSub(y: T): T
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: T - 减数。

返回值：

  * T - 减法运算结果。

### extend Int16 <: SaturatingOp\<Int16\>
    
    __
    
    extend Int16 <: SaturatingOp\<Int16\>
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

#### func saturatingAdd\(Int16\)
    
    __
    
    public func saturatingAdd(y: Int16): Int16
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): Int16
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自减运算结果。

#### func saturatingDiv\(Int16\)
    
    __
    
    public func saturatingDiv(y: Int16): Int16
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): Int16
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自增运算结果。

#### func saturatingMod\(Int16\)
    
    __
    
    public func saturatingMod(y: Int16): Int16
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 取余运算结果。

#### func saturatingMul\(Int16\)
    
    __
    
    public func saturatingMul(y: Int16): Int16
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): Int16
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): Int16
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): Int16
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 右移运算结果。

#### func saturatingSub\(Int16\)
    
    __
    
    public func saturatingSub(y: Int16): Int16
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减法运算结果。

### extend Int32 <: SaturatingOp\<Int32\>
    
    __
    
    extend Int32 <: SaturatingOp\<Int32\>
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

#### func saturatingAdd\(Int32\)
    
    __
    
    public func saturatingAdd(y: Int32): Int32
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): Int32
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自减运算结果。

#### func saturatingDiv\(Int32\)
    
    __
    
    public func saturatingDiv(y: Int32): Int32
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): Int32
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自增运算结果。

#### func saturatingMod\(Int32\)
    
    __
    
    public func saturatingMod(y: Int32): Int32
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 取余运算结果。

#### func saturatingMul\(Int32\)
    
    __
    
    public func saturatingMul(y: Int32): Int32
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): Int32
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): Int32
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): Int32
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 右移运算结果。

#### func saturatingSub\(Int32\)
    
    __
    
    public func saturatingSub(y: Int32): Int32
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减法运算结果。

### extend Int64 <: SaturatingOp\<Int64\> & SaturatingPow
    
    __
    
    extend Int64 <: SaturatingOp\<Int64\> & SaturatingPow
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 实现 SaturatingOp 和 SaturatingPow 接口。

父类型：

  * SaturatingOp<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>
  * SaturatingPow

#### func saturatingAdd\(Int64\)
    
    __
    
    public func saturatingAdd(y: Int64): Int64
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): Int64
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自减运算结果。

#### func saturatingDiv\(Int64\)
    
    __
    
    public func saturatingDiv(y: Int64): Int64
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): Int64
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自增运算结果。

#### func saturatingMod\(Int64\)
    
    __
    
    public func saturatingMod(y: Int64): Int64
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 取余运算结果。

#### func saturatingMul\(Int64\)
    
    __
    
    public func saturatingMul(y: Int64): Int64
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): Int64
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 负号运算结果。

#### func saturatingPow\(UInt64\)
    
    __
    
    public func saturatingPow(y: UInt64): Int64
    
功能：使用饱和策略的幂运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): Int64
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): Int64
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 右移运算结果。

#### func saturatingSub\(Int64\)
    
    __
    
    public func saturatingSub(y: Int64): Int64
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减法运算结果。

### extend Int8 <: SaturatingOp\<Int8\>
    
    __
    
    extend Int8 <: SaturatingOp\<Int8\>
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

#### func saturatingAdd\(Int8\)
    
    __
    
    public func saturatingAdd(y: Int8): Int8
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): Int8
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自减运算结果。

#### func saturatingDiv\(Int8\)
    
    __
    
    public func saturatingDiv(y: Int8): Int8
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): Int8
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自增运算结果。

#### func saturatingMod\(Int8\)
    
    __
    
    public func saturatingMod(y: Int8): Int8
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 取余运算结果。

#### func saturatingMul\(Int8\)
    
    __
    
    public func saturatingMul(y: Int8): Int8
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): Int8
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): Int8
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): Int8
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 右移运算结果。

#### func saturatingSub\(Int8\)
    
    __
    
    public func saturatingSub(y: Int8): Int8
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减法运算结果。

### extend IntNative <: SaturatingOp\<IntNative\>
    
    __
    
    extend IntNative <: SaturatingOp\<IntNative\>
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

#### func saturatingAdd\(IntNative\)
    
    __
    
    public func saturatingAdd(y: IntNative): IntNative
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): IntNative
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自减运算结果。

#### func saturatingDiv\(IntNative\)
    
    __
    
    public func saturatingDiv(y: IntNative): IntNative
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): IntNative
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自增运算结果。

#### func saturatingMod\(IntNative\)
    
    __
    
    public func saturatingMod(y: IntNative): IntNative
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 取余运算结果。

#### func saturatingMul\(IntNative\)
    
    __
    
    public func saturatingMul(y: IntNative): IntNative
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): IntNative
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): IntNative
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): IntNative
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 右移运算结果。

#### func saturatingSub\(IntNative\)
    
    __
    
    public func saturatingSub(y: IntNative): IntNative
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减法运算结果。

### extend UInt16 <: SaturatingOp\<UInt16\>
    
    __
    
    extend UInt16 <: SaturatingOp\<UInt16\>
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

#### func saturatingAdd\(UInt16\)
    
    __
    
    public func saturatingAdd(y: UInt16): UInt16
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): UInt16
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自减运算结果。

#### func saturatingDiv\(UInt16\)
    
    __
    
    public func saturatingDiv(y: UInt16): UInt16
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): UInt16
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自增运算结果。

#### func saturatingMod\(UInt16\)
    
    __
    
    public func saturatingMod(y: UInt16): UInt16
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 取余运算结果。

#### func saturatingMul\(UInt16\)
    
    __
    
    public func saturatingMul(y: UInt16): UInt16
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): UInt16
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): UInt16
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): UInt16
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 右移运算结果。

#### func saturatingSub\(UInt16\)
    
    __
    
    public func saturatingSub(y: UInt16): UInt16
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减法运算结果。

### extend UInt32 <: SaturatingOp\<UInt32\>
    
    __
    
    extend UInt32 <: SaturatingOp\<UInt32\>
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

#### func saturatingAdd\(UInt32\)
    
    __
    
    public func saturatingAdd(y: UInt32): UInt32
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): UInt32
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自减运算结果。

#### func saturatingDiv\(UInt32\)
    
    __
    
    public func saturatingDiv(y: UInt32): UInt32
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): UInt32
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自增运算结果。

#### func saturatingMod\(UInt32\)
    
    __
    
    public func saturatingMod(y: UInt32): UInt32
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 取余运算结果。

#### func saturatingMul\(UInt32\)
    
    __
    
    public func saturatingMul(y: UInt32): UInt32
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): UInt32
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): UInt32
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): UInt32
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 右移运算结果。

#### func saturatingSub\(UInt32\)
    
    __
    
    public func saturatingSub(y: UInt32): UInt32
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减法运算结果。

### extend UInt64 <: SaturatingOp\<UInt64\>
    
    __
    
    extend UInt64 <: SaturatingOp\<UInt64\>
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

#### func saturatingAdd\(UInt64\)
    
    __
    
    public func saturatingAdd(y: UInt64): UInt64
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): UInt64
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自减运算结果。

#### func saturatingDiv\(UInt64\)
    
    __
    
    public func saturatingDiv(y: UInt64): UInt64
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): UInt64
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自增运算结果。

#### func saturatingMod\(UInt64\)
    
    __
    
    public func saturatingMod(y: UInt64): UInt64
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 取余运算结果。

#### func saturatingMul\(UInt64\)
    
    __
    
    public func saturatingMul(y: UInt64): UInt64
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): UInt64
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): UInt64
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): UInt64
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 右移运算结果。

#### func saturatingSub\(UInt64\)
    
    __
    
    public func saturatingSub(y: UInt64): UInt64
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减法运算结果。

### extend UInt8 <: SaturatingOp\<UInt8\>
    
    __
    
    extend UInt8 <: SaturatingOp\<UInt8\>
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

#### func saturatingAdd\(UInt8\)
    
    __
    
    public func saturatingAdd(y: UInt8): UInt8
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): UInt8
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自减运算结果。

#### func saturatingDiv\(UInt8\)
    
    __
    
    public func saturatingDiv(y: UInt8): UInt8
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): UInt8
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自增运算结果。

#### func saturatingMod\(UInt8\)
    
    __
    
    public func saturatingMod(y: UInt8): UInt8
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 取余运算结果。

#### func saturatingMul\(UInt8\)
    
    __
    
    public func saturatingMul(y: UInt8): UInt8
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): UInt8
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): UInt8
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): UInt8
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 右移运算结果。

#### func saturatingSub\(UInt8\)
    
    __
    
    public func saturatingSub(y: UInt8): UInt8
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减法运算结果。

### extend UIntNative <: SaturatingOp\<UIntNative\>
    
    __
    
    extend UIntNative <: SaturatingOp\<UIntNative\>
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 实现 SaturatingOp 接口。

父类型：

  * SaturatingOp<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>

#### func saturatingAdd\(UIntNative\)
    
    __
    
    public func saturatingAdd(y: UIntNative): UIntNative
    
功能：使用饱和策略的加法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加法运算结果。

#### func saturatingDec\(\)
    
    __
    
    public func saturatingDec(): UIntNative
    
功能：使用饱和策略的自减运算。

当运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自减运算结果。

#### func saturatingDiv\(UIntNative\)
    
    __
    
    public func saturatingDiv(y: UIntNative): UIntNative
    
功能：使用饱和策略的除法运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除法运算结果。

#### func saturatingInc\(\)
    
    __
    
    public func saturatingInc(): UIntNative
    
功能：使用饱和策略的自增运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自增运算结果。

#### func saturatingMod\(UIntNative\)
    
    __
    
    public func saturatingMod(y: UIntNative): UIntNative
    
功能：使用饱和策略的取余运算。

当运算出现上溢时，返回操作数类型的最大值，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 取余运算结果。

#### func saturatingMul\(UIntNative\)
    
    __
    
    public func saturatingMul(y: UIntNative): UIntNative
    
功能：使用饱和策略的乘法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘法运算结果。

#### func saturatingNeg\(\)
    
    __
    
    public func saturatingNeg(): UIntNative
    
功能：使用饱和策略的负号运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 负号运算结果。

#### func saturatingShl\(UInt64\)
    
    __
    
    public func saturatingShl(y: UInt64): UIntNative
    
功能：使用饱和策略的左移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 左移运算结果。

#### func saturatingShr\(UInt64\)
    
    __
    
    public func saturatingShr(y: UInt64): UIntNative
    
功能：使用饱和策略的右移运算。

当移位位数大于等于操作数位数时，将移位位数置为操作数位数 - 1，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 右移运算结果。

#### func saturatingSub\(UIntNative\)
    
    __
    
    public func saturatingSub(y: UIntNative): UIntNative
    
功能：使用饱和策略的减法运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减法运算结果。

## interface SaturatingPow
    
    __
    
    public interface SaturatingPow {
        public func saturatingPow(y: UInt64): Int64
    }
    
功能：提供饱和策略的幂运算接口。

### func saturatingPow\(UInt64\)
    
    __
    
    public func saturatingPow(y: UInt64): Int64
    
功能：使用饱和策略的幂运算。

当运算出现上溢时，返回操作数类型的最大值，运算出现下溢时，返回操作数类型的最小值，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。

## interface ThrowingOp\<T\>
    
    __
    
    public interface ThrowingOp\<T\> {
        func throwingAdd(y: T): T
        func throwingSub(y: T): T
        func throwingMul(y: T): T
        func throwingDiv(y: T): T
        func throwingMod(y: T): T
        func throwingInc(): T
        func throwingDec(): T
        func throwingNeg(): T
        func throwingShl(y: UInt64): T
        func throwingShr(y: UInt64): T
    }
    
功能：当整数运算出现溢出，抛出异常。

### func throwingAdd\(T\)
    
    __
    
    func throwingAdd(y: T): T
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: T - 加数。

返回值：

  * T - 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

### func throwingDec\(\)
    
    __
    
    func throwingDec(): T
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * T - 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

### func throwingDiv\(T\)
    
    __
    
    func throwingDiv(y: T): T
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * T - 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

### func throwingInc\(\)
    
    __
    
    func throwingInc(): T
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * T - 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

### func throwingMod\(T\)
    
    __
    
    func throwingMod(y: T): T
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * T - 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

### func throwingMul\(T\)
    
    __
    
    func throwingMul(y: T): T
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: T - 乘数。

返回值：

  * T - 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

### func throwingNeg\(\)
    
    __
    
    func throwingNeg(): T
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * T - 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

### func throwingShl\(UInt64\)
    
    __
    
    func throwingShl(y: UInt64): T
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * T - 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

### func throwingShr\(UInt64\)
    
    __
    
    func throwingShr(y: UInt64): T
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * T - 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

### func throwingSub\(T\)
    
    __
    
    func throwingSub(y: T): T
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: T - 减数。

返回值：

  * T - 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend Int16 <: ThrowingOp\<Int16\>
    
    __
    
    extend Int16 <: ThrowingOp\<Int16\>
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

#### func throwingAdd\(Int16\)
    
    __
    
    public func throwingAdd(y: Int16): Int16
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): Int16
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(Int16\)
    
    __
    
    public func throwingDiv(y: Int16): Int16
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): Int16
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(Int16\)
    
    __
    
    public func throwingMod(y: Int16): Int16
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(Int16\)
    
    __
    
    public func throwingMul(y: Int16): Int16
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): Int16
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): Int16
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): Int16
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(Int16\)
    
    __
    
    public func throwingSub(y: Int16): Int16
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend Int32 <: ThrowingOp\<Int32\>
    
    __
    
    extend Int32 <: ThrowingOp\<Int32\>
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

#### func throwingAdd\(Int32\)
    
    __
    
    public func throwingAdd(y: Int32): Int32
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): Int32
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(Int32\)
    
    __
    
    public func throwingDiv(y: Int32): Int32
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): Int32
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(Int32\)
    
    __
    
    public func throwingMod(y: Int32): Int32
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(Int32\)
    
    __
    
    public func throwingMul(y: Int32): Int32
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): Int32
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): Int32
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): Int32
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(Int32\)
    
    __
    
    public func throwingSub(y: Int32): Int32
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend Int64 <: ThrowingOp\<Int64\> & ThrowingPow
    
    __
    
    extend Int64 <: ThrowingOp\<Int64\> & ThrowingPow
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 实现 ThrowingOp 和 ThrowingPow 接口。

父类型：

  * ThrowingOp<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>
  * ThrowingPow

#### func throwingAdd\(Int64\)
    
    __
    
    public func throwingAdd(y: Int64): Int64
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): Int64
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(Int64\)
    
    __
    
    public func throwingDiv(y: Int64): Int64
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): Int64
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(Int64\)
    
    __
    
    public func throwingMod(y: Int64): Int64
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(Int64\)
    
    __
    
    public func throwingMul(y: Int64): Int64
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): Int64
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingPow\(UInt64\)
    
    __
    
    public func throwingPow(y: UInt64): Int64
    
功能：使用抛出异常策略的幂运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当幂运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): Int64
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): Int64
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(Int64\)
    
    __
    
    public func throwingSub(y: Int64): Int64
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend Int8 <: ThrowingOp\<Int8\>
    
    __
    
    extend Int8 <: ThrowingOp\<Int8\>
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

#### func throwingAdd\(Int8\)
    
    __
    
    public func throwingAdd(y: Int8): Int8
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): Int8
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(Int8\)
    
    __
    
    public func throwingDiv(y: Int8): Int8
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): Int8
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(Int8\)
    
    __
    
    public func throwingMod(y: Int8): Int8
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(Int8\)
    
    __
    
    public func throwingMul(y: Int8): Int8
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): Int8
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): Int8
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): Int8
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(Int8\)
    
    __
    
    public func throwingSub(y: Int8): Int8
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend IntNative <: ThrowingOp\<IntNative\>
    
    __
    
    extend IntNative <: ThrowingOp\<IntNative\>
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

#### func throwingAdd\(IntNative\)
    
    __
    
    public func throwingAdd(y: IntNative): IntNative
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): IntNative
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(IntNative\)
    
    __
    
    public func throwingDiv(y: IntNative): IntNative
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): IntNative
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(IntNative\)
    
    __
    
    public func throwingMod(y: IntNative): IntNative
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(IntNative\)
    
    __
    
    public func throwingMul(y: IntNative): IntNative
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): IntNative
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): IntNative
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): IntNative
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(IntNative\)
    
    __
    
    public func throwingSub(y: IntNative): IntNative
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend UInt16 <: ThrowingOp\<UInt16\>
    
    __
    
    extend UInt16 <: ThrowingOp\<UInt16\>
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

#### func throwingAdd\(UInt16\)
    
    __
    
    public func throwingAdd(y: UInt16): UInt16
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): UInt16
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(UInt16\)
    
    __
    
    public func throwingDiv(y: UInt16): UInt16
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): UInt16
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(UInt16\)
    
    __
    
    public func throwingMod(y: UInt16): UInt16
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(UInt16\)
    
    __
    
    public func throwingMul(y: UInt16): UInt16
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): UInt16
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): UInt16
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): UInt16
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(UInt16\)
    
    __
    
    public func throwingSub(y: UInt16): UInt16
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend UInt32 <: ThrowingOp\<UInt32\>
    
    __
    
    extend UInt32 <: ThrowingOp\<UInt32\>
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

#### func throwingAdd\(UInt32\)
    
    __
    
    public func throwingAdd(y: UInt32): UInt32
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): UInt32
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(UInt32\)
    
    __
    
    public func throwingDiv(y: UInt32): UInt32
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): UInt32
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(UInt32\)
    
    __
    
    public func throwingMod(y: UInt32): UInt32
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(UInt32\)
    
    __
    
    public func throwingMul(y: UInt32): UInt32
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): UInt32
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): UInt32
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): UInt32
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(UInt32\)
    
    __
    
    public func throwingSub(y: UInt32): UInt32
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend UInt64 <: ThrowingOp\<UInt64\>
    
    __
    
    extend UInt64 <: ThrowingOp\<UInt64\>
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

#### func throwingAdd\(UInt64\)
    
    __
    
    public func throwingAdd(y: UInt64): UInt64
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): UInt64
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(UInt64\)
    
    __
    
    public func throwingDiv(y: UInt64): UInt64
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): UInt64
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(UInt64\)
    
    __
    
    public func throwingMod(y: UInt64): UInt64
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(UInt64\)
    
    __
    
    public func throwingMul(y: UInt64): UInt64
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): UInt64
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): UInt64
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): UInt64
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(UInt64\)
    
    __
    
    public func throwingSub(y: UInt64): UInt64
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend UInt8 <: ThrowingOp\<UInt8\>
    
    __
    
    extend UInt8 <: ThrowingOp\<UInt8\>
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

#### func throwingAdd\(UInt8\)
    
    __
    
    public func throwingAdd(y: UInt8): UInt8
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): UInt8
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(UInt8\)
    
    __
    
    public func throwingDiv(y: UInt8): UInt8
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): UInt8
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(UInt8\)
    
    __
    
    public func throwingMod(y: UInt8): UInt8
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(UInt8\)
    
    __
    
    public func throwingMul(y: UInt8): UInt8
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): UInt8
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): UInt8
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): UInt8
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(UInt8\)
    
    __
    
    public func throwingSub(y: UInt8): UInt8
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

### extend UIntNative <: ThrowingOp\<UIntNative\>
    
    __
    
    extend UIntNative <: ThrowingOp\<UIntNative\>
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 实现 ThrowingOp 接口。

父类型：

  * ThrowingOp<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>

#### func throwingAdd\(UIntNative\)
    
    __
    
    public func throwingAdd(y: UIntNative): UIntNative
    
功能：使用抛出异常策略的加法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当加法运算出现溢出时，抛出异常。

#### func throwingDec\(\)
    
    __
    
    public func throwingDec(): UIntNative
    
功能：使用抛出异常策略的自减运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自减运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自减运算出现溢出时，抛出异常。

#### func throwingDiv\(UIntNative\)
    
    __
    
    public func throwingDiv(y: UIntNative): UIntNative
    
功能：使用抛出异常策略的除法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当除法运算出现溢出时，抛出异常。

#### func throwingInc\(\)
    
    __
    
    public func throwingInc(): UIntNative
    
功能：使用抛出异常策略的自增运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自增运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当自增运算出现溢出时，抛出异常。

#### func throwingMod\(UIntNative\)
    
    __
    
    public func throwingMod(y: UIntNative): UIntNative
    
功能：使用抛出异常策略的取余运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 取余运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当取余运算出现溢出时，抛出异常。

#### func throwingMul\(UIntNative\)
    
    __
    
    public func throwingMul(y: UIntNative): UIntNative
    
功能：使用抛出异常策略的乘法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当乘法运算出现溢出时，抛出异常。

#### func throwingNeg\(\)
    
    __
    
    public func throwingNeg(): UIntNative
    
功能：使用抛出异常策略的负号运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 负号运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当负号运算出现溢出时，抛出异常。

#### func throwingShl\(UInt64\)
    
    __
    
    public func throwingShl(y: UInt64): UIntNative
    
功能：使用抛出异常策略的左移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 左移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingShr\(UInt64\)
    
    __
    
    public func throwingShr(y: UInt64): UIntNative
    
功能：右移运算。

当移位位数大于等于操作数位数时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 右移运算结果。

异常：

  * [OvershiftException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions.html#class-overshiftexception) \- 当移位位数大于等于操作数位数时，抛出异常。

#### func throwingSub\(UIntNative\)
    
    __
    
    public func throwingSub(y: UIntNative): UIntNative
    
功能：使用抛出异常策略的减法运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减法运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当减法运算出现溢出时，抛出异常。

## interface ThrowingPow
    
    __
    
    public interface ThrowingPow {
        public func throwingPow(y: UInt64): Int64
    }
    
功能：提供使用抛出异常策略的幂运算接口。

### func throwingPow\(UInt64\)
    
    __
    
    public func throwingPow(y: UInt64): Int64
    
功能：使用抛出异常策略的幂运算。

当运算出现溢出时，抛出异常，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。

异常：

  * [OverflowException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-overflowexception) \- 当幂运算出现溢出时，抛出异常。

## interface WrappingOp\<T\>
    
    __
    
    public interface WrappingOp\<T\> {
        func wrappingAdd(y: T): T
        func wrappingDec(): T
        func wrappingDiv(y: T): T
        func wrappingInc(): T
        func wrappingMod(y: T): T
        func wrappingMul(y: T): T
        func wrappingNeg(): T
        func wrappingShl(y: UInt64): T
        func wrappingShr(y: UInt64): T
        func wrappingSub(y: T): T
    }
    
功能：当整数运算出现溢出，高位截断。

### func wrappingAdd\(T\)
    
    __
    
    func wrappingAdd(y: T): T
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: T - 加数。

返回值：

  * T - 加法运算结果。

### func wrappingDec\(\)
    
    __
    
    func wrappingDec(): T
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * T - 自减运算结果。

### func wrappingDiv\(T\)
    
    __
    
    func wrappingDiv(y: T): T
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * T - 除法运算结果。

### func wrappingInc\(\)
    
    __
    
    func wrappingInc(): T
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * T - 自增运算结果。

### func wrappingMod\(T\)
    
    __
    
    func wrappingMod(y: T): T
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: T - 除数。

返回值：

  * T - 取余运算结果。

### func wrappingMul\(T\)
    
    __
    
    func wrappingMul(y: T): T
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: T - 乘数。

返回值：

  * T - 乘法运算结果。

### func wrappingNeg\(\)
    
    __
    
    func wrappingNeg(): T
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * T - 负号运算结果。

### func wrappingShl\(UInt64\)
    
    __
    
    func wrappingShl(y: UInt64): T
    
功能：使用高位截断策略的左移运算。

当移位位数大于等于操作数位数时，高位截断。例如，对 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的数进行移位，当 y \(移位位数\)超大于等于 8时，仅取 y 的低 3 位作为移位位数，以此保证移位位数在 0 到 7 之间。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * T - 左移运算结果。

### func wrappingShr\(UInt64\)
    
    __
    
    func wrappingShr(y: UInt64): T
    
功能：使用高位截断策略的右移运算。

当移位位数大于等于操作数位数时，高位截断。例如，对 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型的数进行移位，当 y \(移位位数\)超大于等于 8时，仅取 y 的低 3 位作为移位位数，以此保证移位位数在 0 到 7 之间。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * T - 右移运算结果。

### func wrappingSub\(T\)
    
    __
    
    func wrappingSub(y: T): T
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: T - 减数。

返回值：

  * T - 减法运算结果。

### extend Int16 <: WrappingOp\<Int16\>
    
    __
    
    extend Int16 <: WrappingOp\<Int16\>
    
功能：为 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)>

#### func wrappingAdd\(Int16\)
    
    __
    
    public func wrappingAdd(y: Int16): Int16
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): Int16
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自减运算结果。

#### func wrappingDiv\(Int16\)
    
    __
    
    public func wrappingDiv(y: Int16): Int16
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): Int16
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 自增运算结果。

#### func wrappingMod\(Int16\)
    
    __
    
    public func wrappingMod(y: Int16): Int16
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 除数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 取余运算结果。

#### func wrappingMul\(Int16\)
    
    __
    
    public func wrappingMul(y: Int16): Int16
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): Int16
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): Int16
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 4 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): Int16
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 4 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 右移运算结果。

#### func wrappingSub\(Int16\)
    
    __
    
    public func wrappingSub(y: Int16): Int16
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减数。

返回值：

  * [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 减法运算结果。

### extend Int32 <: WrappingOp\<Int32\>
    
    __
    
    extend Int32 <: WrappingOp\<Int32\>
    
功能：为 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)>

#### func wrappingAdd\(Int32\)
    
    __
    
    public func wrappingAdd(y: Int32): Int32
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): Int32
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自减运算结果。

#### func wrappingDiv\(Int32\)
    
    __
    
    public func wrappingDiv(y: Int32): Int32
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): Int32
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 自增运算结果。

#### func wrappingMod\(Int32\)
    
    __
    
    public func wrappingMod(y: Int32): Int32
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 除数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 取余运算结果。

#### func wrappingMul\(Int32\)
    
    __
    
    public func wrappingMul(y: Int32): Int32
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): Int32
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): Int32
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 5 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): Int32
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 5 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 右移运算结果。

#### func wrappingSub\(Int32\)
    
    __
    
    public func wrappingSub(y: Int32): Int32
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减数。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 减法运算结果。

### extend Int64 <: WrappingOp\<Int64\> & WrappingPow
    
    __
    
    extend Int64 <: WrappingOp\<Int64\> & WrappingPow
    
功能：为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 实现 WrappingOp 和 WrappingPow 接口。

父类型：

  * WrappingOp<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>
  * WrappingPow

#### func wrappingAdd\(Int64\)
    
    __
    
    public func wrappingAdd(y: Int64): Int64
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): Int64
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自减运算结果。

#### func wrappingDiv\(Int64\)
    
    __
    
    public func wrappingDiv(y: Int64): Int64
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): Int64
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自增运算结果。

#### func wrappingMod\(Int64\)
    
    __
    
    public func wrappingMod(y: Int64): Int64
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 取余运算结果。

#### func wrappingMul\(Int64\)
    
    __
    
    public func wrappingMul(y: Int64): Int64
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): Int64
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 负号运算结果。

#### func wrappingPow\(UInt64\)
    
    __
    
    public func wrappingPow(y: UInt64): Int64
    
功能：使用高位截断策略的幂运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): Int64
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 6 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): Int64
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 6 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 右移运算结果。

#### func wrappingSub\(Int64\)
    
    __
    
    public func wrappingSub(y: Int64): Int64
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 减法运算结果。

### extend Int8 <: WrappingOp\<Int8\>
    
    __
    
    extend Int8 <: WrappingOp\<Int8\>
    
功能：为 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)>

#### func wrappingAdd\(Int8\)
    
    __
    
    public func wrappingAdd(y: Int8): Int8
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): Int8
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自减运算结果。

#### func wrappingDiv\(Int8\)
    
    __
    
    public func wrappingDiv(y: Int8): Int8
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): Int8
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 自增运算结果。

#### func wrappingMod\(Int8\)
    
    __
    
    public func wrappingMod(y: Int8): Int8
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 除数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 取余运算结果。

#### func wrappingMul\(Int8\)
    
    __
    
    public func wrappingMul(y: Int8): Int8
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): Int8
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): Int8
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 3 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): Int8
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 3 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 右移运算结果。

#### func wrappingSub\(Int8\)
    
    __
    
    public func wrappingSub(y: Int8): Int8
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减数。

返回值：

  * [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 减法运算结果。

### extend IntNative <: WrappingOp\<IntNative\>
    
    __
    
    extend IntNative <: WrappingOp\<IntNative\>
    
功能：为 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative)>

#### func wrappingAdd\(IntNative\)
    
    __
    
    public func wrappingAdd(y: IntNative): IntNative
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): IntNative
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自减运算结果。

#### func wrappingDiv\(IntNative\)
    
    __
    
    public func wrappingDiv(y: IntNative): IntNative
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): IntNative
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 自增运算结果。

#### func wrappingMod\(IntNative\)
    
    __
    
    public func wrappingMod(y: IntNative): IntNative
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 除数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 取余运算结果。

#### func wrappingMul\(IntNative\)
    
    __
    
    public func wrappingMul(y: IntNative): IntNative
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): IntNative
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): IntNative
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低位作为移位位数，具体取的位数取决于当前系统下 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): IntNative
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低位作为移位位数，具体取的位数取决于当前系统下 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 右移运算结果。

#### func wrappingSub\(IntNative\)
    
    __
    
    public func wrappingSub(y: IntNative): IntNative
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减数。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 减法运算结果。

### extend UInt16 <: WrappingOp\<UInt16\>
    
    __
    
    extend UInt16 <: WrappingOp\<UInt16\>
    
功能：为 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)>

#### func wrappingAdd\(UInt16\)
    
    __
    
    public func wrappingAdd(y: UInt16): UInt16
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): UInt16
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自减运算结果。

#### func wrappingDiv\(UInt16\)
    
    __
    
    public func wrappingDiv(y: UInt16): UInt16
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): UInt16
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 自增运算结果。

#### func wrappingMod\(UInt16\)
    
    __
    
    public func wrappingMod(y: UInt16): UInt16
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 除数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 取余运算结果。

#### func wrappingMul\(UInt16\)
    
    __
    
    public func wrappingMul(y: UInt16): UInt16
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): UInt16
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): UInt16
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 4 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): UInt16
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 4 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 右移运算结果。

#### func wrappingSub\(UInt16\)
    
    __
    
    public func wrappingSub(y: UInt16): UInt16
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减数。

返回值：

  * [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 减法运算结果。

### extend UInt32 <: WrappingOp\<UInt32\>
    
    __
    
    extend UInt32 <: WrappingOp\<UInt32\>
    
功能：为 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

#### func wrappingAdd\(UInt32\)
    
    __
    
    public func wrappingAdd(y: UInt32): UInt32
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): UInt32
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自减运算结果。

#### func wrappingDiv\(UInt32\)
    
    __
    
    public func wrappingDiv(y: UInt32): UInt32
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): UInt32
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 自增运算结果。

#### func wrappingMod\(UInt32\)
    
    __
    
    public func wrappingMod(y: UInt32): UInt32
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 除数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 取余运算结果。

#### func wrappingMul\(UInt32\)
    
    __
    
    public func wrappingMul(y: UInt32): UInt32
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): UInt32
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): UInt32
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 5 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): UInt32
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 5 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 右移运算结果。

#### func wrappingSub\(UInt32\)
    
    __
    
    public func wrappingSub(y: UInt32): UInt32
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减数。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 减法运算结果。

### extend UInt64 <: WrappingOp\<UInt64\>
    
    __
    
    extend UInt64 <: WrappingOp\<UInt64\>
    
功能：为 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64)>

#### func wrappingAdd\(UInt64\)
    
    __
    
    public func wrappingAdd(y: UInt64): UInt64
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): UInt64
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自减运算结果。

#### func wrappingDiv\(UInt64\)
    
    __
    
    public func wrappingDiv(y: UInt64): UInt64
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): UInt64
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 自增运算结果。

#### func wrappingMod\(UInt64\)
    
    __
    
    public func wrappingMod(y: UInt64): UInt64
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 除数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 取余运算结果。

#### func wrappingMul\(UInt64\)
    
    __
    
    public func wrappingMul(y: UInt64): UInt64
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): UInt64
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): UInt64
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 6 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): UInt64
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 6 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 右移运算结果。

#### func wrappingSub\(UInt64\)
    
    __
    
    public func wrappingSub(y: UInt64): UInt64
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减数。

返回值：

  * [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 减法运算结果。

### extend UInt8 <: WrappingOp\<UInt8\>
    
    __
    
    extend UInt8 <: WrappingOp\<UInt8\>
    
功能：为 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)>

#### func wrappingAdd\(UInt8\)
    
    __
    
    public func wrappingAdd(y: UInt8): UInt8
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): UInt8
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自减运算结果。

#### func wrappingDiv\(UInt8\)
    
    __
    
    public func wrappingDiv(y: UInt8): UInt8
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): UInt8
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 自增运算结果。

#### func wrappingMod\(UInt8\)
    
    __
    
    public func wrappingMod(y: UInt8): UInt8
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 除数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 取余运算结果。

#### func wrappingMul\(UInt8\)
    
    __
    
    public func wrappingMul(y: UInt8): UInt8
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): UInt8
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): UInt8
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 3 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): UInt8
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低 3 位作为移位位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 右移运算结果。

#### func wrappingSub\(UInt8\)
    
    __
    
    public func wrappingSub(y: UInt8): UInt8
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减数。

返回值：

  * [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 减法运算结果。

### extend UIntNative <: WrappingOp\<UIntNative\>
    
    __
    
    extend UIntNative <: WrappingOp\<UIntNative\>
    
功能：为 [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) 实现 WrappingOp 接口。

父类型：

  * WrappingOp<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)>

#### func wrappingAdd\(UIntNative\)
    
    __
    
    public func wrappingAdd(y: UIntNative): UIntNative
    
功能：使用高位截断策略的加法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 加法运算结果。

#### func wrappingDec\(\)
    
    __
    
    public func wrappingDec(): UIntNative
    
功能：使用高位截断策略的自减运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自减运算结果。

#### func wrappingDiv\(UIntNative\)
    
    __
    
    public func wrappingDiv(y: UIntNative): UIntNative
    
功能：使用高位截断策略的除法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除法运算结果。

#### func wrappingInc\(\)
    
    __
    
    public func wrappingInc(): UIntNative
    
功能：使用高位截断策略的自增运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 自增运算结果。

#### func wrappingMod\(UIntNative\)
    
    __
    
    public func wrappingMod(y: UIntNative): UIntNative
    
功能：使用高位截断策略的取余运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 除数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 取余运算结果。

#### func wrappingMul\(UIntNative\)
    
    __
    
    public func wrappingMul(y: UIntNative): UIntNative
    
功能：使用高位截断策略的乘法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 乘法运算结果。

#### func wrappingNeg\(\)
    
    __
    
    public func wrappingNeg(): UIntNative
    
功能：使用高位截断策略的负号运算。

当运算出现溢出时，高位截断，否则返回运算结果。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 负号运算结果。

#### func wrappingShl\(UInt64\)
    
    __
    
    public func wrappingShl(y: UInt64): UIntNative
    
功能：使用高位截断策略的左移运算。

当右操作数大于等于左操作数位数时，取右操作数的低位作为移位位数，具体取的位数取决于当前系统下 UIntNative 的位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 左移运算结果。

#### func wrappingShr\(UInt64\)
    
    __
    
    public func wrappingShr(y: UInt64): UIntNative
    
功能：使用高位截断策略的右移运算。

当右操作数大于等于左操作数位数时，取右操作数的低位作为移位位数，具体取的位数取决于当前系统下 UIntNative 的位数。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 移位位数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 右移运算结果。

#### func wrappingSub\(UIntNative\)
    
    __
    
    public func wrappingSub(y: UIntNative): UIntNative
    
功能：使用高位截断策略的减法运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减数。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 减法运算结果。

## interface WrappingPow
    
    __
    
    public interface WrappingPow {
        public func wrappingPow(y: UInt64): Int64
    }
    
功能：提供使用高位截断策略的幂运算接口。

### func wrappingPow\(UInt64\)
    
    __
    
    public func wrappingPow(y: UInt64): Int64
    
功能：使用高位截断策略的幂运算。

当运算出现溢出时，高位截断，否则返回运算结果。

参数：

  * y: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指数。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 幂运算结果。