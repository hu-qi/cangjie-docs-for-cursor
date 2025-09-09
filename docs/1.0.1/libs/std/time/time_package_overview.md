
# std.time

## 功能介绍

`time` 包提供了与时间相关的类型，包括日期时间，时间间隔，单调时间和时区等，并提供了计算和比较的功能。

### 时间字符串格式

字符串解析时间有以下要求：

  * 字符串必须包含描述具体年月日的信息：如公元年（y）+ 月（M）和日（d），或公元年（y）和一年中的第几天（D）。

  * 如果不包含时分秒的描述信息，则均默认为 0；如果不包含时区信息，则默认为当前时区 TimeZone.Local。

  * 对同一字母表示的格式不允许两次取值，如不允许两次对公元年（y）格式的赋值；表示时区的 O 和 Z 两种格式同样不允许一起出现。

  * 其余的部分字母的格式会作为辅助信息验证，如“2023-04-24-Mon”使用格式“yyyy-MM-dd-www”进行解析时，会验证“Mon”的正确性。

### 字母含义

字母| 含义  
---|---  
a| 上下午  
y| 公元年  
Y| 基于周的年  
M| 月份  
d| 日  
D| 以年算的天数  
w| 以周算的天  
W| 基于 ISO-8601 标准的周  
h| 12小时制的小时  
H| 24小时制的小时  
m| 分钟数  
s| 秒数  
S| 小于一秒的部分  
z| 时区名和时区 ID  
Z| 距零时区偏移  
O| 时区偏移  
G| 纪年  
  
各字母对应规则如下。

### 规则

#### 上下午

合法个数为 1，表示上午或者下午，固定为“AM”或“PM”。

#### 年

字母数量| 解析| 输出  
---|---|---  
1、3、4| 解析 4 位数年份，如 2023、0001等。| 输出最少 4 位数年份，如 2023、0001、99999 等，不足 4 位则补 0。  
2| 解析 2 位数年份，如 23、69 等，其中 xx >= 69 的会解析为 19xx，否则为 20xx，负数同理。| 输出 2 位或 4 位以上个数年份，如 23、69 等，其中 \[1969, 1999\] 会输出为 \[69, 99\]，\[2000, 2068\] 会输出为 \[00, 68\]，负数同理。其余情况至少输出 4 位，不足 4 位则补 0。  
5 ~ 9| 解析对应数量位数年份。| 输出对应数量位数年份，不足则补 0。  
  
#### 月

字母数量| 解析| 输出  
---|---|---  
1| 解析 1 ~ 2 位数字，如 1、 01、 11 等。| 输出 1 ~ 2 位数字，如 1、 11 等。  
2| 解析 2 位数字，如 01、11 等。| 输出 2 位数字，如 01、11 等。  
3| 解析简写的月，如 Jan、Dec 等。| 输出简写的月，如 Jan、Dec 等。  
4| 解析完整书写的月，如 January、December 等。| 输出完整书写的月，如 January、December 等。  
  
#### 数值

不同 number 类型数据的表示范围根据实际值大小变动。

字母数量| 解析| 输出  
---|---|---  
1| 解析 1 ~ 2 位数字，如 1、01、11 等。| 输出 1 ~ 2 位数字，如 1、 11 等。  
2| 解析 2 位数字，如 01、11 等。| 输出 2 位数字，如 01、11 等。  
  
#### 小数秒

字母数量| 解析| 输出  
---|---|---  
1| 解析 3 位数字，如 001、123 等作为毫秒。| 输出 3 位数字，如 001、123 等作为毫秒。  
2| 解析 6 位数字，如 000001、123456 等作为微秒。| 输出 6 位数字，如 000001、123456 等作为微秒。  
3| 解析 9 位数字，如 000000001、123456789 等作为纳秒。| 输出 9 位数字，如 000000001、123456789 等作为纳秒。  
  
#### 时区偏移量

字母数量| 解析| 输出  
---|---|---  
1| 解析格式如：+08、-08 等。| 输出格式如：+08、-08 等，若偏移量不为整小时，则会截断。  
2| 解析格式如：+08:00、-08:59 等。| 输出格式如：+08:00、-08:59 等，偏移量不为整分钟，则会截断。  
3| 解析格式如：+08:00:00、-08:59:59 等。| 输出格式如：+08:00:00、-08:59:59 等。  
4| 解析格式如：+08:00:00、-08:59:59 等。| 输出格式如：case2 或 case3、偏移量为 0 时，输出 Z。  
  
#### 时区名和时区 ID

字母数量| 解析| 输出  
---|---|---  
1、2、3| 解析格式如：CST、GMT 等。| 输出格式如：CST、GMT 等。  
4| 解析时区 ID，格式如：“Asia/Shanghai”等。| 输出时区 ID，格式如：“Asia/Shanghai”等。  
  
#### 距零时区偏移

字母数量| 解析| 输出  
---|---|---  
1| 解析格式如：GMT+0、GMT+10 等。| 输出格式如：GMT+0、GMT+10 等。  
2| 解析格式如：GMT+00:00、GMT+10:00 等。| 输出格式如：GMT+00:00、GMT+10:00 等。  
3| 解析格式如：GMT+00:00:00、GMT+10:00:00 等。| 输出格式如：GMT+00:00:00、GMT+10:00:00 等。  
4| 数量为 2 或 3 的格式。| 数量为 2 或 3 的格式。  
  
#### 以年算的天数

字母数量| 解析| 输出  
---|---|---  
1| 解析格式如：1、 01、001 等 1 ~ 3 位数字。| 输出格式如：1、12、123 等 1 ~ 3 位数字。  
2| 解析格式如：01、001 等 2 ~ 3 位数字。| 输出格式如：001、012、123 等 2 ~ 3 位数字。  
  
#### 以周算的天

字母数量| 解析| 输出  
---|---|---  
1| 解析 1 位数字，如 0、6 等、0 表示周日，其余表示周一至周六。| 输出 1 位数字，如 0、 6 等、0 表示周日，其余表示周一至周六。  
2| 解析 2 位数字，如 00、06 等，00 表示周日，其余表示周一至周六。| 解析 2 位数字，如 00、06 等，00 表示周日，其余表示周一至周六。  
3| 解析简写的周，如 Sun、Sat 等。| 解析简写的周，如 Sun、Sat 等。  
4| 解析完整书写的周，如 Sunday、Saturday 等。| 解析完整书写的周，如 Sunday、Saturday 等。  
  
#### 纪年

字母数量| 解析| 输出  
---|---|---  
1| 解析 A。| 输出 A。  
2| 解析 AD。| 输出 AD。  
3| 解析 Anno Domini。| 输出 Anno Domini。  
  
## API 列表

### 类

类名| 功能  
---|---  
[DateTimeFormat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-datetimeformat)| 提供时间格式的功能，用于解析和生成 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 。  
[TimeZone](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_classes.html#class-timezone)| `TimeZone` 表示时区，记录了某一地区在不同时间较零时区的时间偏移，提供了从系统加载时区、自定义时区等功能。  
  
### 枚举

枚举名| 功能  
---|---  
[DayOfWeek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-dayofweek)| `DayOfWeek` 表示一周中的某一天，提供了与 `Int64` 类型转换，相等性判别以及获取枚举值的字符串表示的功能。  
[Month](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_enums.html#enum-month)| `Month` 用以表示月份，表示一年中的某一月，提供了与 `Int64` 类型转换和计算，相等性判别以及获取枚举值的字符串表示的功能。  
  
### 结构体

结构体名| 功能  
---|---  
[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)| `DateTime` 表示日期时间，是一个描述某一时间点的时间类型，提供了基于时区的日期时间读取、计算、比较、转换，以及序列化和反序列化等功能。  
[MonoTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-monotime)| `MonoTime` 表示单调时间，是一个用来衡量经过时间的时间类型，类似于一直运行的秒表，提供了获取当前时间，计算和比较等功能。  
  
### 异常类

异常类名| 功能  
---|---  
[InvalidDataException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-invaliddataexception)| `InvalidDataException` 表示加载时区时的异常。  
[TimeParseException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_exceptions.html#class-timeparseexception)| `TimeParseException` 表示解析时间字符串时的异常。