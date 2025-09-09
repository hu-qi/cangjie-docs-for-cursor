
# 异常类

## class SqlException
    
    __
    
    public open class SqlException <: Exception {
        public init()
        public init(message: String)
        public init(message: String, sqlState: String, errorCode: Int64)
    }
    
功能：用于处理 sql 相关的异常。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### prop errorCode
    
    __
    
    public prop errorCode: Int64
    
功能：数据库供应商返回的整数错误代码。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop message
    
    __
    
    public override prop message: String
    
功能：获取异常信息字符串。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop sqlState
    
    __
    
    public prop sqlState: String
    
功能：长度为五个字符的字符串，是数据库系统返回的最后执行的 sql 语句状态。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### init\(\)
    
    __
    
    public init()
    
功能：无参构造函数。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

### init\(String, String, Int64\)
    
    __
    
    public init(message: String, sqlState: String, errorCode: Int64)
    
功能：根据异常信息、SQL语句状态、错误码信息，创建 [SqlException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html#class-sqlexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。
  * sqlState: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 长度为五个字符的字符串，是数据库系统返回的最后执行的 sql 语句状态。
  * errorCode: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 数据库供应商返回的整数错误代码。