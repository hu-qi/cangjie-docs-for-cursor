
# 类

## class DriverManager
    
    __
    
    public class DriverManager
    
功能：支持运行时根据驱动名获取数据库驱动实例。

### static func deregister\(String\)
    
    __
    
    public static func deregister(driverName: String): Unit
    
功能：按名称取消注册数据库驱动（如果存在）。本函数并发安全。

参数：

  * driverName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 驱动名称。

### static func drivers\(\)
    
    __
    
    public static func drivers(): Array\<String\>
    
功能：返回已注册数据库驱动名称的列表（名称已按照字典序排序）。本方法并发安全。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 数据库驱动名称的列表。

### static func getDriver\(String\)
    
    __
    
    public static func getDriver(driverName: String): Option\<Driver\>
    
功能：按名称获取已注册的数据库驱动，如果不存在返回 `None`。本函数并发安全。

参数：

  * driverName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 驱动名称。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Driver](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-driver)> \- 若驱动存在则返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 包装的驱动实例，否则返回 `None`。

### static func register\(String, Driver\)
    
    __
    
    public static func register(driverName: String, driver: Driver): Unit
    
功能：按名称和驱动实例注册数据库驱动，名称和实例一一对应。本方法并发安全。

参数：

  * driverName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 驱动名称。
  * driver: [Driver](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-driver) \- 驱动实例。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当指定的驱动名称已经存在时，抛出异常。

## class PooledDatasource
    
    __
    
    public class PooledDatasource <: Datasource {
        public init(datasource: Datasource)
    }
    
功能：数据库连接池类，提供数据库连接池能力。

父类型：

  * [Datasource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-datasource)

### prop connectionTimeout
    
    __
    
    public mut prop connectionTimeout: Duration
    
功能：从池中获取连接的超时时间。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当该属性被设置为 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).Max 或 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).Min 时，抛此异常。
  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当获取连接超时后，抛出此异常。

### prop idleTimeout
    
    __
    
    public mut prop idleTimeout: Duration
    
功能：允许连接在池中闲置的最长时间，超过这个时间的空闲连接可能会被回收。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### prop keepaliveTime
    
    __
    
    public mut prop keepaliveTime: Duration
    
功能：检查空闲连接健康状况的间隔时间，防止它被数据库或网络基础设施超时。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### prop maxIdleSize
    
    __
    
    public mut prop maxIdleSize: Int32
    
功能：最大空闲连接数量，超过这个数量的空闲连接会被关闭，负数或0表示无限制。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### prop maxLifeTime
    
    __
    
    public mut prop maxLifeTime: Duration
    
功能：自连接创建以来的最大持续时间，在该持续时间之后，连接将自动关闭。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### prop maxSize
    
    __
    
    public mut prop maxSize: Int32
    
功能：连接池最大连接数量，负数或0表示无限制。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### init\(Datasource\)
    
    __
    
    public init(datasource: Datasource)
    
功能：通过数据源 datasource 构造一个 [PooledDatasource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-pooleddatasource) 实例，入参必须为 [Datasource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-datasource) 对象。

参数：

  * datasource: [Datasource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-datasource) \- 数据源。

### func close\(\)
    
    __
    
    public func close(): Unit
    
功能：关闭连接池中的所有连接并阻止其他连接请求。调用该方法会阻塞至所有连接关闭并归还到连接池。

### func connect\(\)
    
    __
    
    public func connect(): Connection
    
功能：获取一个连接。

返回值：

  * [Connection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-connection) \- 获取到的连接。

### func isClosed\(\)
    
    __
    
    public func isClosed(): Bool
    
功能：判断连接是否关闭。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 连接是否关闭。

### func setOption\(String, String\)
    
    __
    
    public func setOption(key: String, value: String): Unit
    
功能：设置数据库驱动连接选项（公钥在 [SqlOption](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqloption) 中预定义）。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接选项名称。
  * value: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接选项的值。

## class SqlBigInt \(deprecated\)
    
    __
    
    public class SqlBigInt <: SqlDbType {
        public init(v: Int64)
    }
    
功能：大整数，对应仓颉 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlBigInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbigInt-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Int64
    
功能：该数据的值。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### init\(Int64\)
    
    __
    
    public init(v: Int64)
    
功能：根据传入参数 v 构造一个 [SqlBigInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbigInt-deprecated) 实例。

参数：

  * v: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 传入的数据。

## class SqlBinary \(deprecated\)
    
    __
    
    public class SqlBinary <: SqlDbType {
        public init(v: Array\<Byte\>)
    }
    
功能：定长二进制字符串，对应仓颉 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbinary-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Array\<Byte\>
    
功能：该数据的值。

类型：[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>

### init\(Array\<Byte\>\)
    
    __
    
    public init(v: Array\<Byte\>)
    
功能：根据传入参数 v 构造一个 [SqlBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbinary-deprecated) 实例。

参数：

  * v: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 传入的数据。

## class SqlBlob \(deprecated\)
    
    __
    
    public class SqlBlob <: SqlDbType {
        public init(v: InputStream)
    }
    
功能：变长超大二进制字符串（BINARY LARGE OBJECT），对应仓颉 [InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlBlob \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlblob-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: InputStream
    
功能：该数据的值。

类型：[InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream)

### init\(InputStream\)
    
    __
    
    public init(v: InputStream)
    
功能：根据传入参数 v 构造一个 [SqlBlob \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlblob-deprecated) 实例。

参数：

  * v: [InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) \- 传入的数据。

## class SqlBool \(deprecated\)
    
    __
    
    public class SqlBool <: SqlDbType {
        public init(v: Bool)
    }
    
功能：布尔类型，对应仓颉 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlBool\(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbool-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Bool
    
功能：该数据的值。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### init\(Bool\)
    
    __
    
    public init(v: Bool)
    
功能：根据传入参数 v 构造一个 [SqlBool\(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbool-deprecated) 实例。

参数：

  * v: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 传入的数据。

## class SqlByte \(deprecated\)
    
    __
    
    public class SqlByte <: SqlDbType {
        public init(v: Int8)
    }
    
功能：字节，对应仓颉 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlByte \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbyte-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Int8
    
功能：该数据的值。

类型：[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)

### init\(Int8\)
    
    __
    
    public init(v: Int8)
    
功能：根据传入参数 v 构造一个 [SqlByte \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlbyte-deprecated) 实例。

参数：

  * v: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 传入的数据。

## class SqlChar \(deprecated\)
    
    __
    
    public class SqlChar <: SqlDbType {
        public init(v: String)
    }
    
功能：定长字符串，对应仓颉 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlChar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlchar-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: String
    
功能：该数据的值。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### init\(String\)
    
    __
    
    public init(v: String)
    
功能：根据传入参数 v 构造一个 [SqlChar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlchar-deprecated) 实例。

参数：

  * v: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 传入的数据。

## class SqlClob \(deprecated\)
    
    __
    
    public class SqlClob <: SqlDbType {
        public init(v: InputStream)
    }
    
功能：变长超大字符串（RUNE LARGE OBJECT），对应仓颉 [InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlClob](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlclob-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: InputStream
    
功能：该数据的值。

类型：[InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream)

### init\(InputStream\)
    
    __
    
    public init(v: InputStream)
    
功能：根据传入参数 v 构造一个 [SqlClob](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlclob-deprecated) 实例。

参数：

  * v: [InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) \- 传入的数据。

## class SqlDate \(deprecated\)
    
    __
    
    public class SqlDate <: SqlDbType {
        public init(v: DateTime)
    }
    
功能：日期，仅年月日有效，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlDate \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqldate-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: DateTime
    
功能：该数据的值。

类型：[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(DateTime\)
    
    __
    
    public init(v: DateTime)
    
功能：根据传入参数 v 构造一个 [SqlDate \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqldate-deprecated) 实例。

参数：

  * v: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlDecimal \(deprecated\)
    
    __
    
    public class SqlDecimal <: SqlDbType {
        public init(v: Decimal)
    }
    
功能：高精度数，对应仓颉 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlDecimal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqldecimal-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Decimal
    
功能：该数据的值。

类型：[Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal)

### init\(Decimal\)
    
    __
    
    public init(v: Decimal)
    
功能：根据传入参数 v 构造一个 [SqlDecimal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqldecimal-deprecated) 实例。

参数：

  * v: [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 传入的数据。

## class SqlDouble \(deprecated\)
    
    __
    
    public class SqlDouble <: SqlDbType {
        public init(v: Float64)
    }
    
功能：双精度数，对应仓颉 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlDouble \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqldouble-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Float64
    
功能：该数据的值。

类型：[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64)

### init\(Float64\)
    
    __
    
    public init(v: Float64)
    
功能：根据传入参数 v 构造一个 [SqlDouble \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqldouble-deprecated) 实例。

参数：

  * v: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 传入的数据。

## class SqlInteger \(deprecated\)
    
    __
    
    public class SqlInteger <: SqlDbType {
        public init(v: Int32)
    }
    
功能：中整数，对应仓颉 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlInteger \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlinteger-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Int32
    
功能：该数据的值。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### init\(Int32\)
    
    __
    
    public init(v: Int32)
    
功能：根据传入参数 v 构造一个 [SqlInteger \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlinteger-deprecated) 实例。

参数：

  * v: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 传入的数据。

## class SqlInterval \(deprecated\)
    
    __
    
    public class SqlInterval <: SqlDbType {
        public init(v: Duration)
    }
    
功能：时间间隔，对应仓颉 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlInterval \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlinterval-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Duration
    
功能：该数据的值。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### init\(Duration\)
    
    __
    
    public init(v: Duration)
    
功能：根据传入参数 v 构造一个 [SqlInterval \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlinterval-deprecated) 实例。

参数：

  * v: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 传入的数据。

## class SqlNullableBigInt \(deprecated\)
    
    __
    
    public class SqlNullableBigInt <: SqlNullableDbType {
        public init(v: ?Int64)
    }
    
功能：大整数，对应仓颉 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableBigInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebigInt-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Int64
    
功能：该数据的值。

类型：?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### init\(?Int64\)
    
    __
    
    public init(v: ?Int64)
    
功能：根据传入参数 v 构造一个 [SqlNullableBigInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebigInt-deprecated) 实例。

参数：

  * v: ?[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 传入的数据。

## class SqlNullableBinary \(deprecated\)
    
    __
    
    public class SqlNullableBinary <: SqlNullableDbType {
        public init(v: ?Array\<Byte\>)
    }
    
功能：定长二进制字符串，对应仓颉 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebinary-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Array\<Byte\>
    
功能：该数据的值。

类型：?[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>

### init\(?Array\<Byte\>\)
    
    __
    
    public init(v: ?Array\<Byte\>)
    
功能：根据传入参数 v 构造一个 [SqlNullableBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebinary-deprecated) 实例。

参数：

  * v: ?[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 传入的数据。

## class SqlNullableBlob \(deprecated\)
    
    __
    
    public class SqlNullableBlob <: SqlNullableDbType {
        public init(v: ?InputStream)
    }
    
功能：变长超大二进制字符串（BINARY LARGE OBJECT），对应仓颉 [InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableBlob \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableblob-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?InputStream
    
功能：该数据的值。

类型：?[InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream)

### init\(?InputStream\)
    
    __
    
    public init(v: ?InputStream)
    
功能：根据传入参数 v 构造一个 [SqlNullableBlob \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableblob-deprecated) 实例。

参数：

  * v: ?[InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) \- 传入的数据。

## class SqlNullableBool \(deprecated\)
    
    __
    
    public class SqlNullableBool <: SqlNullableDbType {
        public init(v: ?Bool)
    }
    
功能：布尔类型，对应仓颉 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableBool \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebool-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Bool
    
功能：该数据的值。

类型：?[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### init\(?Bool\)
    
    __
    
    public init(v: ?Bool)
    
功能：根据传入参数 v 构造一个 [SqlNullableBool \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebool-deprecated) 实例。

参数：

  * v: ?[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 传入的数据。

## class SqlNullableByte \(deprecated\)
    
    __
    
    public class SqlNullableByte <: SqlNullableDbType {
        public init(v: ?Int8)
    }
    
功能：字节，对应仓颉 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableByte \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebyte-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Int8
    
功能：该数据的值。

类型：?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)

### init\(?Int8\)
    
    __
    
    public init(v: ?Int8)
    
功能：根据传入参数 v 构造一个 [SqlNullableByte \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablebyte-deprecated) 实例。

参数：

  * v: ?[Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 传入的数据。

## class SqlNullableChar \(deprecated\)
    
    __
    
    public class SqlNullableChar <: SqlNullableDbType {
        public init(v: ?String)
    }
    
功能：定长字符串，对应仓颉 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableChar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablechar-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?String
    
功能：该数据的值。

类型：?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### init\(?String\)
    
    __
    
    public init(v: ?String)
    
功能：根据传入参数 v 构造一个 [SqlNullableChar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablechar-deprecated) 实例。

参数：

  * v: ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 传入的数据。

## class SqlNullableClob \(deprecated\)
    
    __
    
    public class SqlNullableClob <: SqlNullableDbType {
        public init(v: ?InputStream)
    }
    
功能：变长超大字符串（RUNE LARGE OBJECT），对应仓颉 [InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableClob \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableclob-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?InputStream
    
功能：该数据的值。

类型：?[InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream)

### init\(?InputStream\)
    
    __
    
    public init(v: ?InputStream)
    
功能：根据传入参数 v 构造一个 [SqlNullableClob \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableclob-deprecated) 实例。

参数：

  * v: ?[InputStream](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/io/io_package_api/io_package_interfaces.html#interface-inputstream) \- 传入的数据。

## class SqlNullableDate \(deprecated\)
    
    __
    
    public class SqlNullableDate <: SqlNullableDbType {
        public init(v: ?DateTime)
    }
    
功能：日期，仅年月日有效，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableDate \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabledate-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?DateTime
    
功能：该数据的值。

类型：?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(?DateTime\)
    
    __
    
    public init(v: ?DateTime)
    
功能：根据传入参数 v 构造一个 [SqlNullableDate \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabledate-deprecated) 实例。

参数：

  * v: ?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlNullableDecimal \(deprecated\)
    
    __
    
    public class SqlNullableDecimal <: SqlNullableDbType {
        public init(v: ?Decimal)
    }
    
功能：高精度数，对应仓颉 [Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableDecimal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabledecimal-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Decimal
    
功能：该数据的值。

类型：?[Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal)

### init\(?Decimal\)
    
    __
    
    public init(v: ?Decimal)
    
功能：根据传入参数 v 构造一个 [SqlNullableDecimal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabledecimal-deprecated) 实例。

参数：

  * v: ?[Decimal](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs.html#struct-decimal) \- 传入的数据。

## class SqlNullableDouble \(deprecated\)
    
    __
    
    public class SqlNullableDouble <: SqlNullableDbType {
        public init(v: ?Float64)
    }
    
功能：双精度数，对应仓颉 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableDouble \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabledouble-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Float64
    
功能：该数据的值。

类型：?[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64)

### init\(?Float64\)
    
    __
    
    public init(v: ?Float64)
    
功能：根据传入参数 v 构造一个 [SqlNullableDouble \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabledouble-deprecated) 实例。

参数：

  * v: ?[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 传入的数据。

## class SqlNullableInteger \(deprecated\)
    
    __
    
    public class SqlNullableInteger <: SqlNullableDbType {
        public init(v: ?Int32)
    }
    
功能：中整数，对应仓颉 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableInteger \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableinteger-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Int32
    
功能：该数据的值。

类型：?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### init\(?Int32\)
    
    __
    
    public init(v: ?Int32)
    
功能：根据传入参数 v 构造一个 [SqlNullableInteger \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableinteger-deprecated) 实例。

参数：

  * v: ?[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 传入的数据。

## class SqlNullableInterval \(deprecated\)
    
    __
    
    public class SqlNullableInterval <: SqlNullableDbType {
        public init(v: ?Duration)
    }
    
功能：时间间隔，对应仓颉 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableInterval \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableinterval-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Duration
    
功能：该数据的值。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### init\(?Duration\)
    
    __
    
    public init(v: ?Duration)
    
功能：根据传入参数 v 构造一个 [SqlNullableInterval \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullableinterval-deprecated) 实例。

参数：

  * v: ?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 传入的数据。

## class SqlNullableReal \(deprecated\)
    
    __
    
    public class SqlNullableReal <: SqlNullableDbType {
        public init(v: ?Float32)
    }
    
功能：浮点数，对应仓颉 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableReal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablereal-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Float32
    
功能：该数据的值。

类型：?[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)

### init\(?Float32\)
    
    __
    
    public init(v: ?Float32)
    
功能：根据传入参数 v 构造一个 [SqlNullableReal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablereal-deprecated) 实例。

参数：

  * v: ?[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 传入的数据。

## class SqlNullableSmallInt \(deprecated\)
    
    __
    
    public class SqlNullableSmallInt <: SqlNullableDbType {
        public init(v: ?Int16)
    }
    
功能：小整数，对应仓颉 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableSmallInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablesmallint-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Int16
    
功能：该数据的值。

类型：?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)

### init\(?Int16\)
    
    __
    
    public init(v: ?Int16)
    
功能：根据传入参数 v 构造一个 [SqlNullableSmallInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablesmallint-deprecated) 实例。

参数：

  * v: ?[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 传入的数据。

## class SqlNullableTime \(deprecated\)
    
    __
    
    public class SqlNullableTime <: SqlNullableDbType {
        public init(v: ?DateTime)
    }
    
功能：时间，仅时分秒毫秒有效，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableTime \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabletime-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?DateTime
    
功能：该数据的值。

类型：?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(?DateTime\)
    
    __
    
    public init(v: ?DateTime)
    
功能：根据传入参数 v 构造一个 [SqlNullableTime \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabletime-deprecated) 实例。

参数：

  * v: ?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlNullableTimeTz \(deprecated\)
    
    __
    
    public class SqlNullableTimeTz <: SqlNullableDbType {
        public init(v: ?DateTime)
    }
    
功能：带时区的时间，仅时分秒毫秒时区有效，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableTimeTz \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabletimeTz-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?DateTime
    
功能：该数据的值。

类型：?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(?DateTime\)
    
    __
    
    public init(v: ?DateTime)
    
功能：根据传入参数 v 构造一个 [SqlNullableTimeTz \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabletimeTz-deprecated) 实例。

参数：

  * v: ?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlNullableTimestamp \(deprecated\)
    
    __
    
    public class SqlNullableTimestamp <: SqlNullableDbType {
        public init(v: ?DateTime)
    }
    
功能：时间戳，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableTimestamp \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabletimestamp-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?DateTime
    
功能：该数据的值。

类型：?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(?DateTime\)
    
    __
    
    public init(v: ?DateTime)
    
功能：根据传入参数 v 构造一个 [SqlNullableTimestamp \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullabletimestamp-deprecated) 实例。

参数：

  * v: ?[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlNullableVarBinary \(deprecated\)
    
    __
    
    public class SqlNullableVarBinary <: SqlNullableDbType {
        public init(v: ?Array\<Byte\>)
    }
    
功能：变长二进制字符串，对应仓颉 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableVarBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablevarbinary-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?Array\<Byte\>
    
功能：该数据的值。

类型：?[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>

### init\(?Array\<Byte\>\)
    
    __
    
    public init(v: ?Array\<Byte\>)
    
功能：根据传入参数 v 构造一个 [SqlNullableVarBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablevarbinary-deprecated) 实例。

参数：

  * v: ?[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 传入的数据。

## class SqlNullableVarchar \(deprecated\)
    
    __
    
    public class SqlNullableVarchar <: SqlNullableDbType {
        public init(v: ?String)
    }
    
功能：变长字符串，对应仓颉 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型，可为数据库 `Null` 值。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlNullableVarchar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablevarchar-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: ?String
    
功能：该数据的值。 类型：?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### init\(?String\)
    
    __
    
    public init(v: ?String)
    
功能：根据传入参数 v 构造一个 [SqlNullableVarchar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlnullablevarchar-deprecated) 实例。

参数：

  * v: ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 传入的数据。

## class SqlOption
    
    __
    
    public class SqlOption {
        public static const URL = "url"
        public static const Host = "host"
        public static const Username = "username"
        public static const Password = "password"
        public static const Driver = "driver"
        public static const Database = "database"
        public static const Encoding = "encoding"
        public static const ConnectionTimeout = "connection_timeout"
        public static const UpdateTimeout = "update_timeout"
        public static const QueryTimeout = "query_timeout"
        public static const FetchRows = "fetch_rows"
        public static const SSLMode = "ssl.mode"
        public static const SSLModePreferred = "ssl.mode.preferred"
        public static const SSLModeDisabled = "ssl.mode.disabled"
        public static const SSLModeRequired = "ssl.mode.required"
        public static const SSLModeVerifyCA = "ssl.mode.verify_ca"
        public static const SSLModeVerifyFull = "ssl.mode.verify_full"
        public static const SSLCA = "ssl.ca"
        public static const SSLCert = "ssl.cert"
        public static const SSLKey = "ssl.key"
        public static const SSLKeyPassword = "ssl.key.password"
        public static const SSLSni = "ssl.sni"
        public static const Tls12Ciphersuites = "tls1.2.ciphersuites"
        public static const Tls13Ciphersuites = "tls1.3.ciphersuites"
        public static const TlsVersion = "tls.version"
    }
    
功能：预定义的 sql 选项名称和值。如果需要扩展，请不要与这些名称和值冲突。

### static const ConnectionTimeout
    
    __
    
    public static const ConnectionTimeout = "connection_timeout"
    
功能：获取 connect 操作的超时时间，单位 ms。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Database
    
    __
    
    public static const Database = "database"
    
功能：获取数据库名称。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Driver
    
    __
    
    public static const Driver = "driver"
    
功能：获取数据库驱动名称，比如 postgres，opengauss。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Encoding
    
    __
    
    public static const Encoding = "encoding"
    
功能：获取数据库字符集编码类型。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const FetchRows
    
    __
    
    public static const FetchRows = "fetch_rows"
    
功能：获取每次获取额外数据时从数据库中提取的行数。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Host
    
    __
    
    public static const Host = "host"
    
功能：获取数据库服务器主机名或者 [IP]() 地址。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Password
    
    __
    
    public static const Password = "password"
    
功能：获取连接数据库的密码。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const QueryTimeout
    
    __
    
    public static const QueryTimeout = "query_timeout"
    
功能：获取 query 操作的超时时间，单位 ms。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLCA
    
    __
    
    public static const SSLCA = "ssl.ca"
    
功能：证书颁发机构（ CA ）证书文件的路径名。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLCert
    
    __
    
    public static const SSLCert = "ssl.cert"
    
功能：客户端 SSL 公钥证书文件的路径名。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLKey
    
    __
    
    public static const SSLKey = "ssl.key"
    
功能：客户端 SSL 私钥文件的路径名。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLKeyPassword
    
    __
    
    public static const SSLKeyPassword = "ssl.key.password"
    
功能：客户端 SSL 私钥文件的密码。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLMode
    
    __
    
    public static const SSLMode = "ssl.mode"
    
功能：获取 SSLMode 传输层加密模式。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLModeDisabled
    
    __
    
    public static const SSLModeDisabled = "ssl.mode.disabled"
    
功能：建立未加密的连接。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLModePreferred
    
    __
    
    public static const SSLModePreferred = "ssl.mode.preferred"
    
功能：如果服务器支持加密连接，则建立加密连接; 如果无法建立加密连接，则回退到未加密连接，这是 SSLMode 的默认值。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLModeRequired
    
    __
    
    public static const SSLModeRequired = "ssl.mode.required"
    
功能：如果服务器支持加密连接，则建立加密连接。如果无法建立加密连接，则连接失败。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLModeVerifyCA
    
    __
    
    public static const SSLModeVerifyCA = "ssl.mode.verify_ca"
    
功能：SSLModeVerifyCA 和 SSLModeRequired 类似，但是增加了校验服务器证书，如果校验失败，则连接失败。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLModeVerifyFull
    
    __
    
    public static const SSLModeVerifyFull = "ssl.mode.verify_full"
    
功能：SSLModeVerifyFull 和 SSLModeVerifyCA 类似，但通过验证服务器证书中的标识与客户端连接的主机名是否匹配，来执行主机名身份验证。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const SSLSni
    
    __
    
    public static const SSLSni = "ssl.sni"
    
功能：客户端通过该标识在握手过程开始时试图连接到哪个主机名。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Tls12Ciphersuites
    
    __
    
    public static const Tls12Ciphersuites = "tls1.2.ciphersuites"
    
功能：此选项指定客户端允许使用 TLSv1.2 及以下的加密连接使用哪些密码套件。 值为冒号分隔的字符串，比如 "TLS\_ECDHE\_ECDSA\_WITH\_AES\_128\_GCM\_[SHA256]():TLS\_DHE\_RSA\_WITH\_AES\_128\_CBC\_SHA"。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Tls13Ciphersuites
    
    __
    
    public static const Tls13Ciphersuites = "tls1.3.ciphersuites"
    
功能：此选项指定客户端允许使用 TLSv1.3 的加密连接使用哪些密码套件。 值为冒号分隔的字符串，比如 "TLS\_AES\_256\_GCM\_[SHA384]():TLS\_CHACHA20\_POLY1305\_[SHA256]()"。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const TlsVersion
    
    __
    
    public static const TlsVersion = "tls.version"
    
功能：支持的 TLS 版本号，值为逗号分隔的字符串，比如 "TLSv1.2,TLSv1.3"。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const URL
    
    __
    
    public static const URL = "url"
    
功能：获取数据库连接 [URL]() 字符串。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const UpdateTimeout
    
    __
    
    public static const UpdateTimeout = "update_timeout"
    
功能：获取 update 操作的超时时间，单位 ms。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### static const Username
    
    __
    
    public static const Username = "username"
    
功能：获取连接数据库的用户名。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

## class SqlReal \(deprecated\)
    
    __
    
    public class SqlReal <: SqlDbType {
        public init(v: Float32)
    }
    
功能：浮点数，对应仓颉 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlReal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlreal-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Float32
    
功能：该数据的值。

类型：[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)

### init\(Float32\)
    
    __
    
    public init(v: Float32)
    
功能：根据传入参数 v 构造一个 [SqlReal \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlreal-deprecated) 实例。

参数：

  * v: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 传入的数据。

## class SqlSmallInt \(deprecated\)
    
    __
    
    public class SqlSmallInt <: SqlDbType {
        public init(v: Int16)
    }
    
功能：小整数，对应仓颉 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlSmallInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlsmallInt-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Int16
    
功能：该数据的值。

类型：[Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)

### init\(Int16\)
    
    __
    
    public init(v: Int16)
    
功能：根据传入参数 v 构造一个 [SqlSmallInt \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlsmallInt-deprecated) 实例。

参数：

  * v: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 传入的数据。

## class SqlTime \(deprecated\)
    
    __
    
    public class SqlTime <: SqlDbType {
        public init(v: DateTime)
    }
    
功能：时间，仅时分秒毫秒有效，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlTime \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqltime-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: DateTime
    
功能：该数据的值。

类型：[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(DateTime\)
    
    __
    
    public init(v: DateTime)
    
功能：根据传入参数 v 构造一个 [SqlTime \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqltime-deprecated) 实例。

参数：

  * v: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlTimeTz \(deprecated\)
    
    __
    
    public class SqlTimeTz <: SqlDbType {
        public init(v: DateTime)
    }
    
功能：带时区的时间，仅时分秒毫秒时区有效，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlTimeTz \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqltimetz-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: DateTime
    
功能：该数据的值。

类型：[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(DateTime\)
    
    __
    
    public init(v: DateTime)
    
功能：根据传入参数 v 构造一个 [SqlTimeTz \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqltimetz-deprecated) 实例。

参数：

  * v: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlTimestamp \(deprecated\)
    
    __
    
    public class SqlTimestamp <: SqlDbType {
        public init(v: DateTime)
    }
    
功能：时间戳，对应仓颉 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlTimestamp \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqltimestamp-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: DateTime
    
功能：该数据的值。

类型：[DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime)

### init\(DateTime\)
    
    __
    
    public init(v: DateTime)
    
功能：根据传入参数 v 构造一个 [SqlTimestamp \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqltimestamp-deprecated) 实例。

参数：

  * v: [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime) \- 传入的数据。

## class SqlVarBinary \(deprecated\)
    
    __
    
    public class SqlVarBinary <: SqlDbType {
        public init(v: Array\<Byte\>)
    }
    
功能：变长二进制字符串，对应仓颉 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlVarBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlvarbinary-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: Array\<Byte\>
    
功能：该数据的值。

类型：[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>

### init\(Array\<Byte\>\)
    
    __
    
    public init(v: Array\<Byte\>)
    
功能：根据传入参数 v 构造一个 [SqlVarBinary \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlvarbinary-deprecated) 实例。

参数：

  * v: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 传入的数据。

## class SqlVarchar \(deprecated\)
    
    __
    
    public class SqlVarchar <: SqlDbType {
        public init(v: String)
    }
    
功能：变长字符串，对应仓颉 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用仓颉原生类型替代。

父类型：

  * [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)

### prop name
    
    __
    
    public prop name: String
    
功能：类型名称，即 [SqlVarchar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlvarchar-deprecated)。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop value
    
    __
    
    public mut prop value: String
    
功能：该数据的值。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### init\(String\)
    
    __
    
    public init(v: String)
    
功能：根据传入参数 v 构造一个 [SqlVarchar \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes.html#class-sqlvarchar-deprecated) 实例。

参数：

  * v: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 传入的数据。