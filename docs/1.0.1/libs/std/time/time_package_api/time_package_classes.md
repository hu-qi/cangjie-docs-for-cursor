  
# 类

## class DateTimeFormat
    
    __
    
    public class DateTimeFormat {
        public static const RFC1123: String = "www, dd MMM yyyy HH:mm:ss z"
        public static const RFC3339: String = "yyyy-MM-ddTHH:mm:ssOOOO"
        public static const RFC822: String = "ww dd MMM yy HH:mm:ss z"
        public static const RFC850: String = "wwww, dd-MMM-yy HH:mm:ss z"
    }
    
功能：提供时间格式的功能，用于解析和生成 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 。

### static const RFC1123
    
    __
    
    public static const RFC1123: String = "www, dd MMM yyyy HH:mm:ss z"
    
功能：提供 RFC1123 时间格式，时间字符串格式为 `www, dd MMM yyyy HH:mm:ss z`。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const RFC3339
    
    __
    
    public static const RFC3339: String = "yyyy-MM-ddTHH:mm:ssOOOO"
    
功能：提供 RFC3339 时间格式，时间字符串格式为 `yyyy-MM-ddTHH:mm:ssOOOO`。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const RFC822
    
    __
    
    public static const RFC822: String = "ww dd MMM yy HH:mm:ss z"
    
功能：提供 RFC822 时间格式，时间字符串格式为 `ww dd MMM yy HH:mm:ss z`。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const RFC850
    
    __
    
    public static const RFC850: String = "wwww, dd-MMM-yy HH:mm:ss z"
    
功能：提供 RFC850 时间格式，时间字符串格式为 `wwww, ww-MMM-yy HH:mm:ss z`。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop format: String \(deprecated\)
    
    __
    
    public prop format: String
    
功能：DateTimeFormat实例的字符串格式。

> **注意：**
> 
> 未来版本即将废弃不再使用。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static func of\(String\) \(deprecated\)
    
    __
    
    public static func of(format: String): DateTimeFormat
    
功能：根据字符串创建具体的 DateTimeFormat 类型实例。

字符串的具体格式见[时间字符串格式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_overview.html#%E6%97%B6%E9%97%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)

> **注意：**
> 
> 未来版本即将废弃不再使用。

参数：

  * format: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串格式。

返回值：

  * DateTimeFormat \- 时间格式。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当入参格式不符合[时间字符串格式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_overview.html#%E6%97%B6%E9%97%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)中字母数量的规定时，抛出异常。

## class TimeZone
    
    __
    
    public class TimeZone <: ToString & Equatable\<TimeZone\> {
        public static let Local: TimeZone
        public static let UTC: TimeZone
        public init(id: String, offset: Duration)
    }
    
功能：TimeZone 表示时区，记录了某一地区在不同时间较零时区的时间偏移，提供了从系统加载时区、自定义时区等功能。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<TimeZone\>

### static let Local
    
    __
    
    public static let Local: TimeZone
    
功能：获取本地时区。

`Local` 从系统环境变量 TZ 中获取时区 ID，并根据该时区 ID 从系统时区文件中加载时区。其行为与函数load相同。

环境变量 TZ 的取值为标准时区 ID 格式（各操作系统遵循相同规范），例如“Asia/Shanghai”。

若环境变量 TZ 未设置或者为空，加载本地时区的规则如下：

  * 在 Linux/Unix like 系统上：加载系统路径“/etc/localtime”链接，时区名与“/etc/localtime”指向的相对路径名相同，例如“Asia/Shanghai”。
  * 如果上一条执行失败或者在 Windows 系统上，返回 ID 为 “UTC&偏移量” 的时区，例如“Asia/Shanghai”对应的时区为“UTC+08:00”。

类型：[TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone)

### static let UTC
    
    __
    
    public static let UTC: TimeZone
    
功能：获取 UTC 时区。

类型：[TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone)

### prop id
    
    __
    
    public prop id: String
    
功能：获取当前 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例所关联的时区 ID。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### init\(String, Duration\)
    
    __
    
    public init(id: String, offset: Duration)
    
功能：使用指定的时区 ID 和偏移量构造一个自定义 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例。

参数：

  * id: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时区 ID。使用“/”作为分隔符，例如“Asia/Shanghai”，各操作系统使用相同规范。
  * offset: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 相对 UTC 时区的偏移量，精度为秒，向东为正、向西为负。取值范围为 \(-25 \* [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).hour, 26 \* [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).hour\)。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当输入 `id` 为空字符串，或 `offset` 超出有效区间时，抛出异常。

### static func load\(String\)
    
    __
    
    public static func load(id: String): TimeZone
    
功能：从系统中加载参数 `id` 指定的时区。

> **说明：**
> 
>   * 在 Linux 、 macOS 和 HarmonyOS 系统中，若存在环境变量 CJ\_TZPATH，则使用环境变量指定的路径加载时区文件（若存在多个通过分隔符 “:” 分开的环境变量值，则按照分隔路径的先后顺序依次查找时区文件，并加载第一个找到的时区文件），否则从系统时区文件目录（Linux 和 macOS 为 "/usr/share/zoneinfo"，HarmonyOS 不支持）加载时区。
>   * 在 Windows 系统中，用户需下载[时区文件](https://www.iana.org/time-zones)并编译，设置环境变量 CJ\_TZPATH 指向 zoneinfo 目录（若存在多个通过分隔符 “;” 分开的环境变量值，则按照分隔路径的先后顺序依次查找时区文件，并加载第一个找到的时区文件），否则会导致异常。
> 

参数：

  * id: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时区 ID。

返回值：

  * [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- 时区。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数 `id` 为空，或长度超过 4096 字节，或不符合标准时区 ID 格式时，抛出异常。
  * [InvalidDataException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-invaliddataexception) \- 当时区文件加载失败\(找不到文件，文件解析失败等\)时，抛出异常。

### static func loadFromPaths\(String, Array\<String\>\)
    
    __
    
    public static func loadFromPaths(id: String, tzpaths: Array\<String\>): TimeZone
    
功能：根据参数 `tzpaths` 指定的时区文件目录，加载参数 `id` 指定的时区。

加载时区时，将从第一个被读取成功的时区文件路径中加载时区。时区文件格式需要满足[时区信息格式](https://datatracker.ietf.org/doc/html/rfc8536)。

参数：

  * id: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时区 ID。
  * tzpaths: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 时区文件路径数组。

返回值：

  * [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- 加载的时区。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `id` 为空，或长度超过 4096 字节，或不符合标准时区 ID 格式时，抛出异常。
  * [InvalidDataException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-invaliddataexception) \- 当时区文件加载失败\(找不到文件，文件解析失败等\)时，抛出异常。

### static func loadFromTZData\(String, Array\<UInt8\>\)
    
    __
    
    public static func loadFromTZData(id: String, data: Array\<UInt8\>): TimeZone
    
功能：使用指定的时区 ID 和时区数据构造一个自定义 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例。`id` 可以是任何合法字符串，`data` 需要满足 IANA 时区文件格式，加载成功时获得 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例，否则抛出异常。

参数：

  * id: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时区 ID。
  * data: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 满足[时区信息格式](https://datatracker.ietf.org/doc/html/rfc8536)的数据。

返回值：

  * [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- 加载的时区。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `id` 为空时，抛出异常。
  * [InvalidDataException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-invaliddataexception) \- 如果 `data` 解析失败，则抛出异常。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：获取本 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例时区 ID 的字符串表示。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 时区 ID 的字符串表示。

### operator func \!=\(TimeZone\)
    
    __
    
    public operator func !=(r: TimeZone): Bool
    
功能：判断当前 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例的引用是否不等于 `r` 的引用。

参数：

  * r: [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例的引用不等于 `r` 的引用时，返回 `true`；否则，返回 `false`。

### operator func ==\(TimeZone\)
    
    __
    
    public operator func ==(r: TimeZone): Bool
    
功能：判断当前 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例的引用是否等于 `r` 的引用。

参数：

  * r: [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) \- [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone) 实例的引用等于 `r` 的引用时，返回 `true`；否则，返回 `false`。