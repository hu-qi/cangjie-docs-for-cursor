
# 枚举

## enum DayOfWeek
    
    __
    
    public enum DayOfWeek <: ToString & Equatable\<DayOfWeek\> {
        | Sunday
        | Monday
        | Tuesday
        | Wednesday
        | Thursday
        | Friday
        | Saturday
    }
    
功能：[DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 表示一周中的某一天，提供了与 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型转换，相等性判别以及获取枚举值的字符串表示的功能。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<[DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek)>

### Friday
    
    __
    
    Friday
    
功能：构造一个表示周五的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

### Monday
    
    __
    
    Monday
    
功能：构造一个表示周一的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

### Saturday
    
    __
    
    Saturday
    
功能：构造一个表示周六的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

### Sunday
    
    __
    
    Sunday
    
功能：构造一个表示周日的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

### Thursday
    
    __
    
    Thursday
    
功能：构造一个表示周四的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

### Tuesday
    
    __
    
    Tuesday
    
功能：构造一个表示周二的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

### Wednesday
    
    __
    
    Wednesday
    
功能：构造一个表示周三的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

### static func of\(Int64\)
    
    __
    
    public static func of(dayOfWeek: Int64): DayOfWeek
    
功能：获取参数 `dayOfWeek` 对应的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

参数：

  * dayOfWeek: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 周几的整数表示，合法范围为 \[0, 6\]。其中，0 表示周日，1 至 6 表示周一至周六。

返回值：

  * [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) \- 参数 `dayOfWeek` 对应的 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数 `dayOfWeek` 不在 \[0, 6\] 范围内时，抛出异常。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例的字符串表示，如 "Monday" 表示周一。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例的字符串表示。

### func toInteger\(\)
    
    __
    
    public func toInteger(): Int64
    
功能：获取当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例的整数表示，周日表示为 0，周一至周六表示为 1 至 6。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例的整数表示。

### func value\(\) \(deprecated\)
    
    __
    
    public func value(): Int64
    
功能：获取当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例的整数表示，周日表示为 0，周一至周六表示为 1 至 6。

> **注意：**
> 
> 未来版本即将废弃，可使用 toInteger\(\) 替代。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例的整数表示。

### operator func \!=\(DayOfWeek\)
    
    __
    
    public operator func !=(r: DayOfWeek): Bool
    
功能：判断当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 和 `r` 是否不为一周中的同一天。

参数：

  * r: [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) \- [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例不等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func ==\(DayOfWeek\)
    
    __
    
    public operator func ==(r: DayOfWeek): Bool
    
功能：判断当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 和 `r` 是否表示一周中的同一天。

参数：

  * r: [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) \- [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) 实例等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func +\(Int64\)
    
    __
    
    public operator func +(n: Int64): DayOfWeek
    
功能：计算基于当前实例 `n` 天之后（n 为正数时）的表示值。若 `n` 为负数，则表示当天之前。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 后多少天。

返回值：

  * [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) \- `n` 天后的周数值。

### operator func -\(Int64\)
    
    __
    
    public operator func -(n: Int64): DayOfWeek
    
功能：计算基于当前实例 `n` 天之前（n 为正数时）的表示值。若 `n` 为负数，则表示当天之后。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 前多少天。

返回值：

  * [DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek) \- `n` 天前的周数值。

## enum Month
    
    __
    
    public enum Month <: ToString & Equatable\<Month\> {
        | January
        | February
        | March
        | April
        | May
        | June
        | July
        | August
        | September
        | October
        | November
        | December
    }
    
功能：[Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 用以表示月份，表示一年中的某一月，提供了与 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型转换和计算，相等性判别以及获取枚举值的字符串表示的功能。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<[Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month)>

### April
    
    __
    
    April
    
功能：构造一个表示四月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### August
    
    __
    
    August
    
功能：构造一个表示八月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### December
    
    __
    
    December
    
功能：构造一个表示十二月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### February
    
    __
    
    February
    
功能：构造一个表示二月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### January
    
    __
    
    January
    
功能：构造一个表示一月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### July
    
    __
    
    July
    
功能：构造一个表示七月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### June
    
    __
    
    June
    
功能：构造一个表示六月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### March
    
    __
    
    March
    
功能：构造一个表示三月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### May
    
    __
    
    May
    
功能：构造一个表示五月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### November
    
    __
    
    November
    
功能：构造一个表示十一月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### October
    
    __
    
    October
    
功能：构造一个表示十月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### September
    
    __
    
    September
    
功能：构造一个表示九月的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

### static func of\(Int64\)
    
    __
    
    public static func of(mon: Int64): Month
    
功能：获取参数 `mon` 对应 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 类型实例。

参数：

  * mon: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 整数形式的月，合法范围为 \[1, 12\]，分别表示一年中的十二个月。

返回值：

  * [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) \- 参数 `mon` 对应的 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 类型实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数 `mon` 不在 \[1, 12\] 范围内时，抛出异常。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例的字符串表示，如 "January" 表示一月。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例的字符串表示。

### func toInteger\(\)
    
    __
    
    public func toInteger(): Int64
    
功能：获取当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例的整数表示，一月至十二月分别表示为 1 至 12。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例的整数表示。

### func value\(\) \(deprecated\)
    
    __
    
    public func value(): Int64
    
功能：获取当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例的整数表示，一月至十二月分别表示为 1 至 12。

> **注意：**
> 
> 未来版本即将废弃，可使用 toInteger\(\) 替代。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例的整数表示。

### operator func \!=\(Month\)
    
    __
    
    public operator func !=(r: Month): Bool
    
功能：判断当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例和 `r` 是否不为同一个月。

参数：

  * r: [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) \- [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例是否不等于 `r`。

### operator func +\(Int64\)
    
    __
    
    public operator func +(n: Int64): Month
    
功能：计算基于当前日历月份 `n` 个月之后（n 为正数时）的日历月份。若 `n` 为负数，则表示当月之前。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 后多少月的数量。

返回值：

  * [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) \- `n` 月后的月份。

### operator func -\(Int64\)
    
    __
    
    public operator func -(n: Int64): Month
    
功能：计算基于当前日历月份 `n` 个前之后（n 为正数时）的日历月份。若 `n` 为负数，则表示当月之后。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 前多少月的数量。

返回值：

  * [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) \- `n` 月前的月份。

### operator func ==\(Month\)
    
    __
    
    public operator func ==(r: Month): Bool
    
功能：判断当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例和 `r` 是否表示同一个月。

参数：

  * r: [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) \- [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 实例等于 `r` 时，返回 `true`；否则，返回 `false`。