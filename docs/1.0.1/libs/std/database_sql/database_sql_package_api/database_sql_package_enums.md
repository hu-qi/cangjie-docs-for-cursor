
# 枚举

## enum ConnectionState
    
    __
    
    public enum ConnectionState <: Equatable\<ConnectionState\> {
        | Broken
        | Closed
        | Connecting
        | Connected
    }
    
功能：描述与数据源连接的当前状态。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<ConnectionState\>

### Broken
    
    __
    
    Broken
    
功能：表示与数据源的连接已中断。只有在 Connected 之后才可能发生这种情况。

### Closed
    
    __
    
    Closed
    
功能：表示连接对象已关闭。

### Connected
    
    __
    
    Connected
    
功能：表示连接对象已与数据源连接上。

### Connecting
    
    __
    
    Connecting
    
功能：表示连接对象正在与数据源连接。

### operator func \!=\(ConnectionState\)
    
    __
    
    public operator func !=(rhs: ConnectionState): Bool
    
功能：判断数据源连接状态是否不同。

参数：

  * rhs: [ConnectionState](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-connectionstate) \- 数据源连接状态。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 传入数据源连接状态与当前状态相同则返回 `false` ，否则返回 `true`。

### operator func ==\(ConnectionState\)
    
    __
    
    public operator func ==(rhs: ConnectionState): Bool
    
功能：判断数据源连接状态是否相同。

参数：

  * rhs: [ConnectionState](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-connectionstate) \- 数据源连接状态。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 传入数据源连接状态与当前状态相同则返回 `true` ，否则返回 `false`。

## enum TransactionAccessMode
    
    __
    
    public enum TransactionAccessMode <: ToString & Hashable & Equatable\<TransactionAccessMode\> {
        | ReadOnly
        | ReadWrite
        | Unspecified
    }
    
功能：事务读写模式。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<TransactionAccessMode\>

### ReadOnly
    
    __
    
    ReadOnly
    
功能：表示只读模式。

### ReadWrite
    
    __
    
    ReadWrite
    
功能：表示读 + 写模式。

### Unspecified
    
    __
    
    Unspecified
    
功能：表示未指定的事务读写模式。其行为取决于具体的数据库服务器。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取事务读写模式的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 事务读写模式的哈希值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回事务读写模式的字符串表示。枚举值和字符串的对应关系如下表所示：

枚举值| 字符串  
---|---  
ReadOnly| "Read Only"  
ReadWrite| "Read Write"  
Unspecified| "Unspecified"  
  
返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 事务读写模式的字符串。

### operator func \!=\(TransactionAccessMode\)
    
    __
    
    public operator func != (rhs: TransactionAccessMode): Bool
    
功能：判断两个 [TransactionAccessMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionaccessmode) 是否不相等。

参数：

  * rhs: [TransactionAccessMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionaccessmode) \- 传入 [TransactionAccessMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionaccessmode) 的枚举值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果不相等，则返回 `true`，否则返回 `false`。

### operator func ==\(TransactionAccessMode\)
    
    __
    
    public operator func == (rhs: TransactionAccessMode): Bool
    
功能：判断两个 [TransactionAccessMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionaccessmode) 是否相等。

参数：

  * rhs: [TransactionAccessMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionaccessmode) \- 传入 [TransactionAccessMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionaccessmode) 的枚举值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果相等，则返回 `true`，否则返回 `false`。

## enum TransactionDeferrableMode
    
    __
    
    public enum TransactionDeferrableMode <: ToString & Hashable & Equatable\<TransactionDeferrableMode\> {
        | Deferrable
        | NotDeferrable
        | Unspecified
    }
    
功能：事务的延迟模式。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<TransactionDeferrableMode\>

### Deferrable
    
    __
    
    Deferrable
    
功能：表示可延迟。

> **说明：**
> 
> 延迟事务是指在前滚阶段结束时未提交的事务，并且遇到了阻止其回滚的错误。因为事务无法回滚，所以它被延迟。

### NotDeferrable
    
    __
    
    NotDeferrable
    
功能：表示不可延迟。

### Unspecified
    
    __
    
    Unspecified
    
功能：未指定的事务延迟模式，其行为取决于具体的数据库服务器。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取事务延迟模式的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 事务延迟模式的哈希值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回事务延迟模式的字符串表示。枚举值和字符串的对应关系如下表所示：

枚举值| 字符串  
---|---  
Deferrable| "Deferrable"  
NotDeferrable| "Not Deferrable"  
Unspecified| "Unspecified"  
  
返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 事务延迟模式的字符串。

### operator func \!=\(TransactionDeferrableMode\)
    
    __
    
    public operator func != (rhs: TransactionDeferrableMode): Bool
    
功能：判断两个 [TransactionDeferrableMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactiondeferrablemode) 是否不相等。

参数：

  * rhs: [TransactionDeferrableMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactiondeferrablemode) \- 传入 [TransactionDeferrableMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactiondeferrablemode) 的枚举值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果不相等，则返回 `true`，否则返回 `false`。

### operator func ==\(TransactionDeferrableMode\)
    
    __
    
    public operator func == (rhs: TransactionDeferrableMode): Bool
    
功能：判断两个 [TransactionDeferrableMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactiondeferrablemode) 是否相等。

参数：

  * rhs: [TransactionDeferrableMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactiondeferrablemode) \- 传入 [TransactionDeferrableMode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactiondeferrablemode) 的枚举值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果相等，则返回 `true`，否则返回 `false`。

## enum TransactionIsoLevel
    
    __
    
    public enum TransactionIsoLevel <: ToString & Hashable & Equatable\<TransactionIsoLevel\> {
        | Chaos
        | Linearizable
        | ReadCommitted
        | ReadUncommitted
        | RepeatableRead
        | Serializable
        | Snapshot
        | Unspecified
    }
    
功能：事务隔离级别。

> **说明：**
> 
> 事务隔离定义了数据库系统中，一个事务中操作的结果在何时以何种方式对其他并发事务操作可见。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<TransactionIsoLevel\>

### Chaos
    
    __
    
    Chaos
    
功能：表示无法覆盖来自隔离级别更高的事务的挂起更改。

### Linearizable
    
    __
    
    Linearizable
    
功能：表示事务线性化。

> **说明：**
> 
> 区别于串行化（[Serializable]()），线性化主要强调单个对象上（即 db 行或 nosql 记录）的一组单个操作（比如一系列读写操作），线性化保证这些操作严格按真实时间顺序执行。比如当您查看单个对象上的操作子集时，线性化是相关的。

### ReadCommitted
    
    __
    
    ReadCommitted
    
功能：表示事务等待，直到其他事务写锁定的行被解锁；这将防止它读取任何“脏”数据。

### ReadUncommitted
    
    __
    
    ReadUncommitted
    
功能：表示事务之间不隔离。

### RepeatableRead
    
    __
    
    RepeatableRead
    
功能：表示事务可重复读。对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改。

### Serializable
    
    __
    
    Serializable
    
功能：表示事务可串行化。此隔离级别下，所有事务顺序执行，因此，脏读、不可重复读、幻读都不会出现。

### Snapshot
    
    __
    
    Snapshot
    
功能：表示快照隔离通过使用行版本控制避免了大多数锁定和阻止。

### Unspecified
    
    __
    
    Unspecified
    
功能：未指定的事务隔离级别，其行为取决于具体的数据库服务器。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取事务隔离级别的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 事务隔离级别的哈希值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回事务隔离级别的字符串表示。枚举值和字符串的对应关系如下表所示：

枚举值| 字符串  
---|---  
Chaos| "Chaos"  
Linearizable| "Linearizable"  
ReadCommitted| "Read Committed"  
ReadUncommitted| "Read Uncommitted"  
RepeatableRead| "Repeatable Read"  
Serializable| "Serializable"  
Snapshot| "Snapshot"  
Unspecified| "Unspecified"  
  
返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 事务隔离级别的字符串。

### operator func \!=\(TransactionIsoLevel\)
    
    __
    
    public operator func != (rhs: TransactionIsoLevel): Bool
    
功能：判断两个 [TransactionIsoLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionisolevel) 是否不相等。

参数：

  * rhs: [TransactionIsoLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionisolevel) \- 传入的 [TransactionIsoLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionisolevel)。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果不相等，则返回 `true`，否则返回 `false`。

### operator func ==\(TransactionIsoLevel\)
    
    __
    
    public operator func == (rhs: TransactionIsoLevel): Bool
    
功能：判断两个 [TransactionIsoLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionisolevel) 是否相等。

参数：

  * rhs: [TransactionIsoLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionisolevel) \- 传入的 [TransactionIsoLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums.html#enum-transactionisolevel)。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果相等，则返回 `true`，否则返回 `false`。