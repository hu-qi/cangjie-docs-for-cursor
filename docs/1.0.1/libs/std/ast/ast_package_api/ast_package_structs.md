
# 结构体

## struct Position
    
    __
    
    public struct Position <: ToBytes {
        public let column: Int32
        public let fileID: UInt32
        public let line: Int32
        public init()
        public init(fileID: UInt32, line: Int32, column: Int32)
    }
    
功能：表示位置信息的数据结构，包含文件ID，行号和列号。

父类型：

  * [ToBytes](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_interfaces.html#interface-tobytes)

### let column
    
    __
    
    public let column: Int32
    
功能：获取列号信息。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### let fileID
    
    __
    
    public let fileID: UInt32
    
功能：获取文件 ID 信息。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

### let line
    
    __
    
    public let line: Int32
    
功能：获取行号信息。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 实例，其中 `fileID`、`line`、`column` 成员变量均为 `0`。

### init\(UInt32, Int32, Int32\)
    
    __
    
    public init(fileID: UInt32, line: Int32, column: Int32)
    
功能：构造一个 [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 实例。

参数：

  * fileID: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 文件ID。
  * line: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 行号。
  * column: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 列号。

### func dump\(\)
    
    __
    
    public func dump(): Unit
    
功能：将 [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 的信息打印出来。

### func isEmpty\(\)
    
    __
    
    public func isEmpty(): Bool
    
功能：判断行号和列号是否同时为 `0`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当行号和列号为 `0` 时返回 true。

### func toBytes\(\)
    
    __
    
    public func toBytes(): Array\<UInt8\>
    
功能：Position 类型的序列化。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 序列化后的字节序列。

### operator func \!=\(Position\)
    
    __
    
    public operator func !=(r: Position): Bool
    
功能：比较两个 [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 实例是否不等。

参数：

  * r: [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) \- 与当前位置比较的另一个位置实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当两个 [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 实例不完全相等时返回 true。

### operator func ==\(Position\)
    
    __
    
    public operator func ==(r: Position): Bool
    
功能：比较两个 [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 实例是否相等。

参数：

  * r: [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) \- 与当前位置比较的另一个位置实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当两个 [Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 实例完全相等时返回 true。

## struct Token
    
    __
    
    public struct Token <: ToBytes {
        public let kind: TokenKind
        public let pos: Position
        public let value: String
        public var delimiterNum: UInt16 = 1
        public init()
        public init(kind: TokenKind)
        public init(kind: TokenKind, value: String)
    }
    
功能：词法单元类型。

词法单元是构成仓颉源码的最小单元，一组合法的词法单元列表经过语法解析后可生成一个语法树节点。

父类型：

  * [ToBytes](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_interfaces.html#interface-tobytes)

### let kind
    
    __
    
    public let kind: TokenKind
    
功能：词法单元的类型。词法单元类型有关键字、标识符、运算符、常量值等，具体见 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 章节。

类型：[TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind)

### let pos
    
    __
    
    public let pos: Position
    
功能：词法单元在源码中的位置信息。

类型：[Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position)

### let value
    
    __
    
    public let value: String
    
功能：词法单元的字面量值。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### var delimiterNum
    
    __
    
    public var delimiterNum: UInt16 = 1
    
功能：多行字符串的 '\#' 符号个数。

类型：[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象，其中 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 类型为 `ILLEGAL`，`value` 为空字符串，[Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position) 成员变量均为 0。

### init\(TokenKind\)
    
    __
    
    public init(kind: TokenKind)
    
功能：根据词法单元类型，构造一个默认的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

参数：

  * kind: [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) \- 构建词法单元的类型。

### init\(TokenKind, String\)
    
    __
    
    public init(kind: TokenKind, value: String)
    
功能：根据词法单元类型 `kind` 和词法单元值 `value`，构造一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

参数：

  * kind: [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) \- 要构建词法单元的类型。
  * value: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 要构建词法单元的 `value` 值。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当输入的 `kind` 与 `value` 不匹配时，抛出异常点。

### func addPosition\(UInt32, Int32, Int32\)
    
    __
    
    public func addPosition(fileID: UInt32, line: Int32, colum: Int32): Token
    
功能：补充词法单元的位置信息。

参数：

  * fileID: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 所在的 fileID。
  * line: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 所在的行号。
  * colum: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 所在的列号。

返回值：

  * [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 补充完位置信息后的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

### func dump\(\)
    
    __
    
    public func dump(): Unit
    
功能：将 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的信息打印出来。

### func toBytes\(\)
    
    __
    
    public func toBytes(): Array\<UInt8\>
    
功能：Token 类型的序列化。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 序列化后的字节序列。

### operator func \!=\(Token\)
    
    __
    
    public operator func !=(r: Token): Bool
    
功能：判断两个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象是否不相等。

参数：

  * r: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 待比较的另一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 两个词法单元的种类 `ID`、值、位置不相同时，返回 true。

### operator func +\(Token\)
    
    __
    
    public operator func +(r: Token): Tokens
    
功能：使用当前 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 添加一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 以获取新的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

参数：

  * r: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 待添加的另一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 添加新的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 后的词法单元集合。

### operator func +\(Tokens\)
    
    __
    
    public operator func +(r: Tokens): Tokens
    
功能：使用当前 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 添加一个 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 以获取新的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

参数：

  * r: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待添加的另一组 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象集合。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 添加新的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 后的词法单元集合。

### operator func ==\(Token\)
    
    __
    
    public operator func ==(r: Token): Bool
    
功能：判断两个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象是否相等。

参数：

  * r: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 待比较的另一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 两个词法单元的种类 `ID`、值、位置相同时，返回 true。