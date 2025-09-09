
# 接口

## interface ColumnInfo
    
    __
    
    public interface ColumnInfo {
        prop displaySize: Int64
        prop length: Int64
        prop name: String
        prop nullable: Bool
        prop scale: Int64
        prop typeName: String
    }
    
功能：执行 Select/Query 语句返回结果的列信息。

### prop displaySize
    
    __
    
    prop displaySize: Int64
    
功能：获取列值的最大显示长度，如果无限制，则应该返回 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).Max （仍然受数据库的限制）。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop length
    
    __
    
    prop length: Int64
    
功能：获取列值大小。

> **说明：**
> 
>   * 对于数值数据，表示最大精度。
>   * 对于字符数据，表示以字符为单位的长度。
>   * 对于日期时间数据类型，表示字符串表示形式的最大字符长度。
>   * 对于二进制数据，表示以字节为单位的长度。
>   * 对于 RowID 数据类型，表示以字节为单位的长度。
>   * 对于列大小不适用的数据类型，返回 0。
> 

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop name
    
    __
    
    prop name: String
    
功能：列名或者别名。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop nullable
    
    __
    
    prop nullable: Bool
    
功能：表示列值是否允许数据库 `Null` 值。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### prop scale
    
    __
    
    prop scale: Int64
    
功能：获取列值的小数长度，如果无小数部分，返回 0。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop typeName
    
    __
    
    prop typeName: String
    
功能：获取列类型名称，如果在仓颉中有对应数据类型的定义，返回对应类型的 `toString` 函数的返回值；如果在仓颉中无对应数据类型的定义，由数据库驱动定义。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

## interface Connection
    
    __
    
    public interface Connection <: Resource {
        prop state: ConnectionState
        func createTransaction(): Transaction
        func getMetaData(): Map\<String, String\>
        func prepareStatement(sql: String): Statement
    }
    
功能：数据库连接接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-resource)

### prop state
    
    __
    
    prop state: ConnectionState
    
功能：描述与数据源连接的当前状态。

类型：[ConnectionState](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-connectionstate)

### func createTransaction\(\)
    
    __
    
    func createTransaction(): Transaction
    
功能：创建事务对象。

返回值：

  * [Transaction](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-transaction) \- 事务对象。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当已经处于事务状态，不支持并行事务时，抛出异常。

### func getMetaData\(\)
    
    __
    
    func getMetaData(): Map\<String, String\>
    
功能：返回连接到的数据源元数据。

返回值：

  * [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string), [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 数据源元数据。

### func prepareStatement\(String\)
    
    __
    
    func prepareStatement(sql: String): Statement
    
功能：通过传入的 sql 语句，返回一个预执行的 [Statement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-statement) 对象实例。

参数：

  * sql: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 预执行的 sql 语句，sql 语句的参数只支持 `?` 符号占位符。

返回值：

  * [Statement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-statement) \- 一个可以执行 sql 语句的实例对象。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当 sql 语句包含不认识的字符时，抛出异常。

## interface Datasource
    
    __
    
    public interface Datasource <: Resource {
        func connect(): Connection
        func setOption(key: String, value: String): Unit
    }
    
功能：数据源接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-resource)

### func connect\(\)
    
    __
    
    func connect(): Connection
    
功能：返回一个可用的连接。

返回值：

  * [Connection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-connection) \- 数据库连接实例。

### func setOption\(String, String\)
    
    __
    
    func setOption(key: String, value: String): Unit
    
功能：设置连接选项。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接选项名称。
  * value: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接选项的值。

## interface Driver
    
    __
    
    public interface Driver {
        prop name: String
        prop preferredPooling: Bool
        prop version: String
        func open(connectionString: String, opts: Array<(String, String)>): Datasource
    }
    
功能：数据库驱动接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

### prop name
    
    __
    
    prop name: String
    
功能：驱动名称。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop preferredPooling
    
    __
    
    prop preferredPooling: Bool
    
功能：指示驱动程序是否与连接池亲和。

当该属性为 `false` 时，不建议使用连接池进行管理。例如，对于某些数据库驱动（如 SQLite），连接池化的收益不明显，因此不建议使用连接池。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### prop version
    
    __
    
    prop version: String
    
功能：驱动版本。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### func open\(String, Array<\(String, String\)>\)
    
    __
    
    func open(connectionString: String, opts: Array<(String, String)>): Datasource
    
功能：通过 `connectionString` 和选项打开数据源。

参数：

  * connectionString: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 数据库连接字符串。
  * opts: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<\([String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string), [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)\)> \- key，value 的 tuple 数组，打开数据源的选项。

返回值：

  * [Datasource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-datasource) \- 数据源实例。

## interface QueryResult
    
    __
    
    public interface QueryResult <: Resource {
        prop columnInfos: Array\<ColumnInfo\>
        func next(values: Array\<SqlDbType\>): Bool
        func next(): Bool
        func get\<T\>(index: Int): T
        func getOrNull\<T\>(index: Int): ?T
    }
    
功能：执行 Select 语句产生的结果接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-resource)

### prop columnInfos
    
    __
    
    prop columnInfos: Array\<ColumnInfo\>
    
功能：返回结果集的列信息，比如列名，列类型，列长度，是否允许数据库 Null 值等。

类型：[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[ColumnInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-columninfo)>

### func get\<T\>\(Int\)
    
    __
    
    func get\<T\>(index: Int): T
    
功能：从结果集的当前行检索指定列的值。

返回值：

  * T - `T` 类型的实例。

### func getOrNull\<T\>\(Int\)
    
    __
    
    func getOrNull\<T\>(index: Int): ?T
    
功能：从结果集的当前行检索指定列的值，数据库列允许 SQL NULL。

返回值：

  * ?T - `T` 类型的实例，如果为空，返回 None。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 索引超出列范围，或者行数据未准备好时，抛出异常。

### func next\(\)
    
    __
    
    func next(): Bool
    
功能：向后移动一行，必须先调用一次 `next()` 才能移动到第一行，第二次调用移动到第二行，依此类推。当返回 `true` 时，驱动会在结果集的当前行填入数据，当返回 `false` 时结束，且不会修改结果集当前行的内容。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 下一行存在数据则返回 `true`，否则返回 `false`。

### func next\(Array\<SqlDbType\>\) \(deprecated\)
    
    __
    
    func next(values: Array\<SqlDbType\>): Bool
    
功能：向后移动一行，必须先调用一次 `next` 才能移动到第一行，第二次调用移动到第二行，依此类推。当返回 `true` 时，驱动会在 `values` 中填入行数据；当返回 `false` 时结束，且不会修改 `values` 的内容。

> **注意：**
> 
> 未来版本即将废弃不再使用，可使用 [next\(\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#func-next) 替代。

参数：

  * values: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)> \- sql 数据类型的数据列表。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 下一行存在数据则返回 `true`，否则返回 `false`。

## interface SqlDbType \(deprecated\)
    
    __
    
    public interface SqlDbType {
        prop name: String
    }
    
功能：所有 sql 数据类型的父类。

> **注意：**
> 
> 未来版本即将废弃不再使用。

要扩展用户定义的类型，请继承 [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated) 或 [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)。

> **说明：**
> 
> [SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated) 接口所有实现类型都必须具有公共 `value` 属性。每种 sql 数据类型实现类，同时满足以下条件：
> 
>   * 只有一个参数的构造函数，参数类型为 `T`（`T` 为仓颉语言支持的类型）。
>   * `public` 修饰的 `value` 属性，其类型必须上一条中使用的参数类型一致，其值为对应仓颉类型的值。
>   * 如果数据类型允许 `null` 值，继承 [SqlNullableDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqlnullabledbtype-deprecated)，`null` 值时，`value` 字段的值为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>.None。
> 

### prop name
    
    __
    
    prop name: String
    
功能：获取类型名称。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

## interface SqlNullableDbType \(deprecated\)
    
    __
    
    public interface SqlNullableDbType <: SqlDbType
    
功能：允许 `null` 值的 sql 数据类型父类。

> **注意：**
> 
> 未来版本即将废弃不再使用。

如果为 `null` 值，`value` 属性值为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont).None。

父类型：

  * SqlDbType \(deprecated\)

## interface Statement
    
    __
    
    public interface Statement <: Resource {
        prop parameterColumnInfos: Array\<ColumnInfo\>
        func query(params: Array\<SqlDbType\>): QueryResult
        func setOption(key: String, value: String): Unit
        func update(params: Array\<SqlDbType\>): UpdateResult
        func set\<T\>(index: Int, value: T): Unit
        func setNull(index: Int): Unit
        func update(): UpdateResult
        func query(): QueryResult
    }
    
功能：sql 语句预执行接口。

[Statement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-statement) 绑定了一个 [Connection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-connection) ，继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-resource)

### prop parameterColumnInfos
    
    __
    
    prop parameterColumnInfos: Array\<ColumnInfo\>
    
功能：预执行 sql 语句中，占位参数的列信息，比如列名，列类型，列长度，是否允许数据库 `Null` 值等。

类型：[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[ColumnInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-columninfo)>

### func query\(\)
    
    __
    
    func query(): QueryResult
    
功能：执行 sql 语句，得到查询结果。

返回值：

  * [QueryResult](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-queryresult) \- 查询结果。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断，服务器超时，参数个数不正确时，抛出异常。

### func query\(Array\<SqlDbType\>\) \(deprecated\)
    
    __
    
    func query(params: Array\<SqlDbType\>): QueryResult
    
功能：执行 sql 语句，得到查询结果。

> **注意：**
> 
> 未来版本即将废弃不再使用，可使用 query\(\) 替代。

参数：

  * params: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)> \- sql 数据类型的数据列表，用于替换 sql 语句中的 `?` 占位符。

返回值：

  * [QueryResult](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-queryresult) \- 查询结果。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断，服务器超时，参数个数不正确时，抛出异常。

### func set\<T\>\(Int, T\)
    
    __
    
    func set\<T\>(index: Int, value: T): Unit
    
功能：设置 sql 参数，将仓颉的数据类型转成数据库的数据类型。

参数：

  * index: [Int](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-int) \- 参数所在序列。
  * value: T - 参数值。

### func setNull\(Int\)
    
    __
    
    func setNull(index: Int): Unit
    
功能：将指定位置处的语句参数设置为 SQL NULL。

参数：

  * index: [Int](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-int) \- 参数所在序列。

### func setOption\(String, String\)
    
    __
    
    func setOption(key: String, value: String): Unit
    
功能：设置预执行 sql 语句选项。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接选项名称。
  * value: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接选项的值。

### func update\(Array\<SqlDbType\>\) \(deprecated\)
    
    __
    
    func update(params: Array\<SqlDbType\>): UpdateResult
    
功能：执行 sql 语句，得到更新结果。

> **注意：**
> 
> 未来版本即将废弃不再使用，可使用 update\(\) 替代。

参数：

  * params: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[SqlDbType \(deprecated\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-sqldbtype-deprecated)> \- sql 数据类型的数据列表，用于替换 sql 语句中的 `?` 占位符。

返回值：

  * [UpdateResult](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-updateresult) \- 更新结果。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断、服务器超时，参数个数不正确时，抛出异常。

### func update\(\)
    
    __
    
    func update(): UpdateResult
    
功能：执行 sql 语句，得到更新结果。

返回值：

  * [UpdateResult](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces.html#interface-updateresult) \- 更新结果。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断，服务器超时，参数个数不正确时，抛出异常。

## interface Transaction
    
    __
    
    public interface Transaction {
        mut prop accessMode: TransactionAccessMode
        mut prop deferrableMode: TransactionDeferrableMode
        mut prop isoLevel: TransactionIsoLevel
        func begin(): Unit
        func commit(): Unit
        func release(savePointName: String): Unit
        func rollback(): Unit
        func rollback(savePointName: String): Unit
        func save(savePointName: String): Unit
    }
    
功能：定义数据库事务的核心行为。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

### prop accessMode
    
    __
    
    mut prop accessMode: TransactionAccessMode
    
功能：获取数据库事务访问模式。

类型：[TransactionAccessMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionaccessmode)

### prop deferrableMode
    
    __
    
    mut prop deferrableMode: TransactionDeferrableMode
    
功能：获取数据库事务延迟模式。

类型：[TransactionDeferrableMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactiondeferrablemode)

### prop isoLevel
    
    __
    
    mut prop isoLevel: TransactionIsoLevel
    
功能：获取数据库事务隔离级别。

类型：[TransactionIsoLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionisolevel)

### func begin\(\)
    
    __
    
    func begin(): Unit
    
功能：开始数据库事务。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。

### func commit\(\)
    
    __
    
    func commit(): Unit
    
功能：提交数据库事务。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。

### func release\(String\)
    
    __
    
    func release(savePointName: String): Unit
    
功能：销毁先前在当前事务中定义的保存点。这允许系统在事务结束之前回收一些资源。

参数：

  * savePointName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 保存点名称。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。

### func rollback\(\)
    
    __
    
    func rollback(): Unit
    
功能：从挂起状态回滚事务。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。

### func rollback\(String\)
    
    __
    
    func rollback(savePointName: String): Unit
    
功能：回滚事务至指定保存点名称。

参数：

  * savePointName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 保存点名称。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。

### func save\(String\)
    
    __
    
    func save(savePointName: String): Unit
    
功能：在事务中创建一个指定名称的保存点，可用于回滚此保存点之后的事务。

参数：

  * savePointName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 保存点名称。

异常：

  * [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。

## interface UpdateResult
    
    __
    
    public interface UpdateResult {
        prop lastInsertId: Int64
        prop rowCount: Int64
    }
    
功能：执行 Insert、Update、Delete 语句产生的结果接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

### prop lastInsertId
    
    __
    
    prop lastInsertId: Int64
    
功能：执行 Insert 语句自动生成的最后 row ID ，如果不支持则 row ID 为 0。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop rowCount
    
    __
    
    prop rowCount: Int64
    
功能：执行 Insert、Update、Delete 语句影响的行数。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)