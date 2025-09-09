
# 结构体

## struct DateTime
    
    __
    
    public struct DateTime <: ToString & Hashable & Comparable\<DateTime\> & Formattable & Parsable\<DateTime\>
    
功能：[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 表示日期时间，是一个描述某一时间点的时间类型，提供了基于时区的日期时间读取、计算、比较、转换，以及序列化和反序列化等功能。

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 是不可变的类型，包含了日期，时间和时区信息。可表示的时间区间为 \[-999,999,999-01-01T00:00:00.000000000, 999,999,999-12-31T23:59:59.999999999\]，该区间适用于任何合法的时区。

  * 以下为 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 中 now 和 nowUTC 函数获取当前时间使用的系统调用函数：

系统| 系统调用函数| 时钟类型  
---|---|---  
Linux| clock\_gettime| CLOCK\_REALTIME  
Windows| clock\_gettime| CLOCK\_REALTIME  
macOS| clock\_gettime| CLOCK\_REALTIME  
  
父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet)\<DateTime\>
  * [Formattable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/convert/convert_package_api/convert_package_interfaces.html#interface-formattable)
  * [Parsable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/convert/convert_package_api/convert_package_interfaces.html#interface-parsablet)\<DateTime\>

### static prop UnixEpoch
    
    __
    
    public static prop UnixEpoch: DateTime
    
功能：获取 Unix 时间纪元，即表示零时区 `1970年1月1日0时0分0秒0纳秒` 的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

类型：[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### prop dayOfMonth
    
    __
    
    public prop dayOfMonth: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例基于当前月第几日。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop dayOfWeek
    
    __
    
    public prop dayOfWeek: DayOfWeek
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例基于当前周的第几日。

类型：[DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek)

### prop dayOfYear
    
    __
    
    public prop dayOfYear: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例基于当前年份的第几日。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop date
    
    __
    
    public prop date: (Int64, Month, Int64)
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的年份、月份和当前月第几日。

类型：\([Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64),[Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\)

### prop hour
    
    __
    
    public prop hour: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的小时。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop isoWeek
    
    __
    
    public prop isoWeek: (Int64, Int64)
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例基于 ISO8601 标准的年份和基于年的周数。

类型：\([Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\)

### prop minute
    
    __
    
    public prop minute: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的分钟。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop month
    
    __
    
    public prop month: Month
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的月份。

类型：[Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month)

### prop monthValue \(deprecated\)
    
    __
    
    public prop monthValue: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例以数字形式表示的月份。

> **注意：**
> 
> 未来版本即将废弃不再使用。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop nanosecond
    
    __
    
    public prop nanosecond: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的纳秒。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop second
    
    __
    
    public prop second: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的秒。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop year
    
    __
    
    public prop year: Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的年份。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop time
    
    __
    
    public prop time: (Int64, Int64, Int64)
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的时、分、秒。

类型：\([Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64),[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\)

### prop zone
    
    __
    
    public prop zone: TimeZone
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例所关联的时区。

类型：[TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone)

### prop zoneId
    
    __
    
    public prop zoneId: String
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例所关联的 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例的时区 ID。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop zoneOffset
    
    __
    
    public prop zoneOffset: Duration
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例所关联的 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例的时间偏移。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static func fromUnixTimeStamp\(Duration\)
    
    __
    
    public static func fromUnixTimeStamp(d: Duration): DateTime
    
功能：获取自 UnixEpoch 开始，参数 `d` 指定时间间隔后的日期时间。

参数：

  * d: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 时间间隔。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 自 UnixEpoch 开始，指定 `d` 后的日期时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。

### static func now\(TimeZone\)
    
    __
    
    public static func now(timeZone!: TimeZone = TimeZone.Local): DateTime
    
功能：获取参数 `timeZone` 指定时区的当前时间。该方法获取的当前时间受系统时间影响，如存在使用不受系统时间影响的计时场景，可使用 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime).now\(\) 替代。

参数：

  * timeZone\!: [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- 时区，默认为本地时区。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 返回指定时区当前时间。

### static func nowUTC\(\)
    
    __
    
    public static func nowUTC(): DateTime
    
功能：获取 UTC 时区的当前时间。该方法获取的当前时间受系统时间影响，如存在使用不受系统时间影响的计时场景，可使用 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime).now\(\) 替代。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- UTC 时区当前时间。

### static func of\(Int64, Int64, Int64, Int64, Int64, Int64, Int64, TimeZone\)
    
    __
    
    public static func of(
        year!: Int64,
        month!: Int64,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0,
        timeZone!: TimeZone = TimeZone.Local
    ): DateTime
    
功能：根据参数指定的年、月、日、时、分、秒、纳秒、时区构造 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * year\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 年，范围\[-999,999,999, 999,999,999\]。
  * month\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 月，范围\[1, 12\]。
  * dayOfMonth\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 日，范围\[1, 31\]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
  * hour\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 时，范围\[0, 23\]。
  * minute\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 分，范围\[0, 59\]。
  * second\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 秒，范围\[0, 59\]。
  * nanosecond\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 纳秒，范围\[0, 999,999,999\]。
  * timeZone\!: [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- 时区。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 根据指定参数构造的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数值超出指定范围，抛出异常。

### static func of\(Int64, Month, Int64, Int64, Int64, Int64, Int64, TimeZone\)
    
    __
    
    public static func of(
        year!: Int64,
        month!: Month,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0,
        timeZone!: TimeZone = TimeZone.Local
    ): DateTime
    
功能：根据参数指定的年、月、日、时、分、秒、纳秒、时区构造 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * year\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 年，范围\[-999,999,999, 999,999,999\]。
  * month\!: [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) \- 月，[Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 类型。
  * dayOfMonth\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 日，范围\[1, 31\]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
  * hour\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 时，范围\[0, 23\]。
  * minute\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 分，范围\[0, 59\]。
  * second\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 秒，范围\[0, 59\]。
  * nanosecond\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 纳秒，范围\[0, 999,999,999\]。
  * timeZone\!: [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- 时区。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 根据指定参数构造的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数值超出指定范围，抛出异常。

### static func ofEpoch\(Int64, Int64\)
    
    __
    
    public static func ofEpoch(second!: Int64, nanosecond!: Int64): DateTime
    
功能：根据入参 `second` 和 `nanosecond` 构造 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。入参 `second` 表示 unix 时间的秒部分，`nanosecond` 表示 unix 时间的纳秒部分。unix 时间以 UnixEpoch 开始计算，`nanosecond` 的范围不可以超过\[0, 999,999,999\]，否则抛出异常。

参数：

  * second\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- unix 时间的秒部分。
  * nanosecond\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- unix 时间的纳秒部分，范围不可以超过\[0, 999,999,999\]。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 自 UnixEpoch 开始，指定 `second` 和 `nanosecond` 后的时间。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `nanosecond` 值超出指定范围时，抛出异常。
  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。

### static func ofUTC\(Int64, Int64, Int64, Int64, Int64, Int64, Int64\)
    
    __
    
    public static func ofUTC(
        year!: Int64,
        month!: Int64,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0
    ): DateTime
    
功能：根据参数指定的年、月、日、时、分、秒、纳秒构造 `UTC` 时区 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * year\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 年，范围\[-999,999,999, 999,999,999\]。
  * month\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 月，范围\[1, 12\]。
  * dayOfMonth\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 日，范围\[1, 31\]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
  * hour\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 时，范围\[0, 23\]。
  * minute\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 分，范围\[0, 59\]。
  * second\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 秒，范围\[0, 59\]。
  * nanosecond\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 纳秒，范围\[0, 999,999,999\]。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 根据指定参数构造的 `UTC` 时区 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数值超出指定范围时，抛出异常。

### static func ofUTC\(Int64, Month, Int64, Int64, Int64, Int64, Int64\)
    
    __
    
    public static func ofUTC(
        year!: Int64,
        month!: Month,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0
    ): DateTime
    
功能：根据参数指定的年、月、日、时、分、秒、纳秒构造 `UTC` 时区 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * year\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 年，范围\[-999,999,999, 999,999,999\]。
  * month\!: [Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) \- 月，[Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month) 类型。
  * dayOfMonth\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 日, 范围\[1, 31\]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
  * hour\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 时，范围\[0, 23\]。
  * minute\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 分，范围\[0, 59\]。
  * second\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 秒，范围\[0, 59\]。
  * nanosecond\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 纳秒，范围\[0, 999,999,999\]。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 根据指定参数构造的 `UTC` 时区 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数值超出指定范围时，抛出异常。

### static func parse\(String\)
    
    __
    
    public static func parse(str: String): DateTime
    
功能：从参数 `str` 中解析得到时间，解析成功时返回 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时间字符串，格式为 `RFC3339` 中 `date-time` 格式，可包含小数秒，如 "2023-04-10T08:00:00\[.123456\]+08:00"\(`[]` 中的内容表示可选项\)。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 从参数 `str` 中解析出的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

异常：

  * [TimeParseException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-timeparseexception) \- 无法正常解析时，抛出异常。

### static func parse\(String, String\)
    
    __
    
    public static func parse(str: String, format: String): DateTime
    
功能：根据 `format` 指定的时间格式，从字符串 `str` 中解析得到时间，解析成功时返回 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时间字符串，例如："2023/04/10 08:00:00 +08:00"。
  * format: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时间字符串的格式，例如："yyyy/MM/dd HH:mm:ss OOOO"。格式说明详见[时间字符串格式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_overview.html#%E6%97%B6%E9%97%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 根据参数 `format` 指定的时间格式，从参数 `str` 中解析出的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

异常：

  * [TimeParseException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-timeparseexception) \- 当无法正常解析时，或存在同一 `format` 的多次取值时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `format` 格式不正确时，抛出异常。

### static func parse\(String, DateTimeFormat\) \(deprecated\)
    
    __
    
    public static func parse(str: String, format: DateTimeFormat): DateTime
    
功能：根据 `format` 指定的时间格式，从字符串 `str` 中解析得到时间，解析成功时返回 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

> **注意：**
> 
> 未来版本即将废弃，使用 parse\(String, String\) 替代。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时间字符串，例如："2023/04/10 08:00:00 +08:00"。
  * format: [DateTimeFormat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-datetimeformat) \- 时间格式，例如："yyyy/MM/dd HH:mm:ss OOOO"对应的时间格式。格式说明详见[时间字符串格式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_overview.html#%E6%97%B6%E9%97%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 根据参数 `format` 指定的时间格式，从参数 `str` 中解析出的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

异常：

  * [TimeParseException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-timeparseexception) \- 当无法正常解析时，或存在同一 `format` 的多次取值时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `format` 格式不正确时，抛出异常。

### static func tryParse\(String\)
    
    __
    
    public static func tryParse(str: String): Option\<DateTime\>
    
功能：从参数 `str` 中解析得到时间，解析成功时返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)> 实例。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时间字符串，格式为 `RFC3339` 中 `date-time` 格式，可包含小数秒，如 "2023-04-10T08:00:00\[.123456\]+08:00"\(`[]` 中的内容表示可选项\)。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)> \- 从参数 `str` 中解析出的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)> 实例，如果解析失败返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<DateTime\>.None。

### func addDays\(Int64\)
    
    __
    
    public func addDays(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 天之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少天的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 天后的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 天后的日期时间超过表示范围时，抛出异常。

### func addHours\(Int64\)
    
    __
    
    public func addHours(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 小时之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少小时的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 小时后的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 小时后的日期时间超过表示范围时，抛出异常。

### func addMinutes\(Int64\)
    
    __
    
    public func addMinutes(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 分钟之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少分钟的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 分钟后的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 分钟后的日期时间超过表示范围时，抛出异常。

### func addMonths\(Int64\)
    
    __
    
    public func addMonths(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 月之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

> **注意：**
> 
> 由于月的间隔不固定，若设 dt 表示 “2020年3月31日”，`dt.addMonths(1)` 不会返回非法日期“2020年4月31日”。为了尽量返回有效的日期，会偏移到当月最后一天，返回“2020年4月30日”。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少月的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 月后的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 月后的日期时间超过表示范围时，抛出异常。

### func addNanoseconds\(Int64\)
    
    __
    
    public func addNanoseconds(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 纳秒之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少纳秒的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 纳秒后的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 纳秒后时间的日期时间超过表示范围时，抛出异常。

### func addSeconds\(Int64\)
    
    __
    
    public func addSeconds(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 秒之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少秒的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 秒后的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 秒后的日期时间超过表示范围时，抛出异常。

### func addWeeks\(Int64\)
    
    __
    
    public func addWeeks(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 周之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少周的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 周后的时间。

异常：

功能：获取入参 n 周之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

### func addYears\(Int64\)
    
    __
    
    public func addYears(n: Int64): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 年之后的时间，返回新的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

> **注意：**
> 
> 由于年的间隔不固定，若设 dt 表示 “2020年2月29日”，`dt.addYears(1)` 不会返回非法日期“2021年2月29日”。为了尽量返回有效的日期，会偏移到当月最后一天，返回 “2021年2月28日”。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 自 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例后多少年的数量。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 年后的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例 `n` 年后的日期时间超过表示范围时，抛出异常。

### func compare\(DateTime\)
    
    __
    
    public func compare(rhs: DateTime): Ordering
    
功能：判断一个 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例与参数 `rhs` 的大小关系。如果大于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).GT；如果等于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).EQ；如果小于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).LT。

参数：

  * rhs: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 参与比较的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

返回值：

  * [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例与 `rhs` 大小关系。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 哈希值。

### func inLocal\(\)
    
    __
    
    public func inLocal(): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在本地时区的时间。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在本地时区的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当返回的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例表示的日期时间超过表示范围时，抛出异常。

### func inTimeZone\(TimeZone\)
    
    __
    
    public func inTimeZone(timeZone: TimeZone): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在参数 `timeZone` 指定时区的时间。

参数：

  * timeZone: [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- 目标时区。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在参数 `timezone` 指定时区的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当返回的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例表示的日期时间超过表示范围时，抛出异常。

### func inUTC\(\)
    
    __
    
    public func inUTC(): DateTime
    
功能：获取 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在 `UTC` 时区的时间。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在 `UTC` 时区的时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当返回的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例表示的日期时间超过表示范围时，抛出异常。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回一个表示 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的字符串，其格式为 `RFC3339` 中 `date-time` 格式，如果时间包含纳秒信息（不为零），会打印出小数秒。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的字符串表示。

### func format\(String\)
    
    __
    
    public func format(fmt: String): String
    
功能：返回一个表示 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的字符串，其格式由参数 `fmt` 指定。格式说明详见[时间字符串格式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_overview.html#%E6%97%B6%E9%97%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)。

参数：

  * fmt: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 返回字符串的格式，其格式可为 "yyyy/MM/dd HH:mm:ss OOOO"。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在 `fmt` 指定格式下的字符串，如果无法解析则原样返回 `fmt` 指定格式。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `fmt` 格式不符合[时间字符串格式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_overview.html#%E6%97%B6%E9%97%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)，则抛出异常。

### func toString\(DateTimeFormat\) \(deprecated\)
    
    __
    
    public func toString(format: DateTimeFormat): String
    
功能：返回一个表示 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例的字符串，其格式由参数 `format` 指定。格式说明详见[时间字符串格式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_overview.html#%E6%97%B6%E9%97%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)。

> **注意：**
> 
> 未来版本即将废弃不再使用。

参数：

  * format: [DateTimeFormat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-datetimeformat) \- 时间格式，其格式可为 "yyyy/MM/dd HH:mm:ss OOOO"。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例在 `format` 指定格式下的字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `format` 格式不正确时，抛出异常。

### func toUnixTimeStamp\(\)
    
    __
    
    public func toUnixTimeStamp(): Duration
    
功能：获取当前实例自 UnixEpoch 的时间间隔。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 当前实例自 UnixEpoch 的时间间隔。

### operator func \!=\(DateTime\)
    
    __
    
    public operator func !=(r: DateTime): Bool
    
功能：判断当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例是否不等于 `r`。

若两个 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 不相等，那么它们指向的不是同一 UTC 时间。

参数：

  * r: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例不等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func +\(Duration\)
    
    __
    
    public operator func +(r: Duration): DateTime
    
功能：实现 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型和 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型加法，即 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \+ [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 运算。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 加法的右操作数。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型实例和 `r` 的和。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。

### operator func -\(DateTime\)
    
    __
    
    public operator func -(r: DateTime): Duration
    
功能：实现 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型之间的减法，即 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 运算。

参数：

  * r: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 减法的右操作数。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型实例和 `r` 的差。

### operator func -\(Duration\)
    
    __
    
    public operator func -(r: Duration): DateTime
    
功能：实现 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型和 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型减法，即 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 运算。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 减法的右操作数。

返回值：

  * [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型实例和 `r` 的差。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。

### operator func <\(DateTime\)
    
    __
    
    public operator func <(r: DateTime): Bool
    
功能：判断当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例是否早于 `r`（指向更早的 UTC 时间的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 更小）。

参数：

  * r: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例早于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func <=\(DateTime\)
    
    __
    
    public operator func <=(r: DateTime): Bool
    
功能：判断当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例是否早于或等于 `r`（指向更早的 UTC 时间的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 更小）。

参数：

  * r: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例早于或等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func ==\(DateTime\)
    
    __
    
    public operator func ==(r: DateTime): Bool
    
功能：判断当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例是否等于 `r`。

若两个 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 相等，那么它们指向同一 UTC 时间。

参数：

  * r: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func >\(DateTime\)
    
    __
    
    public operator func >(r: DateTime): Bool
    
功能：判断当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例是否晚于 `r`（指向更晚的 UTC 时间的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 更大）。

参数：

  * r: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例晚于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func >=\(DateTime\)
    
    __
    
    public operator func >=(r: DateTime): Bool
    
功能：判断当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例是否晚于或等于 `r`（指向更晚的 UTC 时间的 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 更大）。

参数：

  * r: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 实例晚于或等于 `r` 时，返回 `true`；否则，返回 `false`。

## struct MonoTime
    
    __
    
    public struct MonoTime <: Hashable & Comparable\<MonoTime\>
    
功能：[MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 表示单调时间，是一个用来衡量经过时间的时间类型，类似于一直运行的秒表，提供了获取当前时间，计算和比较等功能。

  * [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 可表示的范围为 [Duration.Zero](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#static-const-zero) 至 [Duration.Max](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#static-const-max)，数值表示为 \[0, 263\)（单位为秒），精度为纳秒。通过 now 方法创建的 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 总是晚于先使用该方式创建的 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime)，常用于性能测试和时间优先的任务队列。

  * 以下为 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 中 now 函数获取当前时间使用的系统调用函数：

系统| 系统调用函数| 时钟类型  
---|---|---  
Linux| clock\_gettime| CLOCK\_MONOTONIC  
Windows| clock\_gettime| CLOCK\_MONOTONIC  
macOS| clock\_gettime| CLOCK\_MONOTONIC  
  
父类型：

  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet)\<MonoTime\>

### static func now\(\)
    
    __
    
    public static func now(): MonoTime
    
功能：获取与当前时间对应的 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime)。

返回值：

  * [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 与当前时间对应的 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime)。

### func compare\(MonoTime\)
    
    __
    
    public func compare(rhs: MonoTime): Ordering
    
功能：判断一个 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例与参数 `rhs` 的大小关系。如果大于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).GT；如果等于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).EQ；如果小于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).LT。

参数：

  * rhs: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 参与比较的 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例。

返回值：

  * [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) \- 当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例与 `rhs` 大小关系。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 哈希值。

### operator func \!=\(MonoTime\)
    
    __
    
    public operator func !=(r: MonoTime): Bool
    
功能：判断当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例是否不等于 `r`。

参数：

  * r: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 单调时间。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例不等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func +\(Duration\)
    
    __
    
    public operator func +(r: Duration): MonoTime
    
功能：实现 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 类型和 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型加法，即 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \+ [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 运算。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 时间间隔。

返回值：

  * [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 参数 `r` 表示时间间隔后的单调时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当结果超过单调时间的表示范围时，抛出异常。

### operator func -\(Duration\)
    
    __
    
    public operator func -(r: Duration): MonoTime
    
功能：实现 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 类型和 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型减法，即 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 运算。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 时间间隔。

返回值：

  * [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 参数 `r` 表示时间间隔前的单调时间。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当结果超过单调时间的表示范围时，抛出异常。

### operator func -\(MonoTime\)
    
    __
    
    public operator func -(r: MonoTime): Duration
    
功能：实现 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 类型之间的减法，即 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 运算。

参数：

  * r: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 单调时间。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 当前实例距 `r` 经过的时间间隔。

### operator func <\(MonoTime\)
    
    __
    
    public operator func <(r: MonoTime): Bool
    
功能：判断当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例是否早于 `r`。

参数：

  * r: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 单调时间。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例早于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func <=\(MonoTime\)
    
    __
    
    public operator func <=(r: MonoTime): Bool
    
功能：判断当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例是否早于或等于 `r`。

参数：

  * r: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 单调时间。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例早于或等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func ==\(MonoTime\)
    
    __
    
    public operator func ==(r: MonoTime): Bool
    
功能：判断当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例是否等于 `r`。

参数：

  * r: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 单调时间。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func >\(MonoTime\)
    
    __
    
    public operator func >(r: MonoTime): Bool
    
功能：判断当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例是否晚于 `r`。

参数：

  * r: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 单调时间。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例晚于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func >=\(MonoTime\)
    
    __
    
    public operator func >=(r: MonoTime): Bool
    
功能：判断当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例是否晚于或等于 `r`。

参数：

  * r: [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) \- 单调时间。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime) 实例晚于或等于 `r` 时，返回 `true`；否则，返回 `false`。